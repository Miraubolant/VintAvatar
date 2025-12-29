import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { articles } from '../articles';

export default function BlogIndexPage() {
  useSEO({
    title: "Blog VintedAvatar : Tous les Articles et Guides pour Vinted | Conseils, Astuces & Success Stories",
    description: "Découvre tous nos articles, guides et conseils pour réussir sur Vinted. Photos IA, stratégies de vente, témoignages et astuces pour booster tes ventes !",
    keywords: "blog vinted, articles vinted, guides vinted, conseils vente, astuces vinted, photos vinted, success stories, stratégie vente",
  });

  // Trier les articles par date (plus récent d'abord)
  const sortedArticles = [...articles].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <div className="bg-vinted border-b-4 border-black py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white hover:text-cream transition-colors mb-8 font-space-grotesk font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour à l'accueil
          </Link>

          <h1 className="text-4xl lg:text-6xl font-space-grotesk font-bold text-white mb-6">
            Blog VintedAvatar
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl">
            Tous nos guides, conseils et success stories pour réussir sur Vinted avec l'IA !
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl lg:text-4xl font-space-grotesk font-bold">
            Tous les Articles ({articles.length})
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedArticles.map((article) => (
            <Link
              key={article.id}
              to={`/articles/${article.slug}`}
              className="group bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden border-b-4 border-black">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-vinted text-white px-3 py-1 border-2 border-black font-space-grotesk font-semibold text-sm">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-3 line-clamp-2 group-hover:text-vinted transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {article.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="bg-pink-pastel px-2 py-1 border-2 border-black font-space-grotesk font-semibold text-xs flex items-center gap-1"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-mint border-4 border-black p-8 lg:p-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-space-grotesk font-bold mb-4">
            Prêt(e) à Booster tes Ventes Vinted ?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Découvre comment nos photos IA peuvent transformer tes ventes en quelques secondes !
          </p>
          <Link
            to="/"
            className="inline-block bg-vinted text-white px-8 py-4 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all font-space-grotesk font-bold text-lg"
          >
            Générer mes Photos IA
          </Link>
        </div>
      </div>
    </div>
  );
}
