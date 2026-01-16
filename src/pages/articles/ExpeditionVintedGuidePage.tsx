import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, CheckCircle, Package, Truck, MapPin, AlertTriangle, Star, ArrowRight, Euro, Shield, Box } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';
import { ArticleNavigation } from '../../components/ArticleNavigation';

export const ExpeditionVintedGuidePage: React.FC = () => {
  useSEO({
    title: "Expédition Vinted : Guide Complet Envoi de Colis 2026 | VintDress",
    description: "Comment envoyer un colis Vinted ? Guide complet : options d'expédition, frais de port, emballage, points relais. Tout savoir sur l'envoi Vinted.",
    keywords: "expedition vinted, envoi colis vinted, frais de port vinted, comment envoyer vinted, point relais vinted",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px] border-b-4 border-black overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1200&h=400&fit=crop"
          alt="Expédition Vinted - Guide complet envoi de colis"
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
            Expédition Vinted : Guide Complet Envoi de Colis 2026
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-sm font-body text-gray-700 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Équipe VintDress</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>8 min de lecture</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>7 Janvier 2026</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["expédition vinted", "envoi colis", "frais de port", "point relais", "VintDress"].map((tag) => (
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
            Tu viens de vendre ton premier article sur Vinted ? Félicitations ! Maintenant, il faut l'envoyer à l'acheteur. Pas de panique : l'expédition Vinted est simple et bien organisée. Dans ce guide, tu vas apprendre <strong className="text-vinted">comment envoyer un colis</strong>, qui paye les frais, et comment obtenir des avis 5 étoiles grâce à un envoi soigné.
          </p>
        </div>

        {/* Section 1 - Options d'expédition */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Options d'expédition disponibles
          </h2>

          <div className="space-y-6">
            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <Truck className="w-6 h-6 text-vinted" />
                Mondial Relay (Points Relais)
              </h3>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Prix</strong> : À partir de 2,79€</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Délai</strong> : 3-5 jours ouvrés</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Avantage</strong> : Le moins cher, nombreux points de dépôt</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Poids max</strong> : Jusqu'à 30kg selon le format</span>
                </li>
              </ul>
            </div>

            <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <Package className="w-6 h-6 text-vinted" />
                Colissimo (La Poste)
              </h3>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Prix</strong> : À partir de 4,29€</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Délai</strong> : 2-3 jours ouvrés</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Avantage</strong> : Livraison à domicile possible, rapide</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Poids max</strong> : Jusqu'à 30kg</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-vinted" />
                Remise en main propre
              </h3>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Prix</strong> : Gratuit !</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Avantage</strong> : Pas de frais, rencontre directe</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Inconvénient</strong> : Nécessite de se déplacer, pas de protection Vinted</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2 - Qui paye quoi */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Qui paye quoi ?
          </h2>

          <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
            <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
              <Euro className="w-6 h-6 text-vinted" />
              Répartition des frais
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-white border-3 border-black">
                <p className="font-display font-bold text-black mb-2">Frais de port</p>
                <p className="font-body text-black">Payés par <strong className="text-vinted">l'acheteur</strong>. Tu n'as rien à débourser !</p>
              </div>
              <div className="p-4 bg-white border-3 border-black">
                <p className="font-display font-bold text-black mb-2">Protection acheteur</p>
                <p className="font-body text-black">5% du prix + 0,70€, payés par <strong className="text-vinted">l'acheteur</strong></p>
              </div>
              <div className="p-4 bg-white border-3 border-black">
                <p className="font-display font-bold text-black mb-2">Commission vendeur</p>
                <p className="font-body text-black"><strong className="text-vinted">0% !</strong> Tu reçois 100% du prix de vente</p>
              </div>
            </div>
          </div>

          <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4">Exemple concret</h3>
            <div className="font-body text-black space-y-2">
              <p>Tu vends un t-shirt à <strong>15€</strong></p>
              <p>L'acheteur paye : 15€ + 3,50€ (port) + 1,45€ (protection) = <strong>19,95€</strong></p>
              <p>Tu reçois : <strong className="text-vinted">15€</strong> (100% du prix de vente)</p>
            </div>
          </div>
        </section>

        {/* Section 3 - Étapes d'envoi */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Comment envoyer un colis étape par étape
          </h2>

          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                1
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Reçois la notification de vente
                </h3>
                <p className="font-body text-black">
                  Quand quelqu'un achète, tu reçois une notification. Tu as <strong>5 jours</strong> pour envoyer le colis.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                2
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Imprime l'étiquette prépayée
                </h3>
                <p className="font-body text-black">
                  Va dans "Mes ventes" → "Télécharger l'étiquette". Imprime-la (ou affiche le QR code en point relais).
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                3
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Emballe soigneusement
                </h3>
                <p className="font-body text-black">
                  Utilise un carton ou une pochette d'expédition. Protège l'article contre l'humidité avec un sac plastique.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                4
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Dépose au point relais ou à La Poste
                </h3>
                <p className="font-body text-black">
                  Rends-toi au point de dépôt indiqué. Garde le reçu de dépôt comme preuve d'envoi.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                5
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Confirme l'envoi dans l'app
                </h3>
                <p className="font-body text-black">
                  Clique sur "Marquer comme envoyé". L'acheteur pourra suivre le colis en temps réel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - Bien emballer */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Bien emballer son colis
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <Box className="w-6 h-6 text-vinted" />
                Matériaux recommandés
              </h3>
              <ul className="space-y-2 font-body text-black">
                <li>• Pochettes d'expédition plastique</li>
                <li>• Cartons recyclés (boîtes à chaussures)</li>
                <li>• Papier de soie ou kraft</li>
                <li>• Sacs plastique pour protection humidité</li>
                <li>• Scotch solide</li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <Star className="w-6 h-6 text-vinted" />
                Astuces pour 5 étoiles
              </h3>
              <ul className="space-y-2 font-body text-black">
                <li>• Ajoute un petit mot de remerciement</li>
                <li>• Plie soigneusement les vêtements</li>
                <li>• Parfume légèrement (optionnel)</li>
                <li>• Emballe comme un cadeau</li>
                <li>• Envoie rapidement (sous 24-48h)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5 - Problèmes courants */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Problèmes courants et solutions
          </h2>

          <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="space-y-6">
              <div className="border-b-2 border-black pb-4">
                <div className="flex items-start gap-3 mb-2">
                  <AlertTriangle className="w-5 h-5 text-vinted flex-shrink-0 mt-1" />
                  <p className="font-display font-bold text-black">Colis perdu</p>
                </div>
                <p className="font-body text-black ml-8">
                  Contacte le support Vinted avec ton reçu de dépôt. La protection acheteur couvre ce cas, tu seras remboursé.
                </p>
              </div>

              <div className="border-b-2 border-black pb-4">
                <div className="flex items-start gap-3 mb-2">
                  <AlertTriangle className="w-5 h-5 text-vinted flex-shrink-0 mt-1" />
                  <p className="font-display font-bold text-black">Colis endommagé</p>
                </div>
                <p className="font-body text-black ml-8">
                  L'acheteur doit signaler le problème avec photos. La protection acheteur prend en charge.
                </p>
              </div>

              <div className="border-b-2 border-black pb-4">
                <div className="flex items-start gap-3 mb-2">
                  <AlertTriangle className="w-5 h-5 text-vinted flex-shrink-0 mt-1" />
                  <p className="font-display font-bold text-black">L'acheteur ne récupère pas le colis</p>
                </div>
                <p className="font-body text-black ml-8">
                  Après 14 jours en point relais, le colis est retourné. Tu peux annuler la vente ou renvoyer.
                </p>
              </div>

              <div>
                <div className="flex items-start gap-3 mb-2">
                  <AlertTriangle className="w-5 h-5 text-vinted flex-shrink-0 mt-1" />
                  <p className="font-display font-bold text-black">Retour demandé</p>
                </div>
                <p className="font-body text-black ml-8">
                  Si l'article ne correspond pas, l'acheteur peut demander un retour. Les frais de retour sont à sa charge sauf si tu as fait une erreur.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 - Remise en main propre */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Remise en main propre : conseils de sécurité
          </h2>

          <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-vinted" />
              Précautions à prendre
            </h3>
            <ul className="space-y-3 font-body text-black">
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Lieu public</strong> : Café, centre commercial, gare... Jamais chez toi !</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Horaires</strong> : En journée, dans un endroit fréquenté</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Paiement</strong> : Attends la confirmation du paiement Vinted AVANT de donner l'article</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Accompagné</strong> : Si possible, viens avec quelqu'un</span>
              </li>
            </ul>
            <div className="mt-4 p-4 bg-white border-3 border-black">
              <p className="font-body text-black text-sm">
                <strong>Note :</strong> La remise en main propre n'est pas couverte par la protection Vinted. En cas de litige, tu n'auras aucun recours.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-12 text-center">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
            Avant d'expédier, optimise tes annonces !
          </h3>
          <p className="font-body text-white mb-6">
            Des photos professionnelles = plus de ventes = plus de colis à envoyer. Essaye VintDress !
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
                Qui paye les frais de port sur Vinted ?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Les frais de port sont payés par l'acheteur. En tant que vendeur, tu ne payes rien : tu reçois 100% du prix de vente.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Où déposer mon colis Vinted ?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Selon l'option choisie par l'acheteur : point relais Mondial Relay, bureau de Poste pour Colissimo, ou point de rencontre pour la remise en main propre.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Combien de temps ai-je pour envoyer mon colis ?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Tu as 5 jours ouvrés pour envoyer ton colis après la vente. Au-delà, la vente peut être annulée automatiquement.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Que faire si je n'ai pas d'imprimante ?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Tu peux utiliser le QR code fourni par Vinted. Présente-le directement au point relais où il sera scanné et l'étiquette imprimée sur place.
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
              { slug: "paiement-vinted-guide", title: "Paiement Vinted : Guide Complet" },
              { slug: "comment-vendre-sur-vinted", title: "Comment Vendre sur Vinted" },
              { slug: "problemes-vinted-solutions", title: "Problèmes Vinted : Solutions" }
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

export default ExpeditionVintedGuidePage;
