import React, { useState, useEffect } from 'react';
import { Sparkles, Crown, Zap, Check, X, LogIn } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../hooks/useAuth';

export const PricingSection: React.FC = () => {
  const { user, signInWithGoogle } = useAuth();
  const { t } = useTranslation('pricing');
  const [shouldPulsePopular, setShouldPulsePopular] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Animation de pulsation après 3 secondes sur la page
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldPulsePopular(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Arrêter l'animation quand l'utilisateur interagit
  const handleStopPulsePopular = () => setShouldPulsePopular(false);

  const handleSubscribe = async (priceId: string, planName: string) => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }

    try {
      // Redirection vers Stripe Checkout via Supabase Edge Function
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          priceId,
          userId: user.id,
          planName,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erreur du serveur');
      }

      const { url, error } = await response.json();
      
      if (error) {
        throw new Error(error);
      }

      if (!url) {
        throw new Error('URL de paiement non reçue');
      }

      // Redirection vers Stripe
      window.location.href = url;
    } catch (error) {
      console.error('Error creating checkout session:', error);
      
      // Messages d'erreur plus clairs pour l'utilisateur
      let userMessage = 'Une erreur est survenue lors de la création du paiement.';
      
      if (error instanceof Error) {
        if (error.message.includes('network') || error.message.includes('fetch')) {
          userMessage = 'Problème de connexion. Vérifiez votre internet et réessayez.';
        } else if (error.message.includes('authorization')) {
          userMessage = 'Erreur d\'authentification. Reconnectez-vous et réessayez.';
        }
      }
      
      alert(`${userMessage}\n\nSi le problème persiste, contactez notre support.`);
    }
  };

  const plans = [
    {
      name: t('plans.test.name'),
      price: t('plans.test.price'),
      period: '',
      priceId: 'price_1S5QtXKHJNJEt6Gq1bTo24UC',
      icon: Sparkles,
      color: 'bg-green-300',
      hoverColor: 'hover:bg-green-400',
      features: t('plans.test.features', { returnObjects: true }) as string[]
    },
    {
      name: t('plans.popular.name'),
      price: t('plans.popular.price'),
      period: '',
      priceId: 'price_1SAqbcKHJNJEt6Gqn4vj2WGy',
      icon: Crown,
      color: 'bg-pink-pastel',
      hoverColor: 'hover:bg-pink-300',
      textColor: 'text-black',
      popular: true,
      features: t('plans.popular.features', { returnObjects: true }) as string[]
    },
    {
      name: t('plans.unlimited.name'),
      price: t('plans.unlimited.price'),
      period: '/mois',
      priceId: 'price_1S5QupKHJNJEt6GqequoQQf7',
      icon: Zap,
      color: 'bg-yellow-300',
      hoverColor: 'hover:bg-yellow-400',
      features: t('plans.unlimited.features', { returnObjects: true }) as string[]
    }
  ];

  return (
    <>
    <section id="tarifs" className="relative py-10 sm:py-12 lg:py-16 bg-grain overflow-hidden">
      {/* Formes décoratives neo-brutalism - hidden on mobile/tablet */}
      <div className="hidden lg:block absolute top-16 left-12 w-10 h-10 bg-vinted border-3 border-black transform rotate-12 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] pointer-events-none"></div>
      <div className="hidden lg:block absolute top-1/3 right-8 w-8 h-8 bg-mint border-2 border-black neo-shape-circle shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] pointer-events-none"></div>
      <div className="hidden lg:block absolute bottom-48 left-16 w-10 h-10 bg-pink-pastel border-3 border-black transform -rotate-45 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Neo-Brutalism */}
        <div className="text-center mb-8 sm:mb-12">

          <h2 className="font-display font-semibold text-2xl sm:text-3xl lg:text-4xl tracking-tight">
            {/* Mobile: inline */}
            <div className="flex flex-wrap justify-center items-center gap-2 sm:hidden">
              <span className="inline-block bg-white text-black border-2 border-black px-3 py-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
                {t('title.line1')}
              </span>
              <span className="inline-block bg-vinted text-white border-2 border-black px-3 py-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
                {t('title.line2')}
              </span>
            </div>
            {/* Desktop: stacked */}
            <div className="hidden sm:block">
              <div className="text-black transform -rotate-2 mb-3 relative">
                <span className="inline-block bg-white border-3 border-black px-6 py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  {t('title.line1')}
                </span>
              </div>
              <div className="text-white transform rotate-2 relative">
                <span className="inline-block bg-vinted border-3 border-black px-6 py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  {t('title.line2')}
                </span>
              </div>
            </div>
          </h2>

          <div className="max-w-2xl mx-auto pt-4 sm:pt-6">
            <p className="font-body font-semibold text-sm sm:text-base text-gray-700">
              Choisis le plan qui correspond à tes besoins de <span className="text-vinted font-bold">génération d'avatars IA</span> !
            </p>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative border-3 sm:border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 overflow-hidden bg-white"
            >
              {/* Background decoration - clipped inside card */}
              {index === 0 && (
                <>
                  <div className="absolute -top-3 -right-3 w-12 h-12 sm:w-16 sm:h-16 bg-white border-2 sm:border-3 border-black transform rotate-12 opacity-40 pointer-events-none"></div>
                  <div className="absolute -bottom-3 -left-2 w-8 h-8 sm:w-12 sm:h-12 bg-vinted border-2 sm:border-3 border-black transform -rotate-6 opacity-30 pointer-events-none rounded-full"></div>
                </>
              )}
              {index === 1 && (
                <>
                  <div className="absolute -top-4 -left-3 w-14 h-14 sm:w-18 sm:h-18 bg-white border-2 sm:border-3 border-black transform -rotate-12 opacity-40 pointer-events-none"></div>
                  <div className="absolute -bottom-3 -right-3 w-10 h-10 sm:w-14 sm:h-14 bg-mint border-2 sm:border-3 border-black transform rotate-45 opacity-35 pointer-events-none"></div>
                </>
              )}
              {index === 2 && (
                <>
                  <div className="absolute -top-2 -right-3 w-10 h-10 sm:w-14 sm:h-14 bg-white border-2 sm:border-3 border-black transform rotate-6 opacity-30 pointer-events-none rounded-full"></div>
                  <div className="absolute -bottom-3 -left-3 w-12 h-12 sm:w-16 sm:h-16 bg-mint border-2 sm:border-3 border-black transform -rotate-45 opacity-35 pointer-events-none"></div>
                </>
              )}


              {/* Card content with padding */}
              <div className="p-4 sm:p-6">

              {/* Header avec icône et nom */}
              <div className="relative text-center mb-4 sm:mb-6">
                <div className={`w-10 h-10 sm:w-14 sm:h-14 mx-auto mb-2 sm:mb-3 border-3 sm:border-4 border-black flex items-center justify-center transform ${plan.popular ? 'rotate-6' : 'rotate-12'} shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${index === 0 ? 'bg-mint' : index === 1 ? 'bg-pink-pastel' : 'bg-vinted'}`}>
                  <plan.icon className={`w-5 h-5 sm:w-7 sm:h-7 ${index === 0 ? 'text-green-700' : index === 1 ? 'text-pink-700' : 'text-white'}`} />
                </div>
                <h3 className="font-display font-bold text-base sm:text-xl text-black">{plan.name}</h3>
              </div>

              {/* Prix en vedette */}
              <div className={`relative mb-4 sm:mb-6 p-3 sm:p-5 border-3 sm:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${index === 0 ? 'bg-mint' : index === 1 ? 'bg-pink-pastel' : 'bg-vinted'}`}>
                <div className="text-center">
                  <div className="font-display font-bold text-2xl sm:text-3xl mb-1 text-black">
                    {plan.price}
                  </div>
                  <div className="font-display font-bold text-[10px] sm:text-sm text-black uppercase">
                    {plan.period ? plan.period : t('common.oneTimePayment', 'Paiement unique')}
                  </div>
                </div>
              </div>

              {/* Fonctionnalités avec style amélioré */}
              <ul className="relative space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-2 sm:gap-3"
                  >
                    <div className={`w-5 h-5 sm:w-6 sm:h-6 border-2 sm:border-3 border-black flex items-center justify-center flex-shrink-0 transform rotate-12 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] sm:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${index === 0 ? 'bg-mint' : index === 1 ? 'bg-pink-pastel' : 'bg-vinted'}`}>
                      <Check className={`w-3 h-3 sm:w-4 sm:h-4 ${index === 0 ? 'text-green-700' : index === 1 ? 'text-pink-700' : 'text-white'}`} />
                    </div>
                    <span className="font-body font-semibold text-xs sm:text-sm leading-snug text-black">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Bouton d'abonnement amélioré */}
              <button
                onClick={() => {
                  if (plan.popular) handleStopPulsePopular();
                  handleSubscribe(plan.priceId, plan.name);
                }}
                onMouseEnter={() => {
                  if (plan.popular) handleStopPulsePopular();
                }}
                className={`relative w-full px-4 sm:px-6 py-2.5 sm:py-3 border-3 sm:border-4 border-black font-display font-bold text-sm sm:text-base text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 transform ${
                  index === 0 ? 'bg-mint' : index === 1 ? 'bg-pink-pastel' : 'bg-vinted'
                } ${plan.popular && shouldPulsePopular ? 'animate-pulse-3' : ''}`}
              >
                <span className="flex items-center justify-center gap-2 sm:gap-3">
                  <plan.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  {plan.popular ? t('plans.popular.button') : plan.name.includes('ABONNEMENT') ? t('plans.unlimited.button') : t('plans.test.button')}
                </span>
              </button>
              </div>
            </div>
          ))}
        </div>

        {/* Paiements sécurisés - Neo-brutalism style */}
        <div className="flex justify-center">
          <div className="bg-white border-2 sm:border-3 border-black px-4 sm:px-6 py-3 sm:py-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              {/* Label */}
              <span className="font-display font-bold text-[10px] sm:text-xs text-black uppercase tracking-wide">
                Paiements sécurisés
              </span>

              {/* Séparateur desktop */}
              <div className="hidden sm:block w-px h-6 bg-black opacity-20"></div>

              {/* Logos de paiement */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="bg-white border-2 border-black p-1.5 sm:p-2 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                  <img src="https://js.stripe.com/v3/fingerprinted/img/visa-729c05c240c4bdb47b03ac81d9945bfe.svg" alt="Visa" width="32" height="20" className="h-5 sm:h-6 w-auto" />
                </div>
                <div className="bg-white border-2 border-black p-1.5 sm:p-2 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                  <img src="https://js.stripe.com/v3/fingerprinted/img/mastercard-4d8844094130711885b5e41b28c9848f.svg" alt="Mastercard" width="32" height="20" className="h-5 sm:h-6 w-auto" />
                </div>
                <div className="bg-white border-2 border-black p-1.5 sm:p-2 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                  <img src="https://js.stripe.com/v3/fingerprinted/img/amex-a49b82f46c5cd6a96a6e418a6ca1717c.svg" alt="American Express" width="32" height="20" className="h-5 sm:h-6 w-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    {/* Modal de connexion requise */}
    {showAuthModal && (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
        <div className="bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-md w-full relative animate-scale-in">
          {/* Bouton fermer */}
          <button
            onClick={() => setShowAuthModal(false)}
            className="absolute top-3 right-3 w-8 h-8 bg-cream border-3 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            <X className="w-4 h-4 text-black" />
          </button>

          {/* Icône */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-vinted border-4 border-black flex items-center justify-center transform rotate-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <LogIn className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Titre */}
          <h3 className="font-display font-bold text-xl sm:text-2xl text-center text-black mb-3">
            {t('authModal.title', 'Connexion requise')}
          </h3>

          {/* Message */}
          <p className="font-body text-gray-700 text-center mb-6">
            {t('authModal.message', 'Connecte-toi avec Google pour acheter un pack de crédits ou un abonnement.')}
          </p>

          {/* Bouton Google */}
          <button
            onClick={() => {
              setShowAuthModal(false);
              signInWithGoogle();
            }}
            className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white border-4 border-black font-display font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 mb-3"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            {t('authModal.googleButton', 'Se connecter avec Google')}
          </button>

          {/* Lien annuler */}
          <button
            onClick={() => setShowAuthModal(false)}
            className="w-full text-center font-body text-gray-500 hover:text-black transition-colors"
          >
            {t('authModal.cancel', 'Annuler')}
          </button>
        </div>
      </div>
    )}
    </>
  );
};