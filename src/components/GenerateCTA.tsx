import React from 'react';
import { Sparkles, ArrowUp } from 'lucide-react';

export const GenerateCTA: React.FC = () => {
  const scrollToHero = () => {
    const heroElement = document.getElementById('hero');
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-8 sm:py-10 bg-grain overflow-hidden">
      {/* Decorative shapes */}
      <div className="hidden lg:block absolute top-6 left-12 w-8 h-8 bg-mint border-2 border-black transform rotate-12 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] pointer-events-none"></div>
      <div className="hidden lg:block absolute bottom-6 right-12 w-6 h-6 bg-pink-pastel border-2 border-black transform -rotate-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card with vinted background */}
        <div className="bg-vinted border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-4 sm:p-6 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute -top-3 -right-3 w-16 h-16 bg-white border-2 border-black transform rotate-12 opacity-20 pointer-events-none"></div>
          <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-mint border-2 border-black transform -rotate-12 opacity-20 pointer-events-none"></div>

          <div className="relative text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transform -rotate-3 mb-3 sm:mb-4">
              <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-vinted" />
            </div>

            {/* Title */}
            <h2 className="font-display font-bold text-xl sm:text-2xl text-white mb-2 sm:mb-3">
              Prêt à transformer vos photos ?
            </h2>

            {/* Description */}
            <p className="font-body text-xs sm:text-sm text-white/90 mb-4 sm:mb-5 max-w-md mx-auto">
              Créez des mannequins IA professionnels pour vos vêtements Vinted en quelques secondes.
            </p>

            {/* CTA Button */}
            <button
              onClick={scrollToHero}
              className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-vinted border-3 border-black font-display font-bold text-xs sm:text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <Sparkles className="w-4 h-4" />
              <span>Générer mon avatar</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-200" />
            </button>

            {/* Mini stats */}
            <div className="mt-5 sm:mt-6 pt-4 border-t-2 border-white/20 flex justify-center gap-5 sm:gap-8">
              <div className="text-center">
                <span className="font-display font-bold text-lg sm:text-xl text-white">30s</span>
                <span className="font-body text-[9px] sm:text-[10px] text-white/70 uppercase tracking-wide block">Génération</span>
              </div>
              <div className="w-px h-8 bg-white/30"></div>
              <div className="text-center">
                <span className="font-display font-bold text-lg sm:text-xl text-white">3,99€</span>
                <span className="font-body text-[9px] sm:text-[10px] text-white/70 uppercase tracking-wide block">À partir de</span>
              </div>
              <div className="w-px h-8 bg-white/30"></div>
              <div className="text-center">
                <span className="font-display font-bold text-lg sm:text-xl text-white">+85%</span>
                <span className="font-body text-[9px] sm:text-[10px] text-white/70 uppercase tracking-wide block">Ventes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
