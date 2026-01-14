import React, { useEffect, useState, useRef } from 'react';
import { Sparkles, CheckCircle, Video, Zap, TrendingUp, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface GenerationLoadingModalProps {
  isOpen: boolean;
  stage: 'analyzing' | 'generating' | 'saving' | 'complete';
}

export const GenerationLoadingModal: React.FC<GenerationLoadingModalProps> = ({ isOpen, stage }) => {
  const [progress, setProgress] = useState(0);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const { t } = useTranslation('generation');
  const startTime = useRef<number>(Date.now());
  const animationFrame = useRef<number | null>(null);
  const phraseInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  // Waiting phrases that rotate
  const waitingPhrases = [
    t('waitingPhrases.analyzing'),
    t('waitingPhrases.preparing'),
    t('waitingPhrases.creating'),
    t('waitingPhrases.styling'),
    t('waitingPhrases.perfecting'),
    t('waitingPhrases.almostDone'),
  ];

  // Target duration: ~45 seconds to reach 95% (FLUX.2 Pro takes longer)
  const GENERATION_DURATION = 45000;
  const PHRASE_ROTATION_INTERVAL = 6000; // Change phrase every 6 seconds

  // Reset on open
  useEffect(() => {
    if (isOpen) {
      startTime.current = Date.now();
      setProgress(0);
      setCurrentPhraseIndex(0);
    }
  }, [isOpen]);

  // Rotate through waiting phrases
  useEffect(() => {
    if (!isOpen || stage === 'complete') {
      if (phraseInterval.current) {
        clearInterval(phraseInterval.current);
      }
      return;
    }

    phraseInterval.current = setInterval(() => {
      setCurrentPhraseIndex(prev => (prev + 1) % waitingPhrases.length);
    }, PHRASE_ROTATION_INTERVAL);

    return () => {
      if (phraseInterval.current) {
        clearInterval(phraseInterval.current);
      }
    };
  }, [isOpen, stage, waitingPhrases.length]);

  // Smooth progress animation - goes to 95% over ~45 seconds
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

      // Ease-out curve for natural feeling (slows down as it approaches end)
      const easedProgress = 1 - Math.pow(1 - rawProgress, 2.5);

      // Cap at 95% until complete
      const newProgress = Math.round(easedProgress * 95);
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
    <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      {/* Decorative floating elements - hidden on very small screens */}
      <div className="hidden sm:block absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 sm:w-4 sm:h-4 bg-mint border-2 border-black transform rotate-45 animate-bounce" style={{ animationDelay: '0s', animationDuration: '2s' }} />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-pink-pastel border-2 border-black rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 sm:w-5 sm:h-5 bg-vinted border-2 border-black transform rotate-12 animate-bounce" style={{ animationDelay: '0.3s', animationDuration: '2.2s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 sm:w-3 sm:h-3 bg-mint border-2 border-black transform -rotate-12 animate-bounce" style={{ animationDelay: '0.7s', animationDuration: '1.8s' }} />
      </div>

      <div className="w-full max-w-[95vw] sm:max-w-3xl relative my-2 sm:my-4">
        {/* Unified card - Horizontal layout on desktop */}
        <div className={`border-3 sm:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden transition-all duration-300 ${isComplete ? 'scale-[1.01]' : ''}`}>

          {/* Decorative corners */}
          <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-6 h-6 sm:w-8 sm:h-8 bg-pink-pastel border-2 sm:border-3 border-black transform rotate-12 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10" />
          <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-5 h-5 sm:w-6 sm:h-6 bg-mint border-2 sm:border-3 border-black transform -rotate-12 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10" />

          {/* Main content - Flex row on desktop, column on mobile */}
          <div className="flex flex-col sm:flex-row">

            {/* ===== LOADER SECTION (White background) ===== */}
            <div className="bg-white p-3 sm:p-5 sm:flex-1 sm:flex sm:flex-col sm:justify-center">
              {/* Horizontal layout */}
              <div className="flex items-center gap-3 sm:gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className={`relative p-2 sm:p-3 border-2 sm:border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 ${
                    isComplete ? 'bg-mint' : 'bg-vinted'
                  }`}>
                    {isComplete ? (
                      <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                    ) : (
                      <>
                        <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white animate-pulse" />
                        <div className="absolute inset-0 border-2 sm:border-3 border-transparent border-t-white/30 rounded-sm animate-spin" style={{ animationDuration: '1.5s' }} />
                      </>
                    )}
                  </div>
                </div>

                {/* Title + Phrase */}
                <div className="flex-1 min-w-0">
                  <h2 className="font-display font-bold text-sm sm:text-lg text-black mb-0.5 sm:mb-1">
                    {isComplete ? t('stages.complete.title') : t('stages.generating.title')}
                  </h2>
                  <p className={`font-body text-xs sm:text-sm transition-all duration-500 truncate ${
                    isComplete ? 'text-black font-semibold' : 'text-gray-600'
                  }`}>
                    {isComplete ? t('stages.complete.message') : waitingPhrases[currentPhraseIndex]}
                  </p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="relative mt-3 sm:mt-4">
                <div className="w-full h-2.5 sm:h-3 bg-cream border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 ease-out ${
                      isComplete ? 'bg-mint' : 'bg-vinted'
                    }`}
                    style={{ width: `${progress}%` }}
                  >
                    {!isComplete && (
                      <div className="absolute inset-0 overflow-hidden">
                        <div
                          className="absolute inset-y-0 w-16 sm:w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          style={{ animation: 'shimmer 1.5s infinite' }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Status indicator */}
              <div className="mt-2 sm:mt-3 text-center sm:text-left">
                {isComplete ? (
                  <div className="inline-flex items-center gap-1 sm:gap-1.5 bg-mint border-2 border-black px-2 py-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <CheckCircle className="w-3 h-3" />
                    <span className="font-display font-bold text-[10px] sm:text-xs">{t('stages.complete.short')}</span>
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-2">
                    <div className="flex gap-0.5">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-vinted rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-vinted rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-vinted rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                    </div>
                    <span className="font-body text-[10px] sm:text-xs text-gray-500">{t('stages.generating.short')}</span>
                  </div>
                )}
              </div>
            </div>

            {/* ===== VINTBOOST SPONSORED SECTION (Beige background) ===== */}
            <div className="p-2.5 sm:p-4 border-t-2 sm:border-t-0 sm:border-l-3 border-black sm:w-[340px]" style={{ backgroundColor: '#E8DFD5' }}>
              {/* Header + Badge */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-1">
                  <Video className="w-3 h-3" style={{ color: '#1D3354' }} />
                  <span className="font-display font-bold text-[9px] sm:text-[10px] uppercase tracking-wider" style={{ color: '#1D3354' }}>
                    Sponsorisé par VintBoost.com
                  </span>
                </div>
                <span
                  className="inline-block border-2 border-black px-1.5 py-0.5 font-display font-bold text-[9px] text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  style={{ backgroundColor: '#1D3354' }}
                >
                  VIDÉOS IA
                </span>
              </div>

              {/* Description */}
              <p className="font-body text-[10px] sm:text-xs text-center mb-2" style={{ color: '#1D3354' }}>
                Génère des vidéos promotionnelles de tes vêtements Vinted en 30s !
              </p>

              {/* Images + Features side by side */}
              <div className="flex gap-2">
                {/* Images - 2 columns */}
                <div className="flex-1 grid grid-cols-2 gap-1.5">
                  <div className="border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] overflow-hidden bg-white">
                    <img
                      src="https://i.imgur.com/dVJXIvo.png"
                      alt="VintBoost - Coller le lien Vinted"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] overflow-hidden bg-white">
                    <img
                      src="https://i.imgur.com/2A2kfxz.png"
                      alt="VintBoost - Sélection et génération"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                {/* Features - vertical */}
                <div className="flex flex-col justify-center gap-1">
                  <div className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3" style={{ color: '#1D3354' }} />
                    <span className="font-display font-bold text-[9px]" style={{ color: '#1D3354' }}>HD</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Zap className="w-3 h-3" style={{ color: '#1D3354' }} />
                    <span className="font-display font-bold text-[9px]" style={{ color: '#1D3354' }}>30s</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" style={{ color: '#1D3354' }} />
                    <span className="font-display font-bold text-[9px]" style={{ color: '#1D3354' }}>+300%</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://vintboost.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 w-full mt-2 py-2 border-2 border-black font-display font-bold text-[10px] sm:text-xs text-white uppercase tracking-wide shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-150"
                style={{ backgroundColor: '#D64045' }}
              >
                <span>Découvrir VintBoost.com</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
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
