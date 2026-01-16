import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, XCircle, Clock, TrendingUp, Zap } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export const VintedLookFreeVsProPage: React.FC = () => {
  useSEO({
    title: "Free Vinted Look: The Pro Alternative That Actually Sells | VintDress",
    description: "Create professional Vinted looks that sell. Discover why top sellers choose VintDress over free tools.",
    keywords: "free vinted look, vinted look, vinted style, vinted photo look, create vinted look, vinted style free, vinted outfit",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image Section */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 h-[400px] lg:h-[500px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=1200&h=500&fit=crop"
          alt="Professional Vinted Look"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-white text-4xl lg:text-6xl mb-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              FREE VINTED LOOK
            </h1>
            <p className="font-display font-bold text-pink-pastel text-xl lg:text-2xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              The Pro Alternative That Actually Sells
            </p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 pb-12 lg:pb-20">
        <ArticleNavigation />

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 bg-vinted text-white border-3 border-black font-display font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              GUIDE
            </span>
            <span className="font-body text-sm text-gray-600">By VintDress Team</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">December 26, 2025</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">5 min read</span>
          </div>

          <h1 className="font-display font-bold text-4xl lg:text-5xl text-black mb-4">
            Free Vinted Look: The Pro Alternative That Actually Sells
          </h1>

          <p className="font-body text-lg text-gray-700 mb-6">
            Looking to create Vinted looks for free? Discover why a small investment can multiply your sales by 3.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["Vinted Look", "Vinted Photo", "Vinted Style", "Online Selling", "Fashion"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white border-2 border-black text-black font-body text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Introduction Card */}
        <div className="bg-vinted border-4 border-black p-6 mb-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-display font-bold text-white text-lg">
            You want to create professional looks for your Vinted listings without breaking the bank? You've searched "free Vinted look" hoping to find the miracle solution. We'll give you something better: the truth about what actually works.
          </p>
        </div>

        {/* What is a Vinted Look */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            What is a "Vinted Look"?
          </h2>
          <div className="bg-white border-3 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-body text-gray-700 mb-4">
              A <strong>Vinted look</strong> is a photo where your garment is presented attractively, ideally worn or styled. It's what makes the difference between:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="font-body text-gray-700">A flat photo that goes unnoticed</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="font-body text-gray-700">A stylish photo that generates clicks and sales</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-12">
          <h3 className="font-display font-bold text-2xl text-black mb-4">
            Why Looks Sell
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-mint border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-5xl font-display font-bold text-vinted mb-2">+300%</div>
              <p className="font-display font-bold text-black text-sm">VINTED VIEWS</p>
            </div>
            <div className="bg-pink-pastel border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-5xl font-display font-bold text-vinted mb-2">×3</div>
              <p className="font-display font-bold text-black text-sm">FASTER SALES</p>
            </div>
          </div>
        </section>

        {/* Free Options Reality */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            "Free" Options: The Reality
          </h2>

          {/* Option 1 */}
          <div className="bg-white border-3 border-black p-6 mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-3">
              Option 1: Ask a Friend to Model
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-3">
              <div>
                <p className="font-display font-bold text-sm text-green-600 mb-2">PROS:</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Free, authentic</span></li>
                </ul>
              </div>
              <div>
                <p className="font-display font-bold text-sm text-red-600 mb-2">CONS:</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Depends on availability</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Variable quality</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Considerable time</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Impossible to scale</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Option 2 */}
          <div className="bg-white border-3 border-black p-6 mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-3">
              Option 2: Free Editing Apps
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-3">
              <div>
                <p className="font-display font-bold text-sm text-green-600 mb-2">PROS:</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Accessible</span></li>
                </ul>
              </div>
              <div>
                <p className="font-display font-bold text-sm text-red-600 mb-2">CONS:</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Can't create virtual mannequins</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Visible amateur results</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Significant editing time</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Not suited for worn photos</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Option 3 */}
          <div className="bg-white border-3 border-black p-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-3">
              Option 3: Free Online AI
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-3">
              <div>
                <p className="font-display font-bold text-sm text-green-600 mb-2">PROS:</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">No direct cost</span></li>
                </ul>
              </div>
              <div>
                <p className="font-display font-bold text-sm text-red-600 mb-2">CONS:</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Highly variable quality</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Endless waiting queues</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Watermarks on images</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Clothing distortions</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Your data sold</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Time Value Calculation */}
        <section className="mb-12">
          <div className="bg-pink-pastel border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start gap-4 mb-4">
              <Clock className="w-8 h-8 text-black flex-shrink-0" />
              <div>
                <h3 className="font-display font-bold text-2xl text-black mb-3">
                  The Real Question: How Much is Your Time Worth?
                </h3>
                <p className="font-body text-gray-700 mb-4">
                  Imagine spending <strong>2 hours</strong> looking for a free tool that works, waiting in queues, redoing failed generations, and editing mediocre quality images.
                </p>
                <div className="bg-white border-3 border-black p-4 mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <p className="font-display font-bold text-black text-lg mb-2">
                    If your time is worth €10/hour = €20 "spent" for a mediocre result
                  </p>
                  <p className="font-body text-sm text-gray-600">
                    With VintDress at €3.99, you get 10 professional photos in 5 minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VintDress Features */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            VintDress: Affordable Pro Looks
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {/* Feature 1 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-lg">1</span>
                </div>
                <h3 className="font-display font-bold text-lg text-black">Ultra-Realistic AI Mannequin</h3>
              </div>
              <p className="font-body text-sm text-gray-700">
                FLUX 2 Pro technology (used by fashion brands). Photorealistic rendering impossible to distinguish from a real photo.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-lg">2</span>
                </div>
                <h3 className="font-display font-bold text-lg text-black">Complete Customization</h3>
              </div>
              <p className="font-body text-sm text-gray-700 mb-2">
                Gender, body type (XS to XXL), skin tone (all types), pose (front, profile, dynamic), setting (pro studio, urban, nature...).
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-lg">3</span>
                </div>
                <h3 className="font-display font-bold text-lg text-black">Vinted-Ready Quality</h3>
              </div>
              <p className="font-body text-sm text-gray-700">
                High resolution, no watermark, instant download, format optimized for Vinted.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-lg">4</span>
                </div>
                <h3 className="font-display font-bold text-lg text-black">Bonus: AI Description</h3>
              </div>
              <p className="font-body text-sm text-gray-700">
                Search-optimized title and complete description generated automatically.
              </p>
            </div>
          </div>

          {/* Process */}
          <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6 text-vinted" />
              The 30-Second Process
            </h3>
            <div className="grid sm:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-vinted border-2 border-black mx-auto mb-2 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-xl">1</span>
                </div>
                <p className="font-body text-sm text-black font-semibold">Upload your photo</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-vinted border-2 border-black mx-auto mb-2 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-xl">2</span>
                </div>
                <p className="font-body text-sm text-black font-semibold">Configure your mannequin</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-vinted border-2 border-black mx-auto mb-2 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-xl">3</span>
                </div>
                <p className="font-body text-sm text-black font-semibold">Generate in one click</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-vinted border-2 border-black mx-auto mb-2 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-xl">4</span>
                </div>
                <p className="font-body text-sm text-black font-semibold">Download and publish</p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Comparison: Free vs VintDress
          </h2>
          <div className="overflow-x-auto">
            <div className="bg-white border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] min-w-[600px]">
              <table className="w-full">
                <thead>
                  <tr className="border-b-3 border-black">
                    <th className="p-4 text-left font-display font-bold text-black border-r-3 border-black bg-cream">Criteria</th>
                    <th className="p-4 text-center font-display font-bold text-black border-r-3 border-black">Free</th>
                    <th className="p-4 text-center font-display font-bold text-black bg-mint">VintDress</th>
                  </tr>
                </thead>
                <tbody className="font-body text-sm">
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Quality</td>
                    <td className="p-4 text-center border-r-3 border-black">Variable/Low</td>
                    <td className="p-4 text-center bg-mint font-semibold">Professional</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Time</td>
                    <td className="p-4 text-center border-r-3 border-black">30min - 2h</td>
                    <td className="p-4 text-center bg-mint font-semibold">30 seconds</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Reliability</td>
                    <td className="p-4 text-center border-r-3 border-black">Random</td>
                    <td className="p-4 text-center bg-mint font-semibold">Consistent</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Customization</td>
                    <td className="p-4 text-center border-r-3 border-black">Limited</td>
                    <td className="p-4 text-center bg-mint font-semibold">Complete</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Watermark</td>
                    <td className="p-4 text-center border-r-3 border-black">Often</td>
                    <td className="p-4 text-center bg-mint font-semibold">Never</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Support</td>
                    <td className="p-4 text-center border-r-3 border-black">None</td>
                    <td className="p-4 text-center bg-mint font-semibold">Responsive</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold border-r-3 border-black bg-cream">Price</td>
                    <td className="p-4 text-center border-r-3 border-black">€0 (+ your time)</td>
                    <td className="p-4 text-center bg-mint font-bold text-vinted text-lg">€0.40/photo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Seller Testimonials
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="font-body text-gray-700 mb-4 italic">
                "I was desperately looking for a free tool for my Vinted looks. After wasted hours, I tried VintDress. €3.99 and 10 minutes later, I had 10 photos that generated 5 sales in one week."
              </p>
              <p className="font-display font-bold text-black">— Emma</p>
              <p className="font-body text-sm text-gray-600">Active seller</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="font-body text-gray-700 mb-4 italic">
                "Free cost me sales. My photos were average, my items stagnated. Since VintDress, I sell on average in 4 days instead of 3 weeks."
              </p>
              <p className="font-display font-bold text-black">— James</p>
              <p className="font-body text-sm text-gray-600">Regular seller</p>
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            The Most Profitable Investment
          </h2>

          <div className="bg-vinted border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6" />
              Simple Math
            </h3>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-body text-xs text-gray-600 mb-1">10 photo pack</p>
                <p className="font-display font-bold text-2xl text-black">€3.99</p>
              </div>
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-body text-xs text-gray-600 mb-1">Average Vinted item price</p>
                <p className="font-display font-bold text-2xl text-black">€18</p>
              </div>
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-body text-xs text-gray-600 mb-1">Conversion rate</p>
                <p className="font-display font-bold text-2xl text-black">+200%</p>
              </div>
            </div>
            <div className="bg-pink-pastel border-3 border-black p-4">
              <p className="font-display font-bold text-black text-lg text-center">
                If ONE of your 10 photos generates ONE extra sale = €14.51 net profit
              </p>
            </div>
          </div>

          <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-3">
              Real ROI from Our Users
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-gray-700"><strong>+47% sales</strong> the first month</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-gray-700"><strong>Selling time divided by 3</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-gray-700"><strong>Fewer price negotiations</strong></span>
              </li>
            </ul>
          </div>
        </section>

        {/* Summary */}
        <section className="mb-12">
          <div className="bg-pink-pastel border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-2xl text-black mb-4">
              Summary
            </h2>
            <p className="font-body text-gray-700 mb-4">
              You searched "free Vinted look"? Here's what to remember:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-sm">1</span>
                </div>
                <span className="font-body text-gray-700">Free exists but costs dearly in time and missed sales</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-sm">2</span>
                </div>
                <span className="font-body text-gray-700">Quality makes the difference on such a competitive platform</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-sm">3</span>
                </div>
                <span className="font-body text-gray-700">€0.40 per professional photo is an investment, not an expense</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-sm">4</span>
                </div>
                <span className="font-body text-gray-700">Successful sellers understand this equation</span>
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>How to create a Vinted look for free?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Free options (asking a friend, editing apps, free AI) exist but have significant limitations: variable quality, considerable time, often unusable results for Vinted.
                </p>
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>Why do professional looks sell better?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Professional worn photos generate +300% views and 3x faster sales because buyers can better visualize how the garment looks when worn.
                </p>
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>How much does a professional look cost with VintDress?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Only €0.40 per photo with the 10 credit pack at €3.99. An investment that pays off from the first extra sale.
                </p>
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>Is VintDress suitable for Vinted beginners?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Yes, the interface is simple: upload your photo, configure the mannequin, generate in 30 seconds. No technical skills required.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              Ready to Create Looks That Sell?
            </h2>
            <p className="font-body text-white mb-6 max-w-2xl mx-auto">
              VintDress lets you create professional looks for your Vinted listings at an affordable price. No mandatory subscription, no watermark, no quality compromise.
            </p>
            <Link
              to="/#generator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-4 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              CREATE MY PRO LOOKS
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="font-display font-bold text-2xl text-black mb-6">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              to="/en/articles/ai-mannequin-vinted"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">AI Mannequin Vinted</h3>
              <p className="font-body text-sm text-gray-600">Discover how an AI mannequin can transform your photos.</p>
            </Link>
            <Link
              to="/en/articles/ai-photo-vinted-free-vs-paid"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">Free AI Vinted: Why Pay</h3>
              <p className="font-body text-sm text-gray-600">Understand why investing in quality makes the difference.</p>
            </Link>
            <Link
              to="/en/articles/5-tips-sell-faster-vinted"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">5 Tips to Sell Faster</h3>
              <p className="font-body text-sm text-gray-600">Optimize your sales with these proven strategies.</p>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default VintedLookFreeVsProPage;
