import React, { useState } from 'react';
import { X, AlertTriangle, Trash2, XCircle } from 'lucide-react';

interface DangerActionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => Promise<void>;
  action: 'cancel_subscription' | 'delete_account';
  subscriptionEndDate?: string;
}

export const DangerActionModal: React.FC<DangerActionModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  action,
  subscriptionEndDate
}) => {
  const [confirmText, setConfirmText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const isDeleteAccount = action === 'delete_account';
  const expectedText = isDeleteAccount ? 'SUPPRIMER' : 'RÉSILIER';
  const isConfirmEnabled = confirmText === expectedText;

  const handleConfirm = async () => {
    if (!isConfirmEnabled) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      await onConfirm();
      onClose();
    } catch (err: any) {
      setError(err.message || 'Une erreur est survenue');
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white border-4 border-black max-w-lg w-full mx-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        {/* Header */}
        <div className="bg-pink-pastel border-b-4 border-black p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <h2 className="font-display font-bold text-xl text-black">
                {isDeleteAccount ? 'SUPPRIMER LE COMPTE' : 'RÉSILIER L\'ABONNEMENT'}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-red-200 transition-colors"
              disabled={isLoading}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Warning Message */}
          <div className="bg-cream border-3 border-red-500 p-4">
            <div className="space-y-3">
              <p className="font-body font-semibold text-red-600">
                ⚠️ ATTENTION - ACTION IRRÉVERSIBLE
              </p>
              
              {isDeleteAccount ? (
                <div className="space-y-2 text-sm">
                  <p className="font-body">Cette action va :</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Supprimer définitivement votre compte</li>
                    <li>Effacer toutes vos données personnelles</li>
                    <li>Supprimer votre historique de génération</li>
                    <li>Annuler tous vos abonnements actifs</li>
                    <li>Supprimer toutes vos images stockées</li>
                  </ul>
                  <p className="font-bold text-red-600 mt-3">
                    Cette action est DÉFINITIVE et IRRÉVERSIBLE !
                  </p>
                </div>
              ) : (
                <div className="space-y-2 text-sm">
                  <p className="font-body">Cette action va :</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Résilier votre abonnement mensuel</li>
                    <li>Désactiver le renouvellement automatique</li>
                    {subscriptionEndDate && (
                      <li>Votre accès reste actif jusqu'au {formatDate(subscriptionEndDate)}</li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Confirmation Input */}
          <div className="space-y-3">
            <label className="font-display font-bold text-sm">
              Pour confirmer, tapez "{expectedText}" ci-dessous :
            </label>
            <input
              type="text"
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value.toUpperCase())}
              className="w-full px-4 py-3 bg-white border-4 border-black font-display font-bold text-lg placeholder-gray-400"
              placeholder={`Tapez ${expectedText} ici`}
              disabled={isLoading}
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-100 border-3 border-red-500 p-3">
              <p className="font-body font-semibold text-red-600 text-sm">
                {error}
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-4">
            <button
              onClick={onClose}
              disabled={isLoading}
              className="flex-1 px-6 py-3 bg-white border-4 border-black font-display font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              ANNULER
            </button>
            
            <button
              onClick={handleConfirm}
              disabled={!isConfirmEnabled || isLoading}
              className={`flex-1 px-6 py-3 border-4 border-black font-display font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
                isConfirmEnabled && !isLoading
                  ? 'bg-red-500 text-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-red-600'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                {isLoading ? (
                  <>Traitement...</>
                ) : (
                  <>
                    {isDeleteAccount ? <Trash2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                    {isDeleteAccount ? 'SUPPRIMER' : 'RÉSILIER'}
                  </>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};