import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './useAuth';

interface Affiliation {
  id: string;
  user_id: string;
  referral_code: string;
  referred_by_code: string | null;
  referred_by_user_id: string | null;
  status: 'pending' | 'completed';
  bonus_awarded: boolean;
  created_at: string;
  updated_at: string;
}

export const useAffiliation = () => {
  const { user } = useAuth();
  const [affiliation, setAffiliation] = useState<Affiliation | null>(null);
  const [referrals, setReferrals] = useState<Affiliation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setAffiliation(null);
      setReferrals([]);
      setLoading(false);
      return;
    }

    fetchAffiliationData();
  }, [user]);

  const fetchAffiliationData = async () => {
    if (!user) return;

    try {
      // Get user's own affiliation record (their referral code)
      const { data: affiliationData, error: affiliationError } = await supabase
        .from('affiliations')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (affiliationError && affiliationError.code !== 'PGRST116') {
        // console.error('Error fetching affiliation:', affiliationError);
      } else if (affiliationData) {
        setAffiliation(affiliationData);
      }

      // Get successful referrals made by this user (people who used their code)
      const { data: referralsData, error: referralsError } = await supabase
        .from('affiliations')
        .select('*')
        .eq('referred_by_user_id', user.id)
        .eq('status', 'completed')
        .order('updated_at', { ascending: false });

      if (referralsError) {
        // console.error('Error fetching referrals:', referralsError);
      } else {
        setReferrals(referralsData || []);
      }
    } catch (error) {
      // console.error('Error in fetchAffiliationData:', error);
    } finally {
      setLoading(false);
    }
  };

  const getReferralLink = () => {
    if (!affiliation) return '';
    return `${window.location.origin}/?ref=${affiliation.referral_code}`;
  };

  const getCompletedReferralsCount = () => {
    return referrals.length;
  };

  const copyReferralLink = async () => {
    const link = getReferralLink();
    try {
      await navigator.clipboard.writeText(link);
      return true;
    } catch (error) {
      // console.error('Error copying to clipboard:', error);
      return false;
    }
  };

  return {
    affiliation,
    referrals,
    loading,
    referralCode: affiliation?.referral_code || '',
    referralLink: getReferralLink(),
    completedReferralsCount: getCompletedReferralsCount(),
    copyReferralLink,
    refetch: fetchAffiliationData,
  };
};