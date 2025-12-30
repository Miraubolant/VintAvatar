/**
 * Liste des articles du blog VintDress
 *
 * Ce fichier contient les métadonnées de tous les articles disponibles.
 * Les articles complets sont dans src/pages/articles/
 */

export interface Article {
  id: string;
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  date: string;
  author: string;
  tags: string[];
  readingTime: string;
  readTime: string;
  category: string;
  image: string;
  featured?: boolean;
}

export const articles: Article[] = [
  {
    id: 'photo-porte-vinted',
    slug: 'photo-porte-vinted',
    title: 'Photos Portées Vinted : Le Guide Complet 2025',
    description: 'Découvrez comment créer des photos portées professionnelles pour Vinted et augmenter vos ventes de 300%.',
    excerpt: 'Découvrez comment créer des photos portées professionnelles pour Vinted et augmenter vos ventes de 300%.',
    publishedAt: '2025-01-15',
    date: '15 janv. 2025',
    author: 'VintDress',
    tags: ['Vinted', 'Photos', 'IA'],
    readingTime: '8 min',
    readTime: '8 min',
    category: 'Guide',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=400&fit=crop'
  },
  {
    id: 'mannequin-ia-vinted',
    slug: 'mannequin-ia-vinted',
    title: 'Mannequin IA pour Vinted : Comment ça Marche?',
    description: 'Tout savoir sur les mannequins virtuels IA et comment ils révolutionnent la vente sur Vinted.',
    excerpt: 'Tout savoir sur les mannequins virtuels IA et comment ils révolutionnent la vente sur Vinted.',
    publishedAt: '2025-01-12',
    date: '12 janv. 2025',
    author: 'VintDress',
    tags: ['IA', 'Mannequin', 'Technologie'],
    readingTime: '6 min',
    readTime: '6 min',
    category: 'Technologie',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=400&fit=crop'
  },
  {
    id: 'vinted-look-gratuit-alternative-pro',
    slug: 'vinted-look-gratuit-alternative-pro',
    title: 'Vinted Look Gratuit vs Alternative Pro',
    description: 'Comparatif complet entre les solutions gratuites et payantes pour créer vos photos Vinted.',
    excerpt: 'Comparatif complet entre les solutions gratuites et payantes pour créer vos photos Vinted.',
    publishedAt: '2025-01-10',
    date: '10 janv. 2025',
    author: 'VintDress',
    tags: ['Comparatif', 'Vinted Look', 'Prix'],
    readingTime: '7 min',
    readTime: '7 min',
    category: 'Comparatif',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=400&fit=crop'
  },
  {
    id: 'ia-photo-vinted-gratuit-vs-payant',
    slug: 'ia-photo-vinted-gratuit-vs-payant',
    title: 'IA Photo Vinted : Gratuit vs Payant',
    description: 'Analyse des différentes solutions IA pour générer vos photos Vinted : laquelle choisir?',
    excerpt: 'Analyse des différentes solutions IA pour générer vos photos Vinted : laquelle choisir?',
    publishedAt: '2025-01-08',
    date: '8 janv. 2025',
    author: 'VintDress',
    tags: ['IA', 'Comparatif', 'Prix'],
    readingTime: '9 min',
    readTime: '9 min',
    category: 'Comparatif',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop'
  },
  {
    id: 'algorithme-vinted-visibilite',
    slug: 'algorithme-vinted-visibilite',
    title: 'Algorithme Vinted : Maximisez Votre Visibilité',
    description: 'Comprendre et maîtriser l\'algorithme Vinted pour booster vos ventes en 2025.',
    excerpt: 'Comprendre et maîtriser l\'algorithme Vinted pour booster vos ventes en 2025.',
    publishedAt: '2025-01-05',
    date: '5 janv. 2025',
    author: 'VintDress',
    tags: ['Algorithme', 'SEO', 'Vinted'],
    readingTime: '10 min',
    readTime: '10 min',
    category: 'Stratégie',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
  },
  {
    id: 'guide-complet-photos-vinted-2025',
    slug: 'guide-complet-photos-vinted-2025',
    title: 'Guide Complet Photos Vinted 2025',
    description: 'Le guide ultime pour réussir vos photos Vinted et vendre plus rapidement.',
    excerpt: 'Le guide ultime pour réussir vos photos Vinted et vendre plus rapidement.',
    publishedAt: '2025-01-03',
    date: '3 janv. 2025',
    author: 'VintDress',
    tags: ['Guide', 'Photos', 'Best Practices'],
    readingTime: '12 min',
    readTime: '12 min',
    category: 'Guide',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop'
  },
  {
    id: '5-astuces-pour-vendre-plus-vite-sur-vinted',
    slug: '5-astuces-pour-vendre-plus-vite-sur-vinted',
    title: '5 Astuces pour Vendre Plus Vite sur Vinted',
    description: 'Découvrez les 5 techniques éprouvées pour accélérer vos ventes sur Vinted.',
    excerpt: 'Découvrez les 5 techniques éprouvées pour accélérer vos ventes sur Vinted.',
    publishedAt: '2025-01-01',
    date: '1 janv. 2025',
    author: 'VintDress',
    tags: ['Astuces', 'Ventes', 'Conseils'],
    readingTime: '5 min',
    readTime: '5 min',
    category: 'Conseils',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=400&fit=crop'
  },
  {
    id: 'strategie-vente-vinted-2025',
    slug: 'strategie-vente-vinted-2025',
    title: 'Stratégie de Vente Vinted 2025',
    description: 'La stratégie complète pour réussir sur Vinted en 2025 : de A à Z.',
    excerpt: 'La stratégie complète pour réussir sur Vinted en 2025 : de A à Z.',
    publishedAt: '2024-12-28',
    date: '28 déc. 2024',
    author: 'VintDress',
    tags: ['Stratégie', 'Business', 'Vinted'],
    readingTime: '11 min',
    readTime: '11 min',
    category: 'Stratégie',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop'
  },
  {
    id: 'comment-prendre-bonnes-photos-vinted',
    slug: 'comment-prendre-bonnes-photos-vinted',
    title: 'Comment Prendre de Bonnes Photos Vinted',
    description: 'Techniques et conseils pour réaliser des photos Vinted qui vendent.',
    excerpt: 'Techniques et conseils pour réaliser des photos Vinted qui vendent.',
    publishedAt: '2024-12-25',
    date: '25 déc. 2024',
    author: 'VintDress',
    tags: ['Photos', 'Tutoriel', 'Techniques'],
    readingTime: '8 min',
    readTime: '8 min',
    category: 'Guide',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop'
  },
  {
    id: 'vintdress-vs-alternatives-comparatif-2025',
    slug: 'vintdress-vs-alternatives-comparatif-2025',
    title: 'VintDress vs Alternatives : Comparatif 2025',
    description: 'Comparaison détaillée de VintDress avec les autres outils du marché.',
    excerpt: 'Comparaison détaillée de VintDress avec les autres outils du marché.',
    publishedAt: '2024-12-22',
    date: '22 déc. 2024',
    author: 'VintDress',
    tags: ['Comparatif', 'VintDress', 'Alternatives'],
    readingTime: '9 min',
    readTime: '9 min',
    category: 'Comparatif',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop'
  },
  {
    id: 'tendances-mode-2025',
    slug: 'tendances-mode-2025',
    title: 'Tendances Mode 2025',
    description: 'Les tendances mode incontournables de 2025 pour vos ventes Vinted.',
    excerpt: 'Les tendances mode incontournables de 2025 pour vos ventes Vinted.',
    publishedAt: '2024-12-20',
    date: '20 déc. 2024',
    author: 'VintDress',
    tags: ['Mode', 'Tendances', '2025'],
    readingTime: '7 min',
    readTime: '7 min',
    category: 'Tendance',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=400&fit=crop'
  },
  {
    id: 'vendre-vintage-vinted-guide',
    slug: 'vendre-vintage-vinted-guide',
    title: 'Vendre du Vintage sur Vinted : Le Guide',
    description: 'Comment identifier, photographier et vendre des pièces vintage sur Vinted.',
    excerpt: 'Comment identifier, photographier et vendre des pièces vintage sur Vinted.',
    publishedAt: '2024-12-18',
    date: '18 déc. 2024',
    author: 'VintDress',
    tags: ['Vintage', 'Guide', 'Niche'],
    readingTime: '10 min',
    readTime: '10 min',
    category: 'Guide',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop'
  },
  {
    id: 'identite-visuelle-vinted',
    slug: 'identite-visuelle-vinted',
    title: 'Identité Visuelle sur Vinted',
    description: 'Créez une identité visuelle cohérente pour vous démarquer sur Vinted.',
    excerpt: 'Créez une identité visuelle cohérente pour vous démarquer sur Vinted.',
    publishedAt: '2024-12-15',
    date: '15 déc. 2024',
    author: 'VintDress',
    tags: ['Branding', 'Design', 'Visibilité'],
    readingTime: '6 min',
    readTime: '6 min',
    category: 'Stratégie',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=400&fit=crop'
  },
  {
    id: 'erreurs-ventes-vinted',
    slug: 'erreurs-ventes-vinted',
    title: 'Erreurs à Éviter sur Vinted',
    description: 'Les erreurs les plus communes qui empêchent vos ventes et comment les éviter.',
    excerpt: 'Les erreurs les plus communes qui empêchent vos ventes et comment les éviter.',
    publishedAt: '2024-12-12',
    date: '12 déc. 2024',
    author: 'VintDress',
    tags: ['Erreurs', 'Conseils', 'Best Practices'],
    readingTime: '8 min',
    readTime: '8 min',
    category: 'Conseils',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop'
  },
  {
    id: 'success-story-marie-2025',
    slug: 'success-story-marie-2025',
    title: 'Success Story : Marie et ses 1000€/mois',
    description: 'Comment Marie est passée de 0 à 1000€/mois sur Vinted grâce à VintDress.',
    excerpt: 'Comment Marie est passée de 0 à 1000€/mois sur Vinted grâce à VintDress.',
    publishedAt: '2024-12-10',
    date: '10 déc. 2024',
    author: 'VintDress',
    tags: ['Success Story', 'Témoignage', 'Inspiration'],
    readingTime: '7 min',
    readTime: '7 min',
    category: 'Success Story',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=400&fit=crop'
  },
  {
    id: 'ia-au-service-de-la-mode-notre-revolution',
    slug: 'ia-au-service-de-la-mode-notre-revolution',
    title: 'L\'IA au Service de la Mode',
    description: 'Comment l\'intelligence artificielle révolutionne l\'industrie de la mode et du e-commerce.',
    excerpt: 'Comment l\'intelligence artificielle révolutionne l\'industrie de la mode et du e-commerce.',
    publishedAt: '2024-12-08',
    date: '8 déc. 2024',
    author: 'VintDress',
    tags: ['IA', 'Innovation', 'Mode'],
    readingTime: '9 min',
    readTime: '9 min',
    category: 'Technologie',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop'
  },
  {
    id: 'temoignage-300-pourcent-vues-une-semaine',
    slug: 'temoignage-300-pourcent-vues-une-semaine',
    title: '+300% de Vues en Une Semaine',
    description: 'Témoignage : Comment augmenter drastiquement la visibilité de vos annonces Vinted.',
    excerpt: 'Témoignage : Comment augmenter drastiquement la visibilité de vos annonces Vinted.',
    publishedAt: '2024-12-05',
    date: '5 déc. 2024',
    author: 'VintDress',
    tags: ['Témoignage', 'Résultats', 'Croissance'],
    readingTime: '6 min',
    readTime: '6 min',
    category: 'Success Story',
    image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=800&h=400&fit=crop'
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
