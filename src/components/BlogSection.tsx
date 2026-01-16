import React from 'react';
import { Calendar, User, ArrowRight, Lightbulb } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { getArticlesListByLanguage } from '../data/articles';
import { getArticleUrlBySlugAndLanguage } from '../lib/articleTranslations';
import { Language } from '../lib/i18n';

const ARTICLES_TO_SHOW = 5; // 1 featured + 4 in grid

export const BlogSection: React.FC = () => {
  const { t, i18n } = useTranslation('blog');
  const currentLanguage = (i18n.language || 'fr') as Language;

  const blogPosts = getArticlesListByLanguage(currentLanguage).map((article, index) => ({
    ...article,
    featured: index === 0
  }));

  // Calculate visible articles (1 featured + 3 others = 4 total)
  const visiblePosts = blogPosts.slice(0, ARTICLES_TO_SHOW);

  const hasMoreArticles = blogPosts.length > ARTICLES_TO_SHOW;

  return (
    <section id="blog" className="relative py-12 lg:py-16 bg-grain overflow-hidden">
      {/* Formes décoratives neo-brutalism - hidden on mobile */}
      <div className="hidden lg:block absolute top-20 right-16 w-14 h-14 bg-mint border-4 border-black transform rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] pointer-events-none"></div>
      <div className="hidden lg:block absolute top-1/3 left-8 w-10 h-10 bg-pink-pastel border-3 border-black transform -rotate-45 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] pointer-events-none"></div>
      <div className="hidden lg:block absolute bottom-32 right-8 w-12 h-12 bg-vinted border-4 border-black neo-shape-circle shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] pointer-events-none"></div>
      <div className="hidden lg:block absolute bottom-16 left-1/4 w-8 h-8 bg-cream border-3 border-black transform -rotate-12 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Neo-Brutalism */}
        <div className="text-center mb-8 sm:mb-12">

          <h2 className="font-display font-semibold text-2xl sm:text-3xl lg:text-4xl tracking-tight">
            {/* Mobile: inline */}
            <div className="flex flex-wrap justify-center items-center gap-2 sm:hidden">
              <span className="inline-block bg-white text-black border-2 border-black px-3 py-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
                {t('title.line1')}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-vinted text-white border-2 border-black px-3 py-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
                {t('title.line2')}
                <Lightbulb className="w-4 h-4 text-white" />
              </span>
            </div>
            {/* Desktop: stacked */}
            <div className="hidden sm:block">
              <div className="text-black transform -rotate-1 mb-3 relative">
                <span className="inline-block bg-white border-3 border-black px-5 py-2.5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  {t('title.line1')}
                </span>
              </div>
              <div className="text-white transform rotate-1 relative">
                <span className="inline-flex items-center gap-3 bg-vinted border-3 border-black px-5 py-2.5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  {t('title.line2')}
                  <Lightbulb className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </span>
              </div>
            </div>
          </h2>

          <div className="max-w-2xl mx-auto pt-4 sm:pt-6">
            <p className="font-body font-semibold text-sm sm:text-base text-gray-700">
              Reste à jour avec nos <span className="text-vinted font-bold">derniers conseils</span> pour <span className="text-vinted font-bold">maximiser tes ventes</span> !
            </p>
          </div>
        </div>

        {/* Featured Post - Compact */}
        {visiblePosts.filter(post => post.featured).map((post) => (
          <div key={post.id} className="mb-6 sm:mb-8 max-w-4xl mx-auto">
            <div className="bg-white border-2 sm:border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-2/5">
                  <div className="aspect-[16/10] sm:aspect-auto sm:h-full w-full">
                    <img
                      src={post.image}
                      alt={`${post.title} - Guide avatar IA pour Vinted`}
                      className="w-full h-full object-cover border-b-2 sm:border-b-0 sm:border-r-2 lg:border-r-3 border-black"
                      loading="eager"
                      fetchPriority="high"
                      width={400}
                      height={250}
                    />
                  </div>
                </div>
                <div className="sm:w-3/5 p-3 sm:p-4">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2 sm:mb-2.5">
                    <div className="px-1.5 sm:px-2 py-0.5 bg-pink-pastel border-2 border-black text-black text-[9px] sm:text-[10px] font-display font-bold shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                      {t('badges.featured')}
                    </div>
                    <div className="px-1.5 sm:px-2 py-0.5 bg-mint border-2 border-black text-black text-[9px] sm:text-[10px] font-display font-bold shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                      {post.category}
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-sm sm:text-base lg:text-lg text-black mb-1.5 sm:mb-2 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="font-body font-semibold text-[11px] sm:text-xs text-gray-700 mb-2 sm:mb-3 leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2.5 sm:mb-3 text-[9px] sm:text-[10px] font-body font-semibold text-gray-600">
                    <div className="flex items-center gap-1">
                      <User className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      {post.date}
                    </div>
                    <div className="text-vinted">
                      {post.readTime} {t('metadata.readTime')}
                    </div>
                  </div>

                  <Link
                    to={getArticleUrlBySlugAndLanguage(post.slug, currentLanguage)}
                    className="inline-flex items-center justify-center gap-1.5 sm:gap-2 w-full sm:w-auto px-3 py-1.5 sm:py-2 bg-vinted text-white border-2 border-black font-display font-bold text-[10px] sm:text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                  >
                    {t('buttons.readArticle')}
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Blog Grid - Responsive: 2 cols mobile, 4 cols desktop for balanced layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-5 mb-8">
          {visiblePosts
            .filter(post => !post.featured)
            .map((post) => (
            <div
              key={post.id}
              className="bg-white border-2 sm:border-3 border-black p-2 sm:p-3 lg:p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] lg:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] lg:hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <div className="aspect-[4/3] w-full mb-2 sm:mb-2.5">
                <img
                  src={post.image}
                  alt={`${post.title} - Conseils génération photo portée Vinted`}
                  className="w-full h-full object-cover border-2 border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] sm:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  loading="lazy"
                  fetchPriority="low"
                  width={300}
                  height={225}
                />
              </div>

              <div className="flex items-center gap-1 mb-1.5 sm:mb-2">
                <div className={`px-1.5 py-0.5 border-2 border-black text-[9px] sm:text-[10px] lg:text-xs font-display font-bold shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] ${
                  post.category === 'Technologie' ? 'bg-vinted text-white' :
                  post.category === 'Success Story' ? 'bg-mint text-black' :
                  post.category === 'Stratégie' ? 'bg-pink-pastel text-black' :
                  post.category === 'Tendance' ? 'bg-cream text-black' :
                  post.category === 'Guide' ? 'bg-mint text-black' :
                  post.category === 'Conseils' ? 'bg-pink-pastel text-black' : 'bg-cream text-black'
                }`}>
                  {post.category}
                </div>
              </div>

              <h3 className="font-display font-bold text-[11px] sm:text-xs lg:text-sm text-black mb-1 sm:mb-1.5 line-clamp-2 leading-tight">
                {post.title}
              </h3>

              <p className="hidden sm:block font-body font-semibold text-[10px] lg:text-xs text-gray-600 mb-2 leading-snug line-clamp-2">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between text-[8px] sm:text-[9px] lg:text-[10px] font-body font-semibold text-gray-500 mb-1.5 sm:mb-2">
                <div className="flex items-center gap-0.5 sm:gap-1">
                  <Calendar className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
                  <span className="truncate max-w-[60px] sm:max-w-none">{post.date}</span>
                </div>
                <div className="text-vinted">
                  {post.readTime} {t('metadata.readTime')}
                </div>
              </div>

              <Link
                to={getArticleUrlBySlugAndLanguage(post.slug, currentLanguage)}
                className="block w-full py-1.5 sm:py-2 px-2 bg-vinted border-2 border-black text-white font-display font-bold text-[9px] sm:text-[10px] lg:text-xs transform hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] sm:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-center transition-all duration-200"
              >
                {t('buttons.readMore')}
              </Link>
            </div>
          ))}
        </div>

        {/* View All Articles Button - Compact */}
        {hasMoreArticles && (
          <div className="flex justify-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-vinted text-white border-3 border-black font-display font-bold text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              {t('buttons.viewAll', 'Voir tous les articles')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};