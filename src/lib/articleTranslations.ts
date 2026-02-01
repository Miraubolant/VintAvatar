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
    id: 'comment-faire-photos-vinted',
    fr: '/articles/comment-faire-photos-vinted',
    en: '/en/articles/how-to-take-vinted-photos',
    es: '/es/articles/como-hacer-fotos-vinted',
    it: '/it/articles/come-fare-foto-vinted',
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
  {
    id: 'paiement-vinted-guide',
    fr: '/articles/paiement-vinted-guide',
    en: '/en/articles/vinted-payment-guide',
    es: '/es/articles/pago-vinted-guia',
    it: '/it/articles/pagamento-vinted-guida',
  },
  {
    id: 'comment-vendre-sur-vinted',
    fr: '/articles/comment-vendre-sur-vinted',
    en: '/en/articles/how-to-sell-on-vinted',
    es: '/es/articles/como-vender-en-vinted',
    it: '/it/articles/come-vendere-su-vinted',
  },
  {
    id: 'expedition-vinted-guide',
    fr: '/articles/expedition-vinted-guide',
    en: '/en/articles/vinted-shipping-guide',
    es: '/es/articles/envio-vinted-guia',
    it: '/it/articles/spedizione-vinted-guida',
  },
  {
    id: 'vinted-comment-ca-marche',
    fr: '/articles/vinted-comment-ca-marche',
    en: '/en/articles/how-does-vinted-work',
    es: '/es/articles/como-funciona-vinted',
    it: '/it/articles/come-funziona-vinted',
  },
  {
    id: 'problemes-vinted-solutions',
    fr: '/articles/problemes-vinted-solutions',
    en: '/en/articles/vinted-problems-solutions',
    es: '/es/articles/problemas-vinted-soluciones',
    it: '/it/articles/problemi-vinted-soluzioni',
  },
  {
    id: 'comment-acheter-sur-vinted',
    fr: '/articles/comment-acheter-sur-vinted',
    en: '/en/articles/how-to-buy-on-vinted',
    es: '/es/articles/como-comprar-en-vinted',
    it: '/it/articles/come-comprare-su-vinted',
  },
  {
    id: 'optimiser-ventes-vinted',
    fr: '/articles/optimiser-ventes-vinted',
    en: '/en/articles/optimize-vinted-sales',
    es: '/es/articles/optimizar-ventas-vinted',
    it: '/it/articles/ottimizzare-vendite-vinted',
  },
  {
    id: 'friperie-en-ligne',
    fr: '/articles/friperie-en-ligne',
    en: '/en/articles/online-thrift-store',
    es: '/es/articles/tienda-vintage-online',
    it: '/it/articles/negozio-vintage-online',
  },
  {
    id: 'jean-levis-vintage',
    fr: '/articles/jean-levis-vintage',
    en: '/en/articles/vintage-levis-jeans',
    es: '/es/articles/vaquero-levis-vintage',
    it: '/it/articles/jeans-levis-vintage',
  },
  {
    id: 'vetements-vintage-annees-90',
    fr: '/articles/vetements-vintage-annees-90',
    en: '/en/articles/90s-vintage-clothing',
    es: '/es/articles/ropa-vintage-anos-90',
    it: '/it/articles/abbigliamento-vintage-anni-90',
  },
  {
    id: 'robe-vintage-femme',
    fr: '/articles/robe-vintage-femme',
    en: '/en/articles/vintage-womens-dress',
    es: '/es/articles/vestido-vintage-mujer',
    it: '/it/articles/abito-vintage-donna',
  },
  {
    id: 'veste-cuir-vintage',
    fr: '/articles/veste-cuir-vintage',
    en: '/en/articles/vintage-leather-jacket',
    es: '/es/articles/chaqueta-cuero-vintage',
    it: '/it/articles/giacca-pelle-vintage',
  },
  {
    id: 'se-demarquer-vinted-mannequin-ia',
    fr: '/articles/se-demarquer-vinted-mannequin-ia',
    en: '/en/articles/stand-out-vinted-ai-mannequin',
    es: '/es/articles/destacar-vinted-maniqui-ia',
    it: '/it/articles/distinguersti-vinted-manichino-ia',
  },
  {
    id: 'description-vinted-optimisee-ia',
    fr: '/articles/description-vinted-optimisee-ia',
    en: '/en/articles/vinted-description-optimized-ai',
    es: '/es/articles/descripcion-vinted-optimizada-ia',
    it: '/it/articles/descrizione-vinted-ottimizzata-ia',
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
