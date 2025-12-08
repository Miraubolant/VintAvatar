import { supabase } from './supabase';
import { API_ENDPOINTS } from '../constants';
import type {
  GenerationConfig,
  GenerationResponse,
  CheckoutSessionResponse,
  VintedScraperResponse,
  ApiResponse,
} from '../types';

class ApiError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public details?: unknown
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

async function getAuthToken(): Promise<string> {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session?.access_token) {
    throw new ApiError('Session expirée. Veuillez vous reconnecter.', 401);
  }
  return session.access_token;
}

async function invokeFunction<T>(
  functionName: string,
  body?: Record<string, unknown>,
  requiresAuth = true
): Promise<T> {
  const headers: Record<string, string> = {};

  if (requiresAuth) {
    const token = await getAuthToken();
    headers.Authorization = `Bearer ${token}`;
  }

  const { data, error } = await supabase.functions.invoke(functionName, {
    body,
    headers,
  });

  if (error) {
    throw new ApiError(
      error.message || `Erreur lors de l'appel à ${functionName}`,
      500,
      error
    );
  }

  return data as T;
}

// Image generation API
export const imageApi = {
  async generate(
    imageData: string,
    config: GenerationConfig,
    userId: string,
    isUrl = false
  ): Promise<GenerationResponse> {
    return invokeFunction<GenerationResponse>(API_ENDPOINTS.ANALYZE_AND_GENERATE, {
      imageData,
      config,
      userId,
      isUrl,
    });
  },
};

// Vinted scraper API
export const vintedApi = {
  async scrapeImages(vintedUrl: string): Promise<VintedScraperResponse> {
    return invokeFunction<VintedScraperResponse>(API_ENDPOINTS.VINTED_SCRAPER, {
      vintedUrl,
    });
  },
};

// Payment / Stripe API
export const paymentApi = {
  async createCheckoutSession(
    priceId: string,
    mode: 'payment' | 'subscription',
    successUrl: string,
    cancelUrl: string
  ): Promise<CheckoutSessionResponse> {
    return invokeFunction<CheckoutSessionResponse>(
      API_ENDPOINTS.CREATE_CHECKOUT_SESSION,
      {
        priceId,
        mode,
        successUrl,
        cancelUrl,
      }
    );
  },

  async cancelSubscription(subscriptionId: string): Promise<ApiResponse> {
    return invokeFunction<ApiResponse>(API_ENDPOINTS.CANCEL_SUBSCRIPTION, {
      subscriptionId,
    });
  },
};

// Account API
export const accountApi = {
  async deleteAccount(): Promise<ApiResponse> {
    return invokeFunction<ApiResponse>(API_ENDPOINTS.DELETE_ACCOUNT);
  },
};

// Subscription queries
export const subscriptionApi = {
  async getAll(userId: string) {
    const { data, error } = await supabase
      .from('subscriptions')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      throw new ApiError('Erreur lors de la récupération des abonnements', 500, error);
    }

    return data;
  },

  async getActive(userId: string) {
    const { data, error } = await supabase
      .from('subscriptions')
      .select('*')
      .eq('user_id', userId)
      .eq('status', 'active')
      .order('created_at', { ascending: false });

    if (error) {
      throw new ApiError('Erreur lors de la récupération des abonnements actifs', 500, error);
    }

    return data;
  },
};

// Usage tracking queries
export const usageApi = {
  async getHistory(userId: string, limit = 50) {
    const { data, error } = await supabase
      .from('usage_tracking')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
      throw new ApiError('Erreur lors de la récupération de l\'historique', 500, error);
    }

    return data;
  },

  async getStats(userId: string) {
    const { data, error } = await supabase
      .from('usage_tracking')
      .select('id, credits_used, created_at')
      .eq('user_id', userId)
      .order('created_at', { ascending: true });

    if (error) {
      throw new ApiError('Erreur lors de la récupération des statistiques', 500, error);
    }

    return data;
  },
};

// Profile queries
export const profileApi = {
  async get(userId: string) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error && error.code !== 'PGRST116') {
      throw new ApiError('Erreur lors de la récupération du profil', 500, error);
    }

    return data;
  },

  async update(userId: string, updates: Partial<{ full_name: string; avatar_url: string }>) {
    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', userId)
      .select()
      .single();

    if (error) {
      throw new ApiError('Erreur lors de la mise à jour du profil', 500, error);
    }

    return data;
  },
};

// Affiliation queries
export const affiliationApi = {
  async get(userId: string) {
    const { data, error } = await supabase
      .from('affiliations')
      .select('*')
      .eq('referrer_id', userId)
      .single();

    if (error && error.code !== 'PGRST116') {
      throw new ApiError('Erreur lors de la récupération des affiliations', 500, error);
    }

    return data;
  },

  async getReferrals(userId: string) {
    const { data, error } = await supabase
      .from('affiliations')
      .select('*')
      .eq('referrer_id', userId)
      .not('referred_user_id', 'is', null)
      .order('created_at', { ascending: false });

    if (error) {
      throw new ApiError('Erreur lors de la récupération des parrainages', 500, error);
    }

    return data;
  },
};

// Export error class for catching
export { ApiError };

// Default export for convenience
export const api = {
  image: imageApi,
  vinted: vintedApi,
  payment: paymentApi,
  account: accountApi,
  subscription: subscriptionApi,
  usage: usageApi,
  profile: profileApi,
  affiliation: affiliationApi,
};

export default api;
