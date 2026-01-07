import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, CheckCircle, TrendingUp, Package, DollarSign, AlertTriangle, Star, ArrowRight, ShoppingBag, Camera, Percent } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';
import { ArticleNavigation } from '../../components/ArticleNavigation';

export const CommentVendreSurVintedPage: React.FC = () => {
  useSEO({
    title: "Comment Vendre sur Vinted : Guide Complet 2026 | VintDress",
    description: "Apprends comment vendre sur Vinted efficacement. Guide complet : créer une annonce, fixer le bon prix, vendre des lots et booster tes ventes.",
    keywords: "comment vendre sur vinted, vendre vinted, annonce vinted, vente vinted, guide vinted vendeur",
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px] border-b-4 border-black overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop"
          alt="Comment vendre sur Vinted - Guide complet"
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
            GUIDE
          </div>

          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-black mb-6 leading-tight">
            Comment Vendre sur Vinted : Guide Complet 2026
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-sm font-body text-gray-700 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Équipe VintDress</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>12 min de lecture</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>7 Janvier 2026</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["vendre vinted", "annonce vinted", "débutant vinted", "guide vendeur", "VintDress"].map((tag) => (
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
            Tu veux vendre sur Vinted mais tu ne sais pas par où commencer ? Avec plus de <strong className="text-vinted">80 millions d'utilisateurs</strong> en Europe, Vinted est devenu la plateforme incontournable pour vendre ses vêtements. Bonne nouvelle : c'est <strong>100% gratuit</strong> pour les vendeurs (0% de commission). Dans ce guide complet, tu vas apprendre à créer des annonces qui vendent, fixer le bon prix et optimiser tes ventes.
          </p>
        </div>

        {/* Section 1 - Créer une annonce */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Créer une annonce qui vend
          </h2>

          <div className="space-y-8">
            {/* Titre optimisé */}
            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-vinted" />
                Un titre optimisé pour être trouvé
              </h3>
              <p className="font-body text-black leading-relaxed mb-4">
                Le titre est la première chose que les acheteurs voient. Un bon titre inclut :
              </p>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>La marque</strong> : Zara, H&M, Nike... Les acheteurs recherchent souvent par marque.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Le type de vêtement</strong> : Robe, jean, t-shirt, veste...</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>La taille</strong> : M, 38, S... Indispensable pour le filtrage.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Une caractéristique</strong> : Couleur, motif, style (vintage, neuf...)</span>
                </li>
              </ul>
              <div className="mt-4 p-4 bg-white border-3 border-black">
                <p className="font-display font-bold text-sm text-gray-600 mb-2">Exemple de bon titre :</p>
                <p className="font-body text-black">"Robe Zara noire taille M - Neuve avec étiquette"</p>
              </div>
            </div>

            {/* Description efficace */}
            <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 text-vinted" />
                Une description complète
              </h3>
              <p className="font-body text-black leading-relaxed mb-4">
                Une bonne description répond à toutes les questions de l'acheteur :
              </p>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>État réel</strong> : Neuf, très bon état, bon état... Sois honnête !</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Mesures</strong> : Tour de poitrine, longueur, tour de taille...</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Défauts éventuels</strong> : Mentionne tout, même les petits détails.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Raison de la vente</strong> : Trop petit, jamais porté, changement de style...</span>
                </li>
              </ul>
            </div>

            {/* Catégorisation */}
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4">
                Catégorisation correcte
              </h3>
              <p className="font-body text-black leading-relaxed">
                Choisis la bonne catégorie et sous-catégorie pour que ton article apparaisse dans les bonnes recherches. Remplis <strong>tous les champs</strong> : marque, taille, couleur, état, matière. Plus tu renseignes d'informations, plus ton article sera visible dans les filtres de recherche.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 - Photos */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Photographier ses vêtements comme un pro
          </h2>

          <div className="space-y-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <Camera className="w-6 h-6 text-vinted" />
                Les bases d'une bonne photo
              </h3>
              <ul className="space-y-3 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Lumière naturelle</strong> : Près d'une fenêtre, de préférence le matin ou en fin d'après-midi.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Fond neutre</strong> : Mur blanc, drap uni, pas de désordre visible.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Plusieurs angles</strong> : Face, dos, détails, étiquette, défauts éventuels.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Netteté</strong> : Pas de flou, vêtement bien repassé et présenté.</span>
                </li>
              </ul>
            </div>

            {/* CTA VintDress */}
            <div className="bg-vinted border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-white mb-4 flex items-center gap-2">
                <Star className="w-6 h-6 text-white" />
                Passe au niveau supérieur avec VintDress
              </h3>
              <p className="font-body text-white leading-relaxed mb-4">
                Les <strong>photos portées sur mannequin</strong> augmentent les vues de <strong>300%</strong> et réduisent le temps de vente par 3. Avec VintDress, génère des photos professionnelles sur mannequin IA en <strong>30 secondes</strong> à partir de 0,40€/photo.
              </p>
              <Link
                to="/#generateur"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-vinted border-3 border-black font-display font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                ESSAYER VINTDRESS
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 3 - Prix */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Fixer le bon prix
          </h2>

          <div className="space-y-6">
            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-vinted" />
                Analyser la concurrence
              </h3>
              <p className="font-body text-black leading-relaxed mb-4">
                Avant de fixer ton prix, recherche des articles similaires sur Vinted :
              </p>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Même marque, même type de vêtement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Filtre par "Vendus" pour voir les prix réels de vente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Adapte selon l'état de ton article</span>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-4">
                  Marge de négociation
                </h3>
                <p className="font-body text-black leading-relaxed">
                  Ajoute <strong>10-15%</strong> à ton prix minimum acceptable. Les acheteurs Vinted adorent négocier, et tu pourras accepter leurs offres sans perdre d'argent.
                </p>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-4">
                  Prix psychologiques
                </h3>
                <p className="font-body text-black leading-relaxed">
                  Utilise des prix comme <strong>9,90€</strong> au lieu de 10€, ou <strong>14,50€</strong> au lieu de 15€. Ces petites différences augmentent les conversions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - Lots */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Vendre des lots : la stratégie gagnante
          </h2>

          <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
              <Package className="w-6 h-6 text-vinted" />
              Comment créer un lot attractif
            </h3>
            <p className="font-body text-black leading-relaxed mb-4">
              Les lots permettent de vendre plus d'articles en une seule transaction :
            </p>
            <ul className="space-y-3 font-body text-black">
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Cohérence</strong> : Regroupe des articles similaires (3 t-shirts, tenue complète...)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Réduction attractive</strong> : Offre 15-20% de moins que la somme des articles séparés</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Photos groupées</strong> : Montre tous les articles ensemble + photos individuelles</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Frais de port mutualisés</strong> : L'acheteur économise sur les frais d'envoi</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 5 - Ce qui se vend le mieux */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Ce qui se vend le mieux sur Vinted
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-vinted" />
                Top marques recherchées
              </h3>
              <ul className="space-y-2 font-body text-black">
                <li>• Zara, H&M, Mango (fast fashion)</li>
                <li>• Nike, Adidas, Puma (sportswear)</li>
                <li>• Levi's, Diesel (jeans)</li>
                <li>• The North Face, Patagonia (outdoor)</li>
                <li>• Sézane, Rouje (marques tendance)</li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <Percent className="w-6 h-6 text-vinted" />
                Catégories rentables
              </h3>
              <ul className="space-y-2 font-body text-black">
                <li>• Vêtements enfants (forte rotation)</li>
                <li>• Vintage et pièces uniques</li>
                <li>• Articles neufs avec étiquette</li>
                <li>• Chaussures de marque</li>
                <li>• Sacs et accessoires</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6 - Problèmes */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Pourquoi tes articles ne se vendent pas
          </h2>

          <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-vinted flex-shrink-0 mt-1" />
              <p className="font-display font-bold text-black">
                Checklist diagnostic :
              </p>
            </div>
            <ul className="space-y-3 font-body text-black">
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Photos médiocres</strong> : Floues, sombres, fond encombré → Refais-les ou utilise VintDress</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Prix trop élevé</strong> : Compare avec les articles vendus, pas ceux en ligne</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Description incomplète</strong> : Ajoute mesures, état réel, défauts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Annonce inactive</strong> : Rafraîchis régulièrement (modifie le prix de 0,10€)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Pas de réponse aux messages</strong> : Réponds vite, les acheteurs n'attendent pas</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Final */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-12 text-center">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
            Prêt à booster tes ventes sur Vinted ?
          </h3>
          <p className="font-body text-white mb-6">
            Des photos professionnelles = plus de vues = plus de ventes. Essaye VintDress et vois la différence !
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
                Comment vendre sur Vinted pour la première fois ?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Crée un compte gratuit, prends de belles photos de ton article, rédige un titre et une description détaillée, fixe un prix compétitif et publie. C'est aussi simple que ça !
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Vinted prend-il une commission sur les ventes ?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Non ! Vinted est 100% gratuit pour les vendeurs. La plateforme se rémunère via la protection acheteur (5% + 0,70€) payée par l'acheteur.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Comment vendre plus vite sur Vinted ?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Utilise des photos de qualité (idéalement sur mannequin), fixe un prix compétitif, réponds rapidement aux messages, et rafraîchis régulièrement tes annonces en modifiant légèrement le prix.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Comment créer un lot sur Vinted ?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Crée une nouvelle annonce, sélectionne "Lot" comme type d'article, ajoute des photos de tous les articles ensemble et individuellement, et propose un prix avantageux par rapport à la somme des articles séparés.
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
              { slug: "comment-faire-photos-vinted", title: "Comment Faire de Belles Photos Vinted" },
              { slug: "optimiser-ventes-vinted", title: "Booster ses Ventes Vinted" },
              { slug: "photo-porte-vinted", title: "Photos Portées sur Vinted" }
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

export default CommentVendreSurVintedPage;
