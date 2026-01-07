import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, Camera, CheckCircle, XCircle, Star, ArrowRight, Lightbulb, Smartphone, Sun, Image } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

const HowToTakeVintedPhotosPage: React.FC = () => {
  useSEO({
    title: "How to Take Great Vinted Photos in 2026 | VintDress",
    description: "Complete guide to taking stunning photos for Vinted. Techniques, equipment, and tips for photos that sell. AI mannequin worn photos.",
    keywords: "vinted photos, vinted presentation, AI mannequin, how to take vinted photos, worn photos vinted",
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px] border-b-4 border-black overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&h=400&fit=crop"
          alt="How to take great Vinted photos"
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
            How to Take Great Vinted Photos in 2026
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
            {["vinted photos", "vinted presentation", "AI mannequin", "worn photos", "Vinted sales"].map((tag) => (
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
            On Vinted, <strong className="text-vinted">90% of purchase decisions are visual</strong>. Your photos are your first and often only sales argument. A listing with great photos attracts up to 5 times more views than one with mediocre photos. In this complete guide, you'll discover all the techniques to take photos that actually convert.
          </p>
        </div>

        {/* Section 1 - The 3 methods */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            The 3 Presentation Methods
          </h2>

          <p className="font-body text-black leading-relaxed mb-6">
            There are three main ways to photograph your clothes on Vinted. Each has its advantages and disadvantages. Here's a detailed comparison to help you choose.
          </p>

          <div className="space-y-6">
            {/* Flat lay */}
            <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <Image className="w-6 h-6 text-vinted" />
                Flat Lay Photography
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="font-display font-bold text-green-700 mb-2">Advantages:</p>
                  <ul className="space-y-1 font-body text-black text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Easy and quick to do</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>No special equipment needed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Shows details and patterns well</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-display font-bold text-red-700 mb-2">Disadvantages:</p>
                  <ul className="space-y-1 font-body text-black text-sm">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Hard to visualize the fit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Less visually appealing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Lower conversion rate</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="font-body text-black text-sm italic">
                Best for: accessories, basic t-shirts, items where the pattern is important.
              </p>
            </div>

            {/* Hanger photo */}
            <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <Image className="w-6 h-6 text-vinted" />
                Hanger Photography
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="font-display font-bold text-green-700 mb-2">Advantages:</p>
                  <ul className="space-y-1 font-body text-black text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Shows the garment's shape</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Relatively simple to set up</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>More professional than flat lay</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-display font-bold text-red-700 mb-2">Disadvantages:</p>
                  <ul className="space-y-1 font-body text-black text-sm">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Doesn't show how it looks worn</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Hanger can distort some clothes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Requires a plain background</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="font-body text-black text-sm italic">
                Best for: shirts, jackets, light dresses.
              </p>
            </div>

            {/* Worn photo */}
            <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <Star className="w-6 h-6 text-vinted" />
                Worn Photography (The Gold Standard)
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="font-display font-bold text-green-700 mb-2">Advantages:</p>
                  <ul className="space-y-1 font-body text-black text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>+300% views</strong> on average</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Buyer visualizes the real fit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Better conversion rate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Professional and attractive look</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-display font-bold text-red-700 mb-2">Disadvantages:</p>
                  <ul className="space-y-1 font-body text-black text-sm">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Requires a mannequin or wearing it yourself</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>More time-consuming</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Not always the right size</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="font-body text-black text-sm">
                <strong>Solution:</strong> With VintDress, generate worn photos on an AI mannequin in 30 seconds, regardless of size!
              </p>
            </div>
          </div>

          {/* Comparison table */}
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-4 border-black bg-white">
              <thead>
                <tr className="bg-vinted text-white">
                  <th className="p-3 border-2 border-black font-display font-bold text-left">Criteria</th>
                  <th className="p-3 border-2 border-black font-display font-bold text-center">Flat Lay</th>
                  <th className="p-3 border-2 border-black font-display font-bold text-center">On Hanger</th>
                  <th className="p-3 border-2 border-black font-display font-bold text-center">Worn</th>
                </tr>
              </thead>
              <tbody className="font-body">
                <tr>
                  <td className="p-3 border-2 border-black font-bold">Ease</td>
                  <td className="p-3 border-2 border-black text-center text-green-600">Easy</td>
                  <td className="p-3 border-2 border-black text-center text-yellow-600">Medium</td>
                  <td className="p-3 border-2 border-black text-center text-red-600">Difficult</td>
                </tr>
                <tr className="bg-cream">
                  <td className="p-3 border-2 border-black font-bold">Views</td>
                  <td className="p-3 border-2 border-black text-center">Baseline</td>
                  <td className="p-3 border-2 border-black text-center">+50%</td>
                  <td className="p-3 border-2 border-black text-center text-vinted font-bold">+300%</td>
                </tr>
                <tr>
                  <td className="p-3 border-2 border-black font-bold">Conversion</td>
                  <td className="p-3 border-2 border-black text-center">Low</td>
                  <td className="p-3 border-2 border-black text-center">Medium</td>
                  <td className="p-3 border-2 border-black text-center text-vinted font-bold">High</td>
                </tr>
                <tr className="bg-cream">
                  <td className="p-3 border-2 border-black font-bold">Time</td>
                  <td className="p-3 border-2 border-black text-center">2 min</td>
                  <td className="p-3 border-2 border-black text-center">5 min</td>
                  <td className="p-3 border-2 border-black text-center">15 min+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2 - Equipment */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Minimal Equipment Required
          </h2>

          <p className="font-body text-black leading-relaxed mb-6">
            Good news: you don't need professional equipment to take great Vinted photos. Here's the essentials.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Smartphone */}
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-14 h-14 bg-vinted border-3 border-black flex items-center justify-center mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <Smartphone className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display font-bold text-xl text-black mb-3">
                Smartphone
              </h3>
              <p className="font-body text-black text-sm mb-3">
                Your smartphone is more than enough! No camera needed.
              </p>
              <ul className="space-y-1 font-body text-black text-sm">
                <li>- Clean the lens before each session</li>
                <li>- Turn off the flash</li>
                <li>- Enable HDR mode if available</li>
                <li>- Use the timer to avoid blur</li>
              </ul>
            </div>

            {/* Lighting */}
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-14 h-14 bg-mint border-3 border-black flex items-center justify-center mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <Sun className="w-7 h-7 text-black" />
              </div>
              <h3 className="font-display font-bold text-xl text-black mb-3">
                Lighting
              </h3>
              <p className="font-body text-black text-sm mb-3">
                Natural light is your best friend, and it's free!
              </p>
              <ul className="space-y-1 font-body text-black text-sm">
                <li>- Prefer daylight</li>
                <li>- Avoid direct sunlight (harsh shadows)</li>
                <li>- Position near a window</li>
                <li>- Ring light optional for winter</li>
              </ul>
            </div>

            {/* Background */}
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-14 h-14 bg-pink-pastel border-3 border-black flex items-center justify-center mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <Image className="w-7 h-7 text-black" />
              </div>
              <h3 className="font-display font-bold text-xl text-black mb-3">
                Neutral Background
              </h3>
              <p className="font-body text-black text-sm mb-3">
                A simple background highlights your clothing.
              </p>
              <ul className="space-y-1 font-body text-black text-sm">
                <li>- White or light beige wall</li>
                <li>- Stretched plain sheet</li>
                <li>- White cardboard (flat lay)</li>
                <li>- Avoid cluttered backgrounds</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3 - Step by step technique */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Step-by-Step Photo Technique
          </h2>

          <div className="space-y-4">
            {/* Step 1 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                1
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Prepare Your Item
                </h3>
                <p className="font-body text-black">
                  <strong>Iron or steam</strong> your item. Use a lint roller to remove fuzz and pet hair. A wrinkled garment gives an impression of neglect and scares buyers away.
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
                  Set Up Your Space
                </h3>
                <p className="font-body text-black">
                  Position yourself near a window with natural light. Set up your plain background. Make sure there are no distracting objects in the frame.
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
                  Take Essential Angles
                </h3>
                <ul className="font-body text-black space-y-1">
                  <li><strong>Front view</strong>: main view of the item</li>
                  <li><strong>Back view</strong>: show the complete back</li>
                  <li><strong>Details</strong>: label, buttons, stitching, textures</li>
                  <li><strong>Flaws</strong>: be honest about imperfections</li>
                </ul>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                4
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Framing and Sharpness
                </h3>
                <p className="font-body text-black">
                  Leave space around the garment. Center your item. Tap the screen to focus on the clothing. Keep the phone steady or use a tripod.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                5
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Light Editing (Optional)
                </h3>
                <p className="font-body text-black">
                  Slightly adjust brightness and contrast if needed. Avoid excessive filters that alter the true colors of the garment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - Worn photos game changer */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Worn Photos: The Game Changer
          </h2>

          <div className="bg-pink-pastel border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-6">
            <div className="flex items-start gap-4">
              <Lightbulb className="w-8 h-8 text-vinted flex-shrink-0" />
              <div>
                <h3 className="font-display font-bold text-2xl text-black mb-3">
                  Why Worn Photos Convert Better
                </h3>
                <ul className="font-body text-black space-y-2">
                  <li>
                    <strong>Mental projection:</strong> The buyer imagines wearing the garment
                  </li>
                  <li>
                    <strong>Realistic fit:</strong> You see how the garment actually falls
                  </li>
                  <li>
                    <strong>Increased trust:</strong> Less risk of disappointment upon receipt
                  </li>
                  <li>
                    <strong>+300% views:</strong> The Vinted algorithm favors these photos
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
            <h3 className="font-display font-bold text-xl text-black mb-4">
              The Problem: You Don't Always Have Time or a Mannequin
            </h3>
            <ul className="font-body text-black space-y-2 mb-4">
              <li>- You're not the right size for all your items</li>
              <li>- You don't want to show yourself in every photo</li>
              <li>- A physical mannequin is expensive and takes up space</li>
              <li>- Photographing each item worn takes too much time</li>
            </ul>
          </div>

          {/* CTA VintDress */}
          <div className="bg-vinted border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center">
            <Camera className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
              The Solution: VintDress
            </h3>
            <p className="font-body text-white mb-6 max-w-xl mx-auto">
              Generate worn photos on an AI mannequin in 30 seconds. Customize gender, body type, pose, and background. Professional quality guaranteed.
            </p>
            <Link
              to="/#generateur"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-3 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              TRY NOW
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Section 5 - Mistakes to avoid */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Mistakes to Avoid
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-8 h-8 text-red-600" />
                <h3 className="font-display font-bold text-xl text-black">
                  Poor Lighting
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                Dark, yellowish photos or harsh shadows. Always prefer indirect natural light.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-8 h-8 text-red-600" />
                <h3 className="font-display font-bold text-xl text-black">
                  Cluttered Background
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                An unmade bed, objects lying around... It distracts and looks amateur. Always use a clean, plain background.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-8 h-8 text-red-600" />
                <h3 className="font-display font-bold text-xl text-black">
                  Blurry Photos
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                Nothing worse than a photo where you can't see the details. Stabilize your phone and tap to focus manually.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-8 h-8 text-red-600" />
                <h3 className="font-display font-bold text-xl text-black">
                  Not Enough Photos
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                A single photo isn't enough. Show the item from all angles: front, back, details, label.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-8 h-8 text-red-600" />
                <h3 className="font-display font-bold text-xl text-black">
                  Excessive Filters
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                Filters that change colors create unrealistic expectations and lead to disputes. Stay natural.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-8 h-8 text-red-600" />
                <h3 className="font-display font-bold text-xl text-black">
                  Hiding Flaws
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                Never hide a stain or tear. Photograph flaws clearly to avoid returns and bad reviews.
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
                Should I wear the clothes myself in photos?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                It's ideal, but not always practical. If you're not the right size or prefer to stay anonymous, use VintDress to create worn photos on an AI mannequin.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                How many photos should I include per listing?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Minimum 4 photos: front view, back view, at least one detail, and the label. Ideally use all 20 photos allowed by Vinted to show the item from every angle.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Flat lay or worn photo?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Worn photos get +300% more views on average. Combine both: a worn photo as the main image, then flat lay photos for details.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                What's the best time to take photos?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                During the day, with natural light. Avoid direct sunlight hours (harsh shadows) and prefer slightly overcast weather for soft, diffused light.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                How do I show flaws in an item?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Take a close-up photo of the flaw with good lighting. Be honest in your description. Buyers appreciate transparency and it avoids disputes.
              </div>
            </details>
          </div>
        </section>

        {/* Conclusion CTA */}
        <div className="bg-mint border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-12 text-center">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-black mb-4">
            Ready to Improve Your Vinted Photos?
          </h3>
          <p className="font-body text-black mb-6">
            Apply these tips today and transform your listings with VintDress!
          </p>
          <Link
            to="/#generateur"
            className="inline-flex items-center gap-2 px-8 py-4 bg-vinted text-white border-3 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
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
              { slug: "worn-photos-vinted", title: "Worn Photos on Vinted" },
              { slug: "vinted-algorithm-visibility-2025", title: "Vinted Algorithm" },
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
};

export default HowToTakeVintedPhotosPage;
