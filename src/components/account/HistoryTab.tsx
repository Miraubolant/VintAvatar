import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Image, Download, Eye, FileText, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Composant d'image optimisé avec lazy loading et placeholder
interface OptimizedImageProps {
  src: string | null;
  alt: string;
  className?: string;
  fallbackIcon?: React.ReactNode;
  bgColor?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  fallbackIcon,
  bgColor = 'bg-cream'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  if (!src || hasError) {
    return (
      <div className={`w-full h-full flex items-center justify-center text-gray-500 ${bgColor}`}>
        {fallbackIcon || <Image className="w-8 h-8" />}
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full ${bgColor}`}>
      {/* Skeleton placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse">
          <div className={`w-full h-full ${bgColor}`}>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-8 h-8 border-3 border-black/20 border-t-vinted rounded-full animate-spin" />
            </div>
          </div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
      />
    </div>
  );
};

// Type definitions for strict typing
interface GenerationConfig {
  gender?: string;
  mannequinType?: string;
  carnation?: string;
  morphology?: string;
  age?: string;
  posture?: string;
  angle?: string;
  framing?: string;
  decor?: string;
  lighting?: string;
  season?: string;
  clothingType?: string;
  faceMode?: 'visible' | 'blur' | 'phone';
  cropHead?: boolean;
}

interface VintedListing {
  title: string;
  description: string;
}

interface HistoryItem {
  id: string;
  user_id: string;
  generation_type: string;
  credits_used: number;
  created_at: string;
  original_image_url: string | null;
  generated_image_url: string | null;
  generation_config: GenerationConfig | null;
  vinted_listing: VintedListing | null;
  vinted_article_url: string | null;
}

interface HistoryTabProps {
  history: HistoryItem[];
  historyLoading: boolean;
  historyError: string | null;
  formatHistoryDateTime: (date: string) => string;
  onViewImage: (imageUrl: string) => void;
  onDownloadImage: (imageUrl: string, filename: string) => void;
  onViewListing: (listing: VintedListing) => void;
}

export const HistoryTab: React.FC<HistoryTabProps> = ({
  history,
  historyLoading,
  historyError,
  formatHistoryDateTime,
  onViewImage,
  onDownloadImage,
  onViewListing
}) => {
  const { t } = useTranslation('account');
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(10);

  const visibleHistory = history.slice(0, visibleCount);
  const hasMore = visibleCount < history.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 10);
  };

  if (historyLoading) {
    return (
      <div className="text-center">
        <div className="inline-block px-8 py-4 bg-white border-4 border-black font-display font-bold text-black animate-pulse">
          {t('loading.history')}
        </div>
      </div>
    );
  }

  if (historyError) {
    return (
      <div className="text-center">
        <div className="inline-block px-8 py-4 bg-pink-pastel border-4 border-black font-display font-bold text-black">
          {historyError}
        </div>
      </div>
    );
  }

  if (history.length === 0) {
    return (
      <div className="bg-white border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center">
        <div className="p-4 bg-cream border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] inline-block mb-4">
          <Image className="w-8 h-8 text-black" />
        </div>
        <h3 className="text-2xl font-display font-bold text-black mb-2">AUCUNE GÉNÉRATION</h3>
        <p className="font-body font-semibold text-black mb-4">
          Vous n'avez pas encore généré d'avatar ! Créez votre première photo pour la voir apparaître ici.
        </p>
        <button
          onClick={() => navigate('/#generateur')}
          className="px-6 py-3 bg-vinted text-white border-4 border-black font-display font-bold transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
        >
          CRÉER MON PREMIER AVATAR
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleHistory.map((item) => (
          <div key={item.id} className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="space-y-4">
              {/* Date et Info */}
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-lg text-black">
                    {t('historyTab.generation')} #{item.id.slice(-8).toUpperCase()}
                  </h3>
                  <p className="font-body text-black">
                    {formatHistoryDateTime(item.created_at)}
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="px-2 py-1 bg-vinted text-white border-2 border-black font-display font-bold text-xs shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap">
                    -{item.credits_used} {t('historyTab.credit')}
                  </span>
                </div>
              </div>

              {/* Images Comparison */}
              <div className="grid grid-cols-2 gap-4">
                {/* Image Originale - Cliquable vers Vinted si URL disponible */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <p className="font-display font-bold text-sm text-black">{t('historyTab.original')}</p>
                    {item.vinted_article_url && (
                      <ExternalLink className="w-3.5 h-3.5 text-vinted" />
                    )}
                  </div>
                  {item.vinted_article_url ? (
                    <a
                      href={item.vinted_article_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block aspect-square bg-cream border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] overflow-hidden cursor-pointer hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                      title={t('historyTab.viewOnVinted', 'Voir sur Vinted')}
                    >
                      <OptimizedImage
                        src={item.original_image_url}
                        alt={t('common.originalClothingPhotoAlt')}
                        bgColor="bg-cream"
                      />
                    </a>
                  ) : (
                    <div className="aspect-square bg-cream border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                      <OptimizedImage
                        src={item.original_image_url}
                        alt={t('common.originalClothingPhotoAlt')}
                        bgColor="bg-cream"
                      />
                    </div>
                  )}
                </div>

                {/* Image Générée - Cliquable pour aperçu */}
                <div className="space-y-2">
                  <p className="font-display font-bold text-sm text-black">{t('historyTab.generated')}</p>
                  <button
                    onClick={() => item.generated_image_url && onViewImage(item.generated_image_url)}
                    disabled={!item.generated_image_url}
                    className="w-full aspect-square bg-mint border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] overflow-hidden cursor-pointer hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 disabled:cursor-default disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <OptimizedImage
                      src={item.generated_image_url}
                      alt="Avatar IA généré pour photo Vinted portée professionnelle"
                      bgColor="bg-mint"
                    />
                  </button>
                </div>
              </div>

              {/* Configuration utilisée */}
              {item.generation_config && (
                <div className="bg-cream border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <p className="font-display font-bold text-sm text-black mb-2">{t('historyTab.configurationUsed')}</p>
                  <div className="grid grid-cols-2 gap-2 text-xs font-body text-black">
                    <span>Genre: {item.generation_config.gender?.toUpperCase()}</span>
                    <span>Carnation: {item.generation_config.carnation?.toUpperCase()}</span>
                    <span>Morpho: {item.generation_config.morphology?.toUpperCase()}</span>
                    <span>Décor: {item.generation_config.decor?.toUpperCase()}</span>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-2">
                {item.generated_image_url && (
                  <>
                    <button
                      onClick={() => onViewImage(item.generated_image_url)}
                      className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-3 py-2 bg-vinted text-white border-3 border-black font-display font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                    >
                      <Eye className="w-4 h-4" />
                      <span>{t('imageModal.viewAndCrop')}</span>
                    </button>
                    <button
                      onClick={() => onDownloadImage(item.generated_image_url, `avatar-${item.id}.jpg`)}
                      className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-3 py-2 bg-pink-pastel text-black border-3 border-black font-display font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                    >
                      <Download className="w-4 h-4" />
                      {t('historyTab.downloadImage')}
                    </button>
                  </>
                )}
                {item.vinted_listing && (
                  <button
                    onClick={() => onViewListing(item.vinted_listing)}
                    className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-vinted text-white border-3 border-black font-display font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                  >
                    <FileText className="w-4 h-4" />
                    <span>{t('historyTab.viewListing', 'VOIR TITRE & DESCRIPTION')}</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bouton Charger Plus */}
      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="px-8 py-3 bg-vinted text-white border-4 border-black font-display font-bold text-base shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            CHARGER PLUS ({history.length - visibleCount} RESTANTES)
          </button>
        </div>
      )}
    </div>
  );
};
