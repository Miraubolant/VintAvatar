/**
 * Génère un slug SEO-friendly à partir d'un titre et d'un ID
 * Ex: "Chemise Bleue T42 Neuf" + "abc-123-xyz" → "chemise-bleue-t42-neuf-3-xyz"
 */
export const generateSlug = (title: string, id: string): string => {
  // Normaliser le titre
  const normalizedTitle = title
    .toLowerCase()
    // Remplacer les caractères accentués
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    // Remplacer les espaces et caractères spéciaux par des tirets
    .replace(/[^a-z0-9]+/g, '-')
    // Supprimer les tirets en début et fin
    .replace(/^-+|-+$/g, '')
    // Limiter la longueur du titre à 60 caractères
    .substring(0, 60)
    // Supprimer le tiret final si la coupe a créé un tiret
    .replace(/-+$/, '');

  // Extraire les 5 derniers caractères de l'ID (sans les tirets)
  const idSuffix = id.replace(/-/g, '').slice(-5);

  return `${normalizedTitle}-${idSuffix}`;
};

/**
 * Extrait l'ID suffix d'un slug pour la recherche en base
 * Ex: "chemise-bleue-t42-neuf-3-xyz" → "3-xyz" (les 5 derniers chars avant le dernier tiret)
 */
export const extractIdFromSlug = (slug: string): string => {
  // Le suffix ID est les 5 derniers caractères du slug
  const parts = slug.split('-');
  if (parts.length < 2) return slug;

  // Retourne le dernier segment (qui contient le suffix de l'ID)
  return parts[parts.length - 1];
};

/**
 * Génère un titre lisible à partir d'un slug
 * Ex: "chemise-bleue-t42-neuf-3-xyz" → "Chemise Bleue T42 Neuf"
 */
export const slugToTitle = (slug: string): string => {
  // Retirer le suffix ID (5 derniers caractères après le dernier tiret)
  const parts = slug.split('-');
  if (parts.length > 1) {
    parts.pop(); // Retirer le suffix ID
  }

  return parts
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
