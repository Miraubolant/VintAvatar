import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, CheckCircle, Smartphone, Shield, Star, ArrowRight, Users, ShoppingBag, CreditCard, Search, Heart } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';
import { ArticleNavigation } from '../../components/ArticleNavigation';

export const VintedCommentCaMarchePage: React.FC = () => {
  useSEO({
    title: "Vinted : Comment ça Marche ? Guide Débutant 2026 | VintDress",
    description: "Découvre comment fonctionne Vinted en 2026. Guide complet pour débutants : créer un compte, acheter, vendre, paiement et sécurité.",
    keywords: "vinted comment ca marche, comment fonctionne vinted, vinted debutant, creer compte vinted, application vinted",
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px] border-b-4 border-black overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=400&fit=crop"
          alt="Vinted Comment ça marche - Guide débutant"
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
            GUIDE
          </div>

          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-black mb-6 leading-tight">
            Vinted : Comment ça Marche ? Guide Débutant 2026
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
            {["vinted débutant", "créer compte", "application vinted", "guide complet", "VintDress"].map((tag) => (
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
            Tu as entendu parler de Vinted mais tu ne sais pas vraiment comment ça fonctionne ? Tu es au bon endroit ! Vinted, c'est <strong className="text-vinted">la plateforme N°1</strong> pour acheter et vendre des vêtements de seconde main en Europe, avec plus de <strong>80 millions d'utilisateurs</strong>. Dans ce guide, tu vas découvrir tout ce qu'il faut savoir pour commencer.
          </p>
        </div>

        {/* Section 1 - Qu'est-ce que Vinted */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Qu'est-ce que Vinted ?
          </h2>

          <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
            <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
              <Users className="w-6 h-6 text-vinted" />
              La marketplace de mode
            </h3>
            <p className="font-body text-black leading-relaxed mb-4">
              Vinted est une application et un site web qui permet de :
            </p>
            <ul className="space-y-2 font-body text-black">
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Vendre</strong> tes vêtements, chaussures et accessoires que tu ne portes plus</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Acheter</strong> des articles de seconde main à prix réduit</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Échanger</strong> directement avec d'autres utilisateurs</span>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
              <p className="font-display font-bold text-3xl text-vinted mb-2">80M+</p>
              <p className="font-body text-black">Utilisateurs</p>
            </div>
            <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
              <p className="font-display font-bold text-3xl text-vinted mb-2">20+</p>
              <p className="font-body text-black">Pays</p>
            </div>
            <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
              <p className="font-display font-bold text-3xl text-vinted mb-2">0%</p>
              <p className="font-body text-black">Commission vendeur</p>
            </div>
          </div>
        </section>

        {/* Section 2 - Vinted est-il gratuit */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Vinted est-il gratuit ?
          </h2>

          <div className="space-y-6">
            <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-vinted" />
                Pour les vendeurs : 100% GRATUIT
              </h3>
              <p className="font-body text-black leading-relaxed">
                Vinted ne prend <strong className="text-vinted">aucune commission</strong> sur tes ventes. Tu reçois 100% du prix de vente. C'est ce qui différencie Vinted de plateformes comme Vestiaire Collective ou eBay.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4">
                Pour les acheteurs : Protection payante
              </h3>
              <p className="font-body text-black leading-relaxed mb-4">
                L'acheteur paye une "Protection acheteur" qui comprend :
              </p>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>5% du prix</strong> de l'article + 0,70€ fixe</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Remboursement si l'article ne correspond pas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Protection contre les arnaques</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3 - Créer un compte */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Créer son compte étape par étape
          </h2>

          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                1
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2 flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-vinted" />
                  Télécharge l'application
                </h3>
                <p className="font-body text-black">
                  Disponible sur iOS (App Store) et Android (Google Play). Tu peux aussi utiliser le site web vinted.fr.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                2
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Inscris-toi
                </h3>
                <p className="font-body text-black">
                  Avec ton email, ou via Google, Facebook ou Apple. C'est instantané et gratuit.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                3
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Complète ton profil
                </h3>
                <p className="font-body text-black">
                  Ajoute une photo de profil, une bio, et vérifie ton numéro de téléphone. Un profil complet inspire confiance !
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                4
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Vérifie ton identité (recommandé)
                </h3>
                <p className="font-body text-black">
                  Optionnel mais recommandé pour débloquer toutes les fonctionnalités et rassurer les autres utilisateurs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - L'interface */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            L'interface Vinted expliquée
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <Search className="w-5 h-5 text-vinted" />
                Recherche et Filtres
              </h3>
              <p className="font-body text-black">
                Cherche par mot-clé, marque, taille, couleur, état, prix... Les filtres sont très puissants pour trouver exactement ce que tu cherches.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-vinted" />
                Favoris
              </h3>
              <p className="font-body text-black">
                Ajoute des articles en favoris pour les retrouver facilement. Tu seras notifié si le prix baisse !
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-vinted" />
                Mon Dressing
              </h3>
              <p className="font-body text-black">
                C'est ta boutique personnelle. Tous tes articles en vente y sont regroupés. Soigne-le comme une vitrine !
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-vinted" />
                Porte-monnaie
              </h3>
              <p className="font-body text-black">
                L'argent de tes ventes arrive ici. Tu peux le transférer vers ton compte bancaire ou l'utiliser pour acheter sur Vinted.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 - Comment vendre */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Comment ça marche pour vendre
          </h2>

          <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
            <h3 className="font-display font-bold text-xl text-black mb-4">Les 5 étapes clés</h3>
            <ol className="space-y-3 font-body text-black">
              <li className="flex items-start gap-2">
                <span className="font-display font-bold text-vinted">1.</span>
                <span>Prends des photos de qualité de ton article</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-display font-bold text-vinted">2.</span>
                <span>Crée une annonce avec titre, description et prix</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-display font-bold text-vinted">3.</span>
                <span>Attends qu'un acheteur achète ou fais une offre</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-display font-bold text-vinted">4.</span>
                <span>Envoie le colis avec l'étiquette prépayée</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-display font-bold text-vinted">5.</span>
                <span>Reçois l'argent sur ton porte-monnaie Vinted</span>
              </li>
            </ol>
          </div>

          <div className="bg-vinted border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-white mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-white" />
              Astuce VintDress
            </h3>
            <p className="font-body text-white leading-relaxed mb-4">
              Les <strong>photos sur mannequin IA</strong> augmentent tes vues de 300%. Transforme tes photos en 30 secondes avec VintDress !
            </p>
            <Link
              to="/#generateur"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-vinted border-3 border-black font-display font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              ESSAYER VINTDRESS
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Section 6 - Comment acheter */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Comment ça marche pour acheter
          </h2>

          <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <ol className="space-y-4 font-body text-black">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-vinted text-white rounded-full flex items-center justify-center font-display font-bold">1</span>
                <div>
                  <strong>Trouve un article</strong> - Utilise la recherche et les filtres pour trouver ce que tu cherches
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-vinted text-white rounded-full flex items-center justify-center font-display font-bold">2</span>
                <div>
                  <strong>Vérifie le vendeur</strong> - Regarde les avis, le nombre de ventes, l'ancienneté du compte
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-vinted text-white rounded-full flex items-center justify-center font-display font-bold">3</span>
                <div>
                  <strong>Achète ou fais une offre</strong> - Tu peux négocier le prix avec le vendeur
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-vinted text-white rounded-full flex items-center justify-center font-display font-bold">4</span>
                <div>
                  <strong>Paye en ligne</strong> - Carte bancaire, PayPal, Apple Pay...
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-vinted text-white rounded-full flex items-center justify-center font-display font-bold">5</span>
                <div>
                  <strong>Reçois et valide</strong> - Tu as 2 jours pour valider ou signaler un problème
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Section 7 - Vinted est-il fiable */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Vinted est-il fiable ?
          </h2>

          <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-vinted" />
              Les protections Vinted
            </h3>
            <ul className="space-y-4 font-body text-black">
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <div>
                  <strong>Protection acheteur</strong> : Si l'article ne correspond pas à la description ou n'arrive pas, tu es remboursé.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <div>
                  <strong>Paiement sécurisé</strong> : L'argent est bloqué jusqu'à ce que l'acheteur valide la réception.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <div>
                  <strong>Évaluations</strong> : Les avis des autres utilisateurs t'aident à identifier les vendeurs fiables.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <div>
                  <strong>Support client</strong> : Une équipe est disponible pour résoudre les litiges.
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-12 text-center">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
            Prêt à commencer sur Vinted ?
          </h3>
          <p className="font-body text-white mb-6">
            Maintenant que tu sais comment ça marche, booste tes ventes avec des photos professionnelles !
          </p>
          <Link
            to="/#generateur"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-3 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            CRÉER MES PHOTOS
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Questions Fréquentes
          </h2>

          <div className="space-y-4">
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                L'application Vinted est-elle gratuite ?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Oui, l'application est 100% gratuite à télécharger et utiliser. Vinted ne prend aucune commission sur les ventes. Seuls les acheteurs payent une protection (5% + 0,70€).
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Comment créer un compte Vinted ?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Télécharge l'app sur iOS ou Android, clique sur "S'inscrire", et utilise ton email ou un compte Google/Facebook/Apple. C'est instantané !
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Vinted est-il sécurisé ?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Oui, Vinted offre une protection acheteur qui te rembourse si l'article ne correspond pas. Le paiement est sécurisé et l'argent est bloqué jusqu'à validation de la réception.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Combien peut-on gagner sur Vinted ?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Ça dépend de ce que tu vends ! Certains vendeurs gagnent quelques dizaines d'euros par mois, d'autres plusieurs centaines. Avec de bonnes photos et des prix compétitifs, tu peux vendre rapidement.
              </div>
            </details>
          </div>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Articles liés
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { slug: "comment-vendre-sur-vinted", title: "Comment Vendre sur Vinted" },
              { slug: "comment-acheter-sur-vinted", title: "Comment Acheter sur Vinted" },
              { slug: "paiement-vinted-guide", title: "Paiement Vinted : Guide" }
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

export default VintedCommentCaMarchePage;
