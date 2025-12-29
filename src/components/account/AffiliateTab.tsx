import React from 'react';
import { Link, Copy, Users, Gift, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface AffiliateTabProps {
  affiliation: any;
  referrals: any[];
  affiliationLoading: boolean;
  referralCode: string;
  referralLink: string;
  completedReferralsCount: number;
  onCopyReferralLink: () => Promise<boolean>;
}

export const AffiliateTab: React.FC<AffiliateTabProps> = ({
  affiliation,
  referrals,
  affiliationLoading,
  referralCode,
  referralLink,
  completedReferralsCount,
  onCopyReferralLink
}) => {
  const { t } = useTranslation('account');

  if (affiliationLoading) {
    return (
      <div className="text-center">
        <div className="inline-block px-8 py-4 bg-white border-4 border-black font-display font-bold text-black animate-pulse">
          CHARGEMENT DE L'AFFILIATION...
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Referral Code Section */}
      {affiliation && (
        <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
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
                    await onCopyReferralLink();
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
        <div className="bg-mint border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
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

        <div className="bg-pink-pastel border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
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
      <div className="bg-cream border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
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
  );
};
