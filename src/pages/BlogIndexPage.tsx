import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { ArrowLeft, Calendar, Clock, Tag, Search, Filter, X, ChevronDown, SortDesc, SortAsc } from 'lucide-react';
import { getArticlesListByLanguage } from '../data/articles';
import { useTranslation } from 'react-i18next';
import { getArticleUrlBySlugAndLanguage } from '../lib/articleTranslations';
import { Language } from '../lib/i18n';

export default function BlogIndexPage() {
  const { t, i18n } = useTranslation('blog');
  const currentLanguage = (i18n.language || 'fr') as Language;

  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

  useSEO({
    title: "Blog VintDress : Tous les Articles et Guides pour Vinted | Conseils, Astuces & Success Stories",
    description: "Découvre tous nos articles, guides et conseils pour réussir sur Vinted. Photos IA, stratégies de vente, témoignages et astuces pour booster tes ventes !",
    keywords: "blog vinted, articles vinted, guides vinted, conseils vente, astuces vinted, photos vinted, success stories, stratégie vente",
  });

  const articlesList = getArticlesListByLanguage(currentLanguage);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(articlesList.map(article => article.category))];
    return cats.sort();
  }, [articlesList]);

  // Filter and sort articles
  const filteredArticles = useMemo(() => {
    let result = [...articlesList];

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(article =>
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.tags.some(tag => tag.toLowerCase().includes(query)) ||
        article.category.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(article => article.category === selectedCategory);
    }

    // Sort by date
    result.sort((a, b) => {
      const dateA = new Date(a.publishedAt).getTime();
      const dateB = new Date(b.publishedAt).getTime();
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [articlesList, searchQuery, selectedCategory, sortOrder]);

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSortOrder('newest');
  };

  const hasActiveFilters = searchQuery || selectedCategory !== 'all' || sortOrder !== 'newest';

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
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
                    {t('indexPage.title.line1')}
                  </span>
                </div>
                <div className="mb-2">
                  <span className="inline-block bg-vinted text-white border-2 sm:border-3 border-black px-2 sm:px-4 py-1 sm:py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
                    {t('indexPage.title.line2')}
                  </span>
                </div>
                <div>
                  <span className="inline-block bg-mint text-black border-2 sm:border-3 border-black px-2 sm:px-4 py-1 sm:py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
                    {t('indexPage.title.line3')}
                  </span>
                </div>
              </h1>
            </div>

            {/* Description */}
            <div className="pt-4">
              <p className="font-body text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                {t('indexPage.description')}{' '}
                <span className="text-vinted font-bold">{t('indexPage.descriptionHighlight')}</span>
              </p>
            </div>

            {/* Back Button */}
            <div className="pt-6">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all font-space-grotesk font-bold"
              >
                <ArrowLeft className="w-5 h-5" />
                {t('buttons.backToHome')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-4 sm:p-6">
          {/* Filter Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-vinted border-3 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <Filter className="w-5 h-5 text-white" />
            </div>
            <h2 className="font-display font-bold text-lg sm:text-xl text-black">
              {t('filters.title', 'FILTRER LES ARTICLES')}
            </h2>
          </div>

          {/* Filters Content - Always visible */}
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <Search className="w-5 h-5 text-gray-500" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('filters.searchPlaceholder', 'Rechercher un article...')}
                className="w-full pl-10 pr-10 py-3 bg-cream border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-body font-semibold text-sm focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-pink-pastel border-2 border-black flex items-center justify-center hover:bg-pink-300 transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Category and Sort Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Category Filter */}
              <div>
                <label className="block font-display font-bold text-sm text-black mb-2">
                  {t('filters.category', 'CATÉGORIE')}
                </label>
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-cream border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-body font-semibold text-sm appearance-none cursor-pointer focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow"
                  >
                    <option value="all">{t('filters.allCategories', 'Toutes les catégories')}</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <ChevronDown className="w-5 h-5 text-black" />
                  </div>
                </div>
              </div>

              {/* Sort Order */}
              <div>
                <label className="block font-display font-bold text-sm text-black mb-2">
                  {t('filters.sortBy', 'TRIER PAR DATE')}
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSortOrder('newest')}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 border-3 border-black font-display font-bold text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all ${
                      sortOrder === 'newest'
                        ? 'bg-vinted text-white'
                        : 'bg-cream text-black hover:bg-mint'
                    }`}
                  >
                    <SortDesc className="w-4 h-4" />
                    {t('filters.newest', 'RÉCENT')}
                  </button>
                  <button
                    onClick={() => setSortOrder('oldest')}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 border-3 border-black font-display font-bold text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all ${
                      sortOrder === 'oldest'
                        ? 'bg-vinted text-white'
                        : 'bg-cream text-black hover:bg-mint'
                    }`}
                  >
                    <SortAsc className="w-4 h-4" />
                    {t('filters.oldest', 'ANCIEN')}
                  </button>
                </div>
              </div>
            </div>

            {/* Active Filters & Clear */}
            {hasActiveFilters && (
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <span className="font-display font-bold text-sm text-gray-600">
                  {t('filters.activeFilters', 'Filtres actifs :')}
                </span>

                {searchQuery && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-mint border-2 border-black font-body font-semibold text-xs">
                    <Search className="w-3 h-3" />
                    "{searchQuery}"
                    <button onClick={() => setSearchQuery('')} className="ml-1 hover:text-vinted">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}

                {selectedCategory !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-pink-pastel border-2 border-black font-body font-semibold text-xs">
                    <Tag className="w-3 h-3" />
                    {selectedCategory}
                    <button onClick={() => setSelectedCategory('all')} className="ml-1 hover:text-vinted">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}

                {sortOrder !== 'newest' && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-cream border-2 border-black font-body font-semibold text-xs">
                    <Calendar className="w-3 h-3" />
                    {t('filters.oldestFirst', 'Plus ancien')}
                    <button onClick={() => setSortOrder('newest')} className="ml-1 hover:text-vinted">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}

                <button
                  onClick={clearFilters}
                  className="px-4 py-1 bg-black text-white border-2 border-black font-display font-bold text-xs hover:bg-gray-800 transition-colors"
                >
                  {t('filters.clearAll', 'TOUT EFFACER')}
                </button>
              </div>
            )}
          </div>

          {/* Results count */}
          <div className="mt-4 pt-4 border-t-2 border-black">
            <p className="font-body font-semibold text-sm text-gray-600">
              {filteredArticles.length === 1
                ? t('filters.resultsSingular', '1 article trouvé')
                : t('filters.results', '{{count}} articles trouvés', { count: filteredArticles.length })
              }
            </p>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-6xl mx-auto px-6 py-8 lg:py-12">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-block p-6 bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-16 h-16 mx-auto mb-4 bg-cream border-3 border-black flex items-center justify-center">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="font-display font-bold text-xl text-black mb-2">
                {t('filters.noResults', 'AUCUN ARTICLE TROUVÉ')}
              </h3>
              <p className="font-body text-gray-600 mb-4">
                {t('filters.noResultsDescription', 'Essayez de modifier vos critères de recherche')}
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-2 bg-vinted text-white border-3 border-black font-display font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                {t('filters.resetFilters', 'RÉINITIALISER')}
              </button>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Link
                key={article.id}
                to={getArticleUrlBySlugAndLanguage(article.slug, currentLanguage)}
                className="group bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                {/* Image */}
                <div className="relative aspect-[2/1] overflow-hidden border-b-4 border-black">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    width={600}
                    height={300}
                    loading="lazy"
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
                      <span>{article.readTime} {t('metadata.readTime')}</span>
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
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-mint border-4 border-black p-8 lg:p-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-space-grotesk font-bold mb-4">
            {t('indexPage.ctaTitle')}
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            {t('indexPage.ctaDescription')}
          </p>
          <Link
            to="/"
            className="inline-block bg-vinted text-white px-8 py-4 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all font-space-grotesk font-bold text-lg"
          >
            {t('buttons.generatePhotos')}
          </Link>
        </div>
      </div>
    </div>
  );
}
