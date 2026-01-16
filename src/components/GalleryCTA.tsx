import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Images, ArrowRight, Sparkles } from 'lucide-react';

export const GalleryCTA: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-12 sm:py-16 bg-grain overflow-hidden">
      {/* Decorative shapes */}
      <div className="hidden lg:block absolute top-8 left-12 w-10 h-10 bg-mint border-3 border-black transform rotate-12 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] pointer-events-none"></div>
      <div className="hidden lg:block absolute bottom-8 right-12 w-8 h-8 bg-pink-pastel border-2 border-black transform -rotate-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 sm:p-8 lg:p-10 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-mint border-3 border-black transform rotate-12 opacity-30 pointer-events-none"></div>
          <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-pink-pastel border-3 border-black transform -rotate-12 opacity-30 pointer-events-none"></div>

          <div className="relative flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-vinted border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-3">
                <Images className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-black mb-2">
                Découvrez notre galerie communautaire
              </h2>
              <p className="font-body text-sm sm:text-base text-gray-600 mb-4 lg:mb-0">
                Explorez des centaines de transformations réalisées par notre IA.
                Inspirez-vous des résultats de notre communauté avant de créer vos propres avatars.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex-shrink-0">
              <button
                onClick={() => navigate('/galerie')}
                className="group flex items-center gap-3 px-6 py-4 bg-vinted text-white border-4 border-black font-display font-bold text-sm sm:text-base uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                <Sparkles className="w-5 h-5" />
                <span>Voir la galerie</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>

          {/* Stats mini */}
          <div className="relative mt-6 pt-6 border-t-2 border-black/20 flex justify-center gap-8 sm:gap-12">
            <div className="text-center">
              <span className="font-display font-bold text-lg sm:text-xl text-black">30 sec</span>
              <span className="font-body text-[10px] sm:text-xs text-gray-500 uppercase tracking-wide block">Génération rapide</span>
            </div>
            <div className="w-px h-10 bg-black"></div>
            <div className="text-center">
              <span className="font-display font-bold text-lg sm:text-xl text-black">100%</span>
              <span className="font-body text-[10px] sm:text-xs text-gray-500 uppercase tracking-wide block">Gratuit à voir</span>
            </div>
            <div className="w-px h-10 bg-black"></div>
            <div className="text-center">
              <span className="font-display font-bold text-lg sm:text-xl text-black">+1</span>
              <span className="font-body text-[10px] sm:text-xs text-gray-500 uppercase tracking-wide block">Crédit si tu partages</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
