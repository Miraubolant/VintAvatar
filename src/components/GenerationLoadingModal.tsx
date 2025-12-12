import React, { useEffect, useState, useRef } from 'react';
import { Sparkles, Zap, Eye, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface GenerationLoadingModalProps {
  isOpen: boolean;
  stage: 'analyzing' | 'generating' | 'saving' | 'complete';
}

const stageInfo = {
  analyzing: {
    icon: Eye,
    color: "bg-mint",
    barColor: "bg-mint",
    textColor: "text-black",
    minProgress: 0,
    maxProgress: 25,
    duration: 15000
  },
  generating: {
    icon: Sparkles,
    color: "bg-vinted",
    barColor: "bg-vinted",
    textColor: "text-white",
    minProgress: 25,
    maxProgress: 85,
    duration: 60000
  },
  saving: {
    icon: Zap,
    color: "bg-pink-pastel",
    barColor: "bg-pink-pastel",
    textColor: "text-black",
    minProgress: 85,
    maxProgress: 98,
    duration: 10000
  },
  complete: {
    icon: CheckCircle,
    color: "bg-mint",
    barColor: "bg-mint",
    textColor: "text-black",
    minProgress: 100,
    maxProgress: 100,
    duration: 0
  }
};

export const GenerationLoadingModal: React.FC<GenerationLoadingModalProps> = ({ isOpen, stage }) => {
  const [dots, setDots] = useState('');
  const [progress, setProgress] = useState(0);
  const { t } = useTranslation('generation');
  const stageStartTime = useRef<number>(Date.now());
  const animationFrame = useRef<number | null>(null);

  const currentStage = stageInfo[stage];
  const IconComponent = currentStage.icon;

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
    }, 400);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      <div className="w-full max-w-sm sm:max-w-md">
        {/* Main card */}
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 sm:p-8">

          {/* Icon with pulse animation */}
          <div className="flex justify-center mb-5">
            <div className={`p-4 ${currentStage.color} border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${stage !== 'complete' ? 'animate-pulse' : ''}`}>
              <IconComponent className={`w-10 h-10 sm:w-12 sm:h-12 ${currentStage.textColor}`} />
            </div>
          </div>

          {/* Title */}
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-black text-center mb-2">
            {t(`stages.${stage}.title`)}
          </h2>

          {/* Message */}
          <p className="font-body text-base sm:text-lg text-gray-600 text-center mb-6">
            {t(`stages.${stage}.message`)}
            <span className="text-vinted font-bold">{dots}</span>
          </p>

          {/* Big percentage */}
          <div className="text-center mb-4">
            <span className="font-display font-bold text-5xl sm:text-6xl text-vinted">
              {progress}
            </span>
            <span className="font-display font-bold text-2xl sm:text-3xl text-black">%</span>
          </div>

          {/* Progress bar */}
          <div className="w-full h-5 sm:h-6 bg-cream border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <div
              className={`h-full ${currentStage.barColor} transition-all duration-300 ease-out`}
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Stage info - simple text */}
          <p className="font-display font-bold text-xs sm:text-sm text-center mt-4 text-gray-500 uppercase tracking-wide">
            {stage === 'analyzing' && '1/3'}
            {stage === 'generating' && '2/3'}
            {stage === 'saving' && '3/3'}
            {stage === 'complete' && '✓'}
          </p>
        </div>
      </div>
    </div>
  );
};