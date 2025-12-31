# Guide de Traduction des Articles VintDress

Ce document sert de référence pour traduire les 17 articles du blog VintDress en 3 langues (EN, ES, IT).

---

## Structure des Fichiers

### Dossiers
```
src/pages/articles/
├── [articles FR existants].tsx     # Articles français (existants)
├── en/                              # Articles anglais
│   └── [ArticleName]Page.tsx
├── es/                              # Articles espagnols
│   └── [ArticleName]Page.tsx
└── it/                              # Articles italiens
    └── [ArticleName]Page.tsx
```

### Convention de Nommage des Fichiers
- **FR** : `PhotoPorteeVintedPage.tsx` (existant)
- **EN** : `en/WornPhotosVintedPage.tsx`
- **ES** : `es/FotosPuestasVintedPage.tsx`
- **IT** : `it/FotoIndossateVintedPage.tsx`

---

## Structure des URLs

| Langue | Format URL | Exemple |
|--------|------------|---------|
| FR | `/articles/{slug-fr}` | `/articles/photo-porte-vinted` |
| EN | `/en/articles/{slug-en}` | `/en/articles/worn-photos-vinted` |
| ES | `/es/articles/{slug-es}` | `/es/articles/fotos-puestas-vinted` |
| IT | `/it/articles/{slug-it}` | `/it/articles/foto-indossate-vinted` |

---

## Fichiers à Modifier (Checklist Complète)

### Pour chaque article traduit, modifier ces 6 fichiers :

#### 1. Créer le fichier article traduit
**Fichier** : `src/pages/articles/{lang}/[ArticleName]Page.tsx`

```tsx
// Exemple: src/pages/articles/en/WornPhotosVintedPage.tsx
export default function WornPhotosVintedPage() {
  useSEO({
    title: "English SEO Title",
    description: "English meta description",
    keywords: "english, keywords, here"
  });
  // ... contenu traduit
}
```

#### 2. Ajouter l'import et la route dans App.tsx
**Fichier** : `src/App.tsx`

```tsx
// Ajouter l'import lazy en haut du fichier
const WornPhotosVintedPage = lazy(() => import('./pages/articles/en/WornPhotosVintedPage'));

// Ajouter la route dans le Router
<Route path="/en/articles/worn-photos-vinted" element={<WornPhotosVintedPage />} />
```

#### 3. Ajouter le mapping URL dans articleTranslations.ts
**Fichier** : `src/lib/articleTranslations.ts`

```typescript
// Ajouter dans le tableau articleTranslations
{
  id: 'photo-portee-vinted',
  fr: '/articles/photo-porte-vinted',
  en: '/en/articles/worn-photos-vinted',
  es: '/es/articles/fotos-puestas-vinted',
  it: '/it/articles/foto-indossate-vinted',
},
```

#### 4. Ajouter les métadonnées traduites dans articles.ts
**Fichier** : `src/data/articles.ts`

```typescript
// Ajouter dans articleTranslations (objet interne)
'photo-porte-vinted': {
  en: {
    title: 'Worn Photos on Vinted: The Complete 2025 Guide',
    excerpt: 'Discover how to create professional worn photos...',
    description: 'Discover how to create professional worn photos...',
    date: 'Jan 15, 2025',
    category: 'Guide',
  },
  es: {
    title: 'Fotos Puestas en Vinted: La Guía Completa 2025',
    // ...
  },
  it: {
    title: 'Foto Indossate su Vinted: La Guida Completa 2025',
    // ...
  },
},
```

#### 5. Mettre à jour le sitemap.xml
**Fichier** : `public/sitemap.xml`

```xml
<!-- Ajouter les URLs pour chaque langue avec hreflang -->
<url>
  <loc>https://vintdress.com/en/articles/worn-photos-vinted</loc>
  <xhtml:link rel="alternate" hreflang="fr" href="https://vintdress.com/articles/photo-porte-vinted"/>
  <xhtml:link rel="alternate" hreflang="en" href="https://vintdress.com/en/articles/worn-photos-vinted"/>
  <xhtml:link rel="alternate" hreflang="es" href="https://vintdress.com/es/articles/fotos-puestas-vinted"/>
  <xhtml:link rel="alternate" hreflang="it" href="https://vintdress.com/it/articles/foto-indossate-vinted"/>
  <xhtml:link rel="alternate" hreflang="x-default" href="https://vintdress.com/articles/photo-porte-vinted"/>
  <lastmod>2025-12-31</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>

<!-- Répéter pour ES et IT -->
```

#### 6. Mettre à jour ce guide
**Fichier** : `TRANSLATION_GUIDE.md`
- Marquer l'article comme ✅ dans le tableau de statut

---

## Résumé des Fichiers

| # | Fichier | Action |
|---|---------|--------|
| 1 | `src/pages/articles/{lang}/[Article]Page.tsx` | **Créer** - Nouveau fichier traduit |
| 2 | `src/App.tsx` | **Modifier** - Import lazy + Route |
| 3 | `src/lib/articleTranslations.ts` | **Modifier** - Mapping URLs |
| 4 | `src/data/articles.ts` | **Modifier** - Métadonnées traduites |
| 5 | `public/sitemap.xml` | **Modifier** - URLs + hreflang |
| 6 | `TRANSLATION_GUIDE.md` | **Modifier** - Statut ✅ |

---

## Glossaire - Termes Récurrents

| Français | English | Español | Italiano |
|----------|---------|---------|----------|
| Photo portée | Worn photo | Foto puesta | Foto indossata |
| Mannequin IA | AI Mannequin | Maniquí IA | Manichino IA |
| Vente | Sale | Venta | Vendita |
| Annonce | Listing | Anuncio | Annuncio |
| Vêtement | Clothing / Garment | Prenda / Ropa | Abbigliamento / Capo |
| Acheteur | Buyer | Comprador | Acquirente |
| Vendeur | Seller | Vendedor | Venditore |
| Dressing | Wardrobe | Armario | Guardaroba |
| Générer | Generate | Generar | Generare |
| Avatar | Avatar | Avatar | Avatar |
| Intelligence Artificielle | Artificial Intelligence | Inteligencia Artificial | Intelligenza Artificiale |
| Augmenter les ventes | Boost sales | Aumentar ventas | Aumentare le vendite |
| Guide complet | Complete guide | Guía completa | Guida completa |
| Conseils | Tips | Consejos | Consigli |
| Astuces | Tricks | Trucos | Trucchi |
| Témoignage | Testimonial | Testimonio | Testimonianza |
| Success story | Success story | Historia de éxito | Storia di successo |
| Algorithme | Algorithm | Algoritmo | Algoritmo |
| Visibilité | Visibility | Visibilidad | Visibilità |
| Stratégie | Strategy | Estrategia | Strategia |
| Tendances | Trends | Tendencias | Tendenze |
| Vintage | Vintage | Vintage | Vintage |
| Identité visuelle | Visual identity | Identidad visual | Identità visiva |
| Erreurs | Mistakes | Errores | Errori |
| min de lecture | min read | min de lectura | min di lettura |
| Équipe VintDress | VintDress Team | Equipo VintDress | Team VintDress |

---

## Éléments à Traduire dans Chaque Article

1. **useSEO** :
   - `title` : Titre SEO
   - `description` : Meta description
   - `keywords` : Mots-clés SEO

2. **Contenu visuel** :
   - `alt` des images

3. **Header** :
   - Badge catégorie (CONSEILS, GUIDE, etc.)
   - Titre H1
   - Métadonnées (auteur, temps de lecture, date)
   - Tags

4. **Corps de l'article** :
   - Tous les paragraphes
   - Titres H2, H3
   - Listes à puces
   - Légendes
   - Citations

5. **CTA** :
   - Boutons d'action
   - Liens internes

6. **Navigation** :
   - Composant ArticleNavigation (adapter les liens)

---

## Liste des Articles à Traduire

### Statut : ⬜ À faire | 🔄 En cours | ✅ Terminé

| # | Article FR | Slug FR | EN | ES | IT |
|---|------------|---------|----|----|-----|
| 1 | PhotoPorteeVintedPage | photo-porte-vinted | ✅ | ✅ | ✅ |
| 2 | MannequinIAVintedPage | mannequin-ia-vinted | ✅ | ✅ | ✅ |
| 3 | VintedLookGratuitAlternativeProPage | vinted-look-gratuit-alternative-pro | ✅ | ✅ | ✅ |
| 4 | IAPhotoVintedGratuitVsPayantPage | ia-photo-vinted-gratuit-vs-payant | ✅ | ✅ | ✅ |
| 5 | AlgorithmeVintedVisibilitePage | algorithme-vinted-visibilite | ✅ | ✅ | ✅ |
| 6 | GuideCompletPhotosVinted2025Page | guide-complet-photos-vinted-2025 | ✅ | ✅ | ✅ |
| 7 | CinqAstucesVendrePlusVitePage | 5-astuces-pour-vendre-plus-vite-sur-vinted | ✅ | ✅ | ✅ |
| 8 | StrategieVenteVinted2025Page | strategie-vente-vinted-2025 | ✅ | ✅ | ✅ |
| 9 | CommentPrendrePhotoVintedPage | comment-prendre-bonnes-photos-vinted | ✅ | ✅ | ✅ |
| 10 | VintDressVsAlternativesComparatifPage | vintdress-vs-alternatives-comparatif-2025 | ⬜ | ⬜ | ⬜ |
| 11 | TendancesMode2025Page | tendances-mode-2025 | ⬜ | ⬜ | ⬜ |
| 12 | VendreVintageVintedGuidePage | vendre-vintage-vinted-guide | ⬜ | ⬜ | ⬜ |
| 13 | IdentiteVisuelleVintedPage | identite-visuelle-vinted | ⬜ | ⬜ | ⬜ |
| 14 | ErreursVentesVintedPage | erreurs-ventes-vinted | ⬜ | ⬜ | ⬜ |
| 15 | SuccessStoryMarie2025Page | success-story-marie-2025 | ⬜ | ⬜ | ⬜ |
| 16 | IAServiceModeRevolutionPage | ia-au-service-de-la-mode-notre-revolution | ⬜ | ⬜ | ⬜ |
| 17 | Temoignage300PourcentVuesPage | temoignage-300-pourcent-vues-une-semaine | ⬜ | ⬜ | ⬜ |

**Progression** : 9/17 articles traduits (27 traductions sur 51)

---

## Slugs Traduits par Article

| # | FR | EN | ES | IT |
|---|----|----|----|----|
| 1 | photo-porte-vinted | worn-photos-vinted | fotos-puestas-vinted | foto-indossate-vinted |
| 2 | mannequin-ia-vinted | ai-mannequin-vinted | maniqui-ia-vinted | manichino-ia-vinted |
| 3 | vinted-look-gratuit-alternative-pro | vinted-look-free-vs-pro-alternative | vinted-look-gratis-alternativa-pro | vinted-look-gratis-alternativa-pro |
| 4 | ia-photo-vinted-gratuit-vs-payant | ai-photo-vinted-free-vs-paid | ia-foto-vinted-gratis-vs-pago | ia-foto-vinted-gratis-vs-pagamento |
| 5 | algorithme-vinted-visibilite | vinted-algorithm-visibility-2025 | algoritmo-vinted-visibilidad-2025 | algoritmo-vinted-visibilita-2025 |
| 6 | guide-complet-photos-vinted-2025 | complete-guide-vinted-photos-2025 | guia-completa-fotos-vinted-2025 | guida-completa-foto-vinted-2025 |
| 7 | 5-astuces-pour-vendre-plus-vite-sur-vinted | 5-tips-sell-faster-vinted | 5-consejos-vender-rapido-vinted | 5-consigli-vendere-velocemente-vinted |
| 8 | strategie-vente-vinted-2025 | vinted-sales-strategy-2025 | estrategia-venta-vinted-2025 | strategia-vendita-vinted-2025 |
| 9 | comment-prendre-bonnes-photos-vinted | how-to-take-good-vinted-photos | como-tomar-buenas-fotos-vinted | come-fare-belle-foto-vinted |
| 10 | vintdress-vs-alternatives-comparatif-2025 | vintdress-vs-alternatives-comparison-2025 | vintdress-vs-alternativas-comparativa-2025 | vintdress-vs-alternative-confronto-2025 |
| 11 | tendances-mode-2025 | fashion-trends-2025 | tendencias-moda-2025 | tendenze-moda-2025 |
| 12 | vendre-vintage-vinted-guide | sell-vintage-vinted-guide | vender-vintage-vinted-guia | vendere-vintage-vinted-guida |
| 13 | identite-visuelle-vinted | visual-identity-vinted | identidad-visual-vinted | identita-visiva-vinted |
| 14 | erreurs-ventes-vinted | sales-mistakes-vinted | errores-ventas-vinted | errori-vendite-vinted |
| 15 | success-story-marie-2025 | success-story-marie-2025 | historia-exito-marie-2025 | storia-successo-marie-2025 |
| 16 | ia-au-service-de-la-mode-notre-revolution | ai-fashion-revolution | ia-servicio-moda-revolucion | ia-servizio-moda-rivoluzione |
| 17 | temoignage-300-pourcent-vues-une-semaine | testimonial-300-percent-views-one-week | testimonio-300-porciento-vistas-una-semana | testimonianza-300-percento-visualizzazioni-una-settimana |

---

## Processus de Traduction Complet

### Pour chaque article, suivre ces étapes dans l'ordre :

1. **Lire** l'article FR original complet
2. **Créer** le dossier de langue si inexistant (`en/`, `es/`, `it/`)
3. **Créer** le fichier TSX traduit avec :
   - Même structure que l'original
   - Contenu traduit
   - SEO adapté à la langue
   - Slug traduit
4. **Modifier** `src/App.tsx` :
   - Ajouter l'import lazy
   - Ajouter la route
5. **Modifier** `src/lib/articleTranslations.ts` :
   - Ajouter le mapping URL pour le changement de langue
6. **Modifier** `src/data/articles.ts` :
   - Ajouter les métadonnées traduites (title, excerpt, date, category)
7. **Modifier** `public/sitemap.xml` :
   - Ajouter les URLs avec hreflang
8. **Mettre à jour** ce guide (statut ✅)
9. **Commit et push** les changements

---

## Notes Importantes

- **Garder VintDress** tel quel (nom de marque)
- **Garder les URLs Vinted** originales si mentionnées
- **Adapter les exemples culturels** si nécessaire (noms, monnaies)
- **Conserver le ton** : professionnel mais accessible, tutoiement
- **SEO** : Utiliser des mots-clés naturels dans la langue cible
- **Dates** : Adapter le format selon la locale
  - FR : 29 Décembre 2025
  - EN : December 29, 2025
  - ES : 29 de diciembre de 2025
  - IT : 29 dicembre 2025

---

## Composants Partagés Internationalisés

Ces composants utilisent i18n et fonctionnent automatiquement :
- `ArticleNavigation` - Adapter les liens vers les articles de la même langue
- `useSEO` - Fonctionne avec n'importe quelle langue
- `BlogSection` - Affiche les titres/descriptions traduits via `getArticlesListByLanguage()`
- `BlogIndexPage` - Utilise les traductions i18n pour les boutons et titres
- `LanguageSelector` - Redirige vers l'article traduit lors du changement de langue

---

## Validation

Avant de marquer un article comme ✅ :
- [ ] Le fichier TSX compile sans erreur
- [ ] La route fonctionne (`/en/articles/...`, `/es/articles/...`, `/it/articles/...`)
- [ ] Le SEO est correctement configuré
- [ ] Tous les textes sont traduits
- [ ] Les liens internes pointent vers la bonne langue
- [ ] Le slug est cohérent avec la langue
- [ ] L'article apparaît dans le sitemap avec hreflang
- [ ] Le mapping URL est ajouté dans `articleTranslations.ts`
- [ ] Les métadonnées sont ajoutées dans `articles.ts`
- [ ] Le changement de langue fonctionne depuis le sélecteur
