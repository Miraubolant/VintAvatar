import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Tag,
  Search,
  Camera,
  Zap,
  Heart,
  Star,
  Clock,
  CheckCircle,
  AlertTriangle,
  BarChart2,
  Target,
  Sparkles,
  ArrowRight,
  Calendar,
  Eye
} from 'lucide-react';

export default function OptimizeVintedSalesPage() {
  useSEO({
    title: 'Boost Your Vinted Sales: Pro Tips 2026',
    description: 'Discover pro tips to boost your Vinted sales: best-selling items, pricing strategies, photos that convert and algorithm secrets.',
    keywords: 'boost vinted sales, optimize vinted, vinted tips, sell more vinted, vinted algorithm, vinted photos',
    canonicalUrl: 'https://vintdress.com/en/articles/optimize-vinted-sales',
    ogImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
  });

  return (
    <div className="min-h-screen bg-grain">
      <article className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-vinted text-white px-4 py-2 font-display font-bold text-sm border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              TIPS
            </span>
            <span className="text-gray-600 font-medium">10 min read</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-black mb-6 leading-tight">
            Boost Your Vinted Sales: Pro Tips 2026
          </h1>

          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Are your items sitting on Vinted for weeks without selling?
            Discover the strategies top sellers use to multiply their sales and
            maximize their profits.
          </p>

          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop"
            alt="Optimize Vinted sales"
            className="w-full h-64 sm:h-80 lg:h-96 object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          />
        </header>

        {/* Table of contents */}
        <nav className="bg-white border-4 border-black p-6 mb-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-display font-bold text-xl mb-4">In this article</h2>
          <ol className="space-y-2 text-gray-700">
            <li><a href="#best-sellers" className="hover:text-vinted transition-colors">1. Best-selling items on Vinted</a></li>
            <li><a href="#pricing" className="hover:text-vinted transition-colors">2. Advanced pricing strategies</a></li>
            <li><a href="#listings" className="hover:text-vinted transition-colors">3. Optimize your listings</a></li>
            <li><a href="#photos" className="hover:text-vinted transition-colors">4. Photos that convert</a></li>
            <li><a href="#algorithm" className="hover:text-vinted transition-colors">5. Vinted algorithm: the secrets</a></li>
            <li><a href="#buyers" className="hover:text-vinted transition-colors">6. Build buyer loyalty</a></li>
            <li><a href="#mistakes" className="hover:text-vinted transition-colors">7. Mistakes killing your sales</a></li>
            <li><a href="#action-plan" className="hover:text-vinted transition-colors">8. 30-day action plan</a></li>
          </ol>
        </nav>

        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-mint border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-2xl mb-4">From amateur to pro seller</h2>
            <p className="text-gray-700 mb-4">
              The difference between a seller making €50/month and one making €500/month?
              It's not the quantity of items, it's the <strong>method</strong>.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Selling time reduced</strong> from weeks to days</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>+300% more views</strong> on your listings</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Higher selling prices</strong> thanks to better presentation</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 1: Best sellers */}
        <section id="best-sellers" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">1. Best-selling items on Vinted</h2>
          </div>

          <div className="bg-white border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl mb-4">Top 10 profitable categories</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ol className="space-y-2">
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">1.</span> Designer jeans (Levi's, Diesel)</li>
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">2.</span> Sneakers (Nike, Adidas, NB)</li>
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">3.</span> Jackets and coats</li>
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">4.</span> Designer dresses</li>
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">5.</span> Handbags</li>
              </ol>
              <ol className="space-y-2" start={6}>
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">6.</span> Baby/kids clothing</li>
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">7.</span> Sportswear</li>
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">8.</span> Vintage 90s-2000s</li>
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">9.</span> Wool/cashmere sweaters</li>
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">10.</span> Luxury accessories</li>
              </ol>
            </div>
          </div>

          <div className="bg-pink-pastel border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl mb-4">Most searched brands</h3>
            <div className="flex flex-wrap gap-2">
              {['Nike', 'Zara', 'H&M', 'Levi\'s', 'Adidas', 'The North Face', 'Lacoste', 'Ralph Lauren', 'Mango', 'Sézane'].map((brand) => (
                <span key={brand} className="bg-white px-3 py-1 border-2 border-black font-medium">
                  {brand}
                </span>
              ))}
            </div>
            <p className="mt-4 text-gray-700">
              <strong>Tip:</strong> Always mention the brand in your listing title!
            </p>
          </div>
        </section>

        {/* Section 2: Pricing */}
        <section id="pricing" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Tag className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">2. Advanced pricing strategies</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Psychological pricing</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Use <strong>€9.99 instead of €10</strong> (proven psychological effect)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Round numbers <strong>ending in 5 or 0</strong> for premium items (€25, €50)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Leave a <strong>10-15% margin</strong> for negotiation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Analyze the competition</h3>
              <p className="text-gray-700 mb-4">
                Before setting your price, search for similar items on Vinted:
              </p>
              <ol className="space-y-2 text-gray-700">
                <li>1. Search for your brand + item type + size</li>
                <li>2. Note the first 5 recently sold results</li>
                <li>3. Calculate the average price</li>
                <li>4. Position yourself slightly below if you want to sell fast</li>
              </ol>
            </div>

            <div className="bg-mint border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Bundle pricing</h3>
              <p className="text-gray-700">
                Bundles sell 30% faster! Offer attractive discounts:
              </p>
              <ul className="mt-4 space-y-2">
                <li><strong>2 items:</strong> -10% off total</li>
                <li><strong>3 items:</strong> -15% off total</li>
                <li><strong>5+ items:</strong> -20% off total</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Listings */}
        <section id="listings" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Search className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">3. Optimize your listings</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Titles that attract clicks</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  <span className="line-through text-gray-500">Dress</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-medium">Sézane Black Silk Dress Size 8 - New with tags</span>
                </div>
              </div>
              <p className="mt-4 text-gray-700">
                A good title includes: <strong>Brand + Type + Color + Size + Condition</strong>
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Optimized descriptions</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Start with <strong>important keywords</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Add <strong>exact measurements</strong> (bust, length...)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Mention the <strong>condition honestly</strong> (including flaws)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>End with an <strong>engaging phrase</strong></span>
                </li>
              </ul>
            </div>

            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Regular updates</h3>
              <p className="text-gray-700">
                <strong>Pro tip:</strong> Slightly modify your listings every 3-4 days.
                This bumps them up in search results without using paid boost!
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Photos */}
        <section id="photos" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">4. Photos that convert</h2>
          </div>

          <div className="bg-white border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl mb-4">Proven impact of pro photos</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-red-100 border-2 border-black">
                <Eye className="w-8 h-8 mx-auto mb-2 text-red-600" />
                <p className="text-2xl font-bold text-red-600">+300%</p>
                <p className="text-sm">more views</p>
              </div>
              <div className="text-center p-4 bg-green-100 border-2 border-black">
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-green-600" />
                <p className="text-2xl font-bold text-green-600">+150%</p>
                <p className="text-sm">more favorites</p>
              </div>
              <div className="text-center p-4 bg-blue-100 border-2 border-black">
                <Star className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <p className="text-2xl font-bold text-blue-600">2x more</p>
                <p className="text-sm">sales</p>
              </div>
            </div>
          </div>

          <div className="bg-white border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl mb-4">Worn photo vs flat lay</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-black">
                    <th className="text-left py-2">Type</th>
                    <th className="text-left py-2">Pros</th>
                    <th className="text-left py-2">Cons</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-300">
                    <td className="py-2 font-medium">Flat lay</td>
                    <td className="py-2">Quick, simple</td>
                    <td className="py-2">Less engaging, flat look</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-2 font-medium">Worn photo</td>
                    <td className="py-2">+300% views, shows fit</td>
                    <td className="py-2">Need a model</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium bg-mint">AI Mannequin</td>
                    <td className="py-2 bg-mint">Best of both worlds!</td>
                    <td className="py-2 bg-mint">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA VintDress */}
          <div className="bg-vinted border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-white" />
              <h3 className="font-display font-bold text-2xl text-white">Transform your clothes into mannequin photos</h3>
            </div>
            <p className="text-white mb-6">
              With VintDress, generate AI mannequin photos in 30 seconds.
              No need to model or find a mannequin!
            </p>
            <Link
              to="/en"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 font-display font-bold border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              Try VintDress
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Section 5: Algorithm */}
        <section id="algorithm" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">5. Vinted algorithm: the secrets</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">How the feed works</h3>
              <p className="text-gray-700 mb-4">
                The Vinted algorithm favors sellers who:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Are <strong>regularly active</strong> (daily login)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Have <strong>complete listings</strong> (photos, description, brand)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Respond <strong>quickly</strong> to messages (under 24h)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Have <strong>good reviews</strong></span>
                </li>
              </ul>
            </div>

            <div className="bg-mint border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Bump your listings for free</h3>
              <p className="text-gray-700 mb-4">
                To boost a listing without paying:
              </p>
              <ol className="space-y-2 text-gray-700">
                <li>1. Slightly modify the description</li>
                <li>2. Reorganize the photo order</li>
                <li>3. Adjust the price by a few cents</li>
                <li>4. Add or remove a hashtag</li>
              </ol>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6" />
                Best times to post
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-bold mb-2">Optimal days:</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>Sunday evening (8pm-10pm)</li>
                    <li>Wednesday afternoon</li>
                    <li>Saturday morning</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold mb-2">Avoid:</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>Monday morning</li>
                    <li>Friday night</li>
                    <li>Night (midnight-7am)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Build loyalty */}
        <section id="buyers" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">6. Build buyer loyalty</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <Star className="w-8 h-8 text-yellow-500 mb-4" />
              <h3 className="font-display font-bold text-xl mb-3">Fast communication</h3>
              <p className="text-gray-700">
                Respond to messages within 2 hours during the day.
                Buyers move on if you take too long.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <Target className="w-8 h-8 text-vinted mb-4" />
              <h3 className="font-display font-bold text-xl mb-3">Careful packaging</h3>
              <p className="text-gray-700">
                Beautiful packaging = 5-star reviews. Use tissue paper,
                a nice ribbon, and protect the item well.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <Sparkles className="w-8 h-8 text-pink-500 mb-4" />
              <h3 className="font-display font-bold text-xl mb-3">Personal thank you note</h3>
              <p className="text-gray-700">
                Include a small thank you card. It makes a difference
                and encourages buyers to come back!
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <BarChart2 className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-display font-bold text-xl mb-3">Get 5-star reviews</h3>
              <p className="text-gray-700">
                Ship quickly, package well, and don't hesitate to add
                a small bonus (sample, candy...).
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Mistakes */}
        <section id="mistakes" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-red-500 p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">7. Mistakes killing your sales</h2>
          </div>

          <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-red-600">Prices too high</strong>
                  <p className="text-gray-600">Always compare with competition before setting your price</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-red-600">Poor photos</strong>
                  <p className="text-gray-600">Blurry, poorly lit, or cluttered background = fewer clicks</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-red-600">Empty descriptions</strong>
                  <p className="text-gray-600">"Dress, size M" isn't enough. Detail the item!</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-red-600">Not responding to messages</strong>
                  <p className="text-gray-600">A waiting buyer goes elsewhere. Respond fast!</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-red-600">Prolonged inactivity</strong>
                  <p className="text-gray-600">The algorithm penalizes inactive accounts. Log in daily!</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 8: Action plan */}
        <section id="action-plan" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">8. 30-day action plan</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4 flex items-center gap-2">
                <span className="bg-vinted text-white px-3 py-1 text-sm">Week 1</span>
                Audit your wardrobe
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Sort through all your items</li>
                <li>Identify high-potential items</li>
                <li>Analyze competitor prices</li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4 flex items-center gap-2">
                <span className="bg-vinted text-white px-3 py-1 text-sm">Week 2</span>
                Redo the photos
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Rephotograph all your items</li>
                <li>Use VintDress for mannequin photos</li>
                <li>Add detail photos</li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4 flex items-center gap-2">
                <span className="bg-vinted text-white px-3 py-1 text-sm">Week 3</span>
                Optimize prices and descriptions
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Rewrite all your descriptions</li>
                <li>Adjust prices according to your strategy</li>
                <li>Add exact measurements</li>
              </ul>
            </div>

            <div className="bg-mint border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4 flex items-center gap-2">
                <span className="bg-vinted text-white px-3 py-1 text-sm">Week 4</span>
                Analysis and adjustments
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Analyze your view statistics</li>
                <li>Identify what works</li>
                <li>Adjust your strategy accordingly</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <div className="bg-black text-white border-4 border-black p-8">
            <h2 className="font-display font-bold text-2xl mb-6">Summary: priority actions</h2>
            <ol className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="bg-vinted text-white px-2 py-1 text-sm font-bold">1</span>
                <span>Improve your photos (use VintDress for mannequin photos)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-vinted text-white px-2 py-1 text-sm font-bold">2</span>
                <span>Optimize your titles and descriptions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-vinted text-white px-2 py-1 text-sm font-bold">3</span>
                <span>Adjust your prices with the competition</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-vinted text-white px-2 py-1 text-sm font-bold">4</span>
                <span>Be active and responsive every day</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-vinted text-white px-2 py-1 text-sm font-bold">5</span>
                <span>Polish the buyer experience (packaging, communication)</span>
              </li>
            </ol>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center">
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              Ready to boost your sales?
            </h2>
            <p className="text-white text-lg mb-6">
              Start with the step that has the most impact: photos.
              With VintDress, transform your clothes into professional mannequin photos.
            </p>
            <Link
              to="/en"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-display font-bold text-lg border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              Try VintDress for free
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </section>

        {/* Related articles */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-2xl mb-6">Related articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/en/articles/how-to-sell-on-vinted"
              className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <h3 className="font-display font-bold text-lg mb-2">How to Sell on Vinted</h3>
              <p className="text-gray-600">Complete guide to creating your first listings</p>
            </Link>
            <Link
              to="/en/articles/how-to-take-vinted-photos"
              className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <h3 className="font-display font-bold text-lg mb-2">How to Take Great Photos</h3>
              <p className="text-gray-600">Techniques for photos that sell</p>
            </Link>
          </div>
        </section>

        <ArticleNavigation currentSlug="optimize-vinted-sales" />
      </article>
    </div>
  );
}
