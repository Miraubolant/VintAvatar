import React from 'react';
import { useSEO } from '../../hooks/useSEO';
import { ArticleNavigation } from '../../components/ArticleNavigation';
import { TrendingUp, Target, Award, Scale, Users, MessageCircle, Trophy, ArrowRight, Check, X, AlertCircle } from 'lucide-react';

export default function VintDressVsAlternativesComparatifPage() {
  useSEO({
    title: "VintDress vs Alternatives : Quel Générateur de Photos IA Choisir en 2025 ? | Comparatif",
    description: "Comparatif complet des générateurs de photos IA pour Vinted en 2025. VintDress vs alternatives : prix, qualité, fonctionnalités. Guide d'achat !",
    keywords: "vintdress avis, generateur photo ia vinted, comparatif photo ia, meilleur outil vinted, alternative vintdress, photo ia vinted 2025",
  });

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Image Section */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 h-[400px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=400&fit=crop"
          alt="VintDress vs Alternatives Comparatif 2025"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
              VintDress vs Alternatives
            </h1>
            <p className="font-display text-xl md:text-2xl text-white">
              Comparatif Complet 2025
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
              Comparatif
            </span>
            <span className="text-black">3 Décembre 2025</span>
            <span className="text-black">•</span>
            <span className="text-black">8 min de lecture</span>
            <span className="text-black">•</span>
            <span className="text-black">Par Équipe VintDress</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {['Comparatif', 'IA', 'Vinted', 'Photos', '2025'].map((tag) => (
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
            Tu cherches le meilleur outil IA pour créer des photos portées pour tes annonces Vinted ?
            On a testé les principales solutions du marché pour t'aider à faire le bon choix.
          </p>

          <div className="flex items-start gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="font-display font-bold text-2xl mb-3">Pourquoi Utiliser un Générateur de Photos IA ?</h2>
              <p className="mb-4">
                Vendre sur Vinted est devenu ultra-compétitif. Avec <strong>65+ millions d'utilisateurs</strong>,
                la qualité des photos fait toute la différence.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-3">Problème des photos classiques :</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Temps de préparation (30-60 min par article)</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Besoin d'un modèle ou de se prendre en photo</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Qualité variable selon les conditions</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Résultats souvent amateurs</span>
                </li>
              </ul>
            </div>

            <div className="bg-mint/50 border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-3">Solution : Les générateurs IA :</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Photos professionnelles en secondes</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Pas besoin de modèle</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Qualité constante</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Résultats qui vendent</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Critères de Comparaison */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Les Critères de Comparaison</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { num: '1', title: 'Qualité de l\'image', desc: 'Réalisme, détails, cohérence' },
              { num: '2', title: 'Vitesse de génération', desc: 'Temps d\'attente' },
              { num: '3', title: 'Options de personnalisation', desc: 'Morphologie, pose, fond' },
              { num: '4', title: 'Intégration Vinted', desc: 'Facilité d\'import depuis Vinted' },
              { num: '5', title: 'Prix', desc: 'Rapport qualité-prix' },
              { num: '6', title: 'Confidentialité', desc: 'Protection des données et visage' },
            ].map((critere) => (
              <div key={critere.num} className="bg-cream border-3 border-black p-4">
                <div className="flex items-start gap-3">
                  <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0 border-2 border-black">
                    {critere.num}
                  </span>
                  <div>
                    <p className="font-semibold">{critere.title}</p>
                    <p className="text-sm text-gray-600">{critere.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VintDress - Le Spécialiste */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Award className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl text-white">VintDress : Le Spécialiste Vinted</h2>
          </div>

          <div className="bg-white border-3 border-black p-6 mb-6">
            <p className="text-lg mb-4">
              VintDress est <strong>LA solution française</strong> conçue spécifiquement pour les vendeurs Vinted.
              L'outil se distingue par son intégration native avec Vinted et sa compréhension des besoins spécifiques
              des vendeurs de mode seconde main.
            </p>

            <h3 className="font-display font-bold text-xl mb-4">Points Forts :</h3>

            <div className="space-y-4">
              <div className="bg-cream border-3 border-black p-4">
                <h4 className="font-semibold mb-2">Intégration Vinted unique :</h4>
                <ul className="space-y-1 ml-4">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                    <span>Import direct via URL Vinted</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                    <span>Extraction automatique des photos d'annonces</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                    <span>Optimisé pour le format Vinted (4:5)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-cream border-3 border-black p-4">
                <h4 className="font-semibold mb-2">Personnalisation complète :</h4>
                <div className="grid grid-cols-2 gap-2 ml-4">
                  <span>• Genre (femme/homme)</span>
                  <span>• Carnation de peau</span>
                  <span>• Morphologie</span>
                  <span>• Pose (debout, assise...)</span>
                  <span>• Décor (neutre, urbain...)</span>
                  <span>• Type de vêtement</span>
                </div>
              </div>

              <div className="bg-cream border-3 border-black p-4">
                <h4 className="font-semibold mb-2">Protection de la vie privée :</h4>
                <ul className="space-y-1 ml-4">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                    <span>Option masquage du visage incluse</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                    <span>Serveurs européens (RGPD)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                    <span>Données sécurisées</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tarification */}
          <div className="bg-white border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-4">Tarification VintDress :</h3>

            <div className="overflow-x-auto">
              <table className="w-full border-3 border-black">
                <thead>
                  <tr className="bg-vinted text-white border-b-3 border-black">
                    <th className="border-r-2 border-black p-3 text-left font-display font-bold">Formule</th>
                    <th className="border-r-2 border-black p-3 text-left font-display font-bold">Prix</th>
                    <th className="border-r-2 border-black p-3 text-left font-display font-bold">Générations</th>
                    <th className="p-3 text-left font-display font-bold">Prix/Photo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-3 font-semibold">Pack Starter</td>
                    <td className="border-r-2 border-black p-3">3,99€</td>
                    <td className="border-r-2 border-black p-3">10</td>
                    <td className="p-3 font-bold text-vinted">0,40€</td>
                  </tr>
                  <tr className="border-b-2 border-black bg-mint/20">
                    <td className="border-r-2 border-black p-3 font-semibold">Pack Pro</td>
                    <td className="border-r-2 border-black p-3">7,99€</td>
                    <td className="border-r-2 border-black p-3">25</td>
                    <td className="p-3 font-bold text-vinted">0,32€</td>
                  </tr>
                  <tr>
                    <td className="border-r-2 border-black p-3 font-semibold">Abonnement</td>
                    <td className="border-r-2 border-black p-3">12,99€/mois</td>
                    <td className="border-r-2 border-black p-3">40</td>
                    <td className="p-3 font-bold text-vinted">0,32€</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-mint border-3 border-black p-4 mt-4 flex items-start gap-2">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="font-semibold">Les crédits des packs n'expirent jamais !</p>
            </div>
          </div>

          {/* Note Globale */}
          <div className="bg-white border-3 border-black p-6">
            <h3 className="font-display font-bold text-xl mb-4">Note Globale VintDress :</h3>

            <div className="space-y-3">
              {[
                { critere: 'Qualité', note: '⭐⭐⭐⭐⭐', detail: '5/5' },
                { critere: 'Vitesse', note: '⭐⭐⭐⭐⭐', detail: '30 secondes' },
                { critere: 'Personnalisation', note: '⭐⭐⭐⭐⭐', detail: '5/5' },
                { critere: 'Prix', note: '⭐⭐⭐⭐⭐', detail: '5/5' },
                { critere: 'Spécialisation Vinted', note: '⭐⭐⭐⭐⭐', detail: '5/5' },
              ].map((item) => (
                <div key={item.critere} className="flex items-center justify-between border-b-2 border-black pb-2">
                  <span className="font-semibold">{item.critere} :</span>
                  <div className="flex items-center gap-2">
                    <span>{item.note}</span>
                    <span className="text-sm text-gray-600">({item.detail})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tableau Comparatif */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Scale className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">VintDress vs Alternatives</h2>
          </div>

          <div className="bg-pink-pastel/30 border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-lg mb-3">Limitations des alternatives génériques :</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Pas d'import URL Vinted</span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Format d'image non adapté</span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Pas d'option spécifique vêtements seconde main</span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Résultats moins réalistes sur vêtements réels</span>
              </li>
            </ul>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-3 border-black bg-white">
              <thead>
                <tr className="bg-black text-white border-b-3 border-black">
                  <th className="border-r-2 border-white p-3 text-left font-display font-bold">Critère</th>
                  <th className="border-r-2 border-white p-3 text-center font-display font-bold">VintDress</th>
                  <th className="p-3 text-center font-display font-bold">Alternatives</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { critere: 'Import URL Vinted', vintdress: '✅ Oui', alternatives: '❌ Non' },
                  { critere: 'Format 4:5 natif', vintdress: '✅ Oui', alternatives: '⚠️ Variable' },
                  { critere: 'Masquage visage', vintdress: '✅ Inclus', alternatives: '⚠️ Rare' },
                  { critere: 'Type vêtement', vintdress: '✅ Spécifique', alternatives: '❌ Générique' },
                  { critere: 'Serveurs RGPD', vintdress: '✅ Europe', alternatives: '⚠️ Variable' },
                  { critere: 'Support français', vintdress: '✅ Oui', alternatives: '⚠️ Rarement' },
                ].map((row, idx) => (
                  <tr key={idx} className={`border-b-2 border-black ${idx % 2 === 0 ? 'bg-cream' : ''}`}>
                    <td className="border-r-2 border-black p-3 font-semibold">{row.critere}</td>
                    <td className="border-r-2 border-black p-3 text-center font-semibold">{row.vintdress}</td>
                    <td className="p-3 text-center">{row.alternatives}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Ce Que Recherchent les Vendeurs */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Users className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Ce Que Recherchent les Vendeurs Vinted</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-vinted/10 border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-2">1. Authenticité</h3>
              <p>
                Les acheteurs Vinted veulent voir le vrai vêtement, pas une version idéalisée.
                VintDress préserve les détails du vêtement original.
              </p>
            </div>

            <div className="bg-mint/50 border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-2">2. Confiance</h3>
              <p>
                Le masquage du visage et les serveurs européens rassurent vendeurs et acheteurs
                sur la protection des données.
              </p>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-2">3. Rapidité</h3>
              <p>
                Avec des dizaines d'articles à photographier, la vitesse est cruciale.
                <strong> 30 secondes vs 30 minutes</strong> change tout.
              </p>
            </div>

            <div className="bg-cream border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-2">4. Rentabilité</h3>
              <p>
                À <strong>0,32€ par photo</strong> de qualité pro, le ROI est immédiat :
                une vente plus rapide rembourse largement l'investissement.
              </p>
            </div>
          </div>
        </div>

        {/* Témoignages */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Témoignages Utilisateurs</h2>
          </div>

          <div className="space-y-4">
            <div className="bg-cream border-3 border-black p-6">
              <p className="italic mb-3">
                "J'ai testé plusieurs solutions avant VintDress. La différence ? L'import URL Vinted me fait
                gagner un temps fou, et la qualité est constante."
              </p>
              <p className="font-semibold">— Marie, vendeuse depuis 3 ans</p>
            </div>

            <div className="bg-vinted/10 border-3 border-black p-6">
              <p className="italic mb-3">
                "Le rapport qualité-prix est imbattable. Mes vues ont triplé depuis que j'utilise les photos IA."
              </p>
              <p className="font-semibold">— Lucas, vendeur pro (150+ articles)</p>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <p className="italic mb-3">
                "Je n'osais pas me prendre en photo. Avec VintDress, mes annonces ont enfin l'air professionnelles !"
              </p>
              <p className="font-semibold">— Sophie, débutante</p>
            </div>
          </div>
        </div>

        {/* Verdict */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Trophy className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl text-white">Verdict : Quel Outil Choisir ?</h2>
          </div>

          <div className="bg-white border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-4">Pourquoi VintDress gagne :</h3>

            <div className="space-y-3">
              {[
                'Seul outil avec import URL Vinted - Gain de temps énorme',
                'Spécialisé mode seconde main - Comprend les besoins spécifiques',
                'Prix accessibles - Dès 0,32€/photo',
                'Français et RGPD - Support et données sécurisées',
                'Masquage visage inclus - Confidentialité garantie',
              ].map((raison, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0 border-2 border-black">
                    {idx + 1}
                  </span>
                  <p className="font-semibold pt-1">{raison}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-mint border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-3">Utilise VintDress si :</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Tu vends sur Vinted (évident !)</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Tu as plusieurs articles à photographier</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Tu veux des résultats pro sans effort</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>La confidentialité t'importe</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-3">Alternatives à considérer si :</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <AlertCircle className="w-5 h-5 mr-2 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span>Tu ne vends pas sur Vinted</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="w-5 h-5 mr-2 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span>Tu cherches uniquement de l'édition photo basique</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="w-5 h-5 mr-2 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span>Tu as besoin de retouches complexes (autre que photos portées)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Comment Commencer */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <ArrowRight className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Comment Commencer avec VintDress</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-6">
            {[
              { num: '1', titre: 'Créer un compte', desc: 'Gratuit, inscription rapide' },
              { num: '2', titre: 'Choisir ta formule', desc: 'Pack ou abonnement selon tes besoins' },
              { num: '3', titre: 'Importer ton vêtement', desc: 'URL Vinted ou upload photo' },
              { num: '4', titre: 'Générer et télécharger', desc: '30 secondes et c\'est prêt !' },
            ].map((etape) => (
              <div key={etape.num} className="bg-cream border-3 border-black p-4 text-center">
                <div className="bg-vinted text-white font-display font-bold w-12 h-12 flex items-center justify-center mx-auto mb-3 border-2 border-black text-xl">
                  {etape.num}
                </div>
                <p className="font-semibold mb-2">{etape.titre}</p>
                <p className="text-sm text-gray-600">{etape.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-vinted/10 border-3 border-black p-6">
            <h3 className="font-display font-bold text-xl mb-4">Notre Recommandation :</h3>
            <div className="space-y-2">
              <p><strong>Pour tester :</strong> Pack Starter à 3,99€ (10 générations)</p>
              <p><strong>Pour vendeurs réguliers :</strong> Pack Pro à 7,99€ (25 générations)</p>
              <p><strong>Pour vendeurs intensifs :</strong> Abonnement à 12,99€/mois</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Questions Fréquentes</h2>

          <div className="space-y-4">
            <details className="bg-cream border-3 border-black p-6 cursor-pointer group">
              <summary className="font-display font-bold text-lg list-none flex items-center justify-between">
                <span>Quel est le meilleur générateur de photos IA pour Vinted ?</span>
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 pt-4 border-t-2 border-black">
                VintDress est le seul outil spécialisé pour Vinted avec import URL direct, format 4:5 natif
                et option masquage visage. C'est le choix recommandé pour les vendeurs Vinted.
              </p>
            </details>

            <details className="bg-cream border-3 border-black p-6 cursor-pointer group">
              <summary className="font-display font-bold text-lg list-none flex items-center justify-between">
                <span>Combien coûte une photo IA pour Vinted ?</span>
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 pt-4 border-t-2 border-black">
                Avec VintDress, le prix par photo varie de 0,32€ à 0,40€ selon la formule choisie.
                Les packs n'expirent jamais, contrairement aux abonnements mensuels.
              </p>
            </details>

            <details className="bg-cream border-3 border-black p-6 cursor-pointer group">
              <summary className="font-display font-bold text-lg list-none flex items-center justify-between">
                <span>Les photos IA sont-elles autorisées sur Vinted ?</span>
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 pt-4 border-t-2 border-black">
                Oui, vous pouvez utiliser des photos générées par IA sur Vinted tant qu'elles représentent
                fidèlement le vêtement réel que vous vendez.
              </p>
            </details>

            <details className="bg-cream border-3 border-black p-6 cursor-pointer group">
              <summary className="font-display font-bold text-lg list-none flex items-center justify-between">
                <span>Quelle est la différence entre VintDress et les alternatives ?</span>
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 pt-4 border-t-2 border-black">
                VintDress est le seul à proposer l'import direct d'URL Vinted, une spécialisation mode seconde main,
                le masquage de visage inclus, et des serveurs européens conformes au RGPD.
              </p>
            </details>
          </div>
        </div>

        {/* Conclusion + CTA */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl text-white mb-4">Conclusion</h2>
          <p className="text-white text-lg mb-4">
            Dans un marché où la qualité des photos fait toute la différence, choisir le bon outil IA est stratégique.
          </p>
          <p className="text-white text-lg mb-6">
            <strong>VintDress se démarque</strong> par sa spécialisation Vinted, son intégration unique (import URL),
            ses options de personnalisation complètes, et son excellent rapport qualité-prix.
          </p>
          <p className="text-white text-lg mb-6">
            Pour les vendeurs Vinted qui veulent des photos professionnelles sans se compliquer la vie, le choix est clair.
          </p>
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
              href="/articles/guide-complet-photos-vinted-2025"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Guide Complet Photos 2025 →</p>
            </a>
            <a
              href="/articles/5-astuces-pour-vendre-plus-vite-sur-vinted"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">5 Astuces Vendre Plus Vite →</p>
            </a>
            <a
              href="/articles/ia-au-service-de-la-mode-notre-revolution"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">IA au Service de la Mode →</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
