import React, { useState, useRef, useEffect } from 'react';
import { Upload, Zap, Star, Shield, Cpu, Users, X, CreditCard, Trash2, HelpCircle, ImagePlus, Sparkles, Loader2, Check, Link, ImageIcon, FileSearch } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { AvatarConfigModal } from './AvatarConfigModal';
import { GenerationLoadingModal } from './GenerationLoadingModal';
import { AuthModal } from './AuthModal';
import { OnboardingGuide } from './OnboardingGuide';
import { InvalidFileModal } from './InvalidFileModal';
import { ErrorModal } from './ErrorModal';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';

// Fonction pour compresser et redimensionner les images avec haute qualité
const compressImage = (file: File, maxWidth = 2000, maxHeight = 2000): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        const originalSize = (e.target?.result as string).length;

        // Redimensionner seulement si nécessaire
        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }

        // Créer un canvas pour redimensionner
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Could not get canvas context'));
          return;
        }

        // Activer le lissage pour une meilleure qualité
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        // Dessiner l'image redimensionnée
        ctx.drawImage(img, 0, 0, width, height);

        // Compression adaptative : commencer à 92% et réduire si trop lourd
        let quality = 0.92;
        let compressedBase64 = canvas.toDataURL('image/jpeg', quality);

        // Si l'image est encore > 2MB, réduire progressivement la qualité
        const maxSizeBytes = 2 * 1024 * 1024; // 2MB
        while (compressedBase64.length > maxSizeBytes && quality > 0.6) {
          quality -= 0.05;
          compressedBase64 = canvas.toDataURL('image/jpeg', quality);
        }

        const finalSizeKB = Math.round(compressedBase64.length / 1024);
        const originalSizeKB = Math.round(originalSize / 1024);
        console.log(`Image optimisée: ${img.width}x${img.height} → ${width}x${height}, ${originalSizeKB}KB → ${finalSizeKB}KB (qualité: ${Math.round(quality * 100)}%)`);

        resolve(compressedBase64);
      };
      img.onerror = () => reject(new Error('Failed to load image'));
      img.src = e.target?.result as string;
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
};

// Valeurs par défaut pour la configuration de l'avatar
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

export const HeroSection: React.FC = () => {
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasStoredConfig, setHasStoredConfig] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStage, setGenerationStage] = useState<'analyzing' | 'generating' | 'saving' | 'complete'>('analyzing');
  const [error, setError] = useState<string | null>(null);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [showImageRequiredModal, setShowImageRequiredModal] = useState(false);
  const [showAuthRequiredModal, setShowAuthRequiredModal] = useState(false);
  const [showInvalidFileModal, setShowInvalidFileModal] = useState(false);
  const [invalidFileName, setInvalidFileName] = useState<string>('');
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showOnboardingGuide, setShowOnboardingGuide] = useState(false);
  const [shouldPulseGenerate, setShouldPulseGenerate] = useState(true);
  const [counterValue, setCounterValue] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Ref to track active timeouts for cleanup on unmount
  const timeoutsRef = useRef<Set<ReturnType<typeof setTimeout>>>(new Set());

  // Helper to create tracked timeouts that auto-cleanup
  const createTrackedTimeout = (callback: () => void, delay: number) => {
    const timeoutId = setTimeout(() => {
      callback();
      timeoutsRef.current.delete(timeoutId);
    }, delay);
    timeoutsRef.current.add(timeoutId);
    return timeoutId;
  };

  // Cleanup all timeouts on unmount
  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach((id) => clearTimeout(id));
      timeoutsRef.current.clear();
    };
  }, []);

  const { user, session } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation('hero');

  // Animation du compteur de photos au chargement
  useEffect(() => {
    const targetValue = 10000;
    const duration = 2000; // 2 secondes pour l'animation
    const steps = 60; // Nombre d'étapes pour l'animation
    const increment = targetValue / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setCounterValue(targetValue);
        clearInterval(timer);
      } else {
        setCounterValue(Math.floor(increment * currentStep));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Check if config exists
    const config = localStorage.getItem('avatar_config');
    setHasStoredConfig(!!config);

    // Ne plus lancer automatiquement le guide
    // L'utilisateur peut maintenant cliquer sur le bouton Guide pour l'activer
  }, []);


  // Arrêter l'animation quand l'utilisateur interagit avec le bouton
  const handleStopPulseAnimation = () => {
    setShouldPulseGenerate(false);
  };

  // Track the last extracted URL to avoid duplicate extractions
  const lastExtractedUrlRef = useRef<string | null>(null);

  // Fonction pour valider et extraire l'image Vinted (déclenchée manuellement)
  const handleValidateVintedUrl = async () => {
    if (!vintedUrl || isScrapingVinted) return;

    // Vérifier si l'utilisateur est connecté
    if (!user) {
      setShowAuthRequiredModal(true);
      return;
    }

    // Vérifier si l'URL est valide
    if (!isValidVintedUrl(vintedUrl)) {
      setVintedUrlError('URL Vinted invalide. Exemple: vinted.fr/items/12345');
      return;
    }

    try {
      setIsScrapingVinted(true);
      setScrapingStep('connecting');
      setError(null);
      setVintedUrlError(null);
      lastExtractedUrlRef.current = vintedUrl;

      console.log('Extracting Vinted image from:', vintedUrl);

      // Simulate step progression for better UX
      createTrackedTimeout(() => setScrapingStep('fetching'), 500);

      const { data: scrapResult, error: scrapError } = await supabase.functions.invoke('vinted-scraper', {
        body: { vintedUrl },
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
        },
      });

      setScrapingStep('extracting');

      if (scrapError || !scrapResult.success || scrapResult.images.length === 0) {
        console.error('Extraction failed:', scrapResult?.error);
        const errorMsg = scrapResult?.error || 'Impossible de récupérer l\'image depuis ce lien Vinted';
        setVintedUrlError(errorMsg);
        lastExtractedUrlRef.current = null;
        setIsScrapingVinted(false);
        setScrapingStep('connecting');
        return;
      }

      setScrapingStep('complete');

      // Clear uploaded image and set Vinted image
      setUploadedImage(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      setVintedImage(scrapResult.images[0]);
      if (scrapResult.article_info) {
        setVintedArticleInfo(scrapResult.article_info);
      }
      console.log('Vinted image extracted');

      // Small delay to show complete state before hiding
      await new Promise(resolve => setTimeout(resolve, 300));

    } catch (error) {
      console.error('Error extracting Vinted image:', error);
      const errorMsg = error instanceof Error ? error.message : 'Erreur lors de la récupération de l\'image Vinted';
      setVintedUrlError(errorMsg);
      lastExtractedUrlRef.current = null;
    } finally {
      setIsScrapingVinted(false);
      setScrapingStep('connecting');
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    // Vérifier si l'utilisateur est connecté
    if (!user) {
      setShowAuthRequiredModal(true);
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      return;
    }

    const file = event.target.files?.[0];
    if (file) {
      // Vérifier que c'est bien une image
      const validImageTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
      if (!validImageTypes.includes(file.type)) {
        setInvalidFileName(file.name);
        setShowInvalidFileModal(true);
        // Reset file input
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
        return;
      }

      try {
        // Compresser et redimensionner l'image avant de l'utiliser
        const compressedImage = await compressImage(file);
        setUploadedImage(compressedImage);
      } catch (error) {
        console.error('Erreur lors de la compression:', error);
        // Fallback : utiliser l'image originale si la compression échoue
        const reader = new FileReader();
        reader.onloadend = () => {
          setUploadedImage(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleReactivateGuide = () => {
    // Remove the completed flag and show guide again
    localStorage.removeItem('has_completed_onboarding');
    setShowOnboardingGuide(true);
  };

  const handleRemoveImage = () => {
    setUploadedImage(null);
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleUrlSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Utilise la fonction de validation manuelle
    await handleValidateVintedUrl();
  };

  const handleRemoveVintedImage = () => {
    setVintedImage(null);
    setVintedUrl('');
    setVintedArticleInfo(null);
    lastExtractedUrlRef.current = null; // Reset to allow re-extraction
  };

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

  const checkUserSubscription = async () => {
    try {
      // Récupérer toutes les souscriptions (pas seulement les actives)
      const { data, error } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', user?.id);

      if (error || !data || data.length === 0) {
        return false;
      }

      const now = new Date().toISOString();
      
      // Priority 1: Check for credits (any pack with credits remaining)
      const totalCredits = data
        .filter(sub => sub.plan_type === 'credits' && sub.status === 'active')
        .reduce((total, sub) => total + sub.credits_remaining, 0);
      
      if (totalCredits > 0) {
        return true;
      }

      // Priority 2: Check monthly subscription (active or cancelled but still valid)
      const hasValidMonthly = data.some(subscription => {
        if (subscription.plan_type !== 'monthly') return false;
        
        // Active monthly subscription
        if (subscription.status === 'active') {
          return subscription.monthly_generations_used < subscription.monthly_limit;
        }
        
        // Cancelled monthly subscription but still in period
        if (subscription.current_period_end && subscription.current_period_end > now) {
          return subscription.monthly_generations_used < subscription.monthly_limit;
        }
        
        return false;
      });

      return hasValidMonthly;
    } catch (error) {
      console.error('Error checking subscription:', error);
      return false;
    }
  };

  const handleSubscriptionRedirect = () => {
    setShowSubscriptionModal(false);
    // Scroll vers la section tarifs
    const pricingSection = document.getElementById('tarifs');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Fonction générique pour traiter la génération d'image
  const processImageGeneration = async (imageData: string, isUrl = false) => {
    if (!user) {
      setShowAuthRequiredModal(true);
      return;
    }

    // Vérification de l'abonnement
    const hasActiveSubscription = await checkUserSubscription();
    if (!hasActiveSubscription) {
      setShowSubscriptionModal(true);
      return;
    }

    setIsGenerating(true);
    setError(null);
    setGenerationStage('analyzing');

    try {
      // Récupérer la config stockée ou utiliser les valeurs par défaut
      const storedConfig = localStorage.getItem('avatar_config');
      const config = storedConfig
        ? { ...DEFAULT_AVATAR_CONFIG, ...JSON.parse(storedConfig) }
        : DEFAULT_AVATAR_CONFIG;

      // Étape 1: Analyse (afficher pendant ~15 secondes)
      setGenerationStage('analyzing');
      
      // Lancer l'appel API avec imageData (peut être base64 ou URL)
      const apiCall = supabase.functions.invoke('analyze-and-generate', {
        body: {
          imageData: imageData,
          config: config,
          userId: user.id,
          isUrl: isUrl, // Indiquer si c'est une URL ou du base64
          vintedUrl: vintedUrl || null // URL de l'article Vinted pour historique
        }
      });

      // Simuler les étapes avec des timeouts trackés (cleanup on unmount)
      createTrackedTimeout(() => {
        setGenerationStage('generating');
      }, 15000); // 15 secondes pour l'analyse

      createTrackedTimeout(() => {
        setGenerationStage('saving');
      }, 75000); // 75 secondes pour la génération (15 + 60)

      // Attendre la réponse API
      const { data, error: functionError } = await apiCall;

      if (functionError) {
        throw functionError;
      }

      if (data.success && data.generation_id) {
        setGenerationStage('complete');

        // Laisser voir "complete" pendant 2 secondes puis rediriger vers la page résultat
        createTrackedTimeout(() => {
          setIsGenerating(false);
          // Rediriger vers la page de résultat avec l'ID de la génération
          navigate(`/result/${data.generation_id}`);
        }, 2000);
      } else {
        throw new Error(data.error || 'Erreur lors de la génération');
      }

    } catch (error) {
      console.error('Generation error:', error);
      setError('Une erreur est survenue');
      setShowErrorModal(true);
      setIsGenerating(false);
    }
  };

  const handleGenerate = async () => {
    // Protection contre les doubles clics (vérifier extraction ET génération)
    if (isGenerating || isScrapingVinted) {
      console.log('Generation or extraction already in progress, ignoring duplicate call');
      return;
    }

    // Vérifier si l'utilisateur est connecté en premier
    if (!user) {
      setShowAuthRequiredModal(true);
      return;
    }

    // Si pas d'image mais un lien Vinted valide, extraire d'abord
    if (!uploadedImage && !vintedImage && vintedUrl && isValidVintedUrl(vintedUrl)) {
      try {
        setIsScrapingVinted(true);
        setScrapingStep('connecting');
        setError(null);

        // Simulate step progression for better UX
        createTrackedTimeout(() => setScrapingStep('fetching'), 500);

        const { data: scrapResult, error: scrapError } = await supabase.functions.invoke('vinted-scraper', {
          body: { vintedUrl },
          headers: {
            Authorization: `Bearer ${session?.access_token}`,
          },
        });

        setScrapingStep('extracting');

        if (scrapError || !scrapResult.success || scrapResult.images.length === 0) {
          throw new Error(scrapResult?.error || 'Impossible de récupérer les images depuis cette URL Vinted');
        }

        setScrapingStep('complete');
        await new Promise(resolve => setTimeout(resolve, 300));

        // Utiliser directement la première image pour la génération
        setVintedImage(scrapResult.images[0]);
        if (scrapResult.article_info) {
          setVintedArticleInfo(scrapResult.article_info);
        }
        setIsScrapingVinted(false);
        setScrapingStep('connecting');

        // Lancer la génération avec l'image extraite
        await processImageGeneration(scrapResult.images[0], true);
        return;
      } catch (error) {
        console.error('Error extracting Vinted image:', error);
        setError(error instanceof Error ? error.message : 'Erreur lors de l\'extraction');
        setIsScrapingVinted(false);
        setScrapingStep('connecting');
        return;
      }
    }

    // Check if we have either an uploaded image or a Vinted image
    if (!uploadedImage && !vintedImage) {
      setShowImageRequiredModal(true);
      return;
    }

    // Use Vinted image if available, otherwise use uploaded image
    if (vintedImage) {
      await processImageGeneration(vintedImage, true);
    } else {
      await processImageGeneration(uploadedImage!, false);
    }
  };


  return (
    <section id="hero" className="relative bg-grain overflow-hidden -mt-16 sm:-mt-20 lg:-mt-24 pt-16 sm:pt-20 lg:pt-24">
      {/* Formes décoratives neo-brutalism - cachées sur mobile pour éviter débordement */}
      <div className="hidden md:block absolute top-20 left-10 w-12 h-12 bg-pink-pastel border-4 border-black transform rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
      <div className="hidden md:block absolute top-32 right-20 w-16 h-16 bg-mint border-4 border-black transform -rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
      <div className="hidden md:block absolute bottom-32 left-20 w-10 h-10 bg-vinted border-4 border-black transform rotate-45 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
      <div className="hidden md:block absolute bottom-20 right-10 w-14 h-14 bg-pink-pastel border-4 border-black neo-shape-circle shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>


      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2 sm:pt-8 lg:pt-12 sm:pb-6 lg:pb-8">
        <div className="text-center space-y-2 sm:space-y-6">

          {/* Titre sur plusieurs lignes */}
          <div className="space-y-2">
            <h1 className="font-display font-semibold text-[1.75rem] xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight">
              <div className="mb-2 transform -rotate-1">
                <span className="inline-block bg-white text-black border-2 sm:border-3 border-black px-2 sm:px-4 py-1 sm:py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  {t('title.line1')}
                </span>
              </div>
              <div className="mb-2 transform rotate-1">
                <span className="inline-block bg-vinted text-white border-2 sm:border-3 border-black px-2 sm:px-4 py-1 sm:py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  {t('title.line2')}
                </span>
              </div>
              <div className="transform -rotate-1">
                <span className="inline-block bg-mint text-black border-2 sm:border-3 border-black px-2 sm:px-4 py-1 sm:py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  {t('title.line3')}
                </span>
              </div>
            </h1>
          </div>

          {/* Description */}
          <div className="pt-4 sm:pt-6 flex justify-center">
            <p className="font-body text-sm sm:text-base text-gray-600">
              {t('subtitle')} <span className="text-vinted font-bold">{t('description')}</span>
            </p>
          </div>

          {/* Interface d'upload compacte */}
          <div className="pt-4 sm:pt-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">

              <div className="p-3 sm:p-5">
              {/* Aperçu de l'image avec infos Vinted */}
              {(vintedImage || uploadedImage) && (
                <div className="bg-cream border-3 border-black p-3 sm:p-4 mb-3 sm:mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex flex-row items-start gap-3 sm:gap-5">
                    {/* Image à gauche */}
                    <div className="relative flex-shrink-0">
                      <div className="relative w-20 h-28 sm:w-28 sm:h-36 md:w-32 md:h-44 lg:w-36 lg:h-48 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] overflow-hidden bg-white">
                        <img
                          src={vintedImage || uploadedImage || ''}
                          alt="Photo sélectionnée"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Bouton supprimer */}
                      <button
                        type="button"
                        onClick={vintedImage ? handleRemoveVintedImage : handleRemoveImage}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-pink-pastel border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-red-400 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 z-10"
                        title="Supprimer"
                      >
                        <X className="w-3 h-3 text-black" />
                      </button>
                    </div>

                    {/* Infos à droite */}
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
                          {/* Détails article */}
                          {(vintedArticleInfo.brand || vintedArticleInfo.size || vintedArticleInfo.color || vintedArticleInfo.category) && (
                            <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-[10px] sm:text-xs">
                              {vintedArticleInfo.brand && (
                                <div>
                                  <span className="text-gray-500">{t('articleInfo.brand')}:</span>{' '}
                                  <span className="font-bold text-black">{vintedArticleInfo.brand}</span>
                                </div>
                              )}
                              {vintedArticleInfo.size && (
                                <div>
                                  <span className="text-gray-500">{t('articleInfo.size')}:</span>{' '}
                                  <span className="font-bold text-black">{vintedArticleInfo.size}</span>
                                </div>
                              )}
                              {vintedArticleInfo.color && (
                                <div>
                                  <span className="text-gray-500">{t('articleInfo.color')}:</span>{' '}
                                  <span className="font-bold text-black">{vintedArticleInfo.color}</span>
                                </div>
                              )}
                              {vintedArticleInfo.category && (
                                <div>
                                  <span className="text-gray-500">{t('articleInfo.category')}:</span>{' '}
                                  <span className="font-bold text-black">{vintedArticleInfo.category}</span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ) : (
                        /* Message pour image uploadée sans infos Vinted */
                        <div className="bg-white border-2 border-black p-2.5 sm:p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                          <p className="font-display font-bold text-sm sm:text-base text-black">
                            {t('interface.imageReady')}
                          </p>
                          <p className="font-body text-xs sm:text-sm text-gray-500 mt-1">
                            {uploadedImage ? 'Photo uploadée' : 'Vinted'}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Zone de saisie et actions principales */}
              <div className="space-y-3 sm:space-y-4">
                <form onSubmit={handleUrlSubmit} className="space-y-3 sm:space-y-4">
                  {/* Input Vinted avec bouton Upload - Mobile optimisé */}
                  <div className="flex gap-2">
                    <div className="flex-1 bg-cream border-3 border-black p-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
                      <label htmlFor="vinted-url-input" className="sr-only">URL Vinted</label>
                      <input
                        id="vinted-url-input"
                        type="text"
                        value={vintedUrl}
                        onChange={(e) => {
                          setVintedUrl(e.target.value);
                          setVintedUrlError(null);
                        }}
                        placeholder={t('interface.placeholder')}
                        className={`w-full px-3 py-2 sm:px-4 sm:py-3 pr-10 bg-transparent border-none font-body font-semibold text-sm sm:text-base placeholder-gray-500 focus:outline-none transition-opacity ${isScrapingVinted || vintedUrlError ? 'opacity-0' : 'opacity-100'}`}
                        data-guide="vinted-url-input"
                        aria-describedby="vinted-url-help"
                        disabled={isScrapingVinted}
                      />

                      {/* Overlay de chargement Vinted */}
                      {isScrapingVinted && (
                        <div className="absolute inset-0 bg-cream flex items-center justify-center">
                          <div className="flex items-center gap-2 sm:gap-3">
                            {/* Étapes avec icônes */}
                            <div className="flex items-center gap-1.5 sm:gap-2">
                              {/* Étape 1: Connexion */}
                              <div className={`flex items-center gap-1 ${scrapingStep === 'connecting' ? 'text-vinted' : 'text-green-600'}`}>
                                {scrapingStep === 'connecting' ? (
                                  <Loader2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin" />
                                ) : (
                                  <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                )}
                                <span className="text-[10px] sm:text-xs font-bold hidden xs:inline">{t('scraping.steps.connecting')}</span>
                              </div>

                              <div className="w-2 sm:w-4 h-0.5 bg-gray-300"></div>

                              {/* Étape 2: Récupération */}
                              <div className={`flex items-center gap-1 ${scrapingStep === 'fetching' ? 'text-vinted' : ['extracting', 'complete'].includes(scrapingStep) ? 'text-green-600' : 'text-gray-400'}`}>
                                {scrapingStep === 'fetching' ? (
                                  <Loader2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin" />
                                ) : ['extracting', 'complete'].includes(scrapingStep) ? (
                                  <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                ) : (
                                  <ImageIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                )}
                                <span className="text-[10px] sm:text-xs font-bold hidden xs:inline">{t('scraping.steps.fetching')}</span>
                              </div>

                              <div className="w-2 sm:w-4 h-0.5 bg-gray-300"></div>

                              {/* Étape 3: Extraction */}
                              <div className={`flex items-center gap-1 ${scrapingStep === 'extracting' ? 'text-vinted' : scrapingStep === 'complete' ? 'text-green-600' : 'text-gray-400'}`}>
                                {scrapingStep === 'extracting' ? (
                                  <Loader2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin" />
                                ) : scrapingStep === 'complete' ? (
                                  <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                ) : (
                                  <FileSearch className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                )}
                                <span className="text-[10px] sm:text-xs font-bold hidden xs:inline">{t('scraping.steps.extracting')}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Overlay d'erreur Vinted */}
                      {vintedUrlError && !isScrapingVinted && (
                        <div className="absolute inset-0 bg-pink-pastel/90 flex items-center justify-center px-8">
                          <p className="font-body font-semibold text-xs sm:text-sm text-red-700 text-center line-clamp-2">
                            {vintedUrlError}
                          </p>
                        </div>
                      )}

                      {/* Boutons Valider et Supprimer - côte à côte */}
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
                    
                    {/* Gallery Button - Responsive */}
                    <button
                      type="button"
                      onClick={() => {
                        if (!user) {
                          setShowAuthRequiredModal(true);
                          return;
                        }
                        // Clear Vinted image if exists before uploading new photo
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
                      data-guide="upload-button"
                    >
                      <ImagePlus className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="hidden sm:inline ml-2">{t('interface.galleryButton')}</span>
                    </button>
                  </div>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />

                  {/* Boutons d'actions - Mobile optimisé */}
                  <div className="space-y-2 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-3">

                    {/* Configurer IA */}
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
                      data-guide="config-button"
                    >
                      <span>{t('configSection.configure')}</span>
                    </button>

                    {/* Générer Avatar - Bouton principal */}
                    <button
                      type="button"
                      onClick={() => {
                        handleStopPulseAnimation();
                        handleGenerate();
                      }}
                      onMouseEnter={handleStopPulseAnimation}
                      className={`w-full bg-pink-pastel border-3 border-black font-display font-bold text-xs sm:text-sm text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex items-center justify-center gap-2 px-3 py-2.5 sm:py-3 sm:px-4 ${
                        (vintedImage || uploadedImage) ? 'animate-pulse' : shouldPulseGenerate ? 'animate-pulse-3' : ''
                      }`}
                      data-guide="generate-button"
                    >
                      <span>{isGenerating ? t('configSection.generating') : t('configSection.generate')}</span>
                    </button>
                  </div>
                </form>
              </div>
              </div>
            </div>
          </div>
          </div>

          {/* Badge social proof amélioré avec animation bounce */}
          <div className="flex justify-center pt-4 sm:pt-6">
            <div className="inline-flex flex-row items-center gap-3 sm:gap-6 px-2 sm:px-4 py-2">
              {/* Note et étoiles */}
              <div className="flex flex-col items-center gap-0.5 sm:gap-1 animate-bounce-in-delay-1">
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="font-display font-bold text-lg sm:text-3xl text-black">4.7</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3 h-3 sm:w-5 sm:h-5 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : i === 4 ? 'text-yellow-400 fill-yellow-400 opacity-70' : 'text-gray-300'}`} />
                    ))}
                  </div>
                </div>
                <span className="font-body text-[10px] sm:text-xs text-gray-600 uppercase tracking-wide">{t('socialProof.averageRating')}</span>
              </div>

              {/* Séparateur */}
              <div className="w-px h-8 sm:h-10 bg-black opacity-20 animate-bounce-in-delay-1"></div>

              {/* Compteur */}
              <div className="flex flex-col items-center gap-0.5 sm:gap-1 animate-bounce-in-delay-2">
                <span className="font-display font-bold text-lg sm:text-3xl text-black">
                  +{counterValue.toLocaleString('fr-FR')}
                </span>
                <span className="font-body text-[10px] sm:text-xs text-gray-600 uppercase tracking-wide">{t('socialProof.photosTransformed')}</span>
              </div>

              {/* Séparateur */}
              <div className="w-px h-8 sm:h-10 bg-black opacity-20 animate-bounce-in-delay-2"></div>

              {/* Qualité HD */}
              <div className="flex flex-col items-center gap-0.5 sm:gap-1 animate-bounce-in-delay-3">
                <span className="font-display font-bold text-lg sm:text-3xl text-black">HD</span>
                <span className="font-body text-[10px] sm:text-xs text-gray-600 uppercase tracking-wide">{t('socialProof.photoQuality')}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Modal de configuration */}
      <AvatarConfigModal 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          // Mettre à jour l'état de config au cas où
          const config = localStorage.getItem('avatar_config');
          setHasStoredConfig(!!config);
        }}
        onConfigSaved={() => {
          // Mettre à jour l'état
          setHasStoredConfig(true);
        }}
      />

      <GenerationLoadingModal 
        isOpen={isGenerating} 
        stage={generationStage}
      />

      {/* Modal d'abonnement requis */}
      {showSubscriptionModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 pt-24 sm:pt-28">
          <div className="bg-white border-3 border-black max-w-xs sm:max-w-sm w-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">

            {/* Header compact */}
            <div className="bg-vinted p-3 sm:p-4 relative border-b-3 border-black">
              <button
                onClick={() => setShowSubscriptionModal(false)}
                className="absolute top-2 right-2 w-6 h-6 sm:w-7 sm:h-7 bg-white border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                <X className="w-3 h-3 text-black" />
              </button>

              <div className="flex items-center gap-2 sm:gap-3 pr-6">
                {/* Logo identique au header */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform -rotate-2 flex-shrink-0">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-vinted" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-white">{t('modals.subscriptionRequired.title')}</h3>
                  <p className="font-body text-white/90 text-[10px] sm:text-xs">{t('modals.subscriptionRequired.subtitle')}</p>
                </div>
              </div>
            </div>

            {/* Content compact */}
            <div className="p-3 sm:p-4">
              {/* Benefits */}
              <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                <div className="flex items-center gap-2 p-2 bg-mint border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <div className="w-6 h-6 bg-white border-2 border-black flex items-center justify-center flex-shrink-0">
                    <Zap className="w-3 h-3 text-black" />
                  </div>
                  <p className="font-body font-semibold text-[11px] sm:text-xs text-black">{t('modals.subscriptionRequired.benefit1')}</p>
                </div>
                <div className="flex items-center gap-2 p-2 bg-pink-pastel border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <div className="w-6 h-6 bg-white border-2 border-black flex items-center justify-center flex-shrink-0">
                    <Star className="w-3 h-3 text-black" />
                  </div>
                  <p className="font-body font-semibold text-[11px] sm:text-xs text-black">{t('modals.subscriptionRequired.benefit2')}</p>
                </div>
                <div className="flex items-center gap-2 p-2 bg-yellow-400 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <div className="w-6 h-6 bg-white border-2 border-black flex items-center justify-center flex-shrink-0">
                    <Users className="w-3 h-3 text-black" />
                  </div>
                  <p className="font-body font-semibold text-[11px] sm:text-xs text-black">{t('modals.subscriptionRequired.benefit3')}</p>
                </div>
              </div>

              {/* Price highlight compact */}
              <div className="bg-cream border-2 border-black p-2 sm:p-3 mb-3 sm:mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-center">
                <p className="font-body text-gray-600 text-[10px] sm:text-xs">{t('modals.subscriptionRequired.startingAt')}</p>
                <div className="flex items-center justify-center gap-1">
                  <span className="font-display font-bold text-xl sm:text-2xl text-vinted">3,99€</span>
                  <span className="font-body text-gray-500 text-[10px] sm:text-xs">{t('modals.subscriptionRequired.perPack')}</span>
                </div>
              </div>

              {/* Actions compact */}
              <div className="space-y-2">
                <button
                  onClick={handleSubscriptionRedirect}
                  className="w-full px-3 py-2.5 sm:py-3 bg-vinted text-white border-2 sm:border-3 border-black font-display font-bold text-xs sm:text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  {t('modals.subscriptionRequired.viewPlans')}
                </button>
                <button
                  onClick={() => setShowSubscriptionModal(false)}
                  className="w-full text-center font-body text-gray-500 hover:text-black transition-colors py-1 text-xs"
                >
                  {t('modals.subscriptionRequired.laterButton')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal d'image requise */}
      {showImageRequiredModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white border-4 border-black max-w-md w-full p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-pink-pastel border-3 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <Upload className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-display font-bold text-xl text-black">{t('modals.imageRequired.title')}</h3>
              </div>
              <button
                onClick={() => setShowImageRequiredModal(false)}
                className="w-8 h-8 bg-pink-pastel border-2 border-black flex items-center justify-center hover:bg-pink-300 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-4 mb-6">
              <div className="bg-cream border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <p className="font-body font-semibold text-black mb-3">
                  {t('modals.imageRequired.description')}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-vinted rounded-full"></div>
                    <span><strong>{t('modals.imageRequired.instructions.vinted')}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-pastel rounded-full border border-black"></div>
                    <span><strong>{t('modals.imageRequired.instructions.upload')}</strong></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 sm:gap-3">
              <button
                onClick={() => {
                  setShowImageRequiredModal(false);
                  // Focus the Vinted URL input
                  setTimeout(() => {
                    document.getElementById('vinted-url-input')?.focus();
                  }, 100);
                }}
                className="flex-1 px-2 py-2 sm:px-3 sm:py-2.5 bg-pink-pastel border-3 border-black font-display font-bold text-xs sm:text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                LIEN VINTED
              </button>
              <button
                onClick={() => {
                  setShowImageRequiredModal(false);
                  fileInputRef.current?.click();
                }}
                className="flex-1 px-2 py-2 sm:px-3 sm:py-2.5 bg-vinted border-3 border-black font-display font-bold text-xs sm:text-sm text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex items-center justify-center gap-1 sm:gap-2"
              >
                <ImagePlus className="w-3 h-3 sm:w-4 sm:h-4" strokeWidth={3} />
                <span className="font-bold">{t('interface.galleryButton')}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal d'authentification requis */}
      <AuthModal
        isOpen={showAuthRequiredModal}
        onClose={() => setShowAuthRequiredModal(false)}
      />

      {/* Invalid File Modal */}
      <InvalidFileModal
        isOpen={showInvalidFileModal}
        onClose={() => {
          setShowInvalidFileModal(false);
          setInvalidFileName('');
        }}
        fileName={invalidFileName}
      />

      {/* Error Modal */}
      <ErrorModal
        isOpen={showErrorModal}
        onClose={() => setShowErrorModal(false)}
      />

      {/* Onboarding Guide */}
      <OnboardingGuide
        isOpen={showOnboardingGuide}
        onClose={() => {
          setShowOnboardingGuide(false);
        }}
        onComplete={() => {
          setShowOnboardingGuide(false);
          localStorage.setItem('has_completed_onboarding', 'true');
        }}
      />
    </section>
  );
};