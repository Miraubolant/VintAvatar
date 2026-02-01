import { Link } from 'react-router-dom';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { Eye, TrendingUp, Users, Camera, Sparkles, Target, CheckCircle, XCircle, ArrowRight, Zap, Star } from 'lucide-react';

export default function StandOutVintedAIMannequinPage() {
  useSEO({
    title: "Stand Out on Vinted: AI Mannequin to Boost Your Sales | VintDress",
    description: "Discover how VintDress AI mannequin helps you stand out among thousands of Vinted listings and sell 3x faster.",
    keywords: "stand out vinted, vinted visibility, ai mannequin vinted, professional vinted photos, boost vinted sales",
  });

  return (
    <div className="min-h-screen bg-grain">
      <div className="w-full h-[400px] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop"
          alt="Stand out on Vinted with AI mannequin"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-12">
        <ArticleNavigation />

        <article className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 lg:p-12 mb-12">
          <div className="flex items-center gap-4 text-sm mb-6 flex-wrap">
            <span className="bg-vinted text-white px-4 py-2 border-2 border-black font-space-grotesk font-semibold">
              Guide
            </span>
            <span className="font-space-grotesk">February 1, 2026</span>
            <span className="font-space-grotesk">10 min read</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-space-grotesk font-bold mb-6 leading-tight">
            Stand Out on Vinted: How AI Mannequin Boosts Your Sales
          </h1>

          <p className="text-xl text-gray-700 mb-8">
            You have dozens of items for sale on Vinted, but they remain invisible among millions of listings? You're not alone. The real problem isn't your clothes, it's how you present them.
          </p>

          <div className="bg-pink-pastel border-4 border-black p-8 mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <XCircle className="w-8 h-8 text-red-600" />
              The Problem: Invisibility on Vinted
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">The painful numbers:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span><strong>50+ million</strong> items online on Vinted</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span><strong>80%</strong> of listings have similar photos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span><strong>3 seconds</strong> to capture a buyer's attention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span><strong>70%</strong> of sales happen thanks to the 1st photo</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">What you're probably experiencing:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Eye className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span>Your listings stuck at a few views</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span>Few favorites and even fewer messages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span>Competitors selling the same items faster</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Camera className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span>Hours spent on "average" photos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Why Classic Photos Aren't Enough Anymore
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              In 2026, Vinted buyers have become demanding. They scroll through hundreds of listings daily and their brain automatically filters "amateur" photos.
            </p>

            <div className="bg-cream border-4 border-black p-6 mb-6">
              <h3 className="font-space-grotesk font-bold text-xl mb-4">3 types of photos that don't convert:</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white border-2 border-black p-4 text-center">
                  <div className="text-4xl mb-2">📸</div>
                  <h4 className="font-bold mb-2">Flat lay photo</h4>
                  <p className="text-sm text-gray-600">Buyer can't visualize the fit</p>
                </div>
                <div className="bg-white border-2 border-black p-4 text-center">
                  <div className="text-4xl mb-2">🪞</div>
                  <h4 className="font-bold mb-2">Blurry mirror selfie</h4>
                  <p className="text-sm text-gray-600">Poor quality, lack of trust</p>
                </div>
                <div className="bg-white border-2 border-black p-4 text-center">
                  <div className="text-4xl mb-2">👕</div>
                  <h4 className="font-bold mb-2">Hanger photo</h4>
                  <p className="text-sm text-gray-600">Impossible to see the real cut</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-100 border-4 border-black p-6">
              <p className="text-lg font-semibold">
                <strong>The finding:</strong> Sellers using mannequin photos get on average <span className="text-vinted font-bold">3x more views</span> and sell <span className="text-vinted font-bold">2x faster</span>.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-vinted" />
              The Solution: VintDress AI Mannequin
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              VintDress solves this problem by generating professional-quality visuals using AI mannequin. In seconds, your "basic" clothing photo becomes a catalog-quality photo.
            </p>

            <div className="bg-vinted border-4 border-black p-8 mb-8">
              <h3 className="text-2xl font-space-grotesk font-bold text-white mb-6 text-center">
                How does it work?
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white border-3 border-black p-4 text-center">
                  <div className="bg-vinted text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-black font-bold">1</div>
                  <h4 className="font-bold mb-2">Upload</h4>
                  <p className="text-sm text-gray-600">Upload your photo or paste a Vinted link</p>
                </div>
                <div className="bg-white border-3 border-black p-4 text-center">
                  <div className="bg-vinted text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-black font-bold">2</div>
                  <h4 className="font-bold mb-2">Configure</h4>
                  <p className="text-sm text-gray-600">Choose mannequin type and background</p>
                </div>
                <div className="bg-white border-3 border-black p-4 text-center">
                  <div className="bg-vinted text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-black font-bold">3</div>
                  <h4 className="font-bold mb-2">Generate</h4>
                  <p className="text-sm text-gray-600">AI creates your photo in 30 seconds</p>
                </div>
                <div className="bg-white border-3 border-black p-4 text-center">
                  <div className="bg-vinted text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-black font-bold">4</div>
                  <h4 className="font-bold mb-2">Publish</h4>
                  <p className="text-sm text-gray-600">Download and update your listing</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-mint border-4 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  VintDress Benefits
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>Professional quality photos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>Generation in 30 seconds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>Customizable mannequins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>Increases your listings visibility</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-4">Observed results:</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b-2 border-gray-200 pb-2">
                    <span>Average views</span>
                    <span className="font-bold text-vinted">+300%</span>
                  </div>
                  <div className="flex justify-between items-center border-b-2 border-gray-200 pb-2">
                    <span>Favorite rate</span>
                    <span className="font-bold text-vinted">+150%</span>
                  </div>
                  <div className="flex justify-between items-center border-b-2 border-gray-200 pb-2">
                    <span>Messages received</span>
                    <span className="font-bold text-vinted">+200%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Time to sell</span>
                    <span className="font-bold text-vinted">-50%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-vinted border-4 border-black p-8 text-center mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold text-white mb-4">
              Ready to Stand Out?
            </h2>
            <p className="text-white text-lg mb-6">
              Join thousands of sellers who have already boosted their sales with VintDress.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-space-grotesk font-bold text-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              Try VintDress Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <div className="border-3 border-black p-6 bg-cream">
                <h3 className="font-bold text-lg mb-2">Can buyers tell it's an AI photo?</h3>
                <p className="text-gray-700">No, the generated photos are very realistic. Most buyers think it's a real professional mannequin photo.</p>
              </div>

              <div className="border-3 border-black p-6 bg-cream">
                <h3 className="font-bold text-lg mb-2">How much does VintDress cost?</h3>
                <p className="text-gray-700">VintDress offers packs starting at €3.99 for 10 generations. An investment quickly recouped with a single sale.</p>
              </div>

              <div className="border-3 border-black p-6 bg-cream">
                <h3 className="font-bold text-lg mb-2">Does it work with all types of clothing?</h3>
                <p className="text-gray-700">Yes! Dresses, t-shirts, pants, jackets, sweaters... VintDress handles all types of clothing with different mannequin options.</p>
              </div>
            </div>
          </div>

          <div className="bg-mint border-4 border-black p-8">
            <h2 className="text-2xl font-space-grotesk font-bold mb-4">
              Conclusion
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              On Vinted, competition is fierce. Millions of listings compete for buyers' attention. The difference between an item that stagnates and one that sells? Often, it's just the photo.
            </p>
            <p className="text-lg text-gray-700">
              With VintDress, you have an immediate competitive advantage. Professional photos that catch the eye, generate clicks, and convert into sales. All in seconds and for pennies per photo.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-space-grotesk font-bold mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/en/articles/ai-mannequin-vinted" className="bg-white border-3 border-black p-6 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                <h3 className="font-bold text-lg mb-2">AI Mannequin for Vinted: How Does It Work?</h3>
                <p className="text-gray-600 text-sm">Everything about the technology behind virtual mannequins.</p>
              </Link>
              <Link to="/en/articles/vinted-algorithm-visibility" className="bg-white border-3 border-black p-6 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                <h3 className="font-bold text-lg mb-2">Vinted Algorithm: Maximize Your Visibility</h3>
                <p className="text-gray-600 text-sm">Understand the algorithm to boost your sales.</p>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
