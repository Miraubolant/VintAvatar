# Plan SEO Articles Vinted - Questions Haloscan

Ce document détaille les 8 articles SEO à créer pour répondre aux questions les plus recherchées sur Vinted (source : Haloscan - 20 634 mots-clés).

---

## Structure Technique des Articles

### Fichiers à créer pour chaque article

| # | Fichier | Action |
|---|---------|--------|
| 1 | `src/pages/articles/[ArticleName]Page.tsx` | Créer - Article FR |
| 2 | `src/pages/articles/en/[ArticleName]Page.tsx` | Créer - Article EN |
| 3 | `src/pages/articles/es/[ArticleName]Page.tsx` | Créer - Article ES |
| 4 | `src/pages/articles/it/[ArticleName]Page.tsx` | Créer - Article IT |
| 5 | `src/App.tsx` | Modifier - Import lazy + Routes (x4) |
| 6 | `src/lib/articleTranslations.ts` | Modifier - Mapping URLs |
| 7 | `src/data/articles.ts` | Modifier - Métadonnées + traductions |
| 8 | `public/sitemap.xml` | Modifier - URLs + hreflang |

### Convention de nommage

- **Fichier** : `CommentVendreSurVintedPage.tsx`
- **Slug FR** : `comment-vendre-sur-vinted`
- **Slug EN** : `how-to-sell-on-vinted`
- **Slug ES** : `como-vender-en-vinted`
- **Slug IT** : `come-vendere-su-vinted`

---

## Article 1 : Guide Complet Vendeur

### Métadonnées

| Champ | FR | EN | ES | IT |
|-------|----|----|----|----|
| **Fichier** | `CommentVendreSurVintedPage.tsx` | `en/HowToSellOnVintedPage.tsx` | `es/ComoVenderEnVintedPage.tsx` | `it/ComeVendereSuVintedPage.tsx` |
| **Slug** | `comment-vendre-sur-vinted` | `how-to-sell-on-vinted` | `como-vender-en-vinted` | `come-vendere-su-vinted` |
| **Title** | Comment Vendre sur Vinted : Guide Complet 2026 | How to Sell on Vinted: Complete Guide 2026 | Cómo Vender en Vinted: Guía Completa 2026 | Come Vendere su Vinted: Guida Completa 2026 |
| **Category** | Guide | Guide | Guía | Guida |
| **ReadTime** | 12 min | 12 min | 12 min | 12 min |
| **Tags** | vendre vinted, annonce vinted, débutant vinted | sell vinted, vinted listing, vinted beginner | vender vinted, anuncio vinted, principiante vinted | vendere vinted, annuncio vinted, principiante vinted |

### Questions couvertes (Haloscan)

- Comment vendre sur Vinted ?
- Comment mettre un article en vente sur Vinted ?
- Comment vendre un lot de vêtements ?
- Qu'est-ce qui se vend le mieux sur Vinted ?
- Comment faire pour vendre plus vite sur Vinted ?
- Pourquoi mes articles ne se vendent pas ?

### Structure de l'article

```
1. Introduction
   - Hook : "Tu veux vendre sur Vinted mais tu ne sais pas par où commencer ?"
   - Stats : X millions d'utilisateurs, opportunité marché

2. Créer une annonce qui vend
   - Titre optimisé (mots-clés, marque, taille)
   - Description efficace (état, mesures, défauts)
   - Catégorisation correcte

3. Photographier ses vêtements comme un pro
   - Lumière naturelle
   - Fond neutre
   - Plusieurs angles
   - → CTA VintDress : "Passe au niveau supérieur avec des photos sur mannequin IA"

4. Fixer le bon prix
   - Analyser la concurrence
   - Marge de négociation
   - Prix psychologiques

5. Vendre des lots : la stratégie gagnante
   - Comment créer un lot attractif
   - Pricing des lots
   - Quand proposer un lot

6. Ce qui se vend le mieux sur Vinted
   - Top marques recherchées
   - Catégories rentables
   - Tendances saisonnières

7. Pourquoi tes articles ne se vendent pas
   - Checklist diagnostic
   - Erreurs courantes
   - Solutions rapides

8. Conclusion + CTA
   - Résumé des points clés
   - CTA VintDress pour booster ses ventes
```

### Maillage interne

- Lien vers : Article 2 (Photos), Article 8 (Optimiser)
- Reçoit liens de : Article 5 (Débuter)

---

## Article 2 : Photos & Présentation

### Métadonnées

| Champ | FR | EN | ES | IT |
|-------|----|----|----|----|
| **Fichier** | `CommentFairePhotosVintedPage.tsx` | `en/HowToTakeVintedPhotosPage.tsx` | `es/ComoHacerFotosVintedPage.tsx` | `it/ComeFareFotoVintedPage.tsx` |
| **Slug** | `comment-faire-photos-vinted` | `how-to-take-vinted-photos` | `como-hacer-fotos-vinted` | `come-fare-foto-vinted` |
| **Title** | Comment Faire de Belles Photos Vinted en 2026 | How to Take Great Vinted Photos in 2026 | Cómo Hacer Buenas Fotos Vinted en 2026 | Come Fare Belle Foto Vinted nel 2026 |
| **Category** | Conseils | Tips | Consejos | Consigli |
| **ReadTime** | 10 min | 10 min | 10 min | 10 min |
| **Tags** | photos vinted, présentation vinted, mannequin IA | vinted photos, vinted presentation, AI mannequin | fotos vinted, presentación vinted, maniquí IA | foto vinted, presentazione vinted, manichino IA |

### Questions couvertes (Haloscan)

- Comment s'habiller pour vendre sur Vinted ?
- Comment prendre de belles photos pour Vinted ?
- Faut-il porter les vêtements sur les photos ?
- Comment présenter ses articles sur Vinted ?
- Photo à plat ou portée ?

### Structure de l'article

```
1. Introduction
   - L'importance cruciale des photos (stats conversion)
   - Pourquoi 90% des décisions d'achat sont visuelles

2. Les 3 méthodes de présentation
   - Photo à plat : avantages/inconvénients
   - Photo sur cintre : quand l'utiliser
   - Photo portée : le gold standard
   - Tableau comparatif des 3 méthodes

3. Équipement minimal requis
   - Smartphone suffisant (paramètres recommandés)
   - Éclairage (lumière naturelle vs ring light)
   - Fond (mur blanc, drap, carton)

4. Technique photo étape par étape
   - Préparer le vêtement (repassage, lint roller)
   - Angles obligatoires (face, dos, détails, étiquette)
   - Astuces cadrage

5. Photos portées : le game changer
   - Pourquoi ça convertit mieux (+300% vues)
   - Problème : pas de mannequin, pas le temps
   - → CTA VintDress : Solution mannequin IA en 30 secondes

6. Avant/Après : exemples concrets
   - 3 comparaisons visuelles (à plat vs portée)
   - Impact sur les vues et ventes

7. Erreurs à éviter absolument
   - Mauvaise lumière
   - Arrière-plan encombré
   - Photos floues
   - Pas assez de photos

8. Conclusion + CTA fort
   - Checklist récapitulative
   - CTA VintDress avec offre
```

### Maillage interne

- Lien vers : Article existant (PhotoPorteeVintedPage), Article existant (CommentPrendrePhotoVintedPage)
- Reçoit liens de : Article 1 (Vendre), Article 8 (Optimiser)

---

## Article 3 : Expédition & Livraison

### Métadonnées

| Champ | FR | EN | ES | IT |
|-------|----|----|----|----|
| **Fichier** | `ExpeditionVintedGuidePage.tsx` | `en/VintedShippingGuidePage.tsx` | `es/EnvioVintedGuiaPage.tsx` | `it/SpedizioneVintedGuidaPage.tsx` |
| **Slug** | `expedition-vinted-guide` | `vinted-shipping-guide` | `envio-vinted-guia` | `spedizione-vinted-guida` |
| **Title** | Expédition Vinted : Guide Complet Envoi de Colis 2026 | Vinted Shipping: Complete Parcel Guide 2026 | Envío Vinted: Guía Completa de Paquetes 2026 | Spedizione Vinted: Guida Completa Pacchi 2026 |
| **Category** | Guide | Guide | Guía | Guida |
| **ReadTime** | 8 min | 8 min | 8 min | 8 min |
| **Tags** | expédition vinted, envoi colis, frais port vinted | vinted shipping, parcel delivery, shipping costs | envío vinted, paquete, gastos envío | spedizione vinted, pacco, costi spedizione |

### Questions couvertes (Haloscan)

- Comment envoyer un colis Vinted ?
- Qui paye les frais de transport sur Vinted ?
- Quels sont les frais d'achat sur Vinted ?
- Vinted comment ça marche frais de port ?
- Comment vendre sur Vinted par la poste ?
- Comment se passe un achat sur Vinted ?
- Où déposer un colis Vinted ?

### Structure de l'article

```
1. Introduction
   - L'expédition : étape clé de la vente
   - Ce que tu vas apprendre

2. Options d'expédition disponibles
   - Mondial Relay (points relais)
   - Colissimo (La Poste)
   - Chronopost
   - Remise en main propre
   - Tableau comparatif (prix, délais, avantages)

3. Qui paye quoi ?
   - Frais de port : payés par l'acheteur
   - Protection Vinted : 5% + 0,70€
   - Ce que le vendeur reçoit réellement
   - Exemple concret avec calcul

4. Comment envoyer un colis étape par étape
   - L'acheteur achète → notification
   - Imprimer l'étiquette
   - Emballer le colis
   - Déposer au point relais/poste
   - Confirmer l'envoi

5. Bien emballer son colis
   - Matériaux recommandés
   - Protection contre l'humidité
   - Petit mot personnalisé (impact sur avis)

6. Points de dépôt : où déposer ?
   - Trouver un point relais proche
   - Horaires et astuces
   - La Poste vs Relais

7. Problèmes courants et solutions
   - Colis perdu
   - Colis endommagé
   - Litige avec l'acheteur
   - Retours

8. Remise en main propre
   - Avantages (pas de frais)
   - Précautions de sécurité
   - Comment organiser le RDV

9. Conclusion
   - Checklist avant envoi
   - Tips pour avis 5 étoiles
```

### Maillage interne

- Lien vers : Article 4 (Paiement), Article 7 (Problèmes)
- Reçoit liens de : Article 1 (Vendre)

---

## Article 4 : Paiement & Argent

### Métadonnées

| Champ | FR | EN | ES | IT |
|-------|----|----|----|----|
| **Fichier** | `PaiementVintedGuidePage.tsx` | `en/VintedPaymentGuidePage.tsx` | `es/PagoVintedGuiaPage.tsx` | `it/PagamentoVintedGuidaPage.tsx` |
| **Slug** | `paiement-vinted-guide` | `vinted-payment-guide` | `pago-vinted-guia` | `pagamento-vinted-guida` |
| **Title** | Paiement Vinted : Comment Recevoir et Retirer son Argent | Vinted Payment: How to Receive and Withdraw Money | Pago Vinted: Cómo Recibir y Retirar tu Dinero | Pagamento Vinted: Come Ricevere e Prelevare i Soldi |
| **Category** | Guide | Guide | Guía | Guida |
| **ReadTime** | 7 min | 7 min | 7 min | 7 min |
| **Tags** | paiement vinted, porte-monnaie vinted, retrait argent | vinted payment, vinted wallet, withdraw money | pago vinted, monedero vinted, retirar dinero | pagamento vinted, portafoglio vinted, prelevare soldi |

### Questions couvertes (Haloscan)

- Paiement Vinted comment ça marche ?
- Comment recevoir de l'argent sur Vinted ?
- Comment se passe le paiement sur Vinted ?
- Comment fonctionne le porte-monnaie Vinted ?
- Quels sont les moyens de paiement sur Vinted ?
- Comment retirer son argent sur Vinted ?
- Combien de temps pour recevoir l'argent ?

### Structure de l'article

```
1. Introduction
   - Le système de paiement Vinted expliqué simplement
   - Pourquoi Vinted utilise un porte-monnaie interne

2. Moyens de paiement acceptés (acheteur)
   - Carte bancaire
   - PayPal
   - Apple Pay / Google Pay
   - Paiement en plusieurs fois

3. Le porte-monnaie Vinted
   - Comment ça fonctionne
   - Où voir son solde
   - Historique des transactions

4. Cycle de vie d'un paiement
   - Achat → Argent bloqué
   - Expédition → En transit
   - Réception → Période de vérification (2 jours)
   - Validation → Argent disponible
   - Schéma visuel du cycle

5. Retirer son argent
   - Vers compte bancaire (IBAN)
   - Délais de virement (3-5 jours ouvrés)
   - Montant minimum
   - Étapes détaillées

6. Utiliser son solde directement
   - Acheter sur Vinted avec son solde
   - Combiner solde + carte

7. Commissions et frais
   - Ce que Vinted prend (0% vendeur)
   - Protection acheteur (5% + 0,70€)
   - Comparaison avec autres plateformes

8. Problèmes de paiement
   - Paiement refusé
   - Argent bloqué
   - Litige en cours
   - Contacter le support

9. Conclusion
   - FAQ récapitulative
   - Tips pour paiements fluides
```

### Maillage interne

- Lien vers : Article 3 (Expédition), Article 7 (Problèmes)
- Reçoit liens de : Article 5 (Débuter)

---

## Article 5 : Débuter sur Vinted

### Métadonnées

| Champ | FR | EN | ES | IT |
|-------|----|----|----|----|
| **Fichier** | `VintedCommentCaMarchePage.tsx` | `en/HowDoesVintedWorkPage.tsx` | `es/ComoFuncionaVintedPage.tsx` | `it/ComeFunzionaVintedPage.tsx` |
| **Slug** | `vinted-comment-ca-marche` | `how-does-vinted-work` | `como-funciona-vinted` | `come-funziona-vinted` |
| **Title** | Vinted : Comment ça Marche ? Guide Débutant 2026 | Vinted: How Does It Work? Beginner Guide 2026 | Vinted: ¿Cómo Funciona? Guía para Principiantes 2026 | Vinted: Come Funziona? Guida per Principianti 2026 |
| **Category** | Guide | Guide | Guía | Guida |
| **ReadTime** | 10 min | 10 min | 10 min | 10 min |
| **Tags** | vinted débutant, créer compte vinted, application vinted | vinted beginner, create vinted account, vinted app | vinted principiante, crear cuenta vinted, app vinted | vinted principiante, creare account vinted, app vinted |

### Questions couvertes (Haloscan)

- Vinted définition
- Application Vinted comment ça marche ?
- Est-ce que l'application Vinted est gratuite ?
- Comment créer un compte Vinted ?
- Comment se connecter à Vinted ?
- Comment fonctionne Vinted ?
- Est-ce que Vinted est fiable ?

### Structure de l'article

```
1. Introduction
   - Qu'est-ce que Vinted ? (définition simple)
   - Chiffres clés (utilisateurs, pays)
   - Pourquoi Vinted est devenu incontournable

2. Vinted est-il gratuit ?
   - Pour les vendeurs : 100% gratuit (0% commission)
   - Pour les acheteurs : protection acheteur payante
   - Comparaison avec Leboncoin, Vestiaire Collective

3. Créer son compte étape par étape
   - Télécharger l'app (iOS/Android)
   - Inscription email ou Google/Facebook/Apple
   - Compléter son profil
   - Vérification d'identité (optionnel mais recommandé)

4. L'interface Vinted expliquée
   - Fil d'actualité
   - Recherche et filtres
   - Messagerie
   - Mon dressing
   - Porte-monnaie

5. Comment ça marche pour vendre
   - Résumé du processus (lien vers Article 1)
   - Les 5 étapes clés
   - Combien peut-on gagner ?

6. Comment ça marche pour acheter
   - Trouver un article
   - Faire une offre / acheter direct
   - Paiement sécurisé
   - Réception et validation

7. Vinted est-il fiable ?
   - Protection acheteur
   - Évaluations et avis
   - Support client
   - Conseils anti-arnaques

8. Fonctionnalités avancées
   - Favoris et recherches sauvegardées
   - Notifications
   - Boost (promotion payante)
   - Lots et bundles

9. Conclusion
   - Vinted en résumé
   - Prochaines étapes (liens vers autres articles)
   - CTA VintDress pour les vendeurs
```

### Maillage interne

- Lien vers : Article 1 (Vendre), Article 6 (Acheter), Article 4 (Paiement)
- Reçoit liens de : Article 7 (Problèmes)

---

## Article 6 : Acheter sur Vinted

### Métadonnées

| Champ | FR | EN | ES | IT |
|-------|----|----|----|----|
| **Fichier** | `CommentAcheterSurVintedPage.tsx` | `en/HowToBuyOnVintedPage.tsx` | `es/ComoComprarEnVintedPage.tsx` | `it/ComeComprareSuVintedPage.tsx` |
| **Slug** | `comment-acheter-sur-vinted` | `how-to-buy-on-vinted` | `como-comprar-en-vinted` | `come-comprare-su-vinted` |
| **Title** | Comment Acheter sur Vinted : Guide Acheteur Complet | How to Buy on Vinted: Complete Buyer Guide | Cómo Comprar en Vinted: Guía Completa del Comprador | Come Comprare su Vinted: Guida Completa Acquirente |
| **Category** | Guide | Guide | Guía | Guida |
| **ReadTime** | 9 min | 9 min | 9 min | 9 min |
| **Tags** | acheter vinted, achat vinted, acheteur vinted | buy vinted, vinted purchase, vinted buyer | comprar vinted, compra vinted, comprador vinted | comprare vinted, acquisto vinted, acquirente vinted |

### Questions couvertes (Haloscan)

- Comment acheter sur Vinted ?
- Comment fonctionne Vinted pour acheter ?
- Comment acheter en main propre sur Vinted ?
- Pourquoi je n'arrive pas à acheter un article sur Vinted ?
- Comment faire une offre sur Vinted ?
- Est-ce que Vinted prend une commission sur les achats ?

### Structure de l'article

```
1. Introduction
   - Pourquoi acheter sur Vinted (économies, mode durable)
   - Ce que tu vas apprendre

2. Trouver le bon article
   - Utiliser les filtres efficacement
   - Recherche par marque, taille, état
   - Sauvegarder ses recherches
   - Suivre des vendeurs

3. Analyser une annonce
   - Vérifier les photos (qualité, détails)
   - Lire la description complète
   - Contrôler les mesures
   - État réel vs état déclaré

4. Vérifier le vendeur
   - Évaluations et commentaires
   - Nombre de ventes
   - Ancienneté du compte
   - Temps de réponse
   - Red flags à éviter

5. Faire une offre
   - Quand négocier vs acheter direct
   - Comment faire une offre respectueuse
   - Marge de négociation acceptable
   - Offres groupées (lots)

6. Processus d'achat
   - Acheter maintenant
   - Choisir la livraison
   - Paiement sécurisé
   - Confirmation et suivi

7. Achat en main propre
   - Avantages (pas de frais)
   - Comment proposer
   - Précautions de sécurité
   - Lieux recommandés

8. Réception et validation
   - Vérifier le colis
   - Délai de 2 jours pour valider
   - Que faire si problème
   - Laisser une évaluation

9. Protection acheteur
   - Ce qui est couvert
   - Comment ouvrir un litige
   - Remboursement

10. Problèmes courants
    - "Je n'arrive pas à acheter" (solutions)
    - Paiement refusé
    - Article non conforme

11. Conclusion
    - Checklist de l'acheteur malin
    - Tips pour bonnes affaires
```

### Maillage interne

- Lien vers : Article 4 (Paiement), Article 7 (Problèmes)
- Reçoit liens de : Article 5 (Débuter)

---

## Article 7 : Problèmes & Solutions

### Métadonnées

| Champ | FR | EN | ES | IT |
|-------|----|----|----|----|
| **Fichier** | `ProblemesVintedSolutionsPage.tsx` | `en/VintedProblemsAndSolutionsPage.tsx` | `es/ProblemasVintedSolucionesPage.tsx` | `it/ProblemiVintedSoluzioniPage.tsx` |
| **Slug** | `problemes-vinted-solutions` | `vinted-problems-solutions` | `problemas-vinted-soluciones` | `problemi-vinted-soluzioni` |
| **Title** | Problèmes Vinted : Solutions aux Questions Fréquentes 2026 | Vinted Problems: Solutions to Common Issues 2026 | Problemas Vinted: Soluciones a Preguntas Frecuentes 2026 | Problemi Vinted: Soluzioni alle Domande Frequenti 2026 |
| **Category** | FAQ | FAQ | FAQ | FAQ |
| **ReadTime** | 11 min | 11 min | 11 min | 11 min |
| **Tags** | problèmes vinted, aide vinted, support vinted | vinted problems, vinted help, vinted support | problemas vinted, ayuda vinted, soporte vinted | problemi vinted, aiuto vinted, supporto vinted |

### Questions couvertes (Haloscan)

- Pourquoi je n'arrive pas à me connecter à Vinted ?
- Est-ce que Vinted prend une commission ?
- Pourquoi Vinted supprime mes articles ?
- Comment annuler une vente sur Vinted ?
- Comment contacter Vinted ?
- Pourquoi mon compte Vinted est bloqué ?
- Comment récupérer mon compte Vinted ?

### Structure de l'article

```
1. Introduction
   - Les problèmes courants sur Vinted
   - Comment utiliser ce guide

2. Problèmes de connexion
   - "Je n'arrive pas à me connecter"
   - Mot de passe oublié
   - Compte bloqué temporairement
   - Vérification en 2 étapes

3. Compte bloqué ou suspendu
   - Raisons possibles (violation CGU)
   - Comment faire appel
   - Récupérer son compte
   - Prévenir les blocages

4. Articles supprimés
   - Pourquoi Vinted supprime des articles
   - Articles interdits sur Vinted
   - Contrefaçons et copies
   - Comment éviter la suppression

5. Problèmes de paiement
   - Paiement refusé
   - Argent bloqué
   - Porte-monnaie indisponible
   - Virement non reçu

6. Problèmes d'expédition
   - Colis perdu
   - Colis endommagé
   - Mauvaise adresse
   - Retour non reçu

7. Litiges acheteur/vendeur
   - Article non conforme
   - Article non reçu
   - Arnaque suspectée
   - Comment ouvrir un litige
   - Délais de résolution

8. Annuler une transaction
   - Annuler une vente (vendeur)
   - Annuler un achat (acheteur)
   - Impact sur le profil

9. Commissions et frais
   - Vinted prend-il une commission ? (Non pour vendeurs)
   - Détail des frais acheteur
   - Comparatif concurrents

10. Contacter le support Vinted
    - Via l'application
    - Formulaire web
    - Délais de réponse
    - Conseils pour être aidé rapidement

11. Conclusion
    - Ressources utiles
    - Centre d'aide Vinted
```

### Maillage interne

- Lien vers : Article 4 (Paiement), Article 3 (Expédition), Article 5 (Débuter)
- Reçoit liens de : Tous les articles

---

## Article 8 : Optimiser ses Ventes

### Métadonnées

| Champ | FR | EN | ES | IT |
|-------|----|----|----|----|
| **Fichier** | `OptimiserVentesVintedPage.tsx` | `en/OptimizeVintedSalesPage.tsx` | `es/OptimizarVentasVintedPage.tsx` | `it/OttimizzareVenditeVintedPage.tsx` |
| **Slug** | `optimiser-ventes-vinted` | `optimize-vinted-sales` | `optimizar-ventas-vinted` | `ottimizzare-vendite-vinted` |
| **Title** | Booster ses Ventes Vinted : Astuces Pro 2026 | Boost Your Vinted Sales: Pro Tips 2026 | Impulsar tus Ventas Vinted: Consejos Pro 2026 | Aumentare le Vendite Vinted: Consigli Pro 2026 |
| **Category** | Conseils | Tips | Consejos | Consigli |
| **ReadTime** | 10 min | 10 min | 10 min | 10 min |
| **Tags** | booster ventes vinted, optimiser vinted, astuces vinted | boost vinted sales, optimize vinted, vinted tips | impulsar ventas vinted, optimizar vinted, consejos vinted | aumentare vendite vinted, ottimizzare vinted, consigli vinted |

### Questions couvertes (Haloscan)

- Quel article se vend le mieux sur Vinted ?
- Comment faire pour vendre plus vite sur Vinted ?
- Marque qui revend bien ?
- Comment avoir plus de vues sur Vinted ?
- Prix moyen Vinted
- Comment rafraîchir ses annonces ?

### Structure de l'article

```
1. Introduction
   - Du vendeur amateur au vendeur pro
   - Ce qui différencie les top vendeurs

2. Articles les plus vendus sur Vinted
   - Top 10 catégories rentables
   - Marques les plus recherchées
   - Tendances saisonnières
   - Niches à exploiter

3. Stratégies de pricing avancées
   - Prix psychologiques
   - Analyser la concurrence
   - Quand baisser ses prix
   - Bundle pricing (lots)

4. Optimiser ses annonces
   - Titres qui attirent les clics
   - Descriptions optimisées SEO
   - Hashtags pertinents
   - Mise à jour régulière

5. Photos qui convertissent
   - L'impact prouvé des photos pro (+300% vues)
   - Photo portée vs photo à plat
   - → CTA VintDress : "Transforme tes vêtements en photos mannequin"
   - Avant/Après exemples

6. Algorithme Vinted : les secrets
   - Comment fonctionne le feed
   - "Bumper" ses annonces
   - Meilleurs moments pour publier
   - Activité régulière = visibilité

7. Fidéliser ses acheteurs
   - Communication rapide
   - Emballage soigné
   - Petit mot personnalisé
   - Obtenir des avis 5 étoiles

8. Outils et automatisation
   - VintDress pour les photos
   - Suivi des stats
   - Gestion multi-articles

9. Erreurs qui tuent tes ventes
   - Prix trop élevés
   - Photos médiocres
   - Descriptions vides
   - Non-réponse aux messages

10. Plan d'action 30 jours
    - Semaine 1 : Audit de ton dressing
    - Semaine 2 : Refaire les photos (VintDress)
    - Semaine 3 : Optimiser prix et descriptions
    - Semaine 4 : Analyse et ajustements

11. Conclusion + CTA
    - Résumé des actions prioritaires
    - CTA VintDress fort
```

### Maillage interne

- Lien vers : Article 1 (Vendre), Article 2 (Photos), Article existant (AlgorithmeVintedVisibilitePage)
- Reçoit liens de : Article 1 (Vendre)

---

## Priorité de Création

| Ordre | Article | Raison |
|-------|---------|--------|
| 1 | **Article 2** - Photos | Lien direct VintDress, CTA fort |
| 2 | **Article 8** - Optimiser | CTA VintDress, fort potentiel conversion |
| 3 | **Article 1** - Vendre | Volume de recherche élevé |
| 4 | **Article 5** - Débuter | Capture nouveaux utilisateurs |
| 5 | **Article 3** - Expédition | Question fréquente |
| 6 | **Article 4** - Paiement | Question fréquente |
| 7 | **Article 6** - Acheter | Complète le guide |
| 8 | **Article 7** - Problèmes | Support et rétention |

---

## Checklist par Article

- [ ] Créer fichier FR `src/pages/articles/[Nom]Page.tsx`
- [ ] Créer fichier EN `src/pages/articles/en/[Nom]Page.tsx`
- [ ] Créer fichier ES `src/pages/articles/es/[Nom]Page.tsx`
- [ ] Créer fichier IT `src/pages/articles/it/[Nom]Page.tsx`
- [ ] Ajouter imports lazy dans `App.tsx`
- [ ] Ajouter 4 routes dans `App.tsx`
- [ ] Ajouter mapping dans `articleTranslations.ts`
- [ ] Ajouter métadonnées FR + traductions dans `articles.ts`
- [ ] Ajouter 4 URLs dans `sitemap.xml` avec hreflang
- [ ] Mettre à jour ce fichier (statut ✅)

---

## Statut de Création

| # | Article | FR | EN | ES | IT |
|---|---------|----|----|----|----|
| 1 | Comment Vendre sur Vinted | ✅ | ✅ | ✅ | ✅ |
| 2 | Photos & Présentation | ⬜ | ⬜ | ⬜ | ⬜ |
| 3 | Expédition & Livraison | ⬜ | ⬜ | ⬜ | ⬜ |
| 4 | Paiement & Argent | ⬜ | ⬜ | ⬜ | ⬜ |
| 5 | Débuter sur Vinted | ⬜ | ⬜ | ⬜ | ⬜ |
| 6 | Acheter sur Vinted | ⬜ | ⬜ | ⬜ | ⬜ |
| 7 | Problèmes & Solutions | ⬜ | ⬜ | ⬜ | ⬜ |
| 8 | Optimiser ses Ventes | ⬜ | ⬜ | ⬜ | ⬜ |

**Progression** : 1/8 articles créés (4/32 traductions)

---

## Images Unsplash Suggérées

| Article | Image | URL |
|---------|-------|-----|
| 1 - Vendre | Rack de vêtements | `photo-1441986300917-64674bd600d8` |
| 2 - Photos | Setup photo | `photo-1516035069371-29a1b244cc32` |
| 3 - Expédition | Colis packaging | `photo-1566576721346-d4a3b4eaeb55` |
| 4 - Paiement | Paiement mobile | `photo-1563013544-824ae1b704d3` |
| 5 - Débuter | Smartphone app | `photo-1512941937669-90a1b58e7e9c` |
| 6 - Acheter | Shopping | `photo-1483985988355-763728e1935b` |
| 7 - Problèmes | Support/help | `photo-1521791136064-7986c2920216` |
| 8 - Optimiser | Success/growth | `photo-1460925895917-afdab827c52f` |
