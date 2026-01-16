import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    handleClose();
  };

  const handleReject = () => {
    localStorage.setItem('cookie_consent', 'rejected');
    handleClose();
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 300);
  };

  const handlePrivacyPolicy = () => {
    navigate('/confidentialite');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[9998] p-2 sm:p-3 transition-transform duration-300 ease-out ${
        isClosing ? 'translate-y-full' : 'translate-y-0'
      }`}
    >
      {/* Compact banner */}
      <div className="max-w-4xl mx-auto bg-white border-2 sm:border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3 sm:p-4">

          {/* Icon + Text */}
          <div className="flex items-start sm:items-center gap-2 flex-1 min-w-0">
            <div className="flex-shrink-0 w-8 h-8 bg-mint border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <Cookie className="w-4 h-4 text-black" />
            </div>
            <p className="text-xs sm:text-sm text-black leading-snug">
              <span className="font-display font-bold">Cookies</span>
              <span className="hidden sm:inline"> – </span>
              <br className="sm:hidden" />
              <span className="text-gray-600">
                Ce site utilise des cookies pour améliorer votre expérience.{' '}
                <button
                  onClick={handlePrivacyPolicy}
                  className="underline hover:text-vinted transition-colors"
                >
                  En savoir plus
                </button>
              </span>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={handleReject}
              className="px-3 py-1.5 sm:py-2 bg-cream text-black border-2 border-black font-display font-bold text-[10px] sm:text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-150"
            >
              REFUSER
            </button>
            <button
              onClick={handleAccept}
              className="px-3 py-1.5 sm:py-2 bg-vinted text-white border-2 border-black font-display font-bold text-[10px] sm:text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-150"
            >
              ACCEPTER
            </button>
            <button
              onClick={handleClose}
              aria-label="Fermer"
              className="p-1.5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-pink-pastel hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-150"
            >
              <X className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
