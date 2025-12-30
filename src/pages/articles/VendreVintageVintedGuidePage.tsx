import React from 'react';
import { useSEO } from '../../hooks/useSEO';
import { ArticleNavigation } from '../../components/ArticleNavigation';
import { Gem, Search, Camera, DollarSign, FileText, TrendingUp, Clock, Award, Star, CheckCircle, X } from 'lucide-react';

export default function VendreVintageVintedGuidePage() {
  useSEO({
    title: "Vendre du Vintage sur Vinted : Le Guide Complet 2025 | VintDress",
    description: "Guide complet pour vendre du vintage sur Vinted en 2025. Authentification, photos IA, prix, descriptions. Transforme tes pièces rétro en or !",
    keywords: "vendre vintage vinted, vetements vintage, mode retro vinted, prix vintage, authenticite vintage",
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image Section */}
      <div className="relative -mt-1 mx-4 sm:mx-6 lg:mx-8 h-[400px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=400&fit=crop"
          alt="Vendre du Vintage sur Vinted"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
              Vendre du Vintage sur Vinted
            </h1>
            <p className="font-display text-xl md:text-2xl text-white">
              Le Guide Complet 2025
            </p>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <ArticleNavigation />

        <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-wrap items-center gap-4 text-sm font-display font-semibold">
            <span className="bg-vinted border-2 border-black px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-white">
              Guide
            </span>
            <span className="text-black">6 Décembre 2025</span>
            <span className="text-black">•</span>
            <span className="text-black">10 min de lecture</span>
            <span className="text-black">•</span>
            <span className="text-black">Par Sophie Martin</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {['Vintage', 'Guide', 'Vinted', 'Mode Rétro', 'Vente'].map((tag) => (
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
            Le vintage est en plein boom ! Avec la mode durable et le retour des tendances rétro,
            vendre des vêtements vintage sur Vinted peut devenir très lucratif. Voici tout ce que tu dois savoir.
          </p>

          <div className="flex items-start gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Gem className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="font-display font-bold text-2xl mb-3">Pourquoi le Vintage Cartonne en 2025</h2>
              <div className="bg-mint/30 border-2 border-black p-4 mb-4">
                <h3 className="font-semibold mb-2">Les chiffres parlent :</h3>
                <ul className="space-y-1">
                  <li>• +45% de recherches "vintage" sur Vinted en 2024</li>
                  <li>• Prix moyens 3x plus élevés que le fast-fashion</li>
                  <li>• Acheteurs prêts à payer pour l'authenticité</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-pink-pastel/30 border-3 border-black p-6">
            <h3 className="font-display font-bold text-lg mb-3">Ce qui fait craquer les acheteurs :</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Pièces uniques et originales',
                'Qualité de fabrication supérieure',
                'Style intemporel et durable',
                'Histoire et caractère des vêtements'
              ].map((point, idx) => (
                <div key={idx} className="flex items-start">
                  <Star className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Comment Identifier une Vraie Pièce Vintage */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Search className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Comment Identifier une Vraie Pièce Vintage</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-vinted/10 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Étiquettes révélateurs :</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>"Made in France/Italy/USA" (avant délocalisation)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Typo et logos d'époque</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Numéros de lot ou codes anciens</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Matériaux nobles mentionnés</span>
                </li>
              </ul>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Détails de fabrication :</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Coutures renforcées et régulières</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Boutons en nacre, métal ou bois</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Doublures complètes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Fermetures éclair métalliques</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-cream border-3 border-black p-6">
            <h3 className="font-display font-bold text-xl mb-4">Dater une Pièce Vintage :</h3>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white border-2 border-black p-4">
                <h4 className="font-semibold mb-2">Années 70 :</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Motifs psychédéliques</li>
                  <li>• Cols larges et pointus</li>
                  <li>• Tissus synthétiques brillants</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-black p-4">
                <h4 className="font-semibold mb-2">Années 80 :</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Épaulettes marquées</li>
                  <li>• Couleurs néon</li>
                  <li>• Logos visibles</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-black p-4">
                <h4 className="font-semibold mb-2">Années 90 :</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Minimalisme</li>
                  <li>• Denim délavé</li>
                  <li>• Coupes oversize</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Photographier le Vintage */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Camera className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Photographier le Vintage : Les Secrets Pro</h2>
          </div>

          <div className="bg-vinted border-3 border-black p-6 mb-6">
            <p className="text-white text-lg mb-4">
              Le vintage a un défi unique : les acheteurs ne peuvent pas toucher le tissu ni voir les détails.
              Tes photos doivent compenser.
            </p>

            <div className="bg-white border-2 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">La solution IA :</h3>
              <p className="mb-3">Notre générateur de photos portées est parfait pour le vintage car il :</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Met en valeur la coupe unique</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Montre comment le vêtement tombe</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Donne vie à des pièces qui peuvent paraître "mortes" sur cintre</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span><strong>Augmente les ventes de +350% sur le vintage !</strong></span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-cream border-3 border-black p-6">
            <h3 className="font-display font-bold text-xl mb-4">Photos Obligatoires pour le Vintage :</h3>

            <div className="space-y-3">
              {[
                { num: '1', title: 'Photo portée IA', desc: 'L\'accroche ultime' },
                { num: '2', title: 'Étiquette/marque', desc: 'Preuve d\'authenticité' },
                { num: '3', title: 'Détails du tissu', desc: 'Texture et qualité' },
                { num: '4', title: 'Coutures et finitions', desc: 'Savoir-faire' },
                { num: '5', title: 'Défauts éventuels', desc: 'Transparence totale' },
              ].map((photo) => (
                <div key={photo.num} className="flex items-center gap-3 bg-white border-2 border-black p-3">
                  <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0 border-2 border-black">
                    {photo.num}
                  </span>
                  <div>
                    <p className="font-semibold">{photo.title}</p>
                    <p className="text-sm text-gray-600">{photo.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fixer le Prix du Vintage */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-display font-bold text-3xl">Fixer le Prix du Vintage</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-vinted/10 border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center border-2 border-black">1</span>
                <h3 className="font-semibold text-lg">Identifier la marque</h3>
              </div>
              <ul className="space-y-1 text-sm ml-10">
                <li>• Marques de luxe vintage : prix x5 à x10</li>
                <li>• Marques de qualité (Cacharel, Kenzo vintage) : x3</li>
                <li>• Sans marque mais qualité : x2</li>
              </ul>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center border-2 border-black">2</span>
                <h3 className="font-semibold text-lg">Évaluer l'état</h3>
              </div>
              <ul className="space-y-1 text-sm ml-10">
                <li>• Parfait/Neuf : Prix maximum</li>
                <li>• Très bon état : -10 à 15%</li>
                <li>• Bon état avec défauts mineurs : -20 à 30%</li>
                <li>• À restaurer : -50% mais niche spécifique</li>
              </ul>
            </div>

            <div className="bg-mint/50 border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center border-2 border-black">3</span>
                <h3 className="font-semibold text-lg">Vérifier la tendance</h3>
              </div>
              <ul className="space-y-1 text-sm ml-10">
                <li>• Pièce tendance actuelle : prix premium</li>
                <li>• Classique intemporel : prix stable</li>
                <li>• Hors tendance temporaire : patience ou bradage</li>
              </ul>
            </div>

            <div className="bg-cream border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center border-2 border-black">4</span>
                <h3 className="font-semibold text-lg">Étudier le marché</h3>
              </div>
              <p className="text-sm ml-10">
                Recherche articles similaires <strong>vendus</strong> (pas en vente !)
              </p>
            </div>
          </div>
        </div>

        {/* Descriptions qui Font Vendre */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <FileText className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Descriptions qui Font Vendre</h2>
          </div>

          <div className="bg-cream border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-4">Le Template Parfait pour le Vintage :</h3>

            <div className="bg-white border-2 border-black p-4 font-mono text-sm">
              <p className="mb-2">[DÉCENNIE] [MARQUE] - [TYPE DE VÊTEMENT]</p>
              <p className="mb-2">Histoire :</p>
              <p className="mb-2 ml-4">[Contexte de la pièce, époque, style]</p>
              <p className="mb-2">Détails :</p>
              <ul className="ml-4 mb-2">
                <li>- Marque : [nom]</li>
                <li>- Époque : [estimation]</li>
                <li>- Taille étiquette : [X] (correspond à [Y] actuel)</li>
                <li>- Matière : [composition]</li>
                <li>- Couleur : [description précise]</li>
              </ul>
              <p className="mb-2">Mesures :</p>
              <p className="mb-2 ml-4">[Toutes les mesures importantes]</p>
              <p className="mb-2">État :</p>
              <p className="mb-2 ml-4">[Description honnête avec défauts]</p>
              <p className="mb-2">Authenticité :</p>
              <p className="ml-4">[Éléments qui prouvent l'authenticité]</p>
            </div>
          </div>

          <div className="bg-vinted/10 border-3 border-black p-6">
            <h3 className="font-display font-bold text-lg mb-3">Mots-Clés Qui Boostent :</h3>
            <div className="flex flex-wrap gap-2">
              {['Vintage 90s', 'Rétro', 'True vintage', 'Collector', 'Rare', 'Made in France'].map((keyword) => (
                <span key={keyword} className="bg-mint border-2 border-black px-3 py-1 text-sm font-semibold">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Niches Vintage les Plus Rentables */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Niches Vintage les Plus Rentables</h2>
          </div>

          <div className="space-y-4 mb-6">
            {[
              { num: '1', title: 'Denim vintage Levi\'s', desc: 'Valeur sûre, forte demande' },
              { num: '2', title: 'Sportswear 90s', desc: 'Nike, Adidas vintage très recherchés' },
              { num: '3', title: 'Luxe vintage', desc: 'Chanel, Hermès, YSL = jackpot' },
              { num: '4', title: 'Bohème 70s', desc: 'Robes longues, motifs floraux' },
              { num: '5', title: 'Preppy 80s', desc: 'Ralph Lauren, Lacoste vintage' },
            ].map((niche) => (
              <div key={niche.num} className="bg-cream border-3 border-black p-4">
                <div className="flex items-start gap-3">
                  <span className="bg-vinted text-white font-display font-bold w-10 h-10 flex items-center justify-center flex-shrink-0 border-2 border-black text-lg">
                    {niche.num}
                  </span>
                  <div>
                    <p className="font-semibold text-lg">{niche.title}</p>
                    <p className="text-sm text-gray-600">{niche.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-pink-pastel/30 border-3 border-black p-6">
            <h3 className="font-display font-bold text-lg mb-3">À Éviter :</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Vêtements très tachés ou troués (sauf mention "pour pièces")</span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Contrefaçons vintage (oui, ça existe !)</span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Pièces sans aucun attrait stylistique</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Stratégie de Vente Avancée */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Stratégie de Vente Avancée</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-vinted/10 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Créer ta Boutique Vintage :</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Photos cohérentes grâce à notre IA</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Description stylistique unifiée</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Spécialisation par époque ou style</span>
                </li>
              </ul>
            </div>

            <div className="bg-mint/50 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Fidéliser ta clientèle :</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Lots thématiques</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Avant-premières aux clients fidèles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Conseils de style personnalisés</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-cream border-3 border-black p-6">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-vinted" />
              <h3 className="font-display font-bold text-xl">Timing Optimal :</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">Janvier</p>
                <p className="text-sm">Bonnes résolutions mode durable</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">Avril</p>
                <p className="text-sm">Transition printemps, recherche pièces légères</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">Septembre</p>
                <p className="text-sm">Rentrée, nouveaux looks</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">Octobre</p>
                <p className="text-sm">Pièces d'automne vintage</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cas Pratique */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Award className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl text-white">Cas Pratique : De 5€ à 150€</h2>
          </div>

          <div className="bg-white border-3 border-black p-6">
            <h3 className="font-display font-bold text-xl mb-4">L'Histoire de Cette Veste :</h3>

            <div className="space-y-4">
              <div className="bg-pink-pastel/30 border-2 border-black p-4">
                <p className="font-semibold mb-2">Achat :</p>
                <p>Veste en velours chinée à <strong>5€</strong></p>
              </div>

              <div className="bg-vinted/10 border-2 border-black p-4">
                <p className="font-semibold mb-2">Analyse :</p>
                <ul className="space-y-1">
                  <li>• Étiquette "Made in France"</li>
                  <li>• Marque de confection parisienne</li>
                  <li>• Boutons en corne</li>
                  <li>• Doublure soie</li>
                </ul>
              </div>

              <div className="bg-mint/50 border-2 border-black p-4">
                <p className="font-semibold mb-2">Mise en vente :</p>
                <ul className="space-y-1">
                  <li>• Photo portée IA sublime</li>
                  <li>• Description détaillée avec histoire</li>
                  <li>• Prix fixé : <strong>150€</strong></li>
                </ul>
              </div>

              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-display font-bold text-2xl text-vinted">
                  Résultat : Vendue en 48h !
                </p>
                <p className="text-sm mt-2">À une acheteuse qui cherchait exactement ce style</p>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Conclusion</h2>
          <p className="text-lg mb-6">
            Le vintage sur Vinted est une mine d'or pour qui sait s'y prendre. Les clés du succès :
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              { num: '1', text: 'Authentifier correctement tes pièces' },
              { num: '2', text: 'Photographier avec notre IA pour des photos portées parfaites' },
              { num: '3', text: 'Décrire avec passion et précision' },
              { num: '4', text: 'Tarifer intelligemment' },
              { num: '5', text: 'Cibler les bonnes niches' },
            ].map((cle) => (
              <div key={cle.num} className="bg-cream border-3 border-black p-4 flex items-start gap-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0 border-2 border-black">
                  {cle.num}
                </span>
                <p className="font-semibold pt-1">{cle.text}</p>
              </div>
            ))}
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
              href="/articles/tendances-mode-2025"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Tendances Mode 2025 →</p>
            </a>
            <a
              href="/articles/guide-complet-photos-vinted-2025"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Guide Photos 2025 →</p>
            </a>
            <a
              href="/articles/strategie-vente-vinted-2025"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Stratégie de Vente 2025 →</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
