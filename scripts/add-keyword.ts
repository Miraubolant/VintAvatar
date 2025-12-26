/**
 * Script pour ajouter des mots-clés SEO à la file d'attente
 * Usage: npx tsx scripts/add-keyword.ts "mot clé principal" "mot clé secondaire (optionnel)"
 *
 * Exemples:
 *   npx tsx scripts/add-keyword.ts "vinted photo ia"
 *   npx tsx scripts/add-keyword.ts "mannequin virtuel vinted" "ia vetement vinted"
 */

import * as fs from 'fs';
import * as path from 'path';

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

const KEYWORDS_FILE = path.join(__dirname, 'keywords.json');

function loadKeywords(): KeywordsData {
  try {
    const data = fs.readFileSync(KEYWORDS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return {
      pending: [],
      processed: [],
      lastArticleId: 17
    };
  }
}

function saveKeywords(data: KeywordsData): void {
  fs.writeFileSync(KEYWORDS_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

function addKeyword(primary: string, secondary: string[] = []): void {
  const data = loadKeywords();

  // Vérifier si le mot-clé existe déjà
  const existsInPending = data.pending.some(k => k.primary.toLowerCase() === primary.toLowerCase());
  const existsInProcessed = data.processed.some(k => k.primary.toLowerCase() === primary.toLowerCase());

  if (existsInPending) {
    console.log(`\x1b[33m[ATTENTION]\x1b[0m Le mot-clé "${primary}" est déjà dans la file d'attente.`);
    return;
  }

  if (existsInProcessed) {
    console.log(`\x1b[33m[ATTENTION]\x1b[0m Le mot-clé "${primary}" a déjà été traité.`);
    return;
  }

  // Ajouter le mot-clé
  data.pending.push({
    primary: primary.toLowerCase().trim(),
    secondary: secondary.map(s => s.toLowerCase().trim()),
    addedAt: new Date().toISOString()
  });

  saveKeywords(data);

  console.log(`\x1b[32m[OK]\x1b[0m Mot-clé ajouté: "${primary}"`);
  if (secondary.length > 0) {
    console.log(`     Mots-clés secondaires: ${secondary.join(', ')}`);
  }
  console.log(`\n\x1b[36m[INFO]\x1b[0m ${data.pending.length} mot(s)-clé(s) en attente de traitement.`);
}

function listKeywords(): void {
  const data = loadKeywords();

  console.log('\n\x1b[1m=== MOTS-CLÉS EN ATTENTE ===\x1b[0m\n');

  if (data.pending.length === 0) {
    console.log('Aucun mot-clé en attente.\n');
  } else {
    data.pending.forEach((k, i) => {
      console.log(`${i + 1}. \x1b[32m${k.primary}\x1b[0m`);
      if (k.secondary.length > 0) {
        console.log(`   Secondaires: ${k.secondary.join(', ')}`);
      }
      console.log(`   Ajouté le: ${new Date(k.addedAt).toLocaleDateString('fr-FR')}`);
    });
  }

  console.log('\n\x1b[1m=== MOTS-CLÉS TRAITÉS ===\x1b[0m\n');

  if (data.processed.length === 0) {
    console.log('Aucun mot-clé traité.\n');
  } else {
    data.processed.slice(-5).forEach((k) => {
      console.log(`- \x1b[90m${k.primary}\x1b[0m -> ${k.articleSlug}`);
    });
    if (data.processed.length > 5) {
      console.log(`  ... et ${data.processed.length - 5} autre(s)`);
    }
  }
}

function removeKeyword(index: number): void {
  const data = loadKeywords();

  if (index < 1 || index > data.pending.length) {
    console.log(`\x1b[31m[ERREUR]\x1b[0m Index invalide. Utilisez un nombre entre 1 et ${data.pending.length}.`);
    return;
  }

  const removed = data.pending.splice(index - 1, 1)[0];
  saveKeywords(data);

  console.log(`\x1b[32m[OK]\x1b[0m Mot-clé supprimé: "${removed.primary}"`);
}

// Main
const args = process.argv.slice(2);

if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
  console.log(`
\x1b[1mGestion des mots-clés SEO pour articles VintDress\x1b[0m

\x1b[4mUsage:\x1b[0m
  npx tsx scripts/add-keyword.ts <mot-clé>              Ajouter un mot-clé
  npx tsx scripts/add-keyword.ts <principal> <second>   Ajouter avec secondaires
  npx tsx scripts/add-keyword.ts --list                 Lister tous les mots-clés
  npx tsx scripts/add-keyword.ts --remove <index>       Supprimer un mot-clé

\x1b[4mExemples:\x1b[0m
  npx tsx scripts/add-keyword.ts "vinted ia photo"
  npx tsx scripts/add-keyword.ts "mannequin virtuel" "ia vetement"
  npx tsx scripts/add-keyword.ts --list
  npx tsx scripts/add-keyword.ts --remove 2
`);
  process.exit(0);
}

if (args[0] === '--list' || args[0] === '-l') {
  listKeywords();
  process.exit(0);
}

if (args[0] === '--remove' || args[0] === '-r') {
  const index = parseInt(args[1], 10);
  if (isNaN(index)) {
    console.log('\x1b[31m[ERREUR]\x1b[0m Spécifiez un numéro valide.');
    process.exit(1);
  }
  removeKeyword(index);
  process.exit(0);
}

// Ajouter un mot-clé
const primary = args[0];
const secondary = args.slice(1);

addKeyword(primary, secondary);
