import { Link } from 'react-router-dom';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { Upload, Cpu, Sparkles, TrendingUp, Clock, DollarSign, Users, Zap, Eye, Target, Shield, CheckCircle2 } from 'lucide-react';

export default function AIFashionRevolutionPage() {
  useSEO({
    title: "AI in Fashion: Our Revolution | VintDress",
    description: "Discover how AI is revolutionizing online fashion sales. VintDress transforms your photos with cutting-edge technology.",
    keywords: "AI fashion, AI photos, vinted technology, fashion innovation, artificial intelligence",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image */}
      <div className="w-full h-[400px] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop"
          alt="Artificial Intelligence and Fashion"
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
            <span className="bg-vinted text-white px-4 py-2 border-2 border-black font-space-grotesk font-semibold">
              Technology
            </span>
            <span className="font-space-grotesk">November 22, 2025</span>
            <span className="font-space-grotesk">7 min read</span>
            <span className="font-space-grotesk font-semibold">By Tech Team</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-space-grotesk font-bold mb-6 leading-tight">
            Artificial Intelligence in Fashion: The VintDress Revolution
          </h1>

          <p className="text-xl text-gray-700 mb-12">
            The second-hand fashion industry is experiencing a silent revolution. Behind every perfect photo you see on Vinted, there is now a game-changing technology: Artificial Intelligence.
          </p>

          {/* The Genesis */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Sparkles className="w-8 h-8" />
              The Genesis of Innovation
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 border-3 border-red-500 p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  The Problem
                </h3>
                <p className="mb-3">
                  How many times have you given up selling a garment because you didn't know how to photograph it?
                </p>
                <p className="text-sm text-gray-700">
                  Or worse, how many items remained unsold due to unattractive photos?
                </p>
              </div>

              <div className="bg-green-50 border-3 border-green-500 p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  Our Solution
                </h3>
                <p className="font-semibold">
                  A revolutionary AI that generates ultra-realistic worn photos of your clothes in less than 30 seconds.
                </p>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Cpu className="w-8 h-8" />
              How It Works?
            </h2>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="bg-white border-4 border-black p-6 relative">
                <div className="absolute -top-4 -left-4 bg-pink-pastel border-3 border-black w-12 h-12 flex items-center justify-center font-space-grotesk font-bold text-2xl">
                  1
                </div>
                <div className="ml-8">
                  <h3 className="text-2xl font-space-grotesk font-bold mb-4 flex items-center gap-3">
                    <Upload className="w-7 h-7" />
                    Upload & Analysis
                  </h3>
                  <p className="mb-3">Our AI analyzes your garment:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Item type (dress, pants, t-shirt...)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Colors and patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Cut and style</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Material (visually deduced)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white border-4 border-black p-6 relative">
                <div className="absolute -top-4 -left-4 bg-mint border-3 border-black w-12 h-12 flex items-center justify-center font-space-grotesk font-bold text-2xl">
                  2
                </div>
                <div className="ml-8">
                  <h3 className="text-2xl font-space-grotesk font-bold mb-4 flex items-center gap-3">
                    <Cpu className="w-7 h-7" />
                    Model Generation
                  </h3>
                  <p className="mb-3">The AI automatically selects:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>The most suitable mannequin type</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>The perfect pose to showcase the item</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Optimal lighting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>The background that will enhance the whole</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white border-4 border-black p-6 relative">
                <div className="absolute -top-4 -left-4 bg-yellow-200 border-3 border-black w-12 h-12 flex items-center justify-center font-space-grotesk font-bold text-2xl">
                  3
                </div>
                <div className="ml-8">
                  <h3 className="text-2xl font-space-grotesk font-bold mb-4 flex items-center gap-3">
                    <Sparkles className="w-7 h-7" />
                    Final Result
                  </h3>
                  <p className="text-lg font-semibold text-vinted">
                    In just a few seconds, you get a professional worn photo, as if a professional photographer had worked with a top model!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* The Numbers Speak */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <TrendingUp className="w-8 h-8" />
              The Numbers Speak
            </h2>

            <p className="text-lg mb-6">Since the launch of VintDress:</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-vinted text-white border-4 border-black p-6">
                <Eye className="w-10 h-10 mb-3" />
                <div className="text-4xl font-space-grotesk font-bold mb-2">
                  +280%
                </div>
                <p className="text-sm">
                  views on average - Listings with AI photos generate 2.8x more views than traditional photos.
                </p>
              </div>

              <div className="bg-mint border-4 border-black p-6">
                <Clock className="w-10 h-10 mb-3" />
                <div className="text-4xl font-space-grotesk font-bold mb-2">
                  30s
                </div>
                <p className="text-sm">
                  generation time - Average time to get a perfect photo.
                </p>
              </div>

              <div className="bg-pink-pastel border-4 border-black p-6">
                <DollarSign className="w-10 h-10 mb-3" />
                <div className="text-4xl font-space-grotesk font-bold mb-2">
                  +300%
                </div>
                <p className="text-sm">
                  sales - Some users have tripled their sales using our AI photos.
                </p>
              </div>

              <div className="bg-yellow-200 border-4 border-black p-6">
                <Users className="w-10 h-10 mb-3" />
                <div className="text-4xl font-space-grotesk font-bold mb-2">
                  24,000+
                </div>
                <p className="text-sm">
                  satisfied users - And this is just the beginning!
                </p>
              </div>
            </div>
          </div>

          {/* Impact on E-Commerce */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Target className="w-8 h-8" />
              Impact on Fashion E-Commerce
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-4">
                  For Sellers
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Time saving</p>
                      <p className="text-sm text-gray-600">No more improvised photo shoots</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Professional quality</p>
                      <p className="text-sm text-gray-600">Every photo looks like it came from a studio</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Maximum conversion</p>
                      <p className="text-sm text-gray-600">More views = more sales</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-4">
                  For the Vinted Ecosystem
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">High standards</p>
                      <p className="text-sm text-gray-600">Overall listing quality improves</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Buyer experience</p>
                      <p className="text-sm text-gray-600">Easier to envision yourself with the garment</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Strengthened trust</p>
                      <p className="text-sm text-gray-600">Professional photos reassure about quality</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* The Future of Fashion with AI */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              The Future of Fashion with AI
            </h2>

            <p className="text-lg mb-6">We are only at the beginning of this revolution. Soon:</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-pink-pastel border-3 border-black p-6">
                <div className="text-3xl mb-2">🔮</div>
                <h3 className="font-space-grotesk font-bold mb-2">Predictive AI</h3>
                <p className="text-sm">Know which items will sell best</p>
              </div>

              <div className="bg-mint border-3 border-black p-6">
                <div className="text-3xl mb-2">🎨</div>
                <h3 className="font-space-grotesk font-bold mb-2">Personalized Styles</h3>
                <p className="text-sm">Adapt photo style to your audience</p>
              </div>

              <div className="bg-yellow-200 border-3 border-black p-6">
                <div className="text-3xl mb-2">📱</div>
                <h3 className="font-space-grotesk font-bold mb-2">Native Integration</h3>
                <p className="text-sm">Directly in the Vinted app</p>
              </div>

              <div className="bg-vinted text-white border-3 border-black p-6">
                <div className="text-3xl mb-2">🌍</div>
                <h3 className="font-space-grotesk font-bold mb-2">International Expansion</h3>
                <p className="text-sm">Adapt to each country's codes</p>
              </div>
            </div>
          </div>

          {/* Ethics and Transparency */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8" />
              Ethics and Transparency
            </h2>

            <div className="bg-green-50 border-4 border-green-500 p-8">
              <h3 className="font-space-grotesk font-bold text-xl mb-6">
                Our Commitments:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">Photos clearly identified as AI-generated</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">Respect for product reality</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">No deception about condition or colors</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">User data protection</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-vinted border-4 border-black p-8 mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold text-white mb-6">
              Conclusion
            </h2>
            <p className="text-white text-lg mb-6">
              AI is not here to replace human creativity, but to democratize it. Today, every Vinted seller can have access to studio-quality photos.
            </p>
            <p className="text-white text-xl font-semibold mb-8">
              Second-hand fashion becomes more attractive, more accessible, and more professional.
            </p>
            <p className="text-white text-lg mb-6">
              Are you ready to join this revolution?
            </p>
            <Link
              to="/en"
              className="inline-block bg-white text-vinted px-8 py-4 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all font-space-grotesk font-bold text-lg"
            >
              Try VintDress Now!
            </Link>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {["AI", "Technology", "Innovation", "Fashion", "E-commerce"].map((tag) => (
              <span
                key={tag}
                className="bg-vinted text-white px-4 py-2 border-2 border-black font-space-grotesk font-semibold text-sm"
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
              className="border-3 border-black p-4 hover:bg-mint transition-colors"
            >
              <h3 className="font-space-grotesk font-bold mb-2">
                Success Story: Marie Earns 3000€/Month
              </h3>
              <p className="text-sm text-gray-600">
                How Marie transformed her life with AI photos
              </p>
            </Link>
            <Link
              to="/en/articles/how-to-take-good-vinted-photos"
              className="border-3 border-black p-4 hover:bg-mint transition-colors"
            >
              <h3 className="font-space-grotesk font-bold mb-2">
                How to Take Good Photos for Vinted
              </h3>
              <p className="text-sm text-gray-600">
                Complete guide to photos that sell
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
