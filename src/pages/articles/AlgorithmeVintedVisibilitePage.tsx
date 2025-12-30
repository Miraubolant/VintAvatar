import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, XCircle, Clock, TrendingUp, Star, AlertTriangle, Lightbulb, Calendar, MessageCircle } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';
import { ArticleNavigation } from '../../components/ArticleNavigation';

export const AlgorithmeVintedVisibilitePage: React.FC = () => {
  useSEO({
    title: "Algorithme Vinted : Comment Maximiser ta Visibilité en 2025 | VintDress",
    description: "Comprends l'algorithme Vinted et maximise ta visibilité. Découvre les stratégies 2025 pour apparaître en haut des recherches et vendre plus vite.",
    keywords: "algorithme vinted, visibilite vinted, vinted algorithme, apparaitre en premier vinted, booster annonce vinted, classement vinted, seo vinted",
  });

  return (
    <div className="min-h-screen bg-cream pt-16 sm:pt-20 lg:pt-24">
      {/* Hero Image Section */}
      <div className="relative h-[400px] lg:h-[500px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=500&fit=crop"
          alt="Algorithme Vinted Visibilité"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-white text-4xl lg:text-6xl mb-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              ALGORITHME VINTED
            </h1>
            <p className="font-display font-bold text-mint text-xl lg:text-2xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              Maximiser ta Visibilité en 2025
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
            <span className="font-body text-sm text-gray-600">18 Décembre 2025</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">8 min de lecture</span>
          </div>

          <h1 className="font-display font-bold text-4xl lg:text-5xl text-black mb-4">
            Algorithme Vinted : Comment Maximiser ta Visibilité en 2025
          </h1>

          <p className="font-body text-lg text-gray-700 mb-6">
            Comprends le fonctionnement de l'algorithme Vinted et découvre les stratégies pour apparaître en haut des recherches et vendre plus vite.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["Algorithme", "Vinted", "Visibilité", "SEO Vinted", "Stratégie"].map((tag) => (
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
        <div className="bg-vinted border-4 border-black p-6 mb-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-display font-bold text-white text-lg">
            L'algorithme Vinted détermine quelles annonces apparaissent en premier dans les recherches. Comprendre son fonctionnement, c'est la clé pour vendre plus vite.
          </p>
        </div>

        {/* Les 5 Facteurs Clés */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Les 5 Facteurs Clés du Classement
          </h2>

          <div className="space-y-4">
            {/* Facteur 1 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-2xl">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl text-black mb-2">
                    La Qualité des Photos
                  </h3>
                  <p className="font-body text-sm text-gray-700 mb-3">
                    C'est le facteur N°1. L'algorithme favorise les annonces avec :
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-gray-700">Des photos nettes et bien éclairées</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-gray-700">Plusieurs angles du vêtement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-gray-700">Des images haute résolution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-gray-700"><strong>Des photos portées (le critère le plus impactant)</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Facteur 2 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-2xl">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl text-black mb-2">
                    L'Engagement de l'Annonce
                  </h3>
                  <p className="font-body text-sm text-gray-700 mb-3">
                    Plus ton annonce génère d'interactions, plus elle remonte :
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-vinted" />
                      <span className="font-body text-sm text-gray-700">Nombre de vues</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-vinted" />
                      <span className="font-body text-sm text-gray-700">Ajouts en favoris</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-vinted" />
                      <span className="font-body text-sm text-gray-700">Messages reçus</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-vinted" />
                      <span className="font-body text-sm text-gray-700">Partages</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Facteur 3 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-2xl">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl text-black mb-2">
                    La Fraîcheur de l'Annonce
                  </h3>
                  <p className="font-body text-sm text-gray-700">
                    Les nouvelles annonces et celles récemment mises à jour sont boostées temporairement.
                  </p>
                </div>
              </div>
            </div>

            {/* Facteur 4 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-2xl">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl text-black mb-2">
                    La Réputation du Vendeur
                  </h3>
                  <ul className="space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-vinted mt-1">•</span>
                      <span className="font-body text-sm text-gray-700">Nombre d'évaluations positives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-vinted mt-1">•</span>
                      <span className="font-body text-sm text-gray-700">Taux de réponse aux messages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-vinted mt-1">•</span>
                      <span className="font-body text-sm text-gray-700">Historique de ventes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-vinted mt-1">•</span>
                      <span className="font-body text-sm text-gray-700">Ancienneté du compte</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Facteur 5 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-2xl">5</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl text-black mb-2">
                    La Pertinence des Mots-Clés
                  </h3>
                  <p className="font-body text-sm text-gray-700">
                    Le titre et la description doivent correspondre à ce que recherchent les acheteurs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stratégie 1: Photos */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Stratégie 1 : Optimiser tes Photos pour l'Algorithme
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Ce que l'algorithme aime */}
            <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                Ce Que l'Algorithme Aime
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Photos portées sur mannequin ou personne</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Fond neutre et propre</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Bonne luminosité</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Plusieurs photos (4-5 minimum)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Haute résolution</span>
                </li>
              </ul>
            </div>

            {/* Ce que l'algorithme pénalise */}
            <div className="bg-pink-pastel border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                Ce Que l'Algorithme Pénalise
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Photos floues ou sombres</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Une seule photo</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Photos avec watermarks ou texte</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Images trop compressées</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Solution VintDress */}
          <div className="bg-vinted border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-white mb-4">
              La Solution : Les Mannequins IA
            </h3>
            <p className="font-body text-white mb-4">
              Les photos portées sont le signal le plus fort pour l'algorithme. Problème : tout le monde n'a pas quelqu'un pour poser.
            </p>
            <p className="font-body text-white mb-4">
              C'est là qu'intervient VintDress. Notre IA génère des photos de mannequins ultra-réalistes qui :
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-white border-2 border-black p-3">
                <p className="font-body text-sm text-gray-700">✓ Montrent le vêtement porté (signal fort)</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-body text-sm text-gray-700">✓ Sont en haute résolution</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-body text-sm text-gray-700">✓ Présentent des poses professionnelles</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-body text-sm text-gray-700">✓ Augmentent drastiquement l'engagement</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stratégie 2: Timing */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Stratégie 2 : Maîtriser le Timing de Publication
          </h2>

          <div className="bg-white border-3 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-body text-gray-700 mb-4">
              L'algorithme booste les nouvelles annonces pendant 24-48h. Profites-en !
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Jours optimaux */}
              <div>
                <h3 className="font-display font-bold text-lg text-black mb-3 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-vinted" />
                  Jours Optimaux
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-display font-bold text-vinted">•</span>
                    <span className="font-body text-sm text-gray-700"><strong>Dimanche</strong> : préparation de la semaine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-display font-bold text-vinted">•</span>
                    <span className="font-body text-sm text-gray-700"><strong>Mercredi</strong> : milieu de semaine, envie de shopping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-display font-bold text-vinted">•</span>
                    <span className="font-body text-sm text-gray-700"><strong>Vendredi</strong> : début du weekend</span>
                  </li>
                </ul>
              </div>

              {/* Heures optimales */}
              <div>
                <h3 className="font-display font-bold text-lg text-black mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-vinted" />
                  Heures Optimales
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-display font-bold text-vinted">•</span>
                    <span className="font-body text-sm text-gray-700"><strong>12h-14h</strong> : pause déjeuner</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-display font-bold text-vinted">•</span>
                    <span className="font-body text-sm text-gray-700"><strong>18h-21h</strong> : sortie du travail</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-display font-bold text-vinted">•</span>
                    <span className="font-body text-sm text-gray-700"><strong>21h-23h</strong> : navigation détente</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technique du Bump */}
          <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-500" />
              Technique du Bump
            </h3>
            <p className="font-body text-gray-700 mb-3">
              Rafraîchis tes annonces régulièrement :
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-gray-700">Modifie légèrement le prix</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-gray-700">Ajoute ou change une photo</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-gray-700">Mets à jour la description</span>
              </li>
            </ul>
            <div className="bg-white border-2 border-black p-3 mt-4">
              <p className="font-display font-bold text-black text-sm">
                L'algorithme considère ça comme une "nouvelle" annonce.
              </p>
            </div>
          </div>
        </section>

        {/* Stratégie 3: Titres et Descriptions */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Stratégie 3 : Optimiser Titres et Descriptions
          </h2>

          <div className="bg-white border-3 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4">
              La Structure du Titre Parfait
            </h3>
            <div className="bg-cream border-2 border-black p-4 mb-4">
              <code className="font-body text-sm text-black">
                [MARQUE] [Type de vêtement] [Taille] - [État] [Couleur]
              </code>
            </div>
            <h4 className="font-display font-bold text-sm text-black mb-2">Exemples :</h4>
            <ul className="space-y-2">
              <li className="bg-mint border-2 border-black p-3">
                <span className="font-body text-sm text-gray-700">"ZARA Robe midi M - Neuve avec étiquette Noir"</span>
              </li>
              <li className="bg-mint border-2 border-black p-3">
                <span className="font-body text-sm text-gray-700">"NIKE Air Force 1 42 - Très bon état Blanc"</span>
              </li>
              <li className="bg-mint border-2 border-black p-3">
                <span className="font-body text-sm text-gray-700">"H&M Pull oversize L - Comme neuf Beige"</span>
              </li>
            </ul>
          </div>

          <div className="bg-pink-pastel border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-3">
              Mots-Clés Stratégiques
            </h3>
            <p className="font-body text-gray-700 mb-3">
              Inclus dans ta description :
            </p>
            <div className="grid sm:grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-vinted" />
                <span className="font-body text-sm text-gray-700">La marque (plusieurs fois naturellement)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-vinted" />
                <span className="font-body text-sm text-gray-700">Le type de vêtement exact</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-vinted" />
                <span className="font-body text-sm text-gray-700">La saison (été, hiver...)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-vinted" />
                <span className="font-body text-sm text-gray-700">L'occasion (soirée, casual, bureau...)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-vinted" />
                <span className="font-body text-sm text-gray-700">Les matières (coton, lin, laine...)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Tableau Comparatif Impact VintDress */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            L'Impact des Photos IA sur l'Algorithme
          </h2>

          <div className="overflow-x-auto mb-6">
            <div className="bg-white border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] min-w-[600px]">
              <table className="w-full">
                <thead>
                  <tr className="border-b-3 border-black">
                    <th className="p-4 text-left font-display font-bold text-black border-r-3 border-black bg-cream">Métrique</th>
                    <th className="p-4 text-center font-display font-bold text-black border-r-3 border-black">Sans VintDress</th>
                    <th className="p-4 text-center font-display font-bold text-black bg-mint">Avec VintDress</th>
                  </tr>
                </thead>
                <tbody className="font-body text-sm">
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Vues par annonce</td>
                    <td className="p-4 text-center border-r-3 border-black">50-100</td>
                    <td className="p-4 text-center bg-mint font-semibold text-vinted">200-400</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Ajouts favoris</td>
                    <td className="p-4 text-center border-r-3 border-black">2-5</td>
                    <td className="p-4 text-center bg-mint font-semibold text-vinted">10-20</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Temps de vente</td>
                    <td className="p-4 text-center border-r-3 border-black">2-4 semaines</td>
                    <td className="p-4 text-center bg-mint font-semibold text-vinted">3-7 jours</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Position moyenne</td>
                    <td className="p-4 text-center border-r-3 border-black">Page 2-3</td>
                    <td className="p-4 text-center bg-mint font-semibold text-vinted">Page 1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-vinted border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-white mb-3">
              Pourquoi ?
            </h3>
            <p className="font-body text-white mb-3">
              Parce que les photos portées professionnelles :
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 text-mint flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-white">Attirent plus de clics (signal positif)</span>
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-4 h-4 text-mint flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-white">Génèrent plus de favoris (signal positif)</span>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="w-4 h-4 text-mint flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-white">Provoquent plus de messages (signal positif)</span>
              </li>
            </ul>
            <div className="bg-white border-2 border-black p-4 mt-4">
              <p className="font-display font-bold text-black">
                L'algorithme interprète tous ces signaux comme "cette annonce intéresse les acheteurs" et la remonte.
              </p>
            </div>
          </div>
        </section>

        {/* Erreurs à Éviter */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            5 Erreurs à Éviter avec l'Algorithme
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-bold text-black">1. Spammer des Annonces</h3>
              </div>
              <p className="font-body text-sm text-gray-700">
                Publier trop d'annonces d'un coup peut être perçu comme du spam.
              </p>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-bold text-black">2. Copier-Coller les Descriptions</h3>
              </div>
              <p className="font-body text-sm text-gray-700">
                Chaque annonce doit avoir une description unique.
              </p>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-bold text-black">3. Prix Irréalistes</h3>
              </div>
              <p className="font-body text-sm text-gray-700">
                Les prix trop bas ou trop hauts sont pénalisés.
              </p>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-bold text-black">4. Ignorer les Messages</h3>
              </div>
              <p className="font-body text-sm text-gray-700">
                Un taux de réponse faible impacte ton classement.
              </p>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:col-span-2">
              <div className="flex items-start gap-3 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-bold text-black">5. Photos de Mauvaise Qualité</h3>
              </div>
              <p className="font-body text-sm text-gray-700">
                C'est LE facteur le plus impactant négativement.
              </p>
            </div>
          </div>
        </section>

        {/* Plan d'Action */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Plan d'Action Immédiat
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Cette Semaine */}
            <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                Cette Semaine
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-xs">1</span>
                  </div>
                  <span className="font-body text-sm text-gray-700"><strong>Audite tes photos</strong> : remplace les photos floues ou mal éclairées</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-xs">2</span>
                  </div>
                  <span className="font-body text-sm text-gray-700"><strong>Crée des photos portées</strong> avec VintDress pour tes meilleurs articles</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-xs">3</span>
                  </div>
                  <span className="font-body text-sm text-gray-700"><strong>Optimise 5 titres</strong> avec la structure marque + type + taille + état</span>
                </li>
              </ul>
            </div>

            {/* Ce Mois */}
            <div className="bg-pink-pastel border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                Ce Mois
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-xs">1</span>
                  </div>
                  <span className="font-body text-sm text-gray-700"><strong>Établis un calendrier</strong> de publication (3-4 annonces/semaine aux bons moments)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-xs">2</span>
                  </div>
                  <span className="font-body text-sm text-gray-700"><strong>Réponds à tous les messages</strong> dans l'heure</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-xs">3</span>
                  </div>
                  <span className="font-body text-sm text-gray-700"><strong>Actualise tes anciennes annonces</strong> pour les "bumper"</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-2xl text-white mb-4">
              Conclusion
            </h2>
            <p className="font-body text-white mb-4">
              L'algorithme Vinted n'est pas un mystère. Il récompense :
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" />
                <span className="font-body text-white">Les photos de qualité (surtout portées)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" />
                <span className="font-body text-white">L'engagement généré</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" />
                <span className="font-body text-white">La fraîcheur des annonces</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" />
                <span className="font-body text-white">La réputation du vendeur</span>
              </li>
            </ul>
            <div className="bg-white border-3 border-black p-4">
              <p className="font-display font-bold text-black text-center">
                En combinant ces stratégies avec des photos professionnelles VintDress, tu maximises tes chances d'apparaître en haut des recherches et de vendre rapidement.
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
                <span>Comment fonctionne l'algorithme Vinted ?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  L'algorithme Vinted classe les annonces selon la qualité des photos, l'engagement généré, la fraîcheur de l'annonce, la réputation du vendeur et la pertinence des mots-clés.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>Quel est le facteur le plus important pour l'algorithme Vinted ?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  La qualité des photos est le facteur N°1. Les photos portées professionnelles génèrent significativement plus de vues et d'engagement, signaux positifs pour l'algorithme.
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>Comment remonter dans les recherches Vinted ?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Publie aux bons moments (dimanche soir, mercredi soir), utilise des photos portées de qualité, réponds vite aux messages et actualise régulièrement tes annonces.
                </p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>Les photos IA aident-elles vraiment avec l'algorithme ?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Oui, les photos portées professionnelles générées par IA comme VintDress augmentent de 3 à 4 fois les vues et l'engagement, ce qui améliore directement le classement algorithmique.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              Prêt(e) à Dominer l'Algorithme Vinted ?
            </h2>
            <p className="font-body text-white mb-6 max-w-2xl mx-auto">
              Commence par tes photos avec VintDress et maximise ta visibilité dès aujourd'hui.
            </p>
            <Link
              to="/#generator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-4 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              OPTIMISER MES PHOTOS
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
              <p className="font-body text-sm text-gray-600">Optimise tes ventes avec ces stratégies éprouvées.</p>
            </Link>
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
          </div>
        </section>

      </div>
    </div>
  );
};

export default AlgorithmeVintedVisibilitePage;
