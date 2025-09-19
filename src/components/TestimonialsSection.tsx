import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const avatarImages = [
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
];

export const TestimonialsSection: React.FC = () => {
  const { t } = useTranslation('testimonials');

  const testimonials = t('testimonials', { returnObjects: true }) as Array<{
    name: string;
    location: string;
    text: string;
    sales: string;
    metric: string;
  }>;

  return (
    <section id="avis" className="relative py-20 lg:py-24 bg-cream overflow-hidden">
      {/* Formes décoratives neo-brutalism */}
      <div className="absolute top-20 left-12 w-12 h-12 bg-vinted border-4 border-black transform rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
      <div className="absolute top-1/3 right-8 w-10 h-10 bg-mint border-3 border-black neo-shape-circle shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"></div>
      <div className="absolute bottom-32 left-20 w-14 h-14 bg-pink-pastel border-4 border-black transform -rotate-45 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
      <div className="absolute bottom-20 right-1/4 w-8 h-8 bg-white border-3 border-black transform rotate-12 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Neo-Brutalism */}
        <div className="text-center mb-16">
          
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight mb-8">
            <div className="text-black transform -rotate-2 mb-4 relative">
              <span className="inline-block bg-pink-pastel border-4 border-black px-8 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                {t('title.line1')}
              </span>
            </div>
            <div className="text-white transform rotate-3 relative">
              <span className="inline-block bg-vinted border-4 border-black px-8 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                {t('title.line2')}
              </span>
            </div>
          </h2>
          
          <div className="inline-block">
            <p className="font-body font-semibold text-lg bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-2xl transform -rotate-1">
              {t('subtitle')}
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
                index % 5 === 0 ? 'rotate-1' : index % 5 === 1 ? '-rotate-1' : index % 5 === 2 ? 'rotate-0.5' : index % 5 === 3 ? '-rotate-0.5' : 'rotate-2'
              }`}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <div className={`w-14 h-14 border-4 border-black flex items-center justify-center transform rotate-12 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] ${
                  index % 5 === 0 ? 'bg-pink-pastel' : index % 5 === 1 ? 'bg-mint' : index % 5 === 2 ? 'bg-vinted' : index % 5 === 3 ? 'bg-yellow-300' : 'bg-white'
                }`}>
                  <Quote className={`w-7 h-7 ${index % 5 === 2 ? 'text-white' : 'text-black'}`} />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-vinted fill-vinted" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-body font-semibold text-lg leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>

              {/* Results */}
              <div className="mb-6 p-4 bg-mint border-3 border-black transform -rotate-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <div className="text-center">
                  <div className="font-display font-bold text-2xl text-black mb-1">
                    {testimonial.sales}
                  </div>
                  <div className="font-body font-semibold text-sm text-black">
                    {testimonial.metric} {t('common.moreLabel')}
                  </div>
                </div>
              </div>

              {/* Profile */}
              <div className="flex items-center gap-3">
                <img
                  src={avatarImages[index]}
                  alt={`Photo de ${testimonial.name}, utilisateur satisfait de génération avatar IA Vinted`}
                  className="w-12 h-12 object-cover border-3 border-black transform rotate-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                />
                <div>
                  <div className="font-display font-bold text-black">{testimonial.name}</div>
                  <div className="font-body text-sm text-gray-600">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};