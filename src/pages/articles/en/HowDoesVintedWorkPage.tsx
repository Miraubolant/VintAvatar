import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, CheckCircle, Smartphone, Shield, Star, ArrowRight, Users, ShoppingBag, CreditCard, Search, Heart } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export const HowDoesVintedWorkPage: React.FC = () => {
  useSEO({
    title: "Vinted: How Does It Work? Beginner Guide 2026 | VintDress",
    description: "Learn how Vinted works in 2026. Complete beginner guide: create an account, buy, sell, payment and security explained.",
    keywords: "how does vinted work, vinted beginner, create vinted account, vinted app, vinted guide",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px] border-b-4 border-black overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=400&fit=crop"
          alt="Vinted How Does It Work - Beginner Guide"
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
            Vinted: How Does It Work? Beginner Guide 2026
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-sm font-body text-gray-700 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>VintDress Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>10 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>January 7, 2026</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["vinted beginner", "create account", "vinted app", "complete guide", "VintDress"].map((tag) => (
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
            You've heard about Vinted but don't really know how it works? You're in the right place! Vinted is <strong className="text-vinted">the #1 platform</strong> for buying and selling second-hand clothes in Europe, with over <strong>80 million users</strong>. In this guide, you'll discover everything you need to know to get started.
          </p>
        </div>

        {/* Section 1 - What is Vinted */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            What is Vinted?
          </h2>

          <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
            <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
              <Users className="w-6 h-6 text-vinted" />
              The Fashion Marketplace
            </h3>
            <p className="font-body text-black leading-relaxed mb-4">
              Vinted is an app and website that allows you to:
            </p>
            <ul className="space-y-2 font-body text-black">
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Sell</strong> your clothes, shoes and accessories you no longer wear</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Buy</strong> second-hand items at reduced prices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Exchange</strong> directly with other users</span>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
              <p className="font-display font-bold text-3xl text-vinted mb-2">80M+</p>
              <p className="font-body text-black">Users</p>
            </div>
            <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
              <p className="font-display font-bold text-3xl text-vinted mb-2">20+</p>
              <p className="font-body text-black">Countries</p>
            </div>
            <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
              <p className="font-display font-bold text-3xl text-vinted mb-2">0%</p>
              <p className="font-body text-black">Seller Commission</p>
            </div>
          </div>
        </section>

        {/* Section 2 - Is Vinted Free */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Is Vinted Free?
          </h2>

          <div className="space-y-6">
            <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-vinted" />
                For Sellers: 100% FREE
              </h3>
              <p className="font-body text-black leading-relaxed">
                Vinted takes <strong className="text-vinted">no commission</strong> on your sales. You receive 100% of the selling price. This is what sets Vinted apart from platforms like Vestiaire Collective or eBay.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4">
                For Buyers: Paid Protection
              </h3>
              <p className="font-body text-black leading-relaxed mb-4">
                The buyer pays a "Buyer Protection" which includes:
              </p>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>5% of the price</strong> + €0.70 fixed fee</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Refund if the item doesn't match</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Protection against scams</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3 - Create Account */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Create Your Account Step by Step
          </h2>

          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                1
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2 flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-vinted" />
                  Download the App
                </h3>
                <p className="font-body text-black">
                  Available on iOS (App Store) and Android (Google Play). You can also use the website vinted.com.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                2
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Sign Up
                </h3>
                <p className="font-body text-black">
                  With your email, or via Google, Facebook or Apple. It's instant and free.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                3
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Complete Your Profile
                </h3>
                <p className="font-body text-black">
                  Add a profile picture, a bio, and verify your phone number. A complete profile builds trust!
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                4
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Verify Your Identity (Recommended)
                </h3>
                <p className="font-body text-black">
                  Optional but recommended to unlock all features and reassure other users.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - The Interface */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            The Vinted Interface Explained
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <Search className="w-5 h-5 text-vinted" />
                Search and Filters
              </h3>
              <p className="font-body text-black">
                Search by keyword, brand, size, color, condition, price... The filters are very powerful to find exactly what you're looking for.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-vinted" />
                Favorites
              </h3>
              <p className="font-body text-black">
                Add items to favorites to find them easily. You'll be notified if the price drops!
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-vinted" />
                My Wardrobe
              </h3>
              <p className="font-body text-black">
                This is your personal shop. All your items for sale are gathered here. Treat it like a storefront!
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-vinted" />
                Wallet
              </h3>
              <p className="font-body text-black">
                Money from your sales arrives here. You can transfer it to your bank account or use it to buy on Vinted.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 - How to Sell */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            How Does Selling Work
          </h2>

          <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
            <h3 className="font-display font-bold text-xl text-black mb-4">The 5 Key Steps</h3>
            <ol className="space-y-3 font-body text-black">
              <li className="flex items-start gap-2">
                <span className="font-display font-bold text-vinted">1.</span>
                <span>Take quality photos of your item</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-display font-bold text-vinted">2.</span>
                <span>Create a listing with title, description and price</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-display font-bold text-vinted">3.</span>
                <span>Wait for a buyer to purchase or make an offer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-display font-bold text-vinted">4.</span>
                <span>Ship the package with the prepaid label</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-display font-bold text-vinted">5.</span>
                <span>Receive money in your Vinted wallet</span>
              </li>
            </ol>
          </div>

          <div className="bg-vinted border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-white mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-white" />
              VintDress Tip
            </h3>
            <p className="font-body text-white leading-relaxed mb-4">
              <strong>AI mannequin photos</strong> increase your views by 300%. Transform your photos in 30 seconds with VintDress!
            </p>
            <Link
              to="/#generateur"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-vinted border-3 border-black font-display font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              TRY VINTDRESS
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Section 6 - How to Buy */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            How Does Buying Work
          </h2>

          <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <ol className="space-y-4 font-body text-black">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-vinted text-white rounded-full flex items-center justify-center font-display font-bold">1</span>
                <div>
                  <strong>Find an item</strong> - Use search and filters to find what you're looking for
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-vinted text-white rounded-full flex items-center justify-center font-display font-bold">2</span>
                <div>
                  <strong>Check the seller</strong> - Look at reviews, number of sales, account age
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-vinted text-white rounded-full flex items-center justify-center font-display font-bold">3</span>
                <div>
                  <strong>Buy or make an offer</strong> - You can negotiate the price with the seller
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-vinted text-white rounded-full flex items-center justify-center font-display font-bold">4</span>
                <div>
                  <strong>Pay online</strong> - Credit card, PayPal, Apple Pay...
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-vinted text-white rounded-full flex items-center justify-center font-display font-bold">5</span>
                <div>
                  <strong>Receive and confirm</strong> - You have 2 days to confirm or report an issue
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Section 7 - Is Vinted Reliable */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Is Vinted Reliable?
          </h2>

          <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-vinted" />
              Vinted Protections
            </h3>
            <ul className="space-y-4 font-body text-black">
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <div>
                  <strong>Buyer Protection</strong>: If the item doesn't match the description or doesn't arrive, you get refunded.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <div>
                  <strong>Secure Payment</strong>: Money is held until the buyer confirms receipt.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <div>
                  <strong>Reviews</strong>: Other users' reviews help you identify reliable sellers.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <div>
                  <strong>Customer Support</strong>: A team is available to resolve disputes.
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-12 text-center">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
            Ready to Start on Vinted?
          </h3>
          <p className="font-body text-white mb-6">
            Now that you know how it works, boost your sales with professional photos!
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
                Is the Vinted app free?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Yes, the app is 100% free to download and use. Vinted takes no commission on sales. Only buyers pay a protection fee (5% + €0.70).
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                How do I create a Vinted account?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Download the app on iOS or Android, click "Sign up", and use your email or a Google/Facebook/Apple account. It's instant!
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Is Vinted secure?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Yes, Vinted offers buyer protection that refunds you if the item doesn't match. Payment is secure and money is held until receipt is confirmed.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                How much can you earn on Vinted?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                It depends on what you sell! Some sellers earn a few dozen euros per month, others several hundred. With good photos and competitive prices, you can sell quickly.
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
              { slug: "how-to-sell-on-vinted", title: "How to Sell on Vinted" },
              { slug: "how-to-buy-on-vinted", title: "How to Buy on Vinted" },
              { slug: "vinted-payment-guide", title: "Vinted Payment: Guide" }
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
};

export default HowDoesVintedWorkPage;
