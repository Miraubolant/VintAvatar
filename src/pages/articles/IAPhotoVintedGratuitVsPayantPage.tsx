import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, XCircle, Clock, TrendingDown, AlertTriangle, DollarSign, Zap } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';
import { ArticleNavigation } from '../../components/ArticleNavigation';

export const IAPhotoVintedGratuitVsPayantPage: React.FC = () => {
  useSEO({
    title: "IA Photo Vinted : Pourquoi le Gratuit Ne Suffit Pas | VintDress",
    description: "IA photo Vinted gratuit vs payant : découvre pourquoi les outils gratuits ne suffisent pas et comment VintDress peut vraiment booster tes ventes.",
    keywords: "ia photo vinted gratuit, ia photo vinted, generateur photo vinted, ia vinted gratuit, photo vinted ia, outil photo vinted, ameliorer photo vinted",
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image Section */}
      <div className="relative -mt-1 h-[400px] lg:h-[500px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=500&fit=crop"
          alt="IA Photo Vinted Gratuit vs Payant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-white text-4xl lg:text-6xl mb-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              IA PHOTO VINTED
            </h1>
            <p className="font-display font-bold text-pink-pastel text-xl lg:text-2xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              Pourquoi le Gratuit Ne Suffit Pas
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
            <span className="font-body text-sm text-gray-600">18 Décembre 2025</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">7 min de lecture</span>
          </div>

          <h1 className="font-display font-bold text-4xl lg:text-5xl text-black mb-4">
            IA Photo Vinted : Pourquoi le Gratuit Ne Suffit Pas
          </h1>

          <p className="font-body text-lg text-gray-700 mb-6">
            Tu cherches une IA gratuite pour tes photos Vinted ? Découvre pourquoi les outils payants font vraiment la différence pour vendre plus vite.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["IA Photo", "Vinted", "Gratuit", "Comparatif", "Photos Vinted"].map((tag) => (
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
        <div className="bg-pink-pastel border-4 border-black p-6 mb-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-display font-bold text-black text-lg">
            Tu as tapé "IA photo Vinted gratuit" dans Google ? Tu n'es pas seul(e). Des milliers de vendeurs Vinted cherchent des solutions gratuites pour améliorer leurs photos. Mais voici la vérité que personne ne te dit : le gratuit a un coût caché.
          </p>
        </div>

        {/* La Promesse des IA Gratuites */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            La Promesse des IA Gratuites
          </h2>
          <div className="bg-white border-3 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-body text-gray-700 mb-4">
              On te promet des miracles : transforme tes photos en images professionnelles gratuitement ! Mais derrière ces promesses se cache une réalité bien différente.
            </p>
          </div>
        </section>

        {/* Ce Que Tu Obtiens Vraiment */}
        <section className="mb-12">
          <h3 className="font-display font-bold text-2xl text-black mb-6">
            Ce Que Tu Obtiens Vraiment avec le Gratuit
          </h3>

          <div className="space-y-4">
            {/* Qualité d'image */}
            <div className="bg-white border-3 border-black p-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-display font-bold text-lg text-black mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-500" />
                Qualité d'image médiocre
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span className="font-body text-sm text-gray-700">Résolution basse (souvent 512x512 pixels)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span className="font-body text-sm text-gray-700">Flou sur les détails</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span className="font-body text-sm text-gray-700">Couleurs qui ne correspondent pas à l'original</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span className="font-body text-sm text-gray-700">Textures déformées</span>
                </li>
              </ul>
            </div>

            {/* Limitations d'usage */}
            <div className="bg-white border-3 border-black p-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-display font-bold text-lg text-black mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-500" />
                Limitations d'usage
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span className="font-body text-sm text-gray-700">Files d'attente de plusieurs heures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span className="font-body text-sm text-gray-700">Limite de 1-2 images par jour</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span className="font-body text-sm text-gray-700">Publicités intrusives</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span className="font-body text-sm text-gray-700">Inscription obligatoire avec collecte de données</span>
                </li>
              </ul>
            </div>

            {/* Résultats décevants */}
            <div className="bg-white border-3 border-black p-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-display font-bold text-lg text-black mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                Résultats décevants
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span className="font-body text-sm text-gray-700">Mannequins avec des proportions irréalistes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span className="font-body text-sm text-gray-700">Vêtements qui ne ressemblent plus à l'original</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span className="font-body text-sm text-gray-700">Arrière-plans de mauvaise qualité</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span className="font-body text-sm text-gray-700">Images inutilisables pour Vinted</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Le Vrai Coût du Gratuit */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Le Vrai Coût du "Gratuit"
          </h2>
          <div className="bg-pink-pastel border-3 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-display font-bold text-black text-lg mb-4">
              Quand quelque chose est gratuit, c'est toi le produit.
            </p>
            <p className="font-body text-gray-700">
              Voici ce que te coûte réellement le gratuit :
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {/* 1. Ton Temps */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-xl">1</span>
                </div>
                <h3 className="font-display font-bold text-lg text-black">Ton Temps</h3>
              </div>
              <p className="font-body text-sm text-gray-700 mb-3">
                Combien d'heures passes-tu à tester différents outils, attendre dans des files, refaire des générations ratées ?
              </p>
              <div className="bg-pink-pastel border-2 border-black p-3">
                <p className="font-display font-bold text-black text-sm">
                  2h de ton temps = 20€ de valeur
                </p>
                <p className="font-body text-xs text-gray-700 mt-1">
                  Un pack VintDress à 3,99€ te fait économiser des heures.
                </p>
              </div>
            </div>

            {/* 2. Tes Ventes Perdues */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-xl">2</span>
                </div>
                <h3 className="font-display font-bold text-lg text-black">Ventes Perdues</h3>
              </div>
              <p className="font-body text-sm text-gray-700 mb-3">
                Une photo de mauvaise qualité sur Vinted, c'est :
              </p>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2"><TrendingDown className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Moins de clics</span></li>
                <li className="flex gap-2"><TrendingDown className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Moins de ventes</span></li>
                <li className="flex gap-2"><TrendingDown className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Vêtements qui stagnent</span></li>
              </ul>
            </div>

            {/* 3. Ta Réputation */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-xl">3</span>
                </div>
                <h3 className="font-display font-bold text-lg text-black">Ta Réputation</h3>
              </div>
              <p className="font-body text-sm text-gray-700">
                Des photos floues ou déformées donnent une image peu professionnelle. Les acheteurs Vinted font confiance aux vendeurs qui présentent bien leurs articles.
              </p>
            </div>
          </div>
        </section>

        {/* Pourquoi la Qualité a un Prix */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Pourquoi la Qualité a un Prix
          </h2>
          <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-body text-gray-700 mb-4">
              L'intelligence artificielle de qualité professionnelle nécessite :
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-display font-bold text-black text-sm">Des serveurs GPU puissants</p>
                  <p className="font-body text-xs text-gray-600">Coûtant des milliers d'euros par mois</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-display font-bold text-black text-sm">Des modèles IA avancés</p>
                  <p className="font-body text-xs text-gray-600">Développés pendant des années</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-display font-bold text-black text-sm">Une infrastructure fiable</p>
                  <p className="font-body text-xs text-gray-600">Sans temps d'attente</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-display font-bold text-black text-sm">Un support technique</p>
                  <p className="font-body text-xs text-gray-600">En cas de problème</p>
                </div>
              </li>
            </ul>
            <div className="bg-white border-2 border-black p-4 mt-4">
              <p className="font-display font-bold text-black text-center">
                C'est impossible de proposer tout ça gratuitement de manière durable.
              </p>
            </div>
          </div>
        </section>

        {/* VintDress : L'Investissement Rentable */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            VintDress : L'Investissement Rentable
          </h2>

          <div className="bg-vinted border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-display font-bold text-white text-lg">
              Soyons clairs : VintDress est un service payant. Nous ne prétendons pas être gratuits, et voici pourquoi c'est mieux pour toi.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto mb-8">
            <div className="bg-white border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] min-w-[600px]">
              <table className="w-full">
                <thead>
                  <tr className="border-b-3 border-black">
                    <th className="p-4 text-left font-display font-bold text-black border-r-3 border-black bg-cream">Caractéristique</th>
                    <th className="p-4 text-center font-display font-bold text-black border-r-3 border-black">Gratuit</th>
                    <th className="p-4 text-center font-display font-bold text-black bg-mint">VintDress</th>
                  </tr>
                </thead>
                <tbody className="font-body text-sm">
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Résolution</td>
                    <td className="p-4 text-center border-r-3 border-black">512px</td>
                    <td className="p-4 text-center bg-mint font-semibold">Haute résolution</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Temps d'attente</td>
                    <td className="p-4 text-center border-r-3 border-black">1-2h</td>
                    <td className="p-4 text-center bg-mint font-semibold">30 secondes</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Qualité mannequin</td>
                    <td className="p-4 text-center border-r-3 border-black">Variable</td>
                    <td className="p-4 text-center bg-mint font-semibold">Réaliste</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Personnalisation</td>
                    <td className="p-4 text-center border-r-3 border-black">Limitée</td>
                    <td className="p-4 text-center bg-mint font-semibold">Complète</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Limite quotidienne</td>
                    <td className="p-4 text-center border-r-3 border-black">1-2</td>
                    <td className="p-4 text-center bg-mint font-semibold">Selon ton pack</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Pricing */}
          <h3 className="font-display font-bold text-2xl text-black mb-4">
            Nos Tarifs Transparents
          </h3>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-4xl font-display font-bold text-vinted mb-2">3,99€</div>
              <p className="font-display font-bold text-black mb-1">10 générations</p>
              <p className="font-body text-xs text-gray-600">0,40€ par image</p>
            </div>
            <div className="bg-white border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-4xl font-display font-bold text-vinted mb-2">7,99€</div>
              <p className="font-display font-bold text-black mb-1">25 générations</p>
              <p className="font-body text-xs text-gray-600">0,32€ par image</p>
            </div>
            <div className="bg-white border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-4xl font-display font-bold text-vinted mb-2">12,99€</div>
              <p className="font-display font-bold text-black mb-1">40 générations/mois</p>
              <p className="font-body text-xs text-gray-600">0,32€ par image</p>
            </div>
          </div>

          {/* ROI */}
          <div className="bg-pink-pastel border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-vinted" />
              Le Retour Sur Investissement
            </h3>
            <p className="font-body text-gray-700 mb-3">
              Faisons le calcul :
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-vinted mt-1">•</span>
                <span className="font-body text-sm text-gray-700">Ton vêtement est en vente à <strong>15€</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted mt-1">•</span>
                <span className="font-body text-sm text-gray-700">Avec une photo basique, il stagne <strong>30 jours</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted mt-1">•</span>
                <span className="font-body text-sm text-gray-700">Avec une photo VintDress, il se vend en <strong>3 jours</strong></span>
              </li>
            </ul>
            <div className="bg-white border-3 border-black p-4">
              <p className="font-display font-bold text-black text-lg text-center">
                Une seule vente accélérée rembourse 4× ton investissement.
              </p>
            </div>
          </div>
        </section>

        {/* Comparatif Alternatives */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Comparatif Honnête : Alternatives du Marché
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Gratuit */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                Les Outils Gratuits
              </h3>
              <div className="mb-4">
                <p className="font-display font-bold text-sm text-green-600 mb-2">AVANTAGES :</p>
                <ul className="space-y-1">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">C'est gratuit (en apparence)</span></li>
                </ul>
              </div>
              <div>
                <p className="font-display font-bold text-sm text-red-600 mb-2">INCONVÉNIENTS :</p>
                <ul className="space-y-1">
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Qualité insuffisante pour Vinted</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Temps perdu considérable</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Résultats aléatoires</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Pas de support</span></li>
                </ul>
              </div>
            </div>

            {/* VintDress */}
            <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                VintDress
              </h3>
              <div className="mb-4">
                <p className="font-display font-bold text-sm text-green-600 mb-2">AVANTAGES :</p>
                <ul className="space-y-1">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Qualité professionnelle garantie</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Génération en 30 secondes</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Mannequin personnalisable</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Support réactif</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Conçu spécifiquement pour Vinted</span></li>
                </ul>
              </div>
              <div>
                <p className="font-display font-bold text-sm text-orange-600 mb-2">INCONVÉNIENTS :</p>
                <ul className="space-y-1">
                  <li className="flex gap-2"><AlertTriangle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Service payant (dès 3,99€)</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Témoignages de Vendeurs Convertis
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {/* Testimonial 1 */}
            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="font-body text-sm text-gray-700 mb-3 italic">
                "J'ai passé des heures sur des outils gratuits. Les 3,99€ de VintDress m'ont fait gagner un temps fou et mes ventes ont décollé."
              </p>
              <p className="font-display font-bold text-black text-sm">— Sarah</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="font-body text-sm text-gray-700 mb-3 italic">
                "Je calculais mal : je perdais plus en temps et en ventes non réalisées qu'en payant un outil pro."
              </p>
              <p className="font-display font-bold text-black text-sm">— Lucas</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="font-body text-sm text-gray-700 mb-3 italic">
                "Le gratuit m'a donné des images inutilisables. VintDress, ça marche vraiment."
              </p>
              <p className="font-display font-bold text-black text-sm">— Emma</p>
            </div>
          </div>
        </section>

        {/* Conseil Honnête */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-white mb-4">
              Notre Conseil Honnête
            </h3>
            <p className="font-body text-white mb-3">
              Si tu vends 1-2 articles par an, les outils gratuits peuvent suffire malgré leurs défauts.
            </p>
            <p className="font-body text-white mb-4">
              Mais si tu vends régulièrement sur Vinted et que tu veux des photos qui convertissent, gagner du temps, et avoir des résultats garantis :
            </p>
            <div className="bg-white border-3 border-black p-4">
              <p className="font-display font-bold text-black text-lg text-center">
                Alors un outil professionnel comme VintDress est un investissement, pas une dépense.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <div className="bg-pink-pastel border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-2xl text-black mb-4">
              Conclusion
            </h2>
            <p className="font-body text-gray-700 mb-4">
              La recherche "IA photo Vinted gratuit" est légitime. Tout le monde veut économiser. Mais la vraie économie, c'est de <strong>vendre plus vite avec moins d'effort</strong>.
            </p>
            <p className="font-body text-gray-700 mb-4">
              Les outils gratuits ont leur place pour tester ou dépanner. Pour vendre sérieusement sur Vinted, la qualité professionnelle fait toute la différence.
            </p>
            <div className="bg-white border-2 border-black p-4">
              <p className="font-display font-bold text-vinted text-center">
                VintDress est payant parce que la qualité a un prix. Et ce prix est ridicule comparé aux résultats.
              </p>
            </div>
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
                <span>Existe-t-il une IA photo Vinted vraiment gratuite et de qualité ?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Les outils gratuits existent mais produisent généralement des résultats de qualité insuffisante pour Vinted : basse résolution, déformations, temps d'attente longs.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>Pourquoi VintDress n'est pas gratuit ?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  La technologie IA professionnelle nécessite des serveurs puissants et des modèles avancés qui ont un coût réel. VintDress propose des tarifs accessibles dès 3,99€ pour garantir une qualité optimale.
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>Le payant vaut-il vraiment le coup pour Vinted ?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Oui, si tu vends régulièrement. Une seule vente accélérée grâce à une meilleure photo rembourse plusieurs fois le coût de l'outil.
                </p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>Combien coûte VintDress ?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  VintDress propose des packs à partir de 3,99€ pour 10 générations, soit 0,40€ par photo professionnelle.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              Prêt(e) à Investir dans Tes Ventes ?
            </h2>
            <p className="font-body text-white mb-6 max-w-2xl mx-auto">
              Découvre VintDress maintenant et transforme tes photos Vinted en véritables outils de vente.
            </p>
            <Link
              to="/#generator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-4 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              COMMENCER MAINTENANT
              <Zap className="w-5 h-5" />
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
              to="/articles/guide-complet-photos-vinted-2025"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">Guide Complet Photos Vinted 2025</h3>
              <p className="font-body text-sm text-gray-600">Toutes les techniques pour des photos qui vendent.</p>
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

export default IAPhotoVintedGratuitVsPayantPage;
