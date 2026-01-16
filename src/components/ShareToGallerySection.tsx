import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Share2, Gift, Check, Lock, Image, AlertCircle } from 'lucide-react';
import { useGalleryShare } from '../hooks/useGalleryShare';

interface ShareToGallerySectionProps {
  generationId: string;
}

export const ShareToGallerySection: React.FC<ShareToGallerySectionProps> = ({ generationId }) => {
  const { t } = useTranslation('result');
  const {
    canShare,
    sharesRemaining,
    hasEverPurchased,
    isSharing,
    shareToGallery,
    checkIfAlreadyShared,
    loading
  } = useGalleryShare();

  const [isAlreadyShared, setIsAlreadyShared] = useState(false);
  const [justShared, setJustShared] = useState(false);

  useEffect(() => {
    const checkSharedStatus = async () => {
      const shared = await checkIfAlreadyShared(generationId);
      setIsAlreadyShared(shared);
    };
    checkSharedStatus();
  }, [generationId, checkIfAlreadyShared]);

  const handleShare = async () => {
    const success = await shareToGallery(generationId);
    if (success) {
      setIsAlreadyShared(true);
      setJustShared(true);
    }
  };

  if (loading) {
    return null;
  }

  // Already shared - show success state
  if (isAlreadyShared) {
    return (
      <div className="border-t-4 border-black pt-6 mt-6">
        <div className="bg-mint border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
          {/* Decorative corner */}
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-3 border-black transform rotate-12 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />

          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="flex-shrink-0 w-14 h-14 bg-white border-3 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Check className="w-7 h-7 text-black" />
            </div>

            <div className="flex-1">
              <h3 className="font-display font-bold text-lg text-black mb-1">
                {justShared
                  ? t('gallery.sharedSuccess', 'PUBLIE DANS LA GALERIE !')
                  : t('gallery.alreadyShared', 'DEJA DANS LA GALERIE')
                }
              </h3>
              {justShared && (
                <p className="font-body text-sm text-black/80">
                  {t('gallery.creditAdded', '+1 credit gratuit ajoute a votre compte !')}
                </p>
              )}
            </div>

            <a
              href="/galerie"
              className="flex items-center gap-2 px-4 py-2 bg-white border-3 border-black font-display font-bold text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <Image className="w-4 h-4" />
              {t('gallery.viewGallery', 'VOIR LA GALERIE')}
            </a>
          </div>
        </div>
      </div>
    );
  }

  // User has never purchased - show locked state
  if (!hasEverPurchased) {
    return (
      <div className="border-t-4 border-black pt-6 mt-6">
        <div className="bg-gray-100 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden opacity-75">
          {/* Decorative corner */}
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-300 border-3 border-black transform rotate-12 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />

          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="flex-shrink-0 w-14 h-14 bg-gray-300 border-3 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Lock className="w-7 h-7 text-gray-600" />
            </div>

            <div className="flex-1">
              <h3 className="font-display font-bold text-lg text-gray-600 mb-1">
                {t('gallery.locked', 'PARTAGER DANS LA GALERIE')}
              </h3>
              <p className="font-body text-sm text-gray-500">
                {t('gallery.purchaseRequired', 'Achetez des credits pour debloquer cette fonctionnalite et gagner +1 credit gratuit !')}
              </p>
            </div>

            <a
              href="/#pricing"
              className="flex items-center gap-2 px-4 py-2 bg-vinted text-white border-3 border-black font-display font-bold text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <Gift className="w-4 h-4" />
              {t('gallery.getCredits', 'ACHETER DES CREDITS')}
            </a>
          </div>
        </div>
      </div>
    );
  }

  // User has no shares remaining
  if (!canShare) {
    return (
      <div className="border-t-4 border-black pt-6 mt-6">
        <div className="bg-cream border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
          {/* Decorative corner */}
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-pink-pastel border-3 border-black transform rotate-12 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />

          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="flex-shrink-0 w-14 h-14 bg-pink-pastel border-3 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <AlertCircle className="w-7 h-7 text-black" />
            </div>

            <div className="flex-1">
              <h3 className="font-display font-bold text-lg text-black mb-1">
                {t('gallery.limitReached', 'LIMITE ATTEINTE')}
              </h3>
              <p className="font-body text-sm text-gray-600">
                {t('gallery.maxSharesUsed', 'Vous avez deja utilise vos 2 partages gratuits. Merci pour votre contribution !')}
              </p>
            </div>

            <a
              href="/galerie"
              className="flex items-center gap-2 px-4 py-2 bg-white border-3 border-black font-display font-bold text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <Image className="w-4 h-4" />
              {t('gallery.viewGallery', 'VOIR LA GALERIE')}
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Can share - show share button
  return (
    <div className="border-t-4 border-black pt-6 mt-6">
      <div className="bg-gradient-to-r from-pink-pastel to-mint border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
        {/* Decorative corner */}
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-vinted border-3 border-black transform rotate-12 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />

        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="flex-shrink-0 w-14 h-14 bg-white border-3 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <Gift className="w-7 h-7 text-vinted" />
          </div>

          <div className="flex-1">
            <h3 className="font-display font-bold text-lg text-black mb-1">
              {t('gallery.shareTitle', 'PARTAGER DANS LA GALERIE')}
            </h3>
            <p className="font-body text-sm text-black/80">
              {t('gallery.shareDescription', 'Partagez votre creation et recevez +1 credit gratuit !')}
              <span className="ml-2 font-display font-bold text-xs bg-white/50 px-2 py-0.5 border border-black">
                {sharesRemaining}/2 {t('gallery.remaining', 'restants')}
              </span>
            </p>
          </div>

          <button
            onClick={handleShare}
            disabled={isSharing}
            className="flex items-center gap-2 px-6 py-3 bg-vinted text-white border-3 border-black font-display font-bold text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSharing ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                {t('gallery.sharing', 'PUBLICATION...')}
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" />
                {t('gallery.shareButton', 'PUBLIER (+1 CREDIT)')}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
