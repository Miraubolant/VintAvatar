import React from 'react';
import { HelpCircle, ChevronRight, CreditCard, Shield, Zap, Camera, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const FAQSection: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('faq');

  const faqCategories = [
    {
      icon: Camera,
      title: t('section.point1', 'Comment utiliser l\'outil'),
      description: t('section.point1Desc', 'Uploadez, configurez, generez !'),
      color: 'bg-vinted',
      textColor: 'text-white',
    },
    {
      icon: CreditCard,
      title: t('section.point2', 'Tarifs et abonnements'),
      description: t('section.point2Desc', 'Des offres pour tous les budgets'),
      color: 'bg-cream',
      textColor: 'text-black',
    },
    {
      icon: Zap,
      title: t('section.point3', 'Optimisation des ventes'),
      description: t('section.point3Desc', 'Boostez votre visibilite Vinted'),
      color: 'bg-vinted',
      textColor: 'text-white',
    },
    {
      icon: Shield,
      title: t('section.point4', 'Protection et confidentialite'),
      description: t('section.point4Desc', 'Vos donnees en securite'),
      color: 'bg-cream',
      textColor: 'text-black',
    },
  ];

  return (
    <section className="relative py-12 lg:py-16 bg-grain overflow-hidden">
      {/* Formes decoratives neo-brutalism */}
      <div className="absolute top-20 right-16 w-16 h-16 bg-mint border-4 border-black transform rotate-45 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hidden lg:block"></div>
      <div className="absolute bottom-32 left-12 w-12 h-12 bg-vinted border-3 border-black neo-shape-circle shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hidden lg:block"></div>
      <div className="absolute top-40 left-1/4 w-10 h-10 bg-white border-4 border-black transform -rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hidden lg:block"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre style Hero */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight">
            <span className="inline-block bg-white text-black border-2 sm:border-3 border-black px-3 sm:px-4 py-1 sm:py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 mb-2">
              {t('heroTitle.line1', 'DES QUESTIONS')}
            </span>
            <br />
            <span className="inline-block bg-vinted text-white border-2 sm:border-3 border-black px-3 sm:px-4 py-1 sm:py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
              {t('heroTitle.line2', 'ON REPOND !')}
            </span>
          </h2>
          <p className="font-body font-semibold text-gray-600 text-base sm:text-lg mt-6 max-w-2xl mx-auto">
            {t('section.subtitle', 'Consultez notre FAQ complete pour tout savoir sur VintDress')}
          </p>
        </div>

        {/* Grid des categories FAQ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10">
          {faqCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className={`group relative ${category.color} border-4 border-black p-5 sm:p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 cursor-pointer`}
                onClick={() => navigate('/faq')}
              >
                {/* Icon badge */}
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-white border-3 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform duration-200">
                  <IconComponent className="w-6 h-6 text-vinted" />
                </div>

                <div className="pt-2">
                  <h3 className={`font-display font-bold text-lg sm:text-xl ${category.textColor} mb-2`}>
                    {category.title}
                  </h3>
                  <p className={`font-body font-medium text-sm sm:text-base ${category.textColor} opacity-80`}>
                    {category.description}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ChevronRight className={`w-5 h-5 ${category.textColor}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Section centrale avec stats et CTA */}
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="p-6 sm:p-8 lg:p-10">
            {/* Stats rapides */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
              <div className="text-center p-3 sm:p-4 bg-cream border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <div className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-vinted">50+</div>
                <div className="font-body font-semibold text-xs sm:text-sm text-gray-700">
                  {t('section.stat1', 'Questions')}
                </div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-vinted border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <div className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-white">24/7</div>
                <div className="font-body font-semibold text-xs sm:text-sm text-white/80">
                  {t('section.stat2', 'Disponible')}
                </div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-cream border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <div className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-vinted">100%</div>
                <div className="font-body font-semibold text-xs sm:text-sm text-gray-700">
                  {t('section.stat3', 'Reponses')}
                </div>
              </div>
            </div>

            {/* Message et CTA */}
            <div className="bg-vinted border-4 border-black p-5 sm:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white border-3 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-vinted" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                      {t('section.ctaTitle', 'Une question specifique ?')}
                    </h3>
                    <p className="font-body text-sm text-white/80">
                      {t('section.ctaDesc', 'Trouvez toutes les reponses dans notre FAQ complete')}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => navigate('/faq')}
                  className="group inline-flex items-center gap-2 bg-white text-vinted font-display font-bold text-base px-6 py-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 whitespace-nowrap"
                >
                  <HelpCircle className="w-5 h-5" />
                  <span>{t('section.button', 'Consulter la FAQ')}</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
