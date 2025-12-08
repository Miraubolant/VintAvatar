import { GENERATION_OPTIONS, SUBSCRIPTION_STATUS, PLAN_TYPES } from '../constants';

// User profile
export interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

// Subscription types
export type SubscriptionStatus = typeof SUBSCRIPTION_STATUS[keyof typeof SUBSCRIPTION_STATUS];
export type PlanType = typeof PLAN_TYPES[keyof typeof PLAN_TYPES];

export interface Subscription {
  id: string;
  user_id: string;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  status: SubscriptionStatus;
  plan_type: PlanType;
  credits_remaining: number;
  monthly_generations_used: number;
  monthly_limit: number;
  current_period_start: string | null;
  current_period_end: string | null;
  created_at: string;
  updated_at: string;
}

// Usage tracking
export interface UsageTracking {
  id: string;
  user_id: string;
  generation_type: string;
  credits_used: number;
  metadata?: GenerationMetadata;
  created_at: string;
}

export interface GenerationMetadata {
  original_image_url: string;
  generated_image_url: string;
  generation_config: GenerationConfig;
  clothing_type: string;
  model_used: string;
  generation_method: string;
  generation_timestamp: string;
}

// Generation configuration
export type Gender = typeof GENERATION_OPTIONS.genders[number];
export type Carnation = typeof GENERATION_OPTIONS.carnations[number];
export type Morphology = typeof GENERATION_OPTIONS.morphologies[number];
export type Posture = typeof GENERATION_OPTIONS.postures[number];
export type Decor = typeof GENERATION_OPTIONS.decors[number];
export type Age = typeof GENERATION_OPTIONS.ages[number];
export type Angle = typeof GENERATION_OPTIONS.angles[number];
export type Framing = typeof GENERATION_OPTIONS.framings[number];
export type Lighting = typeof GENERATION_OPTIONS.lightings[number];
export type Season = typeof GENERATION_OPTIONS.seasons[number];
export type ClothingType = typeof GENERATION_OPTIONS.clothingTypes[number];

export interface GenerationConfig {
  gender: Gender;
  mannequinType: string;
  carnation: Carnation;
  morphology: Morphology;
  age: Age;
  posture: Posture;
  angle: Angle;
  framing: Framing;
  decor: Decor;
  lighting: Lighting;
  season: Season;
  clothingType: ClothingType;
  showPhone: boolean;
  cropHead: boolean;
}

// Affiliation / Referral system
export interface Affiliation {
  id: string;
  referrer_id: string;
  referred_user_id: string | null;
  referral_code: string;
  status: 'pending' | 'completed';
  bonus_amount: number;
  created_at: string;
  updated_at: string;
}

// Article / Blog
export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags?: string[];
}

// SEO types
export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
  hreflangLinks?: HreflangLink[];
}

export interface HreflangLink {
  hrefLang: string;
  href: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface GenerationResponse {
  success: boolean;
  generated_image_url?: string;
  analysis?: string;
  error?: string;
}

export interface CheckoutSessionResponse {
  url: string;
}

export interface VintedScraperResponse {
  success: boolean;
  images: string[];
  article_info?: {
    title?: string;
    price?: string;
    brand?: string;
  };
  error?: string;
}

// Auth types
export interface AuthState {
  user: import('@supabase/supabase-js').User | null;
  session: import('@supabase/supabase-js').Session | null;
  loading: boolean;
}

// Account stats
export interface AccountStats {
  totalGenerations: number;
  totalCreditsUsed: number;
  subscriptionCount: number;
  firstGenerationDate: string | null;
  lastGenerationDate: string | null;
}

// Generation history item
export interface GenerationHistoryItem {
  id: string;
  original_image_url: string;
  generated_image_url: string;
  generation_config: GenerationConfig;
  clothing_type: string;
  created_at: string;
}
