import React from 'react';
import { useSEO } from '../../hooks/useSEO';
import { Sparkles, TrendingUp, Heart, Leaf, Users, Zap, Calendar, DollarSign, AlertTriangle, CheckCircle, Target } from 'lucide-react';
import { ArticleNavigation } from '../../components/ArticleNavigation';

export default function TendancesMode2025Page() {
  useSEO({
    title: "Tendances Mode 2025 : Quoi Vendre Sur Vinted | Guide Complet",
    description: "Tendances mode 2025 : Y2K 3.0, Indie Sleaze, Cottagecore. Découvre quoi vendre sur Vinted pour exploser tes ventes !",
    keywords: "tendances mode 2025, mode vinted 2025, y2k 2025, cottagecore, vendre mode vinted, tendances vinted",
  });

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Image Section */}
      <div className="relative mt-16 sm:mt-20 lg:mt-24 h-[400px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=400&fit=crop"
          alt="Tendances Mode 2025"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
              Tendances Mode 2025
            </h1>
            <p className="font-display text-xl md:text-2xl text-white">
              Quoi Vendre Sur Vinted
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
              Tendance
            </span>
            <span className="text-black">10 Novembre 2025</span>
            <span className="text-black">•</span>
            <span className="text-black">18 min de lecture</span>
            <span className="text-black">•</span>
            <span className="text-black">Par Équipe VintDress</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {['Tendances', 'Mode', '2025', 'Y2K', 'Cottagecore', 'Vinted'].map((tag) => (
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
            2025 s'annonce révolutionnaire pour la mode ! Entre nostalgie, durabilité et innovation,
            découvre les tendances qui vont faire exploser tes ventes Vinted.
          </p>

          <div className="bg-vinted border-3 border-black p-6 mb-6">
            <h2 className="font-display font-bold text-2xl text-white mb-4">L'Année de Tous les Contrastes</h2>
            <p className="text-white mb-4">
              Cette année mélange tout : le vintage côtoie le futuriste, le minimalisme rencontre l'excès,
              et la durabilité s'allie à l'innovation technologique.
            </p>
          </div>

          <div className="bg-mint/50 border-3 border-black p-6">
            <h3 className="font-display font-bold text-xl mb-3">Pourquoi c'est une MINE D'OR pour Vinted :</h3>
            <ul className="space-y-2">
              {[
                'Diversité = plus d\'opportunités',
                'Cycles de mode accélérés',
                'Demande forte pour le seconde main',
                'Consommation plus consciente'
              ].map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <Sparkles className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tendance #1 : Y2K 3.0 */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Sparkles className="w-8 h-8" />
            </div>
            <div>
              <span className="bg-black text-white px-3 py-1 font-display font-bold text-sm">TENDANCE #1</span>
              <h2 className="font-display font-bold text-3xl mt-2">Y2K 3.0 - Le Retour Assumé</h2>
            </div>
          </div>

          <div className="bg-pink-pastel/30 border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-3">Fini le Y2K timide : 2025 pousse le concept à l'extrême !</h3>

            <h4 className="font-semibold mb-3">Ce qui cartonne :</h4>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">Métalliques everywhere</p>
                <p className="text-sm">Argent, chrome, holographique</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">Transparence totale</p>
                <p className="text-sm">PVC, organza, plexi</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">Tech-wear intégré</p>
                <p className="text-sm">Poches cargo, détails LED</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">Logos XXL</p>
                <p className="text-sm">Plus c'est gros, mieux c'est</p>
              </div>
            </div>

            <h4 className="font-semibold mb-3">Pièces à dénicher :</h4>
            <ul className="space-y-1 ml-4">
              <li>• Jupes en vinyle ou PVC</li>
              <li>• Tops en maille métallique</li>
              <li>• Accessoires chromés</li>
              <li>• Lunettes teintées futuristes</li>
            </ul>
          </div>

          <div className="bg-cream border-3 border-black p-6">
            <h4 className="font-semibold mb-2">Où Sourcer ?</h4>
            <p className="text-sm">Marques des années 2000 (Diesel, Miss Sixty), Fast fashion 2019-2020, Créateurs indépendants, Foires aux puces spécialisées</p>
          </div>
        </div>

        {/* Tendance #2 : Indie Sleaze */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="bg-black text-white px-3 py-1 font-display font-bold text-sm">TENDANCE #2</span>
              <h2 className="font-display font-bold text-3xl mt-2">Indie Sleaze Renaissance</h2>
            </div>
          </div>

          <div className="bg-vinted/10 border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-3">Le Style de l'Insouciance</h3>
            <p className="mb-4"><strong>L'anti-Instagram :</strong> Fini la perfection, vive le chaos contrôlé !</p>

            <h4 className="font-semibold mb-3">Codes vestimentaires :</h4>
            <ul className="space-y-2 ml-4">
              <li>• <strong>Layering chaotique :</strong> Superposition assumée</li>
              <li>• <strong>Textures clash :</strong> Paillettes + denim + cuir</li>
              <li>• <strong>Imprimés qui s'affrontent :</strong> Léopard + rayures + fleurs</li>
              <li>• <strong>Accessoires excessifs :</strong> Bijoux superposés</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-cream border-3 border-black p-6">
              <h4 className="font-semibold mb-3">Articles en or :</h4>
              <ul className="space-y-1">
                <li>• Blazers oversize vintage</li>
                <li>• Mini-jupes en cuir coloré</li>
                <li>• Collants fantaisie</li>
                <li>• Headbands et barrettes</li>
              </ul>
            </div>
            <div className="bg-cream border-3 border-black p-6">
              <h4 className="font-semibold mb-3">Prix Tendance :</h4>
              <ul className="space-y-1">
                <li>• Blazer vintage : <strong>25-45€</strong></li>
                <li>• Mini-jupe statement : <strong>15-35€</strong></li>
                <li>• Accessoires cheveux : <strong>5-15€</strong></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tendance #3 : Cottagecore */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Heart className="w-8 h-8" />
            </div>
            <div>
              <span className="bg-black text-white px-3 py-1 font-display font-bold text-sm">TENDANCE #3</span>
              <h2 className="font-display font-bold text-3xl mt-2">Cottagecore Elevated</h2>
            </div>
          </div>

          <div className="bg-mint/30 border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-3">Le Romantisme Sophistiqué</h3>
            <p className="mb-4"><strong>Plus qu'une tendance :</strong> Un véritable art de vivre !</p>

            <h4 className="font-semibold mb-3">Évolution 2025 :</h4>
            <div className="grid md:grid-cols-2 gap-2">
              <span>• Matières plus nobles</span>
              <span>• Coupes plus structurées</span>
              <span>• Détails artisanaux</span>
              <span>• Couleurs complexes</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-cream border-3 border-black p-6">
              <h4 className="font-semibold mb-3">Must-have à vendre :</h4>
              <ul className="space-y-1">
                <li>• Robes midi en lin brodé</li>
                <li>• Cardigans en laine mérinos</li>
                <li>• Jupes longues à smocks</li>
                <li>• Blouses à col claudine premium</li>
              </ul>
            </div>
            <div className="bg-cream border-3 border-black p-6">
              <h4 className="font-semibold mb-3">Marques qui cartonnent :</h4>
              <p><strong>Haut de gamme :</strong> Sézane, Maje</p>
              <p className="mt-2"><strong>Accessible :</strong> Zara, & Other Stories</p>
            </div>
          </div>
        </div>

        {/* Tendance #4 : Sustainable Luxury */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Leaf className="w-8 h-8" />
            </div>
            <div>
              <span className="bg-black text-white px-3 py-1 font-display font-bold text-sm">TENDANCE #4</span>
              <h2 className="font-display font-bold text-3xl mt-2">Sustainable Luxury</h2>
            </div>
          </div>

          <div className="bg-pink-pastel/30 border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-3">Le Luxe Responsable</h3>
            <p className="mb-4"><strong>La nouvelle noblesse :</strong> Qualité + durabilité + style !</p>

            <h4 className="font-semibold mb-3">Critères 2025 :</h4>
            <div className="grid md:grid-cols-2 gap-2">
              <span>• Matières eco-friendly certifiées</span>
              <span>• Production éthique prouvée</span>
              <span>• Design intemporel</span>
              <span>• Made in Europe priorité</span>
            </div>
          </div>

          <div className="bg-cream border-3 border-black p-6">
            <h4 className="font-semibold mb-3">Exemples rentables :</h4>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span>Manteau laine vintage Burberry</span>
                <span className="font-bold text-vinted">200-400€</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Sac cuir artisanal</span>
                <span className="font-bold text-vinted">80-150€</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Sneakers éco-conçues</span>
                <span className="font-bold text-vinted">60-120€</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Tendance #5 : Gender-Fluid */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="bg-black text-white px-3 py-1 font-display font-bold text-sm">TENDANCE #5</span>
              <h2 className="font-display font-bold text-3xl mt-2">Gender-Fluid Fashion</h2>
            </div>
          </div>

          <div className="bg-vinted/10 border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-3">La Mode Sans Frontières</h3>
            <p className="mb-4"><strong>Révolution silencieuse :</strong> Les genres s'effacent dans la garde-robe !</p>

            <h4 className="font-semibold mb-3">Pièces universelles qui vendent :</h4>
            <div className="grid md:grid-cols-2 gap-2">
              <span>• Chemises oversizes neutres</span>
              <span>• Sneakers unisexes</span>
              <span>• Bijoux minimalistes</span>
              <span>• Parfums sans genre</span>
            </div>
          </div>

          <div className="bg-mint/50 border-3 border-black p-6">
            <h4 className="font-semibold mb-3">Stratégie Vinted :</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                <span>Tag tes articles "unisexe"</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                <span>Photos sur modèles variés</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                <span>Descriptions inclusives</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Tendance #6 : Tech-Wear */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Zap className="w-8 h-8" />
            </div>
            <div>
              <span className="bg-black text-white px-3 py-1 font-display font-bold text-sm">TENDANCE #6</span>
              <h2 className="font-display font-bold text-3xl mt-2">Tech-Wear Urbain</h2>
            </div>
          </div>

          <div className="bg-mint/30 border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-3">La Mode du Futur</h3>
            <p className="mb-4"><strong>Performance meets style :</strong> Vêtements intelligents et fonctionnels !</p>

            <h4 className="font-semibold mb-3">Caractéristiques :</h4>
            <div className="grid md:grid-cols-2 gap-2">
              <span>• Tissus techniques (Gore-Tex, Coolmax)</span>
              <span>• Multifonctionnalité</span>
              <span>• Esthétique cyberpunk</span>
              <span>• Intégration technologique</span>
            </div>
          </div>

          <div className="bg-cream border-3 border-black p-6">
            <h4 className="font-semibold mb-3">Articles recherchés :</h4>
            <ul className="space-y-1">
              <li>• Vestes à poches modulaires</li>
              <li>• Pantalons cargo techniques</li>
              <li>• Sneakers connectées</li>
              <li>• Accessoires tactiques</li>
            </ul>
          </div>
        </div>

        {/* Calendrier des Tendances */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Calendar className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Calendrier des Tendances 2025</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-vinted/10 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-2">Q1 - Janvier à Mars</h3>
              <p className="text-sm italic mb-3">"New Year, New Me" Energy</p>
              <ul className="space-y-1 text-sm">
                <li>• Basics premium</li>
                <li>• Détox vestimentaire</li>
                <li>• Sport-luxe</li>
                <li>• Couleurs neutres sophistiquées</li>
              </ul>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-2">Q2 - Avril à Juin</h3>
              <p className="text-sm italic mb-3">Renaissance Printanière</p>
              <ul className="space-y-1 text-sm">
                <li>• Y2K 3.0 explosion</li>
                <li>• Cottagecore elevated</li>
                <li>• Pastels complexes</li>
                <li>• Transparences raffinées</li>
              </ul>
            </div>

            <div className="bg-mint/50 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-2">Q3 - Juillet à Septembre</h3>
              <p className="text-sm italic mb-3">Festival & Vacation Mode</p>
              <ul className="space-y-1 text-sm">
                <li>• Indie sleaze festival</li>
                <li>• Sustainable beachwear</li>
                <li>• Gender-fluid summer</li>
                <li>• Métalliques vacation</li>
              </ul>
            </div>

            <div className="bg-cream border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-2">Q4 - Octobre à Décembre</h3>
              <p className="text-sm italic mb-3">Sophistication Hivernale</p>
              <ul className="space-y-1 text-sm">
                <li>• Tech-wear protection</li>
                <li>• Luxe responsable</li>
                <li>• Layering masterclass</li>
                <li>• Holiday glamour</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pricing Strategy */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-display font-bold text-3xl">Pricing Strategy 2025</h2>
          </div>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-3 border-black">
              <thead>
                <tr className="bg-black text-white border-b-3 border-black">
                  <th className="border-r-2 border-white p-3 text-left font-display font-bold">Tendance</th>
                  <th className="border-r-2 border-white p-3 text-center font-display font-bold">Entry Price</th>
                  <th className="border-r-2 border-white p-3 text-center font-display font-bold">Mid-Range</th>
                  <th className="p-3 text-center font-display font-bold">Premium</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { tendance: 'Y2K 3.0', entry: '20-35€', mid: '35-65€', premium: '65-120€' },
                  { tendance: 'Indie Sleaze', entry: '15-30€', mid: '30-50€', premium: '50-90€' },
                  { tendance: 'Cottagecore', entry: '25-40€', mid: '40-75€', premium: '75-150€' },
                  { tendance: 'Sustainable Lux', entry: '50-100€', mid: '100-200€', premium: '200-400€' },
                ].map((row, idx) => (
                  <tr key={idx} className={`border-b-2 border-black ${idx % 2 === 0 ? 'bg-cream' : ''}`}>
                    <td className="border-r-2 border-black p-3 font-semibold">{row.tendance}</td>
                    <td className="border-r-2 border-black p-3 text-center">{row.entry}</td>
                    <td className="border-r-2 border-black p-3 text-center">{row.mid}</td>
                    <td className="p-3 text-center font-bold text-vinted">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-mint/50 border-3 border-black p-6">
            <h3 className="font-display font-bold text-lg mb-3">Facteurs Multiplicateurs :</h3>
            <div className="grid md:grid-cols-2 gap-2">
              <span>• <strong>Authenticité prouvée :</strong> +30%</span>
              <span>• <strong>État parfait :</strong> +25%</span>
              <span>• <strong>Édition limitée :</strong> +50%</span>
              <span>• <strong>Influencer worn :</strong> +100%</span>
            </div>
          </div>
        </div>

        {/* Marketing des Tendances */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Marketing des Tendances</h2>
          </div>

          <div className="space-y-4 mb-6">
            <div className="bg-pink-pastel/30 border-3 border-black p-4">
              <h4 className="font-semibold mb-2">Y2K 3.0 :</h4>
              <p className="font-display text-lg">"🚀 FUTURISTE ! Top Métallique Y2K Edition 2025"</p>
            </div>

            <div className="bg-vinted/10 border-3 border-black p-4">
              <h4 className="font-semibold mb-2">Indie Sleaze :</h4>
              <p className="font-display text-lg">"✨ CHAOS CHIC ! Blazer Vintage Party Ready"</p>
            </div>

            <div className="bg-mint/50 border-3 border-black p-4">
              <h4 className="font-semibold mb-2">Cottagecore :</h4>
              <p className="font-display text-lg">"🌸 ROMANTIQUE ! Robe Lin Brodée Main French Style"</p>
            </div>
          </div>

          <div className="bg-cream border-3 border-black p-6">
            <h3 className="font-display font-bold text-lg mb-3">Hashtags Puissants 2025 :</h3>
            <div className="flex flex-wrap gap-2">
              {['#Y2K2025', '#MetallicMagic', '#TechFashion', '#IndieSleaze', '#ChaosChic', '#PartyReady', '#Cottagecore2025', '#RomanticStyle', '#HandCrafted', '#SustainableLux', '#EthicalFashion', '#GreenStyle'].map((tag) => (
                <span key={tag} className="bg-mint border-2 border-black px-2 py-1 text-sm font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Erreurs à Éviter */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Erreurs à Éviter Absolument</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                <h3 className="font-display font-bold text-xl">Red Flags</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">❌</span>
                  <span><strong>Suivre aveuglément :</strong> Adapte à ton marché local</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">❌</span>
                  <span><strong>Stock démesuré :</strong> Teste d'abord avec quelques pièces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">❌</span>
                  <span><strong>Ignorer la saisonnalité :</strong> Timing = tout</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">❌</span>
                  <span><strong>Prix fantaisistes :</strong> Reste cohérent avec le marché</span>
                </li>
              </ul>
            </div>

            <div className="bg-mint/50 border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h3 className="font-display font-bold text-xl">Green Flags</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Test & Learn :</strong> Expérimente petit, scale grand</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Quality over Quantity :</strong> Mieux vaut 10 pièces parfaites</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Story telling :</strong> Raconte l'histoire de chaque tendance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Community building :</strong> Crée ta tribu mode</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Plan d'Action */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Ton Plan d'Action Tendances 2025</h2>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { week: 'Semaine 1', action: 'Analyse ton stock actuel vs tendances' },
              { week: 'Semaine 2', action: 'Sourcing ciblé sur 2 tendances max' },
              { week: 'Semaine 3', action: 'Tests pricing et présentation' },
              { week: 'Semaine 4', action: 'Scale les succès, pivot les échecs' },
            ].map((step, idx) => (
              <div key={idx} className="bg-cream border-3 border-black p-4">
                <div className="bg-vinted text-white font-display font-bold px-3 py-1 mb-3 text-center border-2 border-black">
                  {step.week}
                </div>
                <p className="text-sm text-center">{step.action}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Prédictions */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl text-white mb-6">Prédictions Exclusives</h2>
          <p className="text-white text-lg mb-4">Ce Qui Va Exploser en Fin 2025 :</p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Vintage 2010s nostalgia', desc: 'Prépare-toi maintenant !' },
              { title: 'AI-designed fashion', desc: 'Collaboration humain-machine' },
              { title: 'Climate-adaptive clothing', desc: 'Vêtements qui s\'adaptent' },
              { title: 'Virtual fashion crossover', desc: 'Du digital au physique' },
            ].map((pred, idx) => (
              <div key={idx} className="bg-white border-3 border-black p-4">
                <p className="font-semibold">{pred.title}</p>
                <p className="text-sm text-gray-600">{pred.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion + CTA */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-4">Conclusion : Surfe Sur la Vague</h2>
          <p className="text-lg mb-4">
            Les tendances 2025 sont une opportunité en or ! Mais attention : le secret n'est pas de tout suivre,
            mais de choisir ce qui résonne avec ton audience et ton expertise.
          </p>
          <div className="bg-vinted border-3 border-black p-6 mb-6">
            <p className="font-display font-bold text-2xl text-white text-center">
              Passion + Timing + Qualité = Success story Vinted !
            </p>
          </div>
          <a
            href="/"
            className="inline-block bg-mint border-4 border-black px-8 py-4 font-display font-bold text-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            Optimise Tes Photos Avec VintDress
          </a>
        </div>

        {/* Articles Liés */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-display font-bold text-2xl mb-6">Articles Liés</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="/articles/strategie-vente-vinted-2025"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Stratégie de Vente 2025 →</p>
            </a>
            <a
              href="/articles/5-astuces-pour-vendre-plus-vite-sur-vinted"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">5 Astuces Vendre Plus Vite →</p>
            </a>
            <a
              href="/articles/guide-complet-photos-vinted-2025"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Guide Photos 2025 →</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
