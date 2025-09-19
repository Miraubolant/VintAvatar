import React, { useState } from 'react';
import { Sparkles, Zap, Download, AlertTriangle } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useSubscription } from '../hooks/useSubscription';

export const ImageGenerator: React.FC = () => {
  const [selectedGender, setSelectedGender] = useState('femme');
  const [selectedMannequinType, setSelectedMannequinType] = useState('humain');
  const [selectedCarnation, setSelectedCarnation] = useState('claire');
  const [selectedMorphology, setSelectedMorphology] = useState('M');
  const [selectedPosture, setSelectedPosture] = useState('debout');
  const [selectedDecor, setSelectedDecor] = useState('studio-pro');
  const [isGenerating, setIsGenerating] = useState(false);

  const { user } = useAuth();
  const { subscription, canGenerate, useCredit, loading } = useSubscription();

  const handleGenerate = async () => {
    if (!user) {
      alert('Veuillez vous connecter pour générer un avatar.');
      return;
    }

    if (!canGenerate) {
      alert('Vous n\'avez plus de crédits disponibles. Veuillez acheter un pack ou un abonnement.');
      return;
    }

    setIsGenerating(true);
    
    try {
      // Utiliser un crédit
      const success = await useCredit();
      if (!success) {
        alert('Erreur lors de l\'utilisation du crédit.');
        return;
      }

      // Simuler la génération d'image (remplacer par l'API réelle)
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      alert('Avatar généré avec succès ! (Simulation - fonctionnalité en développement)');
    } catch (error) {
      console.error('Error generating avatar:', error);
      alert('Erreur lors de la génération de l\'avatar.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section id="generateur" className="relative py-20 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(59,130,246,0.1)_35%,rgba(59,130,246,0.1)_65%,transparent_65%),linear-gradient(-45deg,transparent_35%,rgba(59,130,246,0.1)_35%,rgba(59,130,246,0.1)_65%,transparent_65%)] bg-[size:60px_60px]"></div>
      </div>
      
      {/* Carrés décoratifs flottants */}
      <div className="absolute top-10 left-20 w-12 h-12 bg-blue-300 border-4 border-slate-900 transform rotate-45 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]"></div>
      <div className="absolute top-40 right-10 w-16 h-16 bg-green-300 border-4 border-slate-900 transform -rotate-12 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]"></div>
      <div className="absolute bottom-20 left-10 w-10 h-10 bg-yellow-300 border-3 border-slate-900 transform rotate-12 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]"></div>
      <div className="absolute bottom-40 right-32 w-8 h-8 bg-pink-300 border-2 border-slate-900 transform -rotate-45 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]"></div>
      <div className="absolute top-1/2 left-5 w-6 h-6 bg-purple-300 border-2 border-slate-900 rounded-full shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre de section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border-4 border-slate-900 text-slate-900 font-black mb-6 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]">
            <Zap className="w-5 h-5 text-blue-500" />
            GÉNÉRATEUR D'AVATAR
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-slate-900 mb-6">
            CONFIGURE TON AVATAR
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto mb-6">
            Personnalise ton avatar virtuel pour des photos parfaites !
          </p>
          
          {/* Affichage des crédits */}
          {user && subscription && !loading && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 border-4 border-slate-900 text-slate-900 font-black shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]">
              <Sparkles className="w-4 h-4 text-yellow-500" />
              {subscription.plan_type === 'credits' ? (
                `${subscription.credits_remaining} CRÉDITS RESTANTS`
              ) : (
                `${subscription.monthly_limit - subscription.monthly_generations_used}/${subscription.monthly_limit} GÉNÉRATIONS CE MOIS`
              )}
            </div>
          )}

          {/* Message si pas de crédits */}
          {user && subscription && !canGenerate && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 border-4 border-slate-900 text-slate-900 font-black shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] mt-4">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              PLUS DE CRÉDITS ! ACHETEZ UN PACK
            </div>
          )}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-slate-900 p-8 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]">
              
              {/* Genre */}
              <div className="mb-8">
                <h3 className="text-xl font-black text-slate-900 mb-4">
                  CHOISIR LE GENRE
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { id: 'femme', label: 'FEMME' },
                    { id: 'homme', label: 'HOMME' },
                    { id: 'auto', label: 'AUTO' }
                  ].map((gender) => (
                    <button
                      key={gender.id}
                      onClick={() => setSelectedGender(gender.id)}
                      className={`p-4 border-4 border-slate-900 font-black shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] ${
                        selectedGender === gender.id
                          ? 'bg-green-300 text-slate-900'
                          : 'bg-white text-slate-700'
                      }`}
                    >
                      {gender.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Type de mannequin */}
              <div className="mb-8">
                <h3 className="text-xl font-black text-slate-900 mb-4">
                  CHOISIR LE TYPE DE MANNEQUIN
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { id: 'humain', label: 'HUMAIN' },
                    { id: 'mannequin', label: 'MANNEQUIN DE PRÉSENTATION' }
                  ].map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedMannequinType(type.id)}
                      className={`p-4 border-4 border-slate-900 font-black shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] ${
                        selectedMannequinType === type.id
                          ? 'bg-blue-300 text-slate-900'
                          : 'bg-white text-slate-700'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Carnation */}
              <div className="mb-8">
                <h3 className="text-xl font-black text-slate-900 mb-4">
                  SÉLECTIONNER LA CARNATION
                </h3>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { id: 'claire', label: 'CLAIRE', color: '#F5DEB3' },
                    { id: 'medium', label: 'MÉDIUM', color: '#DEB887' },
                    { id: 'mate', label: 'MATE', color: '#D2B48C' },
                    { id: 'foncee', label: 'FONCÉE', color: '#8B4513' }
                  ].map((carnation) => (
                    <button
                      key={carnation.id}
                      onClick={() => setSelectedCarnation(carnation.id)}
                      className={`p-3 border-4 border-slate-900 font-black shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] flex flex-col items-center gap-2 ${
                        selectedCarnation === carnation.id
                          ? 'bg-yellow-300 text-slate-900'
                          : 'bg-white text-slate-700'
                      }`}
                    >
                      <div 
                        className="w-8 h-8 border-2 border-slate-900"
                        style={{ backgroundColor: carnation.color }}
                      ></div>
                      <span className="text-xs">{carnation.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Morphologie */}
              <div className="mb-8">
                <h3 className="text-xl font-black text-slate-900 mb-4">
                  CHOISIR LA MORPHOLOGIE
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { id: 'S', label: 'S' },
                    { id: 'M', label: 'M' },
                    { id: 'L', label: 'L' }
                  ].map((size) => (
                    <button
                      key={size.id}
                      onClick={() => setSelectedMorphology(size.id)}
                      className={`p-4 border-4 border-slate-900 font-black shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] ${
                        selectedMorphology === size.id
                          ? 'bg-pink-300 text-slate-900'
                          : 'bg-white text-slate-700'
                      }`}
                    >
                      {size.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Posture */}
              <div className="mb-8">
                <h3 className="text-xl font-black text-slate-900 mb-4">
                  CHOISIR LA POSTURE
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { id: 'debout', label: 'DEBOUT' },
                    { id: 'cambre', label: 'CAMBRÉ' },
                    { id: 'accroupi', label: 'ACCROUPI' },
                    { id: 'assis', label: 'ASSIS' }
                  ].map((posture) => (
                    <button
                      key={posture.id}
                      onClick={() => setSelectedPosture(posture.id)}
                      className={`p-4 border-4 border-slate-900 font-black shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] ${
                        selectedPosture === posture.id
                          ? 'bg-purple-300 text-slate-900'
                          : 'bg-white text-slate-700'
                      }`}
                    >
                      {posture.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Décor */}
              <div className="mb-8">
                <h3 className="text-xl font-black text-slate-900 mb-4">
                  CHOISIR UN DÉCOR
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { id: 'studio-pro', label: 'STUDIO PRO' },
                    { id: 'chambre', label: 'CHAMBRE DÉCONTRACTÉE' },
                    { id: 'cabine', label: 'CABINE D\'ESSAYAGE' },
                    { id: 'exterieur', label: 'EXTÉRIEUR NATUREL' }
                  ].map((decor) => (
                    <button
                      key={decor.id}
                      onClick={() => setSelectedDecor(decor.id)}
                      className={`p-4 border-4 border-slate-900 font-black shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] ${
                        selectedDecor === decor.id
                          ? 'bg-orange-300 text-slate-900'
                          : 'bg-white text-slate-700'
                      }`}
                    >
                      {decor.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bouton de génération simplifié */}
              <button
                onClick={handleGenerate}
                disabled={!user || !canGenerate || isGenerating}
                className={`w-full flex items-center justify-center gap-3 px-8 py-6 font-black border-4 border-slate-900 text-xl transition-all duration-200 ${
                  !user || !canGenerate || isGenerating
                    ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                    : 'bg-blue-500 text-white shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]'
                }`}
              >
                <Sparkles className="w-6 h-6" />
                {isGenerating 
                  ? 'GÉNÉRATION EN COURS...' 
                  : !user
                    ? 'CONNECTEZ-VOUS POUR GÉNÉRER'
                    : !canGenerate
                      ? 'PLUS DE CRÉDITS - ACHETEZ UN PACK'
                      : 'GÉNÉRER MON AVATAR IA'
                }
              </button>
            </div>
          </div>
      </div>
    </section>
  );
};