import { useSEO } from '../../hooks/useSEO';
import { ArticleNavigation } from '../../components/ArticleNavigation';
import { Link } from 'react-router-dom';
import {
  Search,
  Eye,
  UserCheck,
  MessageSquare,
  ShoppingCart,
  MapPin,
  Package,
  Shield,
  AlertTriangle,
  CheckCircle,
  Star,
  CreditCard,
  Clock,
  ThumbsUp,
  ArrowRight
} from 'lucide-react';

export default function CommentAcheterSurVintedPage() {
  useSEO({
    title: 'Comment Acheter sur Vinted : Guide Acheteur Complet 2026',
    description: 'Guide complet pour acheter sur Vinted : trouver les bonnes affaires, faire une offre, paiement sécurisé et protection acheteur.',
    keywords: 'acheter vinted, achat vinted, comment acheter vinted, offre vinted, acheteur vinted, bonnes affaires vinted',
    canonicalUrl: 'https://vintdress.com/articles/comment-acheter-sur-vinted',
    ogImage: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=800&fit=crop',
  });

  return (
    <div className="min-h-screen bg-cream">
      <article className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-vinted text-white px-4 py-2 font-display font-bold text-sm border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              GUIDE
            </span>
            <span className="text-gray-600 font-medium">9 min de lecture</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-black mb-6 leading-tight">
            Comment Acheter sur Vinted : Guide Acheteur Complet 2026
          </h1>

          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Tu veux faire de bonnes affaires sur Vinted mais tu ne sais pas par où commencer ?
            Ce guide te montre comment trouver les meilleures pièces, négocier intelligemment
            et acheter en toute sécurité.
          </p>

          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=600&fit=crop"
            alt="Shopping sur Vinted"
            className="w-full h-64 sm:h-80 lg:h-96 object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          />
        </header>

        {/* Table of contents */}
        <nav className="bg-white border-4 border-black p-6 mb-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-display font-bold text-xl mb-4">Dans cet article</h2>
          <ol className="space-y-2 text-gray-700">
            <li><a href="#trouver-article" className="hover:text-vinted transition-colors">1. Trouver le bon article</a></li>
            <li><a href="#analyser-annonce" className="hover:text-vinted transition-colors">2. Analyser une annonce</a></li>
            <li><a href="#verifier-vendeur" className="hover:text-vinted transition-colors">3. Vérifier le vendeur</a></li>
            <li><a href="#faire-offre" className="hover:text-vinted transition-colors">4. Faire une offre</a></li>
            <li><a href="#processus-achat" className="hover:text-vinted transition-colors">5. Processus d'achat</a></li>
            <li><a href="#main-propre" className="hover:text-vinted transition-colors">6. Achat en main propre</a></li>
            <li><a href="#reception" className="hover:text-vinted transition-colors">7. Réception et validation</a></li>
            <li><a href="#protection" className="hover:text-vinted transition-colors">8. Protection acheteur</a></li>
            <li><a href="#problemes" className="hover:text-vinted transition-colors">9. Problèmes courants</a></li>
          </ol>
        </nav>

        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-mint border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-2xl mb-4">Pourquoi acheter sur Vinted ?</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Économies jusqu'à 90%</strong> sur les prix neufs</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Mode durable</strong> : donnez une seconde vie aux vêtements</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Pièces uniques</strong> : vintage, éditions limitées</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Protection acheteur</strong> : remboursement garanti</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 1: Trouver le bon article */}
        <section id="trouver-article" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Search className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">1. Trouver le bon article</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Avec des millions d'articles sur Vinted, savoir chercher efficacement est essentiel.
              Voici comment trouver exactement ce que tu cherches.
            </p>

            <div className="bg-white border-4 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Utiliser les filtres efficacement</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Catégorie :</strong> Femme, Homme, Enfant, Maison...</li>
                <li><strong>Taille :</strong> Sois précis avec ta taille habituelle</li>
                <li><strong>Marque :</strong> Recherche par marque spécifique</li>
                <li><strong>État :</strong> Neuf, Très bon, Bon, Satisfaisant</li>
                <li><strong>Prix :</strong> Définis un budget min/max</li>
                <li><strong>Couleur :</strong> Filtre par couleur souhaitée</li>
                <li><strong>Localisation :</strong> Pour les remises en main propre</li>
              </ul>
            </div>

            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Astuces de recherche pro</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Sauvegarder tes recherches :</strong> Active les notifications</li>
                <li><strong>Suivre des vendeurs :</strong> Suis ceux avec un bon style</li>
                <li><strong>Mots-clés précis :</strong> "Zara blazer noir taille M"</li>
                <li><strong>Variations orthographiques :</strong> Cherche aussi les fautes courantes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Analyser une annonce */}
        <section id="analyser-annonce" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">2. Analyser une annonce</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Avant d'acheter, prends le temps d'examiner l'annonce en détail.
              Une bonne analyse t'évite les mauvaises surprises.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl mb-4">Vérifier les photos</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Photos nettes et bien éclairées</li>
                  <li>Plusieurs angles (face, dos, détails)</li>
                  <li>Photos des défauts mentionnés</li>
                  <li>Étiquette visible (taille, composition)</li>
                  <li>Photos réelles (pas de stock)</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl mb-4">Lire la description</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>État réel détaillé</li>
                  <li>Mesures précises (si disponibles)</li>
                  <li>Raison de la vente</li>
                  <li>Défauts honnêtement mentionnés</li>
                  <li>Matière et entretien</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-100 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-display font-bold mb-2">N'hésite pas à demander !</h4>
                  <p className="text-gray-700">
                    Si une info manque, contacte le vendeur. Demande des photos supplémentaires,
                    les mesures exactes ou l'état de certains détails. Un bon vendeur répondra rapidement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Vérifier le vendeur */}
        <section id="verifier-vendeur" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <UserCheck className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">3. Vérifier le vendeur</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Le profil du vendeur en dit long sur la fiabilité de la transaction.
              Voici les indicateurs à vérifier.
            </p>

            <div className="bg-white border-4 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Indicateurs de confiance</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span><strong>Évaluations :</strong> Note moyenne (viser 4.5+)</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShoppingCart className="w-5 h-5 text-vinted" />
                  <span><strong>Ventes :</strong> Nombre de transactions réussies</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <span><strong>Ancienneté :</strong> Depuis quand sur Vinted</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-green-500" />
                  <span><strong>Réactivité :</strong> Temps de réponse moyen</span>
                </div>
              </div>
            </div>

            <div className="bg-red-100 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4 text-red-700">Red flags à éviter</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">&#x2717;</span>
                  <span>Compte récent sans évaluation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">&#x2717;</span>
                  <span>Beaucoup d'avis négatifs récents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">&#x2717;</span>
                  <span>Ne répond pas aux messages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">&#x2717;</span>
                  <span>Prix trop beaux pour être vrais (contrefaçon)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">&#x2717;</span>
                  <span>Demande de paiement hors Vinted</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Faire une offre */}
        <section id="faire-offre" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">4. Faire une offre</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Négocier fait partie de Vinted ! Mais il y a des règles à respecter
              pour une négociation réussie.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl mb-4">Quand négocier</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Article en ligne depuis longtemps</li>
                  <li>Prix au-dessus du marché</li>
                  <li>Petit défaut mentionné</li>
                  <li>Achat de plusieurs articles</li>
                </ul>
              </div>

              <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl mb-4">Quand acheter direct</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Prix déjà très attractif</li>
                  <li>Article très demandé</li>
                  <li>Beaucoup de "favoris"</li>
                  <li>"Prix ferme" dans l'annonce</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Règles d'or de la négociation</h3>
              <ol className="space-y-3 text-gray-700">
                <li><strong>1. Reste poli :</strong> "Bonjour, serait-il possible de faire X€ ?"</li>
                <li><strong>2. Sois raisonnable :</strong> 10-20% de réduction maximum</li>
                <li><strong>3. Justifie ton offre :</strong> "J'ai vu un article similaire à ce prix"</li>
                <li><strong>4. Propose un bundle :</strong> "Je prends les 2 si vous faites un prix"</li>
                <li><strong>5. Accepte le refus :</strong> Ne négocie pas à l'infini</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Section 5: Processus d'achat */}
        <section id="processus-achat" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">5. Processus d'achat</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-6">
              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-vinted text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 border-black">1</span>
                  <h3 className="font-display font-bold text-xl">Cliquer sur "Acheter"</h3>
                </div>
                <p className="text-gray-700">
                  Clique sur le bouton "Acheter" sur l'annonce. Tu peux aussi accepter une offre
                  du vendeur ou faire une contre-offre.
                </p>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-vinted text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 border-black">2</span>
                  <h3 className="font-display font-bold text-xl">Choisir la livraison</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Sélectionne ton mode de livraison préféré :
                </p>
                <ul className="space-y-1 text-gray-700 ml-4">
                  <li>Mondial Relay (point relais)</li>
                  <li>Colissimo (domicile ou bureau de poste)</li>
                  <li>Chronopost (express)</li>
                  <li>Remise en main propre</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-vinted text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 border-black">3</span>
                  <h3 className="font-display font-bold text-xl">Paiement sécurisé</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Paie avec ton mode de paiement préféré :
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-gray-100 px-3 py-1 rounded border-2 border-black text-sm">Carte bancaire</span>
                  <span className="bg-gray-100 px-3 py-1 rounded border-2 border-black text-sm">PayPal</span>
                  <span className="bg-gray-100 px-3 py-1 rounded border-2 border-black text-sm">Apple Pay</span>
                  <span className="bg-gray-100 px-3 py-1 rounded border-2 border-black text-sm">Google Pay</span>
                  <span className="bg-gray-100 px-3 py-1 rounded border-2 border-black text-sm">Solde Vinted</span>
                </div>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-vinted text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 border-black">4</span>
                  <h3 className="font-display font-bold text-xl">Suivi de commande</h3>
                </div>
                <p className="text-gray-700">
                  Suis l'envoi dans l'app. Tu recevras des notifications à chaque étape :
                  envoi, en transit, livré. Le vendeur a 5 jours pour expédier.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Achat en main propre */}
        <section id="main-propre" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">6. Achat en main propre</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              La remise en main propre évite les frais de port, mais demande quelques précautions.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl mb-4">Avantages</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Pas de frais de port</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Voir l'article avant d'acheter</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Transaction immédiate</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Essayer si possible</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-100 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl mb-4">Précautions de sécurité</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    <span>Lieu public et fréquenté</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    <span>En journée de préférence</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    <span>Prévenir un proche</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    <span>Vérifier l'article sur place</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Lieux recommandés</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-mint px-4 py-2 rounded border-2 border-black">Gare</span>
                <span className="bg-mint px-4 py-2 rounded border-2 border-black">Centre commercial</span>
                <span className="bg-mint px-4 py-2 rounded border-2 border-black">Café</span>
                <span className="bg-mint px-4 py-2 rounded border-2 border-black">Métro/Bus</span>
                <span className="bg-mint px-4 py-2 rounded border-2 border-black">Place publique</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Réception et validation */}
        <section id="reception" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Package className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">7. Réception et validation</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white border-4 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">À la réception du colis</h3>
              <ol className="space-y-3 text-gray-700">
                <li><strong>1. Vérifie l'emballage :</strong> Colis endommagé ? Note-le avant d'ouvrir</li>
                <li><strong>2. Filme l'ouverture :</strong> En cas de litige, c'est une preuve</li>
                <li><strong>3. Compare à l'annonce :</strong> État, couleur, taille comme décrit ?</li>
                <li><strong>4. Essaye l'article :</strong> Vérifie la taille et les défauts</li>
              </ol>
            </div>

            <div className="bg-pink-pastel border-4 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-display font-bold mb-2">Tu as 2 jours pour valider</h4>
                  <p className="text-gray-700">
                    Après réception, tu as 2 jours pour valider la commande ou signaler un problème.
                    Passé ce délai, la commande est automatiquement validée et le vendeur reçoit l'argent.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Laisser une évaluation</h3>
              <p className="text-gray-700 mb-3">
                Après validation, laisse une évaluation honnête. Ça aide les autres acheteurs !
              </p>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="ml-2 text-gray-700">= Transaction parfaite</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Protection acheteur */}
        <section id="protection" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">8. Protection acheteur</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Vinted propose une protection acheteur qui couvre la plupart des problèmes.
              Elle coûte 5% du prix + 0,70€ par transaction.
            </p>

            <div className="bg-white border-4 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Ce qui est couvert</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Article non reçu</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Article très différent de la description</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Article endommagé pendant le transport</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Contrefaçon avérée</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-100 border-4 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Comment ouvrir un litige</h3>
              <ol className="space-y-2 text-gray-700">
                <li><strong>1.</strong> Va dans "Mes achats" et sélectionne la commande</li>
                <li><strong>2.</strong> Clique sur "J'ai un problème"</li>
                <li><strong>3.</strong> Sélectionne le type de problème</li>
                <li><strong>4.</strong> Ajoute des photos/preuves</li>
                <li><strong>5.</strong> Décris précisément le souci</li>
                <li><strong>6.</strong> Attends la réponse du support (48-72h)</li>
              </ol>
            </div>

            <div className="bg-red-100 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4 text-red-700">Ce qui n'est PAS couvert</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-red-500">&#x2717;</span>
                  <span>L'article ne te plaît plus (changement d'avis)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">&#x2717;</span>
                  <span>La taille ne convient pas (si bien indiquée)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">&#x2717;</span>
                  <span>Défauts mentionnés dans l'annonce</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">&#x2717;</span>
                  <span>Remise en main propre sans paiement Vinted</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 9: Problèmes courants */}
        <section id="problemes" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">9. Problèmes courants</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-6">
              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl mb-4">"Je n'arrive pas à acheter"</h3>
                <p className="text-gray-700 mb-3">Solutions possibles :</p>
                <ul className="space-y-1 text-gray-700">
                  <li>Vérifie ta connexion internet</li>
                  <li>Mets à jour l'application Vinted</li>
                  <li>Vérifie que ton mode de paiement est valide</li>
                  <li>Assure-toi que l'article est toujours disponible</li>
                  <li>Essaie depuis un autre appareil</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl mb-4">"Mon paiement est refusé"</h3>
                <p className="text-gray-700 mb-3">Causes possibles :</p>
                <ul className="space-y-1 text-gray-700">
                  <li>Fonds insuffisants</li>
                  <li>Carte expirée ou bloquée</li>
                  <li>Plafond de paiement atteint</li>
                  <li>3D Secure non activé</li>
                  <li>→ Essaie un autre mode de paiement</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl mb-4">"L'article n'est pas conforme"</h3>
                <p className="text-gray-700 mb-3">Que faire :</p>
                <ul className="space-y-1 text-gray-700">
                  <li>Ne valide pas la commande</li>
                  <li>Prends des photos du problème</li>
                  <li>Ouvre un litige dans les 2 jours</li>
                  <li>Contacte le vendeur pour trouver une solution</li>
                  <li>Le support Vinted tranchera si besoin</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-3xl font-display font-bold text-white mb-6">
              Checklist de l'acheteur malin
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 border-2 border-white bg-white/20 rounded"></div>
                <span>Photos claires et détaillées ?</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 border-2 border-white bg-white/20 rounded"></div>
                <span>Description complète ?</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 border-2 border-white bg-white/20 rounded"></div>
                <span>Vendeur bien noté (4.5+) ?</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 border-2 border-white bg-white/20 rounded"></div>
                <span>Prix cohérent avec le marché ?</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 border-2 border-white bg-white/20 rounded"></div>
                <span>Questions posées si doute ?</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 border-2 border-white bg-white/20 rounded"></div>
                <span>Paiement via Vinted uniquement ?</span>
              </div>
            </div>
          </div>
        </section>

        {/* Related articles */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-6">Articles connexes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/articles/paiement-vinted-guide"
              className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              <div className="flex items-center gap-3">
                <CreditCard className="w-8 h-8 text-vinted" />
                <div>
                  <h3 className="font-display font-bold">Paiement Vinted</h3>
                  <p className="text-gray-600 text-sm">Tout sur les paiements et retraits</p>
                </div>
                <ArrowRight className="w-5 h-5 ml-auto" />
              </div>
            </Link>
            <Link
              to="/articles/comment-vendre-sur-vinted"
              className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              <div className="flex items-center gap-3">
                <ThumbsUp className="w-8 h-8 text-vinted" />
                <div>
                  <h3 className="font-display font-bold">Comment vendre sur Vinted</h3>
                  <p className="text-gray-600 text-sm">Guide complet du vendeur</p>
                </div>
                <ArrowRight className="w-5 h-5 ml-auto" />
              </div>
            </Link>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <div className="bg-mint border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-2xl font-display font-bold mb-4">Prêt à faire de bonnes affaires ?</h2>
            <p className="text-gray-700 mb-6">
              Avec ces conseils, tu as toutes les clés pour acheter malin sur Vinted.
              Prends ton temps, vérifie bien les annonces et n'hésite pas à poser des questions
              aux vendeurs. Bonnes trouvailles !
            </p>
            <div className="flex items-center gap-4">
              <span className="text-4xl">🛍️</span>
              <span className="font-display font-bold text-lg">Happy shopping !</span>
            </div>
          </div>
        </section>

        <ArticleNavigation />
      </article>
    </div>
  );
}
