import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, Zap, TrendingUp, Star, Shield, ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';
import { ArticleNavigation } from '../../components/ArticleNavigation';

export const MannequinIAVintedPage: React.FC = () => {
  useSEO({
    title: "Améliore tes ventes sur Vinted avec un mannequin IA | VintDress",
    description: "Optimise tes ventes sur Vinted avec un mannequin IA. Découvre comment VintDress peut transformer tes photos.",
    keywords: "mannequin ia vinted, mannequin virtuel vinted, ia pour photo vinted",
  });

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px] border-b-4 border-black overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=400&fit=crop"
          alt="Mannequin IA pour photos Vinted professionnelles"
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
            Améliore tes ventes sur Vinted avec un mannequin IA
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
              <span>26 Décembre 2025</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["mannequin ia", "vinted", "photos vinted", "e-commerce", "vente en ligne"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-pink-pastel border-2 border-black font-display font-bold text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Intro */}
        <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-8">
          <p className="font-body text-lg text-black leading-relaxed">
            Dans le monde du e-commerce, et particulièrement sur Vinted, la présentation de tes articles est primordiale. Si tu es vendeur sur Vinted, tu as sûrement remarqué que les photos de qualité professionnelle attirent plus d'acheteurs. Mais comment obtenir ces photos sans débourser une fortune ? La réponse : <strong className="text-vinted">le mannequin IA</strong>.
          </p>
        </div>

        {/* Section 1 - Qu'est-ce qu'un Mannequin IA */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Qu'est-ce qu'un Mannequin IA ?
          </h2>

          <div className="bg-mint border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
            <p className="font-body text-black leading-relaxed mb-4">
              Un mannequin IA est une technologie innovante qui te permet de créer des photos de vêtements de manière professionnelle grâce à une intelligence artificielle. Avec des outils comme VintDress, tu peux générer des images réalistes de tes vêtements portés par un mannequin virtuel en quelques clics.
            </p>
          </div>

          {/* Pourquoi VintDress */}
          <div className="space-y-6">
            <h3 className="font-display font-bold text-2xl text-black flex items-center gap-2">
              <Zap className="w-6 h-6 text-vinted" />
              Pourquoi Choisir VintDress ?
            </h3>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p className="font-body text-black leading-relaxed mb-6">
                VintDress se distingue par sa qualité. Contrairement aux outils gratuits, VintDress utilise la technologie <strong>FLUX 2 Pro</strong>, qui garantit des rendus indiscernables de vraies photos. Voici pourquoi les outils gratuits ne sont pas une solution viable :
              </p>

              <div className="bg-cream border-3 border-black p-5">
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-vinted flex-shrink-0 mt-1" />
                  <p className="font-display font-bold text-black">
                    Problèmes des outils gratuits :
                  </p>
                </div>
                <ul className="space-y-3 font-body text-black">
                  <li className="flex items-start gap-2">
                    <span className="text-vinted font-bold">•</span>
                    <span><strong>Qualité médiocre</strong> : Les photos générées sont souvent floues et peu flatteuses.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-vinted font-bold">•</span>
                    <span><strong>Watermarks</strong> : La plupart des services gratuits ajoutent des filigranes sur les images, ruinant leur qualité.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-vinted font-bold">•</span>
                    <span><strong>Déformations des vêtements</strong> : Les modèles gratuits peuvent déformer tes vêtements, ce qui peut rebuter les acheteurs potentiels.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-vinted font-bold">•</span>
                    <span><strong>Temps d'attente</strong> : Tu peux attendre jusqu'à 30 minutes pour générer une photo, un luxe que peu de vendeurs peuvent se permettre.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 - Le Coût Réel */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Le Coût Réel du Gratuit
          </h2>

          <div className="bg-pink-pastel border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-body text-black leading-relaxed mb-4">
              Investir dans un service gratuit peut sembler économique au premier abord, mais cela peut rapidement devenir coûteux en termes de temps et de ventes perdues. Par exemple, si tu perds 30 minutes à attendre des photos de mauvaise qualité, cela représente du temps que tu aurais pu passer à promouvoir tes articles ou à répondre à des questions d'acheteurs.
            </p>

            <div className="bg-white border-3 border-black p-5 mt-4">
              <p className="font-body text-black leading-relaxed">
                Avec VintDress, tu peux générer une photo en seulement <strong className="text-vinted">30 secondes</strong> pour un coût de <strong className="text-vinted">0,40€/photo</strong>. Imagine que tu vends un vêtement à 20€. Avec une photo de qualité, tu es bien plus susceptible de conclure la vente. Une seule vente supplémentaire rembourse largement le coût des photos.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 - Boost des ventes */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Comment le Mannequin Virtuel Boostera Tes Ventes ?
          </h2>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-5xl font-display font-bold text-vinted mb-2">+300%</div>
              <p className="font-display font-bold text-black text-sm">VUES SUR VINTED</p>
            </div>

            <div className="bg-pink-pastel border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-5xl font-display font-bold text-vinted mb-2">÷3</div>
              <p className="font-display font-bold text-black text-sm">TEMPS DE VENTE</p>
            </div>

            <div className="bg-white border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-5xl font-display font-bold text-vinted mb-2">↓</div>
              <p className="font-display font-bold text-black text-sm">NÉGOCIATIONS</p>
            </div>
          </div>

          <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-vinted" />
              Avantages concrets
            </h3>
            <ul className="space-y-3 font-body text-black">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span><strong>Temps de vente divisé par 3</strong> : Les articles avec des photos de qualité se vendent plus rapidement.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span><strong>Moins de négociations sur le prix</strong> : Des photos professionnelles inspirent confiance.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span><strong>Moins de retours</strong> : Les acheteurs peuvent mieux visualiser ce qu'ils achètent.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Fonctionnalités */}
        <section className="mb-12">
          <h3 className="font-display font-bold text-2xl text-black mb-6">
            Fonctionnalités de VintDress
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-vinted text-white border-2 border-black font-display font-bold flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <h4 className="font-display font-bold text-black mb-2">Mannequin IA Ultra-Réaliste</h4>
                  <p className="font-body text-sm text-black">La qualité d'image est exceptionnelle, indiscernable d'une photo réelle.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-vinted text-white border-2 border-black font-display font-bold flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <h4 className="font-display font-bold text-black mb-2">Personnalisation Complète</h4>
                  <p className="font-body text-sm text-black">Choisis le genre, la morphologie, la carnation, la pose et le fond, pour un rendu sur mesure.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-vinted text-white border-2 border-black font-display font-bold flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <h4 className="font-display font-bold text-black mb-2">Interface Intuitive</h4>
                  <p className="font-body text-sm text-black">Pas besoin d'être un expert en technologie pour utiliser VintDress. C'est simple et rapide.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-vinted text-white border-2 border-black font-display font-bold flex items-center justify-center flex-shrink-0">4</div>
                <div>
                  <h4 className="font-display font-bold text-black mb-2">Bonus Inclus</h4>
                  <p className="font-body text-sm text-black">Génération automatique de description et titres optimisés pour Vinted.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Témoignages de Vendeurs Vinted
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-vinted text-vinted" />
                ))}
              </div>
              <p className="font-body text-black italic mb-4">
                "J'ai essayé plusieurs outils gratuits, mais la qualité était toujours décevante. Avec VintDress, mes articles se vendent plus vite et à des prix plus élevés !"
              </p>
              <p className="font-display font-bold text-black">
                - Clara, vendeuse Vinted
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-vinted text-vinted" />
                ))}
              </div>
              <p className="font-body text-black italic mb-4">
                "En utilisant un mannequin IA, j'ai vu une réelle différence dans mes ventes. Les photos attirent l'œil et augmentent ma crédibilité en tant que vendeur."
              </p>
              <p className="font-display font-bold text-black">
                - Lucas, vendeur Vinted
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-4 flex items-center gap-2">
              <Shield className="w-7 h-7" />
              Une Investissement Rentable
            </h2>
            <p className="font-body text-white text-lg leading-relaxed">
              Tu cherchais des solutions gratuites pour améliorer tes photos sur Vinted, mais tu as trouvé mieux : VintDress. Pour <strong>0,40€/photo</strong>, tu obtiens une qualité professionnelle qui attire les acheteurs et booste tes ventes. En fin de compte, c'est un investissement qui se rembourse rapidement.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-mint border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-12 text-center">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-black mb-4">
            Prêt à transformer tes photos Vinted ?
          </h3>
          <p className="font-body text-black mb-6">
            Génère des photos avec mannequin IA en 30 secondes !
          </p>
          <Link
            to="/#generateur"
            className="inline-flex items-center gap-2 px-8 py-4 bg-vinted text-white border-3 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            ESSAYER MAINTENANT
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
                Comment fonctionne le mannequin IA sur Vinted ?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Le mannequin IA de VintDress génère des images réalistes de tes vêtements grâce à une technologie avancée. Il te suffit de télécharger une photo, de choisir les paramètres, et en 30 secondes, tu obtiens une image prête à être publiée.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Pourquoi devrais-je payer pour des photos alors qu'il existe des outils gratuits ?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Les outils gratuits offrent souvent une qualité médiocre, des déformations et des watermarks. VintDress offre un service premium garantissant des photos d'une qualité professionnelle, ce qui se traduit par des ventes plus rapides et plus nombreuses.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Est-ce que l'investissement en vaut la peine ?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Oui, investir 0,40€/photo peut te rapporter beaucoup plus en augmentant tes chances de vente. Une seule vente peut couvrir largement le coût de tes photos.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Quels types de vêtements puis-je photographier avec VintDress ?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Tu peux utiliser VintDress pour tous types de vêtements, que ce soit des robes, des t-shirts, des pantalons, etc. La personnalisation permet d'adapter le mannequin à chaque article.
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
              { slug: "ia-photo-vinted-gratuit-vs-payant", title: "IA Gratuit vs Payant" },
              { slug: "guide-complet-photos-vinted-2025", title: "Guide Photos 2025" },
              { slug: "photo-porte-vinted", title: "Photos Portées Vinted" }
            ].map((article) => (
              <Link
                key={article.slug}
                to={`/articles/${article.slug}`}
                className="block bg-mint border-3 border-black p-4 font-display font-bold text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
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
