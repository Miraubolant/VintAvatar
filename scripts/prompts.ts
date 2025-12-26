/**
 * Templates de prompts OpenAI pour la génération d'articles VintDress
 */

export const SYSTEM_PROMPT = `Tu es un expert en rédaction SEO spécialisé dans le e-commerce et la vente sur Vinted.
Tu écris pour VintDress, un SaaS qui permet de créer des photos professionnelles de vêtements avec un mannequin IA.

RÈGLES IMPORTANTES:
1. Ton style est direct, engageant, et orienté conversion
2. Tu tutoies le lecteur
3. Tu utilises des données chiffrées et des exemples concrets
4. Tu mentionnes subtilement VintDress comme solution, sans être trop commercial
5. Tu structures avec des H2 et H3 pour le SEO
6. Tu inclus des tableaux comparatifs quand pertinent
7. Tu ajoutes des témoignages fictifs mais réalistes
8. Tu ne mets JAMAIS d'emojis
9. VintDress propose:
   - Pack 10 crédits: 3,49€ (0,35€/photo)
   - Pack 25 crédits: 6,99€ (0,28€/photo)
   - Abonnement mensuel 40 générations: 11,99€
10. Les avantages VintDress:
    - Mannequin IA personnalisable (genre, morphologie, carnation, pose, décor)
    - Technologie FLUX 2 Pro (qualité marques de mode)
    - Génération en 30 secondes
    - Description IA générée automatiquement
    - Pas d'abonnement obligatoire`;

export const ARTICLE_PROMPT = (keyword: string, secondaryKeywords: string[]) => `
Génère un article SEO complet en FRANÇAIS pour le mot-clé principal: "${keyword}"
${secondaryKeywords.length > 0 ? `Mots-clés secondaires à intégrer naturellement: ${secondaryKeywords.join(', ')}` : ''}

L'article doit:
1. Cibler les vendeurs Vinted qui cherchent à améliorer leurs photos
2. Convertir vers VintDress sans être trop commercial
3. Faire minimum 1200 mots
4. Inclure une FAQ de 4 questions
5. Proposer des articles liés parmi: "mannequin-ia-vinted", "ia-photo-vinted-gratuit-vs-payant", "guide-complet-photos-vinted-2025", "5-astuces-pour-vendre-plus-vite-sur-vinted", "algorithme-vinted-visibilite"

RETOURNE UN JSON VALIDE avec cette structure exacte:
{
  "slug": "slug-seo-optimise",
  "title": "Titre H1 accrocheur avec le mot-clé",
  "excerpt": "Description courte de 1-2 phrases pour l'aperçu",
  "content": "Contenu markdown complet de l'article (utilise \\\`\\\` pour les backticks si nécessaire)",
  "category": "Guide" ou "Conseils" ou "Témoignage" ou "Tendances",
  "readTime": "X min",
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"],
  "metaDescription": "Meta description SEO de 150-160 caractères",
  "keywords": ["mot-clé 1", "mot-clé 2", ...],
  "faq": [
    { "question": "Question 1 ?", "answer": "Réponse détaillée" },
    { "question": "Question 2 ?", "answer": "Réponse détaillée" },
    { "question": "Question 3 ?", "answer": "Réponse détaillée" },
    { "question": "Question 4 ?", "answer": "Réponse détaillée" }
  ],
  "relatedArticles": ["slug-1", "slug-2", "slug-3"]
}

IMPORTANT: Retourne UNIQUEMENT le JSON, sans texte avant ou après.`;

export const TRANSLATION_PROMPT = (article: string, targetLang: string) => {
  const langNames: Record<string, string> = {
    en: 'anglais',
    es: 'espagnol',
    it: 'italien'
  };

  const langExamples: Record<string, { title: string; excerpt: string }> = {
    en: {
      title: "AI Photos for Vinted: The Complete Guide",
      excerpt: "Discover how to boost your Vinted sales with professional AI-generated photos."
    },
    es: {
      title: "Fotos IA para Vinted: La Guia Completa",
      excerpt: "Descubre como aumentar tus ventas en Vinted con fotos profesionales generadas por IA."
    },
    it: {
      title: "Foto IA per Vinted: La Guida Completa",
      excerpt: "Scopri come aumentare le tue vendite su Vinted con foto professionali generate dall'IA."
    }
  };

  return `Traduis cet article en ${langNames[targetLang]}.

RÈGLES:
1. Garde le même slug (ne pas traduire)
2. Traduis tout le reste: title, excerpt, content, tags, metaDescription, keywords, faq, etc.
3. Adapte les expressions idiomatiques à la langue cible
4. Garde les prix en euros
5. Garde les noms propres (VintDress, Vinted, FLUX 2 Pro)
6. La date doit être traduite selon le format local:
   - Anglais: "December 26, 2025"
   - Espagnol: "26 de diciembre de 2025"
   - Italien: "26 dicembre 2025"

Exemple de style attendu pour ${langNames[targetLang]}:
- Titre: "${langExamples[targetLang].title}"
- Extrait: "${langExamples[targetLang].excerpt}"

ARTICLE À TRADUIRE:
${article}

RETOURNE UNIQUEMENT le JSON traduit, sans texte avant ou après.`;
};

export const UNSPLASH_KEYWORDS = [
  'fashion photography',
  'clothing rack',
  'fashion retail',
  'online shopping',
  'e-commerce fashion',
  'clothing store',
  'wardrobe',
  'fashion model',
  'smartphone photography',
  'product photography'
];
