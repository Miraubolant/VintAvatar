import React, { useEffect, useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import DOMPurify from 'dompurify';
import { getArticleBySlug, getArticlesList } from '../data/articles';
import { useSEO, generateArticleSEO } from '../hooks/useSEO';
import { generateArticleSchema, generateBreadcrumbSchema, generateHowToSchema, generateFAQSchema } from '../utils/structuredData';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../constants';

export const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation('blog');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!slug || !article) {
    return <Navigate to="/" replace />;
  }

  // Cast article to any for optional fields
  const articleData = article as typeof article & {
    howTo?: { name: string; description: string; totalTime?: string; steps: { name: string; text: string }[] };
    faq?: { question: string; answer: string }[];
    relatedArticles?: string[];
  };

  // Get related articles if available
  const relatedArticlesList = useMemo(() => {
    if (!articleData.relatedArticles) return [];
    return articleData.relatedArticles
      .map((relSlug: string) => {
        const relArticle = getArticleBySlug(relSlug);
        return relArticle ? { relatedSlug: relSlug, ...relArticle } : null;
      })
      .filter((item): item is NonNullable<typeof item> => item !== null)
      .slice(0, 3);
  }, [articleData]);

  // Generate combined structured data for SEO
  const structuredData = useMemo(() => {
    const schemas: Record<string, unknown>[] = [];

    // Article schema
    schemas.push(generateArticleSchema({
      headline: article.title,
      description: article.excerpt,
      author: article.author,
      datePublished: article.date,
      dateModified: article.date,
      url: `${SITE_CONFIG.url}/blog/${slug}`,
      image: article.image
    }) as Record<string, unknown>);

    // Breadcrumb schema
    schemas.push(generateBreadcrumbSchema([
      { name: 'Accueil', url: SITE_CONFIG.url },
      { name: 'Blog', url: `${SITE_CONFIG.url}/#blog` },
      { name: article.title, url: `${SITE_CONFIG.url}/blog/${slug}` }
    ]) as Record<string, unknown>);

    // HowTo schema if article has howTo data
    if (articleData.howTo) {
      schemas.push(generateHowToSchema(articleData.howTo) as Record<string, unknown>);
    }

    // FAQ schema if article has faq data
    if (articleData.faq) {
      schemas.push(generateFAQSchema(articleData.faq) as Record<string, unknown>);
    }

    return schemas;
  }, [article, articleData, slug]);

  // Dynamic SEO optimization for articles
  const articleSEO = generateArticleSEO(article);

  useSEO({
    ...articleSEO,
    structuredData: structuredData
  });
  
  return (
    <div className="min-h-screen bg-cream pt-16 sm:pt-20 lg:pt-24">
      {/* Header de l'article */}
      <div className="bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Bouton retour */}
          <div className="mb-8">
            <button
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  const blogSection = document.getElementById('blog');
                  if (blogSection) {
                    blogSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-mint border-3 border-black font-display font-bold text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 transform rotate-1"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('buttons.backToBlog')}
            </button>
          </div>
          
          {/* Métadonnées */}
          <div className="flex items-center gap-4 mb-6">
            <div className="px-3 py-1 bg-vinted border-2 border-black text-white text-sm font-display font-bold transform rotate-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              {article.category}
            </div>
            <div className="flex items-center gap-6 text-sm font-body font-semibold text-gray-600">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {article.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {article.date}
              </div>
              <div className="flex items-center gap-2 text-vinted">
                <Clock className="w-4 h-4" />
                {article.readTime} {t('metadata.readTime')}
              </div>
            </div>
          </div>
          
          {/* Titre */}
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-black mb-6 leading-tight transform -rotate-1">
            {article.title}
          </h1>
          
          {/* Excerpt */}
          <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
            <p className="font-body font-semibold text-lg text-black leading-relaxed">
              {article.excerpt}
            </p>
          </div>
        </div>
      </div>
      
      {/* Image de l'article */}
      {article.image && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
            <img
              src={article.image}
              alt={`${article.title} - Article conseils Vinted génération avatar IA`}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover border-3 border-black"
            />
          </div>
        </div>
      )}
      
      {/* Contenu de l'article */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white border-4 border-black p-8 lg:p-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-0.5">
          <div 
            className="prose prose-lg max-w-none font-body"
            style={{
              fontFamily: 'inherit'
            }}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                article.content
                  .replace(/^# /gm, '<h1 class="font-display font-bold text-3xl text-black mb-6 mt-8 first:mt-0">')
                  .replace(/^## /gm, '<h2 class="font-display font-bold text-2xl text-black mb-4 mt-6">')
                  .replace(/^### /gm, '<h3 class="font-display font-bold text-xl text-black mb-3 mt-5">')
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-vinted">$1</strong>')
                  .replace(/^- /gm, '<li class="mb-2">')
                  .replace(/\n\n/g, '</p><p class="mb-4">')
                  .replace(/^(.+)$/gm, '<p class="mb-4 leading-relaxed">$1</p>'),
                {
                  ALLOWED_TAGS: ['h1', 'h2', 'h3', 'h4', 'p', 'strong', 'em', 'ul', 'ol', 'li', 'a', 'br', 'span'],
                  ALLOWED_ATTR: ['class', 'href', 'target', 'rel'],
                  ALLOW_DATA_ATTR: false,
                }
              )
            }}
          />
        </div>
      </div>
      
      {/* Related Articles Section */}
      {relatedArticlesList.length > 0 && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-black mb-6 transform -rotate-1">
              {t('relatedArticles.title', 'Articles similaires')}
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {relatedArticlesList.map((relArticle) => (
                <Link
                  key={relArticle.relatedSlug}
                  to={`/blog/${relArticle.relatedSlug}`}
                  className="block bg-cream border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                >
                  <div className="px-2 py-1 bg-vinted border-2 border-black text-white text-xs font-display font-bold inline-block mb-2 transform rotate-1">
                    {relArticle.category}
                  </div>
                  <h4 className="font-display font-bold text-sm text-black line-clamp-2">
                    {relArticle.title}
                  </h4>
                  <p className="font-body text-xs text-gray-600 mt-2">
                    {relArticle.readTime}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA de fin d'article */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-16">
        <div className="bg-vinted border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 text-center">
          <h3 className="font-display font-bold text-2xl text-white mb-4">
            {t('cta.article.title')}
          </h3>
          <p className="font-body font-semibold text-white mb-6">
            {t('cta.article.subtitle')}
          </p>
          <a
            href="/#hero"
            className="inline-flex items-center gap-2 px-6 py-3 bg-mint text-black border-3 border-black font-display font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            {t('cta.article.button')}
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </a>
        </div>
      </div>
    </div>
  );
};