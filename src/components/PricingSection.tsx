import React from 'react';
import { Sparkles, Crown, Zap, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../hooks/useAuth';

export const PricingSection: React.FC = () => {
  const { user } = useAuth();
  const { t } = useTranslation('pricing');

  const handleSubscribe = async (priceId: string, planName: string) => {
    if (!user) {
      alert('Veuillez vous connecter avec Google pour acheter un abonnement.');
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
      {/* Formes décoratives neo-brutalism */}
      <div className="absolute top-16 left-12 w-12 h-12 bg-vinted border-4 border-black transform rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
      <div className="absolute top-1/3 right-8 w-10 h-10 bg-mint border-3 border-black neo-shape-circle shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"></div>
      <div className="absolute bottom-32 left-20 w-14 h-14 bg-pink-pastel border-4 border-black transform -rotate-45 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
      <div className="absolute bottom-20 right-1/4 w-8 h-8 bg-cream border-3 border-black transform rotate-12 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"></div>

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
          
          <div className="max-w-2xl mx-auto pt-6 pb-8">
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
                  plan.popular ? 'bg-pink-pastel' : index % 2 === 0 ? 'bg-mint' : 'bg-pink-pastel'
                }`}>
                  <plan.icon className="w-8 h-8 text-black" />
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
                      plan.popular ? 'bg-pink-pastel' : 'bg-mint'
                    }`}>
                      <Check className="w-4 h-4 text-black" />
                    </div>
                    <span className="font-body font-semibold text-black leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Bouton d'abonnement amélioré */}
              <button
                onClick={() => handleSubscribe(plan.priceId, plan.name)}
                className={`w-full px-6 py-4 border-4 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 transform ${
                  plan.popular ? 'bg-pink-pastel text-black scale-105' : index % 2 === 0 ? 'bg-mint text-black' : 'bg-pink-pastel text-black'
                }`}
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
            return (
            <div key={idx} className="text-center h-full">
              <div className={`${backgrounds[idx]} ${textColors[idx]} border-4 border-black p-3 sm:p-4 lg:p-6 transform ${idx % 2 === 0 ? 'rotate-1' : '-rotate-1'} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 h-full min-h-[120px] sm:min-h-[140px] flex flex-col justify-center`}>
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
          <div className="inline-block bg-white border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
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
    </section>
  );
};