// Header SIMPLIFIÉ pour tester l'authentification
import React from 'react';
import { User, LogOut, Loader2 } from 'lucide-react';
import { useSimpleAuth } from '../contexts/SimpleAuthContext';

export const SimpleHeader: React.FC = () => {
  const { user, isLoading, signInWithGoogle, signOut } = useSimpleAuth();

  console.log('🎨 SimpleHeader render:', { 
    user: !!user, 
    email: user?.email, 
    isLoading 
  });

  return (
    <header className="bg-white border-b-4 border-blue-500 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-black text-slate-900">VINTED AVATAR - TEST AUTH</h1>
        
        <div className="flex items-center gap-4">
          {isLoading ? (
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-400 text-white font-black border-2 border-slate-900">
              <Loader2 className="w-4 h-4 " />
              CHARGEMENT...
            </div>
          ) : user ? (
            <div className="flex items-center gap-2">
              <div className="px-4 py-2 bg-green-500 text-white font-black border-2 border-slate-900">
                <User className="w-4 h-4 inline mr-2" />
                {user.email}
              </div>
              <button
                onClick={signOut}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-black border-2 border-slate-900"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button 
              onClick={signInWithGoogle}
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-black border-2 border-slate-900"
            >
              <User className="w-4 h-4 inline mr-2" />
              SE CONNECTER AVEC GOOGLE
            </button>
          )}
        </div>
      </div>
    </header>
  );
};