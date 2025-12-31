import { Link } from 'react-router-dom';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { TrendingUp, Clock, DollarSign, Star, Eye, MessageSquare, Zap, Heart, ThumbsUp, Lightbulb } from 'lucide-react';

export default function Testimonial300PercentViewsPage() {
  useSEO({
    title: "Testimonial: +300% Views in One Week | VintDress Success Story",
    description: "Discover how Marie tripled her views in one week using VintDress. Complete testimonial with proven results.",
    keywords: "vinted testimonial, success story, increase vinted views, sales transformation, marie laurent",
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="w-full h-[400px] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&h=400&fit=crop"
          alt="Success Story Testimonial"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Article Container */}
      <div className="max-w-4xl mx-auto px-6 pb-12">
        <ArticleNavigation />

        {/* Article Header */}
        <article className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 lg:p-12 mb-12">
          <div className="flex items-center gap-4 text-sm mb-6 flex-wrap">
            <span className="bg-yellow-200 px-4 py-2 border-2 border-black font-space-grotesk font-semibold">
              Success Story
            </span>
            <span className="font-space-grotesk">November 20, 2025</span>
            <span className="font-space-grotesk">8 min read</span>
            <span className="font-space-grotesk font-semibold">By Marie Laurent</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-space-grotesk font-bold mb-6 leading-tight">
            Success Story: How Marie Transformed Her Vinted Business
          </h1>

          <p className="text-xl text-gray-700 mb-8 italic">
            Testimonial collected on March 5, 2025
          </p>

          <p className="text-lg text-gray-700 mb-12">
            Today, we give the floor to Marie Laurent, 28 years old, Parisian and passionate Vinted seller. Her story with VintDress is simply stunning.
          </p>

          {/* Stats Hero */}
          <div className="bg-vinted border-4 border-black p-8 mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold text-white mb-6 text-center">
              Results in One Week
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white border-3 border-black p-6 text-center">
                <TrendingUp className="w-10 h-10 mx-auto mb-3 text-vinted" />
                <div className="text-4xl font-space-grotesk font-bold mb-2">+300%</div>
                <div className="text-sm">average views</div>
              </div>
              <div className="bg-white border-3 border-black p-6 text-center">
                <Eye className="w-10 h-10 mx-auto mb-3 text-vinted" />
                <div className="text-4xl font-space-grotesk font-bold mb-2">67</div>
                <div className="text-sm">views in 48h (vs 8)</div>
              </div>
              <div className="bg-white border-3 border-black p-6 text-center">
                <MessageSquare className="w-10 h-10 mx-auto mb-3 text-vinted" />
                <div className="text-4xl font-space-grotesk font-bold mb-2">12</div>
                <div className="text-sm">messages received</div>
              </div>
            </div>
          </div>

          {/* The Trigger */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              The Trigger
            </h2>

            <div className="bg-pink-pastel border-4 border-black p-8">
              <p className="text-2xl font-space-grotesk font-bold mb-4">
                "I discovered VintDress by chance on Instagram"
              </p>
              <p className="text-lg italic text-gray-700">
                Marie tells us: "I had a wardrobe full of clothes I couldn't sell. My photos were okay, but nothing exceptional. When I saw the possible results with AI, I wanted to try it."
              </p>
            </div>
          </div>

          {/* Before VintDress */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Before VintDress: The Struggle
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-red-50 border-3 border-red-500 p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  The numbers speak for themselves:
                </h3>
                <ul className="space-y-2">
                  <li>Average of 12 views per item</li>
                  <li>Average selling time: 3 months</li>
                  <li>Selling price often negotiated down</li>
                  <li>Growing frustration</li>
                </ul>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  Marie testifies:
                </h3>
                <p className="italic text-gray-700">
                  "I spent hours trying to take good photos. Between finding the light, positioning the item, retaking it 10 times... It was discouraging. Some beautiful clothes remained unsold just because of the photos."
                </p>
              </div>
            </div>
          </div>

          {/* The Game-Changing Test */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Zap className="w-8 h-8 text-yellow-500" />
              The Game-Changing Test
            </h2>

            <div className="bg-mint border-4 border-black p-8">
              <h3 className="text-2xl font-space-grotesk font-bold mb-4">
                First try: A black Zara dress
              </h3>
              <p className="mb-6">
                Marie decides to test VintDress on a black Zara dress she hadn't been able to sell for 2 months.
              </p>

              <h4 className="font-space-grotesk font-bold text-xl mb-4">
                Results in 48h:
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white border-3 border-black p-4 text-center">
                  <div className="text-3xl mb-2">🚀</div>
                  <div className="font-bold text-2xl">67 views</div>
                  <div className="text-sm text-gray-600">(vs 8 with the old photo)</div>
                </div>
                <div className="bg-white border-3 border-black p-4 text-center">
                  <div className="text-3xl mb-2">💬</div>
                  <div className="font-bold text-2xl">12 messages</div>
                  <div className="text-sm text-gray-600">from interested people</div>
                </div>
                <div className="bg-white border-3 border-black p-4 text-center">
                  <div className="text-3xl mb-2">💰</div>
                  <div className="font-bold text-2xl">Sold</div>
                  <div className="text-sm text-gray-600">at asking price!</div>
                </div>
              </div>

              <p className="mt-6 text-lg italic font-semibold text-center">
                "I couldn't believe it! In 48h, this dress that nobody was looking at had become the most requested of my listings."
              </p>
            </div>
          </div>

          {/* The Complete Transformation */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              The Complete Transformation
            </h2>

            <p className="text-lg mb-6">
              <strong>Week 1 with VintDress:</strong> Marie decides to redo all her most important photos.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-4 border-black">
                <thead>
                  <tr className="bg-vinted text-white border-b-4 border-black">
                    <th className="border-r-3 border-black p-4 text-left font-space-grotesk font-bold">
                      Item
                    </th>
                    <th className="border-r-3 border-black p-4 text-center font-space-grotesk font-bold">
                      Before (views/week)
                    </th>
                    <th className="border-r-3 border-black p-4 text-center font-space-grotesk font-bold">
                      After (views/week)
                    </th>
                    <th className="p-4 text-center font-space-grotesk font-bold">
                      Improvement
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4 font-semibold">Zara Dress</td>
                    <td className="border-r-2 border-black p-4 text-center">2 views</td>
                    <td className="border-r-2 border-black p-4 text-center font-bold text-green-600">67 views</td>
                    <td className="p-4 text-center font-bold text-vinted">+3250%</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4 font-semibold">Levi's Jeans</td>
                    <td className="border-r-2 border-black p-4 text-center">5 views</td>
                    <td className="border-r-2 border-black p-4 text-center font-bold text-green-600">43 views</td>
                    <td className="p-4 text-center font-bold text-vinted">+760%</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4 font-semibold">Vintage Blazer</td>
                    <td className="border-r-2 border-black p-4 text-center">1 view</td>
                    <td className="border-r-2 border-black p-4 text-center font-bold text-green-600">38 views</td>
                    <td className="p-4 text-center font-bold text-vinted">+3700%</td>
                  </tr>
                  <tr>
                    <td className="border-r-2 border-black p-4 font-semibold">Nike Sneakers</td>
                    <td className="border-r-2 border-black p-4 text-center">8 views</td>
                    <td className="border-r-2 border-black p-4 text-center font-bold text-green-600">52 views</td>
                    <td className="p-4 text-center font-bold text-vinted">+550%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-200 border-4 border-black p-6 text-center">
              <p className="text-2xl font-space-grotesk font-bold">
                Overall average: +300% views!
              </p>
            </div>
          </div>

          {/* The Unexpected Benefits */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              The Unexpected Benefits
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-3 border-black p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-8 h-8 text-vinted" />
                  <h3 className="font-space-grotesk font-bold text-xl">
                    1. Huge Time Savings
                  </h3>
                </div>
                <p className="italic text-gray-700">
                  "No more need to plan my photo sessions. In 30 seconds, I have a perfect photo. I can list my items in real time!"
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <div className="flex items-center gap-3 mb-3">
                  <ThumbsUp className="w-8 h-8 text-vinted" />
                  <h3 className="font-space-grotesk font-bold text-xl">
                    2. Restored Confidence
                  </h3>
                </div>
                <p className="italic text-gray-700">
                  "Now, I know my items will be well presented. I don't hesitate to list them anymore."
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <div className="flex items-center gap-3 mb-3">
                  <DollarSign className="w-8 h-8 text-vinted" />
                  <h3 className="font-space-grotesk font-bold text-xl">
                    3. Respected Prices
                  </h3>
                </div>
                <p className="italic text-gray-700">
                  "With professional photos, people negotiate less. They see the quality and accept the price."
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="w-8 h-8 text-vinted" />
                  <h3 className="font-space-grotesk font-bold text-xl">
                    4. Renewed Pleasure
                  </h3>
                </div>
                <p className="italic text-gray-700">
                  "Selling on Vinted has become fun again! Seeing my items with these photos, it's like having my own boutique."
                </p>
              </div>
            </div>
          </div>

          {/* The Numbers After 1 Month */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              The Numbers After 1 Month
            </h2>

            <div className="bg-vinted border-4 border-black p-8">
              <h3 className="text-2xl font-space-grotesk font-bold text-white mb-6">
                Impressive results:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white border-3 border-black p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="w-6 h-6 text-vinted" />
                    <span className="font-bold text-2xl">+280%</span>
                  </div>
                  <p className="text-sm text-gray-600">average views</p>
                </div>
                <div className="bg-white border-3 border-black p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-6 h-6 text-vinted" />
                    <span className="font-bold text-2xl">÷3</span>
                  </div>
                  <p className="text-sm text-gray-600">Selling time divided by 3</p>
                </div>
                <div className="bg-white border-3 border-black p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <DollarSign className="w-6 h-6 text-vinted" />
                    <span className="font-bold text-2xl">+150%</span>
                  </div>
                  <p className="text-sm text-gray-600">monthly revenue</p>
                </div>
                <div className="bg-white border-3 border-black p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Star className="w-6 h-6 text-vinted" />
                    <span className="font-bold text-2xl">5/5</span>
                  </div>
                  <p className="text-sm text-gray-600">Seller rating (vs 4.2 before)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Marie's Advice */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Lightbulb className="w-8 h-8 text-yellow-500" />
              Marie's Advice for New Users
            </h2>

            <div className="space-y-4">
              <div className="bg-pink-pastel border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-2">
                  1. Start with your best pieces
                </h3>
                <p className="italic">
                  "Test first on your valuable items. The effect will be more visible."
                </p>
              </div>

              <div className="bg-mint border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-2">
                  2. Vary photo styles
                </h3>
                <p className="italic">
                  "The AI offers several styles. Don't hesitate to test to see what works best for each type of item."
                </p>
              </div>

              <div className="bg-yellow-200 border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-2">
                  3. Stay honest
                </h3>
                <p className="italic">
                  "AI photos are beautiful, but keep an honest description of the item's actual condition."
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-2">
                  4. Use old photos as supplements
                </h3>
                <p className="italic">
                  "I keep my detail photos to show texture, labels, etc."
                </p>
              </div>
            </div>
          </div>

          {/* Final Words */}
          <div className="bg-vinted border-4 border-black p-8 mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold text-white mb-6">
              Final Words
            </h2>
            <p className="text-white text-xl mb-6 italic">
              "VintDress didn't just improve my photos, it transformed the way I see online selling. I recommend it with my eyes closed to all Vinted sellers who want to take it to the next level."
            </p>
            <p className="text-white text-lg font-semibold mb-8">
              Her final advice: "Don't wait! Every day without VintDress is lost sales."
            </p>
            <Link
              to="/en"
              className="inline-block bg-white text-vinted px-8 py-4 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all font-space-grotesk font-bold text-lg"
            >
              Try VintDress Now!
            </Link>
          </div>

          {/* Footer Note */}
          <div className="bg-gray-100 border-2 border-gray-400 p-4 mb-8">
            <p className="text-sm text-gray-600 italic">
              Thank you to Marie for this authentic testimonial. If you also have a success story to share, contact us!
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {["Testimonial", "Success Story", "Sales", "Transformation", "Results"].map((tag) => (
              <span
                key={tag}
                className="bg-yellow-200 px-4 py-2 border-2 border-black font-space-grotesk font-semibold text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </article>

        {/* Related Articles */}
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
          <h2 className="text-2xl font-space-grotesk font-bold mb-6">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/en/articles/success-story-marie-2025"
              className="border-3 border-black p-4 hover:bg-yellow-200 transition-colors"
            >
              <h3 className="font-space-grotesk font-bold mb-2">
                Success Story: Marie Earns 3000€/Month
              </h3>
              <p className="text-sm text-gray-600">
                How Marie transformed her passion into a profitable business
              </p>
            </Link>
            <Link
              to="/en/articles/sales-mistakes-vinted"
              className="border-3 border-black p-4 hover:bg-yellow-200 transition-colors"
            >
              <h3 className="font-space-grotesk font-bold mb-2">
                10 Mistakes That Kill Your Vinted Sales
              </h3>
              <p className="text-sm text-gray-600">
                Avoid these mistakes to maximize your results
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
