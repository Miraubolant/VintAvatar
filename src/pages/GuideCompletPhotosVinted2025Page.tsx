import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, XCircle, Lightbulb, AlertTriangle, Zap, Camera, Sparkles } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { ArticleNavigation } from '../components/ArticleNavigation';

export const GuideCompletPhotosVinted2025Page: React.FC = () => {
  useSEO({
    title: "Guide Complet : Optimiser tes Photos Vinted en 2025 | VintDress",
    description: "Guide complet 2025 pour optimiser tes photos Vinted. Techniques pro, IA, stratégies avancées. +200% de vues garanties !",
    keywords: "guide photos vinted 2025, optimiser photos vinted, photos IA vinted, vendre plus vinted, guide complet vinted",
  });

  return (
    <div className="min-h-screen bg-cream -mt-16 sm:-mt-20 lg:-mt-24 pt-16 sm:pt-20 lg:pt-24">
      {/* Hero Image Section */}
      <div className="relative h-[400px] lg:h-[500px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1200&h=500&fit=crop"
          alt="Guide Complet Photos Vinted 2025"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-white text-4xl lg:text-6xl mb-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              GUIDE COMPLET 2025
            </h1>
            <p className="font-display font-bold text-mint text-xl lg:text-2xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              Optimiser tes Photos Vinted
            </p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 lg:py-20">
        <ArticleNavigation />

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 bg-vinted text-white border-3 border-black font-display font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              GUIDE
            </span>
            <span className="font-body text-sm text-gray-600">Par Équipe VintedAvatar</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">15 Novembre 2025</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">12 min de lecture</span>
          </div>

          <h1 className="font-display font-bold text-4xl lg:text-5xl text-black mb-4">
            Guide Complet : Optimiser tes Photos Vinted en 2025
          </h1>

          <p className="font-body text-lg text-gray-700 mb-6">
            Le guide ultime pour créer des photos Vinted qui convertissent en 2025. Toutes les techniques révélées !
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["Guide", "Photos", "Vinted", "2025", "IA", "Optimisation"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white border-2 border-black text-black font-body text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-vinted border-4 border-black p-6 mb-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-display font-bold text-white text-lg">
            2025 marque une nouvelle ère pour la vente en ligne. Avec l'explosion de l'IA et les nouvelles attentes des acheteurs, tes photos Vinted doivent être parfaites.
          </p>
        </div>

        {/* Évolution du E-Commerce */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            L'Évolution du E-Commerce en 2025
          </h2>

          <div className="bg-pink-pastel border-3 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4">
              Ce qui a changé
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="bg-white border-2 border-black p-3">
                <p className="font-body text-sm text-gray-700">✓ Standards visuels plus élevés</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-body text-sm text-gray-700">✓ Première impression cruciale</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-body text-sm text-gray-700">✓ IA dans les habitudes d'achat</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-body text-sm text-gray-700">✓ Mobile-first : 95% des vues</p>
              </div>
            </div>
          </div>
        </section>

        {/* Chapitre 1: Fondamentaux */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Chapitre 1 : Les Fondamentaux 2025
          </h2>

          <div className="space-y-6">
            {/* 1.1 Règle des 3 secondes */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-3">
                1.1 La Règle des 3 Secondes
              </h3>
              <p className="font-body text-gray-700">
                Les acheteurs décident en 3 secondes si ton article les intéresse. Ta photo principale doit être <strong>parfaite</strong>.
              </p>
            </div>

            {/* 1.2 Formats optimaux */}
            <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                1.2 Formats Optimaux
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700"><strong>Ratio 4:5</strong> : Le format préféré de Vinted</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700"><strong>Résolution minimum</strong> : 1080x1350px</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700"><strong>Poids maximum</strong> : 10MB pour éviter la compression</span>
                </li>
              </ul>
            </div>

            {/* 1.3 Éclairage */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                1.3 Éclairage Naturel vs Artificiel
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-mint border-2 border-black p-4">
                  <h4 className="font-display font-bold text-sm text-black mb-2">ÉCLAIRAGE NATUREL</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Fenêtre nord : lumière douce</span></li>
                    <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Éviter 12h-14h (trop fort)</span></li>
                    <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Nuages = diffuseur parfait</span></li>
                  </ul>
                </div>
                <div className="bg-pink-pastel border-2 border-black p-4">
                  <h4 className="font-display font-bold text-sm text-black mb-2">ÉCLAIRAGE ARTIFICIEL</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Ring light minimum 18"</span></li>
                    <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Température 5500K</span></li>
                    <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Éviter le flash direct</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapitre 2: Mise en Scène */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Chapitre 2 : Mise en Scène Professionnelle
          </h2>

          <div className="space-y-6">
            {/* Backgrounds */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                Top 3 des Arrière-Plans 2025
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white border-2 border-black p-4 text-center">
                  <div className="w-12 h-12 bg-white border-2 border-black mx-auto mb-2"></div>
                  <p className="font-display font-bold text-sm text-black mb-1">1. Blanc pur</p>
                  <p className="font-body text-xs text-gray-600">Intemporel, met en valeur</p>
                </div>
                <div className="bg-cream border-2 border-black p-4 text-center">
                  <div className="w-12 h-12 bg-cream border-2 border-black mx-auto mb-2"></div>
                  <p className="font-display font-bold text-sm text-black mb-1">2. Beige naturel</p>
                  <p className="font-body text-xs text-gray-600">Chaleureux, slow fashion</p>
                </div>
                <div className="bg-gray-200 border-2 border-black p-4 text-center">
                  <div className="w-12 h-12 bg-gray-300 border-2 border-black mx-auto mb-2"></div>
                  <p className="font-display font-bold text-sm text-black mb-1">3. Gris clair</p>
                  <p className="font-body text-xs text-gray-600">Moderne, tons sombres</p>
                </div>
              </div>
            </div>

            {/* Composition */}
            <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-3">
                Composition et Angles
              </h3>
              <div className="space-y-2">
                <p className="font-body text-sm text-gray-700"><strong>La règle des tiers :</strong></p>
                <ul className="space-y-1">
                  <li className="flex gap-2"><Camera className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Article principal sur intersection</span></li>
                  <li className="flex gap-2"><Camera className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Espace négatif pour respiration</span></li>
                  <li className="flex gap-2"><Camera className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Angle légèrement en diagonale</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Chapitre 3: Révolution IA */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Chapitre 3 : La Révolution IA
          </h2>

          <div className="bg-vinted border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              Pourquoi l'IA Change Tout
            </h3>
            <p className="font-body text-white mb-4">
              L'intelligence artificielle permet maintenant de créer des photos portées ultra-réalistes sans mannequin.
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-white border-2 border-black p-4">
                <p className="font-display font-bold text-black mb-1">Consistance</p>
                <p className="font-body text-sm text-gray-700">Qualité pro garantie</p>
              </div>
              <div className="bg-white border-2 border-black p-4">
                <p className="font-display font-bold text-black mb-1">Rapidité</p>
                <p className="font-body text-sm text-gray-700">30 secondes vs 30 minutes</p>
              </div>
              <div className="bg-white border-2 border-black p-4">
                <p className="font-display font-bold text-black mb-1">Diversité</p>
                <p className="font-body text-sm text-gray-700">Plusieurs modèles et poses</p>
              </div>
              <div className="bg-white border-2 border-black p-4">
                <p className="font-display font-bold text-black mb-1">ROI</p>
                <p className="font-body text-sm text-gray-700">+300% de vues</p>
              </div>
            </div>
          </div>

          {/* Quand utiliser l'IA */}
          <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-500" />
              Quand Utiliser l'IA
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-gray-700">Vêtements difficiles à porter</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-gray-700">Articles de valeur</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-gray-700">Pièces uniques ou vintage</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-gray-700">Quand tu manques de temps</span>
              </div>
            </div>
          </div>
        </section>

        {/* Chapitre 4: Stratégies Avancées */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Chapitre 4 : Stratégies Avancées
          </h2>

          <div className="space-y-6">
            {/* Séquençage */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                Séquençage des Photos
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white">1</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-black">Vue portée IA</p>
                    <p className="font-body text-sm text-gray-600">Accroche principale</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white">2</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-black">Détail matière/étiquette</p>
                    <p className="font-body text-sm text-gray-600">Preuve de qualité</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white">3</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-black">Vue d'ensemble article seul</p>
                    <p className="font-body text-sm text-gray-600">Contexte complet</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white">4</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-black">Défauts éventuels</p>
                    <p className="font-body text-sm text-gray-600">Transparence</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Optimisation Mobile */}
            <div className="bg-pink-pastel border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-3">
                Optimisation Mobile (95% des vues)
              </h3>
              <ul className="space-y-2">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Texte lisible même en miniature</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Contrastes marqués pour la visibilité</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Éléments centrés pour éviter la coupure</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Chapitre 5: Erreurs à Éviter */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Chapitre 5 : Erreurs à Éviter Absolument
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3 mb-2">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-bold text-black">Photos floues</h3>
              </div>
              <p className="font-body text-sm text-gray-700">-70% de vues</p>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3 mb-2">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-bold text-black">Éclairage jaune</h3>
              </div>
              <p className="font-body text-sm text-gray-700">Dénature les couleurs</p>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3 mb-2">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-bold text-black">Arrière-plan encombré</h3>
              </div>
              <p className="font-body text-sm text-gray-700">Distrait l'attention</p>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3 mb-2">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-bold text-black">Multiple articles</h3>
              </div>
              <p className="font-body text-sm text-gray-700">Confusion garantie</p>
            </div>
          </div>

          <div className="bg-pink-pastel border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-500" />
              Pièges Spécifiques 2025
            </h3>
            <ul className="space-y-2">
              <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700"><strong>Sur-saturation</strong> : Les écrans modernes révèlent tout</span></li>
              <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700"><strong>Filtres Instagram</strong> : Faussent la réalité</span></li>
              <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700"><strong>Photos trop retouchées</strong> : Perte de confiance acheteur</span></li>
            </ul>
          </div>
        </section>

        {/* Chapitre 6: Cas Pratiques */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Chapitre 6 : Cas Pratiques par Catégorie
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Robes et Jupes */}
            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3">Robes et Jupes</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>IA recommandée</strong> : Voir la tombée</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Pose</strong> : Debout, rotation hanches</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Focus</strong> : Longueur et coupe</span></li>
              </ul>
            </div>

            {/* Hauts et T-shirts */}
            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3">Hauts et T-shirts</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Buste</strong> : Cintré pour voir la forme</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Détails</strong> : Col, manches, motifs</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Plis</strong> : Éviter absolument</span></li>
              </ul>
            </div>

            {/* Pantalons et Jeans */}
            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3">Pantalons et Jeans</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Jambes</strong> : Droites, non croisées</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Taille</strong> : Bien visible</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Ourlets</strong> : Longueur claire</span></li>
              </ul>
            </div>

            {/* Chaussures */}
            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3">Chaussures</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Profil</strong> : Vue latérale obligatoire</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Semelles</strong> : État d'usure visible</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Paire</strong> : Toujours les deux</span></li>
              </ul>
            </div>

            {/* Accessoires */}
            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3">Accessoires</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Proportions</strong> : Référence de taille</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Brillance</strong> : Éviter les reflets</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Détails</strong> : Fermoirs, chaînes</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Chapitre 7: Outils */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Chapitre 7 : Outils et Equipment
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-mint border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3">Smartphone</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">12MP minimum</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Stabilisation optique</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Mode portrait</span></li>
              </ul>
            </div>

            <div className="bg-pink-pastel border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3">Applications</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">VSCO</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Snapseed</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Lightroom Mobile</span></li>
              </ul>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3">Equipment Pro</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Trépied</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Télécommande</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Réflecteur</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Plan d'Action */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Ton Plan d'Action 2025
          </h2>

          <div className="bg-vinted border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-vinted">1</span>
                </div>
                <p className="font-body text-white"><strong>Audite tes photos actuelles</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-vinted">2</span>
                </div>
                <p className="font-body text-white"><strong>Identifie tes 5 meilleures pièces</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-vinted">3</span>
                </div>
                <p className="font-body text-white"><strong>Teste l'IA sur ces articles</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-vinted">4</span>
                </div>
                <p className="font-body text-white"><strong>Compare les résultats</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-vinted">5</span>
                </div>
                <p className="font-body text-white"><strong>Adopte la stratégie gagnante</strong></p>
              </div>
            </div>

            <div className="bg-white border-3 border-black p-4 mt-6">
              <p className="font-display font-bold text-black mb-2">
                Le secret en 2025
              </p>
              <p className="font-body text-sm text-gray-700">
                Mélanger intelligemment photos IA et photos traditionnelles selon le type d'article et ton budget temps.
              </p>
            </div>

            <div className="bg-mint border-3 border-black p-4 mt-4">
              <p className="font-display font-bold text-black mb-2">
                Résultat Garanti
              </p>
              <p className="font-body text-sm text-gray-700">
                +200% de vues minimum, délais de vente divisés par 3.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Questions Fréquentes
          </h2>
          <div className="space-y-3">
            {/* FAQ 1 */}
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>Quel format de photo utiliser sur Vinted ?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Le format optimal est 4:5 (1080x1350px) qui s'affiche parfaitement sur mobile et desktop.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>Combien de photos faut-il mettre sur une annonce Vinted ?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  L'idéal est 5 photos : une principale portée, des détails, une vue arrière et l'étiquette.
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>L'IA peut-elle vraiment améliorer mes ventes ?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Oui, les utilisateurs constatent en moyenne +300% de vues et +250% de ventes avec des photos IA.
                </p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>Combien de temps pour créer une photo IA ?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Seulement 30 secondes pour générer une photo portée professionnelle avec VintDress.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              Prêt à Révolutionner tes Photos Vinted ?
            </h2>
            <p className="font-body text-white mb-6 max-w-2xl mx-auto">
              Teste notre IA dès maintenant et rejoins les vendeurs qui dominent Vinted en 2025.
            </p>
            <Link
              to="/#generator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-4 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              TESTER L'IA MAINTENANT
              <Zap className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="font-display font-bold text-2xl text-black mb-6">
            Articles Liés
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              to="/articles/5-astuces-pour-vendre-plus-vite-sur-vinted"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">5 Astuces pour Vendre Plus Vite</h3>
              <p className="font-body text-sm text-gray-600">Optimise tes ventes avec ces stratégies éprouvées.</p>
            </Link>
            <Link
              to="/articles/strategie-vente-vinted-2025"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">Stratégie de Vente Vinted 2025</h3>
              <p className="font-body text-sm text-gray-600">La stratégie complète pour dominer Vinted cette année.</p>
            </Link>
            <Link
              to="/articles/mannequin-ia-vinted"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">Mannequin IA Vinted</h3>
              <p className="font-body text-sm text-gray-600">Découvre comment un mannequin IA peut transformer tes photos.</p>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default GuideCompletPhotosVinted2025Page;
