import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, CreditCard, TrendingUp, Zap, Clock, Target, BarChart3 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface StatsTabProps {
  stats: any;
  totalCredits: number;
  monthlySubscription: any;
  creditPacks: any[];
  formatDate: (date: string) => string;
  formatDateTime: (date: string) => string;
}

export const StatsTab: React.FC<StatsTabProps> = ({
  stats,
  totalCredits,
  monthlySubscription,
  creditPacks,
  formatDate,
  formatDateTime
}) => {
  const { t } = useTranslation('account');
  const navigate = useNavigate();
  const [usageHistoryPage, setUsageHistoryPage] = useState(1);

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

  return (
    <>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Profile Card */}
        <div className="bg-mint border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
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
        <div className="bg-pink-pastel border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
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
        <div className="bg-vinted border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
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
        <div className="bg-white border-4 border-black p-6 mb-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-vinted border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-display font-bold text-xl text-black">{t('statsTab.subscriptions.title')}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stats.subscriptions.map((subscription: any) => (
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
        <div className="bg-white border-4 border-black p-6 mb-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
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
              <div className="bg-cream border-3 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <p className="font-display font-bold text-xs text-black">SYSTÈME ACTUEL</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Last Generation */}
      {stats.last_generation_date && (
        <div className="bg-pink-pastel border-4 border-black p-6 mb-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-white border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <Clock className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-xl font-display font-bold text-black">{t('statsTab.lastGeneration')}</h3>
          </div>
          <p className="font-body font-semibold text-black">
            {formatDateTime(stats.last_generation_date)}
          </p>
        </div>
      )}

      {/* No Subscription Message */}
      {totalCredits === 0 && !monthlySubscription && (
        <div className="bg-white border-4 border-black p-6 mb-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
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
        <div className="bg-cream border-4 border-black p-6 mb-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <div className="text-center">
            <div className="p-4 bg-mint border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] inline-block mb-4">
              <Zap className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-display font-bold text-black mb-2">{t('common.firstVisit')}</h3>
            <p className="font-body font-semibold text-black mb-4">
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
              {currentPageHistory.map((usage: any, index: number) => (
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
  );
};
