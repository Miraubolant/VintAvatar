import React, { useState, useRef, useEffect } from 'react';
import { Upload, Zap, Star, Shield, Cpu, Users, X, CreditCard, Trash2, HelpCircle, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { AvatarConfigModal } from './AvatarConfigModal';
import { GenerationLoadingModal } from './GenerationLoadingModal';
import { AuthModal } from './AuthModal';
import { OnboardingGuide } from './OnboardingGuide';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';

export const HeroSection: React.FC = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [vintedUrl, setVintedUrl] = useState('');
  const [vintedImages, setVintedImages] = useState<string[]>([]);
  const [selectedVintedImage, setSelectedVintedImage] = useState<string | null>(null);
  const [vintedArticleInfo, setVintedArticleInfo] = useState<any>(null);
  const [isScrapingVinted, setIsScrapingVinted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasStoredConfig, setHasStoredConfig] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStage, setGenerationStage] = useState<'analyzing' | 'generating' | 'saving' | 'complete'>('analyzing');
  const [error, setError] = useState<string | null>(null);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [showImageRequiredModal, setShowImageRequiredModal] = useState(false);
  const [showAuthRequiredModal, setShowAuthRequiredModal] = useState(false);
  const [showOnboardingGuide, setShowOnboardingGuide] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { user, session } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation('hero');

  useEffect(() => {
    // Check if config exists
    const config = localStorage.getItem('avatar_config');
    setHasStoredConfig(!!config);

    // Ne plus lancer automatiquement le guide
    // L'utilisateur peut maintenant cliquer sur le bouton Guide pour l'activer
  }, []);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
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
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
        // Ne plus désélectionner automatiquement l'image Vinted
        // L'utilisateur peut choisir entre les deux images
      };
      reader.readAsDataURL(file);
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
    if (!vintedUrl) return;

    // Vérifier si l'utilisateur est connecté
    if (!user) {
      setShowAuthRequiredModal(true);
      return;
    }

    // Check if it's a Vinted URL
    if (!isValidVintedUrl(vintedUrl)) {
      alert('❌ Veuillez entrer une URL Vinted valide (ex: https://www.vinted.fr/items/12345... ou https://www.vinted.fr/articles/12345...)');
      return;
    }

    try {
      setIsScrapingVinted(true);
      setError(null);
      // Reset previous Vinted data
      setVintedImages([]);
      setSelectedVintedImage(null);
      setVintedArticleInfo(null);

      console.log('Scraping Vinted URL:', vintedUrl);

      // Step 1: Scrape images from Vinted URL
      const { data: scrapResult, error: scrapError } = await supabase.functions.invoke('vinted-scraper', {
        body: { vintedUrl },
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
        },
      });

      if (scrapError || !scrapResult.success || scrapResult.images.length === 0) {
        throw new Error(scrapResult?.error || 'Impossible de récupérer les images depuis cette URL Vinted');
      }

      console.log(`${scrapResult.images.length} images récupérées depuis Vinted`);

      // Set the scraped images and info for preview
      setVintedImages(scrapResult.images);
      setVintedArticleInfo(scrapResult.article_info);
      
      // Auto-select the first image by default
      setSelectedVintedImage(scrapResult.images[0]);
      
      // Garder l'image uploadée si elle existe - ne pas la supprimer automatiquement

    } catch (error) {
      console.error('Error processing Vinted URL:', error);
      setError(error instanceof Error ? error.message : 'Erreur lors du traitement de l\'URL Vinted');
    } finally {
      setIsScrapingVinted(false);
    }
  };

  const handleVintedImageSelect = (imageUrl: string) => {
    setSelectedVintedImage(imageUrl);
    // Ne plus supprimer automatiquement l'image uploadée
    // L'utilisateur peut choisir entre les deux images
  };

  const handleRemoveVintedImage = (imageUrlToRemove: string) => {
    const updatedImages = vintedImages.filter(url => url !== imageUrlToRemove);
    setVintedImages(updatedImages);
    
    // Si l'image supprimée était sélectionnée, sélectionner la première image restante
    if (selectedVintedImage === imageUrlToRemove) {
      setSelectedVintedImage(updatedImages.length > 0 ? updatedImages[0] : null);
    }
    
    // Si plus d'images, réinitialiser tout
    if (updatedImages.length === 0) {
      setSelectedVintedImage(null);
      setVintedArticleInfo(null);
      setVintedUrl('');
    }
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

    if (!hasStoredConfig) {
      alert('Veuillez d\'abord configurer votre avatar !');
      setIsModalOpen(true);
      return;
    }

    setIsGenerating(true);
    setError(null);
    setGenerationStage('analyzing');

    try {
      const config = JSON.parse(localStorage.getItem('avatar_config') || '{}');
      
      // Étape 1: Analyse (afficher pendant ~15 secondes)
      setGenerationStage('analyzing');
      
      // Lancer l'appel API avec imageData (peut être base64 ou URL)
      const apiCall = supabase.functions.invoke('analyze-and-generate', {
        body: {
          imageData: imageData,
          config: config,
          userId: user.id,
          isUrl: isUrl // Indiquer si c'est une URL ou du base64
        }
      });

      // Simuler les étapes avec des timeouts
      setTimeout(() => {
        setGenerationStage('generating');
      }, 15000); // 15 secondes pour l'analyse

      setTimeout(() => {
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
        setTimeout(() => {
          setIsGenerating(false);
          // Rediriger vers la page de résultat avec l'ID de la génération
          navigate(`/result/${data.generation_id}`);
        }, 2000);
      } else {
        throw new Error(data.error || 'Erreur lors de la génération');
      }

    } catch (error: any) {
      console.error('Generation error:', error);
      setError(error.message || 'Erreur lors de la génération');
      alert(`Erreur: ${error.message || 'Erreur lors de la génération'}`);
      setIsGenerating(false);
    }
  };

  const handleGenerate = async () => {
    // Check if we have either an uploaded image or a selected Vinted image
    if (!uploadedImage && !selectedVintedImage) {
      setShowImageRequiredModal(true);
      return;
    }


    // Use Vinted image if available, otherwise use uploaded image
    if (selectedVintedImage) {
      await processImageGeneration(selectedVintedImage, true);
    } else {
      await processImageGeneration(uploadedImage!, false);
    }
  };


  return (
    <section id="hero" className="relative bg-cream overflow-hidden">
      {/* Formes décoratives neo-brutalism - cachées sur mobile pour éviter débordement */}
      <div className="hidden md:block absolute top-20 left-10 w-12 h-12 bg-pink-pastel border-4 border-black transform rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
      <div className="hidden md:block absolute top-32 right-20 w-16 h-16 bg-mint border-4 border-black transform -rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
      <div className="hidden md:block absolute bottom-32 left-20 w-10 h-10 bg-vinted border-4 border-black transform rotate-45 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
      <div className="hidden md:block absolute bottom-20 right-10 w-14 h-14 bg-pink-pastel border-4 border-black neo-shape-circle shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center space-y-8 sm:space-y-12">
          
          {/* Titre principal Neo-Brutalism */}
          <div className="space-y-8">
            <h1 className="font-display font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight mb-8">
              <div className="text-black transform -rotate-2 mb-3 sm:mb-4 relative">
                <span className="inline-block bg-white border-3 sm:border-4 border-black px-3 sm:px-6 py-2 sm:py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  {t('title.line1')}
                </span>
              </div>
              <div className="text-white transform rotate-1 relative mb-3 sm:mb-4">
                <span className="inline-block bg-vinted border-3 sm:border-4 border-black px-3 sm:px-6 py-2 sm:py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  {t('title.line2')}
                </span>
              </div>
              <div className="text-black transform -rotate-1 relative">
                <span className="inline-block bg-mint border-3 sm:border-4 border-black px-3 sm:px-6 py-2 sm:py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  {t('title.line3')}
                </span>
              </div>
            </h1>
            
            {/* Description simple sans cadre */}
            <div className="max-w-2xl mx-auto">
              <p className="font-body font-semibold text-base sm:text-lg lg:text-xl leading-relaxed text-gray-700">
                {t('subtitle')}
                <span className="text-vinted font-bold"> {t('description')}</span>
              </p>
            </div>

            {/* Badge social proof */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 bg-pink-pastel border-3 border-black px-4 py-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <Sparkles className="w-4 h-4 text-black" />
                <span className="font-display text-sm text-black">+10 000 GENERATIONS</span>
              </div>
            </div>

          </div>

          {/* Interface d'upload Neo-Brutalism - Section unique fusionnée */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1 relative">
              {/* Éléments décoratifs */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-mint border-3 border-black transform rotate-45 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-vinted border-3 border-black transform -rotate-12 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
              <div className="absolute top-4 left-4 w-4 h-4 bg-pink-pastel border-2 border-black transform rotate-12 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"></div>

              {/* Guide button - top right corner with pulse animation */}
              <button
                onClick={handleReactivateGuide}
                className="absolute top-2 right-5 sm:top-4 sm:right-8 z-10 group"
                title={t('guide:button.title')}
              >
                <div className="relative">
                  {/* Pulsing background effect */}
                  <div className="absolute inset-0 bg-vinted rounded-full animate-ping opacity-25"></div>

                  {/* Main button */}
                  <div className="relative w-8 h-8 sm:w-10 sm:h-10 bg-vinted rounded-full border-2 sm:border-3 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-[-1px] group-hover:translate-y-[-1px] sm:group-hover:translate-x-[-2px] sm:group-hover:translate-y-[-2px] transition-all duration-200">
                    <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                </div>
              </button>
              
              {/* Indications des étapes - Responsive */}
              <div className="text-center mb-6">
                <div className="flex flex-wrap justify-center items-center gap-2 lg:gap-3">
                  <div className="inline-block bg-white border-4 border-black px-3 py-3 lg:px-6 lg:py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
                    <div className="font-display font-bold text-black text-sm lg:text-lg">{t('uploadSection.steps.step1.title')}</div>
                    <div className="font-body font-bold text-xs lg:text-sm text-gray-600 mt-1 lg:mt-2 hidden sm:block">{t('uploadSection.steps.step1.subtitle')}</div>
                    <div className="font-body font-bold text-xs text-gray-600 mt-1 sm:hidden">{t('uploadSection.steps.step1.mobileSubtitle')}</div>
                  </div>
                  <div className="inline-block bg-vinted border-4 border-black px-3 py-3 lg:px-6 lg:py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
                    <div className="font-display font-bold text-white text-sm lg:text-lg">{t('uploadSection.steps.step2.title')}</div>
                    <div className="font-body font-bold text-xs lg:text-sm text-white/80 mt-1 lg:mt-2 hidden sm:block">{t('uploadSection.steps.step2.subtitle')}</div>
                    <div className="font-body font-bold text-xs text-white/80 mt-1 sm:hidden">{t('uploadSection.steps.step2.mobileSubtitle')}</div>
                  </div>
                  <div className="inline-block bg-mint border-4 border-black px-3 py-3 lg:px-6 lg:py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
                    <div className="font-display font-bold text-black text-sm lg:text-lg">{t('uploadSection.steps.step3.title')}</div>
                    <div className="font-body font-bold text-xs lg:text-sm text-gray-600 mt-1 lg:mt-2 hidden sm:block">{t('uploadSection.steps.step3.subtitle')}</div>
                    <div className="font-body font-bold text-xs text-gray-600 mt-1 sm:hidden">{t('uploadSection.steps.step3.mobileSubtitle')}</div>
                  </div>
                </div>
              </div>

              {/* Aperçu des images - Si présent */}
              {(vintedImages.length > 0 || uploadedImage) && (
                <div className="bg-cream border-3 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-5">
                  {/* Info article */}
                  {vintedArticleInfo && vintedArticleInfo.title && (
                    <div className="mb-2 p-2 bg-mint border-2 border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                      <p className="font-display font-bold text-black text-xs">{vintedArticleInfo.title}</p>
                    </div>
                  )}
                  
                  {/* Header avec info et bouton supprimer */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-vinted border-2 border-black flex items-center justify-center shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                        <Sparkles className="w-3 h-3 text-white" />
                      </div>
                      <p className="font-display font-bold text-sm text-black">
                        {vintedImages.length + (uploadedImage ? 1 : 0)} {vintedImages.length + (uploadedImage ? 1 : 0) > 1 ? t('interface.imagesReady') : t('interface.imageReady')} {vintedImages.length + (uploadedImage ? 1 : 0) > 1 ? t('interface.readyPlural') : t('interface.ready')}
                      </p>
                    </div>
                    
                    {vintedImages.length > 0 && (
                      <button
                        type="button"
                        onClick={() => {
                          setVintedImages([]);
                          setSelectedVintedImage(null);
                          setVintedArticleInfo(null);
                          setVintedUrl('');
                        }}
                        className="px-2 py-1 bg-pink-pastel border-2 border-black font-display font-bold text-xs text-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex items-center gap-1"
                      >
                        <X className="w-3 h-3" />
                        {t('interface.deleteButton')}
                      </button>
                    )}
                  </div>

                  {/* Grille des images - Responsive améliorée */}
                  <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2">
                    {vintedImages.map((imageUrl, index) => (
                      <div key={`vinted-${index}`} className="relative group">
                        <button
                          type="button"
                          onClick={() => handleVintedImageSelect(imageUrl)}
                          className={`relative w-full border-2 border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
                            selectedVintedImage === imageUrl 
                              ? 'ring-2 ring-vinted ring-offset-1 ring-offset-white' 
                              : ''
                          }`}
                        >
                          <img 
                            src={imageUrl} 
                            alt={`Photo vêtement Vinted ${index + 1} pour génération avatar IA portée`}
                            className="w-full h-20 sm:h-24 lg:h-20 object-cover"
                            loading="lazy"
                          />
                          {selectedVintedImage === imageUrl && (
                            <>
                              <div className="absolute top-0.5 right-0.5 w-4 h-4 bg-vinted border border-black flex items-center justify-center shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                                <Star className="w-2 h-2 text-white fill-white" />
                              </div>
                              <div className="absolute -top-2 -left-2 bg-yellow-300 border border-black px-1 py-0.5 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transform -rotate-6 z-10">
                                <span className="font-display font-bold text-xs">✓</span>
                              </div>
                            </>
                          )}
                          <div className="absolute bottom-0.5 left-0.5 px-1 py-0.5 bg-black text-white text-xs font-display font-bold">
                            {index + 1}
                          </div>
                        </button>
                        
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveVintedImage(imageUrl);
                          }}
                          className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border border-black flex items-center justify-center shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] opacity-0 group-hover:opacity-100 hover:bg-red-600 transition-all duration-200 z-10"
                          title="Supprimer cette image"
                        >
                          <X className="w-2 h-2 text-white" />
                        </button>
                      </div>
                    ))}
                    
                    {uploadedImage && (
                      <div key="uploaded" className="relative group">
                        <button
                          type="button"
                          onClick={() => {
                            if (selectedVintedImage) {
                              setSelectedVintedImage(null);
                            }
                          }}
                          className={`relative w-full border-2 border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
                            !selectedVintedImage 
                              ? 'ring-2 ring-vinted ring-offset-1 ring-offset-white' 
                              : ''
                          }`}
                        >
                          <img 
                            src={uploadedImage} 
                            alt="Photo vêtement uploadée pour génération avatar IA Vinted portée"
                            className="w-full h-20 sm:h-24 lg:h-20 object-cover"
                          />
                          {!selectedVintedImage && (
                            <>
                              <div className="absolute top-0.5 right-0.5 w-4 h-4 bg-vinted border border-black flex items-center justify-center shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                                <Star className="w-2 h-2 text-white fill-white" />
                              </div>
                              <div className="absolute -top-2 -left-2 bg-yellow-300 border border-black px-1 py-0.5 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transform -rotate-6 z-10">
                                <span className="font-display font-bold text-xs">✓</span>
                              </div>
                            </>
                          )}
                          <div className="absolute bottom-0.5 left-0.5 px-1 py-0.5 bg-black text-white text-xs font-display font-bold">
                            {t('interface.uploadedLabel')}
                          </div>
                        </button>
                        
                        <button
                          type="button"
                          onClick={handleRemoveImage}
                          className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border border-black flex items-center justify-center shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] opacity-0 group-hover:opacity-100 hover:bg-red-600 transition-all duration-200 z-10"
                          title="Supprimer l'image uploadée"
                        >
                          <X className="w-2 h-2 text-white" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Zone de saisie et actions principales */}
              <div className="space-y-4">
                <form onSubmit={handleUrlSubmit} className="space-y-4">
                  {/* Input Vinted avec bouton Upload - Mobile optimisé */}
                  <div className="flex gap-2">
                    <div className="flex-1 bg-cream border-3 border-black p-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      <label htmlFor="vinted-url-input" className="sr-only">URL Vinted</label>
                      <input
                        id="vinted-url-input"
                        type="text"
                        value={vintedUrl}
                        onChange={(e) => setVintedUrl(e.target.value)}
                        placeholder={t('interface.placeholder')}
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-transparent border-none font-body font-semibold text-sm sm:text-base placeholder-gray-500 focus:outline-none"
                        data-guide="vinted-url-input"
                        aria-describedby="vinted-url-help"
                      />
                    </div>
                    
                    {/* Upload Photo - Responsive */}
                    <button
                      type="button"
                      onClick={() => {
                        if (!user) {
                          setShowAuthRequiredModal(true);
                          return;
                        }
                        fileInputRef.current?.click();
                      }}
                      title="Uploader une photo"
                      className="bg-pink-pastel border-3 border-black font-display font-bold text-xs sm:text-sm text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex items-center justify-center px-3 py-2 sm:px-4 sm:py-3"
                      data-guide="upload-button"
                    >
                      <Upload className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="hidden sm:inline ml-2">{t('interface.photoButton')}</span>
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
                  <div className="space-y-3 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-3">
                    
                    {/* Extraire Vinted */}
                    <button
                      type="submit"
                      disabled={!vintedUrl || isScrapingVinted}
                      className={`w-full border-3 border-black font-display font-bold text-xs sm:text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex items-center justify-center gap-2 px-3 py-3 sm:px-4 ${
                        vintedUrl && !isScrapingVinted && vintedImages.length === 0
                          ? 'bg-pink-pastel text-black hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-pulse'
                          : vintedUrl && !isScrapingVinted
                            ? 'bg-pink-pastel text-black hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                            : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                      }`}
                      data-guide="extract-button"
                    >
                      {isScrapingVinted ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                          <span className="hidden sm:inline">EXTRACTION...</span>
                          <span className="sm:hidden">EXTRAIT...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 hidden sm:inline" />
                          <span className="hidden sm:inline">{t('interface.extractButton')}</span>
                          <span className="sm:hidden">{t('interface.extractButton')}</span>
                        </>
                      )}
                    </button>
                    
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
                      className={`w-full bg-vinted border-3 border-black font-display font-bold text-xs sm:text-sm text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex items-center justify-center gap-2 px-3 py-3 sm:px-4 ${
                        (vintedImages.length > 0 || uploadedImage) && !hasStoredConfig ? 'animate-pulse' : ''
                      }`}
                      data-guide="config-button"
                    >
                      <Sparkles className="w-4 h-4 text-white hidden sm:inline" />
                      <span className="hidden sm:inline">{t('configSection.configure')}</span>
                      <span className="sm:hidden">{t('configSection.configure')}</span>
                    </button>
                    
                    {/* Générer Avatar - Bouton principal */}
                    <button
                      type="button"
                      onClick={handleGenerate}
                      className={`w-full bg-pink-pastel border-3 border-black font-display font-bold text-xs sm:text-sm text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 sm:col-span-2 lg:col-span-1 flex items-center justify-center gap-2 px-3 py-3 sm:px-4 ${
                        (vintedImages.length > 0 || uploadedImage) && hasStoredConfig ? 'animate-pulse' : ''
                      }`}
                      data-guide="generate-button"
                    >
                      {!user ? (
                        <>
                          <Star className="w-4 h-4" />
                          <span>CONNEXION</span>
                        </>
                      ) : (
                        <>
                          <Zap className="w-4 h-4" />
                          <span className="hidden sm:inline">{isGenerating ? t('configSection.generating') : t('configSection.generate')}</span>
                          <span className="sm:hidden">{isGenerating ? t('interface.generating') : t('configSection.generate')}</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white border-4 border-black max-w-md w-full p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-vinted border-3 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl text-black">{t('modals.subscriptionRequired.title')}</h3>
              </div>
              <button
                onClick={() => setShowSubscriptionModal(false)}
                className="w-8 h-8 bg-gray-200 border-2 border-black flex items-center justify-center hover:bg-gray-300 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-4 mb-6">
              <div className="bg-cream border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <p className="font-body font-semibold text-black">
                  {t('modals.subscriptionRequired.description')}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={() => setShowSubscriptionModal(false)}
                className="flex-1 px-4 py-3 bg-gray-200 border-3 border-black font-display font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                {t('modals.subscriptionRequired.laterButton')}
              </button>
              <button
                onClick={handleSubscriptionRedirect}
                className="flex-1 px-4 py-3 bg-vinted text-white border-3 border-black font-display font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                {t('modals.subscriptionRequired.viewPlans')}
              </button>
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
                className="w-8 h-8 bg-gray-200 border-2 border-black flex items-center justify-center hover:bg-gray-300 transition-colors"
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
            <div className="flex gap-3">
              <button
                onClick={() => setShowImageRequiredModal(false)}
                className="flex-1 px-4 py-3 bg-gray-200 border-3 border-black font-display font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                {t('modals.imageRequired.closeButton')}
              </button>
              <button
                onClick={() => {
                  setShowImageRequiredModal(false);
                  fileInputRef.current?.click();
                }}
                className="flex-1 px-4 py-3 bg-pink-pastel border-3 border-black font-display font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                {t('modals.imageRequired.uploadButton')}
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