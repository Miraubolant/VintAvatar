import React, { useEffect, useState } from 'react';
import { Sparkles, Zap, Star, Eye, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface GenerationLoadingModalProps {
  isOpen: boolean;
  stage: 'analyzing' | 'generating' | 'saving' | 'complete';
}

const stageInfo = {
  analyzing: {
    icon: Eye,
    color: "bg-mint",
    progress: 25
  },
  generating: {
    icon: Sparkles,
    color: "bg-vinted",
    progress: 75
  },
  saving: {
    icon: Zap,
    color: "bg-pink-pastel",
    progress: 95
  },
  complete: {
    icon: CheckCircle,
    color: "bg-mint",
    progress: 100
  }
};

export const GenerationLoadingModal: React.FC<GenerationLoadingModalProps> = ({ isOpen, stage }) => {
  const [dots, setDots] = useState('');
  const { t } = useTranslation('generation');

  const currentStage = stageInfo[stage];
  const IconComponent = currentStage.icon;

  // Animation des points
  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev.length >= 3) return '';
        return prev + '.';
      });
    }, 500);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4">
      <div className="relative w-full max-w-md">
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 p-8 text-center">
          
          {/* Icon */}
          <div className="mb-6">
            <div className={`inline-block p-4 ${currentStage.color} border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-2`}>
              <IconComponent className={`w-12 h-12 ${currentStage.color === 'bg-vinted' ? 'text-white' : 'text-black'}`} />
            </div>
          </div>

          {/* Title */}
          <h2 className="font-display font-bold text-3xl text-black mb-2">
            {t(`stages.${stage}.title`)}
          </h2>

          {/* Message */}
          <p className="font-body font-semibold text-lg text-black mb-6">
            {t(`stages.${stage}.message`)}
            <span className="text-vinted">{dots}</span>
          </p>

          {/* Enhanced Progress Bar */}
          <div className="mb-6">
            <div className="w-full h-8 bg-cream border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
              <div 
                className={`h-full ${currentStage.color} transition-all duration-1000 ease-in-out relative`}
                style={{ width: `${currentStage.progress}%` }}
              >
                {/* Moving stripe animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
                {/* Edge highlight */}
                <div className="absolute right-0 top-0 w-1 h-full bg-black opacity-50"></div>
              </div>
            </div>
            <div className="flex justify-between mt-2 font-display font-bold text-black">
              <span className="text-sm">0%</span>
              <span className="text-xl text-vinted">{currentStage.progress}%</span>
              <span className="text-sm">100%</span>
            </div>
          </div>

          {/* Stage indicators */}
          <div className="flex justify-center gap-3">
            {Object.entries(stageInfo).map(([key, info], index) => {
              const isCurrent = key === stage;
              const isCompleted = Object.keys(stageInfo).indexOf(key) < Object.keys(stageInfo).indexOf(stage);
              
              return (
                <div 
                  key={key} 
                  className={`w-3 h-3 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform ${
                    isCurrent ? 'bg-vinted animate-pulse rotate-12' : 
                    isCompleted ? 'bg-mint rotate-6' : 'bg-cream'
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};