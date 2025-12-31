import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, Globe } from 'lucide-react';
import { languages, Language } from '../lib/i18n';
import { isArticlePage, getArticleUrlForLanguage } from '../lib/articleTranslations';

interface LanguageSelectorProps {
  compact?: boolean;
  inMobileMenu?: boolean;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ compact = false, inMobileMenu = false }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (languageCode: Language) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);

    // Si on est sur une page article, rediriger vers la version traduite
    if (isArticlePage(location.pathname)) {
      const translatedUrl = getArticleUrlForLanguage(location.pathname, languageCode);
      if (translatedUrl && translatedUrl !== location.pathname) {
        navigate(translatedUrl);
      }
    }
  };

  if (compact) {
    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 px-2 py-1.5 bg-mint border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 font-display font-bold text-xs transform rotate-1 hover:rotate-0"
          aria-label="Changer de langue"
          aria-expanded={isOpen}
        >
          <span className="text-sm">{currentLanguage.flag}</span>
          <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute top-full mt-2 right-0 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-[10000] min-w-[120px] transform -rotate-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-mint transition-colors border-b-2 border-black last:border-b-0 font-display font-bold text-xs ${
                  currentLanguage.code === language.code ? 'bg-pink-pastel' : 'hover:translate-x-[2px]'
                }`}
              >
                <span className="text-sm">{language.flag}</span>
                <span>{language.name}</span>
              </button>
            ))}
          </div>
        )}

        {isOpen && (
          <div
            className="fixed inset-0 z-[9999]"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    );
  }

  // Version pour menu mobile
  if (inMobileMenu) {
    return (
      <div className="w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block w-full text-left px-3 py-2.5 bg-cream border-2 border-black font-display font-bold text-sm uppercase hover:bg-mint hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 transform opacity-0 animate-fade-in"
          style={{
            animationDelay: '600ms',
            animationFillMode: 'forwards'
          }}
          aria-label="Changer de langue"
          aria-expanded={isOpen}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>LANGUE ({currentLanguage.flag})</span>
            </div>
            <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </div>
        </button>

        {isOpen && (
          <div className="mt-1 space-y-1 pl-6">
            {languages.map((language, index) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`block w-full text-left px-3 py-2 border-2 border-black font-display font-bold text-xs transition-all duration-200 transform opacity-0 animate-fade-in ${
                  currentLanguage.code === language.code
                    ? 'bg-pink-pastel'
                    : 'bg-white hover:bg-mint hover:translate-x-[2px]'
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <span className="text-sm">{language.flag}</span> {language.name}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-cream border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 font-display font-bold text-sm transform rotate-1 hover:rotate-0"
        aria-label="Changer de langue"
        aria-expanded={isOpen}
      >
        <span className="text-base">{currentLanguage.flag}</span>
        <span className="hidden sm:inline">{currentLanguage.name}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute bottom-full mb-2 right-0 sm:right-auto sm:left-0 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-[10000] min-w-[140px] transform -rotate-1">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full flex items-center gap-2 px-3 py-2.5 text-left hover:bg-mint transition-colors border-b-2 border-black last:border-b-0 font-display font-bold text-sm ${
                currentLanguage.code === language.code ? 'bg-pink-pastel' : 'hover:translate-x-[2px]'
              }`}
            >
              <span className="text-base">{language.flag}</span>
              <span>{language.name}</span>
            </button>
          ))}
        </div>
      )}

      {/* Overlay pour fermer le menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};