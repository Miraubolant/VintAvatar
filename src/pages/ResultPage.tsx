import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Star,
  Download,
  History,
  Sparkles,
  Copy,
  Check,
  AlertTriangle,
  RefreshCw,
  ArrowLeft,
  Scissors
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../hooks/useAuth';
import { cropHead } from '../utils/headCropper';

interface GenerationResult {
  id: string;
  created_at: string;
  generated_image_url: string;
  original_image_url: string;
  vinted_listing: {
    title: string;
    description: string;
  } | null;
  generation_config: any;
}

export const ResultPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation('result');
  const { user } = useAuth();

  const [result, setResult] = useState<GenerationResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copiedTitle, setCopiedTitle] = useState(false);
  const [copiedDescription, setCopiedDescription] = useState(false);
  const [isCropping, setIsCropping] = useState(false);
  const [croppedImageUrl, setCroppedImageUrl] = useState<string | null>(null);
  const [showCropped, setShowCropped] = useState(false);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (id) {
      fetchResult();
    }
  }, [id]);

  const fetchResult = async () => {
    if (!id) return;

    try {
      setLoading(true);
      setError(null);

      const { data, error: fetchError } = await supabase
        .from('usage_tracking')
        .select('*')
        .eq('id', id)
        .single();

      if (fetchError) {
        if (fetchError.code === 'PGRST116') {
          setError(t('errors.notFound', 'Generation not found'));
        } else {
          throw fetchError;
        }
        return;
      }

      // Transform the data
      const generationResult: GenerationResult = {
        id: data.id,
        created_at: data.created_at,
        generated_image_url: data.metadata?.generated_image_url || '',
        original_image_url: data.metadata?.original_image_url || '',
        vinted_listing: data.metadata?.vinted_listing || null,
        generation_config: data.metadata?.generation_config || {}
      };

      setResult(generationResult);
    } catch (err: any) {
      console.error('Error fetching result:', err);
      setError(t('errors.loading', 'Error loading generation'));
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!result?.generated_image_url) return;

    const imageUrl = showCropped && croppedImageUrl ? croppedImageUrl : result.generated_image_url;
    const filename = `avatar-vintdress-${result.id}${showCropped ? '-cropped' : ''}.jpg`;

    // Handle base64 data URLs directly (for cropped images)
    if (imageUrl.startsWith('data:')) {
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = filename;
      link.click();
      return;
    }

    // Handle regular URLs with fetch
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      link.click();

      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Download error:', error);
      window.open(imageUrl, '_blank');
    }
  };

  const handleCropHead = async () => {
    if (!result?.generated_image_url || isCropping) return;

    try {
      setIsCropping(true);
      const cropped = await cropHead(result.generated_image_url);
      setCroppedImageUrl(cropped);
      setShowCropped(true);
    } catch (err) {
      console.error('Crop error:', err);
    } finally {
      setIsCropping(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="bg-white border-4 border-black px-8 py-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-vinted border-2 border-black animate-pulse"></div>
            <span className="font-display font-bold text-lg">{t('loading', 'CHARGEMENT...')}</span>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !result) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center p-4">
        <div className="bg-white border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] max-w-md w-full text-center">
          <AlertTriangle className="w-16 h-16 text-amber-500 mx-auto mb-4" />
          <h1 className="font-display font-bold text-2xl mb-4">{t('errors.title', 'OUPS !')}</h1>
          <p className="font-body text-gray-600 mb-6">{error || t('errors.notFound', 'Generation introuvable')}</p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-vinted text-white border-3 border-black font-display font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            {t('backToHome', 'RETOUR A L\'ACCUEIL')}
          </button>
        </div>
      </div>
    );
  }

  const displayedImage = showCropped && croppedImageUrl ? croppedImageUrl : result.generated_image_url;

  return (
    <div className="min-h-screen bg-cream py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header with back button */}
        <div className="mb-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-4 py-2 bg-white border-3 border-black font-display font-bold text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('back', 'RETOUR')}
          </button>
        </div>

        {/* Main result card */}
        <div className="bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-10 h-10 bg-mint border-3 border-black transform rotate-12 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hidden sm:block"></div>
          <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-pink-pastel border-3 border-black transform -rotate-12 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hidden sm:block"></div>

          {/* Success badge */}
          <div className="text-center mb-6">
            <div className="inline-block bg-mint border-3 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
              <span className="font-display font-bold text-base sm:text-lg text-vinted">
                {t('success', 'AVATAR GENERE AVEC SUCCES')}
              </span>
            </div>
            <p className="font-body text-sm text-gray-500 mt-2">
              {t('generatedAt', 'Genere le')} {formatDate(result.created_at)}
            </p>
          </div>

          {/* Generated image */}
          <div className="flex justify-center mb-6">
            <img
              src={displayedImage}
              alt="Avatar IA genere"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            />
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
            <button
              onClick={handleDownload}
              className="w-full sm:w-auto px-6 py-3 bg-mint text-black border-3 border-black font-display font-bold text-sm sm:text-base shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              {t('download', 'TELECHARGER')}
            </button>
            <button
              onClick={() => {
                if (croppedImageUrl) {
                  // Toggle between cropped and original
                  setShowCropped(!showCropped);
                } else {
                  // First time: crop the image
                  handleCropHead();
                }
              }}
              disabled={isCropping}
              className="w-full sm:w-auto px-6 py-3 bg-pink-pastel text-black border-3 border-black font-display font-bold text-sm sm:text-base shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Scissors className="w-4 h-4" />
              {isCropping ? t('cropping', 'DECOUPE...') : (showCropped ? t('showOriginal', 'VOIR ORIGINAL') : t('cropHead', 'COUPER LA TETE'))}
            </button>
          </div>

          {/* Title & Description section */}
          {result.vinted_listing && (
            <div className="border-t-4 border-black pt-6 mt-2">
              {/* Header */}
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  {/* NEW badge */}
                  <div className="absolute -top-3 -right-3 bg-pink-pastel text-black border-2 border-black px-2 py-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform rotate-12 z-10">
                    <span className="font-display font-bold text-[10px]">BÉTA</span>
                  </div>
                  <div className="inline-flex items-center gap-3 bg-vinted border-4 border-black px-6 py-3 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-base sm:text-lg text-white tracking-wide">
                      {t('listingTitle', 'TITRE & DESCRIPTION')}
                    </span>
                  </div>
                </div>
                <p className="font-body text-sm text-gray-600 mt-3 max-w-md mx-auto">
                  {t('listingSubtitle', 'Votre annonce amelioree par l\'IA pour vendre plus vite')}
                </p>
              </div>

              {/* Title and Description grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                {/* Title */}
                <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-mint border-2 border-black transform rotate-45"></div>
                      <span className="font-display font-bold text-sm text-black">
                        {t('titleLabel', 'TITRE')}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(result.vinted_listing!.title);
                        setCopiedTitle(true);
                        setTimeout(() => setCopiedTitle(false), 2000);
                      }}
                      className={`flex items-center gap-1.5 px-3 py-1.5 border-3 border-black font-display font-bold text-xs shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
                        copiedTitle ? 'bg-mint text-black' : 'bg-vinted text-white'
                      }`}
                    >
                      {copiedTitle ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      {copiedTitle ? t('copied', 'COPIE !') : t('copy', 'COPIER')}
                    </button>
                  </div>
                  <div className="bg-cream border-3 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <p className="font-display font-bold text-black text-base sm:text-lg">{result.vinted_listing.title}</p>
                  </div>
                </div>

                {/* Description */}
                <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-pink-pastel border-2 border-black transform rotate-45"></div>
                      <span className="font-display font-bold text-sm text-black">
                        {t('descriptionLabel', 'DESCRIPTION')}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(result.vinted_listing!.description);
                        setCopiedDescription(true);
                        setTimeout(() => setCopiedDescription(false), 2000);
                      }}
                      className={`flex items-center gap-1.5 px-3 py-1.5 border-3 border-black font-display font-bold text-xs shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
                        copiedDescription ? 'bg-mint text-black' : 'bg-vinted text-white'
                      }`}
                    >
                      {copiedDescription ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      {copiedDescription ? t('copied', 'COPIE !') : t('copy', 'COPIER')}
                    </button>
                  </div>
                  <div className="bg-cream border-3 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] max-h-40 overflow-y-auto">
                    <p className="font-body text-black text-sm whitespace-pre-line leading-relaxed">{result.vinted_listing.description}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* New generation button */}
          <div className="mt-8 text-center">
            <button
              onClick={() => {
                navigate('/');
                // Scroll to hero section after navigation
                setTimeout(() => {
                  const heroSection = document.getElementById('hero');
                  if (heroSection) {
                    heroSection.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-vinted text-white border-4 border-black font-display font-bold text-base shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[9px_9px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              {t('newGeneration', 'NOUVELLE GENERATION')}
            </button>
          </div>

          {/* View history link */}
          <div className="mt-4 text-center">
            <button
              onClick={() => navigate('/account?tab=history')}
              className="inline-flex items-center gap-2 font-body text-sm text-gray-600 hover:text-vinted transition-colors underline"
            >
              <History className="w-4 h-4" />
              {t('viewHistory', 'Voir tout mon historique')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
