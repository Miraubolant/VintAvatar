import { useState, useEffect, useRef } from 'react';
import { User, Session, AuthError } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';
import { requestCache } from '../lib/requestCache';

export interface AuthState {
  user: User | null;
  session: Session | null;
  loading: boolean;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    session: null,
    loading: true,
  });

  // Prevent duplicate session requests
  const sessionRequestRef = useRef<Promise<any> | null>(null);
  const isInitializedRef = useRef(false);

  useEffect(() => {
    // Prevent multiple initializations
    if (isInitializedRef.current) return;
    isInitializedRef.current = true;

    // Get initial session with caching
    const getInitialSession = async () => {
      try {
        const result = await requestCache.get(
          'auth-session',
          () => supabase.auth.getSession(),
          10000 // 10 second cache for session
        );

        // Check if result and result.data exist
        const session = result?.data?.session ?? null;

        setAuthState({
          user: session?.user ?? null,
          session,
          loading: false,
        });
      } catch (error) {
        // console.error('Error getting session:', error);
        setAuthState({
          user: null,
          session: null,
          loading: false,
        });
      }
    };

    getInitialSession();

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      // Clear session cache on auth changes
      requestCache.clear('auth-session');

      setAuthState({
        user: session?.user ?? null,
        session,
        loading: false,
      });
    });

    return () => {
      subscription.unsubscribe();
      isInitializedRef.current = false;
      requestCache.clear('auth-session');
    };
  }, []);

  const signInWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}`,
        },
      });

      if (error) {
        // console.error('Auth error:', error);

        let userMessage = '❌ Erreur de connexion avec Google.';

        if (error.message.includes('popup')) {
          userMessage = '🪟 Veuillez autoriser les pop-ups et réessayer.';
        } else if (error.message.includes('network')) {
          userMessage = '🌐 Problème de connexion. Vérifiez votre internet.';
        }

        alert(`${userMessage}\n\nCode d'erreur: ${error.message}`);
        throw error;
      }
    } catch (error) {
      // console.error('Sign in error:', error);
      throw error;
    }
  };

  const signInWithFacebook = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'facebook',
        options: {
          redirectTo: `${window.location.origin}`,
          scopes: 'email,public_profile',
        },
      });

      if (error) {
        let userMessage = 'Erreur de connexion avec Facebook.';

        if (error.message.includes('popup')) {
          userMessage = 'Veuillez autoriser les pop-ups et réessayer.';
        } else if (error.message.includes('network')) {
          userMessage = 'Problème de connexion. Vérifiez votre internet.';
        }

        alert(`${userMessage}\n\nCode d'erreur: ${error.message}`);
        throw error;
      }
    } catch (error) {
      throw error;
    }
  };

  const signInWithEmail = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password,
      });

      if (error) {
        // console.error('Email sign in error:', error);
        throw error;
      }
    } catch (error) {
      // console.error('Email sign in error:', error);
      throw error;
    }
  };

  const signUpWithEmail = async (email: string, password: string, fullName?: string) => {
    try {
      const { error } = await supabase.auth.signUp({
        email: email.trim(),
        password: password,
        options: {
          data: {
            full_name: fullName?.trim() || '',
          }
        }
      });

      if (error) {
        // console.error('Email sign up error:', error);
        throw error;
      }
    } catch (error) {
      // console.error('Email sign up error:', error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        // console.error('Sign out error:', error);
        alert('❌ Erreur lors de la déconnexion. Veuillez réessayer.');
        throw error;
      }
    } catch (error) {
      // console.error('Sign out error:', error);
      throw error;
    }
  };

  const deleteUserAccount = async () => {
    try {
      // Get the current session for authentication
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        throw new Error('Session expirée. Veuillez vous reconnecter.');
      }

      const { data, error } = await supabase.functions.invoke('delete-account', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) {
        throw new Error(error.message || 'Erreur lors de la suppression du compte');
      }

      // Sign out after successful deletion
      // The auth state will be automatically updated by the listener
      await signOut();
      
      return data;
    } catch (error: any) {
      // console.error('Error deleting account:', error);
      throw new Error(error.message || 'Erreur lors de la suppression du compte');
    }
  };

  return {
    ...authState,
    signInWithGoogle,
    signInWithFacebook,
    signInWithEmail,
    signUpWithEmail,
    signOut,
    deleteUserAccount,
  };
};