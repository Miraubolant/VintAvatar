// Application routes
export const ROUTES = {
  HOME: '/',
  AUTH_CALLBACK: '/auth/callback',
  SUCCESS: '/success',
  CANCEL: '/cancel',
  ACCOUNT: '/account',
  ARTICLE: '/articles/:slug',
  BLOG: '/blog/:slug',
  CGU: '/cgu',
  CONFIDENTIALITE: '/confidentialite',
  FAQ: '/faq',
} as const;

// Account page tabs
export const ACCOUNT_TABS = {
  STATS: 'stats',
  HISTORY: 'history',
  AFFILIATE: 'affiliate',
} as const;

// Supported languages
export const SUPPORTED_LANGUAGES = ['fr', 'en', 'es', 'it'] as const;
export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];

export const DEFAULT_LANGUAGE: SupportedLanguage = 'fr';

// Language metadata
export const LANGUAGE_META: Record<SupportedLanguage, { name: string; flag: string; hreflang: string }> = {
  fr: { name: 'Français', flag: '🇫🇷', hreflang: 'fr-FR' },
  en: { name: 'English', flag: '🇬🇧', hreflang: 'en' },
  es: { name: 'Español', flag: '🇪🇸', hreflang: 'es' },
  it: { name: 'Italiano', flag: '🇮🇹', hreflang: 'it' },
};

// Site metadata for SEO
export const SITE_CONFIG = {
  name: 'VintDress',
  url: 'https://vintdress.com',
  defaultImage: 'https://vintdress.com/og-image.jpg',
  logo: 'https://vintdress.com/logo.png',
  themeColor: '#09B1BA',
  twitterHandle: '@vintdress',
} as const;

// Pricing tiers
export const PRICING_TIERS = {
  PACK_10: {
    id: 'pack-10',
    name: 'Pack 10 Crédits',
    credits: 10,
    price: 3.49,
    currency: 'EUR',
  },
  PACK_25: {
    id: 'pack-25',
    name: 'Pack 25 Crédits',
    credits: 25,
    price: 6.99,
    currency: 'EUR',
  },
  MONTHLY: {
    id: 'monthly',
    name: 'Abonnement Mensuel',
    generations: 40,
    price: 11.99,
    currency: 'EUR',
  },
} as const;

// Storage bucket names
export const STORAGE_BUCKETS = {
  ORIGINAL_IMAGES: 'original-images',
  GENERATED_AVATARS: 'generated-avatars',
} as const;

// Request cache TTLs (in milliseconds)
export const CACHE_TTL = {
  AUTH_SESSION: 10000,
  SUBSCRIPTION: 20000,
  DEFAULT: 30000,
} as const;

// Generation configuration options
export const GENERATION_OPTIONS = {
  genders: ['femme', 'homme', 'auto'] as const,
  carnations: ['claire', 'medium', 'mate', 'foncee'] as const,
  morphologies: ['slim', 'average', 'athletic', 'curvy'] as const,
  postures: ['debout', 'assis', 'accroupi', 'cambre'] as const,
  decors: ['studio-pro', 'chambre', 'cabine', 'exterieur'] as const,
  ages: ['auto', '18-25', '26-35', '36-50'] as const,
  angles: ['face', '3-4', 'profil', 'auto'] as const,
  framings: ['corps-entier', 'mi-corps', 'plan-rapproche'] as const,
  lightings: ['studio', 'naturel', 'dramatique', 'doux'] as const,
  seasons: ['auto', 'printemps', 'ete', 'automne', 'hiver'] as const,
  clothingTypes: ['auto', 't-shirt', 'chemise', 'pull', 'veste', 'manteau', 'pantalon', 'jupe', 'robe', 'short', 'chaussures'] as const,
} as const;

// API endpoints
export const API_ENDPOINTS = {
  ANALYZE_AND_GENERATE: 'analyze-and-generate',
  CREATE_CHECKOUT_SESSION: 'create-checkout-session',
  STRIPE_WEBHOOK: 'stripe-webhook',
  CANCEL_SUBSCRIPTION: 'cancel-subscription',
  DELETE_ACCOUNT: 'delete-account',
  VINTED_SCRAPER: 'vinted-scraper',
} as const;

// Subscription statuses
export const SUBSCRIPTION_STATUS = {
  ACTIVE: 'active',
  CANCELED: 'canceled',
  PAST_DUE: 'past_due',
  UNPAID: 'unpaid',
} as const;

// Plan types
export const PLAN_TYPES = {
  MONTHLY: 'monthly',
  CREDITS: 'credits',
} as const;
