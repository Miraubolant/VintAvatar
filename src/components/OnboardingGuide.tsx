import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronRight, ChevronLeft, Sparkles, HelpCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface GuideStep {
  id: number;
  title: string;
  description: string;
  elementSelector?: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

interface OnboardingGuideProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

const getSteps = (t: any): GuideStep[] => [
  {
    id: 1,
    title: t('steps.step1.title'),
    description: t('steps.step1.description'),
    elementSelector: '[data-guide="vinted-url-input"]',
    position: 'bottom'
  },
  {
    id: 2,
    title: t('steps.step2.title'),
    description: t('steps.step2.description'),
    elementSelector: '[data-guide="upload-button"]',
    position: 'left'
  },
  {
    id: 3,
    title: t('steps.step3.title'),
    description: t('steps.step3.description'),
    elementSelector: '[data-guide="extract-button"]',
    position: 'top'
  },
  {
    id: 4,
    title: t('steps.step4.title'),
    description: t('steps.step4.description'),
    elementSelector: '[data-guide="config-button"]',
    position: 'top'
  },
  {
    id: 5,
    title: t('steps.step5.title'),
    description: t('steps.step5.description'),
    elementSelector: '[data-guide="generate-button"]',
    position: 'top'
  }
];

export const OnboardingGuide: React.FC<OnboardingGuideProps> = ({
  isOpen,
  onClose,
  onComplete
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [elementBounds, setElementBounds] = useState<DOMRect | null>(null);
  const { t } = useTranslation('guide');

  // Reset to first step when guide is opened
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0);
    }
  }, [isOpen]);

  const steps = getSteps(t);

  const updateElementBounds = useCallback(() => {
    if (!isOpen || !steps[currentStep]?.elementSelector) return;

    const element = document.querySelector(steps[currentStep].elementSelector!);
    if (element) {
      const rect = element.getBoundingClientRect();
      setElementBounds(rect);

      // Scroll element into view if needed (with extra padding for mobile)
      const isMobile = window.innerWidth < 640;
      const scrollPadding = isMobile ? 150 : 100;
      const elementTop = rect.top + window.scrollY;
      const elementBottom = elementTop + rect.height;
      const viewportTop = window.scrollY;
      const viewportBottom = viewportTop + window.innerHeight;

      if (elementTop < viewportTop + scrollPadding || elementBottom > viewportBottom - scrollPadding) {
        window.scrollTo({
          top: elementTop - scrollPadding,
          behavior: 'smooth'
        });
      }
    } else {
      console.warn('Element not found:', steps[currentStep].elementSelector);
      setElementBounds(null);
    }
  }, [currentStep, isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    // Immediate update without delay
    updateElementBounds();

    // Update on scroll and resize
    const handleUpdate = () => updateElementBounds();
    window.addEventListener('scroll', handleUpdate);
    window.addEventListener('resize', handleUpdate);

    return () => {
      window.removeEventListener('scroll', handleUpdate);
      window.removeEventListener('resize', handleUpdate);
    };
  }, [updateElementBounds, isOpen]);

  if (!isOpen) return null;

  const currentStepData = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;

  const handleNext = () => {
    if (isLastStep) {
      onComplete();
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (!isFirstStep) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSkip = () => {
    onClose();
  };

  const getTooltipStyles = () => {
    const isMobile = window.innerWidth < 640;

    if (!elementBounds) {
      return {
        position: 'fixed' as const,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      };
    }

    const tooltipWidth = isMobile ? Math.min(window.innerWidth - 40, 280) : 320;
    const tooltipHeight = 250;
    const padding = isMobile ? 10 : 20;

    let styles: React.CSSProperties = {
      position: 'fixed' as const,
    };

    // On mobile, always position at bottom of screen
    if (isMobile) {
      styles.bottom = padding;
      styles.left = padding;
      styles.right = padding;
      styles.width = 'auto';
    } else {
      switch (currentStepData.position) {
        case 'bottom':
          styles.top = elementBounds.bottom + padding;
          styles.left = elementBounds.left + (elementBounds.width / 2) - (tooltipWidth / 2);
          break;
        case 'top':
          styles.top = elementBounds.top - tooltipHeight - padding;
          styles.left = elementBounds.left + (elementBounds.width / 2) - (tooltipWidth / 2);
          break;
        case 'left':
          styles.top = elementBounds.top + (elementBounds.height / 2) - (tooltipHeight / 2);
          styles.left = elementBounds.left - tooltipWidth - padding;
          break;
        case 'right':
          styles.top = elementBounds.top + (elementBounds.height / 2) - (tooltipHeight / 2);
          styles.left = elementBounds.right + padding;
          break;
        default:
          styles.top = '50%';
          styles.left = '50%';
          styles.transform = 'translate(-50%, -50%)';
      }

      // Keep tooltip within viewport on desktop
      if (typeof styles.left === 'number') {
        styles.left = Math.max(padding, Math.min(styles.left, window.innerWidth - tooltipWidth - padding));
      }
      if (typeof styles.top === 'number') {
        styles.top = Math.max(padding, Math.min(styles.top, window.innerHeight - tooltipHeight - padding));
      }
    }

    return styles;
  };

  return (
    <>
      {/* Dark overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-60 z-[9998]"
        onClick={handleSkip}
      />

      {/* Spotlight */}
      {elementBounds && (
        <>
          {/* Top overlay */}
          <div
            className="fixed left-0 right-0 bg-black bg-opacity-60 z-[9999] pointer-events-none"
            style={{
              top: 0,
              height: `${elementBounds.top - 10}px`
            }}
          />

          {/* Bottom overlay */}
          <div
            className="fixed left-0 right-0 bg-black bg-opacity-60 z-[9999] pointer-events-none"
            style={{
              top: `${elementBounds.bottom + 10}px`,
              bottom: 0
            }}
          />

          {/* Left overlay */}
          <div
            className="fixed bg-black bg-opacity-60 z-[9999] pointer-events-none"
            style={{
              top: `${elementBounds.top - 10}px`,
              left: 0,
              width: `${elementBounds.left - 10}px`,
              height: `${elementBounds.height + 20}px`
            }}
          />

          {/* Right overlay */}
          <div
            className="fixed bg-black bg-opacity-60 z-[9999] pointer-events-none"
            style={{
              top: `${elementBounds.top - 10}px`,
              left: `${elementBounds.right + 10}px`,
              right: 0,
              height: `${elementBounds.height + 20}px`
            }}
          />

          {/* Highlighted element border */}
          <div
            className="fixed border-4 border-vinted z-[9999] pointer-events-none rounded-lg shadow-[0_0_20px_rgba(9,177,186,0.5)]"
            style={{
              top: `${elementBounds.top - 10}px`,
              left: `${elementBounds.left - 10}px`,
              width: `${elementBounds.width + 20}px`,
              height: `${elementBounds.height + 20}px`
            }}
          />
        </>
      )}

      {/* Tooltip */}
      <div
        className="z-[10000] sm:w-80"
        style={getTooltipStyles()}
      >
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4 sm:p-5 sm:transform sm:rotate-1">
          {/* Decorative elements */}
          <div className="absolute -top-3 -right-3 w-8 h-8 bg-pink-pastel border-3 border-black transform rotate-45 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-mint border-2 border-black transform -rotate-12 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"></div>

          {/* Step indicator */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-display font-bold text-white text-sm">
                  {currentStep + 1}
                </span>
              </div>
              <span className="font-display font-bold text-xs text-gray-500">
                / {steps.length}
              </span>
            </div>

            <button
              onClick={handleSkip}
              className="w-6 h-6 bg-gray-200 border-2 border-black flex items-center justify-center hover:bg-gray-300 transition-colors shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
              title={t('navigation.close')}
            >
              <X className="w-3 h-3" />
            </button>
          </div>

          {/* Content */}
          <div className="mb-4">
            <h3 className="font-display font-bold text-base sm:text-lg text-black mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-vinted" />
              {currentStepData.title}
            </h3>
            <p className="font-body text-xs sm:text-sm text-gray-700 leading-relaxed">
              {currentStepData.description}
            </p>
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-1 mb-4">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 border-2 border-black transition-all duration-300 ${
                  index === currentStep
                    ? 'bg-vinted w-6'
                    : index < currentStep
                      ? 'bg-mint'
                      : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex gap-2">
            <button
              onClick={handlePrevious}
              disabled={isFirstStep}
              className={`flex-1 px-3 py-2 border-3 border-black font-display font-bold text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex items-center justify-center gap-1 ${
                isFirstStep
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-pink-pastel text-black hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{t('navigation.previous')}</span>
            </button>

            <button
              onClick={handleNext}
              className="flex-1 px-3 py-2 bg-vinted text-white border-3 border-black font-display font-bold text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex items-center justify-center gap-1"
            >
              <span>{isLastStep ? t('navigation.finish') : t('navigation.next')}</span>
              {!isLastStep && <ChevronRight className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// Export du bouton pour réactiver le guide
export const ReactivateGuideButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-2 bg-white border-3 border-black font-display font-bold text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
      title="Réactiver le guide d'utilisation"
    >
      <HelpCircle className="w-4 h-4 text-vinted" />
      <span className="hidden sm:inline">Guide</span>
    </button>
  );
};