import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, Zap, TrendingUp, Star, Shield, ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export const AImannequinVintedPage: React.FC = () => {
  useSEO({
    title: "Boost Your Vinted Sales with an AI Mannequin | VintDress",
    description: "Optimize your Vinted sales with an AI mannequin. Discover how VintDress can transform your photos.",
    keywords: "ai mannequin vinted, virtual mannequin vinted, ai for vinted photos",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px] border-b-4 border-black overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=400&fit=crop"
          alt="AI Mannequin for professional Vinted photos"
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
            GUIDE
          </div>

          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-black mb-6 leading-tight">
            Boost Your Vinted Sales with an AI Mannequin
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
              <span>December 26, 2025</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["ai mannequin", "vinted", "vinted photos", "e-commerce", "online selling"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-pink-pastel border-2 border-black font-display font-bold text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Intro */}
        <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-8">
          <p className="font-body text-lg text-black leading-relaxed">
            In the world of e-commerce, and particularly on Vinted, the presentation of your items is essential. If you're a seller on Vinted, you've probably noticed that professional-quality photos attract more buyers. But how can you get these photos without spending a fortune? The answer: <strong className="text-vinted">the AI mannequin</strong>.
          </p>
        </div>

        {/* Section 1 - What is an AI Mannequin */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            What is an AI Mannequin?
          </h2>

          <div className="bg-mint border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
            <p className="font-body text-black leading-relaxed mb-4">
              An AI mannequin is an innovative technology that allows you to create professional clothing photos using artificial intelligence. With tools like VintDress, you can generate realistic images of your clothes worn by a virtual mannequin in just a few clicks.
            </p>
          </div>

          {/* Why VintDress */}
          <div className="space-y-6">
            <h3 className="font-display font-bold text-2xl text-black flex items-center gap-2">
              <Zap className="w-6 h-6 text-vinted" />
              Why Choose VintDress?
            </h3>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p className="font-body text-black leading-relaxed mb-6">
                VintDress stands out for its quality. Unlike free tools, VintDress uses <strong>FLUX 2 Pro</strong> technology, which guarantees renders indistinguishable from real photos. Here's why free tools are not a viable solution:
              </p>

              <div className="bg-cream border-3 border-black p-5">
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-vinted flex-shrink-0 mt-1" />
                  <p className="font-display font-bold text-black">
                    Problems with free tools:
                  </p>
                </div>
                <ul className="space-y-3 font-body text-black">
                  <li className="flex items-start gap-2">
                    <span className="text-vinted font-bold">•</span>
                    <span><strong>Poor quality</strong>: Generated photos are often blurry and unflattering.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-vinted font-bold">•</span>
                    <span><strong>Watermarks</strong>: Most free services add watermarks to images, ruining their quality.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-vinted font-bold">•</span>
                    <span><strong>Clothing distortions</strong>: Free models can distort your clothes, which can put off potential buyers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-vinted font-bold">•</span>
                    <span><strong>Wait times</strong>: You can wait up to 30 minutes to generate a photo, a luxury few sellers can afford.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 - The Real Cost */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            The Real Cost of Free
          </h2>

          <div className="bg-pink-pastel border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-body text-black leading-relaxed mb-4">
              Investing in a free service may seem economical at first, but it can quickly become costly in terms of time and lost sales. For example, if you waste 30 minutes waiting for poor-quality photos, that's time you could have spent promoting your items or answering buyer questions.
            </p>

            <div className="bg-white border-3 border-black p-5 mt-4">
              <p className="font-body text-black leading-relaxed">
                With VintDress, you can generate a photo in just <strong className="text-vinted">30 seconds</strong> for a cost of <strong className="text-vinted">€0.40/photo</strong>. Imagine you sell a garment for €20. With a quality photo, you're much more likely to close the sale. A single additional sale more than pays for the cost of the photos.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 - Sales Boost */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            How Will the Virtual Mannequin Boost Your Sales?
          </h2>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-5xl font-display font-bold text-vinted mb-2">+300%</div>
              <p className="font-display font-bold text-black text-sm">VINTED VIEWS</p>
            </div>

            <div className="bg-pink-pastel border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-5xl font-display font-bold text-vinted mb-2">÷3</div>
              <p className="font-display font-bold text-black text-sm">SELLING TIME</p>
            </div>

            <div className="bg-white border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-5xl font-display font-bold text-vinted mb-2">↓</div>
              <p className="font-display font-bold text-black text-sm">NEGOTIATIONS</p>
            </div>
          </div>

          <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-vinted" />
              Concrete Benefits
            </h3>
            <ul className="space-y-3 font-body text-black">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span><strong>Selling time divided by 3</strong>: Items with quality photos sell faster.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span><strong>Fewer price negotiations</strong>: Professional photos inspire trust.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span><strong>Fewer returns</strong>: Buyers can better visualize what they're buying.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h3 className="font-display font-bold text-2xl text-black mb-6">
            VintDress Features
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-vinted text-white border-2 border-black font-display font-bold flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <h4 className="font-display font-bold text-black mb-2">Ultra-Realistic AI Mannequin</h4>
                  <p className="font-body text-sm text-black">The image quality is exceptional, indistinguishable from a real photo.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-vinted text-white border-2 border-black font-display font-bold flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <h4 className="font-display font-bold text-black mb-2">Complete Customization</h4>
                  <p className="font-body text-sm text-black">Choose the gender, body type, skin tone, pose, and background for a tailored result.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-vinted text-white border-2 border-black font-display font-bold flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <h4 className="font-display font-bold text-black mb-2">Intuitive Interface</h4>
                  <p className="font-body text-sm text-black">No need to be a tech expert to use VintDress. It's simple and fast.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-vinted text-white border-2 border-black font-display font-bold flex items-center justify-center flex-shrink-0">4</div>
                <div>
                  <h4 className="font-display font-bold text-black mb-2">Included Bonus</h4>
                  <p className="font-body text-sm text-black">Automatic generation of optimized descriptions and titles for Vinted.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Vinted Seller Testimonials
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-vinted text-vinted" />
                ))}
              </div>
              <p className="font-body text-black italic mb-4">
                "I tried several free tools, but the quality was always disappointing. With VintDress, my items sell faster and at higher prices!"
              </p>
              <p className="font-display font-bold text-black">
                - Emma, Vinted seller
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-vinted text-vinted" />
                ))}
              </div>
              <p className="font-body text-black italic mb-4">
                "By using an AI mannequin, I saw a real difference in my sales. The photos catch the eye and increase my credibility as a seller."
              </p>
              <p className="font-display font-bold text-black">
                - James, Vinted seller
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-4 flex items-center gap-2">
              <Shield className="w-7 h-7" />
              A Profitable Investment
            </h2>
            <p className="font-body text-white text-lg leading-relaxed">
              You were looking for free solutions to improve your Vinted photos, but you found something better: VintDress. For <strong>€0.40/photo</strong>, you get professional quality that attracts buyers and boosts your sales. Ultimately, it's an investment that pays for itself quickly.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-mint border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-12 text-center">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-black mb-4">
            Ready to transform your Vinted photos?
          </h3>
          <p className="font-body text-black mb-6">
            Generate photos with AI mannequin in 30 seconds!
          </p>
          <Link
            to="/#generateur"
            className="inline-flex items-center gap-2 px-8 py-4 bg-vinted text-white border-3 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            TRY NOW
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
                How does the AI mannequin work on Vinted?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                VintDress's AI mannequin generates realistic images of your clothes using advanced technology. Simply upload a photo, choose the settings, and in 30 seconds, you'll have an image ready to publish.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Why should I pay for photos when there are free tools?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Free tools often offer poor quality, distortions, and watermarks. VintDress offers a premium service guaranteeing professional-quality photos, which translates to faster and more numerous sales.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Is the investment worth it?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Yes, investing €0.40/photo can earn you much more by increasing your chances of selling. A single sale can easily cover the cost of your photos.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                What types of clothes can I photograph with VintDress?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                You can use VintDress for all types of clothing, whether dresses, t-shirts, pants, etc. Customization allows you to adapt the mannequin to each item.
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
              { slug: "ai-photo-vinted-free-vs-paid", title: "AI Free vs Paid" },
              { slug: "complete-guide-vinted-photos-2025", title: "Photo Guide 2025" },
              { slug: "worn-photos-vinted", title: "Worn Photos Vinted" }
            ].map((article) => (
              <Link
                key={article.slug}
                to={`/en/articles/${article.slug}`}
                className="block bg-mint border-3 border-black p-4 font-display font-bold text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
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
};

export default AImannequinVintedPage;
