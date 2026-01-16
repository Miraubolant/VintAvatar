import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  ArrowLeft,
  Loader2,
  Sparkles,
  X,
  AlertCircle,
  ImagePlus,
  Check,
  ImageIcon,
  FileSearch,
  Zap,
  Star,
  Users,
  BookOpen,
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import { SITE_CONFIG } from '../constants';
import { useAuth } from '../hooks/useAuth';
import { useSEO } from '../hooks/useSEO';
import { AvatarConfigModal } from '../components/AvatarConfigModal';
import { articles } from '../data/articles';
import { GenerationLoadingModal } from '../components/GenerationLoadingModal';
import { AuthModal } from '../components/AuthModal';
import { InvalidFileModal } from '../components/InvalidFileModal';
import { ErrorModal } from '../components/ErrorModal';
import { BeforeAfterComparison } from '../components/BeforeAfterComparison';
import { extractIdFromSlug, slugToTitle } from '../utils/slugify';

// Image compression function (same as HeroSection)
const compressImage = (file: File, maxWidth = 2000, maxHeight = 2000): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;

        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Could not get canvas context'));
          return;
        }

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, width, height);

        let quality = 0.92;
        let compressedBase64 = canvas.toDataURL('image/jpeg', quality);

        const maxSizeBytes = 2 * 1024 * 1024;
        while (compressedBase64.length > maxSizeBytes && quality > 0.6) {
          quality -= 0.05;
          compressedBase64 = canvas.toDataURL('image/jpeg', quality);
        }

        resolve(compressedBase64);
      };
      img.onerror = () => reject(new Error('Failed to load image'));
      img.src = e.target?.result as string;
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
};

const DEFAULT_AVATAR_CONFIG = {
  gender: 'femme',
  mannequinType: 'humain',
  carnation: 'claire',
  morphology: 'S',
  age: '18-25',
  posture: 'debout',
  angle: 'face',
  framing: 'corps-entier',
  decor: 'fond-blanc',
  lighting: 'naturel',
  season: 'auto',
  clothingType: 'auto',
  faceMode: 'visible',
  cropHead: false
};

interface PhotoData {
  id: string;
  created_at: string;
  generated_image_url: string;
  original_image_url: string;
  clothing_type: string;
  title: string;
  description: string;
  slug: string;
}

export const PhotoDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation('gallery');
  const { t: tHero } = useTranslation('hero');
  const { user, session } = useAuth();

  // Photo data state
  const [photoData, setPhotoData] = useState<PhotoData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Upload state (same as HeroSection)
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [vintedUrl, setVintedUrl] = useState('');
  const [vintedImage, setVintedImage] = useState<string | null>(null);
  const [vintedArticleInfo, setVintedArticleInfo] = useState<{
    title?: string;
    price?: string;
    brand?: string;
    size?: string;
    color?: string;
    category?: string;
    condition?: string;
  } | null>(null);
  const [isScrapingVinted, setIsScrapingVinted] = useState(false);
  const [scrapingStep, setScrapingStep] = useState<'connecting' | 'fetching' | 'extracting' | 'complete'>('connecting');
  const [vintedUrlError, setVintedUrlError] = useState<string | null>(null);

  // Generation state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasStoredConfig, setHasStoredConfig] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStage, setGenerationStage] = useState<'analyzing' | 'generating' | 'saving' | 'complete'>('analyzing');
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [showImageRequiredModal, setShowImageRequiredModal] = useState(false);
  const [showAuthRequiredModal, setShowAuthRequiredModal] = useState(false);
  const [showInvalidFileModal, setShowInvalidFileModal] = useState(false);
  const [invalidFileName, setInvalidFileName] = useState<string>('');
  const [showErrorModal, setShowErrorModal] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const timeoutsRef = useRef<Set<ReturnType<typeof setTimeout>>>(new Set());
  const lastExtractedUrlRef = useRef<string | null>(null);

  const createTrackedTimeout = (callback: () => void, delay: number) => {
    const timeoutId = setTimeout(() => {
      callback();
      timeoutsRef.current.delete(timeoutId);
    }, delay);
    timeoutsRef.current.add(timeoutId);
    return timeoutId;
  };

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach((id) => clearTimeout(id));
      timeoutsRef.current.clear();
    };
  }, []);

  // Generate SEO data
  const seoTitle = photoData?.title
    ? `${photoData.title} - Photo Vinted avec Mannequin IA | VintDress`
    : loading ? 'Chargement... | VintDress' : 'Photo non trouvee | VintDress';

  const seoDescription = photoData?.description
    ? photoData.description.substring(0, 160)
    : `Decouvrez cette photo de vetement Vinted transformee avec mannequin IA. Creez vos propres photos professionnelles avec VintDress.`;

  const canonicalUrl = `${SITE_CONFIG.url}/photos/${slug}`;
  const ogImage = photoData?.generated_image_url || SITE_CONFIG.defaultImage;

  useSEO({
    title: seoTitle,
    description: seoDescription,
    canonical: canonicalUrl,
    ogTitle: seoTitle,
    ogDescription: seoDescription,
    ogImage: ogImage,
    ogType: 'article',
    twitterTitle: seoTitle,
    twitterDescription: seoDescription,
    twitterImage: ogImage,
    noindex: error ? true : undefined,
    structuredData: photoData ? {
      '@context': 'https://schema.org',
      '@type': 'ImageObject',
      name: photoData.title,
      description: seoDescription,
      contentUrl: photoData.generated_image_url,
      thumbnailUrl: photoData.generated_image_url,
      datePublished: photoData.created_at,
      author: {
        '@type': 'Organization',
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url
      }
    } : undefined
  });

  // Fetch photo data by slug
  useEffect(() => {
    const fetchPhotoData = async () => {
      if (!slug) {
        setError('Photo non trouvee');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const idSuffix = extractIdFromSlug(slug);

        const { data, error: fetchError } = await supabase
          .from('usage_tracking')
          .select('id, created_at, metadata')
          .eq('is_public', true)
          .eq('generation_type', 'avatar');

        if (fetchError) throw fetchError;

        const matchingPhoto = data?.find(item => {
          const itemSlug = item.metadata?.slug;
          const itemIdSuffix = item.id.replace(/-/g, '').slice(-5);
          return itemSlug === slug || itemIdSuffix === idSuffix;
        });

        if (!matchingPhoto) {
          setError('Photo non trouvee');
          setLoading(false);
          return;
        }

        setPhotoData({
          id: matchingPhoto.id,
          created_at: matchingPhoto.created_at,
          generated_image_url: matchingPhoto.metadata?.generated_image_url || '',
          original_image_url: matchingPhoto.metadata?.original_image_url || '',
          clothing_type: matchingPhoto.metadata?.generation_config?.clothingType || 'autre',
          title: matchingPhoto.metadata?.vinted_listing?.title || slugToTitle(slug),
          description: matchingPhoto.metadata?.vinted_listing?.description || '',
          slug: matchingPhoto.metadata?.slug || slug,
        });
      } catch (err) {
        console.error('Error fetching photo:', err);
        setError('Erreur lors du chargement de la photo');
      } finally {
        setLoading(false);
      }
    };

    fetchPhotoData();
  }, [slug]);

  useEffect(() => {
    const config = localStorage.getItem('avatar_config');
    setHasStoredConfig(!!config);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Select 2 random articles for internal linking (SEO)
  const relatedArticles = useMemo(() => {
    const shuffled = [...articles].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 2);
  }, []);

  // Vinted URL validation
  const isValidVintedUrl = (url: string): boolean => {
    try {
      const parsedUrl = new URL(url);
      const isVintedDomain = parsedUrl.hostname.includes('vinted.');
      const hasValidPath = parsedUrl.pathname.includes('/articles/') || parsedUrl.pathname.includes('/items/');
      return isVintedDomain && hasValidPath;
    } catch {
      return false;
    }
  };

  // Handle Vinted URL validation
  const handleValidateVintedUrl = async () => {
    if (!vintedUrl || isScrapingVinted) return;

    if (!user) {
      setShowAuthRequiredModal(true);
      return;
    }

    if (!isValidVintedUrl(vintedUrl)) {
      setVintedUrlError('URL Vinted invalide. Exemple: vinted.fr/items/12345');
      return;
    }

    try {
      setIsScrapingVinted(true);
      setScrapingStep('connecting');
      setVintedUrlError(null);
      lastExtractedUrlRef.current = vintedUrl;

      createTrackedTimeout(() => setScrapingStep('fetching'), 500);

      const { data: scrapResult, error: scrapError } = await supabase.functions.invoke('vinted-scraper', {
        body: { vintedUrl },
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
        },
      });

      setScrapingStep('extracting');

      if (scrapError || !scrapResult.success || scrapResult.images.length === 0) {
        const errorMsg = scrapResult?.error || 'Impossible de recuperer l\'image depuis ce lien Vinted';
        setVintedUrlError(errorMsg);
        lastExtractedUrlRef.current = null;
        setIsScrapingVinted(false);
        setScrapingStep('connecting');
        return;
      }

      setScrapingStep('complete');

      setUploadedImage(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      setVintedImage(scrapResult.images[0]);
      if (scrapResult.article_info) {
        setVintedArticleInfo(scrapResult.article_info);
      }

      await new Promise(resolve => setTimeout(resolve, 300));

    } catch (err) {
      console.error('Error extracting Vinted image:', err);
      const errorMsg = err instanceof Error ? err.message : 'Erreur lors de la recuperation de l\'image Vinted';
      setVintedUrlError(errorMsg);
      lastExtractedUrlRef.current = null;
    } finally {
      setIsScrapingVinted(false);
      setScrapingStep('connecting');
    }
  };

  const handleUrlSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleValidateVintedUrl();
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!user) {
      setShowAuthRequiredModal(true);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      return;
    }

    const file = event.target.files?.[0];
    if (file) {
      const validImageTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
      if (!validImageTypes.includes(file.type)) {
        setInvalidFileName(file.name);
        setShowInvalidFileModal(true);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
        return;
      }

      try {
        const compressedImage = await compressImage(file);
        setUploadedImage(compressedImage);
        // Clear Vinted image when uploading
        setVintedImage(null);
        setVintedUrl('');
        setVintedArticleInfo(null);
      } catch (err) {
        console.error('Erreur lors de la compression:', err);
        const reader = new FileReader();
        reader.onloadend = () => {
          setUploadedImage(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleRemoveImage = () => {
    setUploadedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleRemoveVintedImage = () => {
    setVintedImage(null);
    setVintedUrl('');
    setVintedArticleInfo(null);
    lastExtractedUrlRef.current = null;
  };

  const checkUserSubscription = async () => {
    try {
      const { data, error: subError } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', user?.id);

      if (subError || !data || data.length === 0) {
        return false;
      }

      const now = new Date().toISOString();

      const totalCredits = data
        .filter(sub => sub.plan_type === 'credits' && sub.status === 'active')
        .reduce((total, sub) => total + sub.credits_remaining, 0);

      if (totalCredits > 0) {
        return true;
      }

      const hasValidMonthly = data.some(subscription => {
        if (subscription.plan_type !== 'monthly') return false;

        if (subscription.status === 'active') {
          return subscription.monthly_generations_used < subscription.monthly_limit;
        }

        if (subscription.current_period_end && subscription.current_period_end > now) {
          return subscription.monthly_generations_used < subscription.monthly_limit;
        }

        return false;
      });

      return hasValidMonthly;
    } catch (err) {
      console.error('Error checking subscription:', err);
      return false;
    }
  };

  const processImageGeneration = async (imageData: string, isUrl: boolean) => {
    setIsGenerating(true);
    setGenerationStage('analyzing');

    try {
      const storedConfig = localStorage.getItem('avatar_config');
      const config = storedConfig
        ? { ...DEFAULT_AVATAR_CONFIG, ...JSON.parse(storedConfig) }
        : DEFAULT_AVATAR_CONFIG;

      const apiCall = supabase.functions.invoke('analyze-and-generate', {
        body: {
          imageData: imageData,
          config: config,
          userId: user?.id,
          isUrl: isUrl,
          vintedArticleInfo: vintedArticleInfo,
        }
      });

      createTrackedTimeout(() => {
        setGenerationStage('generating');
      }, 15000);

      createTrackedTimeout(() => {
        setGenerationStage('saving');
      }, 75000);

      const { data, error: functionError } = await apiCall;

      if (functionError) {
        throw functionError;
      }

      if (data.success && data.generation_id) {
        setGenerationStage('complete');

        createTrackedTimeout(() => {
          setIsGenerating(false);
          navigate(`/result/${data.generation_id}`);
        }, 2000);
      } else {
        throw new Error(data.error || 'Erreur lors de la generation');
      }
    } catch (err) {
      console.error('Generation error:', err);
      setShowErrorModal(true);
      setIsGenerating(false);
    }
  };

  const handleGenerate = async () => {
    if (isGenerating) return;

    if (!user) {
      setShowAuthRequiredModal(true);
      return;
    }

    if (!uploadedImage && !vintedImage) {
      setShowImageRequiredModal(true);
      return;
    }

    const hasActiveSubscription = await checkUserSubscription();
    if (!hasActiveSubscription) {
      setShowSubscriptionModal(true);
      return;
    }

    if (vintedImage) {
      await processImageGeneration(vintedImage, true);
    } else {
      await processImageGeneration(uploadedImage!, false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-grain py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center py-20">
            <div className="bg-white border-4 border-black px-8 py-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-4">
                <Loader2 className="w-6 h-6 animate-spin text-vinted" />
                <span className="font-display font-bold text-lg">
                  CHARGEMENT...
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !photoData) {
    return (
      <div className="min-h-screen bg-grain py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate('/galerie')}
            className="flex items-center gap-2 px-4 py-2 bg-white border-3 border-black font-display font-bold text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            RETOUR GALERIE
          </button>

          <div className="text-center py-20">
            <div className="bg-white border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] max-w-md mx-auto">
              <AlertCircle className="w-16 h-16 text-pink-pastel mx-auto mb-4" />
              <h1 className="font-display font-bold text-xl mb-2">
                PHOTO NON TROUVEE
              </h1>
              <p className="font-body text-gray-600 mb-6">
                {error || 'Cette photo n\'existe pas ou n\'est plus disponible.'}
              </p>
              <button
                onClick={() => navigate('/galerie')}
                className="px-6 py-3 bg-vinted text-white border-3 border-black font-display font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                VOIR LA GALERIE
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-grain py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <button
          onClick={() => navigate('/galerie')}
          className="flex items-center gap-2 px-4 py-2 bg-white border-3 border-black font-display font-bold text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          RETOUR GALERIE
        </button>

        {/* Photo Title */}
        <div className="mb-6">
          <h1 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-black mb-2">
            {photoData.title || 'Photo Vinted avec Mannequin IA'}
          </h1>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="inline-block bg-vinted text-white px-3 py-1 font-display font-bold text-xs border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              {photoData.clothing_type.toUpperCase()}
            </span>
            <span className="font-body text-sm text-gray-500">
              {formatDate(photoData.created_at)}
            </span>
          </div>
        </div>

        {/* Generation Section - Same as HeroSection */}
        <div className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden mb-8">
          <div className="bg-cream p-4 border-b-4 border-black">
            <h2 className="font-display font-bold text-lg sm:text-xl text-black text-center">
              CREEZ VOTRE PROPRE AVATAR
            </h2>
            <p className="font-body text-sm text-black/80 text-center mt-1">
              Collez un lien Vinted ou uploadez votre photo
            </p>
          </div>

          <div className="p-3 sm:p-5">
            {/* Image Preview (same as HeroSection) */}
            {(vintedImage || uploadedImage) && (
              <div className="bg-cream border-3 border-black p-3 sm:p-4 mb-3 sm:mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex flex-row items-start gap-3 sm:gap-5">
                  {/* Image */}
                  <div className="relative flex-shrink-0">
                    <div className="relative w-20 h-28 sm:w-28 sm:h-36 md:w-32 md:h-44 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] overflow-hidden bg-white">
                      <img
                        src={vintedImage || uploadedImage || ''}
                        alt="Photo selectionnee"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={vintedImage ? handleRemoveVintedImage : handleRemoveImage}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-pink-pastel border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-red-400 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 z-10"
                      title="Supprimer"
                    >
                      <X className="w-3 h-3 text-black" />
                    </button>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    {vintedImage && vintedArticleInfo && (vintedArticleInfo.title || vintedArticleInfo.price) ? (
                      <div className="bg-white border-2 border-black p-2.5 sm:p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        {vintedArticleInfo.title && (
                          <p className="font-display font-bold text-xs sm:text-sm md:text-base text-black line-clamp-2 leading-tight mb-1.5 sm:mb-2">
                            {vintedArticleInfo.title}
                          </p>
                        )}
                        {vintedArticleInfo.price && (
                          <p className="font-display font-bold text-base sm:text-lg md:text-xl text-vinted mb-2 sm:mb-3">
                            {vintedArticleInfo.price.includes('€') ? vintedArticleInfo.price : `${vintedArticleInfo.price} €`}
                          </p>
                        )}
                        {(vintedArticleInfo.brand || vintedArticleInfo.size || vintedArticleInfo.color || vintedArticleInfo.category) && (
                          <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-[10px] sm:text-xs">
                            {vintedArticleInfo.brand && (
                              <div>
                                <span className="text-gray-500">{tHero('articleInfo.brand')}:</span>{' '}
                                <span className="font-bold text-black">{vintedArticleInfo.brand}</span>
                              </div>
                            )}
                            {vintedArticleInfo.size && (
                              <div>
                                <span className="text-gray-500">{tHero('articleInfo.size')}:</span>{' '}
                                <span className="font-bold text-black">{vintedArticleInfo.size}</span>
                              </div>
                            )}
                            {vintedArticleInfo.color && (
                              <div>
                                <span className="text-gray-500">{tHero('articleInfo.color')}:</span>{' '}
                                <span className="font-bold text-black">{vintedArticleInfo.color}</span>
                              </div>
                            )}
                            {vintedArticleInfo.category && (
                              <div>
                                <span className="text-gray-500">{tHero('articleInfo.category')}:</span>{' '}
                                <span className="font-bold text-black">{vintedArticleInfo.category}</span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="bg-white border-2 border-black p-2.5 sm:p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <p className="font-display font-bold text-sm sm:text-base text-black">
                          {tHero('interface.imageReady')}
                        </p>
                        <p className="font-body text-xs sm:text-sm text-gray-500 mt-1">
                          {uploadedImage ? 'Photo uploadee' : 'Vinted'}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Input and Actions */}
            <div className="space-y-3 sm:space-y-4">
              <form onSubmit={handleUrlSubmit} className="space-y-3 sm:space-y-4">
                {/* Vinted URL Input + Upload Button */}
                <div className="flex gap-2">
                  <div className="flex-1 bg-cream border-3 border-black p-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
                    <label htmlFor="vinted-url-input-detail" className="sr-only">URL Vinted</label>
                    <input
                      id="vinted-url-input-detail"
                      type="text"
                      value={vintedUrl}
                      onChange={(e) => {
                        setVintedUrl(e.target.value);
                        setVintedUrlError(null);
                      }}
                      placeholder={tHero('interface.placeholder')}
                      className={`w-full px-3 py-2 sm:px-4 sm:py-3 pr-10 bg-transparent border-none font-body font-semibold text-sm sm:text-base placeholder-gray-500 focus:outline-none transition-opacity ${isScrapingVinted || vintedUrlError ? 'opacity-0' : 'opacity-100'}`}
                      disabled={isScrapingVinted}
                    />

                    {/* Loading overlay */}
                    {isScrapingVinted && (
                      <div className="absolute inset-0 bg-cream flex items-center justify-center">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="flex items-center gap-1.5 sm:gap-2">
                            <div className={`flex items-center gap-1 ${scrapingStep === 'connecting' ? 'text-vinted' : 'text-green-600'}`}>
                              {scrapingStep === 'connecting' ? (
                                <Loader2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin" />
                              ) : (
                                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                              )}
                              <span className="text-[10px] sm:text-xs font-bold hidden xs:inline">{tHero('scraping.steps.connecting')}</span>
                            </div>

                            <div className="w-2 sm:w-4 h-0.5 bg-gray-300"></div>

                            <div className={`flex items-center gap-1 ${scrapingStep === 'fetching' ? 'text-vinted' : ['extracting', 'complete'].includes(scrapingStep) ? 'text-green-600' : 'text-gray-400'}`}>
                              {scrapingStep === 'fetching' ? (
                                <Loader2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin" />
                              ) : ['extracting', 'complete'].includes(scrapingStep) ? (
                                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                              ) : (
                                <ImageIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                              )}
                              <span className="text-[10px] sm:text-xs font-bold hidden xs:inline">{tHero('scraping.steps.fetching')}</span>
                            </div>

                            <div className="w-2 sm:w-4 h-0.5 bg-gray-300"></div>

                            <div className={`flex items-center gap-1 ${scrapingStep === 'extracting' ? 'text-vinted' : scrapingStep === 'complete' ? 'text-green-600' : 'text-gray-400'}`}>
                              {scrapingStep === 'extracting' ? (
                                <Loader2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin" />
                              ) : scrapingStep === 'complete' ? (
                                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                              ) : (
                                <FileSearch className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                              )}
                              <span className="text-[10px] sm:text-xs font-bold hidden xs:inline">{tHero('scraping.steps.extracting')}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Error overlay */}
                    {vintedUrlError && !isScrapingVinted && (
                      <div className="absolute inset-0 bg-pink-pastel/90 flex items-center justify-center px-8">
                        <p className="font-body font-semibold text-xs sm:text-sm text-red-700 text-center line-clamp-2">
                          {vintedUrlError}
                        </p>
                      </div>
                    )}

                    {/* Validate and Clear buttons */}
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 z-10">
                      {vintedUrl && !isScrapingVinted && !vintedImage && !vintedUrlError && (
                        <button
                          type="button"
                          onClick={handleValidateVintedUrl}
                          className="w-6 h-6 bg-mint border-2 border-black flex items-center justify-center shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] animate-pulse-validate"
                          title="Valider le lien Vinted"
                        >
                          <Check className="w-3 h-3" />
                        </button>
                      )}

                      {(vintedUrl || vintedUrlError) && !isScrapingVinted && (
                        <button
                          type="button"
                          onClick={() => {
                            setVintedUrl('');
                            setVintedImage(null);
                            setVintedArticleInfo(null);
                            setUploadedImage(null);
                            setVintedUrlError(null);
                            lastExtractedUrlRef.current = null;
                            if (fileInputRef.current) {
                              fileInputRef.current.value = '';
                            }
                          }}
                          className="w-6 h-6 bg-pink-pastel border-2 border-black flex items-center justify-center hover:bg-pink-300 transition-colors shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
                          title="Effacer l'URL"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Upload Button */}
                  <button
                    type="button"
                    onClick={() => {
                      if (!user) {
                        setShowAuthRequiredModal(true);
                        return;
                      }
                      if (vintedImage) {
                        setVintedImage(null);
                        setVintedUrl('');
                        setVintedArticleInfo(null);
                        lastExtractedUrlRef.current = null;
                      }
                      fileInputRef.current?.click();
                    }}
                    title="Ouvrir la galerie"
                    className="bg-vinted border-3 border-black font-display font-bold text-xs sm:text-sm text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex items-center justify-center px-3 py-2 sm:px-4 sm:py-3"
                  >
                    <ImagePlus className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="hidden sm:inline ml-2">{tHero('interface.galleryButton')}</span>
                  </button>
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />

                {/* Action Buttons */}
                <div className="space-y-2 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setIsModalOpen(true);
                      setTimeout(() => {
                        const config = localStorage.getItem('avatar_config');
                        setHasStoredConfig(!!config);
                      }, 100);
                    }}
                    className={`w-full bg-vinted border-3 border-black font-display font-bold text-xs sm:text-sm text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex items-center justify-center gap-2 px-3 py-2.5 sm:py-3 sm:px-4 ${
                      (vintedImage || uploadedImage) && !hasStoredConfig ? 'animate-pulse' : ''
                    }`}
                  >
                    <span>{tHero('configSection.configure')}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleGenerate}
                    className={`w-full bg-pink-pastel border-3 border-black font-display font-bold text-xs sm:text-sm text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex items-center justify-center gap-2 px-3 py-2.5 sm:py-3 sm:px-4 ${
                      (vintedImage || uploadedImage) ? 'animate-pulse' : ''
                    }`}
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>{isGenerating ? tHero('configSection.generating') : tHero('configSection.generate')}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Before/After Comparison */}
        <div className="mb-8">
          <BeforeAfterComparison
            beforeImage={photoData.original_image_url || null}
            afterImage={photoData.generated_image_url}
            title={photoData.title}
            description={photoData.description}
          />
        </div>

        {/* SEO Content */}
        <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-display font-bold text-lg sm:text-xl mb-4">
            Transformez vos photos Vinted avec l'IA
          </h2>
          <div className="font-body text-gray-700 space-y-3 text-sm">
            <p>
              Cette photo montre un exemple de vetement transforme par notre intelligence artificielle.
              Le mannequin virtuel permet aux acheteurs de mieux visualiser comment le vetement tombe une fois porte.
            </p>
            <p>
              Avec VintDress, creez vos propres photos professionnelles en quelques secondes.
              Uploadez simplement votre photo de vetement et notre IA genere automatiquement un mannequin realiste.
            </p>
          </div>
        </div>

        {/* Related Articles - Dynamic SEO Internal Links */}
        <div className="mt-8 bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-vinted" />
            <h2 className="font-display font-bold text-lg sm:text-xl">
              Articles qui pourraient vous interesser
            </h2>
          </div>
          <div className="space-y-3">
            {relatedArticles.map((article) => (
              <Link
                key={article.id}
                to={`/blog/${article.slug}`}
                className="block bg-cream border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                <h3 className="font-display font-bold text-sm sm:text-base text-black mb-1">
                  {article.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-gray-600 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="inline-block bg-vinted text-white px-2 py-0.5 font-display font-bold text-[10px] border border-black">
                    {article.category}
                  </span>
                  <span className="font-body text-xs text-gray-500">{article.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Modals */}
      <AvatarConfigModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          const config = localStorage.getItem('avatar_config');
          setHasStoredConfig(!!config);
        }}
        onConfigSaved={() => {
          setHasStoredConfig(true);
        }}
      />

      <GenerationLoadingModal
        isOpen={isGenerating}
        stage={generationStage}
      />

      <AuthModal
        isOpen={showAuthRequiredModal}
        onClose={() => setShowAuthRequiredModal(false)}
      />

      <InvalidFileModal
        isOpen={showInvalidFileModal}
        onClose={() => {
          setShowInvalidFileModal(false);
          setInvalidFileName('');
        }}
        fileName={invalidFileName}
      />

      <ErrorModal
        isOpen={showErrorModal}
        onClose={() => setShowErrorModal(false)}
      />

      {/* Image Required Modal */}
      {showImageRequiredModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white border-3 border-black max-w-sm w-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="bg-pink-pastel p-4 relative border-b-3 border-black">
              <button
                onClick={() => setShowImageRequiredModal(false)}
                className="absolute top-2 right-2 w-7 h-7 bg-white border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                <X className="w-3 h-3 text-black" />
              </button>
              <h3 className="font-display font-bold text-lg text-black pr-8">
                IMAGE REQUISE
              </h3>
            </div>
            <div className="p-4">
              <p className="font-body text-sm text-gray-700 mb-4">
                Veuillez coller un lien Vinted ou uploader une photo avant de generer votre avatar.
              </p>
              <button
                onClick={() => setShowImageRequiredModal(false)}
                className="w-full px-4 py-3 bg-vinted text-white border-3 border-black font-display font-bold text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                COMPRIS
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Subscription Modal */}
      {showSubscriptionModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white border-3 border-black max-w-sm w-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="bg-vinted p-4 relative border-b-3 border-black">
              <button
                onClick={() => setShowSubscriptionModal(false)}
                className="absolute top-2 right-2 w-7 h-7 bg-red-500 border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-red-600 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                <X className="w-3 h-3 text-white" />
              </button>
              <div className="flex items-center gap-3 pr-6">
                <div className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform -rotate-2 flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-vinted" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">{tHero('modals.subscriptionRequired.title')}</h3>
                  <p className="font-body text-white/90 text-xs">{tHero('modals.subscriptionRequired.subtitle')}</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              {/* Benefits - Simple list style */}
              <div className="space-y-2.5 mb-4">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-vinted flex-shrink-0" />
                  <p className="font-body text-xs text-gray-700">{tHero('modals.subscriptionRequired.benefit1')}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-vinted flex-shrink-0" />
                  <p className="font-body text-xs text-gray-700">{tHero('modals.subscriptionRequired.benefit2')}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-vinted flex-shrink-0" />
                  <p className="font-body text-xs text-gray-700">{tHero('modals.subscriptionRequired.benefit3')}</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setShowSubscriptionModal(false);
                  navigate('/#tarifs');
                }}
                className="w-full px-4 py-3 bg-vinted text-white border-3 border-black font-display font-bold text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                VOIR LES TARIFS
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoDetailPage;
