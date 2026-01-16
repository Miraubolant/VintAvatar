import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, CheckCircle, AlertTriangle, Star, ArrowRight } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';
import { ArticleNavigation } from '../../components/ArticleNavigation';

export const PhotoPorteeVintedPage: React.FC = () => {
  useSEO({
    title: "Améliore tes ventes avec des photos portées sur Vinted | VintDress",
    description: "Améliore tes ventes sur Vinted grâce à des photos portées professionnelles. Découvre VintDress, la solution premium pour tes annonces.",
    keywords: "photo porté vinted, photo portée, mettre vetement sur mannequin, photos professionnelles vinted",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px] border-b-4 border-black overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&h=400&fit=crop"
          alt="Photos portées Vinted professionnelles"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 pb-12">
        <ArticleNavigation />

        {/* Header */}
        <header className="mb-12">
          <div className="inline-block bg-vinted text-white border-3 border-black px-3 py-1 font-display font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-4">
            CONSEILS
          </div>

          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-black mb-6 leading-tight">
            Améliore tes ventes avec des photos portées sur Vinted
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-sm font-body text-gray-700 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Équipe VintDress</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>8 min de lecture</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>29 Décembre 2025</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["photo portée vinted", "mannequin IA", "vente Vinted", "photos professionnelles", "VintDress"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-mint border-2 border-black font-display font-bold text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Intro */}
        <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-8">
          <p className="font-body text-lg text-black leading-relaxed">
            Si tu es vendeur sur Vinted, tu sais à quel point la présentation de tes articles est cruciale. Des photos portées de qualité peuvent faire toute la différence. Elles permettent aux acheteurs de visualiser les vêtements dans un contexte réel, ce qui augmente considérablement les chances de vente. En effet, une étude a montré que les photos avec mannequin IA peuvent augmenter les vues de tes annonces de <strong className="text-vinted">300%</strong> et réduire le temps de vente par trois.
          </p>
        </div>

        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Pourquoi choisir VintDress pour tes photos portées ?
          </h2>

          <div className="space-y-8">
            {/* Qualité Pro */}
            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-vinted" />
                La qualité professionnelle à portée de main
              </h3>
              <p className="font-body text-black leading-relaxed">
                VintDress te propose un service premium pour créer des photos portées de qualité professionnelle. Grâce à notre technologie FLUX 2 Pro, tu obtiens un rendu réaliste et indiscernable d'une vraie photo. En seulement <strong>30 secondes</strong>, tu peux générer une image haute définition qui mettra en valeur tes vêtements comme jamais auparavant.
              </p>
            </div>

            {/* Personnalisation */}
            <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <Star className="w-6 h-6 text-vinted" />
                Personnalisation complète
              </h3>
              <p className="font-body text-black leading-relaxed mb-4">
                Avec VintDress, tu peux personnaliser entièrement ton mannequin IA : genre, morphologie, carnation, pose et décors sont à ta disposition. Que tu souhaites une photo dynamique ou en studio, notre interface intuitive te permet de configurer facilement chaque détail.
              </p>
            </div>

            {/* Coût abordable */}
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-6">
                Coût abordable pour un retour sur investissement élevé
              </h3>

              <div className="bg-cream border-3 border-black p-5 mb-6">
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-vinted flex-shrink-0 mt-1" />
                  <p className="font-display font-bold text-black">
                    Problèmes courants des outils gratuits :
                  </p>
                </div>
                <ul className="space-y-2 font-body text-black">
                  <li className="flex items-start gap-2">
                    <span className="text-vinted font-bold">•</span>
                    <span><strong>Qualité floue</strong> : Les images générées manquent souvent de netteté.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-vinted font-bold">•</span>
                    <span><strong>Watermarks visibles</strong> : Les outils gratuits ajoutent des logos, ce qui nuit à la présentation professionnelle de tes articles.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-vinted font-bold">•</span>
                    <span><strong>Attentes interminables</strong> : Tu peux te retrouver avec des files d'attente de 30 minutes pour générer une seule image.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-vinted font-bold">•</span>
                    <span><strong>Déformations des vêtements</strong> : Les outils gratuits peuvent déformer les articles, rendant la présentation trompeuse.</span>
                  </li>
                </ul>
              </div>

              <p className="font-body text-black leading-relaxed">
                En plus de ces inconvénients, le temps que tu passes à utiliser ces outils gratuits équivaut à de l'argent perdu. En investissant à partir de <strong className="text-vinted">0,40 €/photo</strong> avec VintDress, tu as l'assurance d'obtenir des images de qualité supérieure qui attirent les acheteurs. Une seule vente supplémentaire, souvent entre 15 et 25 €, suffit à couvrir largement le coût de tes photos.
              </p>
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Témoignages de vendeurs Vinted
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-vinted text-vinted" />
                ))}
              </div>
              <p className="font-body text-black italic mb-4">
                "J'ai commencé à utiliser VintDress et mes ventes ont explosé. Les photos portées attirent tellement plus de clients, et le coût est vite rentabilisé."
              </p>
              <p className="font-display font-bold text-black">
                - Claire, 28 ans
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-vinted text-vinted" />
                ))}
              </div>
              <p className="font-body text-black italic mb-4">
                "Avant, je n'avais que des photos basiques. Depuis que j'utilise VintDress, j'ai vu mes temps de vente réduire de moitié. C'est un investissement que je recommande à tous!"
              </p>
              <p className="font-display font-bold text-black">
                - Julien, 34 ans
              </p>
            </div>
          </div>
        </section>

        {/* How to */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Comment mettre tes vêtements sur mannequin avec VintDress ?
          </h2>

          <div className="space-y-4">
            {/* Étape 1 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                1
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Upload de ton vêtement
                </h3>
                <p className="font-body text-black">
                  Commence par télécharger une photo de ton vêtement sur notre plateforme.
                </p>
              </div>
            </div>

            {/* Étape 2 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                2
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Configure ton mannequin
                </h3>
                <p className="font-body text-black">
                  Choisis le genre, la morphologie, la carnation et la pose de ton mannequin. Tu peux également sélectionner le fond idéal pour mettre en valeur tes articles.
                </p>
              </div>
            </div>

            {/* Étape 3 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                3
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Génère et télécharge
                </h3>
                <p className="font-body text-black">
                  En seulement 30 secondes, tu obtiens une photo prête à être utilisée sur Vinted. Simple, rapide et efficace !
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-12 text-center">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
            Prêt à booster tes ventes sur Vinted ?
          </h3>
          <p className="font-body text-white mb-6">
            Essaye VintDress maintenant et transforme tes photos en moins de 30 secondes !
          </p>
          <Link
            to="/#generateur"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-3 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            CRÉER MES PHOTOS
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Questions Fréquentes
          </h2>

          <div className="space-y-4">
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Quelle est la meilleure façon d'utiliser des photos portées sur Vinted ?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Utilise des photos portées pour montrer tes vêtements en situation réelle. Cela aide les acheteurs à visualiser leur potentiel.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Pourquoi devrais-je éviter les outils gratuits ?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Les outils gratuits offrent souvent une qualité médiocre, ce qui peut nuire à ton image de marque. Investir dans VintDress te garantit des photos professionnelles.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Combien coûte VintDress ?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Les packs commencent à partir de 3,99 € pour 10 photos, soit 0,40 €/photo. C'est un investissement rentable pour améliorer tes ventes !
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Est-ce que je peux personnaliser mon mannequin ?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Oui, VintDress te permet de personnaliser entièrement ton mannequin en fonction de tes besoins : genre, morphologie, pose, et plus encore.
              </div>
            </details>
          </div>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Articles liés
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { slug: "mannequin-ia-vinted", title: "Mannequin IA pour Vinted" },
              { slug: "ia-photo-vinted-gratuit-vs-payant", title: "IA Gratuit vs Payant" },
              { slug: "guide-complet-photos-vinted-2025", title: "Guide Complet Photos 2025" }
            ].map((article) => (
              <Link
                key={article.slug}
                to={`/articles/${article.slug}`}
                className="block bg-pink-pastel border-3 border-black p-4 font-display font-bold text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                <ArrowRight className="w-5 h-5 mb-2 text-vinted" />
                {article.title}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
};
