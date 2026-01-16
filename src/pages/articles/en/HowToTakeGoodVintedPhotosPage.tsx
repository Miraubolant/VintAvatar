import React from 'react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { Sparkles, Sun, Image as ImageIcon, Camera, CheckSquare, Settings, XCircle, Zap, Calendar } from 'lucide-react';

export default function HowToTakeGoodVintedPhotosPage() {
  useSEO({
    title: "How to Take Good Photos for Vinted: Beginner Guide 2025 | VintDress",
    description: "Complete beginner guide: how to take good photos for Vinted. Lighting, background, techniques, pro tips. Sell faster!",
    keywords: "how to take vinted photos, vinted photo beginner, good vinted photos, vinted photo tutorial, selling vinted beginner",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image Section */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 h-[400px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&h=400&fit=crop"
          alt="How to take good photos for Vinted"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
              How to Take Good Photos for Vinted
            </h1>
            <p className="font-display text-xl md:text-2xl text-white">
              Beginner Guide 2025
            </p>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <ArticleNavigation />

        <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-wrap items-center gap-4 text-sm font-display font-semibold">
            <span className="bg-pink-pastel border-2 border-black px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              Beginner Guide
            </span>
            <span className="text-black">December 5, 2025</span>
            <span className="text-black">•</span>
            <span className="text-black">10 min read</span>
            <span className="text-black">•</span>
            <span className="text-black">By VintDress Team</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {['Beginner', 'Photos', 'Vinted', 'Guide', 'Tutorial'].map((tag) => (
              <span
                key={tag}
                className="bg-mint border-2 border-black px-3 py-1 text-sm font-display font-semibold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Introduction */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <p className="text-lg leading-relaxed mb-6">
            Just started on Vinted and wondering why your items aren't selling?
            In 90% of cases, the problem is the photos. This complete guide explains everything, step by step.
          </p>

          <div className="bg-vinted/10 border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-4">The reality in numbers:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-vinted mr-2">→</span>
                <span>Buyers decide in <strong>3 seconds</strong> if they're interested in your item</span>
              </li>
              <li className="flex items-start">
                <span className="text-vinted mr-2">→</span>
                <span>A good photo = <strong>5x more views</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-vinted mr-2">→</span>
                <span>Professional photos = <strong>+25% selling price</strong></span>
              </li>
            </ul>
          </div>

          <div className="bg-pink-pastel/30 border-3 border-black p-6 italic">
            <p className="font-semibold">
              "If the seller doesn't take care of their photos, will they take care of my package?"
            </p>
            <p className="text-sm mt-2">— What buyers think</p>
          </div>
        </div>

        {/* Step 1: Prepare the Garment */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Sparkles className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Step 1: Prepare Your Garment</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-display font-bold text-xl mb-3">Iron or Steam</h3>
              <p className="mb-3">
                <strong>Why it's crucial:</strong> A wrinkled garment looks neglected or poor quality.
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Iron the garment before the photo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Or use a garment steamer</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Alternative: hang it in the bathroom during a hot shower</span>
                </li>
              </ul>
            </div>

            <div className="bg-cream border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Pre-photo checklist:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 mr-2 text-vinted" />
                  <span>Remove pet hair (lint roller)</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 mr-2 text-vinted" />
                  <span>Check for stains and pilling</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 mr-2 text-vinted" />
                  <span>Remove loose threads</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 mr-2 text-vinted" />
                  <span>Check that all buttons are present</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step 2: Lighting */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Sun className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Step 2: Choose the Right Lighting</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-vinted/10 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Natural Light (Secret #1)</h3>
              <p className="mb-4"><strong>Why it's the best choice:</strong></p>
              <ul className="space-y-2 mb-4 ml-4">
                <li className="flex items-start">
                  <span className="text-vinted mr-2">✓</span>
                  <span>Free and available everywhere</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">✓</span>
                  <span>Shows true colors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">✓</span>
                  <span>Gives a professional look</span>
                </li>
              </ul>
              <p className="font-semibold mb-2">How to use it:</p>
              <ol className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="font-bold mr-2">1.</span>
                  <span>Position yourself near a large window</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">2.</span>
                  <span>Avoid direct sunlight (creates harsh shadows)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">3.</span>
                  <span>Prefer slightly overcast skies</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">4.</span>
                  <span>Photograph between 10am and 4pm</span>
                </li>
              </ol>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Lighting Mistakes to Avoid</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Phone flash</strong>: Flattens the image, false colors</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Yellow light from bulbs</strong>: Distorts colors</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Backlighting</strong>: Garment too dark</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Harsh shadows</strong>: Hides details</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step 3: Background */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <ImageIcon className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Step 3: Choose the Right Background</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-vinted/10 border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-4">Top 3 Backgrounds:</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="font-bold mr-2">1.</span>
                  <div>
                    <p className="font-semibold">White wall</p>
                    <p className="text-sm">Classic, enhances all colors</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="font-bold mr-2">2.</span>
                  <div>
                    <p className="font-semibold">Beige/cream wall</p>
                    <p className="text-sm">Warm, current trend</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="font-bold mr-2">3.</span>
                  <div>
                    <p className="font-semibold">Light wood floor</p>
                    <p className="text-sm">Perfect for flat lay</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-4">Backgrounds to avoid:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Unmade bed or wrinkled sheets</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Bathroom tiles</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Cluttered background (toys, stuff...)</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Floor with visible stains or dirt</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step 4: The 3 Photo Techniques */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Camera className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Step 4: The 3 Photo Techniques</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-cream border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-2">1. Flat Lay</h3>
              <p className="text-sm text-gray-600 mb-3">Ideal for: T-shirts, shirts, accessories</p>
              <ol className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="font-bold mr-2">1.</span>
                  <span>Lay the garment flat</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">2.</span>
                  <span>Arrange sleeves symmetrically</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">3.</span>
                  <span>Photograph from above, phone parallel to floor</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">4.</span>
                  <span>Leave some space around it</span>
                </li>
              </ol>
            </div>

            <div className="bg-cream border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-2">2. On Hanger</h3>
              <p className="text-sm text-gray-600 mb-3">Ideal for: Dresses, jackets, coats</p>
              <ol className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="font-bold mr-2">1.</span>
                  <span>Use a wooden hanger (more professional)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">2.</span>
                  <span>Hang on a rail or door handle</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">3.</span>
                  <span>Step back enough to capture the whole garment</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">4.</span>
                  <span>Avoid colored plastic hangers</span>
                </li>
              </ol>
            </div>

            <div className="bg-vinted border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-2 text-white">3. Worn Photo (Game Changer!)</h3>
              <p className="text-white/90 mb-3">
                <strong>Why it's THE technique that sells:</strong>
              </p>
              <ul className="space-y-2 mb-4 text-white">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Buyer visualizes the real look</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Shows cut and drape</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Creates emotional connection</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span><strong>+300% views on average!</strong></span>
                </li>
              </ul>
              <div className="bg-white border-2 border-black p-4 mb-3">
                <p className="text-black"><strong>The problem:</strong> Hard to do yourself, need a model...</p>
              </div>
              <div className="bg-mint border-2 border-black p-4">
                <p className="text-black"><strong>The solution:</strong> VintDress generates AI worn photos in 30 seconds!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 5: The 5 Essential Photos */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">The 5 Essential Photos for Every Listing</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-cream border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center border-2 border-black">1</span>
                <h3 className="font-display font-bold text-lg">Main Photo</h3>
              </div>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Complete front view</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Perfect lighting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Neutral background</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span><strong>This is what makes them click!</strong></span>
                </li>
              </ul>
            </div>

            <div className="bg-vinted/10 border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center border-2 border-black">2</span>
                <h3 className="font-display font-bold text-lg">Worn Photo</h3>
              </div>
              <p className="mb-3">
                <strong>Why it converts:</strong> Shows the real look, reassures the buyer, stands out in the feed.
              </p>
              <p className="bg-mint border-2 border-black p-3 font-semibold text-sm">
                Tip: Use VintDress AI to create it easily
              </p>
            </div>

            <div className="bg-cream border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center border-2 border-black">3</span>
                <h3 className="font-display font-bold text-lg">Details</h3>
              </div>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Fabric texture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Close-up patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Finishes (seams, buttons)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Any defects</span>
                </li>
              </ul>
            </div>

            <div className="bg-cream border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center border-2 border-black">4</span>
                <h3 className="font-display font-bold text-lg">Label</h3>
              </div>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Visible brand</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Readable size</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Composition if possible</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Proves authenticity</span>
                </li>
              </ul>
            </div>

            <div className="bg-cream border-3 border-black p-6 md:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center border-2 border-black">5</span>
                <h3 className="font-display font-bold text-lg">Back View</h3>
              </div>
              <p>
                Some garments look different front/back. Show the complete cut and reassure about overall condition.
              </p>
            </div>
          </div>
        </div>

        {/* Phone Settings */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Settings className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Your Phone Settings</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-vinted/10 border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-4">Optimal Settings:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 mr-2 text-vinted" />
                  <span>HDR mode enabled</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 mr-2 text-vinted" />
                  <span>Composition grid enabled</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 mr-2 text-vinted" />
                  <span>4:5 ratio (ideal Vinted format)</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 mr-2 text-vinted" />
                  <span>Flash disabled</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 mr-2 text-vinted" />
                  <span>Focus on the garment</span>
                </li>
              </ul>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-4">Pro Tips:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-vinted mr-2">→</span>
                  <span>Clean the lens (fingerprints = blur)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">→</span>
                  <span>Stabilize your phone (lean against a wall)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">→</span>
                  <span>Tap the screen to focus</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">→</span>
                  <span>Take multiple photos and keep the best</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* The 7 Fatal Mistakes */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <XCircle className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">The 7 Fatal Mistakes to Avoid</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-pink-pastel/30 border-3 border-black p-4">
              <div className="flex items-start gap-3">
                <span className="bg-black text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0">1</span>
                <div>
                  <p className="font-semibold">Blurry photos</p>
                  <p className="text-sm">-80% chance of sale</p>
                </div>
              </div>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-4">
              <div className="flex items-start gap-3">
                <span className="bg-black text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0">2</span>
                <div>
                  <p className="font-semibold">Bad lighting</p>
                  <p className="text-sm">Distorted colors = returns</p>
                </div>
              </div>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-4">
              <div className="flex items-start gap-3">
                <span className="bg-black text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0">3</span>
                <div>
                  <p className="font-semibold">Cluttered background</p>
                  <p className="text-sm">Distracts attention</p>
                </div>
              </div>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-4">
              <div className="flex items-start gap-3">
                <span className="bg-black text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0">4</span>
                <div>
                  <p className="font-semibold">Only one photo</p>
                  <p className="text-sm">Buyer distrust</p>
                </div>
              </div>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-4">
              <div className="flex items-start gap-3">
                <span className="bg-black text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0">5</span>
                <div>
                  <p className="font-semibold">Wrinkled garment</p>
                  <p className="text-sm">Impression of neglect</p>
                </div>
              </div>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-4">
              <div className="flex items-start gap-3">
                <span className="bg-black text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0">6</span>
                <div>
                  <p className="font-semibold">Mirror photos</p>
                  <p className="text-sm">Amateur and unflattering</p>
                </div>
              </div>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-4 md:col-span-2">
              <div className="flex items-start gap-3">
                <span className="bg-black text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0">7</span>
                <div>
                  <p className="font-semibold">Instagram filters</p>
                  <p className="text-sm">Distorts the real product</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The AI Alternative */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Zap className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl text-white">The Revolutionary Alternative: AI</h2>
          </div>

          <div className="bg-white border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-4">VintDress advantages:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <span className="text-vinted mr-2">✓</span>
                <div>
                  <p className="font-semibold">Worn photo in 30 seconds</p>
                  <p className="text-sm">Massive time saving</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-vinted mr-2">✓</span>
                <div>
                  <p className="font-semibold">Guaranteed professional quality</p>
                  <p className="text-sm">Flawless result every time</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-vinted mr-2">✓</span>
                <div>
                  <p className="font-semibold">No model needed</p>
                  <p className="text-sm">AI does all the work</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-vinted mr-2">✓</span>
                <div>
                  <p className="font-semibold">Full customization</p>
                  <p className="text-sm">Body type, pose, background...</p>
                </div>
              </div>
            </div>
            <div className="bg-mint border-3 border-black p-4 mt-6 text-center">
              <p className="font-display font-bold text-2xl">Results: +300% views!</p>
            </div>
          </div>

          <div className="bg-white border-3 border-black p-6">
            <h3 className="font-display font-bold text-xl mb-4">How It Works:</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-vinted text-white font-display font-bold w-12 h-12 flex items-center justify-center mx-auto mb-2 border-2 border-black text-xl">1</div>
                <p className="font-semibold">Upload your photo</p>
              </div>
              <div className="text-center">
                <div className="bg-vinted text-white font-display font-bold w-12 h-12 flex items-center justify-center mx-auto mb-2 border-2 border-black text-xl">2</div>
                <p className="font-semibold">Configure the mannequin</p>
              </div>
              <div className="text-center">
                <div className="bg-vinted text-white font-display font-bold w-12 h-12 flex items-center justify-center mx-auto mb-2 border-2 border-black text-xl">3</div>
                <p className="font-semibold">Generate in 30s</p>
              </div>
              <div className="text-center">
                <div className="bg-vinted text-white font-display font-bold w-12 h-12 flex items-center justify-center mx-auto mb-2 border-2 border-black text-xl">4</div>
                <p className="font-semibold">Post on Vinted</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Week Action Plan */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Calendar className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Beginner Action Plan</h2>
          </div>

          <div className="space-y-4">
            <div className="bg-cream border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Week 1: The Basics</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Find your "photo corner" with good light</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Practice on 5 garments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Test different backgrounds</span>
                </li>
              </ul>
            </div>

            <div className="bg-vinted/10 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Week 2: Optimization</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Compare your new photos to old ones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Analyze which photos get the most views</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Test VintDress AI on your best pieces</span>
                </li>
              </ul>
            </div>

            <div className="bg-mint/50 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Week 3: Routine</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Create an efficient photo routine</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Prepare a "photo kit" (hanger, background, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Batch photograph to save time</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <details className="bg-cream border-3 border-black p-6 cursor-pointer group">
              <summary className="font-display font-bold text-lg list-none flex items-center justify-between">
                <span>How many photos should I put on a Vinted listing?</span>
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 pt-4 border-t-2 border-black">
                Minimum 5 photos: front view, worn photo, details/texture, label and back view.
                The more quality photos you have, the more trust you inspire.
              </p>
            </details>

            <details className="bg-cream border-3 border-black p-6 cursor-pointer group">
              <summary className="font-display font-bold text-lg list-none flex items-center justify-between">
                <span>When is the best time to take photos?</span>
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 pt-4 border-t-2 border-black">
                Between 10am and 4pm near a north-facing window. Avoid direct sunlight which creates harsh shadows.
                Slightly overcast skies are ideal.
              </p>
            </details>

            <details className="bg-cream border-3 border-black p-6 cursor-pointer group">
              <summary className="font-display font-bold text-lg list-none flex items-center justify-between">
                <span>Should I use my phone's flash?</span>
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 pt-4 border-t-2 border-black">
                No, never! The flash flattens the image and distorts colors. Always prefer natural light or a ring light.
              </p>
            </details>

            <details className="bg-cream border-3 border-black p-6 cursor-pointer group">
              <summary className="font-display font-bold text-lg list-none flex items-center justify-between">
                <span>How to take a worn photo without a model?</span>
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 pt-4 border-t-2 border-black">
                Use VintDress! Our AI generates professional worn photos in 30 seconds,
                without needing a model.
              </p>
            </details>
          </div>
        </div>

        {/* Conclusion + CTA */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl text-white mb-4">Conclusion</h2>
          <p className="text-white text-lg mb-6">
            The quality of your photos makes <strong>all</strong> the difference on Vinted.
            With this guide, you have all the keys to transform your listings and finally sell!
          </p>
          <div className="bg-white border-3 border-black p-6 mb-6">
            <p className="font-semibold text-lg mb-2">The secret of top sellers:</p>
            <p>They combine good photo basics with AI for professional results without effort.</p>
          </div>
          <a
            href="/"
            className="inline-block bg-mint border-4 border-black px-8 py-4 font-display font-bold text-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            Try VintDress Now
          </a>
        </div>

        {/* Related Articles */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-display font-bold text-2xl mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="/en/articles/5-tips-sell-faster-vinted"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">5 Tips to Sell Faster →</p>
            </a>
            <a
              href="/en/articles/complete-guide-vinted-photos-2025"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Complete Photos Guide 2025 →</p>
            </a>
            <a
              href="/en/articles/vinted-sales-mistakes"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Mistakes to Avoid →</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
