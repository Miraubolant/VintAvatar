import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { ArrowLeft, AlertTriangle, Camera, Tag, FileText, MessageSquare, Images, Clock, Search, TrendingUp, User, CheckCircle2, XCircle } from 'lucide-react';

export default function ErreursVentesVintedPage() {
  useSEO({
    title: "10 Erreurs qui Tuent tes Ventes Vinted (et Comment les Éviter) | Guide Complet",
    description: "Découvre les erreurs les plus courantes qui font fuir les acheteurs et apprends à les corriger pour booster tes ventes !",
    keywords: "erreurs vinted, pourquoi ça ne vend pas vinted, améliorer ventes vinted, conseils vinted, booster vinted",
  });

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Image */}
      <div className="w-full h-[400px] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop"
          alt="Erreurs Vinted à éviter"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Article Container */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back Button */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-black hover:text-vinted transition-colors mb-8 font-space-grotesk font-semibold"
        >
          <ArrowLeft className="w-5 h-5" />
          Retour au blog
        </Link>

        {/* Article Header */}
        <article className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 lg:p-12 mb-12">
          <div className="flex items-center gap-4 text-sm mb-6 flex-wrap">
            <span className="bg-pink-pastel px-4 py-2 border-2 border-black font-space-grotesk font-semibold">
              Conseils
            </span>
            <span className="font-space-grotesk">25 Novembre 2025</span>
            <span className="font-space-grotesk">9 min de lecture</span>
            <span className="font-space-grotesk font-semibold">Par Thomas Bernard</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-space-grotesk font-bold mb-6 leading-tight">
            10 Erreurs qui Tuent tes Ventes Vinted (et Comment les Éviter)
          </h1>

          <p className="text-xl text-gray-700 mb-8">
            Tu publies des articles mais ils ne se vendent pas ? Tu n'es pas seul. Après avoir analysé des milliers de profils Vinted, voici les 10 erreurs fatales et comment les corriger.
          </p>

          {/* Erreur #1 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                1
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <Camera className="w-8 h-8" />
                  Photos de Mauvaise Qualité
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                Le Problème
              </h3>
              <p className="mb-4">
                C'est LA première cause d'échec sur Vinted. Une photo floue, sombre ou mal cadrée = article ignoré.
              </p>
              <div className="bg-white border-2 border-red-500 p-4">
                <p className="font-space-grotesk font-bold mb-2">Stats chocs :</p>
                <ul className="space-y-1">
                  <li>• 78% des acheteurs jugent sur la première photo</li>
                  <li>• Photos floues : -85% de clics</li>
                  <li>• Mauvais éclairage : -70% de conversions</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                La Solution
              </h3>
              <p className="font-semibold mb-2">Le game-changer : nos photos IA portées</p>
              <ul className="space-y-1 mb-3">
                <li>• Qualité professionnelle garantie</li>
                <li>• Éclairage studio parfait</li>
                <li>• Vêtement mis en valeur sur un mannequin</li>
              </ul>
              <p className="font-space-grotesk font-bold text-green-700">
                Résultat : +300% de vues en moyenne !
              </p>
            </div>
          </div>

          {/* Erreur #2 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                2
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8" />
                  Vêtement sur Cintre Basique
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                Le Problème
              </h3>
              <p className="mb-4">
                Un vêtement sur cintre, c'est... mort. L'acheteur ne peut pas imaginer comment il tombe, comment il lui irait.
              </p>
              <div className="bg-white border-2 border-red-500 p-4">
                <p className="font-space-grotesk font-bold mb-2">Comparaison :</p>
                <ul className="space-y-1">
                  <li>• Photo cintre : 2% de taux de conversion</li>
                  <li>• Photo portée : 12% de taux de conversion</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                La Solution
              </h3>
              <p>
                Utilise notre IA pour transformer chaque photo cintre en photo portée sublime. Les acheteurs visualisent instantanément le vêtement sur eux.
              </p>
            </div>
          </div>

          {/* Erreur #3 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                3
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <Tag className="w-8 h-8" />
                  Prix Irréalistes
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                Le Problème
              </h3>
              <p><strong>Trop cher :</strong> Personne n'achète, même avec négociation</p>
              <p><strong>Trop bas :</strong> Ça fait "suspect" ou "défaut caché"</p>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                La Solution
              </h3>
              <p className="font-semibold mb-2">La méthode des 5 vendus :</p>
              <ol className="space-y-1 mb-3">
                <li>1. Recherche 5 articles similaires VENDUS (pas en vente)</li>
                <li>2. Calcule la moyenne des prix</li>
                <li>3. Positionne-toi dans cette fourchette</li>
                <li>4. Ajuste selon l'état et la marque</li>
              </ol>
              <p className="font-space-grotesk font-bold text-green-700">
                Astuce psychologique : 19€ converti mieux que 20€
              </p>
            </div>
          </div>

          {/* Erreur #4 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                4
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <FileText className="w-8 h-8" />
                  Descriptions Vides ou Copiées
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                Le Problème
              </h3>
              <p className="mb-4">
                "Joli haut, taille M, bon état" = description inutile
              </p>
              <div className="bg-white border-2 border-red-500 p-4">
                <p className="font-space-grotesk font-bold mb-2">Ce que l'acheteur veut savoir :</p>
                <ul className="space-y-1">
                  <li>• Taille réelle et comment ça taille</li>
                  <li>• Matière et toucher</li>
                  <li>• Défauts éventuels</li>
                  <li>• Pourquoi tu le vends</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                La Solution : Template description complète
              </h3>
              <div className="bg-white border-2 border-green-500 p-4 font-mono text-sm">
                <p>[Type] [Marque] - [Caractéristique principale]</p>
                <p className="mt-2">Ce [vêtement] est [description émotionnelle].</p>
                <p>[Raison de vente]</p>
                <p className="mt-2">Détails :</p>
                <p>- Marque : [X]</p>
                <p>- Taille : [X] (taille [normalement/petit/grand])</p>
                <p>- Matière : [X]</p>
                <p>- État : [X] sur 10</p>
                <p>- Défauts : [aucun / liste honnêtement]</p>
                <p className="mt-2">Mesures prises à plat :</p>
                <p>- Longueur : X cm</p>
                <p>- Tour de poitrine : X cm</p>
                <p className="mt-2">Envoi soigné sous 48h !</p>
              </div>
            </div>
          </div>

          {/* Erreur #5 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                5
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <MessageSquare className="w-8 h-8" />
                  Ignorer les Messages
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                Le Problème
              </h3>
              <p className="mb-4">
                Tu réponds 3 jours après ? L'acheteur a déjà acheté ailleurs.
              </p>
              <div className="bg-white border-2 border-red-500 p-4">
                <p className="font-space-grotesk font-bold mb-2">Le timing compte :</p>
                <ul className="space-y-1">
                  <li>• Réponse &lt; 1h : 80% de conversion</li>
                  <li>• Réponse 1-24h : 40% de conversion</li>
                  <li>• Réponse &gt; 24h : 10% de conversion</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                La Solution
              </h3>
              <ul className="space-y-2">
                <li>• Active les notifications Vinted</li>
                <li>• Réponds même "Je vérifie et je reviens vers vous !"</li>
                <li>• Prépare des réponses types pour les questions fréquentes</li>
              </ul>
            </div>
          </div>

          {/* Erreur #6 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                6
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <Images className="w-8 h-8" />
                  Photos Uniques
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                Le Problème
              </h3>
              <p>
                Une seule photo = informations insuffisantes = pas d'achat
              </p>
              <p className="font-semibold mt-2">Minimum recommandé : 4-5 photos</p>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                La Solution : Le combo gagnant
              </h3>
              <ol className="space-y-2">
                <li>1. <strong>Photo IA portée</strong> : Vue d'ensemble attractive</li>
                <li>2. <strong>Photo détail</strong> : Tissu, texture, qualité</li>
                <li>3. <strong>Photo étiquette</strong> : Marque, taille, composition</li>
                <li>4. <strong>Photo défauts</strong> : Si applicable, transparence</li>
                <li>5. <strong>Photo supplémentaire</strong> : Autre angle ou détail</li>
              </ol>
            </div>
          </div>

          {/* Erreur #7 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                7
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <Clock className="w-8 h-8" />
                  Mauvais Timing de Publication
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                Le Problème
              </h3>
              <p>
                Publier à 3h du matin ou pendant les vacances = article noyé
              </p>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                La Solution : Meilleurs moments 2025
              </h3>
              <ul className="space-y-2 mb-4">
                <li>• <strong>Dimanche 18h-22h</strong> : Préparation de la semaine</li>
                <li>• <strong>Mardi/Mercredi 12h-14h</strong> : Pause déjeuner shopping</li>
                <li>• <strong>Jeudi 20h-22h</strong> : Fin de semaine approche</li>
              </ul>
              <p className="font-semibold text-red-700">À éviter :</p>
              <ul className="space-y-1">
                <li>• Vendredi soir et samedi (sorties)</li>
                <li>• Vacances scolaires</li>
                <li>• Jours fériés</li>
              </ul>
            </div>
          </div>

          {/* Erreur #8 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                8
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <Search className="w-8 h-8" />
                  Ignorer le SEO Vinted
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                Le Problème
              </h3>
              <p>
                Titre "Haut noir" = introuvable dans les recherches
              </p>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                La Solution : Optimise ton titre
              </h3>
              <div className="bg-white border-2 border-green-500 p-4 font-mono text-sm mb-4">
                <p>[Marque] [Type] [Caractéristique] [Taille] [État]</p>
                <p className="mt-2">Exemple : ZARA Top Dentelle Noir M Neuf</p>
              </div>
              <p className="font-semibold mb-2">Mots-clés stratégiques :</p>
              <ul className="space-y-1">
                <li>• Inclus la marque complète</li>
                <li>• Utilise des synonymes (haut, top, blouse)</li>
                <li>• Ajoute les tendances (cottagecore, Y2K, minimaliste)</li>
              </ul>
            </div>
          </div>

          {/* Erreur #9 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                9
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <TrendingUp className="w-8 h-8" />
                  Pas de Boost Stratégique
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                Le Problème
              </h3>
              <p>
                Tes articles sont enfouis sous des milliers d'autres
              </p>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                La Solution : Stratégie de boost intelligente
              </h3>
              <ul className="space-y-2 mb-3">
                <li>• Boost tes meilleures pièces le dimanche soir</li>
                <li>• Re-publie les articles sans vue après 2 semaines</li>
                <li>• Utilise les boosts gratuits quotidiens</li>
              </ul>
              <p className="font-space-grotesk font-bold text-green-700">
                Synergie avec photos IA : Booste EN PRIORITÉ les articles avec photos portées IA - meilleur ROI !
              </p>
            </div>
          </div>

          {/* Erreur #10 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                10
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <User className="w-8 h-8" />
                  Profil Négligé
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                Le Problème
              </h3>
              <p className="mb-4">
                Profil sans photo, sans description = zéro confiance
              </p>
              <div className="bg-white border-2 border-red-500 p-4">
                <p className="font-space-grotesk font-bold mb-2">Impact du profil :</p>
                <ul className="space-y-1">
                  <li>• Profil complet : +90% de confiance acheteur</li>
                  <li>• Évaluations visibles : +75% de conversion</li>
                  <li>• Description pro : +50% de followers</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                La Solution : Checklist profil parfait
              </h3>
              <ul className="space-y-2">
                <li>• Photo de profil claire et souriante</li>
                <li>• Description de 2-3 lignes (style, spécialité, engagement)</li>
                <li>• Réponse aux évaluations reçues</li>
                <li>• Régularité des publications</li>
              </ul>
            </div>
          </div>

          {/* Plan d'Action 48h */}
          <div className="bg-vinted border-4 border-black p-8 mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold text-white mb-6">
              Plan d'Action : Corriger en 48h
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-4">
                  Jour 1 (2h)
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-black mt-1 flex-shrink-0"></div>
                    <span>Refais tes 5 pires photos avec notre IA</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-black mt-1 flex-shrink-0"></div>
                    <span>Corrige les prix irréalistes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-black mt-1 flex-shrink-0"></div>
                    <span>Active les notifications</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-4">
                  Jour 2 (2h)
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-black mt-1 flex-shrink-0"></div>
                    <span>Réécris tes 5 pires descriptions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-black mt-1 flex-shrink-0"></div>
                    <span>Optimise ton profil</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-black mt-1 flex-shrink-0"></div>
                    <span>Planifie tes prochaines publications</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-200 border-3 border-black p-6 mt-6">
              <h3 className="font-space-grotesk font-bold text-xl mb-3">
                Résultats attendus
              </h3>
              <p className="mb-2">En corrigeant ces erreurs :</p>
              <ul className="space-y-1 font-semibold">
                <li>• +200% de vues minimum</li>
                <li>• +150% de messages</li>
                <li>• Ventes multipliées par 2 à 3</li>
              </ul>
            </div>
          </div>

          {/* Tableau Récapitulatif */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Le Récapitulatif
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-4 border-black">
                <thead>
                  <tr className="bg-pink-pastel border-b-4 border-black">
                    <th className="border-r-3 border-black p-4 text-left font-space-grotesk font-bold">
                      Erreur
                    </th>
                    <th className="border-r-3 border-black p-4 text-left font-space-grotesk font-bold">
                      Impact
                    </th>
                    <th className="p-4 text-left font-space-grotesk font-bold">
                      Solution Rapide
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4">Photos floues</td>
                    <td className="border-r-2 border-black p-4">-85% clics</td>
                    <td className="p-4 font-semibold">Photos IA portées</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4">Vêtement sur cintre</td>
                    <td className="border-r-2 border-black p-4">-80% conversion</td>
                    <td className="p-4 font-semibold">Photos IA portées</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4">Prix mal calibrés</td>
                    <td className="border-r-2 border-black p-4">Pas de vente</td>
                    <td className="p-4 font-semibold">Méthode 5 vendus</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4">Descriptions vides</td>
                    <td className="border-r-2 border-black p-4">Méfiance acheteur</td>
                    <td className="p-4 font-semibold">Template complet</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4">Réponses lentes</td>
                    <td className="border-r-2 border-black p-4">-90% conversion</td>
                    <td className="p-4 font-semibold">Notifications ON</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4">Photo unique</td>
                    <td className="border-r-2 border-black p-4">Manque d'infos</td>
                    <td className="p-4 font-semibold">4-5 photos minimum</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4">Mauvais timing</td>
                    <td className="border-r-2 border-black p-4">Article noyé</td>
                    <td className="p-4 font-semibold">Dimanche soir</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4">Pas de SEO</td>
                    <td className="border-r-2 border-black p-4">Introuvable</td>
                    <td className="p-4 font-semibold">Titre optimisé</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4">Pas de boost</td>
                    <td className="border-r-2 border-black p-4">Enterré</td>
                    <td className="p-4 font-semibold">Boost stratégique</td>
                  </tr>
                  <tr>
                    <td className="border-r-2 border-black p-4">Profil vide</td>
                    <td className="border-r-2 border-black p-4">Zéro confiance</td>
                    <td className="p-4 font-semibold">Profil complet</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-mint border-4 border-black p-8 mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-4">
              Conclusion
            </h2>
            <p className="text-lg mb-4">
              Ces 10 erreurs sont évitables. La bonne nouvelle ? Les corriger est simple et les résultats sont immédiats.
            </p>
            <p className="text-lg font-semibold mb-4">
              L'erreur #1 à corriger en priorité : Tes photos. Avec notre IA, tu transformes instantanément des photos moyennes en photos qui vendent.
            </p>
            <Link
              to="/"
              className="inline-block bg-vinted text-white px-8 py-4 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all font-space-grotesk font-bold text-lg"
            >
              Améliorer mes Photos Maintenant
            </Link>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {["Erreurs", "Conseils", "Vinted", "Optimisation", "Ventes"].map((tag) => (
              <span
                key={tag}
                className="bg-pink-pastel px-4 py-2 border-2 border-black font-space-grotesk font-semibold text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </article>

        {/* Related Articles */}
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
          <h2 className="text-2xl font-space-grotesk font-bold mb-6">
            Articles Connexes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/blog/comment-prendre-bonnes-photos-vinted"
              className="border-3 border-black p-4 hover:bg-pink-pastel transition-colors"
            >
              <h3 className="font-space-grotesk font-bold mb-2">
                Comment Prendre de Bonnes Photos pour Vinted
              </h3>
              <p className="text-sm text-gray-600">
                Guide complet pour des photos qui font vendre
              </p>
            </Link>
            <Link
              to="/blog/strategie-vente-vinted-2025"
              className="border-3 border-black p-4 hover:bg-pink-pastel transition-colors"
            >
              <h3 className="font-space-grotesk font-bold mb-2">
                Stratégie de Vente Vinted 2025
              </h3>
              <p className="text-sm text-gray-600">
                Les meilleures techniques pour maximiser tes ventes
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
