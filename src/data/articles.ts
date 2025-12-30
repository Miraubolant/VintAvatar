/**
 * Liste des articles du blog VintDress
 *
 * Ce fichier contient les métadonnées de tous les articles disponibles.
 * Les articles complets sont dans src/pages/articles/
 */

export interface Article {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  author: string;
  tags: string[];
  readingTime: string;
  featured?: boolean;
}

export const articles: Article[] = [
  {
    slug: 'photo-porte-vinted',
    title: 'Photos Portées Vinted : Le Guide Complet 2025',
    description: 'Découvrez comment créer des photos portées professionnelles pour Vinted et augmenter vos ventes de 300%.',
    publishedAt: '2025-01-15',
    author: 'VintDress',
    tags: ['Vinted', 'Photos', 'IA'],
    readingTime: '8 min'
  },
  {
    slug: 'mannequin-ia-vinted',
    title: 'Mannequin IA pour Vinted : Comment ça Marche?',
    description: 'Tout savoir sur les mannequins virtuels IA et comment ils révolutionnent la vente sur Vinted.',
    publishedAt: '2025-01-12',
    author: 'VintDress',
    tags: ['IA', 'Mannequin', 'Technologie'],
    readingTime: '6 min'
  },
  {
    slug: 'vinted-look-gratuit-alternative-pro',
    title: 'Vinted Look Gratuit vs Alternative Pro',
    description: 'Comparatif complet entre les solutions gratuites et payantes pour créer vos photos Vinted.',
    publishedAt: '2025-01-10',
    author: 'VintDress',
    tags: ['Comparatif', 'Vinted Look', 'Prix'],
    readingTime: '7 min'
  },
  {
    slug: 'ia-photo-vinted-gratuit-vs-payant',
    title: 'IA Photo Vinted : Gratuit vs Payant',
    description: 'Analyse des différentes solutions IA pour générer vos photos Vinted : laquelle choisir?',
    publishedAt: '2025-01-08',
    author: 'VintDress',
    tags: ['IA', 'Comparatif', 'Prix'],
    readingTime: '9 min'
  },
  {
    slug: 'algorithme-vinted-visibilite',
    title: 'Algorithme Vinted : Maximisez Votre Visibilité',
    description: 'Comprendre et maîtriser l\'algorithme Vinted pour booster vos ventes en 2025.',
    publishedAt: '2025-01-05',
    author: 'VintDress',
    tags: ['Algorithme', 'SEO', 'Vinted'],
    readingTime: '10 min'
  },
  {
    slug: 'guide-complet-photos-vinted-2025',
    title: 'Guide Complet Photos Vinted 2025',
    description: 'Le guide ultime pour réussir vos photos Vinted et vendre plus rapidement.',
    publishedAt: '2025-01-03',
    author: 'VintDress',
    tags: ['Guide', 'Photos', 'Best Practices'],
    readingTime: '12 min'
  },
  {
    slug: '5-astuces-pour-vendre-plus-vite-sur-vinted',
    title: '5 Astuces pour Vendre Plus Vite sur Vinted',
    description: 'Découvrez les 5 techniques éprouvées pour accélérer vos ventes sur Vinted.',
    publishedAt: '2025-01-01',
    author: 'VintDress',
    tags: ['Astuces', 'Ventes', 'Conseils'],
    readingTime: '5 min'
  },
  {
    slug: 'strategie-vente-vinted-2025',
    title: 'Stratégie de Vente Vinted 2025',
    description: 'La stratégie complète pour réussir sur Vinted en 2025 : de A à Z.',
    publishedAt: '2024-12-28',
    author: 'VintDress',
    tags: ['Stratégie', 'Business', 'Vinted'],
    readingTime: '11 min'
  },
  {
    slug: 'comment-prendre-bonnes-photos-vinted',
    title: 'Comment Prendre de Bonnes Photos Vinted',
    description: 'Techniques et conseils pour réaliser des photos Vinted qui vendent.',
    publishedAt: '2024-12-25',
    author: 'VintDress',
    tags: ['Photos', 'Tutoriel', 'Techniques'],
    readingTime: '8 min'
  },
  {
    slug: 'vintdress-vs-alternatives-comparatif-2025',
    title: 'VintDress vs Alternatives : Comparatif 2025',
    description: 'Comparaison détaillée de VintDress avec les autres outils du marché.',
    publishedAt: '2024-12-22',
    author: 'VintDress',
    tags: ['Comparatif', 'VintDress', 'Alternatives'],
    readingTime: '9 min'
  },
  {
    slug: 'tendances-mode-2025',
    title: 'Tendances Mode 2025',
    description: 'Les tendances mode incontournables de 2025 pour vos ventes Vinted.',
    publishedAt: '2024-12-20',
    author: 'VintDress',
    tags: ['Mode', 'Tendances', '2025'],
    readingTime: '7 min'
  },
  {
    slug: 'vendre-vintage-vinted-guide',
    title: 'Vendre du Vintage sur Vinted : Le Guide',
    description: 'Comment identifier, photographier et vendre des pièces vintage sur Vinted.',
    publishedAt: '2024-12-18',
    author: 'VintDress',
    tags: ['Vintage', 'Guide', 'Niche'],
    readingTime: '10 min'
  },
  {
    slug: 'identite-visuelle-vinted',
    title: 'Identité Visuelle sur Vinted',
    description: 'Créez une identité visuelle cohérente pour vous démarquer sur Vinted.',
    publishedAt: '2024-12-15',
    author: 'VintDress',
    tags: ['Branding', 'Design', 'Visibilité'],
    readingTime: '6 min'
  },
  {
    slug: 'erreurs-ventes-vinted',
    title: 'Erreurs à Éviter sur Vinted',
    description: 'Les erreurs les plus communes qui empêchent vos ventes et comment les éviter.',
    publishedAt: '2024-12-12',
    author: 'VintDress',
    tags: ['Erreurs', 'Conseils', 'Best Practices'],
    readingTime: '8 min'
  },
  {
    slug: 'success-story-marie-2025',
    title: 'Success Story : Marie et ses 1000€/mois',
    description: 'Comment Marie est passée de 0 à 1000€/mois sur Vinted grâce à VintDress.',
    publishedAt: '2024-12-10',
    author: 'VintDress',
    tags: ['Success Story', 'Témoignage', 'Inspiration'],
    readingTime: '7 min'
  },
  {
    slug: 'ia-au-service-de-la-mode-notre-revolution',
    title: 'L\'IA au Service de la Mode',
    description: 'Comment l\'intelligence artificielle révolutionne l\'industrie de la mode et du e-commerce.',
    publishedAt: '2024-12-08',
    author: 'VintDress',
    tags: ['IA', 'Innovation', 'Mode'],
    readingTime: '9 min'
  },
  {
    slug: 'temoignage-300-pourcent-vues-une-semaine',
    title: '+300% de Vues en Une Semaine',
    description: 'Témoignage : Comment augmenter drastiquement la visibilité de vos annonces Vinted.',
    publishedAt: '2024-12-05',
    author: 'VintDress',
    tags: ['Témoignage', 'Résultats', 'Croissance'],
    readingTime: '6 min'
  }
];

/**
 * Retourne la liste des articles
 */
export function getArticlesList(): Article[] {
  return articles;
}

/**
 * Retourne un article par son slug
 */
export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug);
}
