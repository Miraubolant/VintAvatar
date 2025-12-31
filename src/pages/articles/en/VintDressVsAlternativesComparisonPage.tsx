import React from 'react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { TrendingUp, Target, Award, Scale, Users, MessageCircle, Trophy, ArrowRight, Check, X, AlertCircle } from 'lucide-react';

export default function VintDressVsAlternativesComparisonPage() {
  useSEO({
    title: "VintDress vs Alternatives: Which AI Photo Generator to Choose in 2025? | Comparison",
    description: "Complete comparison of AI photo generators for Vinted in 2025. VintDress vs alternatives: pricing, quality, features. Buying guide!",
    keywords: "vintdress review, ai photo generator vinted, ai photo comparison, best vinted tool, vintdress alternative, ai photo vinted 2025",
  });

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Image Section */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 h-[400px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=400&fit=crop"
          alt="VintDress vs Alternatives Comparison 2025"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
              VintDress vs Alternatives
            </h1>
            <p className="font-display text-xl md:text-2xl text-white">
              Complete Comparison 2025
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
              Comparison
            </span>
            <span className="text-black">December 3, 2025</span>
            <span className="text-black">•</span>
            <span className="text-black">8 min read</span>
            <span className="text-black">•</span>
            <span className="text-black">By VintDress Team</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {['Comparison', 'AI', 'Vinted', 'Photos', '2025'].map((tag) => (
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
            Looking for the best AI tool to create worn photos for your Vinted listings?
            We tested the main solutions on the market to help you make the right choice.
          </p>

          <div className="flex items-start gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="font-display font-bold text-2xl mb-3">Why Use an AI Photo Generator?</h2>
              <p className="mb-4">
                Selling on Vinted has become ultra-competitive. With <strong>65+ million users</strong>,
                photo quality makes all the difference.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-3">Problem with traditional photos:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Preparation time (30-60 min per item)</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Need a model or take selfies</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Variable quality depending on conditions</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Often amateur-looking results</span>
                </li>
              </ul>
            </div>

            <div className="bg-mint/50 border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-3">Solution: AI generators:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Professional photos in seconds</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>No model needed</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Consistent quality</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Results that sell</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Comparison Criteria */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Comparison Criteria</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { num: '1', title: 'Image quality', desc: 'Realism, details, consistency' },
              { num: '2', title: 'Generation speed', desc: 'Wait time' },
              { num: '3', title: 'Customization options', desc: 'Body type, pose, background' },
              { num: '4', title: 'Vinted integration', desc: 'Ease of import from Vinted' },
              { num: '5', title: 'Pricing', desc: 'Value for money' },
              { num: '6', title: 'Privacy', desc: 'Data and face protection' },
            ].map((critere) => (
              <div key={critere.num} className="bg-cream border-3 border-black p-4">
                <div className="flex items-start gap-3">
                  <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0 border-2 border-black">
                    {critere.num}
                  </span>
                  <div>
                    <p className="font-semibold">{critere.title}</p>
                    <p className="text-sm text-gray-600">{critere.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VintDress - The Specialist */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Award className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl text-white">VintDress: The Vinted Specialist</h2>
          </div>

          <div className="bg-white border-3 border-black p-6 mb-6">
            <p className="text-lg mb-4">
              VintDress is <strong>THE French solution</strong> specifically designed for Vinted sellers.
              The tool stands out with its native Vinted integration and understanding of the specific needs
              of secondhand fashion sellers.
            </p>

            <h3 className="font-display font-bold text-xl mb-4">Key Strengths:</h3>

            <div className="space-y-4">
              <div className="bg-cream border-3 border-black p-4">
                <h4 className="font-semibold mb-2">Unique Vinted integration:</h4>
                <ul className="space-y-1 ml-4">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                    <span>Direct import via Vinted URL</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                    <span>Automatic photo extraction from listings</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                    <span>Optimized for Vinted format (4:5)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-cream border-3 border-black p-4">
                <h4 className="font-semibold mb-2">Full customization:</h4>
                <div className="grid grid-cols-2 gap-2 ml-4">
                  <span>• Gender (female/male)</span>
                  <span>• Skin tone</span>
                  <span>• Body type</span>
                  <span>• Pose (standing, sitting...)</span>
                  <span>• Background (neutral, urban...)</span>
                  <span>• Clothing type</span>
                </div>
              </div>

              <div className="bg-cream border-3 border-black p-4">
                <h4 className="font-semibold mb-2">Privacy protection:</h4>
                <ul className="space-y-1 ml-4">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                    <span>Face masking option included</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                    <span>European servers (GDPR)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                    <span>Secure data</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-white border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-4">VintDress Pricing:</h3>

            <div className="overflow-x-auto">
              <table className="w-full border-3 border-black">
                <thead>
                  <tr className="bg-vinted text-white border-b-3 border-black">
                    <th className="border-r-2 border-black p-3 text-left font-display font-bold">Plan</th>
                    <th className="border-r-2 border-black p-3 text-left font-display font-bold">Price</th>
                    <th className="border-r-2 border-black p-3 text-left font-display font-bold">Generations</th>
                    <th className="p-3 text-left font-display font-bold">Price/Photo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-3 font-semibold">Starter Pack</td>
                    <td className="border-r-2 border-black p-3">€3.99</td>
                    <td className="border-r-2 border-black p-3">10</td>
                    <td className="p-3 font-bold text-vinted">€0.40</td>
                  </tr>
                  <tr className="border-b-2 border-black bg-mint/20">
                    <td className="border-r-2 border-black p-3 font-semibold">Pro Pack</td>
                    <td className="border-r-2 border-black p-3">€7.99</td>
                    <td className="border-r-2 border-black p-3">25</td>
                    <td className="p-3 font-bold text-vinted">€0.32</td>
                  </tr>
                  <tr>
                    <td className="border-r-2 border-black p-3 font-semibold">Subscription</td>
                    <td className="border-r-2 border-black p-3">€12.99/month</td>
                    <td className="border-r-2 border-black p-3">40</td>
                    <td className="p-3 font-bold text-vinted">€0.32</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-mint border-3 border-black p-4 mt-4 flex items-start gap-2">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="font-semibold">Pack credits never expire!</p>
            </div>
          </div>

          {/* Overall Rating */}
          <div className="bg-white border-3 border-black p-6">
            <h3 className="font-display font-bold text-xl mb-4">VintDress Overall Rating:</h3>

            <div className="space-y-3">
              {[
                { critere: 'Quality', note: '⭐⭐⭐⭐⭐', detail: '5/5' },
                { critere: 'Speed', note: '⭐⭐⭐⭐⭐', detail: '30 seconds' },
                { critere: 'Customization', note: '⭐⭐⭐⭐⭐', detail: '5/5' },
                { critere: 'Pricing', note: '⭐⭐⭐⭐⭐', detail: '5/5' },
                { critere: 'Vinted Specialization', note: '⭐⭐⭐⭐⭐', detail: '5/5' },
              ].map((item) => (
                <div key={item.critere} className="flex items-center justify-between border-b-2 border-black pb-2">
                  <span className="font-semibold">{item.critere}:</span>
                  <div className="flex items-center gap-2">
                    <span>{item.note}</span>
                    <span className="text-sm text-gray-600">({item.detail})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Scale className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">VintDress vs Alternatives</h2>
          </div>

          <div className="bg-pink-pastel/30 border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-lg mb-3">Limitations of generic alternatives:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                <span>No Vinted URL import</span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Image format not adapted</span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                <span>No specific options for secondhand clothing</span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Less realistic results on real clothing</span>
              </li>
            </ul>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-3 border-black bg-white">
              <thead>
                <tr className="bg-black text-white border-b-3 border-black">
                  <th className="border-r-2 border-white p-3 text-left font-display font-bold">Criteria</th>
                  <th className="border-r-2 border-white p-3 text-center font-display font-bold">VintDress</th>
                  <th className="p-3 text-center font-display font-bold">Alternatives</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { critere: 'Vinted URL Import', vintdress: '✅ Yes', alternatives: '❌ No' },
                  { critere: 'Native 4:5 Format', vintdress: '✅ Yes', alternatives: '⚠️ Variable' },
                  { critere: 'Face Masking', vintdress: '✅ Included', alternatives: '⚠️ Rare' },
                  { critere: 'Clothing Type', vintdress: '✅ Specific', alternatives: '❌ Generic' },
                  { critere: 'GDPR Servers', vintdress: '✅ Europe', alternatives: '⚠️ Variable' },
                  { critere: 'French Support', vintdress: '✅ Yes', alternatives: '⚠️ Rarely' },
                ].map((row, idx) => (
                  <tr key={idx} className={`border-b-2 border-black ${idx % 2 === 0 ? 'bg-cream' : ''}`}>
                    <td className="border-r-2 border-black p-3 font-semibold">{row.critere}</td>
                    <td className="border-r-2 border-black p-3 text-center font-semibold">{row.vintdress}</td>
                    <td className="p-3 text-center">{row.alternatives}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* What Sellers Are Looking For */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Users className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">What Vinted Sellers Are Looking For</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-vinted/10 border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-2">1. Authenticity</h3>
              <p>
                Vinted buyers want to see the real clothing item, not an idealized version.
                VintDress preserves the details of the original garment.
              </p>
            </div>

            <div className="bg-mint/50 border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-2">2. Trust</h3>
              <p>
                Face masking and European servers reassure both sellers and buyers
                about data protection.
              </p>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-2">3. Speed</h3>
              <p>
                With dozens of items to photograph, speed is crucial.
                <strong> 30 seconds vs 30 minutes</strong> changes everything.
              </p>
            </div>

            <div className="bg-cream border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-2">4. Profitability</h3>
              <p>
                At <strong>€0.32 per pro-quality photo</strong>, the ROI is immediate:
                a faster sale easily pays back the investment.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">User Testimonials</h2>
          </div>

          <div className="space-y-4">
            <div className="bg-cream border-3 border-black p-6">
              <p className="italic mb-3">
                "I tested several solutions before VintDress. The difference? The Vinted URL import saves me
                so much time, and the quality is consistent."
              </p>
              <p className="font-semibold">— Marie, seller for 3 years</p>
            </div>

            <div className="bg-vinted/10 border-3 border-black p-6">
              <p className="italic mb-3">
                "The value for money is unbeatable. My views have tripled since I started using AI photos."
              </p>
              <p className="font-semibold">— Lucas, pro seller (150+ items)</p>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <p className="italic mb-3">
                "I didn't dare take photos of myself. With VintDress, my listings finally look professional!"
              </p>
              <p className="font-semibold">— Sophie, beginner</p>
            </div>
          </div>
        </div>

        {/* Verdict */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Trophy className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl text-white">Verdict: Which Tool to Choose?</h2>
          </div>

          <div className="bg-white border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-4">Why VintDress wins:</h3>

            <div className="space-y-3">
              {[
                'Only tool with Vinted URL import - Huge time saver',
                'Specialized in secondhand fashion - Understands specific needs',
                'Affordable prices - From €0.32/photo',
                'French and GDPR - Support and secure data',
                'Face masking included - Guaranteed privacy',
              ].map((raison, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0 border-2 border-black">
                    {idx + 1}
                  </span>
                  <p className="font-semibold pt-1">{raison}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-mint border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-3">Use VintDress if:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>You sell on Vinted (obviously!)</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>You have multiple items to photograph</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>You want pro results without effort</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Privacy matters to you</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-3">Consider alternatives if:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <AlertCircle className="w-5 h-5 mr-2 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span>You don't sell on Vinted</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="w-5 h-5 mr-2 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span>You only need basic photo editing</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="w-5 h-5 mr-2 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span>You need complex retouching (other than worn photos)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* How to Get Started */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <ArrowRight className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">How to Get Started with VintDress</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-6">
            {[
              { num: '1', titre: 'Create an account', desc: 'Free, quick registration' },
              { num: '2', titre: 'Choose your plan', desc: 'Pack or subscription based on your needs' },
              { num: '3', titre: 'Import your clothing', desc: 'Vinted URL or photo upload' },
              { num: '4', titre: 'Generate and download', desc: '30 seconds and you\'re done!' },
            ].map((etape) => (
              <div key={etape.num} className="bg-cream border-3 border-black p-4 text-center">
                <div className="bg-vinted text-white font-display font-bold w-12 h-12 flex items-center justify-center mx-auto mb-3 border-2 border-black text-xl">
                  {etape.num}
                </div>
                <p className="font-semibold mb-2">{etape.titre}</p>
                <p className="text-sm text-gray-600">{etape.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-vinted/10 border-3 border-black p-6">
            <h3 className="font-display font-bold text-xl mb-4">Our Recommendation:</h3>
            <div className="space-y-2">
              <p><strong>To test:</strong> Starter Pack at €3.99 (10 generations)</p>
              <p><strong>For regular sellers:</strong> Pro Pack at €7.99 (25 generations)</p>
              <p><strong>For intensive sellers:</strong> Subscription at €12.99/month</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <details className="bg-cream border-3 border-black p-6 cursor-pointer group">
              <summary className="font-display font-bold text-lg list-none flex items-center justify-between">
                <span>What is the best AI photo generator for Vinted?</span>
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 pt-4 border-t-2 border-black">
                VintDress is the only tool specialized for Vinted with direct URL import, native 4:5 format
                and face masking option. It's the recommended choice for Vinted sellers.
              </p>
            </details>

            <details className="bg-cream border-3 border-black p-6 cursor-pointer group">
              <summary className="font-display font-bold text-lg list-none flex items-center justify-between">
                <span>How much does an AI photo for Vinted cost?</span>
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 pt-4 border-t-2 border-black">
                With VintDress, the price per photo ranges from €0.32 to €0.40 depending on the plan chosen.
                Pack credits never expire, unlike monthly subscriptions.
              </p>
            </details>

            <details className="bg-cream border-3 border-black p-6 cursor-pointer group">
              <summary className="font-display font-bold text-lg list-none flex items-center justify-between">
                <span>Are AI photos allowed on Vinted?</span>
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 pt-4 border-t-2 border-black">
                Yes, you can use AI-generated photos on Vinted as long as they faithfully represent
                the actual clothing item you're selling.
              </p>
            </details>

            <details className="bg-cream border-3 border-black p-6 cursor-pointer group">
              <summary className="font-display font-bold text-lg list-none flex items-center justify-between">
                <span>What's the difference between VintDress and alternatives?</span>
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 pt-4 border-t-2 border-black">
                VintDress is the only one to offer direct Vinted URL import, secondhand fashion specialization,
                included face masking, and GDPR-compliant European servers.
              </p>
            </details>
          </div>
        </div>

        {/* Conclusion + CTA */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl text-white mb-4">Conclusion</h2>
          <p className="text-white text-lg mb-4">
            In a market where photo quality makes all the difference, choosing the right AI tool is strategic.
          </p>
          <p className="text-white text-lg mb-6">
            <strong>VintDress stands out</strong> with its Vinted specialization, unique integration (URL import),
            complete customization options, and excellent value for money.
          </p>
          <p className="text-white text-lg mb-6">
            For Vinted sellers who want professional photos without the hassle, the choice is clear.
          </p>
          <a
            href="/en"
            className="inline-block bg-mint border-4 border-black px-8 py-4 font-display font-bold text-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            Try VintDress Now
          </a>
        </div>

        {/* Related Articles */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-display font-bold text-2xl mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="/en/articles/complete-guide-vinted-photos-2025"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Complete Photo Guide 2025 →</p>
            </a>
            <a
              href="/en/articles/5-tips-sell-faster-vinted"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">5 Tips to Sell Faster →</p>
            </a>
            <a
              href="/en/articles/ai-fashion-revolution"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">AI in Fashion Service →</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
