import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSEO, SEO_CONFIGS } from '../hooks/useSEO';
import { BarChart3, Image, Users } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useAccountStats } from '../hooks/useAccountStats';
import { useGenerationHistory } from '../hooks/useGenerationHistory';
import { useSubscription } from '../hooks/useSubscription';
import { useAffiliation } from '../hooks/useAffiliation';
import { DangerActionModal } from '../components/DangerActionModal';
import { DangerZone } from '../components/account/DangerZone';
import { ImageModal } from '../components/account/ImageModal';
import { ListingModal } from '../components/account/ListingModal';
import { StatsTab } from '../components/account/StatsTab';
import { HistoryTab } from '../components/account/HistoryTab';
import { AffiliateTab } from '../components/account/AffiliateTab';
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
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl text-black mb-4 sm:mb-6 inline-block">
              <span className="inline-block bg-white border-4 border-black px-4 sm:px-6 py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                {t('navigation.title')}
              </span>
            </h1>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-row sm:gap-4 mb-8">
          <button
            onClick={() => {
              setActiveTab('stats');
              setSearchParams({}); // Remove query params for stats tab
            }}
            className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 sm:px-6 py-2 sm:py-3 font-display font-bold text-xs sm:text-base border-4 border-black transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${
              activeTab === 'stats'
                ? 'bg-vinted text-white'
                : 'bg-white text-black'
            }`}
          >
            <BarChart3 className="w-5 h-5 sm:w-5 sm:h-5" />
            <span className="text-center leading-tight">{t('tabs.stats')}</span>
          </button>
          <button
            onClick={() => {
              setActiveTab('history');
              setSearchParams({ tab: 'history' });
            }}
            className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 sm:px-6 py-2 sm:py-3 font-display font-bold text-xs sm:text-base border-4 border-black transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${
              activeTab === 'history'
                ? 'bg-vinted text-white'
                : 'bg-white text-black'
            }`}
          >
            <Image className="w-5 h-5 sm:w-5 sm:h-5" />
            <span className="text-center leading-tight">{t('tabs.history')}</span>
          </button>
          <button
            onClick={() => {
              setActiveTab('affiliate');
              setSearchParams({ tab: 'affiliate' });
            }}
            className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 sm:px-6 py-2 sm:py-3 font-display font-bold text-xs sm:text-base border-4 border-black transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${
              activeTab === 'affiliate'
                ? 'bg-vinted text-white'
                : 'bg-white text-black'
            }`}
          >
            <Users className="w-5 h-5 sm:w-5 sm:h-5" />
            <span className="text-center leading-tight">{t('tabs.affiliate')}</span>
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'stats' && (
          <StatsTab
            stats={stats}
            totalCredits={totalCredits}
            monthlySubscription={monthlySubscription}
            creditPacks={creditPacks}
            formatDate={formatDate}
            formatDateTime={formatDateTime}
          />
        )}

        {/* History Tab Content */}
        {activeTab === 'history' && (
          <HistoryTab
            history={history}
            historyLoading={historyLoading}
            historyError={historyError}
            formatHistoryDateTime={formatHistoryDateTime}
            currentPage={currentPage}
            totalPages={totalPages}
            nextPage={nextPage}
            prevPage={prevPage}
            goToPage={goToPage}
            hasNextPage={hasNextPage}
            hasPrevPage={hasPrevPage}
            onViewImage={handleViewImage}
            onDownloadImage={handleDownloadImage}
            onViewListing={(listing) => {
              setSelectedListing(listing);
              setIsListingModalOpen(true);
              setCopiedListingTitle(false);
              setCopiedListingDescription(false);
            }}
          />
        )}

        {/* Affiliate Tab Content */}
        {activeTab === 'affiliate' && (
          <AffiliateTab
            affiliation={affiliation}
            referrals={referrals}
            affiliationLoading={affiliationLoading}
            referralCode={referralCode}
            referralLink={referralLink}
            completedReferralsCount={completedReferralsCount}
            onCopyReferralLink={copyReferralLink}
          />
        )}

        {/* Zone Danger */}
        <DangerZone
          monthlySubscription={monthlySubscription}
          isActionLoading={isActionLoading}
          onCancelSubscription={() => {
            setDangerAction('cancel_subscription');
            setIsDangerModalOpen(true);
          }}
          onDeleteAccount={() => {
            setDangerAction('delete_account');
            setIsDangerModalOpen(true);
          }}
        />

        {/* Image Modal */}
        <ImageModal
          isOpen={isImageModalOpen}
          imageUrl={selectedImageUrl}
          croppedImageUrl={croppedImageUrl}
          showCroppedVersion={showCroppedVersion}
          isCropping={isCropping}
          cropError={cropError}
          onClose={handleCloseImageModal}
          onDownload={handleDownloadImage}
          onCrop={handleCropImage}
          onToggleVersion={toggleImageVersion}
        />

        {/* Listing Modal */}
        <ListingModal
          isOpen={isListingModalOpen}
          listing={selectedListing}
          copiedTitle={copiedListingTitle}
          copiedDescription={copiedListingDescription}
          onClose={() => setIsListingModalOpen(false)}
          onCopyTitle={() => {
            if (selectedListing) {
              navigator.clipboard.writeText(selectedListing.title);
              setCopiedListingTitle(true);
              setTimeout(() => setCopiedListingTitle(false), 2000);
            }
          }}
          onCopyDescription={() => {
            if (selectedListing) {
              navigator.clipboard.writeText(selectedListing.description);
              setCopiedListingDescription(true);
              setTimeout(() => setCopiedListingDescription(false), 2000);
            }
          }}
        />

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