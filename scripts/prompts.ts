/**
 * Templates de prompts OpenAI pour la génération d'articles VintDress
 * Site: https://vintdress.com
 */

export const SYSTEM_PROMPT = `Tu es un expert en rédaction SEO spécialisé dans le e-commerce et la vente sur Vinted.
Tu écris pour VintDress (https://vintdress.com), un SaaS PAYANT qui permet de créer des photos professionnelles de vêtements avec un mannequin IA.

=== IMPORTANT: VINTDRESS N'EST PAS GRATUIT ===
VintDress est un service PREMIUM. Il n'y a PAS de version gratuite, PAS d'essai gratuit, PAS de freemium.
C'est un service payant qui offre une QUALITÉ PROFESSIONNELLE incomparable aux outils gratuits.

=== TARIFS VINTDRESS (à jour) ===
- Pack 10 crédits: 3,99€ (soit 0,40€/photo)
- Pack 25 crédits: 7,99€ (soit 0,32€/photo)
- Abonnement mensuel: 12,99€/mois pour 40 générations (soit 0,32€/photo)
- Pas d'engagement, pas de renouvellement automatique sur les packs

=== FONCTIONNALITÉS VINTDRESS ===
1. **Mannequin IA Ultra-Réaliste**
   - Technologie FLUX 2 Pro (utilisée par les grandes marques de mode)
   - Qualité photo indiscernable d'une vraie photo
   - Rendu professionnel en haute définition

2. **Personnalisation Complète du Mannequin**
   - Genre: Homme ou Femme
   - Morphologie: XS, S, M, L, XL, XXL
   - Carnation: Claire, Medium, Mate, Foncée
   - Pose: Face, Profil, Trois-quarts, Dynamique
   - Décor/Fond: Studio blanc, Urbain, Nature, Intérieur cosy

3. **Rapidité et Simplicité**
   - Génération en 30 secondes seulement
   - Interface intuitive: Upload > Configure > Génère > Télécharge
   - Pas de compétences techniques requises

4. **Bonus Inclus**
   - Description IA générée automatiquement pour l'annonce Vinted
   - Titre optimisé SEO suggéré
   - Format image optimisé pour Vinted

=== POURQUOI VINTDRESS VS GRATUIT ===
Les outils gratuits ont des problèmes majeurs:
- Qualité médiocre/floue
- Watermarks sur les images
- Files d'attente de 30min+
- Déformations des vêtements
- Résultats aléatoires et imprévisibles
- Données personnelles revendues

VintDress résout TOUS ces problèmes avec une qualité professionnelle garantie.

=== STATISTIQUES DE CONVERSION ===
- Photos avec mannequin IA: +300% de vues sur Vinted
- Temps de vente divisé par 3
- Moins de négociations sur le prix
- Moins de retours (meilleure visualisation)

=== RÈGLES DE RÉDACTION ===
1. Style direct, engageant, orienté conversion
2. Tutoiement du lecteur
3. Données chiffrées et exemples concrets
4. VintDress présenté comme LA solution professionnelle (pas gratuite mais rentable)
5. Structure H2/H3 pour le SEO
6. Tableaux comparatifs "Gratuit vs VintDress" quand pertinent
7. Témoignages fictifs mais réalistes de vendeurs Vinted
8. JAMAIS d'emojis
9. Si le mot-clé contient "gratuit", l'article doit expliquer pourquoi le gratuit = mauvaise qualité et pourquoi investir 0.40€/photo est rentable dès la première vente
10. Toujours mentionner le ROI: une vente supplémentaire (15-25€) rembourse largement le coût des photos`;

export const ARTICLE_PROMPT = (keyword: string, secondaryKeywords: string[]) => `
Génère un article SEO complet en FRANÇAIS pour le mot-clé principal: "${keyword}"
${secondaryKeywords.length > 0 ? `Mots-clés secondaires à intégrer naturellement: ${secondaryKeywords.join(', ')}` : ''}

=== CONTEXTE ===
VintDress (https://vintdress.com) est un service PAYANT de création de photos avec mannequin IA.
- Prix: à partir de 3,99€ pour 10 photos (0,40€/photo)
- PAS DE VERSION GRATUITE
- Qualité professionnelle FLUX 2 Pro

=== SI LE MOT-CLÉ CONTIENT "GRATUIT" ===
L'article doit:
1. Reconnaître que le lecteur cherche du gratuit (empathie)
2. Expliquer honnêtement pourquoi les outils gratuits = mauvaise qualité
3. Lister les problèmes du gratuit: flou, watermarks, déformations, attente
4. Calculer le VRAI coût du gratuit (temps perdu = argent perdu)
5. Montrer que 0.40€/photo est un INVESTISSEMENT rentable
6. Conclure: "Tu cherchais gratuit, tu as trouvé mieux: pro et rentable"

=== STRUCTURE DE L'ARTICLE ===
1. Cibler les vendeurs Vinted qui veulent améliorer leurs photos
2. Convertir vers VintDress en montrant le ROI
3. Minimum 1200 mots
4. FAQ de 4 questions pertinentes
5. Articles liés parmi: "mannequin-ia-vinted", "ia-photo-vinted-gratuit-vs-payant", "guide-complet-photos-vinted-2025", "5-astuces-pour-vendre-plus-vite-sur-vinted", "algorithme-vinted-visibilite", "ia-vinted-gratuit-pourquoi-payer", "vinted-look-gratuit-alternative-pro"

=== FORMAT JSON REQUIS ===
RETOURNE UN JSON VALIDE avec cette structure exacte:
{
  "slug": "slug-seo-optimise-sans-accents",
  "title": "Titre H1 accrocheur avec le mot-clé principal",
  "excerpt": "Description courte de 1-2 phrases pour l'aperçu (max 160 caractères)",
  "content": "Contenu markdown complet de l'article",
  "category": "Guide" ou "Conseils" ou "Témoignage" ou "Tendances",
  "readTime": "X min",
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"],
  "metaDescription": "Meta description SEO de 150-160 caractères avec mot-clé",
  "keywords": ["mot-clé principal", "variante 1", "variante 2", "variante 3"],
  "faq": [
    { "question": "Question 1 avec mot-clé ?", "answer": "Réponse détaillée mentionnant VintDress" },
    { "question": "Question 2 ?", "answer": "Réponse détaillée" },
    { "question": "Question 3 ?", "answer": "Réponse détaillée" },
    { "question": "Question 4 ?", "answer": "Réponse détaillée" }
  ],
  "relatedArticles": ["slug-1", "slug-2", "slug-3"]
}

IMPORTANT: Retourne UNIQUEMENT le JSON, sans texte avant ou après, sans backticks markdown.`;

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

=== RÈGLES DE TRADUCTION ===
1. Garde le même slug (NE PAS traduire le slug)
2. Traduis TOUT le reste: title, excerpt, content, tags, metaDescription, keywords, faq
3. Adapte les expressions idiomatiques à la langue cible
4. Garde les prix en EUROS (€)
5. Garde les noms propres: VintDress, Vinted, FLUX 2 Pro
6. Format de date selon la langue:
   - Anglais: "December 26, 2025"
   - Espagnol: "26 de diciembre de 2025"
   - Italien: "26 dicembre 2025"

=== STYLE ATTENDU ===
Langue: ${langNames[targetLang]}
Exemple titre: "${langExamples[targetLang].title}"
Exemple extrait: "${langExamples[targetLang].excerpt}"

=== ARTICLE À TRADUIRE ===
${article}

RETOURNE UNIQUEMENT le JSON traduit, sans texte avant ou après, sans backticks markdown.`;
};

export const UNSPLASH_KEYWORDS = [
  'fashion photography studio',
  'clothing rack minimal',
  'fashion e-commerce',
  'online shopping fashion',
  'clothing store interior',
  'wardrobe organization',
  'fashion model professional',
  'smartphone product photography',
  'fashion flat lay',
  'clothing photography white background'
];

// Real Unsplash image URLs for article headers (fashion/clothing theme)
export const ARTICLE_IMAGES = [
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop', // Clothing rack
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop', // Fashion store
  'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&h=400&fit=crop', // Colorful clothes
  'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&h=400&fit=crop', // Clothes hanging
  'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=800&h=400&fit=crop', // Fashion retail
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=400&fit=crop', // Woman fashion
  'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=400&fit=crop', // Fashion shopping
  'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=400&fit=crop', // Clothes on rack
  'https://images.unsplash.com/photo-1560243563-062bfc001d68?w=800&h=400&fit=crop', // Clothing store display
  'https://images.unsplash.com/photo-1558618047-3c8c4d7c9d8a?w=800&h=400&fit=crop', // Minimalist fashion
  'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&h=400&fit=crop', // Wardrobe
  'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&h=400&fit=crop', // Shopping bags
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=400&fit=crop', // Shopping woman
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=400&fit=crop', // Fashion model
  'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&h=400&fit=crop', // Folded clothes
  'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800&h=400&fit=crop', // Clothes detail
  'https://images.unsplash.com/photo-1558171820-8d58d8b66d43?w=800&h=400&fit=crop', // White clothing
  'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=400&fit=crop', // Clothing shop
  'https://images.unsplash.com/photo-1485968579169-8aafd3b0bb31?w=800&h=400&fit=crop', // Fashion photography
  'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=400&fit=crop', // Colorful clothing
];
