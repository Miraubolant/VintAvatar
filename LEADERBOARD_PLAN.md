# Plan d'implémentation - Leaderboard Parrainage

## Objectif
Afficher un classement **mensuel** public des meilleurs parrains (Top 5) sur la page d'accueil, visible par tous les utilisateurs.

---

## 1. Analyse de la structure actuelle

### Table `affiliations` (Supabase)
```sql
- id: UUID
- referrer_id: UUID (celui qui parraine)
- referred_id: UUID (le parrainé)
- referral_code: VARCHAR(20)
- status: 'pending' | 'completed'
- bonus_granted: BOOLEAN
- created_at: TIMESTAMPTZ
- completed_at: TIMESTAMPTZ
```

### Problème RLS actuel
Les politiques RLS actuelles ne permettent qu'à un utilisateur de voir ses propres affiliations :
```sql
CREATE POLICY "Users can view own affiliations" ON public.affiliations
    FOR SELECT USING (
        auth.uid() = referrer_id OR
        auth.uid() = referred_id
    );
```

**Solution nécessaire** : Créer une fonction ou vue publique pour les stats agrégées du leaderboard.

---

## 2. Backend - Edge Function

### Créer `supabase/functions/get-leaderboard/index.ts`

**Déploiement via Supabase CLI :**
```bash
npx supabase functions deploy get-leaderboard
```

**Fonctionnalités :**
- Récupérer le Top 5 des parrains **du mois en cours**
- Joindre avec la table `profiles` pour récupérer le prénom
- Retourner : prénom + initiale du nom, nombre de parrainages
- Accessible sans authentification (données publiques anonymisées)

**Requête SQL (via service role) - MENSUEL :**
```sql
SELECT
    p.first_name,
    LEFT(p.last_name, 1) as last_initial,
    COUNT(a.id) as referral_count
FROM affiliations a
JOIN profiles p ON a.referrer_id = p.id
WHERE a.status = 'completed'
  AND a.completed_at >= date_trunc('month', CURRENT_DATE)
  AND a.completed_at < date_trunc('month', CURRENT_DATE) + INTERVAL '1 month'
GROUP BY a.referrer_id, p.first_name, p.last_name
ORDER BY referral_count DESC
LIMIT 5
```

**Format de réponse :**
```json
{
  "leaderboard": [
    { "name": "Marie L.", "count": 12 },
    { "name": "Thomas D.", "count": 8 },
    { "name": "Sophie M.", "count": 6 },
    { "name": "Lucas P.", "count": 5 },
    { "name": "Emma B.", "count": 4 }
  ],
  "month": "janvier 2026",
  "updatedAt": "2026-01-02T10:00:00Z"
}
```

---

## 3. Frontend - Composant React

### Créer `src/components/LeaderboardSection.tsx`

**Design Neo-Brutalism :**
- Carte blanche avec bordure noire et ombre
- Badges numérotés (1, 2, 3, 4, 5) avec couleurs différenciées :
  - 1er : Or/Jaune (`bg-yellow-400`)
  - 2ème : Argent/Gris (`bg-gray-300`)
  - 3ème : Bronze (`bg-orange-400`)
  - 4-5 : Mint (`bg-mint`)
- Icône trophée ou médaille
- Affichage : "Marie L. - 12 parrainages"
- **Titre indiquant le mois en cours**

**Logique du CTA :**
```tsx
const handleCTAClick = () => {
  if (!user) {
    // Utilisateur non connecté → Modal d'inscription/connexion
    setShowAuthModal(true);
  } else if (!hasActiveSubscription) {
    // Utilisateur connecté mais pas abonné → Modal abonnement
    setShowSubscriptionModal(true);
  } else {
    // Utilisateur abonné → Redirection vers page compte (onglet parrainage)
    navigate('/account?tab=affiliation');
  }
};
```

**États du composant :**
```tsx
- loading: boolean (chargement des données)
- leaderboard: Array (données du classement)
- showAuthModal: boolean (modal connexion Google)
- showSubscriptionModal: boolean (modal invitation à s'abonner)
```

**Visibilité :**
- Le leaderboard est **visible par tous** (connectés ou non)
- Seul le CTA change de comportement selon l'état de l'utilisateur

---

## 4. Modales

### Modal Connexion (showAuthModal)
- Réutiliser le même design que PricingSection
- Titre : "Connexion requise"
- Message : "Connecte-toi pour accéder à ton code de parrainage"
- Bouton Google OAuth

### Modal Abonnement (showSubscriptionModal)
- Titre : "Abonnement requis"
- Message : "Abonne-toi pour débloquer le système de parrainage et gagner des crédits gratuits !"
- Bouton : "Voir les offres" → scroll vers #tarifs

---

## 5. Traductions i18n

### Fichiers à créer :
- `src/locales/fr/leaderboard.json`
- `src/locales/en/leaderboard.json`
- `src/locales/es/leaderboard.json`
- `src/locales/it/leaderboard.json`

### Clés de traduction :
```json
{
  "title": {
    "line1": "TOP PARRAINS",
    "line2": "DU MOIS"
  },
  "subtitle": "Les meilleurs parrains de {month} !",
  "referrals": "parrainages",
  "empty": "Sois le premier à parrainer ce mois-ci !",
  "cta": {
    "title": "PARRAINE TES AMIS",
    "button": "VOIR MON CODE"
  },
  "authModal": {
    "title": "Connexion requise",
    "message": "Connecte-toi pour accéder à ton code de parrainage.",
    "button": "Se connecter avec Google"
  },
  "subscriptionModal": {
    "title": "Abonnement requis",
    "message": "Abonne-toi pour débloquer le système de parrainage et gagner des crédits gratuits !",
    "button": "Voir les offres"
  }
}
```

---

## 6. Intégration

### Modifier `src/App.tsx` ou page d'accueil
- Importer `LeaderboardSection`
- Placer après `TestimonialsSection`
- Avant `FAQSection`

### Ordre des sections sur la home :
1. HeroSection
2. BeforeAfterSection
3. PricingSection
4. TestimonialsSection
5. **LeaderboardSection** ← NOUVEAU
6. FAQSection
7. BlogSection
8. Footer

---

## 7. Sécurité et Performance

### Sécurité :
- Données anonymisées (prénom + initiale uniquement)
- Pas d'ID utilisateur exposé
- Edge Function avec service role (bypass RLS)

### Performance :
- Cache de la réponse (TTL: 5-10 minutes)
- Skeleton loader pendant le chargement

---

## 8. Fichiers à créer/modifier

| Action | Fichier |
|--------|---------|
| Créer | `supabase/functions/get-leaderboard/index.ts` |
| Créer | `src/components/LeaderboardSection.tsx` |
| Créer | `src/locales/fr/leaderboard.json` |
| Créer | `src/locales/en/leaderboard.json` |
| Créer | `src/locales/es/leaderboard.json` |
| Créer | `src/locales/it/leaderboard.json` |
| Modifier | `src/lib/i18n.ts` (ajouter namespace) |
| Modifier | `src/App.tsx` ou page home |
| Modifier | `CLAUDE.md` (documenter la nouvelle fonctionnalité) |

---

## 9. Résumé des comportements CTA

| État utilisateur | Action CTA |
|------------------|------------|
| Non connecté | Modal connexion Google |
| Connecté sans abonnement | Modal invitation abonnement |
| Connecté avec abonnement | Redirection `/account?tab=affiliation` |

---

## Estimation

- Backend (Edge Function + déploiement CLI) : ~30 min
- Frontend (Composant + Modales) : ~1h
- Traductions (4 langues) : ~15 min
- Intégration + Tests : ~30 min

**Total : ~2h15**

---

## 10. Commandes de déploiement

```bash
# Déployer l'Edge Function
npx supabase functions deploy get-leaderboard

# Build frontend
npm run build

# Push sur Git
git add -A && git commit -m "Add leaderboard section" && git push
```

---

## 11. Mise à jour CLAUDE.md

Ajouter dans la documentation :

### Section "Key Components Structure"
- `LeaderboardSection.tsx` - Classement mensuel des meilleurs parrains avec modales conditionnelles

### Section "Key Features"
- **Leaderboard parrainage** - Classement mensuel public Top 5 des parrains avec CTA conditionnel (auth/subscription/account)

### Section "Supabase Edge Functions"
- `get-leaderboard` - API publique pour récupérer le Top 5 des parrains du mois (bypass RLS)
