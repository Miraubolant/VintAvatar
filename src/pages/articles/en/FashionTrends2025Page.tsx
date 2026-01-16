import React from 'react';
import { useSEO } from '../../../hooks/useSEO';
import { Sparkles, TrendingUp, Heart, Leaf, Users, Zap, Calendar, DollarSign, AlertTriangle, CheckCircle, Target } from 'lucide-react';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export default function FashionTrends2025Page() {
  useSEO({
    title: "Fashion Trends 2025: What to Sell on Vinted | Complete Guide",
    description: "Fashion trends 2025: Y2K 3.0, Indie Sleaze, Cottagecore. Discover what to sell on Vinted to explode your sales!",
    keywords: "fashion trends 2025, vinted fashion 2025, y2k 2025, cottagecore, sell fashion vinted, vinted trends",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image Section */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 h-[400px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=400&fit=crop"
          alt="Fashion Trends 2025"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
              Fashion Trends 2025
            </h1>
            <p className="font-display text-xl md:text-2xl text-white">
              What to Sell on Vinted
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
              Trend
            </span>
            <span className="text-black">November 10, 2025</span>
            <span className="text-black">•</span>
            <span className="text-black">18 min read</span>
            <span className="text-black">•</span>
            <span className="text-black">By VintDress Team</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {['Trends', 'Fashion', '2025', 'Y2K', 'Cottagecore', 'Vinted'].map((tag) => (
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
            2025 is shaping up to be revolutionary for fashion! Between nostalgia, sustainability, and innovation,
            discover the trends that will explode your Vinted sales.
          </p>

          <div className="bg-vinted border-3 border-black p-6 mb-6">
            <h2 className="font-display font-bold text-2xl text-white mb-4">The Year of All Contrasts</h2>
            <p className="text-white mb-4">
              This year mixes everything: vintage meets futuristic, minimalism encounters excess,
              and sustainability combines with technological innovation.
            </p>
          </div>

          <div className="bg-mint/50 border-3 border-black p-6">
            <h3 className="font-display font-bold text-xl mb-3">Why it's a GOLDMINE for Vinted:</h3>
            <ul className="space-y-2">
              {[
                'Diversity = more opportunities',
                'Accelerated fashion cycles',
                'Strong demand for secondhand',
                'More conscious consumption'
              ].map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <Sparkles className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trend #1: Y2K 3.0 */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Sparkles className="w-8 h-8" />
            </div>
            <div>
              <span className="bg-black text-white px-3 py-1 font-display font-bold text-sm">TREND #1</span>
              <h2 className="font-display font-bold text-3xl mt-2">Y2K 3.0 - The Bold Return</h2>
            </div>
          </div>

          <div className="bg-pink-pastel/30 border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-3">No more shy Y2K: 2025 pushes the concept to the extreme!</h3>

            <h4 className="font-semibold mb-3">What's hot:</h4>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">Metallics everywhere</p>
                <p className="text-sm">Silver, chrome, holographic</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">Total transparency</p>
                <p className="text-sm">PVC, organza, plexi</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">Integrated tech-wear</p>
                <p className="text-sm">Cargo pockets, LED details</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">XXL logos</p>
                <p className="text-sm">Bigger is better</p>
              </div>
            </div>

            <h4 className="font-semibold mb-3">Items to hunt for:</h4>
            <ul className="space-y-1 ml-4">
              <li>• Vinyl or PVC skirts</li>
              <li>• Metallic mesh tops</li>
              <li>• Chrome accessories</li>
              <li>• Futuristic tinted sunglasses</li>
            </ul>
          </div>

          <div className="bg-cream border-3 border-black p-6">
            <h4 className="font-semibold mb-2">Where to Source?</h4>
            <p className="text-sm">2000s brands (Diesel, Miss Sixty), Fast fashion 2019-2020, Independent designers, Specialized flea markets</p>
          </div>
        </div>

        {/* Trend #2: Indie Sleaze */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="bg-black text-white px-3 py-1 font-display font-bold text-sm">TREND #2</span>
              <h2 className="font-display font-bold text-3xl mt-2">Indie Sleaze Renaissance</h2>
            </div>
          </div>

          <div className="bg-vinted/10 border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-3">The Style of Carelessness</h3>
            <p className="mb-4"><strong>The anti-Instagram:</strong> No more perfection, embrace controlled chaos!</p>

            <h4 className="font-semibold mb-3">Dress codes:</h4>
            <ul className="space-y-2 ml-4">
              <li>• <strong>Chaotic layering:</strong> Unapologetic layering</li>
              <li>• <strong>Texture clash:</strong> Sequins + denim + leather</li>
              <li>• <strong>Clashing prints:</strong> Leopard + stripes + flowers</li>
              <li>• <strong>Excessive accessories:</strong> Layered jewelry</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-cream border-3 border-black p-6">
              <h4 className="font-semibold mb-3">Golden items:</h4>
              <ul className="space-y-1">
                <li>• Vintage oversize blazers</li>
                <li>• Colorful leather mini-skirts</li>
                <li>• Fancy tights</li>
                <li>• Headbands and hair clips</li>
              </ul>
            </div>
            <div className="bg-cream border-3 border-black p-6">
              <h4 className="font-semibold mb-3">Trending prices:</h4>
              <ul className="space-y-1">
                <li>• Vintage blazer: <strong>€25-45</strong></li>
                <li>• Statement mini-skirt: <strong>€15-35</strong></li>
                <li>• Hair accessories: <strong>€5-15</strong></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Trend #3: Cottagecore */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Heart className="w-8 h-8" />
            </div>
            <div>
              <span className="bg-black text-white px-3 py-1 font-display font-bold text-sm">TREND #3</span>
              <h2 className="font-display font-bold text-3xl mt-2">Cottagecore Elevated</h2>
            </div>
          </div>

          <div className="bg-mint/30 border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-3">Sophisticated Romanticism</h3>
            <p className="mb-4"><strong>More than a trend:</strong> A true lifestyle!</p>

            <h4 className="font-semibold mb-3">2025 evolution:</h4>
            <div className="grid md:grid-cols-2 gap-2">
              <span>• Premium materials</span>
              <span>• More structured cuts</span>
              <span>• Artisanal details</span>
              <span>• Complex colors</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-cream border-3 border-black p-6">
              <h4 className="font-semibold mb-3">Must-have to sell:</h4>
              <ul className="space-y-1">
                <li>• Embroidered linen midi dresses</li>
                <li>• Merino wool cardigans</li>
                <li>• Smocked long skirts</li>
                <li>• Premium Peter Pan collar blouses</li>
              </ul>
            </div>
            <div className="bg-cream border-3 border-black p-6">
              <h4 className="font-semibold mb-3">Trending brands:</h4>
              <p><strong>High-end:</strong> Sézane, Maje</p>
              <p className="mt-2"><strong>Accessible:</strong> Zara, & Other Stories</p>
            </div>
          </div>
        </div>

        {/* Trend #4: Sustainable Luxury */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Leaf className="w-8 h-8" />
            </div>
            <div>
              <span className="bg-black text-white px-3 py-1 font-display font-bold text-sm">TREND #4</span>
              <h2 className="font-display font-bold text-3xl mt-2">Sustainable Luxury</h2>
            </div>
          </div>

          <div className="bg-pink-pastel/30 border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-3">Responsible Luxury</h3>
            <p className="mb-4"><strong>The new nobility:</strong> Quality + sustainability + style!</p>

            <h4 className="font-semibold mb-3">2025 criteria:</h4>
            <div className="grid md:grid-cols-2 gap-2">
              <span>• Certified eco-friendly materials</span>
              <span>• Proven ethical production</span>
              <span>• Timeless design</span>
              <span>• Made in Europe priority</span>
            </div>
          </div>

          <div className="bg-cream border-3 border-black p-6">
            <h4 className="font-semibold mb-3">Profitable examples:</h4>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span>Vintage Burberry wool coat</span>
                <span className="font-bold text-vinted">€200-400</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Artisanal leather bag</span>
                <span className="font-bold text-vinted">€80-150</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Eco-designed sneakers</span>
                <span className="font-bold text-vinted">€60-120</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Trend #5: Gender-Fluid */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="bg-black text-white px-3 py-1 font-display font-bold text-sm">TREND #5</span>
              <h2 className="font-display font-bold text-3xl mt-2">Gender-Fluid Fashion</h2>
            </div>
          </div>

          <div className="bg-vinted/10 border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-3">Fashion Without Borders</h3>
            <p className="mb-4"><strong>Silent revolution:</strong> Genders fade in the wardrobe!</p>

            <h4 className="font-semibold mb-3">Universal pieces that sell:</h4>
            <div className="grid md:grid-cols-2 gap-2">
              <span>• Neutral oversize shirts</span>
              <span>• Unisex sneakers</span>
              <span>• Minimalist jewelry</span>
              <span>• Gender-neutral fragrances</span>
            </div>
          </div>

          <div className="bg-mint/50 border-3 border-black p-6">
            <h4 className="font-semibold mb-3">Vinted strategy:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                <span>Tag your items "unisex"</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                <span>Photos on diverse models</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                <span>Inclusive descriptions</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Trend #6: Tech-Wear */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Zap className="w-8 h-8" />
            </div>
            <div>
              <span className="bg-black text-white px-3 py-1 font-display font-bold text-sm">TREND #6</span>
              <h2 className="font-display font-bold text-3xl mt-2">Urban Tech-Wear</h2>
            </div>
          </div>

          <div className="bg-mint/30 border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-3">Fashion of the Future</h3>
            <p className="mb-4"><strong>Performance meets style:</strong> Smart and functional clothing!</p>

            <h4 className="font-semibold mb-3">Characteristics:</h4>
            <div className="grid md:grid-cols-2 gap-2">
              <span>• Technical fabrics (Gore-Tex, Coolmax)</span>
              <span>• Multifunctionality</span>
              <span>• Cyberpunk aesthetic</span>
              <span>• Technology integration</span>
            </div>
          </div>

          <div className="bg-cream border-3 border-black p-6">
            <h4 className="font-semibold mb-3">Sought-after items:</h4>
            <ul className="space-y-1">
              <li>• Modular pocket jackets</li>
              <li>• Technical cargo pants</li>
              <li>• Connected sneakers</li>
              <li>• Tactical accessories</li>
            </ul>
          </div>
        </div>

        {/* Trends Calendar */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Calendar className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">2025 Trends Calendar</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-vinted/10 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-2">Q1 - January to March</h3>
              <p className="text-sm italic mb-3">"New Year, New Me" Energy</p>
              <ul className="space-y-1 text-sm">
                <li>• Premium basics</li>
                <li>• Wardrobe detox</li>
                <li>• Sport-luxe</li>
                <li>• Sophisticated neutral colors</li>
              </ul>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-2">Q2 - April to June</h3>
              <p className="text-sm italic mb-3">Spring Renaissance</p>
              <ul className="space-y-1 text-sm">
                <li>• Y2K 3.0 explosion</li>
                <li>• Cottagecore elevated</li>
                <li>• Complex pastels</li>
                <li>• Refined transparencies</li>
              </ul>
            </div>

            <div className="bg-mint/50 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-2">Q3 - July to September</h3>
              <p className="text-sm italic mb-3">Festival & Vacation Mode</p>
              <ul className="space-y-1 text-sm">
                <li>• Indie sleaze festival</li>
                <li>• Sustainable beachwear</li>
                <li>• Gender-fluid summer</li>
                <li>• Metallic vacation</li>
              </ul>
            </div>

            <div className="bg-cream border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-2">Q4 - October to December</h3>
              <p className="text-sm italic mb-3">Winter Sophistication</p>
              <ul className="space-y-1 text-sm">
                <li>• Tech-wear protection</li>
                <li>• Responsible luxury</li>
                <li>• Layering masterclass</li>
                <li>• Holiday glamour</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pricing Strategy */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-display font-bold text-3xl">Pricing Strategy 2025</h2>
          </div>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-3 border-black">
              <thead>
                <tr className="bg-black text-white border-b-3 border-black">
                  <th className="border-r-2 border-white p-3 text-left font-display font-bold">Trend</th>
                  <th className="border-r-2 border-white p-3 text-center font-display font-bold">Entry Price</th>
                  <th className="border-r-2 border-white p-3 text-center font-display font-bold">Mid-Range</th>
                  <th className="p-3 text-center font-display font-bold">Premium</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { trend: 'Y2K 3.0', entry: '€20-35', mid: '€35-65', premium: '€65-120' },
                  { trend: 'Indie Sleaze', entry: '€15-30', mid: '€30-50', premium: '€50-90' },
                  { trend: 'Cottagecore', entry: '€25-40', mid: '€40-75', premium: '€75-150' },
                  { trend: 'Sustainable Lux', entry: '€50-100', mid: '€100-200', premium: '€200-400' },
                ].map((row, idx) => (
                  <tr key={idx} className={`border-b-2 border-black ${idx % 2 === 0 ? 'bg-cream' : ''}`}>
                    <td className="border-r-2 border-black p-3 font-semibold">{row.trend}</td>
                    <td className="border-r-2 border-black p-3 text-center">{row.entry}</td>
                    <td className="border-r-2 border-black p-3 text-center">{row.mid}</td>
                    <td className="p-3 text-center font-bold text-vinted">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-mint/50 border-3 border-black p-6">
            <h3 className="font-display font-bold text-lg mb-3">Multiplier Factors:</h3>
            <div className="grid md:grid-cols-2 gap-2">
              <span>• <strong>Proven authenticity:</strong> +30%</span>
              <span>• <strong>Perfect condition:</strong> +25%</span>
              <span>• <strong>Limited edition:</strong> +50%</span>
              <span>• <strong>Influencer worn:</strong> +100%</span>
            </div>
          </div>
        </div>

        {/* Marketing Trends */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Trends Marketing</h2>
          </div>

          <div className="space-y-4 mb-6">
            <div className="bg-pink-pastel/30 border-3 border-black p-4">
              <h4 className="font-semibold mb-2">Y2K 3.0:</h4>
              <p className="font-display text-lg">"FUTURISTIC! Metallic Y2K 2025 Edition Top"</p>
            </div>

            <div className="bg-vinted/10 border-3 border-black p-4">
              <h4 className="font-semibold mb-2">Indie Sleaze:</h4>
              <p className="font-display text-lg">"CHAOS CHIC! Vintage Party Ready Blazer"</p>
            </div>

            <div className="bg-mint/50 border-3 border-black p-4">
              <h4 className="font-semibold mb-2">Cottagecore:</h4>
              <p className="font-display text-lg">"ROMANTIC! Hand Embroidered Linen French Style Dress"</p>
            </div>
          </div>

          <div className="bg-cream border-3 border-black p-6">
            <h3 className="font-display font-bold text-lg mb-3">Powerful 2025 Hashtags:</h3>
            <div className="flex flex-wrap gap-2">
              {['#Y2K2025', '#MetallicMagic', '#TechFashion', '#IndieSleaze', '#ChaosChic', '#PartyReady', '#Cottagecore2025', '#RomanticStyle', '#HandCrafted', '#SustainableLux', '#EthicalFashion', '#GreenStyle'].map((tag) => (
                <span key={tag} className="bg-mint border-2 border-black px-2 py-1 text-sm font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Mistakes to Avoid */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Mistakes to Absolutely Avoid</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                <h3 className="font-display font-bold text-xl">Red Flags</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">❌</span>
                  <span><strong>Following blindly:</strong> Adapt to your local market</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">❌</span>
                  <span><strong>Excessive stock:</strong> Test first with a few items</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">❌</span>
                  <span><strong>Ignoring seasonality:</strong> Timing = everything</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">❌</span>
                  <span><strong>Fantasy prices:</strong> Stay consistent with the market</span>
                </li>
              </ul>
            </div>

            <div className="bg-mint/50 border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h3 className="font-display font-bold text-xl">Green Flags</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Test & Learn:</strong> Experiment small, scale big</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Quality over Quantity:</strong> Better 10 perfect items</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Story telling:</strong> Tell each trend's story</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Community building:</strong> Create your fashion tribe</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action Plan */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Your 2025 Trends Action Plan</h2>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { week: 'Week 1', action: 'Analyze your current stock vs trends' },
              { week: 'Week 2', action: 'Targeted sourcing on max 2 trends' },
              { week: 'Week 3', action: 'Pricing and presentation tests' },
              { week: 'Week 4', action: 'Scale successes, pivot failures' },
            ].map((step, idx) => (
              <div key={idx} className="bg-cream border-3 border-black p-4">
                <div className="bg-vinted text-white font-display font-bold px-3 py-1 mb-3 text-center border-2 border-black">
                  {step.week}
                </div>
                <p className="text-sm text-center">{step.action}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Predictions */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl text-white mb-6">Exclusive Predictions</h2>
          <p className="text-white text-lg mb-4">What Will Explode in Late 2025:</p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Vintage 2010s nostalgia', desc: 'Get ready now!' },
              { title: 'AI-designed fashion', desc: 'Human-machine collaboration' },
              { title: 'Climate-adaptive clothing', desc: 'Clothes that adapt' },
              { title: 'Virtual fashion crossover', desc: 'From digital to physical' },
            ].map((pred, idx) => (
              <div key={idx} className="bg-white border-3 border-black p-4">
                <p className="font-semibold">{pred.title}</p>
                <p className="text-sm text-gray-600">{pred.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion + CTA */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-4">Conclusion: Ride the Wave</h2>
          <p className="text-lg mb-4">
            The 2025 trends are a golden opportunity! But beware: the secret isn't to follow everything,
            but to choose what resonates with your audience and your expertise.
          </p>
          <div className="bg-vinted border-3 border-black p-6 mb-6">
            <p className="font-display font-bold text-2xl text-white text-center">
              Passion + Timing + Quality = Vinted success story!
            </p>
          </div>
          <a
            href="/en"
            className="inline-block bg-mint border-4 border-black px-8 py-4 font-display font-bold text-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            Optimize Your Photos With VintDress
          </a>
        </div>

        {/* Related Articles */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-display font-bold text-2xl mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="/en/articles/vinted-selling-strategy-2025"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">2025 Selling Strategy →</p>
            </a>
            <a
              href="/en/articles/5-tips-sell-faster-vinted"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">5 Tips to Sell Faster →</p>
            </a>
            <a
              href="/en/articles/complete-vinted-photos-guide-2025"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">2025 Photos Guide →</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
