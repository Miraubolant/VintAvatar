import React from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { Calendar, Clock, User, Tag, Star, Search, CheckCircle, TrendingUp, ShoppingBag, Award, AlertTriangle, Sparkles } from 'lucide-react';

export default function VintageLevisJeansPage() {
  useSEO({
    title: "Vintage Levi's Jeans: Buying Guide & Authentication 2026 | VintDress",
    description: "Complete guide to vintage Levi's jeans: how to authenticate a 501, identify rare models, where to buy and price guide. Expert tips for collectors.",
    keywords: "vintage levis jeans, levi's 501 vintage, authenticate levis, vintage denim, levis collector, thrift store levis",
    canonicalUrl: "https://vintdress.com/en/articles/vintage-levis-jeans",
    ogType: "article"
  });

  return (
    <div className="min-h-screen bg-grain">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link to="/" className="text-gray-600 hover:text-vinted transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link to="/blog" className="text-gray-600 hover:text-vinted transition-colors">
                Blog
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-vinted font-medium">Vintage Levi's Jeans</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-vinted text-white text-sm font-medium border-2 border-black">
              Expert Guide
            </span>
            <span className="px-3 py-1 bg-mint text-black text-sm font-medium border-2 border-black">
              Vintage
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
            Vintage Levi's Jeans: The Complete Guide to Authentication and Buying in 2026
          </h1>

          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            Learn how to identify authentic vintage Levi's jeans, spot the most sought-after models,
            and find the best pieces on Vinted and online thrift stores.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <time dateTime="2026-01-13">January 13, 2026</time>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>14 min read</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>VintDress</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <img
            src="https://images.unsplash.com/photo-1542272604-787c3835535d?w=1200&h=600&fit=crop"
            alt="Authentic vintage Levi's jeans - Buying guide and collection"
            className="w-full h-64 sm:h-80 lg:h-96 object-cover"
          />
        </div>

        {/* Table of Contents */}
        <div className="bg-white border-4 border-black p-6 mb-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
            <Tag className="w-5 h-5 text-vinted" />
            Table of Contents
          </h2>
          <nav>
            <ol className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2 hover:text-vinted transition-colors">
                <span className="font-bold text-vinted">1.</span>
                <a href="#history">The Legendary History of Levi's</a>
              </li>
              <li className="flex items-center gap-2 hover:text-vinted transition-colors">
                <span className="font-bold text-vinted">2.</span>
                <a href="#authentication">How to Authenticate Vintage Levi's</a>
              </li>
              <li className="flex items-center gap-2 hover:text-vinted transition-colors">
                <span className="font-bold text-vinted">3.</span>
                <a href="#models">Iconic Models and Their Value</a>
              </li>
              <li className="flex items-center gap-2 hover:text-vinted transition-colors">
                <span className="font-bold text-vinted">4.</span>
                <a href="#buy">Where to Buy Vintage Levi's</a>
              </li>
              <li className="flex items-center gap-2 hover:text-vinted transition-colors">
                <span className="font-bold text-vinted">5.</span>
                <a href="#prices">2026 Price Guide</a>
              </li>
              <li className="flex items-center gap-2 hover:text-vinted transition-colors">
                <span className="font-bold text-vinted">6.</span>
                <a href="#sell">Tips for Selling Vintage Levi's</a>
              </li>
              <li className="flex items-center gap-2 hover:text-vinted transition-colors">
                <span className="font-bold text-vinted">7.</span>
                <a href="#faq">FAQ</a>
              </li>
            </ol>
          </nav>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">

          {/* Introduction */}
          <div className="bg-mint/30 border-4 border-black p-6 mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-lg leading-relaxed m-0">
              <strong>Vintage Levi's jeans</strong> have become true collector's items. A 501 from the 1950s
              can sell for thousands of dollars, while models from the 80s-90s remain accessible
              and highly sought after by vintage fashion enthusiasts. This guide teaches you how to recognize
              authentic pieces and make the best deals.
            </p>
          </div>

          {/* Section 1 */}
          <section id="history" className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-black mb-6 flex items-center gap-3">
              <Award className="w-8 h-8 text-vinted" />
              The Legendary History of Levi's
            </h2>

            <p>
              Founded in 1853 by Levi Strauss, the brand revolutionized the clothing world with the invention
              of blue jeans in 1873. The <strong>rivet patent</strong> filed with Jacob Davis gave birth
              to the modern jean. This rich history makes vintage Levi's an American cultural heritage.
            </p>

            <div className="bg-white border-4 border-black p-6 my-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display text-xl font-bold mb-4">The Great Levi's Eras</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-20 font-bold text-vinted shrink-0">1873-1936</div>
                  <p className="m-0">"XX" Era - First riveted jeans, very rare and valuable ($10,000+)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-20 font-bold text-vinted shrink-0">1936-1971</div>
                  <p className="m-0">"Big E" Era - Capital E on red tab, highly sought after ($500-5,000)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-20 font-bold text-vinted shrink-0">1971-1983</div>
                  <p className="m-0">"small e" Transition - Still Made in USA, great quality ($150-500)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-20 font-bold text-vinted shrink-0">1983-1999</div>
                  <p className="m-0">Modern Vintage Era - Varied production, accessible ($50-200)</p>
                </div>
              </div>
            </div>

            <p>
              Denim quality has evolved over the decades. Purists particularly seek out
              <strong>selvedge denim</strong> (woven edge) from older productions, recognizable
              by its white or red finish on the inside seam.
            </p>
          </section>

          {/* Section 2 */}
          <section id="authentication" className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-black mb-6 flex items-center gap-3">
              <Search className="w-8 h-8 text-vinted" />
              How to Authenticate Vintage Levi's
            </h2>

            <p>
              Authenticating vintage Levi's jeans relies on several criteria. Here are the essential
              points to check to avoid counterfeits and identify the era of manufacture.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display text-lg font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  The Red Tab
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>"Big E" LEVI'S</strong>: before 1971</li>
                  <li><strong>"small e" Levi's</strong>: after 1971</li>
                  <li><strong>White tab</strong>: 80s-90s</li>
                  <li><strong>Check</strong> stitching and alignment</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display text-lg font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  The Leather Patch
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>Real leather</strong>: authentic vintage</li>
                  <li><strong>Cardboard</strong>: from the 90s onwards</li>
                  <li><strong>"Two Horse"</strong>: iconic logo</li>
                  <li><strong>Natural wear</strong>: sign of authenticity</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display text-lg font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Rivets and Buttons
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>Hidden rivets</strong>: after 1966</li>
                  <li><strong>"LS&CO SF"</strong>: authentic engraving</li>
                  <li><strong>Copper patina</strong>: natural wear</li>
                  <li><strong>Top button</strong>: factory numbering</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display text-lg font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  The Interior Label
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>"CARE" tag</strong>: indicates the year</li>
                  <li><strong>Made in USA</strong>: highly valued</li>
                  <li><strong>Lot number</strong>: identifies the model</li>
                  <li><strong>Size and fit</strong>: vintage coding</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-100 border-4 border-black p-6 my-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display text-lg font-bold mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                Beware of Counterfeits
              </h3>
              <ul className="space-y-2">
                <li>Fake vintage items are common - beware of prices that are too low</li>
                <li>Check consistency between all elements (tab, patch, rivets)</li>
                <li>Vintage denim has a particular texture and smell</li>
                <li>Ask for detailed photos of the care tag label</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section id="models" className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-black mb-6 flex items-center gap-3">
              <Star className="w-8 h-8 text-vinted" />
              Iconic Models and Their Value
            </h2>

            <p>
              Each Levi's model has its history and value. Here are the most sought-after by collectors
              and vintage enthusiasts.
            </p>

            <div className="space-y-6 my-8">
              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display text-xl font-bold">Levi's 501</h3>
                  <span className="px-3 py-1 bg-vinted text-white text-sm font-bold border-2 border-black">
                    Most Iconic
                  </span>
                </div>
                <p className="text-gray-700 mb-3">
                  The original jean since 1890. Straight cut, button fly, high waist.
                  The "Big E" and "selvedge" 501s are the most valued.
                </p>
                <div className="flex gap-4 text-sm">
                  <span className="font-bold">Vintage 80s-90s value:</span>
                  <span className="text-vinted font-bold">$80 - $250</span>
                </div>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display text-xl font-bold">Levi's 505</h3>
                  <span className="px-3 py-1 bg-mint text-black text-sm font-bold border-2 border-black">
                    Highly Sought
                  </span>
                </div>
                <p className="text-gray-700 mb-3">
                  Created in 1967 with a zip fly. Regular fit slightly more fitted
                  than the 501. Popular in the 70s-80s.
                </p>
                <div className="flex gap-4 text-sm">
                  <span className="font-bold">Vintage value:</span>
                  <span className="text-vinted font-bold">$60 - $180</span>
                </div>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display text-xl font-bold">Levi's 517</h3>
                  <span className="px-3 py-1 bg-pink-pastel text-black text-sm font-bold border-2 border-black">
                    Cult Bootcut
                  </span>
                </div>
                <p className="text-gray-700 mb-3">
                  The iconic bootcut from the 70s. Back in style with the return of retro fashion.
                  "Orange Tab" versions are particularly sought after.
                </p>
                <div className="flex gap-4 text-sm">
                  <span className="font-bold">Vintage value:</span>
                  <span className="text-vinted font-bold">$70 - $200</span>
                </div>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display text-xl font-bold">Levi's 550 / 560</h3>
                  <span className="px-3 py-1 bg-gray-200 text-black text-sm font-bold border-2 border-black">
                    90s Nostalgia
                  </span>
                </div>
                <p className="text-gray-700 mb-3">
                  The relaxed and loose cuts from the 90s, very trendy today.
                  Perfect for the vintage baggy style.
                </p>
                <div className="flex gap-4 text-sm">
                  <span className="font-bold">Vintage value:</span>
                  <span className="text-vinted font-bold">$40 - $120</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="buy" className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-black mb-6 flex items-center gap-3">
              <ShoppingBag className="w-8 h-8 text-vinted" />
              Where to Buy Vintage Levi's
            </h2>

            <p>
              Several channels allow you to find authentic vintage Levi's. Here are the best
              options based on your budget and expectations.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-4 border-black">
                <thead className="bg-vinted text-white">
                  <tr>
                    <th className="p-3 text-left font-display border-b-4 border-black">Platform</th>
                    <th className="p-3 text-left font-display border-b-4 border-black">Advantages</th>
                    <th className="p-3 text-left font-display border-b-4 border-black">Average Prices</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b-2 border-black">
                    <td className="p-3 font-bold">Vinted</td>
                    <td className="p-3">Wide selection, negotiable prices, buyer protection</td>
                    <td className="p-3 text-vinted font-bold">$30 - $150</td>
                  </tr>
                  <tr className="border-b-2 border-black bg-gray-50">
                    <td className="p-3 font-bold">eBay Vintage</td>
                    <td className="p-3">Rare pieces, expert sellers, auctions</td>
                    <td className="p-3 text-vinted font-bold">$50 - $500+</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-3 font-bold">Specialized thrift stores</td>
                    <td className="p-3">Curated selection, guaranteed authenticity</td>
                    <td className="p-3 text-vinted font-bold">$80 - $300</td>
                  </tr>
                  <tr className="border-b-2 border-black bg-gray-50">
                    <td className="p-3 font-bold">Flea markets</td>
                    <td className="p-3">Possible bargains, negotiation</td>
                    <td className="p-3 text-vinted font-bold">$20 - $100</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">ThredUp / Depop</td>
                    <td className="p-3">Wide range, various conditions</td>
                    <td className="p-3 text-vinted font-bold">$40 - $200</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-vinted/10 border-4 border-black p-6 my-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display text-lg font-bold mb-3">Tips for Vinted</h3>
              <ul className="space-y-2">
                <li><strong>Saved searches</strong>: create alerts for "501 vintage", "Levi's Big E"</li>
                <li><strong>Filter by size</strong>: note that vintage sizes run smaller</li>
                <li><strong>Ask for measurements</strong>: waist, inseam, rise</li>
                <li><strong>Detailed photos</strong>: request tab, patch, label, care tag, rivets</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section id="prices" className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-black mb-6 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-vinted" />
              2026 Price Guide
            </h2>

            <p>
              Vintage Levi's prices vary based on era, condition, and rarity. Here's a reference
              guide for 2026.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display text-lg font-bold mb-4 text-center bg-green-100 -mx-5 -mt-5 p-3 border-b-4 border-black">
                  Entry Level ($40-100)
                </h3>
                <ul className="space-y-2">
                  <li>501/505 90s good condition</li>
                  <li>550/560 complete vintage</li>
                  <li>Made in Mexico/Asia models</li>
                  <li>Visible wear but wearable</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display text-lg font-bold mb-4 text-center bg-blue-100 -mx-5 -mt-5 p-3 border-b-4 border-black">
                  Mid Range ($100-250)
                </h3>
                <ul className="space-y-2">
                  <li>501 Made in USA 80s</li>
                  <li>Orange Tab vintage excellent condition</li>
                  <li>Selvedge early 80s</li>
                  <li>Sought-after original wash</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display text-lg font-bold mb-4 text-center bg-yellow-100 -mx-5 -mt-5 p-3 border-b-4 border-black">
                  High End ($250-800)
                </h3>
                <ul className="space-y-2">
                  <li>Big E 60s-70s</li>
                  <li>Selvedge perfect condition</li>
                  <li>Rare models (Type III, etc.)</li>
                  <li>Dead stock (never worn)</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display text-lg font-bold mb-4 text-center bg-red-100 -mx-5 -mt-5 p-3 border-b-4 border-black">
                  Collector ($800+)
                </h3>
                <ul className="space-y-2">
                  <li>501 XX pre-1950s</li>
                  <li>Pieces with documented history</li>
                  <li>Vintage limited editions</li>
                  <li>Museum condition / Old dead stock</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="sell" className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-black mb-6 flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-vinted" />
              Tips for Selling Vintage Levi's
            </h2>

            <p>
              Do you own vintage Levi's and want to sell them at the best price?
              Here are our expert tips.
            </p>

            <div className="bg-white border-4 border-black p-6 my-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display text-xl font-bold mb-4">Pro Seller Checklist</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Precisely identify</strong> the model, year, and origin</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Measure everything</strong>: waist, hips, inseam, total length</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Photograph details</strong>: tab, patch, rivets, labels, seams</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Describe condition</strong> honestly: wear, tears, repairs</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Use the right keywords</strong>: "501 vintage USA", "Big E selvedge"</span>
                </div>
              </div>
            </div>

            <div className="bg-mint/30 border-4 border-black p-6 my-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display text-lg font-bold mb-3">Boost Your Sales with VintDress</h3>
              <p className="mb-4">
                Professional photos make all the difference when selling vintage jeans.
                With <Link to="/" className="text-vinted font-bold hover:underline">VintDress</Link>,
                create realistic worn visuals in just a few clicks using AI.
              </p>
              <Link
                to="/"
                className="inline-block bg-vinted text-white px-6 py-3 font-display font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                Try VintDress for Free
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-black mb-6">
              Frequently Asked Questions About Vintage Levi's
            </h2>

            <div className="space-y-4">
              <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold p-4 bg-gray-100 border-b-4 border-black">
                  How do I know if my Levi's are vintage?
                </h3>
                <p className="p-4">
                  Check the red tab (Big E = before 1971), the leather patch (not cardboard),
                  interior "Made in USA" labels, and the presence of selvedge on the inner seam.
                  A care tag with a code can precisely date the jeans.
                </p>
              </div>

              <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold p-4 bg-gray-100 border-b-4 border-black">
                  What's the difference between 501 and 505?
                </h3>
                <p className="p-4">
                  The 501 has a button fly and classic straight cut since 1890.
                  The 505 (created in 1967) has a zip fly and a slightly more fitted cut
                  at the thighs. Both are highly sought after in vintage.
                </p>
              </div>

              <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold p-4 bg-gray-100 border-b-4 border-black">
                  Do vintage Levi's fit the same as today?
                </h3>
                <p className="p-4">
                  No, vintage sizes generally run smaller. A vintage 32 often corresponds
                  to a current 30-31. Always ask for actual measurements in inches or centimeters
                  before buying: waist, hips, and inseam.
                </p>
              </div>

              <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold p-4 bg-gray-100 border-b-4 border-black">
                  How do I wash vintage Levi's jeans?
                </h3>
                <p className="p-4">
                  Wash rarely and inside out, cold or 86°F max. Avoid the dryer which
                  can shrink and damage the denim. Some purists never wash their vintage
                  and simply air them out. For odors, the freezer is an option.
                </p>
              </div>

              <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold p-4 bg-gray-100 border-b-4 border-black">
                  Are vintage Levi's a good investment?
                </h3>
                <p className="p-4">
                  Rare pieces (Big E, selvedge, Made in USA) gain value over time.
                  A Big E 501 bought for $200 10 years ago can be worth $500+ today.
                  Focus on models in excellent condition with all original labels.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <div className="bg-black text-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(9,177,186,1)]">
              <h2 className="font-display text-2xl font-bold mb-4">
                Conclusion: The Art of Vintage Levi's Jeans
              </h2>
              <p className="text-gray-300 mb-4">
                Vintage Levi's jeans are much more than just clothing: they are a piece of American
                fashion history. Whether you're a passionate collector or a sustainable fashion enthusiast,
                learning to recognize and appreciate these pieces opens up a fascinating world.
              </p>
              <p className="text-gray-300">
                On Vinted and online thrift stores, opportunities abound for those who know what to look for.
                Armed with this guide, you're now ready to find your next vintage treasure!
              </p>
            </div>
          </section>

        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['Vintage Levi\'s', '501', 'Authentication', 'Vinted', 'Vintage Fashion', 'Denim', 'Collection'].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm border-2 border-black hover:bg-vinted hover:text-white transition-colors cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Article Navigation */}
        <ArticleNavigation currentArticleId="jean-levis-vintage" />
      </article>
    </div>
  );
}
