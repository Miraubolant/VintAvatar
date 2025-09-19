import React, { useEffect } from 'react';

export const AuthCallback: React.FC = () => {
  useEffect(() => {
    // Nettoyer l'URL et rediriger vers la page principale
    const hash = window.location.hash;
    const cleanUrl = hash ? `/${hash}` : '/';
    
    // Délai court pour laisser l'auth se finaliser
    setTimeout(() => {
      window.location.href = cleanUrl;
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
        <p className="text-xl font-black text-slate-900">CONNEXION RÉUSSIE !</p>
        <p className="text-sm text-slate-600 font-bold mt-2">Redirection en cours...</p>
      </div>
    </div>
  );
};