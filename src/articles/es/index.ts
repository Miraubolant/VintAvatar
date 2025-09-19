import { article as guidePhotos } from './guide-complet-photos-vinted-2025';
import { article as astuces } from './5-astuces-pour-vendre-plus-vite-sur-vinted';
import { article as strategie } from './strategie-vente-vinted-2025';
import { article as ia } from './ia-au-service-de-la-mode-notre-revolution';
import { article as temoignage } from './temoignage-300-pourcent-vues-une-semaine';
import { article as successStory } from './success-story-marie-2025';
import { article as tendances } from './tendances-mode-2025';

export const articles = {
  [guidePhotos.slug]: guidePhotos,
  [astuces.slug]: astuces,
  [strategie.slug]: strategie,
  [ia.slug]: ia,
  [temoignage.slug]: temoignage,
  [successStory.slug]: successStory,
  [tendances.slug]: tendances
};

export const articlesList = [guidePhotos, strategie, tendances, successStory, astuces, ia, temoignage];

export type Article = typeof guidePhotos;