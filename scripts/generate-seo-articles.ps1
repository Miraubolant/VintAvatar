# Script PowerShell pour generer les 8 articles SEO en parallele
# Usage: .\scripts\generate-seo-articles.ps1

$projectPath = "c:\Users\victo\Desktop\Projet Dev\Porte Vinted"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  GENERATION DES 8 ARTICLES SEO" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Ce script va creer 8 fichiers de prompts." -ForegroundColor Yellow
Write-Host "Ouvre 8 terminaux manuellement et execute:" -ForegroundColor Yellow
Write-Host ""

# Creer le dossier temp pour les prompts
$tempDir = "$projectPath\scripts\temp-prompts"
if (-not (Test-Path $tempDir)) {
    New-Item -ItemType Directory -Path $tempDir | Out-Null
}

# Article 1
@"
Cree l'article SEO complet selon SEO_ARTICLES_PLAN.md - Article 1 : Comment Vendre sur Vinted.

Fichiers a creer :
- src/pages/articles/CommentVendreSurVintedPage.tsx (FR)
- src/pages/articles/en/HowToSellOnVintedPage.tsx (EN)
- src/pages/articles/es/ComoVenderEnVintedPage.tsx (ES)
- src/pages/articles/it/ComeVendereSuVintedPage.tsx (IT)

Utilise la structure exacte des articles existants (voir PhotoPorteeVintedPage.tsx comme reference).
Inclus useSEO, ArticleNavigation, et le design neo-brutalism.
NE MODIFIE PAS App.tsx, articles.ts ou sitemap.xml.
"@ | Out-File -FilePath "$tempDir\article1.txt" -Encoding UTF8

# Article 2
@"
Cree l'article SEO complet selon SEO_ARTICLES_PLAN.md - Article 2 : Photos et Presentation.

Fichiers a creer :
- src/pages/articles/CommentFairePhotosVintedPage.tsx (FR)
- src/pages/articles/en/HowToTakeVintedPhotosPage.tsx (EN)
- src/pages/articles/es/ComoHacerFotosVintedPage.tsx (ES)
- src/pages/articles/it/ComeFareFotoVintedPage.tsx (IT)

Utilise la structure exacte des articles existants (voir PhotoPorteeVintedPage.tsx comme reference).
Inclus useSEO, ArticleNavigation, et le design neo-brutalism.
Ajoute des CTA forts vers VintDress pour les photos mannequin IA.
NE MODIFIE PAS App.tsx, articles.ts ou sitemap.xml.
"@ | Out-File -FilePath "$tempDir\article2.txt" -Encoding UTF8

# Article 3
@"
Cree l'article SEO complet selon SEO_ARTICLES_PLAN.md - Article 3 : Expedition et Livraison.

Fichiers a creer :
- src/pages/articles/ExpeditionVintedGuidePage.tsx (FR)
- src/pages/articles/en/VintedShippingGuidePage.tsx (EN)
- src/pages/articles/es/EnvioVintedGuiaPage.tsx (ES)
- src/pages/articles/it/SpedizioneVintedGuidaPage.tsx (IT)

Utilise la structure exacte des articles existants (voir PhotoPorteeVintedPage.tsx comme reference).
Inclus useSEO, ArticleNavigation, et le design neo-brutalism.
NE MODIFIE PAS App.tsx, articles.ts ou sitemap.xml.
"@ | Out-File -FilePath "$tempDir\article3.txt" -Encoding UTF8

# Article 4
@"
Cree l'article SEO complet selon SEO_ARTICLES_PLAN.md - Article 4 : Paiement et Argent.

Fichiers a creer :
- src/pages/articles/PaiementVintedGuidePage.tsx (FR)
- src/pages/articles/en/VintedPaymentGuidePage.tsx (EN)
- src/pages/articles/es/PagoVintedGuiaPage.tsx (ES)
- src/pages/articles/it/PagamentoVintedGuidaPage.tsx (IT)

Utilise la structure exacte des articles existants (voir PhotoPorteeVintedPage.tsx comme reference).
Inclus useSEO, ArticleNavigation, et le design neo-brutalism.
NE MODIFIE PAS App.tsx, articles.ts ou sitemap.xml.
"@ | Out-File -FilePath "$tempDir\article4.txt" -Encoding UTF8

# Article 5
@"
Cree l'article SEO complet selon SEO_ARTICLES_PLAN.md - Article 5 : Debuter sur Vinted.

Fichiers a creer :
- src/pages/articles/VintedCommentCaMarchePage.tsx (FR)
- src/pages/articles/en/HowDoesVintedWorkPage.tsx (EN)
- src/pages/articles/es/ComoFuncionaVintedPage.tsx (ES)
- src/pages/articles/it/ComeFunzionaVintedPage.tsx (IT)

Utilise la structure exacte des articles existants (voir PhotoPorteeVintedPage.tsx comme reference).
Inclus useSEO, ArticleNavigation, et le design neo-brutalism.
NE MODIFIE PAS App.tsx, articles.ts ou sitemap.xml.
"@ | Out-File -FilePath "$tempDir\article5.txt" -Encoding UTF8

# Article 6
@"
Cree l'article SEO complet selon SEO_ARTICLES_PLAN.md - Article 6 : Acheter sur Vinted.

Fichiers a creer :
- src/pages/articles/CommentAcheterSurVintedPage.tsx (FR)
- src/pages/articles/en/HowToBuyOnVintedPage.tsx (EN)
- src/pages/articles/es/ComoComprarEnVintedPage.tsx (ES)
- src/pages/articles/it/ComeComprareSuVintedPage.tsx (IT)

Utilise la structure exacte des articles existants (voir PhotoPorteeVintedPage.tsx comme reference).
Inclus useSEO, ArticleNavigation, et le design neo-brutalism.
NE MODIFIE PAS App.tsx, articles.ts ou sitemap.xml.
"@ | Out-File -FilePath "$tempDir\article6.txt" -Encoding UTF8

# Article 7
@"
Cree l'article SEO complet selon SEO_ARTICLES_PLAN.md - Article 7 : Problemes et Solutions.

Fichiers a creer :
- src/pages/articles/ProblemesVintedSolutionsPage.tsx (FR)
- src/pages/articles/en/VintedProblemsAndSolutionsPage.tsx (EN)
- src/pages/articles/es/ProblemasVintedSolucionesPage.tsx (ES)
- src/pages/articles/it/ProblemiVintedSoluzioniPage.tsx (IT)

Utilise la structure exacte des articles existants (voir PhotoPorteeVintedPage.tsx comme reference).
Inclus useSEO, ArticleNavigation, et le design neo-brutalism.
NE MODIFIE PAS App.tsx, articles.ts ou sitemap.xml.
"@ | Out-File -FilePath "$tempDir\article7.txt" -Encoding UTF8

# Article 8
@"
Cree l'article SEO complet selon SEO_ARTICLES_PLAN.md - Article 8 : Optimiser ses Ventes.

Fichiers a creer :
- src/pages/articles/OptimiserVentesVintedPage.tsx (FR)
- src/pages/articles/en/OptimizeVintedSalesPage.tsx (EN)
- src/pages/articles/es/OptimizarVentasVintedPage.tsx (ES)
- src/pages/articles/it/OttimizzareVenditeVintedPage.tsx (IT)

Utilise la structure exacte des articles existants (voir PhotoPorteeVintedPage.tsx comme reference).
Inclus useSEO, ArticleNavigation, et le design neo-brutalism.
Ajoute des CTA forts vers VintDress.
NE MODIFIE PAS App.tsx, articles.ts ou sitemap.xml.
"@ | Out-File -FilePath "$tempDir\article8.txt" -Encoding UTF8

Write-Host "Fichiers de prompts crees dans: $tempDir" -ForegroundColor Green
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  COMMANDES A EXECUTER" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

for ($i = 1; $i -le 8; $i++) {
    Write-Host "Terminal $i :" -ForegroundColor Yellow
    Write-Host "  cd `"$projectPath`"" -ForegroundColor White
    Write-Host "  Get-Content `".\scripts\temp-prompts\article$i.txt`" | claude" -ForegroundColor White
    Write-Host ""
}

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  OU COPIE-COLLE CES COMMANDES:" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

for ($i = 1; $i -le 8; $i++) {
    Write-Host "# Article $i" -ForegroundColor Gray
    Write-Host "Get-Content `".\scripts\temp-prompts\article$i.txt`" | claude" -ForegroundColor Cyan
    Write-Host ""
}
