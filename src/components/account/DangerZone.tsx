import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface DangerZoneProps {
  monthlySubscription: any;
  isActionLoading: boolean;
  onCancelSubscription: () => void;
  onDeleteAccount: () => void;
}

export const DangerZone: React.FC<DangerZoneProps> = ({
  monthlySubscription,
  isActionLoading,
  onCancelSubscription,
  onDeleteAccount
}) => {
  const { t } = useTranslation('account');

  return (
    <div className="bg-white border-4 border-black p-6 mt-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-black border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <AlertTriangle className="w-6 h-6 text-white" />
        </div>
        <h3 className="font-display font-bold text-xl text-black">ZONE DANGER</h3>
      </div>

      <div className="space-y-4">
        {/* Cancel Subscription Button - only show for monthly plans */}
        {monthlySubscription && monthlySubscription.status === 'active' && (
          <div className="bg-cream border-3 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="font-display font-bold text-black mb-2">{t('dangerZone.cancelSubscription.title')}</h4>
            <p className="font-body text-sm text-gray-700 mb-4">
              {t('dangerZone.cancelSubscription.description')}
            </p>
            <button
              onClick={onCancelSubscription}
              disabled={isActionLoading}
              className="px-6 py-3 bg-vinted text-white border-4 border-black font-display font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isActionLoading ? t('dangerZone.cancelSubscription.processing') : t('dangerZone.cancelSubscription.button')}
            </button>
          </div>
        )}

        {/* Delete Account Button */}
        <div className="bg-cream border-3 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <h4 className="font-display font-bold text-black mb-2">{t('dangerZone.deleteAccount.title')}</h4>
          <p className="font-body text-sm text-gray-700 mb-4">
            {t('dangerZone.deleteAccount.description')}
          </p>
          <button
            onClick={onDeleteAccount}
            disabled={isActionLoading}
            className="px-6 py-3 bg-black text-white border-4 border-black font-display font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isActionLoading ? t('dangerZone.deleteAccount.processing') : t('dangerZone.deleteAccount.button')}
          </button>
        </div>
      </div>
    </div>
  );
};
