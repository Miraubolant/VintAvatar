import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera, FileText, DollarSign, Clock, MessageCircle, CheckCircle2, Zap } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export const FiveTipsSellFasterVintedPage: React.FC = () => {
  useSEO({
    title: "5 Tips to Sell Faster on Vinted | VintDress",
    description: "Discover 5 essential tips to boost your Vinted sales. AI photos, optimal pricing, perfect timing - all our secrets revealed!",
    keywords: "vinted sales, vinted tips, vinted photos, sell faster, AI photos",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image Section */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 h-[400px] lg:h-[500px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=500&fit=crop"
          alt="5 Tips to Sell on Vinted"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-white text-4xl lg:text-6xl mb-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              5 VINTED TIPS
            </h1>
            <p className="font-display font-bold text-mint text-xl lg:text-2xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              Sell Faster and at Better Prices
            </p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 pb-12 lg:pb-20">
        <ArticleNavigation />

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 bg-vinted text-white border-3 border-black font-display font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              TIPS
            </span>
            <span className="font-body text-sm text-gray-600">By VintDress Team</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">November 28, 2025</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">5 min read</span>
          </div>

          <h1 className="font-display font-bold text-4xl lg:text-5xl text-black mb-4">
            5 Tips to Sell Faster on Vinted
          </h1>

          <p className="font-body text-lg text-gray-700 mb-6">
            Discover the secrets to maximize your sales with perfect AI-generated photos.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["Vinted", "Tips", "Sales", "Photos", "AI"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white border-2 border-black text-black font-body text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-vinted border-4 border-black p-6 mb-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-display font-bold text-white text-lg">
            Vinted has become THE essential platform for selling second-hand clothing. But with millions of users, how do you make your listings stand out?
          </p>
        </div>

        {/* Tip 1: Photos */}
        <section className="mb-12">
          <div className="bg-white border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 bg-vinted border-3 border-black flex items-center justify-center flex-shrink-0 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-2xl">1</span>
                  </div>
                  <h2 className="font-display font-bold text-3xl text-black">
                    Photos That Make a Difference
                  </h2>
                </div>
                <p className="font-display font-bold text-lg text-vinted mb-4">
                  Secret #1: The quality of your photos
                </p>
                <p className="font-body text-gray-700 mb-4">
                  Vinted buyers judge with their eyes first. A poor quality photo can scare away potential buyers, even if your item is amazing.
                </p>
              </div>
            </div>

            <div className="bg-mint border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3">
                Our Tips
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Use natural light (near a window)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Avoid blurry or too dark photos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Show the item from multiple angles</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700"><strong>Revolutionary solution:</strong> Use our AI to create ultra-realistic worn photos in 30 seconds!</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tip 2: Title and Description */}
        <section className="mb-12">
          <div className="bg-white border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 bg-pink-pastel border-3 border-black flex items-center justify-center flex-shrink-0 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <FileText className="w-8 h-8 text-black" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-2xl">2</span>
                  </div>
                  <h2 className="font-display font-bold text-3xl text-black">
                    Catchy Title and Detailed Description
                  </h2>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Perfect title */}
              <div className="bg-pink-pastel border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-lg text-black mb-3">
                  The Perfect Title in 3 Steps
                </h3>
                <ol className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-display font-bold text-vinted">1.</span>
                    <span className="font-body text-sm text-gray-700">Brand + Model (if known)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-display font-bold text-vinted">2.</span>
                    <span className="font-body text-sm text-gray-700">Clear size</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-display font-bold text-vinted">3.</span>
                    <span className="font-body text-sm text-gray-700">Precise condition</span>
                  </li>
                </ol>
                <div className="bg-white border-2 border-black p-3 mt-3">
                  <p className="font-body text-xs text-gray-600 mb-1">Example:</p>
                  <p className="font-display font-bold text-sm text-black">
                    "ZARA Black Dress S - Excellent condition - Worn 2x"
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="bg-mint border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-lg text-black mb-3">
                  For the Description
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-gray-700">Fabric material</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-gray-700">Exact measurements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-gray-700">Item history</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-gray-700">Any flaws (transparency = trust)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tip 3: Price */}
        <section className="mb-12">
          <div className="bg-white border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 bg-mint border-3 border-black flex items-center justify-center flex-shrink-0 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <DollarSign className="w-8 h-8 text-black" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-2xl">3</span>
                  </div>
                  <h2 className="font-display font-bold text-3xl text-black">
                    Strategic Pricing
                  </h2>
                </div>
              </div>
            </div>

            <div className="bg-vinted border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-4">
              <h3 className="font-display font-bold text-xl text-white mb-2">
                The Golden Rule
              </h3>
              <p className="font-body text-white">
                Start with a price slightly above what you really want. This gives you negotiating room.
              </p>
            </div>

            <div className="bg-pink-pastel border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                Psychological Trick
              </h3>
              <p className="font-body text-gray-700">
                Use prices ending in <strong>9</strong> ($19 instead of $20) - it really works!
              </p>
              <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="bg-white border-2 border-black p-3 text-center">
                  <p className="font-body text-xs text-gray-600">Less attractive</p>
                  <p className="font-display font-bold text-2xl text-gray-500 line-through">$20</p>
                </div>
                <div className="bg-white border-2 border-black p-3 text-center">
                  <p className="font-body text-xs text-gray-600">More attractive</p>
                  <p className="font-display font-bold text-2xl text-vinted">$19</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tip 4: Timing */}
        <section className="mb-12">
          <div className="bg-white border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 bg-pink-pastel border-3 border-black flex items-center justify-center flex-shrink-0 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <Clock className="w-8 h-8 text-black" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-2xl">4</span>
                  </div>
                  <h2 className="font-display font-bold text-3xl text-black">
                    Optimal Posting Time
                  </h2>
                </div>
              </div>
            </div>

            <div className="bg-mint border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                The Best Times
              </h3>
              <div className="space-y-3">
                <div className="bg-white border-2 border-black p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center">
                      <span className="font-display font-bold text-white text-sm">1</span>
                    </div>
                    <p className="font-display font-bold text-black">Sunday evening (6pm-8pm)</p>
                  </div>
                  <p className="font-body text-sm text-gray-600">Preparing for the week</p>
                </div>

                <div className="bg-white border-2 border-black p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center">
                      <span className="font-display font-bold text-white text-sm">2</span>
                    </div>
                    <p className="font-display font-bold text-black">Wednesday evening</p>
                  </div>
                  <p className="font-body text-sm text-gray-600">Mid-week, shopping motivation</p>
                </div>

                <div className="bg-white border-2 border-black p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center">
                      <span className="font-display font-bold text-white text-sm">3</span>
                    </div>
                    <p className="font-display font-bold text-black">Friday afternoon</p>
                  </div>
                  <p className="font-body text-sm text-gray-600">Preparing for the weekend</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tip 5: Responsiveness */}
        <section className="mb-12">
          <div className="bg-white border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 bg-vinted border-3 border-black flex items-center justify-center flex-shrink-0 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-2xl">5</span>
                  </div>
                  <h2 className="font-display font-bold text-3xl text-black">
                    Responsiveness and Customer Service
                  </h2>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-vinted border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-lg text-white mb-3">
                  Respond Quickly
                </h3>
                <p className="font-body text-white text-sm">
                  Vinted buyers are impatient. A response within the hour can make the difference.
                </p>
              </div>

              <div className="bg-mint border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-lg text-black mb-3">
                  Be Flexible
                </h3>
                <p className="font-body text-gray-700 text-sm">
                  Price, bundled shipping, deadlines... Negotiation is part of the game!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-2xl text-white mb-4">
              Conclusion
            </h2>
            <p className="font-body text-white mb-4">
              With these 5 tips, you should see your sales take off! And don't forget: professional quality photos can increase your sales by <strong>+300%</strong>.
            </p>
            <div className="bg-white border-3 border-black p-4">
              <p className="font-display font-bold text-vinted text-center text-lg">
                That's where our AI comes in...
              </p>
            </div>
          </div>
        </section>

        {/* Visual Summary */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Summary of the 5 Tips
          </h2>
          <div className="grid md:grid-cols-5 gap-3">
            <div className="bg-white border-3 border-black p-4 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Camera className="w-8 h-8 text-vinted mx-auto mb-2" />
              <p className="font-display font-bold text-sm text-black">AI Photos</p>
            </div>
            <div className="bg-white border-3 border-black p-4 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <FileText className="w-8 h-8 text-vinted mx-auto mb-2" />
              <p className="font-display font-bold text-sm text-black">Title + Description</p>
            </div>
            <div className="bg-white border-3 border-black p-4 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <DollarSign className="w-8 h-8 text-vinted mx-auto mb-2" />
              <p className="font-display font-bold text-sm text-black">Price in 9</p>
            </div>
            <div className="bg-white border-3 border-black p-4 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Clock className="w-8 h-8 text-vinted mx-auto mb-2" />
              <p className="font-display font-bold text-sm text-black">Good Timing</p>
            </div>
            <div className="bg-white border-3 border-black p-4 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <MessageCircle className="w-8 h-8 text-vinted mx-auto mb-2" />
              <p className="font-display font-bold text-sm text-black">Responsiveness</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {/* FAQ 1 */}
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>What is the best time to post on Vinted?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  The best time slots are Sunday evening (6pm-8pm), Wednesday evening and Friday afternoon.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>How to set the right price on Vinted?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Analyze 5 similar sold items, position yourself 10-20% below average and use psychological prices ($19 instead of $20).
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>Do AI photos really increase sales?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Yes, our users see +300% more views and sales 3 to 5 times faster with AI-generated photos.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              Ready to Transform Your Sales?
            </h2>
            <p className="font-body text-white mb-6 max-w-2xl mx-auto">
              Try our AI generator now and boost your sales by +300%!
            </p>
            <Link
              to="/#generator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-4 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              TRY AI NOW
              <Zap className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="font-display font-bold text-2xl text-black mb-6">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              to="/en/articles/complete-guide-vinted-photos-2025"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">Complete Guide Vinted Photos 2025</h3>
              <p className="font-body text-sm text-gray-600">All the techniques for photos that sell.</p>
            </Link>
            <Link
              to="/en/articles/vinted-sales-strategy-2025"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">Vinted Sales Strategy 2025</h3>
              <p className="font-body text-sm text-gray-600">The complete strategy to dominate Vinted.</p>
            </Link>
            <Link
              to="/en/articles/vinted-algorithm-visibility-2025"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">Vinted Algorithm Visibility</h3>
              <p className="font-body text-sm text-gray-600">Understand the algorithm to maximize your visibility.</p>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default FiveTipsSellFasterVintedPage;
