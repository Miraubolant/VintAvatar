import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Tag, ArrowLeft, Sparkles, Star, TrendingUp, Heart, Shirt, Crown, Palette } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export default function VintageWomensDressPage() {
  useSEO({
    title: "Vintage Women's Dress: Complete Guide to Finding the Perfect Piece",
    description: "Discover the most sought-after vintage women's dresses: 50s, 60s, 70s, bohemian, pin-up styles. Complete guide to choosing, authenticating and wearing vintage dresses.",
    keywords: "vintage womens dress, retro dress, 50s dress, bohemian vintage dress, pin-up dress, vintage fashion women",
    canonicalUrl: "https://vintdress.com/en/articles/vintage-womens-dress",
    ogImage: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&h=630&fit=crop"
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
            to="/en/blog"
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
                Dresses
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Vintage Women's Dress: Complete Guide to Finding the{' '}
              <span className="text-vinted">Perfect Piece</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl">
              From the 50s to the 90s, vintage dresses embody timeless elegance.
              Discover how to find the perfect vintage dress, authenticate it, and wear it with style.
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
                <span>14 min read</span>
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
              src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&h=600&fit=crop"
              alt="Vintage women's dress - Timeless elegance"
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
              The Timeless Elegance of Vintage Dresses
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A <strong>vintage women's dress</strong> is more than just a garment: it's a journey
              through time, a unique piece that tells a story. Whether you're looking for a 50s
              swing dress, a psychedelic sixties mini-dress, or a bohemian seventies gown, vintage
              offers incomparable treasures.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This complete guide will help you find the perfect vintage dress, understand
              different eras and styles, and wear these exceptional pieces with confidence.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-mint/30 rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-8 mb-12">
            <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
            <nav className="space-y-2">
              <a href="#styles-eras" className="block text-vinted hover:underline font-medium">1. Styles by Era</a>
              <a href="#fifties" className="block text-vinted hover:underline font-medium">2. 1950s Dresses: Pin-Up Elegance</a>
              <a href="#sixties-seventies" className="block text-vinted hover:underline font-medium">3. 1960s-70s: From Mod to Bohemian</a>
              <a href="#eighties-nineties" className="block text-vinted hover:underline font-medium">4. 1980s-90s: Glamour and Minimalism</a>
              <a href="#authenticate" className="block text-vinted hover:underline font-medium">5. How to Authenticate Vintage Dresses</a>
              <a href="#sizing" className="block text-vinted hover:underline font-medium">6. Choosing the Right Size</a>
              <a href="#where-to-buy" className="block text-vinted hover:underline font-medium">7. Where to Buy Vintage Dresses</a>
              <a href="#care" className="block text-vinted hover:underline font-medium">8. Care and Storage</a>
              <a href="#faq" className="block text-vinted hover:underline font-medium">9. FAQ</a>
            </nav>
          </div>

          {/* Section 1: Styles by Era */}
          <section id="styles-eras" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-vinted rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Dress Styles by Era</h2>
            </div>

            <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Each decade brought its share of innovations and iconic styles to the world
                of dresses. Understanding these different eras will help you identify authentic
                pieces and choose the style that suits you best.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-pink-pastel/20 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">1940s-50s</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Cinched waist and full skirt</li>
                  <li>Floral and polka dot prints</li>
                  <li>Quality fabrics (cotton, silk)</li>
                  <li>Careful details (buttons, collars)</li>
                </ul>
              </div>
              <div className="bg-mint/20 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">1960s</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Straight or A-line cut</li>
                  <li>Geometric and pop patterns</li>
                  <li>Revolutionary mini-skirts</li>
                  <li>Innovative synthetic materials</li>
                </ul>
              </div>
              <div className="bg-vinted/10 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">1970s</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Bohemian and flowing style</li>
                  <li>Maxi-dresses and ethnic prints</li>
                  <li>Bell sleeves</li>
                  <li>Natural fabrics and crochet</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">1980s-90s</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Structured shoulders and power dressing</li>
                  <li>Bodycon and stretch dresses</li>
                  <li>Minimalism and slip dress</li>
                  <li>Sequins and glamour</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2: 1950s */}
          <section id="fifties" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-pink-pastel rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Crown className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold">1950s Dresses: Pin-Up Elegance</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Dior's New Look</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The 1950s are marked by Christian Dior's <strong>New Look</strong>: very
                  defined waist, full skirts, and soft shoulders. This ultra-feminine silhouette
                  remains one of the most sought-after in vintage fashion.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Swing dress</strong> - Circular skirt ideal for dancing</li>
                  <li><strong>Sheath dress</strong> - Fitted and elegant cut</li>
                  <li><strong>Shirtwaist dress</strong> - Casual chic style</li>
                  <li><strong>Cocktail dress</strong> - For special occasions</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Brands and Designers to Look For</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold mb-2">Haute Couture</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>Christian Dior</li>
                      <li>Balenciaga</li>
                      <li>Givenchy</li>
                      <li>Jacques Fath</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Ready-to-Wear</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>Jonathan Logan</li>
                      <li>Gay Gibson</li>
                      <li>Lanz</li>
                      <li>Toni Todd</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: 1960s-70s */}
          <section id="sixties-seventies" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-vinted rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">1960s-70s: From Mod to Bohemian</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Mod Style (1960s)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The sixties revolution brought geometric cuts, bold colors,
                  and Mary Quant's revolutionary mini-skirt.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>A-line dress</strong> - Flared trapeze cut</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Mini-dress</strong> - Above the knee</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Shift dress</strong> - Straight and unbelted</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Bohemian Style (1970s)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The seventies celebrated freedom with flowing dresses, ethnic
                  prints, and a return to natural materials.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Maxi-dress</strong> - Long and flowing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Peasant dress</strong> - Embroidery and ruffles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Caftan dress</strong> - Loose and exotic</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: 1980s-90s */}
          <section id="eighties-nineties" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-black rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">1980s-90s: Glamour and Minimalism</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">1980s Power Dressing</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The 80s embodied excess and female power with structured shoulders,
                  bold colors, and shiny materials.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Key Styles</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>Shoulder pad dress</li>
                      <li>Strapless dress</li>
                      <li>Sequin dress</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Designers</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>Thierry Mugler</li>
                      <li>Claude Montana</li>
                      <li>Azzedine Alaia</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Materials</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>Lame and lurex</li>
                      <li>Velvet</li>
                      <li>Stretch lycra</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">1990s Minimalism</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In reaction to the excesses of the eighties, the 90s embraced elegant
                  minimalism with clean lines and neutral colors.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Slip dress</strong> - The iconic negligee-style dress</li>
                  <li><strong>Column dress</strong> - Long and straight</li>
                  <li><strong>Little black dress</strong> - Minimalist and chic</li>
                  <li><strong>Grunge dress</strong> - Floral prints and layering</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5: Authentication */}
          <section id="authenticate" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-mint rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Tag className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold">How to Authenticate Vintage Dresses</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Signs of Authenticity</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3">Labels and Markings</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Sewn fabric label (not printed)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>"Union Made" or union label (USA)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>No barcodes (before 1980)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Country of origin (before globalization)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3">Finishes and Construction</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Metal zippers (before 1970)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Hand stitching or careful topstitching</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Full lining in silk or acetate</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Matching or mother-of-pearl buttons</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-vinted/10 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Points to Watch</h3>
                <p className="text-gray-700">
                  Beware of modern "vintage-style" reproductions. True vintage pieces have a
                  natural patina, superior quality fabrics, and finishes no longer found
                  in current manufacturing.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Sizing */}
          <section id="sizing" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-pink-pastel rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Shirt className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold">Choosing the Right Vintage Size</h2>
            </div>

            <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Warning:</strong> Vintage sizes don't match modern sizing! A 1950s
                size 12 often equals a modern US 4-6. Always rely on actual measurements
                rather than the label.
              </p>

              <h3 className="text-lg font-bold mb-4">Essential Measurements to Check</h3>
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <h4 className="font-bold text-vinted mb-2">Bust</h4>
                  <p className="text-sm text-gray-600">Measured under arms</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <h4 className="font-bold text-vinted mb-2">Waist</h4>
                  <p className="text-sm text-gray-600">At natural waistline</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <h4 className="font-bold text-vinted mb-2">Hips</h4>
                  <p className="text-sm text-gray-600">At widest point</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <h4 className="font-bold text-vinted mb-2">Length</h4>
                  <p className="text-sm text-gray-600">Shoulder to hem</p>
                </div>
              </div>

              <div className="bg-mint/20 rounded-lg p-4">
                <p className="text-gray-700 font-medium">
                  <strong>VintDress tip:</strong> Always ask the seller for flat lay measurements
                  and compare them to a garment you already own that fits well.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Where to Buy */}
          <section id="where-to-buy" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-vinted rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Where to Buy Vintage Dresses</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-4 text-vinted">Online Platforms</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Vinted</strong> - Wide selection, accessible prices</li>
                  <li><strong>Vestiaire Collective</strong> - Luxury and authentication</li>
                  <li><strong>Etsy</strong> - Specialized vintage sellers</li>
                  <li><strong>eBay</strong> - Auctions and bargains</li>
                  <li><strong>Depop</strong> - Trendy vintage fashion</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-4 text-vinted">In-Store</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Thrift stores</strong> - Budget-friendly finds</li>
                  <li><strong>Vintage boutiques</strong> - Curated pieces</li>
                  <li><strong>Consignment shops</strong> - Quality brands</li>
                  <li><strong>Flea markets</strong> - Hidden treasures</li>
                  <li><strong>Auctions</strong> - Collector's pieces</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 8: Care */}
          <section id="care" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-mint rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Sparkles className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold">Care and Storage</h2>
            </div>

            <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold mb-4 text-vinted">Washing and Cleaning</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Prefer dry cleaning for delicate pieces</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Hand wash in cold water for cotton</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Use mild detergents without bleaching agents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Dry flat, never in dryer</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4 text-vinted">Storage</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Padded hangers to prevent marks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Breathable cotton garment bags (not plastic)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Away from direct sunlight</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Natural moth repellents (lavender, cedar)</span>
                    </li>
                  </ul>
                </div>
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
                  <h2 className="text-2xl font-bold mb-2">Sell Your Vintage Dresses with VintDress</h2>
                  <p className="text-white/90">
                    Have vintage dresses to sell on Vinted? Showcase them with our AI-generated
                    worn photos! Buyers love seeing how a dress looks on a virtual mannequin.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 bg-white text-vinted px-6 py-3 rounded-xl font-bold border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  <Sparkles className="w-5 h-5" />
                  Try VintDress for Free
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
                <h3 className="text-lg font-bold mb-3">How do I know if a dress is truly vintage?</h3>
                <p className="text-gray-700">
                  Check the labels (fabric, origin), zippers (metal before 1970), seam quality,
                  and presence of lining. True vintage pieces generally have superior finishes
                  compared to modern reproductions.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">What budget for a quality vintage dress?</h3>
                <p className="text-gray-700">
                  Prices vary greatly depending on era, brand, and condition. Expect $30-80
                  for a vintage dress at a thrift store, $100-300 for a designer piece, and
                  several hundred dollars for haute couture or rare pieces.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Can vintage dresses be altered?</h3>
                <p className="text-gray-700">
                  Yes, but trust your pieces to an experienced tailor who will respect the
                  garment's integrity. Common alterations include waist adjustments, hem
                  shortening, and replacing faulty zippers.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">How to wear a vintage dress daily?</h3>
                <p className="text-gray-700">
                  Mix your vintage dress with modern accessories to avoid a costume effect.
                  A 50s dress can be worn with white sneakers, a 70s dress with a contemporary
                  leather jacket. The balance between vintage and modern is key.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Are vintage dresses sustainable?</h3>
                <p className="text-gray-700">
                  Absolutely! Buying vintage is one of the most sustainable fashion choices.
                  You give a second life to an existing garment, avoid new production, and
                  often enjoy superior quality that will last for more decades.
                </p>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                to="/en/articles/90s-vintage-clothing"
                className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <h3 className="font-bold text-vinted mb-2">90s Vintage Clothing</h3>
                <p className="text-gray-600 text-sm">
                  Discover the iconic trends of the 90s: grunge, streetwear, and minimalism.
                </p>
              </Link>
              <Link
                to="/en/articles/online-thrift-store"
                className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <h3 className="font-bold text-vinted mb-2">Online Thrift Store: Complete Guide</h3>
                <p className="text-gray-600 text-sm">
                  The best platforms to buy vintage clothing online.
                </p>
              </Link>
            </div>
          </section>

          {/* Article Navigation */}
          <ArticleNavigation currentPath="/en/articles/vintage-womens-dress" />
        </div>
      </article>
    </main>
  );
}
