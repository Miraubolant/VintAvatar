import React from 'react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { ShoppingBag, Search, Camera, TrendingUp, Shield, Star, CheckCircle, X, Store, Smartphone } from 'lucide-react';

export default function OnlineThriftStorePage() {
  useSEO({
    title: "Online Thrift Store: Best Platforms 2026 | VintDress",
    description: "Complete guide to online thrift stores in 2026. Compare Vinted, Vestiaire Collective, Depop. Tips for buying and selling secondhand clothes.",
    keywords: "online thrift store, vinted, vestiaire collective, depop, secondhand clothes, sustainable fashion, thrift shopping",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image Section */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 h-[400px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=400&fit=crop"
          alt="Online thrift store - vintage and secondhand clothes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
              Online Thrift Store
            </h1>
            <p className="font-display text-xl md:text-2xl text-white">
              Best Platforms 2026
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
            <span className="text-black">January 13, 2026</span>
            <span className="text-black">•</span>
            <span className="text-black">12 min read</span>
            <span className="text-black">•</span>
            <span className="text-black">By Emma Dubois</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {['Thrift', 'Secondhand', 'Vinted', 'Sustainable Fashion', 'Comparison'].map((tag) => (
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
            Online thrift stores have revolutionized how we buy and sell clothes.
            Gone are the days of spending hours browsing physical secondhand shops!
            Today, millions of unique pieces are accessible with just a few clicks.
          </p>

          <div className="flex items-start gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <ShoppingBag className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="font-display font-bold text-2xl mb-3">The Secondhand Revolution</h2>
              <div className="bg-mint/30 border-2 border-black p-4 mb-4">
                <h3 className="font-semibold mb-2">Key figures 2026:</h3>
                <ul className="space-y-1">
                  <li>• 45 million Vinted users in Europe</li>
                  <li>• Secondhand market: +25% per year</li>
                  <li>• 70% of 18-35 year olds buy secondhand</li>
                  <li>• Average savings: 60% vs new</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-pink-pastel/30 border-3 border-black p-6">
            <h3 className="font-display font-bold text-lg mb-3">Why online thrift stores are booming:</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Sustainable and eco-friendly fashion',
                'Unbeatable prices vs fast-fashion',
                'Unique and vintage pieces',
                '24/7 shopping convenience'
              ].map((point, idx) => (
                <div key={idx} className="flex items-start">
                  <Star className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vinted: The #1 Thrift Store */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Store className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-display font-bold text-3xl">Vinted: The #1 Online Thrift Store</h2>
          </div>

          <div className="bg-vinted/10 border-3 border-black p-6 mb-6">
            <p className="text-lg mb-4">
              With over 45 million users, Vinted has become THE go-to reference
              for secondhand in Europe. Why such success?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-mint/50 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-vinted" />
                Vinted Advantages
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span><strong>0% commission</strong> for sellers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Simplified shipping (integrated labels)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Buyer protection included</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Built-in messaging for negotiation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Intuitive mobile app</span>
                </li>
              </ul>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Popular categories:</h3>
              <ul className="space-y-2">
                {[
                  'Women\'s clothing (60% of sales)',
                  'Kids fashion (+40% growth)',
                  'Men\'s clothing',
                  'Accessories and bags',
                  'Shoes',
                  'Vintage and collector items'
                ].map((cat, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="bg-vinted text-white text-xs font-bold w-5 h-5 flex items-center justify-center mr-2 border border-black">
                      {idx + 1}
                    </span>
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-cream border-3 border-black p-6">
            <h3 className="font-display font-bold text-xl mb-4">Vinted vs Physical Thrift Store</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-2 border-black">
                <thead>
                  <tr className="bg-vinted text-white">
                    <th className="border-2 border-black p-2 text-left">Criteria</th>
                    <th className="border-2 border-black p-2 text-center">Vinted</th>
                    <th className="border-2 border-black p-2 text-center">Physical store</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border-2 border-black p-2 font-semibold">Selection</td>
                    <td className="border-2 border-black p-2 text-center text-green-600 font-bold">Millions of items</td>
                    <td className="border-2 border-black p-2 text-center">Limited stock</td>
                  </tr>
                  <tr className="bg-cream">
                    <td className="border-2 border-black p-2 font-semibold">Prices</td>
                    <td className="border-2 border-black p-2 text-center text-green-600 font-bold">Negotiable</td>
                    <td className="border-2 border-black p-2 text-center">Usually fixed</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border-2 border-black p-2 font-semibold">Availability</td>
                    <td className="border-2 border-black p-2 text-center text-green-600 font-bold">24/7</td>
                    <td className="border-2 border-black p-2 text-center">Store hours</td>
                  </tr>
                  <tr className="bg-cream">
                    <td className="border-2 border-black p-2 font-semibold">Try on</td>
                    <td className="border-2 border-black p-2 text-center">No (but photos)</td>
                    <td className="border-2 border-black p-2 text-center text-green-600 font-bold">Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Platform Comparison */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Search className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Online Thrift Store Comparison</h2>
          </div>

          {/* Vinted */}
          <div className="bg-vinted/10 border-3 border-black p-6 mb-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display font-bold text-2xl">Vinted</h3>
              <span className="bg-vinted text-white px-3 py-1 font-bold border-2 border-black">#1 Recommended</span>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="font-semibold">Type:</p>
                <p>General secondhand</p>
              </div>
              <div>
                <p className="font-semibold">Seller commission:</p>
                <p className="text-green-600 font-bold">0%</p>
              </div>
              <div>
                <p className="font-semibold">Buyer protection:</p>
                <p>5% + €0.70</p>
              </div>
            </div>
            <p className="mt-3 text-sm"><strong>Best for:</strong> Everyone, from beginners to pro sellers</p>
          </div>

          {/* Vestiaire Collective */}
          <div className="bg-pink-pastel/30 border-3 border-black p-6 mb-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display font-bold text-2xl">Vestiaire Collective</h3>
              <span className="bg-black text-white px-3 py-1 font-bold border-2 border-black">Luxury</span>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="font-semibold">Type:</p>
                <p>Luxury and designers</p>
              </div>
              <div>
                <p className="font-semibold">Seller commission:</p>
                <p className="text-orange-600 font-bold">15-25%</p>
              </div>
              <div>
                <p className="font-semibold">Authentication:</p>
                <p>Quality check included</p>
              </div>
            </div>
            <p className="mt-3 text-sm"><strong>Best for:</strong> Selling/buying luxury (Chanel, Hermès, LV...)</p>
          </div>

          {/* Depop */}
          <div className="bg-mint/50 border-3 border-black p-6 mb-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display font-bold text-2xl">Depop</h3>
              <span className="bg-purple-500 text-white px-3 py-1 font-bold border-2 border-black">Trendy</span>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="font-semibold">Type:</p>
                <p>Streetwear, vintage, trendy</p>
              </div>
              <div>
                <p className="font-semibold">Seller commission:</p>
                <p className="text-orange-600 font-bold">10%</p>
              </div>
              <div>
                <p className="font-semibold">Audience:</p>
                <p>Gen Z, creatives</p>
              </div>
            </div>
            <p className="mt-3 text-sm"><strong>Best for:</strong> Unique pieces, streetwear, trendy vintage</p>
          </div>

          {/* eBay */}
          <div className="bg-cream border-3 border-black p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display font-bold text-2xl">eBay</h3>
              <span className="bg-blue-500 text-white px-3 py-1 font-bold border-2 border-black">Global</span>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="font-semibold">Type:</p>
                <p>General marketplace</p>
              </div>
              <div>
                <p className="font-semibold">Seller commission:</p>
                <p className="text-orange-600 font-bold">10-15%</p>
              </div>
              <div>
                <p className="font-semibold">Specialty:</p>
                <p>Auctions, worldwide reach</p>
              </div>
            </div>
            <p className="mt-3 text-sm"><strong>Best for:</strong> Rare items, collectors, international sales</p>
          </div>
        </div>

        {/* How to Sell */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Camera className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">How to Sell on an Online Thrift Store</h2>
          </div>

          <div className="space-y-4 mb-6">
            {[
              { num: '1', title: 'Create a seller account', desc: 'Free registration, complete profile with photo' },
              { num: '2', title: 'Photograph your items', desc: 'Bright photos, multiple angles, details' },
              { num: '3', title: 'Write descriptions', desc: 'Brand, size, condition, measurements, flaws' },
              { num: '4', title: 'Set the right price', desc: 'Competitor analysis, negotiation margin' },
              { num: '5', title: 'Ship quickly', desc: 'Careful packaging, ship within 48h' },
            ].map((step) => (
              <div key={step.num} className="bg-cream border-3 border-black p-4">
                <div className="flex items-start gap-3">
                  <span className="bg-vinted text-white font-display font-bold w-10 h-10 flex items-center justify-center flex-shrink-0 border-2 border-black text-lg">
                    {step.num}
                  </span>
                  <div>
                    <p className="font-semibold text-lg">{step.title}</p>
                    <p className="text-sm text-gray-600">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-vinted border-3 border-black p-6">
            <p className="text-white text-lg mb-4">
              The secret to selling fast? <strong>Professional photos!</strong>
            </p>
            <div className="bg-white border-2 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">The VintDress solution:</h3>
              <p className="mb-3">Our AI transforms your clothing photos into professional model shots:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span><strong>+300% more views</strong> on your listings</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Sell <strong>3x faster</strong></span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Results in <strong>30 seconds</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Trends 2026 */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-display font-bold text-3xl">Online Thrift Store Trends 2026</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-mint/50 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Most searched items:</h3>
              <ul className="space-y-2">
                {[
                  'Vintage Levi\'s 501 jeans',
                  '80s-90s leather jackets',
                  '70s vintage dresses',
                  'Retro sportswear (Nike, Adidas)',
                  'Pre-owned luxury bags',
                  'Oversized wool coats'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <Star className="w-4 h-4 mr-2 text-vinted" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Hot brands:</h3>
              <ul className="space-y-2">
                {[
                  'Levi\'s (especially vintage)',
                  'Nike / Adidas vintage',
                  'The North Face',
                  'Carhartt',
                  'Ralph Lauren',
                  'Patagonia'
                ].map((brand, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-vinted" />
                    {brand}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-cream border-3 border-black p-6">
            <h3 className="font-display font-bold text-xl mb-4">Market evolution:</h3>
            <div className="space-y-3">
              <div className="bg-white border-2 border-black p-3 flex items-center justify-between">
                <span>Women's clothing</span>
                <span className="font-bold text-vinted">60% of market</span>
              </div>
              <div className="bg-white border-2 border-black p-3 flex items-center justify-between">
                <span>Kids fashion</span>
                <span className="font-bold text-green-600">+40% growth</span>
              </div>
              <div className="bg-white border-2 border-black p-3 flex items-center justify-between">
                <span>Pre-owned luxury</span>
                <span className="font-bold text-green-600">+35% growth</span>
              </div>
              <div className="bg-white border-2 border-black p-3 flex items-center justify-between">
                <span>90s vintage</span>
                <span className="font-bold text-green-600">+50% searches</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tips for Buyers */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Shield className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Tips for Safe Buying</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-vinted/10 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-vinted" />
                What to check
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Clear and detailed photos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Complete description with measurements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Positive seller reviews (+4.5 stars)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Honestly mentioned flaws</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Responsive seller</span>
                </li>
              </ul>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3 flex items-center gap-2">
                <X className="w-6 h-6 text-red-500" />
                Red flags
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Prices too good to be true</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Blurry or stock photos</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Recently created account with no sales</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Payment outside platform requested</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Refuses additional photos</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-cream border-3 border-black p-6">
            <h3 className="font-display font-bold text-xl mb-4 flex items-center gap-2">
              <Smartphone className="w-6 h-6 text-vinted" />
              Negotiation tips
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">Be polite and direct</p>
                <p className="text-sm text-gray-600">"Hi, would you accept €X?"</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">Make realistic offers</p>
                <p className="text-sm text-gray-600">-10 to 20% max of listed price</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">Buy multiple items</p>
                <p className="text-sm text-gray-600">Bundles allow more negotiation</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">Be responsive</p>
                <p className="text-sm text-gray-600">Accepted offer = quick purchase</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <div className="bg-cream border-3 border-black p-4">
              <h3 className="font-display font-bold text-lg mb-2">What is the best online thrift store?</h3>
              <p className="text-gray-700">
                Vinted is the best option for most users thanks to its 0% seller commission,
                wide selection, and ease of use. For luxury items, prefer Vestiaire Collective.
              </p>
            </div>

            <div className="bg-cream border-3 border-black p-4">
              <h3 className="font-display font-bold text-lg mb-2">Is it safe to buy from online thrift stores?</h3>
              <p className="text-gray-700">
                Yes, major platforms like Vinted offer buyer protection. Your money is held
                until you confirm receipt. If there's a problem, you get refunded.
              </p>
            </div>

            <div className="bg-cream border-3 border-black p-4">
              <h3 className="font-display font-bold text-lg mb-2">How to sell well on an online thrift store?</h3>
              <p className="text-gray-700">
                The 3 keys to success: quality photos (use VintDress for pro model shots),
                detailed descriptions with measurements, and competitive pricing based on competitors.
              </p>
            </div>

            <div className="bg-cream border-3 border-black p-4">
              <h3 className="font-display font-bold text-lg mb-2">How much can you earn on an online thrift store?</h3>
              <p className="text-gray-700">
                It depends on volume and quality. Active Vinted sellers make an average of
                €200-500/month. Top sellers with quality items can exceed €2000/month.
              </p>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Conclusion</h2>
          <p className="text-lg mb-6">
            Online thrift stores have democratized access to secondhand fashion. Whether you're
            a buyer or seller, these platforms offer incredible opportunities to consume more
            responsibly while finding great deals.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              { title: 'Vinted', desc: 'The general reference' },
              { title: 'Vestiaire Collective', desc: 'Authenticated luxury' },
              { title: 'Depop', desc: 'Streetwear trend' },
            ].map((platform) => (
              <div key={platform.title} className="bg-cream border-3 border-black p-4 text-center">
                <p className="font-display font-bold text-lg">{platform.title}</p>
                <p className="text-sm text-gray-600">{platform.desc}</p>
              </div>
            ))}
          </div>

          <a
            href="/en"
            className="inline-block bg-mint border-4 border-black px-8 py-4 font-display font-bold text-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            Boost my sales with VintDress
          </a>
        </div>

        {/* Related Articles */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-display font-bold text-2xl mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="/en/articles/sell-vintage-vinted-guide"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Sell Vintage on Vinted →</p>
            </a>
            <a
              href="/en/articles/how-to-sell-on-vinted"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Vinted Selling Guide →</p>
            </a>
            <a
              href="/en/articles/complete-vinted-photos-guide-2025"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Vinted Photos Guide →</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
