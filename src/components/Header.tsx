import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Menu, X, ChevronDown } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AuthButton } from './AuthButton';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation('header');

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const mainNavLinks = [
    { href: '#hero', label: t('navigation.features') },
    { href: '#avant-apres', label: t('navigation.beforeAfter') },
    { href: '#tarifs', label: t('navigation.pricing') },
  ];

  const dropdownLinks = [
    { href: '#avis', label: t('navigation.reviews') },
    { href: '#leaderboard', label: t('navigation.leaderboard') },
  ];

  const afterDropdownLinks = [
    { href: '/faq', label: t('navigation.faq'), isRoute: true },
    { href: '/blog', label: t('navigation.blog'), isRoute: true },
  ];

  // All links for mobile menu
  const allMobileLinks = [
    { href: '#hero', label: t('navigation.features') },
    { href: '#avant-apres', label: t('navigation.beforeAfter') },
    { href: '#tarifs', label: t('navigation.pricing') },
    { href: '#avis', label: t('navigation.reviews') },
    { href: '#leaderboard', label: t('navigation.leaderboard') },
    { href: '/faq', label: t('navigation.faq'), isRoute: true },
    { href: '/blog', label: t('navigation.blog'), isRoute: true },
  ];

  const handleNavClick = (href: string, isRoute?: boolean) => {
    if (isRoute) {
      navigate(href);
    } else if (location.pathname !== '/') {
      navigate('/' + href);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] bg-cream border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">

          {/* Logo Neo-Brutalism Pastel */}
          <button
            onClick={() => {
              if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                navigate('/');
              }
            }}
            className="flex items-center gap-2 group shrink-0"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-vinted border-3 border-black flex items-center justify-center transform -rotate-2 group-hover:rotate-0 transition-transform duration-300 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Sparkles className="text-white w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
            </div>

            {/* Titre style Hero VintDress - Horizontal */}
            <div className="flex items-center gap-0.5 sm:gap-1">
              <span className="inline-block bg-white border-3 border-black px-1.5 sm:px-2 lg:px-3 py-1 sm:py-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-display font-bold text-xs sm:text-sm lg:text-base text-black transform -rotate-2 group-hover:rotate-0 transition-transform duration-300">
                VINT
              </span>
              <span className="inline-block bg-vinted border-3 border-black px-1.5 sm:px-2 lg:px-3 py-1 sm:py-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-display font-bold text-xs sm:text-sm lg:text-base text-white transform rotate-1 group-hover:rotate-0 transition-transform duration-300">
                DRESS
              </span>
            </div>
          </button>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Main nav links */}
            {mainNavLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2.5 font-display font-bold text-sm uppercase border-2 border-transparent hover:bg-vinted hover:text-white hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                {link.label}
              </button>
            ))}

            {/* Dropdown for Avis + Classement */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`px-3 py-2.5 font-display font-bold text-sm uppercase border-2 flex items-center gap-1 transition-all duration-200 ${
                  dropdownOpen
                    ? 'bg-vinted text-white border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                    : 'border-transparent hover:bg-vinted hover:text-white hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                }`}
              >
                {t('navigation.reviews')}
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown menu */}
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] min-w-[160px] z-50">
                  {dropdownLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className="w-full text-left px-4 py-3 font-display font-bold text-sm uppercase hover:bg-vinted hover:text-white border-b-2 border-black last:border-b-0 transition-colors duration-150"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* After dropdown links */}
            {afterDropdownLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href, link.isRoute)}
                className="px-3 py-2.5 font-display font-bold text-sm uppercase border-2 border-transparent hover:bg-vinted hover:text-white hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
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
              className="lg:hidden p-2 sm:p-2.5 bg-mint border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-vinted hover:text-white hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
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
          mobileMenuOpen ? 'max-h-[500px] border-t-4 border-black' : 'max-h-0'
        }`}>
          <div className="bg-white px-3 py-4 space-y-2">
            {allMobileLinks.map((link, index) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href, link.isRoute)}
                className="block w-full text-left px-3 py-2.5 bg-cream border-2 border-black font-display font-bold text-sm uppercase hover:bg-vinted hover:text-white hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 transform opacity-0 animate-fade-in"
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
