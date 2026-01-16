import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, AlertTriangle, HelpCircle, Lock, Trash2, CreditCard, Package, Users, XCircle, Euro, Headphones, ArrowRight, CheckCircle, Shield } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export const VintedProblemsAndSolutionsPage: React.FC = () => {
  useSEO({
    title: "Vinted Problems: Solutions to Common Issues 2026 | VintDress",
    description: "Solve all your Vinted problems: login, blocked account, deleted items, payment, disputes. Complete solutions guide 2026.",
    keywords: "vinted problems, vinted help, vinted support, vinted blocked account, vinted dispute, contact vinted",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px] border-b-4 border-black overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=400&fit=crop"
          alt="Vinted Problems - Solutions and Help"
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
            FAQ
          </div>

          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-black mb-6 leading-tight">
            Vinted Problems: Solutions to Common Issues 2026
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-sm font-body text-gray-700 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>VintDress Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>11 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>January 7, 2026</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["vinted problems", "vinted help", "support", "disputes", "VintDress"].map((tag) => (
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
            Having a problem on Vinted? Don't panic! In this guide, you'll find <strong className="text-vinted">solutions to the most common problems</strong>: login issues, blocked account, deleted items, payment, disputes... Every situation has a solution.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-12">
          <h2 className="font-display font-bold text-xl text-black mb-4">Quick Navigation</h2>
          <ul className="space-y-2 font-body text-black">
            <li><a href="#login" className="text-vinted hover:underline">1. Login Problems</a></li>
            <li><a href="#account" className="text-vinted hover:underline">2. Blocked or Suspended Account</a></li>
            <li><a href="#items" className="text-vinted hover:underline">3. Deleted Items</a></li>
            <li><a href="#payment" className="text-vinted hover:underline">4. Payment Problems</a></li>
            <li><a href="#shipping" className="text-vinted hover:underline">5. Shipping Problems</a></li>
            <li><a href="#disputes" className="text-vinted hover:underline">6. Buyer/Seller Disputes</a></li>
            <li><a href="#cancel" className="text-vinted hover:underline">7. Cancel a Transaction</a></li>
            <li><a href="#fees" className="text-vinted hover:underline">8. Commissions and Fees</a></li>
            <li><a href="#support" className="text-vinted hover:underline">9. Contact Vinted Support</a></li>
          </ul>
        </div>

        {/* Section 1 - Login Problems */}
        <section id="login" className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <Lock className="w-8 h-8 text-vinted" />
            Login Problems
          </h2>

          <div className="space-y-6">
            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-black" />
                "I can't log in"
              </h3>
              <ul className="space-y-3 font-body text-black">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Check that you're using the correct email address</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Click "Forgot password" to reset it</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Uninstall and reinstall the app</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Try logging in via the website</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Forgotten Password</h3>
              <ol className="space-y-2 font-body text-black">
                <li><strong>1.</strong> Go to the login screen</li>
                <li><strong>2.</strong> Click "Forgot password"</li>
                <li><strong>3.</strong> Enter your email</li>
                <li><strong>4.</strong> Check your spam if you don't receive the email</li>
                <li><strong>5.</strong> Click the link and create a new password</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Section 2 - Blocked Account */}
        <section id="account" className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <XCircle className="w-8 h-8 text-vinted" />
            Blocked or Suspended Account
          </h2>

          <div className="space-y-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Possible Reasons for Blocking</h3>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Violation of Terms of Service</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Selling prohibited items (counterfeits, dangerous products)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Suspicious or fraudulent behavior</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Multiple reports from other users</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Attempting transactions outside the platform</span>
                </li>
              </ul>
            </div>

            <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-vinted" />
                How to Recover Your Account
              </h3>
              <ol className="space-y-2 font-body text-black">
                <li><strong>1.</strong> Contact Vinted support via the help center</li>
                <li><strong>2.</strong> Calmly explain your situation</li>
                <li><strong>3.</strong> Provide any requested evidence</li>
                <li><strong>4.</strong> Be patient (typically 3-7 days)</li>
                <li><strong>5.</strong> If refused, you can appeal once</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Section 3 - Deleted Items */}
        <section id="items" className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <Trash2 className="w-8 h-8 text-vinted" />
            Deleted Items
          </h2>

          <div className="space-y-6">
            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Why Vinted Removes Items</h3>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Counterfeits</strong>: suspicious branded items</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Non-compliant photos</strong>: web images, watermarks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Prohibited category</strong>: cosmetics, medications, etc.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Unrealistic price</strong>: too low or too high</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Misleading description</strong>: false information</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">How to Avoid Deletion</h3>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Only use your own photos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Honestly describe the item's condition</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Photograph the label for branded items</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Check the list of prohibited items</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4 - Payment Problems */}
        <section id="payment" className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <CreditCard className="w-8 h-8 text-vinted" />
            Payment Problems
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Payment Declined</h3>
              <ul className="space-y-2 font-body text-black text-sm">
                <li>• Check your card balance</li>
                <li>• Try a different card</li>
                <li>• Use PayPal as an alternative</li>
                <li>• Contact your bank (security block)</li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Money on Hold</h3>
              <ul className="space-y-2 font-body text-black text-sm">
                <li>• Normal for 2 days after delivery</li>
                <li>• If dispute: wait for resolution</li>
                <li>• Check status in your wallet</li>
                <li>• Contact support if 5+ days</li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Transfer Not Received</h3>
              <ul className="space-y-2 font-body text-black text-sm">
                <li>• Normal delay: 3-5 business days</li>
                <li>• Check your registered IBAN</li>
                <li>• Make sure you requested the transfer</li>
                <li>• Contact support after 7 days</li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Wallet Unavailable</h3>
              <ul className="space-y-2 font-body text-black text-sm">
                <li>• Verify your identity if requested</li>
                <li>• Wait for any dispute to end</li>
                <li>• Log out/log back in</li>
                <li>• Update the app</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5 - Shipping Problems */}
        <section id="shipping" className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <Package className="w-8 h-8 text-vinted" />
            Shipping Problems
          </h2>

          <div className="space-y-6">
            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Lost Package</h3>
              <ol className="space-y-2 font-body text-black">
                <li><strong>1.</strong> Check the tracking (may be delayed)</li>
                <li><strong>2.</strong> Wait 14 days after shipping</li>
                <li><strong>3.</strong> Open a dispute in the transaction</li>
                <li><strong>4.</strong> Vinted investigates with the carrier</li>
                <li><strong>5.</strong> Automatic refund if confirmed lost</li>
              </ol>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Damaged Package</h3>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Take photos BEFORE opening the package</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Report the problem within 2 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Open a dispute with photo evidence</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Keep the package if requested</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6 - Disputes */}
        <section id="disputes" className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <Users className="w-8 h-8 text-vinted" />
            Buyer/Seller Disputes
          </h2>

          <div className="space-y-6">
            <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">How to Open a Dispute</h3>
              <ol className="space-y-2 font-body text-black">
                <li><strong>1.</strong> Go to "My purchases" or "My sales"</li>
                <li><strong>2.</strong> Select the relevant transaction</li>
                <li><strong>3.</strong> Click "I have a problem"</li>
                <li><strong>4.</strong> Choose the type of problem</li>
                <li><strong>5.</strong> Add photos and explanations</li>
                <li><strong>6.</strong> Submit the dispute to Vinted</li>
              </ol>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-4">Item Not as Described</h3>
                <p className="font-body text-black text-sm mb-3">
                  The item doesn't match the description, has unmentioned defects, or is a counterfeit.
                </p>
                <p className="font-body text-black text-sm">
                  <strong>Solution:</strong> Open a dispute within 2 days with comparative photos.
                </p>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-4">Item Not Received</h3>
                <p className="font-body text-black text-sm mb-3">
                  The package doesn't arrive despite "delivered" status or exceeds delivery time.
                </p>
                <p className="font-body text-black text-sm">
                  <strong>Solution:</strong> Wait 14 days then open a dispute for investigation.
                </p>
              </div>
            </div>

            <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-vinted" />
                Buyer Protection: What's Covered
              </h3>
              <ul className="space-y-2 font-body text-black">
                <li>• Item not received</li>
                <li>• Item significantly different from description</li>
                <li>• Counterfeit</li>
                <li>• Item damaged during shipping</li>
              </ul>
              <p className="font-body text-black text-sm mt-4 italic">
                Note: Disagreements about size or color (if well described) are generally not covered.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7 - Cancel Transaction */}
        <section id="cancel" className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <XCircle className="w-8 h-8 text-vinted" />
            Cancel a Transaction
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">As a Seller</h3>
              <ul className="space-y-2 font-body text-black text-sm">
                <li>• Possible before shipping the package</li>
                <li>• Go to the conversation with the buyer</li>
                <li>• Click "Cancel order"</li>
                <li>• Buyer is automatically refunded</li>
                <li>• Possible reputation impact if frequent</li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">As a Buyer</h3>
              <ul className="space-y-2 font-body text-black text-sm">
                <li>• No direct cancellation possible</li>
                <li>• Ask the seller to cancel</li>
                <li>• If seller refuses, wait for delivery</li>
                <li>• You can refuse the package at pickup</li>
                <li>• Open a dispute if there's a real problem</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 8 - Fees */}
        <section id="fees" className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <Euro className="w-8 h-8 text-vinted" />
            Commissions and Fees
          </h2>

          <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
            <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-vinted" />
              Does Vinted Take Commission?
            </h3>
            <p className="font-body text-black leading-relaxed mb-4">
              <strong className="text-vinted">NO for sellers!</strong> You receive 100% of the selling price. This is what sets Vinted apart from other platforms.
            </p>
          </div>

          <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4">What the Buyer Pays</h3>
            <ul className="space-y-3 font-body text-black">
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Buyer Protection:</strong> 5% of price + €0.70</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Shipping:</strong> Varies by chosen carrier</span>
              </li>
            </ul>
            <div className="mt-4 p-4 bg-cream border-2 border-black">
              <p className="font-body text-black text-sm">
                <strong>Example:</strong> Item €20 + Protection €1.70 + Shipping €4.50 = <strong>€26.20 total</strong><br />
                Seller receives: <strong>€20</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Section 9 - Contact Support */}
        <section id="support" className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <Headphones className="w-8 h-8 text-vinted" />
            Contact Vinted Support
          </h2>

          <div className="space-y-6">
            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Via the App</h3>
              <ol className="space-y-2 font-body text-black">
                <li><strong>1.</strong> Profile → Settings</li>
                <li><strong>2.</strong> Help Center</li>
                <li><strong>3.</strong> Search for your issue</li>
                <li><strong>4.</strong> If no solution → "Contact us"</li>
                <li><strong>5.</strong> Fill out the detailed form</li>
              </ol>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Tips for Getting Help Quickly</h3>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Clearly explain your problem in one sentence</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Add screenshots</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Include the transaction number if applicable</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Be patient (response time: 24-72h)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Don't send repeated messages (it slows things down)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-12 text-center">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
            Avoid Problems, Sell Better!
          </h3>
          <p className="font-body text-white mb-6">
            Professional quality photos reduce disputes and increase your sales.
          </p>
          <Link
            to="/#generateur"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-3 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            CREATE MY PRO PHOTOS
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
                How long does a Vinted dispute last?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                On average 3 to 7 business days. Complex cases can take up to 14 days. Vinted examines evidence from both parties before deciding.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Can I recover a banned account?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Sometimes yes. Contact support with explanations and evidence. You have one appeal. If the ban is permanent, you won't be able to create a new account (identity verification).
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                My money is on hold, what should I do?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Money is held until buyer confirmation (2 days after receipt). If there's an ongoing dispute, wait for resolution. If 5+ days with no reason, contact support.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                How to avoid scams on Vinted?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Never communicate outside the app, never accept external payment, beware of prices that are too low, check seller/buyer reviews, and always use Vinted's payment system.
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
              { slug: "vinted-payment-guide", title: "Vinted Payment: Guide" },
              { slug: "vinted-shipping-guide", title: "Vinted Shipping" },
              { slug: "how-does-vinted-work", title: "How Does Vinted Work" }
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

export default VintedProblemsAndSolutionsPage;
