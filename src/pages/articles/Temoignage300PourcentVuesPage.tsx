import { Link } from 'react-router-dom';
import { useSEO } from '../../hooks/useSEO';
import { ArticleNavigation } from '../../components/ArticleNavigation';
import { TrendingUp, Clock, DollarSign, Star, Eye, MessageSquare, Zap, Heart, ThumbsUp, Lightbulb } from 'lucide-react';

export default function Temoignage300PourcentVuesPage() {
  useSEO({
    title: "Témoignage : +300% de Vues en Une Semaine | Success Story VintDress",
    description: "Découvre comment Marie a multiplié ses vues par 3 en une semaine grâce à VintDress. Témoignage complet et résultats chiffrés.",
    keywords: "témoignage vinted, success story, augmenter vues vinted, transformation ventes, marie laurent",
  });

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Image */}
      <div className="w-full mt-16 sm:mt-20 lg:mt-24 h-[400px] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&h=400&fit=crop"
          alt="Témoignage Success Story"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Article Container */}
      <div className="max-w-4xl mx-auto px-6 pb-12">
        <ArticleNavigation />

        {/* Article Header */}
        <article className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 lg:p-12 mb-12">
          <div className="flex items-center gap-4 text-sm mb-6 flex-wrap">
            <span className="bg-yellow-200 px-4 py-2 border-2 border-black font-space-grotesk font-semibold">
              Success Story
            </span>
            <span className="font-space-grotesk">20 Novembre 2025</span>
            <span className="font-space-grotesk">8 min de lecture</span>
            <span className="font-space-grotesk font-semibold">Par Marie Laurent</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-space-grotesk font-bold mb-6 leading-tight">
            Success Story : Comment Marie a Transformé son Business Vinted
          </h1>

          <p className="text-xl text-gray-700 mb-8 italic">
            Témoignage recueilli le 5 Mars 2025
          </p>

          <p className="text-lg text-gray-700 mb-12">
            Aujourd'hui, nous donnons la parole à Marie Laurent, 28 ans, parisienne et vendeuse passionnée sur Vinted. Son histoire avec VintDress est tout simplement bluffante.
          </p>

          {/* Stats Hero */}
          <div className="bg-vinted border-4 border-black p-8 mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold text-white mb-6 text-center">
              Résultats en Une Semaine
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white border-3 border-black p-6 text-center">
                <TrendingUp className="w-10 h-10 mx-auto mb-3 text-vinted" />
                <div className="text-4xl font-space-grotesk font-bold mb-2">+300%</div>
                <div className="text-sm">de vues moyennes</div>
              </div>
              <div className="bg-white border-3 border-black p-6 text-center">
                <Eye className="w-10 h-10 mx-auto mb-3 text-vinted" />
                <div className="text-4xl font-space-grotesk font-bold mb-2">67</div>
                <div className="text-sm">vues en 48h (vs 8)</div>
              </div>
              <div className="bg-white border-3 border-black p-6 text-center">
                <MessageSquare className="w-10 h-10 mx-auto mb-3 text-vinted" />
                <div className="text-4xl font-space-grotesk font-bold mb-2">12</div>
                <div className="text-sm">messages reçus</div>
              </div>
            </div>
          </div>

          {/* Le Déclic */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Le Déclic
            </h2>

            <div className="bg-pink-pastel border-4 border-black p-8">
              <p className="text-2xl font-space-grotesk font-bold mb-4">
                "J'ai découvert VintDress par hasard sur Instagram"
              </p>
              <p className="text-lg italic text-gray-700">
                Marie nous raconte : "J'avais une garde-robe pleine de vêtements que je n'arrivais pas à vendre. Mes photos étaient correctes, mais rien d'exceptionnel. Quand j'ai vu les résultats possibles avec l'IA, j'ai voulu tester."
              </p>
            </div>
          </div>

          {/* Avant VintDress */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Avant VintDress : La Galère
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-red-50 border-3 border-red-500 p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  Les chiffres parlent d'eux-mêmes :
                </h3>
                <ul className="space-y-2">
                  <li>📊 Moyenne de 12 vues par article</li>
                  <li>⏱️ Délai de vente moyen : 3 mois</li>
                  <li>💰 Prix de vente souvent négociés à la baisse</li>
                  <li>😤 Frustration croissante</li>
                </ul>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  Marie témoigne :
                </h3>
                <p className="italic text-gray-700">
                  "Je passais des heures à essayer de prendre de bonnes photos. Entre trouver la lumière, poser l'article, reprendre 10 fois... C'était décourageant. Certains vêtements magnifiques restaient invendus juste à cause des photos."
                </p>
              </div>
            </div>
          </div>

          {/* Le Test qui Change Tout */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Zap className="w-8 h-8 text-yellow-500" />
              Le Test qui Change Tout
            </h2>

            <div className="bg-mint border-4 border-black p-8">
              <h3 className="text-2xl font-space-grotesk font-bold mb-4">
                Premier essai : Une robe Zara noire
              </h3>
              <p className="mb-6">
                Marie décide de tester VintDress sur une robe noire Zara qu'elle n'arrivait pas à vendre depuis 2 mois.
              </p>

              <h4 className="font-space-grotesk font-bold text-xl mb-4">
                Résultats en 48h :
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white border-3 border-black p-4 text-center">
                  <div className="text-3xl mb-2">🚀</div>
                  <div className="font-bold text-2xl">67 vues</div>
                  <div className="text-sm text-gray-600">(vs 8 avec l'ancienne photo)</div>
                </div>
                <div className="bg-white border-3 border-black p-4 text-center">
                  <div className="text-3xl mb-2">💬</div>
                  <div className="font-bold text-2xl">12 messages</div>
                  <div className="text-sm text-gray-600">de personnes intéressées</div>
                </div>
                <div className="bg-white border-3 border-black p-4 text-center">
                  <div className="text-3xl mb-2">💰</div>
                  <div className="font-bold text-2xl">Vendue</div>
                  <div className="text-sm text-gray-600">au prix demandé !</div>
                </div>
              </div>

              <p className="mt-6 text-lg italic font-semibold text-center">
                "Je n'en revenais pas ! En 48h, cette robe que personne ne regardait était devenue la plus demandée de mes annonces."
              </p>
            </div>
          </div>

          {/* La Transformation Complète */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              La Transformation Complète
            </h2>

            <p className="text-lg mb-6">
              <strong>Semaine 1 avec VintDress :</strong> Marie décide de refaire toutes ses photos les plus importantes.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-4 border-black">
                <thead>
                  <tr className="bg-vinted text-white border-b-4 border-black">
                    <th className="border-r-3 border-black p-4 text-left font-space-grotesk font-bold">
                      Article
                    </th>
                    <th className="border-r-3 border-black p-4 text-center font-space-grotesk font-bold">
                      Avant (vues/semaine)
                    </th>
                    <th className="border-r-3 border-black p-4 text-center font-space-grotesk font-bold">
                      Après (vues/semaine)
                    </th>
                    <th className="p-4 text-center font-space-grotesk font-bold">
                      Amélioration
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4 font-semibold">Robe Zara</td>
                    <td className="border-r-2 border-black p-4 text-center">2 vues</td>
                    <td className="border-r-2 border-black p-4 text-center font-bold text-green-600">67 vues</td>
                    <td className="p-4 text-center font-bold text-vinted">+3250%</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4 font-semibold">Jean Levi's</td>
                    <td className="border-r-2 border-black p-4 text-center">5 vues</td>
                    <td className="border-r-2 border-black p-4 text-center font-bold text-green-600">43 vues</td>
                    <td className="p-4 text-center font-bold text-vinted">+760%</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4 font-semibold">Blazer vintage</td>
                    <td className="border-r-2 border-black p-4 text-center">1 vue</td>
                    <td className="border-r-2 border-black p-4 text-center font-bold text-green-600">38 vues</td>
                    <td className="p-4 text-center font-bold text-vinted">+3700%</td>
                  </tr>
                  <tr>
                    <td className="border-r-2 border-black p-4 font-semibold">Sneakers Nike</td>
                    <td className="border-r-2 border-black p-4 text-center">8 vues</td>
                    <td className="border-r-2 border-black p-4 text-center font-bold text-green-600">52 vues</td>
                    <td className="p-4 text-center font-bold text-vinted">+550%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-200 border-4 border-black p-6 text-center">
              <p className="text-2xl font-space-grotesk font-bold">
                Moyenne générale : +300% de vues !
              </p>
            </div>
          </div>

          {/* Les Bénéfices Inattendus */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Les Bénéfices Inattendus
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-3 border-black p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-8 h-8 text-vinted" />
                  <h3 className="font-space-grotesk font-bold text-xl">
                    1. Gain de Temps Énorme
                  </h3>
                </div>
                <p className="italic text-gray-700">
                  "Plus besoin de planifier mes séances photo. En 30 secondes, j'ai une photo parfaite. Je peux lister mes articles en temps réel !"
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <div className="flex items-center gap-3 mb-3">
                  <ThumbsUp className="w-8 h-8 text-vinted" />
                  <h3 className="font-space-grotesk font-bold text-xl">
                    2. Confiance Retrouvée
                  </h3>
                </div>
                <p className="italic text-gray-700">
                  "Maintenant, je sais que mes articles seront bien présentés. Je n'hésite plus à les mettre en ligne."
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <div className="flex items-center gap-3 mb-3">
                  <DollarSign className="w-8 h-8 text-vinted" />
                  <h3 className="font-space-grotesk font-bold text-xl">
                    3. Prix Respectés
                  </h3>
                </div>
                <p className="italic text-gray-700">
                  "Avec des photos pro, les gens négocient moins. Ils voient la qualité et acceptent le prix."
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="w-8 h-8 text-vinted" />
                  <h3 className="font-space-grotesk font-bold text-xl">
                    4. Plaisir Renouvelé
                  </h3>
                </div>
                <p className="italic text-gray-700">
                  "Vendre sur Vinted est redevenu fun ! Voir mes articles avec ces photos, c'est comme avoir ma propre boutique."
                </p>
              </div>
            </div>
          </div>

          {/* Les Chiffres Après 1 Mois */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Les Chiffres Après 1 Mois
            </h2>

            <div className="bg-vinted border-4 border-black p-8">
              <h3 className="text-2xl font-space-grotesk font-bold text-white mb-6">
                Résultats impressionnants :
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white border-3 border-black p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="w-6 h-6 text-vinted" />
                    <span className="font-bold text-2xl">+280%</span>
                  </div>
                  <p className="text-sm text-gray-600">de vues moyennes</p>
                </div>
                <div className="bg-white border-3 border-black p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-6 h-6 text-vinted" />
                    <span className="font-bold text-2xl">÷3</span>
                  </div>
                  <p className="text-sm text-gray-600">Division par 3 du temps de vente</p>
                </div>
                <div className="bg-white border-3 border-black p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <DollarSign className="w-6 h-6 text-vinted" />
                    <span className="font-bold text-2xl">+150%</span>
                  </div>
                  <p className="text-sm text-gray-600">de chiffre d'affaires mensuel</p>
                </div>
                <div className="bg-white border-3 border-black p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Star className="w-6 h-6 text-vinted" />
                    <span className="font-bold text-2xl">5/5</span>
                  </div>
                  <p className="text-sm text-gray-600">Note vendeur (contre 4,2 avant)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Conseils de Marie */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Lightbulb className="w-8 h-8 text-yellow-500" />
              Conseils de Marie pour les Nouveaux Utilisateurs
            </h2>

            <div className="space-y-4">
              <div className="bg-pink-pastel border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-2">
                  1. Commencez par vos meilleures pièces
                </h3>
                <p className="italic">
                  "Testez d'abord sur vos articles de valeur. L'effet sera plus visible."
                </p>
              </div>

              <div className="bg-mint border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-2">
                  2. Variez les styles de photos
                </h3>
                <p className="italic">
                  "L'IA propose plusieurs styles. N'hésitez pas à tester pour voir ce qui marche le mieux pour chaque type d'article."
                </p>
              </div>

              <div className="bg-yellow-200 border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-2">
                  3. Restez honnêtes
                </h3>
                <p className="italic">
                  "Les photos IA sont magnifiques, mais gardez une description honnête de l'état réel de l'article."
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-2">
                  4. Utilisez les anciennes photos en complément
                </h3>
                <p className="italic">
                  "Je garde mes photos détail pour montrer la texture, les étiquettes, etc."
                </p>
              </div>
            </div>
          </div>

          {/* Le Mot de la Fin */}
          <div className="bg-vinted border-4 border-black p-8 mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold text-white mb-6">
              Le Mot de la Fin
            </h2>
            <p className="text-white text-xl mb-6 italic">
              "VintDress n'a pas juste amélioré mes photos, ça a transformé ma façon de voir la vente en ligne. Je recommande les yeux fermés à tous les vendeurs Vinted qui veulent passer au niveau supérieur."
            </p>
            <p className="text-white text-lg font-semibold mb-8">
              Son conseil final : "N'attendez pas ! Chaque jour sans VintDress, c'est des ventes perdues."
            </p>
            <Link
              to="/"
              className="inline-block bg-white text-vinted px-8 py-4 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all font-space-grotesk font-bold text-lg"
            >
              Teste VintDress Maintenant !
            </Link>
          </div>

          {/* Footer Note */}
          <div className="bg-gray-100 border-2 border-gray-400 p-4 mb-8">
            <p className="text-sm text-gray-600 italic">
              Merci à Marie pour ce témoignage authentique. Si vous aussi vous avez une success story à partager, contactez-nous !
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {["Témoignage", "Success Story", "Ventes", "Transformation", "Résultats"].map((tag) => (
              <span
                key={tag}
                className="bg-yellow-200 px-4 py-2 border-2 border-black font-space-grotesk font-semibold text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </article>

        {/* Related Articles */}
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
          <h2 className="text-2xl font-space-grotesk font-bold mb-6">
            Articles Connexes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/blog/success-story-marie-2025"
              className="border-3 border-black p-4 hover:bg-yellow-200 transition-colors"
            >
              <h3 className="font-space-grotesk font-bold mb-2">
                Success Story : Marie Gagne 3000€/Mois
              </h3>
              <p className="text-sm text-gray-600">
                Comment Marie a transformé sa passion en business rentable
              </p>
            </Link>
            <Link
              to="/blog/erreurs-ventes-vinted"
              className="border-3 border-black p-4 hover:bg-yellow-200 transition-colors"
            >
              <h3 className="font-space-grotesk font-bold mb-2">
                10 Erreurs qui Tuent tes Ventes Vinted
              </h3>
              <p className="text-sm text-gray-600">
                Évite ces erreurs pour maximiser tes résultats
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
