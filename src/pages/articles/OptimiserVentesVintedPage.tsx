import { useSEO } from '../../hooks/useSEO';
import { ArticleNavigation } from '../../components/ArticleNavigation';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Tag,
  Search,
  Camera,
  Zap,
  Heart,
  Star,
  Clock,
  CheckCircle,
  AlertTriangle,
  BarChart2,
  Target,
  Sparkles,
  ArrowRight,
  Calendar,
  Eye
} from 'lucide-react';

export default function OptimiserVentesVintedPage() {
  useSEO({
    title: 'Booster ses Ventes Vinted : Astuces Pro 2026',
    description: 'Découvre les astuces pro pour booster tes ventes sur Vinted : articles qui se vendent le mieux, stratégies de prix, photos qui convertissent et algorithme.',
    keywords: 'booster ventes vinted, optimiser vinted, astuces vinted, vendre plus vinted, algorithme vinted, photos vinted',
    canonicalUrl: 'https://vintdress.com/articles/optimiser-ventes-vinted',
    ogImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
  });

  return (
    <div className="min-h-screen bg-cream">
      <article className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-vinted text-white px-4 py-2 font-display font-bold text-sm border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              CONSEILS
            </span>
            <span className="text-gray-600 font-medium">10 min de lecture</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-black mb-6 leading-tight">
            Booster ses Ventes Vinted : Astuces Pro 2026
          </h1>

          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Tu vends sur Vinted mais tes articles restent en ligne pendant des semaines ?
            Découvre les stratégies des top vendeurs pour multiplier tes ventes et
            maximiser tes profits.
          </p>

          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop"
            alt="Optimiser ses ventes Vinted"
            className="w-full h-64 sm:h-80 lg:h-96 object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          />
        </header>

        {/* Table of contents */}
        <nav className="bg-white border-4 border-black p-6 mb-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-display font-bold text-xl mb-4">Dans cet article</h2>
          <ol className="space-y-2 text-gray-700">
            <li><a href="#articles-vendus" className="hover:text-vinted transition-colors">1. Articles les plus vendus sur Vinted</a></li>
            <li><a href="#pricing" className="hover:text-vinted transition-colors">2. Stratégies de pricing avancées</a></li>
            <li><a href="#annonces" className="hover:text-vinted transition-colors">3. Optimiser ses annonces</a></li>
            <li><a href="#photos" className="hover:text-vinted transition-colors">4. Photos qui convertissent</a></li>
            <li><a href="#algorithme" className="hover:text-vinted transition-colors">5. Algorithme Vinted : les secrets</a></li>
            <li><a href="#fideliser" className="hover:text-vinted transition-colors">6. Fidéliser ses acheteurs</a></li>
            <li><a href="#erreurs" className="hover:text-vinted transition-colors">7. Erreurs qui tuent tes ventes</a></li>
            <li><a href="#plan-action" className="hover:text-vinted transition-colors">8. Plan d'action 30 jours</a></li>
          </ol>
        </nav>

        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-mint border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-2xl mb-4">Du vendeur amateur au vendeur pro</h2>
            <p className="text-gray-700 mb-4">
              La différence entre un vendeur qui fait 50€/mois et un qui fait 500€/mois ?
              Ce n'est pas la quantité d'articles, c'est la <strong>méthode</strong>.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Temps de vente réduit</strong> de plusieurs semaines à quelques jours</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>+300% de vues</strong> sur tes annonces</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Prix de vente plus élevés</strong> grâce à une meilleure présentation</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 1: Articles les plus vendus */}
        <section id="articles-vendus" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">1. Articles les plus vendus sur Vinted</h2>
          </div>

          <div className="bg-white border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl mb-4">Top 10 catégories rentables</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ol className="space-y-2">
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">1.</span> Jeans de marque (Levi's, Diesel)</li>
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">2.</span> Sneakers (Nike, Adidas, NB)</li>
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">3.</span> Vestes et manteaux</li>
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">4.</span> Robes de marque</li>
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">5.</span> Sacs à main</li>
              </ol>
              <ol className="space-y-2" start={6}>
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">6.</span> Vêtements bébé/enfant</li>
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">7.</span> Sportswear</li>
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">8.</span> Vintage 90s-2000s</li>
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">9.</span> Pulls en laine/cachemire</li>
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">10.</span> Accessoires de luxe</li>
              </ol>
            </div>
          </div>

          <div className="bg-pink-pastel border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl mb-4">Marques les plus recherchées</h3>
            <div className="flex flex-wrap gap-2">
              {['Nike', 'Zara', 'H&M', 'Levi\'s', 'Adidas', 'The North Face', 'Lacoste', 'Ralph Lauren', 'Mango', 'Sézane'].map((brand) => (
                <span key={brand} className="bg-white px-3 py-1 border-2 border-black font-medium">
                  {brand}
                </span>
              ))}
            </div>
            <p className="mt-4 text-gray-700">
              <strong>Astuce :</strong> Mentionne toujours la marque dans le titre de ton annonce !
            </p>
          </div>
        </section>

        {/* Section 2: Pricing */}
        <section id="pricing" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Tag className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">2. Stratégies de pricing avancées</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Prix psychologiques</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Utilise <strong>9,99€ au lieu de 10€</strong> (effet psychologique prouvé)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Prix en <strong>5 ou 0</strong> pour les articles premium (25€, 50€)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Laisse une <strong>marge de 10-15%</strong> pour la négociation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Analyser la concurrence</h3>
              <p className="text-gray-700 mb-4">
                Avant de fixer ton prix, recherche des articles similaires sur Vinted :
              </p>
              <ol className="space-y-2 text-gray-700">
                <li>1. Recherche ta marque + type d'article + taille</li>
                <li>2. Note les 5 premiers résultats vendus récemment</li>
                <li>3. Calcule la moyenne des prix</li>
                <li>4. Positionne-toi légèrement en dessous si tu veux vendre vite</li>
              </ol>
            </div>

            <div className="bg-mint border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Bundle pricing (lots)</h3>
              <p className="text-gray-700">
                Les lots se vendent 30% plus vite ! Propose des réductions attractives :
              </p>
              <ul className="mt-4 space-y-2">
                <li><strong>2 articles :</strong> -10% sur le total</li>
                <li><strong>3 articles :</strong> -15% sur le total</li>
                <li><strong>5+ articles :</strong> -20% sur le total</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Annonces */}
        <section id="annonces" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Search className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">3. Optimiser ses annonces</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Titres qui attirent les clics</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  <span className="line-through text-gray-500">Robe</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-medium">Robe Sézane Soie Noire Taille 38 - Neuve avec étiquette</span>
                </div>
              </div>
              <p className="mt-4 text-gray-700">
                Un bon titre inclut : <strong>Marque + Type + Couleur + Taille + État</strong>
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Descriptions optimisées</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Commence par les <strong>mots-clés importants</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Ajoute les <strong>mesures exactes</strong> (tour de poitrine, longueur...)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Mentionne l'<strong>état honnêtement</strong> (défauts inclus)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Termine par une <strong>phrase engageante</strong></span>
                </li>
              </ul>
            </div>

            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Mise à jour régulière</h3>
              <p className="text-gray-700">
                <strong>Astuce pro :</strong> Modifie légèrement tes annonces tous les 3-4 jours.
                Cela les fait remonter dans les résultats de recherche sans utiliser le boost payant !
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Photos */}
        <section id="photos" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">4. Photos qui convertissent</h2>
          </div>

          <div className="bg-white border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl mb-4">L'impact prouvé des photos pro</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-red-100 border-2 border-black">
                <Eye className="w-8 h-8 mx-auto mb-2 text-red-600" />
                <p className="text-2xl font-bold text-red-600">+300%</p>
                <p className="text-sm">de vues</p>
              </div>
              <div className="text-center p-4 bg-green-100 border-2 border-black">
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-green-600" />
                <p className="text-2xl font-bold text-green-600">+150%</p>
                <p className="text-sm">de favoris</p>
              </div>
              <div className="text-center p-4 bg-blue-100 border-2 border-black">
                <Star className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <p className="text-2xl font-bold text-blue-600">2x plus</p>
                <p className="text-sm">de ventes</p>
              </div>
            </div>
          </div>

          <div className="bg-white border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl mb-4">Photo portée vs photo à plat</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-black">
                    <th className="text-left py-2">Type</th>
                    <th className="text-left py-2">Avantages</th>
                    <th className="text-left py-2">Inconvénients</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-300">
                    <td className="py-2 font-medium">Photo à plat</td>
                    <td className="py-2">Rapide, simple</td>
                    <td className="py-2">Moins engageant, rendu plat</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-2 font-medium">Photo portée</td>
                    <td className="py-2">+300% vues, montre le tombé</td>
                    <td className="py-2">Besoin d'un mannequin</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium bg-mint">Mannequin IA</td>
                    <td className="py-2 bg-mint">Le meilleur des deux mondes !</td>
                    <td className="py-2 bg-mint">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA VintDress */}
          <div className="bg-vinted border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-white" />
              <h3 className="font-display font-bold text-2xl text-white">Transforme tes vêtements en photos mannequin</h3>
            </div>
            <p className="text-white mb-6">
              Avec VintDress, génère des photos sur mannequin IA en 30 secondes.
              Plus besoin de poser ou de chercher un mannequin !
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 font-display font-bold border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              Essayer VintDress
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Section 5: Algorithme */}
        <section id="algorithme" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">5. Algorithme Vinted : les secrets</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Comment fonctionne le feed</h3>
              <p className="text-gray-700 mb-4">
                L'algorithme Vinted favorise les vendeurs qui :
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Sont <strong>actifs régulièrement</strong> (connexion quotidienne)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Ont des <strong>annonces complètes</strong> (photos, description, marque)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Répondent <strong>rapidement</strong> aux messages (moins de 24h)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Ont de <strong>bonnes évaluations</strong></span>
                </li>
              </ul>
            </div>

            <div className="bg-mint border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">"Bumper" ses annonces gratuitement</h3>
              <p className="text-gray-700 mb-4">
                Pour faire remonter une annonce sans payer le boost :
              </p>
              <ol className="space-y-2 text-gray-700">
                <li>1. Modifie légèrement la description</li>
                <li>2. Réorganise l'ordre des photos</li>
                <li>3. Ajuste le prix de quelques centimes</li>
                <li>4. Ajoute ou retire un hashtag</li>
              </ol>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6" />
                Meilleurs moments pour publier
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-bold mb-2">Jours optimaux :</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>Dimanche soir (20h-22h)</li>
                    <li>Mercredi après-midi</li>
                    <li>Samedi matin</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold mb-2">À éviter :</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>Lundi matin</li>
                    <li>Vendredi soir</li>
                    <li>Nuit (minuit-7h)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Fidéliser */}
        <section id="fideliser" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">6. Fidéliser ses acheteurs</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <Star className="w-8 h-8 text-yellow-500 mb-4" />
              <h3 className="font-display font-bold text-xl mb-3">Communication rapide</h3>
              <p className="text-gray-700">
                Réponds aux messages en moins de 2h pendant la journée.
                Les acheteurs passent à autre chose si tu mets trop de temps.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <Target className="w-8 h-8 text-vinted mb-4" />
              <h3 className="font-display font-bold text-xl mb-3">Emballage soigné</h3>
              <p className="text-gray-700">
                Un bel emballage = avis 5 étoiles. Utilise du papier de soie,
                un joli ruban, et protège bien l'article.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <Sparkles className="w-8 h-8 text-pink-500 mb-4" />
              <h3 className="font-display font-bold text-xl mb-3">Petit mot personnalisé</h3>
              <p className="text-gray-700">
                Glisse une petite carte de remerciement. Ça fait la différence
                et encourage les acheteurs à revenir !
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <BarChart2 className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-display font-bold text-xl mb-3">Obtenir des 5 étoiles</h3>
              <p className="text-gray-700">
                Envoie rapidement, emballe bien, et n'hésite pas à ajouter
                un petit bonus (échantillon, bonbon...).
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Erreurs */}
        <section id="erreurs" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-red-500 p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">7. Erreurs qui tuent tes ventes</h2>
          </div>

          <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-red-600">Prix trop élevés</strong>
                  <p className="text-gray-600">Compare toujours avec la concurrence avant de fixer ton prix</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-red-600">Photos médiocres</strong>
                  <p className="text-gray-600">Photos floues, mal éclairées ou avec un fond encombré = moins de clics</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-red-600">Descriptions vides</strong>
                  <p className="text-gray-600">"Robe, taille M" ne suffit pas. Détaille l'article !</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-red-600">Non-réponse aux messages</strong>
                  <p className="text-gray-600">Un acheteur qui attend va ailleurs. Réponds vite !</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-red-600">Inactivité prolongée</strong>
                  <p className="text-gray-600">L'algorithme pénalise les comptes inactifs. Connecte-toi tous les jours !</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 8: Plan d'action */}
        <section id="plan-action" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">8. Plan d'action 30 jours</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4 flex items-center gap-2">
                <span className="bg-vinted text-white px-3 py-1 text-sm">Semaine 1</span>
                Audit de ton dressing
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Fais le tri de tous tes articles</li>
                <li>Identifie les articles à fort potentiel</li>
                <li>Analyse les prix de la concurrence</li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4 flex items-center gap-2">
                <span className="bg-vinted text-white px-3 py-1 text-sm">Semaine 2</span>
                Refaire les photos
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Rephotographie tous tes articles</li>
                <li>Utilise VintDress pour les photos mannequin</li>
                <li>Ajoute des photos de détails</li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4 flex items-center gap-2">
                <span className="bg-vinted text-white px-3 py-1 text-sm">Semaine 3</span>
                Optimiser prix et descriptions
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Réécris toutes tes descriptions</li>
                <li>Ajuste les prix selon ta stratégie</li>
                <li>Ajoute les mesures exactes</li>
              </ul>
            </div>

            <div className="bg-mint border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4 flex items-center gap-2">
                <span className="bg-vinted text-white px-3 py-1 text-sm">Semaine 4</span>
                Analyse et ajustements
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Analyse tes statistiques de vues</li>
                <li>Identifie ce qui fonctionne</li>
                <li>Ajuste ta stratégie en conséquence</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <div className="bg-black text-white border-4 border-black p-8">
            <h2 className="font-display font-bold text-2xl mb-6">Résumé : les actions prioritaires</h2>
            <ol className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="bg-vinted text-white px-2 py-1 text-sm font-bold">1</span>
                <span>Améliore tes photos (utilise VintDress pour les photos mannequin)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-vinted text-white px-2 py-1 text-sm font-bold">2</span>
                <span>Optimise tes titres et descriptions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-vinted text-white px-2 py-1 text-sm font-bold">3</span>
                <span>Ajuste tes prix avec la concurrence</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-vinted text-white px-2 py-1 text-sm font-bold">4</span>
                <span>Sois actif et réactif tous les jours</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-vinted text-white px-2 py-1 text-sm font-bold">5</span>
                <span>Soigne l'expérience acheteur (emballage, communication)</span>
              </li>
            </ol>
          </div>
        </section>

        {/* CTA final */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center">
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              Prêt à booster tes ventes ?
            </h2>
            <p className="text-white text-lg mb-6">
              Commence par l'étape qui a le plus d'impact : les photos.
              Avec VintDress, transforme tes vêtements en photos mannequin professionnelles.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-display font-bold text-lg border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              Essayer VintDress gratuitement
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </section>

        {/* Articles liés */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-2xl mb-6">Articles connexes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/articles/comment-vendre-sur-vinted"
              className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <h3 className="font-display font-bold text-lg mb-2">Comment Vendre sur Vinted</h3>
              <p className="text-gray-600">Guide complet pour créer tes premières annonces</p>
            </Link>
            <Link
              to="/articles/comment-faire-photos-vinted"
              className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <h3 className="font-display font-bold text-lg mb-2">Comment Faire de Belles Photos</h3>
              <p className="text-gray-600">Techniques pour des photos qui vendent</p>
            </Link>
          </div>
        </section>

        <ArticleNavigation currentSlug="optimiser-ventes-vinted" />
      </article>
    </div>
  );
}
