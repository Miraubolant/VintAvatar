import React, { useState, useEffect } from 'react';
import { X, Sparkles, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
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
  season: string;
  clothingType: string;
  showPhone: boolean;
  cropHead: boolean;
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
    morphology: 'M',
    age: 'auto',
    posture: 'debout',
    angle: 'face',
    framing: 'corps-entier',
    decor: 'studio-pro',
    lighting: 'studio',
    season: 'auto',
    clothingType: 'auto',
    showPhone: false,
    cropHead: false
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
  const [activeTab, setActiveTab] = useState<'modele' | 'style' | 'environnement'>('modele');

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

  const updateConfig = (key: keyof AvatarConfig, value: string) => {
    const newConfig = { ...config, [key]: value, mannequinType: 'humain' };
    setConfig(newConfig);
    saveConfig(newConfig);
    setIsValidated(false);
  };

  const validateConfig = () => {
    setIsValidated(true);
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
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50" style={{ touchAction: 'none' }}>
      <div className="h-full overflow-y-auto">
        <div className="flex items-start justify-center pt-32 pb-8 px-4">
          <div className="relative w-full max-w-lg md:max-w-xl bg-cream border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        
            {/* Header avec bouton fermer */}
            <div className="bg-vinted border-b-4 border-black p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-mint border-2 border-black transform rotate-12 flex items-center justify-center shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                  <Sparkles className="w-3 h-3 text-black" />
                </div>
                <h2 className="font-display font-bold text-lg text-white">{t('title')}</h2>
              </div>
              <button
                onClick={onClose}
                className="w-7 h-7 bg-pink-pastel border-2 border-black flex items-center justify-center shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform hover:rotate-90 transition-all duration-300"
              >
                <X className="w-3 h-3 text-black" />
              </button>
            </div>

        <div className="p-3 space-y-3">
          
          {/* Affichage des crédits */}
          {user && stats && !loading && (
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-mint border-4 border-black text-black font-display font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
                <Sparkles className="w-4 h-4 text-vinted" />
                <div className="text-center">
                  {/* Crédits des packs */}
                  {stats.total_credits_remaining > 0 && (
                    <div>{stats.total_credits_remaining} CRÉDITS RESTANTS</div>
                  )}
                  
                  {/* Générations d'abonnement */}
                  {stats.has_active_monthly && (
                    <div>{stats.monthly_generations_used}/{stats.monthly_limit} GÉNÉRATIONS UTILISÉES CE MOIS</div>
                  )}
                  
                  {/* Message si aucun crédit */}
                  {stats.total_credits_remaining === 0 && !stats.has_active_monthly && (
                    <div>AUCUN CRÉDIT DISPONIBLE</div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Onglets de navigation */}
          <div className="flex border-b-4 border-black mb-4">
            <button
              onClick={() => setActiveTab('modele')}
              className={`flex-1 p-2 font-display font-bold text-xs transition-all duration-200 ${
                activeTab === 'modele'
                  ? 'bg-vinted text-white border-r-4 border-black transform -rotate-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                  : 'bg-white text-black border-r-2 border-black hover:bg-cream'
              }`}
            >
              {t('tabs.modele')}
            </button>
            <button
              onClick={() => setActiveTab('style')}
              className={`flex-1 p-2 font-display font-bold text-xs transition-all duration-200 ${
                activeTab === 'style'
                  ? 'bg-vinted text-white border-r-4 border-black transform rotate-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                  : 'bg-white text-black border-r-2 border-black hover:bg-cream'
              }`}
            >
              {t('tabs.style')}
            </button>
            <button
              onClick={() => setActiveTab('environnement')}
              className={`flex-1 p-2 font-display font-bold text-xs transition-all duration-200 ${
                activeTab === 'environnement'
                  ? 'bg-vinted text-white transform -rotate-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                  : 'bg-white text-black hover:bg-cream'
              }`}
            >
              {t('tabs.environnement')}
            </button>
          </div>

          {/* Contenu des onglets */}
          <div className="space-y-4">
            {activeTab === 'modele' && (
              <div className="space-y-4">
                
                {/* Genre */}
                <div>
                  <h3 className="font-display font-bold text-sm text-black mb-2">{t('modele.genre.title')}</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'femme', label: t('modele.genre.options.femme') },
                      { id: 'homme', label: t('modele.genre.options.homme') },
                      { id: 'auto', label: t('modele.genre.options.auto') }
                    ].map((gender) => (
                      <button
                        key={gender.id}
                        onClick={() => updateConfig('gender', gender.id)}
                        className={`p-2 border-3 border-black font-display font-bold text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
                          config.gender === gender.id
                            ? 'bg-mint text-black transform -rotate-1 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                            : 'bg-white text-black hover:bg-cream hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                        }`}
                      >
                        {gender.label}
                      </button>
                    ))}
                  </div>
                </div>


                {/* Carnation */}
                <div>
                  <h3 className="font-display font-bold text-sm text-black mb-2">{t('modele.carnation.title')}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'claire', label: t('modele.carnation.options.claire'), color: '#F5DEB3' },
                      { id: 'medium', label: t('modele.carnation.options.medium'), color: '#DEB887' },
                      { id: 'mate', label: t('modele.carnation.options.mate'), color: '#D2B48C' },
                      { id: 'foncee', label: t('modele.carnation.options.foncee'), color: '#8B4513' }
                    ].map((carnation) => (
                      <button
                        key={carnation.id}
                        onClick={() => updateConfig('carnation', carnation.id)}
                        className={`p-2 border-3 border-black font-display font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 transition-all duration-200 ${
                          config.carnation === carnation.id
                            ? 'bg-pink-pastel text-black transform -rotate-1 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                            : 'bg-white text-black hover:bg-cream hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                        }`}
                      >
                        <div 
                          className="w-5 h-5 border-2 border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
                          style={{ backgroundColor: carnation.color }}
                        ></div>
                        <span className="text-xs">{carnation.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Morphologie */}
                <div>
                  <h3 className="font-display font-bold text-sm text-black mb-2">{t('modele.morphology.title')}</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'S', label: t('modele.morphology.options.s') },
                      { id: 'M', label: t('modele.morphology.options.m') },
                      { id: 'L', label: t('modele.morphology.options.l') }
                    ].map((size) => (
                      <button
                        key={size.id}
                        onClick={() => updateConfig('morphology', size.id)}
                        className={`p-2 border-3 border-black font-display font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
                          config.morphology === size.id
                            ? 'bg-mint text-black transform rotate-1 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                            : 'bg-white text-black hover:bg-cream hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                        }`}
                      >
                        {size.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Âge */}
                <div>
                  <h3 className="font-display font-bold text-sm text-black mb-2">{t('modele.age.title')}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'auto', label: t('modele.age.options.auto') },
                      { id: '18-25', label: t('modele.age.options.18-25') },
                      { id: '26-35', label: t('modele.age.options.26-35') },
                      { id: '36-50', label: t('modele.age.options.36-50') }
                    ].map((age) => (
                      <button
                        key={age.id}
                        onClick={() => updateConfig('age', age.id)}
                        className={`p-2 border-3 border-black font-display font-bold text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
                          config.age === age.id
                            ? 'bg-pink-pastel text-black transform -rotate-1 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                            : 'bg-white text-black hover:bg-cream hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                        }`}
                      >
                        {age.label}
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {activeTab === 'style' && (
              <div className="space-y-4">

                {/* Type de vêtement */}
                <div>
                  <h3 className="font-display font-bold text-sm text-black mb-2">{t('style.clothingType.title')}</h3>
                  <div className="relative">
                    <select
                      value={config.clothingType}
                      onChange={(e) => updateConfig('clothingType', e.target.value)}
                      className="w-full p-3 bg-white border-3 border-black font-display font-bold text-sm text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:translate-x-[-1px] focus:translate-y-[-1px] focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 appearance-none cursor-pointer"
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
                    {/* Flèche personnalisée */}
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                    </div>
                  </div>
                </div>

                {/* Posture */}
                <div>
                  <h3 className="font-display font-bold text-sm text-black mb-2">{t('style.posture.title')}</h3>
                  <div className="relative">
                    <select
                      value={config.posture}
                      onChange={(e) => updateConfig('posture', e.target.value)}
                      className="w-full p-3 bg-white border-3 border-black font-display font-bold text-sm text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:translate-x-[-1px] focus:translate-y-[-1px] focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 appearance-none cursor-pointer"
                    >
                      <option value="debout">{t('style.posture.options.debout')}</option>
                      <option value="cambre">{t('style.posture.options.cambre')}</option>
                      <option value="accroupi">{t('style.posture.options.accroupi')}</option>
                      <option value="assis">{t('style.posture.options.assis')}</option>
                    </select>
                    {/* Flèche personnalisée */}
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                    </div>
                  </div>
                </div>

                {/* Angle */}
                <div>
                  <h3 className="font-display font-bold text-sm text-black mb-2">{t('style.angle.title')}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'face', label: t('style.angle.options.face') },
                      { id: '3-4', label: t('style.angle.options.3-4') },
                      { id: 'profil', label: t('style.angle.options.profil') },
                      { id: 'auto', label: t('style.angle.options.auto') }
                    ].map((angle) => (
                      <button
                        key={angle.id}
                        onClick={() => updateConfig('angle', angle.id)}
                        className={`p-2 border-3 border-black font-display font-bold text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
                          config.angle === angle.id
                            ? 'bg-mint text-black transform rotate-1 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                            : 'bg-white text-black hover:bg-cream hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                        }`}
                      >
                        {angle.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Cadrage */}
                <div>
                  <h3 className="font-display font-bold text-sm text-black mb-2">{t('style.framing.title')}</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      { id: 'corps-entier', label: t('style.framing.options.corps-entier') },
                      { id: 'plan-rapproche', label: t('style.framing.options.plan-rapproche') }
                    ].map((framing) => (
                      <button
                        key={framing.id}
                        onClick={() => updateConfig('framing', framing.id)}
                        className={`p-2 border-3 border-black font-display font-bold text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
                          config.framing === framing.id
                            ? 'bg-pink-pastel text-black transform -rotate-1 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                            : 'bg-white text-black hover:bg-cream hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
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
              <div className="space-y-4">

                {/* Décor */}
                <div>
                  <h3 className="font-display font-bold text-sm text-black mb-2">{t('environnement.decor.title')}</h3>
                  <div className="relative">
                    <select
                      value={config.decor}
                      onChange={(e) => updateConfig('decor', e.target.value)}
                      className="w-full p-3 bg-white border-3 border-black font-display font-bold text-sm text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:translate-x-[-1px] focus:translate-y-[-1px] focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 appearance-none cursor-pointer"
                    >
                      <option value="studio-pro">{t('environnement.decor.options.studio-pro')}</option>
                      <option value="chambre">{t('environnement.decor.options.chambre')}</option>
                      <option value="cabine">{t('environnement.decor.options.cabine')}</option>
                      <option value="exterieur">{t('environnement.decor.options.exterieur')}</option>
                    </select>
                    {/* Flèche personnalisée */}
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                    </div>
                  </div>
                </div>

                {/* Éclairage */}
                <div>
                  <h3 className="font-display font-bold text-sm text-black mb-2">{t('environnement.lighting.title')}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'studio', label: t('environnement.lighting.options.studio') },
                      { id: 'naturel', label: t('environnement.lighting.options.naturel') },
                      { id: 'dramatique', label: t('environnement.lighting.options.dramatique') },
                      { id: 'doux', label: t('environnement.lighting.options.doux') }
                    ].map((lighting) => (
                      <button
                        key={lighting.id}
                        onClick={() => updateConfig('lighting', lighting.id)}
                        className={`p-2 border-3 border-black font-display font-bold text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
                          config.lighting === lighting.id
                            ? 'bg-mint text-black transform rotate-1 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                            : 'bg-white text-black hover:bg-cream hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                        }`}
                      >
                        {lighting.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Saison */}
                <div>
                  <h3 className="font-display font-bold text-sm text-black mb-2">{t('environnement.season.title')}</h3>
                  <div className="relative">
                    <select
                      value={config.season}
                      onChange={(e) => updateConfig('season', e.target.value)}
                      className="w-full p-3 bg-white border-3 border-black font-display font-bold text-sm text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:translate-x-[-1px] focus:translate-y-[-1px] focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 appearance-none cursor-pointer"
                    >
                      <option value="auto">{t('environnement.season.options.auto')}</option>
                      <option value="printemps">{t('environnement.season.options.printemps')}</option>
                      <option value="ete">{t('environnement.season.options.ete')}</option>
                      <option value="automne">{t('environnement.season.options.automne')}</option>
                      <option value="hiver">{t('environnement.season.options.hiver')}</option>
                    </select>
                    {/* Flèche personnalisée */}
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                    </div>
                  </div>
                </div>

                {/* Découpage de la tête */}
                <div>
                  <h3 className="font-display font-bold text-sm text-black mb-2">{t('environnement.cropHead.title')}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => updateConfig('cropHead', false)}
                      className={`p-2 border-3 border-black font-display font-bold text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
                        !config.cropHead
                          ? 'bg-mint text-black transform -rotate-1 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                          : 'bg-white text-black hover:bg-cream hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                      }`}
                    >
                      {t('environnement.cropHead.options.keep')}
                    </button>
                    <button
                      onClick={() => updateConfig('cropHead', true)}
                      className={`p-2 border-3 border-black font-display font-bold text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
                        config.cropHead
                          ? 'bg-pink-pastel text-black transform rotate-1 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                          : 'bg-white text-black hover:bg-cream hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                      }`}
                    >
                      {t('environnement.cropHead.options.remove')}
                    </button>
                  </div>
                </div>

              </div>
            )}
          </div>

          {/* Bouton validation */}
          <div className="pt-2">
            <button
              onClick={validateConfig}
              className={`w-full flex items-center justify-center gap-2 px-4 py-2 font-display font-bold border-3 border-black text-sm transition-all duration-200 ${
                isValidated
                  ? 'bg-mint text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transform rotate-1'
                  : 'bg-vinted text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
              }`}
            >
              <Check className="w-4 h-4" />
              {isValidated ? t('validation.validated') : t('validation.validate')}
            </button>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};