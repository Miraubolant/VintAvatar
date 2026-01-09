import React from 'react';
import { X, Sparkles, Copy, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ListingModalProps {
  isOpen: boolean;
  listing: { title: string; description: string } | null;
  copiedTitle: boolean;
  copiedDescription: boolean;
  onClose: () => void;
  onCopyTitle: () => void;
  onCopyDescription: () => void;
}

export const ListingModal: React.FC<ListingModalProps> = ({
  isOpen,
  listing,
  copiedTitle,
  copiedDescription,
  onClose,
  onCopyTitle,
  onCopyDescription
}) => {
  const { t } = useTranslation('account');

  if (!isOpen || !listing) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] w-full max-w-md max-h-[85vh] overflow-y-auto mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 bg-vinted border-b-4 border-black sticky top-0">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-white" />
            <h3 className="font-display font-bold text-white text-sm sm:text-base">{t('historyTab.listingModalTitle', 'TITRE & DESCRIPTION IA')}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-white border-3 border-black font-display font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
          {/* Title */}
          <div className="bg-cream border-3 border-black p-3 sm:p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-mint border-2 border-black transform rotate-45"></div>
                <span className="font-display font-bold text-xs sm:text-sm text-black">
                  {t('historyTab.titleLabel', 'TITRE')}
                </span>
              </div>
              <button
                onClick={onCopyTitle}
                className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 border-2 sm:border-3 border-black font-display font-bold text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
                  copiedTitle ? 'bg-mint text-black' : 'bg-vinted text-white'
                }`}
              >
                {copiedTitle ? <Check className="w-3 h-3 sm:w-4 sm:h-4" /> : <Copy className="w-3 h-3 sm:w-4 sm:h-4" />}
                <span className="hidden sm:inline">{copiedTitle ? t('common.copied', 'COPIÉ !') : t('common.copy', 'COPIER')}</span>
              </button>
            </div>
            <div className="bg-white border-2 sm:border-3 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <p className="font-display font-bold text-black text-sm sm:text-base">{listing.title}</p>
            </div>
          </div>

          {/* Description */}
          <div className="bg-cream border-3 border-black p-3 sm:p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-pink-pastel border-2 border-black transform rotate-45"></div>
                <span className="font-display font-bold text-xs sm:text-sm text-black">
                  {t('historyTab.descriptionLabel', 'DESCRIPTION')}
                </span>
              </div>
              <button
                onClick={onCopyDescription}
                className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 border-2 sm:border-3 border-black font-display font-bold text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
                  copiedDescription ? 'bg-mint text-black' : 'bg-vinted text-white'
                }`}
              >
                {copiedDescription ? <Check className="w-3 h-3 sm:w-4 sm:h-4" /> : <Copy className="w-3 h-3 sm:w-4 sm:h-4" />}
                <span className="hidden sm:inline">{copiedDescription ? t('common.copied', 'COPIÉ !') : t('common.copy', 'COPIER')}</span>
              </button>
            </div>
            <div className="bg-white border-2 sm:border-3 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] max-h-40 sm:max-h-48 overflow-y-auto">
              <p className="font-body text-black text-xs sm:text-sm whitespace-pre-line leading-relaxed">{listing.description}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 bg-cream border-t-3 sm:border-t-4 border-black">
          <button
            onClick={onClose}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white text-black border-2 sm:border-3 border-black font-display font-bold text-sm sm:text-base shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            {t('common.close', 'FERMER')}
          </button>
        </div>
      </div>
    </div>
  );
};
