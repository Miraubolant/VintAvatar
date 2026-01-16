import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './useAuth';
import confetti from 'canvas-confetti';
import { generateSlug } from '../utils/slugify';

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
      // 1. Fetch the generation data to get the title for slug generation
      const { data: generationData, error: fetchError } = await supabase
        .from('usage_tracking')
        .select('metadata')
        .eq('id', generationId)
        .eq('user_id', user.id)
        .single();

      if (fetchError) throw fetchError;

      // 2. Generate slug from title
      const title = generationData?.metadata?.vinted_listing?.title ||
                    generationData?.metadata?.generation_config?.clothingType ||
                    'photo';
      const slug = generateSlug(title, generationId);

      // 3. Update metadata with slug and mark as public
      const updatedMetadata = {
        ...generationData?.metadata,
        slug
      };

      const { error: updateError } = await supabase
        .from('usage_tracking')
        .update({
          is_public: true,
          metadata: updatedMetadata
        })
        .eq('id', generationId)
        .eq('user_id', user.id);

      if (updateError) throw updateError;

      // Note: Server-side trigger handles:
      // - Incrementing gallery_shares_used in profile
      // - Adding +1 credit to subscription
      // - Enforcing max 2 shares quota

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
