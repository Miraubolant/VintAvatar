import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { getArticlesList } from '../data/articles';

export default function BlogIndexPage() {
  useSEO({
    title: "Blog VintDress : Tous les Articles et Guides pour Vinted | Conseils, Astuces & Success Stories",
    description: "Découvre tous nos articles, guides et conseils pour réussir sur Vinted. Photos IA, stratégies de vente, témoignages et astuces pour booster tes ventes !",
    keywords: "blog vinted, articles vinted, guides vinted, conseils vente, astuces vinted, photos vinted, success stories, stratégie vente",
  });

  // Trier les articles par date (plus récent d'abord)
  const articlesList = getArticlesList();
  const sortedArticles = [...articlesList].sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative bg-cream overflow-hidden">
        {/* Formes décoratives neo-brutalism */}
        <div className="hidden md:block absolute top-20 left-10 w-12 h-12 bg-pink-pastel border-4 border-black transform rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
        <div className="hidden md:block absolute top-32 right-20 w-16 h-16 bg-mint border-4 border-black transform -rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
        <div className="hidden md:block absolute bottom-32 left-20 w-10 h-10 bg-vinted border-4 border-black transform rotate-45 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
        <div className="hidden md:block absolute bottom-20 right-10 w-14 h-14 bg-pink-pastel border-4 border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pt-12 lg:pt-16 sm:pb-16 lg:pb-20">
          <div className="text-center space-y-6">
            {/* Titre multi-lignes style Hero */}
            <div className="space-y-2">
              <h1 className="font-display font-semibold text-[1.75rem] xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight">
                <div className="mb-2">
                  <span className="inline-block bg-white text-black border-2 sm:border-3 border-black px-2 sm:px-4 py-1 sm:py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
                    TOUS NOS
                  </span>
                </div>
                <div className="mb-2">
                  <span className="inline-block bg-vinted text-white border-2 sm:border-3 border-black px-2 sm:px-4 py-1 sm:py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
                    ARTICLES & GUIDES
                  </span>
                </div>
                <div>
                  <span className="inline-block bg-mint text-black border-2 sm:border-3 border-black px-2 sm:px-4 py-1 sm:py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
                    VINTED
                  </span>
                </div>
              </h1>
            </div>

            {/* Description */}
            <div className="pt-4">
              <p className="font-body text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                Découvre tous nos conseils et success stories pour{' '}
                <span className="text-vinted font-bold">booster tes ventes avec l'IA !</span>
              </p>
            </div>

            {/* Back Button */}
            <div className="pt-6">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all font-space-grotesk font-bold"
              >
                <ArrowLeft className="w-5 h-5" />
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <div className="max-w-6xl mx-auto px-6 py-8 lg:py-12">
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
                      className="bg-vinted text-white px-2 py-1 border-2 border-black font-space-grotesk font-semibold text-xs flex items-center gap-1"
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
