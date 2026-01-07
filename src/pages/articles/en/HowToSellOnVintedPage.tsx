import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, CheckCircle, TrendingUp, Package, DollarSign, AlertTriangle, Star, ArrowRight, ShoppingBag, Camera, Percent } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export const HowToSellOnVintedPage: React.FC = () => {
  useSEO({
    title: "How to Sell on Vinted: Complete Guide 2026 | VintDress",
    description: "Learn how to sell on Vinted effectively. Complete guide: create listings, set the right price, sell bundles and boost your sales.",
    keywords: "how to sell on vinted, sell vinted, vinted listing, vinted selling, vinted seller guide",
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px] border-b-4 border-black overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop"
          alt="How to sell on Vinted - Complete guide"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 pb-12">
        <ArticleNavigation />

        {/* Header */}
        <header className="mb-12">
          <div className="inline-block bg-vinted text-white border-3 border-black px-3 py-1 font-display font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-4">
            GUIDE
          </div>

          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-black mb-6 leading-tight">
            How to Sell on Vinted: Complete Guide 2026
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-sm font-body text-gray-700 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>VintDress Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>January 7, 2026</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["sell vinted", "vinted listing", "vinted beginner", "seller guide", "VintDress"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-mint border-2 border-black font-display font-bold text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Intro */}
        <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-8">
          <p className="font-body text-lg text-black leading-relaxed">
            Want to sell on Vinted but don't know where to start? With over <strong className="text-vinted">80 million users</strong> in Europe, Vinted has become the go-to platform for selling clothes. Great news: it's <strong>100% free</strong> for sellers (0% commission). In this complete guide, you'll learn how to create listings that sell, set the right price, and optimize your sales.
          </p>
        </div>

        {/* Section 1 - Create a listing */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Create a Listing That Sells
          </h2>

          <div className="space-y-8">
            {/* Optimized title */}
            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-vinted" />
                An Optimized Title to Be Found
              </h3>
              <p className="font-body text-black leading-relaxed mb-4">
                The title is the first thing buyers see. A good title includes:
              </p>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>The brand</strong>: Zara, H&M, Nike... Buyers often search by brand.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Type of clothing</strong>: Dress, jeans, t-shirt, jacket...</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Size</strong>: M, 38, S... Essential for filtering.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>A characteristic</strong>: Color, pattern, style (vintage, new...)</span>
                </li>
              </ul>
              <div className="mt-4 p-4 bg-white border-3 border-black">
                <p className="font-display font-bold text-sm text-gray-600 mb-2">Example of a good title:</p>
                <p className="font-body text-black">"Zara Black Dress Size M - New With Tags"</p>
              </div>
            </div>

            {/* Complete description */}
            <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 text-vinted" />
                A Complete Description
              </h3>
              <p className="font-body text-black leading-relaxed mb-4">
                A good description answers all the buyer's questions:
              </p>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Actual condition</strong>: New, very good, good condition... Be honest!</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Measurements</strong>: Chest, length, waist...</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Any flaws</strong>: Mention everything, even small details.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Reason for selling</strong>: Too small, never worn, style change...</span>
                </li>
              </ul>
            </div>

            {/* Categorization */}
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4">
                Correct Categorization
              </h3>
              <p className="font-body text-black leading-relaxed">
                Choose the right category and subcategory so your item appears in relevant searches. Fill in <strong>all fields</strong>: brand, size, color, condition, material. The more information you provide, the more visible your item will be in search filters.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 - Photos */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Photograph Your Clothes Like a Pro
          </h2>

          <div className="space-y-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <Camera className="w-6 h-6 text-vinted" />
                The Basics of a Good Photo
              </h3>
              <ul className="space-y-3 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Natural light</strong>: Near a window, preferably in the morning or late afternoon.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Neutral background</strong>: White wall, plain sheet, no visible clutter.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Multiple angles</strong>: Front, back, details, label, any flaws.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Sharpness</strong>: No blur, well-ironed and presented clothing.</span>
                </li>
              </ul>
            </div>

            {/* CTA VintDress */}
            <div className="bg-vinted border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-white mb-4 flex items-center gap-2">
                <Star className="w-6 h-6 text-white" />
                Level Up with VintDress
              </h3>
              <p className="font-body text-white leading-relaxed mb-4">
                <strong>Worn photos on mannequin</strong> increase views by <strong>300%</strong> and reduce selling time by 3x. With VintDress, generate professional photos on AI mannequin in <strong>30 seconds</strong> starting at €0.40/photo.
              </p>
              <Link
                to="/#generateur"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-vinted border-3 border-black font-display font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                TRY VINTDRESS
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 3 - Pricing */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Set the Right Price
          </h2>

          <div className="space-y-6">
            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-vinted" />
                Analyze the Competition
              </h3>
              <p className="font-body text-black leading-relaxed mb-4">
                Before setting your price, search for similar items on Vinted:
              </p>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Same brand, same type of clothing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Filter by "Sold" to see actual selling prices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Adjust based on your item's condition</span>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-4">
                  Negotiation Margin
                </h3>
                <p className="font-body text-black leading-relaxed">
                  Add <strong>10-15%</strong> to your minimum acceptable price. Vinted buyers love to negotiate, and you can accept their offers without losing money.
                </p>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-4">
                  Psychological Pricing
                </h3>
                <p className="font-body text-black leading-relaxed">
                  Use prices like <strong>€9.90</strong> instead of €10, or <strong>€14.50</strong> instead of €15. These small differences increase conversions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - Bundles */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Selling Bundles: The Winning Strategy
          </h2>

          <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
              <Package className="w-6 h-6 text-vinted" />
              How to Create an Attractive Bundle
            </h3>
            <p className="font-body text-black leading-relaxed mb-4">
              Bundles allow you to sell more items in a single transaction:
            </p>
            <ul className="space-y-3 font-body text-black">
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Coherence</strong>: Group similar items (3 t-shirts, complete outfit...)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Attractive discount</strong>: Offer 15-20% less than the sum of separate items</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Group photos</strong>: Show all items together + individual photos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Shared shipping costs</strong>: The buyer saves on shipping fees</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 5 - Best sellers */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            What Sells Best on Vinted
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-vinted" />
                Top Searched Brands
              </h3>
              <ul className="space-y-2 font-body text-black">
                <li>• Zara, H&M, Mango (fast fashion)</li>
                <li>• Nike, Adidas, Puma (sportswear)</li>
                <li>• Levi's, Diesel (jeans)</li>
                <li>• The North Face, Patagonia (outdoor)</li>
                <li>• Sézane, Rouje (trendy brands)</li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <Percent className="w-6 h-6 text-vinted" />
                Profitable Categories
              </h3>
              <ul className="space-y-2 font-body text-black">
                <li>• Children's clothes (high turnover)</li>
                <li>• Vintage and unique pieces</li>
                <li>• New items with tags</li>
                <li>• Designer shoes</li>
                <li>• Bags and accessories</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6 - Problems */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Why Your Items Aren't Selling
          </h2>

          <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-vinted flex-shrink-0 mt-1" />
              <p className="font-display font-bold text-black">
                Diagnostic checklist:
              </p>
            </div>
            <ul className="space-y-3 font-body text-black">
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Poor photos</strong>: Blurry, dark, cluttered background → Redo them or use VintDress</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Price too high</strong>: Compare with sold items, not listed ones</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Incomplete description</strong>: Add measurements, actual condition, flaws</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Inactive listing</strong>: Refresh regularly (change the price by €0.10)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>No response to messages</strong>: Reply quickly, buyers don't wait</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Final CTA */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-12 text-center">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
            Ready to Boost Your Vinted Sales?
          </h3>
          <p className="font-body text-white mb-6">
            Professional photos = more views = more sales. Try VintDress and see the difference!
          </p>
          <Link
            to="/#generateur"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-3 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            CREATE MY PHOTOS
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                How do I sell on Vinted for the first time?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Create a free account, take great photos of your item, write a detailed title and description, set a competitive price and publish. It's that simple!
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Does Vinted take a commission on sales?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                No! Vinted is 100% free for sellers. The platform earns through buyer protection (5% + €0.70) paid by the buyer.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                How can I sell faster on Vinted?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Use quality photos (ideally on a mannequin), set a competitive price, respond quickly to messages, and regularly refresh your listings by slightly changing the price.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                How do I create a bundle on Vinted?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Create a new listing, select "Bundle" as the item type, add photos of all items together and individually, and offer an advantageous price compared to the sum of separate items.
              </div>
            </details>
          </div>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Related Articles
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { slug: "how-to-take-vinted-photos", title: "How to Take Great Vinted Photos" },
              { slug: "optimize-vinted-sales", title: "Boost Your Vinted Sales" },
              { slug: "worn-photos-vinted", title: "Worn Photos on Vinted" }
            ].map((article) => (
              <Link
                key={article.slug}
                to={`/en/articles/${article.slug}`}
                className="block bg-pink-pastel border-3 border-black p-4 font-display font-bold text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                <ArrowRight className="w-5 h-5 mb-2 text-vinted" />
                {article.title}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
};

export default HowToSellOnVintedPage;
