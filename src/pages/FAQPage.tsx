import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, ShoppingBag, CreditCard, Camera, Shield, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useSEO } from '../hooks/useSEO';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  icon: React.ReactNode;
  questions: FAQItem[];
  color: string;
}

export const FAQPage: React.FC = () => {
  const { t } = useTranslation('faq');
  const [expandedCategories, setExpandedCategories] = useState<number[]>([0]);
  const [expandedQuestions, setExpandedQuestions] = useState<string[]>([]);

  useSEO({
    title: t('seo.title', 'FAQ - Questions fréquentes | VintDress'),
    description: t('seo.description', 'Trouvez toutes les réponses à vos questions sur VintDress'),
    keywords: t('seo.keywords', 'FAQ, questions fréquentes, VintDress, avatar IA, Vinted')
  });

  const getCategoryQuestions = (categoryKey: string): FAQItem[] => {
    try {
      const questions = t(`categories.${categoryKey}.questions`, { returnObjects: true });
      return Array.isArray(questions) ? questions : [];
    } catch (error) {
      console.warn(`Missing translations for categories.${categoryKey}.questions`);
      return [];
    }
  };

  const categories: FAQCategory[] = [
    {
      title: t('categories.general.title', 'Questions générales'),
      icon: <HelpCircle className="w-6 h-6" />,
      color: 'bg-pink-pastel',
      questions: getCategoryQuestions('general')
    },
    {
      title: t('categories.usage.title', 'Utilisation de l\'outil'),
      icon: <Camera className="w-6 h-6" />,
      color: 'bg-vinted',
      questions: getCategoryQuestions('usage')
    },
    {
      title: t('categories.pricing.title', 'Tarifs et crédits'),
      icon: <CreditCard className="w-6 h-6" />,
      color: 'bg-mint',
      questions: getCategoryQuestions('pricing')
    },
    {
      title: t('categories.sales.title', 'Impact sur les ventes'),
      icon: <ShoppingBag className="w-6 h-6" />,
      color: 'bg-yellow-300',
      questions: getCategoryQuestions('sales')
    },
    {
      title: t('categories.privacy.title', 'Confidentialité et sécurité'),
      icon: <Shield className="w-6 h-6" />,
      color: 'bg-pink-pastel',
      questions: getCategoryQuestions('privacy')
    },
    {
      title: t('categories.affiliate.title', 'Programme d\'affiliation'),
      icon: <Users className="w-6 h-6" />,
      color: 'bg-vinted',
      questions: getCategoryQuestions('affiliate')
    }
  ];

  const toggleCategory = (index: number) => {
    setExpandedCategories(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const toggleQuestion = (questionId: string) => {
    setExpandedQuestions(prev =>
      prev.includes(questionId)
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    );
  };

  return (
    <div className="min-h-screen bg-cream py-20 lg:py-24 relative overflow-hidden">
      {/* Formes décoratives neo-brutalism */}
      <div className="absolute top-32 left-4 sm:left-8 w-12 sm:w-16 h-12 sm:h-16 bg-mint border-3 sm:border-4 border-black transform rotate-12 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
      <div className="absolute top-1/4 right-6 sm:right-12 w-10 sm:w-12 h-10 sm:h-12 bg-pink-pastel border-3 border-black neo-shape-circle shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"></div>
      <div className="absolute bottom-1/3 left-8 sm:left-16 w-12 sm:w-14 h-12 sm:h-14 bg-vinted border-3 sm:border-4 border-black transform -rotate-45 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
      <div className="absolute top-3/4 right-8 w-8 h-8 bg-white border-3 border-black transform rotate-45 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight mb-6">
            <div className="text-black transform -rotate-2 mb-4 relative">
              <span className="inline-block bg-mint border-3 sm:border-4 border-black px-4 sm:px-6 py-2 sm:py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                {t('title', 'Questions fréquentes')}
              </span>
            </div>
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="font-body font-semibold text-base sm:text-lg bg-white border-3 border-black p-3 sm:p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1 inline-block">
              {t('subtitle', 'Tout ce que vous devez savoir pour booster vos ventes Vinted')}
            </p>
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-6">
          {categories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(categoryIndex)}
                className={`w-full ${category.color} border-b-3 sm:border-b-4 border-black p-3 sm:p-4 flex items-center justify-between hover:translate-x-[-1px] hover:translate-y-[-1px] sm:hover:translate-x-[-2px] sm:hover:translate-y-[-2px] transition-transform duration-200`}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className={`p-1.5 sm:p-2 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-cream'} border-2 sm:border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
                    <div className="w-5 h-5 sm:w-6 sm:h-6">
                      {category.icon}
                    </div>
                  </div>
                  <h2 className={`font-display font-bold text-lg sm:text-xl ${category.color === 'bg-vinted' ? 'text-white' : 'text-black'}`}>
                    {category.title}
                  </h2>
                </div>
                {expandedCategories.includes(categoryIndex) ? (
                  <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </button>

              {/* Questions */}
              {expandedCategories.includes(categoryIndex) && (
                <div className="divide-y-2 divide-black">
                  {category.questions.map((item, questionIndex) => {
                    const questionId = `${categoryIndex}-${questionIndex}`;
                    const isExpanded = expandedQuestions.includes(questionId);

                    return (
                      <div key={questionIndex}>
                        <button
                          onClick={() => toggleQuestion(questionId)}
                          className="w-full p-3 sm:p-4 flex items-center justify-between hover:bg-cream transition-colors duration-200 text-left"
                        >
                          <h3 className="font-display font-semibold text-sm sm:text-base text-black pr-3 sm:pr-4">
                            {item.question}
                          </h3>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                          )}
                        </button>
                        {isExpanded && (
                          <div className="px-3 sm:px-4 pb-3 sm:pb-4 pt-0">
                            <div className="bg-cream border-2 border-black p-3 sm:p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                              <p className="font-body text-sm sm:text-base text-black leading-relaxed">
                                {item.answer}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-white border-3 sm:border-4 border-black p-6 sm:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
            <h2 className="font-display font-bold text-xl sm:text-2xl mb-3 sm:mb-4 text-black">
              {t('contact.title', 'Vous ne trouvez pas votre réponse ?')}
            </h2>
            <p className="font-body text-base sm:text-lg mb-4 sm:mb-6 text-gray-700">
              {t('contact.description', 'Notre équipe support est là pour vous aider. Contactez-nous et nous vous répondrons dans les plus brefs délais.')}
            </p>
            <a
              href="mailto:support@vintdress.com"
              className="inline-block bg-vinted text-white font-display font-bold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 border-3 sm:border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              {t('contact.button', 'Contacter le support')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};