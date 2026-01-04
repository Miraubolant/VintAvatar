import React from 'react';
import { HelpCircle, MessageCircle, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const FAQSection: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('faq');

  return (
    <section className="relative py-16 lg:py-20 bg-cream overflow-hidden">
      {/* Formes décoratives neo-brutalism */}
      <div className="absolute top-16 right-20 w-12 h-12 bg-pink-pastel border-3 border-black transform rotate-45 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"></div>
      <div className="absolute bottom-24 left-12 w-10 h-10 bg-mint border-3 border-black neo-shape-circle shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hidden lg:block"></div>
      <div className="absolute top-32 right-1/4 w-14 h-14 bg-vinted border-4 border-black transform -rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hidden lg:block"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre style Hero */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight">
            <span className="inline-block bg-white text-black border-2 sm:border-3 border-black px-3 sm:px-4 py-1 sm:py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 mb-2">
              {t('heroTitle.line1', 'DES QUESTIONS')}
            </span>
            <br />
            <span className="inline-block bg-mint text-black border-2 sm:border-3 border-black px-3 sm:px-4 py-1 sm:py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
              {t('heroTitle.line2', 'ON RÉPOND !')}
            </span>
          </h2>
          <p className="font-body font-semibold text-gray-600 text-base sm:text-lg mt-4">
            {t('section.subtitle', 'Consultez notre FAQ complète pour tout savoir sur VintDress')}
          </p>
        </div>

        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="p-8 sm:p-12 lg:p-16">

            {/* Points clés */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-3">
                <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center text-white font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex-shrink-0">
                  1
                </div>
                <p className="font-display font-semibold text-black">
                  {t('section.point1', 'Comment utiliser l\'outil')}
                </p>
              </div>

              <div className="flex items-center gap-3 p-3">
                <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center text-white font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex-shrink-0">
                  2
                </div>
                <p className="font-display font-semibold text-black">
                  {t('section.point2', 'Tarifs et abonnements')}
                </p>
              </div>

              <div className="flex items-center gap-3 p-3">
                <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center text-white font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex-shrink-0">
                  3
                </div>
                <p className="font-display font-semibold text-black">
                  {t('section.point3', 'Optimisation des ventes')}
                </p>
              </div>

              <div className="flex items-center gap-3 p-3">
                <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center text-white font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex-shrink-0">
                  4
                </div>
                <p className="font-display font-semibold text-black">
                  {t('section.point4', 'Protection et confidentialité')}
                </p>
              </div>
            </div>

            {/* Bouton CTA */}
            <div className="text-center">
              <button
                onClick={() => navigate('/faq')}
                className="group inline-flex items-center gap-3 bg-vinted text-white font-display font-bold text-lg px-8 py-4 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                <HelpCircle className="w-6 h-6" />
                <span>{t('section.button', 'Consulter la FAQ')}</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};