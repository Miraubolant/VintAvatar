import React from 'react';
import { XCircle, ArrowLeft, CreditCard } from 'lucide-react';
import { useSEO, SEO_CONFIGS } from '../hooks/useSEO';

export const CancelPage: React.FC = () => {
  useSEO(SEO_CONFIGS.cancel);
  const handleBackToPlans = () => {
    window.location.href = '/#tarifs';
  };

  const handleBackToHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Cancel Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-red-300 border-4 border-slate-900 rounded-full flex items-center justify-center mx-auto shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]">
            <XCircle className="w-12 h-12 text-slate-900" />
          </div>
        </div>

        {/* Cancel Message */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 mb-6">
            PAIEMENT ANNULÉ
          </h1>
          <p className="text-xl text-slate-700 mb-8">
            Aucun souci ! Votre paiement a été annulé et aucun montant n'a été débité.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 mb-16">
          <button
            onClick={handleBackToPlans}
            className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-black border-4 border-slate-900 transition-all duration-200 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] text-xl mx-auto"
          >
            <CreditCard className="w-6 h-6" />
            RETOUR AUX TARIFS
          </button>

          <button
            onClick={handleBackToHome}
            className="flex items-center justify-center gap-3 px-6 py-3 bg-gray-300 hover:bg-gray-400 text-slate-900 font-black border-4 border-slate-900 transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] mx-auto"
          >
            <ArrowLeft className="w-5 h-5" />
            RETOUR À L'ACCUEIL
          </button>
        </div>

        {/* Help Box */}
        <div className="bg-gray-50 border-4 border-slate-900 p-8 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
          <h3 className="text-xl font-black text-slate-900 mb-4">
            💡 BESOIN D'AIDE ?
          </h3>
          <div className="text-left space-y-3 text-slate-700 font-bold">
            <p>🔒 <strong>Sécurité :</strong> Tous nos paiements sont sécurisés par Stripe</p>
            <p>💳 <strong>Cartes acceptées :</strong> Visa, Mastercard, American Express</p>
            <p>🌍 <strong>International :</strong> Paiements acceptés dans le monde entier</p>
            <p>📞 <strong>Support :</strong> Une question ? Contactez-nous !</p>
          </div>
        </div>

        {/* Reassurance */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-600 font-bold">
            Vous pouvez toujours tester notre générateur gratuitement !
          </p>
        </div>
      </div>
    </div>
  );
};