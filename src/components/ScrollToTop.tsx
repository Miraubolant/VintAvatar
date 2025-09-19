import React, { useState, useEffect, useRef } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [upwardScrollCount, setUpwardScrollCount] = useState(0);
  const lastScrollY = useRef(0);
  const hideTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      // Check if scrolling up
      if (currentScrollY < lastScrollY.current && currentScrollY > 300) {
        setUpwardScrollCount(prev => {
          const newCount = prev + 1;

          // Show button after 2 consecutive upward scrolls
          if (newCount >= 2) {
            setIsVisible(true);

            // Clear any existing timer
            if (hideTimer.current) {
              clearTimeout(hideTimer.current);
            }

            // Hide button after 3 seconds
            hideTimer.current = setTimeout(() => {
              setIsVisible(false);
              setUpwardScrollCount(0);
            }, 3000);

            return 0; // Reset counter after showing
          }

          return newCount;
        });
      } else {
        // Reset counter if scrolling down or at top
        setUpwardScrollCount(0);
        if (currentScrollY <= 300) {
          setIsVisible(false);
          if (hideTimer.current) {
            clearTimeout(hideTimer.current);
          }
        }
      }

      lastScrollY.current = currentScrollY;
    };

    // Throttle scroll event for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll);

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    // Hide button immediately when clicked
    setIsVisible(false);
    setUpwardScrollCount(0);

    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
    }

    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className={`fixed bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        className={`
          relative
          w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16
          bg-vinted hover:bg-vinted
          border-3 lg:border-4 border-black
          text-white
          font-display font-bold
          shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] lg:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
          hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] lg:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
          hover:translate-x-[-1px] hover:translate-y-[-1px] lg:hover:translate-x-[-2px] lg:hover:translate-y-[-2px]
          rotate-3 hover:rotate-0
          flex items-center justify-center
          group
          transition-all duration-200
        `}
        aria-label="Remonter en haut de la page"
      >
        <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
      </button>
    </div>
  );
};