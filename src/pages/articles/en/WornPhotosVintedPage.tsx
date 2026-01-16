import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, CheckCircle, AlertTriangle, Star, ArrowRight } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export default function WornPhotosVintedPage() {
  useSEO({
    title: "Boost Your Sales with Worn Photos on Vinted | VintDress",
    description: "Boost your Vinted sales with professional worn photos. Discover VintDress, the premium solution for your listings.",
    keywords: "worn photo vinted, worn photos, put clothes on mannequin, professional photos vinted",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px] border-b-4 border-black overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&h=400&fit=crop"
          alt="Professional worn photos for Vinted"
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
            TIPS
          </div>

          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-black mb-6 leading-tight">
            Boost Your Sales with Worn Photos on Vinted
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-sm font-body text-gray-700 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>VintDress Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>8 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>December 29, 2025</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["worn photo vinted", "AI mannequin", "Vinted sales", "professional photos", "VintDress"].map((tag) => (
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
            If you're a seller on Vinted, you know how crucial the presentation of your items is. Quality worn photos can make all the difference. They allow buyers to visualize clothing in a real context, which significantly increases the chances of a sale. In fact, a study has shown that photos with AI mannequins can increase your listing views by <strong className="text-vinted">300%</strong> and reduce selling time by three.
          </p>
        </div>

        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Why Choose VintDress for Your Worn Photos?
          </h2>

          <div className="space-y-8">
            {/* Pro Quality */}
            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-vinted" />
                Professional Quality at Your Fingertips
              </h3>
              <p className="font-body text-black leading-relaxed">
                VintDress offers you a premium service to create professional-quality worn photos. Thanks to our FLUX 2 Pro technology, you get a realistic result indistinguishable from a real photo. In just <strong>30 seconds</strong>, you can generate a high-definition image that will showcase your clothes like never before.
              </p>
            </div>

            {/* Customization */}
            <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <Star className="w-6 h-6 text-vinted" />
                Complete Customization
              </h3>
              <p className="font-body text-black leading-relaxed mb-4">
                With VintDress, you can fully customize your AI mannequin: gender, body type, skin tone, pose, and backgrounds are at your disposal. Whether you want a dynamic photo or a studio shot, our intuitive interface allows you to easily configure every detail.
              </p>
            </div>

            {/* Affordable Cost */}
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-6">
                Affordable Cost for High Return on Investment
              </h3>

              <div className="bg-cream border-3 border-black p-5 mb-6">
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-vinted flex-shrink-0 mt-1" />
                  <p className="font-display font-bold text-black">
                    Common problems with free tools:
                  </p>
                </div>
                <ul className="space-y-2 font-body text-black">
                  <li className="flex items-start gap-2">
                    <span className="text-vinted font-bold">•</span>
                    <span><strong>Blurry quality</strong>: Generated images often lack sharpness.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-vinted font-bold">•</span>
                    <span><strong>Visible watermarks</strong>: Free tools add logos, which hurts the professional presentation of your items.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-vinted font-bold">•</span>
                    <span><strong>Endless waiting</strong>: You can end up with 30-minute queues to generate a single image.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-vinted font-bold">•</span>
                    <span><strong>Clothing distortions</strong>: Free tools can distort items, making the presentation misleading.</span>
                  </li>
                </ul>
              </div>

              <p className="font-body text-black leading-relaxed">
                In addition to these drawbacks, the time you spend using these free tools equals lost money. By investing from <strong className="text-vinted">$0.40/photo</strong> with VintDress, you're guaranteed to get superior quality images that attract buyers. A single additional sale, often between $15 and $25, is more than enough to cover the cost of your photos.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Testimonials from Vinted Sellers
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-vinted text-vinted" />
                ))}
              </div>
              <p className="font-body text-black italic mb-4">
                "I started using VintDress and my sales exploded. Worn photos attract so many more customers, and the cost is quickly recouped."
              </p>
              <p className="font-display font-bold text-black">
                - Claire, 28 years old
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-vinted text-vinted" />
                ))}
              </div>
              <p className="font-body text-black italic mb-4">
                "Before, I only had basic photos. Since I started using VintDress, I've seen my selling times cut in half. It's an investment I recommend to everyone!"
              </p>
              <p className="font-display font-bold text-black">
                - Julian, 34 years old
              </p>
            </div>
          </div>
        </section>

        {/* How to */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            How to Put Your Clothes on a Mannequin with VintDress?
          </h2>

          <div className="space-y-4">
            {/* Step 1 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                1
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Upload Your Clothing
                </h3>
                <p className="font-body text-black">
                  Start by uploading a photo of your clothing item to our platform.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                2
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Configure Your Mannequin
                </h3>
                <p className="font-body text-black">
                  Choose the gender, body type, skin tone, and pose of your mannequin. You can also select the ideal background to showcase your items.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                3
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Generate and Download
                </h3>
                <p className="font-body text-black">
                  In just 30 seconds, you get a photo ready to use on Vinted. Simple, fast, and effective!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-12 text-center">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
            Ready to Boost Your Vinted Sales?
          </h3>
          <p className="font-body text-white mb-6">
            Try VintDress now and transform your photos in less than 30 seconds!
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
                What's the best way to use worn photos on Vinted?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Use worn photos to show your clothes in a real-life situation. This helps buyers visualize their potential.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Why should I avoid free tools?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Free tools often offer poor quality, which can hurt your brand image. Investing in VintDress guarantees you professional photos.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                How much does VintDress cost?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Packs start from $3.99 for 10 photos, which is $0.40/photo. It's a worthwhile investment to improve your sales!
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Can I customize my mannequin?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Yes, VintDress allows you to fully customize your mannequin according to your needs: gender, body type, pose, and more.
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
              { slug: "ai-mannequin-vinted", title: "AI Mannequin for Vinted" },
              { slug: "ai-photo-vinted-free-vs-paid", title: "Free vs Paid AI" },
              { slug: "complete-guide-vinted-photos-2025", title: "Complete Photos Guide 2025" }
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
}
