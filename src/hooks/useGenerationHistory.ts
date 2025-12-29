import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './useAuth';

export interface VintedListing {
  title: string;
  description: string;
}

export interface GenerationHistoryItem {
  id: string;
  created_at: string;
  generation_type: string;
  credits_used: number;
  original_image_url: string;
  generated_image_url: string;
  clothing_analysis: any;
  generation_config: any;
  model_used: string;
  vinted_listing: VintedListing | null;
}

export const useGenerationHistory = () => {
  const { user } = useAuth();
  const [history, setHistory] = useState<GenerationHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      setHistory([]);
      setLoading(false);
      return;
    }

    fetchGenerationHistory();
  }, [user]);

  // Écouter les mises à jour de l'historique
  useEffect(() => {
    const handleHistoryUpdate = () => {
      if (user) {
        fetchGenerationHistory();
      }
    };

    window.addEventListener('generation-history-updated', handleHistoryUpdate);
    
    return () => {
      window.removeEventListener('generation-history-updated', handleHistoryUpdate);
    };
  }, [user]);

  const fetchGenerationHistory = async () => {
    if (!user) return;

    try {
      setLoading(true);
      setError(null);

      // Fetch ALL generation history (no pagination on server side)
      const { data, error } = await supabase
        .from('usage_tracking')
        .select('*')
        .eq('user_id', user.id)
        .eq('generation_type', 'avatar')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      const historyItems: GenerationHistoryItem[] = await Promise.all(
        (data || []).map(async (item) => {
          let originalImageUrl = item.metadata?.original_image_url || '';
          
          // Si l'URL originale contient un token expiré, créer une nouvelle URL signée
          if (originalImageUrl && originalImageUrl.includes('original-images')) {
            try {
              const pathMatch = originalImageUrl.match(/original-images\/(.+?)(\?|$)/);
              if (pathMatch) {
                const filePath = pathMatch[1];
                const { data: signedUrl } = await supabase.storage
                  .from('original-images')
                  .createSignedUrl(filePath, 3600); // 1 heure
                
                if (signedUrl?.signedUrl) {
                  originalImageUrl = signedUrl.signedUrl;
                }
              }
            } catch (error) {
              console.warn('Erreur création URL signée:', error);
              // Garder l'URL originale en cas d'erreur
            }
          }
          
          return {
            id: item.id,
            created_at: item.created_at,
            generation_type: item.generation_type,
            credits_used: item.credits_used,
            original_image_url: originalImageUrl,
            generated_image_url: item.metadata?.generated_image_url || '',
            clothing_analysis: item.metadata?.clothing_analysis || {},
            generation_config: item.metadata?.generation_config || {},
            model_used: item.metadata?.model_used || 'unknown',
            vinted_listing: item.metadata?.vinted_listing || null
          };
        })
      );

      setHistory(historyItems);
    } catch (error) {
      console.error('Error fetching generation history:', error);
      setError('Erreur lors du chargement de l\'historique');
    } finally {
      setLoading(false);
    }
  };

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return {
    history,
    loading,
    error,
    refetch: fetchGenerationHistory,
    formatDateTime,
  };
};