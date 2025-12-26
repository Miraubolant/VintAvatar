/**
 * Script de génération automatique d'articles VintDress
 * Usage: npx tsx scripts/generate-article.ts [--dry-run] [--no-push]
 *
 * Options:
 *   --dry-run   Simule la génération sans créer de fichiers
 *   --no-push   Crée les fichiers mais ne pousse pas sur Git
 *
 * Variables d'environnement requises:
 *   OPENAI_API_KEY - Clé API OpenAI
 *   GITHUB_TOKEN   - Token GitHub avec scope 'repo' (pour le push)
 *   GITHUB_OWNER   - Propriétaire du repo (ex: 'username')
 *   GITHUB_REPO    - Nom du repo (ex: 'porte-vinted')
 *   GITHUB_BRANCH  - Branche cible (défaut: 'main')
 */

import * as fs from 'fs';
import * as path from 'path';
import { SYSTEM_PROMPT, ARTICLE_PROMPT, TRANSLATION_PROMPT, UNSPLASH_KEYWORDS } from './prompts';

// Configuration
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_MODEL = 'gpt-4o-mini';

// GitHub API Configuration
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_OWNER = process.env.GITHUB_OWNER;
const GITHUB_REPO = process.env.GITHUB_REPO;
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || 'main';

// Interface pour les fichiers à pousser sur GitHub
interface GitHubFile {
  path: string;  // Chemin relatif depuis la racine du repo
  content: string;
}

// Paths
const ROOT_DIR = path.join(__dirname, '..');
const ARTICLES_DIR = path.join(ROOT_DIR, 'src', 'articles');
const KEYWORDS_FILE = path.join(__dirname, 'keywords.json');
const SITEMAP_FILE = path.join(ROOT_DIR, 'public', 'sitemap.xml');

// Types
interface KeywordsData {
  pending: Array<{
    primary: string;
    secondary: string[];
    addedAt: string;
  }>;
  processed: Array<{
    primary: string;
    secondary: string[];
    processedAt: string;
    articleSlug: string;
  }>;
  lastArticleId: number;
}

interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  tags: string[];
  metaDescription: string;
  keywords: string[];
  faq: Array<{ question: string; answer: string }>;
  relatedArticles: string[];
}

// Utility functions
function log(message: string, type: 'info' | 'success' | 'error' | 'warn' = 'info'): void {
  const colors = {
    info: '\x1b[36m',
    success: '\x1b[32m',
    error: '\x1b[31m',
    warn: '\x1b[33m'
  };
  const reset = '\x1b[0m';
  const prefix = {
    info: '[INFO]',
    success: '[OK]',
    error: '[ERREUR]',
    warn: '[ATTENTION]'
  };
  console.log(`${colors[type]}${prefix[type]}${reset} ${message}`);
}

function loadKeywords(): KeywordsData {
  const data = fs.readFileSync(KEYWORDS_FILE, 'utf-8');
  return JSON.parse(data);
}

function saveKeywords(data: KeywordsData): void {
  fs.writeFileSync(KEYWORDS_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

async function callOpenAI(systemPrompt: string, userPrompt: string): Promise<string> {
  if (!OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY non définie. Ajoutez-la dans les variables d\'environnement.');
  }

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      temperature: 0.7,
      max_tokens: 4000
    })
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Erreur OpenAI: ${response.status} - ${error}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

function parseArticleJSON(content: string): Partial<Article> {
  // Nettoyer le contenu (enlever les backticks markdown si présents)
  let cleaned = content.trim();
  if (cleaned.startsWith('```json')) {
    cleaned = cleaned.slice(7);
  }
  if (cleaned.startsWith('```')) {
    cleaned = cleaned.slice(3);
  }
  if (cleaned.endsWith('```')) {
    cleaned = cleaned.slice(0, -3);
  }

  return JSON.parse(cleaned.trim());
}

function getRandomUnsplashImage(): string {
  const keyword = UNSPLASH_KEYWORDS[Math.floor(Math.random() * UNSPLASH_KEYWORDS.length)];
  // Using a deterministic approach based on current timestamp
  const seed = Date.now();
  return `https://images.unsplash.com/photo-${1500000000000 + (seed % 100000000)}?w=800&h=400&fit=crop`;
}

function getCurrentDate(): { fr: string; en: string; es: string; it: string } {
  const now = new Date();
  const day = now.getDate();
  const year = now.getFullYear();

  const monthsFR = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
  const monthsEN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const monthsES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  const monthsIT = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'];

  const month = now.getMonth();

  return {
    fr: `${day} ${monthsFR[month]} ${year}`,
    en: `${monthsEN[month]} ${day}, ${year}`,
    es: `${day} de ${monthsES[month]} de ${year}`,
    it: `${day} ${monthsIT[month]} ${year}`
  };
}

function generateArticleFile(article: Article, lang: string = 'fr'): string {
  const escapedContent = article.content
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$/g, '\\$');

  return `export const article = {
  id: ${article.id},
  slug: "${article.slug}",
  title: "${article.title.replace(/"/g, '\\"')}",
  excerpt: "${article.excerpt.replace(/"/g, '\\"')}",
  content: \`
${article.content}
  \`,
  author: "${article.author}",
  date: "${article.date}",
  category: "${article.category}",
  readTime: "${article.readTime}",
  image: "${article.image}",
  tags: ${JSON.stringify(article.tags)},
  metaDescription: "${article.metaDescription.replace(/"/g, '\\"')}",
  keywords: ${JSON.stringify(article.keywords)},
  faq: ${JSON.stringify(article.faq, null, 4).replace(/\n/g, '\n  ')},
  relatedArticles: ${JSON.stringify(article.relatedArticles)}
};
`;
}

function updateIndexFile(slug: string, varName: string, lang: string): void {
  const indexPath = lang === 'fr'
    ? path.join(ARTICLES_DIR, 'index.ts')
    : path.join(ARTICLES_DIR, lang, 'index.ts');

  let content = fs.readFileSync(indexPath, 'utf-8');

  // Helper function to add comma to the last entry before closing brace
  const addCommaBeforeClosingBrace = (text: string, objectStart: number): string => {
    const closingBrace = text.indexOf('}', objectStart);
    // Find the last non-whitespace character before the closing brace
    let i = closingBrace - 1;
    while (i >= 0 && (text[i] === ' ' || text[i] === '\n' || text[i] === '\r' || text[i] === '\t')) {
      i--;
    }
    // If the last non-whitespace char is not a comma, add one
    if (i >= 0 && text[i] !== ',' && text[i] !== '{') {
      return text.slice(0, i + 1) + ',' + text.slice(i + 1);
    }
    return text;
  };

  if (lang === 'fr') {
    // Pour le fichier principal français
    // Ajouter l'import
    const lastImport = content.lastIndexOf("import { article as ");
    const importEndLine = content.indexOf('\n', lastImport);
    const newImport = `\nimport { article as ${varName} } from './${slug}';`;
    content = content.slice(0, importEndLine + 1) + newImport + content.slice(importEndLine + 1);

    // Ajouter une virgule à la dernière entrée si nécessaire
    const frenchArticlesStart = content.indexOf('const frenchArticles = {');
    content = addCommaBeforeClosingBrace(content, frenchArticlesStart);

    // Ajouter dans frenchArticles
    const articlesEnd = content.indexOf('}', content.indexOf('const frenchArticles = {'));
    const newEntry = `  [${varName}.slug]: ${varName},\n`;
    content = content.slice(0, articlesEnd) + newEntry + content.slice(articlesEnd);

    // Ajouter dans frenchArticlesList (au début)
    const listStart = content.indexOf('const frenchArticlesList = [') + 'const frenchArticlesList = ['.length;
    content = content.slice(0, listStart) + `${varName}, ` + content.slice(listStart);
  } else {
    // Pour les fichiers de langue (en, es, it)
    // Ajouter l'import
    const lastImport = content.lastIndexOf("import { article as ");
    const importEndLine = content.indexOf('\n', lastImport);
    const newImport = `\nimport { article as ${varName} } from './${slug}';`;
    content = content.slice(0, importEndLine + 1) + newImport + content.slice(importEndLine + 1);

    // Ajouter une virgule à la dernière entrée si nécessaire
    const articlesStart = content.indexOf('export const articles = {');
    content = addCommaBeforeClosingBrace(content, articlesStart);

    // Ajouter dans articles object
    const articlesEnd = content.indexOf('}', content.indexOf('export const articles = {'));
    const newEntry = `  [${varName}.slug]: ${varName},\n`;
    content = content.slice(0, articlesEnd) + newEntry + content.slice(articlesEnd);

    // Ajouter dans articlesList (au début)
    const listStart = content.indexOf('export const articlesList = [') + 'export const articlesList = ['.length;
    content = content.slice(0, listStart) + `${varName}, ` + content.slice(listStart);
  }

  fs.writeFileSync(indexPath, content, 'utf-8');
}

function updateSitemap(slug: string, imageUrl: string, imageTitle: string): void {
  let content = fs.readFileSync(SITEMAP_FILE, 'utf-8');

  const today = new Date().toISOString().split('T')[0];

  const newEntry = `
  <!-- ${imageTitle} -->
  <url>
    <loc>https://vintdress.com/blog/${slug}</loc>
    <xhtml:link rel="alternate" hreflang="fr" href="https://vintdress.com/blog/${slug}"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://vintdress.com/blog/${slug}?lang=en"/>
    <xhtml:link rel="alternate" hreflang="es" href="https://vintdress.com/blog/${slug}?lang=es"/>
    <xhtml:link rel="alternate" hreflang="it" href="https://vintdress.com/blog/${slug}?lang=it"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://vintdress.com/blog/${slug}"/>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <image:image>
      <image:loc>${imageUrl.replace(/&/g, '&amp;')}</image:loc>
      <image:title>${imageTitle}</image:title>
    </image:image>
  </url>
`;

  // Insérer avant </urlset>
  content = content.replace('</urlset>', newEntry + '\n</urlset>');

  fs.writeFileSync(SITEMAP_FILE, content, 'utf-8');
}

/**
 * Push des fichiers vers GitHub via l'API REST
 * Crée un seul commit avec tous les fichiers modifiés
 */
async function pushToGitHub(files: GitHubFile[], commitMessage: string): Promise<boolean> {
  if (!GITHUB_TOKEN || !GITHUB_OWNER || !GITHUB_REPO) {
    log('Variables GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO requises pour le push', 'error');
    log('Configurez ces variables dans Coolify pour activer le push automatique', 'warn');
    return false;
  }

  const headers = {
    'Authorization': `token ${GITHUB_TOKEN}`,
    'Accept': 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
    'User-Agent': 'VintDress-Article-Generator'
  };

  const apiBase = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}`;

  try {
    log(`Push vers ${GITHUB_OWNER}/${GITHUB_REPO} (branche: ${GITHUB_BRANCH})...`, 'info');

    // 1. Récupérer le SHA du dernier commit
    const refResponse = await fetch(`${apiBase}/git/ref/heads/${GITHUB_BRANCH}`, { headers });
    if (!refResponse.ok) {
      throw new Error(`Impossible de récupérer la ref: ${refResponse.status} ${await refResponse.text()}`);
    }
    const refData = await refResponse.json();
    const currentCommitSha = refData.object.sha;
    log(`Commit actuel: ${currentCommitSha.substring(0, 7)}`, 'info');

    // 2. Récupérer le tree SHA du commit actuel
    const commitResponse = await fetch(`${apiBase}/git/commits/${currentCommitSha}`, { headers });
    if (!commitResponse.ok) {
      throw new Error(`Impossible de récupérer le commit: ${commitResponse.status}`);
    }
    const commitData = await commitResponse.json();
    const currentTreeSha = commitData.tree.sha;

    // 3. Créer des blobs pour chaque fichier
    const treeItems: Array<{ path: string; mode: string; type: string; sha: string }> = [];

    for (const file of files) {
      log(`  Création blob: ${file.path}`, 'info');

      const blobResponse = await fetch(`${apiBase}/git/blobs`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          content: Buffer.from(file.content).toString('base64'),
          encoding: 'base64'
        })
      });

      if (!blobResponse.ok) {
        throw new Error(`Impossible de créer le blob pour ${file.path}: ${blobResponse.status}`);
      }

      const blobData = await blobResponse.json();
      treeItems.push({
        path: file.path,
        mode: '100644',
        type: 'blob',
        sha: blobData.sha
      });
    }

    // 4. Créer un nouveau tree avec tous les fichiers
    const treeResponse = await fetch(`${apiBase}/git/trees`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        base_tree: currentTreeSha,
        tree: treeItems
      })
    });

    if (!treeResponse.ok) {
      throw new Error(`Impossible de créer le tree: ${treeResponse.status}`);
    }
    const treeData = await treeResponse.json();

    // 5. Créer le commit
    const newCommitResponse = await fetch(`${apiBase}/git/commits`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        message: commitMessage,
        tree: treeData.sha,
        parents: [currentCommitSha]
      })
    });

    if (!newCommitResponse.ok) {
      throw new Error(`Impossible de créer le commit: ${newCommitResponse.status}`);
    }
    const newCommitData = await newCommitResponse.json();
    log(`Nouveau commit créé: ${newCommitData.sha.substring(0, 7)}`, 'success');

    // 6. Mettre à jour la référence de la branche
    const updateRefResponse = await fetch(`${apiBase}/git/refs/heads/${GITHUB_BRANCH}`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({
        sha: newCommitData.sha
      })
    });

    if (!updateRefResponse.ok) {
      throw new Error(`Impossible de mettre à jour la ref: ${updateRefResponse.status}`);
    }

    log(`Branche ${GITHUB_BRANCH} mise à jour avec succès`, 'success');
    log(`Voir le commit: https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/commit/${newCommitData.sha}`, 'info');

    return true;

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    log(`Erreur GitHub API: ${errorMessage}`, 'error');
    log('Les fichiers ont été créés localement mais non poussés sur GitHub.', 'warn');
    return false;
  }
}

function slugToVarName(slug: string): string {
  return slug
    .split('-')
    .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

// Main function
async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const noPush = args.includes('--no-push');

  console.log('\n\x1b[1m========================================\x1b[0m');
  console.log('\x1b[1m  GÉNÉRATEUR D\'ARTICLES VINTDRESS\x1b[0m');
  console.log('\x1b[1m========================================\x1b[0m\n');

  if (dryRun) {
    log('Mode simulation activé (--dry-run)', 'warn');
  }

  // 1. Charger les mots-clés
  const keywords = loadKeywords();

  if (keywords.pending.length === 0) {
    log('Aucun mot-clé en attente. Ajoutez-en avec: npx tsx scripts/add-keyword.ts "mot clé"', 'warn');
    process.exit(0);
  }

  // 2. Prendre le premier mot-clé
  const keyword = keywords.pending[0];
  log(`Mot-clé sélectionné: "${keyword.primary}"`, 'info');
  if (keyword.secondary.length > 0) {
    log(`Mots-clés secondaires: ${keyword.secondary.join(', ')}`, 'info');
  }

  // 3. Générer l'article FR
  log('Génération de l\'article en français...', 'info');

  let frArticle: Partial<Article>;

  if (!dryRun) {
    const frContent = await callOpenAI(SYSTEM_PROMPT, ARTICLE_PROMPT(keyword.primary, keyword.secondary));
    frArticle = parseArticleJSON(frContent);
  } else {
    // Données de simulation
    frArticle = {
      slug: 'test-article-simulation',
      title: 'Article de Test',
      excerpt: 'Ceci est un article de simulation.',
      content: '# Test\n\nContenu de test.',
      category: 'Guide',
      readTime: '5 min',
      tags: ['test'],
      metaDescription: 'Description test',
      keywords: [keyword.primary],
      faq: [{ question: 'Test?', answer: 'Réponse test' }],
      relatedArticles: ['mannequin-ia-vinted']
    };
  }

  log(`Article généré: "${frArticle.title}"`, 'success');
  log(`Slug: ${frArticle.slug}`, 'info');

  // 4. Compléter l'article
  const dates = getCurrentDate();
  const newId = keywords.lastArticleId + 1;
  const imageUrl = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop';

  const completeArticle: Article = {
    id: newId,
    slug: frArticle.slug!,
    title: frArticle.title!,
    excerpt: frArticle.excerpt!,
    content: frArticle.content!,
    author: 'Équipe VintDress',
    date: dates.fr,
    category: frArticle.category!,
    readTime: frArticle.readTime!,
    image: imageUrl,
    tags: frArticle.tags!,
    metaDescription: frArticle.metaDescription!,
    keywords: frArticle.keywords!,
    faq: frArticle.faq!,
    relatedArticles: frArticle.relatedArticles!
  };

  // 5. Traduire en EN, ES, IT
  const translations: Record<string, Article> = { fr: completeArticle };

  for (const lang of ['en', 'es', 'it']) {
    log(`Traduction en ${lang.toUpperCase()}...`, 'info');

    if (!dryRun) {
      const translatedContent = await callOpenAI(
        'Tu es un traducteur professionnel. Traduis le JSON suivant en gardant la même structure.',
        TRANSLATION_PROMPT(JSON.stringify(frArticle, null, 2), lang)
      );
      const translatedArticle = parseArticleJSON(translatedContent);

      translations[lang] = {
        ...completeArticle,
        ...translatedArticle,
        date: dates[lang as keyof typeof dates],
        id: newId,
        slug: completeArticle.slug,
        image: imageUrl,
        author: lang === 'en' ? 'VintDress Team' : lang === 'es' ? 'Equipo VintDress' : 'Team VintDress'
      };
    } else {
      translations[lang] = { ...completeArticle, date: dates[lang as keyof typeof dates] };
    }

    log(`Traduction ${lang.toUpperCase()} terminée`, 'success');
  }

  // 6. Créer les fichiers et collecter pour GitHub
  if (!dryRun) {
    const varName = slugToVarName(completeArticle.slug);
    const filesToPush: GitHubFile[] = [];

    // Fichier FR principal
    const frFileContent = generateArticleFile(translations.fr);
    const frFilePath = path.join(ARTICLES_DIR, `${completeArticle.slug}.ts`);
    fs.writeFileSync(frFilePath, frFileContent, 'utf-8');
    log(`Fichier créé: src/articles/${completeArticle.slug}.ts`, 'success');
    filesToPush.push({
      path: `src/articles/${completeArticle.slug}.ts`,
      content: frFileContent
    });

    // Fichiers traduits
    for (const lang of ['en', 'es', 'it']) {
      const langFileContent = generateArticleFile(translations[lang], lang);
      const langDir = path.join(ARTICLES_DIR, lang);
      const langFilePath = path.join(langDir, `${completeArticle.slug}.ts`);
      fs.writeFileSync(langFilePath, langFileContent, 'utf-8');
      log(`Fichier créé: src/articles/${lang}/${completeArticle.slug}.ts`, 'success');
      filesToPush.push({
        path: `src/articles/${lang}/${completeArticle.slug}.ts`,
        content: langFileContent
      });
    }

    // 7. Mettre à jour les index
    log('Mise à jour des fichiers index...', 'info');
    updateIndexFile(completeArticle.slug, varName, 'fr');
    for (const lang of ['en', 'es', 'it']) {
      updateIndexFile(completeArticle.slug, varName, lang);
    }
    log('Fichiers index mis à jour', 'success');

    // Collecter les fichiers index mis à jour
    const frIndexPath = path.join(ARTICLES_DIR, 'index.ts');
    filesToPush.push({
      path: 'src/articles/index.ts',
      content: fs.readFileSync(frIndexPath, 'utf-8')
    });
    for (const lang of ['en', 'es', 'it']) {
      const langIndexPath = path.join(ARTICLES_DIR, lang, 'index.ts');
      filesToPush.push({
        path: `src/articles/${lang}/index.ts`,
        content: fs.readFileSync(langIndexPath, 'utf-8')
      });
    }

    // 8. Mettre à jour le sitemap
    log('Mise à jour du sitemap...', 'info');
    updateSitemap(completeArticle.slug, imageUrl, completeArticle.title);
    log('Sitemap mis à jour', 'success');
    filesToPush.push({
      path: 'public/sitemap.xml',
      content: fs.readFileSync(SITEMAP_FILE, 'utf-8')
    });

    // 9. Mettre à jour keywords.json
    keywords.pending.shift();
    keywords.processed.push({
      primary: keyword.primary,
      secondary: keyword.secondary,
      processedAt: new Date().toISOString(),
      articleSlug: completeArticle.slug
    });
    keywords.lastArticleId = newId;
    saveKeywords(keywords);
    filesToPush.push({
      path: 'scripts/keywords.json',
      content: fs.readFileSync(KEYWORDS_FILE, 'utf-8')
    });

    // 10. Push sur GitHub via API
    if (!noPush) {
      log('Push sur GitHub via API...', 'info');
      const commitMessage = `Add new article: ${completeArticle.slug}\n\nKeyword: ${keyword.primary}\nGenerated automatically by VintDress Article Generator`;
      await pushToGitHub(filesToPush, commitMessage);
    } else {
      log('Mode --no-push: les fichiers ont été créés mais pas poussés', 'warn');
    }
  }

  console.log('\n\x1b[1m========================================\x1b[0m');
  console.log('\x1b[32m  GÉNÉRATION TERMINÉE AVEC SUCCÈS\x1b[0m');
  console.log('\x1b[1m========================================\x1b[0m\n');

  log(`Article: ${completeArticle.title}`, 'success');
  log(`Slug: ${completeArticle.slug}`, 'info');
  log(`Mots-clés restants: ${keywords.pending.length - (dryRun ? 0 : 1)}`, 'info');
}

// Run
main().catch((error) => {
  log(`Erreur fatale: ${error.message}`, 'error');
  console.error(error);
  process.exit(1);
});
