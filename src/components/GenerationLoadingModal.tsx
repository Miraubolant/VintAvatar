import React, { useEffect, useState, useRef } from 'react';
import { Sparkles, Zap, Eye, CheckCircle, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface GenerationLoadingModalProps {
  isOpen: boolean;
  stage: 'analyzing' | 'generating' | 'saving' | 'complete';
}

const stageInfo = {
  analyzing: {
    icon: Eye,
    color: "bg-mint",
    textColor: "text-black",
    minProgress: 0,
    maxProgress: 25,
    duration: 15000
  },
  generating: {
    icon: Sparkles,
    color: "bg-vinted",
    textColor: "text-white",
    minProgress: 25,
    maxProgress: 85,
    duration: 60000
  },
  saving: {
    icon: Zap,
    color: "bg-pink-pastel",
    textColor: "text-black",
    minProgress: 85,
    maxProgress: 98,
    duration: 10000
  },
  complete: {
    icon: CheckCircle,
    color: "bg-mint",
    textColor: "text-black",
    minProgress: 100,
    maxProgress: 100,
    duration: 0
  }
};

const stageKeys = ['analyzing', 'generating', 'saving', 'complete'] as const;

export const GenerationLoadingModal: React.FC<GenerationLoadingModalProps> = ({ isOpen, stage }) => {
  const [dots, setDots] = useState('');
  const [progress, setProgress] = useState(0);
  const { t } = useTranslation('generation');
  const stageStartTime = useRef<number>(Date.now());
  const animationFrame = useRef<number | null>(null);

  const currentStage = stageInfo[stage];
  const IconComponent = currentStage.icon;
  const currentStageIndex = stageKeys.indexOf(stage);

  // Reset stage start time when stage changes
  useEffect(() => {
    stageStartTime.current = Date.now();
    setProgress(currentStage.minProgress);
  }, [stage]);

  // Smooth progress animation
  useEffect(() => {
    if (!isOpen || stage === 'complete') {
      if (stage === 'complete') {
        setProgress(100);
      }
      return;
    }

    const animate = () => {
      const elapsed = Date.now() - stageStartTime.current;
      const stageProgress = Math.min(elapsed / currentStage.duration, 1);
      const easedProgress = 1 - Math.pow(1 - stageProgress, 2);
      const newProgress = currentStage.minProgress +
        (currentStage.maxProgress - currentStage.minProgress) * easedProgress;
      setProgress(Math.round(newProgress));

      if (stageProgress < 1) {
        animationFrame.current = requestAnimationFrame(animate);
      }
    };

    animationFrame.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [isOpen, stage, currentStage]);

  // Dots animation
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setDots((prev) => prev.length >= 3 ? '' : prev + '.');
    }, 500);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-3 sm:p-4">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-8 h-8 sm:w-12 sm:h-12 bg-mint border-3 border-black transform rotate-12 opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-6 h-6 sm:w-10 sm:h-10 bg-pink-pastel border-3 border-black transform -rotate-6 opacity-20"></div>
        <div className="absolute top-1/4 right-1/4 w-4 h-4 sm:w-6 sm:h-6 bg-vinted border-2 border-black transform rotate-45 opacity-20"></div>
      </div>

      <div className="relative w-full max-w-sm sm:max-w-md">
        {/* Main card */}
        <div className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-5 sm:p-8">

          {/* Animated Icon */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className={`relative p-3 sm:p-4 ${currentStage.color} border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${stage !== 'complete' ? 'animate-bounce' : ''}`}>
              <IconComponent className={`w-8 h-8 sm:w-12 sm:h-12 ${currentStage.textColor}`} />
              {/* Sparkle effects */}
              {stage === 'generating' && (
                <>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 border border-black transform rotate-45 animate-ping"></div>
                  <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-yellow-400 border border-black transform rotate-45 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                </>
              )}
            </div>
          </div>

          {/* Title */}
          <h2 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-black text-center mb-1 sm:mb-2">
            {t(`stages.${stage}.title`)}
          </h2>

          {/* Message with animated dots */}
          <p className="font-body font-semibold text-sm sm:text-base md:text-lg text-gray-700 text-center mb-5 sm:mb-6">
            {t(`stages.${stage}.message`)}
            <span className="text-vinted font-bold">{dots}</span>
          </p>

          {/* Progress Section */}
          <div className="mb-5 sm:mb-6">
            {/* Progress percentage - large display */}
            <div className="text-center mb-3">
              <span className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-vinted">
                {progress}
              </span>
              <span className="font-display font-bold text-xl sm:text-2xl text-black">%</span>
            </div>

            {/* Progress bar container */}
            <div className="relative">
              {/* Background track */}
              <div className="w-full h-4 sm:h-5 bg-cream border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                {/* Progress fill */}
                <div
                  className={`h-full ${currentStage.color} transition-all duration-300 ease-out relative overflow-hidden`}
                  style={{ width: `${progress}%` }}
                >
                  {/* Animated stripes */}
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(255,255,255,0.5) 8px, rgba(255,255,255,0.5) 16px)',
                      animation: 'moveStripes 1s linear infinite'
                    }}
                  ></div>
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
                </div>
              </div>

              {/* Progress markers */}
              <div className="flex justify-between mt-1.5 px-0.5">
                {[0, 25, 50, 75, 100].map((mark) => (
                  <div key={mark} className="flex flex-col items-center">
                    <div className={`w-1 h-1.5 ${progress >= mark ? 'bg-vinted' : 'bg-gray-300'} transition-colors`}></div>
                    <span className={`font-display text-[10px] sm:text-xs ${progress >= mark ? 'text-black font-bold' : 'text-gray-400'}`}>
                      {mark}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stage Steps */}
          <div className="bg-cream border-3 border-black p-3 sm:p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center justify-between gap-1 sm:gap-2">
              {stageKeys.slice(0, -1).map((key, index) => {
                const info = stageInfo[key];
                const StageIcon = info.icon;
                const isCompleted = index < currentStageIndex;
                const isCurrent = index === currentStageIndex;

                return (
                  <React.Fragment key={key}>
                    {/* Step circle */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`
                          w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center
                          border-2 sm:border-3 border-black
                          shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                          transition-all duration-300
                          ${isCompleted ? 'bg-mint' : isCurrent ? `${info.color} animate-pulse` : 'bg-white'}
                        `}
                      >
                        {isCompleted ? (
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                        ) : (
                          <StageIcon className={`w-4 h-4 sm:w-5 sm:h-5 ${isCurrent ? info.textColor : 'text-gray-400'}`} />
                        )}
                      </div>
                      {/* Step label - hidden on very small screens */}
                      <span className={`
                        hidden sm:block mt-1 font-display text-[9px] sm:text-[10px] uppercase tracking-tight
                        ${isCompleted || isCurrent ? 'text-black font-bold' : 'text-gray-400'}
                      `}>
                        {t(`stages.${key}.short`, key.slice(0, 4))}
                      </span>
                    </div>

                    {/* Connector line */}
                    {index < stageKeys.length - 2 && (
                      <div className="flex-1 h-0.5 sm:h-1 mx-0.5 sm:mx-1 relative">
                        <div className="absolute inset-0 bg-gray-300 border-y border-black/20"></div>
                        <div
                          className={`absolute inset-y-0 left-0 bg-mint transition-all duration-500 ${isCompleted ? 'w-full' : 'w-0'}`}
                        ></div>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Completion badge */}
          {stage === 'complete' && (
            <div className="mt-4 sm:mt-5 flex justify-center">
              <div className="inline-flex items-center gap-2 bg-mint border-3 border-black px-4 py-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] animate-bounce">
                <CheckCircle className="w-5 h-5 text-black" />
                <span className="font-display font-bold text-sm sm:text-base text-black">
                  {t('stages.complete.title', 'TERMINÉ !')}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Decorative corner elements */}
        <div className="absolute -top-2 -right-2 w-4 h-4 sm:w-5 sm:h-5 bg-vinted border-2 border-black transform rotate-12 hidden sm:block"></div>
        <div className="absolute -bottom-2 -left-2 w-3 h-3 sm:w-4 sm:h-4 bg-pink-pastel border-2 border-black transform -rotate-6 hidden sm:block"></div>
      </div>

      {/* CSS for stripe animation */}
      <style>{`
        @keyframes moveStripes {
          0% { transform: translateX(-16px); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};