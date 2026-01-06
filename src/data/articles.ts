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
    publishedAt: '2026-01-15',
    date: '15 janv. 2026',
    author: 'VintDress',
    tags: ['Vinted', 'Photos', 'IA'],
    readingTime: '8 min',
    readTime: '8 min',
    category: 'Guide',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&h=800&fit=crop'
  },
  {
    id: 'mannequin-ia-vinted',
    slug: 'mannequin-ia-vinted',
    title: 'Mannequin IA pour Vinted : Comment ça Marche?',
    description: 'Tout savoir sur les mannequins virtuels IA et comment ils révolutionnent la vente sur Vinted.',
    excerpt: 'Tout savoir sur les mannequins virtuels IA et comment ils révolutionnent la vente sur Vinted.',
    publishedAt: '2026-01-12',
    date: '12 janv. 2026',
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
    publishedAt: '2026-01-10',
    date: '10 janv. 2026',
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
  }
];

// Traductions des métadonnées d'articles (pour les 9 premiers articles traduits)
const articleTranslations: Record<string, Record<string, Partial<Article>>> = {
  'photo-porte-vinted': {
    en: {
      title: 'Worn Photos on Vinted: The Complete 2025 Guide',
      excerpt: 'Discover how to create professional worn photos for Vinted and increase your sales by 300%.',
      description: 'Discover how to create professional worn photos for Vinted and increase your sales by 300%.',
      date: 'Jan 15, 2026',
      category: 'Guide',
    },
    es: {
      title: 'Fotos Puestas en Vinted: La Guía Completa 2025',
      excerpt: 'Descubre cómo crear fotos puestas profesionales para Vinted y aumentar tus ventas en un 300%.',
      description: 'Descubre cómo crear fotos puestas profesionales para Vinted y aumentar tus ventas en un 300%.',
      date: '15 ene. 2026',
      category: 'Guía',
    },
    it: {
      title: 'Foto Indossate su Vinted: La Guida Completa 2025',
      excerpt: 'Scopri come creare foto indossate professionali per Vinted e aumentare le tue vendite del 300%.',
      description: 'Scopri come creare foto indossate professionali per Vinted e aumentare le tue vendite del 300%.',
      date: '15 gen. 2026',
      category: 'Guida',
    },
  },
  'mannequin-ia-vinted': {
    en: {
      title: 'AI Mannequin for Vinted: How Does It Work?',
      excerpt: 'Everything you need to know about AI virtual mannequins and how they revolutionize selling on Vinted.',
      description: 'Everything you need to know about AI virtual mannequins and how they revolutionize selling on Vinted.',
      date: 'Jan 12, 2026',
      category: 'Technology',
    },
    es: {
      title: 'Maniquí IA para Vinted: ¿Cómo Funciona?',
      excerpt: 'Todo lo que necesitas saber sobre los maniquíes virtuales con IA y cómo revolucionan las ventas en Vinted.',
      description: 'Todo lo que necesitas saber sobre los maniquíes virtuales con IA y cómo revolucionan las ventas en Vinted.',
      date: '12 ene. 2026',
      category: 'Tecnología',
    },
    it: {
      title: 'Manichino IA per Vinted: Come Funziona?',
      excerpt: 'Tutto quello che devi sapere sui manichini virtuali IA e come rivoluzionano la vendita su Vinted.',
      description: 'Tutto quello che devi sapere sui manichini virtuali IA e come rivoluzionano la vendita su Vinted.',
      date: '12 gen. 2026',
      category: 'Tecnologia',
    },
  },
  'vinted-look-gratuit-alternative-pro': {
    en: {
      title: 'Vinted Look Free vs Pro Alternative',
      excerpt: 'Complete comparison between free and paid solutions to create your Vinted photos.',
      description: 'Complete comparison between free and paid solutions to create your Vinted photos.',
      date: 'Jan 10, 2026',
      category: 'Comparison',
    },
    es: {
      title: 'Vinted Look Gratis vs Alternativa Pro',
      excerpt: 'Comparativa completa entre soluciones gratuitas y de pago para crear tus fotos de Vinted.',
      description: 'Comparativa completa entre soluciones gratuitas y de pago para crear tus fotos de Vinted.',
      date: '10 ene. 2026',
      category: 'Comparativa',
    },
    it: {
      title: 'Vinted Look Gratis vs Alternativa Pro',
      excerpt: 'Confronto completo tra soluzioni gratuite e a pagamento per creare le tue foto Vinted.',
      description: 'Confronto completo tra soluzioni gratuite e a pagamento per creare le tue foto Vinted.',
      date: '10 gen. 2026',
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
