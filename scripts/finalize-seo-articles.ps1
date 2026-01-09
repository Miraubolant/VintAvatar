# Script PowerShell Phase 2 : Finaliser les articles SEO
# À exécuter APRÈS que les 8 articles soient générés
# Usage: .\scripts\finalize-seo-articles.ps1

$projectPath = "c:\Users\victo\Desktop\Projet Dev\Porte Vinted"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  PHASE 2 : FINALISATION" -ForegroundColor Cyan
Write-Host "  Mise a jour des fichiers partages" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$finalizePrompt = @"
Les 8 articles SEO ont été créés. Mets à jour les fichiers partagés :

1. **src/App.tsx** - Ajoute les imports lazy et les routes pour les 8 articles (FR + EN + ES + IT = 32 routes)

2. **src/lib/articleTranslations.ts** - Ajoute les mappings URL pour les 8 articles

3. **src/data/articles.ts** - Ajoute les métadonnées des 8 articles + traductions

4. **public/sitemap.xml** - Ajoute les 32 URLs avec hreflang

Articles à intégrer :
- comment-vendre-sur-vinted (CommentVendreSurVintedPage)
- comment-faire-photos-vinted (CommentFairePhotosVintedPage)
- expedition-vinted-guide (ExpeditionVintedGuidePage)
- paiement-vinted-guide (PaiementVintedGuidePage)
- vinted-comment-ca-marche (VintedCommentCaMarchePage)
- comment-acheter-sur-vinted (CommentAcheterSurVintedPage)
- problemes-vinted-solutions (ProblemesVintedSolutionsPage)
- optimiser-ventes-vinted (OptimiserVentesVintedPage)

Réfère-toi à SEO_ARTICLES_PLAN.md pour les slugs traduits et les métadonnées.
Mets à jour le statut dans SEO_ARTICLES_PLAN.md une fois terminé.
"@

Write-Host "Lancement de la finalisation..." -ForegroundColor Green
Write-Host ""

# Lance Claude Code avec le prompt de finalisation
Set-Location $projectPath
claude $finalizePrompt

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  FINALISATION TERMINEE" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
