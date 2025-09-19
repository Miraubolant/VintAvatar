import { useState, useEffect, useRef } from 'react';
import { supabase, Subscription } from '../lib/supabase';
import { useAuth } from './useAuth';
import { requestCache } from '../lib/requestCache';

export const useSubscription = () => {
  const { user } = useAuth();
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);

  // Prevent duplicate requests
  const fetchingRef = useRef<Promise<void> | null>(null);
  const lastUserIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (!user) {
      setSubscriptions([]);
      setLoading(false);
      lastUserIdRef.current = null;
      fetchingRef.current = null;
      return;
    }

    // Only fetch if user changed
    if (lastUserIdRef.current !== user.id) {
      lastUserIdRef.current = user.id;
      fetchSubscriptions();
    }
  }, [user]);

  const fetchSubscriptions = async () => {
    if (!user) return;

    // Prevent duplicate requests
    if (fetchingRef.current) {
      await fetchingRef.current;
      return;
    }

    try {
      fetchingRef.current = (async () => {
        const subscriptionsData = await requestCache.get(
          `subscriptions-${user.id}`,
          async () => {
            const { data, error } = await supabase
              .from('subscriptions')
              .select('*')
              .eq('user_id', user.id)
              .order('created_at', { ascending: false });

            if (error) {
              throw error;
            }

            return data || [];
          },
          20000 // 20 second cache for subscriptions
        );

        setSubscriptions(subscriptionsData);
      })();

      await fetchingRef.current;
    } catch (error) {
      console.error('Error fetching subscriptions:', error);
    } finally {
      setLoading(false);
      fetchingRef.current = null;
    }
  };

  // Utility methods for managing multiple subscriptions
  const getTotalCredits = () => {
    return subscriptions
      .filter(sub => sub.plan_type === 'credits' && sub.status === 'active')
      .reduce((total, sub) => total + sub.credits_remaining, 0);
  };

  const getMonthlySubscription = () => {
    return subscriptions.find(sub => 
      sub.plan_type === 'monthly' && 
      (sub.status === 'active' || (sub.current_period_end && sub.current_period_end > new Date().toISOString()))
    ) || null;
  };

  const getCreditPacks = () => {
    return subscriptions.filter(sub => 
      sub.plan_type === 'credits' && 
      sub.status === 'active' && 
      sub.credits_remaining > 0
    );
  };

  const canGenerate = () => {
    // Priority 1: Check if we have credits
    const totalCredits = getTotalCredits();
    if (totalCredits > 0) {
      return true;
    }

    // Priority 2: Check monthly subscription
    const monthlySubscription = getMonthlySubscription();
    if (monthlySubscription) {
      return monthlySubscription.monthly_generations_used < monthlySubscription.monthly_limit;
    }

    return false;
  };

  const useCredit = async () => {
    if (!user || !canGenerate()) return false;

    try {
      // Priority 1: Use credits first
      const totalCredits = getTotalCredits();
      if (totalCredits > 0) {
        // Find the first pack with credits and use one
        const creditPack = getCreditPacks()[0];
        if (creditPack) {
          const { error: updateError } = await supabase
            .from('subscriptions')
            .update({ credits_remaining: creditPack.credits_remaining - 1 })
            .eq('id', creditPack.id);

          if (updateError) throw updateError;
        }
      } else {
        // Priority 2: Use monthly subscription
        const monthlySubscription = getMonthlySubscription();
        if (monthlySubscription) {
          const { error: updateError } = await supabase
            .from('subscriptions')
            .update({ 
              monthly_generations_used: monthlySubscription.monthly_generations_used + 1 
            })
            .eq('id', monthlySubscription.id);

          if (updateError) throw updateError;
        }
      }

      // Track usage
      const { error: trackingError } = await supabase
        .from('usage_tracking')
        .insert({
          user_id: user.id,
          generation_type: 'avatar',
          credits_used: 1,
        });

      if (trackingError) throw trackingError;

      // Clear cache and refresh subscription data
      if (user) {
        requestCache.clear(`subscriptions-${user.id}`);
      }
      await fetchSubscriptions();
      return true;
    } catch (error) {
      console.error('Error using credit:', error);
      return false;
    }
  };

  const cancelMonthlySubscription = async () => {
    if (!user) {
      throw new Error('Utilisateur non connecté');
    }

    const monthlySubscription = getMonthlySubscription();
    if (!monthlySubscription) {
      throw new Error('Pas d\'abonnement mensuel actif');
    }

    try {
      // Get the current session for authentication
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        throw new Error('Session expirée');
      }

      const { data, error } = await supabase.functions.invoke('cancel-subscription', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) throw error;

      // Clear cache and refresh subscription data
      if (user) {
        requestCache.clear(`subscriptions-${user.id}`);
      }
      await fetchSubscriptions();
      
      return data;
    } catch (error: any) {
      console.error('Error canceling subscription:', error);
      throw new Error(error.message || 'Erreur lors de la résiliation');
    }
  };

  return {
    // Legacy support - returns first subscription for backward compatibility
    subscription: subscriptions[0] || null,
    // New multi-subscription support
    subscriptions,
    totalCredits: getTotalCredits(),
    monthlySubscription: getMonthlySubscription(),
    creditPacks: getCreditPacks(),
    loading,
    canGenerate: canGenerate(),
    useCredit,
    refetch: fetchSubscriptions,
    cancelMonthlySubscription,
    // Utility methods
    getTotalCredits,
    getMonthlySubscription,
    getCreditPacks,
  };
};