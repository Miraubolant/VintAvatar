import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PricingSection } from '../components/PricingSection';
import { useSEO } from '../hooks/useSEO';

interface FAQItem {
  question: string;
  answer: string;
}

const pricingFAQ: FAQItem[] = [
  {
    question: "Puis-je me faire rembourser si je ne suis pas satisfait ?",
    answer: "Les packs de crédits sont des achats numériques non remboursables une fois utilisés. Si vous rencontrez un problème technique empêchant la génération, contactez-nous à contact@vintdress.com et nous trouverons une solution (crédits offerts ou remboursement selon le cas). Pour l'abonnement mensuel, vous pouvez annuler à tout moment avant le prochain renouvellement."
  },
  {
    question: "Mes crédits ont-ils une date d'expiration ?",
    answer: "Non, les crédits achetés via les packs (10 ou 25 crédits) n'expirent jamais. Vous pouvez les utiliser à votre rythme. En revanche, les 40 générations de l'abonnement mensuel sont réinitialisées chaque mois à la date de renouvellement."
  },
  {
    question: "Quelle est la différence entre un pack et l'abonnement mensuel ?",
    answer: "Les packs (10 ou 25 crédits) sont des achats uniques : vous payez une fois et utilisez vos crédits quand vous voulez, sans engagement. L'abonnement mensuel à 12,99\u00A0€/mois vous donne 40 générations par mois, renouvelées automatiquement. L'abonnement est plus avantageux si vous générez régulièrement (0,32\u00A0€ par photo vs 0,40\u00A0€ avec le pack 10)."
  },
  {
    question: "Mon paiement a échoué, que faire ?",
    answer: "Vérifiez que votre carte bancaire est valide et que vous avez suffisamment de fonds. Essayez avec une autre carte (Visa, Mastercard ou American Express). Si le problème persiste, désactivez votre VPN ou bloqueur de publicités qui peuvent interférer avec Stripe. Contactez-nous à contact@vintdress.com si le problème continue."
  },
  {
    question: "Comment annuler mon abonnement mensuel ?",
    answer: "Vous pouvez annuler votre abonnement à tout moment depuis votre espace compte. L'annulation prend effet à la fin de la période en cours : vous conservez l'accès jusqu'à la date de renouvellement. Aucuns frais supplémentaires ne seront prélevés après l'annulation."
  },
  {
    question: "Puis-je utiliser mon compte sur plusieurs appareils ?",
    answer: "Oui, votre compte VintDress fonctionne sur tous vos appareils (ordinateur, smartphone, tablette). Connectez-vous avec le même compte Google et retrouvez vos crédits et votre historique de générations partout."
  },
  {
    question: "Les crédits gratuits (parrainage, galerie) sont-ils cumulables avec un pack ?",
    answer: "Oui, tous les crédits se cumulent. Si vous achetez un pack de 25 crédits et que vous parrainez un ami (+1 crédit) puis partagez une photo en galerie (+1 crédit), vous aurez 27 crédits au total. Il n'y a aucune limite au nombre total de crédits que vous pouvez accumuler."
  }
];

export const TarifsPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useSEO({
    title: 'Tarifs VintDress - Packs Crédits & Abonnement IA Vinted',
    description: 'Découvrez les tarifs VintDress : pack 10 crédits à 3,99€, pack 25 crédits à 7,99€ ou abonnement mensuel 40 générations à 12,99€. Mannequin IA Vinted accessible à tous.',
    canonical: 'https://vintdress.com/tarifs',
  });

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-grain">
      {/* Back link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 font-display font-bold text-xs sm:text-sm text-gray-600 hover:text-vinted transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>
      </div>

      {/* Pricing Section (reused component) */}
      <PricingSection />

      {/* FAQ Section */}
      <section className="relative py-12 lg:py-20 bg-grain overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="text-center mb-10">
            <h2 className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl tracking-tight">
              <span className="inline-block bg-white text-black border-2 sm:border-3 border-black px-3 sm:px-4 py-1 sm:py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 mb-2">
                PAIEMENT &
              </span>
              <br />
              <span className="inline-block bg-pink-pastel text-black border-2 sm:border-3 border-black px-3 sm:px-4 py-1 sm:py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
                REMBOURSEMENT
              </span>
            </h2>
            <p className="font-body font-semibold text-sm sm:text-base text-gray-600 mt-5 max-w-xl mx-auto">
              Toutes les réponses sur les tarifs, remboursements et gestion de votre abonnement
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {pricingFAQ.map((item, index) => (
              <div
                key={index}
                className="bg-white border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left gap-3"
                >
                  <span className="font-display font-bold text-sm sm:text-base text-black">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-vinted flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 border-t-2 border-black/10 pt-3">
                    <p className="font-body text-sm sm:text-base text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-8 bg-vinted border-3 border-black p-5 sm:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h3 className="font-display font-bold text-lg text-white mb-1">
                  Une question non résolue ?
                </h3>
                <p className="font-body text-sm text-white/80">
                  Notre équipe répond sous 24h
                </p>
              </div>
              <a
                href="mailto:contact@vintdress.com"
                className="inline-flex items-center gap-2 bg-white text-vinted font-display font-bold text-sm px-5 py-2.5 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 whitespace-nowrap"
              >
                <HelpCircle className="w-4 h-4" />
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TarifsPage;
