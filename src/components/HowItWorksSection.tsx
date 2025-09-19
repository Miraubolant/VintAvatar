import React from 'react';
import { Upload, Zap, Download, Sparkles, Camera, Cpu, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const HowItWorksSection: React.FC = () => {
  const { t } = useTranslation('howItWorks');

  const steps = [
    {
      id: 1,
      icon: Upload,
      bgColor: "bg-pink-pastel",
      iconColor: "text-black",
      decorColor: "bg-mint"
    },
    {
      id: 2,
      icon: Cpu,
      bgColor: "bg-mint",
      iconColor: "text-black",
      decorColor: "bg-vinted"
    },
    {
      id: 3,
      icon: Sparkles,
      bgColor: "bg-vinted",
      iconColor: "text-white",
      decorColor: "bg-pink-pastel"
    },
    {
      id: 4,
      icon: Zap,
      bgColor: "bg-yellow-300",
      iconColor: "text-black",
      decorColor: "bg-mint"
    },
    {
      id: 5,
      icon: Download,
      bgColor: "bg-cream",
      iconColor: "text-black",
      decorColor: "bg-vinted"
    }
  ];

  return (
    <section id="methode" className="relative py-20 lg:py-24 bg-cream overflow-hidden">
      {/* Éléments décoratifs flottants */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-pink-pastel border-4 border-black transform rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
      <div className="absolute top-20 right-16 w-12 h-12 bg-mint border-3 border-black transform -rotate-12 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"></div>
      <div className="absolute bottom-20 left-20 w-8 h-8 bg-yellow-300 border-2 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
      <div className="absolute bottom-40 right-10 w-10 h-10 bg-vinted border-3 border-black transform rotate-45 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"></div>
      
      {/* Cercles décoratifs */}
      <div className="absolute top-1/4 left-5 w-6 h-6 bg-pink-pastel border-2 border-black rounded-full"></div>
      <div className="absolute top-1/3 right-5 w-4 h-4 bg-mint border-2 border-black rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-yellow-300 border-3 border-black rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Neo-Brutalism */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight mb-8">
            <div className="text-black transform -rotate-2 mb-4 relative">
              <span className="inline-block bg-white border-4 border-black px-6 py-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                {t('title.line1')}
              </span>
            </div>
            <div className="text-white transform rotate-1 relative mb-4">
              <span className="inline-block bg-vinted border-4 border-black px-6 py-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                {t('title.line2')}
              </span>
            </div>
            <div className="text-black transform -rotate-1 relative">
              <span className="inline-block bg-mint border-4 border-black px-6 py-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                {t('title.line3')}
              </span>
            </div>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={step.id} className="relative group">
              {/* Numéro d'étape flottant */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-black border-2 border-black text-white font-display font-bold text-sm flex items-center justify-center z-10 transform rotate-12 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]">
                {step.id}
              </div>
              
              {/* Card principale */}
              <div className={`${step.bgColor} border-4 border-black p-6 lg:p-8 text-center transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:scale-105 relative overflow-hidden`}>
                
                {/* Décoration d'angle */}
                <div className={`absolute top-2 right-2 w-3 h-3 ${step.decorColor} border-2 border-black transform rotate-45`}></div>
                
                {/* Icône */}
                <div className={`w-16 h-16 lg:w-20 lg:h-20 ${step.bgColor === 'bg-cream' ? 'bg-white' : 'bg-white'} border-4 border-black flex items-center justify-center mx-auto mb-4 transform group-hover:rotate-6 transition-transform duration-300 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]`}>
                  <step.icon className={`w-8 h-8 lg:w-10 lg:h-10 ${step.iconColor === 'text-white' ? 'text-black' : step.iconColor}`} />
                </div>

                {/* Titre */}
                <h3 className="font-display font-bold text-base lg:text-lg text-black mb-3 leading-tight">
                  {t(`steps.${index}.title`)}
                </h3>

                {/* Description */}
                <p className="font-body font-semibold text-sm lg:text-base text-black leading-relaxed">
                  {t(`steps.${index}.description`)}
                </p>

                {/* Étoiles décoratives pour certaines étapes */}
                {(step.id === 2 || step.id === 4) && (
                  <>
                    <Star className="absolute top-1 left-1 w-3 h-3 text-yellow-500 fill-current" />
                    <Star className="absolute bottom-1 right-1 w-3 h-3 text-yellow-500 fill-current" />
                  </>
                )}
              </div>

              {/* Flèche de connexion (sauf pour le dernier) */}
              {index < steps.length - 1 && (
                <div className="hidden xl:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <div className="w-8 h-1 bg-black transform rotate-0"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-[8px] border-l-black border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white border-4 border-black p-8 lg:p-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 relative overflow-hidden">

            {/* Décorations d'angles */}
            <div className="absolute top-3 left-3 w-4 h-4 bg-pink-pastel border-2 border-black transform rotate-45"></div>
            <div className="absolute top-3 right-3 w-4 h-4 bg-mint border-2 border-black transform rotate-45"></div>
            <div className="absolute bottom-3 left-3 w-4 h-4 bg-yellow-300 border-2 border-black transform rotate-45"></div>
            <div className="absolute bottom-3 right-3 w-4 h-4 bg-vinted border-2 border-black transform rotate-45"></div>

            <h3 className="font-display font-bold text-2xl lg:text-3xl text-black mb-4">
              {t('cta.title')}
            </h3>
            <p className="font-body font-semibold text-lg text-black mb-6 max-w-2xl mx-auto">
              {t('cta.subtitle')}
            </p>

            <button
              onClick={() => {
                const heroSection = document.getElementById('hero');
                if (heroSection) {
                  heroSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-vinted text-white border-4 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 transform hover:scale-105"
            >
              <Sparkles className="w-6 h-6" />
              {t('cta.button')}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};