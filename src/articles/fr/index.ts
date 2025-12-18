import { article as astuces } from '../5-astuces-pour-vendre-plus-vite-sur-vinted';
import { article as ia } from '../ia-au-service-de-la-mode-notre-revolution';
import { article as temoignage } from '../temoignage-300-pourcent-vues-une-semaine';
import { article as guidePhotos } from '../guide-complet-photos-vinted-2025';
import { article as strategie } from '../strategie-vente-vinted-2025';
import { article as tendances } from '../tendances-mode-2025';
import { article as successStory } from '../success-story-marie-2025';
import { article as vintage } from '../vendre-vintage-vinted-guide';
import { article as identite } from '../identite-visuelle-vinted';
import { article as erreurs } from '../erreurs-ventes-vinted';
import { article as mannequinIA } from '../mannequin-ia-vinted';
import { article as iaPhotoGratuit } from '../ia-photo-vinted-gratuit-vs-payant';
import { article as algorithmeVinted } from '../algorithme-vinted-visibilite';

export const articles = {
  [astuces.slug]: astuces,
  [ia.slug]: ia,
  [temoignage.slug]: temoignage,
  [guidePhotos.slug]: guidePhotos,
  [strategie.slug]: strategie,
  [tendances.slug]: tendances,
  [successStory.slug]: successStory,
  [vintage.slug]: vintage,
  [identite.slug]: identite,
  [erreurs.slug]: erreurs,
  [mannequinIA.slug]: mannequinIA,
  [iaPhotoGratuit.slug]: iaPhotoGratuit,
  [algorithmeVinted.slug]: algorithmeVinted
};

// Articles sorted by date (most recent first)
export const articlesList = [mannequinIA, iaPhotoGratuit, algorithmeVinted, guidePhotos, strategie, tendances, vintage, identite, erreurs, successStory, astuces, ia, temoignage];

export type Article = typeof astuces;