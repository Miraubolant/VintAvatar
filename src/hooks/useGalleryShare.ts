import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './useAuth';
import confetti from 'canvas-confetti';

const MAX_GALLERY_SHARES = 2;

interface UseGalleryShareResult {
  canShare: boolean;
  sharesRemaining: number;
  hasEverPurchased: boolean;
  isSharing: boolean;
  shareToGallery: (generationId: string) => Promise<boolean>;
  checkIfAlreadyShared: (generationId: string) => Promise<boolean>;
  loading: boolean;
}

export const useGalleryShare = (): UseGalleryShareResult => {
  const { user } = useAuth();
  const [sharesUsed, setSharesUsed] = useState(0);
  const [hasEverPurchased, setHasEverPurchased] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch user's gallery share status
  useEffect(() => {
    const fetchShareStatus = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        // Get profile with gallery_shares_used
        const { data: profile } = await supabase
          .from('profiles')
          .select('gallery_shares_used')
          .eq('id', user.id)
          .single();

        if (profile) {
          setSharesUsed(profile.gallery_shares_used || 0);
        }

        // Everyone can share (generating requires purchase anyway)
        setHasEverPurchased(true);
      } catch (err) {
        console.error('Error fetching gallery share status:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchShareStatus();
  }, [user]);

  // Check if a specific generation is already shared
  const checkIfAlreadyShared = useCallback(async (generationId: string): Promise<boolean> => {
    if (!user) return false;

    try {
      const { data } = await supabase
        .from('usage_tracking')
        .select('is_public')
        .eq('id', generationId)
        .eq('user_id', user.id)
        .single();

      return data?.is_public === true;
    } catch {
      return false;
    }
  }, [user]);

  // Trigger confetti celebration
  const triggerConfetti = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 9999,
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ['#09B1BA', '#FFB3BA', '#B3F2DD'],
    });
    fire(0.2, {
      spread: 60,
      colors: ['#09B1BA', '#FFB3BA', '#B3F2DD'],
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      colors: ['#09B1BA', '#FFB3BA', '#B3F2DD'],
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      colors: ['#09B1BA', '#FFB3BA', '#B3F2DD'],
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
      colors: ['#09B1BA', '#FFB3BA', '#B3F2DD'],
    });
  };

  // Share a generation to the gallery
  const shareToGallery = useCallback(async (generationId: string): Promise<boolean> => {
    if (!user || !hasEverPurchased || sharesUsed >= MAX_GALLERY_SHARES) {
      return false;
    }

    setIsSharing(true);

    try {
      // 1. Mark generation as public
      const { error: updateError } = await supabase
        .from('usage_tracking')
        .update({ is_public: true })
        .eq('id', generationId)
        .eq('user_id', user.id);

      if (updateError) throw updateError;

      // 2. Increment gallery_shares_used in profile
      const { error: profileError } = await supabase
        .from('profiles')
        .update({ gallery_shares_used: sharesUsed + 1 })
        .eq('id', user.id);

      if (profileError) throw profileError;

      // 3. Add 1 credit to user's subscription
      const { data: subscription } = await supabase
        .from('subscriptions')
        .select('credits_remaining')
        .eq('user_id', user.id)
        .single();

      if (subscription) {
        await supabase
          .from('subscriptions')
          .update({ credits_remaining: (subscription.credits_remaining || 0) + 1 })
          .eq('user_id', user.id);
      }

      // 4. Update local state
      setSharesUsed(prev => prev + 1);

      // 5. Trigger confetti celebration
      triggerConfetti();

      // 6. Dispatch events to refresh data
      window.dispatchEvent(new Event('subscription-updated'));
      window.dispatchEvent(new Event('gallery-updated'));

      return true;
    } catch (err) {
      console.error('Error sharing to gallery:', err);
      return false;
    } finally {
      setIsSharing(false);
    }
  }, [user, hasEverPurchased, sharesUsed]);

  return {
    canShare: hasEverPurchased && sharesUsed < MAX_GALLERY_SHARES,
    sharesRemaining: MAX_GALLERY_SHARES - sharesUsed,
    hasEverPurchased,
    isSharing,
    shareToGallery,
    checkIfAlreadyShared,
    loading,
  };
};
