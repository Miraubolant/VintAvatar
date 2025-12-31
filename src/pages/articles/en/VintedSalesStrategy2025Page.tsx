import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, XCircle, TrendingUp, Target, DollarSign, FileText, Users, BarChart, Calendar, Zap } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export const VintedSalesStrategy2025Page: React.FC = () => {
  useSEO({
    title: "Vinted Sales Strategy: Dominate in 2025 | VintDress",
    description: "Vinted sales strategies 2025: pricing, titles, timing. Top sellers' secrets to explode your sales!",
    keywords: "vinted sales strategy 2025, sell more vinted, vinted pricing, optimize vinted sales, vinted business",
  });

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Image Section */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 h-[400px] lg:h-[500px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=500&fit=crop"
          alt="Vinted Sales Strategy 2025"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-white text-4xl lg:text-6xl mb-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              VINTED STRATEGY 2025
            </h1>
            <p className="font-display font-bold text-mint text-xl lg:text-2xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              Dominate the Market This Year
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
              STRATEGY
            </span>
            <span className="font-body text-sm text-gray-600">By VintDress Team</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">November 12, 2025</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">15 min read</span>
          </div>

          <h1 className="font-display font-bold text-4xl lg:text-5xl text-black mb-4">
            Vinted Sales Strategy: Dominate in 2025
          </h1>

          <p className="font-body text-lg text-gray-700 mb-6">
            The secret strategies of top sellers to explode your Vinted sales this year!
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["Strategy", "Sales", "Vinted", "2025", "Business", "E-commerce"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white border-2 border-black text-black font-body text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-vinted border-4 border-black p-6 mb-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-display font-bold text-white text-lg mb-4">
            The Vinted market has never been more competitive. To succeed in 2025, you need more than just a nice photo: you need a real strategy!
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="bg-white border-2 border-black p-3">
              <p className="font-body text-sm text-gray-700">65 million active users</p>
            </div>
            <div className="bg-white border-2 border-black p-3">
              <p className="font-body text-sm text-gray-700">97% of purchases on smartphone</p>
            </div>
          </div>
        </div>

        {/* Chapter 1: Know Your Market */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <Target className="w-8 h-8 text-vinted" />
            Chapter 1: Know Your Market
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Analyze competition */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                Analyze the Competition
              </h3>
              <p className="font-body text-sm text-gray-700 mb-3">
                Price Benchmarking Technique:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Search 10 similar items</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Note prices, conditions and presentations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Position yourself strategically</span>
                </li>
              </ul>
            </div>

            {/* Perfect timing */}
            <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                Winning Time Slots 2025
              </h3>
              <div className="space-y-3">
                <div className="bg-white border-2 border-black p-3">
                  <p className="font-display font-bold text-sm text-black">Sunday 7pm-9pm</p>
                  <p className="font-body text-xs text-gray-600">Peak views (+340%)</p>
                </div>
                <div className="bg-white border-2 border-black p-3">
                  <p className="font-display font-bold text-sm text-black">Wednesday 12pm-2pm</p>
                  <p className="font-body text-xs text-gray-600">Lunch break shopping</p>
                </div>
                <div className="bg-white border-2 border-black p-3">
                  <p className="font-display font-bold text-sm text-black">Friday 5pm-8pm</p>
                  <p className="font-body text-xs text-gray-600">Weekend prep</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 2: Title Optimization */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <FileText className="w-8 h-8 text-vinted" />
            Chapter 2: Title Optimization
          </h2>

          <div className="bg-vinted border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-white mb-4">
              The Magic Formula
            </h3>
            <div className="bg-white border-3 border-black p-4 mb-4">
              <code className="font-display font-bold text-black">
                BRAND + TYPE + UNIQUE DETAIL + SIZE + CONDITION
              </code>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-pink-pastel border-2 border-black p-3">
                <p className="font-body text-xs text-gray-600 mb-1">Bad example</p>
                <p className="font-body text-sm text-gray-700 line-through">"Black dress M"</p>
              </div>
              <div className="bg-mint border-2 border-black p-3">
                <p className="font-body text-xs text-gray-600 mb-1">Good example</p>
                <p className="font-body text-sm text-black font-semibold">"ZARA Black Blazer Dress Gold Buttons Size M Perfect Condition"</p>
              </div>
            </div>
          </div>

          {/* Top 10 keywords */}
          <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4">
              Top 10 Words That Sell
            </h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {["NEW / NEVER WORN", "LIMITED EDITION", "AUTHENTIC VINTAGE", "TRENDING 2025", "PERFECT CONDITION",
                "RARE PIECE", "PRIVATE COLLECTION", "BARGAIN PRICE", "URGENT SALE", "LAST ONE"].map((word, i) => (
                <div key={i} className="bg-mint border-2 border-black p-2 text-center">
                  <span className="font-display font-bold text-xs text-black">{i + 1}. {word}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chapter 3: Pricing Strategy */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <DollarSign className="w-8 h-8 text-vinted" />
            Chapter 3: Pricing Strategy
          </h2>

          <div className="bg-pink-pastel border-3 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-3">
              Pricing Psychology
            </h3>
            <ul className="space-y-2">
              <li className="flex gap-2"><Zap className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">End with <strong>9</strong> or <strong>5</strong>: $19, $25, $35</span></li>
              <li className="flex gap-2"><Zap className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">High initial price then "discount"</span></li>
              <li className="flex gap-2"><Zap className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Bundle deals to increase cart value</span></li>
            </ul>
          </div>

          {/* Pricing table */}
          <div className="overflow-x-auto">
            <div className="bg-white border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] min-w-[600px]">
              <h3 className="font-display font-bold text-xl text-black p-4 border-b-3 border-black bg-cream">
                2025 Pricing Guide
              </h3>
              <table className="w-full">
                <thead>
                  <tr className="border-b-3 border-black">
                    <th className="p-4 text-left font-display font-bold text-black border-r-3 border-black bg-cream">Category</th>
                    <th className="p-4 text-center font-display font-bold text-black border-r-3 border-black">New</th>
                    <th className="p-4 text-center font-display font-bold text-black border-r-3 border-black">Very Good</th>
                    <th className="p-4 text-center font-display font-bold text-black">Good</th>
                  </tr>
                </thead>
                <tbody className="font-body text-sm">
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Fast Fashion</td>
                    <td className="p-4 text-center border-r-3 border-black">40-60%</td>
                    <td className="p-4 text-center border-r-3 border-black">30-40%</td>
                    <td className="p-4 text-center">20-30%</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Premium Brands</td>
                    <td className="p-4 text-center border-r-3 border-black">50-70%</td>
                    <td className="p-4 text-center border-r-3 border-black">40-50%</td>
                    <td className="p-4 text-center">30-40%</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Luxury/Designer</td>
                    <td className="p-4 text-center border-r-3 border-black">60-80%</td>
                    <td className="p-4 text-center border-r-3 border-black">50-60%</td>
                    <td className="p-4 text-center">40-50%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Chapter 4: Description */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Chapter 4: Description That Converts
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Template */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-4">
                Winning Template
              </h3>
              <div className="space-y-3">
                <div className="bg-vinted border-2 border-black p-3">
                  <p className="font-display font-bold text-white text-sm">EMOTIONAL HOOK</p>
                </div>
                <div className="bg-mint border-2 border-black p-3">
                  <p className="font-display font-bold text-black text-sm">DETAILS</p>
                  <p className="font-body text-xs text-gray-700">Brand, size, materials, condition</p>
                </div>
                <div className="bg-pink-pastel border-2 border-black p-3">
                  <p className="font-display font-bold text-black text-sm">PRACTICAL INFO</p>
                  <p className="font-body text-xs text-gray-700">Shipping, packaging, questions</p>
                </div>
              </div>
            </div>

            {/* Storytelling */}
            <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-4">
                Powerful Storytelling
              </h3>
              <div className="space-y-3">
                <div className="bg-white border-2 border-black p-3">
                  <p className="font-body text-xs text-gray-600 mb-1">Basic</p>
                  <p className="font-body text-sm text-gray-700">"Levi's 501 jeans size 28, good condition"</p>
                </div>
                <div className="bg-white border-2 border-black p-3">
                  <p className="font-body text-xs text-gray-600 mb-1">Transformed</p>
                  <p className="font-body text-sm text-black">"These vintage Levi's 501 have soul! Found in a Parisian thrift store, they have that special something."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 5: Stock Management */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Chapter 5: Stock Management
          </h2>

          <div className="bg-vinted border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-white mb-4">
              The 30-Day Strategy
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-display font-bold text-vinted text-lg mb-1">Day 1-10</p>
                <p className="font-body text-sm text-gray-700">Standard price</p>
              </div>
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-display font-bold text-vinted text-lg mb-1">Day 11-20</p>
                <p className="font-body text-sm text-gray-700">-10% + boost</p>
              </div>
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-display font-bold text-vinted text-lg mb-1">Day 21-30</p>
                <p className="font-body text-sm text-gray-700">-20% + repost</p>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 6: Customer Relations */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <Users className="w-8 h-8 text-vinted" />
            Chapter 6: Customer Relations 2025
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                Exceptional Customer Service
              </h3>
              <ul className="space-y-2">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Response in less than 2 hours</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Additional photos on request</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Flexibility in negotiations</span></li>
              </ul>
            </div>

            <div className="bg-pink-pastel border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                In-House VIP Program
              </h3>
              <div className="space-y-2">
                <div className="bg-white border-2 border-black p-3">
                  <p className="font-display font-bold text-sm text-black">5% off 2nd purchase</p>
                </div>
                <div className="bg-white border-2 border-black p-3">
                  <p className="font-display font-bold text-sm text-black">10% off 3rd purchase</p>
                </div>
                <div className="bg-white border-2 border-black p-3">
                  <p className="font-display font-bold text-sm text-black">Priority access to new items</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 7: Analytics */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <BarChart className="w-8 h-8 text-vinted" />
            Chapter 7: Analytics and Optimization
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                KPIs to Monitor
              </h3>
              <ul className="space-y-2">
                <li className="flex gap-2"><TrendingUp className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">View rate per item</span></li>
                <li className="flex gap-2"><TrendingUp className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Average time to sale</span></li>
                <li className="flex gap-2"><TrendingUp className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Negotiation rate</span></li>
                <li className="flex gap-2"><TrendingUp className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Customer satisfaction (reviews)</span></li>
              </ul>
            </div>

            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                Constant A/B Testing
              </h3>
              <div className="space-y-2">
                <div className="bg-cream border-2 border-black p-2">
                  <p className="font-body text-sm text-gray-700">Different titles</p>
                </div>
                <div className="bg-cream border-2 border-black p-2">
                  <p className="font-body text-sm text-gray-700">Hook prices</p>
                </div>
                <div className="bg-cream border-2 border-black p-2">
                  <p className="font-body text-sm text-gray-700">Posting times</p>
                </div>
                <div className="bg-cream border-2 border-black p-2">
                  <p className="font-body text-sm text-gray-700">Photo styles</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 8: Trends */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <Calendar className="w-8 h-8 text-vinted" />
            Chapter 8: Fashion Trends 2025
          </h2>

          <div className="bg-vinted border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-white mb-4">
              Top Trends 2025
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {["Intensified Y2K revival", "Sustainable fashion", "Romantic cottagecore", "Urban tech wear", "Indie sleaze comeback"].map((trend) => (
                <div key={trend} className="bg-white border-2 border-black p-3">
                  <p className="font-body text-sm text-black">{trend}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 30-Day Action Plan */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            30-Day Action Plan
          </h2>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-12 h-12 bg-vinted border-2 border-black mx-auto mb-3 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-display font-bold text-white text-xl">1</span>
              </div>
              <p className="font-display font-bold text-black mb-1">Week 1</p>
              <p className="font-body text-xs text-gray-700">Complete listing audit</p>
            </div>
            <div className="bg-white border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-12 h-12 bg-vinted border-2 border-black mx-auto mb-3 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-display font-bold text-white text-xl">2</span>
              </div>
              <p className="font-display font-bold text-black mb-1">Week 2</p>
              <p className="font-body text-xs text-gray-700">Title/description optimization</p>
            </div>
            <div className="bg-white border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-12 h-12 bg-vinted border-2 border-black mx-auto mb-3 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-display font-bold text-white text-xl">3</span>
              </div>
              <p className="font-display font-bold text-black mb-1">Week 3</p>
              <p className="font-body text-xs text-gray-700">Price and photo tests</p>
            </div>
            <div className="bg-white border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-12 h-12 bg-vinted border-2 border-black mx-auto mb-3 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-display font-bold text-white text-xl">4</span>
              </div>
              <p className="font-display font-bold text-black mb-1">Week 4</p>
              <p className="font-body text-xs text-gray-700">Analysis and adjustments</p>
            </div>
          </div>
        </section>

        {/* Guaranteed Results */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-2xl text-white mb-4">
              Guaranteed Results
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-display font-bold text-4xl text-vinted mb-1">+400%</p>
                <p className="font-body text-sm text-gray-700">Average views</p>
              </div>
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-display font-bold text-4xl text-vinted mb-1">÷2</p>
                <p className="font-body text-sm text-gray-700">Sale time</p>
              </div>
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-display font-bold text-4xl text-vinted mb-1">+60%</p>
                <p className="font-body text-sm text-gray-700">Average cart</p>
              </div>
            </div>
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
                <span>What is the best pricing strategy on Vinted?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Use psychological prices (ending in 9 or 5), offer bundles and adjust based on condition and brand.
                </p>
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>How to stand out among 65 million users?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Professional AI photos, optimized titles with powerful keywords, storytelling descriptions and responsive customer service.
                </p>
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>What is the best title for a Vinted listing?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  The winning formula: BRAND + TYPE + UNIQUE DETAIL + SIZE + CONDITION. Ex: "ZARA Black Blazer Dress Gold Buttons Size M Perfect Condition"
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              Ready to Dominate Vinted in 2025?
            </h2>
            <p className="font-body text-white mb-6 max-w-2xl mx-auto">
              Apply these strategies now and turn Vinted into your cash machine!
            </p>
            <Link
              to="/#generator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-4 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              START NOW
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
              to="/en/articles/5-tips-sell-faster-vinted"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">5 Tips to Sell Faster</h3>
              <p className="font-body text-sm text-gray-600">Boost your sales with these proven tips.</p>
            </Link>
            <Link
              to="/en/articles/complete-guide-vinted-photos-2025"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">Complete Guide Vinted Photos 2025</h3>
              <p className="font-body text-sm text-gray-600">All the techniques for photos that sell.</p>
            </Link>
            <Link
              to="/en/articles/vinted-algorithm-visibility-2025"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">Vinted Algorithm Visibility</h3>
              <p className="font-body text-sm text-gray-600">Understand the algorithm to maximize your visibility.</p>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default VintedSalesStrategy2025Page;
