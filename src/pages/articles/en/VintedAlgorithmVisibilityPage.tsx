import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, XCircle, Clock, TrendingUp, Star, AlertTriangle, Lightbulb, Calendar, MessageCircle } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export const VintedAlgorithmVisibilityPage: React.FC = () => {
  useSEO({
    title: "Vinted Algorithm: How to Maximize Your Visibility in 2025 | VintDress",
    description: "Understand the Vinted algorithm and maximize your visibility. Discover 2025 strategies to appear at the top of searches and sell faster.",
    keywords: "vinted algorithm, vinted visibility, vinted seo, appear first vinted, boost vinted listing, vinted ranking, vinted search optimization",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image Section */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 h-[400px] lg:h-[500px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=500&fit=crop"
          alt="Vinted Algorithm Visibility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-white text-4xl lg:text-6xl mb-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              VINTED ALGORITHM
            </h1>
            <p className="font-display font-bold text-mint text-xl lg:text-2xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              Maximize Your Visibility in 2025
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
              STRATEGY
            </span>
            <span className="font-body text-sm text-gray-600">By VintDress Team</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">December 18, 2025</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">8 min read</span>
          </div>

          <h1 className="font-display font-bold text-4xl lg:text-5xl text-black mb-4">
            Vinted Algorithm: How to Maximize Your Visibility in 2025
          </h1>

          <p className="font-body text-lg text-gray-700 mb-6">
            Understand how the Vinted algorithm works and discover strategies to appear at the top of searches and sell faster.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["Algorithm", "Vinted", "Visibility", "Vinted SEO", "Strategy"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white border-2 border-black text-black font-body text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Introduction Card */}
        <div className="bg-vinted border-4 border-black p-6 mb-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-display font-bold text-white text-lg">
            The Vinted algorithm determines which listings appear first in searches. Understanding how it works is the key to selling faster.
          </p>
        </div>

        {/* The 5 Key Factors */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            The 5 Key Ranking Factors
          </h2>

          <div className="space-y-4">
            {/* Factor 1 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-2xl">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl text-black mb-2">
                    Photo Quality
                  </h3>
                  <p className="font-body text-sm text-gray-700 mb-3">
                    This is factor #1. The algorithm favors listings with:
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-gray-700">Sharp, well-lit photos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-gray-700">Multiple angles of the item</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-gray-700">High resolution images</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-gray-700"><strong>Worn photos (the most impactful criterion)</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Factor 2 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-2xl">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl text-black mb-2">
                    Listing Engagement
                  </h3>
                  <p className="font-body text-sm text-gray-700 mb-3">
                    The more interactions your listing generates, the higher it ranks:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-vinted" />
                      <span className="font-body text-sm text-gray-700">Number of views</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-vinted" />
                      <span className="font-body text-sm text-gray-700">Added to favorites</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-vinted" />
                      <span className="font-body text-sm text-gray-700">Messages received</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-vinted" />
                      <span className="font-body text-sm text-gray-700">Shares</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Factor 3 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-2xl">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl text-black mb-2">
                    Listing Freshness
                  </h3>
                  <p className="font-body text-sm text-gray-700">
                    New listings and recently updated ones get a temporary boost.
                  </p>
                </div>
              </div>
            </div>

            {/* Factor 4 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-2xl">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl text-black mb-2">
                    Seller Reputation
                  </h3>
                  <ul className="space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-vinted mt-1">•</span>
                      <span className="font-body text-sm text-gray-700">Number of positive reviews</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-vinted mt-1">•</span>
                      <span className="font-body text-sm text-gray-700">Message response rate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-vinted mt-1">•</span>
                      <span className="font-body text-sm text-gray-700">Sales history</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-vinted mt-1">•</span>
                      <span className="font-body text-sm text-gray-700">Account age</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Factor 5 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-2xl">5</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl text-black mb-2">
                    Keyword Relevance
                  </h3>
                  <p className="font-body text-sm text-gray-700">
                    The title and description must match what buyers are searching for.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategy 1: Photos */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Strategy 1: Optimize Your Photos for the Algorithm
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* What the algorithm likes */}
            <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                What the Algorithm Likes
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Worn photos on mannequin or person</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Neutral and clean background</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Good lighting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Multiple photos (4-5 minimum)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">High resolution</span>
                </li>
              </ul>
            </div>

            {/* What the algorithm penalizes */}
            <div className="bg-pink-pastel border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                What the Algorithm Penalizes
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Blurry or dark photos</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Only one photo</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Photos with watermarks or text</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Over-compressed images</span>
                </li>
              </ul>
            </div>
          </div>

          {/* VintDress Solution */}
          <div className="bg-vinted border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-white mb-4">
              The Solution: AI Mannequins
            </h3>
            <p className="font-body text-white mb-4">
              Worn photos are the strongest signal for the algorithm. Problem: not everyone has someone to pose.
            </p>
            <p className="font-body text-white mb-4">
              That's where VintDress comes in. Our AI generates ultra-realistic mannequin photos that:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-white border-2 border-black p-3">
                <p className="font-body text-sm text-gray-700">Show the item being worn (strong signal)</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-body text-sm text-gray-700">Are in high resolution</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-body text-sm text-gray-700">Feature professional poses</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-body text-sm text-gray-700">Drastically increase engagement</p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategy 2: Timing */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Strategy 2: Master Publication Timing
          </h2>

          <div className="bg-white border-3 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-body text-gray-700 mb-4">
              The algorithm boosts new listings for 24-48 hours. Take advantage of it!
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Optimal days */}
              <div>
                <h3 className="font-display font-bold text-lg text-black mb-3 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-vinted" />
                  Optimal Days
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-display font-bold text-vinted">•</span>
                    <span className="font-body text-sm text-gray-700"><strong>Sunday</strong>: preparing for the week</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-display font-bold text-vinted">•</span>
                    <span className="font-body text-sm text-gray-700"><strong>Wednesday</strong>: midweek, shopping mood</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-display font-bold text-vinted">•</span>
                    <span className="font-body text-sm text-gray-700"><strong>Friday</strong>: start of weekend</span>
                  </li>
                </ul>
              </div>

              {/* Optimal hours */}
              <div>
                <h3 className="font-display font-bold text-lg text-black mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-vinted" />
                  Optimal Hours
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-display font-bold text-vinted">•</span>
                    <span className="font-body text-sm text-gray-700"><strong>12pm-2pm</strong>: lunch break</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-display font-bold text-vinted">•</span>
                    <span className="font-body text-sm text-gray-700"><strong>6pm-9pm</strong>: after work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-display font-bold text-vinted">•</span>
                    <span className="font-body text-sm text-gray-700"><strong>9pm-11pm</strong>: relaxed browsing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bump Technique */}
          <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-500" />
              The Bump Technique
            </h3>
            <p className="font-body text-gray-700 mb-3">
              Refresh your listings regularly:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-gray-700">Slightly modify the price</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-gray-700">Add or change a photo</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-gray-700">Update the description</span>
              </li>
            </ul>
            <div className="bg-white border-2 border-black p-3 mt-4">
              <p className="font-display font-bold text-black text-sm">
                The algorithm treats this as a "new" listing.
              </p>
            </div>
          </div>
        </section>

        {/* Strategy 3: Titles and Descriptions */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Strategy 3: Optimize Titles and Descriptions
          </h2>

          <div className="bg-white border-3 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4">
              The Perfect Title Structure
            </h3>
            <div className="bg-cream border-2 border-black p-4 mb-4">
              <code className="font-body text-sm text-black">
                [BRAND] [Clothing type] [Size] - [Condition] [Color]
              </code>
            </div>
            <h4 className="font-display font-bold text-sm text-black mb-2">Examples:</h4>
            <ul className="space-y-2">
              <li className="bg-mint border-2 border-black p-3">
                <span className="font-body text-sm text-gray-700">"ZARA Midi Dress M - New with tags Black"</span>
              </li>
              <li className="bg-mint border-2 border-black p-3">
                <span className="font-body text-sm text-gray-700">"NIKE Air Force 1 Size 9 - Very good condition White"</span>
              </li>
              <li className="bg-mint border-2 border-black p-3">
                <span className="font-body text-sm text-gray-700">"H&M Oversized Sweater L - Like new Beige"</span>
              </li>
            </ul>
          </div>

          <div className="bg-pink-pastel border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-3">
              Strategic Keywords
            </h3>
            <p className="font-body text-gray-700 mb-3">
              Include in your description:
            </p>
            <div className="grid sm:grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-vinted" />
                <span className="font-body text-sm text-gray-700">The brand (multiple times naturally)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-vinted" />
                <span className="font-body text-sm text-gray-700">The exact clothing type</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-vinted" />
                <span className="font-body text-sm text-gray-700">The season (summer, winter...)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-vinted" />
                <span className="font-body text-sm text-gray-700">The occasion (evening, casual, office...)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-vinted" />
                <span className="font-body text-sm text-gray-700">Materials (cotton, linen, wool...)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table: VintDress Impact */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            The Impact of AI Photos on the Algorithm
          </h2>

          <div className="overflow-x-auto mb-6">
            <div className="bg-white border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] min-w-[600px]">
              <table className="w-full">
                <thead>
                  <tr className="border-b-3 border-black">
                    <th className="p-4 text-left font-display font-bold text-black border-r-3 border-black bg-cream">Metric</th>
                    <th className="p-4 text-center font-display font-bold text-black border-r-3 border-black">Without VintDress</th>
                    <th className="p-4 text-center font-display font-bold text-black bg-mint">With VintDress</th>
                  </tr>
                </thead>
                <tbody className="font-body text-sm">
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Views per listing</td>
                    <td className="p-4 text-center border-r-3 border-black">50-100</td>
                    <td className="p-4 text-center bg-mint font-semibold text-vinted">200-400</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Favorites added</td>
                    <td className="p-4 text-center border-r-3 border-black">2-5</td>
                    <td className="p-4 text-center bg-mint font-semibold text-vinted">10-20</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Time to sell</td>
                    <td className="p-4 text-center border-r-3 border-black">2-4 weeks</td>
                    <td className="p-4 text-center bg-mint font-semibold text-vinted">3-7 days</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Average position</td>
                    <td className="p-4 text-center border-r-3 border-black">Page 2-3</td>
                    <td className="p-4 text-center bg-mint font-semibold text-vinted">Page 1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-vinted border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-white mb-3">
              Why?
            </h3>
            <p className="font-body text-white mb-3">
              Because professional worn photos:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 text-mint flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-white">Attract more clicks (positive signal)</span>
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-4 h-4 text-mint flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-white">Generate more favorites (positive signal)</span>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="w-4 h-4 text-mint flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-white">Trigger more messages (positive signal)</span>
              </li>
            </ul>
            <div className="bg-white border-2 border-black p-4 mt-4">
              <p className="font-display font-bold text-black">
                The algorithm interprets all these signals as "this listing interests buyers" and ranks it higher.
              </p>
            </div>
          </div>
        </section>

        {/* Mistakes to Avoid */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            5 Mistakes to Avoid with the Algorithm
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-bold text-black">1. Spamming Listings</h3>
              </div>
              <p className="font-body text-sm text-gray-700">
                Posting too many listings at once can be seen as spam.
              </p>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-bold text-black">2. Copy-Pasting Descriptions</h3>
              </div>
              <p className="font-body text-sm text-gray-700">
                Each listing must have a unique description.
              </p>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-bold text-black">3. Unrealistic Prices</h3>
              </div>
              <p className="font-body text-sm text-gray-700">
                Prices that are too low or too high are penalized.
              </p>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-bold text-black">4. Ignoring Messages</h3>
              </div>
              <p className="font-body text-sm text-gray-700">
                A low response rate impacts your ranking.
              </p>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:col-span-2">
              <div className="flex items-start gap-3 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-bold text-black">5. Poor Quality Photos</h3>
              </div>
              <p className="font-body text-sm text-gray-700">
                This is THE most negatively impactful factor.
              </p>
            </div>
          </div>
        </section>

        {/* Action Plan */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Immediate Action Plan
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* This Week */}
            <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                This Week
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-xs">1</span>
                  </div>
                  <span className="font-body text-sm text-gray-700"><strong>Audit your photos</strong>: replace blurry or poorly lit photos</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-xs">2</span>
                  </div>
                  <span className="font-body text-sm text-gray-700"><strong>Create worn photos</strong> with VintDress for your best items</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-xs">3</span>
                  </div>
                  <span className="font-body text-sm text-gray-700"><strong>Optimize 5 titles</strong> with the brand + type + size + condition structure</span>
                </li>
              </ul>
            </div>

            {/* This Month */}
            <div className="bg-pink-pastel border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                This Month
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-xs">1</span>
                  </div>
                  <span className="font-body text-sm text-gray-700"><strong>Set up a schedule</strong> for publishing (3-4 listings/week at the right times)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-xs">2</span>
                  </div>
                  <span className="font-body text-sm text-gray-700"><strong>Reply to all messages</strong> within the hour</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-xs">3</span>
                  </div>
                  <span className="font-body text-sm text-gray-700"><strong>Update your old listings</strong> to "bump" them</span>
                </li>
              </ul>
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
              The Vinted algorithm isn't a mystery. It rewards:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" />
                <span className="font-body text-white">Quality photos (especially worn ones)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" />
                <span className="font-body text-white">Generated engagement</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" />
                <span className="font-body text-white">Listing freshness</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" />
                <span className="font-body text-white">Seller reputation</span>
              </li>
            </ul>
            <div className="bg-white border-3 border-black p-4">
              <p className="font-display font-bold text-black text-center">
                By combining these strategies with professional VintDress photos, you maximize your chances of appearing at the top of searches and selling quickly.
              </p>
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
                <span>How does the Vinted algorithm work?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  The Vinted algorithm ranks listings based on photo quality, generated engagement, listing freshness, seller reputation, and keyword relevance.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>What is the most important factor for the Vinted algorithm?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Photo quality is factor #1. Professional worn photos generate significantly more views and engagement, which are positive signals for the algorithm.
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>How to rank higher in Vinted searches?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Post at the right times (Sunday evening, Wednesday evening), use quality worn photos, respond quickly to messages, and regularly update your listings.
                </p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>Do AI photos really help with the algorithm?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Yes, professional worn photos generated by AI like VintDress increase views and engagement by 3 to 4 times, which directly improves algorithmic ranking.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              Ready to Dominate the Vinted Algorithm?
            </h2>
            <p className="font-body text-white mb-6 max-w-2xl mx-auto">
              Start with your photos using VintDress and maximize your visibility today.
            </p>
            <Link
              to="/#generator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-4 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              OPTIMIZE MY PHOTOS
              <ArrowRight className="w-5 h-5" />
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
              to="/en/articles/5-tips-sell-faster-vinted"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">5 Tips to Sell Faster</h3>
              <p className="font-body text-sm text-gray-600">Optimize your sales with these proven strategies.</p>
            </Link>
            <Link
              to="/en/articles/ai-mannequin-vinted"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">AI Mannequin Vinted</h3>
              <p className="font-body text-sm text-gray-600">Discover how an AI mannequin can transform your photos.</p>
            </Link>
            <Link
              to="/en/articles/complete-guide-vinted-photos-2025"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">Complete Guide Vinted Photos 2025</h3>
              <p className="font-body text-sm text-gray-600">All techniques for photos that sell.</p>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default VintedAlgorithmVisibilityPage;
