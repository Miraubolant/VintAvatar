import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Tag, ArrowLeft, Sparkles, Star, TrendingUp, Heart, Shirt, Music, Palette } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';
import { ArticleNavigation } from '../../components/ArticleNavigation';

export default function VetementsVintage90Page() {
  useSEO({
    title: "Vêtements Vintage Années 90 : Guide Complet des Tendances Iconiques",
    description: "Découvrez les vêtements vintage années 90 les plus recherchés : jeans baggy, crop tops, vestes en jean, sneakers rétro. Guide complet pour un look 90s authentique.",
    keywords: "vêtements vintage années 90, mode 90s, style années 90, look vintage 90, tendances 90s, fashion 90s",
    canonicalUrl: "https://vintdress.com/articles/vetements-vintage-annees-90",
    ogImage: "https://images.unsplash.com/photo-1529720317453-c8da503f2051?w=1200&h=630&fit=crop"
  });

  return (
    <main className="min-h-screen bg-grain">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-pastel/30 via-cream to-mint/30"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-vinted/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-pastel/40 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-vinted transition-colors mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux articles
          </Link>

          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-2 bg-vinted text-white text-sm font-bold rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                Tendances
              </span>
              <span className="px-4 py-2 bg-pink-pastel text-black text-sm font-bold rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                Style 90s
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Vêtements Vintage Années 90 : Guide Complet des{' '}
              <span className="text-vinted">Tendances Iconiques</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl">
              Les années 90 sont de retour en force ! Découvrez les pièces vintage les plus recherchées,
              des jeans baggy aux crop tops, et apprenez à créer un look 90s authentique et tendance.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-white rounded-full border-2 border-black">
                  <User className="w-4 h-4" />
                </div>
                <span className="font-medium">VintDress</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-white rounded-full border-2 border-black">
                  <Calendar className="w-4 h-4" />
                </div>
                <span>13 janvier 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-white rounded-full border-2 border-black">
                  <Clock className="w-4 h-4" />
                </div>
                <span>15 min de lecture</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image principale */}
      <section className="container mx-auto px-4 -mt-8 mb-16 relative z-20">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <img
              src="https://images.unsplash.com/photo-1529720317453-c8da503f2051?w=1200&h=600&fit=crop"
              alt="Vêtements vintage années 90 - Mode rétro iconique"
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <article className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">

          {/* Introduction */}
          <div className="bg-white rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Music className="w-6 h-6 text-vinted" />
              Le grand retour des années 90
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Les <strong>vêtements vintage années 90</strong> sont au cœur de la mode actuelle. Cette décennie,
              marquée par le grunge, le hip-hop et la pop culture, a produit des pièces iconiques qui font
              aujourd'hui le bonheur des amateurs de mode seconde main. Des jeans taille haute aux vestes
              oversized, le style 90s s'impose comme une référence incontournable.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Que vous soyez nostalgique de cette époque ou que vous découvriez ces tendances, ce guide
              complet vous accompagne pour dénicher les meilleures pièces et créer un look 90s authentique.
            </p>
          </div>

          {/* Sommaire */}
          <div className="bg-mint/30 rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-8 mb-12">
            <h2 className="text-xl font-bold mb-4">Sommaire</h2>
            <nav className="space-y-2">
              <a href="#pieces-iconiques" className="block text-vinted hover:underline font-medium">1. Les pièces iconiques des années 90</a>
              <a href="#tendances-grunge" className="block text-vinted hover:underline font-medium">2. Le style grunge : l'esprit Seattle</a>
              <a href="#streetwear-90s" className="block text-vinted hover:underline font-medium">3. Streetwear 90s : l'influence hip-hop</a>
              <a href="#minimalisme" className="block text-vinted hover:underline font-medium">4. Le minimalisme sophistiqué</a>
              <a href="#accessoires" className="block text-vinted hover:underline font-medium">5. Accessoires emblématiques</a>
              <a href="#ou-trouver" className="block text-vinted hover:underline font-medium">6. Où trouver des vêtements 90s authentiques</a>
              <a href="#comment-porter" className="block text-vinted hover:underline font-medium">7. Comment porter le vintage 90s aujourd'hui</a>
              <a href="#faq" className="block text-vinted hover:underline font-medium">8. FAQ</a>
            </nav>
          </div>

          {/* Section 1: Pièces iconiques */}
          <section id="pieces-iconiques" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-vinted rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Shirt className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Les pièces iconiques des années 90</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Le jean baggy et le jean taille haute</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Le <strong>jean baggy</strong> est la pièce maîtresse du dressing 90s. Large, confortable,
                  souvent porté avec une ceinture visible, il incarne l'esprit décontracté de l'époque.
                  Les coupes mom jeans et les tailles hautes sont également très recherchées.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Levi's 501</strong> et <strong>550</strong> - Les classiques incontournables</li>
                  <li><strong>JNCO</strong> - Les jeans extra-larges du skatewear</li>
                  <li><strong>Guess</strong> - Le denim premium des années 90</li>
                  <li><strong>Calvin Klein</strong> - L'élégance minimaliste</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Le crop top et le body</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Le <strong>crop top</strong> 90s se distingue par sa coupe courte et ses matières
                  variées : velours, coton, mesh ou encore métallisé. Porté avec un jean taille haute,
                  il crée la silhouette emblématique de la décennie.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Le <strong>body</strong> connaît aussi un renouveau majeur, notamment les modèles
                  à col haut ou à bretelles fines, parfaits pour un look minimaliste.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">La veste en jean oversized</h3>
                <p className="text-gray-700 leading-relaxed">
                  La <strong>veste en jean oversize</strong> est un must-have des années 90. Qu'elle soit
                  classique bleu délavé, customisée avec des patchs ou brodée, elle apporte une touche
                  rétro à n'importe quelle tenue. Les modèles vintage Levi's et Wrangler sont
                  particulièrement prisés.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">La robe slip dress</h3>
                <p className="text-gray-700 leading-relaxed">
                  Inspirée de la lingerie, la <strong>slip dress</strong> (robe nuisette) est devenue
                  un symbole du style 90s minimaliste. Portée seule pour un look sophistiqué ou
                  superposée sur un t-shirt pour un style plus décontracté, elle reste une pièce
                  polyvalente très recherchée.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Style grunge */}
          <section id="tendances-grunge" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gray-800 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Music className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Le style grunge : l'esprit Seattle</h2>
            </div>

            <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Né dans les clubs de Seattle avec des groupes comme Nirvana et Pearl Jam, le
                <strong> style grunge</strong> a révolutionné la mode des années 90. Anti-conformiste
                et nonchalant, il privilégie le confort et l'authenticité.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-pink-pastel/30 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Pièces essentielles grunge</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Chemise à carreaux flanelle</strong> - Portée ouverte sur un t-shirt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>T-shirt de groupe</strong> - Nirvana, Pearl Jam, Soundgarden...</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Jean déchiré</strong> - Look usé et décontracté</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Doc Martens</strong> - Les boots iconiques</span>
                  </li>
                </ul>
              </div>

              <div className="bg-mint/30 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Conseils styling grunge</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span>Superposez les couches de manière désinvolte</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span>Optez pour des tailles oversize</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span>Privilégiez les couleurs sombres : noir, bordeaux, kaki</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span>Ajoutez des accessoires en argent ou cuir</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: Streetwear 90s */}
          <section id="streetwear-90s" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-vinted rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Streetwear 90s : l'influence hip-hop</h2>
            </div>

            <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Le <strong>streetwear des années 90</strong> est indissociable de la culture hip-hop.
                Des artistes comme Tupac, Notorious B.I.G. et TLC ont popularisé un style urbain
                reconnaissable entre mille : vêtements amples, logos visibles et sneakers collector.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3 text-vinted">Marques cultes</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Tommy Hilfiger</li>
                  <li>FUBU</li>
                  <li>Karl Kani</li>
                  <li>Cross Colours</li>
                  <li>Starter</li>
                  <li>Champion</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3 text-vinted">Pièces phares</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Hoodie oversized</li>
                  <li>Survêtement complet</li>
                  <li>Casquette snapback</li>
                  <li>Bomber jacket</li>
                  <li>Pantalon cargo</li>
                  <li>Jersey de basket</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3 text-vinted">Sneakers 90s</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Nike Air Max 95</li>
                  <li>Air Jordan 1-12</li>
                  <li>Reebok Classic</li>
                  <li>Fila Disruptor</li>
                  <li>Adidas Superstar</li>
                  <li>New Balance 990</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: Minimalisme */}
          <section id="minimalisme" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-black rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Le minimalisme sophistiqué</h2>
            </div>

            <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                À l'opposé du grunge, le <strong>minimalisme 90s</strong> a été porté par des créateurs
                comme Calvin Klein, Helmut Lang et Jil Sander. Ce style épuré privilégie les coupes
                nettes, les couleurs neutres et les matières nobles.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-4">Caractéristiques du style minimaliste 90s</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Palette neutre</strong> : noir, blanc, beige, gris</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Coupes épurées</strong> et lignes droites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Matières nobles</strong> : soie, cachemire, cuir</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Absence de logos</strong> visibles</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-4">Pièces minimalistes à rechercher</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                    <span>Slip dress en satin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                    <span>Blazer boyfriend noir</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                    <span>Pantalon tailleur fluide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                    <span>Col roulé fin en maille</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5: Accessoires */}
          <section id="accessoires" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-pink-pastel rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Heart className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold">Accessoires emblématiques des années 90</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-4 text-vinted">Bijoux et accessoires</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Chokers</strong> - Ras-du-cou en velours ou tatouage</li>
                  <li><strong>Chaînes</strong> - Grosses chaînes dorées style hip-hop</li>
                  <li><strong>Barrettes papillon</strong> - Colorées et brillantes</li>
                  <li><strong>Mini sacs</strong> - Les petits sacs à main reviennent</li>
                  <li><strong>Banane</strong> - Le sac ceinture pratique et stylé</li>
                  <li><strong>Lunettes ovales</strong> - Style Matrix ou hippie</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-4 text-vinted">Chaussures cultes</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Doc Martens</strong> - Boots, derbies et sandales</li>
                  <li><strong>Platform shoes</strong> - Compensées Spice Girls</li>
                  <li><strong>Buffalo</strong> - Les plateformes massives</li>
                  <li><strong>Converse All-Star</strong> - Basses ou montantes</li>
                  <li><strong>Vans Old Skool</strong> - Le skatestyle</li>
                  <li><strong>Sandales sport</strong> - Teva et Birkenstock</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6: Où trouver */}
          <section id="ou-trouver" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-mint rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <TrendingUp className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold">Où trouver des vêtements 90s authentiques</h2>
            </div>

            <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
              <h3 className="text-xl font-bold mb-4 text-vinted">Plateformes en ligne</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Les <strong>plateformes de seconde main</strong> sont le meilleur endroit pour dénicher
                des pièces vintage années 90 à prix accessibles. Vinted, Vestiaire Collective et Depop
                regorgent de trésors de cette époque.
              </p>
              <div className="bg-vinted/10 rounded-lg p-4">
                <p className="text-gray-700 font-medium">
                  <strong>Conseil VintDress :</strong> Utilisez des mots-clés précis comme "vintage 90s",
                  "Y2K", "grunge" ou les noms de marques emblématiques pour affiner vos recherches.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-pink-pastel/20 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Friperies physiques</h3>
                <p className="text-gray-700 text-sm">
                  Les friperies et dépôts-ventes locaux offrent souvent des pièces authentiques
                  à des prix imbattables. Prenez le temps de fouiller !
                </p>
              </div>

              <div className="bg-mint/20 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Marchés aux puces</h3>
                <p className="text-gray-700 text-sm">
                  Les brocantes et vide-greniers peuvent révéler des trésors vintage oubliés.
                  Idéal pour négocier les prix.
                </p>
              </div>

              <div className="bg-vinted/10 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Boutiques spécialisées</h3>
                <p className="text-gray-700 text-sm">
                  Certaines boutiques se spécialisent dans le vintage 90s et proposent des
                  pièces déjà sélectionnées et authentifiées.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Comment porter */}
          <section id="comment-porter" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-vinted rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Comment porter le vintage 90s aujourd'hui</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Mixer vintage et contemporain</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  La clé d'un look 90s réussi est de <strong>mélanger les pièces vintage avec des
                  basiques modernes</strong>. Associez un jean baggy vintage avec un crop top actuel,
                  ou portez une veste en jean 90s sur une robe minimaliste contemporaine.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Évitez le total look 90s qui peut sembler costumé</li>
                  <li>Choisissez 1-2 pièces vintage fortes par tenue</li>
                  <li>Équilibrez les volumes : pièce oversize + pièce ajustée</li>
                  <li>Jouez avec les accessoires pour accentuer le côté rétro</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Idées de looks 90s</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Look casual grunge</h4>
                    <p className="text-sm text-gray-700">
                      Jean mom + t-shirt de groupe vintage + chemise flanelle nouée à la taille + Doc Martens
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Look minimaliste chic</h4>
                    <p className="text-sm text-gray-700">
                      Slip dress satinée + blazer oversized + sandales à talons + sac baguette
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Look streetwear</h4>
                    <p className="text-sm text-gray-700">
                      Jean baggy + hoodie vintage + sneakers rétro + casquette
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Look summer 90s</h4>
                    <p className="text-sm text-gray-700">
                      Short en jean taille haute + crop top + sandales plateformes + lunettes ovales
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA VintDress */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-vinted to-vinted/80 rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 text-white">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-white/20 rounded-xl">
                  <Sparkles className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Vendez vos pièces vintage avec VintDress</h2>
                  <p className="text-white/90">
                    Vous avez des vêtements vintage années 90 à vendre sur Vinted ? Boostez vos ventes
                    avec nos photos portées générées par IA ! Les acheteurs adorent voir les vêtements
                    sur un mannequin virtuel.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 bg-white text-vinted px-6 py-3 rounded-xl font-bold border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  <Sparkles className="w-5 h-5" />
                  Essayer VintDress gratuitement
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Tag className="w-8 h-8 text-vinted" />
              Questions fréquentes
            </h2>

            <div className="space-y-4">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Qu'est-ce qui définit la mode des années 90 ?</h3>
                <p className="text-gray-700">
                  La mode 90s se caractérise par sa diversité : du grunge décontracté au minimalisme
                  sophistiqué, en passant par le streetwear hip-hop. Les coupes oversized, le denim,
                  les crop tops et les sneakers sont les pièces emblématiques de cette décennie.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Comment reconnaître un vrai vêtement vintage 90s ?</h3>
                <p className="text-gray-700">
                  Vérifiez les étiquettes (composition, pays de fabrication), la qualité des coutures
                  et des finitions. Les vêtements 90s authentiques ont souvent des coutures plus
                  solides et des matières plus épaisses. Recherchez aussi les logos et designs
                  d'époque spécifiques aux marques.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Quelles marques 90s sont les plus recherchées ?</h3>
                <p className="text-gray-700">
                  Les marques les plus prisées incluent Levi's, Tommy Hilfiger, Calvin Klein,
                  Champion, FUBU, Starter et Nike vintage. Les pièces avec logos visibles ou
                  des designs iconiques de l'époque sont particulièrement cotées.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Le style 90s convient-il à tous les âges ?</h3>
                <p className="text-gray-700">
                  Absolument ! Le style 90s est très versatile. Optez pour le minimalisme sophistiqué
                  si vous préférez un look plus mature, ou assumez le grunge et le streetwear pour
                  un style plus audacieux. L'important est d'adapter les pièces à votre morphologie
                  et votre personnalité.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Quel budget prévoir pour un dressing 90s vintage ?</h3>
                <p className="text-gray-700">
                  Les prix varient selon les plateformes et l'état des pièces. Sur Vinted ou en friperie,
                  comptez 10-30€ pour un t-shirt vintage, 25-60€ pour un jean Levi's, 30-80€ pour une
                  veste en jean. Les pièces rares ou de marques premium peuvent atteindre des prix
                  plus élevés.
                </p>
              </div>
            </div>
          </section>

          {/* Articles connexes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Articles connexes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                to="/articles/friperie-en-ligne"
                className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <h3 className="font-bold text-vinted mb-2">Friperie en Ligne : Guide Complet 2026</h3>
                <p className="text-gray-600 text-sm">
                  Découvrez les meilleures plateformes pour acheter des vêtements vintage en ligne.
                </p>
              </Link>
              <Link
                to="/articles/jean-levis-vintage"
                className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <h3 className="font-bold text-vinted mb-2">Jean Levi's Vintage : Guide d'Achat</h3>
                <p className="text-gray-600 text-sm">
                  Comment reconnaître et acheter un authentique jean Levi's vintage.
                </p>
              </Link>
            </div>
          </section>

          {/* Navigation entre articles */}
          <ArticleNavigation currentPath="/articles/vetements-vintage-annees-90" />
        </div>
      </article>
    </main>
  );
}
