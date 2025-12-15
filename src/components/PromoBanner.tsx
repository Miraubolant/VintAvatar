import React, { useEffect, useRef, useState } from 'react';
import { Gift } from 'lucide-react';

export const PromoBanner: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Sticky behavior on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!placeholderRef.current) return;

      // Header heights: h-16 (64px), sm:h-20 (80px), lg:h-24 (96px)
      const headerHeight = window.innerWidth >= 1024 ? 96 : window.innerWidth >= 640 ? 80 : 64;
      const placeholderTop = placeholderRef.current.getBoundingClientRect().top;

      // Banner becomes sticky when its original position reaches the header bottom
      setIsSticky(placeholderTop <= headerHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Marquee animation
  useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    track.getAnimations().forEach(anim => anim.cancel());

    // Faster on mobile (12s) vs desktop (18s)
    const duration = isMobile ? 12000 : 18000;

    const animation = track.animate(
      [
        { transform: 'translateX(0)' },
        { transform: 'translateX(-50%)' }
      ],
      {
        duration,
        iterations: Infinity,
        easing: 'linear'
      }
    );

    return () => {
      animation.cancel();
    };
  }, [isMobile]);

  const bannerClasses = `bg-vinted border-t-[3px] border-b-[3px] sm:border-t-4 sm:border-b-4 border-black py-2.5 sm:py-3 overflow-hidden shadow-[0_3px_0_0_rgba(0,0,0,1)] sm:shadow-[0_4px_0_0_rgba(0,0,0,1)] ${
    isSticky ? 'fixed left-0 right-0 top-16 sm:top-20 lg:top-24 z-[9998]' : ''
  }`;

  return (
    <>
      {/* Placeholder to maintain layout when banner is fixed */}
      <div
        ref={placeholderRef}
        style={{ height: isSticky ? (bannerRef.current?.offsetHeight || 0) : 0 }}
      />

      <div ref={bannerRef} className={bannerClasses}>
        <div
          ref={trackRef}
          className="flex items-center cursor-default"
          style={{ willChange: 'transform', width: 'max-content' }}
        >
          {[...Array(8)].map((_, index) => (
            <div key={index} className="flex items-center mx-8 sm:mx-14 shrink-0">
              <Gift className="w-6 h-6 sm:w-7 sm:h-7 text-white mr-3 sm:mr-4 shrink-0" strokeWidth={2.5} />
              <span className="font-display font-bold text-white text-sm sm:text-base md:text-lg tracking-wide whitespace-nowrap uppercase">
                PROMO NOËL : 1 AVATAR GÉNÉRÉ = 1 DESCRIPTION OFFERTE
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
