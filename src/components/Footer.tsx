import React from 'react';
import { Sparkles, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { LanguageSelector } from './LanguageSelector';

// TikTok icon from Bootstrap Icons
const TikTokIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className}>
    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
  </svg>
);

export const Footer: React.FC = () => {
  const { t } = useTranslation('common');

  const navigationLinks = [
    { href: "/#hero", labelKey: "footer.navigation.home" },
    { href: "/#avant-apres", labelKey: "footer.navigation.beforeAfter" },
    { href: "/#tarifs", labelKey: "footer.navigation.pricing" },
    { href: "/#avis", labelKey: "footer.navigation.reviews" },
    { href: "/#blog", labelKey: "footer.navigation.blog" }
  ];

  return (
    <footer className="bg-white border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">

        {/* Main Footer Content */}
        <div className="py-6 sm:py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            {/* Brand Section - Mobile centered, Desktop left */}
            <div className="flex flex-col items-center lg:items-start gap-3">
              <a href="/#hero" className="flex items-center gap-2 sm:gap-3 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-vinted border-3 border-black flex items-center justify-center transform -rotate-2 group-hover:rotate-0 transition-transform duration-300 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex items-center gap-0.5 sm:gap-1">
                  <span className="inline-block bg-white border-3 border-black px-1.5 sm:px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-display font-bold text-xs sm:text-sm text-black transform -rotate-2 group-hover:rotate-0 transition-transform duration-300">
                    VINT
                  </span>
                  <span className="inline-block bg-vinted border-3 border-black px-1.5 sm:px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-display font-bold text-xs sm:text-sm text-white transform rotate-1 group-hover:rotate-0 transition-transform duration-300">
                    DRESS
                  </span>
                </div>
              </a>

              {/* Made in France badge */}
              <div className="flex items-center gap-1.5 bg-white border-2 border-black px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <MapPin className="w-3 h-3 text-vinted" />
                <span className="font-body font-semibold text-[10px] sm:text-xs text-black">{t('footer.copyright.madeIn')}</span>
              </div>
            </div>

            {/* Navigation Links - Mobile grid, Desktop inline */}
            <nav className="flex justify-center lg:justify-end">
              <div className="grid grid-cols-3 gap-1.5 sm:flex sm:flex-wrap sm:gap-2">
                {navigationLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="bg-vinted text-white font-display font-bold text-[10px] sm:text-xs uppercase px-2 py-1.5 sm:px-3 sm:py-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-vinted/90 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 text-center"
                  >
                    {t(link.labelKey)}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-4 border-black py-4 sm:py-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            {/* Copyright */}
            <div className="text-center sm:text-left">
              <span className="font-display font-bold text-[10px] sm:text-xs text-black">
                {t('footer.copyright.text')}
              </span>
            </div>

            {/* Actions - Language + Links */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {/* Language Selector */}
              <LanguageSelector />

              {/* Legal Link */}
              <Link
                to="/cgu"
                className="bg-white text-black font-display font-bold text-[10px] sm:text-xs px-2 py-1.5 sm:px-3 sm:py-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-mint hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                {t('footer.links.legal')}
              </Link>

              {/* Contact Link */}
              <a
                href="mailto:contact@vintdress.com"
                className="bg-vinted text-white font-display font-bold text-[10px] sm:text-xs px-2 py-1.5 sm:px-3 sm:py-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex items-center gap-1.5"
              >
                <Mail className="w-3 h-3" />
                {t('footer.links.contact')}
              </a>

              {/* TikTok Link */}
              <a
                href="https://www.tiktok.com/@vintdress.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white font-display font-bold text-[10px] sm:text-xs px-2 py-1.5 sm:px-3 sm:py-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-pink-pastel hover:text-black hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex items-center gap-1.5"
              >
                <TikTokIcon className="w-3 h-3" />
                TIKTOK
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
