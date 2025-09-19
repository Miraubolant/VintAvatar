import React, { useState } from 'react';
import { X, LogIn, UserPlus, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useTranslation } from 'react-i18next';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type AuthTab = 'signin' | 'signup';

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<AuthTab>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { signInWithGoogle, signInWithEmail, signUpWithEmail } = useAuth();
  const { t } = useTranslation('auth');

  if (!isOpen) return null;

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setFullName('');
    setShowPassword(false);
    setError(null);
    setIsLoading(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleTabChange = (tab: AuthTab) => {
    setActiveTab(tab);
    setError(null);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  const handleGoogleAuth = async () => {
    try {
      setIsLoading(true);
      setError(null);
      await signInWithGoogle();
      handleClose();
    } catch (error: any) {
      setError(error.message || 'Erreur lors de la connexion avec Google');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError(t('errors.invalidEmail'));
      return;
    }

    if (!validatePassword(password)) {
      setError(t('errors.passwordTooShort'));
      return;
    }

    if (activeTab === 'signup' && !fullName.trim()) {
      setError(t('errors.fullNameRequired'));
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      if (activeTab === 'signin') {
        await signInWithEmail(email, password);
      } else {
        await signUpWithEmail(email, password, fullName.trim());
      }
      
      handleClose();
    } catch (error: any) {
      let errorMessage = t('errors.genericError');

      if (error.message.includes('Invalid login credentials')) {
        errorMessage = t('errors.invalidCredentials');
      } else if (error.message.includes('User already registered')) {
        errorMessage = t('errors.userExists');
      } else if (error.message.includes('Password should be at least')) {
        errorMessage = t('errors.passwordTooShort');
      } else if (error.message.includes('Unable to validate email')) {
        errorMessage = t('errors.invalidEmailFormat');
      } else if (error.message.includes('Email not confirmed')) {
        errorMessage = t('errors.emailNotConfirmed');
      }

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white border-4 border-black max-w-md w-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-vinted border-b-4 border-black">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white border-3 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <User className="w-5 h-5 text-black" />
            </div>
            <h2 className="font-display font-bold text-xl text-white">
              {activeTab === 'signin' ? t('titles.signin') : t('titles.signup')}
            </h2>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center hover:bg-gray-100 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b-4 border-black">
          <button
            onClick={() => handleTabChange('signin')}
            className={`flex-1 py-3 px-4 font-display font-bold text-sm transition-all duration-200 ${
              activeTab === 'signin'
                ? 'bg-mint text-black border-r-2 border-black'
                : 'bg-cream text-gray-700 border-r-2 border-black hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <LogIn className="w-4 h-4" />
              {t('tabs.signin')}
            </div>
          </button>
          <button
            onClick={() => handleTabChange('signup')}
            className={`flex-1 py-3 px-4 font-display font-bold text-sm transition-all duration-200 ${
              activeTab === 'signup'
                ? 'bg-mint text-black'
                : 'bg-cream text-gray-700 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <UserPlus className="w-4 h-4" />
              {t('tabs.signup')}
            </div>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Google Button */}
          <button
            onClick={handleGoogleAuth}
            disabled={isLoading}
            className={`w-full flex items-center justify-center gap-3 px-4 py-3 mb-6 bg-vinted text-white border-3 border-black font-display font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
              isLoading 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
            }`}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            {t('buttons.google')}
          </button>

          {/* Separator */}
          <div className="flex items-center mb-6">
            <div className="flex-1 h-0.5 bg-black"></div>
            <span className="px-4 font-display font-bold text-sm text-gray-600">{t('separator')}</span>
            <div className="flex-1 h-0.5 bg-black"></div>
          </div>

          {/* Email Form */}
          <form onSubmit={handleEmailAuth} className="space-y-4">
            {/* Full Name (only for signup) */}
            {activeTab === 'signup' && (
              <div>
                <label className="block font-display font-bold text-black mb-2">
                  {t('labels.fullName')}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="w-4 h-4 text-gray-500" />
                  </div>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border-3 border-black font-body shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:translate-x-[-1px] focus:translate-y-[-1px] focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                    placeholder={t('placeholders.fullName')}
                    required
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block font-display font-bold text-black mb-2">
                {t('labels.email')}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="w-4 h-4 text-gray-500" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-3 border-black font-body shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:translate-x-[-1px] focus:translate-y-[-1px] focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                  placeholder={t('placeholders.email')}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block font-display font-bold text-black mb-2">
                {t('labels.password')}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="w-4 h-4 text-gray-500" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border-3 border-black font-body shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:translate-x-[-1px] focus:translate-y-[-1px] focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                  placeholder={t('placeholders.password')}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4 text-gray-500 hover:text-gray-700" />
                  ) : (
                    <Eye className="w-4 h-4 text-gray-500 hover:text-gray-700" />
                  )}
                </button>
              </div>
              {activeTab === 'signup' && (
                <p className="text-xs text-gray-600 mt-1 font-body">
                  {t('validation.passwordHelp')}
                </p>
              )}
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-100 border-2 border-red-400 shadow-[2px_2px_0px_0px_rgba(239,68,68,1)]">
                <p className="font-body text-sm text-red-700">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 bg-mint text-black border-3 border-black font-display font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
                isLoading 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  {activeTab === 'signin' ? t('buttons.loading.signin') : t('buttons.loading.signup')}
                </div>
              ) : (
                activeTab === 'signin' ? t('buttons.signin') : t('buttons.signup')
              )}
            </button>
          </form>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-600 font-body">
              {activeTab === 'signin' ? (
                <>
                  {t('switchText.noAccount')}{' '}
                  <button
                    onClick={() => handleTabChange('signup')}
                    className="text-vinted font-bold hover:underline"
                  >
                    {t('switchText.signupLink')}
                  </button>
                </>
              ) : (
                <>
                  {t('switchText.hasAccount')}{' '}
                  <button
                    onClick={() => handleTabChange('signin')}
                    className="text-vinted font-bold hover:underline"
                  >
                    {t('switchText.signinLink')}
                  </button>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};