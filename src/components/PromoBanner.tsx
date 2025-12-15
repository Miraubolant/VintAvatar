import React from 'react';
import { Gift } from 'lucide-react';
import Marquee from 'react-fast-marquee';

export const PromoBanner: React.FC = () => {
  const promoText = "PROMO DE NOEL : GENERATION DESCRIPTION OFFERTE";

  return (
    <div className="bg-vinted border-y-2 sm:border-y-4 border-black py-2 sm:py-3">
      <Marquee speed={40} gradient={false} pauseOnHover={true}>
        {[...Array(8)].map((_, index) => (
          <div key={index} className="flex items-center mx-4 sm:mx-8">
            <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-white mr-2 sm:mr-3 shrink-0" />
            <span className="font-display font-bold text-white text-xs sm:text-sm md:text-base tracking-wide whitespace-nowrap">
              {promoText}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};
