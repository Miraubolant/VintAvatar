import React, { useEffect, useState, useRef } from 'react';
import { Sparkles, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { GoogleAdBanner } from './ads/GoogleAdBanner';
import { AD_CONFIG } from './ads/adConfig';

interface GenerationLoadingModalProps {
  isOpen: boolean;
  stage: 'analyzing' | 'generating' | 'saving' | 'complete';
}

export const GenerationLoadingModal: React.FC<GenerationLoadingModalProps> = ({ isOpen, stage }) => {
  const [progress, setProgress] = useState(0);
  const { t } = useTranslation('generation');
  const startTime = useRef<number>(Date.now());
  const animationFrame = useRef<number | null>(null);

  // Target duration: 5.5 seconds to reach 97%
  const GENERATION_DURATION = 5500;

  // Reset on open
  useEffect(() => {
    if (isOpen) {
      startTime.current = Date.now();
      setProgress(0);
    }
  }, [isOpen]);

  // Smooth progress animation - goes to 97% over 5.5 seconds
  useEffect(() => {
    if (!isOpen) return;

    // If complete, jump to 100%
    if (stage === 'complete') {
      setProgress(100);
      return;
    }

    const animate = () => {
      const elapsed = Date.now() - startTime.current;
      const rawProgress = Math.min(elapsed / GENERATION_DURATION, 1);

      // Ease-out curve for natural feeling
      const easedProgress = 1 - Math.pow(1 - rawProgress, 3);

      // Cap at 97% until complete
      const newProgress = Math.round(easedProgress * 97);
      setProgress(newProgress);

      if (rawProgress < 1) {
        animationFrame.current = requestAnimationFrame(animate);
      }
    };

    animationFrame.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [isOpen, stage]);

  if (!isOpen) return null;

  const isComplete = stage === 'complete';

  return (
    <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4">
      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-mint border-2 border-black transform rotate-45 animate-bounce" style={{ animationDelay: '0s', animationDuration: '2s' }} />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-pink-pastel border-2 border-black rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-vinted border-2 border-black transform rotate-12 animate-bounce" style={{ animationDelay: '0.3s', animationDuration: '2.2s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-mint border-2 border-black transform -rotate-12 animate-bounce" style={{ animationDelay: '0.7s', animationDuration: '1.8s' }} />
      </div>

      <div className="w-full max-w-md relative">
        {/* Main card */}
        <div className={`bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 transition-all duration-300 ${isComplete ? 'scale-105' : ''}`}>

          {/* Decorative corner */}
          <div className="absolute -top-3 -right-3 w-8 h-8 bg-pink-pastel border-3 border-black transform rotate-12 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />
          <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-mint border-3 border-black transform -rotate-12 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className={`relative p-5 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 ${
              isComplete ? 'bg-mint' : 'bg-vinted'
            }`}>
              {isComplete ? (
                <CheckCircle className="w-12 h-12 text-black" />
              ) : (
                <>
                  <Sparkles className="w-12 h-12 text-white animate-pulse" />
                  {/* Rotating ring effect */}
                  <div className="absolute inset-0 border-4 border-transparent border-t-white/30 rounded-sm animate-spin" style={{ animationDuration: '1.5s' }} />
                </>
              )}
            </div>
          </div>

          {/* Title */}
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-black text-center mb-2">
            {isComplete ? t('stages.complete.title') : t('stages.generating.title')}
          </h2>

          {/* Message */}
          <p className="font-body text-base text-gray-600 text-center mb-8">
            {isComplete ? t('stages.complete.message') : t('stages.generating.message')}
          </p>

          {/* Big percentage */}
          <div className="text-center mb-6">
            <div className="inline-flex items-baseline gap-1">
              <span className={`font-display font-bold text-6xl sm:text-7xl transition-colors duration-300 ${
                isComplete ? 'text-mint' : 'text-vinted'
              }`}>
                {progress}
              </span>
              <span className="font-display font-bold text-3xl text-black">%</span>
            </div>
          </div>

          {/* Progress bar container */}
          <div className="relative">
            {/* Background bar */}
            <div className="w-full h-6 bg-cream border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
              {/* Progress fill */}
              <div
                className={`h-full transition-all duration-200 ease-out ${
                  isComplete ? 'bg-mint' : 'bg-vinted'
                }`}
                style={{ width: `${progress}%` }}
              >
                {/* Shimmer effect */}
                {!isComplete && (
                  <div className="absolute inset-0 overflow-hidden">
                    <div
                      className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"
                      style={{
                        animation: 'shimmer 1.5s infinite',
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Status text */}
          <div className="mt-6 text-center">
            {isComplete ? (
              <div className="inline-flex items-center gap-2 bg-mint border-3 border-black px-4 py-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <CheckCircle className="w-4 h-4" />
                <span className="font-display font-bold text-sm">PRÊT !</span>
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 text-gray-500">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-vinted rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                  <div className="w-2 h-2 bg-vinted rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
                  <div className="w-2 h-2 bg-vinted rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                </div>
                <span className="font-body text-sm">{t('stages.generating.message')}</span>
              </div>
            )}
          </div>

          {/* Google Ad - Only show during generation */}
          {!isComplete && (
            <div className="mt-6 border-t-2 border-dashed border-gray-200 pt-6">
              <p className="text-xs text-gray-400 text-center mb-2 font-body">Publicité</p>
              <div className="bg-cream border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-2 overflow-hidden h-[90px] sm:h-[100px]">
                <GoogleAdBanner
                  slot={AD_CONFIG.slots.loadingModal}
                  format="horizontal"
                  responsive={true}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CSS for shimmer animation */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
};
