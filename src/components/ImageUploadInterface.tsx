import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  X,
  ImagePlus,
  Check,
  Loader2,
  ImageIcon,
  FileSearch,
  Sparkles,
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../hooks/useAuth';

// Image compression function
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

interface VintedArticleInfo {
  title?: string;
  price?: string;
  brand?: string;
  size?: string;
  color?: string;
  category?: string;
  condition?: string;
}

interface ImageUploadInterfaceProps {
  onImageReady: (imageData: string, isUrl: boolean, articleInfo: VintedArticleInfo | null) => void;
  onConfigClick: () => void;
  onGenerateClick: () => void;
  hasStoredConfig: boolean;
  isGenerating: boolean;
  onAuthRequired: () => void;
  onInvalidFile: (fileName: string) => void;
}

export const ImageUploadInterface: React.FC<ImageUploadInterfaceProps> = ({
  onImageReady,
  onConfigClick,
  onGenerateClick,
  hasStoredConfig,
  isGenerating,
  onAuthRequired,
  onInvalidFile,
}) => {
  const { t } = useTranslation('hero');
  const { user, session } = useAuth();

  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [vintedUrl, setVintedUrl] = useState('');
  const [vintedImage, setVintedImage] = useState<string | null>(null);
  const [vintedArticleInfo, setVintedArticleInfo] = useState<VintedArticleInfo | null>(null);
  const [isScrapingVinted, setIsScrapingVinted] = useState(false);
  const [scrapingStep, setScrapingStep] = useState<'connecting' | 'fetching' | 'extracting' | 'complete'>('connecting');
  const [vintedUrlError, setVintedUrlError] = useState<string | null>(null);

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

  // Notify parent when image is ready
  useEffect(() => {
    if (vintedImage) {
      onImageReady(vintedImage, true, vintedArticleInfo);
    } else if (uploadedImage) {
      onImageReady(uploadedImage, false, null);
    }
  }, [vintedImage, uploadedImage, vintedArticleInfo, onImageReady]);

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

  const handleValidateVintedUrl = async () => {
    if (!vintedUrl || isScrapingVinted) return;

    if (!user) {
      onAuthRequired();
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
      onAuthRequired();
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      return;
    }

    const file = event.target.files?.[0];
    if (file) {
      const validImageTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
      if (!validImageTypes.includes(file.type)) {
        onInvalidFile(file.name);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
        return;
      }

      try {
        const compressedImage = await compressImage(file);
        setUploadedImage(compressedImage);
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

  const handleClearAll = () => {
    setVintedUrl('');
    setVintedImage(null);
    setVintedArticleInfo(null);
    setUploadedImage(null);
    setVintedUrlError(null);
    lastExtractedUrlRef.current = null;
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const hasImage = vintedImage || uploadedImage;

  return (
    <div className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
      <div className="bg-gradient-to-r from-pink-pastel to-mint p-4 border-b-4 border-black">
        <h2 className="font-display font-bold text-lg sm:text-xl text-black text-center">
          CREEZ VOTRE PROPRE AVATAR
        </h2>
        <p className="font-body text-sm text-black/80 text-center mt-1">
          Collez un lien Vinted ou uploadez votre photo
        </p>
      </div>

      <div className="p-3 sm:p-5">
        {/* Image Preview */}
        {hasImage && (
          <div className="bg-cream border-3 border-black p-3 sm:p-4 mb-3 sm:mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex flex-row items-start gap-3 sm:gap-5">
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
                  <div className="bg-white border-2 border-black p-2.5 sm:p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <p className="font-display font-bold text-sm sm:text-base text-black">
                      {t('interface.imageReady')}
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
                          <span className="text-[10px] sm:text-xs font-bold hidden xs:inline">{t('scraping.steps.connecting')}</span>
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
                          <span className="text-[10px] sm:text-xs font-bold hidden xs:inline">{t('scraping.steps.fetching')}</span>
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
                          <span className="text-[10px] sm:text-xs font-bold hidden xs:inline">{t('scraping.steps.extracting')}</span>
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
                      onClick={handleClearAll}
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
                    onAuthRequired();
                    return;
                  }
                  if (vintedImage) {
                    handleRemoveVintedImage();
                  }
                  fileInputRef.current?.click();
                }}
                title="Ouvrir la galerie"
                className="bg-vinted border-3 border-black font-display font-bold text-xs sm:text-sm text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex items-center justify-center px-3 py-2 sm:px-4 sm:py-3"
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

            {/* Action Buttons */}
            <div className="space-y-2 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-3">
              <button
                type="button"
                onClick={onConfigClick}
                className={`w-full bg-vinted border-3 border-black font-display font-bold text-xs sm:text-sm text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex items-center justify-center gap-2 px-3 py-2.5 sm:py-3 sm:px-4 ${
                  hasImage && !hasStoredConfig ? 'animate-pulse' : ''
                }`}
              >
                <span>{t('configSection.configure')}</span>
              </button>

              <button
                type="button"
                onClick={onGenerateClick}
                className={`w-full bg-pink-pastel border-3 border-black font-display font-bold text-xs sm:text-sm text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex items-center justify-center gap-2 px-3 py-2.5 sm:py-3 sm:px-4 ${
                  hasImage ? 'animate-pulse' : ''
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>{isGenerating ? t('configSection.generating') : t('configSection.generate')}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ImageUploadInterface;
