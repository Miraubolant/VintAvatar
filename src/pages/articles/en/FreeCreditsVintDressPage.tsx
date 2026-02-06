import { Link } from 'react-router-dom';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { Gift, Users, Share2, CreditCard, Star, CheckCircle, ArrowRight, Sparkles, Heart } from 'lucide-react';

export default function FreeCreditsVintDressPage() {
  useSEO({
    title: "Free Credits VintDress: How to Use Vinted AI for Free | VintDress",
    description: "Discover how to get free credits on VintDress: referral program and gallery sharing. Use AI mannequin for Vinted without paying.",
    keywords: "free vinted ai, free ai mannequin vinted, free credits vintdress, vinted ai referral, free vinted photos ai",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=400&fit=crop"
              alt="Free credits VintDress"
              className="w-full h-[400px] object-cover border-b-4 border-black"
            />
            <div className="p-8 lg:p-12">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-4 py-2 bg-mint border-3 border-black font-space-grotesk font-bold text-sm">
                  TIPS
                </span>
                <span className="text-gray-600 font-semibold">February 6, 2026</span>
                <span className="text-gray-600 font-semibold">5 min read</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-space-grotesk font-bold mb-6 leading-tight">
                Free Credits VintDress: 2 Ways to Use Vinted AI Without Paying
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                VintDress transforms your Vinted photos with AI mannequins. While each generation requires 1 credit, there are 2 proven methods to get free credits and use the service without spending a cent. Here's the complete guide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Credits Are Needed */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 lg:p-12">
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="w-8 h-8" />
              <h2 className="text-3xl font-space-grotesk font-bold">Why Does VintDress Use Credits?</h2>
            </div>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-4">
                VintDress uses powerful <strong>AI models like FLUX Kontext Pro</strong> to generate professional-quality photos. Each generation:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-vinted mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Requires significant computing power</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-vinted mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Costs money in API calls to AI services</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-vinted mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Takes 30-60 seconds to process each image</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700">
                The credit system helps maintain service quality while keeping costs accessible. <strong>Good news:</strong> You can get free credits through 2 simple methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Method 1 - Referral Program */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-mint border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 lg:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-10 h-10" />
              <h2 className="text-3xl font-space-grotesk font-bold">Method 1: Referral Program (+1 Credit Per Friend)</h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              The <strong>referral program</strong> is the best way to get free credits sustainably. For each friend who makes their first purchase via your link, <strong>you both get +1 free credit</strong>.
            </p>

            <h3 className="text-2xl font-space-grotesk font-bold mb-4 flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-600" />
              How to Use the Referral Program
            </h3>
            <div className="space-y-4 mb-8">
              <div className="bg-white border-3 border-black p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center font-space-grotesk font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-space-grotesk font-bold text-lg mb-2">Log In to Your Account</h4>
                    <p className="text-gray-700">
                      Go to your <Link to="/account" className="text-vinted underline font-semibold">VintDress account</Link> and click on the "Affiliation" tab.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center font-space-grotesk font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-space-grotesk font-bold text-lg mb-2">Copy Your Unique Link</h4>
                    <p className="text-gray-700">
                      You'll get a personalized referral link like <code className="bg-gray-100 px-2 py-1 rounded">https://vintdress.com/?ref=ABC123</code>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center font-space-grotesk font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-space-grotesk font-bold text-lg mb-2">Share With Your Friends</h4>
                    <p className="text-gray-700">
                      Share your link on social media, WhatsApp, in Vinted seller groups, or with friends who sell online.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center font-space-grotesk font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-space-grotesk font-bold text-lg mb-2">Your Friend Makes Their First Purchase</h4>
                    <p className="text-gray-700">
                      When they buy their first credit pack or subscription, <strong>you both instantly get +1 free credit</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <h3 className="text-xl font-space-grotesk font-bold mb-3 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-vinted" />
                Tips to Maximize Your Free Credits
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-vinted mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Share your link in <strong>Facebook Vinted seller groups</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-vinted mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Post on TikTok/Instagram with your referral code in bio</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-vinted mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Send directly to friends who sell on Vinted</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-vinted mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Include your link in your Vinted profile description</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Method 2 - Gallery Sharing */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-pink-pastel border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 lg:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Share2 className="w-10 h-10" />
              <h2 className="text-3xl font-space-grotesk font-bold">Method 2: Gallery Sharing (+1 Credit Per Share, Max 2)</h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              The second method is <strong>sharing your AI-generated photos to the public gallery</strong>. For each generation you share, you get <strong>+1 free credit</strong> (maximum 2 shares per account).
            </p>

            <h3 className="text-2xl font-space-grotesk font-bold mb-4 flex items-center gap-2">
              <Heart className="w-6 h-6 text-red-500" />
              How to Share to the Gallery
            </h3>
            <div className="space-y-4 mb-8">
              <div className="bg-white border-3 border-black p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center font-space-grotesk font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-space-grotesk font-bold text-lg mb-2">Generate an AI Photo</h4>
                    <p className="text-gray-700">
                      Upload a clothing photo and create your AI mannequin photo (costs 1 credit).
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center font-space-grotesk font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-space-grotesk font-bold text-lg mb-2">Share to Gallery</h4>
                    <p className="text-gray-700">
                      On the result page, click "Share to Gallery" to make your photo public.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center font-space-grotesk font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-space-grotesk font-bold text-lg mb-2">Get Your Free Credit</h4>
                    <p className="text-gray-700">
                      You instantly receive <strong>+1 free credit</strong> that you can use for a new generation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <h3 className="text-xl font-space-grotesk font-bold mb-3 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                Important Notes
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-vinted mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Maximum <strong>2 shares per account</strong> = 2 free credits maximum</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-vinted mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Shared photos appear in the <Link to="/galerie" className="text-vinted underline font-semibold">public gallery</Link></span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-vinted mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Credits are instantly added to your account</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-vinted mt-1 flex-shrink-0" />
                  <span className="text-gray-700">You can't unshare once published (choose your best photos)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 lg:p-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-2">
              <Gift className="w-8 h-8 text-vinted" />
              Comparison: Which Method to Choose?
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-3 border-black">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="p-4 text-left font-space-grotesk font-bold border-r-3 border-black">Criteria</th>
                    <th className="p-4 text-left font-space-grotesk font-bold border-r-3 border-black">Referral Program</th>
                    <th className="p-4 text-left font-space-grotesk font-bold">Gallery Sharing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t-3 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-gray-50">Credits per action</td>
                    <td className="p-4 border-r-3 border-black">+1 credit</td>
                    <td className="p-4">+1 credit</td>
                  </tr>
                  <tr className="border-t-3 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-gray-50">Maximum limit</td>
                    <td className="p-4 border-r-3 border-black">Unlimited</td>
                    <td className="p-4">2 credits max</td>
                  </tr>
                  <tr className="border-t-3 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-gray-50">Required effort</td>
                    <td className="p-4 border-r-3 border-black">Share link</td>
                    <td className="p-4">Generate photo first</td>
                  </tr>
                  <tr className="border-t-3 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-gray-50">Sustainability</td>
                    <td className="p-4 border-r-3 border-black">Long-term sustainable</td>
                    <td className="p-4">One-time only</td>
                  </tr>
                  <tr className="border-t-3 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-gray-50">Best for</td>
                    <td className="p-4 border-r-3 border-black">Unlimited free credits</td>
                    <td className="p-4">Quick +2 credits boost</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-lg text-gray-700 mt-6">
              <strong>Our recommendation:</strong> Start with gallery sharing for quick +2 credits, then focus on the referral program for unlimited free credits long-term.
            </p>
          </div>
        </div>
      </section>

      {/* Bonus Tips */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-vinted border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 lg:p-12 text-white">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">Bonus: Combine Both Methods</h2>
            <p className="text-lg mb-6">
              The smartest strategy is to <strong>combine both methods</strong> for maximum free credits:
            </p>
            <div className="space-y-4">
              <div className="bg-white/10 border-3 border-white p-6 backdrop-blur-sm">
                <h3 className="font-space-grotesk font-bold text-xl mb-2">Step 1: Share to Gallery (+2 credits)</h3>
                <p>Generate 2 quality photos and share them to the gallery. You get +2 free credits instantly.</p>
              </div>
              <div className="bg-white/10 border-3 border-white p-6 backdrop-blur-sm">
                <h3 className="font-space-grotesk font-bold text-xl mb-2">Step 2: Launch Referral Program (unlimited)</h3>
                <p>Share your referral link everywhere. Each friend who signs up = +1 credit for you and them.</p>
              </div>
              <div className="bg-white/10 border-3 border-white p-6 backdrop-blur-sm">
                <h3 className="font-space-grotesk font-bold text-xl mb-2">Step 3: Join the Leaderboard</h3>
                <p>The top 5 referrers each month win bonus prizes. Track your ranking on the <Link to="/leaderboard" className="underline font-semibold">leaderboard</Link>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-mint border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-12 text-center">
            <Sparkles className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-space-grotesk font-bold mb-6">
              Start Getting Free Credits Now
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Create your account, share to the gallery, and launch your referral program to use VintDress AI for free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/tarifs"
                className="px-8 py-4 bg-vinted text-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all font-space-grotesk font-bold text-lg inline-flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                to="/galerie"
                className="px-8 py-4 bg-white text-black border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all font-space-grotesk font-bold text-lg inline-flex items-center justify-center gap-2"
              >
                View Gallery
                <Share2 className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-space-grotesk font-bold mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/en/articles/ai-mannequin-vinted"
              className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all p-6"
            >
              <h3 className="font-space-grotesk font-bold text-xl mb-2">AI Mannequin for Vinted: Complete Guide 2026</h3>
              <p className="text-gray-600 mb-4">Discover how AI mannequins transform your Vinted photos and boost your sales.</p>
              <span className="text-vinted font-semibold inline-flex items-center gap-2">
                Read more
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              to="/en/articles/ai-photo-vinted-free-vs-paid"
              className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all p-6"
            >
              <h3 className="font-space-grotesk font-bold text-xl mb-2">AI Photo Vinted: Free vs Paid Tools Comparison</h3>
              <p className="text-gray-600 mb-4">Compare free and paid AI photo solutions for Vinted sellers.</p>
              <span className="text-vinted font-semibold inline-flex items-center gap-2">
                Read more
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <ArticleNavigation language="en" />
    </div>
  );
}
