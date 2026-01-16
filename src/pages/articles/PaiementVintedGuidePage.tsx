import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, CreditCard, Wallet, ArrowRight, CheckCircle, AlertTriangle, Euro, Clock3, Shield, Smartphone } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';
import { ArticleNavigation } from '../../components/ArticleNavigation';

export const PaiementVintedGuidePage: React.FC = () => {
  useSEO({
    title: "Paiement Vinted : Comment Recevoir et Retirer son Argent | VintDress",
    description: "Guide complet sur le système de paiement Vinted. Porte-monnaie, moyens de paiement, délais de virement et comment retirer son argent.",
    keywords: "paiement vinted, porte-monnaie vinted, retrait argent vinted, virement vinted, comment recevoir argent vinted",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px] border-b-4 border-black overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=400&fit=crop"
          alt="Paiement Vinted guide complet"
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
            Paiement Vinted : Comment Recevoir et Retirer son Argent
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-sm font-body text-gray-700 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Équipe VintDress</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>7 min de lecture</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>7 Janvier 2026</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["paiement vinted", "porte-monnaie", "retrait argent", "virement", "PayPal"].map((tag) => (
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
            Tu viens de faire ta première vente sur Vinted ? Félicitations ! Mais comment récupérer ton argent ? Dans ce guide complet, on t'explique tout sur le système de paiement Vinted : du porte-monnaie au virement bancaire, en passant par les délais et les frais. <strong className="text-vinted">Spoiler : c'est 100% gratuit pour les vendeurs !</strong>
          </p>
        </div>

        {/* Section 1 - Moyens de paiement acheteur */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Moyens de paiement acceptés (acheteur)
          </h2>

          <p className="font-body text-black leading-relaxed mb-6">
            Quand tu achètes sur Vinted, plusieurs options de paiement s'offrent à toi. Voici les moyens acceptés :
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="w-8 h-8 text-vinted" />
                <h3 className="font-display font-bold text-xl text-black">
                  Carte bancaire
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                Visa, Mastercard, Maestro... Paiement instantané et sécurisé. Le moyen le plus utilisé sur Vinted.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <Wallet className="w-8 h-8 text-vinted" />
                <h3 className="font-display font-bold text-xl text-black">
                  PayPal
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                Connecte ton compte PayPal pour payer en un clic. Protection acheteur incluse.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <Smartphone className="w-8 h-8 text-vinted" />
                <h3 className="font-display font-bold text-xl text-black">
                  Apple Pay / Google Pay
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                Paiement mobile rapide via ton smartphone. Idéal pour acheter en quelques secondes.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <Euro className="w-8 h-8 text-vinted" />
                <h3 className="font-display font-bold text-xl text-black">
                  Solde Vinted
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                Utilise l'argent de tes ventes directement pour acheter. Tu peux combiner solde + carte.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 - Porte-monnaie Vinted */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Le porte-monnaie Vinted
          </h2>

          <div className="bg-mint border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-6">
            <h3 className="font-display font-bold text-2xl text-black mb-4">
              Comment ça fonctionne ?
            </h3>
            <p className="font-body text-black leading-relaxed mb-4">
              Le porte-monnaie Vinted est un portefeuille virtuel intégré à l'application. Quand tu vends un article, l'argent est d'abord crédité sur ton porte-monnaie Vinted avant que tu puisses le transférer vers ton compte bancaire.
            </p>
            <ul className="font-body text-black space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span><strong>Sécurisé :</strong> L'argent est protégé jusqu'à validation de la transaction</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span><strong>Accessible :</strong> Visible dans l'onglet "Porte-monnaie" de l'app</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span><strong>Flexible :</strong> Utilise-le pour acheter ou transfère-le sur ton compte</span>
              </li>
            </ul>
          </div>

          <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4">
              Où voir ton solde ?
            </h3>
            <ol className="font-body text-black space-y-2">
              <li>1. Ouvre l'application Vinted</li>
              <li>2. Va dans ton profil (icône en bas à droite)</li>
              <li>3. Clique sur "Porte-monnaie" ou "Solde"</li>
              <li>4. Tu verras ton solde disponible et l'historique des transactions</li>
            </ol>
          </div>
        </section>

        {/* Section 3 - Cycle de vie paiement */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Cycle de vie d'un paiement
          </h2>

          <p className="font-body text-black leading-relaxed mb-6">
            Quand quelqu'un achète ton article, voici ce qui se passe étape par étape :
          </p>

          <div className="space-y-4">
            {/* Étape 1 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                1
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Achat par l'acheteur
                </h3>
                <p className="font-body text-black">
                  L'acheteur paie le prix de l'article + les frais de protection acheteur. <strong>L'argent est bloqué</strong> par Vinted en attente de l'expédition.
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
                  Expédition du colis
                </h3>
                <p className="font-body text-black">
                  Tu imprimes l'étiquette, tu emballe l'article et tu déposes le colis. Le statut passe à "En transit".
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
                  Réception par l'acheteur
                </h3>
                <p className="font-body text-black">
                  L'acheteur reçoit le colis. Il a ensuite <strong>2 jours</strong> pour valider la commande ou signaler un problème.
                </p>
              </div>
            </div>

            {/* Étape 4 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-mint text-black border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                4
              </div>
              <div className="bg-mint border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Argent disponible !
                </h3>
                <p className="font-body text-black">
                  Si l'acheteur valide (ou après 2 jours automatiquement), <strong>l'argent est crédité sur ton porte-monnaie</strong>. Tu peux maintenant le retirer !
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - Retirer son argent */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Comment retirer son argent ?
          </h2>

          <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-6">
            <h3 className="font-display font-bold text-2xl text-black mb-4">
              Étapes pour transférer vers ton compte bancaire
            </h3>
            <ol className="font-body text-black space-y-3">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-vinted text-white border-2 border-black font-display font-bold flex items-center justify-center text-sm">1</span>
                <span>Va dans <strong>Porte-monnaie</strong> depuis ton profil</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-vinted text-white border-2 border-black font-display font-bold flex items-center justify-center text-sm">2</span>
                <span>Clique sur <strong>"Transférer"</strong> ou <strong>"Retirer"</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-vinted text-white border-2 border-black font-display font-bold flex items-center justify-center text-sm">3</span>
                <span>Ajoute ton IBAN si ce n'est pas déjà fait</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-vinted text-white border-2 border-black font-display font-bold flex items-center justify-center text-sm">4</span>
                <span>Confirme le montant à transférer</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-mint text-black border-2 border-black font-display font-bold flex items-center justify-center text-sm">5</span>
                <span>Attends <strong>3 à 5 jours ouvrés</strong> pour recevoir l'argent</span>
              </li>
            </ol>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <Clock3 className="w-6 h-6 text-vinted" />
                <h3 className="font-display font-bold text-lg text-black">
                  Délais de virement
                </h3>
              </div>
              <ul className="font-body text-black text-sm space-y-1">
                <li>- <strong>3 à 5 jours ouvrés</strong> en moyenne</li>
                <li>- Peut varier selon ta banque</li>
                <li>- Pas de virement le week-end</li>
                <li>- Gratuit et sans minimum</li>
              </ul>
            </div>

            <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <Euro className="w-6 h-6 text-vinted" />
                <h3 className="font-display font-bold text-lg text-black">
                  Utiliser son solde
                </h3>
              </div>
              <ul className="font-body text-black text-sm space-y-1">
                <li>- Achète directement sur Vinted</li>
                <li>- Combine solde + carte bancaire</li>
                <li>- Pas de délai d'attente</li>
                <li>- Idéal si tu achètes souvent</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5 - Commissions */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Commissions et frais
          </h2>

          <div className="bg-mint border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-6">
            <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
              <CheckCircle className="w-7 h-7 text-vinted" />
              Bonne nouvelle : 0% de commission pour les vendeurs !
            </h3>
            <p className="font-body text-black leading-relaxed">
              Vinted ne prend <strong>aucune commission sur tes ventes</strong>. Si tu vends un article à 20€, tu reçois 20€ sur ton porte-monnaie. C'est l'acheteur qui paye les frais de protection.
            </p>
          </div>

          <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
            <h3 className="font-display font-bold text-xl text-black mb-4">
              Ce que paye l'acheteur
            </h3>
            <ul className="font-body text-black space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Protection Acheteur :</strong> 5% du prix + 0,70€ fixe</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Frais de port :</strong> Variable selon le transporteur choisi</span>
              </li>
            </ul>
            <div className="mt-4 p-4 bg-cream border-2 border-black">
              <p className="font-body text-black text-sm">
                <strong>Exemple :</strong> Pour un article à 20€, l'acheteur paiera 20€ + 1,70€ (protection) + frais de port = environ 25-27€ au total.
              </p>
            </div>
          </div>

          {/* Comparaison */}
          <div className="overflow-x-auto">
            <table className="w-full border-4 border-black bg-white">
              <thead>
                <tr className="bg-vinted text-white">
                  <th className="p-3 border-2 border-black font-display font-bold text-left">Plateforme</th>
                  <th className="p-3 border-2 border-black font-display font-bold text-center">Commission vendeur</th>
                </tr>
              </thead>
              <tbody className="font-body">
                <tr className="bg-mint">
                  <td className="p-3 border-2 border-black font-bold">Vinted</td>
                  <td className="p-3 border-2 border-black text-center text-vinted font-bold">0%</td>
                </tr>
                <tr>
                  <td className="p-3 border-2 border-black">Vestiaire Collective</td>
                  <td className="p-3 border-2 border-black text-center">15-25%</td>
                </tr>
                <tr className="bg-cream">
                  <td className="p-3 border-2 border-black">Leboncoin</td>
                  <td className="p-3 border-2 border-black text-center">0%</td>
                </tr>
                <tr>
                  <td className="p-3 border-2 border-black">eBay</td>
                  <td className="p-3 border-2 border-black text-center">10-13%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 6 - Problèmes */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Problèmes de paiement courants
          </h2>

          <div className="space-y-4">
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-vinted" />
                Mon paiement a été refusé
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                <ul className="space-y-2">
                  <li>- Vérifie que ta carte n'est pas expirée</li>
                  <li>- Assure-toi d'avoir assez de fonds</li>
                  <li>- Ton plafond de paiement en ligne est peut-être atteint</li>
                  <li>- Essaie un autre moyen de paiement (PayPal, autre carte)</li>
                </ul>
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-vinted" />
                Mon argent est bloqué
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                <p className="mb-2">L'argent peut être bloqué si :</p>
                <ul className="space-y-2">
                  <li>- L'acheteur n'a pas encore validé la réception (attends 2 jours)</li>
                  <li>- Un litige est en cours</li>
                  <li>- Ta vérification d'identité n'est pas complète</li>
                  <li>- Contacte le support Vinted via l'application si ça persiste</li>
                </ul>
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-vinted" />
                Je n'ai pas reçu mon virement
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                <ul className="space-y-2">
                  <li>- Attends 5 jours ouvrés complets</li>
                  <li>- Vérifie que ton IBAN est correct dans les paramètres</li>
                  <li>- Regarde si le virement n'apparaît pas sous un autre libellé</li>
                  <li>- Contacte ta banque puis le support Vinted</li>
                </ul>
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-vinted" />
                Litige en cours
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                <p className="mb-2">Si l'acheteur ouvre un litige :</p>
                <ul className="space-y-2">
                  <li>- L'argent reste bloqué le temps de la résolution</li>
                  <li>- Réponds rapidement aux demandes de Vinted</li>
                  <li>- Fournis des preuves (photos, description originale)</li>
                  <li>- Vinted tranchera sous 7-14 jours en général</li>
                </ul>
              </div>
            </details>
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
                Combien de temps pour recevoir l'argent après une vente ?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Après validation de l'acheteur (ou 2 jours auto), l'argent arrive sur ton porte-monnaie. Ensuite, compte 3 à 5 jours ouvrés pour le virement vers ta banque.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Y a-t-il un montant minimum pour retirer ?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Non, tu peux retirer dès 0,01€ ! Il n'y a pas de montant minimum sur Vinted.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Puis-je recevoir l'argent sur PayPal ?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Non, les virements se font uniquement vers un compte bancaire (IBAN). PayPal n'est accepté que pour les paiements, pas pour les retraits.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Dois-je déclarer mes revenus Vinted aux impôts ?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Si tu vends des objets personnels occasionnellement, tu n'es généralement pas imposable. Mais si tu achètes pour revendre ou dépasses certains seuils, tu devras peut-être déclarer. Consulte les règles fiscales de ton pays.
              </div>
            </details>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-12 text-center">
          <Shield className="w-12 h-12 text-white mx-auto mb-4" />
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
            Prêt à vendre sur Vinted ?
          </h3>
          <p className="font-body text-white mb-6 max-w-xl mx-auto">
            Maintenant que tu maîtrises les paiements, booste tes ventes avec des photos professionnelles grâce à VintDress !
          </p>
          <Link
            to="/#generateur"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-3 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
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
              { slug: "comment-faire-photos-vinted", title: "Comment Faire de Belles Photos" },
              { slug: "photo-porte-vinted", title: "Photos Portées Vinted" },
              { slug: "algorithme-vinted-visibilite", title: "Algorithme Vinted" }
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

export default PaiementVintedGuidePage;
