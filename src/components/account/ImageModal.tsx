import React from 'react';
import { X, Download, Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ImageModalProps {
  isOpen: boolean;
  imageUrl: string;
  croppedImageUrl: string | null;
  showCroppedVersion: boolean;
  isCropping: boolean;
  cropError: string | null;
  onClose: () => void;
  onDownload: (url: string, filename: string) => void;
  onCrop: () => void;
  onToggleVersion: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  imageUrl,
  croppedImageUrl,
  showCroppedVersion,
  isCropping,
  cropError,
  onClose,
  onDownload,
  onCrop,
  onToggleVersion
}) => {
  const { t } = useTranslation('account');

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-2xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header avec bouton fermer */}
        <div className="flex justify-between items-center p-4 bg-vinted border-b-4 border-black">
          <div>
            <h3 className="font-display font-bold text-white">{t('historyTab.generatedImage')}</h3>
            {croppedImageUrl && (
              <p className="text-xs text-blue-100 font-body">
                {showCroppedVersion ? 'Version sans tête' : 'Version originale'}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-white border-3 border-black font-display font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Affichage d'erreur si applicable */}
        {cropError && (
          <div className="p-3 bg-cream border-b-3 border-black text-center">
            <p className="text-sm font-body font-semibold text-black">{cropError}</p>
          </div>
        )}

        {/* Image */}
        <div className="p-4 flex justify-center overflow-hidden">
          <img
            src={showCroppedVersion && croppedImageUrl ? croppedImageUrl : imageUrl}
            alt={showCroppedVersion ? 'Avatar IA anonyme pour Vinted sans visage visible' : 'Avatar IA Vinted en grande taille pour téléchargement'}
            className="max-w-full max-h-80 w-auto h-auto border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] object-contain"
          />
        </div>

        {/* Actions */}
        <div className="p-4 bg-cream border-t-4 border-black flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => onDownload(
              showCroppedVersion && croppedImageUrl ? croppedImageUrl : imageUrl,
              `avatar-${showCroppedVersion ? 'sans-tete' : 'original'}.jpg`
            )}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-pink-pastel text-black border-3 border-black font-display font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            <Download className="w-4 h-4" />
            {t('historyTab.downloadImage')}
          </button>

          {!croppedImageUrl ? (
            <button
              onClick={onCrop}
              disabled={isCropping}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-vinted text-white border-3 border-black font-display font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
                isCropping ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isCropping ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>DÉCOUPAGE...</span>
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4" />
                  <span>{t('imageModal.viewAndCrop')}</span>
                </>
              )}
            </button>
          ) : (
            <button
              onClick={onToggleVersion}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-vinted text-white border-3 border-black font-display font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <Eye className="w-4 h-4" />
              {showCroppedVersion ? 'VOIR ORIGINAL' : 'VOIR SANS TÊTE'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
