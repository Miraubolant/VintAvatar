import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSEO, SEO_CONFIGS } from '../hooks/useSEO';
import {
  User,
  CreditCard,
  TrendingUp,
  Zap,
  Clock,
  Target,
  BarChart3,
  Image,
  Download,
  Eye,
  AlertTriangle,
  Users,
  Link,
  X,
  Copy,
  Gift,
  FileText,
  Sparkles,
  Check
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useAccountStats } from '../hooks/useAccountStats';
import { useGenerationHistory } from '../hooks/useGenerationHistory';
import { useSubscription } from '../hooks/useSubscription';
import { useAffiliation } from '../hooks/useAffiliation';
import { DangerActionModal } from '../components/DangerActionModal';
import { cropHead } from '../utils/headCropper';
import { useTranslation } from 'react-i18next';

type TabType = 'stats' | 'history' | 'affiliate';

export const AccountPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { t } = useTranslation('account');

  // Get tab from URL params, default to 'stats'
  const tabFromUrl = searchParams.get('tab') as TabType;
  const initialTab = tabFromUrl && ['stats', 'history', 'affiliate'].includes(tabFromUrl) ? tabFromUrl : 'stats';
  const [activeTab, setActiveTab] = useState<TabType>(initialTab);
  const [isDangerModalOpen, setIsDangerModalOpen] = useState(false);
  const [dangerAction, setDangerAction] = useState<'cancel_subscription' | 'delete_account' | null>(null);
  const [isActionLoading, setIsActionLoading] = useState(false);
  const [usageHistoryPage, setUsageHistoryPage] = useState(1);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string>('');
  const [croppedImageUrl, setCroppedImageUrl] = useState<string | null>(null);
  const [isCropping, setIsCropping] = useState(false);
  const [showCroppedVersion, setShowCroppedVersion] = useState(false);
  const [cropError, setCropError] = useState<string | null>(null);
  const [isListingModalOpen, setIsListingModalOpen] = useState(false);
  const [selectedListing, setSelectedListing] = useState<{ title: string; description: string } | null>(null);
  const [copiedListingTitle, setCopiedListingTitle] = useState(false);
  const [copiedListingDescription, setCopiedListingDescription] = useState(false);
  const { user, loading: authLoading, deleteUserAccount } = useAuth();
  const { stats, loading, error, formatDate, formatDateTime } = useAccountStats();
  const {
    history,
    loading: historyLoading,
    error: historyError,
    formatDateTime: formatHistoryDateTime,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
    hasNextPage,
    hasPrevPage
  } = useGenerationHistory();
  const { 
    subscription, 
    subscriptions, 
    totalCredits, 
    monthlySubscription, 
    creditPacks, 
    cancelMonthlySubscription 
  } = useSubscription();
  const { 
    affiliation, 
    referrals, 
    loading: affiliationLoading, 
    referralCode, 
    referralLink, 
    completedReferralsCount, 
    copyReferralLink 
  } = useAffiliation();

  // SEO optimization
  useSEO(SEO_CONFIGS.account);

  // Redirect if not authenticated (but wait for auth to finish loading)
  React.useEffect(() => {
    if (!authLoading && !user) {
      navigate('/');
    }
  }, [user, authLoading, navigate]);

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-block px-8 py-4 bg-white border-4 border-black font-display font-bold text-black animate-pulse">
              {t('loading.stats')}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="min-h-screen bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-block px-8 py-4 bg-pink-pastel border-4 border-black font-display font-bold text-black">
              {error || t('errors.loading')}
            </div>
          </div>
        </div>
      </div>
    );
  }


  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-mint';
      case 'canceled': return 'bg-pink-pastel';
      case 'past_due': return 'bg-cream';
      default: return 'bg-white';
    }
  };

  const formatSubscriptionType = (planType: string) => {
    switch (planType) {
      case 'monthly': return t('subscriptionTypes.monthly');
      case 'credits': return t('subscriptionTypes.credits');
      default: return t('subscriptionTypes.unknown');
    }
  };

  const getSubscriptionEndDate = () => {
    if (!monthlySubscription) return undefined;

    // Si current_period_end existe et est valide, l'utiliser
    if (monthlySubscription.current_period_end) {
      return monthlySubscription.current_period_end;
    }

    // Sinon, calculer 1 mois après la date de création
    const createdDate = new Date(monthlySubscription.created_at);
    const endDate = new Date(createdDate);
    endDate.setMonth(endDate.getMonth() + 1);
    
    return endDate.toISOString();
  };

  const handleViewImage = (imageUrl: string) => {
    setSelectedImageUrl(imageUrl);
    setIsImageModalOpen(true);
    // Reset crop states when opening a new image
    setCroppedImageUrl(null);
    setShowCroppedVersion(false);
    setCropError(null);
  };

  const handleCloseImageModal = () => {
    setIsImageModalOpen(false);
    setSelectedImageUrl('');
    setCroppedImageUrl(null);
    setShowCroppedVersion(false);
    setCropError(null);
    setIsCropping(false);
  };

  const handleDownloadImage = async (imageUrl: string, filename: string) => {
    try {
      // Méthode simple et directe avec fetch + blob
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      // Essayer d'abord la méthode classique
      const link = document.createElement('a');
      link.style.display = 'none';
      link.href = url;
      link.download = filename;

      // Ajouter temporairement au DOM
      document.body.appendChild(link);

      // Déclencher le téléchargement
      link.click();

      // Nettoyer immédiatement
      document.body.removeChild(link);

      // Libérer la mémoire après un court délai
      setTimeout(() => {
        URL.revokeObjectURL(url);
      }, 1000);

    } catch (error) {
      // console.error('Erreur lors du téléchargement:', error);

      // Fallback simple: ouvrir dans un nouvel onglet
      try {
        window.open(imageUrl, '_blank');
      } catch (fallbackError) {
        // console.error('Erreur fallback:', fallbackError);
        // Dernier recours: copier l'URL dans le presse-papier si possible
        if (navigator.clipboard) {
          navigator.clipboard.writeText(imageUrl).then(() => {
            alert('Impossible de télécharger automatiquement. L\'URL de l\'image a été copiée dans le presse-papier.');
          });
        } else {
          alert(`${t('common.downloadAlert')}${imageUrl}`);
        }
      }
    }
  };

  const handleCropImage = async () => {
    if (!selectedImageUrl) return;

    try {
      setIsCropping(true);
      setCropError(null);

      const croppedResult = await cropHead(selectedImageUrl);
      setCroppedImageUrl(croppedResult);
      setShowCroppedVersion(true);
    } catch (error) {
      // console.error('Erreur lors du découpage:', error);
      setCropError('Impossible de découper la tête de l\'image');
    } finally {
      setIsCropping(false);
    }
  };

  const toggleImageVersion = () => {
    setShowCroppedVersion(!showCroppedVersion);
  };

  const handleDangerAction = async () => {
    if (!dangerAction) return;

    setIsActionLoading(true);
    try {
      if (dangerAction === 'cancel_subscription') {
        await cancelMonthlySubscription();
        // Success - modal will close and UI will update automatically
      } else if (dangerAction === 'delete_account') {
        await deleteUserAccount();
        // Navigate without alert
        navigate('/');
      }
    } catch (error: any) {
      // console.error('Error handling danger action:', error);
      throw error; // Let the modal handle the error display
    } finally {
      setIsActionLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream py-12 relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="text-center">
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl text-black transform -rotate-2 mb-4 sm:mb-6 inline-block">
              <span className="inline-block bg-white border-4 border-black px-4 sm:px-6 py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                {t('navigation.title')}
              </span>
            </h1>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
          <button
            onClick={() => {
              setActiveTab('stats');
              setSearchParams({}); // Remove query params for stats tab
            }}
            className={`flex items-center justify-center sm:justify-start gap-2 px-4 sm:px-6 py-3 font-display font-bold text-sm sm:text-base border-4 border-black transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
              activeTab === 'stats'
                ? 'bg-vinted text-white transform -rotate-1'
                : 'bg-white text-black hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]'
            }`}
          >
            <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" />
            {t('tabs.stats')}
          </button>
          <button
            onClick={() => {
              setActiveTab('history');
              setSearchParams({ tab: 'history' });
            }}
            className={`flex items-center justify-center sm:justify-start gap-2 px-4 sm:px-6 py-3 font-display font-bold text-sm sm:text-base border-4 border-black transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
              activeTab === 'history'
                ? 'bg-vinted text-white transform -rotate-1'
                : 'bg-white text-black hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]'
            }`}
          >
            <Image className="w-4 h-4 sm:w-5 sm:h-5" />
            {t('tabs.history')}
          </button>
          <button
            onClick={() => {
              setActiveTab('affiliate');
              setSearchParams({ tab: 'affiliate' });
            }}
            className={`flex items-center justify-center sm:justify-start gap-2 px-4 sm:px-6 py-3 font-display font-bold text-sm sm:text-base border-4 border-black transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
              activeTab === 'affiliate'
                ? 'bg-vinted text-white transform -rotate-1'
                : 'bg-white text-black hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]'
            }`}
          >
            <Users className="w-4 h-4 sm:w-5 sm:h-5" />
            {t('tabs.affiliate')}
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'stats' && (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Profile Card */}
          <div className="bg-mint border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <User className="w-6 h-6 text-black" />
              </div>
              <h3 className="font-display font-bold text-xl text-black">{t('statsTab.profile.title')}</h3>
            </div>
            <div className="space-y-2">
              <p className="font-body font-semibold text-black">
                <span className="font-display font-bold">{t('statsTab.profile.email')}</span> {stats.email}
              </p>
              {stats.full_name && (
                <p className="font-body font-semibold text-black">
                  <span className="font-display font-bold">{t('statsTab.profile.name')}</span> {stats.full_name}
                </p>
              )}
              <p className="font-body font-semibold text-black">
                <span className="font-display font-bold">{t('statsTab.profile.memberSince')}</span><br />
                {formatDate(stats.created_at)}
              </p>
            </div>
          </div>

          {/* Credits Summary Card */}
          <div className="bg-pink-pastel border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <CreditCard className="w-6 h-6 text-black" />
              </div>
              <h3 className="font-display font-bold text-xl text-black">{t('statsTab.creditsAvailable.title')}</h3>
            </div>
            <div className="space-y-2">
              <p className="font-body font-semibold text-black">
                <span className="font-display font-bold">{t('statsTab.creditsAvailable.total')}</span><br />
                <span className="text-3xl text-vinted">{totalCredits}</span>
              </p>
              <p className="font-body font-semibold text-black">
                <span className="font-display font-bold">{t('statsTab.creditsAvailable.activePacks')}</span><br />
                <span className="text-2xl">{creditPacks.length}</span>
              </p>
              {totalCredits > 0 && (
                <div className="bg-white border-2 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <p className="font-display font-bold text-xs text-vinted">PRIORITÉ UTILISATION</p>
                </div>
              )}
            </div>
          </div>

          {/* Total Generations Card */}
          <div className="bg-vinted border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-0.5">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <TrendingUp className="w-6 h-6 text-black" />
              </div>
              <h3 className="font-display font-bold text-xl text-white">{t('statsTab.totalGenerations.title')}</h3>
            </div>
            <div className="space-y-2">
              <p className="font-body font-semibold text-white">
                <span className="font-display font-bold">{t('common.total')}:</span><br />
                <span className="text-3xl">{stats.total_generations}</span>
              </p>
              <p className="font-body font-semibold text-white">
                <span className="font-display font-bold">{t('common.thisMonth')}:</span><br />
                <span className="text-2xl">{stats.this_month_generations}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Subscriptions */}
        {stats.subscriptions.length > 0 && (
          <div className="bg-white border-4 border-black p-6 mb-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-vinted border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display font-bold text-xl text-black">{t('statsTab.subscriptions.title')}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stats.subscriptions.map((subscription, index) => (
                <div key={subscription.id} className={`${getStatusColor(subscription.status)} border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]`}>
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-display font-bold text-black">{formatSubscriptionType(subscription.plan_type)}</h4>
                    <span className="px-2 py-1 bg-white border-2 border-black text-xs font-display font-bold shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                      {subscription.status.toUpperCase()}
                    </span>
                  </div>
                  
                  {subscription.plan_type === 'credits' ? (
                    <div>
                      <p className="font-body font-semibold text-black mb-1">
                        <span className="font-display font-bold">CRÉDITS RESTANTS:</span>
                      </p>
                      <p className="text-2xl font-display font-bold text-black">{subscription.credits_remaining}</p>
                    </div>
                  ) : (
                    <div>
                      <p className="font-body font-semibold text-black mb-1">
                        <span className="font-display font-bold">UTILISATION:</span>
                      </p>
                      <p className="text-xl font-display font-bold text-black">
                        {subscription.monthly_generations_used}/{subscription.monthly_limit}
                      </p>
                    </div>
                  )}
                  
                  <p className="text-xs font-body font-semibold text-gray-600 mt-2">
                    {t('statsTab.usageHistory.createdAt')} {formatDate(subscription.created_at)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Monthly Subscription Status */}
        {monthlySubscription && (
          <div className="bg-white border-4 border-black p-6 mb-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-vinted border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display font-bold text-xl text-black">{t('statsTab.monthlySubscription.title')}</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-mint border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <p className="font-display font-bold text-sm text-black mb-1">STATUT</p>
                <p className="font-body font-semibold text-black">
                  {monthlySubscription.status === 'active' ? 'ACTIF' : 'RÉSILIÉ'}
                </p>
              </div>
              
              <div className="bg-pink-pastel border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <p className="font-display font-bold text-sm text-black mb-1">UTILISATION</p>
                <p className="font-body font-semibold text-black">
                  {monthlySubscription.monthly_generations_used}/{monthlySubscription.monthly_limit}
                </p>
              </div>
              
              <div className="bg-cream border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <p className="font-display font-bold text-sm text-black mb-1">RESTANTES</p>
                <p className="font-body font-semibold text-black">
                  {monthlySubscription.monthly_limit - monthlySubscription.monthly_generations_used}
                </p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="space-y-3">
              <div className="flex justify-between font-display font-bold text-black text-sm">
                <span>PROGRESSION MENSUELLE</span>
                <span>{Math.round((monthlySubscription.monthly_generations_used / monthlySubscription.monthly_limit) * 100)}%</span>
              </div>
              <div className="w-full h-4 bg-cream border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <div 
                  className="h-full bg-vinted border-r-2 border-black transition-all duration-500"
                  style={{ width: `${Math.min((monthlySubscription.monthly_generations_used / monthlySubscription.monthly_limit) * 100, 100)}%` }}
                />
              </div>
              
              {totalCredits === 0 && (
                <div className="bg-yellow-100 border-2 border-yellow-500 p-3 shadow-[2px_2px_0px_0px_rgba(234,179,8,1)]">
                  <p className="font-display font-bold text-xs text-yellow-800">SYSTÈME ACTUEL</p>
                </div>
              )}
            </div>
          </div>
        )}


        {/* Last Generation */}
        {stats.last_generation_date && (
          <div className="bg-pink-300 border-4 border-slate-900 p-6 mb-8 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white border-2 border-slate-900">
                <Clock className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="text-xl font-black text-slate-900">{t('statsTab.lastGeneration')}</h3>
            </div>
            <p className="font-bold text-slate-900">
              {formatDateTime(stats.last_generation_date)}
            </p>
          </div>
        )}

        {/* No Subscription Message */}
        {totalCredits === 0 && !monthlySubscription && (
          <div className="bg-white border-4 border-black p-6 mb-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
            <div className="text-center">
              <div className="p-4 bg-vinted border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] inline-block mb-4">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-black mb-2">AUCUN CRÉDIT DISPONIBLE</h3>
              <p className="font-body font-semibold text-black mb-4">
                Achetez des crédits ou souscrivez à un abonnement pour commencer à générer des avatars !
              </p>
              <button
                onClick={() => navigate('/#tarifs')}
                className="px-6 py-3 bg-vinted text-white border-4 border-black font-display font-bold transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              >
                VOIR LES TARIFS
              </button>
            </div>
          </div>
        )}

        {/* No Activity Message */}
        {stats.total_generations === 0 && (
          <div className="bg-yellow-100 border-4 border-slate-900 p-6 mb-8 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]">
            <div className="text-center">
              <div className="p-4 bg-yellow-300 border-2 border-slate-900 inline-block mb-4">
                <Zap className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">{t('common.firstVisit')}</h3>
              <p className="font-bold text-slate-900 mb-4">
                {t('statsTab.usageHistory.noGenerations')}
              </p>
              <button
                onClick={() => navigate('/#generateur')}
                className="px-6 py-3 bg-mint text-black border-4 border-black font-display font-bold transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              >
                CRÉER MON PREMIER AVATAR
              </button>
            </div>
          </div>
        )}

        {/* Usage History with Pagination */}
        {stats.usage_history.length > 0 && (() => {
          const USAGE_HISTORY_PER_PAGE = 5;
          const totalPages = Math.ceil(stats.usage_history.length / USAGE_HISTORY_PER_PAGE);
          const startIndex = (usageHistoryPage - 1) * USAGE_HISTORY_PER_PAGE;
          const endIndex = startIndex + USAGE_HISTORY_PER_PAGE;
          const currentPageHistory = stats.usage_history.slice(startIndex, endIndex);

          return (
            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-vinted border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl text-black">{t('statsTab.usageHistory.title')}</h3>
              </div>
              
              <div className="space-y-3 mb-6">
                {currentPageHistory.map((usage, index) => (
                  <div key={startIndex + index} className="flex justify-between items-center p-3 bg-cream border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <div>
                      <p className="font-display font-bold text-black">
                        {usage.generation_type.toUpperCase()}
                      </p>
                      <p className="text-sm font-body font-semibold text-gray-700">
                        {formatDateTime(usage.date)}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="px-2 py-1 bg-vinted text-white border-2 border-black font-display font-bold text-sm shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                        -{usage.credits_used} CRÉDIT{usage.credits_used > 1 ? 'S' : ''}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Controls - Mobile Responsive */}
              {totalPages > 1 && (
                <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-3 sm:gap-0">
                  <button
                    onClick={() => setUsageHistoryPage(prev => Math.max(prev - 1, 1))}
                    disabled={usageHistoryPage === 1}
                    className={`w-full sm:w-auto px-3 sm:px-4 py-2 border-4 border-black font-display font-bold text-sm sm:text-base shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
                      usageHistoryPage === 1
                        ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                        : 'bg-pink-pastel text-black hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                    }`}
                  >
                    {t('historyTab.pagination.previous')}
                  </button>

                  <div className="px-3 sm:px-4 py-2 bg-mint border-3 border-black font-display font-bold text-black text-sm sm:text-base shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] order-first sm:order-none">
                    {t('historyTab.pagination.page')} {usageHistoryPage} / {totalPages}
                  </div>

                  <button
                    onClick={() => setUsageHistoryPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={usageHistoryPage === totalPages}
                    className={`w-full sm:w-auto px-3 sm:px-4 py-2 border-4 border-black font-display font-bold text-sm sm:text-base shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
                      usageHistoryPage === totalPages
                        ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                        : 'bg-pink-pastel text-black hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                    }`}
                  >
                    {t('historyTab.pagination.next')}
                  </button>
                </div>
              )}
            </div>
          );
        })()}
            </>
        )}

        {/* History Tab Content */}
        {activeTab === 'history' && (
          <>
            {historyLoading ? (
              <div className="text-center">
                <div className="inline-block px-8 py-4 bg-white border-4 border-black font-display font-bold text-black animate-pulse">
                  {t('loading.history')}
                </div>
              </div>
            ) : historyError ? (
              <div className="text-center">
                <div className="inline-block px-8 py-4 bg-pink-pastel border-4 border-black font-display font-bold text-black">
                  {historyError}
                </div>
              </div>
            ) : history.length === 0 ? (
              <div className="bg-white border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-1 text-center">
                <div className="p-4 bg-cream border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] inline-block mb-4">
                  <Image className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-display font-bold text-black mb-2">AUCUNE GÉNÉRATION</h3>
                <p className="font-body font-semibold text-black mb-4">
                  Vous n'avez pas encore généré d'avatar ! Créez votre première photo pour la voir apparaître ici.
                </p>
                <button
                  onClick={() => navigate('/#generateur')}
                  className="px-6 py-3 bg-vinted text-white border-4 border-black font-display font-bold transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                >
                  CRÉER MON PREMIER AVATAR
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="font-display font-bold text-2xl text-black bg-mint border-4 border-black px-6 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block transform -rotate-1">
                    {t('historyTab.titleWithCount')}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {history.map((item) => (
                    <div key={item.id} className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform hover:rotate-1 transition-transform duration-300">
                      <div className="space-y-4">
                        {/* Date et Info */}
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-display font-bold text-lg text-black">
                              {t('historyTab.generation')} #{item.id.slice(-8).toUpperCase()}
                            </h3>
                            <p className="font-body text-black">
                              {formatHistoryDateTime(item.created_at)}
                            </p>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <span className="px-2 py-1 bg-vinted text-white border-2 border-black font-display font-bold text-xs shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap">
                              -{item.credits_used} {t('historyTab.credit')}
                            </span>
                          </div>
                        </div>

                        {/* Images Comparison */}
                        <div className="grid grid-cols-2 gap-4">
                          {/* Image Originale */}
                          <div className="space-y-2">
                            <p className="font-display font-bold text-sm text-black">{t('historyTab.original')}</p>
                            <div className="aspect-square bg-cream border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                              {item.original_image_url ? (
                                <img
                                  src={item.original_image_url}
                                  alt={t('common.originalClothingPhotoAlt')}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-500">
                                  <Image className="w-8 h-8" />
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Image Générée */}
                          <div className="space-y-2">
                            <p className="font-display font-bold text-sm text-black">{t('historyTab.generated')}</p>
                            <div className="aspect-square bg-mint border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                              {item.generated_image_url ? (
                                <img
                                  src={item.generated_image_url}
                                  alt="Avatar IA généré pour photo Vinted portée professionnelle"
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-500">
                                  <Image className="w-8 h-8" />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Configuration utilisée */}
                        {item.generation_config && (
                          <div className="bg-cream border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            <p className="font-display font-bold text-sm text-black mb-2">{t('historyTab.configurationUsed')}</p>
                            <div className="grid grid-cols-2 gap-2 text-xs font-body text-black">
                              <span>Genre: {item.generation_config.gender?.toUpperCase()}</span>
                              <span>Carnation: {item.generation_config.carnation?.toUpperCase()}</span>
                              <span>Morpho: {item.generation_config.morphology?.toUpperCase()}</span>
                              <span>Décor: {item.generation_config.decor?.toUpperCase()}</span>
                            </div>
                          </div>
                        )}

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row flex-wrap gap-2">
                          {item.generated_image_url && (
                            <>
                              <button
                                onClick={() => handleViewImage(item.generated_image_url)}
                                className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-3 py-2 bg-vinted text-white border-3 border-black font-display font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                              >
                                <Eye className="w-4 h-4" />
                                <span>{t('imageModal.viewAndCrop')}</span>
                              </button>
                              <button
                                onClick={() => handleDownloadImage(item.generated_image_url, `avatar-${item.id}.jpg`)}
                                className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-3 py-2 bg-pink-pastel text-black border-3 border-black font-display font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                              >
                                <Download className="w-4 h-4" />
                                {t('historyTab.downloadImage')}
                              </button>
                            </>
                          )}
                          {item.vinted_listing && (
                            <button
                              onClick={() => {
                                setSelectedListing(item.vinted_listing);
                                setIsListingModalOpen(true);
                                setCopiedListingTitle(false);
                                setCopiedListingDescription(false);
                              }}
                              className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-vinted text-white border-3 border-black font-display font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                            >
                              <FileText className="w-4 h-4" />
                              <span>{t('historyTab.viewListing', 'VOIR TITRE & DESCRIPTION')}</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2 mt-8">
                    <button
                      onClick={prevPage}
                      disabled={!hasPrevPage}
                      className={`px-4 py-2 border-3 border-black font-display font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
                        hasPrevPage
                          ? 'bg-vinted text-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      PRÉCÉDENT
                    </button>

                    <div className="flex gap-1">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                          key={page}
                          onClick={() => goToPage(page)}
                          className={`w-10 h-10 border-3 border-black font-display font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
                            currentPage === page
                              ? 'bg-vinted text-white'
                              : 'bg-white text-black hover:bg-mint'
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={nextPage}
                      disabled={!hasNextPage}
                      className={`px-4 py-2 border-3 border-black font-display font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
                        hasNextPage
                          ? 'bg-vinted text-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      SUIVANT
                    </button>
                  </div>
                )}
              </div>
            )}
          </>
        )}

        {/* Affiliate Tab Content */}
        {activeTab === 'affiliate' && (
          <>
            {affiliationLoading ? (
              <div className="text-center">
                <div className="inline-block px-8 py-4 bg-white border-4 border-black font-display font-bold text-black animate-pulse">
                  CHARGEMENT DE L'AFFILIATION...
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                {/* Referral Code Section */}
                {affiliation && (
                  <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-mint border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <Link className="w-6 h-6 text-black" />
                      </div>
                      <h3 className="font-display font-bold text-xl text-black">{t('affiliateTab.referralCode.title')}</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="font-display font-bold text-black mb-2 block">{t('affiliateTab.referralCode.label')}</label>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 p-3 bg-cream border-3 border-black font-display font-bold text-lg text-center">
                            {referralCode}
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="font-display font-bold text-black mb-2 block">LIEN DE PARTAGE :</label>
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={referralLink}
                            readOnly
                            className="flex-1 p-3 bg-cream border-3 border-black font-body text-sm"
                          />
                          <button
                            onClick={async () => {
                              const success = await copyReferralLink();
                              if (success) {
                                // Show success feedback (you could add a toast here)
                                // console.log('Lien copié !');
                              }
                            }}
                            className="px-4 py-3 bg-vinted text-white border-3 border-black font-display font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                          >
                            <Copy className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-mint border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-white border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <Users className="w-6 h-6 text-black" />
                      </div>
                      <h3 className="font-display font-bold text-xl text-black">{t('affiliateTab.myReferrals.title')}</h3>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-display font-bold text-black mb-2">
                        {completedReferralsCount}
                      </div>
                      <p className="font-body font-semibold text-black">
                        AMIS PARRAINÉS
                      </p>
                    </div>
                  </div>

                  <div className="bg-yellow-300 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-white border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <Gift className="w-6 h-6 text-black" />
                      </div>
                      <h3 className="font-display font-bold text-xl text-black">{t('affiliateTab.bonusEarned.title')}</h3>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-display font-bold text-black mb-2">
                        {completedReferralsCount}
                      </div>
                      <p className="font-body font-semibold text-black">
                        {t('affiliateTab.bonusEarned.unit')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Referral History */}
                {referrals.length > 0 && (
                  <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-pink-pastel border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <Clock className="w-6 h-6 text-black" />
                      </div>
                      <h3 className="font-display font-bold text-xl text-black">{t('affiliateTab.referralHistory.title')}</h3>
                    </div>
                    
                    <div className="space-y-3">
                      {referrals.map((referral) => (
                        <div key={referral.id} className="bg-cream border-2 border-black p-4 flex justify-between items-center">
                          <div>
                            <p className="font-display font-bold text-black">
                              Parrainage réussi
                            </p>
                            <p className="font-body text-sm text-gray-700">
                              {new Date(referral.updated_at).toLocaleDateString('fr-FR', {
                                day: '2-digit',
                                month: '2-digit', 
                                year: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </p>
                          </div>
                          <div className="px-3 py-1 bg-mint border-2 border-black font-display font-bold text-sm">
                            +1 GÉNÉRATION
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* How it works */}
                <div className="bg-cream border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
                  <h3 className="font-display font-bold text-xl text-black mb-4 text-center">
                    COMMENT ÇA MARCHE ?
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-vinted text-white border-3 border-black font-display font-bold text-lg flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        1
                      </div>
                      <p className="font-body font-semibold text-black">
                        {t('affiliateTab.howItWorks.step1Description')}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-vinted text-white border-3 border-black font-display font-bold text-lg flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        2
                      </div>
                      <p className="font-body font-semibold text-black">
                        <span className="font-display font-bold">Votre ami s'inscrit</span> via votre lien et achète des crédits ou s'abonne
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-vinted text-white border-3 border-black font-display font-bold text-lg flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        3
                      </div>
                      <p className="font-body font-semibold text-black">
                        {t('affiliateTab.howItWorks.step3Description')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* Zone Danger */}
        <div className="bg-white border-4 border-red-500 p-6 mt-12 shadow-[6px_6px_0px_0px_rgba(239,68,68,1)]">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-red-500 border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-display font-bold text-xl text-red-600">ZONE DANGER</h3>
          </div>

          <div className="space-y-4">
            {/* Cancel Subscription Button - only show for monthly plans */}
            {monthlySubscription && monthlySubscription.status === 'active' && (
              <div className="bg-red-50 border-2 border-red-300 p-4 shadow-[2px_2px_0px_0px_rgba(239,68,68,1)]">
                <h4 className="font-display font-bold text-red-600 mb-2">{t('dangerZone.cancelSubscription.title')}</h4>
                <p className="font-body text-sm text-gray-700 mb-4">
                  {t('dangerZone.cancelSubscription.description')}
                </p>
                <button
                  onClick={() => {
                    setDangerAction('cancel_subscription');
                    setIsDangerModalOpen(true);
                  }}
                  disabled={isActionLoading}
                  className="px-6 py-3 bg-orange-400 text-black border-4 border-black font-display font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isActionLoading ? t('dangerZone.cancelSubscription.processing') : t('dangerZone.cancelSubscription.button')}
                </button>
              </div>
            )}

            {/* Delete Account Button */}
            <div className="bg-red-100 border-2 border-red-400 p-4 shadow-[2px_2px_0px_0px_rgba(239,68,68,1)]">
              <h4 className="font-display font-bold text-red-600 mb-2">{t('dangerZone.deleteAccount.title')}</h4>
              <p className="font-body text-sm text-gray-700 mb-4">
                {t('dangerZone.deleteAccount.description')}
              </p>
              <button
                onClick={() => {
                  setDangerAction('delete_account');
                  setIsDangerModalOpen(true);
                }}
                disabled={isActionLoading}
                className="px-6 py-3 bg-red-500 text-white border-4 border-black font-display font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isActionLoading ? t('dangerZone.deleteAccount.processing') : t('dangerZone.deleteAccount.button')}
              </button>
            </div>
          </div>
        </div>

        {/* Danger Action Modal */}
        {/* Image Modal */}
        {isImageModalOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={handleCloseImageModal}
          >
            <div 
              className="relative bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header avec bouton fermer */}
              <div className="flex justify-between items-center p-4 bg-vinted border-b-4 border-black">
                <div>
                  <h3 className="font-display font-bold text-white">{t('historyTab.generatedImage')}</h3>
                  {croppedImageUrl && (
                    <p className="text-xs text-blue-100 font-body">
                      {showCroppedVersion ? 'Version sans tête' : 'Version originale'}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleCloseImageModal}
                  className="p-2 bg-white border-3 border-black font-display font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Affichage d'erreur si applicable */}
              {cropError && (
                <div className="p-3 bg-red-100 border-b-2 border-red-400 text-center">
                  <p className="text-sm font-body text-red-600">{cropError}</p>
                </div>
              )}
              
              {/* Image */}
              <div className="p-4 flex justify-center overflow-hidden">
                <img
                  src={showCroppedVersion && croppedImageUrl ? croppedImageUrl : selectedImageUrl}
                  alt={showCroppedVersion ? 'Avatar IA anonyme pour Vinted sans visage visible' : 'Avatar IA Vinted en grande taille pour téléchargement'}
                  className="max-w-full max-h-80 w-auto h-auto border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] object-contain"
                />
              </div>
              
              {/* Actions */}
              <div className="p-4 bg-cream border-t-4 border-black flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handleDownloadImage(
                    showCroppedVersion && croppedImageUrl ? croppedImageUrl : selectedImageUrl,
                    `avatar-${showCroppedVersion ? 'sans-tete' : 'original'}.jpg`
                  )}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-pink-pastel text-black border-3 border-black font-display font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                >
                  <Download className="w-4 h-4" />
                  {t('historyTab.downloadImage')}
                </button>

                {!croppedImageUrl ? (
                  <button
                    onClick={handleCropImage}
                    disabled={isCropping}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-vinted text-white border-3 border-black font-display font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
                      isCropping ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isCropping ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>DÉCOUPAGE...</span>
                      </>
                    ) : (
                      <>
                        <Eye className="w-4 h-4" />
                        <span>{t('imageModal.viewAndCrop')}</span>
                      </>
                    )}
                  </button>
                ) : (
                  <button
                    onClick={toggleImageVersion}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-vinted text-white border-3 border-black font-display font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                  >
                    <Eye className="w-4 h-4" />
                    {showCroppedVersion ? 'VOIR ORIGINAL' : 'VOIR SANS TÊTE'}
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Listing Modal - Popup for Title & Description */}
        {isListingModalOpen && selectedListing && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setIsListingModalOpen(false)}
          >
            <div
              className="relative bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-lg w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-vinted to-teal-500 border-b-4 border-black sticky top-0">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-white" />
                  <h3 className="font-display font-bold text-white">{t('historyTab.listingModalTitle', 'TITRE & DESCRIPTION IA')}</h3>
                </div>
                <button
                  onClick={() => setIsListingModalOpen(false)}
                  className="p-2 bg-white border-3 border-black font-display font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 space-y-4">
                {/* Title */}
                <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-mint border-2 border-black transform rotate-45"></div>
                      <span className="font-display font-bold text-sm text-black">
                        {t('historyTab.titleLabel', 'TITRE')}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(selectedListing.title);
                        setCopiedListingTitle(true);
                        setTimeout(() => setCopiedListingTitle(false), 2000);
                      }}
                      className={`flex items-center gap-1.5 px-3 py-1.5 border-3 border-black font-display font-bold text-xs shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
                        copiedListingTitle ? 'bg-mint text-black' : 'bg-vinted text-white'
                      }`}
                    >
                      {copiedListingTitle ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      {copiedListingTitle ? t('common.copied', 'COPIÉ !') : t('common.copy', 'COPIER')}
                    </button>
                  </div>
                  <div className="bg-cream border-3 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <p className="font-display font-bold text-black text-base">{selectedListing.title}</p>
                  </div>
                </div>

                {/* Description */}
                <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-pink-pastel border-2 border-black transform rotate-45"></div>
                      <span className="font-display font-bold text-sm text-black">
                        {t('historyTab.descriptionLabel', 'DESCRIPTION')}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(selectedListing.description);
                        setCopiedListingDescription(true);
                        setTimeout(() => setCopiedListingDescription(false), 2000);
                      }}
                      className={`flex items-center gap-1.5 px-3 py-1.5 border-3 border-black font-display font-bold text-xs shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
                        copiedListingDescription ? 'bg-mint text-black' : 'bg-vinted text-white'
                      }`}
                    >
                      {copiedListingDescription ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      {copiedListingDescription ? t('common.copied', 'COPIÉ !') : t('common.copy', 'COPIER')}
                    </button>
                  </div>
                  <div className="bg-cream border-3 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] max-h-48 overflow-y-auto">
                    <p className="font-body text-black text-sm whitespace-pre-line leading-relaxed">{selectedListing.description}</p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 bg-cream border-t-4 border-black">
                <button
                  onClick={() => setIsListingModalOpen(false)}
                  className="w-full px-4 py-3 bg-white text-black border-3 border-black font-display font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                >
                  {t('common.close', 'FERMER')}
                </button>
              </div>
            </div>
          </div>
        )}

        <DangerActionModal
          isOpen={isDangerModalOpen}
          onClose={() => {
            setIsDangerModalOpen(false);
            setDangerAction(null);
          }}
          onConfirm={handleDangerAction}
          action={dangerAction || 'delete_account'}
          subscriptionEndDate={monthlySubscription ? getSubscriptionEndDate() : undefined}
        />
      </div>
    </div>
  );
};