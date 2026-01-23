import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { LanguageSelector } from './LanguageSelector';

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

export const Footer: React.FC = () => {
  const { t } = useTranslation('common');

  // Main navigation - anchor links
  const mainLinks = [
    { href: "/#hero", labelKey: "footer.navigation.home" },
    { href: "/#avant-apres", labelKey: "footer.navigation.beforeAfter" },
    { href: "/#tarifs", labelKey: "footer.navigation.pricing" },
    { href: "/#avis", labelKey: "footer.navigation.reviews" },
  ];

  // Page links - routes
  const pageLinks = [
    { to: "/galerie", label: "Galerie" },
    { to: "/leaderboard", label: "Classement" },
    { to: "/faq", label: "FAQ" },
    { to: "/blog", label: "Blog" },
  ];

  return (
    <footer className="bg-white border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">

        {/* Main Footer Content */}
        <div className="py-5 sm:py-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

            {/* Brand Section - Mobile centered, Desktop left */}
            <div className="flex flex-col items-center lg:items-start gap-3">
              <a href="/#hero" className="flex items-center gap-2 sm:gap-3 group">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-vinted border-2 sm:border-3 border-black rounded-xl flex items-center justify-center transform -rotate-2 group-hover:rotate-0 transition-transform duration-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <VintDressIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="flex items-center gap-0.5">
                  <span className="inline-block bg-white border-2 sm:border-3 border-black px-1.5 py-0.5 sm:py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-display font-bold text-xs text-black transform -rotate-2 group-hover:rotate-0 transition-transform duration-300">
                    VINT
                  </span>
                  <span className="inline-block bg-vinted border-2 sm:border-3 border-black px-1.5 py-0.5 sm:py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-display font-bold text-xs text-white transform rotate-1 group-hover:rotate-0 transition-transform duration-300">
                    DRESS
                  </span>
                </div>
              </a>

              {/* Made in France badge */}
              <div className="flex items-center gap-1.5 bg-white border-2 border-black px-2 py-0.5 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                <MapPin className="w-2.5 h-2.5 text-vinted" />
                <span className="font-body font-semibold text-[9px] sm:text-[10px] text-black">{t('footer.copyright.madeIn')}</span>
              </div>
            </div>

            {/* Navigation - Two rows on mobile */}
            <div className="flex flex-col gap-3 lg:gap-4">
              {/* Main navigation */}
              <nav className="flex justify-center lg:justify-end">
                <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                  {mainLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="bg-cream text-black font-display font-bold text-[9px] sm:text-[10px] uppercase px-2 py-1 sm:px-2.5 sm:py-1.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-vinted hover:text-white hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 text-center"
                    >
                      {t(link.labelKey)}
                    </a>
                  ))}
                </div>
              </nav>

              {/* Page links */}
              <nav className="flex justify-center lg:justify-end">
                <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                  {pageLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="bg-vinted text-white font-display font-bold text-[9px] sm:text-[10px] uppercase px-2 py-1 sm:px-2.5 sm:py-1.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-mint hover:text-black hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 text-center"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-3 border-black py-3 sm:py-4">
          <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">

            {/* Copyright */}
            <div className="text-center sm:text-left">
              <span className="font-display font-bold text-[9px] sm:text-[10px] text-black">
                {t('footer.copyright.text')}
              </span>
            </div>

            {/* Actions - Language + Links */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
              {/* Language Selector */}
              <LanguageSelector />

              {/* Legal Link */}
              <Link
                to="/cgu"
                className="bg-white text-black font-display font-bold text-[9px] sm:text-[10px] px-2 py-1 sm:px-2.5 sm:py-1.5 border-2 border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:bg-mint hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                {t('footer.links.legal')}
              </Link>

              {/* Contact Link */}
              <a
                href="mailto:contact@vintdress.com"
                className="bg-vinted text-white font-display font-bold text-[9px] sm:text-[10px] px-2 py-1 sm:px-2.5 sm:py-1.5 border-2 border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex items-center gap-1"
              >
                <Mail className="w-2.5 h-2.5" />
                {t('footer.links.contact')}
              </a>

              {/* TikTok Link */}
              <a
                href="https://www.tiktok.com/@vintdress.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white font-display font-bold text-[9px] sm:text-[10px] px-2 py-1 sm:px-2.5 sm:py-1.5 border-2 border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:bg-pink-pastel hover:text-black hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex items-center gap-1"
              >
                <TikTokIcon className="w-2.5 h-2.5" />
                TIKTOK
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
