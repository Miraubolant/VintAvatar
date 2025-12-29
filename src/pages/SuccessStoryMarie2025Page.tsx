import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { ArrowLeft, TrendingUp, Calendar, DollarSign, Star, Target, Smartphone, Package, CheckCircle2, XCircle, Lightbulb, Award } from 'lucide-react';

export default function SuccessStoryMarie2025Page() {
  useSEO({
    title: "Success Story : Marie Gagne 3000€/Mois Avec Vinted | Témoignage Complet",
    description: "Marie gagne 3000€/mois avec Vinted grâce aux photos IA ! Découvre sa méthode complète et ses secrets de réussite.",
    keywords: "success story vinted, gagner argent vinted, business vinted, photos IA vinted, marie vinted avatar, témoignage vinted",
  });

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Image */}
      <div className="w-full h-[400px] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=400&fit=crop"
          alt="Success Story Marie"
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
            <span className="bg-yellow-200 px-4 py-2 border-2 border-black font-space-grotesk font-semibold">
              Success Story
            </span>
            <span className="font-space-grotesk">18 Novembre 2025</span>
            <span className="font-space-grotesk">12 min de lecture</span>
            <span className="font-space-grotesk font-semibold">Par Équipe VintedAvatar</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-space-grotesk font-bold mb-6 leading-tight">
            Success Story : Marie Gagne 3000€/Mois Avec Vinted
          </h1>

          <p className="text-xl text-gray-700 mb-8">
            Rencontre avec Marie, 28 ans, qui a révolutionné sa vie grâce à Vinted ! De simple vendeuse occasionnelle à entrepreneure mode générant 3000€ par mois, découvre son parcours inspirant.
          </p>

          {/* Stats Hero */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            <div className="bg-vinted text-white border-3 border-black p-6 text-center">
              <DollarSign className="w-8 h-8 mx-auto mb-2" />
              <div className="text-3xl font-space-grotesk font-bold mb-1">3000€</div>
              <div className="text-sm">par mois</div>
            </div>
            <div className="bg-mint border-3 border-black p-6 text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2" />
              <div className="text-3xl font-space-grotesk font-bold mb-1">120</div>
              <div className="text-sm">articles/mois</div>
            </div>
            <div className="bg-pink-pastel border-3 border-black p-6 text-center">
              <Star className="w-8 h-8 mx-auto mb-2" />
              <div className="text-3xl font-space-grotesk font-bold mb-1">5/5</div>
              <div className="text-sm">note vendeur</div>
            </div>
            <div className="bg-yellow-200 border-3 border-black p-6 text-center">
              <Award className="w-8 h-8 mx-auto mb-2" />
              <div className="text-3xl font-space-grotesk font-bold mb-1">3400</div>
              <div className="text-sm">followers</div>
            </div>
          </div>

          {/* Le Déclic */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Calendar className="w-8 h-8" />
              Le Déclic : Janvier 2024
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-red-50 border-3 border-red-500 p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  Avant : La Galère
                </h3>
                <ul className="space-y-2">
                  <li>• Employée à mi-temps dans une boutique</li>
                  <li>• Salaire : 1200€/mois</li>
                  <li>• Passion pour la mode frustrée</li>
                  <li>• Ventes Vinted sporadiques (50€/mois max)</li>
                </ul>
                <p className="mt-4 font-semibold text-red-700">
                  Le problème : Photos amateur, articles qui traînent des mois
                </p>
              </div>

              <div className="bg-green-50 border-3 border-green-500 p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Le Moment Révélateur
                </h3>
                <p className="italic mb-4">
                  "J'ai découvert VintedAvatar en scrollant sur Instagram. Au début, j'étais sceptique : des photos IA pour mes vêtements ? Mais j'avais tout essayé..."
                </p>
                <div className="bg-white border-2 border-green-500 p-4">
                  <p className="font-semibold mb-2">Premier test : Robe Zara</p>
                  <p className="text-sm">• Avant IA : 12 vues en 6 mois, 0 vente</p>
                  <p className="text-sm">• Après IA : Vendue en 48h à plein prix !</p>
                </div>
                <p className="mt-4 italic font-semibold text-green-700">
                  "Là j'ai compris que j'avais trouvé la solution !"
                </p>
              </div>
            </div>
          </div>

          {/* La Transformation */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              La Transformation : Février-Juin 2024
            </h2>

            <div className="space-y-6">
              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-4">
                  Mois 1-2 : L'Apprentissage
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold mb-2">Stratégie :</p>
                    <ul className="space-y-1 text-sm">
                      <li>1. Test sur 20 articles de son dressing</li>
                      <li>2. Photos IA pour tous les articles dormants</li>
                      <li>3. Réactivation de 50 anciennes annonces</li>
                    </ul>
                  </div>
                  <div className="bg-mint border-2 border-black p-4">
                    <p className="font-semibold mb-2">Résultats :</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Février : 340€ de ventes</li>
                      <li>• Mars : 580€ de ventes</li>
                      <li>• Taux de vente : x5 !</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-4">
                  Mois 3-4 : L'Accélération
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold mb-2">Actions :</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Sourcing actif en friperies</li>
                      <li>• 2-3h par jour dédiées à Vinted</li>
                      <li>• Spécialisation dans le vintage français</li>
                    </ul>
                  </div>
                  <div className="bg-pink-pastel border-2 border-black p-4">
                    <p className="font-semibold mb-2">Chiffres impressionnants :</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Avril : 920€ de ventes</li>
                      <li>• Mai : 1250€ de ventes</li>
                      <li>• Stock : 150 articles en rotation</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 italic text-gray-700">
                  "Les photos IA m'ont donné la confiance pour me prendre au sérieux. Mes articles avaient enfin l'air professionnel !"
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-4">
                  Mois 5-6 : La Professionnalisation
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold mb-2">Le tournant pro :</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Création d'un espace dédié chez elle</li>
                      <li>• Système de gestion des stocks</li>
                      <li>• Relation clientèle au top</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-200 border-2 border-black p-4">
                    <p className="font-semibold mb-2">Performance :</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Juin : 1680€ de ventes</li>
                      <li>• 95% de satisfaction client</li>
                      <li>• Taux de retour : 0,2%</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* L'Empire Marie : Aujourd'hui */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              L'Empire Marie : Aujourd'hui
            </h2>

            <div className="bg-vinted border-4 border-black p-8 mb-6">
              <h3 className="text-2xl font-space-grotesk font-bold text-white mb-6">
                Les Chiffres de Janvier 2025
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border-3 border-black p-4">
                  <p className="font-semibold mb-3">Performance mensuelle :</p>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Chiffre d'affaires :</span>
                      <span className="font-bold">4200€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Bénéfices nets :</span>
                      <span className="font-bold text-green-600">3000€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Articles vendus :</span>
                      <span className="font-bold">120/mois</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Panier moyen :</span>
                      <span className="font-bold">35€</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white border-3 border-black p-4">
                  <p className="font-semibold mb-3">Statistiques impressionnantes :</p>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Délai de vente moyen :</span>
                      <span className="font-bold">8 jours</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Taux de conversion :</span>
                      <span className="font-bold">24%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Note vendeur :</span>
                      <span className="font-bold">5/5 ⭐</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Followers Vinted :</span>
                      <span className="font-bold">3400</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Méthode MARIE */}
            <div className="bg-mint border-4 border-black p-8">
              <h3 className="text-2xl font-space-grotesk font-bold mb-6">
                Son Secret : La Méthode M.A.R.I.E
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-white border-2 border-black w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl">
                    M
                  </div>
                  <div>
                    <p className="font-bold">Marques ciblées</p>
                    <p className="text-sm text-gray-700">Se spécialiser pour devenir experte</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white border-2 border-black w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl">
                    A
                  </div>
                  <div>
                    <p className="font-bold">IA pour toutes les photos</p>
                    <p className="text-sm text-gray-700">Consistency et professionnalisme</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white border-2 border-black w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl">
                    R
                  </div>
                  <div>
                    <p className="font-bold">Relation client premium</p>
                    <p className="text-sm text-gray-700">Différenciation par le service</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white border-2 border-black w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl">
                    I
                  </div>
                  <div>
                    <p className="font-bold">Inventory optimisé</p>
                    <p className="text-sm text-gray-700">Rotation rapide du stock</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white border-2 border-black w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl">
                    E
                  </div>
                  <div>
                    <p className="font-bold">Évolution constante</p>
                    <p className="text-sm text-gray-700">Test & learn en permanence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interview Exclusive */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Interview Exclusive avec Marie
            </h2>

            <div className="space-y-6">
              <div className="bg-white border-3 border-black p-6">
                <p className="font-space-grotesk font-bold text-lg mb-3">
                  Q : Quel a été ton plus gros challenge ?
                </p>
                <p className="italic text-gray-700">
                  "Au début, j'avais honte d'utiliser l'IA. Je me disais que c'était 'tricher'. Puis j'ai réalisé que c'était juste un outil, comme un bon éclairage ou un bel arrière-plan. Ce qui compte, c'est la qualité du vêtement et le service client !"
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <p className="font-space-grotesk font-bold text-lg mb-3">
                  Q : Combien de temps tu y consacres ?
                </p>
                <p className="italic text-gray-700">
                  "4-5h par jour maintenant, mais c'est devenu ma passion ! Le matin je gère les commandes et les messages, l'après-midi je photographie et je liste. C'est très structuré."
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <p className="font-space-grotesk font-bold text-lg mb-3">
                  Q : Tes conseils sourcing ?
                </p>
                <p className="italic text-gray-700">
                  "Je me suis spécialisée dans le vintage français des années 80-90. Je connais mes marques par cœur : Kenzo, Thierry Mugler, Claude Montana... Je fais le tour des friperies chaque semaine avec une liste précise."
                </p>
              </div>

              <div className="bg-vinted border-3 border-black p-6">
                <p className="font-space-grotesk font-bold text-lg mb-3 text-white">
                  Q : L'impact de l'IA sur tes ventes ?
                </p>
                <p className="italic text-white font-semibold">
                  "Révolutionnaire ! Mes articles avec photos IA se vendent 300% plus vite et 40% plus cher. Les acheteurs voient immédiatement comment le vêtement tombe, ils sont rassurés."
                </p>
              </div>
            </div>
          </div>

          {/* Sa Routine Gagnante */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Calendar className="w-8 h-8" />
              Sa Routine Gagnante
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-pink-pastel border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  Lundi : SOURCING DAY
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>8h-12h</strong> : Tour des friperies</li>
                  <li>• <strong>14h-16h</strong> : Tri et nettoyage des pièces</li>
                  <li>• <strong>16h-18h</strong> : Recherche prix et concurrence</li>
                </ul>
              </div>

              <div className="bg-mint border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  Mardi-Mercredi : PRODUCTION
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>9h-12h</strong> : Photos IA et listing</li>
                  <li>• <strong>14h-17h</strong> : Gestion commandes et SAV</li>
                  <li>• <strong>17h-18h</strong> : Community management</li>
                </ul>
              </div>

              <div className="bg-yellow-200 border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  Jeudi : STRATÉGIE
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Analyse des performances</li>
                  <li>• Planification semaine suivante</li>
                  <li>• Recherche nouvelles opportunités</li>
                </ul>
              </div>

              <div className="bg-vinted text-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  Vendredi : EXPÉDITIONS
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Préparation de tous les colis</li>
                  <li>• Passage à la Poste</li>
                  <li>• Suivi satisfaction client</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Ses Outils Indispensables */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Smartphone className="w-8 h-8" />
              Ses Outils Indispensables
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  Setup Technique
                </h3>
                <ul className="space-y-2">
                  <li>• Smartphone iPhone 13 Pro</li>
                  <li>• VintedAvatar pour les photos IA</li>
                  <li>• Excel pour la gestion des stocks</li>
                  <li>• Étiquettes personnalisées premium</li>
                </ul>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4 flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Organisation
                </h3>
                <ul className="space-y-2">
                  <li>• Portants par catégorie/saison</li>
                  <li>• Système de tags couleur</li>
                  <li>• Espace emballage optimisé</li>
                  <li>• Stock de packaging qualitatif</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Les Erreurs Évitées */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Les Erreurs qu'Elle a Évitées
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 border-3 border-red-500 p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  Erreurs Classiques des Débutants
                </h3>
                <ul className="space-y-2">
                  <li>• Vendre trop cheap par manque de confiance</li>
                  <li>• Photos floues ou mal cadrées</li>
                  <li>• Descriptions bâclées</li>
                  <li>• Pas de suivi client</li>
                </ul>
              </div>

              <div className="bg-green-50 border-3 border-green-500 p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Ce Qui Fait la Différence
                </h3>
                <ul className="space-y-2">
                  <li>• <strong>Pricing</strong> juste et assumé</li>
                  <li>• <strong>Photos</strong> pro systématiques</li>
                  <li>• <strong>Descriptions</strong> détaillées et honnêtes</li>
                  <li>• <strong>Service</strong> client irréprochable</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Ses Astuces Secrètes */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Lightbulb className="w-8 h-8" />
              Ses Astuces Secrètes
            </h2>

            <div className="space-y-4">
              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold mb-2">
                  Technique #1 : Le Bundle Strategy
                </h3>
                <p className="italic text-gray-700">
                  "Je propose souvent des bundles à mes clients réguliers. Un top + une jupe avec 15% de remise. Ça augmente le panier moyen et fidélise !"
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold mb-2">
                  Technique #2 : La Saisonnalité
                </h3>
                <p className="italic text-gray-700">
                  "Je prépare toujours la saison d'après. En janvier, j'achète déjà du printemps-été. Quand tout le monde cherche, moi je suis prête !"
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold mb-2">
                  Technique #3 : L'Exclusivité
                </h3>
                <p className="italic text-gray-700">
                  "Mes meilleures pièces, je les propose d'abord à ma communauté VIP par message privé. Elles se sentent privilégiées et achètent plus !"
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold mb-2">
                  Technique #4 : La Réactivité
                </h3>
                <p className="italic text-gray-700">
                  "Je réponds aux messages dans l'heure. Sur Vinted, la rapidité fait la différence. Un client qui attend, c'est un client qui va voir ailleurs."
                </p>
              </div>
            </div>
          </div>

          {/* L'Impact sur Sa Vie */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              L'Impact sur Sa Vie
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 border-3 border-green-500 p-6">
                <h3 className="font-space-grotesk font-bold mb-2">
                  Liberté Financière
                </h3>
                <p className="italic text-sm text-gray-700">
                  "Pour la première fois, je n'ai plus de stress d'argent. Je gagne plus qu'en boutique, avec la liberté en plus !"
                </p>
              </div>

              <div className="bg-pink-pastel border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold mb-2">
                  Épanouissement Personnel
                </h3>
                <p className="italic text-sm text-gray-700">
                  "Chaque vente est une petite victoire. J'ai développé un œil pour la mode, je comprends les tendances, c'est passionnant !"
                </p>
              </div>

              <div className="bg-mint border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold mb-2">
                  Reconnaissance
                </h3>
                <p className="italic text-sm text-gray-700">
                  "Ma famille ne comprenait pas au début. Maintenant ils sont fiers ! Mon copain me dit que je suis une vraie entrepreneure."
                </p>
              </div>
            </div>
          </div>

          {/* Ses Projets 2025 */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Target className="w-8 h-8" />
              Ses Projets 2025
            </h2>

            <div className="bg-yellow-200 border-4 border-black p-8">
              <h3 className="font-space-grotesk font-bold text-xl mb-4">
                Objectifs Ambitieux
              </h3>
              <ul className="space-y-2 mb-6">
                <li>• <strong>5000€/mois</strong> d'ici fin 2025</li>
                <li>• <strong>Diversification</strong> sur d'autres plateformes</li>
                <li>• <strong>Formation</strong> pour aider d'autres vendeuses</li>
                <li>• <strong>Peut-être</strong> sa propre boutique physique</li>
              </ul>
              <p className="italic text-gray-700">
                "Je réfléchis à proposer mes services de sourcing à d'autres vendeuses. Et pourquoi pas créer ma propre marque vintage revisitée ?"
              </p>
            </div>
          </div>

          {/* Ce Que Tu Peux Apprendre */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Ce Que Tu Peux Apprendre de Marie
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  Les Fondamentaux
                </h3>
                <ol className="space-y-2">
                  <li>1. <strong>Qualité</strong> avant quantité</li>
                  <li>2. <strong>Consistance</strong> dans l'effort</li>
                  <li>3. <strong>Spécialisation</strong> plutôt que dispersion</li>
                  <li>4. <strong>Service</strong> client premium</li>
                </ol>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  Les Outils Indispensables
                </h3>
                <ul className="space-y-2">
                  <li>• Photos IA pour la pro attitude</li>
                  <li>• Organisation rigoureuse</li>
                  <li>• Relation client soignée</li>
                  <li>• Veille concurrentielle</li>
                </ul>
              </div>
            </div>

            <div className="bg-vinted border-3 border-black p-6 mt-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 text-white">
                Le Mindset Gagnant
              </h3>
              <p className="italic text-white font-semibold">
                "Voir grand mais commencer petit. Chaque vente compte, chaque client est important. Et surtout : oser utiliser tous les outils disponibles !"
              </p>
            </div>
          </div>

          {/* Ton Tour Maintenant */}
          <div className="bg-mint border-4 border-black p-8 mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Ton Tour Maintenant !
            </h2>

            <h3 className="font-space-grotesk font-bold text-xl mb-4">
              Si Marie a Réussi, Pourquoi Pas Toi ?
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <p className="font-semibold mb-2">Les ingrédients du succès :</p>
                <ul className="space-y-1">
                  <li>• Passion pour la mode ✓</li>
                  <li>• Volonté d'apprendre ✓</li>
                  <li>• Outils professionnels ✓</li>
                  <li>• Persévérance ✓</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Par Où Commencer ?</p>
                <ol className="space-y-1">
                  <li>1. <strong>Tester</strong> l'IA sur 10 articles</li>
                  <li>2. <strong>Analyser</strong> les résultats</li>
                  <li>3. <strong>Optimiser</strong> et recommencer</li>
                  <li>4. <strong>Scaler</strong> progressivement</li>
                </ol>
              </div>
            </div>

            <p className="italic text-lg mb-6">
              "Le plus dur, c'est de commencer. Après, les résultats parlent d'eux-mêmes !" - Marie
            </p>

            <Link
              to="/"
              className="inline-block bg-vinted text-white px-8 py-4 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all font-space-grotesk font-bold text-lg"
            >
              Lance-toi Maintenant !
            </Link>
          </div>

          {/* Disclaimer */}
          <div className="bg-gray-100 border-2 border-gray-400 p-4 mb-8">
            <p className="text-xs text-gray-600 italic">
              Marie utilise VintedAvatar depuis plus d'un an. Résultats non garantis, variables selon l'investissement personnel.
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {["Success Story", "Témoignage", "Vinted", "Business", "2025", "Entrepreneur"].map((tag) => (
              <span
                key={tag}
                className="bg-yellow-200 px-4 py-2 border-2 border-black font-space-grotesk font-semibold text-sm"
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
              to="/blog/strategie-vente-vinted-2025"
              className="border-3 border-black p-4 hover:bg-mint transition-colors"
            >
              <h3 className="font-space-grotesk font-bold mb-2">
                Stratégie de Vente Vinted 2025
              </h3>
              <p className="text-sm text-gray-600">
                Les meilleures techniques pour maximiser tes ventes
              </p>
            </Link>
            <Link
              to="/blog/erreurs-ventes-vinted"
              className="border-3 border-black p-4 hover:bg-mint transition-colors"
            >
              <h3 className="font-space-grotesk font-bold mb-2">
                10 Erreurs qui Tuent tes Ventes Vinted
              </h3>
              <p className="text-sm text-gray-600">
                Évite ces erreurs pour booster tes résultats
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
