import { Link } from 'react-router-dom';
import { useSEO } from '../../../hooks/useSEO';
import { ArrowLeft, AlertTriangle, Camera, Tag, FileText, MessageSquare, Images, Clock, Search, TrendingUp, User, CheckCircle2, XCircle } from 'lucide-react';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export default function SalesMistakesVintedPage() {
  useSEO({
    title: "10 Mistakes Killing Your Vinted Sales (and How to Fix Them) | Complete Guide",
    description: "Discover the most common mistakes that make buyers run away and learn how to fix them to boost your sales!",
    keywords: "vinted mistakes, why not selling on vinted, improve vinted sales, vinted tips, boost vinted",
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="w-full h-[400px] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop"
          alt="Vinted mistakes to avoid"
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
            <span className="bg-pink-pastel px-4 py-2 border-2 border-black font-space-grotesk font-semibold">
              Tips
            </span>
            <span className="font-space-grotesk">November 25, 2025</span>
            <span className="font-space-grotesk">9 min read</span>
            <span className="font-space-grotesk font-semibold">By Thomas Bernard</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-space-grotesk font-bold mb-6 leading-tight">
            10 Mistakes Killing Your Vinted Sales (and How to Fix Them)
          </h1>

          <p className="text-xl text-gray-700 mb-8">
            You post items but they don't sell? You're not alone. After analyzing thousands of Vinted profiles, here are the 10 fatal mistakes and how to fix them.
          </p>

          {/* Mistake #1 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                1
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <Camera className="w-8 h-8" />
                  Poor Quality Photos
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                The Problem
              </h3>
              <p className="mb-4">
                This is THE main cause of failure on Vinted. A blurry, dark or poorly framed photo = ignored item.
              </p>
              <div className="bg-white border-2 border-red-500 p-4">
                <p className="font-space-grotesk font-bold mb-2">Shocking stats:</p>
                <ul className="space-y-1">
                  <li>• 78% of buyers judge on the first photo</li>
                  <li>• Blurry photos: -85% clicks</li>
                  <li>• Poor lighting: -70% conversions</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                The Solution
              </h3>
              <p className="font-semibold mb-2">The game-changer: our AI modeled photos</p>
              <ul className="space-y-1 mb-3">
                <li>• Professional quality guaranteed</li>
                <li>• Perfect studio lighting</li>
                <li>• Clothing showcased on a mannequin</li>
              </ul>
              <p className="font-space-grotesk font-bold text-green-700">
                Result: +300% views on average!
              </p>
            </div>
          </div>

          {/* Mistake #2 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                2
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8" />
                  Clothing on Basic Hanger
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                The Problem
              </h3>
              <p className="mb-4">
                Clothing on a hanger is... dead. The buyer can't imagine how it fits, how it would look on them.
              </p>
              <div className="bg-white border-2 border-red-500 p-4">
                <p className="font-space-grotesk font-bold mb-2">Comparison:</p>
                <ul className="space-y-1">
                  <li>• Hanger photo: 2% conversion rate</li>
                  <li>• Worn photo: 12% conversion rate</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                The Solution
              </h3>
              <p>
                Use our AI to transform every hanger photo into a stunning worn photo. Buyers instantly visualize the clothing on themselves.
              </p>
            </div>
          </div>

          {/* Mistake #3 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                3
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <Tag className="w-8 h-8" />
                  Unrealistic Prices
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                The Problem
              </h3>
              <p><strong>Too expensive:</strong> Nobody buys, even with negotiation</p>
              <p><strong>Too cheap:</strong> It looks "suspicious" or "hidden defect"</p>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                The Solution
              </h3>
              <p className="font-semibold mb-2">The 5 sold items method:</p>
              <ol className="space-y-1 mb-3">
                <li>1. Search for 5 similar SOLD items (not for sale)</li>
                <li>2. Calculate the average price</li>
                <li>3. Position yourself within this range</li>
                <li>4. Adjust based on condition and brand</li>
              </ol>
              <p className="font-space-grotesk font-bold text-green-700">
                Psychological tip: $19 converts better than $20
              </p>
            </div>
          </div>

          {/* Mistake #4 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                4
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <FileText className="w-8 h-8" />
                  Empty or Copied Descriptions
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                The Problem
              </h3>
              <p className="mb-4">
                "Nice top, size M, good condition" = useless description
              </p>
              <div className="bg-white border-2 border-red-500 p-4">
                <p className="font-space-grotesk font-bold mb-2">What the buyer wants to know:</p>
                <ul className="space-y-1">
                  <li>• Actual size and how it fits</li>
                  <li>• Material and feel</li>
                  <li>• Possible defects</li>
                  <li>• Why you're selling it</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                The Solution: Complete description template
              </h3>
              <div className="bg-white border-2 border-green-500 p-4 font-mono text-sm">
                <p>[Type] [Brand] - [Main feature]</p>
                <p className="mt-2">This [item] is [emotional description].</p>
                <p>[Reason for selling]</p>
                <p className="mt-2">Details:</p>
                <p>- Brand: [X]</p>
                <p>- Size: [X] (fits [true to size/small/large])</p>
                <p>- Material: [X]</p>
                <p>- Condition: [X] out of 10</p>
                <p>- Defects: [none / list honestly]</p>
                <p className="mt-2">Flat measurements:</p>
                <p>- Length: X cm</p>
                <p>- Chest circumference: X cm</p>
                <p className="mt-2">Careful shipping within 48h!</p>
              </div>
            </div>
          </div>

          {/* Mistake #5 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                5
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <MessageSquare className="w-8 h-8" />
                  Ignoring Messages
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                The Problem
              </h3>
              <p className="mb-4">
                You reply 3 days later? The buyer has already bought elsewhere.
              </p>
              <div className="bg-white border-2 border-red-500 p-4">
                <p className="font-space-grotesk font-bold mb-2">Timing matters:</p>
                <ul className="space-y-1">
                  <li>• Response &lt; 1h: 80% conversion</li>
                  <li>• Response 1-24h: 40% conversion</li>
                  <li>• Response &gt; 24h: 10% conversion</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                The Solution
              </h3>
              <ul className="space-y-2">
                <li>• Enable Vinted notifications</li>
                <li>• Reply even "I'll check and get back to you!"</li>
                <li>• Prepare template responses for frequent questions</li>
              </ul>
            </div>
          </div>

          {/* Mistake #6 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                6
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <Images className="w-8 h-8" />
                  Single Photos
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                The Problem
              </h3>
              <p>
                Only one photo = insufficient information = no purchase
              </p>
              <p className="font-semibold mt-2">Recommended minimum: 4-5 photos</p>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                The Solution: The winning combo
              </h3>
              <ol className="space-y-2">
                <li>1. <strong>AI worn photo</strong>: Attractive overview</li>
                <li>2. <strong>Detail photo</strong>: Fabric, texture, quality</li>
                <li>3. <strong>Label photo</strong>: Brand, size, composition</li>
                <li>4. <strong>Defects photo</strong>: If applicable, transparency</li>
                <li>5. <strong>Additional photo</strong>: Another angle or detail</li>
              </ol>
            </div>
          </div>

          {/* Mistake #7 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                7
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <Clock className="w-8 h-8" />
                  Bad Publishing Timing
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                The Problem
              </h3>
              <p>
                Publishing at 3 AM or during vacations = buried item
              </p>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                The Solution: Best times for 2025
              </h3>
              <ul className="space-y-2 mb-4">
                <li>• <strong>Sunday 6pm-10pm</strong>: Week preparation</li>
                <li>• <strong>Tuesday/Wednesday 12pm-2pm</strong>: Lunch break shopping</li>
                <li>• <strong>Thursday 8pm-10pm</strong>: End of week approaching</li>
              </ul>
              <p className="font-semibold text-red-700">To avoid:</p>
              <ul className="space-y-1">
                <li>• Friday evening and Saturday (outings)</li>
                <li>• School holidays</li>
                <li>• Public holidays</li>
              </ul>
            </div>
          </div>

          {/* Mistake #8 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                8
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <Search className="w-8 h-8" />
                  Ignoring Vinted SEO
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                The Problem
              </h3>
              <p>
                Title "Black top" = unfindable in searches
              </p>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                The Solution: Optimize your title
              </h3>
              <div className="bg-white border-2 border-green-500 p-4 font-mono text-sm mb-4">
                <p>[Brand] [Type] [Feature] [Size] [Condition]</p>
                <p className="mt-2">Example: ZARA Lace Top Black M New</p>
              </div>
              <p className="font-semibold mb-2">Strategic keywords:</p>
              <ul className="space-y-1">
                <li>• Include full brand name</li>
                <li>• Use synonyms (top, shirt, blouse)</li>
                <li>• Add trends (cottagecore, Y2K, minimalist)</li>
              </ul>
            </div>
          </div>

          {/* Mistake #9 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                9
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <TrendingUp className="w-8 h-8" />
                  No Strategic Boost
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                The Problem
              </h3>
              <p>
                Your items are buried under thousands of others
              </p>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                The Solution: Smart boost strategy
              </h3>
              <ul className="space-y-2 mb-3">
                <li>• Boost your best pieces on Sunday evening</li>
                <li>• Re-publish items with no views after 2 weeks</li>
                <li>• Use daily free boosts</li>
              </ul>
              <p className="font-space-grotesk font-bold text-green-700">
                Synergy with AI photos: Boost items with AI worn photos as PRIORITY - best ROI!
              </p>
            </div>
          </div>

          {/* Mistake #10 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                10
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <User className="w-8 h-8" />
                  Neglected Profile
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                The Problem
              </h3>
              <p className="mb-4">
                Profile without photo, without description = zero trust
              </p>
              <div className="bg-white border-2 border-red-500 p-4">
                <p className="font-space-grotesk font-bold mb-2">Profile impact:</p>
                <ul className="space-y-1">
                  <li>• Complete profile: +90% buyer trust</li>
                  <li>• Visible reviews: +75% conversion</li>
                  <li>• Professional description: +50% followers</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                The Solution: Perfect profile checklist
              </h3>
              <ul className="space-y-2">
                <li>• Clear and friendly profile photo</li>
                <li>• 2-3 line description (style, specialty, commitment)</li>
                <li>• Response to received reviews</li>
                <li>• Regular posting</li>
              </ul>
            </div>
          </div>

          {/* 48h Action Plan */}
          <div className="bg-vinted border-4 border-black p-8 mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold text-white mb-6">
              Action Plan: Fix in 48h
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-4">
                  Day 1 (2h)
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-black mt-1 flex-shrink-0"></div>
                    <span>Redo your 5 worst photos with our AI</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-black mt-1 flex-shrink-0"></div>
                    <span>Fix unrealistic prices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-black mt-1 flex-shrink-0"></div>
                    <span>Enable notifications</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-4">
                  Day 2 (2h)
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-black mt-1 flex-shrink-0"></div>
                    <span>Rewrite your 5 worst descriptions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-black mt-1 flex-shrink-0"></div>
                    <span>Optimize your profile</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-black mt-1 flex-shrink-0"></div>
                    <span>Plan your next publications</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-200 border-3 border-black p-6 mt-6">
              <h3 className="font-space-grotesk font-bold text-xl mb-3">
                Expected Results
              </h3>
              <p className="mb-2">By fixing these mistakes:</p>
              <ul className="space-y-1 font-semibold">
                <li>• +200% views minimum</li>
                <li>• +150% messages</li>
                <li>• Sales multiplied by 2 to 3</li>
              </ul>
            </div>
          </div>

          {/* Summary Table */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              The Summary
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-4 border-black">
                <thead>
                  <tr className="bg-pink-pastel border-b-4 border-black">
                    <th className="border-r-3 border-black p-4 text-left font-space-grotesk font-bold">
                      Mistake
                    </th>
                    <th className="border-r-3 border-black p-4 text-left font-space-grotesk font-bold">
                      Impact
                    </th>
                    <th className="p-4 text-left font-space-grotesk font-bold">
                      Quick Solution
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4">Blurry photos</td>
                    <td className="border-r-2 border-black p-4">-85% clicks</td>
                    <td className="p-4 font-semibold">AI worn photos</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4">Clothing on hanger</td>
                    <td className="border-r-2 border-black p-4">-80% conversion</td>
                    <td className="p-4 font-semibold">AI worn photos</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4">Poorly calibrated prices</td>
                    <td className="border-r-2 border-black p-4">No sales</td>
                    <td className="p-4 font-semibold">5 sold method</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4">Empty descriptions</td>
                    <td className="border-r-2 border-black p-4">Buyer distrust</td>
                    <td className="p-4 font-semibold">Complete template</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4">Slow responses</td>
                    <td className="border-r-2 border-black p-4">-90% conversion</td>
                    <td className="p-4 font-semibold">Notifications ON</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4">Single photo</td>
                    <td className="border-r-2 border-black p-4">Lack of info</td>
                    <td className="p-4 font-semibold">4-5 photos minimum</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4">Bad timing</td>
                    <td className="border-r-2 border-black p-4">Buried item</td>
                    <td className="p-4 font-semibold">Sunday evening</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4">No SEO</td>
                    <td className="border-r-2 border-black p-4">Unfindable</td>
                    <td className="p-4 font-semibold">Optimized title</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4">No boost</td>
                    <td className="border-r-2 border-black p-4">Buried</td>
                    <td className="p-4 font-semibold">Strategic boost</td>
                  </tr>
                  <tr>
                    <td className="border-r-2 border-black p-4">Empty profile</td>
                    <td className="border-r-2 border-black p-4">Zero trust</td>
                    <td className="p-4 font-semibold">Complete profile</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-mint border-4 border-black p-8 mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-4">
              Conclusion
            </h2>
            <p className="text-lg mb-4">
              These 10 mistakes are avoidable. The good news? Fixing them is simple and the results are immediate.
            </p>
            <p className="text-lg font-semibold mb-4">
              Mistake #1 to fix as a priority: Your photos. With our AI, you instantly transform average photos into photos that sell.
            </p>
            <Link
              to="/en"
              className="inline-block bg-vinted text-white px-8 py-4 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all font-space-grotesk font-bold text-lg"
            >
              Improve My Photos Now
            </Link>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {["Mistakes", "Tips", "Vinted", "Optimization", "Sales"].map((tag) => (
              <span
                key={tag}
                className="bg-pink-pastel px-4 py-2 border-2 border-black font-space-grotesk font-semibold text-sm"
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
              to="/en/articles/how-to-take-good-vinted-photos"
              className="border-3 border-black p-4 hover:bg-pink-pastel transition-colors"
            >
              <h3 className="font-space-grotesk font-bold mb-2">
                How to Take Good Photos for Vinted
              </h3>
              <p className="text-sm text-gray-600">
                Complete guide for photos that sell
              </p>
            </Link>
            <Link
              to="/en/articles/vinted-sales-strategy-2025"
              className="border-3 border-black p-4 hover:bg-pink-pastel transition-colors"
            >
              <h3 className="font-space-grotesk font-bold mb-2">
                Vinted Sales Strategy 2025
              </h3>
              <p className="text-sm text-gray-600">
                The best techniques to maximize your sales
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
