import React from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../../hooks/useSEO';
import { ArticleNavigation } from '../../components/ArticleNavigation';
import { Calendar, Clock, User, Tag, Star, Search, CheckCircle, TrendingUp, ShoppingBag, Award, AlertTriangle, Sparkles } from 'lucide-react';

export default function JeanLevisVintagePage() {
  useSEO({
    title: "Jean Levi's Vintage : Guide d'Achat et Authentification 2026 | VintDress",
    description: "Guide complet jean Levi's vintage : comment authentifier un 501, identifier les modèles rares, où acheter et à quel prix. Conseils experts pour collectionneurs.",
    keywords: "jean levis vintage, levi's 501 vintage, authentifier levis, levis ancien, jean vintage, levi's collectionneur, vinted levis",
    canonicalUrl: "https://vintdress.com/articles/jean-levis-vintage",
    ogType: "article"
  });

  return (
    <div className="min-h-screen bg-grain">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link to="/" className="text-gray-600 hover:text-vinted transition-colors">
                Accueil
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link to="/blog" className="text-gray-600 hover:text-vinted transition-colors">
                Blog
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-vinted font-medium">Jean Levi's Vintage</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-vinted text-white text-sm font-medium border-2 border-black">
              Guide Expert
            </span>
            <span className="px-3 py-1 bg-mint text-black text-sm font-medium border-2 border-black">
              Vintage
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
            Jean Levi's Vintage : Le Guide Complet pour Authentifier et Acheter en 2026
          </h1>

          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            Découvrez comment reconnaître un authentique jean Levi's vintage, identifier les modèles les plus recherchés
            et dénicher les meilleures pièces sur Vinted et les friperies en ligne.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <time dateTime="2026-01-13">13 janvier 2026</time>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>14 min de lecture</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>VintDress</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <img
            src="https://images.unsplash.com/photo-1542272604-787c3835535d?w=1200&h=600&fit=crop"
            alt="Jean Levi's vintage authentique - Guide d'achat et collection"
            className="w-full h-64 sm:h-80 lg:h-96 object-cover"
          />
        </div>

        {/* Table of Contents */}
        <div className="bg-white border-4 border-black p-6 mb-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
            <Tag className="w-5 h-5 text-vinted" />
            Sommaire
          </h2>
          <nav>
            <ol className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2 hover:text-vinted transition-colors">
                <span className="font-bold text-vinted">1.</span>
                <a href="#histoire">L'histoire légendaire de Levi's</a>
              </li>
              <li className="flex items-center gap-2 hover:text-vinted transition-colors">
                <span className="font-bold text-vinted">2.</span>
                <a href="#authentification">Comment authentifier un Levi's vintage</a>
              </li>
              <li className="flex items-center gap-2 hover:text-vinted transition-colors">
                <span className="font-bold text-vinted">3.</span>
                <a href="#modeles">Les modèles emblématiques et leur cote</a>
              </li>
              <li className="flex items-center gap-2 hover:text-vinted transition-colors">
                <span className="font-bold text-vinted">4.</span>
                <a href="#acheter">Où acheter ses Levi's vintage</a>
              </li>
              <li className="flex items-center gap-2 hover:text-vinted transition-colors">
                <span className="font-bold text-vinted">5.</span>
                <a href="#prix">Guide des prix 2026</a>
              </li>
              <li className="flex items-center gap-2 hover:text-vinted transition-colors">
                <span className="font-bold text-vinted">6.</span>
                <a href="#vendre">Conseils pour vendre ses Levi's vintage</a>
              </li>
              <li className="flex items-center gap-2 hover:text-vinted transition-colors">
                <span className="font-bold text-vinted">7.</span>
                <a href="#faq">FAQ</a>
              </li>
            </ol>
          </nav>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">

          {/* Introduction */}
          <div className="bg-mint/30 border-4 border-black p-6 mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-lg leading-relaxed m-0">
              Le <strong>jean Levi's vintage</strong> est devenu un véritable objet de collection. Un 501 des années 1950
              peut se vendre plusieurs milliers d'euros, tandis que les modèles des années 80-90 restent accessibles
              et très prisés des amateurs de mode vintage. Ce guide vous apprend à reconnaître les pièces authentiques
              et à faire les meilleures affaires.
            </p>
          </div>

          {/* Section 1 */}
          <section id="histoire" className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-black mb-6 flex items-center gap-3">
              <Award className="w-8 h-8 text-vinted" />
              L'Histoire Légendaire de Levi's
            </h2>

            <p>
              Fondée en 1853 par Levi Strauss, la marque a révolutionné le monde du vêtement avec l'invention du
              blue jean en 1873. Le <strong>brevet des rivets</strong> déposé avec Jacob Davis a donné naissance
              au jean moderne. Cette histoire riche fait du Levi's vintage un patrimoine culturel américain.
            </p>

            <div className="bg-white border-4 border-black p-6 my-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display text-xl font-bold mb-4">Les Grandes Époques Levi's</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-20 font-bold text-vinted shrink-0">1873-1936</div>
                  <p className="m-0">Ère des "XX" - Premiers jeans avec rivets, très rares et cotés (10 000€+)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-20 font-bold text-vinted shrink-0">1936-1971</div>
                  <p className="m-0">Ère "Big E" - Le E majuscule sur l'étiquette rouge, très recherchés (500-5000€)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-20 font-bold text-vinted shrink-0">1971-1983</div>
                  <p className="m-0">Transition "small e" - Toujours Made in USA, belle qualité (150-500€)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-20 font-bold text-vinted shrink-0">1983-1999</div>
                  <p className="m-0">Ère moderne vintage - Production variée, accessibles (50-200€)</p>
                </div>
              </div>
            </div>

            <p>
              La qualité du denim a évolué au fil des décennies. Les puristes recherchent particulièrement
              le <strong>selvedge denim</strong> (lisière tissée) des anciennes productions, reconnaissable
              à sa finition blanche ou rouge sur l'intérieur de la couture.
            </p>
          </section>

          {/* Section 2 */}
          <section id="authentification" className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-black mb-6 flex items-center gap-3">
              <Search className="w-8 h-8 text-vinted" />
              Comment Authentifier un Levi's Vintage
            </h2>

            <p>
              L'authentification d'un jean Levi's vintage repose sur plusieurs critères. Voici les points
              essentiels à vérifier pour éviter les contrefaçons et identifier l'époque de fabrication.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display text-lg font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  L'Étiquette Rouge (Red Tab)
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>"Big E" LEVI'S</strong> : avant 1971</li>
                  <li><strong>"small e" Levi's</strong> : après 1971</li>
                  <li><strong>Tab blanc</strong> : années 80-90</li>
                  <li><strong>Vérifiez</strong> la couture et l'alignement</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display text-lg font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Le Patch Cuir
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>Cuir véritable</strong> : vintage authentique</li>
                  <li><strong>Carton</strong> : à partir des années 90</li>
                  <li><strong>"Two Horse"</strong> : logo emblématique</li>
                  <li><strong>Usure naturelle</strong> : signe d'authenticité</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display text-lg font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Les Rivets et Boutons
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>Rivets cachés</strong> : après 1966</li>
                  <li><strong>"LS&CO SF"</strong> : gravure authentique</li>
                  <li><strong>Patine cuivrée</strong> : usure naturelle</li>
                  <li><strong>Bouton top</strong> : numérotation usine</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display text-lg font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  L'Étiquette Intérieure
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>"CARE" tag</strong> : indique l'année</li>
                  <li><strong>Made in USA</strong> : très valorisé</li>
                  <li><strong>Lot number</strong> : identifie le modèle</li>
                  <li><strong>Taille et coupe</strong> : codification vintage</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-100 border-4 border-black p-6 my-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display text-lg font-bold mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                Attention aux Contrefaçons
              </h3>
              <ul className="space-y-2">
                <li>Les faux vintage sont courants - méfiez-vous des prix trop bas</li>
                <li>Vérifiez la cohérence entre tous les éléments (tab, patch, rivets)</li>
                <li>Le denim vintage a une texture et une odeur particulières</li>
                <li>Demandez des photos détaillées de l'étiquette care tag</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section id="modeles" className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-black mb-6 flex items-center gap-3">
              <Star className="w-8 h-8 text-vinted" />
              Les Modèles Emblématiques et Leur Cote
            </h2>

            <p>
              Chaque modèle Levi's a son histoire et sa cote. Voici les plus recherchés par les collectionneurs
              et amateurs de vintage.
            </p>

            <div className="space-y-6 my-8">
              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display text-xl font-bold">Levi's 501</h3>
                  <span className="px-3 py-1 bg-vinted text-white text-sm font-bold border-2 border-black">
                    Le Plus Iconique
                  </span>
                </div>
                <p className="text-gray-700 mb-3">
                  Le jean original depuis 1890. Coupe droite, braguette à boutons, taille haute.
                  Les 501 "Big E" et "selvedge" sont les plus cotés.
                </p>
                <div className="flex gap-4 text-sm">
                  <span className="font-bold">Cote vintage 80s-90s:</span>
                  <span className="text-vinted font-bold">80€ - 250€</span>
                </div>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display text-xl font-bold">Levi's 505</h3>
                  <span className="px-3 py-1 bg-mint text-black text-sm font-bold border-2 border-black">
                    Très Recherché
                  </span>
                </div>
                <p className="text-gray-700 mb-3">
                  Créé en 1967 avec une braguette zip. Coupe regular fit légèrement plus ajustée
                  que le 501. Populaire dans les années 70-80.
                </p>
                <div className="flex gap-4 text-sm">
                  <span className="font-bold">Cote vintage:</span>
                  <span className="text-vinted font-bold">60€ - 180€</span>
                </div>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display text-xl font-bold">Levi's 517</h3>
                  <span className="px-3 py-1 bg-pink-pastel text-black text-sm font-bold border-2 border-black">
                    Bootcut Culte
                  </span>
                </div>
                <p className="text-gray-700 mb-3">
                  Le bootcut iconique des années 70. Revenu en force avec le retour de la mode
                  rétro. Les versions "Orange Tab" sont particulièrement recherchées.
                </p>
                <div className="flex gap-4 text-sm">
                  <span className="font-bold">Cote vintage:</span>
                  <span className="text-vinted font-bold">70€ - 200€</span>
                </div>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display text-xl font-bold">Levi's 550 / 560</h3>
                  <span className="px-3 py-1 bg-gray-200 text-black text-sm font-bold border-2 border-black">
                    90s Nostalgie
                  </span>
                </div>
                <p className="text-gray-700 mb-3">
                  Les coupes relaxed et loose des années 90, très tendance aujourd'hui.
                  Parfaits pour le style baggy vintage.
                </p>
                <div className="flex gap-4 text-sm">
                  <span className="font-bold">Cote vintage:</span>
                  <span className="text-vinted font-bold">40€ - 120€</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="acheter" className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-black mb-6 flex items-center gap-3">
              <ShoppingBag className="w-8 h-8 text-vinted" />
              Où Acheter ses Levi's Vintage
            </h2>

            <p>
              Plusieurs canaux permettent de dénicher des Levi's vintage authentiques. Voici les meilleures
              options selon votre budget et vos attentes.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-4 border-black">
                <thead className="bg-vinted text-white">
                  <tr>
                    <th className="p-3 text-left font-display border-b-4 border-black">Plateforme</th>
                    <th className="p-3 text-left font-display border-b-4 border-black">Avantages</th>
                    <th className="p-3 text-left font-display border-b-4 border-black">Prix Moyens</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b-2 border-black">
                    <td className="p-3 font-bold">Vinted</td>
                    <td className="p-3">Large choix, prix négociables, protection acheteur</td>
                    <td className="p-3 text-vinted font-bold">30€ - 150€</td>
                  </tr>
                  <tr className="border-b-2 border-black bg-gray-50">
                    <td className="p-3 font-bold">eBay Vintage</td>
                    <td className="p-3">Pièces rares, vendeurs experts, enchères</td>
                    <td className="p-3 text-vinted font-bold">50€ - 500€+</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-3 font-bold">Friperies spécialisées</td>
                    <td className="p-3">Sélection curatée, authenticité garantie</td>
                    <td className="p-3 text-vinted font-bold">80€ - 300€</td>
                  </tr>
                  <tr className="border-b-2 border-black bg-gray-50">
                    <td className="p-3 font-bold">Marchés aux puces</td>
                    <td className="p-3">Bonnes affaires possibles, négociation</td>
                    <td className="p-3 text-vinted font-bold">20€ - 100€</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Vestiaire Collective</td>
                    <td className="p-3">Authentification, pièces premium</td>
                    <td className="p-3 text-vinted font-bold">100€ - 400€</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-vinted/10 border-4 border-black p-6 my-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display text-lg font-bold mb-3">Astuces pour Vinted</h3>
              <ul className="space-y-2">
                <li><strong>Recherches sauvegardées</strong> : créez des alertes "501 vintage", "Levi's Big E"</li>
                <li><strong>Filtrez par taille</strong> : attention, les tailles vintage sont plus petites</li>
                <li><strong>Demandez des mesures</strong> : tour de taille, longueur jambe, hauteur entrejambe</li>
                <li><strong>Photos détaillées</strong> : exigez tab, patch, étiquette care, rivets</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section id="prix" className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-black mb-6 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-vinted" />
              Guide des Prix 2026
            </h2>

            <p>
              Les prix des Levi's vintage varient selon l'époque, l'état et la rareté. Voici une grille
              de référence pour 2026.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display text-lg font-bold mb-4 text-center bg-green-100 -mx-5 -mt-5 p-3 border-b-4 border-black">
                  Entrée de Gamme (40-100€)
                </h3>
                <ul className="space-y-2">
                  <li>501/505 années 90 bon état</li>
                  <li>550/560 vintage complet</li>
                  <li>Modèles Made in Mexico/Asia</li>
                  <li>Usure visible mais portable</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display text-lg font-bold mb-4 text-center bg-blue-100 -mx-5 -mt-5 p-3 border-b-4 border-black">
                  Milieu de Gamme (100-250€)
                </h3>
                <ul className="space-y-2">
                  <li>501 Made in USA années 80</li>
                  <li>Orange Tab vintage excellent état</li>
                  <li>Selvedge début des années 80</li>
                  <li>Délavage original recherché</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display text-lg font-bold mb-4 text-center bg-yellow-100 -mx-5 -mt-5 p-3 border-b-4 border-black">
                  Haut de Gamme (250-800€)
                </h3>
                <ul className="space-y-2">
                  <li>Big E années 60-70</li>
                  <li>Selvedge parfait état</li>
                  <li>Modèles rares (Type III, etc.)</li>
                  <li>Dead stock (jamais porté)</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display text-lg font-bold mb-4 text-center bg-red-100 -mx-5 -mt-5 p-3 border-b-4 border-black">
                  Collection (800€+)
                </h3>
                <ul className="space-y-2">
                  <li>501 XX pre-1950s</li>
                  <li>Pièces avec historique documenté</li>
                  <li>Éditions limitées vintage</li>
                  <li>État musée / Dead stock ancien</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="vendre" className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-black mb-6 flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-vinted" />
              Conseils pour Vendre ses Levi's Vintage
            </h2>

            <p>
              Vous possédez des Levi's vintage et souhaitez les vendre au meilleur prix ?
              Voici nos conseils d'experts.
            </p>

            <div className="bg-white border-4 border-black p-6 my-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display text-xl font-bold mb-4">Checklist du Vendeur Pro</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Identifiez précisément</strong> le modèle, l'année et l'origine</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Mesurez tout</strong> : tour de taille, hanches, entrejambe, longueur totale</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Photographiez les détails</strong> : tab, patch, rivets, étiquettes, coutures</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Décrivez l'état</strong> honnêtement : usure, déchirures, réparations</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Utilisez les bons mots-clés</strong> : "501 vintage USA", "Big E selvedge"</span>
                </div>
              </div>
            </div>

            <div className="bg-mint/30 border-4 border-black p-6 my-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display text-lg font-bold mb-3">Boostez vos Ventes avec VintDress</h3>
              <p className="mb-4">
                Des photos professionnelles font toute la différence pour vendre un jean vintage.
                Avec <Link to="/" className="text-vinted font-bold hover:underline">VintDress</Link>,
                créez des visuels portés réalistes en quelques clics grâce à l'IA.
              </p>
              <Link
                to="/"
                className="inline-block bg-vinted text-white px-6 py-3 font-display font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                Essayer VintDress Gratuitement
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-black mb-6">
              Questions Fréquentes sur les Levi's Vintage
            </h2>

            <div className="space-y-4">
              <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold p-4 bg-gray-100 border-b-4 border-black">
                  Comment savoir si mon Levi's est vintage ?
                </h3>
                <p className="p-4">
                  Vérifiez l'étiquette rouge (Big E = avant 1971), le patch cuir (non carton),
                  les étiquettes intérieures "Made in USA" et la présence de selvedge sur la couture
                  intérieure. Un care tag avec code peut dater précisément le jean.
                </p>
              </div>

              <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold p-4 bg-gray-100 border-b-4 border-black">
                  Quelle est la différence entre 501 et 505 ?
                </h3>
                <p className="p-4">
                  Le 501 a une braguette à boutons et une coupe droite classique depuis 1890.
                  Le 505 (créé en 1967) a une braguette zip et une coupe légèrement plus ajustée
                  au niveau des cuisses. Les deux sont très recherchés en vintage.
                </p>
              </div>

              <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold p-4 bg-gray-100 border-b-4 border-black">
                  Les Levi's vintage taillent-ils pareil qu'aujourd'hui ?
                </h3>
                <p className="p-4">
                  Non, les tailles vintage sont généralement plus petites. Un 32 vintage correspond
                  souvent à un 30-31 actuel. Demandez toujours les mesures réelles en centimètres
                  avant d'acheter : tour de taille, hanches et entrejambe.
                </p>
              </div>

              <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold p-4 bg-gray-100 border-b-4 border-black">
                  Comment laver un jean Levi's vintage ?
                </h3>
                <p className="p-4">
                  Lavez rarement et à l'envers, à froid ou 30°C max. Évitez le sèche-linge qui
                  peut rétrécir et abîmer le denim. Certains puristes ne lavent jamais leurs
                  vintage et les aèrent simplement. Pour les odeurs, le congélateur est une option.
                </p>
              </div>

              <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold p-4 bg-gray-100 border-b-4 border-black">
                  Les Levi's vintage sont-ils un bon investissement ?
                </h3>
                <p className="p-4">
                  Les pièces rares (Big E, selvedge, Made in USA) prennent de la valeur avec le temps.
                  Un 501 Big E acheté 200€ il y a 10 ans peut valoir 500€+ aujourd'hui.
                  Privilégiez les modèles en excellent état avec toutes les étiquettes d'origine.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <div className="bg-black text-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(9,177,186,1)]">
              <h2 className="font-display text-2xl font-bold mb-4">
                Conclusion : L'Art du Jean Levi's Vintage
              </h2>
              <p className="text-gray-300 mb-4">
                Le jean Levi's vintage est bien plus qu'un simple vêtement : c'est un morceau d'histoire
                de la mode américaine. Que vous soyez collectionneur passionné ou amateur de mode durable,
                apprendre à reconnaître et apprécier ces pièces vous ouvre un monde fascinant.
              </p>
              <p className="text-gray-300">
                Sur Vinted et les friperies en ligne, les opportunités sont nombreuses pour qui sait regarder.
                Armé de ce guide, vous êtes maintenant prêt à dénicher votre prochain trésor vintage !
              </p>
            </div>
          </section>

        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['Jean Levi\'s Vintage', '501', 'Authentification', 'Vinted', 'Mode Vintage', 'Denim', 'Collection'].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm border-2 border-black hover:bg-vinted hover:text-white transition-colors cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Article Navigation */}
        <ArticleNavigation currentArticleId="jean-levis-vintage" />
      </article>
    </div>
  );
}
