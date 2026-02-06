import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Comment fonctionne l'IA Vinted de VintDress ?",
    answer: "VintDress utilise l'intelligence artificielle pour transformer vos photos de vêtements à plat en photos portées par un mannequin IA. Importez votre photo ou lien Vinted, personnalisez le mannequin (genre, morphologie, carnation), et obtenez une photo portée réaliste en 30 secondes."
  },
  {
    question: "Est-ce que l'IA photo Vinted est gratuite ?",
    answer: "VintDress propose des crédits gratuits : parrainez un ami pour recevoir +1 crédit gratuit chacun, ou partagez vos photos dans la galerie communautaire pour gagner +1 crédit (maximum 2 partages). Les packs payants démarrent à 3,99\u00A0€ pour 10 crédits."
  },
  {
    question: "Qu'est-ce qu'un mannequin IA Vinted ?",
    answer: "Un mannequin IA Vinted est un avatar virtuel généré par intelligence artificielle qui porte vos vêtements de manière réaliste. Contrairement à un mannequin physique, il est personnalisable (genre, taille, carnation) et disponible instantanément. Les vendeurs Vinted qui utilisent des photos avec mannequin IA voient leurs ventes augmenter de +300\u00A0%."
  },
  {
    question: "Comment obtenir des crédits IA Vinted gratuits ?",
    answer: "Deux méthodes pour obtenir des crédits gratuits : 1) Le parrainage \u2013 partagez votre code, et quand votre filleul effectue son premier achat, vous recevez chacun +1 crédit gratuit. 2) La galerie communautaire \u2013 partagez vos plus belles générations pour recevoir +1 crédit par partage (maximum 2)."
  },
  {
    question: "Les photos IA Vinted sont-elles de bonne qualité ?",
    answer: "Oui, VintDress utilise FLUX Kontext Pro, un modèle IA de dernière génération, pour créer des photos portées haute définition. Les résultats sont réalistes et optimisés pour Vinted. Les vendeurs constatent en moyenne +300\u00A0% de vues et +250\u00A0% de ventes avec des photos portées IA."
  }
];

export const HomeFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 lg:py-24 bg-grain overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl tracking-tight">
            <span className="inline-block bg-white text-black border-2 sm:border-3 border-black px-3 sm:px-4 py-1 sm:py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 mb-2">
              QUESTIONS
            </span>
            <br />
            <span className="inline-block bg-vinted text-white border-2 sm:border-3 border-black px-3 sm:px-4 py-1 sm:py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
              FRÉQUENTES
            </span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqItems.map((item, index) => (
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

        {/* Link to full FAQ */}
        <div className="text-center mt-6">
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 bg-vinted text-white font-display font-bold text-sm px-5 py-2.5 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            <HelpCircle className="w-4 h-4" />
            Voir toutes les questions
          </Link>
        </div>
      </div>
    </section>
  );
};
