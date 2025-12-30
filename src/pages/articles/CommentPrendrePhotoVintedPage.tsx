import React from 'react';
import { useSEO } from '../../hooks/useSEO';
import { ArticleNavigation } from '../../components/ArticleNavigation';
import { Sparkles, Sun, Image as ImageIcon, Camera, CheckSquare, Settings, XCircle, Zap, Calendar } from 'lucide-react';

export default function CommentPrendrePhotoVintedPage() {
  useSEO({
    title: "Comment Prendre de Bonnes Photos pour Vinted : Guide Débutant 2025 | VintDress",
    description: "Guide complet pour débutants : comment prendre de bonnes photos pour Vinted. Éclairage, fond, techniques, astuces pro. Vendez plus vite !",
    keywords: "comment prendre photo vinted, photo vinted débutant, bonnes photos vinted, tutoriel photo vinted, vendre vinted débutant",
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image Section */}
      <div className="relative -mt-1 h-[400px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&h=400&fit=crop"
          alt="Comment prendre de bonnes photos pour Vinted"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
              Comment Prendre de Bonnes Photos pour Vinted
            </h1>
            <p className="font-display text-xl md:text-2xl text-white">
              Guide Débutant 2025
            </p>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <ArticleNavigation />

        <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-wrap items-center gap-4 text-sm font-display font-semibold">
            <span className="bg-pink-pastel border-2 border-black px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              Guide Débutant
            </span>
            <span className="text-black">5 Décembre 2025</span>
            <span className="text-black">•</span>
            <span className="text-black">10 min de lecture</span>
            <span className="text-black">•</span>
            <span className="text-black">Par Équipe VintDress</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {['Débutant', 'Photos', 'Vinted', 'Guide', 'Tutoriel'].map((tag) => (
              <span
                key={tag}
                className="bg-mint border-2 border-black px-3 py-1 text-sm font-display font-semibold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Introduction */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <p className="text-lg leading-relaxed mb-6">
            Tu viens de te lancer sur Vinted et tu te demandes pourquoi tes articles ne se vendent pas ?
            Dans 90% des cas, le problème vient des photos. Ce guide complet t'explique tout, étape par étape.
          </p>

          <div className="bg-vinted/10 border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-4">La réalité des chiffres :</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-vinted mr-2">→</span>
                <span>Les acheteurs décident en <strong>3 secondes</strong> si ton article les intéresse</span>
              </li>
              <li className="flex items-start">
                <span className="text-vinted mr-2">→</span>
                <span>Une bonne photo = <strong>5x plus de vues</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-vinted mr-2">→</span>
                <span>Des photos professionnelles = <strong>prix de vente +25%</strong></span>
              </li>
            </ul>
          </div>

          <div className="bg-pink-pastel/30 border-3 border-black p-6 italic">
            <p className="font-semibold">
              "Si le vendeur ne prend pas soin de ses photos, prendra-t-il soin de mon colis ?"
            </p>
            <p className="text-sm mt-2">— Ce que pensent les acheteurs</p>
          </div>
        </div>

        {/* Étape 1 : Préparer le Vêtement */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Sparkles className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Étape 1 : Préparer Ton Vêtement</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-display font-bold text-xl mb-3">Repasser ou Défroisser</h3>
              <p className="mb-3">
                <strong>Pourquoi c'est crucial :</strong> Un vêtement froissé donne l'impression d'être négligé ou de mauvaise qualité.
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Repasse le vêtement avant la photo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Ou utilise un défroisseur vapeur</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Alternative : pends-le dans la salle de bain pendant une douche chaude</span>
                </li>
              </ul>
            </div>

            <div className="bg-cream border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Checklist avant photo :</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 mr-2 text-vinted" />
                  <span>Enlève les poils d'animaux (rouleau adhésif)</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 mr-2 text-vinted" />
                  <span>Vérifie les taches et bouloches</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 mr-2 text-vinted" />
                  <span>Retire les fils qui dépassent</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 mr-2 text-vinted" />
                  <span>Vérifie que tous les boutons sont présents</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Étape 2 : Éclairage */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Sun className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Étape 2 : Choisir le Bon Éclairage</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-vinted/10 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">La Lumière Naturelle (Le Secret N°1)</h3>
              <p className="mb-4"><strong>Pourquoi c'est le meilleur choix :</strong></p>
              <ul className="space-y-2 mb-4 ml-4">
                <li className="flex items-start">
                  <span className="text-vinted mr-2">✓</span>
                  <span>Gratuit et disponible partout</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">✓</span>
                  <span>Montre les vraies couleurs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">✓</span>
                  <span>Donne un rendu professionnel</span>
                </li>
              </ul>
              <p className="font-semibold mb-2">Comment l'utiliser :</p>
              <ol className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="font-bold mr-2">1.</span>
                  <span>Place-toi près d'une grande fenêtre</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">2.</span>
                  <span>Évite le soleil direct (crée des ombres dures)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">3.</span>
                  <span>Préfère un ciel légèrement nuageux</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">4.</span>
                  <span>Photographe entre 10h et 16h</span>
                </li>
              </ol>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Les Erreurs d'Éclairage à Éviter</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Flash du téléphone</strong> : Applati l'image, couleurs fausses</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Lumière jaune des ampoules</strong> : Dénature les couleurs</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Contre-jour</strong> : Vêtement trop sombre</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Ombres marquées</strong> : Cache les détails</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Étape 3 : Le Fond */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <ImageIcon className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Étape 3 : Choisir le Bon Fond</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-vinted/10 border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-4">Top 3 des Backgrounds :</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="font-bold mr-2">1.</span>
                  <div>
                    <p className="font-semibold">Mur blanc</p>
                    <p className="text-sm">Classique, met en valeur toutes les couleurs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="font-bold mr-2">2.</span>
                  <div>
                    <p className="font-semibold">Mur beige/crème</p>
                    <p className="text-sm">Chaleureux, tendance actuelle</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="font-bold mr-2">3.</span>
                  <div>
                    <p className="font-semibold">Sol en bois clair</p>
                    <p className="text-sm">Parfait pour le flat lay</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-4">Backgrounds à proscrire :</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Lit défait ou draps froissés</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Carrelage de salle de bain</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Fond encombré (jouets, affaires...)</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Sol avec taches ou saletés visibles</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Étape 4 : Les 3 Techniques Photo */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Camera className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Étape 4 : Les 3 Techniques Photo</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-cream border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-2">1. Le Flat Lay (À Plat)</h3>
              <p className="text-sm text-gray-600 mb-3">Idéal pour : T-shirts, chemises, accessoires</p>
              <ol className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="font-bold mr-2">1.</span>
                  <span>Pose le vêtement bien à plat</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">2.</span>
                  <span>Arrange les manches de façon symétrique</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">3.</span>
                  <span>Photographie du dessus, téléphone parallèle au sol</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">4.</span>
                  <span>Laisse un peu d'espace autour</span>
                </li>
              </ol>
            </div>

            <div className="bg-cream border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-2">2. Sur Cintre</h3>
              <p className="text-sm text-gray-600 mb-3">Idéal pour : Robes, vestes, manteaux</p>
              <ol className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="font-bold mr-2">1.</span>
                  <span>Utilise un cintre en bois (plus pro)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">2.</span>
                  <span>Accroche à une tringle ou poignée de porte</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">3.</span>
                  <span>Recule suffisamment pour avoir tout le vêtement</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">4.</span>
                  <span>Évite les cintres en plastique coloré</span>
                </li>
              </ol>
            </div>

            <div className="bg-vinted border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-2 text-white">3. La Photo Portée (Game Changer !)</h3>
              <p className="text-white/90 mb-3">
                <strong>Pourquoi c'est LA technique qui vend :</strong>
              </p>
              <ul className="space-y-2 mb-4 text-white">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>L'acheteur visualise le rendu réel</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Montre la coupe et le tombé</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Crée une connexion émotionnelle</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span><strong>+300% de vues en moyenne !</strong></span>
                </li>
              </ul>
              <div className="bg-white border-2 border-black p-4 mb-3">
                <p className="text-black"><strong>Le problème :</strong> Difficile à faire soi-même, besoin d'un modèle...</p>
              </div>
              <div className="bg-mint border-2 border-black p-4">
                <p className="text-black"><strong>La solution :</strong> VintDress génère des photos portées par IA en 30 secondes !</p>
              </div>
            </div>
          </div>
        </div>

        {/* Étape 5 : Les 5 Photos Obligatoires */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Les 5 Photos Obligatoires pour Chaque Annonce</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-cream border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center border-2 border-black">1</span>
                <h3 className="font-display font-bold text-lg">La Photo Principale</h3>
              </div>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Vue de face complète</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Éclairage parfait</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Fond neutre</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span><strong>C'est ELLE qui fait cliquer !</strong></span>
                </li>
              </ul>
            </div>

            <div className="bg-vinted/10 border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center border-2 border-black">2</span>
                <h3 className="font-display font-bold text-lg">La Photo Portée</h3>
              </div>
              <p className="mb-3">
                <strong>Pourquoi elle convertit :</strong> Montre le rendu réel, rassure l'acheteur, se démarque dans le feed.
              </p>
              <p className="bg-mint border-2 border-black p-3 font-semibold text-sm">
                Astuce : Utilise l'IA de VintDress pour la créer facilement
              </p>
            </div>

            <div className="bg-cream border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center border-2 border-black">3</span>
                <h3 className="font-display font-bold text-lg">Les Détails</h3>
              </div>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Texture du tissu</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Motifs de près</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Finitions (coutures, boutons)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Éventuels défauts</span>
                </li>
              </ul>
            </div>

            <div className="bg-cream border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center border-2 border-black">4</span>
                <h3 className="font-display font-bold text-lg">L'Étiquette</h3>
              </div>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Marque visible</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Taille lisible</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Composition si possible</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Prouve l'authenticité</span>
                </li>
              </ul>
            </div>

            <div className="bg-cream border-3 border-black p-6 md:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center border-2 border-black">5</span>
                <h3 className="font-display font-bold text-lg">Vue Arrière</h3>
              </div>
              <p>
                Certains vêtements sont différents devant/derrière. Montre la coupe complète et rassure sur l'état général.
              </p>
            </div>
          </div>
        </div>

        {/* Réglages Téléphone */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Settings className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Les Réglages de Ton Téléphone</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-vinted/10 border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-4">Paramètres Optimaux :</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 mr-2 text-vinted" />
                  <span>Mode HDR activé</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 mr-2 text-vinted" />
                  <span>Grille de composition activée</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 mr-2 text-vinted" />
                  <span>Ratio 4:5 (format Vinted idéal)</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 mr-2 text-vinted" />
                  <span>Flash désactivé</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 mr-2 text-vinted" />
                  <span>Focus sur le vêtement</span>
                </li>
              </ul>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-4">Astuces de Pro :</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-vinted mr-2">→</span>
                  <span>Nettoie l'objectif (trace de doigts = flou)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">→</span>
                  <span>Stabilise ton téléphone (appuie contre un mur)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">→</span>
                  <span>Tapote l'écran pour faire le focus</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">→</span>
                  <span>Prends plusieurs photos et garde la meilleure</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Les 7 Erreurs Fatales */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <XCircle className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Les 7 Erreurs Fatales à Éviter</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-pink-pastel/30 border-3 border-black p-4">
              <div className="flex items-start gap-3">
                <span className="bg-black text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0">1</span>
                <div>
                  <p className="font-semibold">Photos floues</p>
                  <p className="text-sm">-80% de chances de vente</p>
                </div>
              </div>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-4">
              <div className="flex items-start gap-3">
                <span className="bg-black text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0">2</span>
                <div>
                  <p className="font-semibold">Mauvais éclairage</p>
                  <p className="text-sm">Couleurs faussées = retours</p>
                </div>
              </div>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-4">
              <div className="flex items-start gap-3">
                <span className="bg-black text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0">3</span>
                <div>
                  <p className="font-semibold">Fond encombré</p>
                  <p className="text-sm">Distrait l'attention</p>
                </div>
              </div>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-4">
              <div className="flex items-start gap-3">
                <span className="bg-black text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0">4</span>
                <div>
                  <p className="font-semibold">Une seule photo</p>
                  <p className="text-sm">Méfiance des acheteurs</p>
                </div>
              </div>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-4">
              <div className="flex items-start gap-3">
                <span className="bg-black text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0">5</span>
                <div>
                  <p className="font-semibold">Vêtement froissé</p>
                  <p className="text-sm">Impression de négligence</p>
                </div>
              </div>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-4">
              <div className="flex items-start gap-3">
                <span className="bg-black text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0">6</span>
                <div>
                  <p className="font-semibold">Photos dans le miroir</p>
                  <p className="text-sm">Amateur et peu flatteur</p>
                </div>
              </div>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-4 md:col-span-2">
              <div className="flex items-start gap-3">
                <span className="bg-black text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0">7</span>
                <div>
                  <p className="font-semibold">Filtres Instagram</p>
                  <p className="text-sm">Dénature le produit réel</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* L'Alternative IA */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Zap className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl text-white">L'Alternative Révolutionnaire : L'IA</h2>
          </div>

          <div className="bg-white border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-4">Les avantages de VintDress :</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <span className="text-vinted mr-2">✓</span>
                <div>
                  <p className="font-semibold">Photo portée en 30 secondes</p>
                  <p className="text-sm">Gain de temps massif</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-vinted mr-2">✓</span>
                <div>
                  <p className="font-semibold">Qualité professionnelle garantie</p>
                  <p className="text-sm">Rendu impeccable à chaque fois</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-vinted mr-2">✓</span>
                <div>
                  <p className="font-semibold">Pas besoin de modèle</p>
                  <p className="text-sm">L'IA fait tout le travail</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-vinted mr-2">✓</span>
                <div>
                  <p className="font-semibold">Personnalisation complète</p>
                  <p className="text-sm">Morphologie, pose, fond...</p>
                </div>
              </div>
            </div>
            <div className="bg-mint border-3 border-black p-4 mt-6 text-center">
              <p className="font-display font-bold text-2xl">Résultats : +300% de vues !</p>
            </div>
          </div>

          <div className="bg-white border-3 border-black p-6">
            <h3 className="font-display font-bold text-xl mb-4">Comment Ça Marche :</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-vinted text-white font-display font-bold w-12 h-12 flex items-center justify-center mx-auto mb-2 border-2 border-black text-xl">1</div>
                <p className="font-semibold">Upload ta photo</p>
              </div>
              <div className="text-center">
                <div className="bg-vinted text-white font-display font-bold w-12 h-12 flex items-center justify-center mx-auto mb-2 border-2 border-black text-xl">2</div>
                <p className="font-semibold">Configure le mannequin</p>
              </div>
              <div className="text-center">
                <div className="bg-vinted text-white font-display font-bold w-12 h-12 flex items-center justify-center mx-auto mb-2 border-2 border-black text-xl">3</div>
                <p className="font-semibold">Génère en 30s</p>
              </div>
              <div className="text-center">
                <div className="bg-vinted text-white font-display font-bold w-12 h-12 flex items-center justify-center mx-auto mb-2 border-2 border-black text-xl">4</div>
                <p className="font-semibold">Publie sur Vinted</p>
              </div>
            </div>
          </div>
        </div>

        {/* Plan d'Action 3 Semaines */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Calendar className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Plan d'Action pour Débutants</h2>
          </div>

          <div className="space-y-4">
            <div className="bg-cream border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Semaine 1 : Les Bases</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Trouve ton "coin photo" avec bonne lumière</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Pratique sur 5 vêtements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Teste différents fonds</span>
                </li>
              </ul>
            </div>

            <div className="bg-vinted/10 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Semaine 2 : Optimisation</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Compare tes nouvelles photos aux anciennes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Analyse quelles photos ont le plus de vues</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Teste l'IA VintDress sur tes meilleures pièces</span>
                </li>
              </ul>
            </div>

            <div className="bg-mint/50 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Semaine 3 : Routine</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Crée une routine photo efficace</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Prépare un "kit photo" (cintre, fond, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Photographie par lot pour gagner du temps</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Questions Fréquentes</h2>

          <div className="space-y-4">
            <details className="bg-cream border-3 border-black p-6 cursor-pointer group">
              <summary className="font-display font-bold text-lg list-none flex items-center justify-between">
                <span>Combien de photos mettre sur une annonce Vinted ?</span>
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 pt-4 border-t-2 border-black">
                Minimum 5 photos : vue de face, photo portée, détails/texture, étiquette et vue arrière.
                Plus vous avez de photos qualitatives, plus vous inspirez confiance.
              </p>
            </details>

            <details className="bg-cream border-3 border-black p-6 cursor-pointer group">
              <summary className="font-display font-bold text-lg list-none flex items-center justify-between">
                <span>Quel est le meilleur moment pour photographier ?</span>
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 pt-4 border-t-2 border-black">
                Entre 10h et 16h près d'une fenêtre orientée nord. Évitez le soleil direct qui crée des ombres dures.
                Un ciel légèrement nuageux est idéal.
              </p>
            </details>

            <details className="bg-cream border-3 border-black p-6 cursor-pointer group">
              <summary className="font-display font-bold text-lg list-none flex items-center justify-between">
                <span>Faut-il utiliser le flash du téléphone ?</span>
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 pt-4 border-t-2 border-black">
                Non, jamais ! Le flash aplati l'image et fausse les couleurs. Préférez toujours la lumière naturelle ou un ring light.
              </p>
            </details>

            <details className="bg-cream border-3 border-black p-6 cursor-pointer group">
              <summary className="font-display font-bold text-lg list-none flex items-center justify-between">
                <span>Comment faire une photo portée sans modèle ?</span>
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 pt-4 border-t-2 border-black">
                Utilisez VintDress ! Notre IA génère des photos portées professionnelles en 30 secondes,
                sans avoir besoin de modèle.
              </p>
            </details>
          </div>
        </div>

        {/* Conclusion + CTA */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl text-white mb-4">Conclusion</h2>
          <p className="text-white text-lg mb-6">
            La qualité de tes photos fait <strong>toute</strong> la différence sur Vinted.
            Avec ce guide, tu as toutes les clés pour transformer tes annonces et enfin vendre !
          </p>
          <div className="bg-white border-3 border-black p-6 mb-6">
            <p className="font-semibold text-lg mb-2">Le secret des top vendeurs :</p>
            <p>Ils combinent de bonnes bases photo avec l'IA pour des résultats professionnels sans effort.</p>
          </div>
          <a
            href="/"
            className="inline-block bg-mint border-4 border-black px-8 py-4 font-display font-bold text-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            Essayer VintDress Maintenant
          </a>
        </div>

        {/* Articles Liés */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-display font-bold text-2xl mb-6">Articles Liés</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="/articles/5-astuces-pour-vendre-plus-vite-sur-vinted"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">5 Astuces pour Vendre Plus Vite →</p>
            </a>
            <a
              href="/articles/guide-complet-photos-vinted-2025"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Guide Complet Photos 2025 →</p>
            </a>
            <a
              href="/articles/erreurs-ventes-vinted"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Erreurs à Éviter →</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
