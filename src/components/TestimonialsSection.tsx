import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const TestimonialsSection: React.FC = () => {
  const { t } = useTranslation('testimonials');

  const testimonials = t('testimonials', { returnObjects: true }) as Array<{
    name: string;
    location: string;
    author: string;
    text: string;
  }>;

  return (
    <section id="avis" className="relative py-20 lg:py-24 bg-cream overflow-hidden">
      {/* Formes décoratives neo-brutalism - hidden on mobile to avoid overlap */}
      <div className="hidden md:block absolute top-20 left-12 w-12 h-12 bg-vinted border-4 border-black transform rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] pointer-events-none"></div>
      <div className="hidden md:block absolute top-1/3 right-8 w-10 h-10 bg-mint border-3 border-black neo-shape-circle shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] pointer-events-none"></div>
      <div className="hidden md:block absolute bottom-32 left-20 w-14 h-14 bg-pink-pastel border-4 border-black transform -rotate-45 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] pointer-events-none"></div>
      <div className="hidden md:block absolute bottom-20 right-1/4 w-8 h-8 bg-white border-3 border-black transform rotate-12 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Neo-Brutalism */}
        <div className="text-center mb-16">
          
          <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight">
            <div className="text-black transform -rotate-2 mb-4 relative">
              <span className="inline-block bg-white border-4 border-black px-8 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                {t('title.line1')}
              </span>
            </div>
            <div className="text-white transform rotate-3 relative">
              <span className="inline-block bg-vinted border-4 border-black px-8 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                {t('title.line2')}
              </span>
            </div>
          </h2>

          <div className="max-w-2xl mx-auto pt-10 pb-8">
            <p className="font-body font-semibold text-lg text-gray-700">
              Découvre comment les vendeurs <span className="text-vinted font-bold">transforment leurs ventes</span> avec <span className="text-vinted font-bold">l'IA</span> !
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border-3 sm:border-4 border-black p-4 sm:p-6 lg:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              {/* Quote Icon */}
              <div className="mb-3 sm:mb-4 lg:mb-6">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 border-3 sm:border-4 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] ${
                  index % 2 === 0 ? 'bg-vinted' : 'bg-mint'
                }`}>
                  <Quote className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 ${index % 2 === 0 ? 'text-white' : 'text-black'}`} />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-vinted fill-vinted" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-body font-semibold text-sm sm:text-base lg:text-lg leading-relaxed mb-4">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="pt-3 border-t-2 border-gray-200">
                <p className="font-display font-bold text-sm text-black">{testimonial.name}</p>
                <p className="font-body text-xs text-gray-600">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};