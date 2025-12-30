import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, XCircle, Clock, TrendingUp, Zap, AlertTriangle } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';
import { ArticleNavigation } from '../../components/ArticleNavigation';

export const VintedLookGratuitAlternativeProPage: React.FC = () => {
  useSEO({
    title: "Vinted Look Gratuit : L'Alternative Pro Qui Fait Vraiment Vendre | VintDress",
    description: "Crée des looks Vinted professionnels qui vendent. Découvre pourquoi les top vendeurs choisissent VintDress plutôt que les outils gratuits.",
    keywords: "vinted look gratuit, look vinted, style vinted, photo look vinted, creer look vinted, vinted style gratuit, tenue vinted",
  });

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Image Section */}
      <div className="relative h-[400px] lg:h-[500px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=1200&h=500&fit=crop"
          alt="Vinted Look Professionnel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-white text-4xl lg:text-6xl mb-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              VINTED LOOK GRATUIT
            </h1>
            <p className="font-display font-bold text-pink-pastel text-xl lg:text-2xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              L'Alternative Pro Qui Fait Vraiment Vendre
            </p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 pb-12 lg:pb-20">
        <ArticleNavigation />

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 bg-vinted text-white border-3 border-black font-display font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              GUIDE
            </span>
            <span className="font-body text-sm text-gray-600">Par Équipe VintDress</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">26 Décembre 2025</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">5 min de lecture</span>
          </div>

          <h1 className="font-display font-bold text-4xl lg:text-5xl text-black mb-4">
            Vinted Look Gratuit : L'Alternative Pro Qui Fait Vraiment Vendre
          </h1>

          <p className="font-body text-lg text-gray-700 mb-6">
            Tu cherches à créer des looks Vinted gratuitement ? Découvre pourquoi un petit investissement peut multiplier tes ventes par 3.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["Vinted Look", "Photo Vinted", "Style Vinted", "Vente en ligne", "Mode"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white border-2 border-black text-black font-body text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Introduction Card */}
        <div className="bg-vinted border-4 border-black p-6 mb-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-display font-bold text-white text-lg">
            Tu veux créer des looks professionnels pour tes annonces Vinted sans te ruiner ? Tu as tapé "Vinted look gratuit" en espérant trouver la solution miracle. On va te donner mieux : la vérité sur ce qui fonctionne vraiment.
          </p>
        </div>

        {/* What is a Vinted Look */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            C'est Quoi un "Look Vinted" ?
          </h2>
          <div className="bg-white border-3 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-body text-gray-700 mb-4">
              Un <strong>look Vinted</strong>, c'est une photo où ton vêtement est présenté de manière attractive, idéalement porté ou mis en situation. C'est ce qui fait la différence entre :
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="font-body text-gray-700">Une photo à plat qui passe inaperçue</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="font-body text-gray-700">Une photo stylée qui génère des clics et des ventes</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-12">
          <h3 className="font-display font-bold text-2xl text-black mb-4">
            Pourquoi les Looks Font Vendre
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-mint border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-5xl font-display font-bold text-vinted mb-2">+300%</div>
              <p className="font-display font-bold text-black text-sm">VUES SUR VINTED</p>
            </div>
            <div className="bg-pink-pastel border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-5xl font-display font-bold text-vinted mb-2">×3</div>
              <p className="font-display font-bold text-black text-sm">VENTES PLUS RAPIDES</p>
            </div>
          </div>
        </section>

        {/* Free Options Reality */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Les Options "Gratuites" : La Réalité
          </h2>

          {/* Option 1 */}
          <div className="bg-white border-3 border-black p-6 mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-3">
              Option 1 : Demander à un Ami de Poser
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-3">
              <div>
                <p className="font-display font-bold text-sm text-green-600 mb-2">AVANTAGES :</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Gratuit, authentique</span></li>
                </ul>
              </div>
              <div>
                <p className="font-display font-bold text-sm text-red-600 mb-2">INCONVÉNIENTS :</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Dépendance à la disponibilité</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Qualité variable</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Temps considérable</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Impossible de scaler</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Option 2 */}
          <div className="bg-white border-3 border-black p-6 mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-3">
              Option 2 : Les Apps de Retouche Gratuites
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-3">
              <div>
                <p className="font-display font-bold text-sm text-green-600 mb-2">AVANTAGES :</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Accessibles</span></li>
                </ul>
              </div>
              <div>
                <p className="font-display font-bold text-sm text-red-600 mb-2">INCONVÉNIENTS :</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Ne créent pas de mannequin virtuel</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Résultats amateur visibles</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Temps de retouche important</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Pas adapté pour photos portées</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Option 3 */}
          <div className="bg-white border-3 border-black p-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-3">
              Option 3 : Les IA Gratuites en Ligne
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-3">
              <div>
                <p className="font-display font-bold text-sm text-green-600 mb-2">AVANTAGES :</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Aucun coût direct</span></li>
                </ul>
              </div>
              <div>
                <p className="font-display font-bold text-sm text-red-600 mb-2">INCONVÉNIENTS :</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Qualité très variable</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Files d'attente interminables</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Watermarks sur les images</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Déformations du vêtement</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Tes données revendues</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Time Value Calculation */}
        <section className="mb-12">
          <div className="bg-pink-pastel border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start gap-4 mb-4">
              <Clock className="w-8 h-8 text-black flex-shrink-0" />
              <div>
                <h3 className="font-display font-bold text-2xl text-black mb-3">
                  La Vraie Question : Combien Vaut Ton Temps ?
                </h3>
                <p className="font-body text-gray-700 mb-4">
                  Imaginons que tu passes <strong>2 heures</strong> à chercher un outil gratuit qui fonctionne, attendre dans les files d'attente, refaire des générations ratées, et retoucher des images de qualité moyenne.
                </p>
                <div className="bg-white border-3 border-black p-4 mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <p className="font-display font-bold text-black text-lg mb-2">
                    Si ton temps vaut 10€/heure = 20€ "dépensés" pour un résultat médiocre
                  </p>
                  <p className="font-body text-sm text-gray-600">
                    Avec VintDress à 3,99€, tu obtiens 10 photos professionnelles en 5 minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VintDress Features */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            VintDress : Le Look Pro Accessible
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {/* Feature 1 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-lg">1</span>
                </div>
                <h3 className="font-display font-bold text-lg text-black">Mannequin IA Ultra-Réaliste</h3>
              </div>
              <p className="font-body text-sm text-gray-700">
                Technologie FLUX 2 Pro (utilisée par les marques de mode). Rendu photoréaliste impossible à distinguer d'une vraie photo.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-lg">2</span>
                </div>
                <h3 className="font-display font-bold text-lg text-black">Personnalisation Complète</h3>
              </div>
              <p className="font-body text-sm text-gray-700 mb-2">
                Genre, morphologie (XS à XXL), carnation (tous types de peau), pose (face, profil, dynamique), décor (studio pro, urbain, nature...).
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-lg">3</span>
                </div>
                <h3 className="font-display font-bold text-lg text-black">Qualité Vinted-Ready</h3>
              </div>
              <p className="font-body text-sm text-gray-700">
                Haute résolution, pas de watermark, téléchargement immédiat, format optimisé pour Vinted.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-lg">4</span>
                </div>
                <h3 className="font-display font-bold text-lg text-black">Bonus : Description IA</h3>
              </div>
              <p className="font-body text-sm text-gray-700">
                Titre optimisé pour la recherche et description complète générée automatiquement.
              </p>
            </div>
          </div>

          {/* Process */}
          <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6 text-vinted" />
              Le Process en 30 Secondes
            </h3>
            <div className="grid sm:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-vinted border-2 border-black mx-auto mb-2 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-xl">1</span>
                </div>
                <p className="font-body text-sm text-black font-semibold">Upload ta photo</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-vinted border-2 border-black mx-auto mb-2 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-xl">2</span>
                </div>
                <p className="font-body text-sm text-black font-semibold">Configure ton mannequin</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-vinted border-2 border-black mx-auto mb-2 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-xl">3</span>
                </div>
                <p className="font-body text-sm text-black font-semibold">Génère en un clic</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-vinted border-2 border-black mx-auto mb-2 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-xl">4</span>
                </div>
                <p className="font-body text-sm text-black font-semibold">Télécharge et publie</p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Comparatif : Gratuit vs VintDress
          </h2>
          <div className="overflow-x-auto">
            <div className="bg-white border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] min-w-[600px]">
              <table className="w-full">
                <thead>
                  <tr className="border-b-3 border-black">
                    <th className="p-4 text-left font-display font-bold text-black border-r-3 border-black bg-cream">Critère</th>
                    <th className="p-4 text-center font-display font-bold text-black border-r-3 border-black">Gratuit</th>
                    <th className="p-4 text-center font-display font-bold text-black bg-mint">VintDress</th>
                  </tr>
                </thead>
                <tbody className="font-body text-sm">
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Qualité</td>
                    <td className="p-4 text-center border-r-3 border-black">Variable/Faible</td>
                    <td className="p-4 text-center bg-mint font-semibold">Professionnelle</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Temps</td>
                    <td className="p-4 text-center border-r-3 border-black">30min - 2h</td>
                    <td className="p-4 text-center bg-mint font-semibold">30 secondes</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Fiabilité</td>
                    <td className="p-4 text-center border-r-3 border-black">Aléatoire</td>
                    <td className="p-4 text-center bg-mint font-semibold">Constante</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Personnalisation</td>
                    <td className="p-4 text-center border-r-3 border-black">Limitée</td>
                    <td className="p-4 text-center bg-mint font-semibold">Totale</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Watermark</td>
                    <td className="p-4 text-center border-r-3 border-black">Souvent</td>
                    <td className="p-4 text-center bg-mint font-semibold">Jamais</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Support</td>
                    <td className="p-4 text-center border-r-3 border-black">Aucun</td>
                    <td className="p-4 text-center bg-mint font-semibold">Réactif</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold border-r-3 border-black bg-cream">Prix</td>
                    <td className="p-4 text-center border-r-3 border-black">0€ (+ ton temps)</td>
                    <td className="p-4 text-center bg-mint font-bold text-vinted text-lg">0,40€/photo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Témoignages de Vendeurs
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="font-body text-gray-700 mb-4 italic">
                "Je cherchais désespérément un outil gratuit pour mes looks Vinted. Après des heures perdues, j'ai essayé VintDress. 3,99€ et 10 minutes plus tard, j'avais 10 photos qui ont généré 5 ventes en une semaine."
              </p>
              <p className="font-display font-bold text-black">— Léa</p>
              <p className="font-body text-sm text-gray-600">Vendeuse active</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="font-body text-gray-700 mb-4 italic">
                "Le gratuit m'a coûté des ventes. Mes photos étaient moyennes, mes articles stagnaient. Depuis VintDress, je vends en moyenne en 4 jours au lieu de 3 semaines."
              </p>
              <p className="font-display font-bold text-black">— Marc</p>
              <p className="font-body text-sm text-gray-600">Vendeur régulier</p>
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            L'Investissement Le Plus Rentable
          </h2>

          <div className="bg-vinted border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6" />
              Les Maths Simples
            </h3>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-body text-xs text-gray-600 mb-1">Pack 10 photos</p>
                <p className="font-display font-bold text-2xl text-black">3,99€</p>
              </div>
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-body text-xs text-gray-600 mb-1">Prix moyen article Vinted</p>
                <p className="font-display font-bold text-2xl text-black">18€</p>
              </div>
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-body text-xs text-gray-600 mb-1">Taux de conversion</p>
                <p className="font-display font-bold text-2xl text-black">+200%</p>
              </div>
            </div>
            <div className="bg-pink-pastel border-3 border-black p-4">
              <p className="font-display font-bold text-black text-lg text-center">
                Si UNE seule de tes 10 photos génère UNE vente supplémentaire = 14,51€ net de gain
              </p>
            </div>
          </div>

          <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-3">
              ROI Réel de Nos Utilisateurs
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-gray-700"><strong>+47% de ventes</strong> le premier mois</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-gray-700"><strong>Temps de vente divisé par 3</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-gray-700"><strong>Moins de négociations</strong> sur le prix</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Summary */}
        <section className="mb-12">
          <div className="bg-pink-pastel border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-2xl text-black mb-4">
              Pour Résumer
            </h2>
            <p className="font-body text-gray-700 mb-4">
              Tu cherchais "Vinted look gratuit" ? Voici ce qu'il faut retenir :
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-sm">1</span>
                </div>
                <span className="font-body text-gray-700">Le gratuit existe mais coûte cher en temps et en ventes ratées</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-sm">2</span>
                </div>
                <span className="font-body text-gray-700">La qualité fait la différence sur une plateforme aussi compétitive</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-sm">3</span>
                </div>
                <span className="font-body text-gray-700">0,40€ par photo professionnelle est un investissement, pas une dépense</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-sm">4</span>
                </div>
                <span className="font-body text-gray-700">Les vendeurs qui réussissent ont compris cette équation</span>
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Questions Fréquentes
          </h2>
          <div className="space-y-3">
            {/* FAQ 1 */}
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>Comment créer un look Vinted gratuitement ?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Les options gratuites (demander à un ami, apps de retouche, IA gratuites) existent mais ont des limites importantes : qualité variable, temps considérable, résultats souvent inutilisables pour Vinted.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>Pourquoi les looks professionnels vendent mieux ?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Les photos portées professionnelles génèrent +300% de vues et des ventes 3x plus rapides car les acheteurs visualisent mieux le rendu du vêtement.
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>Combien coûte un look professionnel avec VintDress ?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Seulement 0,40€ par photo avec le pack 10 crédits à 3,99€. Un investissement rentabilisé dès la première vente supplémentaire.
                </p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>VintDress est-il adapté aux débutants sur Vinted ?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Oui, l'interface est simple : upload ta photo, configure le mannequin, génère en 30 secondes. Aucune compétence technique requise.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              Prêt(e) à Créer des Looks Qui Vendent ?
            </h2>
            <p className="font-body text-white mb-6 max-w-2xl mx-auto">
              VintDress te permet de créer des looks professionnels pour tes annonces Vinted à un prix accessible. Pas d'abonnement obligatoire, pas de watermark, pas de compromis sur la qualité.
            </p>
            <Link
              to="/#generator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-4 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              CRÉER MES LOOKS PRO
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="font-display font-bold text-2xl text-black mb-6">
            Articles Liés
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              to="/articles/mannequin-ia-vinted"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">Mannequin IA Vinted</h3>
              <p className="font-body text-sm text-gray-600">Découvre comment un mannequin IA peut transformer tes photos.</p>
            </Link>
            <Link
              to="/articles/ia-vinted-gratuit-pourquoi-payer"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">IA Vinted Gratuit : Pourquoi Payer</h3>
              <p className="font-body text-sm text-gray-600">Comprends pourquoi investir dans la qualité fait la différence.</p>
            </Link>
            <Link
              to="/articles/5-astuces-pour-vendre-plus-vite-sur-vinted"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">5 Astuces pour Vendre Plus Vite</h3>
              <p className="font-body text-sm text-gray-600">Optimise tes ventes avec ces stratégies éprouvées.</p>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default VintedLookGratuitAlternativeProPage;
