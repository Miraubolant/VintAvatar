import React, { useEffect, useState, useRef } from 'react';
import { CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useSubscription } from '../hooks/useSubscription';
import { useSEO, SEO_CONFIGS } from '../hooks/useSEO';

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

  // Google Ads Conversion Tracking
  useEffect(() => {
    if (conversionTracked.current) return;

    // Get session_id from URL - ONLY fire conversion if session_id exists (from real Stripe checkout)
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get('session_id');

    // Don't track conversion if no session_id (prevents false conversions from direct page visits)
    if (!sessionId) return;

    // Determine value based on subscription or URL params
    let conversionValue = 6.99; // Default middle value
    const priceParam = urlParams.get('price');

    if (priceParam) {
      conversionValue = parseFloat(priceParam);
    } else if (subscription) {
      // Determine price from subscription type
      if (subscription.plan_type === 'monthly') {
        conversionValue = 12.99;
      } else if (subscription.credits_remaining === 25) {
        conversionValue = 6.99;
      } else if (subscription.credits_remaining === 10) {
        conversionValue = 3.49;
      }
    }

    // Fire Google Ads conversion event
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17788562000/zef-CNXdgs4bENDUn6JC',
        'value': conversionValue,
        'currency': 'EUR',
        'transaction_id': sessionId
      });
      conversionTracked.current = true;
    }
  }, [subscription]);

  useEffect(() => {
    // Refresh subscription data after payment
    const refreshData = async () => {
      if (user) {
        await refetch();
      }
      setLoading(false);
    };

    // Wait a bit for webhook to process
    setTimeout(refreshData, 2000);
  }, [user, refetch]);

  const handleGoToGenerator = () => {
    window.location.href = '/#generateur';
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-xl font-black text-slate-900">TRAITEMENT DU PAIEMENT...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Success Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-green-300 border-4 border-slate-900 rounded-full flex items-center justify-center mx-auto shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]">
            <CheckCircle className="w-12 h-12 text-slate-900" />
          </div>
        </div>

        {/* Success Message */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 mb-6">
            PAIEMENT RÉUSSI !
          </h1>
          <p className="text-xl text-slate-700 mb-8">
            Votre commande a été traitée avec succès. Vous pouvez maintenant utiliser vos crédits !
          </p>

          {/* Credits Display */}
          {subscription && (
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-100 border-4 border-slate-900 text-slate-900 font-black shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] mb-8">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              {subscription.plan_type === 'credits' ? (
                `${subscription.credits_remaining} CRÉDITS DISPONIBLES`
              ) : (
                `${subscription.monthly_limit} GÉNÉRATIONS/MOIS ACTIVÉES`
              )}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={handleGoToGenerator}
            className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-black border-4 border-slate-900 transition-all duration-200 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] text-xl mx-auto"
          >
            <Sparkles className="w-6 h-6" />
            GÉNÉRER MON PREMIER AVATAR
            <ArrowRight className="w-6 h-6" />
          </button>

          <p className="text-sm text-slate-600 font-bold">
            Vous allez être redirigé vers le générateur d'avatars
          </p>
        </div>

        {/* Info Box */}
        <div className="mt-16 bg-blue-50 border-4 border-slate-900 p-8 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
          <h3 className="text-xl font-black text-slate-900 mb-4">
            🎉 QUELQUES INFORMATIONS UTILES
          </h3>
          <div className="text-left space-y-2 text-slate-700 font-bold">
            <p>• Vos crédits n'expirent jamais (sauf abonnement mensuel)</p>
            <p>• Chaque génération coûte 1 crédit</p>
            <p>• Vous pouvez télécharger vos avatars en haute qualité</p>
            <p>• Un problème ? Contactez notre support !</p>
          </div>
        </div>
      </div>
    </div>
  );
};