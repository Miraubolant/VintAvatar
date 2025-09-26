import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import des traductions
import commonFr from '../locales/fr/common.json';
import heroFr from '../locales/fr/hero.json';
import headerFr from '../locales/fr/header.json';
import pricingFr from '../locales/fr/pricing.json';
import beforeafterFr from '../locales/fr/beforeafter.json';
import howItWorksFr from '../locales/fr/howItWorks.json';
import testimonialsFr from '../locales/fr/testimonials.json';
import accountFr from '../locales/fr/account.json';
import authFr from '../locales/fr/auth.json';
import generationFr from '../locales/fr/generation.json';
import blogFr from '../locales/fr/blog.json';
import legalFr from '../locales/fr/legal.json';
import avatarConfigFr from '../locales/fr/avatarConfig.json';
import guideFr from '../locales/fr/guide.json';
import faqFr from '../locales/fr/faq.json';

import commonEn from '../locales/en/common.json';
import heroEn from '../locales/en/hero.json';
import headerEn from '../locales/en/header.json';
import pricingEn from '../locales/en/pricing.json';
import beforeafterEn from '../locales/en/beforeafter.json';
import howItWorksEn from '../locales/en/howItWorks.json';
import testimonialsEn from '../locales/en/testimonials.json';
import accountEn from '../locales/en/account.json';
import authEn from '../locales/en/auth.json';
import generationEn from '../locales/en/generation.json';
import blogEn from '../locales/en/blog.json';
import legalEn from '../locales/en/legal.json';
import avatarConfigEn from '../locales/en/avatarConfig.json';
import guideEn from '../locales/en/guide.json';
import faqEn from '../locales/en/faq.json';

import commonEs from '../locales/es/common.json';
import heroEs from '../locales/es/hero.json';
import headerEs from '../locales/es/header.json';
import pricingEs from '../locales/es/pricing.json';
import beforeafterEs from '../locales/es/beforeafter.json';
import howItWorksEs from '../locales/es/howItWorks.json';
import testimonialsEs from '../locales/es/testimonials.json';
import accountEs from '../locales/es/account.json';
import authEs from '../locales/es/auth.json';
import generationEs from '../locales/es/generation.json';
import blogEs from '../locales/es/blog.json';
import legalEs from '../locales/es/legal.json';
import avatarConfigEs from '../locales/es/avatarConfig.json';
import guideEs from '../locales/es/guide.json';
import faqEs from '../locales/es/faq.json';

import commonIt from '../locales/it/common.json';
import heroIt from '../locales/it/hero.json';
import headerIt from '../locales/it/header.json';
import pricingIt from '../locales/it/pricing.json';
import beforeafterIt from '../locales/it/beforeafter.json';
import howItWorksIt from '../locales/it/howItWorks.json';
import testimonialsIt from '../locales/it/testimonials.json';
import accountIt from '../locales/it/account.json';
import authIt from '../locales/it/auth.json';
import generationIt from '../locales/it/generation.json';
import blogIt from '../locales/it/blog.json';
import legalIt from '../locales/it/legal.json';
import avatarConfigIt from '../locales/it/avatarConfig.json';
import guideIt from '../locales/it/guide.json';
import faqIt from '../locales/it/faq.json';

export const resources = {
  fr: {
    common: commonFr,
    hero: heroFr,
    header: headerFr,
    pricing: pricingFr,
    beforeafter: beforeafterFr,
    howItWorks: howItWorksFr,
    testimonials: testimonialsFr,
    account: accountFr,
    auth: authFr,
    generation: generationFr,
    blog: blogFr,
    legal: legalFr,
    avatarConfig: avatarConfigFr,
    guide: guideFr,
    faq: faqFr,
  },
  en: {
    common: commonEn,
    hero: heroEn,
    header: headerEn,
    pricing: pricingEn,
    beforeafter: beforeafterEn,
    howItWorks: howItWorksEn,
    testimonials: testimonialsEn,
    account: accountEn,
    auth: authEn,
    generation: generationEn,
    blog: blogEn,
    legal: legalEn,
    avatarConfig: avatarConfigEn,
    guide: guideEn,
    faq: faqEn,
  },
  es: {
    common: commonEs,
    hero: heroEs,
    header: headerEs,
    pricing: pricingEs,
    beforeafter: beforeafterEs,
    howItWorks: howItWorksEs,
    testimonials: testimonialsEs,
    account: accountEs,
    auth: authEs,
    generation: generationEs,
    blog: blogEs,
    legal: legalEs,
    avatarConfig: avatarConfigEs,
    guide: guideEs,
    faq: faqEs,
  },
  it: {
    common: commonIt,
    hero: heroIt,
    header: headerIt,
    pricing: pricingIt,
    beforeafter: beforeafterIt,
    howItWorks: howItWorksIt,
    testimonials: testimonialsIt,
    account: accountIt,
    auth: authIt,
    generation: generationIt,
    blog: blogIt,
    legal: legalIt,
    avatarConfig: avatarConfigIt,
    guide: guideIt,
    faq: faqIt,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr', // langue par défaut
    fallbackLng: 'fr',

    // Options de détection améliorées
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      lookupLocalStorage: 'language',
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,
      caches: ['localStorage'],
      excludeCacheFor: ['cimode'], // exclure le mode CI
      convertDetectedLanguage: (lng: string) => {
        // Normaliser les codes langue détectés
        const normalizedLng = lng.toLowerCase().split('-')[0];
        const supportedLanguages = ['fr', 'en', 'es', 'it'];
        return supportedLanguages.includes(normalizedLng) ? normalizedLng : 'fr';
      },
    },

    // Namespaces
    ns: ['common', 'hero', 'header', 'pricing', 'beforeafter', 'howItWorks', 'testimonials', 'account', 'auth', 'generation', 'blog', 'legal', 'avatarConfig', 'guide', 'faq'],
    defaultNS: 'common',

    interpolation: {
      escapeValue: false, // React fait déjà l'échappement
    },

    // Options pour le développement
    debug: import.meta.env.DEV,

    // Fallback pour les clés manquantes
    saveMissing: import.meta.env.DEV,
    missingKeyHandler: import.meta.env.DEV ? (lng, ns, key) => {
      // console.warn(`Missing translation: ${lng}:${ns}:${key}`);
    } : undefined,
  });

export default i18n;

// Types pour TypeScript
export type Language = 'fr' | 'en' | 'es' | 'it';

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
];