import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { Link } from 'react-router-dom';
import {
  Search,
  Eye,
  UserCheck,
  MessageSquare,
  ShoppingCart,
  MapPin,
  Package,
  Shield,
  AlertTriangle,
  CheckCircle,
  Star,
  CreditCard,
  Clock,
  ThumbsUp,
  ArrowRight
} from 'lucide-react';

export default function HowToBuyOnVintedPage() {
  useSEO({
    title: 'How to Buy on Vinted: Complete Buyer Guide 2026',
    description: 'Complete guide to buying on Vinted: find great deals, make offers, secure payment and buyer protection.',
    keywords: 'buy vinted, vinted purchase, how to buy vinted, vinted offer, vinted buyer, vinted deals',
    canonicalUrl: 'https://vintdress.com/en/articles/how-to-buy-on-vinted',
    ogImage: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=800&fit=crop',
  });

  return (
    <div className="min-h-screen bg-grain">
      <article className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-vinted text-white px-4 py-2 font-display font-bold text-sm border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              GUIDE
            </span>
            <span className="text-gray-600 font-medium">9 min read</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-black mb-6 leading-tight">
            How to Buy on Vinted: Complete Buyer Guide 2026
          </h1>

          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Want to find great deals on Vinted but don't know where to start?
            This guide shows you how to find the best pieces, negotiate smartly
            and buy safely.
          </p>

          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=600&fit=crop"
            alt="Shopping on Vinted"
            className="w-full h-64 sm:h-80 lg:h-96 object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          />
        </header>

        {/* Table of contents */}
        <nav className="bg-white border-4 border-black p-6 mb-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-display font-bold text-xl mb-4">In this article</h2>
          <ol className="space-y-2 text-gray-700">
            <li><a href="#find-item" className="hover:text-vinted transition-colors">1. Find the right item</a></li>
            <li><a href="#analyze-listing" className="hover:text-vinted transition-colors">2. Analyze a listing</a></li>
            <li><a href="#check-seller" className="hover:text-vinted transition-colors">3. Check the seller</a></li>
            <li><a href="#make-offer" className="hover:text-vinted transition-colors">4. Make an offer</a></li>
            <li><a href="#purchase-process" className="hover:text-vinted transition-colors">5. Purchase process</a></li>
            <li><a href="#local-pickup" className="hover:text-vinted transition-colors">6. Local pickup</a></li>
            <li><a href="#receipt" className="hover:text-vinted transition-colors">7. Receipt and validation</a></li>
            <li><a href="#protection" className="hover:text-vinted transition-colors">8. Buyer protection</a></li>
            <li><a href="#problems" className="hover:text-vinted transition-colors">9. Common problems</a></li>
          </ol>
        </nav>

        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-mint border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-2xl mb-4">Why buy on Vinted?</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Save up to 90%</strong> on retail prices</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Sustainable fashion</strong>: give clothes a second life</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Unique pieces</strong>: vintage, limited editions</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Buyer protection</strong>: guaranteed refund</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 1: Find the right item */}
        <section id="find-item" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Search className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">1. Find the right item</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              With millions of items on Vinted, knowing how to search effectively is essential.
              Here's how to find exactly what you're looking for.
            </p>

            <div className="bg-white border-4 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Use filters effectively</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Category:</strong> Women, Men, Kids, Home...</li>
                <li><strong>Size:</strong> Be precise with your usual size</li>
                <li><strong>Brand:</strong> Search by specific brand</li>
                <li><strong>Condition:</strong> New, Very Good, Good, Satisfactory</li>
                <li><strong>Price:</strong> Set a min/max budget</li>
                <li><strong>Color:</strong> Filter by desired color</li>
                <li><strong>Location:</strong> For local pickups</li>
              </ul>
            </div>

            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Pro search tips</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Save your searches:</strong> Enable notifications</li>
                <li><strong>Follow sellers:</strong> Follow those with good style</li>
                <li><strong>Precise keywords:</strong> "Zara black blazer size M"</li>
                <li><strong>Spelling variations:</strong> Also search for common misspellings</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Analyze a listing */}
        <section id="analyze-listing" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">2. Analyze a listing</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Before buying, take time to examine the listing in detail.
              A good analysis helps you avoid surprises.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl mb-4">Check the photos</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Clear and well-lit photos</li>
                  <li>Multiple angles (front, back, details)</li>
                  <li>Photos of mentioned flaws</li>
                  <li>Visible label (size, composition)</li>
                  <li>Real photos (not stock images)</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl mb-4">Read the description</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Detailed actual condition</li>
                  <li>Precise measurements (if available)</li>
                  <li>Reason for selling</li>
                  <li>Honestly mentioned flaws</li>
                  <li>Material and care instructions</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-100 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-display font-bold mb-2">Don't hesitate to ask!</h4>
                  <p className="text-gray-700">
                    If info is missing, contact the seller. Ask for additional photos,
                    exact measurements or the condition of certain details. A good seller will respond quickly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Check the seller */}
        <section id="check-seller" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <UserCheck className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">3. Check the seller</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              The seller's profile says a lot about the reliability of the transaction.
              Here are the indicators to check.
            </p>

            <div className="bg-white border-4 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Trust indicators</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span><strong>Ratings:</strong> Average score (aim for 4.5+)</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShoppingCart className="w-5 h-5 text-vinted" />
                  <span><strong>Sales:</strong> Number of successful transactions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <span><strong>Seniority:</strong> Time on Vinted</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-green-500" />
                  <span><strong>Responsiveness:</strong> Average response time</span>
                </div>
              </div>
            </div>

            <div className="bg-red-100 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4 text-red-700">Red flags to avoid</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">&#x2717;</span>
                  <span>New account with no reviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">&#x2717;</span>
                  <span>Many recent negative reviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">&#x2717;</span>
                  <span>Doesn't respond to messages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">&#x2717;</span>
                  <span>Prices too good to be true (counterfeits)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">&#x2717;</span>
                  <span>Requests payment outside Vinted</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Make an offer */}
        <section id="make-offer" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">4. Make an offer</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Negotiating is part of Vinted! But there are rules to follow
              for successful negotiations.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl mb-4">When to negotiate</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Item listed for a long time</li>
                  <li>Price above market value</li>
                  <li>Small flaw mentioned</li>
                  <li>Buying multiple items</li>
                </ul>
              </div>

              <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl mb-4">When to buy direct</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Already very attractive price</li>
                  <li>High-demand item</li>
                  <li>Many "favorites"</li>
                  <li>"Firm price" in listing</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Golden rules of negotiation</h3>
              <ol className="space-y-3 text-gray-700">
                <li><strong>1. Stay polite:</strong> "Hi, would it be possible to do $X?"</li>
                <li><strong>2. Be reasonable:</strong> 10-20% discount maximum</li>
                <li><strong>3. Justify your offer:</strong> "I've seen a similar item at this price"</li>
                <li><strong>4. Propose a bundle:</strong> "I'll take both if you give a discount"</li>
                <li><strong>5. Accept refusal:</strong> Don't negotiate endlessly</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Section 5: Purchase process */}
        <section id="purchase-process" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">5. Purchase process</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-6">
              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-vinted text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 border-black">1</span>
                  <h3 className="font-display font-bold text-xl">Click "Buy"</h3>
                </div>
                <p className="text-gray-700">
                  Click the "Buy" button on the listing. You can also accept an offer
                  from the seller or make a counter-offer.
                </p>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-vinted text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 border-black">2</span>
                  <h3 className="font-display font-bold text-xl">Choose delivery</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Select your preferred delivery method:
                </p>
                <ul className="space-y-1 text-gray-700 ml-4">
                  <li>Parcel relay point</li>
                  <li>Home delivery</li>
                  <li>Express shipping</li>
                  <li>Local pickup</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-vinted text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 border-black">3</span>
                  <h3 className="font-display font-bold text-xl">Secure payment</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Pay with your preferred payment method:
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-gray-100 px-3 py-1 rounded border-2 border-black text-sm">Credit card</span>
                  <span className="bg-gray-100 px-3 py-1 rounded border-2 border-black text-sm">PayPal</span>
                  <span className="bg-gray-100 px-3 py-1 rounded border-2 border-black text-sm">Apple Pay</span>
                  <span className="bg-gray-100 px-3 py-1 rounded border-2 border-black text-sm">Google Pay</span>
                  <span className="bg-gray-100 px-3 py-1 rounded border-2 border-black text-sm">Vinted Balance</span>
                </div>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-vinted text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 border-black">4</span>
                  <h3 className="font-display font-bold text-xl">Order tracking</h3>
                </div>
                <p className="text-gray-700">
                  Track the shipment in the app. You'll receive notifications at each step:
                  sent, in transit, delivered. The seller has 5 days to ship.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Local pickup */}
        <section id="local-pickup" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">6. Local pickup</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Local pickup avoids shipping fees, but requires some precautions.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl mb-4">Advantages</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>No shipping fees</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>See the item before buying</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Immediate transaction</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Try on if possible</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-100 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl mb-4">Safety precautions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    <span>Public and busy place</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    <span>Daytime preferred</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    <span>Tell someone where you're going</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    <span>Check the item on the spot</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Recommended locations</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-mint px-4 py-2 rounded border-2 border-black">Train station</span>
                <span className="bg-mint px-4 py-2 rounded border-2 border-black">Shopping mall</span>
                <span className="bg-mint px-4 py-2 rounded border-2 border-black">Coffee shop</span>
                <span className="bg-mint px-4 py-2 rounded border-2 border-black">Metro/Bus station</span>
                <span className="bg-mint px-4 py-2 rounded border-2 border-black">Public square</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Receipt and validation */}
        <section id="receipt" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Package className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">7. Receipt and validation</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white border-4 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">When you receive the parcel</h3>
              <ol className="space-y-3 text-gray-700">
                <li><strong>1. Check the packaging:</strong> Package damaged? Note it before opening</li>
                <li><strong>2. Film the opening:</strong> In case of dispute, it's proof</li>
                <li><strong>3. Compare to listing:</strong> Condition, color, size as described?</li>
                <li><strong>4. Try the item:</strong> Check size and flaws</li>
              </ol>
            </div>

            <div className="bg-pink-pastel border-4 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-display font-bold mb-2">You have 2 days to validate</h4>
                  <p className="text-gray-700">
                    After receipt, you have 2 days to validate the order or report a problem.
                    After this period, the order is automatically validated and the seller receives the money.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Leave a review</h3>
              <p className="text-gray-700 mb-3">
                After validation, leave an honest review. It helps other buyers!
              </p>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="ml-2 text-gray-700">= Perfect transaction</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Buyer protection */}
        <section id="protection" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">8. Buyer protection</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Vinted offers buyer protection that covers most issues.
              It costs 5% of the price + a fixed fee per transaction.
            </p>

            <div className="bg-white border-4 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">What's covered</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Item not received</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Item significantly different from description</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Item damaged during shipping</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Confirmed counterfeit</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-100 border-4 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">How to open a dispute</h3>
              <ol className="space-y-2 text-gray-700">
                <li><strong>1.</strong> Go to "My Purchases" and select the order</li>
                <li><strong>2.</strong> Click "I have a problem"</li>
                <li><strong>3.</strong> Select the type of problem</li>
                <li><strong>4.</strong> Add photos/evidence</li>
                <li><strong>5.</strong> Describe the issue precisely</li>
                <li><strong>6.</strong> Wait for support response (48-72h)</li>
              </ol>
            </div>

            <div className="bg-red-100 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4 text-red-700">What's NOT covered</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-red-500">&#x2717;</span>
                  <span>You don't like the item anymore (change of mind)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">&#x2717;</span>
                  <span>Size doesn't fit (if correctly stated)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">&#x2717;</span>
                  <span>Flaws mentioned in the listing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">&#x2717;</span>
                  <span>Local pickup without Vinted payment</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 9: Common problems */}
        <section id="problems" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">9. Common problems</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-6">
              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl mb-4">"I can't buy"</h3>
                <p className="text-gray-700 mb-3">Possible solutions:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>Check your internet connection</li>
                  <li>Update the Vinted app</li>
                  <li>Verify your payment method is valid</li>
                  <li>Make sure the item is still available</li>
                  <li>Try from another device</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl mb-4">"My payment was declined"</h3>
                <p className="text-gray-700 mb-3">Possible causes:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>Insufficient funds</li>
                  <li>Expired or blocked card</li>
                  <li>Payment limit reached</li>
                  <li>3D Secure not activated</li>
                  <li>Try another payment method</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl mb-4">"The item doesn't match"</h3>
                <p className="text-gray-700 mb-3">What to do:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>Don't validate the order</li>
                  <li>Take photos of the problem</li>
                  <li>Open a dispute within 2 days</li>
                  <li>Contact the seller to find a solution</li>
                  <li>Vinted support will decide if needed</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-3xl font-display font-bold text-white mb-6">
              Smart buyer checklist
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 border-2 border-white bg-white/20 rounded"></div>
                <span>Clear and detailed photos?</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 border-2 border-white bg-white/20 rounded"></div>
                <span>Complete description?</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 border-2 border-white bg-white/20 rounded"></div>
                <span>Well-rated seller (4.5+)?</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 border-2 border-white bg-white/20 rounded"></div>
                <span>Price consistent with market?</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 border-2 border-white bg-white/20 rounded"></div>
                <span>Questions asked if in doubt?</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 border-2 border-white bg-white/20 rounded"></div>
                <span>Payment through Vinted only?</span>
              </div>
            </div>
          </div>
        </section>

        {/* Related articles */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-6">Related articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/en/articles/vinted-payment-guide"
              className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              <div className="flex items-center gap-3">
                <CreditCard className="w-8 h-8 text-vinted" />
                <div>
                  <h3 className="font-display font-bold">Vinted Payment</h3>
                  <p className="text-gray-600 text-sm">All about payments and withdrawals</p>
                </div>
                <ArrowRight className="w-5 h-5 ml-auto" />
              </div>
            </Link>
            <Link
              to="/en/articles/how-to-sell-on-vinted"
              className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              <div className="flex items-center gap-3">
                <ThumbsUp className="w-8 h-8 text-vinted" />
                <div>
                  <h3 className="font-display font-bold">How to sell on Vinted</h3>
                  <p className="text-gray-600 text-sm">Complete seller guide</p>
                </div>
                <ArrowRight className="w-5 h-5 ml-auto" />
              </div>
            </Link>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <div className="bg-mint border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-2xl font-display font-bold mb-4">Ready to find great deals?</h2>
            <p className="text-gray-700 mb-6">
              With these tips, you have all the keys to shop smart on Vinted.
              Take your time, check listings carefully and don't hesitate to ask
              sellers questions. Happy hunting!
            </p>
            <div className="flex items-center gap-4">
              <span className="text-4xl">🛍️</span>
              <span className="font-display font-bold text-lg">Happy shopping!</span>
            </div>
          </div>
        </section>

        <ArticleNavigation />
      </article>
    </div>
  );
}
