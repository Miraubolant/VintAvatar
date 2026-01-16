import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, CreditCard, Wallet, ArrowRight, CheckCircle, AlertTriangle, Euro, Clock3, Shield, Smartphone } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

const VintedPaymentGuidePage: React.FC = () => {
  useSEO({
    title: "Vinted Payment: How to Receive and Withdraw Money | VintDress",
    description: "Complete guide to the Vinted payment system. Wallet, payment methods, transfer times and how to withdraw your money.",
    keywords: "vinted payment, vinted wallet, withdraw money vinted, vinted transfer, how to receive money vinted",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px] border-b-4 border-black overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=400&fit=crop"
          alt="Vinted payment complete guide"
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
            Vinted Payment: How to Receive and Withdraw Money
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-sm font-body text-gray-700 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>VintDress Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>January 7, 2026</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["vinted payment", "wallet", "withdraw money", "transfer", "PayPal"].map((tag) => (
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
            Just made your first sale on Vinted? Congratulations! But how do you get your money? In this complete guide, we explain everything about the Vinted payment system: from the wallet to bank transfers, including timing and fees. <strong className="text-vinted">Spoiler: it's 100% free for sellers!</strong>
          </p>
        </div>

        {/* Section 1 - Payment methods */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Accepted Payment Methods (Buyer)
          </h2>

          <p className="font-body text-black leading-relaxed mb-6">
            When you buy on Vinted, several payment options are available to you. Here are the accepted methods:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="w-8 h-8 text-vinted" />
                <h3 className="font-display font-bold text-xl text-black">
                  Credit/Debit Card
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                Visa, Mastercard, Maestro... Instant and secure payment. The most used method on Vinted.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <Wallet className="w-8 h-8 text-vinted" />
                <h3 className="font-display font-bold text-xl text-black">
                  PayPal
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                Connect your PayPal account to pay in one click. Buyer protection included.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <Smartphone className="w-8 h-8 text-vinted" />
                <h3 className="font-display font-bold text-xl text-black">
                  Apple Pay / Google Pay
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                Fast mobile payment via your smartphone. Ideal for buying in seconds.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <Euro className="w-8 h-8 text-vinted" />
                <h3 className="font-display font-bold text-xl text-black">
                  Vinted Balance
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                Use money from your sales directly to buy. You can combine balance + card.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 - Vinted Wallet */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            The Vinted Wallet
          </h2>

          <div className="bg-mint border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-6">
            <h3 className="font-display font-bold text-2xl text-black mb-4">
              How Does It Work?
            </h3>
            <p className="font-body text-black leading-relaxed mb-4">
              The Vinted wallet is a virtual wallet integrated into the app. When you sell an item, the money is first credited to your Vinted wallet before you can transfer it to your bank account.
            </p>
            <ul className="font-body text-black space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span><strong>Secure:</strong> Money is protected until transaction validation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span><strong>Accessible:</strong> Visible in the "Wallet" tab of the app</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span><strong>Flexible:</strong> Use it to buy or transfer to your account</span>
              </li>
            </ul>
          </div>

          <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4">
              Where to See Your Balance?
            </h3>
            <ol className="font-body text-black space-y-2">
              <li>1. Open the Vinted app</li>
              <li>2. Go to your profile (icon at bottom right)</li>
              <li>3. Click on "Wallet" or "Balance"</li>
              <li>4. You'll see your available balance and transaction history</li>
            </ol>
          </div>
        </section>

        {/* Section 3 - Payment lifecycle */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Payment Lifecycle
          </h2>

          <p className="font-body text-black leading-relaxed mb-6">
            When someone buys your item, here's what happens step by step:
          </p>

          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                1
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Buyer Purchase
                </h3>
                <p className="font-body text-black">
                  The buyer pays the item price + buyer protection fees. <strong>The money is held</strong> by Vinted pending shipment.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                2
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Package Shipping
                </h3>
                <p className="font-body text-black">
                  You print the label, pack the item and drop off the package. Status changes to "In transit".
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                3
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Buyer Receives Package
                </h3>
                <p className="font-body text-black">
                  The buyer receives the package. They then have <strong>2 days</strong> to validate the order or report a problem.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-mint text-black border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                4
              </div>
              <div className="bg-mint border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Money Available!
                </h3>
                <p className="font-body text-black">
                  If the buyer validates (or after 2 days automatically), <strong>the money is credited to your wallet</strong>. You can now withdraw it!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - Withdraw money */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            How to Withdraw Your Money
          </h2>

          <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-6">
            <h3 className="font-display font-bold text-2xl text-black mb-4">
              Steps to Transfer to Your Bank Account
            </h3>
            <ol className="font-body text-black space-y-3">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-vinted text-white border-2 border-black font-display font-bold flex items-center justify-center text-sm">1</span>
                <span>Go to <strong>Wallet</strong> from your profile</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-vinted text-white border-2 border-black font-display font-bold flex items-center justify-center text-sm">2</span>
                <span>Click on <strong>"Transfer"</strong> or <strong>"Withdraw"</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-vinted text-white border-2 border-black font-display font-bold flex items-center justify-center text-sm">3</span>
                <span>Add your IBAN if not already done</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-vinted text-white border-2 border-black font-display font-bold flex items-center justify-center text-sm">4</span>
                <span>Confirm the amount to transfer</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-mint text-black border-2 border-black font-display font-bold flex items-center justify-center text-sm">5</span>
                <span>Wait <strong>3 to 5 business days</strong> to receive the money</span>
              </li>
            </ol>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <Clock3 className="w-6 h-6 text-vinted" />
                <h3 className="font-display font-bold text-lg text-black">
                  Transfer Times
                </h3>
              </div>
              <ul className="font-body text-black text-sm space-y-1">
                <li>- <strong>3 to 5 business days</strong> on average</li>
                <li>- May vary depending on your bank</li>
                <li>- No transfers on weekends</li>
                <li>- Free with no minimum</li>
              </ul>
            </div>

            <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <Euro className="w-6 h-6 text-vinted" />
                <h3 className="font-display font-bold text-lg text-black">
                  Use Your Balance
                </h3>
              </div>
              <ul className="font-body text-black text-sm space-y-1">
                <li>- Buy directly on Vinted</li>
                <li>- Combine balance + credit card</li>
                <li>- No waiting time</li>
                <li>- Ideal if you buy often</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5 - Fees */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Commissions and Fees
          </h2>

          <div className="bg-mint border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-6">
            <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
              <CheckCircle className="w-7 h-7 text-vinted" />
              Good news: 0% commission for sellers!
            </h3>
            <p className="font-body text-black leading-relaxed">
              Vinted takes <strong>no commission on your sales</strong>. If you sell an item for €20, you receive €20 in your wallet. The buyer pays the protection fees.
            </p>
          </div>

          <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
            <h3 className="font-display font-bold text-xl text-black mb-4">
              What the Buyer Pays
            </h3>
            <ul className="font-body text-black space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Buyer Protection:</strong> 5% of price + €0.70 fixed fee</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Shipping costs:</strong> Variable depending on carrier chosen</span>
              </li>
            </ul>
            <div className="mt-4 p-4 bg-cream border-2 border-black">
              <p className="font-body text-black text-sm">
                <strong>Example:</strong> For a €20 item, the buyer will pay €20 + €1.70 (protection) + shipping = around €25-27 total.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                How long to receive money after a sale?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                After buyer validation (or 2 days auto), money arrives in your wallet. Then expect 3 to 5 business days for the bank transfer.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Is there a minimum amount to withdraw?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                No, you can withdraw from €0.01! There is no minimum amount on Vinted.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Can I receive money on PayPal?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                No, transfers are only made to a bank account (IBAN). PayPal is only accepted for payments, not withdrawals.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Do I need to declare my Vinted income for taxes?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                If you sell personal items occasionally, you're generally not taxable. But if you buy to resell or exceed certain thresholds, you may need to declare. Check your country's tax rules.
              </div>
            </details>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-12 text-center">
          <Shield className="w-12 h-12 text-white mx-auto mb-4" />
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
            Ready to Sell on Vinted?
          </h3>
          <p className="font-body text-white mb-6 max-w-xl mx-auto">
            Now that you've mastered payments, boost your sales with professional photos thanks to VintDress!
          </p>
          <Link
            to="/#generateur"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-3 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            CREATE MY PHOTOS
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Related Articles */}
        <section>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Related Articles
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { slug: "how-to-take-vinted-photos", title: "How to Take Great Photos" },
              { slug: "worn-photos-vinted", title: "Worn Photos Vinted" },
              { slug: "vinted-algorithm-visibility-2025", title: "Vinted Algorithm" }
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

export default VintedPaymentGuidePage;
