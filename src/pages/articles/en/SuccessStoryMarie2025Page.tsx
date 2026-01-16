import { Link } from 'react-router-dom';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { TrendingUp, Calendar, DollarSign, Star, Target, Smartphone, Package, CheckCircle2, XCircle, Lightbulb, Award } from 'lucide-react';

export default function SuccessStoryMarie2025Page() {
  useSEO({
    title: "Success Story: Marie Earns $3,300/Month With Vinted | Complete Testimonial",
    description: "Marie earns $3,300/month on Vinted thanks to AI photos! Discover her complete method and success secrets.",
    keywords: "vinted success story, make money vinted, vinted business, AI photos vinted, marie vinted avatar, vinted testimonial",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image */}
      <div className="w-full h-[400px] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=400&fit=crop"
          alt="Success Story Marie"
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
            <span className="font-space-grotesk">November 18, 2025</span>
            <span className="font-space-grotesk">12 min read</span>
            <span className="font-space-grotesk font-semibold">By VintDress Team</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-space-grotesk font-bold mb-6 leading-tight">
            Success Story: Marie Earns $3,300/Month With Vinted
          </h1>

          <p className="text-xl text-gray-700 mb-8">
            Meet Marie, 28, who revolutionized her life with Vinted! From casual seller to fashion entrepreneur generating $3,300 per month, discover her inspiring journey.
          </p>

          {/* Stats Hero */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            <div className="bg-vinted text-white border-3 border-black p-6 text-center">
              <DollarSign className="w-8 h-8 mx-auto mb-2" />
              <div className="text-3xl font-space-grotesk font-bold mb-1">$3,300</div>
              <div className="text-sm">per month</div>
            </div>
            <div className="bg-mint border-3 border-black p-6 text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2" />
              <div className="text-3xl font-space-grotesk font-bold mb-1">120</div>
              <div className="text-sm">items/month</div>
            </div>
            <div className="bg-pink-pastel border-3 border-black p-6 text-center">
              <Star className="w-8 h-8 mx-auto mb-2" />
              <div className="text-3xl font-space-grotesk font-bold mb-1">5/5</div>
              <div className="text-sm">seller rating</div>
            </div>
            <div className="bg-yellow-200 border-3 border-black p-6 text-center">
              <Award className="w-8 h-8 mx-auto mb-2" />
              <div className="text-3xl font-space-grotesk font-bold mb-1">3400</div>
              <div className="text-sm">followers</div>
            </div>
          </div>

          {/* The Turning Point */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Calendar className="w-8 h-8" />
              The Turning Point: January 2024
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-red-50 border-3 border-red-500 p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  Before: The Struggle
                </h3>
                <ul className="space-y-2">
                  <li>• Part-time employee at a boutique</li>
                  <li>• Salary: $1,320/month</li>
                  <li>• Frustrated passion for fashion</li>
                  <li>• Sporadic Vinted sales ($55/month max)</li>
                </ul>
                <p className="mt-4 font-semibold text-red-700">
                  The problem: Amateur photos, items sitting for months
                </p>
              </div>

              <div className="bg-green-50 border-3 border-green-500 p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  The Revealing Moment
                </h3>
                <p className="italic mb-4">
                  "I discovered VintDress while scrolling on Instagram. At first, I was skeptical: AI photos for my clothes? But I'd tried everything..."
                </p>
                <div className="bg-white border-2 border-green-500 p-4">
                  <p className="font-semibold mb-2">First test: Zara Dress</p>
                  <p className="text-sm">• Before AI: 12 views in 6 months, 0 sales</p>
                  <p className="text-sm">• After AI: Sold in 48h at full price!</p>
                </div>
                <p className="mt-4 italic font-semibold text-green-700">
                  "That's when I realized I'd found the solution!"
                </p>
              </div>
            </div>
          </div>

          {/* The Transformation */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              The Transformation: February-June 2024
            </h2>

            <div className="space-y-6">
              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-4">
                  Months 1-2: Learning Phase
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold mb-2">Strategy:</p>
                    <ul className="space-y-1 text-sm">
                      <li>1. Test on 20 items from her closet</li>
                      <li>2. AI photos for all dormant items</li>
                      <li>3. Reactivation of 50 old listings</li>
                    </ul>
                  </div>
                  <div className="bg-mint border-2 border-black p-4">
                    <p className="font-semibold mb-2">Results:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• February: $374 in sales</li>
                      <li>• March: $638 in sales</li>
                      <li>• Sales rate: x5!</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-4">
                  Months 3-4: Acceleration
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold mb-2">Actions:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Active sourcing at thrift stores</li>
                      <li>• 2-3h per day dedicated to Vinted</li>
                      <li>• Specialization in French vintage</li>
                    </ul>
                  </div>
                  <div className="bg-pink-pastel border-2 border-black p-4">
                    <p className="font-semibold mb-2">Impressive numbers:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• April: $1,012 in sales</li>
                      <li>• May: $1,375 in sales</li>
                      <li>• Stock: 150 items in rotation</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 italic text-gray-700">
                  "AI photos gave me the confidence to take myself seriously. My items finally looked professional!"
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-4">
                  Months 5-6: Professionalization
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold mb-2">Going pro:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Created dedicated workspace at home</li>
                      <li>• Inventory management system</li>
                      <li>• Top-tier customer relations</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-200 border-2 border-black p-4">
                    <p className="font-semibold mb-2">Performance:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• June: $1,848 in sales</li>
                      <li>• 95% customer satisfaction</li>
                      <li>• Return rate: 0.2%</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Marie's Empire: Today */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Marie's Empire: Today
            </h2>

            <div className="bg-vinted border-4 border-black p-8 mb-6">
              <h3 className="text-2xl font-space-grotesk font-bold text-white mb-6">
                January 2025 Numbers
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border-3 border-black p-4">
                  <p className="font-semibold mb-3">Monthly performance:</p>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Revenue:</span>
                      <span className="font-bold">$4,620</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Net profit:</span>
                      <span className="font-bold text-green-600">$3,300</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Items sold:</span>
                      <span className="font-bold">120/month</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Average basket:</span>
                      <span className="font-bold">$38.50</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white border-3 border-black p-4">
                  <p className="font-semibold mb-3">Impressive statistics:</p>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Average sale time:</span>
                      <span className="font-bold">8 days</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Conversion rate:</span>
                      <span className="font-bold">24%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Seller rating:</span>
                      <span className="font-bold">5/5 ⭐</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Vinted followers:</span>
                      <span className="font-bold">3400</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* M.A.R.I.E Method */}
            <div className="bg-mint border-4 border-black p-8">
              <h3 className="text-2xl font-space-grotesk font-bold mb-6">
                Her Secret: The M.A.R.I.E Method
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-white border-2 border-black w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl">
                    M
                  </div>
                  <div>
                    <p className="font-bold">Targeted Brands</p>
                    <p className="text-sm text-gray-700">Specialize to become an expert</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white border-2 border-black w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl">
                    A
                  </div>
                  <div>
                    <p className="font-bold">AI for all photos</p>
                    <p className="text-sm text-gray-700">Consistency and professionalism</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white border-2 border-black w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl">
                    R
                  </div>
                  <div>
                    <p className="font-bold">Premium customer Relations</p>
                    <p className="text-sm text-gray-700">Differentiation through service</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white border-2 border-black w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl">
                    I
                  </div>
                  <div>
                    <p className="font-bold">Optimized Inventory</p>
                    <p className="text-sm text-gray-700">Fast stock rotation</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white border-2 border-black w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl">
                    E
                  </div>
                  <div>
                    <p className="font-bold">Constant Evolution</p>
                    <p className="text-sm text-gray-700">Continuous test & learn</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Exclusive Interview */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Exclusive Interview with Marie
            </h2>

            <div className="space-y-6">
              <div className="bg-white border-3 border-black p-6">
                <p className="font-space-grotesk font-bold text-lg mb-3">
                  Q: What was your biggest challenge?
                </p>
                <p className="italic text-gray-700">
                  "At first, I was ashamed to use AI. I thought it was 'cheating'. Then I realized it was just a tool, like good lighting or a nice background. What matters is the quality of the garment and customer service!"
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <p className="font-space-grotesk font-bold text-lg mb-3">
                  Q: How much time do you dedicate to it?
                </p>
                <p className="italic text-gray-700">
                  "4-5h per day now, but it's become my passion! In the morning I manage orders and messages, in the afternoon I photograph and list. It's very structured."
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <p className="font-space-grotesk font-bold text-lg mb-3">
                  Q: Your sourcing tips?
                </p>
                <p className="italic text-gray-700">
                  "I specialized in French vintage from the 80s-90s. I know my brands by heart: Kenzo, Thierry Mugler, Claude Montana... I tour thrift stores every week with a precise list."
                </p>
              </div>

              <div className="bg-vinted border-3 border-black p-6">
                <p className="font-space-grotesk font-bold text-lg mb-3 text-white">
                  Q: The impact of AI on your sales?
                </p>
                <p className="italic text-white font-semibold">
                  "Revolutionary! My items with AI photos sell 300% faster and 40% more expensive. Buyers immediately see how the garment fits, they're reassured."
                </p>
              </div>
            </div>
          </div>

          {/* Her Winning Routine */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Calendar className="w-8 h-8" />
              Her Winning Routine
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-pink-pastel border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  Monday: SOURCING DAY
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>8am-12pm</strong>: Thrift store tour</li>
                  <li>• <strong>2pm-4pm</strong>: Sorting and cleaning pieces</li>
                  <li>• <strong>4pm-6pm</strong>: Price research and competition</li>
                </ul>
              </div>

              <div className="bg-mint border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  Tuesday-Wednesday: PRODUCTION
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>9am-12pm</strong>: AI photos and listing</li>
                  <li>• <strong>2pm-5pm</strong>: Order management and customer service</li>
                  <li>• <strong>5pm-6pm</strong>: Community management</li>
                </ul>
              </div>

              <div className="bg-yellow-200 border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  Thursday: STRATEGY
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Performance analysis</li>
                  <li>• Next week planning</li>
                  <li>• New opportunities research</li>
                </ul>
              </div>

              <div className="bg-vinted text-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  Friday: SHIPPING
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Preparing all packages</li>
                  <li>• Post office run</li>
                  <li>• Customer satisfaction tracking</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Her Essential Tools */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Smartphone className="w-8 h-8" />
              Her Essential Tools
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  Technical Setup
                </h3>
                <ul className="space-y-2">
                  <li>• iPhone 13 Pro smartphone</li>
                  <li>• VintDress for AI photos</li>
                  <li>• Excel for inventory management</li>
                  <li>• Premium custom labels</li>
                </ul>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4 flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Organization
                </h3>
                <ul className="space-y-2">
                  <li>• Racks by category/season</li>
                  <li>• Color tag system</li>
                  <li>• Optimized packing space</li>
                  <li>• Quality packaging stock</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mistakes Avoided */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Mistakes She Avoided
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 border-3 border-red-500 p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  Common Beginner Mistakes
                </h3>
                <ul className="space-y-2">
                  <li>• Selling too cheap due to lack of confidence</li>
                  <li>• Blurry or poorly framed photos</li>
                  <li>• Sloppy descriptions</li>
                  <li>• No customer follow-up</li>
                </ul>
              </div>

              <div className="bg-green-50 border-3 border-green-500 p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  What Makes the Difference
                </h3>
                <ul className="space-y-2">
                  <li>• <strong>Fair pricing</strong> and confidence</li>
                  <li>• <strong>Professional photos</strong> systematically</li>
                  <li>• <strong>Detailed and honest</strong> descriptions</li>
                  <li>• <strong>Impeccable</strong> customer service</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Her Secret Tips */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Lightbulb className="w-8 h-8" />
              Her Secret Tips
            </h2>

            <div className="space-y-4">
              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold mb-2">
                  Technique #1: Bundle Strategy
                </h3>
                <p className="italic text-gray-700">
                  "I often offer bundles to my regular customers. A top + a skirt with 15% discount. It increases average basket and builds loyalty!"
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold mb-2">
                  Technique #2: Seasonality
                </h3>
                <p className="italic text-gray-700">
                  "I always prepare for the next season. In January, I'm already buying spring-summer. When everyone's searching, I'm ready!"
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold mb-2">
                  Technique #3: Exclusivity
                </h3>
                <p className="italic text-gray-700">
                  "My best pieces, I offer them first to my VIP community via private message. They feel privileged and buy more!"
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold mb-2">
                  Technique #4: Responsiveness
                </h3>
                <p className="italic text-gray-700">
                  "I respond to messages within an hour. On Vinted, speed makes the difference. A waiting customer is a customer who'll look elsewhere."
                </p>
              </div>
            </div>
          </div>

          {/* Impact on Her Life */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Impact on Her Life
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 border-3 border-green-500 p-6">
                <h3 className="font-space-grotesk font-bold mb-2">
                  Financial Freedom
                </h3>
                <p className="italic text-sm text-gray-700">
                  "For the first time, I no longer have money stress. I earn more than at the boutique, with freedom as a bonus!"
                </p>
              </div>

              <div className="bg-pink-pastel border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold mb-2">
                  Personal Fulfillment
                </h3>
                <p className="italic text-sm text-gray-700">
                  "Every sale is a small victory. I've developed an eye for fashion, I understand trends, it's fascinating!"
                </p>
              </div>

              <div className="bg-mint border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold mb-2">
                  Recognition
                </h3>
                <p className="italic text-sm text-gray-700">
                  "My family didn't understand at first. Now they're proud! My boyfriend says I'm a real entrepreneur."
                </p>
              </div>
            </div>
          </div>

          {/* Her 2025 Projects */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Target className="w-8 h-8" />
              Her 2025 Projects
            </h2>

            <div className="bg-yellow-200 border-4 border-black p-8">
              <h3 className="font-space-grotesk font-bold text-xl mb-4">
                Ambitious Goals
              </h3>
              <ul className="space-y-2 mb-6">
                <li>• <strong>$5,500/month</strong> by end of 2025</li>
                <li>• <strong>Diversification</strong> on other platforms</li>
                <li>• <strong>Training</strong> to help other sellers</li>
                <li>• <strong>Maybe</strong> her own physical store</li>
              </ul>
              <p className="italic text-gray-700">
                "I'm thinking about offering my sourcing services to other sellers. And why not create my own revisited vintage brand?"
              </p>
            </div>
          </div>

          {/* What You Can Learn */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              What You Can Learn from Marie
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  The Fundamentals
                </h3>
                <ol className="space-y-2">
                  <li>1. <strong>Quality</strong> over quantity</li>
                  <li>2. <strong>Consistency</strong> in effort</li>
                  <li>3. <strong>Specialization</strong> over dispersion</li>
                  <li>4. <strong>Premium</strong> customer service</li>
                </ol>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  Essential Tools
                </h3>
                <ul className="space-y-2">
                  <li>• AI photos for pro attitude</li>
                  <li>• Rigorous organization</li>
                  <li>• Careful customer relations</li>
                  <li>• Competitive intelligence</li>
                </ul>
              </div>
            </div>

            <div className="bg-vinted border-3 border-black p-6 mt-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 text-white">
                The Winning Mindset
              </h3>
              <p className="italic text-white font-semibold">
                "Think big but start small. Every sale counts, every customer is important. And above all: dare to use all available tools!"
              </p>
            </div>
          </div>

          {/* Your Turn Now */}
          <div className="bg-mint border-4 border-black p-8 mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Your Turn Now!
            </h2>

            <h3 className="font-space-grotesk font-bold text-xl mb-4">
              If Marie Succeeded, Why Not You?
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <p className="font-semibold mb-2">Success ingredients:</p>
                <ul className="space-y-1">
                  <li>• Passion for fashion ✓</li>
                  <li>• Willingness to learn ✓</li>
                  <li>• Professional tools ✓</li>
                  <li>• Perseverance ✓</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Where to Start?</p>
                <ol className="space-y-1">
                  <li>1. <strong>Test</strong> AI on 10 items</li>
                  <li>2. <strong>Analyze</strong> the results</li>
                  <li>3. <strong>Optimize</strong> and repeat</li>
                  <li>4. <strong>Scale</strong> progressively</li>
                </ol>
              </div>
            </div>

            <p className="italic text-lg mb-6">
              "The hardest part is starting. After that, the results speak for themselves!" - Marie
            </p>

            <Link
              to="/en"
              className="inline-block bg-vinted text-white px-8 py-4 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all font-space-grotesk font-bold text-lg"
            >
              Get Started Now!
            </Link>
          </div>

          {/* Disclaimer */}
          <div className="bg-gray-100 border-2 border-gray-400 p-4 mb-8">
            <p className="text-xs text-gray-600 italic">
              Marie has been using VintDress for over a year. Results not guaranteed, vary depending on personal investment.
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {["Success Story", "Testimonial", "Vinted", "Business", "2025", "Entrepreneur"].map((tag) => (
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
              to="/en/articles/vinted-sales-strategy-2025"
              className="border-3 border-black p-4 hover:bg-mint transition-colors"
            >
              <h3 className="font-space-grotesk font-bold mb-2">
                Vinted Sales Strategy 2025
              </h3>
              <p className="text-sm text-gray-600">
                The best techniques to maximize your sales
              </p>
            </Link>
            <Link
              to="/en/articles/sales-mistakes-vinted"
              className="border-3 border-black p-4 hover:bg-mint transition-colors"
            >
              <h3 className="font-space-grotesk font-bold mb-2">
                10 Mistakes That Kill Your Vinted Sales
              </h3>
              <p className="text-sm text-gray-600">
                Avoid these mistakes to boost your results
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
