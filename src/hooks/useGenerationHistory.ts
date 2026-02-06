import { useState, useEffect, useRef } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './useAuth';
import { resolveOriginalImageUrl } from './useOriginalImageUrl';

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
  vinted_article_url: string | null;
  is_public: boolean;
}

export const useGenerationHistory = () => {
  const { user } = useAuth();
  const [history, setHistory] = useState<GenerationHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const fetchInProgressRef = useRef(false);

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
    if (!user || fetchInProgressRef.current) return;

    try {
      fetchInProgressRef.current = true;
      setLoading(true);
      setError(null);

      // Fetch ALL generation history
      const { data, error: fetchError } = await supabase
        .from('usage_tracking')
        .select('*')
        .eq('user_id', user.id)
        .eq('generation_type', 'avatar')
        .order('created_at', { ascending: false });

      if (fetchError) throw fetchError;

      // Affichage rapide sans attendre les URLs signées
      const quickHistoryItems: GenerationHistoryItem[] = (data || []).map((item) => ({
        id: item.id,
        created_at: item.created_at,
        generation_type: item.generation_type,
        credits_used: item.credits_used,
        original_image_url: item.metadata?.original_image_url || '',
        generated_image_url: item.metadata?.generated_image_url || '',
        clothing_analysis: item.metadata?.clothing_analysis || {},
        generation_config: item.metadata?.generation_config || {},
        model_used: item.metadata?.model_used || 'unknown',
        vinted_listing: item.metadata?.vinted_listing || null,
        vinted_article_url: item.metadata?.vinted_article_url || null,
        is_public: item.is_public || false
      }));

      // Afficher immédiatement
      setHistory(quickHistoryItems);
      setLoading(false);

      // Résoudre les URLs des images originales en arrière-plan par lots
      const itemsNeedingSignedUrls = quickHistoryItems.filter(
        item => item.original_image_url
      );

      if (itemsNeedingSignedUrls.length > 0) {
        const batchSize = 5;
        for (let i = 0; i < itemsNeedingSignedUrls.length; i += batchSize) {
          const batch = itemsNeedingSignedUrls.slice(i, i + batchSize);
          const signedUrls = await Promise.all(
            batch.map(item => resolveOriginalImageUrl(item.original_image_url))
          );

          setHistory(prev => prev.map(item => {
            const batchIndex = batch.findIndex(b => b.id === item.id);
            if (batchIndex !== -1 && signedUrls[batchIndex]) {
              return { ...item, original_image_url: signedUrls[batchIndex] };
            }
            return item;
          }));
        }
      }
    } catch (err) {
      console.error('Error fetching generation history:', err);
      setError('Erreur lors du chargement de l\'historique');
      setLoading(false);
    } finally {
      fetchInProgressRef.current = false;
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