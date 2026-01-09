# Script pour générer UN SEUL article
# Usage: .\scripts\generate-single-article.ps1 -ArticleNum 1

param(
    [Parameter(Mandatory=$true)]
    [ValidateRange(1,8)]
    [int]$ArticleNum
)

$projectPath = "c:\Users\victo\Desktop\Projet Dev\Porte Vinted"

$articles = @{
    1 = @{
        name = "Comment Vendre sur Vinted"
        prompt = "Crée l'article SEO complet selon SEO_ARTICLES_PLAN.md - Article 1 : Comment Vendre sur Vinted. Crée les 4 fichiers (FR/EN/ES/IT). Utilise PhotoPorteeVintedPage.tsx comme référence. NE MODIFIE PAS App.tsx, articles.ts ou sitemap.xml."
    }
    2 = @{
        name = "Photos & Présentation"
        prompt = "Crée l'article SEO complet selon SEO_ARTICLES_PLAN.md - Article 2 : Photos & Présentation. Crée les 4 fichiers (FR/EN/ES/IT). Utilise PhotoPorteeVintedPage.tsx comme référence. Ajoute des CTA VintDress. NE MODIFIE PAS App.tsx, articles.ts ou sitemap.xml."
    }
    3 = @{
        name = "Expédition & Livraison"
        prompt = "Crée l'article SEO complet selon SEO_ARTICLES_PLAN.md - Article 3 : Expédition & Livraison. Crée les 4 fichiers (FR/EN/ES/IT). Utilise PhotoPorteeVintedPage.tsx comme référence. NE MODIFIE PAS App.tsx, articles.ts ou sitemap.xml."
    }
    4 = @{
        name = "Paiement & Argent"
        prompt = "Crée l'article SEO complet selon SEO_ARTICLES_PLAN.md - Article 4 : Paiement & Argent. Crée les 4 fichiers (FR/EN/ES/IT). Utilise PhotoPorteeVintedPage.tsx comme référence. NE MODIFIE PAS App.tsx, articles.ts ou sitemap.xml."
    }
    5 = @{
        name = "Débuter sur Vinted"
        prompt = "Crée l'article SEO complet selon SEO_ARTICLES_PLAN.md - Article 5 : Débuter sur Vinted. Crée les 4 fichiers (FR/EN/ES/IT). Utilise PhotoPorteeVintedPage.tsx comme référence. NE MODIFIE PAS App.tsx, articles.ts ou sitemap.xml."
    }
    6 = @{
        name = "Acheter sur Vinted"
        prompt = "Crée l'article SEO complet selon SEO_ARTICLES_PLAN.md - Article 6 : Acheter sur Vinted. Crée les 4 fichiers (FR/EN/ES/IT). Utilise PhotoPorteeVintedPage.tsx comme référence. NE MODIFIE PAS App.tsx, articles.ts ou sitemap.xml."
    }
    7 = @{
        name = "Problèmes & Solutions"
        prompt = "Crée l'article SEO complet selon SEO_ARTICLES_PLAN.md - Article 7 : Problèmes & Solutions. Crée les 4 fichiers (FR/EN/ES/IT). Utilise PhotoPorteeVintedPage.tsx comme référence. NE MODIFIE PAS App.tsx, articles.ts ou sitemap.xml."
    }
    8 = @{
        name = "Optimiser ses Ventes"
        prompt = "Crée l'article SEO complet selon SEO_ARTICLES_PLAN.md - Article 8 : Optimiser ses Ventes. Crée les 4 fichiers (FR/EN/ES/IT). Utilise PhotoPorteeVintedPage.tsx comme référence. Ajoute des CTA VintDress. NE MODIFIE PAS App.tsx, articles.ts ou sitemap.xml."
    }
}

$article = $articles[$ArticleNum]

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  ARTICLE $ArticleNum : $($article.name)" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Set-Location $projectPath
claude $article.prompt
