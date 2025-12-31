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
  {
    id: 'vintdress-vs-alternatives-comparatif-2025',
    fr: '/articles/vintdress-vs-alternatives-comparatif-2025',
    en: '/en/articles/vintdress-vs-alternatives-comparison-2025',
    es: '/es/articles/vintdress-vs-alternativas-comparativa-2025',
    it: '/it/articles/vintdress-vs-alternative-confronto-2025',
  },
  {
    id: 'tendances-mode-2025',
    fr: '/articles/tendances-mode-2025',
    en: '/en/articles/fashion-trends-2025',
    es: '/es/articles/tendencias-moda-2025',
    it: '/it/articles/tendenze-moda-2025',
  },
  {
    id: 'vendre-vintage-vinted-guide',
    fr: '/articles/vendre-vintage-vinted-guide',
    en: '/en/articles/sell-vintage-vinted-guide',
    es: '/es/articles/vender-vintage-vinted-guia',
    it: '/it/articles/vendere-vintage-vinted-guida',
  },
  {
    id: 'identite-visuelle-vinted',
    fr: '/articles/identite-visuelle-vinted',
    en: '/en/articles/visual-identity-vinted',
    es: '/es/articles/identidad-visual-vinted',
    it: '/it/articles/identita-visiva-vinted',
  },
  {
    id: 'erreurs-ventes-vinted',
    fr: '/articles/erreurs-ventes-vinted',
    en: '/en/articles/sales-mistakes-vinted',
    es: '/es/articles/errores-ventas-vinted',
    it: '/it/articles/errori-vendite-vinted',
  },
  {
    id: 'success-story-marie-2025',
    fr: '/articles/success-story-marie-2025',
    en: '/en/articles/success-story-marie-2025',
    es: '/es/articles/historia-exito-marie-2025',
    it: '/it/articles/storia-successo-marie-2025',
  },
  {
    id: 'ia-au-service-de-la-mode-notre-revolution',
    fr: '/articles/ia-au-service-de-la-mode-notre-revolution',
    en: '/en/articles/ai-fashion-revolution',
    es: '/es/articles/ia-servicio-moda-revolucion',
    it: '/it/articles/ia-servizio-moda-rivoluzione',
  },
  {
    id: 'temoignage-300-pourcent-vues-une-semaine',
    fr: '/articles/temoignage-300-pourcent-vues-une-semaine',
    en: '/en/articles/testimonial-300-percent-views-one-week',
    es: '/es/articles/testimonio-300-porciento-vistas-una-semana',
    it: '/it/articles/testimonianza-300-percento-visualizzazioni-una-settimana',
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
