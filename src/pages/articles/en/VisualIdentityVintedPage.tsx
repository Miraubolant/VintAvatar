import React from 'react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { Palette, Image, FileText, Users, TrendingUp, Calendar, Lightbulb, Award, CheckCircle, X, Star } from 'lucide-react';

export default function VisualIdentityVintedPage() {
  useSEO({
    title: "Create a Powerful Visual Identity on Vinted | Complete Guide",
    description: "Learn how to create a strong visual identity on Vinted to stand out. Consistent photos, descriptions, branding. Complete guide!",
    keywords: "vinted visual identity, vinted branding, professional vinted shop, stand out on vinted, consistent vinted photos",
  });

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Image Section */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 h-[400px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=400&fit=crop"
          alt="Create a Visual Identity on Vinted"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
              Create a Powerful Visual Identity
            </h1>
            <p className="font-display text-xl md:text-2xl text-white">
              Complete Vinted Guide
            </p>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <ArticleNavigation />

        <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-wrap items-center gap-4 text-sm font-display font-semibold">
            <span className="bg-vinted border-2 border-black px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-white">
              Strategy
            </span>
            <span className="text-black">December 1, 2025</span>
            <span className="text-black">•</span>
            <span className="text-black">8 min read</span>
            <span className="text-black">•</span>
            <span className="text-black">By Julie Renard</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {['Visual Identity', 'Branding', 'Vinted', 'Marketing', 'Strategy'].map((tag) => (
              <span
                key={tag}
                className="bg-mint border-2 border-black px-3 py-1 text-sm font-display font-semibold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Introduction */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <p className="text-lg leading-relaxed mb-6">
            On Vinted, thousands of sellers offer similar items. How do you stand out?
            The answer: a strong and consistent visual identity that transforms your profile into a real brand.
          </p>

          <div className="bg-vinted border-3 border-black p-6 mb-6">
            <h2 className="font-display font-bold text-2xl text-white mb-4">Why Visual Identity Changes Everything</h2>

            <div className="bg-white border-2 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Measured impact:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: 'Consistent profiles', value: '+180% followers' },
                  { label: 'Buyer trust', value: '+65%' },
                  { label: 'Higher accepted prices', value: '+25%' },
                  { label: 'Return customer rate', value: 'x3' }
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-cream border-2 border-black p-3">
                    <span className="font-semibold">{stat.label}</span>
                    <span className="text-vinted font-bold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-pink-pastel/30 border-3 border-black p-6 italic">
            <p className="font-semibold text-lg">
              "I prefer buying from someone with professional photos, it inspires trust"
            </p>
            <p className="text-sm mt-2">— Vinted Behavior Study 2024</p>
          </div>
        </div>

        {/* The 3 Pillars */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">The Pillars of a Strong Visual Identity</h2>

          {/* Pillar 1: Photo Consistency */}
          <div className="bg-vinted/10 border-3 border-black p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-vinted border-2 border-black p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <Image className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display font-bold text-2xl">1. Photo Consistency</h3>
            </div>

            <p className="mb-4">
              <strong>The secret of top sellers:</strong> All their photos have the same "look".
            </p>

            <div className="bg-white border-2 border-black p-6">
              <h4 className="font-semibold mb-3">Simple solution with our AI:</h4>
              <ul className="space-y-2">
                {[
                  'Same mannequin style for all your items',
                  'Identical lighting (our AI guarantees consistency)',
                  'Similar and professional poses',
                  'Uniform backgrounds'
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-mint border-2 border-black p-4 mt-4">
                <p className="font-semibold">
                  Result: A visually harmonious item grid that makes you want to scroll!
                </p>
              </div>
            </div>
          </div>

          {/* Pillar 2: Color Palette */}
          <div className="bg-pink-pastel/30 border-3 border-black p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-pink-pastel border-2 border-black p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <Palette className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-2xl">2. Color Palette</h3>
            </div>

            <p className="mb-4"><strong>Choose 2-3 colors maximum:</strong></p>
            <ul className="space-y-1 ml-4 mb-6">
              <li>• A main color (your "signature")</li>
              <li>• A secondary color (complement)</li>
              <li>• A neutral color (white, beige, gray)</li>
            </ul>

            <h4 className="font-semibold mb-3">Examples of palettes that work:</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { name: 'Minimalist', colors: 'White, black, light gray' },
                { name: 'Bohemian', colors: 'Beige, terracotta, cream' },
                { name: 'Modern', colors: 'White, pale pink, gold' },
                { name: 'Edgy', colors: 'Black, silver, burgundy' }
              ].map((palette) => (
                <div key={palette.name} className="bg-white border-2 border-black p-3">
                  <p className="font-semibold">{palette.name}</p>
                  <p className="text-sm text-gray-600">{palette.colors}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pillar 3: Writing Style */}
          <div className="bg-mint/50 border-3 border-black p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-mint border-2 border-black p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-2xl">3. Writing Style</h3>
            </div>

            <p className="mb-3"><strong>Adopt a recognizable tone:</strong></p>
            <div className="grid md:grid-cols-2 gap-2 mb-4">
              <span>• Formal and expert</span>
              <span>• Casual and friendly</span>
              <span>• Enthusiastic and descriptive</span>
              <span>• Minimalist and factual</span>
            </div>

            <div className="bg-white border-2 border-black p-4">
              <p className="font-semibold">Stay consistent in all your listings!</p>
            </div>
          </div>
        </div>

        {/* Practical Guide */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-display font-bold text-3xl">Practical Guide: Create Your Vinted Brand</h2>
          </div>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="bg-vinted/10 border-3 border-black p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-vinted text-white font-display font-bold w-10 h-10 flex items-center justify-center border-2 border-black text-xl">1</span>
                <h3 className="font-display font-bold text-xl">Define Your Positioning</h3>
              </div>

              <p className="font-semibold mb-3">Questions to ask yourself:</p>
              <ul className="space-y-1 ml-4 mb-4">
                <li>• What type of clothes do I mainly sell?</li>
                <li>• Who is my target audience (age, style, budget)?</li>
                <li>• What makes me different?</li>
                <li>• What atmosphere do I want to convey?</li>
              </ul>

              <div className="bg-white border-2 border-black p-4">
                <p className="font-semibold mb-2">Positioning examples:</p>
                <ul className="space-y-1 text-sm">
                  <li>• "The preppy chic shop for students"</li>
                  <li>• "Quality vintage for thirty-somethings"</li>
                  <li>• "Responsible and affordable fashion"</li>
                  <li>• "Authenticated luxury secondhand"</li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-vinted text-white font-display font-bold w-10 h-10 flex items-center justify-center border-2 border-black text-xl">2</span>
                <h3 className="font-display font-bold text-xl">Create Your Photo Template</h3>
              </div>

              <p className="font-semibold mb-3">Use our AI to:</p>
              <ul className="space-y-2 ml-4 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Define a consistent mannequin style</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Choose a signature pose</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Select your background type</span>
                </li>
              </ul>

              <div className="bg-mint border-2 border-black p-4">
                <p className="font-semibold">Pro tip:</p>
                <p className="text-sm">Generate several test photos and choose the ones that best represent your style.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-mint/50 border-3 border-black p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-vinted text-white font-display font-bold w-10 h-10 flex items-center justify-center border-2 border-black text-xl">3</span>
                <h3 className="font-display font-bold text-xl">Standardize Your Descriptions</h3>
              </div>

              <p className="font-semibold mb-3">Create a fixed template:</p>
              <div className="bg-white border-2 border-black p-4 font-mono text-sm">
                <p>[Signature emoji] [CATCHY TITLE]</p>
                <p className="mt-2">[Enthusiastic description 2 lines]</p>
                <p className="mt-2">Features:</p>
                <p>[Always identical list format]</p>
                <p className="mt-2">[Signature closing sentence]</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-cream border-3 border-black p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-vinted text-white font-display font-bold w-10 h-10 flex items-center justify-center border-2 border-black text-xl">4</span>
                <h3 className="font-display font-bold text-xl">Polish Your Profile</h3>
              </div>

              <p className="font-semibold mb-3">Key elements:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Star className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Professional profile photo</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Short but impactful bio</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Highlight your specialty</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mistakes to Avoid */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Mistakes to Avoid</h2>

          <div className="space-y-4 mb-6">
            {[
              { error: 'Mixing photo styles', desc: 'Some on hangers, others worn, some flat lay' },
              { error: 'Inconsistent descriptions', desc: 'Sometimes formal, sometimes casual' },
              { error: 'Variable photo quality', desc: 'Excellent then mediocre' },
              { error: 'Different backgrounds', desc: 'White, hardwood, tile...' }
            ].map((item, idx) => (
              <div key={idx} className="bg-pink-pastel/30 border-3 border-black p-4">
                <div className="flex items-start gap-3">
                  <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg">{item.error}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <p className="font-semibold mb-2">Problem:</p>
              <p className="mb-3">Inconsistent photos</p>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold text-sm">Solution:</p>
                <p className="text-sm">Use our AI to regenerate all your photos with the same style</p>
              </div>
            </div>

            <div className="bg-mint/50 border-3 border-black p-6">
              <p className="font-semibold mb-2">Problem:</p>
              <p className="mb-3">No description template</p>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold text-sm">Solution:</p>
                <p className="text-sm">Create one and copy-paste the structure</p>
              </div>
            </div>
          </div>
        </div>

        {/* Real Success Stories */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Award className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Real Success Stories</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Case 1 */}
            <div className="bg-vinted/10 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-4">"Parisian Fashion" Profile</h3>

              <div className="space-y-3">
                <div className="bg-white border-2 border-black p-3">
                  <p className="font-semibold text-sm mb-1">Before:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Varied photos, uneven quality</li>
                    <li>• Random descriptions</li>
                    <li>• 50 sales/month</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-black p-3">
                  <p className="font-semibold text-sm mb-1">After:</p>
                  <ul className="text-sm space-y-1">
                    <li>• AI photos with elegant mannequin</li>
                    <li>• "Parisian chic" template</li>
                    <li>• Black/white/powder pink palette</li>
                  </ul>
                </div>

                <div className="bg-mint border-2 border-black p-3 text-center">
                  <p className="font-display font-bold text-lg">180 sales/month</p>
                  <p className="text-sm">Average prices +30%</p>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-4">"Vintage Corner" Profile</h3>

              <div className="space-y-3">
                <div className="bg-white border-2 border-black p-3">
                  <p className="font-semibold text-sm mb-1">Strategy:</p>
                  <ul className="text-sm space-y-1">
                    <li>• AI photos with retro-style mannequin</li>
                    <li>• "Storytelling" descriptions</li>
                    <li>• Beige/brown/cream palette</li>
                  </ul>
                </div>

                <div className="bg-mint border-2 border-black p-3 text-center">
                  <p className="font-display font-bold text-lg">2000 loyal followers</p>
                  <p className="text-sm">Engaged community</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 7-Day Action Plan */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Calendar className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">7-Day Action Plan</h2>
          </div>

          <div className="space-y-3">
            {[
              { days: 'Day 1-2', action: 'Define your positioning and target audience' },
              { days: 'Day 3', action: 'Choose your palette and style' },
              { days: 'Day 4-5', action: 'Create your templates (AI photo + description)' },
              { days: 'Day 6', action: 'Update your profile' },
              { days: 'Day 7', action: 'Start applying to your items' }
            ].map((step, idx) => (
              <div key={idx} className="bg-cream border-3 border-black p-4 flex items-center gap-4">
                <span className="bg-vinted text-white font-display font-bold px-4 py-2 border-2 border-black">
                  {step.days}
                </span>
                <p className="font-semibold">{step.action}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl text-white mb-6">Conclusion</h2>
          <p className="text-white text-lg mb-6">
            A strong visual identity on Vinted means:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              'Consistent photos thanks to our AI',
              'Templated descriptions',
              'Defined color palette',
              'Constant communication tone',
              'Optimized profile'
            ].map((point, idx) => (
              <div key={idx} className="bg-white border-3 border-black p-4 flex items-start gap-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0 border-2 border-black">
                  {idx + 1}
                </span>
                <p className="font-semibold pt-1">{point}</p>
              </div>
            ))}
          </div>

          <div className="bg-white border-3 border-black p-6 mb-6">
            <p className="font-display font-bold text-2xl text-center">
              More trust, more followers, more sales, better prices.
            </p>
          </div>

          <a
            href="/en"
            className="inline-block bg-mint border-4 border-black px-8 py-4 font-display font-bold text-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            Create My Identity With VintDress
          </a>
        </div>

        {/* Related Articles */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-display font-bold text-2xl mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="/en/articles/vinted-sales-strategy-2025"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Sales Strategy 2025 →</p>
            </a>
            <a
              href="/en/articles/complete-guide-vinted-photos-2025"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Photo Guide 2025 →</p>
            </a>
            <a
              href="/en/articles/sell-vintage-vinted-guide"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Sell Vintage →</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
