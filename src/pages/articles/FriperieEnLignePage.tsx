import React from 'react';
import { useSEO } from '../../hooks/useSEO';
import { ArticleNavigation } from '../../components/ArticleNavigation';
import { ShoppingBag, Search, Camera, TrendingUp, Shield, Star, CheckCircle, X, Store, Smartphone } from 'lucide-react';

export default function FriperieEnLignePage() {
  useSEO({
    title: "Friperie en Ligne : Les Meilleures Plateformes 2026 | VintDress",
    description: "Guide complet des friperies en ligne en 2026. Comparatif Vinted, Vestiaire Collective, Depop. Conseils pour acheter et vendre des vêtements d'occasion.",
    keywords: "friperie en ligne, vinted, vestiaire collective, depop, vetements occasion, seconde main, mode durable",
  });

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Image Section */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 h-[400px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=400&fit=crop"
          alt="Friperie en ligne - vêtements vintage et seconde main"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
              Friperie en Ligne
            </h1>
            <p className="font-display text-xl md:text-2xl text-white">
              Les Meilleures Plateformes 2026
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
            <span className="text-black">13 Janvier 2026</span>
            <span className="text-black">•</span>
            <span className="text-black">12 min de lecture</span>
            <span className="text-black">•</span>
            <span className="text-black">Par Emma Dubois</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {['Friperie', 'Seconde Main', 'Vinted', 'Mode Durable', 'Comparatif'].map((tag) => (
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
            Les friperies en ligne ont révolutionné notre façon d'acheter et de vendre des vêtements.
            Fini le temps où il fallait écumer les boutiques de seconde main pendant des heures !
            Aujourd'hui, des millions de pièces uniques sont accessibles en quelques clics.
          </p>

          <div className="flex items-start gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <ShoppingBag className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="font-display font-bold text-2xl mb-3">La Révolution de la Seconde Main</h2>
              <div className="bg-mint/30 border-2 border-black p-4 mb-4">
                <h3 className="font-semibold mb-2">Les chiffres clés 2026 :</h3>
                <ul className="space-y-1">
                  <li>• 45 millions d'utilisateurs Vinted en Europe</li>
                  <li>• Marché de la seconde main : +25% par an</li>
                  <li>• 70% des 18-35 ans achètent d'occasion</li>
                  <li>• Économies moyennes : 60% vs neuf</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-pink-pastel/30 border-3 border-black p-6">
            <h3 className="font-display font-bold text-lg mb-3">Pourquoi les friperies en ligne cartonnent :</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Mode durable et éco-responsable',
                'Prix imbattables vs fast-fashion',
                'Pièces uniques et vintage',
                'Facilité d\'achat 24h/24'
              ].map((point, idx) => (
                <div key={idx} className="flex items-start">
                  <Star className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vinted : La Friperie N°1 */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Store className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-display font-bold text-3xl">Vinted : La Friperie en Ligne N°1</h2>
          </div>

          <div className="bg-vinted/10 border-3 border-black p-6 mb-6">
            <p className="text-lg mb-4">
              Avec plus de 45 millions d'utilisateurs, Vinted est devenu LA référence incontournable
              de la seconde main en Europe. Pourquoi un tel succès ?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-mint/50 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-vinted" />
                Avantages Vinted
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span><strong>0% commission</strong> pour les vendeurs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Expédition simplifiée (étiquettes intégrées)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Protection acheteur incluse</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Messagerie intégrée pour négocier</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Application mobile intuitive</span>
                </li>
              </ul>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Catégories populaires :</h3>
              <ul className="space-y-2">
                {[
                  'Vêtements femme (60% des ventes)',
                  'Mode enfant (croissance +40%)',
                  'Vêtements homme',
                  'Accessoires et sacs',
                  'Chaussures',
                  'Vintage et collector'
                ].map((cat, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="bg-vinted text-white text-xs font-bold w-5 h-5 flex items-center justify-center mr-2 border border-black">
                      {idx + 1}
                    </span>
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-cream border-3 border-black p-6">
            <h3 className="font-display font-bold text-xl mb-4">Vinted vs Friperie Physique</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-2 border-black">
                <thead>
                  <tr className="bg-vinted text-white">
                    <th className="border-2 border-black p-2 text-left">Critère</th>
                    <th className="border-2 border-black p-2 text-center">Vinted</th>
                    <th className="border-2 border-black p-2 text-center">Friperie physique</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border-2 border-black p-2 font-semibold">Choix</td>
                    <td className="border-2 border-black p-2 text-center text-green-600 font-bold">Millions d'articles</td>
                    <td className="border-2 border-black p-2 text-center">Limité au stock</td>
                  </tr>
                  <tr className="bg-cream">
                    <td className="border-2 border-black p-2 font-semibold">Prix</td>
                    <td className="border-2 border-black p-2 text-center text-green-600 font-bold">Négociables</td>
                    <td className="border-2 border-black p-2 text-center">Souvent fixes</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border-2 border-black p-2 font-semibold">Disponibilité</td>
                    <td className="border-2 border-black p-2 text-center text-green-600 font-bold">24h/24</td>
                    <td className="border-2 border-black p-2 text-center">Horaires boutique</td>
                  </tr>
                  <tr className="bg-cream">
                    <td className="border-2 border-black p-2 font-semibold">Essayage</td>
                    <td className="border-2 border-black p-2 text-center">Non (mais photos)</td>
                    <td className="border-2 border-black p-2 text-center text-green-600 font-bold">Oui</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Comparatif des Plateformes */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Search className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Comparatif des Friperies en Ligne</h2>
          </div>

          {/* Vinted */}
          <div className="bg-vinted/10 border-3 border-black p-6 mb-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display font-bold text-2xl">Vinted</h3>
              <span className="bg-vinted text-white px-3 py-1 font-bold border-2 border-black">N°1 Recommandé</span>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="font-semibold">Type :</p>
                <p>Généraliste seconde main</p>
              </div>
              <div>
                <p className="font-semibold">Commission vendeur :</p>
                <p className="text-green-600 font-bold">0%</p>
              </div>
              <div>
                <p className="font-semibold">Protection acheteur :</p>
                <p>5% + 0,70€</p>
              </div>
            </div>
            <p className="mt-3 text-sm"><strong>Idéal pour :</strong> Tout le monde, du débutant au vendeur pro</p>
          </div>

          {/* Vestiaire Collective */}
          <div className="bg-pink-pastel/30 border-3 border-black p-6 mb-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display font-bold text-2xl">Vestiaire Collective</h3>
              <span className="bg-black text-white px-3 py-1 font-bold border-2 border-black">Luxe</span>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="font-semibold">Type :</p>
                <p>Luxe et créateurs</p>
              </div>
              <div>
                <p className="font-semibold">Commission vendeur :</p>
                <p className="text-orange-600 font-bold">15-25%</p>
              </div>
              <div>
                <p className="font-semibold">Authentification :</p>
                <p>Contrôle qualité inclus</p>
              </div>
            </div>
            <p className="mt-3 text-sm"><strong>Idéal pour :</strong> Vendre/acheter du luxe (Chanel, Hermès, LV...)</p>
          </div>

          {/* Depop */}
          <div className="bg-mint/50 border-3 border-black p-6 mb-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display font-bold text-2xl">Depop</h3>
              <span className="bg-purple-500 text-white px-3 py-1 font-bold border-2 border-black">Tendance</span>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="font-semibold">Type :</p>
                <p>Streetwear, vintage, tendance</p>
              </div>
              <div>
                <p className="font-semibold">Commission vendeur :</p>
                <p className="text-orange-600 font-bold">10%</p>
              </div>
              <div>
                <p className="font-semibold">Audience :</p>
                <p>Gen Z, créatifs</p>
              </div>
            </div>
            <p className="mt-3 text-sm"><strong>Idéal pour :</strong> Pièces uniques, streetwear, vintage tendance</p>
          </div>

          {/* Leboncoin */}
          <div className="bg-cream border-3 border-black p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display font-bold text-2xl">Leboncoin</h3>
              <span className="bg-orange-500 text-white px-3 py-1 font-bold border-2 border-black">Local</span>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="font-semibold">Type :</p>
                <p>Petites annonces généralistes</p>
              </div>
              <div>
                <p className="font-semibold">Commission vendeur :</p>
                <p className="text-green-600 font-bold">0% (sauf options)</p>
              </div>
              <div>
                <p className="font-semibold">Spécificité :</p>
                <p>Remise en main propre</p>
              </div>
            </div>
            <p className="mt-3 text-sm"><strong>Idéal pour :</strong> Ventes locales, gros volumes, meubles</p>
          </div>
        </div>

        {/* Comment Vendre sur une Friperie en Ligne */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Camera className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Comment Vendre sur une Friperie en Ligne</h2>
          </div>

          <div className="space-y-4 mb-6">
            {[
              { num: '1', title: 'Créer un compte vendeur', desc: 'Inscription gratuite, profil complet avec photo' },
              { num: '2', title: 'Photographier tes articles', desc: 'Photos lumineuses, plusieurs angles, détails' },
              { num: '3', title: 'Rédiger des descriptions', desc: 'Marque, taille, état, mesures, défauts' },
              { num: '4', title: 'Fixer le bon prix', desc: 'Analyse de la concurrence, marge de négociation' },
              { num: '5', title: 'Expédier rapidement', desc: 'Emballage soigné, envoi sous 48h' },
            ].map((step) => (
              <div key={step.num} className="bg-cream border-3 border-black p-4">
                <div className="flex items-start gap-3">
                  <span className="bg-vinted text-white font-display font-bold w-10 h-10 flex items-center justify-center flex-shrink-0 border-2 border-black text-lg">
                    {step.num}
                  </span>
                  <div>
                    <p className="font-semibold text-lg">{step.title}</p>
                    <p className="text-sm text-gray-600">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-vinted border-3 border-black p-6">
            <p className="text-white text-lg mb-4">
              Le secret pour vendre rapidement ? <strong>Des photos professionnelles !</strong>
            </p>
            <div className="bg-white border-2 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">La solution VintDress :</h3>
              <p className="mb-3">Notre IA transforme tes photos de vêtements en photos portées professionnelles :</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span><strong>+300% de vues</strong> sur tes annonces</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Ventes <strong>3x plus rapides</strong></span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Résultat en <strong>30 secondes</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tendances Friperie 2026 */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-display font-bold text-3xl">Tendances Friperie en Ligne 2026</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-mint/50 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Pièces les plus recherchées :</h3>
              <ul className="space-y-2">
                {[
                  'Jean Levi\'s vintage 501',
                  'Vestes en cuir années 80-90',
                  'Robes vintage années 70',
                  'Sportswear rétro (Nike, Adidas)',
                  'Sacs de luxe d\'occasion',
                  'Manteaux en laine oversize'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <Star className="w-4 h-4 mr-2 text-vinted" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Marques qui cartonnent :</h3>
              <ul className="space-y-2">
                {[
                  'Levi\'s (vintage surtout)',
                  'Nike / Adidas vintage',
                  'The North Face',
                  'Carhartt',
                  'Ralph Lauren',
                  'Patagonia'
                ].map((brand, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-vinted" />
                    {brand}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-cream border-3 border-black p-6">
            <h3 className="font-display font-bold text-xl mb-4">Évolution du marché :</h3>
            <div className="space-y-3">
              <div className="bg-white border-2 border-black p-3 flex items-center justify-between">
                <span>Vêtements femme</span>
                <span className="font-bold text-vinted">60% du marché</span>
              </div>
              <div className="bg-white border-2 border-black p-3 flex items-center justify-between">
                <span>Mode enfant</span>
                <span className="font-bold text-green-600">+40% croissance</span>
              </div>
              <div className="bg-white border-2 border-black p-3 flex items-center justify-between">
                <span>Luxe seconde main</span>
                <span className="font-bold text-green-600">+35% croissance</span>
              </div>
              <div className="bg-white border-2 border-black p-3 flex items-center justify-between">
                <span>Vintage années 90</span>
                <span className="font-bold text-green-600">+50% recherches</span>
              </div>
            </div>
          </div>
        </div>

        {/* Conseils pour Acheteurs */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Shield className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Conseils pour Acheter en Sécurité</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-vinted/10 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-vinted" />
                À vérifier
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Photos claires et détaillées</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Description complète avec mesures</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Avis vendeur positifs (+4,5 étoiles)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Défauts mentionnés honnêtement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Vendeur réactif aux messages</span>
                </li>
              </ul>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3 flex items-center gap-2">
                <X className="w-6 h-6 text-red-500" />
                Red flags
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Prix trop beaux pour être vrais</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Photos floues ou stock</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Compte créé récemment sans ventes</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Demande de paiement hors plateforme</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Refus de photos supplémentaires</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-cream border-3 border-black p-6">
            <h3 className="font-display font-bold text-xl mb-4 flex items-center gap-2">
              <Smartphone className="w-6 h-6 text-vinted" />
              Astuces pour bien négocier
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">Sois poli et direct</p>
                <p className="text-sm text-gray-600">"Bonjour, seriez-vous ouvert à X€ ?"</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">Propose un prix réaliste</p>
                <p className="text-sm text-gray-600">-10 à 20% max du prix affiché</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">Achète plusieurs articles</p>
                <p className="text-sm text-gray-600">Les lots permettent de négocier plus</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">Sois réactif</p>
                <p className="text-sm text-gray-600">Une offre acceptée = achat rapide</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Questions Fréquentes</h2>

          <div className="space-y-4">
            <div className="bg-cream border-3 border-black p-4">
              <h3 className="font-display font-bold text-lg mb-2">Quelle est la meilleure friperie en ligne ?</h3>
              <p className="text-gray-700">
                Vinted est la meilleure option pour la plupart des utilisateurs grâce à ses 0% de commission
                vendeur, son large choix et sa facilité d'utilisation. Pour le luxe, privilégiez Vestiaire Collective.
              </p>
            </div>

            <div className="bg-cream border-3 border-black p-4">
              <h3 className="font-display font-bold text-lg mb-2">Est-ce fiable d'acheter sur une friperie en ligne ?</h3>
              <p className="text-gray-700">
                Oui, les grandes plateformes comme Vinted offrent une protection acheteur. Votre argent est
                bloqué jusqu'à validation de la réception. En cas de problème, vous êtes remboursé.
              </p>
            </div>

            <div className="bg-cream border-3 border-black p-4">
              <h3 className="font-display font-bold text-lg mb-2">Comment bien vendre sur une friperie en ligne ?</h3>
              <p className="text-gray-700">
                Les 3 clés du succès : photos de qualité (utilisez VintDress pour des photos portées pro),
                descriptions détaillées avec mesures, et prix compétitifs basés sur la concurrence.
              </p>
            </div>

            <div className="bg-cream border-3 border-black p-4">
              <h3 className="font-display font-bold text-lg mb-2">Combien peut-on gagner sur une friperie en ligne ?</h3>
              <p className="text-gray-700">
                Cela dépend du volume et de la qualité. Les vendeurs actifs sur Vinted génèrent en moyenne
                200-500€/mois. Les top vendeurs avec des pièces de qualité peuvent dépasser 2000€/mois.
              </p>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Conclusion</h2>
          <p className="text-lg mb-6">
            Les friperies en ligne ont démocratisé l'accès à la mode de seconde main. Que tu sois acheteur
            ou vendeur, ces plateformes offrent des opportunités incroyables pour consommer de façon plus
            responsable tout en faisant de bonnes affaires.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              { title: 'Vinted', desc: 'La référence généraliste' },
              { title: 'Vestiaire Collective', desc: 'Le luxe authentifié' },
              { title: 'Depop', desc: 'La tendance streetwear' },
            ].map((platform) => (
              <div key={platform.title} className="bg-cream border-3 border-black p-4 text-center">
                <p className="font-display font-bold text-lg">{platform.title}</p>
                <p className="text-sm text-gray-600">{platform.desc}</p>
              </div>
            ))}
          </div>

          <a
            href="/"
            className="inline-block bg-mint border-4 border-black px-8 py-4 font-display font-bold text-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            Booster mes ventes avec VintDress
          </a>
        </div>

        {/* Articles Liés */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-display font-bold text-2xl mb-6">Articles Liés</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="/articles/vendre-vintage-vinted-guide"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Vendre du Vintage sur Vinted →</p>
            </a>
            <a
              href="/articles/comment-vendre-sur-vinted"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Guide Vente Vinted →</p>
            </a>
            <a
              href="/articles/guide-complet-photos-vinted-2025"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Guide Photos Vinted →</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
