import React from 'react';
import { Sparkles, Mail, Twitter, Github, Zap, ArrowRight, Heart, Globe, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { LanguageSelector } from './LanguageSelector';

export const Footer: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="relative bg-white text-black border-t-4 border-black overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

        {/* Footer Content neo-brutalism */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Brand Section */}
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-vinted border-4 border-black transform rotate-3 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="font-display font-bold text-3xl text-black">{t('footer.brand.title')}</div>
                <div className="font-body font-semibold text-lg text-vinted">{t('footer.brand.subtitle')}</div>
              </div>
            </div>

            {/* Navigation avec style */}
            <div className="flex flex-wrap gap-4 md:justify-end">
              {[
                { href: "#hero", labelKey: "footer.navigation.home", bg: "bg-mint" },
                { href: "#methode", labelKey: "footer.navigation.method", bg: "bg-white" },
                { href: "#avant-apres", labelKey: "footer.navigation.beforeAfter", bg: "bg-pink-pastel" },
                { href: "#tarifs", labelKey: "footer.navigation.pricing", bg: "bg-vinted", text: "text-white" },
                { href: "#avis", labelKey: "footer.navigation.reviews", bg: "bg-white" },
                { href: "#blog", labelKey: "footer.navigation.blog", bg: "bg-mint" }
              ].map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className={`${link.bg} ${link.text || 'text-black'} font-display font-bold text-sm px-4 py-2 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 transform rotate-1 hover:rotate-0`}
                >
                  {t(link.labelKey)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright avec style neo-brutalism */}
        <div className="border-t-4 border-black py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="bg-white border-3 border-black px-6 py-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
              <div className="font-display font-bold text-black text-lg">
                {t('footer.copyright.text')}
              </div>
              <div className="font-body font-semibold text-vinted text-sm">
                {t('footer.copyright.madeIn')}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* Language Selector */}
              <LanguageSelector />

              {/* Links */}
              <div className="flex gap-3 text-sm">
                <Link
                  to="/cgu"
                  className="bg-mint text-black font-body font-semibold px-3 py-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                >
                  {t('footer.links.legal')}
                </Link>
                <a
                  href="mailto:contact@vintedavatar.com"
                  className="bg-vinted text-white font-body font-semibold px-3 py-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                >
                  {t('footer.links.contact')}
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};