import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import Stripe from 'https://esm.sh/stripe@14.21.0'

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') ?? '', {
  apiVersion: '2023-10-16',
})

const supabaseUrl = Deno.env.get('SUPABASE_URL') || 'https://iroihdwursjjkadtbyye.supabase.co'
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const supabase = createClient(supabaseUrl, supabaseServiceKey)

serve(async (req) => {
  const signature = req.headers.get('stripe-signature')
  const endpointSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET')!

  if (!signature || !endpointSecret) {
    return new Response('Missing signature or webhook secret', { status: 400 })
  }

  try {
    const body = await req.text()
    const event = await stripe.webhooks.constructEventAsync(body, signature, endpointSecret)


    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        await handleCheckoutCompleted(session)
        break
      }
      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription
        await handleSubscriptionUpdated(subscription)
        break
      }
      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription
        await handleSubscriptionDeleted(subscription)
        break
      }
      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as Stripe.Invoice
        await handleInvoicePaymentSucceeded(invoice)
        break
      }
    }

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (err) {
    return new Response('Webhook error', { status: 400 })
  }
})

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const { customer, metadata } = session
  const userId = metadata?.userId
  const planName = metadata?.planName

  if (!userId) {
    return
  }

  try {
    
    // Determine plan details from the line items
    let priceId = null
    try {
      const lineItems = await stripe.checkout.sessions.listLineItems(session.id)
      priceId = lineItems.data[0]?.price?.id
    } catch (stripeError) {
      // Fallback: try to get price info from session data if available
    }

    let subscriptionUpdate: any = {
      stripe_customer_id: customer || null,
      status: 'active',
      updated_at: new Date().toISOString(),
    }

    // Handle different pricing tiers
    if (priceId === 'price_1S7FekKHJNJEt6GqWfZZS2e7') {
      // Pack 10 crédits
      subscriptionUpdate.plan_type = 'credits'
      subscriptionUpdate.credits_remaining = 10
    } else if (priceId === 'price_1S7FfWKHJNJEt6GqQ5EnxyOy') {
      // Pack 25 crédits
      subscriptionUpdate.plan_type = 'credits'
      subscriptionUpdate.credits_remaining = 25
    } else if (priceId === 'price_1S7FgLKHJNJEt6GqNUJvmOZo') {
      // Abonnement mensuel
      subscriptionUpdate.plan_type = 'monthly'
      subscriptionUpdate.monthly_limit = 40
      subscriptionUpdate.monthly_generations_used = 0
      subscriptionUpdate.stripe_subscription_id = session.subscription
      subscriptionUpdate.current_period_start = new Date().toISOString()
      subscriptionUpdate.current_period_end = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
    }

    
    if (subscriptionUpdate.plan_type === 'credits') {
      // For credit packs, always insert a new subscription
      const { error, data } = await supabase
        .from('subscriptions')
        .insert({
          user_id: userId,
          ...subscriptionUpdate
        })

      if (error) {
        throw error
      } else {
      }
    } else {
      // For monthly subscription, upsert to update existing or create new
      const { error, data } = await supabase
        .from('subscriptions')
        .upsert({
          user_id: userId,
          ...subscriptionUpdate
        })

      if (error) {
        throw error
      } else {
      }
    }

    // Handle referral bonuses
    await handleReferralBonus(userId)
  } catch (error) {
    throw error
  }
}

async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  try {
    // Determine the correct status based on cancel_at_period_end
    // If subscription is set to cancel at period end, mark it as canceled in our DB
    // This allows us to track canceled subscriptions that are still active until period end
    const status = subscription.cancel_at_period_end ? 'canceled' : subscription.status as any;
    
    
    const { error } = await supabase
      .from('subscriptions')
      .update({
        status: status,
        current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
        current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
        updated_at: new Date().toISOString(),
      })
      .eq('stripe_subscription_id', subscription.id)

    if (error) {
    }
  } catch (error) {
  }
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  try {
    const { error } = await supabase
      .from('subscriptions')
      .update({
        status: 'canceled',
        updated_at: new Date().toISOString(),
      })
      .eq('stripe_subscription_id', subscription.id)

    if (error) {
    }
  } catch (error) {
  }
}

async function handleInvoicePaymentSucceeded(invoice: Stripe.Invoice) {
  if (!invoice.subscription) return

  try {
    // Reset monthly usage for recurring subscription
    const { error } = await supabase
      .from('subscriptions')
      .update({
        monthly_generations_used: 0,
        current_period_start: new Date(invoice.period_start * 1000).toISOString(),
        current_period_end: new Date(invoice.period_end * 1000).toISOString(),
        updated_at: new Date().toISOString(),
      })
      .eq('stripe_subscription_id', invoice.subscription)

    if (error) {
    }
  } catch (error) {
  }
}

async function handleReferralBonus(userId: string) {
  try {
    
    // Check if user was referred by someone
    const { data: referralData, error: referralError } = await supabase
      .from('affiliations')
      .select('*')
      .eq('referred_id', userId)
      .eq('status', 'pending')
      .single()

    if (referralError) {
      return
    }

    if (!referralData) {
      return
    }


    // Give 1 free generation to both referrer and referred user
    const { error: referrerError } = await supabase
      .from('subscriptions')
      .update({ 
        credits_remaining: supabase.raw('credits_remaining + 1'),
        updated_at: new Date().toISOString()
      })
      .eq('user_id', referralData.referrer_id)
      .eq('plan_type', 'credits')
      .order('created_at', { ascending: false })
      .limit(1)

    if (referrerError) {
    }

    const { error: referredError } = await supabase
      .from('subscriptions')
      .update({ 
        credits_remaining: supabase.raw('credits_remaining + 1'),
        updated_at: new Date().toISOString()
      })
      .eq('user_id', userId)
      .eq('plan_type', 'credits')
      .order('created_at', { ascending: false })
      .limit(1)

    if (referredError) {
    }

    // Mark referral as completed
    const { error: updateError } = await supabase
      .from('affiliations')
      .update({
        status: 'completed',
        bonus_granted: true,
        completed_at: new Date().toISOString()
      })
      .eq('id', referralData.id)

    if (updateError) {
    }

  } catch (error) {
  }
}