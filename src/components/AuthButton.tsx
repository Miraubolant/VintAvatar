import React, { useState } from 'react';
import { LogIn, LogOut, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { AuthModal } from './AuthModal';
import { useTranslation } from 'react-i18next';

export const AuthButton: React.FC = () => {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { t } = useTranslation('auth');

  if (loading) {
    return (
      <div className="px-2 py-1 bg-cream border-2 border-black font-display font-bold text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
        {t('authButton.loading')}
      </div>
    );
  }

  if (user) {
    return (
      <div className="flex items-center gap-1 sm:gap-2">
        <button
          onClick={() => {
            console.log('Navigating to account page');
            navigate('/account');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-1 px-1.5 py-1.5 sm:px-4 sm:py-2.5 bg-mint border-3 border-black font-display font-bold text-xs sm:text-sm text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          aria-label="Mon compte"
        >
          <User className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="hidden sm:inline lg:hidden">{t('authButton.account')}</span>
          <span className="hidden lg:inline">{user.email}</span>
        </button>
        <button
          onClick={signOut}
          aria-label="Déconnexion"
          className="flex items-center gap-1 px-1.5 py-1.5 sm:px-3 sm:py-2.5 bg-pink-pastel border-3 border-black font-display font-bold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
        >
          <LogOut className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="hidden lg:inline text-xs sm:text-sm">{t('authButton.logout')}</span>
        </button>
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => setIsAuthModalOpen(true)}
        className="flex items-center gap-1 px-2 sm:px-4 py-2 sm:py-2.5 bg-vinted text-white border-3 border-black font-display font-bold text-xs sm:text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
      >
        <LogIn className="w-3 h-3 sm:w-4 sm:h-4" />
        <span className="hidden sm:inline">{t('authButton.login')}</span>
        <span className="sm:hidden">{t('authButton.loginShort')}</span>
      </button>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
};