import React from 'react';
import { Sparkles, RefreshCw, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useBeforeAfter } from '../hooks/useBeforeAfter';

export const BeforeAfterSection: React.FC = () => {
  const { items, loading, error, refetch } = useBeforeAfter();
  const { t } = useTranslation('beforeafter');

  return (
    <section id="avant-apres" className="relative py-12 sm:py-16 lg:py-20 bg-cream overflow-hidden">
      {/* Formes décoratives neo-brutalism */}
      <div className="absolute top-16 right-16 w-14 h-14 bg-mint border-4 border-black transform rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
      <div className="absolute top-1/3 left-8 w-10 h-10 bg-pink-pastel border-3 border-black transform -rotate-45 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"></div>
      <div className="absolute bottom-32 right-8 w-12 h-12 bg-vinted border-4 border-black neo-shape-circle shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
      <div className="absolute bottom-16 left-1/4 w-8 h-8 bg-cream border-3 border-black transform -rotate-12 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Neo-Brutalism */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight mb-8">
            <div className="text-black transform -rotate-2 mb-4 relative">
              <span className="inline-block bg-white border-4 border-black px-6 py-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                {t('title.line1')}
              </span>
            </div>
            <div className="text-black transform rotate-1 relative mb-4">
              <span className="inline-block bg-pink-pastel border-4 border-black px-6 py-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                {t('title.line2')}
              </span>
            </div>
            <div className="text-white transform -rotate-1 relative">
              <span className="inline-block bg-vinted border-4 border-black px-6 py-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                {t('title.line3')}
              </span>
            </div>
          </h2>
          
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center mb-16">
            <div className="bg-white border-4 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
              <div className="flex items-center justify-center gap-3">
                <div className="w-6 h-6 border-2 border-vinted border-t-transparent rounded-full animate-spin"></div>
                <span className="font-display font-bold text-xl text-black">
                  {t('loading')}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Grid Gallery Mode */}
        {!loading && (
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {items.map((item, index) => (
            <div key={item.id} className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
              
              {/* Side by Side Images */}
              <div className="flex h-64 md:h-80">
                <div className="flex-1 relative border-r-2 border-black">
                  <img
                    src={item.before_image_url}
                    alt={`Photo Vinted avant transformation IA - ${item.category}`}
                    className="w-full h-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "low"}
                    width={400}
                    height={320}
                  />
                  <div className="absolute top-2 left-2">
                    <div className="px-2 py-1 bg-pink-pastel border-2 border-black font-display font-bold text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      {t('labels.before')}
                    </div>
                  </div>
                </div>

                <div className="flex-1 relative">
                  <img
                    src={item.after_image_url}
                    alt={`Avatar IA après génération automatique - ${item.category} portée`}
                    className="w-full h-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "low"}
                    width={400}
                    height={320}
                  />
                  <div className="absolute top-2 right-2">
                    <div className="px-2 py-1 bg-mint border-2 border-black font-display font-bold text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      {t('labels.after')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Item Info */}
              <div className="p-4 border-t-4 border-black">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-display font-bold text-lg text-black mb-1">
                      {item.category}
                    </h3>
                    <p className="font-body font-semibold text-sm text-black">
                      {item.description}
                    </p>
                  </div>
                  <div className="px-3 py-2 bg-vinted border-2 border-black text-white font-display font-bold text-sm transform rotate-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    {item.improvement}
                  </div>
                </div>
                
                {/* Tags */}
                <div className="flex gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-cream border-2 border-black font-display font-bold text-xs shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transform rotate-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          </div>
        )}

        {/* Stats Grid - Mobile Responsive */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-16">
          {[
            { value: t('stats.0.value'), label: t('stats.0.label'), bg: "bg-mint" },
            { value: t('stats.1.value'), label: t('stats.1.label'), bg: "bg-white" },
            { value: t('stats.2.value'), label: t('stats.2.label'), bg: "bg-vinted", text: "text-white" },
            { value: t('stats.3.value'), label: t('stats.3.label'), bg: "bg-cream" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center h-full">
              <div className={`${stat.bg} ${stat.text || 'text-black'} border-4 border-black p-4 sm:p-6 transform ${idx % 2 === 0 ? 'rotate-1' : '-rotate-1'} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 h-full min-h-[120px] sm:min-h-[140px] flex flex-col justify-center`}>
                <div className="font-display font-bold text-2xl sm:text-3xl mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="font-body font-semibold text-xs sm:text-sm leading-tight">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-block bg-white border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
            <h3 className="font-display font-bold text-2xl text-black mb-4">
              {t('cta.title')}
            </h3>
            <button
              onClick={() => {
                const heroSection = document.getElementById('hero');
                if (heroSection) {
                  heroSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-pink-pastel text-black border-3 border-black font-display font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <Sparkles className="w-5 h-5" />
              {t('cta.button')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};