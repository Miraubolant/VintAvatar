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
    <section id="tarifs" className="relative py-20 lg:py-24 bg-cream overflow-hidden">
      {/* Formes décoratives neo-brutalism - hidden on mobile to avoid overlap */}
      <div className="hidden md:block absolute top-16 left-12 w-12 h-12 bg-vinted border-4 border-black transform rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] pointer-events-none"></div>
      <div className="hidden md:block absolute top-1/3 right-8 w-10 h-10 bg-mint border-3 border-black neo-shape-circle shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] pointer-events-none"></div>
      <div className="hidden md:block absolute bottom-32 left-20 w-14 h-14 bg-pink-pastel border-4 border-black transform -rotate-45 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] pointer-events-none"></div>
      <div className="hidden md:block absolute bottom-20 right-1/4 w-8 h-8 bg-cream border-3 border-black transform rotate-12 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Neo-Brutalism */}
        <div className="text-center mb-16">
          
          <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight">
            <div className="text-black transform -rotate-3 mb-4 relative">
              <span className="inline-block bg-white border-4 border-black px-8 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                {t('title.line1')}
              </span>
            </div>
            <div className="text-white transform rotate-2 relative">
              <span className="inline-block bg-vinted border-4 border-black px-8 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                {t('title.line2')}
              </span>
            </div>
          </h2>
          
          <div className="max-w-2xl mx-auto pt-10 pb-8">
            <p className="font-body font-semibold text-lg text-gray-700">
              Choisis le plan qui correspond à tes besoins de <span className="text-vinted font-bold">génération d'avatars IA</span> !
            </p>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white border-4 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
                plan.popular ? 'md:scale-105 mt-8 md:mt-0' : ''
              } ${plan.popular ? 'border-pink-pastel border-6' : ''}`}
            >
              {/* Badge populaire */}
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-pink-pastel text-black px-4 sm:px-6 py-1.5 sm:py-2 border-3 sm:border-4 border-black font-display font-bold text-xs sm:text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-3">
                    {t('plans.popular.badge')}
                  </div>
                </div>
              )}

              {/* Header avec icône et nom */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto mb-4 border-4 border-black flex items-center justify-center transform ${plan.popular ? 'rotate-6' : 'rotate-12'} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                  plan.popular ? 'bg-pink-pastel' : index === 2 ? 'bg-vinted' : 'bg-mint'
                }`}>
                  <plan.icon className={`w-8 h-8 ${index === 2 ? 'text-white' : 'text-black'}`} />
                </div>
                <h3 className="font-display font-bold text-2xl text-black">{plan.name}</h3>
              </div>

              {/* Prix en vedette */}
              <div className={`mb-8 p-6 border-4 border-black bg-cream shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                <div className="text-center">
                  <div className="font-display font-bold text-4xl text-black mb-2">
                    {plan.price}
                  </div>
                  <div className="font-display font-bold text-sm text-black uppercase">
                    {plan.period ? plan.period : t('common.oneTimePayment', 'Paiement unique')}
                  </div>
                  {plan.popular && (
                    <div className="mt-2 px-3 py-1 bg-pink-pastel text-black border-2 border-black font-display font-bold text-xs inline-block transform rotate-2">
                      {t('common.bestValue', 'MEILLEURE VALEUR')}
                    </div>
                  )}
                </div>
              </div>

              {/* Fonctionnalités avec style amélioré */}
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex} 
                    className="flex items-start gap-4"
                  >
                    <div className={`w-7 h-7 border-3 border-black flex items-center justify-center flex-shrink-0 transform rotate-12 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
                      plan.popular ? 'bg-pink-pastel' : index === 2 ? 'bg-vinted' : 'bg-mint'
                    }`}>
                      <Check className={`w-4 h-4 ${index === 2 ? 'text-white' : 'text-black'}`} />
                    </div>
                    <span className="font-body font-semibold text-black leading-relaxed">{feature}</span>
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
                className={`w-full px-6 py-4 border-4 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 transform ${
                  plan.popular ? 'bg-pink-pastel text-black scale-105' : index === 2 ? 'bg-vinted text-white' : 'bg-mint text-black'
                } ${plan.popular && shouldPulsePopular ? 'animate-pulse-3' : ''}`}
              >
                <span className="flex items-center justify-center gap-3">
                  <plan.icon className="w-6 h-6" />
                  {plan.popular ? t('plans.popular.button') : plan.name.includes('ABONNEMENT') ? t('plans.unlimited.button') : t('plans.test.button')}
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-16">
          {(t('stats', { returnObjects: true }) as Array<{ value: string; label: string }>).map((stat, idx) => {
            const backgrounds = ["bg-mint", "bg-white", "bg-vinted", "bg-cream"];
            const textColors = ["text-black", "text-black", "text-white", "text-black"];

            // Carte spéciale pour les moyens de paiement (index 1)
            if (idx === 1) {
              return (
                <div key={idx} className="text-center h-full">
                  <div className={`${backgrounds[idx]} ${textColors[idx]} border-4 border-black p-3 sm:p-4 lg:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 h-full min-h-[120px] sm:min-h-[140px] flex flex-col justify-center`}>
                    <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-2 mb-2">
                      <img src="https://js.stripe.com/v3/fingerprinted/img/visa-729c05c240c4bdb47b03ac81d9945bfe.svg" alt="Visa" className="h-5 sm:h-6 lg:h-7" />
                      <img src="https://js.stripe.com/v3/fingerprinted/img/mastercard-4d8844094130711885b5e41b28c9848f.svg" alt="Mastercard" className="h-5 sm:h-6 lg:h-7" />
                      <img src="https://js.stripe.com/v3/fingerprinted/img/amex-a49b82f46c5cd6a96a6e418a6ca1717c.svg" alt="Amex" className="h-5 sm:h-6 lg:h-7" />
                    </div>
                    <div className="font-body font-semibold text-xs sm:text-sm leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            }

            return (
            <div key={idx} className="text-center h-full">
              <div className={`${backgrounds[idx]} ${textColors[idx]} border-4 border-black p-3 sm:p-4 lg:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 h-full min-h-[120px] sm:min-h-[140px] flex flex-col justify-center`}>
                <div className="font-display font-bold text-lg sm:text-2xl lg:text-3xl mb-1 sm:mb-2 leading-tight">
                  {stat.value}
                </div>
                <div className="font-body font-semibold text-xs sm:text-sm leading-tight">
                  {stat.label}
                </div>
              </div>
            </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-block bg-white border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-black mb-4">
              {t('cta.title')}
            </h3>
            <button
              onClick={() => {
                const heroSection = document.getElementById('hero');
                if (heroSection) {
                  heroSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-pink-pastel text-black border-3 border-black font-display font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <Sparkles className="w-5 h-5" />
              {t('cta.button')}
            </button>
          </div>
        </div>
      </div>

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
    </section>
  );
};