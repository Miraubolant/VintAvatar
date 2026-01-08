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
    publishedAt: '2026-01-06',
    date: '6 janv. 2026',
    author: 'VintDress',
    tags: ['Vinted', 'Photos', 'IA'],
    readingTime: '8 min',
    readTime: '8 min',
    category: 'Guide',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&h=800&fit=crop'
  },
  {
    id: 'comment-faire-photos-vinted',
    slug: 'comment-faire-photos-vinted',
    title: 'Comment Faire de Belles Photos Vinted en 2026',
    description: 'Guide complet pour prendre de superbes photos pour Vinted. Techniques, équipement, et astuces pour des photos qui vendent.',
    excerpt: 'Guide complet pour prendre de superbes photos pour Vinted. Techniques, équipement, et astuces pour des photos qui vendent.',
    publishedAt: '2026-01-07',
    date: '7 janv. 2026',
    author: 'VintDress',
    tags: ['Photos', 'Conseils', 'Mannequin IA'],
    readingTime: '10 min',
    readTime: '10 min',
    category: 'Conseils',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&h=800&fit=crop'
  },
  {
    id: 'mannequin-ia-vinted',
    slug: 'mannequin-ia-vinted',
    title: 'Mannequin IA pour Vinted : Comment ça Marche?',
    description: 'Tout savoir sur les mannequins virtuels IA et comment ils révolutionnent la vente sur Vinted.',
    excerpt: 'Tout savoir sur les mannequins virtuels IA et comment ils révolutionnent la vente sur Vinted.',
    publishedAt: '2026-01-04',
    date: '4 janv. 2026',
    author: 'VintDress',
    tags: ['IA', 'Mannequin', 'Technologie'],
    readingTime: '6 min',
    readTime: '6 min',
    category: 'Technologie',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=800&fit=crop'
  },
  {
    id: 'vinted-look-gratuit-alternative-pro',
    slug: 'vinted-look-gratuit-alternative-pro',
    title: 'Vinted Look Gratuit vs Alternative Pro',
    description: 'Comparatif complet entre les solutions gratuites et payantes pour créer vos photos Vinted.',
    excerpt: 'Comparatif complet entre les solutions gratuites et payantes pour créer vos photos Vinted.',
    publishedAt: '2026-01-02',
    date: '2 janv. 2026',
    author: 'VintDress',
    tags: ['Comparatif', 'Vinted Look', 'Prix'],
    readingTime: '7 min',
    readTime: '7 min',
    category: 'Comparatif',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=1200&h=800&fit=crop'
  },
  {
    id: 'ia-photo-vinted-gratuit-vs-payant',
    slug: 'ia-photo-vinted-gratuit-vs-payant',
    title: 'IA Photo Vinted : Gratuit vs Payant',
    description: 'Analyse des différentes solutions IA pour générer vos photos Vinted : laquelle choisir?',
    excerpt: 'Analyse des différentes solutions IA pour générer vos photos Vinted : laquelle choisir?',
    publishedAt: '2026-01-08',
    date: '8 janv. 2026',
    author: 'VintDress',
    tags: ['IA', 'Comparatif', 'Prix'],
    readingTime: '9 min',
    readTime: '9 min',
    category: 'Comparatif',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop'
  },
  {
    id: 'algorithme-vinted-visibilite',
    slug: 'algorithme-vinted-visibilite',
    title: 'Algorithme Vinted : Maximisez Votre Visibilité',
    description: 'Comprendre et maîtriser l\'algorithme Vinted pour booster vos ventes en 2025.',
    excerpt: 'Comprendre et maîtriser l\'algorithme Vinted pour booster vos ventes en 2025.',
    publishedAt: '2026-01-05',
    date: '5 janv. 2026',
    author: 'VintDress',
    tags: ['Algorithme', 'SEO', 'Vinted'],
    readingTime: '10 min',
    readTime: '10 min',
    category: 'Stratégie',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop'
  },
  {
    id: 'guide-complet-photos-vinted-2025',
    slug: 'guide-complet-photos-vinted-2025',
    title: 'Guide Complet Photos Vinted 2025',
    description: 'Le guide ultime pour réussir vos photos Vinted et vendre plus rapidement.',
    excerpt: 'Le guide ultime pour réussir vos photos Vinted et vendre plus rapidement.',
    publishedAt: '2026-01-03',
    date: '3 janv. 2026',
    author: 'VintDress',
    tags: ['Guide', 'Photos', 'Best Practices'],
    readingTime: '12 min',
    readTime: '12 min',
    category: 'Guide',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop'
  },
  {
    id: '5-astuces-pour-vendre-plus-vite-sur-vinted',
    slug: '5-astuces-pour-vendre-plus-vite-sur-vinted',
    title: '5 Astuces pour Vendre Plus Vite sur Vinted',
    description: 'Découvrez les 5 techniques éprouvées pour accélérer vos ventes sur Vinted.',
    excerpt: 'Découvrez les 5 techniques éprouvées pour accélérer vos ventes sur Vinted.',
    publishedAt: '2026-01-01',
    date: '1 janv. 2026',
    author: 'VintDress',
    tags: ['Astuces', 'Ventes', 'Conseils'],
    readingTime: '5 min',
    readTime: '5 min',
    category: 'Conseils',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&h=800&fit=crop'
  },
  {
    id: 'strategie-vente-vinted-2025',
    slug: 'strategie-vente-vinted-2025',
    title: 'Stratégie de Vente Vinted 2025',
    description: 'La stratégie complète pour réussir sur Vinted en 2025 : de A à Z.',
    excerpt: 'La stratégie complète pour réussir sur Vinted en 2025 : de A à Z.',
    publishedAt: '2025-12-28',
    date: '28 déc. 2025',
    author: 'VintDress',
    tags: ['Stratégie', 'Business', 'Vinted'],
    readingTime: '11 min',
    readTime: '11 min',
    category: 'Stratégie',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop'
  },
  {
    id: 'comment-prendre-bonnes-photos-vinted',
    slug: 'comment-prendre-bonnes-photos-vinted',
    title: 'Comment Prendre de Bonnes Photos Vinted',
    description: 'Techniques et conseils pour réaliser des photos Vinted qui vendent.',
    excerpt: 'Techniques et conseils pour réaliser des photos Vinted qui vendent.',
    publishedAt: '2025-12-25',
    date: '25 déc. 2025',
    author: 'VintDress',
    tags: ['Photos', 'Tutoriel', 'Techniques'],
    readingTime: '8 min',
    readTime: '8 min',
    category: 'Guide',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop'
  },
  {
    id: 'vintdress-vs-alternatives-comparatif-2025',
    slug: 'vintdress-vs-alternatives-comparatif-2025',
    title: 'VintDress vs Alternatives : Comparatif 2025',
    description: 'Comparaison détaillée de VintDress avec les autres outils du marché.',
    excerpt: 'Comparaison détaillée de VintDress avec les autres outils du marché.',
    publishedAt: '2025-12-22',
    date: '22 déc. 2025',
    author: 'VintDress',
    tags: ['Comparatif', 'VintDress', 'Alternatives'],
    readingTime: '9 min',
    readTime: '9 min',
    category: 'Comparatif',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop'
  },
  {
    id: 'tendances-mode-2025',
    slug: 'tendances-mode-2025',
    title: 'Tendances Mode 2025',
    description: 'Les tendances mode incontournables de 2025 pour vos ventes Vinted.',
    excerpt: 'Les tendances mode incontournables de 2025 pour vos ventes Vinted.',
    publishedAt: '2025-12-20',
    date: '20 déc. 2025',
    author: 'VintDress',
    tags: ['Mode', 'Tendances', '2025'],
    readingTime: '7 min',
    readTime: '7 min',
    category: 'Tendance',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=800&fit=crop'
  },
  {
    id: 'vendre-vintage-vinted-guide',
    slug: 'vendre-vintage-vinted-guide',
    title: 'Vendre du Vintage sur Vinted : Le Guide',
    description: 'Comment identifier, photographier et vendre des pièces vintage sur Vinted.',
    excerpt: 'Comment identifier, photographier et vendre des pièces vintage sur Vinted.',
    publishedAt: '2025-12-18',
    date: '18 déc. 2025',
    author: 'VintDress',
    tags: ['Vintage', 'Guide', 'Niche'],
    readingTime: '10 min',
    readTime: '10 min',
    category: 'Guide',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop'
  },
  {
    id: 'identite-visuelle-vinted',
    slug: 'identite-visuelle-vinted',
    title: 'Identité Visuelle sur Vinted',
    description: 'Créez une identité visuelle cohérente pour vous démarquer sur Vinted.',
    excerpt: 'Créez une identité visuelle cohérente pour vous démarquer sur Vinted.',
    publishedAt: '2025-12-15',
    date: '15 déc. 2025',
    author: 'VintDress',
    tags: ['Branding', 'Design', 'Visibilité'],
    readingTime: '6 min',
    readTime: '6 min',
    category: 'Stratégie',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=800&fit=crop'
  },
  {
    id: 'erreurs-ventes-vinted',
    slug: 'erreurs-ventes-vinted',
    title: 'Erreurs à Éviter sur Vinted',
    description: 'Les erreurs les plus communes qui empêchent vos ventes et comment les éviter.',
    excerpt: 'Les erreurs les plus communes qui empêchent vos ventes et comment les éviter.',
    publishedAt: '2025-12-12',
    date: '12 déc. 2025',
    author: 'VintDress',
    tags: ['Erreurs', 'Conseils', 'Best Practices'],
    readingTime: '8 min',
    readTime: '8 min',
    category: 'Conseils',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop'
  },
  {
    id: 'success-story-marie-2025',
    slug: 'success-story-marie-2025',
    title: 'Success Story : Marie et ses 1000€/mois',
    description: 'Comment Marie est passée de 0 à 1000€/mois sur Vinted grâce à VintDress.',
    excerpt: 'Comment Marie est passée de 0 à 1000€/mois sur Vinted grâce à VintDress.',
    publishedAt: '2025-12-10',
    date: '10 déc. 2025',
    author: 'VintDress',
    tags: ['Success Story', 'Témoignage', 'Inspiration'],
    readingTime: '7 min',
    readTime: '7 min',
    category: 'Success Story',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&h=800&fit=crop'
  },
  {
    id: 'ia-au-service-de-la-mode-notre-revolution',
    slug: 'ia-au-service-de-la-mode-notre-revolution',
    title: 'L\'IA au Service de la Mode',
    description: 'Comment l\'intelligence artificielle révolutionne l\'industrie de la mode et du e-commerce.',
    excerpt: 'Comment l\'intelligence artificielle révolutionne l\'industrie de la mode et du e-commerce.',
    publishedAt: '2025-12-08',
    date: '8 déc. 2025',
    author: 'VintDress',
    tags: ['IA', 'Innovation', 'Mode'],
    readingTime: '9 min',
    readTime: '9 min',
    category: 'Technologie',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=800&fit=crop'
  },
  {
    id: 'temoignage-300-pourcent-vues-une-semaine',
    slug: 'temoignage-300-pourcent-vues-une-semaine',
    title: '+300% de Vues en Une Semaine',
    description: 'Témoignage : Comment augmenter drastiquement la visibilité de vos annonces Vinted.',
    excerpt: 'Témoignage : Comment augmenter drastiquement la visibilité de vos annonces Vinted.',
    publishedAt: '2025-12-05',
    date: '5 déc. 2025',
    author: 'VintDress',
    tags: ['Témoignage', 'Résultats', 'Croissance'],
    readingTime: '6 min',
    readTime: '6 min',
    category: 'Success Story',
    image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=1200&h=800&fit=crop'
  },
  {
    id: 'paiement-vinted-guide',
    slug: 'paiement-vinted-guide',
    title: 'Paiement Vinted : Guide Complet 2026',
    description: 'Tout savoir sur le paiement Vinted : recevoir son argent, délais, frais, et solutions aux problèmes courants.',
    excerpt: 'Guide complet sur les paiements Vinted : comment recevoir votre argent, délais de transfert, frais et solutions aux problèmes.',
    publishedAt: '2026-01-07',
    date: '7 janv. 2026',
    author: 'VintDress',
    tags: ['Paiement', 'Vinted', 'Guide', 'Argent'],
    readingTime: '12 min',
    readTime: '12 min',
    category: 'Guide',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=800&fit=crop'
  },
  {
    id: 'comment-vendre-sur-vinted',
    slug: 'comment-vendre-sur-vinted',
    title: 'Comment Vendre sur Vinted : Guide Complet 2026',
    description: 'Guide complet pour vendre sur Vinted en 2026. Créer une annonce, fixer le prix, photos, lots et astuces pour vendre plus vite.',
    excerpt: 'Découvrez toutes les étapes pour réussir vos ventes sur Vinted : annonces, prix, photos et stratégies pour vendre rapidement.',
    publishedAt: '2026-01-07',
    date: '7 janv. 2026',
    author: 'VintDress',
    tags: ['Vendre', 'Vinted', 'Guide', 'Annonces'],
    readingTime: '12 min',
    readTime: '12 min',
    category: 'Guide',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop'
  },
  {
    id: 'expedition-vinted-guide',
    slug: 'expedition-vinted-guide',
    title: 'Expédition Vinted : Guide Complet Envoi de Colis 2026',
    description: 'Guide complet expédition Vinted : options de livraison, frais de port, emballage et solutions aux problèmes de colis.',
    excerpt: 'Tout savoir sur l\'expédition Vinted : Mondial Relay, Colissimo, frais de port, emballage et dépôt de colis.',
    publishedAt: '2026-01-07',
    date: '7 janv. 2026',
    author: 'VintDress',
    tags: ['Expédition', 'Vinted', 'Guide', 'Livraison'],
    readingTime: '8 min',
    readTime: '8 min',
    category: 'Guide',
    image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1200&h=800&fit=crop'
  },
  {
    id: 'vinted-comment-ca-marche',
    slug: 'vinted-comment-ca-marche',
    title: 'Vinted : Comment ça Marche ? Guide Débutant 2026',
    description: 'Découvrez comment fonctionne Vinted en 2026. Guide complet pour débutants : créer un compte, acheter, vendre, paiement et sécurité.',
    excerpt: 'Tout comprendre sur Vinted : création de compte, interface, vendre, acheter et protections pour les débutants.',
    publishedAt: '2026-01-07',
    date: '7 janv. 2026',
    author: 'VintDress',
    tags: ['Vinted', 'Débutant', 'Guide', 'Application'],
    readingTime: '10 min',
    readTime: '10 min',
    category: 'Guide',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop'
  },
  {
    id: 'problemes-vinted-solutions',
    slug: 'problemes-vinted-solutions',
    title: 'Problèmes Vinted : Solutions aux Questions Fréquentes 2026',
    description: 'Résous tous tes problèmes Vinted : connexion, compte bloqué, articles supprimés, paiement, litiges. Guide complet des solutions.',
    excerpt: 'Solutions à tous les problèmes Vinted : connexion, compte bloqué, litiges, paiement et contact du support.',
    publishedAt: '2026-01-07',
    date: '7 janv. 2026',
    author: 'VintDress',
    tags: ['Problèmes', 'Vinted', 'FAQ', 'Support'],
    readingTime: '11 min',
    readTime: '11 min',
    category: 'FAQ',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=800&fit=crop'
  },
  {
    id: 'comment-acheter-sur-vinted',
    slug: 'comment-acheter-sur-vinted',
    title: 'Comment Acheter sur Vinted : Guide Acheteur Complet 2026',
    description: 'Guide complet pour acheter sur Vinted : trouver les bonnes affaires, faire une offre, paiement sécurisé et protection acheteur.',
    excerpt: 'Tout savoir pour acheter sur Vinted : recherche, négociation, paiement et protection acheteur.',
    publishedAt: '2026-01-07',
    date: '7 janv. 2026',
    author: 'VintDress',
    tags: ['Acheter', 'Vinted', 'Guide', 'Acheteur'],
    readingTime: '9 min',
    readTime: '9 min',
    category: 'Guide',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=800&fit=crop'
  },
  {
    id: 'optimiser-ventes-vinted',
    slug: 'optimiser-ventes-vinted',
    title: 'Booster ses Ventes Vinted : Astuces Pro 2026',
    description: 'Découvre les astuces pro pour booster tes ventes sur Vinted : articles qui se vendent le mieux, stratégies de prix, photos qui convertissent et algorithme.',
    excerpt: 'Les meilleures astuces pour optimiser tes ventes sur Vinted : pricing, photos, algorithme et fidélisation.',
    publishedAt: '2026-01-07',
    date: '7 janv. 2026',
    author: 'VintDress',
    tags: ['Optimiser', 'Vinted', 'Conseils', 'Ventes'],
    readingTime: '10 min',
    readTime: '10 min',
    category: 'Conseils',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop'
  }
];

// Traductions des métadonnées d'articles (pour les 9 premiers articles traduits)
const articleTranslations: Record<string, Record<string, Partial<Article>>> = {
  'comment-faire-photos-vinted': {
    en: {
      title: 'How to Take Great Vinted Photos in 2026',
      excerpt: 'Complete guide to taking stunning photos for Vinted. Techniques, equipment, and tips for photos that sell.',
      description: 'Complete guide to taking stunning photos for Vinted. Techniques, equipment, and tips for photos that sell.',
      date: 'Jan 7, 2026',
      category: 'Tips',
    },
    es: {
      title: 'Cómo Hacer Buenas Fotos Vinted en 2026',
      excerpt: 'Guía completa para tomar fotos increíbles para Vinted. Técnicas, equipo y consejos para fotos que venden.',
      description: 'Guía completa para tomar fotos increíbles para Vinted. Técnicas, equipo y consejos para fotos que venden.',
      date: '7 ene. 2026',
      category: 'Consejos',
    },
    it: {
      title: 'Come Fare Belle Foto Vinted nel 2026',
      excerpt: 'Guida completa per scattare foto fantastiche per Vinted. Tecniche, attrezzatura e consigli per foto che vendono.',
      description: 'Guida completa per scattare foto fantastiche per Vinted. Tecniche, attrezzatura e consigli per foto che vendono.',
      date: '7 gen. 2026',
      category: 'Consigli',
    },
  },
  'photo-porte-vinted': {
    en: {
      title: 'Worn Photos on Vinted: The Complete 2025 Guide',
      excerpt: 'Discover how to create professional worn photos for Vinted and increase your sales by 300%.',
      description: 'Discover how to create professional worn photos for Vinted and increase your sales by 300%.',
      date: 'Jan 6, 2026',
      category: 'Guide',
    },
    es: {
      title: 'Fotos Puestas en Vinted: La Guía Completa 2025',
      excerpt: 'Descubre cómo crear fotos puestas profesionales para Vinted y aumentar tus ventas en un 300%.',
      description: 'Descubre cómo crear fotos puestas profesionales para Vinted y aumentar tus ventas en un 300%.',
      date: '6 ene. 2026',
      category: 'Guía',
    },
    it: {
      title: 'Foto Indossate su Vinted: La Guida Completa 2025',
      excerpt: 'Scopri come creare foto indossate professionali per Vinted e aumentare le tue vendite del 300%.',
      description: 'Scopri come creare foto indossate professionali per Vinted e aumentare le tue vendite del 300%.',
      date: '6 gen. 2026',
      category: 'Guida',
    },
  },
  'mannequin-ia-vinted': {
    en: {
      title: 'AI Mannequin for Vinted: How Does It Work?',
      excerpt: 'Everything you need to know about AI virtual mannequins and how they revolutionize selling on Vinted.',
      description: 'Everything you need to know about AI virtual mannequins and how they revolutionize selling on Vinted.',
      date: 'Jan 4, 2026',
      category: 'Technology',
    },
    es: {
      title: 'Maniquí IA para Vinted: ¿Cómo Funciona?',
      excerpt: 'Todo lo que necesitas saber sobre los maniquíes virtuales con IA y cómo revolucionan las ventas en Vinted.',
      description: 'Todo lo que necesitas saber sobre los maniquíes virtuales con IA y cómo revolucionan las ventas en Vinted.',
      date: '4 ene. 2026',
      category: 'Tecnología',
    },
    it: {
      title: 'Manichino IA per Vinted: Come Funziona?',
      excerpt: 'Tutto quello che devi sapere sui manichini virtuali IA e come rivoluzionano la vendita su Vinted.',
      description: 'Tutto quello che devi sapere sui manichini virtuali IA e come rivoluzionano la vendita su Vinted.',
      date: '4 gen. 2026',
      category: 'Tecnologia',
    },
  },
  'vinted-look-gratuit-alternative-pro': {
    en: {
      title: 'Vinted Look Free vs Pro Alternative',
      excerpt: 'Complete comparison between free and paid solutions to create your Vinted photos.',
      description: 'Complete comparison between free and paid solutions to create your Vinted photos.',
      date: 'Jan 2, 2026',
      category: 'Comparison',
    },
    es: {
      title: 'Vinted Look Gratis vs Alternativa Pro',
      excerpt: 'Comparativa completa entre soluciones gratuitas y de pago para crear tus fotos de Vinted.',
      description: 'Comparativa completa entre soluciones gratuitas y de pago para crear tus fotos de Vinted.',
      date: '2 ene. 2026',
      category: 'Comparativa',
    },
    it: {
      title: 'Vinted Look Gratis vs Alternativa Pro',
      excerpt: 'Confronto completo tra soluzioni gratuite e a pagamento per creare le tue foto Vinted.',
      description: 'Confronto completo tra soluzioni gratuite e a pagamento per creare le tue foto Vinted.',
      date: '2 gen. 2026',
      category: 'Confronto',
    },
  },
  'ia-photo-vinted-gratuit-vs-payant': {
    en: {
      title: 'AI Photo Vinted: Free vs Paid',
      excerpt: 'Analysis of different AI solutions to generate your Vinted photos: which one to choose?',
      description: 'Analysis of different AI solutions to generate your Vinted photos: which one to choose?',
      date: 'Jan 8, 2026',
      category: 'Comparison',
    },
    es: {
      title: 'IA Foto Vinted: Gratis vs Pago',
      excerpt: 'Análisis de las diferentes soluciones de IA para generar tus fotos de Vinted: ¿cuál elegir?',
      description: 'Análisis de las diferentes soluciones de IA para generar tus fotos de Vinted: ¿cuál elegir?',
      date: '8 ene. 2026',
      category: 'Comparativa',
    },
    it: {
      title: 'IA Foto Vinted: Gratis vs Pagamento',
      excerpt: 'Analisi delle diverse soluzioni IA per generare le tue foto Vinted: quale scegliere?',
      description: 'Analisi delle diverse soluzioni IA per generare le tue foto Vinted: quale scegliere?',
      date: '8 gen. 2026',
      category: 'Confronto',
    },
  },
  'algorithme-vinted-visibilite': {
    en: {
      title: 'Vinted Algorithm: Maximize Your Visibility',
      excerpt: 'Understand and master the Vinted algorithm to boost your sales in 2025.',
      description: 'Understand and master the Vinted algorithm to boost your sales in 2025.',
      date: 'Jan 5, 2026',
      category: 'Strategy',
    },
    es: {
      title: 'Algoritmo Vinted: Maximiza Tu Visibilidad',
      excerpt: 'Comprende y domina el algoritmo de Vinted para impulsar tus ventas en 2025.',
      description: 'Comprende y domina el algoritmo de Vinted para impulsar tus ventas en 2025.',
      date: '5 ene. 2026',
      category: 'Estrategia',
    },
    it: {
      title: 'Algoritmo Vinted: Massimizza la Tua Visibilità',
      excerpt: 'Comprendi e padroneggia l\'algoritmo di Vinted per aumentare le tue vendite nel 2025.',
      description: 'Comprendi e padroneggia l\'algoritmo di Vinted per aumentare le tue vendite nel 2025.',
      date: '5 gen. 2026',
      category: 'Strategia',
    },
  },
  'guide-complet-photos-vinted-2025': {
    en: {
      title: 'Complete Guide Vinted Photos 2025',
      excerpt: 'The ultimate guide to successful Vinted photos and selling faster.',
      description: 'The ultimate guide to successful Vinted photos and selling faster.',
      date: 'Jan 3, 2026',
      category: 'Guide',
    },
    es: {
      title: 'Guía Completa Fotos Vinted 2025',
      excerpt: 'La guía definitiva para lograr fotos de Vinted exitosas y vender más rápido.',
      description: 'La guía definitiva para lograr fotos de Vinted exitosas y vender más rápido.',
      date: '3 ene. 2026',
      category: 'Guía',
    },
    it: {
      title: 'Guida Completa Foto Vinted 2025',
      excerpt: 'La guida definitiva per foto Vinted di successo e vendere più velocemente.',
      description: 'La guida definitiva per foto Vinted di successo e vendere più velocemente.',
      date: '3 gen. 2026',
      category: 'Guida',
    },
  },
  '5-astuces-pour-vendre-plus-vite-sur-vinted': {
    en: {
      title: '5 Tips to Sell Faster on Vinted',
      excerpt: 'Discover the 5 proven techniques to accelerate your sales on Vinted.',
      description: 'Discover the 5 proven techniques to accelerate your sales on Vinted.',
      date: 'Jan 1, 2026',
      category: 'Tips',
    },
    es: {
      title: '5 Consejos para Vender Más Rápido en Vinted',
      excerpt: 'Descubre las 5 técnicas probadas para acelerar tus ventas en Vinted.',
      description: 'Descubre las 5 técnicas probadas para acelerar tus ventas en Vinted.',
      date: '1 ene. 2026',
      category: 'Consejos',
    },
    it: {
      title: '5 Consigli per Vendere Più Velocemente su Vinted',
      excerpt: 'Scopri le 5 tecniche comprovate per accelerare le tue vendite su Vinted.',
      description: 'Scopri le 5 tecniche comprovate per accelerare le tue vendite su Vinted.',
      date: '1 gen. 2026',
      category: 'Consigli',
    },
  },
  'strategie-vente-vinted-2025': {
    en: {
      title: 'Vinted Sales Strategy 2025',
      excerpt: 'The complete strategy to succeed on Vinted in 2025: from A to Z.',
      description: 'The complete strategy to succeed on Vinted in 2025: from A to Z.',
      date: 'Dec 28, 2025',
      category: 'Strategy',
    },
    es: {
      title: 'Estrategia de Venta Vinted 2025',
      excerpt: 'La estrategia completa para triunfar en Vinted en 2025: de la A a la Z.',
      description: 'La estrategia completa para triunfar en Vinted en 2025: de la A a la Z.',
      date: '28 dic. 2025',
      category: 'Estrategia',
    },
    it: {
      title: 'Strategia di Vendita Vinted 2025',
      excerpt: 'La strategia completa per avere successo su Vinted nel 2025: dalla A alla Z.',
      description: 'La strategia completa per avere successo su Vinted nel 2025: dalla A alla Z.',
      date: '28 dic. 2025',
      category: 'Strategia',
    },
  },
  'comment-prendre-bonnes-photos-vinted': {
    en: {
      title: 'How to Take Good Vinted Photos',
      excerpt: 'Techniques and tips for taking Vinted photos that sell.',
      description: 'Techniques and tips for taking Vinted photos that sell.',
      date: 'Dec 25, 2025',
      category: 'Guide',
    },
    es: {
      title: 'Cómo Tomar Buenas Fotos para Vinted',
      excerpt: 'Técnicas y consejos para realizar fotos de Vinted que venden.',
      description: 'Técnicas y consejos para realizar fotos de Vinted que venden.',
      date: '25 dic. 2025',
      category: 'Guía',
    },
    it: {
      title: 'Come Fare Belle Foto per Vinted',
      excerpt: 'Tecniche e consigli per realizzare foto Vinted che vendono.',
      description: 'Tecniche e consigli per realizzare foto Vinted che vendono.',
      date: '25 dic. 2025',
      category: 'Guida',
    },
  },
  'vintdress-vs-alternatives-comparatif-2025': {
    en: {
      title: 'VintDress vs Alternatives: Comparison 2025',
      excerpt: 'Detailed comparison of VintDress with other tools on the market.',
      description: 'Detailed comparison of VintDress with other tools on the market.',
      date: 'Dec 22, 2025',
      category: 'Comparison',
    },
    es: {
      title: 'VintDress vs Alternativas: Comparativa 2025',
      excerpt: 'Comparación detallada de VintDress con otras herramientas del mercado.',
      description: 'Comparación detallada de VintDress con otras herramientas del mercado.',
      date: '22 dic. 2025',
      category: 'Comparativa',
    },
    it: {
      title: 'VintDress vs Alternative: Confronto 2025',
      excerpt: 'Confronto dettagliato di VintDress con altri strumenti del mercato.',
      description: 'Confronto dettagliato di VintDress con altri strumenti del mercato.',
      date: '22 dic. 2025',
      category: 'Confronto',
    },
  },
  'tendances-mode-2025': {
    en: {
      title: 'Fashion Trends 2025',
      excerpt: 'The must-have fashion trends of 2025 for your Vinted sales.',
      description: 'The must-have fashion trends of 2025 for your Vinted sales.',
      date: 'Dec 20, 2025',
      category: 'Trends',
    },
    es: {
      title: 'Tendencias Moda 2025',
      excerpt: 'Las tendencias de moda imprescindibles de 2025 para tus ventas en Vinted.',
      description: 'Las tendencias de moda imprescindibles de 2025 para tus ventas en Vinted.',
      date: '20 dic. 2025',
      category: 'Tendencias',
    },
    it: {
      title: 'Tendenze Moda 2025',
      excerpt: 'Le tendenze moda imperdibili del 2025 per le tue vendite su Vinted.',
      description: 'Le tendenze moda imperdibili del 2025 per le tue vendite su Vinted.',
      date: '20 dic. 2025',
      category: 'Tendenze',
    },
  },
  'vendre-vintage-vinted-guide': {
    en: {
      title: 'Selling Vintage on Vinted: The Guide',
      excerpt: 'How to identify, photograph and sell vintage pieces on Vinted.',
      description: 'How to identify, photograph and sell vintage pieces on Vinted.',
      date: 'Dec 18, 2025',
      category: 'Guide',
    },
    es: {
      title: 'Vender Vintage en Vinted: La Guía',
      excerpt: 'Cómo identificar, fotografiar y vender piezas vintage en Vinted.',
      description: 'Cómo identificar, fotografiar y vender piezas vintage en Vinted.',
      date: '18 dic. 2025',
      category: 'Guía',
    },
    it: {
      title: 'Vendere Vintage su Vinted: La Guida',
      excerpt: 'Come identificare, fotografare e vendere pezzi vintage su Vinted.',
      description: 'Come identificare, fotografare e vendere pezzi vintage su Vinted.',
      date: '18 dic. 2025',
      category: 'Guida',
    },
  },
  'identite-visuelle-vinted': {
    en: {
      title: 'Visual Identity on Vinted',
      excerpt: 'Create a coherent visual identity to stand out on Vinted.',
      description: 'Create a coherent visual identity to stand out on Vinted.',
      date: 'Dec 15, 2025',
      category: 'Strategy',
    },
    es: {
      title: 'Identidad Visual en Vinted',
      excerpt: 'Crea una identidad visual coherente para destacar en Vinted.',
      description: 'Crea una identidad visual coherente para destacar en Vinted.',
      date: '15 dic. 2025',
      category: 'Estrategia',
    },
    it: {
      title: 'Identità Visiva su Vinted',
      excerpt: 'Crea un\'identità visiva coerente per distinguerti su Vinted.',
      description: 'Crea un\'identità visiva coerente per distinguerti su Vinted.',
      date: '15 dic. 2025',
      category: 'Strategia',
    },
  },
  'erreurs-ventes-vinted': {
    en: {
      title: 'Mistakes to Avoid on Vinted',
      excerpt: 'The most common mistakes that prevent your sales and how to avoid them.',
      description: 'The most common mistakes that prevent your sales and how to avoid them.',
      date: 'Dec 12, 2025',
      category: 'Tips',
    },
    es: {
      title: 'Errores a Evitar en Vinted',
      excerpt: 'Los errores más comunes que impiden tus ventas y cómo evitarlos.',
      description: 'Los errores más comunes que impiden tus ventas y cómo evitarlos.',
      date: '12 dic. 2025',
      category: 'Consejos',
    },
    it: {
      title: 'Errori da Evitare su Vinted',
      excerpt: 'Gli errori più comuni che impediscono le tue vendite e come evitarli.',
      description: 'Gli errori più comuni che impediscono le tue vendite e come evitarli.',
      date: '12 dic. 2025',
      category: 'Consigli',
    },
  },
  'success-story-marie-2025': {
    en: {
      title: 'Success Story: Marie and Her 1000€/month',
      excerpt: 'How Marie went from 0 to 1000€/month on Vinted thanks to VintDress.',
      description: 'How Marie went from 0 to 1000€/month on Vinted thanks to VintDress.',
      date: 'Dec 10, 2025',
      category: 'Success Story',
    },
    es: {
      title: 'Historia de Éxito: Marie y sus 1000€/mes',
      excerpt: 'Cómo Marie pasó de 0 a 1000€/mes en Vinted gracias a VintDress.',
      description: 'Cómo Marie pasó de 0 a 1000€/mes en Vinted gracias a VintDress.',
      date: '10 dic. 2025',
      category: 'Caso de Éxito',
    },
    it: {
      title: 'Storia di Successo: Marie e i suoi 1000€/mese',
      excerpt: 'Come Marie è passata da 0 a 1000€/mese su Vinted grazie a VintDress.',
      description: 'Come Marie è passata da 0 a 1000€/mese su Vinted grazie a VintDress.',
      date: '10 dic. 2025',
      category: 'Storia di Successo',
    },
  },
  'ia-au-service-de-la-mode-notre-revolution': {
    en: {
      title: 'AI at the Service of Fashion',
      excerpt: 'How artificial intelligence is revolutionizing the fashion and e-commerce industry.',
      description: 'How artificial intelligence is revolutionizing the fashion and e-commerce industry.',
      date: 'Dec 8, 2025',
      category: 'Technology',
    },
    es: {
      title: 'IA al Servicio de la Moda',
      excerpt: 'Cómo la inteligencia artificial está revolucionando la industria de la moda y el e-commerce.',
      description: 'Cómo la inteligencia artificial está revolucionando la industria de la moda y el e-commerce.',
      date: '8 dic. 2025',
      category: 'Tecnología',
    },
    it: {
      title: 'IA al Servizio della Moda',
      excerpt: 'Come l\'intelligenza artificiale sta rivoluzionando l\'industria della moda e dell\'e-commerce.',
      description: 'Come l\'intelligenza artificiale sta rivoluzionando l\'industria della moda e dell\'e-commerce.',
      date: '8 dic. 2025',
      category: 'Tecnologia',
    },
  },
  'temoignage-300-pourcent-vues-une-semaine': {
    en: {
      title: '+300% Views in One Week',
      excerpt: 'Testimonial: How to drastically increase the visibility of your Vinted listings.',
      description: 'Testimonial: How to drastically increase the visibility of your Vinted listings.',
      date: 'Dec 5, 2025',
      category: 'Success Story',
    },
    es: {
      title: '+300% Vistas en Una Semana',
      excerpt: 'Testimonio: Cómo aumentar drásticamente la visibilidad de tus anuncios en Vinted.',
      description: 'Testimonio: Cómo aumentar drásticamente la visibilidad de tus anuncios en Vinted.',
      date: '5 dic. 2025',
      category: 'Caso de Éxito',
    },
    it: {
      title: '+300% Visualizzazioni in Una Settimana',
      excerpt: 'Testimonianza: Come aumentare drasticamente la visibilità dei tuoi annunci su Vinted.',
      description: 'Testimonianza: Come aumentare drasticamente la visibilità dei tuoi annunci su Vinted.',
      date: '5 dic. 2025',
      category: 'Storia di Successo',
    },
  },
  'paiement-vinted-guide': {
    en: {
      title: 'Vinted Payment: Complete Guide 2026',
      excerpt: 'Complete guide on Vinted payments: how to receive your money, transfer times, fees and solutions to common issues.',
      description: 'Everything about Vinted payments: receiving money, delays, fees, and solutions to common problems.',
      date: 'Jan 7, 2026',
      category: 'Guide',
    },
    es: {
      title: 'Pago Vinted: Guía Completa 2026',
      excerpt: 'Guía completa sobre pagos en Vinted: cómo recibir tu dinero, tiempos de transferencia, comisiones y soluciones a problemas comunes.',
      description: 'Todo sobre los pagos en Vinted: recibir dinero, plazos, comisiones y soluciones a problemas frecuentes.',
      date: '7 ene. 2026',
      category: 'Guía',
    },
    it: {
      title: 'Pagamento Vinted: Guida Completa 2026',
      excerpt: 'Guida completa sui pagamenti Vinted: come ricevere i tuoi soldi, tempi di trasferimento, commissioni e soluzioni ai problemi comuni.',
      description: 'Tutto sui pagamenti Vinted: ricevere soldi, tempi, commissioni e soluzioni ai problemi frequenti.',
      date: '7 gen. 2026',
      category: 'Guida',
    },
  },
  'comment-vendre-sur-vinted': {
    en: {
      title: 'How to Sell on Vinted: Complete Guide 2026',
      excerpt: 'Discover all the steps to succeed on Vinted: listings, pricing, photos, and strategies to sell quickly.',
      description: 'Complete guide to selling on Vinted in 2026. Create a listing, set prices, photos, bundles and tips to sell faster.',
      date: 'Jan 7, 2026',
      category: 'Guide',
    },
    es: {
      title: 'Cómo Vender en Vinted: Guía Completa 2026',
      excerpt: 'Descubre todos los pasos para triunfar en Vinted: anuncios, precios, fotos y estrategias para vender rápido.',
      description: 'Guía completa para vender en Vinted en 2026. Crear anuncio, fijar precio, fotos, lotes y consejos para vender más rápido.',
      date: '7 ene. 2026',
      category: 'Guía',
    },
    it: {
      title: 'Come Vendere su Vinted: Guida Completa 2026',
      excerpt: 'Scopri tutti i passaggi per avere successo su Vinted: annunci, prezzi, foto e strategie per vendere velocemente.',
      description: 'Guida completa per vendere su Vinted nel 2026. Creare annuncio, fissare prezzo, foto, lotti e consigli per vendere più velocemente.',
      date: '7 gen. 2026',
      category: 'Guida',
    },
  },
  'expedition-vinted-guide': {
    en: {
      title: 'Vinted Shipping: Complete Parcel Delivery Guide 2026',
      excerpt: 'Everything about Vinted shipping: Mondial Relay, Colissimo, shipping costs, packaging and parcel drop-off.',
      description: 'Complete Vinted shipping guide: delivery options, shipping costs, packaging and solutions to parcel problems.',
      date: 'Jan 7, 2026',
      category: 'Guide',
    },
    es: {
      title: 'Envío Vinted: Guía Completa de Paquetes 2026',
      excerpt: 'Todo sobre el envío en Vinted: Mondial Relay, Correos, gastos de envío, embalaje y entrega de paquetes.',
      description: 'Guía completa de envío Vinted: opciones de entrega, gastos de envío, embalaje y soluciones a problemas de paquetes.',
      date: '7 ene. 2026',
      category: 'Guía',
    },
    it: {
      title: 'Spedizione Vinted: Guida Completa Invio Pacchi 2026',
      excerpt: 'Tutto sulla spedizione Vinted: Mondial Relay, Poste Italiane, costi di spedizione, imballaggio e consegna pacchi.',
      description: 'Guida completa spedizione Vinted: opzioni di consegna, costi di spedizione, imballaggio e soluzioni ai problemi dei pacchi.',
      date: '7 gen. 2026',
      category: 'Guida',
    },
  },
  'vinted-comment-ca-marche': {
    en: {
      title: 'Vinted: How Does It Work? Beginner Guide 2026',
      excerpt: 'Understand everything about Vinted: account creation, interface, selling, buying and protections for beginners.',
      description: 'Discover how Vinted works in 2026. Complete guide for beginners: create an account, buy, sell, payment and security.',
      date: 'Jan 7, 2026',
      category: 'Guide',
    },
    es: {
      title: 'Vinted: ¿Cómo Funciona? Guía Principiantes 2026',
      excerpt: 'Entiende todo sobre Vinted: creación de cuenta, interfaz, vender, comprar y protecciones para principiantes.',
      description: 'Descubre cómo funciona Vinted en 2026. Guía completa para principiantes: crear cuenta, comprar, vender, pago y seguridad.',
      date: '7 ene. 2026',
      category: 'Guía',
    },
    it: {
      title: 'Vinted: Come Funziona? Guida Principianti 2026',
      excerpt: 'Capire tutto su Vinted: creazione account, interfaccia, vendere, comprare e protezioni per principianti.',
      description: 'Scopri come funziona Vinted nel 2026. Guida completa per principianti: creare account, comprare, vendere, pagamento e sicurezza.',
      date: '7 gen. 2026',
      category: 'Guida',
    },
  },
  'problemes-vinted-solutions': {
    en: {
      title: 'Vinted Problems: Solutions to Frequently Asked Questions 2026',
      excerpt: 'Solutions to all Vinted problems: login, blocked account, disputes, payment and contacting support.',
      description: 'Solve all your Vinted problems: login, blocked account, deleted items, payment, disputes. Complete solutions guide.',
      date: 'Jan 7, 2026',
      category: 'FAQ',
    },
    es: {
      title: 'Problemas Vinted: Soluciones a Preguntas Frecuentes 2026',
      excerpt: 'Soluciones a todos los problemas de Vinted: conexión, cuenta bloqueada, disputas, pago y contacto con soporte.',
      description: 'Resuelve todos tus problemas en Vinted: conexión, cuenta bloqueada, artículos eliminados, pago, disputas. Guía completa de soluciones.',
      date: '7 ene. 2026',
      category: 'FAQ',
    },
    it: {
      title: 'Problemi Vinted: Soluzioni alle Domande Frequenti 2026',
      excerpt: 'Soluzioni a tutti i problemi Vinted: accesso, account bloccato, controversie, pagamento e contatto supporto.',
      description: 'Risolvi tutti i tuoi problemi su Vinted: accesso, account bloccato, articoli eliminati, pagamento, controversie. Guida completa alle soluzioni.',
      date: '7 gen. 2026',
      category: 'FAQ',
    },
  },
  'comment-acheter-sur-vinted': {
    en: {
      title: 'How to Buy on Vinted: Complete Buyer Guide 2026',
      excerpt: 'Everything you need to know to buy on Vinted: search, negotiation, payment and buyer protection.',
      description: 'Complete guide to buying on Vinted: find great deals, make offers, secure payment and buyer protection.',
      date: 'Jan 7, 2026',
      category: 'Guide',
    },
    es: {
      title: 'Cómo Comprar en Vinted: Guía Completa Comprador 2026',
      excerpt: 'Todo lo que necesitas saber para comprar en Vinted: búsqueda, negociación, pago y protección al comprador.',
      description: 'Guía completa para comprar en Vinted: encontrar ofertas, hacer ofertas, pago seguro y protección al comprador.',
      date: '7 ene. 2026',
      category: 'Guía',
    },
    it: {
      title: 'Come Comprare su Vinted: Guida Completa Acquirente 2026',
      excerpt: 'Tutto quello che devi sapere per comprare su Vinted: ricerca, negoziazione, pagamento e protezione acquirente.',
      description: 'Guida completa per comprare su Vinted: trovare affari, fare offerte, pagamento sicuro e protezione acquirente.',
      date: '7 gen. 2026',
      category: 'Guida',
    },
  },
  'optimiser-ventes-vinted': {
    en: {
      title: 'Boost Your Vinted Sales: Pro Tips 2026',
      excerpt: 'The best tips to optimize your Vinted sales: pricing, photos, algorithm and customer loyalty.',
      description: 'Discover pro tips to boost your Vinted sales: best-selling items, pricing strategies, photos that convert and algorithm secrets.',
      date: 'Jan 7, 2026',
      category: 'Tips',
    },
    es: {
      title: 'Impulsar tus Ventas Vinted: Consejos Pro 2026',
      excerpt: 'Los mejores consejos para optimizar tus ventas en Vinted: precios, fotos, algoritmo y fidelización.',
      description: 'Descubre los consejos pro para impulsar tus ventas en Vinted: artículos más vendidos, estrategias de precios, fotos que convierten y secretos del algoritmo.',
      date: '7 ene. 2026',
      category: 'Consejos',
    },
    it: {
      title: 'Aumentare le Vendite Vinted: Consigli Pro 2026',
      excerpt: 'I migliori consigli per ottimizzare le tue vendite su Vinted: prezzi, foto, algoritmo e fidelizzazione.',
      description: 'Scopri i consigli pro per aumentare le tue vendite su Vinted: articoli più venduti, strategie di prezzo, foto che convertono e segreti dell\'algoritmo.',
      date: '7 gen. 2026',
      category: 'Consigli',
    },
  },
};

/**
 * Retourne la liste des articles (version française par défaut)
 */
export function getArticlesList(): Article[] {
  return articles;
}

/**
 * Retourne la liste des articles traduits selon la langue
 */
export function getArticlesListByLanguage(language: 'fr' | 'en' | 'es' | 'it'): Article[] {
  if (language === 'fr') {
    return articles;
  }

  return articles.map(article => {
    const translation = articleTranslations[article.id]?.[language];
    if (translation) {
      return {
        ...article,
        ...translation,
      };
    }
    return article;
  });
}

/**
 * Retourne un article par son slug
 */
export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug);
}
