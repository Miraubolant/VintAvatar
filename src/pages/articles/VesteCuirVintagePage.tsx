import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Tag, ArrowLeft, Sparkles, Star, TrendingUp, Heart, Shield, Crown, Palette } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';
import { ArticleNavigation } from '../../components/ArticleNavigation';

export default function VesteCuirVintagePage() {
  useSEO({
    title: "Veste Cuir Vintage : Guide Complet d'Achat et d'Authentification",
    description: "Découvrez les vestes en cuir vintage les plus recherchées : perfecto, blouson aviateur, biker. Guide complet pour choisir, authentifier et entretenir une veste cuir vintage.",
    keywords: "veste cuir vintage, perfecto vintage, blouson cuir vintage, veste biker vintage, cuir ancien, schott vintage",
    canonicalUrl: "https://vintdress.com/articles/veste-cuir-vintage",
    ogImage: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1200&h=630&fit=crop"
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
                Cuir
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Veste Cuir Vintage : Guide Complet d'Achat et{' '}
              <span className="text-vinted">d'Authentification</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl">
              Du perfecto légendaire au blouson aviateur, les vestes en cuir vintage sont des pièces
              intemporelles. Découvrez comment dénicher la veste parfaite et reconnaître un cuir de qualité.
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
              src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1200&h=600&fit=crop"
              alt="Veste cuir vintage - Style intemporel"
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
              L'intemporel de la mode masculine et féminine
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La <strong>veste cuir vintage</strong> est l'un des investissements mode les plus durables.
              Contrairement aux productions actuelles souvent en cuir reconstitué ou synthétique, les vestes
              vintage offrent un cuir pleine fleur qui se patine magnifiquement avec le temps.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Ce guide vous accompagne pour identifier les modèles les plus recherchés, authentifier
              le cuir et l'origine, et entretenir votre pièce pour qu'elle traverse les décennies.
            </p>
          </div>

          {/* Sommaire */}
          <div className="bg-mint/30 rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-8 mb-12">
            <h2 className="text-xl font-bold mb-4">Sommaire</h2>
            <nav className="space-y-2">
              <a href="#styles-iconiques" className="block text-vinted hover:underline font-medium">1. Les styles iconiques de vestes cuir</a>
              <a href="#perfecto" className="block text-vinted hover:underline font-medium">2. Le perfecto : légende du cuir</a>
              <a href="#aviateur-bomber" className="block text-vinted hover:underline font-medium">3. Blouson aviateur et bomber</a>
              <a href="#marques-recherchees" className="block text-vinted hover:underline font-medium">4. Marques les plus recherchées</a>
              <a href="#authentifier" className="block text-vinted hover:underline font-medium">5. Comment authentifier une veste cuir vintage</a>
              <a href="#qualite-cuir" className="block text-vinted hover:underline font-medium">6. Reconnaître un cuir de qualité</a>
              <a href="#entretien" className="block text-vinted hover:underline font-medium">7. Entretien et rénovation</a>
              <a href="#ou-acheter" className="block text-vinted hover:underline font-medium">8. Où acheter une veste cuir vintage</a>
              <a href="#faq" className="block text-vinted hover:underline font-medium">9. FAQ</a>
            </nav>
          </div>

          {/* Section 1: Styles iconiques */}
          <section id="styles-iconiques" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-vinted rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Les styles iconiques de vestes cuir</h2>
            </div>

            <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Les vestes en cuir vintage se déclinent en plusieurs styles emblématiques, chacun
                ayant son histoire et son esthétique propre. Connaître ces différences vous aidera
                à choisir la pièce qui correspond à votre style.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-pink-pastel/20 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Perfecto / Biker</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Fermeture éclair asymétrique</li>
                  <li>Col à revers avec boutons-pression</li>
                  <li>Ceinture à la taille</li>
                  <li>Style rock et rebelle</li>
                </ul>
              </div>
              <div className="bg-mint/20 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Blouson Aviateur</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Col en mouton retourné</li>
                  <li>Coupe ample et chaude</li>
                  <li>Poches plaquées</li>
                  <li>Style militaire vintage</li>
                </ul>
              </div>
              <div className="bg-vinted/10 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Bomber</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Coupe courte et ajustée</li>
                  <li>Bords-côtes élastiques</li>
                  <li>Col rond ou Mao</li>
                  <li>Style casual et urbain</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Blazer Cuir</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Coupe structurée de veste</li>
                  <li>Revers classiques</li>
                  <li>Boutons ou fermeture cachée</li>
                  <li>Style élégant et raffiné</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2: Perfecto */}
          <section id="perfecto" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-pink-pastel rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Crown className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold">Le perfecto : légende du cuir</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">L'histoire du perfecto</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Créé par <strong>Schott NYC</strong> en 1928, le perfecto a été popularisé par Marlon Brando
                  dans "L'Équipée Sauvage" (1953). Cette veste est devenue le symbole de la rébellion et
                  du rock'n'roll, portée par des icônes comme James Dean et les Ramones.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Modèle 618</strong> - Le perfecto original Schott</li>
                  <li><strong>Modèle 613</strong> - Version One Star, plus célèbre</li>
                  <li><strong>Lewis Leathers</strong> - L'équivalent britannique</li>
                  <li><strong>Vanson</strong> - Alternative américaine de qualité</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Reconnaître un vrai perfecto vintage</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold mb-2">Éléments authentiques</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>Fermetures Talon ou YKK anciennes</li>
                      <li>Cuir de vachette épais (1.2-1.4mm)</li>
                      <li>Doublure en satin matelassé</li>
                      <li>Étoile sur l'épaulette (modèle 613)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Indices de datation</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>Étiquette "Made in USA" (avant 2000)</li>
                      <li>Numéro de série sur l'étiquette</li>
                      <li>Style de la typographie</li>
                      <li>Type de fermetures éclair</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Aviateur et Bomber */}
          <section id="aviateur-bomber" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-vinted rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Blouson aviateur et bomber</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">A-2 Flight Jacket</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Le blouson A-2 est une pièce militaire américaine créée en 1931 pour l'US Army Air Corps.
                  Reconnaissable à son col chemise et ses poches plaquées, c'est un classique intemporel.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Cuir de cheval</strong> - Le plus authentique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Cuir de vachette</strong> - Plus courant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Doublure soie</strong> - Modèles de qualité</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">B-3 Shearling</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Le B-3 est la veste de bombardier par excellence, avec son col en mouton retourné
                  et sa doublure en peau de mouton. Ultra chaude, c'est la pièce hivernale ultime.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Mouton véritable</strong> - Reconnaître la laine naturelle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Sangles</strong> - Pour ajuster le col</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Poids</strong> - Une vraie est lourde (2-3kg)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: Marques recherchées */}
          <section id="marques-recherchees" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-black rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Marques les plus recherchées</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Marques américaines</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Schott NYC</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>Perfecto original</li>
                      <li>Qualité légendaire</li>
                      <li>Prix: 300-800€</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Aero Leather</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>Reproductions militaires</li>
                      <li>Cuir horsehide</li>
                      <li>Prix: 400-1000€</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Vanson</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>Vestes moto</li>
                      <li>Made in USA</li>
                      <li>Prix: 350-700€</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Marques européennes</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Lewis Leathers</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>UK, depuis 1892</li>
                      <li>Style punk rock</li>
                      <li>Prix: 500-1200€</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Belstaff</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>UK, depuis 1924</li>
                      <li>Style motard chic</li>
                      <li>Prix: 400-900€</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Chevignon</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>France, années 80</li>
                      <li>Blousons aviateur</li>
                      <li>Prix: 150-400€</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Authentifier */}
          <section id="authentifier" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-mint rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Tag className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold">Comment authentifier une veste cuir vintage</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Les points de vérification</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3">Étiquettes et marquages</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Étiquette de marque originale</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Pays de fabrication cohérent</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Numéro de série (si applicable)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Étiquette de composition</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3">Construction</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Fermetures éclair de qualité (YKK, Talon)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Coutures solides et régulières</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Doublure de qualité</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Boutons-pression gravés</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-vinted/10 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Attention aux contrefaçons</h3>
                <p className="text-gray-700">
                  Les vestes Schott et Lewis Leathers sont très copiées. Méfiez-vous des prix trop bas,
                  des étiquettes mal imprimées ou des vendeurs qui refusent de montrer l'intérieur
                  de la veste. Un vrai perfecto vintage Schott ne se vend jamais en dessous de 200€.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Qualité du cuir */}
          <section id="qualite-cuir" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-pink-pastel rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold">Reconnaître un cuir de qualité</h2>
            </div>

            <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-gray-700 leading-relaxed mb-6">
                La qualité du cuir est déterminante pour la valeur et la durabilité d'une veste vintage.
                Voici comment distinguer les différents types de cuir.
              </p>

              <h3 className="text-lg font-bold mb-4">Types de cuir par qualité</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                  <h4 className="font-bold text-green-800 mb-2">Cuir pleine fleur (Top grain)</h4>
                  <p className="text-sm text-gray-700">Le meilleur. Surface naturelle avec ses imperfections.
                  Se patine magnifiquement. C'est ce qu'on trouve sur les vestes vintage de qualité.</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                  <h4 className="font-bold text-blue-800 mb-2">Cuir corrigé (Corrected grain)</h4>
                  <p className="text-sm text-gray-700">Surface poncée et recouverte. Aspect plus uniforme
                  mais moins noble. Acceptable sur les vestes milieu de gamme.</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4 border-2 border-yellow-200">
                  <h4 className="font-bold text-yellow-800 mb-2">Cuir refendu (Split leather)</h4>
                  <p className="text-sm text-gray-700">Couche inférieure du cuir. Moins résistant,
                  souvent recouvert d'un film. À éviter pour un achat vintage.</p>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border-2 border-red-200">
                  <h4 className="font-bold text-red-800 mb-2">Simili cuir / Synthétique</h4>
                  <p className="text-sm text-gray-700">Pas du vrai cuir. Se craquelle avec le temps.
                  Fuyez les vestes "vintage" en simili vendues comme du vrai cuir.</p>
                </div>
              </div>

              <div className="bg-mint/20 rounded-lg p-4">
                <p className="text-gray-700 font-medium">
                  <strong>Test simple :</strong> Le vrai cuir absorbe légèrement l'eau et dégage une
                  odeur caractéristique. Le simili cuir perle l'eau et sent le plastique.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Entretien */}
          <section id="entretien" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-mint rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Sparkles className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold">Entretien et rénovation</h2>
            </div>

            <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold mb-4 text-vinted">Entretien régulier</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Dépoussiérer avec un chiffon doux</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Nourrir le cuir 2-3 fois par an</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Utiliser un lait ou une crème pour cuir</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Éviter les produits silicone</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4 text-vinted">Stockage</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Cintre large et rembourré</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Housse en coton respirant</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>À l'abri de la lumière et chaleur</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Jamais dans un sac plastique</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8: Où acheter */}
          <section id="ou-acheter" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-vinted rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Où acheter une veste cuir vintage</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-4 text-vinted">Plateformes en ligne</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Vinted</strong> - Large choix, négociation possible</li>
                  <li><strong>eBay</strong> - Enchères et vendeurs spécialisés</li>
                  <li><strong>Grailed</strong> - Focus mode masculine haut de gamme</li>
                  <li><strong>Etsy</strong> - Vendeurs vintage sélectionnés</li>
                  <li><strong>Vestiaire Collective</strong> - Authentification incluse</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-4 text-vinted">En boutique</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Friperies spécialisées</strong> - Sélection curatée</li>
                  <li><strong>Dépôts-ventes luxe</strong> - Pièces authentifiées</li>
                  <li><strong>Marchés vintage</strong> - Négociation en direct</li>
                  <li><strong>Brocantes</strong> - Trésors cachés</li>
                  <li><strong>Ventes aux enchères</strong> - Pièces de collection</li>
                </ul>
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
                  <h2 className="text-2xl font-bold mb-2">Vendez vos vestes cuir vintage avec VintDress</h2>
                  <p className="text-white/90">
                    Vous avez des vestes en cuir vintage à vendre sur Vinted ? Mettez-les en valeur avec nos
                    photos portées générées par IA ! Une veste bien présentée se vend jusqu'à 3 fois plus vite.
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
                <h3 className="text-lg font-bold mb-3">Quel budget pour une veste cuir vintage de qualité ?</h3>
                <p className="text-gray-700">
                  Comptez 150-300€ pour une bonne veste cuir vintage sans marque, 300-600€ pour un Schott
                  ou Vanson vintage, et 500-1200€ pour des pièces rares comme les Lewis Leathers ou les
                  vestes militaires authentiques. Le prix dépend de l'état, de la marque et de la rareté.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Comment savoir si c'est du vrai cuir ?</h3>
                <p className="text-gray-700">
                  Le vrai cuir a une odeur caractéristique, absorbe légèrement l'eau, et présente des
                  imperfections naturelles (pores, variations de couleur). Le simili cuir a un aspect
                  trop régulier, sent le plastique et l'eau perle à sa surface.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Une veste cuir vintage peut-elle être réparée ?</h3>
                <p className="text-gray-700">
                  Oui ! Un artisan cuir peut réparer les fermetures éclair, les déchirures mineures et
                  remplacer la doublure. Une bonne rénovation (nettoyage, nourrissage, reteinture) peut
                  redonner vie à une veste fatiguée. Comptez 50-200€ selon les travaux.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Comment choisir la bonne taille vintage ?</h3>
                <p className="text-gray-700">
                  Les tailles vintage sont souvent plus petites qu'aujourd'hui. Un 42 vintage peut correspondre
                  à un 40 actuel. Demandez toujours les mesures exactes (poitrine, épaules, longueur des manches)
                  et comparez avec une veste que vous possédez déjà.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Les vestes cuir vintage sont-elles un bon investissement ?</h3>
                <p className="text-gray-700">
                  Absolument ! Contrairement aux vestes neuves qui se déprécient, les vestes vintage de marques
                  reconnues (Schott, Lewis Leathers) maintiennent voire augmentent leur valeur. Une pièce
                  bien entretenue peut se revendre au même prix, voire plus cher.
                </p>
              </div>
            </div>
          </section>

          {/* Articles connexes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Articles connexes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                to="/articles/robe-vintage-femme"
                className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <h3 className="font-bold text-vinted mb-2">Robe Vintage Femme</h3>
                <p className="text-gray-600 text-sm">
                  Guide complet pour trouver la robe vintage parfaite : années 50, 60, 70.
                </p>
              </Link>
              <Link
                to="/articles/jean-levis-vintage"
                className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <h3 className="font-bold text-vinted mb-2">Jean Levi's Vintage</h3>
                <p className="text-gray-600 text-sm">
                  Guide d'achat et d'authentification des jeans Levi's vintage.
                </p>
              </Link>
            </div>
          </section>

          {/* Navigation entre articles */}
          <ArticleNavigation currentPath="/articles/veste-cuir-vintage" />
        </div>
      </article>
    </main>
  );
}
