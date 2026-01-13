import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Tag, ArrowLeft, Sparkles, Star, TrendingUp, Heart, Shirt, Music, Palette } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export default function NinetiesVintageClothingPage() {
  useSEO({
    title: "90s Vintage Clothing: Complete Guide to Iconic Fashion Trends",
    description: "Discover the most sought-after 90s vintage clothing: baggy jeans, crop tops, denim jackets, retro sneakers. Complete guide for an authentic 90s look.",
    keywords: "90s vintage clothing, 90s fashion, 90s style, vintage 90s look, 90s trends, nineties fashion",
    canonicalUrl: "https://vintdress.com/en/articles/90s-vintage-clothing",
    ogImage: "https://images.unsplash.com/photo-1529720317453-c8da503f2051?w=1200&h=630&fit=crop"
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
                Trends
              </span>
              <span className="px-4 py-2 bg-pink-pastel text-black text-sm font-bold rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                90s Style
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              90s Vintage Clothing: Complete Guide to{' '}
              <span className="text-vinted">Iconic Fashion Trends</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl">
              The 90s are back in full force! Discover the most sought-after vintage pieces,
              from baggy jeans to crop tops, and learn how to create an authentic and trendy 90s look.
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
              src="https://images.unsplash.com/photo-1529720317453-c8da503f2051?w=1200&h=600&fit=crop"
              alt="90s vintage clothing - Iconic retro fashion"
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
              <Music className="w-6 h-6 text-vinted" />
              The Great Return of the 90s
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>90s vintage clothing</strong> is at the heart of current fashion. This decade,
              marked by grunge, hip-hop, and pop culture, produced iconic pieces that now delight
              secondhand fashion enthusiasts. From high-waisted jeans to oversized jackets, the 90s
              style has become an essential reference.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you're nostalgic for that era or discovering these trends for the first time,
              this complete guide will help you find the best pieces and create an authentic 90s look.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-mint/30 rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-8 mb-12">
            <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
            <nav className="space-y-2">
              <a href="#iconic-pieces" className="block text-vinted hover:underline font-medium">1. Iconic Pieces of the 90s</a>
              <a href="#grunge-trends" className="block text-vinted hover:underline font-medium">2. Grunge Style: The Seattle Spirit</a>
              <a href="#streetwear-90s" className="block text-vinted hover:underline font-medium">3. 90s Streetwear: Hip-Hop Influence</a>
              <a href="#minimalism" className="block text-vinted hover:underline font-medium">4. Sophisticated Minimalism</a>
              <a href="#accessories" className="block text-vinted hover:underline font-medium">5. Iconic Accessories</a>
              <a href="#where-to-find" className="block text-vinted hover:underline font-medium">6. Where to Find Authentic 90s Clothes</a>
              <a href="#how-to-wear" className="block text-vinted hover:underline font-medium">7. How to Wear Vintage 90s Today</a>
              <a href="#faq" className="block text-vinted hover:underline font-medium">8. FAQ</a>
            </nav>
          </div>

          {/* Section 1: Iconic Pieces */}
          <section id="iconic-pieces" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-vinted rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Shirt className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Iconic Pieces of the 90s</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Baggy Jeans and High-Waisted Denim</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The <strong>baggy jean</strong> is the centerpiece of 90s dressing. Wide, comfortable,
                  often worn with a visible belt, it embodies the relaxed spirit of the era.
                  Mom jeans cuts and high waists are also highly sought after.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Levi's 501</strong> and <strong>550</strong> - The undisputed classics</li>
                  <li><strong>JNCO</strong> - The extra-wide jeans of skatewear</li>
                  <li><strong>Guess</strong> - Premium denim of the 90s</li>
                  <li><strong>Calvin Klein</strong> - Minimalist elegance</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Crop Tops and Bodysuits</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The <strong>90s crop top</strong> stands out with its short cut and varied materials:
                  velvet, cotton, mesh, or metallic. Worn with high-waisted jeans, it creates
                  the iconic silhouette of the decade.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The <strong>bodysuit</strong> is also experiencing a major revival, especially
                  high-neck or spaghetti-strap models, perfect for a minimalist look.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Oversized Denim Jacket</h3>
                <p className="text-gray-700 leading-relaxed">
                  The <strong>oversized denim jacket</strong> is a 90s must-have. Whether it's
                  classic faded blue, customized with patches, or embroidered, it adds a retro
                  touch to any outfit. Vintage Levi's and Wrangler models are particularly prized.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">The Slip Dress</h3>
                <p className="text-gray-700 leading-relaxed">
                  Inspired by lingerie, the <strong>slip dress</strong> became a symbol of 90s
                  minimalist style. Worn alone for a sophisticated look or layered over a t-shirt
                  for a more casual style, it remains a highly sought-after versatile piece.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Grunge Style */}
          <section id="grunge-trends" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gray-800 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Music className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Grunge Style: The Seattle Spirit</h2>
            </div>

            <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Born in Seattle clubs with bands like Nirvana and Pearl Jam, <strong>grunge style</strong>
                revolutionized 90s fashion. Non-conformist and nonchalant, it prioritizes comfort
                and authenticity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-pink-pastel/30 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Essential Grunge Pieces</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Flannel plaid shirt</strong> - Worn open over a t-shirt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Band t-shirt</strong> - Nirvana, Pearl Jam, Soundgarden...</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Ripped jeans</strong> - Worn and relaxed look</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Doc Martens</strong> - The iconic boots</span>
                  </li>
                </ul>
              </div>

              <div className="bg-mint/30 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Grunge Styling Tips</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span>Layer pieces casually</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span>Go for oversized fits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span>Favor dark colors: black, burgundy, khaki</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span>Add silver or leather accessories</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: Streetwear 90s */}
          <section id="streetwear-90s" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-vinted rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">90s Streetwear: Hip-Hop Influence</h2>
            </div>

            <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>90s streetwear</strong> is inseparable from hip-hop culture.
                Artists like Tupac, Notorious B.I.G., and TLC popularized an urban style
                recognizable anywhere: baggy clothes, visible logos, and collector sneakers.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3 text-vinted">Cult Brands</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Tommy Hilfiger</li>
                  <li>FUBU</li>
                  <li>Karl Kani</li>
                  <li>Cross Colours</li>
                  <li>Starter</li>
                  <li>Champion</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3 text-vinted">Key Pieces</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Oversized hoodie</li>
                  <li>Full tracksuit</li>
                  <li>Snapback cap</li>
                  <li>Bomber jacket</li>
                  <li>Cargo pants</li>
                  <li>Basketball jersey</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3 text-vinted">90s Sneakers</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Nike Air Max 95</li>
                  <li>Air Jordan 1-12</li>
                  <li>Reebok Classic</li>
                  <li>Fila Disruptor</li>
                  <li>Adidas Superstar</li>
                  <li>New Balance 990</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: Minimalism */}
          <section id="minimalism" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-black rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Sophisticated Minimalism</h2>
            </div>

            <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                In contrast to grunge, <strong>90s minimalism</strong> was championed by designers
                like Calvin Klein, Helmut Lang, and Jil Sander. This refined style favors clean
                cuts, neutral colors, and quality materials.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-4">Characteristics of 90s Minimalist Style</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Neutral palette</strong>: black, white, beige, gray</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Clean cuts</strong> and straight lines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Quality materials</strong>: silk, cashmere, leather</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>No visible logos</strong></span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-4">Minimalist Pieces to Look For</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                    <span>Satin slip dress</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                    <span>Black boyfriend blazer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                    <span>Flowing tailored trousers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                    <span>Fine knit turtleneck</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5: Accessories */}
          <section id="accessories" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-pink-pastel rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Heart className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold">Iconic Accessories of the 90s</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-4 text-vinted">Jewelry and Accessories</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Chokers</strong> - Velvet or tattoo-style necklaces</li>
                  <li><strong>Chains</strong> - Large gold chains hip-hop style</li>
                  <li><strong>Butterfly clips</strong> - Colorful and sparkly</li>
                  <li><strong>Mini bags</strong> - Small handbags are back</li>
                  <li><strong>Fanny packs</strong> - Practical and stylish belt bags</li>
                  <li><strong>Oval sunglasses</strong> - Matrix or hippie style</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-4 text-vinted">Cult Footwear</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Doc Martens</strong> - Boots, derbies, and sandals</li>
                  <li><strong>Platform shoes</strong> - Spice Girls-style wedges</li>
                  <li><strong>Buffalo</strong> - Massive platforms</li>
                  <li><strong>Converse All-Star</strong> - Low or high-top</li>
                  <li><strong>Vans Old Skool</strong> - Skate style</li>
                  <li><strong>Sport sandals</strong> - Teva and Birkenstock</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6: Where to Find */}
          <section id="where-to-find" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-mint rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <TrendingUp className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold">Where to Find Authentic 90s Clothes</h2>
            </div>

            <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
              <h3 className="text-xl font-bold mb-4 text-vinted">Online Platforms</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Secondhand platforms</strong> are the best place to find affordable 90s
                vintage pieces. Vinted, Vestiaire Collective, and Depop are full of treasures
                from that era.
              </p>
              <div className="bg-vinted/10 rounded-lg p-4">
                <p className="text-gray-700 font-medium">
                  <strong>VintDress tip:</strong> Use specific keywords like "vintage 90s",
                  "Y2K", "grunge" or iconic brand names to refine your searches.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-pink-pastel/20 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Thrift Stores</h3>
                <p className="text-gray-700 text-sm">
                  Local thrift stores and consignment shops often offer authentic pieces
                  at unbeatable prices. Take time to browse!
                </p>
              </div>

              <div className="bg-mint/20 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Flea Markets</h3>
                <p className="text-gray-700 text-sm">
                  Flea markets and garage sales can reveal forgotten vintage treasures.
                  Ideal for negotiating prices.
                </p>
              </div>

              <div className="bg-vinted/10 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Specialty Boutiques</h3>
                <p className="text-gray-700 text-sm">
                  Some boutiques specialize in 90s vintage and offer pre-selected and
                  authenticated pieces.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: How to Wear */}
          <section id="how-to-wear" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-vinted rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">How to Wear Vintage 90s Today</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Mixing Vintage and Contemporary</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The key to a successful 90s look is to <strong>mix vintage pieces with modern
                  basics</strong>. Pair vintage baggy jeans with a current crop top, or wear a
                  90s denim jacket over a contemporary minimalist dress.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Avoid head-to-toe 90s looks that can seem costume-like</li>
                  <li>Choose 1-2 strong vintage pieces per outfit</li>
                  <li>Balance volumes: oversized piece + fitted piece</li>
                  <li>Play with accessories to accentuate the retro vibe</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">90s Look Ideas</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Casual Grunge Look</h4>
                    <p className="text-sm text-gray-700">
                      Mom jeans + vintage band tee + flannel shirt tied at waist + Doc Martens
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Chic Minimalist Look</h4>
                    <p className="text-sm text-gray-700">
                      Satin slip dress + oversized blazer + heeled sandals + baguette bag
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Streetwear Look</h4>
                    <p className="text-sm text-gray-700">
                      Baggy jeans + vintage hoodie + retro sneakers + cap
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Summer 90s Look</h4>
                    <p className="text-sm text-gray-700">
                      High-waisted denim shorts + crop top + platform sandals + oval sunglasses
                    </p>
                  </div>
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
                  <h2 className="text-2xl font-bold mb-2">Sell Your Vintage Pieces with VintDress</h2>
                  <p className="text-white/90">
                    Have 90s vintage clothes to sell on Vinted? Boost your sales with our AI-generated
                    worn photos! Buyers love seeing clothes on a virtual mannequin.
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
                <h3 className="text-lg font-bold mb-3">What defines 90s fashion?</h3>
                <p className="text-gray-700">
                  90s fashion is characterized by its diversity: from casual grunge to sophisticated
                  minimalism, to hip-hop streetwear. Oversized cuts, denim, crop tops, and sneakers
                  are the iconic pieces of that decade.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">How to recognize authentic 90s vintage clothing?</h3>
                <p className="text-gray-700">
                  Check the labels (composition, country of manufacture), quality of stitching
                  and finishes. Authentic 90s clothing often has sturdier seams and thicker
                  materials. Also look for era-specific logos and designs unique to brands.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Which 90s brands are most sought after?</h3>
                <p className="text-gray-700">
                  The most prized brands include Levi's, Tommy Hilfiger, Calvin Klein,
                  Champion, FUBU, Starter, and vintage Nike. Pieces with visible logos or
                  iconic era designs are particularly valued.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Is 90s style suitable for all ages?</h3>
                <p className="text-gray-700">
                  Absolutely! 90s style is very versatile. Opt for sophisticated minimalism
                  if you prefer a more mature look, or embrace grunge and streetwear for
                  a bolder style. The key is adapting pieces to your body type and personality.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">What budget for a 90s vintage wardrobe?</h3>
                <p className="text-gray-700">
                  Prices vary by platform and item condition. On Vinted or at thrift stores,
                  expect $10-30 for a vintage t-shirt, $25-60 for Levi's jeans, $30-80 for a
                  denim jacket. Rare pieces or premium brands can reach higher prices.
                </p>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                to="/en/articles/online-thrift-store"
                className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <h3 className="font-bold text-vinted mb-2">Online Thrift Store: Complete 2026 Guide</h3>
                <p className="text-gray-600 text-sm">
                  Discover the best platforms to buy vintage clothing online.
                </p>
              </Link>
              <Link
                to="/en/articles/vintage-levis-jeans"
                className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <h3 className="font-bold text-vinted mb-2">Vintage Levi's Jeans: Buying Guide</h3>
                <p className="text-gray-600 text-sm">
                  How to recognize and buy authentic vintage Levi's jeans.
                </p>
              </Link>
            </div>
          </section>

          {/* Article Navigation */}
          <ArticleNavigation currentPath="/en/articles/90s-vintage-clothing" />
        </div>
      </article>
    </main>
  );
}
