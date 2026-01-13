import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Tag, ArrowLeft, Sparkles, Star, TrendingUp, Heart, Shirt, Crown, Palette } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';
import { ArticleNavigation } from '../../components/ArticleNavigation';

export default function RobeVintageFemmePage() {
  useSEO({
    title: "Robe Vintage Femme : Guide Complet pour Trouver la Pièce Parfaite",
    description: "Découvrez les robes vintage femme les plus recherchées : années 50, 60, 70, bohème, pin-up. Guide complet pour choisir, authentifier et porter une robe vintage.",
    keywords: "robe vintage femme, robe retro, robe années 50, robe bohème vintage, robe pin-up, mode vintage femme",
    canonicalUrl: "https://vintdress.com/articles/robe-vintage-femme",
    ogImage: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&h=630&fit=crop"
  });

  return (
    <main className="min-h-screen bg-cream">
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
                Mode Vintage
              </span>
              <span className="px-4 py-2 bg-pink-pastel text-black text-sm font-bold rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                Robes
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Robe Vintage Femme : Guide Complet pour Trouver la{' '}
              <span className="text-vinted">Pièce Parfaite</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl">
              Des années 50 aux années 90, les robes vintage incarnent l'élégance intemporelle.
              Découvrez comment dénicher la robe parfaite, l'authentifier et la porter avec style.
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
                <span>14 min de lecture</span>
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
              src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&h=600&fit=crop"
              alt="Robe vintage femme - Élégance intemporelle"
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
              <Crown className="w-6 h-6 text-vinted" />
              L'élégance intemporelle des robes vintage
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La <strong>robe vintage femme</strong> est bien plus qu'un simple vêtement : c'est un
              voyage dans le temps, une pièce unique qui raconte une histoire. Que vous cherchiez
              une robe swing des années 50, une mini-robe psychédélique des sixties ou une robe
              bohème des seventies, le vintage offre des trésors incomparables.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Ce guide complet vous accompagne pour trouver la robe vintage parfaite, comprendre
              les différentes époques et styles, et porter ces pièces d'exception avec confiance.
            </p>
          </div>

          {/* Sommaire */}
          <div className="bg-mint/30 rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-8 mb-12">
            <h2 className="text-xl font-bold mb-4">Sommaire</h2>
            <nav className="space-y-2">
              <a href="#styles-epoques" className="block text-vinted hover:underline font-medium">1. Les styles par époque</a>
              <a href="#annees-50" className="block text-vinted hover:underline font-medium">2. Robes années 50 : l'élégance pin-up</a>
              <a href="#annees-60-70" className="block text-vinted hover:underline font-medium">3. Années 60-70 : du mod au bohème</a>
              <a href="#annees-80-90" className="block text-vinted hover:underline font-medium">4. Années 80-90 : glamour et minimalisme</a>
              <a href="#authentifier" className="block text-vinted hover:underline font-medium">5. Comment authentifier une robe vintage</a>
              <a href="#choisir-taille" className="block text-vinted hover:underline font-medium">6. Choisir la bonne taille</a>
              <a href="#ou-acheter" className="block text-vinted hover:underline font-medium">7. Où acheter des robes vintage</a>
              <a href="#entretien" className="block text-vinted hover:underline font-medium">8. Entretien et conservation</a>
              <a href="#faq" className="block text-vinted hover:underline font-medium">9. FAQ</a>
            </nav>
          </div>

          {/* Section 1: Styles par époque */}
          <section id="styles-epoques" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-vinted rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Les styles de robes par époque</h2>
            </div>

            <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Chaque décennie a apporté son lot d'innovations et de styles iconiques dans
                l'univers des robes. Comprendre ces différentes époques vous aidera à identifier
                les pièces authentiques et à choisir le style qui vous correspond.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-pink-pastel/20 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Années 40-50</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Taille cintrée et jupe ample</li>
                  <li>Imprimés floraux et pois</li>
                  <li>Tissus de qualité (coton, soie)</li>
                  <li>Détails soignés (boutons, cols)</li>
                </ul>
              </div>
              <div className="bg-mint/20 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Années 60</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Coupe droite ou trapèze</li>
                  <li>Motifs géométriques et pop</li>
                  <li>Mini-jupes révolutionnaires</li>
                  <li>Matières synthétiques innovantes</li>
                </ul>
              </div>
              <div className="bg-vinted/10 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Années 70</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Style bohème et fluide</li>
                  <li>Maxi-robes et imprimés ethniques</li>
                  <li>Manches évasées (bell sleeves)</li>
                  <li>Tissus naturels et crochet</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Années 80-90</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Épaules marquées et power dressing</li>
                  <li>Robes moulantes et stretch</li>
                  <li>Minimalisme et slip dress</li>
                  <li>Sequins et glamour</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2: Années 50 */}
          <section id="annees-50" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-pink-pastel rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Crown className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold">Robes années 50 : l'élégance pin-up</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Le New Look de Dior</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Les années 50 sont marquées par le <strong>New Look</strong> de Christian Dior :
                  taille très marquée, jupes amples et épaules douces. Cette silhouette ultra-féminine
                  reste l'une des plus recherchées en vintage.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Robe swing</strong> - Jupe circulaire idéale pour danser</li>
                  <li><strong>Robe fourreau</strong> - Coupe ajustée et élégante</li>
                  <li><strong>Robe chemisier</strong> - Style décontracté chic</li>
                  <li><strong>Robe cocktail</strong> - Pour les occasions spéciales</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Marques et créateurs à rechercher</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold mb-2">Haute couture</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>Christian Dior</li>
                      <li>Balenciaga</li>
                      <li>Givenchy</li>
                      <li>Jacques Fath</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Prêt-à-porter</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>Jonathan Logan</li>
                      <li>Gay Gibson</li>
                      <li>Lanz</li>
                      <li>Toni Todd</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Années 60-70 */}
          <section id="annees-60-70" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-vinted rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Années 60-70 : du mod au bohème</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Style Mod (années 60)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  La révolution des sixties apporte des coupes géométriques, des couleurs vives
                  et la mini-jupe révolutionnaire de Mary Quant.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Robe trapèze</strong> - Coupe en A évasée</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Mini-robe</strong> - Au-dessus du genou</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Shift dress</strong> - Droite et sans ceinture</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Style Bohème (années 70)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Les seventies célèbrent la liberté avec des robes fluides, des imprimés
                  ethniques et un retour aux matières naturelles.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Maxi-robe</strong> - Longue et fluide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Robe paysanne</strong> - Broderies et volants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Robe caftan</strong> - Ample et exotique</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: Années 80-90 */}
          <section id="annees-80-90" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-black rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Années 80-90 : glamour et minimalisme</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Power dressing des années 80</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Les années 80 incarnent l'excès et le pouvoir féminin avec des épaules
                  structurées, des couleurs vives et des matières brillantes.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Styles clés</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>Robe à épaulettes</li>
                      <li>Robe bustier</li>
                      <li>Robe sequins</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Marques</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>Thierry Mugler</li>
                      <li>Claude Montana</li>
                      <li>Azzedine Alaïa</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Matières</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>Lamé et lurex</li>
                      <li>Velours</li>
                      <li>Lycra stretch</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Minimalisme des années 90</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  En réaction aux excès des eighties, les années 90 prônent un minimalisme
                  élégant avec des lignes épurées et des couleurs neutres.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Slip dress</strong> - La robe nuisette iconique</li>
                  <li><strong>Robe colonne</strong> - Longue et droite</li>
                  <li><strong>Little black dress</strong> - Minimaliste et chic</li>
                  <li><strong>Robe grunge</strong> - Imprimés floraux et superpositions</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5: Authentifier */}
          <section id="authentifier" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-mint rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Tag className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold">Comment authentifier une robe vintage</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Les indices d'authenticité</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3">Étiquettes et marquages</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Étiquette en tissu cousue (pas imprimée)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Mention "Union Made" ou syndicat (USA)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Absence de codes-barres (avant 1980)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Pays d'origine (avant mondialisation)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3">Finitions et construction</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Fermetures éclair en métal (avant 1970)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Coutures à la main ou surpiqûres soignées</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Doublure complète en soie ou acétate</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Boutons assortis ou en nacre</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-vinted/10 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Points d'attention</h3>
                <p className="text-gray-700">
                  Méfiez-vous des reproductions modernes de style "vintage". Les vraies pièces
                  vintage ont une patine naturelle, des tissus de qualité supérieure et des
                  finitions qu'on ne retrouve plus dans la confection actuelle.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Taille */}
          <section id="choisir-taille" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-pink-pastel rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Shirt className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold">Choisir la bonne taille vintage</h2>
            </div>

            <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Attention :</strong> Les tailles vintage ne correspondent pas aux tailles
                actuelles ! Une taille 12 des années 50 équivaut souvent à un 36-38 moderne.
                Toujours se fier aux mesures réelles plutôt qu'à l'étiquette.
              </p>

              <h3 className="text-lg font-bold mb-4">Mesures essentielles à vérifier</h3>
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <h4 className="font-bold text-vinted mb-2">Tour de poitrine</h4>
                  <p className="text-sm text-gray-600">Mesuré sous les aisselles</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <h4 className="font-bold text-vinted mb-2">Tour de taille</h4>
                  <p className="text-sm text-gray-600">Au creux de la taille</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <h4 className="font-bold text-vinted mb-2">Tour de hanches</h4>
                  <p className="text-sm text-gray-600">Au plus large</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <h4 className="font-bold text-vinted mb-2">Longueur</h4>
                  <p className="text-sm text-gray-600">De l'épaule à l'ourlet</p>
                </div>
              </div>

              <div className="bg-mint/20 rounded-lg p-4">
                <p className="text-gray-700 font-medium">
                  <strong>Conseil VintDress :</strong> Demandez toujours les mesures à plat au vendeur
                  et comparez-les avec un vêtement que vous possédez déjà et qui vous va bien.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Où acheter */}
          <section id="ou-acheter" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-vinted rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Où acheter des robes vintage</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-4 text-vinted">Plateformes en ligne</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Vinted</strong> - Large choix, prix accessibles</li>
                  <li><strong>Vestiaire Collective</strong> - Luxe et authentification</li>
                  <li><strong>Etsy</strong> - Vendeurs spécialisés vintage</li>
                  <li><strong>eBay</strong> - Enchères et bonnes affaires</li>
                  <li><strong>Depop</strong> - Tendance et mode vintage</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-4 text-vinted">En boutique</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Friperies</strong> - Trouvailles à petit prix</li>
                  <li><strong>Boutiques vintage</strong> - Pièces sélectionnées</li>
                  <li><strong>Dépôts-ventes</strong> - Marques de qualité</li>
                  <li><strong>Marchés aux puces</strong> - Trésors cachés</li>
                  <li><strong>Ventes aux enchères</strong> - Pièces de collection</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 8: Entretien */}
          <section id="entretien" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-mint rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Sparkles className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold">Entretien et conservation</h2>
            </div>

            <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold mb-4 text-vinted">Lavage et nettoyage</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Privilégier le nettoyage à sec pour les pièces délicates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Lavage main à l'eau froide pour le coton</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Utiliser des détergents doux sans agents blanchissants</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Sécher à plat, jamais au sèche-linge</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4 text-vinted">Rangement</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Cintres rembourrés pour éviter les marques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Housses en coton respirant (pas plastique)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>À l'abri de la lumière directe</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Antimites naturels (lavande, cèdre)</span>
                    </li>
                  </ul>
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
                  <h2 className="text-2xl font-bold mb-2">Vendez vos robes vintage avec VintDress</h2>
                  <p className="text-white/90">
                    Vous avez des robes vintage à vendre sur Vinted ? Mettez-les en valeur avec nos
                    photos portées générées par IA ! Les acheteurs adorent voir comment une robe
                    tombe sur un mannequin virtuel.
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
                <h3 className="text-lg font-bold mb-3">Comment savoir si une robe est vraiment vintage ?</h3>
                <p className="text-gray-700">
                  Vérifiez les étiquettes (matière, provenance), les fermetures éclair (métal avant 1970),
                  la qualité des coutures et la présence d'une doublure. Les vraies pièces vintage
                  ont généralement des finitions supérieures aux reproductions modernes.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Quel budget pour une robe vintage de qualité ?</h3>
                <p className="text-gray-700">
                  Les prix varient énormément selon l'époque, la marque et l'état. Comptez 30-80€
                  pour une robe vintage en friperie, 100-300€ pour une pièce de créateur, et
                  plusieurs centaines d'euros pour de la haute couture ou des pièces rares.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Peut-on faire retoucher une robe vintage ?</h3>
                <p className="text-gray-700">
                  Oui, mais confiez vos pièces à un tailleur expérimenté qui respectera l'intégrité
                  du vêtement. Les retouches courantes incluent l'ajustement de la taille, le
                  raccourcissement de l'ourlet et le remplacement des fermetures défectueuses.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Comment porter une robe vintage au quotidien ?</h3>
                <p className="text-gray-700">
                  Mixez votre robe vintage avec des accessoires modernes pour éviter l'effet costume.
                  Une robe 50s peut se porter avec des baskets blanches, une robe 70s avec une
                  veste en cuir contemporaine. L'équilibre entre vintage et moderne est la clé.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Les robes vintage sont-elles écologiques ?</h3>
                <p className="text-gray-700">
                  Absolument ! Acheter vintage est l'un des gestes mode les plus durables. Vous
                  donnez une seconde vie à un vêtement existant, évitez la production de nouvelles
                  pièces et profitez souvent d'une qualité supérieure qui durera encore des décennies.
                </p>
              </div>
            </div>
          </section>

          {/* Articles connexes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Articles connexes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                to="/articles/vetements-vintage-annees-90"
                className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <h3 className="font-bold text-vinted mb-2">Vêtements Vintage Années 90</h3>
                <p className="text-gray-600 text-sm">
                  Découvrez les tendances iconiques des années 90 : grunge, streetwear et minimalisme.
                </p>
              </Link>
              <Link
                to="/articles/friperie-en-ligne"
                className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <h3 className="font-bold text-vinted mb-2">Friperie en Ligne : Guide Complet</h3>
                <p className="text-gray-600 text-sm">
                  Les meilleures plateformes pour acheter des vêtements vintage en ligne.
                </p>
              </Link>
            </div>
          </section>

          {/* Navigation entre articles */}
          <ArticleNavigation currentPath="/articles/robe-vintage-femme" />
        </div>
      </article>
    </main>
  );
}
