import React, { useState } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AuthButton } from './AuthButton';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation('header');

  const navLinks = [
    { href: '#hero', label: t('navigation.features') },
    { href: '#avant-apres', label: t('navigation.beforeAfter') },
    { href: '#tarifs', label: t('navigation.pricing') },
    { href: '#avis', label: t('navigation.reviews') },
    { href: '#blog', label: t('navigation.blog') },
  ];

  const handleNavClick = (href: string) => {
    if (location.pathname !== '/') {
      // Si on n'est pas sur la page d'accueil, naviguer vers la page d'accueil avec l'ancre
      navigate('/' + href);
    } else {
      // Si on est déjà sur la page d'accueil, scroller vers l'élément
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] bg-cream border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          
          {/* Logo Neo-Brutalism Pastel */}
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 group shrink-0"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-vinted border-3 border-black flex items-center justify-center transform -rotate-2 group-hover:rotate-0 transition-transform duration-300 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Sparkles className="text-white w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
            </div>
            
            {/* Titre style Hero VintDress */}
            <div className="flex items-center gap-1">
              <span className="inline-block bg-white border-3 border-black px-2 sm:px-3 py-1 sm:py-1.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-display font-bold text-sm sm:text-base lg:text-lg text-black transform -rotate-1 group-hover:rotate-0 transition-transform duration-300">
                Vint
              </span>
              <span className="inline-block bg-vinted border-3 border-black px-2 sm:px-3 py-1 sm:py-1.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-display font-bold text-sm sm:text-base lg:text-lg text-white transform rotate-1 group-hover:rotate-0 transition-transform duration-300">
                Dress
              </span>
            </div>
          </button>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2.5 font-display font-bold text-sm uppercase border-2 border-transparent hover:bg-mint hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Bouton d'authentification - toujours visible */}
            <AuthButton />

            {/* Menu mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 sm:p-2.5 bg-mint border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-96 border-t-4 border-black' : 'max-h-0'
        }`}>
          <div className="bg-white px-3 py-4 space-y-2">
            {navLinks.map((link, index) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left px-3 py-2.5 bg-cream border-2 border-black font-display font-bold text-sm uppercase hover:bg-mint hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 transform opacity-0 animate-fade-in"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};