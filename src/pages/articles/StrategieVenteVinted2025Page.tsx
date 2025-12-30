import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, XCircle, TrendingUp, Target, DollarSign, FileText, Users, BarChart, Calendar, Zap } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';
import { ArticleNavigation } from '../../components/ArticleNavigation';

export const StrategieVenteVinted2025Page: React.FC = () => {
  useSEO({
    title: "Stratégie de Vente Vinted : Dominer en 2025 | VintDress",
    description: "Stratégies de vente Vinted 2025 : prix, titres, timing. Les secrets des top vendeurs pour exploser tes ventes !",
    keywords: "stratégie vente vinted 2025, vendre plus vinted, prix vinted, optimiser ventes vinted, business vinted",
  });

  return (
    <div className="min-h-screen">
      {/* Hero Image Section */}
      <div className="relative h-[400px] lg:h-[500px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=500&fit=crop"
          alt="Stratégie Vente Vinted 2025"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-white text-4xl lg:text-6xl mb-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              STRATÉGIE VINTED 2025
            </h1>
            <p className="font-display font-bold text-mint text-xl lg:text-2xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              Dominer le Marché Cette Année
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
              STRATÉGIE
            </span>
            <span className="font-body text-sm text-gray-600">Par Équipe VintDress</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">12 Novembre 2025</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">15 min de lecture</span>
          </div>

          <h1 className="font-display font-bold text-4xl lg:text-5xl text-black mb-4">
            Stratégie de Vente Vinted : Dominer en 2025
          </h1>

          <p className="font-body text-lg text-gray-700 mb-6">
            Les stratégies secrètes des top vendeurs pour exploser tes ventes Vinted cette année !
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["Stratégie", "Vente", "Vinted", "2025", "Business", "E-commerce"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white border-2 border-black text-black font-body text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-vinted border-4 border-black p-6 mb-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-display font-bold text-white text-lg mb-4">
            Le marché Vinted n'a jamais été aussi compétitif. Pour réussir en 2025, il faut plus qu'une simple belle photo : il faut une vraie stratégie !
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="bg-white border-2 border-black p-3">
              <p className="font-body text-sm text-gray-700">✓ 65 millions d'utilisateurs actifs</p>
            </div>
            <div className="bg-white border-2 border-black p-3">
              <p className="font-body text-sm text-gray-700">✓ 97% des achats sur smartphone</p>
            </div>
          </div>
        </div>

        {/* Chapitre 1: Connaître Ton Marché */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <Target className="w-8 h-8 text-vinted" />
            Chapitre 1 : Connaître Ton Marché
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Analyser la concurrence */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                Analyser la Concurrence
              </h3>
              <p className="font-body text-sm text-gray-700 mb-3">
                Technique du "Price Benchmarking" :
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Recherche 10 articles similaires</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Note les prix, états et présentations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Positionne-toi stratégiquement</span>
                </li>
              </ul>
            </div>

            {/* Timing parfait */}
            <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                Les Créneaux Gagnants 2025
              </h3>
              <div className="space-y-3">
                <div className="bg-white border-2 border-black p-3">
                  <p className="font-display font-bold text-sm text-black">Dimanche 19h-21h</p>
                  <p className="font-body text-xs text-gray-600">Peak des vues (+340%)</p>
                </div>
                <div className="bg-white border-2 border-black p-3">
                  <p className="font-display font-bold text-sm text-black">Mercredi 12h-14h</p>
                  <p className="font-body text-xs text-gray-600">Pause déjeuner shopping</p>
                </div>
                <div className="bg-white border-2 border-black p-3">
                  <p className="font-display font-bold text-sm text-black">Vendredi 17h-20h</p>
                  <p className="font-body text-xs text-gray-600">Préparation week-end</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapitre 2: Optimisation des Titres */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <FileText className="w-8 h-8 text-vinted" />
            Chapitre 2 : Optimisation des Titres
          </h2>

          <div className="bg-vinted border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-white mb-4">
              La Formule Magique
            </h3>
            <div className="bg-white border-3 border-black p-4 mb-4">
              <code className="font-display font-bold text-black">
                MARQUE + TYPE + DÉTAIL UNIQUE + TAILLE + ÉTAT
              </code>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-pink-pastel border-2 border-black p-3">
                <p className="font-body text-xs text-gray-600 mb-1">❌ Mauvais exemple</p>
                <p className="font-body text-sm text-gray-700 line-through">"Robe noire M"</p>
              </div>
              <div className="bg-mint border-2 border-black p-3">
                <p className="font-body text-xs text-gray-600 mb-1">✅ Bon exemple</p>
                <p className="font-body text-sm text-black font-semibold">"ZARA Robe Blazer Noire Boutons Dorés T.M Parfait État"</p>
              </div>
            </div>
          </div>

          {/* Top 10 mots-clés */}
          <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4">
              Top 10 des Mots Qui Vendent
            </h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {["NEUF / JAMAIS PORTÉ", "ÉDITION LIMITÉE", "VINTAGE AUTHENTIQUE", "TENDANCE 2025", "PARFAIT ÉTAT",
                "PIÈCE RARE", "COLLECTION PRIVÉE", "PRIX SACRIFIÉ", "URGENT VENTE", "DERNIÈRE PIÈCE"].map((mot, i) => (
                <div key={i} className="bg-mint border-2 border-black p-2 text-center">
                  <span className="font-display font-bold text-xs text-black">{i + 1}. {mot}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chapitre 3: Stratégie de Prix */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <DollarSign className="w-8 h-8 text-vinted" />
            Chapitre 3 : Stratégie de Prix
          </h2>

          <div className="bg-pink-pastel border-3 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-3">
              Psychologie des Prix
            </h3>
            <ul className="space-y-2">
              <li className="flex gap-2"><Zap className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Finir par <strong>9</strong> ou <strong>5</strong> : 19€, 25€, 35€</span></li>
              <li className="flex gap-2"><Zap className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Prix cassé initial puis "réduction"</span></li>
              <li className="flex gap-2"><Zap className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Bundle deals pour augmenter le panier</span></li>
            </ul>
          </div>

          {/* Grille tarifaire */}
          <div className="overflow-x-auto">
            <div className="bg-white border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] min-w-[600px]">
              <h3 className="font-display font-bold text-xl text-black p-4 border-b-3 border-black bg-cream">
                Grille Tarifaire 2025
              </h3>
              <table className="w-full">
                <thead>
                  <tr className="border-b-3 border-black">
                    <th className="p-4 text-left font-display font-bold text-black border-r-3 border-black bg-cream">Catégorie</th>
                    <th className="p-4 text-center font-display font-bold text-black border-r-3 border-black">État Neuf</th>
                    <th className="p-4 text-center font-display font-bold text-black border-r-3 border-black">Très Bon</th>
                    <th className="p-4 text-center font-display font-bold text-black">Bon</th>
                  </tr>
                </thead>
                <tbody className="font-body text-sm">
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Fast Fashion</td>
                    <td className="p-4 text-center border-r-3 border-black">40-60%</td>
                    <td className="p-4 text-center border-r-3 border-black">30-40%</td>
                    <td className="p-4 text-center">20-30%</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Marques Premium</td>
                    <td className="p-4 text-center border-r-3 border-black">50-70%</td>
                    <td className="p-4 text-center border-r-3 border-black">40-50%</td>
                    <td className="p-4 text-center">30-40%</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Luxe/Designer</td>
                    <td className="p-4 text-center border-r-3 border-black">60-80%</td>
                    <td className="p-4 text-center border-r-3 border-black">50-60%</td>
                    <td className="p-4 text-center">40-50%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Chapitre 4: Description */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Chapitre 4 : Description qui Convertit
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Template */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-4">
                Template Gagnant
              </h3>
              <div className="space-y-3">
                <div className="bg-vinted border-2 border-black p-3">
                  <p className="font-display font-bold text-white text-sm">🔥 ACCROCHE ÉMOTIONNELLE</p>
                </div>
                <div className="bg-mint border-2 border-black p-3">
                  <p className="font-display font-bold text-black text-sm">✨ DÉTAILS</p>
                  <p className="font-body text-xs text-gray-700">Marque, taille, matières, état</p>
                </div>
                <div className="bg-pink-pastel border-2 border-black p-3">
                  <p className="font-display font-bold text-black text-sm">📦 INFOS PRATIQUES</p>
                  <p className="font-body text-xs text-gray-700">Envoi, emballage, questions</p>
                </div>
              </div>
            </div>

            {/* Storytelling */}
            <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-4">
                Storytelling Puissant
              </h3>
              <div className="space-y-3">
                <div className="bg-white border-2 border-black p-3">
                  <p className="font-body text-xs text-gray-600 mb-1">❌ Basique</p>
                  <p className="font-body text-sm text-gray-700">"Jean Levi's 501 taille 28, bon état"</p>
                </div>
                <div className="bg-white border-2 border-black p-3">
                  <p className="font-body text-xs text-gray-600 mb-1">✅ Transformé</p>
                  <p className="font-body text-sm text-black">"💙 Ce Levi's 501 vintage a une âme ! Déniché dans une friperie parisienne, il a ce je-ne-sais-quoi qui fait craquer."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapitre 5: Gestion des Stocks */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Chapitre 5 : Gestion des Stocks
          </h2>

          <div className="bg-vinted border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-white mb-4">
              Stratégie des 30 Jours
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-display font-bold text-vinted text-lg mb-1">Jour 1-10</p>
                <p className="font-body text-sm text-gray-700">Prix standard</p>
              </div>
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-display font-bold text-vinted text-lg mb-1">Jour 11-20</p>
                <p className="font-body text-sm text-gray-700">-10% + boost</p>
              </div>
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-display font-bold text-vinted text-lg mb-1">Jour 21-30</p>
                <p className="font-body text-sm text-gray-700">-20% + repost</p>
              </div>
            </div>
          </div>
        </section>

        {/* Chapitre 6: Relation Client */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <Users className="w-8 h-8 text-vinted" />
            Chapitre 6 : Relation Client 2025
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                Service Client d'Exception
              </h3>
              <ul className="space-y-2">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Réponse en moins de 2h</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Photos supplémentaires sur demande</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Flexibilité sur les négociations</span></li>
              </ul>
            </div>

            <div className="bg-pink-pastel border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                Programme VIP Maison
              </h3>
              <div className="space-y-2">
                <div className="bg-white border-2 border-black p-3">
                  <p className="font-display font-bold text-sm text-black">5% sur le 2ème achat</p>
                </div>
                <div className="bg-white border-2 border-black p-3">
                  <p className="font-display font-bold text-sm text-black">10% sur le 3ème achat</p>
                </div>
                <div className="bg-white border-2 border-black p-3">
                  <p className="font-display font-bold text-sm text-black">Accès prioritaire aux nouveautés</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapitre 7: Analytics */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <BarChart className="w-8 h-8 text-vinted" />
            Chapitre 7 : Analytics et Optimisation
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                KPIs à Surveiller
              </h3>
              <ul className="space-y-2">
                <li className="flex gap-2"><TrendingUp className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Taux de vue par article</span></li>
                <li className="flex gap-2"><TrendingUp className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Temps moyen avant vente</span></li>
                <li className="flex gap-2"><TrendingUp className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Taux de négociation</span></li>
                <li className="flex gap-2"><TrendingUp className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Satisfaction client (avis)</span></li>
              </ul>
            </div>

            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                Tests A/B Permanents
              </h3>
              <div className="space-y-2">
                <div className="bg-cream border-2 border-black p-2">
                  <p className="font-body text-sm text-gray-700">✓ Titres différents</p>
                </div>
                <div className="bg-cream border-2 border-black p-2">
                  <p className="font-body text-sm text-gray-700">✓ Prix d'accroche</p>
                </div>
                <div className="bg-cream border-2 border-black p-2">
                  <p className="font-body text-sm text-gray-700">✓ Moment de publication</p>
                </div>
                <div className="bg-cream border-2 border-black p-2">
                  <p className="font-body text-sm text-gray-700">✓ Style de photos</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapitre 8: Tendances */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <Calendar className="w-8 h-8 text-vinted" />
            Chapitre 8 : Tendances Mode 2025
          </h2>

          <div className="bg-vinted border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-white mb-4">
              Top Tendances 2025
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {["Y2K revival intensifié", "Sustainable fashion", "Cottagecore romantique", "Tech wear urbain", "Indie sleaze comeback"].map((trend) => (
                <div key={trend} className="bg-white border-2 border-black p-3">
                  <p className="font-body text-sm text-black">✓ {trend}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plan d'Action 30 Jours */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Plan d'Action 30 Jours
          </h2>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-12 h-12 bg-vinted border-2 border-black mx-auto mb-3 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-display font-bold text-white text-xl">1</span>
              </div>
              <p className="font-display font-bold text-black mb-1">Semaine 1</p>
              <p className="font-body text-xs text-gray-700">Audit complet annonces</p>
            </div>
            <div className="bg-white border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-12 h-12 bg-vinted border-2 border-black mx-auto mb-3 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-display font-bold text-white text-xl">2</span>
              </div>
              <p className="font-display font-bold text-black mb-1">Semaine 2</p>
              <p className="font-body text-xs text-gray-700">Optimisation titres/descriptions</p>
            </div>
            <div className="bg-white border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-12 h-12 bg-vinted border-2 border-black mx-auto mb-3 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-display font-bold text-white text-xl">3</span>
              </div>
              <p className="font-display font-bold text-black mb-1">Semaine 3</p>
              <p className="font-body text-xs text-gray-700">Tests prix et photos</p>
            </div>
            <div className="bg-white border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-12 h-12 bg-vinted border-2 border-black mx-auto mb-3 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-display font-bold text-white text-xl">4</span>
              </div>
              <p className="font-display font-bold text-black mb-1">Semaine 4</p>
              <p className="font-body text-xs text-gray-700">Analyse et ajustements</p>
            </div>
          </div>
        </section>

        {/* Résultats Garantis */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-2xl text-white mb-4">
              Résultats Garantis
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-display font-bold text-4xl text-vinted mb-1">+400%</p>
                <p className="font-body text-sm text-gray-700">Vues moyennes</p>
              </div>
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-display font-bold text-4xl text-vinted mb-1">÷2</p>
                <p className="font-body text-sm text-gray-700">Délais de vente</p>
              </div>
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-display font-bold text-4xl text-vinted mb-1">+60%</p>
                <p className="font-body text-sm text-gray-700">Panier moyen</p>
              </div>
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
                <span>Quelle est la meilleure stratégie de prix sur Vinted ?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Utilisez des prix psychologiques (finissant par 9 ou 5), proposez des bundles et adaptez selon l'état et la marque.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>Comment se démarquer parmi 65 millions d'utilisateurs ?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Photos IA professionnelles, titres optimisés avec mots-clés puissants, descriptions storytelling et service client réactif.
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>Quel est le meilleur titre pour une annonce Vinted ?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  La formule gagnante: MARQUE + TYPE + DÉTAIL UNIQUE + TAILLE + ÉTAT. Ex: "ZARA Robe Blazer Noire Boutons Dorés T.M Parfait État"
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              Prêt à Dominer Vinted en 2025 ?
            </h2>
            <p className="font-body text-white mb-6 max-w-2xl mx-auto">
              Applique ces stratégies dès maintenant et transforme Vinted en ta machine à cash !
            </p>
            <Link
              to="/#generator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-4 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              COMMENCER MAINTENANT
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
              to="/articles/5-astuces-pour-vendre-plus-vite-sur-vinted"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">5 Astuces pour Vendre Plus Vite</h3>
              <p className="font-body text-sm text-gray-600">Booste tes ventes avec ces astuces éprouvées.</p>
            </Link>
            <Link
              to="/articles/guide-complet-photos-vinted-2025"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">Guide Complet Photos Vinted 2025</h3>
              <p className="font-body text-sm text-gray-600">Toutes les techniques pour des photos qui vendent.</p>
            </Link>
            <Link
              to="/articles/algorithme-vinted-visibilite"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">Algorithme Vinted Visibilité</h3>
              <p className="font-body text-sm text-gray-600">Comprends l'algorithme pour maximiser ta visibilité.</p>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default StrategieVenteVinted2025Page;
