import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './useAuth';

export interface SubscriptionInfo {
  id: string;
  plan_type: 'monthly' | 'credits';
  credits_remaining: number;
  monthly_generations_used: number;
  monthly_limit: number;
  status: string;
  stripe_subscription_id: string | null;
  created_at: string;
  current_period_end: string | null;
}

export interface AccountStats {
  // Profile info
  email: string;
  full_name: string | null;
  created_at: string;
  
  // All subscriptions
  subscriptions: SubscriptionInfo[];
  
  // Aggregated subscription info
  total_credits_remaining: number;
  has_active_monthly: boolean;
  monthly_generations_used: number;
  monthly_limit: number;
  
  // Usage statistics
  total_generations: number;
  this_month_generations: number;
  last_generation_date: string | null;
  usage_history: Array<{
    date: string;
    generation_type: string;
    credits_used: number;
  }>;
}

export const useAccountStats = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState<AccountStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      setStats(null);
      setLoading(false);
      return;
    }

    fetchAccountStats();
  }, [user]);

  const fetchAccountStats = async () => {
    if (!user) return;

    try {
      setLoading(true);
      setError(null);

      // Fetch profile data (handle potential duplicates)
      const { data: profiles, error: profileError } = await supabase
        .from('profiles')
        .select('email, full_name, created_at')
        .eq('id', user.id)
        .order('created_at', { ascending: false });

      // Handle profile data with fallback
      let profileData;
      if (profileError) {
        // console.error('Profile error:', profileError);
        throw profileError;
      } else if (!profiles || profiles.length === 0) {
        // No profile found, create default profile data from user
        profileData = {
          email: user.email || '',
          full_name: user.user_metadata?.full_name || null,
          created_at: user.created_at
        };
        // console.log('No profile found, using fallback profile data:', profileData);
      } else {
        // Use the most recent profile (first in ordered results)
        profileData = profiles[0];
        if (profiles.length > 1) {
          // console.warn(`Found ${profiles.length} profiles for user ${user.id}, using the most recent one`);
        }
      }

      // Fetch all subscription data (including canceled ones that might still be valid)
      const { data: subscriptions, error: subscriptionError } = await supabase
        .from('subscriptions')
        .select('id, plan_type, credits_remaining, monthly_generations_used, monthly_limit, status, stripe_subscription_id, created_at, current_period_end')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (subscriptionError) throw subscriptionError;

      // Process all subscriptions to get aggregated data
      const subscriptionInfos: SubscriptionInfo[] = subscriptions || [];
      
      // Aggregate credit packs (only active ones with remaining credits)
      const totalCreditsRemaining = subscriptionInfos
        .filter(sub => sub.plan_type === 'credits' && sub.status === 'active')
        .reduce((total, sub) => total + sub.credits_remaining, 0);
      
      // Find active monthly subscription (active or canceled but still valid)
      const monthlySubscription = subscriptionInfos.find(sub => 
        sub.plan_type === 'monthly' && 
        (sub.status === 'active' || (sub.current_period_end && sub.current_period_end > new Date().toISOString()))
      );
      const hasActiveMonthly = Boolean(monthlySubscription);
      const monthlyGenerationsUsed = monthlySubscription?.monthly_generations_used || 0;
      const monthlyLimit = monthlySubscription?.monthly_limit || 0;

      // Fetch total generations count
      const { count: totalGenerations, error: countError } = await supabase
        .from('usage_tracking')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user.id);

      if (countError) throw countError;

      // Fetch this month's generations
      const startOfMonth = new Date();
      startOfMonth.setDate(1);
      startOfMonth.setHours(0, 0, 0, 0);

      const { count: thisMonthGenerations, error: monthCountError } = await supabase
        .from('usage_tracking')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user.id)
        .gte('created_at', startOfMonth.toISOString());

      if (monthCountError) throw monthCountError;

      // Fetch last generation
      const { data: lastGenerationArray, error: lastGenError } = await supabase
        .from('usage_tracking')
        .select('created_at')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(1);

      // Handle case where there might be no generations yet
      const lastGeneration = lastGenerationArray && lastGenerationArray.length > 0 
        ? lastGenerationArray[0] 
        : null;

      // Fetch recent usage history (last 50 generations for pagination)
      const { data: usageHistory, error: historyError } = await supabase
        .from('usage_tracking')
        .select('created_at, generation_type, credits_used')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(50);

      if (historyError) throw historyError;

      // Compile stats
      const accountStats: AccountStats = {
        email: profileData.email,
        full_name: profileData.full_name,
        created_at: profileData.created_at,
        subscriptions: subscriptionInfos,
        total_credits_remaining: totalCreditsRemaining,
        has_active_monthly: hasActiveMonthly,
        monthly_generations_used: monthlyGenerationsUsed,
        monthly_limit: monthlyLimit,
        total_generations: totalGenerations || 0,
        this_month_generations: thisMonthGenerations || 0,
        last_generation_date: lastGeneration?.created_at || null,
        usage_history: (usageHistory || []).map(item => ({
          date: item.created_at,
          generation_type: item.generation_type,
          credits_used: item.credits_used,
        })),
      };

      setStats(accountStats);
    } catch (error) {
      // console.error('Error fetching account stats:', error);
      setError('Erreur lors du chargement des statistiques');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return {
    stats,
    loading,
    error,
    refetch: fetchAccountStats,
    formatDate,
    formatDateTime,
  };
};