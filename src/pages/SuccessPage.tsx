import React, { useEffect, useState, useRef, useCallback } from 'react';
import { CheckCircle, Sparkles, ArrowRight, PartyPopper, Gift } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useSubscription } from '../hooks/useSubscription';
import { useSEO, SEO_CONFIGS } from '../hooks/useSEO';
import confetti from 'canvas-confetti';

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const SuccessPage: React.FC = () => {
  useSEO(SEO_CONFIGS.success);

  const { user } = useAuth();
  const { subscription, refetch } = useSubscription();
  const [loading, setLoading] = useState(true);
  const conversionTracked = useRef(false);
  const confettiTriggered = useRef(false);

  // Site colors for confetti
  const siteColors = ['#09B1BA', '#FFB3BA', '#B3F2DD', '#FFF8E7'];

  // Fire confetti celebration
  const fireConfetti = useCallback(() => {
    if (confettiTriggered.current) return;
    confettiTriggered.current = true;

    const duration = 4000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);

      // Confetti from left side
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: siteColors,
      });

      // Confetti from right side
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: siteColors,
      });
    }, 250);

    // Big burst at start
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: siteColors,
    });

    // Side bursts
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: siteColors,
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: siteColors,
      });
    }, 500);
  }, []);

  // Google Ads Conversion Tracking
  useEffect(() => {
    if (conversionTracked.current) return;

    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get('session_id');

    if (!sessionId) return;

    let conversionValue = 6.99;
    const priceParam = urlParams.get('price');

    if (priceParam) {
      conversionValue = parseFloat(priceParam);
    } else if (subscription) {
      if (subscription.plan_type === 'monthly') {
        conversionValue = 12.99;
      } else if (subscription.credits_remaining === 25) {
        conversionValue = 6.99;
      } else if (subscription.credits_remaining === 10) {
        conversionValue = 3.49;
      }
    }

    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17788562000/zef-CNXdks4bENDUn6JC',
        'value': conversionValue,
        'currency': 'EUR',
        'transaction_id': sessionId
      });
      conversionTracked.current = true;
    }
  }, [subscription]);

  useEffect(() => {
    const refreshData = async () => {
      if (user) {
        await refetch();
      }
      setLoading(false);
      // Trigger confetti after loading
      setTimeout(fireConfetti, 300);
    };

    setTimeout(refreshData, 2000);
  }, [user, refetch, fireConfetti]);

  const handleGoToGenerator = () => {
    window.location.href = '/#generateur';
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-grain">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-vinted border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="font-display font-bold text-lg text-black">Traitement du paiement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-grain py-12 sm:py-20 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Success Icon with animation */}
        <div className="mb-6 sm:mb-8 animate-bounce-in">
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-mint border-4 border-black rounded-full flex items-center justify-center mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-black" />
          </div>
        </div>

        {/* Success Message - Neo-brutalism style */}
        <div className="mb-8 sm:mb-12">
          <h1 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl tracking-tight mb-4 sm:mb-6">
            <div className="inline-block transform -rotate-1 mb-2">
              <span className="inline-flex items-center gap-2 sm:gap-3 bg-mint text-black border-3 sm:border-4 border-black px-4 sm:px-6 py-2 sm:py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <PartyPopper className="w-6 h-6 sm:w-8 sm:h-8" />
                Paiement Réussi !
              </span>
            </div>
          </h1>

          <p className="font-body font-semibold text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-xl mx-auto">
            Votre commande a été traitée avec succès. <span className="text-vinted font-bold">Vous pouvez maintenant utiliser vos crédits !</span>
          </p>

          {/* Credits Display - Neo-brutalism card */}
          {subscription && (
            <div className="inline-block bg-white border-3 border-black p-4 sm:p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-pastel border-2 border-black flex items-center justify-center transform -rotate-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                </div>
                <div className="text-left">
                  <p className="font-display font-bold text-lg sm:text-xl text-black">
                    {subscription.plan_type === 'credits' ? (
                      `${subscription.credits_remaining} Crédits`
                    ) : (
                      `${subscription.monthly_limit} Générations/mois`
                    )}
                  </p>
                  <p className="font-body text-xs sm:text-sm text-gray-600">
                    {subscription.plan_type === 'credits' ? 'Disponibles maintenant' : 'Abonnement activé'}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Button - Main CTA */}
        <div className="space-y-4 mb-10 sm:mb-16">
          <button
            onClick={handleGoToGenerator}
            className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-vinted text-white border-3 sm:border-4 border-black font-display font-bold text-sm sm:text-base shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
            Générer mon premier avatar
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <p className="font-body text-xs sm:text-sm text-gray-500">
            Redirigé vers le générateur d'avatars IA
          </p>
        </div>

        {/* Info Box - Neo-brutalism style */}
        <div className="bg-white border-3 border-black p-5 sm:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center transform rotate-12 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <h3 className="font-display font-bold text-base sm:text-lg text-black">
              Informations utiles
            </h3>
          </div>
          <div className="text-left space-y-2 font-body font-semibold text-xs sm:text-sm text-gray-700">
            <p className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-vinted rounded-full mt-1.5 flex-shrink-0"></span>
              Vos crédits n'expirent jamais (sauf abonnement mensuel)
            </p>
            <p className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-mint rounded-full mt-1.5 flex-shrink-0"></span>
              Chaque génération coûte 1 crédit
            </p>
            <p className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-pink-pastel rounded-full mt-1.5 flex-shrink-0"></span>
              Téléchargez vos avatars en haute qualité HD
            </p>
            <p className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-vinted rounded-full mt-1.5 flex-shrink-0"></span>
              Un problème ? Contactez notre support !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
