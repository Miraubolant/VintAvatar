import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, Wand2, Image, Images, CreditCard, Star, Gift, HelpCircle, BookOpen } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AuthButton } from './AuthButton';

// VintDress Bolt Icon
const VintDressIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path
      d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// TikTok icon from Bootstrap Icons
const TikTokIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className}>
    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
  </svg>
);

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [stickyDropdownOpen, setStickyDropdownOpen] = useState(false);
  const [showDesktopHeader, setShowDesktopHeader] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const stickyDropdownRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation('header');

  // Handle scroll for desktop header visibility
  // Hide when scrolling up, show only when at top of page
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isAtTop = currentScrollY < 50;
      const isScrollingUp = currentScrollY < lastScrollY.current;

      if (isAtTop) {
        // At top of page: always show header
        setShowDesktopHeader(true);
      } else if (isScrollingUp) {
        // Scrolling up but not at top: hide header
        setShowDesktopHeader(false);
      } else {
        // Scrolling down: show header
        setShowDesktopHeader(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
      if (stickyDropdownRef.current && !stickyDropdownRef.current.contains(event.target as Node)) {
        setStickyDropdownOpen(false);
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
    { href: '/leaderboard', label: t('navigation.leaderboard'), isRoute: true },
  ];

  const afterDropdownLinks = [
    { href: '/galerie', label: t('navigation.gallery'), isRoute: true },
    { href: '/faq', label: t('navigation.faq'), isRoute: true },
    { href: '/blog', label: t('navigation.blog'), isRoute: true },
  ];

  // All links for mobile menu with icons
  const allMobileLinks = [
    { href: '#hero', label: t('navigation.features'), icon: Wand2, bgColor: 'bg-pink-pastel', iconColor: 'text-black' },
    { href: '#avant-apres', label: t('navigation.beforeAfter'), icon: Image, bgColor: 'bg-vinted', iconColor: 'text-white' },
    { href: '#tarifs', label: t('navigation.pricing'), icon: CreditCard, bgColor: 'bg-pink-pastel', iconColor: 'text-black' },
    { href: '#avis', label: t('navigation.reviews'), icon: Star, bgColor: 'bg-vinted', iconColor: 'text-white' },
    { href: '/leaderboard', label: t('navigation.leaderboard'), isRoute: true, icon: Gift, bgColor: 'bg-vinted', iconColor: 'text-white' },
    { href: '/galerie', label: t('navigation.gallery'), isRoute: true, icon: Images, bgColor: 'bg-vinted', iconColor: 'text-white' },
    { href: '/faq', label: t('navigation.faq'), isRoute: true, icon: HelpCircle, bgColor: 'bg-vinted', iconColor: 'text-white' },
    { href: '/blog', label: t('navigation.blog'), isRoute: true, icon: BookOpen, bgColor: 'bg-vinted', iconColor: 'text-white' },
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
    <>
    {/* Mobile/Tablet Header - Only visible on mobile/tablet */}
    <header className="fixed top-0 left-0 right-0 z-[9999] lg:hidden">
      {/* Main Header Bar */}
      <div className="bg-white border-b-4 border-black">
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
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-vinted border-3 border-black rounded-xl flex items-center justify-center transform -rotate-2 group-hover:rotate-0 transition-transform duration-300 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <VintDressIcon className="text-white w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
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
      </div>

      {/* Mobile Menu Overlay - Bottom Sheet Neo-Brutalism */}
      <div
        className={`lg:hidden fixed inset-0 z-[9998] transition-all duration-300 ${
          mobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Bottom Sheet Panel */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-cream border-t-4 border-black transform transition-transform duration-300 ease-out overflow-hidden ${
            mobileMenuOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
          style={{ maxHeight: '85vh' }}
        >
          {/* Handle Bar */}
          <div className="flex justify-center pt-3 pb-1">
            <div className="w-12 h-1.5 bg-black/30 rounded-full"></div>
          </div>

          {/* Menu Header - Neo-Brutalism Style */}
          <div className="relative bg-vinted border-b-4 border-black px-4 py-3 overflow-hidden">
            {/* Decorative shapes */}
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-pink-pastel border-3 border-black transform rotate-12 opacity-60"></div>
            <div className="absolute -bottom-3 right-16 w-8 h-8 bg-mint border-2 border-black transform -rotate-6 opacity-50"></div>

            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-white border-3 border-black rounded-xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transform -rotate-3">
                  <VintDressIcon className="w-5 h-5 text-vinted" />
                </div>
                <div>
                  <span className="font-display font-bold text-white text-lg uppercase tracking-wide block">Navigation</span>
                  <span className="font-body text-white/80 text-xs">Explore VintDress</span>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 bg-pink-pastel border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-150"
              >
                <X className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto px-4 pt-4 pb-6" style={{ maxHeight: 'calc(85vh - 100px)' }}>
            {/* Navigation Grid - 2x4 layout for better touch targets */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              {allMobileLinks.map((link) => {
                const IconComponent = link.icon;

                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href, link.isRoute)}
                    className="group flex items-center gap-3 p-3 bg-white border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-150"
                  >
                    <div className={`w-11 h-11 ${link.bgColor} border-3 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform rotate-3 group-hover:rotate-0 transition-transform duration-200 flex-shrink-0`}>
                      <IconComponent className={`w-5 h-5 ${link.iconColor}`} />
                    </div>
                    <span className="font-display font-bold text-sm uppercase tracking-wide text-left leading-tight text-black">
                      {link.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Separator with decoration */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex-1 h-0.5 bg-black/20"></div>
              <div className="w-3 h-3 bg-vinted border-2 border-black transform rotate-45"></div>
              <div className="flex-1 h-0.5 bg-black/20"></div>
            </div>

            {/* TikTok Section - Enhanced */}
            <a
              href="https://www.tiktok.com/@vintdress.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="group flex items-center gap-4 w-full p-4 bg-vinted text-white border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-vinted/90 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-150"
            >
              <div className="w-12 h-12 bg-white border-3 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform -rotate-3 group-hover:rotate-0 transition-transform duration-200">
                <TikTokIcon className="w-6 h-6 text-black" />
              </div>
              <div className="flex-1">
                <span className="font-display font-bold text-base uppercase tracking-wide block">Suis-nous sur TikTok</span>
                <span className="font-body text-white/70 text-xs">@vintdress.com</span>
              </div>
              <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <ChevronDown className="w-4 h-4 text-black transform -rotate-90" />
              </div>
            </a>

            {/* Footer Branding */}
            <div className="flex items-center justify-center gap-3 mt-6 pt-4 border-t-2 border-black/20">
              <div className="flex items-center gap-1">
                <span className="inline-block bg-white border-2 border-black px-2.5 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-display font-bold text-xs text-black transform -rotate-2">
                  VINT
                </span>
                <span className="inline-block bg-vinted border-2 border-black px-2.5 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-display font-bold text-xs text-white transform rotate-2">
                  DRESS
                </span>
              </div>
              <span className="font-body text-xs text-gray-500">Avatars IA pour Vinted</span>
            </div>
          </div>
        </div>
      </div>

    </header>

    {/* Desktop Header - Floating style, separate from mobile header */}
    <div
      className={`hidden lg:block fixed top-4 left-1/2 -translate-x-1/2 z-[10000] transition-all duration-300 ${
          showDesktopHeader
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] px-3 py-2">
          <div className="flex items-center gap-3">
            {/* Compact Logo */}
            <button
              onClick={() => {
                if (location.pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  navigate('/');
                }
              }}
              className="flex items-center gap-1.5 group shrink-0"
            >
              <div className="w-9 h-9 bg-vinted border-2 border-black rounded-xl flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform -rotate-2 group-hover:rotate-0 transition-transform duration-200">
                <VintDressIcon className="text-white w-4 h-4" />
              </div>
              <div className="flex items-center gap-0.5">
                <span className="bg-white border-2 border-black px-1.5 py-0.5 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] font-display font-bold text-xs text-black transform -rotate-1">
                  VINT
                </span>
                <span className="bg-vinted border-2 border-black px-1.5 py-0.5 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] font-display font-bold text-xs text-white transform rotate-1">
                  DRESS
                </span>
              </div>
            </button>

            {/* Separator */}
            <div className="w-0.5 h-8 bg-black/20"></div>

            {/* Compact Navigation */}
            <nav className="flex items-center gap-0.5">
              {mainNavLinks.map((link) => (
                <button
                  key={`sticky-${link.href}`}
                  onClick={() => handleNavClick(link.href)}
                  className="px-2.5 py-1.5 font-display font-bold text-xs uppercase border-2 border-transparent hover:bg-vinted hover:text-white hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-150"
                >
                  {link.label}
                </button>
              ))}

              {/* Sticky Dropdown */}
              <div className="relative" ref={stickyDropdownRef}>
                <button
                  onClick={() => setStickyDropdownOpen(!stickyDropdownOpen)}
                  className={`px-2.5 py-1.5 font-display font-bold text-xs uppercase border-2 flex items-center gap-1 transition-all duration-150 ${
                    stickyDropdownOpen
                      ? 'bg-vinted text-white border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                      : 'border-transparent hover:bg-vinted hover:text-white hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                  }`}
                >
                  {t('navigation.reviews')}
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${stickyDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {stickyDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] min-w-[140px] z-50">
                    {dropdownLinks.map((link) => (
                      <button
                        key={`sticky-${link.href}`}
                        onClick={() => {
                          handleNavClick(link.href, link.isRoute);
                          setStickyDropdownOpen(false);
                        }}
                        className="w-full text-left px-3 py-2 font-display font-bold text-xs uppercase hover:bg-vinted hover:text-white border-b-2 border-black last:border-b-0 transition-colors duration-150"
                      >
                        {link.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {afterDropdownLinks.map((link) => (
                <button
                  key={`sticky-${link.href}`}
                  onClick={() => handleNavClick(link.href, link.isRoute)}
                  className="px-2.5 py-1.5 font-display font-bold text-xs uppercase border-2 border-transparent hover:bg-vinted hover:text-white hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-150"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Separator */}
            <div className="w-0.5 h-8 bg-black/20"></div>

            {/* Auth Button */}
            <AuthButton compact />
          </div>
        </div>
      </div>
    </>
  );
};
