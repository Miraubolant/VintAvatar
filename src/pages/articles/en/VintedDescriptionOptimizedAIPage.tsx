import { Link } from 'react-router-dom';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { FileText, Sparkles, MessageSquare, CheckCircle, XCircle, ArrowRight, Zap, Target, TrendingUp, Clock, AlertTriangle, Lightbulb } from 'lucide-react';

export default function VintedDescriptionOptimizedAIPage() {
  useSEO({
    title: "Vinted Description Optimized with AI: Sell Faster | VintDress",
    description: "Transform your basic Vinted descriptions into optimized texts that reassure buyers and accelerate your sales with artificial intelligence.",
    keywords: "vinted description, optimize vinted description, ai vinted description, vinted listing text, sell faster vinted",
  });

  return (
    <div className="min-h-screen bg-grain">
      <div className="w-full h-[400px] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=400&fit=crop"
          alt="Vinted description optimized with AI"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-12">
        <ArticleNavigation />

        <article className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 lg:p-12 mb-12">
          <div className="flex items-center gap-4 text-sm mb-6 flex-wrap">
            <span className="bg-mint px-4 py-2 border-2 border-black font-space-grotesk font-semibold">
              Tips
            </span>
            <span className="font-space-grotesk">February 1, 2026</span>
            <span className="font-space-grotesk">12 min read</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-space-grotesk font-bold mb-6 leading-tight">
            Vinted Description: How AI Transforms Your Texts into Selling Machines
          </h1>

          <p className="text-xl text-gray-700 mb-8">
            You spend hours taking beautiful photos for Vinted, but completely neglect the description? Big mistake. I learned this the hard way.
          </p>

          <div className="bg-pink-pastel border-4 border-black p-8 mb-12">
            <h2 className="text-2xl font-space-grotesk font-bold mb-4 flex items-center gap-3">
              <AlertTriangle className="w-7 h-7 text-red-600" />
              The Mistake 90% of Sellers Make
            </h2>

            <p className="text-lg mb-6">
              During my first 3 months on Vinted, I just wrote "Good condition" and waited for it to sell.
            </p>

            <div className="bg-white border-3 border-black p-6 mb-4">
              <h3 className="font-bold mb-2">Result?</h3>
              <p className="text-gray-700">Dozens of messages asking the same questions:</p>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-vinted" />
                  "What's the material?"
                </li>
                <li className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-vinted" />
                  "What size exactly?"
                </li>
                <li className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-vinted" />
                  "Are there any defects?"
                </li>
                <li className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-vinted" />
                  "Does it run big or small?"
                </li>
              </ul>
            </div>

            <div className="bg-yellow-100 border-3 border-black p-4">
              <p className="font-semibold">
                <Lightbulb className="w-5 h-5 inline mr-2 text-yellow-600" />
                I realized something: a complete and well-written description reduces questions by <span className="text-vinted font-bold">70%</span> and doubles your chances of selling quickly.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Why Description Matters as Much as the Photo
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-cream border-3 border-black p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" />
                  Weak description =
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Doubting buyer</li>
                  <li>• Cascade of questions</li>
                  <li>• Price negotiation</li>
                  <li>• Cart abandonment</li>
                  <li>• Competition wins</li>
                </ul>
              </div>

              <div className="bg-mint border-3 border-black p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Optimized description =
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Confident buyer</li>
                  <li>• Impulse purchase</li>
                  <li>• Price accepted</li>
                  <li>• Fewer returns</li>
                  <li>• Better reviews</li>
                </ul>
              </div>
            </div>

            <div className="bg-vinted border-4 border-black p-6">
              <div className="grid md:grid-cols-3 gap-4 text-center text-white">
                <div>
                  <div className="text-4xl font-bold mb-2">70%</div>
                  <div className="text-sm">of buyers read the description before buying</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">-50%</div>
                  <div className="text-sm">questions with a complete description</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">2x</div>
                  <div className="text-sm">more chances of quick sale</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Anatomy of a Description That Sells
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              A good Vinted description answers ALL the questions a buyer might have. Here's the ideal structure:
            </p>

            <div className="space-y-4">
              <div className="bg-white border-3 border-black p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-vinted text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Emotional hook</h3>
                    <p className="text-gray-700 mb-2">Start with a dream-inducing sentence:</p>
                    <div className="bg-cream p-3 border-2 border-black text-sm italic">
                      "This little black dress will become your ally for all occasions!"
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-vinted text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Essential information</h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• <strong>Brand:</strong> Zara, H&M, etc.</li>
                      <li>• <strong>Size:</strong> S / 36 (+ measurements if possible)</li>
                      <li>• <strong>Material:</strong> 100% cotton, polyester, etc.</li>
                      <li>• <strong>Color:</strong> Deep black, navy blue, etc.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-vinted text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Product details</h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Cut and style (fitted, loose, tailored)</li>
                      <li>• Length (mini, midi, maxi)</li>
                      <li>• Closure (zip, buttons, elastic)</li>
                      <li>• Details (pockets, lining, patterns)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-vinted text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Condition and transparency</h3>
                    <p className="text-gray-700 mb-2">Be honest about the condition:</p>
                    <div className="bg-cream p-3 border-2 border-black text-sm italic">
                      "Worn 2-3 times, excellent condition. Slight wear mark on interior label (see photo 4)."
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-vinted text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">5</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Call-to-action</h3>
                    <p className="text-gray-700 mb-2">End with an invitation:</p>
                    <div className="bg-cream p-3 border-2 border-black text-sm italic">
                      "Feel free to ask questions or make an offer!"
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-vinted" />
              AI to the Rescue: Generate Descriptions in Seconds
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              Writing a complete description takes time. In 2026, AI can do it for you in seconds.
            </p>

            <div className="bg-vinted border-4 border-black p-8 mb-8">
              <h3 className="text-2xl font-space-grotesk font-bold text-white mb-6 text-center">
                How does AI optimize your descriptions?
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white border-3 border-black p-4 text-center">
                  <Target className="w-10 h-10 mx-auto mb-3 text-vinted" />
                  <h4 className="font-bold mb-2">Analyze</h4>
                  <p className="text-sm text-gray-600">AI analyzes your photo and Vinted item info</p>
                </div>
                <div className="bg-white border-3 border-black p-4 text-center">
                  <FileText className="w-10 h-10 mx-auto mb-3 text-vinted" />
                  <h4 className="font-bold mb-2">Generate</h4>
                  <p className="text-sm text-gray-600">It writes a complete and persuasive description</p>
                </div>
                <div className="bg-white border-3 border-black p-4 text-center">
                  <TrendingUp className="w-10 h-10 mx-auto mb-3 text-vinted" />
                  <h4 className="font-bold mb-2">Optimize</h4>
                  <p className="text-sm text-gray-600">Vinted SEO keywords for more visibility</p>
                </div>
              </div>
            </div>

            <div className="bg-cream border-4 border-black p-6">
              <h3 className="font-bold text-xl mb-4">AI benefits for your descriptions:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-vinted mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Time saving</h4>
                    <p className="text-sm text-gray-600">5 seconds instead of 10 minutes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-vinted mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Completeness</h4>
                    <p className="text-sm text-gray-600">Never miss important info</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-vinted mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Persuasion</h4>
                    <p className="text-sm text-gray-600">Wording that triggers purchase</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-vinted mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Vinted SEO</h4>
                    <p className="text-sm text-gray-600">Keywords for better ranking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-vinted border-4 border-black p-8 text-center mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold text-white mb-4">
              Combine AI Photo + Optimized Description
            </h2>
            <p className="text-white text-lg mb-6">
              With VintDress, get professional photos AND descriptions that sell.
              The winning combo to boost your Vinted sales.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-space-grotesk font-bold text-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              Discover VintDress
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <div className="border-3 border-black p-6 bg-cream">
                <h3 className="font-bold text-lg mb-2">What's the ideal length for a Vinted description?</h3>
                <p className="text-gray-700">Between 100 and 200 words. Enough to be complete, but not so much that you lose the reader. The key is having all important info present.</p>
              </div>

              <div className="border-3 border-black p-6 bg-cream">
                <h3 className="font-bold text-lg mb-2">Should I mention the original purchase price?</h3>
                <p className="text-gray-700">Yes, it helps the buyer evaluate the deal. "Retail price: €89" gives a reference and justifies your selling price.</p>
              </div>

              <div className="border-3 border-black p-6 bg-cream">
                <h3 className="font-bold text-lg mb-2">How to describe a defect without scaring off the buyer?</h3>
                <p className="text-gray-700">Be honest but positive: "Slight wear on collar, barely visible when worn" rather than "Stain on collar". Transparency reassures.</p>
              </div>
            </div>
          </div>

          <div className="bg-mint border-4 border-black p-8">
            <h2 className="text-2xl font-space-grotesk font-bold mb-4">
              Conclusion
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              A beautiful photo catches the eye, but it's the description that converts. Successful Vinted sellers understand this: every word counts.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              In 2026, you have no excuse for sloppy descriptions. AI can generate optimized texts in seconds. Combine that with AI mannequin photos, and you have the winning formula.
            </p>
            <p className="text-lg font-semibold">
              Professional photo + Complete description = Quick sale at the right price.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-space-grotesk font-bold mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/en/articles/stand-out-vinted-ai-mannequin" className="bg-white border-3 border-black p-6 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                <h3 className="font-bold text-lg mb-2">Stand Out on Vinted with AI Mannequin</h3>
                <p className="text-gray-600 text-sm">How to boost your visibility among thousands of listings.</p>
              </Link>
              <Link to="/en/articles/5-tips-sell-faster-vinted" className="bg-white border-3 border-black p-6 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                <h3 className="font-bold text-lg mb-2">5 Tips to Sell Faster on Vinted</h3>
                <p className="text-gray-600 text-sm">Proven techniques to accelerate your sales.</p>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
