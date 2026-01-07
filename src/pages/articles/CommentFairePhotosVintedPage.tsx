import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, Camera, CheckCircle, XCircle, Star, ArrowRight, Lightbulb, Smartphone, Sun, Image } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';
import { ArticleNavigation } from '../../components/ArticleNavigation';

export const CommentFairePhotosVintedPage: React.FC = () => {
  useSEO({
    title: "Comment Faire de Belles Photos Vinted en 2026 | VintDress",
    description: "Guide complet pour prendre de superbes photos pour Vinted. Techniques, équipement, et astuces pour des photos qui vendent. Photos portées avec mannequin IA.",
    keywords: "photos vinted, présentation vinted, mannequin IA, comment prendre photos vinted, photo portée vinted",
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px] border-b-4 border-black overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&h=400&fit=crop"
          alt="Comment prendre de belles photos Vinted"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 pb-12">
        <ArticleNavigation />

        {/* Header */}
        <header className="mb-12">
          <div className="inline-block bg-vinted text-white border-3 border-black px-3 py-1 font-display font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-4">
            CONSEILS
          </div>

          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-black mb-6 leading-tight">
            Comment Faire de Belles Photos Vinted en 2026
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-sm font-body text-gray-700 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Équipe VintDress</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>10 min de lecture</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>7 Janvier 2026</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["photos vinted", "présentation vinted", "mannequin IA", "photo portée", "ventes Vinted"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-mint border-2 border-black font-display font-bold text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Intro */}
        <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-8">
          <p className="font-body text-lg text-black leading-relaxed">
            Sur Vinted, <strong className="text-vinted">90% des décisions d'achat sont visuelles</strong>. Tes photos sont ton premier et souvent ton unique argument de vente. Une annonce avec de belles photos attire jusqu'à 5 fois plus de vues qu'une annonce avec des photos médiocres. Dans ce guide complet, tu vas découvrir toutes les techniques pour prendre des photos qui convertissent vraiment.
          </p>
        </div>

        {/* Section 1 - Les 3 méthodes */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Les 3 méthodes de présentation
          </h2>

          <p className="font-body text-black leading-relaxed mb-6">
            Il existe trois façons principales de photographier tes vêtements sur Vinted. Chacune a ses avantages et inconvénients. Voici un comparatif détaillé pour t'aider à choisir.
          </p>

          <div className="space-y-6">
            {/* Photo à plat */}
            <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <Image className="w-6 h-6 text-vinted" />
                Photo à plat (Flat Lay)
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="font-display font-bold text-green-700 mb-2">Avantages :</p>
                  <ul className="space-y-1 font-body text-black text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Facile et rapide à réaliser</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Aucun équipement spécial nécessaire</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Montre bien les détails et motifs</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-display font-bold text-red-700 mb-2">Inconvénients :</p>
                  <ul className="space-y-1 font-body text-black text-sm">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Difficile de visualiser le tombé</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Moins attrayant visuellement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Conversion plus faible</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="font-body text-black text-sm italic">
                Idéal pour : accessoires, t-shirts basiques, articles où le motif est important.
              </p>
            </div>

            {/* Photo sur cintre */}
            <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <Image className="w-6 h-6 text-vinted" />
                Photo sur cintre
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="font-display font-bold text-green-700 mb-2">Avantages :</p>
                  <ul className="space-y-1 font-body text-black text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Montre la forme du vêtement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Relativement simple à mettre en place</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Aspect plus professionnel que le flat lay</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-display font-bold text-red-700 mb-2">Inconvénients :</p>
                  <ul className="space-y-1 font-body text-black text-sm">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Ne montre pas le rendu porté</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Le cintre peut déformer certains vêtements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Requiert un fond uni derrière</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="font-body text-black text-sm italic">
                Idéal pour : chemises, vestes, robes légères.
              </p>
            </div>

            {/* Photo portée */}
            <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <Star className="w-6 h-6 text-vinted" />
                Photo portée (Le Gold Standard)
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="font-display font-bold text-green-700 mb-2">Avantages :</p>
                  <ul className="space-y-1 font-body text-black text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>+300% de vues</strong> en moyenne</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>L'acheteur visualise le rendu réel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Meilleur taux de conversion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Aspect professionnel et attractif</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-display font-bold text-red-700 mb-2">Inconvénients :</p>
                  <ul className="space-y-1 font-body text-black text-sm">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Nécessite un mannequin ou de porter soi-même</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Plus chronophage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Pas toujours à la bonne taille</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="font-body text-black text-sm">
                <strong>Solution :</strong> Avec VintDress, génère des photos portées sur mannequin IA en 30 secondes, quelle que soit la taille !
              </p>
            </div>
          </div>

          {/* Tableau comparatif */}
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-4 border-black bg-white">
              <thead>
                <tr className="bg-vinted text-white">
                  <th className="p-3 border-2 border-black font-display font-bold text-left">Critère</th>
                  <th className="p-3 border-2 border-black font-display font-bold text-center">Flat Lay</th>
                  <th className="p-3 border-2 border-black font-display font-bold text-center">Sur cintre</th>
                  <th className="p-3 border-2 border-black font-display font-bold text-center">Portée</th>
                </tr>
              </thead>
              <tbody className="font-body">
                <tr>
                  <td className="p-3 border-2 border-black font-bold">Facilité</td>
                  <td className="p-3 border-2 border-black text-center text-green-600">Facile</td>
                  <td className="p-3 border-2 border-black text-center text-yellow-600">Moyen</td>
                  <td className="p-3 border-2 border-black text-center text-red-600">Difficile</td>
                </tr>
                <tr className="bg-cream">
                  <td className="p-3 border-2 border-black font-bold">Vues</td>
                  <td className="p-3 border-2 border-black text-center">Base</td>
                  <td className="p-3 border-2 border-black text-center">+50%</td>
                  <td className="p-3 border-2 border-black text-center text-vinted font-bold">+300%</td>
                </tr>
                <tr>
                  <td className="p-3 border-2 border-black font-bold">Conversion</td>
                  <td className="p-3 border-2 border-black text-center">Faible</td>
                  <td className="p-3 border-2 border-black text-center">Moyenne</td>
                  <td className="p-3 border-2 border-black text-center text-vinted font-bold">Élevée</td>
                </tr>
                <tr className="bg-cream">
                  <td className="p-3 border-2 border-black font-bold">Temps</td>
                  <td className="p-3 border-2 border-black text-center">2 min</td>
                  <td className="p-3 border-2 border-black text-center">5 min</td>
                  <td className="p-3 border-2 border-black text-center">15 min+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2 - Équipement */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Équipement minimal requis
          </h2>

          <p className="font-body text-black leading-relaxed mb-6">
            Bonne nouvelle : tu n'as pas besoin d'un équipement professionnel pour prendre de belles photos Vinted. Voici l'essentiel.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Smartphone */}
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-14 h-14 bg-vinted border-3 border-black flex items-center justify-center mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <Smartphone className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display font-bold text-xl text-black mb-3">
                Smartphone
              </h3>
              <p className="font-body text-black text-sm mb-3">
                Ton smartphone suffit amplement ! Pas besoin d'appareil photo.
              </p>
              <ul className="space-y-1 font-body text-black text-sm">
                <li>- Nettoie l'objectif avant chaque session</li>
                <li>- Désactive le flash</li>
                <li>- Active le mode HDR si disponible</li>
                <li>- Utilise le retardateur pour éviter le flou</li>
              </ul>
            </div>

            {/* Éclairage */}
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-14 h-14 bg-mint border-3 border-black flex items-center justify-center mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <Sun className="w-7 h-7 text-black" />
              </div>
              <h3 className="font-display font-bold text-xl text-black mb-3">
                Éclairage
              </h3>
              <p className="font-body text-black text-sm mb-3">
                La lumière naturelle est ton meilleur allié, et elle est gratuite !
              </p>
              <ul className="space-y-1 font-body text-black text-sm">
                <li>- Privilégie la lumière du jour</li>
                <li>- Évite le soleil direct (ombres dures)</li>
                <li>- Positionne-toi près d'une fenêtre</li>
                <li>- Ring light en option pour l'hiver</li>
              </ul>
            </div>

            {/* Fond */}
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-14 h-14 bg-pink-pastel border-3 border-black flex items-center justify-center mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <Image className="w-7 h-7 text-black" />
              </div>
              <h3 className="font-display font-bold text-xl text-black mb-3">
                Fond neutre
              </h3>
              <p className="font-body text-black text-sm mb-3">
                Un fond simple met ton vêtement en valeur.
              </p>
              <ul className="space-y-1 font-body text-black text-sm">
                <li>- Mur blanc ou beige clair</li>
                <li>- Drap uni tendu</li>
                <li>- Carton blanc (flat lay)</li>
                <li>- Évite les fonds encombrés</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3 - Technique étape par étape */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Technique photo étape par étape
          </h2>

          <div className="space-y-4">
            {/* Étape 1 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                1
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Prépare ton vêtement
                </h3>
                <p className="font-body text-black">
                  <strong>Repasse ou défroisse</strong> ton article. Utilise un lint roller pour enlever les peluches et poils. Un vêtement froissé donne une impression de négligence et fait fuir les acheteurs.
                </p>
              </div>
            </div>

            {/* Étape 2 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                2
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Installe ton setup
                </h3>
                <p className="font-body text-black">
                  Place-toi près d'une fenêtre avec lumière naturelle. Positionne ton fond uni. Assure-toi qu'il n'y a pas d'objets distrayants dans le cadre.
                </p>
              </div>
            </div>

            {/* Étape 3 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                3
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Prends les angles essentiels
                </h3>
                <ul className="font-body text-black space-y-1">
                  <li><strong>Face avant</strong> : vue principale de l'article</li>
                  <li><strong>Face arrière</strong> : montre le dos complet</li>
                  <li><strong>Détails</strong> : étiquette, boutons, coutures, textures</li>
                  <li><strong>Défauts</strong> : sois honnête sur les imperfections</li>
                </ul>
              </div>
            </div>

            {/* Étape 4 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                4
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Cadrage et netteté
                </h3>
                <p className="font-body text-black">
                  Laisse de l'espace autour du vêtement. Centre ton article. Touche l'écran pour faire la mise au point sur le vêtement. Maintiens le téléphone stable ou utilise un trépied.
                </p>
              </div>
            </div>

            {/* Étape 5 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                5
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Retouche légère (optionnel)
                </h3>
                <p className="font-body text-black">
                  Ajuste légèrement la luminosité et le contraste si nécessaire. Évite les filtres excessifs qui modifient les couleurs réelles du vêtement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - Photos portées game changer */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Photos portées : le game changer
          </h2>

          <div className="bg-pink-pastel border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-6">
            <div className="flex items-start gap-4">
              <Lightbulb className="w-8 h-8 text-vinted flex-shrink-0" />
              <div>
                <h3 className="font-display font-bold text-2xl text-black mb-3">
                  Pourquoi les photos portées convertissent mieux
                </h3>
                <ul className="font-body text-black space-y-2">
                  <li>
                    <strong>Projection mentale :</strong> L'acheteur s'imagine porter le vêtement
                  </li>
                  <li>
                    <strong>Rendu réaliste :</strong> On voit comment le vêtement tombe vraiment
                  </li>
                  <li>
                    <strong>Confiance accrue :</strong> Moins de risque de déception à la réception
                  </li>
                  <li>
                    <strong>+300% de vues :</strong> L'algorithme Vinted favorise ces photos
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
            <h3 className="font-display font-bold text-xl text-black mb-4">
              Le problème : tu n'as pas toujours le temps ou le mannequin
            </h3>
            <ul className="font-body text-black space-y-2 mb-4">
              <li>- Tu ne fais pas la bonne taille pour tous tes articles</li>
              <li>- Tu n'as pas envie de te montrer sur chaque photo</li>
              <li>- Un mannequin physique coûte cher et prend de la place</li>
              <li>- Photographier chaque article porté prend trop de temps</li>
            </ul>
          </div>

          {/* CTA VintDress */}
          <div className="bg-vinted border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center">
            <Camera className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
              La solution : VintDress
            </h3>
            <p className="font-body text-white mb-6 max-w-xl mx-auto">
              Génère des photos portées sur mannequin IA en 30 secondes. Personnalise le genre, la morphologie, la pose et le décor. Qualité professionnelle garantie.
            </p>
            <Link
              to="/#generateur"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-3 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              ESSAYER MAINTENANT
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Section 5 - Erreurs à éviter */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Erreurs à éviter absolument
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-8 h-8 text-red-600" />
                <h3 className="font-display font-bold text-xl text-black">
                  Mauvaise lumière
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                Photos sombres, jaunâtres ou avec des ombres dures. Toujours privilégier la lumière naturelle indirecte.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-8 h-8 text-red-600" />
                <h3 className="font-display font-bold text-xl text-black">
                  Arrière-plan encombré
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                Un lit défait, des objets trainants... Ça distrait et fait amateur. Utilise toujours un fond uni et propre.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-8 h-8 text-red-600" />
                <h3 className="font-display font-bold text-xl text-black">
                  Photos floues
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                Rien de pire qu'une photo où on ne voit pas les détails. Stabilise ton téléphone et fais la mise au point manuellement.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-8 h-8 text-red-600" />
                <h3 className="font-display font-bold text-xl text-black">
                  Pas assez de photos
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                Une seule photo ne suffit pas. Montre l'article sous tous les angles : face, dos, détails, étiquette.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-8 h-8 text-red-600" />
                <h3 className="font-display font-bold text-xl text-black">
                  Filtres excessifs
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                Les filtres qui changent les couleurs créent des attentes irréalistes et mènent à des litiges. Reste naturel.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-8 h-8 text-red-600" />
                <h3 className="font-display font-bold text-xl text-black">
                  Cacher les défauts
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                Ne cache jamais une tache ou un accroc. Photographie les défauts clairement pour éviter les retours et mauvais avis.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Questions Fréquentes
          </h2>

          <div className="space-y-4">
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Faut-il porter les vêtements soi-même sur les photos ?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                C'est l'idéal, mais pas toujours pratique. Si tu ne fais pas la bonne taille ou que tu préfères rester anonyme, utilise VintDress pour créer des photos portées sur mannequin IA.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Combien de photos dois-je mettre par annonce ?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Minimum 4 photos : face avant, face arrière, au moins un détail, et l'étiquette. L'idéal est d'utiliser les 20 photos autorisées par Vinted pour montrer l'article sous tous les angles.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Photo à plat ou photo portée ?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Les photos portées obtiennent +300% de vues en moyenne. Combine les deux : une photo portée en image principale, puis des photos à plat pour les détails.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Quel est le meilleur moment pour photographier ?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                En journée, avec de la lumière naturelle. Évite les heures de soleil direct (ombres dures) et privilégie un temps légèrement nuageux pour une lumière douce et diffuse.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Comment montrer les défauts d'un article ?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Prends une photo en gros plan du défaut avec un bon éclairage. Sois honnête dans ta description. Les acheteurs apprécient la transparence et ça évite les litiges.
              </div>
            </details>
          </div>
        </section>

        {/* Conclusion CTA */}
        <div className="bg-mint border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-12 text-center">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-black mb-4">
            Prêt à améliorer tes photos Vinted ?
          </h3>
          <p className="font-body text-black mb-6">
            Applique ces conseils dès aujourd'hui et transforme tes annonces avec VintDress !
          </p>
          <Link
            to="/#generateur"
            className="inline-flex items-center gap-2 px-8 py-4 bg-vinted text-white border-3 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            CRÉER MES PHOTOS
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Related Articles */}
        <section>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Articles liés
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { slug: "photo-porte-vinted", title: "Photos Portées sur Vinted" },
              { slug: "algorithme-vinted-visibilite", title: "Algorithme Vinted" },
              { slug: "guide-complet-photos-vinted-2025", title: "Guide Complet Photos 2025" }
            ].map((article) => (
              <Link
                key={article.slug}
                to={`/articles/${article.slug}`}
                className="block bg-pink-pastel border-3 border-black p-4 font-display font-bold text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                <ArrowRight className="w-5 h-5 mb-2 text-vinted" />
                {article.title}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
};

export default CommentFairePhotosVintedPage;
