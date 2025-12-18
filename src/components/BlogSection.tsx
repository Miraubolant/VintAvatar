import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Tag, Lightbulb, ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { getArticlesList } from '../articles';

const ARTICLES_TO_SHOW = 7; // 1 featured + 6 in grid

const getBlogPosts = () => {
  const articlesList = getArticlesList();
  return articlesList.map((article, index) => ({
    ...article,
    featured: index === 0 // Premier article en featured
  }));
};

export const BlogSection: React.FC = () => {
  const { t } = useTranslation('blog');
  const blogPosts = getBlogPosts();
  const [showAllArticles, setShowAllArticles] = useState(false);

  // Calculate visible articles (1 featured + 6 others = 7 total, or all if expanded)
  const visiblePosts = showAllArticles
    ? blogPosts
    : blogPosts.slice(0, ARTICLES_TO_SHOW);

  const hasMoreArticles = blogPosts.length > ARTICLES_TO_SHOW;

  return (
    <section id="blog" className="relative py-20 lg:py-24 bg-cream overflow-hidden">
      {/* Formes décoratives neo-brutalism */}
      <div className="absolute top-20 right-16 w-14 h-14 bg-mint border-4 border-black transform rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
      <div className="absolute top-1/3 left-8 w-10 h-10 bg-pink-pastel border-3 border-black transform -rotate-45 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hidden lg:block"></div>
      <div className="absolute bottom-32 right-8 w-12 h-12 bg-vinted border-4 border-black neo-shape-circle shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
      <div className="absolute bottom-16 left-1/4 w-8 h-8 bg-cream border-3 border-black transform -rotate-12 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Neo-Brutalism */}
        <div className="text-center mb-16">
          
          <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight">
            <div className="text-black transform -rotate-2 mb-4 relative">
              <span className="inline-block bg-white border-4 border-black px-8 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                {t('title.line1')}
              </span>
            </div>
            <div className="text-white transform rotate-3 relative">
              <span className="inline-flex items-center gap-4 bg-vinted border-4 border-black px-8 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                {t('title.line2')}
                <Lightbulb className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
              </span>
            </div>
          </h2>

          <div className="max-w-2xl mx-auto pt-10 pb-8">
            <p className="font-body font-semibold text-lg text-gray-700">
              Reste à jour avec nos <span className="text-vinted font-bold">derniers conseils</span> pour <span className="text-vinted font-bold">maximiser tes ventes</span> !
            </p>
          </div>
        </div>

        {/* Featured Post - Mobile Optimized */}
        {visiblePosts.filter(post => post.featured).map((post) => (
          <div key={post.id} className="mb-12 sm:mb-16">
            <div className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2">
                  <img
                    src={post.image}
                    alt={`${post.title} - Guide avatar IA pour Vinted`}
                    className="w-full h-48 sm:h-64 lg:h-full object-cover border-b-4 lg:border-b-0 lg:border-r-4 border-black"
                    loading="lazy"
                    fetchPriority="low"
                    width={800}
                    height={400}
                  />
                </div>
                <div className="lg:w-1/2 p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div className="px-2 sm:px-3 py-1 bg-pink-pastel border-2 border-black text-black text-xs font-display font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      {t('badges.featured')}
                    </div>
                    <div className="px-2 sm:px-3 py-1 bg-mint border-2 border-black text-black text-xs font-display font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      {post.category}
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-black mb-3 sm:mb-4">
                    {post.title}
                  </h3>

                  <p className="font-body font-semibold text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-6 sm:mb-8 text-sm font-body font-semibold text-gray-600">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="text-vinted">
                      {post.readTime} {t('metadata.readTime')}
                    </div>
                  </div>

                  <Link
                    to={`/articles/${post.slug}`}
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 sm:px-6 py-3 bg-vinted text-white border-3 border-black font-display font-bold text-sm sm:text-base shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                  >
                    {t('buttons.readArticle')}
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Blog Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8">
          {visiblePosts
            .filter(post => !post.featured)
            .map((post, index) => {
              // Sur mobile, afficher seulement 2 articles sauf si showAllArticles est true
              const isMobileHidden = !showAllArticles && index >= 2;
              return (
            <div
              key={post.id}
              className={`${isMobileHidden ? 'hidden sm:block' : ''} bg-white border-4 border-black p-4 sm:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200`}
            >
              <img
                src={post.image}
                alt={`${post.title} - Conseils génération photo portée Vinted`}
                className="w-full h-32 sm:h-40 object-cover border-3 border-black mb-3 sm:mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                loading="lazy"
                fetchPriority="low"
                width={400}
                height={200}
              />

              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className={`px-2 sm:px-3 py-1 border-2 border-black text-black text-xs font-display font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
                  post.category === 'Technologie' ? 'bg-vinted text-white' :
                  post.category === 'Success Story' ? 'bg-mint' :
                  post.category === 'Stratégie' ? 'bg-pink-pastel' :
                  post.category === 'Tendance' ? 'bg-cream' :
                  post.category === 'Guide' ? 'bg-mint' :
                  post.category === 'Conseils' ? 'bg-pink-pastel' : 'bg-cream'
                }`}>
                  {post.category}
                </div>
              </div>

              <h3 className="font-display font-bold text-base sm:text-lg text-black mb-2 sm:mb-3 line-clamp-2 leading-tight">
                {post.title}
              </h3>

              <p className="font-body font-semibold text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0 text-xs font-body font-semibold text-gray-600 mb-3 sm:mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </div>
                <div className="text-vinted">
                  {post.readTime} {t('metadata.readTime')}
                </div>
              </div>

              <Link
                to={`/articles/${post.slug}`}
                className="block w-full py-2 sm:py-3 px-3 sm:px-4 bg-vinted border-3 border-black text-white font-display font-bold text-sm transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-center transition-all duration-200"
              >
                {t('buttons.readMore')}
              </Link>
            </div>
          );
        })}
        </div>

        {/* View All Articles Button - All Screens */}
        {hasMoreArticles && (
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setShowAllArticles(!showAllArticles)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-vinted text-white border-4 border-black font-display font-bold text-base shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              {showAllArticles
                ? t('buttons.showLess', 'Voir moins')
                : t('buttons.viewAll', 'Voir tous les articles')
              }
              {showAllArticles ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
          </div>
        )}

        {/* Stats Banner */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-16">
          <div className="text-center">
            <div className="font-display font-bold text-3xl text-white mb-2">
              {t('stats.availableArticles').replace('{count}', blogPosts.length.toString())}
            </div>
            <div className="font-body font-semibold text-sm text-white opacity-90">
              {t('stats.subtitle')}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-block bg-white border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-black mb-4">
              {t('cta.section.title')}
            </h3>
            <button
              onClick={() => {
                const heroSection = document.getElementById('hero');
                if (heroSection) {
                  heroSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-pink-pastel text-black border-3 border-black font-display font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <Tag className="w-5 h-5" />
              {t('cta.section.button')}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};