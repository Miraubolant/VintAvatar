import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera, FileText, DollarSign, Clock, MessageCircle, CheckCircle2, Zap } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';
import { ArticleNavigation } from '../../components/ArticleNavigation';

export const CinqAstucesVendrePlusVitePage: React.FC = () => {
  useSEO({
    title: "5 Astuces pour Vendre Plus Vite sur Vinted | VintDress",
    description: "Découvre 5 astuces essentielles pour booster tes ventes sur Vinted. Photos IA, prix optimal, timing parfait - tous nos secrets révélés !",
    keywords: "vente vinted, astuces vinted, photos vinted, vendre plus vite, IA photos",
  });

  return (
    <div className="min-h-screen bg-cream pt-16 sm:pt-20 lg:pt-24">
      {/* Hero Image Section */}
      <div className="relative h-[400px] lg:h-[500px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=500&fit=crop"
          alt="5 Astuces Vendre Vinted"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-white text-4xl lg:text-6xl mb-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              5 ASTUCES VINTED
            </h1>
            <p className="font-display font-bold text-mint text-xl lg:text-2xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              Vendre Plus Vite et Plus Cher
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
              CONSEILS
            </span>
            <span className="font-body text-sm text-gray-600">Par Équipe VintDress</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">28 Novembre 2025</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">5 min de lecture</span>
          </div>

          <h1 className="font-display font-bold text-4xl lg:text-5xl text-black mb-4">
            5 Astuces pour Vendre Plus Vite sur Vinted
          </h1>

          <p className="font-body text-lg text-gray-700 mb-6">
            Découvre les secrets pour maximiser tes ventes avec des photos parfaites générées par IA.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["Vinted", "Conseils", "Vente", "Photos", "IA"].map((tag) => (
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
          <p className="font-display font-bold text-white text-lg">
            Vinted est devenu LA plateforme incontournable pour vendre ses vêtements de seconde main. Mais avec des millions d'utilisateurs, comment faire pour que tes annonces se démarquent ?
          </p>
        </div>

        {/* Astuce 1: Photos */}
        <section className="mb-12">
          <div className="bg-white border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 bg-vinted border-3 border-black flex items-center justify-center flex-shrink-0 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-2xl">1</span>
                  </div>
                  <h2 className="font-display font-bold text-3xl text-black">
                    Des Photos qui Font la Différence
                  </h2>
                </div>
                <p className="font-display font-bold text-lg text-vinted mb-4">
                  Le secret N°1 : La qualité de tes photos
                </p>
                <p className="font-body text-gray-700 mb-4">
                  Les acheteurs sur Vinted jugent en premier lieu par les yeux. Une photo de mauvaise qualité peut faire fuir un potentiel acheteur, même si ton article est génial.
                </p>
              </div>
            </div>

            <div className="bg-mint border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3">
                Nos Conseils
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Utilise la lumière naturelle (près d'une fenêtre)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Évite les photos floues ou trop sombres</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Montre l'article sous plusieurs angles</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700"><strong>Solution révolutionnaire :</strong> Utilise notre IA pour créer des photos portées ultra-réalistes en 30 secondes !</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Astuce 2: Titre et Description */}
        <section className="mb-12">
          <div className="bg-white border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 bg-pink-pastel border-3 border-black flex items-center justify-center flex-shrink-0 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <FileText className="w-8 h-8 text-black" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-2xl">2</span>
                  </div>
                  <h2 className="font-display font-bold text-3xl text-black">
                    Titre Accrocheur et Description Détaillée
                  </h2>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Titre parfait */}
              <div className="bg-pink-pastel border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-lg text-black mb-3">
                  Le Titre Parfait en 3 Étapes
                </h3>
                <ol className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-display font-bold text-vinted">1.</span>
                    <span className="font-body text-sm text-gray-700">Marque + Modèle (si connu)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-display font-bold text-vinted">2.</span>
                    <span className="font-body text-sm text-gray-700">Taille claire</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-display font-bold text-vinted">3.</span>
                    <span className="font-body text-sm text-gray-700">État précis</span>
                  </li>
                </ol>
                <div className="bg-white border-2 border-black p-3 mt-3">
                  <p className="font-body text-xs text-gray-600 mb-1">Exemple :</p>
                  <p className="font-display font-bold text-sm text-black">
                    "ZARA Robe noire S - Excellent état - Portée 2x"
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="bg-mint border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-lg text-black mb-3">
                  Pour la Description
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-gray-700">Matière du tissu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-gray-700">Mensurations exactes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-gray-700">Histoire de l'article</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-gray-700">Défauts éventuels (transparence = confiance)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Astuce 3: Prix */}
        <section className="mb-12">
          <div className="bg-white border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 bg-mint border-3 border-black flex items-center justify-center flex-shrink-0 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <DollarSign className="w-8 h-8 text-black" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-2xl">3</span>
                  </div>
                  <h2 className="font-display font-bold text-3xl text-black">
                    Prix Stratégique
                  </h2>
                </div>
              </div>
            </div>

            <div className="bg-vinted border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-4">
              <h3 className="font-display font-bold text-xl text-white mb-2">
                La Règle d'Or
              </h3>
              <p className="font-body text-white">
                Commence par un prix légèrement au-dessus de ce que tu veux vraiment obtenir. Cela te laisse une marge de négociation.
              </p>
            </div>

            <div className="bg-pink-pastel border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                Astuce Psychologique
              </h3>
              <p className="font-body text-gray-700">
                Utilise des prix se terminant par <strong>9</strong> (19€ au lieu de 20€) - ça marche vraiment !
              </p>
              <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="bg-white border-2 border-black p-3 text-center">
                  <p className="font-body text-xs text-gray-600">Moins attractif</p>
                  <p className="font-display font-bold text-2xl text-gray-500 line-through">20€</p>
                </div>
                <div className="bg-white border-2 border-black p-3 text-center">
                  <p className="font-body text-xs text-gray-600">Plus attractif</p>
                  <p className="font-display font-bold text-2xl text-vinted">19€</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Astuce 4: Timing */}
        <section className="mb-12">
          <div className="bg-white border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 bg-pink-pastel border-3 border-black flex items-center justify-center flex-shrink-0 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <Clock className="w-8 h-8 text-black" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-2xl">4</span>
                  </div>
                  <h2 className="font-display font-bold text-3xl text-black">
                    Timing Optimal de Publication
                  </h2>
                </div>
              </div>
            </div>

            <div className="bg-mint border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                Les Meilleurs Moments
              </h3>
              <div className="space-y-3">
                <div className="bg-white border-2 border-black p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center">
                      <span className="font-display font-bold text-white text-sm">1</span>
                    </div>
                    <p className="font-display font-bold text-black">Dimanche soir (18h-20h)</p>
                  </div>
                  <p className="font-body text-sm text-gray-600">Préparation de la semaine</p>
                </div>

                <div className="bg-white border-2 border-black p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center">
                      <span className="font-display font-bold text-white text-sm">2</span>
                    </div>
                    <p className="font-display font-bold text-black">Mercredi soir</p>
                  </div>
                  <p className="font-body text-sm text-gray-600">Milieu de semaine, motivation shopping</p>
                </div>

                <div className="bg-white border-2 border-black p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center">
                      <span className="font-display font-bold text-white text-sm">3</span>
                    </div>
                    <p className="font-display font-bold text-black">Vendredi après-midi</p>
                  </div>
                  <p className="font-body text-sm text-gray-600">Préparation du weekend</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Astuce 5: Réactivité */}
        <section className="mb-12">
          <div className="bg-white border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 bg-vinted border-3 border-black flex items-center justify-center flex-shrink-0 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-2xl">5</span>
                  </div>
                  <h2 className="font-display font-bold text-3xl text-black">
                    Réactivité et Service Client
                  </h2>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-vinted border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-lg text-white mb-3">
                  Réponds Rapidement
                </h3>
                <p className="font-body text-white text-sm">
                  Les acheteurs Vinted sont impatients. Une réponse dans l'heure peut faire la différence.
                </p>
              </div>

              <div className="bg-mint border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-lg text-black mb-3">
                  Sois Flexible
                </h3>
                <p className="font-body text-gray-700 text-sm">
                  Prix, envoi groupé, délais... La négociation fait partie du jeu !
                </p>
              </div>
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
              Avec ces 5 astuces, tu devrais voir tes ventes décoller ! Et n'oublie pas : des photos de qualité professionnelle peuvent augmenter tes ventes de <strong>+300%</strong>.
            </p>
            <div className="bg-white border-3 border-black p-4">
              <p className="font-display font-bold text-vinted text-center text-lg">
                C'est là que notre IA entre en jeu...
              </p>
            </div>
          </div>
        </section>

        {/* Résumé visuel */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Récapitulatif des 5 Astuces
          </h2>
          <div className="grid md:grid-cols-5 gap-3">
            <div className="bg-white border-3 border-black p-4 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Camera className="w-8 h-8 text-vinted mx-auto mb-2" />
              <p className="font-display font-bold text-sm text-black">Photos IA</p>
            </div>
            <div className="bg-white border-3 border-black p-4 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <FileText className="w-8 h-8 text-vinted mx-auto mb-2" />
              <p className="font-display font-bold text-sm text-black">Titre + Description</p>
            </div>
            <div className="bg-white border-3 border-black p-4 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <DollarSign className="w-8 h-8 text-vinted mx-auto mb-2" />
              <p className="font-display font-bold text-sm text-black">Prix en 9</p>
            </div>
            <div className="bg-white border-3 border-black p-4 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Clock className="w-8 h-8 text-vinted mx-auto mb-2" />
              <p className="font-display font-bold text-sm text-black">Bon Timing</p>
            </div>
            <div className="bg-white border-3 border-black p-4 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <MessageCircle className="w-8 h-8 text-vinted mx-auto mb-2" />
              <p className="font-display font-bold text-sm text-black">Réactivité</p>
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
                <span>Quel est le meilleur moment pour publier sur Vinted ?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Les meilleurs créneaux sont dimanche soir (18h-20h), mercredi soir et vendredi après-midi.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>Comment fixer le bon prix sur Vinted ?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Analysez 5 articles similaires vendus, positionnez-vous 10-20% en dessous de la moyenne et utilisez des prix psychologiques (19€ au lieu de 20€).
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>Les photos IA augmentent-elles vraiment les ventes ?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Oui, nos utilisateurs constatent +300% de vues et des ventes 3 à 5 fois plus rapides avec les photos générées par IA.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              Prêt(e) à Transformer tes Ventes ?
            </h2>
            <p className="font-body text-white mb-6 max-w-2xl mx-auto">
              Essaie notre générateur IA maintenant et booste tes ventes de +300% !
            </p>
            <Link
              to="/#generator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-4 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              ESSAYER L'IA MAINTENANT
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
              to="/articles/guide-complet-photos-vinted-2025"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">Guide Complet Photos Vinted 2025</h3>
              <p className="font-body text-sm text-gray-600">Toutes les techniques pour des photos qui vendent.</p>
            </Link>
            <Link
              to="/articles/strategie-vente-vinted-2025"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">Stratégie de Vente Vinted 2025</h3>
              <p className="font-body text-sm text-gray-600">La stratégie complète pour dominer Vinted.</p>
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

export default CinqAstucesVendrePlusVitePage;
