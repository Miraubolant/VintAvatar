import React, { useState, useEffect } from 'react';
import { Cookie, X, Shield, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà donné son consentement
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      // Attendre un peu avant d'afficher la popup
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
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
    <div className={`fixed inset-0 z-[9998] pointer-events-none ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      {/* Cookie popup */}
      <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-auto md:max-w-md lg:max-w-lg pointer-events-auto">
        <div className={`bg-cream border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform ${isClosing ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'} transition-all duration-300`}>
          {/* Header */}
          <div className="bg-vinted border-b-4 border-black p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-mint border-2 border-black transform rotate-12 flex items-center justify-center shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                <Cookie className="w-3 h-3 text-black" />
              </div>
              <h3 className="font-display font-bold text-lg text-white">COOKIES & DONNÉES</h3>
            </div>
            <button
              onClick={handleClose}
              className="w-7 h-7 bg-pink-pastel border-2 border-black flex items-center justify-center shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform hover:rotate-90 transition-all duration-300"
            >
              <X className="w-3 h-3 text-black" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4">
            <div className="space-y-2">
              <p className="font-display font-bold text-sm text-black">
                Nous utilisons des cookies pour améliorer votre expérience !
              </p>
              <p className="text-xs text-black leading-relaxed">
                Ce site utilise des cookies essentiels pour fonctionner et des cookies analytiques pour améliorer nos services. 
                Nous respectons votre vie privée et ne partageons pas vos données personnelles.
              </p>
            </div>

            {/* Types de cookies */}
            <div className="grid grid-cols-1 gap-2">
              <div className="flex items-center gap-2 p-2 bg-white border-2 border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                <Shield className="w-4 h-4 text-vinted" />
                <div>
                  <div className="font-display font-bold text-xs text-black">COOKIES ESSENTIELS</div>
                  <div className="text-xs text-black opacity-75">Nécessaires au fonctionnement</div>
                </div>
              </div>
              <div className="flex items-center gap-2 p-2 bg-white border-2 border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                <Eye className="w-4 h-4 text-vinted" />
                <div>
                  <div className="font-display font-bold text-xs text-black">COOKIES ANALYTIQUES</div>
                  <div className="text-xs text-black opacity-75">Amélioration du service</div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={handleAccept}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-vinted text-white border-3 border-black font-display font-bold text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 transform hover:-rotate-1"
              >
                <Cookie className="w-4 h-4" />
                ACCEPTER TOUT
              </button>
              <button
                onClick={handleReject}
                className="flex-1 px-4 py-2.5 bg-white text-black border-3 border-black font-display font-bold text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 transform hover:rotate-1"
              >
                ESSENTIEL SEULEMENT
              </button>
            </div>

            {/* Privacy policy link */}
            <div className="text-center">
              <button 
                onClick={handlePrivacyPolicy}
                className="text-xs text-black underline hover:text-vinted transition-colors duration-200 font-display hover:transform hover:scale-105"
              >
                Politique de confidentialité
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};