import React, { useEffect, useRef } from 'react';
import { Gift } from 'lucide-react';

export const PromoBanner: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    track.getAnimations().forEach(anim => anim.cancel());

    const animation = track.animate(
      [
        { transform: 'translateX(0)' },
        { transform: 'translateX(-50%)' }
      ],
      {
        duration: 25000,
        iterations: Infinity,
        easing: 'linear'
      }
    );

    return () => {
      animation.cancel();
    };
  }, []);

  return (
    <div className="bg-vinted border-t-[3px] border-b-[3px] sm:border-t-4 sm:border-b-4 border-black py-2.5 sm:py-3 overflow-hidden shadow-[0_3px_0_0_rgba(0,0,0,1)] sm:shadow-[0_4px_0_0_rgba(0,0,0,1)]">
      <div
        ref={trackRef}
        className="flex items-center cursor-default"
        style={{ willChange: 'transform', width: 'max-content' }}
      >
        {[...Array(8)].map((_, index) => (
          <div key={index} className="flex items-center mx-8 sm:mx-14 shrink-0">
            <Gift className="w-6 h-6 sm:w-7 sm:h-7 text-white mr-3 sm:mr-4 shrink-0" strokeWidth={2.5} />
            <span className="font-display font-bold text-white text-sm sm:text-base md:text-lg tracking-wide whitespace-nowrap uppercase">
              PROMO NOËL : GÉNÉRATION DESCRIPTION OFFERTE
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
