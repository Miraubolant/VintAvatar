import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthCallback: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Délai court pour laisser l'auth se finaliser
    const timer = setTimeout(() => {
      // Utiliser React Router pour éviter un rechargement complet de la page
      // Cela préserve le viewport mobile après la connexion OAuth
      navigate('/', { replace: true });
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-grain flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-vinted border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mx-auto mb-4 flex items-center justify-center animate-pulse">
          <div className="w-8 h-8 bg-mint border-2 border-black transform rotate-12"></div>
        </div>
        <p className="text-xl font-display font-bold text-black">CONNEXION RÉUSSIE !</p>
        <p className="text-sm font-body font-semibold text-gray-700 mt-2">Redirection en cours...</p>
      </div>
    </div>
  );
};