import i18n from '../lib/i18n';

// Import French articles (default)
import { article as astuces } from './5-astuces-pour-vendre-plus-vite-sur-vinted';
import { article as ia } from './ia-au-service-de-la-mode-notre-revolution';
import { article as temoignage } from './temoignage-300-pourcent-vues-une-semaine';
import { article as guidePhotos } from './guide-complet-photos-vinted-2025';
import { article as strategie } from './strategie-vente-vinted-2025';
import { article as tendances } from './tendances-mode-2025';
import { article as successStory } from './success-story-marie-2025';

// Import multilingual articles
import * as frArticles from './fr/index';
import * as enArticles from './en/index';
import * as esArticles from './es/index';
import * as itArticles from './it/index';

// French articles (default)
const frenchArticles = {
  [astuces.slug]: astuces,
  [ia.slug]: ia,
  [temoignage.slug]: temoignage,
  [guidePhotos.slug]: guidePhotos,
  [strategie.slug]: strategie,
  [tendances.slug]: tendances,
  [successStory.slug]: successStory
};

const frenchArticlesList = [guidePhotos, strategie, tendances, successStory, astuces, ia, temoignage];

// Get articles based on current language
export const getArticles = () => {
  const currentLang = i18n.language || 'fr';

  switch (currentLang) {
    case 'en':
      return enArticles.articles;
    case 'es':
      return esArticles.articles;
    case 'it':
      return itArticles.articles;
    default:
      return frenchArticles;
  }
};

export const getArticlesList = () => {
  const currentLang = i18n.language || 'fr';

  switch (currentLang) {
    case 'en':
      return enArticles.articlesList;
    case 'es':
      return esArticles.articlesList;
    case 'it':
      return itArticles.articlesList;
    default:
      return frenchArticlesList;
  }
};

// Legacy exports for compatibility
export const articles = frenchArticles;
export const articlesList = frenchArticlesList;

export type Article = typeof astuces;