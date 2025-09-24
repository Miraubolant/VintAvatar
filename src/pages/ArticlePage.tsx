import React, { useEffect } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getArticles } from '../articles';
import { useSEO, generateArticleSEO } from '../hooks/useSEO';
import { generateArticleSchema } from '../utils/structuredData';

export const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation('blog');

  useEffect(() => {
    // Scroll to top when article loads
    window.scrollTo(0, 0);
  }, []);

  const articles = getArticles();

  if (!slug || !articles[slug]) {
    return <Navigate to="/" replace />;
  }

  const article = articles[slug];
  
  // Dynamic SEO optimization for articles
  const articleSEO = generateArticleSEO(article);
  const articleSchema = generateArticleSchema({
    headline: article.title,
    description: article.excerpt,
    author: article.author,
    datePublished: article.date,
    dateModified: article.date,
    url: `https://vintdress.com/blog/${slug}`,
    image: article.image
  });
  
  useSEO({
    ...articleSEO,
    structuredData: articleSchema
  });
  
  return (
    <div className="min-h-screen bg-cream">
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
              __html: article.content
                .replace(/^# /gm, '<h1 class="font-display font-bold text-3xl text-black mb-6 mt-8 first:mt-0">')
                .replace(/^## /gm, '<h2 class="font-display font-bold text-2xl text-black mb-4 mt-6">')
                .replace(/^### /gm, '<h3 class="font-display font-bold text-xl text-black mb-3 mt-5">')
                .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-vinted">$1</strong>')
                .replace(/^- /gm, '<li class="mb-2">')
                .replace(/\n\n/g, '</p><p class="mb-4">')
                .replace(/^(.+)$/gm, '<p class="mb-4 leading-relaxed">$1</p>')
            }}
          />
        </div>
      </div>
      
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