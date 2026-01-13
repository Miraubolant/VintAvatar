import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Tag, ArrowLeft, Sparkles, Star, TrendingUp, Heart, Shield, Crown, Palette } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import ArticleNavigation from '../../../components/ArticleNavigation';

export default function VintageLeatherJacketPage() {
  useSEO({
    title: "Vintage Leather Jacket: Complete Buying & Authentication Guide",
    description: "Discover the most sought-after vintage leather jackets: perfecto, bomber, biker. Complete guide to choosing, authenticating, and caring for a vintage leather jacket.",
    keywords: "vintage leather jacket, vintage perfecto, vintage biker jacket, schott vintage, leather bomber jacket",
    canonicalUrl: "https://vintdress.com/en/articles/vintage-leather-jacket",
    ogImage: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1200&h=630&fit=crop"
  });

  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-pastel/30 via-cream to-mint/30"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-vinted/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-pastel/40 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/en/articles"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-vinted transition-colors mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to articles
          </Link>

          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-2 bg-vinted text-white text-sm font-bold rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                Vintage Fashion
              </span>
              <span className="px-4 py-2 bg-pink-pastel text-black text-sm font-bold rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                Leather
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Vintage Leather Jacket: Complete Buying &{' '}
              <span className="text-vinted">Authentication Guide</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl">
              From the legendary perfecto to the flight bomber, vintage leather jackets are timeless
              pieces. Discover how to find the perfect jacket and recognize quality leather.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-white rounded-full border-2 border-black">
                  <User className="w-4 h-4" />
                </div>
                <span className="font-medium">VintDress</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-white rounded-full border-2 border-black">
                  <Calendar className="w-4 h-4" />
                </div>
                <span>January 13, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-white rounded-full border-2 border-black">
                  <Clock className="w-4 h-4" />
                </div>
                <span>15 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="container mx-auto px-4 -mt-8 mb-16 relative z-20">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <img
              src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1200&h=600&fit=crop"
              alt="Vintage leather jacket - Timeless style"
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">

          {/* Introduction */}
          <div className="bg-white rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Crown className="w-6 h-6 text-vinted" />
              A timeless classic for men and women
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The <strong>vintage leather jacket</strong> is one of the most durable fashion investments.
              Unlike current productions often made from reconstituted or synthetic leather, vintage
              jackets offer full-grain leather that develops a beautiful patina over time.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This guide will help you identify the most sought-after models, authenticate the
              leather and origin, and maintain your piece so it lasts for decades.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-mint/30 rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-8 mb-12">
            <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
            <nav className="space-y-2">
              <a href="#iconic-styles" className="block text-vinted hover:underline font-medium">1. Iconic leather jacket styles</a>
              <a href="#perfecto" className="block text-vinted hover:underline font-medium">2. The perfecto: a leather legend</a>
              <a href="#flight-bomber" className="block text-vinted hover:underline font-medium">3. Flight jackets and bombers</a>
              <a href="#sought-brands" className="block text-vinted hover:underline font-medium">4. Most sought-after brands</a>
              <a href="#authenticate" className="block text-vinted hover:underline font-medium">5. How to authenticate a vintage leather jacket</a>
              <a href="#leather-quality" className="block text-vinted hover:underline font-medium">6. Recognizing quality leather</a>
              <a href="#care" className="block text-vinted hover:underline font-medium">7. Care and restoration</a>
              <a href="#where-buy" className="block text-vinted hover:underline font-medium">8. Where to buy a vintage leather jacket</a>
              <a href="#faq" className="block text-vinted hover:underline font-medium">9. FAQ</a>
            </nav>
          </div>

          {/* Section 1: Iconic Styles */}
          <section id="iconic-styles" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-vinted rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Iconic leather jacket styles</h2>
            </div>

            <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Vintage leather jackets come in several iconic styles, each with its own
                history and aesthetic. Knowing these differences will help you choose
                the piece that matches your style.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-pink-pastel/20 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Perfecto / Biker</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Asymmetric zipper</li>
                  <li>Snap-button lapel collar</li>
                  <li>Waist belt</li>
                  <li>Rock and rebel style</li>
                </ul>
              </div>
              <div className="bg-mint/20 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Flight Jacket</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Shearling collar</li>
                  <li>Warm, roomy cut</li>
                  <li>Patch pockets</li>
                  <li>Military vintage style</li>
                </ul>
              </div>
              <div className="bg-vinted/10 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Bomber</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Short, fitted cut</li>
                  <li>Elastic ribbed trim</li>
                  <li>Round or Mao collar</li>
                  <li>Casual urban style</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Leather Blazer</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Structured jacket cut</li>
                  <li>Classic lapels</li>
                  <li>Buttons or hidden closure</li>
                  <li>Elegant refined style</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2: Perfecto */}
          <section id="perfecto" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-pink-pastel rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Crown className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold">The perfecto: a leather legend</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">History of the perfecto</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Created by <strong>Schott NYC</strong> in 1928, the perfecto was popularized by Marlon Brando
                  in "The Wild One" (1953). This jacket became the symbol of rebellion and
                  rock'n'roll, worn by icons like James Dean and the Ramones.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Model 618</strong> - The original Schott perfecto</li>
                  <li><strong>Model 613</strong> - One Star version, most famous</li>
                  <li><strong>Lewis Leathers</strong> - The British equivalent</li>
                  <li><strong>Vanson</strong> - Quality American alternative</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Recognizing a real vintage perfecto</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold mb-2">Authentic elements</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>Talon or old YKK zippers</li>
                      <li>Thick cowhide (1.2-1.4mm)</li>
                      <li>Quilted satin lining</li>
                      <li>Star on epaulette (model 613)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Dating clues</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>"Made in USA" label (pre-2000)</li>
                      <li>Serial number on tag</li>
                      <li>Typography style</li>
                      <li>Type of zippers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Flight Jacket and Bomber */}
          <section id="flight-bomber" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-vinted rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Flight jackets and bombers</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">A-2 Flight Jacket</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The A-2 is an American military piece created in 1931 for the US Army Air Corps.
                  Recognizable by its shirt collar and patch pockets, it's a timeless classic.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Horsehide</strong> - Most authentic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Cowhide</strong> - More common</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Silk lining</strong> - Quality models</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">B-3 Shearling</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The B-3 is the ultimate bomber jacket, with its shearling collar
                  and sheepskin lining. Ultra warm, it's the ultimate winter piece.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Real sheepskin</strong> - Recognize natural wool</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Straps</strong> - To adjust the collar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Weight</strong> - A real one is heavy (4-6 lbs)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: Sought-after Brands */}
          <section id="sought-brands" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-black rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Most sought-after brands</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">American brands</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Schott NYC</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>Original perfecto</li>
                      <li>Legendary quality</li>
                      <li>Price: $350-900</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Aero Leather</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>Military reproductions</li>
                      <li>Horsehide leather</li>
                      <li>Price: $450-1100</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Vanson</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>Motorcycle jackets</li>
                      <li>Made in USA</li>
                      <li>Price: $400-800</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">European brands</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Lewis Leathers</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>UK, since 1892</li>
                      <li>Punk rock style</li>
                      <li>Price: $550-1300</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Belstaff</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>UK, since 1924</li>
                      <li>Chic biker style</li>
                      <li>Price: $450-1000</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Chevignon</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>France, 1980s</li>
                      <li>Aviator jackets</li>
                      <li>Price: $170-450</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Authenticate */}
          <section id="authenticate" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-mint rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Tag className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold">How to authenticate a vintage leather jacket</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Verification points</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3">Labels and markings</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Original brand label</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Consistent country of manufacture</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Serial number (if applicable)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Composition label</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3">Construction</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Quality zippers (YKK, Talon)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Solid, even stitching</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Quality lining</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Engraved snap buttons</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-vinted/10 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Beware of counterfeits</h3>
                <p className="text-gray-700">
                  Schott and Lewis Leathers jackets are heavily counterfeited. Be wary of prices that are
                  too low, poorly printed labels, or sellers who refuse to show the inside of the jacket.
                  A real vintage Schott perfecto never sells for under $250.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Leather Quality */}
          <section id="leather-quality" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-pink-pastel rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold">Recognizing quality leather</h2>
            </div>

            <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-gray-700 leading-relaxed mb-6">
                Leather quality is crucial for the value and durability of a vintage jacket.
                Here's how to distinguish between different types of leather.
              </p>

              <h3 className="text-lg font-bold mb-4">Types of leather by quality</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                  <h4 className="font-bold text-green-800 mb-2">Full grain leather (Top grain)</h4>
                  <p className="text-sm text-gray-700">The best. Natural surface with its imperfections.
                  Develops a beautiful patina. This is what you find on quality vintage jackets.</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                  <h4 className="font-bold text-blue-800 mb-2">Corrected grain leather</h4>
                  <p className="text-sm text-gray-700">Sanded and coated surface. More uniform appearance
                  but less noble. Acceptable on mid-range jackets.</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4 border-2 border-yellow-200">
                  <h4 className="font-bold text-yellow-800 mb-2">Split leather</h4>
                  <p className="text-sm text-gray-700">Lower layer of leather. Less resistant,
                  often covered with a film. Avoid for vintage purchases.</p>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border-2 border-red-200">
                  <h4 className="font-bold text-red-800 mb-2">Faux leather / Synthetic</h4>
                  <p className="text-sm text-gray-700">Not real leather. Cracks over time.
                  Avoid "vintage" faux leather jackets sold as real leather.</p>
                </div>
              </div>

              <div className="bg-mint/20 rounded-lg p-4">
                <p className="text-gray-700 font-medium">
                  <strong>Simple test:</strong> Real leather slightly absorbs water and has a
                  characteristic smell. Faux leather beads water and smells like plastic.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Care */}
          <section id="care" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-mint rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Sparkles className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold">Care and restoration</h2>
            </div>

            <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold mb-4 text-vinted">Regular maintenance</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Dust with a soft cloth</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Condition the leather 2-3 times a year</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Use leather milk or cream</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Avoid silicone products</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4 text-vinted">Storage</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Wide, padded hanger</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Breathable cotton garment bag</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Away from light and heat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Never in a plastic bag</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8: Where to Buy */}
          <section id="where-buy" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-vinted rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Where to buy a vintage leather jacket</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-4 text-vinted">Online platforms</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Vinted</strong> - Wide selection, negotiation possible</li>
                  <li><strong>eBay</strong> - Auctions and specialized sellers</li>
                  <li><strong>Grailed</strong> - High-end menswear focus</li>
                  <li><strong>Etsy</strong> - Curated vintage sellers</li>
                  <li><strong>Vestiaire Collective</strong> - Authentication included</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-4 text-vinted">In-store</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Specialized thrift stores</strong> - Curated selection</li>
                  <li><strong>Luxury consignment</strong> - Authenticated pieces</li>
                  <li><strong>Vintage markets</strong> - Direct negotiation</li>
                  <li><strong>Flea markets</strong> - Hidden treasures</li>
                  <li><strong>Auctions</strong> - Collector pieces</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA VintDress */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-vinted to-vinted/80 rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 text-white">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-white/20 rounded-xl">
                  <Sparkles className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Sell your vintage leather jackets with VintDress</h2>
                  <p className="text-white/90">
                    Do you have vintage leather jackets to sell on Vinted? Showcase them with our
                    AI-generated worn photos! A well-presented jacket sells up to 3 times faster.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 bg-white text-vinted px-6 py-3 rounded-xl font-bold border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  <Sparkles className="w-5 h-5" />
                  Try VintDress for free
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Tag className="w-8 h-8 text-vinted" />
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">What budget for a quality vintage leather jacket?</h3>
                <p className="text-gray-700">
                  Expect $170-350 for a good unbranded vintage leather jacket, $350-700 for a vintage Schott
                  or Vanson, and $550-1300 for rare pieces like Lewis Leathers or authentic military jackets.
                  Price depends on condition, brand, and rarity.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">How do I know if it's real leather?</h3>
                <p className="text-gray-700">
                  Real leather has a characteristic smell, slightly absorbs water, and has natural
                  imperfections (pores, color variations). Faux leather looks too uniform,
                  smells like plastic, and water beads on its surface.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Can a vintage leather jacket be repaired?</h3>
                <p className="text-gray-700">
                  Yes! A leather craftsman can repair zippers, minor tears, and replace the lining.
                  A good restoration (cleaning, conditioning, re-dyeing) can bring a tired jacket
                  back to life. Expect $55-220 depending on the work needed.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">How to choose the right vintage size?</h3>
                <p className="text-gray-700">
                  Vintage sizes are often smaller than today's. A vintage 42 may correspond to a modern 40.
                  Always ask for exact measurements (chest, shoulders, sleeve length) and compare with
                  a jacket you already own.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Are vintage leather jackets a good investment?</h3>
                <p className="text-gray-700">
                  Absolutely! Unlike new jackets that depreciate, vintage jackets from recognized brands
                  (Schott, Lewis Leathers) maintain or increase their value. A well-maintained piece
                  can be resold at the same price or even higher.
                </p>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Related articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                to="/en/articles/vintage-womens-dress"
                className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <h3 className="font-bold text-vinted mb-2">Vintage Women's Dress</h3>
                <p className="text-gray-600 text-sm">
                  Complete guide to finding the perfect vintage dress: 50s, 60s, 70s.
                </p>
              </Link>
              <Link
                to="/en/articles/vintage-levis-jeans"
                className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <h3 className="font-bold text-vinted mb-2">Vintage Levi's Jeans</h3>
                <p className="text-gray-600 text-sm">
                  Buying and authentication guide for vintage Levi's jeans.
                </p>
              </Link>
            </div>
          </section>

          {/* Article Navigation */}
          <ArticleNavigation currentPath="/en/articles/vintage-leather-jacket" />
        </div>
      </article>
    </main>
  );
}
