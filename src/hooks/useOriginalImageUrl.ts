import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

// Cache global pour les URLs signées (partagé entre tous les composants)
const signedUrlCache = new Map<string, { url: string; expires: number }>();
const CACHE_DURATION = 23 * 60 * 60 * 1000; // 23 heures

/**
 * Extrait le chemin du fichier depuis une URL (signed URL ou chemin permanent)
 * Gère les anciens formats (signed URLs) et le nouveau format (chemin permanent)
 */
function extractFilePath(urlOrPath: string): string | null {
  if (!urlOrPath) return null;

  // Nouveau format : chemin permanent "original-images/userId/timestamp-original.jpg"
  if (urlOrPath.startsWith('original-images/')) {
    return urlOrPath.replace('original-images/', '');
  }

  // Ancien format : signed URL contenant "original-images/"
  const pathMatch = urlOrPath.match(/original-images\/(.+?)(\?|$)/);
  if (pathMatch) {
    return pathMatch[1];
  }

  return null;
}

/**
 * Génère une signed URL fraîche pour une image originale
 */
export async function resolveOriginalImageUrl(urlOrPath: string): Promise<string> {
  if (!urlOrPath) return '';

  const filePath = extractFilePath(urlOrPath);
  if (!filePath) return urlOrPath;

  // Vérifier le cache
  const cached = signedUrlCache.get(filePath);
  if (cached && cached.expires > Date.now()) {
    return cached.url;
  }

  try {
    const { data } = await supabase.storage
      .from('original-images')
      .createSignedUrl(filePath, 86400); // 24 heures

    if (data?.signedUrl) {
      signedUrlCache.set(filePath, {
        url: data.signedUrl,
        expires: Date.now() + CACHE_DURATION
      });
      return data.signedUrl;
    }
  } catch (err) {
    console.warn('Erreur création URL signée:', err);
  }

  return '';
}

/**
 * Résout plusieurs URLs en parallèle par lots
 */
export async function resolveOriginalImageUrls(
  urls: string[],
  batchSize = 5
): Promise<string[]> {
  const results: string[] = new Array(urls.length).fill('');

  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const resolved = await Promise.all(batch.map(resolveOriginalImageUrl));
    resolved.forEach((url, idx) => {
      results[i + idx] = url;
    });
  }

  return results;
}

/**
 * Hook React pour résoudre une URL d'image originale
 */
export function useOriginalImageUrl(urlOrPath: string | undefined | null): string {
  const [resolvedUrl, setResolvedUrl] = useState<string>('');

  useEffect(() => {
    if (!urlOrPath) {
      setResolvedUrl('');
      return;
    }

    let cancelled = false;

    resolveOriginalImageUrl(urlOrPath).then(url => {
      if (!cancelled) {
        setResolvedUrl(url);
      }
    });

    return () => { cancelled = true; };
  }, [urlOrPath]);

  return resolvedUrl;
}
