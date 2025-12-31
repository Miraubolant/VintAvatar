import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, XCircle, Lightbulb, AlertTriangle, Zap, Camera, Sparkles } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export const CompleteGuideVintedPhotos2025Page: React.FC = () => {
  useSEO({
    title: "Complete Guide: Optimize Your Vinted Photos in 2025 | VintDress",
    description: "Complete 2025 guide to optimize your Vinted photos. Pro techniques, AI, advanced strategies. +200% views guaranteed!",
    keywords: "vinted photos guide 2025, optimize vinted photos, AI photos vinted, sell more vinted, complete vinted guide",
  });

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Image Section */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 h-[400px] lg:h-[500px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1200&h=500&fit=crop"
          alt="Complete Guide Vinted Photos 2025"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-white text-4xl lg:text-6xl mb-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              COMPLETE GUIDE 2025
            </h1>
            <p className="font-display font-bold text-mint text-xl lg:text-2xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              Optimize Your Vinted Photos
            </p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 pb-12 lg:pb-20">
        <ArticleNavigation />

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 bg-vinted text-white border-3 border-black font-display font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              GUIDE
            </span>
            <span className="font-body text-sm text-gray-600">By VintDress Team</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">November 15, 2025</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">12 min read</span>
          </div>

          <h1 className="font-display font-bold text-4xl lg:text-5xl text-black mb-4">
            Complete Guide: Optimize Your Vinted Photos in 2025
          </h1>

          <p className="font-body text-lg text-gray-700 mb-6">
            The ultimate guide to creating Vinted photos that convert in 2025. All techniques revealed!
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["Guide", "Photos", "Vinted", "2025", "AI", "Optimization"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white border-2 border-black text-black font-body text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-vinted border-4 border-black p-6 mb-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-display font-bold text-white text-lg">
            2025 marks a new era for online selling. With the explosion of AI and new buyer expectations, your Vinted photos need to be perfect.
          </p>
        </div>

        {/* E-Commerce Evolution */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            E-Commerce Evolution in 2025
          </h2>

          <div className="bg-pink-pastel border-3 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4">
              What Has Changed
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="bg-white border-2 border-black p-3">
                <p className="font-body text-sm text-gray-700">Higher visual standards</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-body text-sm text-gray-700">Crucial first impression</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-body text-sm text-gray-700">AI in shopping habits</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-body text-sm text-gray-700">Mobile-first: 95% of views</p>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 1: Fundamentals */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Chapter 1: 2025 Fundamentals
          </h2>

          <div className="space-y-6">
            {/* 1.1 3 Second Rule */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-3">
                1.1 The 3-Second Rule
              </h3>
              <p className="font-body text-gray-700">
                Buyers decide in 3 seconds whether your item interests them. Your main photo must be <strong>perfect</strong>.
              </p>
            </div>

            {/* 1.2 Optimal Formats */}
            <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                1.2 Optimal Formats
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700"><strong>4:5 Ratio</strong>: Vinted's preferred format</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700"><strong>Minimum resolution</strong>: 1080x1350px</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700"><strong>Maximum size</strong>: 10MB to avoid compression</span>
                </li>
              </ul>
            </div>

            {/* 1.3 Lighting */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                1.3 Natural vs Artificial Lighting
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-mint border-2 border-black p-4">
                  <h4 className="font-display font-bold text-sm text-black mb-2">NATURAL LIGHTING</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">North window: soft light</span></li>
                    <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Avoid 12pm-2pm (too strong)</span></li>
                    <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Clouds = perfect diffuser</span></li>
                  </ul>
                </div>
                <div className="bg-pink-pastel border-2 border-black p-4">
                  <h4 className="font-display font-bold text-sm text-black mb-2">ARTIFICIAL LIGHTING</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Ring light minimum 18"</span></li>
                    <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Temperature 5500K</span></li>
                    <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Avoid direct flash</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 2: Staging */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Chapter 2: Professional Staging
          </h2>

          <div className="space-y-6">
            {/* Backgrounds */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                Top 3 Backgrounds in 2025
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white border-2 border-black p-4 text-center">
                  <div className="w-12 h-12 bg-white border-2 border-black mx-auto mb-2"></div>
                  <p className="font-display font-bold text-sm text-black mb-1">1. Pure white</p>
                  <p className="font-body text-xs text-gray-600">Timeless, highlights items</p>
                </div>
                <div className="bg-cream border-2 border-black p-4 text-center">
                  <div className="w-12 h-12 bg-cream border-2 border-black mx-auto mb-2"></div>
                  <p className="font-display font-bold text-sm text-black mb-1">2. Natural beige</p>
                  <p className="font-body text-xs text-gray-600">Warm, slow fashion</p>
                </div>
                <div className="bg-gray-200 border-2 border-black p-4 text-center">
                  <div className="w-12 h-12 bg-gray-300 border-2 border-black mx-auto mb-2"></div>
                  <p className="font-display font-bold text-sm text-black mb-1">3. Light gray</p>
                  <p className="font-body text-xs text-gray-600">Modern, dark tones</p>
                </div>
              </div>
            </div>

            {/* Composition */}
            <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-3">
                Composition and Angles
              </h3>
              <div className="space-y-2">
                <p className="font-body text-sm text-gray-700"><strong>The rule of thirds:</strong></p>
                <ul className="space-y-1">
                  <li className="flex gap-2"><Camera className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Main item on intersection</span></li>
                  <li className="flex gap-2"><Camera className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Negative space for breathing room</span></li>
                  <li className="flex gap-2"><Camera className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Slightly diagonal angle</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 3: AI Revolution */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Chapter 3: The AI Revolution
          </h2>

          <div className="bg-vinted border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              Why AI Changes Everything
            </h3>
            <p className="font-body text-white mb-4">
              Artificial intelligence now enables creating ultra-realistic worn photos without a mannequin.
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-white border-2 border-black p-4">
                <p className="font-display font-bold text-black mb-1">Consistency</p>
                <p className="font-body text-sm text-gray-700">Guaranteed pro quality</p>
              </div>
              <div className="bg-white border-2 border-black p-4">
                <p className="font-display font-bold text-black mb-1">Speed</p>
                <p className="font-body text-sm text-gray-700">30 seconds vs 30 minutes</p>
              </div>
              <div className="bg-white border-2 border-black p-4">
                <p className="font-display font-bold text-black mb-1">Diversity</p>
                <p className="font-body text-sm text-gray-700">Multiple models and poses</p>
              </div>
              <div className="bg-white border-2 border-black p-4">
                <p className="font-display font-bold text-black mb-1">ROI</p>
                <p className="font-body text-sm text-gray-700">+300% views</p>
              </div>
            </div>
          </div>

          {/* When to use AI */}
          <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-500" />
              When to Use AI
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-gray-700">Hard to wear clothes</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-gray-700">High-value items</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-gray-700">Unique or vintage pieces</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-gray-700">When you're short on time</span>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 4: Advanced Strategies */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Chapter 4: Advanced Strategies
          </h2>

          <div className="space-y-6">
            {/* Sequencing */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                Photo Sequencing
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white">1</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-black">AI worn view</p>
                    <p className="font-body text-sm text-gray-600">Main hook</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white">2</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-black">Material/tag detail</p>
                    <p className="font-body text-sm text-gray-600">Proof of quality</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white">3</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-black">Item overview alone</p>
                    <p className="font-body text-sm text-gray-600">Complete context</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white">4</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-black">Any flaws</p>
                    <p className="font-body text-sm text-gray-600">Transparency</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Optimization */}
            <div className="bg-pink-pastel border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-3">
                Mobile Optimization (95% of views)
              </h3>
              <ul className="space-y-2">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Readable text even in thumbnail</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Strong contrasts for visibility</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Centered elements to avoid cropping</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Chapter 5: Mistakes to Avoid */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Chapter 5: Mistakes to Absolutely Avoid
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3 mb-2">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-bold text-black">Blurry photos</h3>
              </div>
              <p className="font-body text-sm text-gray-700">-70% views</p>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3 mb-2">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-bold text-black">Yellow lighting</h3>
              </div>
              <p className="font-body text-sm text-gray-700">Distorts colors</p>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3 mb-2">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-bold text-black">Cluttered background</h3>
              </div>
              <p className="font-body text-sm text-gray-700">Distracts attention</p>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3 mb-2">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-bold text-black">Multiple items</h3>
              </div>
              <p className="font-body text-sm text-gray-700">Guaranteed confusion</p>
            </div>
          </div>

          <div className="bg-pink-pastel border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-500" />
              2025-Specific Pitfalls
            </h3>
            <ul className="space-y-2">
              <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700"><strong>Over-saturation</strong>: Modern screens reveal everything</span></li>
              <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700"><strong>Instagram filters</strong>: Distort reality</span></li>
              <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700"><strong>Over-edited photos</strong>: Loss of buyer trust</span></li>
            </ul>
          </div>
        </section>

        {/* Chapter 6: Practical Cases */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Chapter 6: Practical Cases by Category
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Dresses and Skirts */}
            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3">Dresses and Skirts</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>AI recommended</strong>: See the drape</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Pose</strong>: Standing, hip rotation</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Focus</strong>: Length and cut</span></li>
              </ul>
            </div>

            {/* Tops and T-shirts */}
            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3">Tops and T-shirts</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Bust</strong>: Fitted to show shape</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Details</strong>: Collar, sleeves, patterns</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Wrinkles</strong>: Absolutely avoid</span></li>
              </ul>
            </div>

            {/* Pants and Jeans */}
            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3">Pants and Jeans</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Legs</strong>: Straight, not crossed</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Waist</strong>: Clearly visible</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Hems</strong>: Clear length</span></li>
              </ul>
            </div>

            {/* Shoes */}
            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3">Shoes</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Profile</strong>: Side view required</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Soles</strong>: Wear state visible</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Pair</strong>: Always show both</span></li>
              </ul>
            </div>

            {/* Accessories */}
            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3">Accessories</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Proportions</strong>: Size reference</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Shine</strong>: Avoid reflections</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Details</strong>: Clasps, chains</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Chapter 7: Tools */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Chapter 7: Tools and Equipment
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-mint border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3">Smartphone</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">12MP minimum</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Optical stabilization</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Portrait mode</span></li>
              </ul>
            </div>

            <div className="bg-pink-pastel border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3">Applications</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">VSCO</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Snapseed</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Lightroom Mobile</span></li>
              </ul>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3">Pro Equipment</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Tripod</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Remote control</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Reflector</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Action Plan */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Your 2025 Action Plan
          </h2>

          <div className="bg-vinted border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-vinted">1</span>
                </div>
                <p className="font-body text-white"><strong>Audit your current photos</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-vinted">2</span>
                </div>
                <p className="font-body text-white"><strong>Identify your 5 best pieces</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-vinted">3</span>
                </div>
                <p className="font-body text-white"><strong>Test AI on these items</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-vinted">4</span>
                </div>
                <p className="font-body text-white"><strong>Compare the results</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-vinted">5</span>
                </div>
                <p className="font-body text-white"><strong>Adopt the winning strategy</strong></p>
              </div>
            </div>

            <div className="bg-white border-3 border-black p-4 mt-6">
              <p className="font-display font-bold text-black mb-2">
                The 2025 Secret
              </p>
              <p className="font-body text-sm text-gray-700">
                Intelligently mix AI photos and traditional photos according to item type and your time budget.
              </p>
            </div>

            <div className="bg-mint border-3 border-black p-4 mt-4">
              <p className="font-display font-bold text-black mb-2">
                Guaranteed Result
              </p>
              <p className="font-body text-sm text-gray-700">
                +200% views minimum, selling time divided by 3.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>What photo format should I use on Vinted?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  The optimal format is 4:5 (1080x1350px) which displays perfectly on mobile and desktop.
                </p>
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>How many photos should I put on a Vinted listing?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Ideally 5 photos: one main worn photo, details, a back view, and the tag.
                </p>
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>Can AI really improve my sales?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Yes, users see on average +300% views and +250% sales with AI photos.
                </p>
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>How long to create an AI photo?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Only 30 seconds to generate a professional worn photo with VintDress.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              Ready to Revolutionize Your Vinted Photos?
            </h2>
            <p className="font-body text-white mb-6 max-w-2xl mx-auto">
              Test our AI now and join sellers dominating Vinted in 2025.
            </p>
            <Link
              to="/#generator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-4 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              TEST AI NOW
              <Zap className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="font-display font-bold text-2xl text-black mb-6">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              to="/en/articles/5-tips-sell-faster-vinted"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">5 Tips to Sell Faster</h3>
              <p className="font-body text-sm text-gray-600">Optimize your sales with proven strategies.</p>
            </Link>
            <Link
              to="/en/articles/vinted-sales-strategy-2025"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">Vinted Sales Strategy 2025</h3>
              <p className="font-body text-sm text-gray-600">The complete strategy to dominate Vinted this year.</p>
            </Link>
            <Link
              to="/en/articles/ai-mannequin-vinted"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">AI Mannequin Vinted</h3>
              <p className="font-body text-sm text-gray-600">Discover how an AI mannequin can transform your photos.</p>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default CompleteGuideVintedPhotos2025Page;
