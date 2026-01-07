import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, AlertTriangle, HelpCircle, Lock, Trash2, CreditCard, Package, Users, XCircle, Euro, Headphones, ArrowRight, CheckCircle, Shield } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';
import { ArticleNavigation } from '../../components/ArticleNavigation';

export const ProblemesVintedSolutionsPage: React.FC = () => {
  useSEO({
    title: "Problèmes Vinted : Solutions aux Questions Fréquentes 2026 | VintDress",
    description: "Résous tous tes problèmes Vinted : connexion, compte bloqué, articles supprimés, paiement, litiges. Guide complet des solutions 2026.",
    keywords: "problemes vinted, aide vinted, support vinted, compte bloque vinted, litige vinted, contacter vinted",
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px] border-b-4 border-black overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=400&fit=crop"
          alt="Problèmes Vinted - Solutions et Aide"
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
            FAQ
          </div>

          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-black mb-6 leading-tight">
            Problèmes Vinted : Solutions aux Questions Fréquentes 2026
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-sm font-body text-gray-700 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Équipe VintDress</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>11 min de lecture</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>7 Janvier 2026</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["problèmes vinted", "aide vinted", "support", "litiges", "VintDress"].map((tag) => (
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
            Tu rencontres un problème sur Vinted ? Pas de panique ! Dans ce guide, tu trouveras les <strong className="text-vinted">solutions aux problèmes les plus courants</strong> : connexion impossible, compte bloqué, articles supprimés, paiement, litiges... Chaque situation a sa solution.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-12">
          <h2 className="font-display font-bold text-xl text-black mb-4">Sommaire rapide</h2>
          <ul className="space-y-2 font-body text-black">
            <li><a href="#connexion" className="text-vinted hover:underline">1. Problèmes de connexion</a></li>
            <li><a href="#compte" className="text-vinted hover:underline">2. Compte bloqué ou suspendu</a></li>
            <li><a href="#articles" className="text-vinted hover:underline">3. Articles supprimés</a></li>
            <li><a href="#paiement" className="text-vinted hover:underline">4. Problèmes de paiement</a></li>
            <li><a href="#expedition" className="text-vinted hover:underline">5. Problèmes d'expédition</a></li>
            <li><a href="#litiges" className="text-vinted hover:underline">6. Litiges acheteur/vendeur</a></li>
            <li><a href="#annuler" className="text-vinted hover:underline">7. Annuler une transaction</a></li>
            <li><a href="#commissions" className="text-vinted hover:underline">8. Commissions et frais</a></li>
            <li><a href="#support" className="text-vinted hover:underline">9. Contacter le support Vinted</a></li>
          </ul>
        </div>

        {/* Section 1 - Problèmes de connexion */}
        <section id="connexion" className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <Lock className="w-8 h-8 text-vinted" />
            Problèmes de Connexion
          </h2>

          <div className="space-y-6">
            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-black" />
                "Je n'arrive pas à me connecter"
              </h3>
              <ul className="space-y-3 font-body text-black">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Vérifie que tu utilises la bonne adresse email</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Clique sur "Mot de passe oublié" pour le réinitialiser</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Désinstalle et réinstalle l'application</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Essaie de te connecter via le site web</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Mot de passe oublié</h3>
              <ol className="space-y-2 font-body text-black">
                <li><strong>1.</strong> Va sur l'écran de connexion</li>
                <li><strong>2.</strong> Clique sur "Mot de passe oublié"</li>
                <li><strong>3.</strong> Entre ton email</li>
                <li><strong>4.</strong> Vérifie tes spams si tu ne reçois pas l'email</li>
                <li><strong>5.</strong> Clique sur le lien et crée un nouveau mot de passe</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Section 2 - Compte bloqué */}
        <section id="compte" className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <XCircle className="w-8 h-8 text-vinted" />
            Compte Bloqué ou Suspendu
          </h2>

          <div className="space-y-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Raisons possibles de blocage</h3>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Violation des Conditions Générales d'Utilisation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Vente d'articles interdits (contrefaçons, produits dangereux)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Comportement suspect ou frauduleux</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Multiples signalements d'autres utilisateurs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Tentative de transaction hors plateforme</span>
                </li>
              </ul>
            </div>

            <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-vinted" />
                Comment récupérer son compte
              </h3>
              <ol className="space-y-2 font-body text-black">
                <li><strong>1.</strong> Contacte le support Vinted via le centre d'aide</li>
                <li><strong>2.</strong> Explique calmement ta situation</li>
                <li><strong>3.</strong> Fournis les preuves demandées</li>
                <li><strong>4.</strong> Patiente (délai de 3-7 jours généralement)</li>
                <li><strong>5.</strong> Si refus, tu peux faire appel une fois</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Section 3 - Articles supprimés */}
        <section id="articles" className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <Trash2 className="w-8 h-8 text-vinted" />
            Articles Supprimés
          </h2>

          <div className="space-y-6">
            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Pourquoi Vinted supprime des articles</h3>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Contrefaçons</strong> : articles de marque suspects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Photos non conformes</strong> : images du web, watermarks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Catégorie interdite</strong> : cosmétiques, médicaments, etc.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Prix irréaliste</strong> : trop bas ou trop élevé</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Description trompeuse</strong> : informations fausses</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Comment éviter la suppression</h3>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Utilise uniquement tes propres photos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Décris honnêtement l'état de l'article</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Photographie l'étiquette pour les marques</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Vérifie la liste des articles interdits</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4 - Problèmes de paiement */}
        <section id="paiement" className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <CreditCard className="w-8 h-8 text-vinted" />
            Problèmes de Paiement
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Paiement refusé</h3>
              <ul className="space-y-2 font-body text-black text-sm">
                <li>• Vérifie le solde de ta carte</li>
                <li>• Essaie une autre carte</li>
                <li>• Utilise PayPal comme alternative</li>
                <li>• Contacte ta banque (blocage sécurité)</li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Argent bloqué</h3>
              <ul className="space-y-2 font-body text-black text-sm">
                <li>• Normal pendant 2 jours après livraison</li>
                <li>• Si litige : attendre la résolution</li>
                <li>• Vérifie le statut dans ton porte-monnaie</li>
                <li>• Contacte le support si +5 jours</li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Virement non reçu</h3>
              <ul className="space-y-2 font-body text-black text-sm">
                <li>• Délai normal : 3-5 jours ouvrés</li>
                <li>• Vérifie l'IBAN enregistré</li>
                <li>• Assure-toi d'avoir demandé le virement</li>
                <li>• Contacte le support après 7 jours</li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Porte-monnaie indisponible</h3>
              <ul className="space-y-2 font-body text-black text-sm">
                <li>• Vérifie ton identité si demandé</li>
                <li>• Attends la fin d'un éventuel litige</li>
                <li>• Déconnecte/reconnecte-toi</li>
                <li>• Mets à jour l'application</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5 - Problèmes d'expédition */}
        <section id="expedition" className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <Package className="w-8 h-8 text-vinted" />
            Problèmes d'Expédition
          </h2>

          <div className="space-y-6">
            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Colis perdu</h3>
              <ol className="space-y-2 font-body text-black">
                <li><strong>1.</strong> Vérifie le suivi du colis (peut être en retard)</li>
                <li><strong>2.</strong> Attends 14 jours après l'envoi</li>
                <li><strong>3.</strong> Ouvre un litige dans la transaction</li>
                <li><strong>4.</strong> Vinted enquête avec le transporteur</li>
                <li><strong>5.</strong> Remboursement automatique si perdu confirmé</li>
              </ol>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Colis endommagé</h3>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Prends des photos AVANT d'ouvrir le colis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Signale le problème dans les 2 jours</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Ouvre un litige avec preuves photos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Conservation du colis si demandé</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6 - Litiges */}
        <section id="litiges" className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <Users className="w-8 h-8 text-vinted" />
            Litiges Acheteur/Vendeur
          </h2>

          <div className="space-y-6">
            <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Comment ouvrir un litige</h3>
              <ol className="space-y-2 font-body text-black">
                <li><strong>1.</strong> Va dans "Mes achats" ou "Mes ventes"</li>
                <li><strong>2.</strong> Sélectionne la transaction concernée</li>
                <li><strong>3.</strong> Clique sur "J'ai un problème"</li>
                <li><strong>4.</strong> Choisis le type de problème</li>
                <li><strong>5.</strong> Ajoute des photos et explications</li>
                <li><strong>6.</strong> Envoie le litige à Vinted</li>
              </ol>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-4">Article non conforme</h3>
                <p className="font-body text-black text-sm mb-3">
                  L'article ne correspond pas à la description, a des défauts non mentionnés, ou est une contrefaçon.
                </p>
                <p className="font-body text-black text-sm">
                  <strong>Solution :</strong> Ouvre un litige dans les 2 jours avec photos comparatives.
                </p>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-4">Article non reçu</h3>
                <p className="font-body text-black text-sm mb-3">
                  Le colis n'arrive pas malgré le statut "livré" ou dépasse les délais.
                </p>
                <p className="font-body text-black text-sm">
                  <strong>Solution :</strong> Attends 14 jours puis ouvre un litige pour enquête.
                </p>
              </div>
            </div>

            <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-vinted" />
                Protection acheteur : ce qui est couvert
              </h3>
              <ul className="space-y-2 font-body text-black">
                <li>• Article non reçu</li>
                <li>• Article significativement différent de la description</li>
                <li>• Contrefaçon</li>
                <li>• Article endommagé pendant le transport</li>
              </ul>
              <p className="font-body text-black text-sm mt-4 italic">
                Note : Les désaccords sur la taille ou la couleur (si bien décrits) ne sont généralement pas couverts.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7 - Annuler une transaction */}
        <section id="annuler" className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <XCircle className="w-8 h-8 text-vinted" />
            Annuler une Transaction
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">En tant que vendeur</h3>
              <ul className="space-y-2 font-body text-black text-sm">
                <li>• Possible avant l'envoi du colis</li>
                <li>• Va dans la conversation avec l'acheteur</li>
                <li>• Clique sur "Annuler la commande"</li>
                <li>• L'acheteur est automatiquement remboursé</li>
                <li>• Impact possible sur ta réputation si fréquent</li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">En tant qu'acheteur</h3>
              <ul className="space-y-2 font-body text-black text-sm">
                <li>• Pas d'annulation directe possible</li>
                <li>• Demande au vendeur d'annuler</li>
                <li>• Si vendeur refuse, attends la livraison</li>
                <li>• Tu peux refuser le colis au relais</li>
                <li>• Ouvre un litige si problème réel</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 8 - Commissions */}
        <section id="commissions" className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <Euro className="w-8 h-8 text-vinted" />
            Commissions et Frais
          </h2>

          <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
            <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-vinted" />
              Vinted prend-il une commission ?
            </h3>
            <p className="font-body text-black leading-relaxed mb-4">
              <strong className="text-vinted">NON pour les vendeurs !</strong> Tu reçois 100% du prix de vente. C'est ce qui différencie Vinted des autres plateformes.
            </p>
          </div>

          <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4">Ce que paye l'acheteur</h3>
            <ul className="space-y-3 font-body text-black">
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Protection acheteur :</strong> 5% du prix + 0,70€</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Frais de port :</strong> Variable selon le transporteur choisi</span>
              </li>
            </ul>
            <div className="mt-4 p-4 bg-cream border-2 border-black">
              <p className="font-body text-black text-sm">
                <strong>Exemple :</strong> Article à 20€ + Protection 1,70€ + Port 4,50€ = <strong>26,20€ total</strong><br />
                Le vendeur reçoit : <strong>20€</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Section 9 - Contacter le support */}
        <section id="support" className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <Headphones className="w-8 h-8 text-vinted" />
            Contacter le Support Vinted
          </h2>

          <div className="space-y-6">
            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Via l'application</h3>
              <ol className="space-y-2 font-body text-black">
                <li><strong>1.</strong> Profil → Paramètres</li>
                <li><strong>2.</strong> Centre d'aide</li>
                <li><strong>3.</strong> Cherche ton problème</li>
                <li><strong>4.</strong> Si pas de solution → "Nous contacter"</li>
                <li><strong>5.</strong> Remplis le formulaire détaillé</li>
              </ol>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Conseils pour être aidé rapidement</h3>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Explique clairement ton problème en une phrase</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Ajoute des captures d'écran</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Indique le numéro de transaction si applicable</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Sois patient (délai de réponse : 24-72h)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>N'envoie pas de messages répétés (ça ralentit)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-12 text-center">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
            Évite les problèmes, vends mieux !
          </h3>
          <p className="font-body text-white mb-6">
            Des photos de qualité professionnelle réduisent les litiges et augmentent tes ventes.
          </p>
          <Link
            to="/#generateur"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-3 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            CRÉER MES PHOTOS PRO
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
                Combien de temps dure un litige Vinted ?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                En moyenne 3 à 7 jours ouvrés. Les cas complexes peuvent prendre jusqu'à 14 jours. Vinted examine les preuves des deux parties avant de trancher.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Puis-je récupérer un compte banni ?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Parfois oui. Contacte le support avec des explications et preuves. Tu as droit à un appel. Si le ban est définitif, tu ne pourras pas créer de nouveau compte (vérification d'identité).
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Mon argent est bloqué, que faire ?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                L'argent est bloqué jusqu'à validation de l'acheteur (2 jours après réception). Si litige en cours, attends la résolution. Si +5 jours sans raison, contacte le support.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Comment éviter les arnaques sur Vinted ?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Ne communique jamais hors de l'app, n'accepte jamais de paiement externe, méfie-toi des prix trop bas, vérifie les avis des vendeurs/acheteurs, et utilise toujours le système de paiement Vinted.
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
              { slug: "paiement-vinted-guide", title: "Paiement Vinted : Guide" },
              { slug: "expedition-vinted-guide", title: "Expédition Vinted" },
              { slug: "vinted-comment-ca-marche", title: "Vinted Comment ça Marche" }
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

export default ProblemesVintedSolutionsPage;
