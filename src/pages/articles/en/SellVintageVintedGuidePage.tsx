import React from 'react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { Gem, Search, Camera, DollarSign, FileText, TrendingUp, Clock, Award, Star, CheckCircle, X } from 'lucide-react';

export default function SellVintageVintedGuidePage() {
  useSEO({
    title: "Selling Vintage on Vinted: The Complete 2025 Guide | VintDress",
    description: "Complete guide to selling vintage on Vinted in 2025. Authentication, AI photos, pricing, descriptions. Turn your retro pieces into gold!",
    keywords: "sell vintage vinted, vintage clothing, retro fashion vinted, vintage pricing, vintage authenticity",
  });

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Image Section */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 h-[400px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=400&fit=crop"
          alt="Selling Vintage on Vinted"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
              Selling Vintage on Vinted
            </h1>
            <p className="font-display text-xl md:text-2xl text-white">
              The Complete 2025 Guide
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
              Guide
            </span>
            <span className="text-black">December 6, 2025</span>
            <span className="text-black">•</span>
            <span className="text-black">10 min read</span>
            <span className="text-black">•</span>
            <span className="text-black">By Sophie Martin</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {['Vintage', 'Guide', 'Vinted', 'Retro Fashion', 'Sales'].map((tag) => (
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
            Vintage is booming! With sustainable fashion and the return of retro trends,
            selling vintage clothing on Vinted can become very lucrative. Here's everything you need to know.
          </p>

          <div className="flex items-start gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Gem className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="font-display font-bold text-2xl mb-3">Why Vintage Is Thriving in 2025</h2>
              <div className="bg-mint/30 border-2 border-black p-4 mb-4">
                <h3 className="font-semibold mb-2">The numbers speak:</h3>
                <ul className="space-y-1">
                  <li>• +45% "vintage" searches on Vinted in 2024</li>
                  <li>• Average prices 3x higher than fast-fashion</li>
                  <li>• Buyers willing to pay for authenticity</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-pink-pastel/30 border-3 border-black p-6">
            <h3 className="font-display font-bold text-lg mb-3">What makes buyers fall in love:</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Unique and original pieces',
                'Superior manufacturing quality',
                'Timeless and sustainable style',
                'History and character of the garments'
              ].map((point, idx) => (
                <div key={idx} className="flex items-start">
                  <Star className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How to Identify a Real Vintage Piece */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Search className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">How to Identify a Real Vintage Piece</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-vinted/10 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Revealing labels:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>"Made in France/Italy/USA" (before outsourcing)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Period typography and logos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Lot numbers or old codes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Premium materials mentioned</span>
                </li>
              </ul>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Manufacturing details:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Reinforced and regular stitching</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Mother-of-pearl, metal or wood buttons</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Complete linings</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Metal zippers</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-cream border-3 border-black p-6">
            <h3 className="font-display font-bold text-xl mb-4">Dating a Vintage Piece:</h3>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white border-2 border-black p-4">
                <h4 className="font-semibold mb-2">70s:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Psychedelic patterns</li>
                  <li>• Wide pointed collars</li>
                  <li>• Shiny synthetic fabrics</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-black p-4">
                <h4 className="font-semibold mb-2">80s:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Pronounced shoulder pads</li>
                  <li>• Neon colors</li>
                  <li>• Visible logos</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-black p-4">
                <h4 className="font-semibold mb-2">90s:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Minimalism</li>
                  <li>• Faded denim</li>
                  <li>• Oversize cuts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Photographing Vintage */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Camera className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Photographing Vintage: Pro Secrets</h2>
          </div>

          <div className="bg-vinted border-3 border-black p-6 mb-6">
            <p className="text-white text-lg mb-4">
              Vintage has a unique challenge: buyers can't touch the fabric or see the details.
              Your photos must compensate.
            </p>

            <div className="bg-white border-2 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">The AI solution:</h3>
              <p className="mb-3">Our worn photo generator is perfect for vintage because it:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Highlights the unique cut</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Shows how the garment drapes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Brings life to pieces that may look "dead" on a hanger</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span><strong>Increases vintage sales by +350%!</strong></span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-cream border-3 border-black p-6">
            <h3 className="font-display font-bold text-xl mb-4">Mandatory Photos for Vintage:</h3>

            <div className="space-y-3">
              {[
                { num: '1', title: 'AI worn photo', desc: 'The ultimate hook' },
                { num: '2', title: 'Label/brand', desc: 'Proof of authenticity' },
                { num: '3', title: 'Fabric details', desc: 'Texture and quality' },
                { num: '4', title: 'Seams and finishes', desc: 'Craftsmanship' },
                { num: '5', title: 'Any defects', desc: 'Total transparency' },
              ].map((photo) => (
                <div key={photo.num} className="flex items-center gap-3 bg-white border-2 border-black p-3">
                  <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0 border-2 border-black">
                    {photo.num}
                  </span>
                  <div>
                    <p className="font-semibold">{photo.title}</p>
                    <p className="text-sm text-gray-600">{photo.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Vintage */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-display font-bold text-3xl">Pricing Vintage</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-vinted/10 border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center border-2 border-black">1</span>
                <h3 className="font-semibold text-lg">Identify the brand</h3>
              </div>
              <ul className="space-y-1 text-sm ml-10">
                <li>• Luxury vintage brands: price x5 to x10</li>
                <li>• Quality brands (Cacharel, vintage Kenzo): x3</li>
                <li>• No brand but quality: x2</li>
              </ul>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center border-2 border-black">2</span>
                <h3 className="font-semibold text-lg">Assess the condition</h3>
              </div>
              <ul className="space-y-1 text-sm ml-10">
                <li>• Perfect/New: Maximum price</li>
                <li>• Very good condition: -10 to 15%</li>
                <li>• Good condition with minor defects: -20 to 30%</li>
                <li>• To restore: -50% but specific niche</li>
              </ul>
            </div>

            <div className="bg-mint/50 border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center border-2 border-black">3</span>
                <h3 className="font-semibold text-lg">Check the trend</h3>
              </div>
              <ul className="space-y-1 text-sm ml-10">
                <li>• Trending piece: premium price</li>
                <li>• Timeless classic: stable price</li>
                <li>• Temporarily out of trend: patience or discount</li>
              </ul>
            </div>

            <div className="bg-cream border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center border-2 border-black">4</span>
                <h3 className="font-semibold text-lg">Study the market</h3>
              </div>
              <p className="text-sm ml-10">
                Search for similar <strong>sold</strong> items (not listed!)
              </p>
            </div>
          </div>
        </div>

        {/* Descriptions that Sell */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <FileText className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Descriptions that Sell</h2>
          </div>

          <div className="bg-cream border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-4">The Perfect Vintage Template:</h3>

            <div className="bg-white border-2 border-black p-4 font-mono text-sm">
              <p className="mb-2">[DECADE] [BRAND] - [GARMENT TYPE]</p>
              <p className="mb-2">Story:</p>
              <p className="mb-2 ml-4">[Piece context, era, style]</p>
              <p className="mb-2">Details:</p>
              <ul className="ml-4 mb-2">
                <li>- Brand: [name]</li>
                <li>- Era: [estimate]</li>
                <li>- Label size: [X] (corresponds to current [Y])</li>
                <li>- Material: [composition]</li>
                <li>- Color: [precise description]</li>
              </ul>
              <p className="mb-2">Measurements:</p>
              <p className="mb-2 ml-4">[All important measurements]</p>
              <p className="mb-2">Condition:</p>
              <p className="mb-2 ml-4">[Honest description with defects]</p>
              <p className="mb-2">Authenticity:</p>
              <p className="ml-4">[Elements that prove authenticity]</p>
            </div>
          </div>

          <div className="bg-vinted/10 border-3 border-black p-6">
            <h3 className="font-display font-bold text-lg mb-3">Keywords that Boost:</h3>
            <div className="flex flex-wrap gap-2">
              {['Vintage 90s', 'Retro', 'True vintage', 'Collector', 'Rare', 'Made in France'].map((keyword) => (
                <span key={keyword} className="bg-mint border-2 border-black px-3 py-1 text-sm font-semibold">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Most Profitable Vintage Niches */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Most Profitable Vintage Niches</h2>
          </div>

          <div className="space-y-4 mb-6">
            {[
              { num: '1', title: 'Vintage Levi\'s denim', desc: 'Safe bet, strong demand' },
              { num: '2', title: '90s sportswear', desc: 'Vintage Nike, Adidas highly sought after' },
              { num: '3', title: 'Vintage luxury', desc: 'Chanel, Hermès, YSL = jackpot' },
              { num: '4', title: '70s bohemian', desc: 'Long dresses, floral patterns' },
              { num: '5', title: '80s preppy', desc: 'Vintage Ralph Lauren, Lacoste' },
            ].map((niche) => (
              <div key={niche.num} className="bg-cream border-3 border-black p-4">
                <div className="flex items-start gap-3">
                  <span className="bg-vinted text-white font-display font-bold w-10 h-10 flex items-center justify-center flex-shrink-0 border-2 border-black text-lg">
                    {niche.num}
                  </span>
                  <div>
                    <p className="font-semibold text-lg">{niche.title}</p>
                    <p className="text-sm text-gray-600">{niche.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-pink-pastel/30 border-3 border-black p-6">
            <h3 className="font-display font-bold text-lg mb-3">To Avoid:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Very stained or torn clothing (unless listed "for parts")</span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Vintage counterfeits (yes, they exist!)</span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Pieces with no stylistic appeal</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Advanced Sales Strategy */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Advanced Sales Strategy</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-vinted/10 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Create your Vintage Shop:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Consistent photos with our AI</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Unified stylistic description</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Specialization by era or style</span>
                </li>
              </ul>
            </div>

            <div className="bg-mint/50 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Build customer loyalty:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Thematic bundles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Previews for loyal customers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Personalized style advice</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-cream border-3 border-black p-6">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-vinted" />
              <h3 className="font-display font-bold text-xl">Optimal Timing:</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">January</p>
                <p className="text-sm">Sustainable fashion resolutions</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">April</p>
                <p className="text-sm">Spring transition, seeking light pieces</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">September</p>
                <p className="text-sm">Back to school, new looks</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">October</p>
                <p className="text-sm">Vintage fall pieces</p>
              </div>
            </div>
          </div>
        </div>

        {/* Case Study */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Award className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl text-white">Case Study: From €5 to €150</h2>
          </div>

          <div className="bg-white border-3 border-black p-6">
            <h3 className="font-display font-bold text-xl mb-4">The Story of This Jacket:</h3>

            <div className="space-y-4">
              <div className="bg-pink-pastel/30 border-2 border-black p-4">
                <p className="font-semibold mb-2">Purchase:</p>
                <p>Velvet jacket thrifted for <strong>€5</strong></p>
              </div>

              <div className="bg-vinted/10 border-2 border-black p-4">
                <p className="font-semibold mb-2">Analysis:</p>
                <ul className="space-y-1">
                  <li>• "Made in France" label</li>
                  <li>• Parisian tailoring brand</li>
                  <li>• Horn buttons</li>
                  <li>• Silk lining</li>
                </ul>
              </div>

              <div className="bg-mint/50 border-2 border-black p-4">
                <p className="font-semibold mb-2">Listing:</p>
                <ul className="space-y-1">
                  <li>• Stunning AI worn photo</li>
                  <li>• Detailed description with story</li>
                  <li>• Price set: <strong>€150</strong></li>
                </ul>
              </div>

              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-display font-bold text-2xl text-vinted">
                  Result: Sold in 48 hours!
                </p>
                <p className="text-sm mt-2">To a buyer who was looking for exactly this style</p>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Conclusion</h2>
          <p className="text-lg mb-6">
            Vintage on Vinted is a goldmine for those who know what they're doing. The keys to success:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              { num: '1', text: 'Properly authenticate your pieces' },
              { num: '2', text: 'Photograph with our AI for perfect worn photos' },
              { num: '3', text: 'Describe with passion and precision' },
              { num: '4', text: 'Price intelligently' },
              { num: '5', text: 'Target the right niches' },
            ].map((key) => (
              <div key={key.num} className="bg-cream border-3 border-black p-4 flex items-start gap-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0 border-2 border-black">
                  {key.num}
                </span>
                <p className="font-semibold pt-1">{key.text}</p>
              </div>
            ))}
          </div>

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
              href="/en/articles/fashion-trends-2025"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Fashion Trends 2025 →</p>
            </a>
            <a
              href="/en/articles/complete-guide-vinted-photos-2025"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Complete Photo Guide 2025 →</p>
            </a>
            <a
              href="/en/articles/vinted-sales-strategy-2025"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Sales Strategy 2025 →</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
