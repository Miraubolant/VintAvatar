import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Menu, X, ChevronDown, Home, Image, Images, CreditCard, Star, Trophy, HelpCircle, BookOpen } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AuthButton } from './AuthButton';

// TikTok icon from Bootstrap Icons
const TikTokIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className}>
    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
  </svg>
);

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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const mainNavLinks = [
    { href: '#hero', label: t('navigation.features') },
    { href: '#avant-apres', label: t('navigation.beforeAfter') },
    { href: '#tarifs', label: t('navigation.pricing') },
  ];

  const dropdownLinks = [
    { href: '#avis', label: t('navigation.reviews') },
    { href: '#leaderboard', label: t('navigation.leaderboard') },
    { href: '/galerie', label: t('navigation.gallery', 'Galerie'), isRoute: true },
  ];

  const afterDropdownLinks = [
    { href: '/faq', label: t('navigation.faq'), isRoute: true },
    { href: '/blog', label: t('navigation.blog'), isRoute: true },
  ];

  // All links for mobile menu with icons
  const allMobileLinks = [
    { href: '#hero', label: t('navigation.features'), icon: Home },
    { href: '#avant-apres', label: t('navigation.beforeAfter'), icon: Image },
    { href: '#tarifs', label: t('navigation.pricing'), icon: CreditCard },
    { href: '#avis', label: t('navigation.reviews'), icon: Star },
    { href: '#leaderboard', label: t('navigation.leaderboard'), icon: Trophy },
    { href: '/galerie', label: t('navigation.gallery', 'Galerie'), isRoute: true, icon: Images },
    { href: '/faq', label: t('navigation.faq'), isRoute: true, icon: HelpCircle },
    { href: '/blog', label: t('navigation.blog'), isRoute: true, icon: BookOpen },
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
    <header className="fixed top-0 left-0 right-0 z-[9999] bg-white border-b-4 border-black">
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
                      onClick={() => handleNavClick(link.href, link.isRoute)}
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

      </div>

      {/* Mobile Menu Overlay - Bottom Sheet Neo-Brutalism */}
      <div
        className={`lg:hidden fixed inset-0 z-[9998] transition-all duration-300 ${
          mobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Bottom Sheet Panel */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-cream border-t-4 border-black transform transition-transform duration-300 ease-out overflow-hidden ${
            mobileMenuOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
          style={{ maxHeight: '80vh' }}
        >
          {/* Menu Header - Vinted Style */}
          <div className="bg-vinted border-b-4 border-black px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white border-3 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <Sparkles className="w-5 h-5 text-vinted" />
                </div>
                <span className="font-display font-bold text-white text-xl uppercase tracking-wide">Menu</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 bg-red-500 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-150"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto p-4" style={{ maxHeight: 'calc(80vh - 80px)' }}>
            {/* Navigation Grid - 3 columns for better readability */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {allMobileLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href, link.isRoute)}
                    className={`flex flex-col items-center gap-2 p-4 bg-white border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-vinted hover:text-white active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 transform ${
                      mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                    style={{
                      transitionDelay: mobileMenuOpen ? `${index * 40}ms` : '0ms'
                    }}
                  >
                    <div className="w-12 h-12 bg-mint border-3 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-display font-bold text-xs uppercase tracking-wide text-center leading-tight">
                      {link.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* TikTok Section */}
            <a
              href="https://www.tiktok.com/@vintdress.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-center gap-3 w-full px-4 py-4 bg-black text-white border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-vinted active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 transform ${
                mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{
                transitionDelay: mobileMenuOpen ? `${allMobileLinks.length * 40}ms` : '0ms'
              }}
            >
              <div className="w-10 h-10 bg-white border-3 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <TikTokIcon className="w-5 h-5 text-black" />
              </div>
              <span className="font-display font-bold text-sm uppercase tracking-wide">TikTok</span>
            </a>

            {/* Footer Branding */}
            <div className="flex items-center justify-center gap-2 mt-5 pt-4 border-t-3 border-black">
              <div className="flex items-center gap-1">
                <span className="inline-block bg-white border-2 border-black px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-display font-bold text-xs text-black">
                  VINT
                </span>
                <span className="inline-block bg-vinted border-2 border-black px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-display font-bold text-xs text-white">
                  DRESS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
