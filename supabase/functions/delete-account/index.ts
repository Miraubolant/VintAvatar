import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import Stripe from 'https://esm.sh/stripe@14.21.0'

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') ?? '', {
  apiVersion: '2023-10-16',
})

const supabaseUrl = Deno.env.get('SUPABASE_URL') || 'https://iroihdwursjjkadtbyye.supabase.co'
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const supabase = createClient(supabaseUrl, supabaseServiceKey)

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Get the JWT token from the request
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: 'Missing authorization header' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Verify the user JWT
    const token = authHeader.replace('Bearer ', '')
    const { data: { user }, error: authError } = await supabase.auth.getUser(token)
    
    if (authError || !user) {
      return new Response(
        JSON.stringify({ error: 'Invalid token' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }


    // Step 1: Cancel all active Stripe subscriptions
    const { data: subscriptions } = await supabase
      .from('subscriptions')
      .select('stripe_subscription_id')
      .eq('user_id', user.id)
      .eq('status', 'active')
      .not('stripe_subscription_id', 'is', null)

    if (subscriptions && subscriptions.length > 0) {
      for (const sub of subscriptions) {
        if (sub.stripe_subscription_id && sub.stripe_subscription_id !== 'test_subscription') {
          try {
            await stripe.subscriptions.cancel(sub.stripe_subscription_id)
          } catch (stripeError) {
            // Continue with deletion even if Stripe cancellation fails
          }
        }
      }
    }

    // Step 2: Delete user data from tables (order matters for foreign keys)
    
    // Delete usage tracking
    const { error: usageError } = await supabase
      .from('usage_tracking')
      .delete()
      .eq('user_id', user.id)
    
    if (usageError) {
    }

    // Delete subscriptions
    const { error: subError } = await supabase
      .from('subscriptions')
      .delete()
      .eq('user_id', user.id)
    
    if (subError) {
    }

    // Delete profile
    const { error: profileError } = await supabase
      .from('profiles')
      .delete()
      .eq('id', user.id)
    
    if (profileError) {
    }

    // Step 3: Delete storage objects
    // Delete from original-images bucket
    const { data: originalImages } = await supabase.storage
      .from('original-images')
      .list(user.id)
    
    if (originalImages && originalImages.length > 0) {
      const filesToDelete = originalImages.map(file => `${user.id}/${file.name}`)
      await supabase.storage
        .from('original-images')
        .remove(filesToDelete)
    }

    // Delete from generated-avatars bucket
    const { data: generatedImages } = await supabase.storage
      .from('generated-avatars')
      .list(user.id)
    
    if (generatedImages && generatedImages.length > 0) {
      const filesToDelete = generatedImages.map(file => `${user.id}/${file.name}`)
      await supabase.storage
        .from('generated-avatars')
        .remove(filesToDelete)
    }

    // Step 4: Delete the auth user account
    // This must be done last as it invalidates the session
    const { error: deleteAuthError } = await supabase.auth.admin.deleteUser(user.id)
    
    if (deleteAuthError) {
      return new Response(
        JSON.stringify({ 
          error: 'Failed to delete auth account', 
          details: deleteAuthError.message 
        }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }


    return new Response(
      JSON.stringify({
        success: true,
        message: 'Account successfully deleted',
        deleted_at: new Date().toISOString()
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        details: error.message
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})