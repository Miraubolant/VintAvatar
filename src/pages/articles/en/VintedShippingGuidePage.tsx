import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, CheckCircle, Package, Truck, MapPin, AlertTriangle, Star, ArrowRight, Euro, Shield, Box } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export const VintedShippingGuidePage: React.FC = () => {
  useSEO({
    title: "Vinted Shipping: Complete Parcel Guide 2026 | VintDress",
    description: "How to ship on Vinted? Complete guide: shipping options, fees, packaging, drop-off points. Everything you need to know about Vinted shipping.",
    keywords: "vinted shipping, send parcel vinted, vinted shipping costs, how to ship vinted, vinted drop off",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px] border-b-4 border-black overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1200&h=400&fit=crop"
          alt="Vinted Shipping - Complete parcel guide"
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
            Vinted Shipping: Complete Parcel Guide 2026
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
              <span>January 7, 2026</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["vinted shipping", "parcel delivery", "shipping costs", "drop-off point", "VintDress"].map((tag) => (
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
            Just sold your first item on Vinted? Congratulations! Now you need to ship it to the buyer. Don't panic: Vinted shipping is simple and well-organized. In this guide, you'll learn <strong className="text-vinted">how to send a parcel</strong>, who pays the fees, and how to get 5-star reviews with careful shipping.
          </p>
        </div>

        {/* Section 1 - Shipping options */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Available Shipping Options
          </h2>

          <div className="space-y-6">
            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <Truck className="w-6 h-6 text-vinted" />
                Parcel Locker / Drop-off Points
              </h3>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Price</strong>: From €2.79</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Delivery time</strong>: 3-5 business days</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Advantage</strong>: Cheapest option, many drop-off locations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Max weight</strong>: Up to 30kg depending on format</span>
                </li>
              </ul>
            </div>

            <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <Package className="w-6 h-6 text-vinted" />
                Standard Postal Service
              </h3>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Price</strong>: From €4.29</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Delivery time</strong>: 2-3 business days</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Advantage</strong>: Home delivery possible, fast</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Max weight</strong>: Up to 30kg</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-vinted" />
                In-Person Meetup
              </h3>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Price</strong>: Free!</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Advantage</strong>: No fees, direct meeting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Disadvantage</strong>: Requires travel, no Vinted protection</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2 - Who pays what */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Who Pays What?
          </h2>

          <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
            <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
              <Euro className="w-6 h-6 text-vinted" />
              Fee Breakdown
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-white border-3 border-black">
                <p className="font-display font-bold text-black mb-2">Shipping costs</p>
                <p className="font-body text-black">Paid by the <strong className="text-vinted">buyer</strong>. You don't pay anything!</p>
              </div>
              <div className="p-4 bg-white border-3 border-black">
                <p className="font-display font-bold text-black mb-2">Buyer Protection</p>
                <p className="font-body text-black">5% of price + €0.70, paid by the <strong className="text-vinted">buyer</strong></p>
              </div>
              <div className="p-4 bg-white border-3 border-black">
                <p className="font-display font-bold text-black mb-2">Seller commission</p>
                <p className="font-body text-black"><strong className="text-vinted">0%!</strong> You receive 100% of the sale price</p>
              </div>
            </div>
          </div>

          <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4">Concrete Example</h3>
            <div className="font-body text-black space-y-2">
              <p>You sell a t-shirt for <strong>€15</strong></p>
              <p>Buyer pays: €15 + €3.50 (shipping) + €1.45 (protection) = <strong>€19.95</strong></p>
              <p>You receive: <strong className="text-vinted">€15</strong> (100% of sale price)</p>
            </div>
          </div>
        </section>

        {/* Section 3 - Shipping steps */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            How to Ship a Parcel Step by Step
          </h2>

          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                1
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Receive the sale notification
                </h3>
                <p className="font-body text-black">
                  When someone buys, you get a notification. You have <strong>5 days</strong> to ship the parcel.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                2
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Print the prepaid label
                </h3>
                <p className="font-body text-black">
                  Go to "My Sales" → "Download label". Print it (or show the QR code at the drop-off point).
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                3
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Pack carefully
                </h3>
                <p className="font-body text-black">
                  Use a box or shipping pouch. Protect the item from moisture with a plastic bag.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                4
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Drop off at the collection point
                </h3>
                <p className="font-body text-black">
                  Go to the indicated drop-off point. Keep the receipt as proof of shipping.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                5
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Confirm shipment in the app
                </h3>
                <p className="font-body text-black">
                  Click "Mark as shipped". The buyer can then track the parcel in real time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - Packaging */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Packing Your Parcel Right
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <Box className="w-6 h-6 text-vinted" />
                Recommended Materials
              </h3>
              <ul className="space-y-2 font-body text-black">
                <li>• Plastic shipping pouches</li>
                <li>• Recycled cardboard (shoe boxes)</li>
                <li>• Tissue or kraft paper</li>
                <li>• Plastic bags for moisture protection</li>
                <li>• Strong tape</li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <Star className="w-6 h-6 text-vinted" />
                Tips for 5-Star Reviews
              </h3>
              <ul className="space-y-2 font-body text-black">
                <li>• Add a thank you note</li>
                <li>• Fold clothes neatly</li>
                <li>• Light fragrance (optional)</li>
                <li>• Package like a gift</li>
                <li>• Ship quickly (within 24-48h)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5 - Common problems */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Common Problems and Solutions
          </h2>

          <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="space-y-6">
              <div className="border-b-2 border-black pb-4">
                <div className="flex items-start gap-3 mb-2">
                  <AlertTriangle className="w-5 h-5 text-vinted flex-shrink-0 mt-1" />
                  <p className="font-display font-bold text-black">Lost parcel</p>
                </div>
                <p className="font-body text-black ml-8">
                  Contact Vinted support with your drop-off receipt. Buyer Protection covers this case, you'll be reimbursed.
                </p>
              </div>

              <div className="border-b-2 border-black pb-4">
                <div className="flex items-start gap-3 mb-2">
                  <AlertTriangle className="w-5 h-5 text-vinted flex-shrink-0 mt-1" />
                  <p className="font-display font-bold text-black">Damaged parcel</p>
                </div>
                <p className="font-body text-black ml-8">
                  The buyer must report the problem with photos. Buyer Protection will handle it.
                </p>
              </div>

              <div className="border-b-2 border-black pb-4">
                <div className="flex items-start gap-3 mb-2">
                  <AlertTriangle className="w-5 h-5 text-vinted flex-shrink-0 mt-1" />
                  <p className="font-display font-bold text-black">Buyer doesn't collect the parcel</p>
                </div>
                <p className="font-body text-black ml-8">
                  After 14 days at the collection point, the parcel is returned. You can cancel the sale or reship.
                </p>
              </div>

              <div>
                <div className="flex items-start gap-3 mb-2">
                  <AlertTriangle className="w-5 h-5 text-vinted flex-shrink-0 mt-1" />
                  <p className="font-display font-bold text-black">Return requested</p>
                </div>
                <p className="font-body text-black ml-8">
                  If the item doesn't match, the buyer can request a return. Return shipping is their responsibility unless you made an error.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 - In-person meetup */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            In-Person Meetup: Safety Tips
          </h2>

          <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-vinted" />
              Precautions to Take
            </h3>
            <ul className="space-y-3 font-body text-black">
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Public place</strong>: Café, shopping center, train station... Never at home!</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Timing</strong>: During daytime, in a busy area</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Payment</strong>: Wait for Vinted payment confirmation BEFORE handing over the item</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Company</strong>: If possible, bring someone with you</span>
              </li>
            </ul>
            <div className="mt-4 p-4 bg-white border-3 border-black">
              <p className="font-body text-black text-sm">
                <strong>Note:</strong> In-person meetups are not covered by Vinted protection. In case of dispute, you have no recourse.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-12 text-center">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
            Before shipping, optimize your listings!
          </h3>
          <p className="font-body text-white mb-6">
            Professional photos = more sales = more parcels to ship. Try VintDress!
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
                Who pays shipping on Vinted?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Shipping costs are paid by the buyer. As a seller, you pay nothing: you receive 100% of the sale price.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Where do I drop off my Vinted parcel?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Depending on the option chosen by the buyer: parcel locker, post office, or meeting point for in-person handover.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                How long do I have to ship my parcel?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                You have 5 business days to ship your parcel after the sale. After that, the sale may be automatically canceled.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                What if I don't have a printer?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                You can use the QR code provided by Vinted. Show it directly at the drop-off point where it will be scanned and the label printed on site.
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
              { slug: "vinted-payment-guide", title: "Vinted Payment: Complete Guide" },
              { slug: "how-to-sell-on-vinted", title: "How to Sell on Vinted" },
              { slug: "vinted-problems-solutions", title: "Vinted Problems: Solutions" }
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

export default VintedShippingGuidePage;
