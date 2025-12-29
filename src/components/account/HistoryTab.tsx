import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Image, Download, Eye, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface HistoryTabProps {
  history: any[];
  historyLoading: boolean;
  historyError: string | null;
  formatHistoryDateTime: (date: string) => string;
  currentPage: number;
  totalPages: number;
  nextPage: () => void;
  prevPage: () => void;
  goToPage: (page: number) => void;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  onViewImage: (imageUrl: string) => void;
  onDownloadImage: (imageUrl: string, filename: string) => void;
  onViewListing: (listing: { title: string; description: string }) => void;
}

export const HistoryTab: React.FC<HistoryTabProps> = ({
  history,
  historyLoading,
  historyError,
  formatHistoryDateTime,
  currentPage,
  totalPages,
  nextPage,
  prevPage,
  goToPage,
  hasNextPage,
  hasPrevPage,
  onViewImage,
  onDownloadImage,
  onViewListing
}) => {
  const { t } = useTranslation('account');
  const navigate = useNavigate();

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
        {history.map((item) => (
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
                {/* Image Originale */}
                <div className="space-y-2">
                  <p className="font-display font-bold text-sm text-black">{t('historyTab.original')}</p>
                  <div className="aspect-square bg-cream border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                    {item.original_image_url ? (
                      <img
                        src={item.original_image_url}
                        alt={t('common.originalClothingPhotoAlt')}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-500">
                        <Image className="w-8 h-8" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Image Générée */}
                <div className="space-y-2">
                  <p className="font-display font-bold text-sm text-black">{t('historyTab.generated')}</p>
                  <div className="aspect-square bg-mint border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                    {item.generated_image_url ? (
                      <img
                        src={item.generated_image_url}
                        alt="Avatar IA généré pour photo Vinted portée professionnelle"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-500">
                        <Image className="w-8 h-8" />
                      </div>
                    )}
                  </div>
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

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            onClick={prevPage}
            disabled={!hasPrevPage}
            className={`px-4 py-2 border-3 border-black font-display font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
              hasPrevPage
                ? 'bg-vinted text-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            PRÉCÉDENT
          </button>

          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`w-10 h-10 border-3 border-black font-display font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
                  currentPage === page
                    ? 'bg-vinted text-white'
                    : 'bg-white text-black hover:bg-mint'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={nextPage}
            disabled={!hasNextPage}
            className={`px-4 py-2 border-3 border-black font-display font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
              hasNextPage
                ? 'bg-vinted text-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            SUIVANT
          </button>
        </div>
      )}
    </div>
  );
};
