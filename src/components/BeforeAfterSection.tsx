import React from 'react';
import { useTranslation } from 'react-i18next';
import { useBeforeAfter } from '../hooks/useBeforeAfter';

export const BeforeAfterSection: React.FC = () => {
  const { items, loading } = useBeforeAfter();
  const { t } = useTranslation('beforeafter');

  return (
    <section id="avant-apres" className="relative pt-6 pb-10 sm:py-12 lg:py-16 bg-grain overflow-hidden">
      {/* Formes décoratives neo-brutalism - cachées sur mobile et tablette */}
      <div className="hidden lg:block absolute top-16 right-16 w-12 h-12 bg-mint border-3 border-black transform rotate-12 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] pointer-events-none"></div>
      <div className="hidden lg:block absolute top-1/3 left-8 w-8 h-8 bg-pink-pastel border-2 border-black transform -rotate-45 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] pointer-events-none"></div>
      <div className="hidden lg:block absolute bottom-48 right-8 w-10 h-10 bg-vinted border-3 border-black neo-shape-circle shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Neo-Brutalism - Compact sur mobile */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="font-display font-semibold text-2xl sm:text-3xl lg:text-4xl tracking-tight">
            {/* Version mobile: inline compact */}
            <div className="flex flex-wrap justify-center items-center gap-1.5 sm:hidden">
              <span className="inline-block bg-white text-black border-2 border-black px-2.5 py-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
                {t('title.line1')}
              </span>
              <span className="inline-block bg-vinted text-white border-2 border-black px-2.5 py-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
                {t('title.line2')}
              </span>
              <span className="inline-block bg-mint text-black border-2 border-black px-2.5 py-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
                {t('title.line3')}
              </span>
            </div>
            {/* Version desktop: blocs empilés */}
            <div className="hidden sm:block">
              <div className="text-black transform -rotate-1 mb-3 relative">
                <span className="inline-block bg-white border-3 border-black px-5 py-2.5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  {t('title.line1')}
                </span>
              </div>
              <div className="text-white transform rotate-1 relative mb-3">
                <span className="inline-block bg-vinted border-3 border-black px-5 py-2.5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  {t('title.line2')}
                </span>
              </div>
              <div className="text-black transform -rotate-1 relative">
                <span className="inline-block bg-mint border-3 border-black px-5 py-2.5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  {t('title.line3')}
                </span>
              </div>
            </div>
          </h2>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center mb-12">
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block">
              <div className="flex items-center justify-center gap-3">
                <div className="w-5 h-5 border-2 border-vinted border-t-transparent rounded-full animate-spin"></div>
                <span className="font-display font-bold text-base text-black">
                  {t('loading')}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Grid with Before/After Images */}
        {!loading && (
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
            {items.map((item, index) => (
              <div
                key={item.id}
                className="bg-white border-2 sm:border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
              >
                {/* Before/After Images - Side by side */}
                <div className="flex">
                  {/* Before */}
                  <div className="w-1/2 relative">
                    <img
                      src={item.before_image_url}
                      alt={`Photo Vinted avant transformation IA - ${item.category}`}
                      className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover object-top"
                      loading="lazy"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-pink-pastel border-2 border-black font-display font-bold text-[9px] sm:text-[10px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        {t('labels.before')}
                      </span>
                    </div>
                  </div>
                  {/* After */}
                  <div className="w-1/2 relative border-l-2 sm:border-l-3 border-black">
                    <img
                      src={item.after_image_url}
                      alt={`Avatar IA après génération automatique - ${item.category} portée`}
                      className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover object-top"
                      loading="lazy"
                    />
                    <div className="absolute top-2 right-2">
                      <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-mint border-2 border-black font-display font-bold text-[9px] sm:text-[10px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        {t('labels.after')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Item Info - Compact */}
                <div className="p-2.5 sm:p-3 border-t-2 sm:border-t-3 border-black">
                  <h3 className="font-display font-bold text-xs sm:text-sm text-black truncate">
                    {item.category}
                  </h3>
                  <p className="font-body font-semibold text-[10px] sm:text-xs text-gray-600 truncate">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Stats - Simple inline */}
        <div className="flex justify-center">
          <div className="flex items-center gap-4 sm:gap-8">
            {[
              { value: t('stats.0.value'), label: t('stats.0.label') },
              { value: t('stats.1.value'), label: t('stats.1.label') },
              { value: t('stats.2.value'), label: t('stats.2.label') },
              { value: t('stats.3.value'), label: t('stats.3.label') }
            ].map((stat, idx, arr) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center">
                  <span className="font-display font-bold text-base sm:text-2xl lg:text-3xl text-black">{stat.value}</span>
                  <span className="font-body text-[9px] sm:text-[10px] lg:text-xs text-gray-500 uppercase tracking-wide text-center">{stat.label}</span>
                </div>
                {idx < arr.length - 1 && (
                  <div className="w-px h-6 sm:h-8 bg-black opacity-20"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
