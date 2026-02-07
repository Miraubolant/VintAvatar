import React, { useState, useEffect } from 'react';
import { X, Sparkles, Check, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import confetti from 'canvas-confetti';
import { useAuth } from '../hooks/useAuth';
import { useAccountStats } from '../hooks/useAccountStats';

interface AvatarConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfigSaved?: () => void;
}

interface AvatarConfig {
  gender: string;
  mannequinType: string;
  carnation: string;
  morphology: string;
  age: string;
  posture: string;
  angle: string;
  framing: string;
  decor: string;
  lighting: string;
  clothingType: string;
  faceMode: 'visible' | 'blur' | 'phone';
  cropHead: boolean;
  customPrompt: string;
}

const STORAGE_KEY = 'avatar_config';

const getStoredConfig = (): AvatarConfig => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error reading stored config:', error);
  }
  return {
    gender: 'femme',
    mannequinType: 'humain',
    carnation: 'claire',
    morphology: 'S',
    age: '18-25',
    posture: 'debout',
    angle: 'face',
    framing: 'corps-entier',
    decor: 'fond-blanc',
    lighting: 'naturel',
    clothingType: 'auto',
    faceMode: 'visible',
    cropHead: false,
    customPrompt: ''
  };
};

const saveConfig = (config: AvatarConfig) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch (error) {
    console.error('Error saving config:', error);
  }
};

export const AvatarConfigModal: React.FC<AvatarConfigModalProps> = ({ isOpen, onClose, onConfigSaved }) => {
  const { t } = useTranslation('avatarConfig');
  const [config, setConfig] = useState<AvatarConfig>(getStoredConfig);
  const [isValidated, setIsValidated] = useState(false);
  const [activeTab, setActiveTab] = useState<'modele' | 'style' | 'environnement' | 'instructions'>('modele');

  const { user } = useAuth();
  const { stats, loading } = useAccountStats();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const updateConfig = (key: keyof AvatarConfig, value: string | boolean) => {
    const newConfig = { ...config, [key]: value };
    setConfig(newConfig);
    saveConfig(newConfig);
    setIsValidated(false);
  };

  const validateConfig = () => {
    setIsValidated(true);

    // Animation confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#09B1BA', '#FFB3BA', '#B3F2DD', '#FFF8E7']
    });

    // Déclencher le callback pour montrer la bulle
    if (onConfigSaved) {
      onConfigSaved();
    }
    setTimeout(() => {
      setIsValidated(false);
      onClose(); // Ferme le popup après validation
    }, 1000);
  };


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4" style={{ touchAction: 'none' }}>
      <div className="relative w-full max-w-md bg-cream border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-h-[90vh] overflow-y-auto">
        
            {/* Header avec bouton fermer */}
            <div className="bg-vinted border-b-3 border-black p-2 sm:p-2 flex items-center justify-between">
              <div className="flex items-center gap-1.5 sm:gap-1.5">
                <div className="w-5 h-5 sm:w-5 sm:h-5 bg-mint border-2 border-black transform rotate-12 flex items-center justify-center shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                  <Sparkles className="w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 text-black" />
                </div>
                <h2 className="font-display font-bold text-sm sm:text-sm text-white">{t('title')}</h2>
              </div>
              <button
                onClick={onClose}
                aria-label="Fermer la configuration"
                className="w-6 h-6 sm:w-6 sm:h-6 bg-pink-pastel border-2 border-black flex items-center justify-center shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform hover:rotate-90 transition-all duration-300"
              >
                <X className="w-3 h-3 text-black" />
              </button>
            </div>

        <div className="p-1.5 sm:p-1.5 md:p-2 space-y-1.5 sm:space-y-1.5">

          {/* Affichage des crédits */}
          {user && stats && !loading && (
            <div className="text-center">
              <div className="inline-flex items-center gap-1.5 px-2 py-1 sm:px-2 sm:py-1 bg-mint border-2 sm:border-2 border-black text-black font-display font-bold text-[10px] sm:text-[10px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
                <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-vinted" />
                <div className="text-center">
                  {stats.total_credits_remaining > 0 && (
                    <span>{stats.total_credits_remaining} CRÉDITS</span>
                  )}
                  {stats.has_active_monthly && (
                    <span>{stats.monthly_generations_used}/{stats.monthly_limit} CE MOIS</span>
                  )}
                  {stats.total_credits_remaining === 0 && !stats.has_active_monthly && (
                    <span>AUCUN CRÉDIT</span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Onglets de navigation */}
          <div className="flex gap-0.5 sm:gap-0.5 mb-1.5 sm:mb-1.5">
            <button
              onClick={() => setActiveTab('modele')}
              className={`flex-1 py-1.5 px-1.5 font-display font-bold text-[10px] sm:text-[10px] transition-all duration-200 border-2 sm:border-2 border-black ${
                activeTab === 'modele'
                  ? 'bg-vinted text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                  : 'bg-white text-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:bg-cream'
              }`}
            >
              {t('tabs.modele')}
            </button>
            <button
              onClick={() => setActiveTab('style')}
              className={`flex-1 py-1.5 px-1.5 font-display font-bold text-[10px] sm:text-[10px] transition-all duration-200 border-2 sm:border-2 border-black ${
                activeTab === 'style'
                  ? 'bg-pink-pastel text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                  : 'bg-white text-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:bg-cream'
              }`}
            >
              {t('tabs.style')}
            </button>
            <button
              onClick={() => setActiveTab('environnement')}
              className={`flex-1 py-1.5 px-1.5 font-display font-bold text-[10px] sm:text-[10px] transition-all duration-200 border-2 sm:border-2 border-black ${
                activeTab === 'environnement'
                  ? 'bg-mint text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                  : 'bg-white text-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:bg-cream'
              }`}
            >
              {t('tabs.environnement')}
            </button>
            <button
              onClick={() => setActiveTab('instructions')}
              className={`flex-1 py-1.5 px-1.5 font-display font-bold text-[10px] sm:text-[10px] transition-all duration-200 border-2 sm:border-2 border-black ${
                activeTab === 'instructions'
                  ? 'bg-cream text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                  : 'bg-white text-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:bg-cream'
              }`}
            >
              <MessageSquare className="w-2.5 h-2.5 inline-block mr-0.5" />
              PROMPT
            </button>
          </div>

          {/* Contenu des onglets */}
          <div className="space-y-1.5 sm:space-y-1.5">
            {activeTab === 'modele' && (
              <div className="space-y-1.5 sm:space-y-1.5">

                {/* Type de mannequin */}
                <div>
                  <h3 className="font-display font-bold text-xs sm:text-[11px] text-black mb-1">{t('modele.mannequinType.title')}</h3>
                  <div className="grid grid-cols-2 gap-1">
                    <button
                      onClick={() => updateConfig('mannequinType', 'humain')}
                      className={`p-1 sm:p-1 border-2 sm:border-2 border-black font-display font-bold text-[10px] sm:text-[10px] shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
                        config.mannequinType === 'humain'
                          ? 'bg-vinted text-white'
                          : 'bg-white text-black hover:bg-cream'
                      }`}
                    >
                      {t('modele.mannequinType.options.humain')}
                    </button>
                    <button
                      onClick={() => updateConfig('mannequinType', 'mannequin-plastique')}
                      className={`p-1 sm:p-1 border-2 sm:border-2 border-black font-display font-bold text-[10px] sm:text-[10px] shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
                        config.mannequinType === 'mannequin-plastique'
                          ? 'bg-black text-white'
                          : 'bg-white text-black hover:bg-cream'
                      }`}
                    >
                      {t('modele.mannequinType.options.mannequin-plastique')}
                    </button>
                  </div>
                </div>

                {/* Genre */}
                <div>
                  <h3 className="font-display font-bold text-xs sm:text-[11px] text-black mb-1">
                    {config.mannequinType === 'mannequin-plastique'
                      ? t('modele.genre.titleMannequin')
                      : t('modele.genre.title')}
                  </h3>
                  <div className="grid grid-cols-2 gap-1">
                    {[
                      { id: 'femme', label: t('modele.genre.options.femme') },
                      { id: 'homme', label: t('modele.genre.options.homme') }
                    ].map((gender) => (
                      <button
                        key={gender.id}
                        onClick={() => updateConfig('gender', gender.id)}
                        className={`p-1 sm:p-1 border-2 sm:border-2 border-black font-display font-bold text-[10px] sm:text-[10px] shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
                          config.gender === gender.id
                            ? config.mannequinType === 'mannequin-plastique'
                              ? 'bg-black text-white'
                              : 'bg-mint text-black'
                            : 'bg-white text-black hover:bg-cream'
                        }`}
                      >
                        {gender.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Options spécifiques au modèle humain */}
                {config.mannequinType === 'humain' && (
                  <>
                    {/* Carnation */}
                    <div>
                      <h3 className="font-display font-bold text-xs sm:text-[11px] text-black mb-1">{t('modele.carnation.title')}</h3>
                      <div className="grid grid-cols-4 gap-1">
                        {[
                          { id: 'claire', label: t('modele.carnation.options.claire'), color: '#F5DEB3' },
                          { id: 'medium', label: t('modele.carnation.options.medium'), color: '#DEB887' },
                          { id: 'mate', label: t('modele.carnation.options.mate'), color: '#D2B48C' },
                          { id: 'foncee', label: t('modele.carnation.options.foncee'), color: '#8B4513' }
                        ].map((carnation) => (
                          <button
                            key={carnation.id}
                            onClick={() => updateConfig('carnation', carnation.id)}
                            className={`p-0.5 sm:p-0.5 border-2 border-black font-display font-bold shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center gap-0.5 transition-all duration-200 ${
                              config.carnation === carnation.id
                                ? 'bg-pink-pastel text-black'
                                : 'bg-white text-black hover:bg-cream'
                            }`}
                          >
                            <div
                              className="w-4 h-4 sm:w-4 sm:h-4 border-2 border-black"
                              style={{ backgroundColor: carnation.color }}
                            ></div>
                            <span className="text-[8px] sm:text-[8px] leading-tight">{carnation.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Morphologie + Âge sur la même ligne */}
                    <div className="grid grid-cols-2 gap-1.5">
                      {/* Morphologie */}
                      <div>
                        <h3 className="font-display font-bold text-xs sm:text-[11px] text-black mb-1">{t('modele.morphology.title')}</h3>
                        <div className="grid grid-cols-3 gap-0.5">
                          {[
                            { id: 'S', label: t('modele.morphology.options.s') },
                            { id: 'M', label: t('modele.morphology.options.m') },
                            { id: 'L', label: t('modele.morphology.options.l') }
                          ].map((size) => (
                            <button
                              key={size.id}
                              onClick={() => updateConfig('morphology', size.id)}
                              className={`p-0.5 sm:p-0.5 border-2 border-black font-display font-bold text-[10px] sm:text-[10px] shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
                                config.morphology === size.id
                                  ? 'bg-mint text-black'
                                  : 'bg-white text-black hover:bg-cream'
                              }`}
                            >
                              {size.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Âge - Liste déroulante */}
                      <div>
                        <h3 className="font-display font-bold text-xs sm:text-[11px] text-black mb-1">{t('modele.age.title')}</h3>
                        <div className="relative">
                          <select
                            value={config.age}
                            onChange={(e) => updateConfig('age', e.target.value)}
                            className="w-full p-1 sm:p-1 bg-white border-2 sm:border-2 border-black font-display font-bold text-[10px] sm:text-[10px] text-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] focus:outline-none transition-all duration-200 appearance-none cursor-pointer"
                          >
                            <option value="auto">{t('modele.age.options.auto')}</option>
                            <option value="18-25">{t('modele.age.options.18-25')}</option>
                            <option value="26-35">{t('modele.age.options.26-35')}</option>
                            <option value="36-50">{t('modele.age.options.36-50')}</option>
                          </select>
                          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                            <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-transparent border-t-black"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Mode Visage */}
                    <div>
                      <h3 className="font-display font-bold text-xs sm:text-[11px] text-black mb-1">{t('modele.faceMode.title')}</h3>
                      <div className="grid grid-cols-3 gap-1">
                        {[
                          { id: 'visible', label: t('modele.faceMode.options.visible') },
                          { id: 'blur', label: t('modele.faceMode.options.blur') },
                          { id: 'phone', label: t('modele.faceMode.options.phone') }
                        ].map((mode) => (
                          <button
                            key={mode.id}
                            onClick={() => updateConfig('faceMode', mode.id)}
                            className={`p-1 sm:p-1 border-2 sm:border-2 border-black font-display font-bold text-[10px] sm:text-[10px] shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
                              config.faceMode === mode.id
                                ? 'bg-vinted text-white'
                                : 'bg-white text-black hover:bg-cream'
                            }`}
                          >
                            {mode.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Découpage de la tête */}
                    <div>
                      <h3 className="font-display font-bold text-xs sm:text-[11px] text-black mb-1">{t('modele.cropHead.title')}</h3>
                      <div className="grid grid-cols-2 gap-1">
                        <button
                          onClick={() => updateConfig('cropHead', false)}
                          className={`p-1 sm:p-1 border-2 sm:border-2 border-black font-display font-bold text-[10px] sm:text-[10px] shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
                            !config.cropHead
                              ? 'bg-mint text-black'
                              : 'bg-white text-black hover:bg-cream'
                          }`}
                        >
                          {t('modele.cropHead.options.keep')}
                        </button>
                        <button
                          onClick={() => updateConfig('cropHead', true)}
                          className={`p-1 sm:p-1 border-2 sm:border-2 border-black font-display font-bold text-[10px] sm:text-[10px] shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
                            config.cropHead
                              ? 'bg-pink-pastel text-black'
                              : 'bg-white text-black hover:bg-cream'
                          }`}
                        >
                          {t('modele.cropHead.options.remove')}
                        </button>
                      </div>
                    </div>
                  </>
                )}

              </div>
            )}

            {activeTab === 'style' && (
              <div className="space-y-2 sm:space-y-3">

                {/* Type de vêtement */}
                <div>
                  <h3 className="font-display font-bold text-xs sm:text-sm text-black mb-1.5">{t('style.clothingType.title')}</h3>
                  <div className="relative">
                    <select
                      value={config.clothingType}
                      onChange={(e) => updateConfig('clothingType', e.target.value)}
                      className="w-full p-1.5 sm:p-2 bg-white border-2 sm:border-3 border-black font-display font-bold text-[10px] sm:text-xs text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none transition-all duration-200 appearance-none cursor-pointer"
                    >
                      <option value="auto">{t('style.clothingType.options.auto')}</option>
                      <option value="t-shirt">{t('style.clothingType.options.t-shirt')}</option>
                      <option value="chemise">{t('style.clothingType.options.chemise')}</option>
                      <option value="pull">{t('style.clothingType.options.pull')}</option>
                      <option value="veste">{t('style.clothingType.options.veste')}</option>
                      <option value="manteau">{t('style.clothingType.options.manteau')}</option>
                      <option value="pantalon">{t('style.clothingType.options.pantalon')}</option>
                      <option value="jupe">{t('style.clothingType.options.jupe')}</option>
                      <option value="robe">{t('style.clothingType.options.robe')}</option>
                      <option value="short">{t('style.clothingType.options.short')}</option>
                      <option value="chaussures">{t('style.clothingType.options.chaussures')}</option>
                    </select>
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-transparent border-t-black"></div>
                    </div>
                  </div>
                </div>

                {/* Posture + Angle sur la même ligne */}
                <div className="grid grid-cols-2 gap-2">
                  {/* Posture */}
                  <div>
                    <h3 className="font-display font-bold text-xs sm:text-sm text-black mb-1.5">{t('style.posture.title')}</h3>
                    <div className="relative">
                      <select
                        value={config.posture}
                        onChange={(e) => updateConfig('posture', e.target.value)}
                        className="w-full p-1.5 sm:p-2 bg-white border-2 sm:border-3 border-black font-display font-bold text-[10px] sm:text-xs text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none transition-all duration-200 appearance-none cursor-pointer"
                      >
                        <option value="debout">{t('style.posture.options.debout')}</option>
                        <option value="cambre">{t('style.posture.options.cambre')}</option>
                        <option value="accroupi">{t('style.posture.options.accroupi')}</option>
                        <option value="assis">{t('style.posture.options.assis')}</option>
                      </select>
                      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-transparent border-t-black"></div>
                      </div>
                    </div>
                  </div>

                  {/* Angle */}
                  <div>
                    <h3 className="font-display font-bold text-xs sm:text-sm text-black mb-1.5">{t('style.angle.title')}</h3>
                    <div className="relative">
                      <select
                        value={config.angle}
                        onChange={(e) => updateConfig('angle', e.target.value)}
                        className="w-full p-1.5 sm:p-2 bg-white border-2 sm:border-3 border-black font-display font-bold text-[10px] sm:text-xs text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none transition-all duration-200 appearance-none cursor-pointer"
                      >
                        <option value="face">{t('style.angle.options.face')}</option>
                        <option value="3-4">{t('style.angle.options.3-4')}</option>
                        <option value="profil">{t('style.angle.options.profil')}</option>
                        <option value="auto">{t('style.angle.options.auto')}</option>
                      </select>
                      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-transparent border-t-black"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cadrage */}
                <div>
                  <h3 className="font-display font-bold text-xs sm:text-sm text-black mb-1.5">{t('style.framing.title')}</h3>
                  <div className="grid grid-cols-2 gap-1.5">
                    {[
                      { id: 'corps-entier', label: t('style.framing.options.corps-entier') },
                      { id: 'plan-rapproche', label: t('style.framing.options.plan-rapproche') }
                    ].map((framing) => (
                      <button
                        key={framing.id}
                        onClick={() => updateConfig('framing', framing.id)}
                        className={`p-1.5 sm:p-2 border-2 sm:border-3 border-black font-display font-bold text-[10px] sm:text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
                          config.framing === framing.id
                            ? 'bg-pink-pastel text-black'
                            : 'bg-white text-black hover:bg-cream'
                        }`}
                      >
                        {framing.label}
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {activeTab === 'environnement' && (
              <div className="space-y-2 sm:space-y-3">

                {/* Fonds Unis */}
                <div>
                  <h3 className="font-display font-bold text-xs sm:text-sm text-black mb-1.5">{t('environnement.fondsUnis.title')}</h3>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[
                      { id: 'fond-blanc', label: t('environnement.decor.options.fond-blanc') },
                      { id: 'fond-gris', label: t('environnement.decor.options.fond-gris') },
                      { id: 'fond-beige', label: t('environnement.decor.options.fond-beige') }
                    ].map((fond) => (
                      <button
                        key={fond.id}
                        onClick={() => updateConfig('decor', fond.id)}
                        className={`p-1.5 sm:p-2 border-2 sm:border-3 border-black font-display font-bold text-[10px] sm:text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
                          config.decor === fond.id
                            ? 'bg-vinted text-white'
                            : 'bg-white text-black hover:bg-cream'
                        }`}
                      >
                        {fond.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Décors */}
                <div>
                  <h3 className="font-display font-bold text-xs sm:text-sm text-black mb-1.5">{t('environnement.decors.title')}</h3>
                  <div className="grid grid-cols-2 gap-1.5">
                    {[
                      { id: 'studio-pro', label: t('environnement.decor.options.studio-pro') },
                      { id: 'chambre-moderne', label: t('environnement.decor.options.chambre-moderne') },
                      { id: 'chambre-cosy', label: t('environnement.decor.options.chambre-cosy') },
                      { id: 'mur-brique', label: t('environnement.decor.options.mur-brique') },
                      { id: 'exterieur', label: t('environnement.decor.options.exterieur') }
                    ].map((decor) => (
                      <button
                        key={decor.id}
                        onClick={() => updateConfig('decor', decor.id)}
                        className={`p-1.5 sm:p-2 border-2 sm:border-3 border-black font-display font-bold text-[10px] sm:text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
                          config.decor === decor.id
                            ? 'bg-mint text-black'
                            : 'bg-white text-black hover:bg-cream'
                        }`}
                      >
                        {decor.label}
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {activeTab === 'instructions' && (
              <div className="space-y-2 sm:space-y-3">

                {/* Description */}
                <div className="flex items-center gap-1.5 mb-1">
                  <MessageSquare className="w-3.5 h-3.5 text-vinted" />
                  <h3 className="font-display font-bold text-xs sm:text-[11px] text-black">Instructions personnalisees</h3>
                </div>
                <p className="font-body text-[9px] sm:text-[10px] text-gray-500 -mt-1">
                  Ajoutez des details supplementaires pour personnaliser la generation IA.
                </p>

                {/* Textarea */}
                <div>
                  <textarea
                    value={config.customPrompt}
                    onChange={(e) => {
                      if (e.target.value.length <= 250) {
                        updateConfig('customPrompt', e.target.value);
                      }
                    }}
                    placeholder="Ex: lunettes de soleil, sac a main noir, fond urbain moderne, cheveux longs..."
                    className="w-full p-2 sm:p-2.5 bg-white border-2 border-black font-body text-[10px] sm:text-xs text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 resize-none"
                    rows={3}
                    maxLength={250}
                  />
                  <div className="flex justify-end mt-0.5">
                    <span className={`font-display font-bold text-[9px] ${config.customPrompt.length >= 230 ? 'text-red-500' : 'text-gray-400'}`}>
                      {config.customPrompt.length}/250
                    </span>
                  </div>
                </div>

                {/* Suggestions */}
                <div>
                  <h3 className="font-display font-bold text-[10px] sm:text-[11px] text-black mb-1.5">Suggestions</h3>
                  <div className="flex flex-wrap gap-1">
                    {[
                      'lunettes de soleil',
                      'sac a main',
                      'sourire',
                      'cheveux longs',
                      'tatouage bras',
                      'bijoux dores',
                      'fond urbain',
                      'pose dynamique',
                      'eclairage doux',
                      'style streetwear'
                    ].map((suggestion) => {
                      const currentPrompt = config.customPrompt;
                      const newText = currentPrompt
                        ? `${currentPrompt}, ${suggestion}`
                        : suggestion;
                      const wouldExceed = newText.length > 250;

                      return (
                        <button
                          key={suggestion}
                          onClick={() => {
                            if (!wouldExceed) {
                              updateConfig('customPrompt', newText);
                            }
                          }}
                          disabled={wouldExceed}
                          className={`px-1.5 py-0.5 border-2 border-black font-body font-semibold text-[9px] sm:text-[10px] transition-all duration-200 ${
                            wouldExceed
                              ? 'bg-gray-100 text-gray-300 border-gray-300 cursor-not-allowed'
                              : 'bg-white text-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:bg-cream hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                          }`}
                        >
                          + {suggestion}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Clear button */}
                {config.customPrompt && (
                  <button
                    onClick={() => updateConfig('customPrompt', '')}
                    className="w-full p-1 border-2 border-black bg-pink-pastel font-display font-bold text-[10px] text-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                  >
                    Effacer les instructions
                  </button>
                )}

              </div>
            )}
          </div>

          {/* Bouton validation */}
          <div className="pt-1 sm:pt-1">
            <button
              onClick={validateConfig}
              className={`w-full flex items-center justify-center gap-1 px-2 py-1 sm:py-1.5 font-display font-bold border-2 sm:border-2 border-black text-[10px] sm:text-xs transition-all duration-200 ${
                isValidated
                  ? 'bg-mint text-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]'
                  : 'bg-vinted text-white shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
              }`}
            >
              <Check className="w-3 h-3 sm:w-3 sm:h-3" />
              {isValidated ? t('validation.validated') : t('validation.validate')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};