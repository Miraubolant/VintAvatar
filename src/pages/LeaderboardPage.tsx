import React, { useState, useEffect } from 'react';
import { Trophy, Users, ChevronRight, X, LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../hooks/useAuth';
import { useSubscription } from '../hooks/useSubscription';

interface LeaderboardEntry {
  name: string;
  count: number;
}

interface LeaderboardData {
  leaderboard: LeaderboardEntry[];
  month: string;
  updatedAt: string;
}

// Mock data for demonstration (will be replaced by real data from API)
const MOCK_LEADERBOARD: LeaderboardEntry[] = [
  { name: 'Liora M.', count: 12 },
  { name: 'Elouan D.', count: 8 },
  { name: 'Maelys R.', count: 6 },
  { name: 'Titouan B.', count: 5 },
  { name: 'Capucine V.', count: 4 },
];

const getMonthName = (lang: string): string => {
  const monthNames: Record<string, string[]> = {
    fr: ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre'],
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    es: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
    it: ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'],
  };
  const now = new Date();
  const months = monthNames[lang] || monthNames['fr'];
  return `${months[now.getMonth()]} ${now.getFullYear()}`;
};

export const LeaderboardPage: React.FC = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation('leaderboard');
  const { user, signInWithGoogle } = useAuth();
  const { subscriptions, loading: subscriptionLoading } = useSubscription();

  const [leaderboardData, setLeaderboardData] = useState<LeaderboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);

  // Check if user has an active subscription (monthly or credits)
  const hasActiveSubscription = subscriptions.some(
    sub => sub.status === 'active' && (sub.plan_type === 'monthly' || (sub.plan_type === 'credits' && sub.credits_remaining > 0))
  );

  useEffect(() => {
    fetchLeaderboard();
  }, [i18n.language]);

  const fetchLeaderboard = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/get-leaderboard?lang=${i18n.language}`,
        {
          headers: {
            'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch leaderboard');
      }

      const data = await response.json();

      // Use mock data if API returns empty results
      if (!data.leaderboard || data.leaderboard.length === 0) {
        setLeaderboardData({
          leaderboard: MOCK_LEADERBOARD,
          month: getMonthName(i18n.language),
          updatedAt: new Date().toISOString()
        });
      } else {
        setLeaderboardData(data);
      }
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
      // Use mock data on error
      setLeaderboardData({
        leaderboard: MOCK_LEADERBOARD,
        month: getMonthName(i18n.language),
        updatedAt: new Date().toISOString()
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCTAClick = () => {
    if (!user) {
      setShowAuthModal(true);
    } else if (!hasActiveSubscription) {
      setShowSubscriptionModal(true);
    } else {
      navigate('/account?tab=affiliation');
    }
  };

  const handleScrollToPricing = () => {
    setShowSubscriptionModal(false);
    navigate('/#tarifs');
  };

  // Badge colors based on rank
  const getBadgeStyles = (rank: number) => {
    switch (rank) {
      case 1:
        return 'bg-yellow-400 text-black';
      case 2:
        return 'bg-gray-300 text-black';
      case 3:
        return 'bg-orange-400 text-black';
      default:
        return 'bg-mint text-black';
    }
  };

  // Skeleton loader
  const SkeletonLoader = () => (
    <div className="space-y-3">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="flex items-center gap-4 p-3 animate-pulse">
          <div className="w-10 h-10 bg-gray-200 border-3 border-black rounded-sm"></div>
          <div className="flex-1 h-5 bg-gray-200 rounded"></div>
          <div className="w-16 h-5 bg-gray-200 rounded"></div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative min-h-screen bg-grain overflow-hidden py-8 sm:py-12 lg:py-16">
      {/* Decorative shapes */}
      <div className="absolute top-20 left-16 w-10 h-10 bg-yellow-400 border-3 border-black transform rotate-12 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hidden lg:block"></div>
      <div className="absolute bottom-16 right-20 w-12 h-12 bg-mint border-3 border-black neo-shape-circle shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hidden lg:block"></div>
      <div className="absolute top-40 right-1/4 w-8 h-8 bg-pink-pastel border-3 border-black transform -rotate-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hidden lg:block"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre style Hero */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight">
            <span className="inline-block bg-white text-black border-2 sm:border-3 border-black px-3 sm:px-4 py-1 sm:py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 mb-2">
              {t('heroTitle.line1', 'TOP PARRAINS')}
            </span>
            <br />
            <span className="inline-block bg-yellow-400 text-black border-2 sm:border-3 border-black px-3 sm:px-4 py-1 sm:py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
              {t('heroTitle.line2', 'DU MOIS')}
            </span>
          </h1>
          {leaderboardData?.month && (
            <p className="font-body font-semibold text-gray-600 text-base sm:text-lg mt-4">
              {t('subtitle', 'Les meilleurs parrains de {{month}} !', { month: leaderboardData.month })}
            </p>
          )}
        </div>

        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="p-6 sm:p-8 lg:p-12">

            {/* Leaderboard list */}
            <div className="mb-8">
              {loading ? (
                <SkeletonLoader />
              ) : leaderboardData?.leaderboard && leaderboardData.leaderboard.length > 0 ? (
                <div className="space-y-3">
                  {leaderboardData.leaderboard.map((entry, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-cream border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                    >
                      {/* Rank badge */}
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 ${getBadgeStyles(index + 1)} border-3 border-black flex items-center justify-center font-display font-bold text-lg sm:text-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}
                      >
                        {index + 1}
                      </div>

                      {/* Name */}
                      <div className="flex-1 font-display font-bold text-base sm:text-lg text-black truncate">
                        {entry.name}
                      </div>

                      {/* Count */}
                      <div className="flex items-center gap-2 bg-vinted text-white px-3 py-1.5 border-2 border-black font-display font-bold text-sm sm:text-base shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <span>{entry.count}</span>
                        <span className="hidden sm:inline">{t('referrals', 'parrainages')}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 bg-cream border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <Users className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="font-body font-semibold text-gray-600">
                    {t('empty', 'Sois le premier a parrainer ce mois-ci !')}
                  </p>
                </div>
              )}
            </div>

            {/* CTA Section */}
            <div className="bg-mint border-4 border-black p-5 sm:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-black mb-1">
                    {t('cta.title', 'PARRAINE TES AMIS')}
                  </h3>
                  <p className="font-body text-sm text-gray-700">
                    {t('cta.description', 'Gagne des credits gratuits pour chaque ami parrainee !')}
                  </p>
                </div>

                <button
                  onClick={handleCTAClick}
                  disabled={subscriptionLoading}
                  className="group inline-flex items-center gap-2 bg-vinted text-white font-display font-bold px-6 py-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 whitespace-nowrap disabled:opacity-50"
                >
                  <span>{t('cta.button', 'VOIR MON CODE')}</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-md w-full relative animate-scale-in">
            <button
              onClick={() => setShowAuthModal(false)}
              className="absolute top-3 right-3 w-8 h-8 bg-cream border-3 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <X className="w-4 h-4 text-black" />
            </button>

            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-vinted border-4 border-black flex items-center justify-center transform rotate-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <LogIn className="w-8 h-8 text-white" />
              </div>
            </div>

            <h3 className="font-display font-bold text-xl sm:text-2xl text-center text-black mb-3">
              {t('authModal.title', 'Connexion requise')}
            </h3>

            <p className="font-body text-gray-700 text-center mb-6">
              {t('authModal.message', 'Connecte-toi pour acceder a ton code de parrainage.')}
            </p>

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
              {t('authModal.button', 'Se connecter avec Google')}
            </button>

            <button
              onClick={() => setShowAuthModal(false)}
              className="w-full text-center font-body text-gray-500 hover:text-black transition-colors"
            >
              {t('authModal.cancel', 'Annuler')}
            </button>
          </div>
        </div>
      )}

      {/* Subscription Modal */}
      {showSubscriptionModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-md w-full relative animate-scale-in">
            <button
              onClick={() => setShowSubscriptionModal(false)}
              className="absolute top-3 right-3 w-8 h-8 bg-cream border-3 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <X className="w-4 h-4 text-black" />
            </button>

            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-mint border-4 border-black flex items-center justify-center transform -rotate-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Users className="w-8 h-8 text-black" />
              </div>
            </div>

            <h3 className="font-display font-bold text-xl sm:text-2xl text-center text-black mb-3">
              {t('subscriptionModal.title', 'Abonnement requis')}
            </h3>

            <p className="font-body text-gray-700 text-center mb-6">
              {t('subscriptionModal.message', 'Abonne-toi pour debloquer le systeme de parrainage et gagner des credits gratuits !')}
            </p>

            <button
              onClick={handleScrollToPricing}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-vinted text-white border-4 border-black font-display font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 mb-3"
            >
              {t('subscriptionModal.button', 'Voir les offres')}
              <ChevronRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => setShowSubscriptionModal(false)}
              className="w-full text-center font-body text-gray-500 hover:text-black transition-colors"
            >
              {t('authModal.cancel', 'Annuler')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeaderboardPage;
