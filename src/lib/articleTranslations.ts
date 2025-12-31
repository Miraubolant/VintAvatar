// Mapping des articles traduits entre les différentes langues
// Chaque article a un ID unique et ses URLs dans chaque langue

export interface ArticleTranslation {
  id: string;
  fr: string;
  en: string;
  es: string;
  it: string;
}

export const articleTranslations: ArticleTranslation[] = [
  {
    id: 'photo-portee-vinted',
    fr: '/articles/photo-porte-vinted',
    en: '/en/articles/worn-photos-vinted',
    es: '/es/articles/fotos-puestas-vinted',
    it: '/it/articles/foto-indossate-vinted',
  },
  {
    id: 'mannequin-ia-vinted',
    fr: '/articles/mannequin-ia-vinted',
    en: '/en/articles/ai-mannequin-vinted',
    es: '/es/articles/maniqui-ia-vinted',
    it: '/it/articles/manichino-ia-vinted',
  },
  {
    id: 'vinted-look-gratuit-alternative-pro',
    fr: '/articles/vinted-look-gratuit-alternative-pro',
    en: '/en/articles/vinted-look-free-vs-pro-alternative',
    es: '/es/articles/vinted-look-gratis-alternativa-pro',
    it: '/it/articles/vinted-look-gratis-alternativa-pro',
  },
  {
    id: 'ia-photo-vinted-gratuit-vs-payant',
    fr: '/articles/ia-photo-vinted-gratuit-vs-payant',
    en: '/en/articles/ai-photo-vinted-free-vs-paid',
    es: '/es/articles/ia-foto-vinted-gratis-vs-pago',
    it: '/it/articles/ia-foto-vinted-gratis-vs-pagamento',
  },
  {
    id: 'algorithme-vinted-visibilite',
    fr: '/articles/algorithme-vinted-visibilite',
    en: '/en/articles/vinted-algorithm-visibility-2025',
    es: '/es/articles/algoritmo-vinted-visibilidad-2025',
    it: '/it/articles/algoritmo-vinted-visibilita-2025',
  },
  {
    id: 'guide-complet-photos-vinted-2025',
    fr: '/articles/guide-complet-photos-vinted-2025',
    en: '/en/articles/complete-guide-vinted-photos-2025',
    es: '/es/articles/guia-completa-fotos-vinted-2025',
    it: '/it/articles/guida-completa-foto-vinted-2025',
  },
  {
    id: '5-astuces-vendre-plus-vite',
    fr: '/articles/5-astuces-pour-vendre-plus-vite-sur-vinted',
    en: '/en/articles/5-tips-sell-faster-vinted',
    es: '/es/articles/5-consejos-vender-rapido-vinted',
    it: '/it/articles/5-consigli-vendere-velocemente-vinted',
  },
  {
    id: 'strategie-vente-vinted-2025',
    fr: '/articles/strategie-vente-vinted-2025',
    en: '/en/articles/vinted-sales-strategy-2025',
    es: '/es/articles/estrategia-venta-vinted-2025',
    it: '/it/articles/strategia-vendita-vinted-2025',
  },
  {
    id: 'comment-prendre-bonnes-photos-vinted',
    fr: '/articles/comment-prendre-bonnes-photos-vinted',
    en: '/en/articles/how-to-take-good-vinted-photos',
    es: '/es/articles/como-tomar-buenas-fotos-vinted',
    it: '/it/articles/come-fare-belle-foto-vinted',
  },
];

// Fonction pour trouver la traduction d'un article à partir de son URL actuelle
export function findArticleTranslation(currentPath: string): ArticleTranslation | undefined {
  return articleTranslations.find(article =>
    article.fr === currentPath ||
    article.en === currentPath ||
    article.es === currentPath ||
    article.it === currentPath
  );
}

// Fonction pour obtenir l'URL de l'article dans une langue spécifique
export function getArticleUrlForLanguage(currentPath: string, targetLanguage: 'fr' | 'en' | 'es' | 'it'): string | null {
  const article = findArticleTranslation(currentPath);
  if (!article) return null;
  return article[targetLanguage];
}

// Fonction pour détecter si on est sur une page article
export function isArticlePage(path: string): boolean {
  return path.includes('/articles/');
}

// Fonction pour obtenir l'URL d'un article par son slug français et la langue cible
export function getArticleUrlBySlugAndLanguage(frenchSlug: string, targetLanguage: 'fr' | 'en' | 'es' | 'it'): string {
  const frenchPath = `/articles/${frenchSlug}`;
  const article = articleTranslations.find(a => a.fr === frenchPath);

  if (!article) {
    // Si l'article n'a pas de traduction, retourner l'URL française
    return frenchPath;
  }

  return article[targetLanguage];
}
