import React from 'react';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const TestimonialsSection: React.FC = () => {
  const { t } = useTranslation('testimonials');

  const allTestimonials = t('testimonials', { returnObjects: true }) as Array<{
    name: string;
    location: string;
    author: string;
    text: string;
  }>;

  // Only show 4 testimonials
  const testimonials = allTestimonials.slice(0, 4);

  return (
    <section id="avis" className="relative py-8 sm:py-10 lg:py-12 bg-grain overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header - Consistent with other sections */}
        <div className="text-center mb-5 sm:mb-6">
          <h2 className="font-display font-semibold text-2xl sm:text-3xl lg:text-4xl tracking-tight">
            {/* Mobile: inline */}
            <div className="flex flex-wrap justify-center items-center gap-2 sm:hidden">
              <span className="inline-block bg-white text-black border-2 border-black px-3 py-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
                {t('title.line1')}
              </span>
              <span className="inline-block bg-vinted text-white border-2 border-black px-3 py-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
                {t('title.line2')}
              </span>
            </div>
            {/* Desktop: inline but larger */}
            <div className="hidden sm:flex justify-center items-center gap-3">
              <span className="inline-block bg-white text-black border-3 border-black px-5 py-2.5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
                {t('title.line1')}
              </span>
              <span className="inline-block bg-vinted text-white border-3 border-black px-5 py-2.5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
                {t('title.line2')}
              </span>
            </div>
          </h2>
        </div>

        {/* Grid responsive - 2x2 on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border-2 border-black p-2.5 sm:p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-vinted fill-vinted" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-body font-semibold text-[10px] sm:text-xs leading-snug mb-1.5 line-clamp-3">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <p className="font-body font-semibold text-[8px] sm:text-[10px] text-gray-600 line-clamp-1">{testimonial.author}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
