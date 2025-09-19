# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Frontend
- `npm run dev` - Start development server with Vite
- `npm run build` - Build for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally

### Supabase (Backend)
- `npx supabase start` - Start local Supabase instance
- `npx supabase stop` - Stop local Supabase instance
- `npx supabase db reset` - Reset local database to current migrations
- `npx supabase db push` - Push new migrations to remote database
- `npx supabase functions deploy` - Deploy all Edge Functions
- `npx supabase functions deploy [function-name]` - Deploy specific Edge Function
- `npx supabase functions logs [function-name]` - View Edge Function logs

### AI Image Generation
- Uses **Replicate FLUX Kontext Pro** for image-to-image transformation
- **Simplified workflow** - direct generation without pre-analysis
- **Enhanced privacy** - reinforced face masking with smartphone in prompt
- **User-guided generation** - clothing type selection helps AI understand context
- Edge Function: `analyze-and-generate` - Streamlined AI pipeline for avatar generation

### Stripe (Payments)
- `stripe listen --forward-to localhost:54321/functions/v1/stripe-webhook` - Listen to webhooks locally
- `stripe events resend [event-id]` - Resend webhook event for testing
- `stripe customers list` - List customers
- `stripe products list` - List products and prices

## Project Architecture

This is a React TypeScript application built with Vite, focusing on a Vinted-related photo enhancement service. The architecture follows a component-based structure:

### Tech Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React
- **Backend Services**: Supabase integration (@supabase/supabase-js)
- **Payments**: Stripe integration (@stripe/stripe-js)
- **Routing**: React Router DOM

### Key Components Structure
- `App.tsx` - Main application component with React Router setup
- `components/` - Reusable UI components:
  - `Header.tsx` - Navigation header with authentication integration
  - `AuthButton.tsx` - Authentication button with Google OAuth and account navigation
  - `HeroSection.tsx` - Main landing section with AI image generation
  - `AvatarConfigModal.tsx` - Configuration modal for avatar generation settings
  - `GenerationLoadingModal.tsx` - Animated loading popup during AI generation (cartoon style)
  - `ImageGenerator.tsx` - Avatar generation interface with credit system integration
  - `BeforeAfterSection.tsx` - Photo comparison showcase
  - `TestimonialsSection.tsx` - User testimonials
  - `PricingSection.tsx` - Subscription pricing with Stripe integration
  - `BlogSection.tsx` - Article display
  - `Footer.tsx` - Site footer
  - `ErrorBoundary.tsx` - Error handling component
  - `ScrollToTop.tsx` - Auto-scroll component for navigation
- `pages/` - Route-specific pages:
  - `AccountPage.tsx` - User account management with tabbed interface (statistics + generation history + affiliate system)
  - `AuthCallback.tsx` - OAuth callback handler
  - `SuccessPage.tsx` - Payment success page
  - `CancelPage.tsx` - Payment cancellation page
- `hooks/` - Custom React hooks:
  - `useAuth.ts` - Authentication state management
  - `useSubscription.ts` - Subscription data management
  - `useAccountStats.ts` - Account statistics aggregation
  - `useGenerationHistory.ts` - Complete generation history with images and metadata
  - `useAffiliation.ts` - Referral system management with code generation and tracking
- `lib/` - Utility libraries:
  - `supabase.ts` - Supabase client configuration and TypeScript types
- `articles/` - Content management for blog articles
- `styles/` - Custom CSS including neo-brutalism design system and scrollbar styling
- `supabase/functions/` - Supabase Edge Functions:
  - `analyze-and-generate/` - Complete AI image generation pipeline

### Design System - Neo-Brutalism Pastel
The project uses a modern neo-brutalism design with a carefully curated 4-color palette:

**Color Palette:**
- **Primary**: Vinted Blue `#09B1BA` (`bg-vinted`) - Main brand color
- **Background**: Cream `#FFF8E7` (`bg-cream`) - Primary background for all sections
- **Accent 1**: Pink Pastel `#FFB3BA` (`bg-pink-pastel`) - Soft contrast elements
- **Accent 2**: Mint Green `#B3F2DD` (`bg-mint`) - Fresh accent color

**Typography:**
- **Display Font**: Space Grotesk (headings, buttons, important text)
- **Body Font**: Inter (paragraph text, descriptions)
- **Weight System**: `font-bold` and `font-semibold` (no more `font-black`)

**Visual Elements:**
- **Borders**: Heavy black borders `border-4 border-black` or `border-3 border-black`
- **Shadows**: Offset shadows `shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`
- **Geometric Decorations**: Rotated squares, circles using transform utilities
- **Hover Effects**: Translate animations `hover:translate-x-[-2px] hover:translate-y-[-2px]`

**Layout Consistency:**
- All main sections use `bg-cream` background except Footer (`bg-black`)
- White backgrounds (`bg-white`) reserved for cards and content containers
- Consistent spacing with `py-20 lg:py-32` for sections
- Mobile-first responsive approach

### Key Features
- **AI Avatar Generation** with Replicate FLUX Kontext Pro (image-to-image transformation)
- **Simplified generation workflow** - direct image transformation without pre-analysis
- **Realistic avatar creation** with configurable model characteristics:
  - **Tabbed configuration interface** with "MODÈLE" and "PHOTO" tabs for better organization
  - Gender, mannequin type, skin tone (carnation), morphology
  - Posture, background (décor), clothing type selection
- **Face privacy protection** with reinforced prompt instructions to hide faces with smartphones
- **Animated loading experience** with cartoon-style popup showing generation progress (analyzing → generating → saving)
- **Complete account interface** with tabbed design for statistics, generation history, and affiliate system
- **Visual generation history** showing before/after comparisons with download capabilities
- **Referral/affiliate system** with unique codes, link sharing, and automatic bonus distribution
- **Complete authentication system** with Google OAuth via Supabase
- **Multi-subscription management** supporting both credit packs and monthly plans
- **Stripe payment processing** with three pricing tiers (€3.49, €6.99, €11.99)
- **Credit system** with real-time usage tracking and remaining credits display
- **Webhook integration** for automatic subscription updates and referral bonuses
- **Optimized responsive design** with clean interface (no emojis, compact buttons)
- **Blog/article system** for content marketing
- **Error handling** with comprehensive user feedback

### Database Architecture (Supabase)
- **`profiles`** - User profile information extending auth.users
- **`subscriptions`** - User subscriptions with credit and monthly plan support
- **`affiliations`** - Referral system for user-to-user bonuses:
  - User referral codes and tracking successful referrals
  - Status management (pending/completed) with bonus distribution
  - Automatic +1 generation for both referrer and referred user on first purchase
- **`usage_tracking`** - Detailed usage analytics with complete metadata:
  - Original and generated image URLs
  - Generation configuration (gender, skin tone, morphology, pose, background, clothing type)
  - Model used (FLUX Kontext Pro via Replicate)
  - Credits consumed and timestamp
- **Storage Buckets**:
  - `original-images` - Private bucket for uploaded clothing photos
  - `generated-avatars` - Public bucket for AI-generated avatars
- **Row Level Security (RLS)** enabled on all tables with user-specific access
- **Edge Functions** for serverless integration:
  - `analyze-and-generate` - Simplified AI pipeline using Replicate FLUX Kontext Pro
  - `create-checkout-session` - Creates Stripe payment sessions
  - `stripe-webhook` - Processes payment webhooks, updates subscriptions, and handles referral bonuses

### Routing Structure
- `/` - Home page with all landing sections
- `/auth/callback` - OAuth callback handler
- `/account` - User account management (protected route)
- `/success` - Payment success confirmation
- `/cancel` - Payment cancellation page

### Configuration Files
- `vite.config.ts` - Vite bundler configuration with React plugin
- `tailwind.config.js` - Tailwind CSS with custom neo-brutalism color palette
- `tsconfig.json` - TypeScript configuration for the application
- `eslint.config.js` - ESLint rules for code quality
- `supabase/config.toml` - Supabase configuration with webhook settings
- `.env` - Environment variables for Supabase and Stripe keys
- `src/styles/neo-brutalism.css` - Custom CSS design system with variables

### Development Notes
- **AI Integration**: 
  - **Replicate FLUX Kontext Pro** for direct image-to-image transformation
  - **Simplified workflow** - no pre-analysis, direct generation based on user configuration
  - **Enhanced face privacy** - reinforced prompt instructions to ensure faces are hidden
  - **Clothing type selection** - user specifies clothing type to help AI generation
  - Robust error handling and timeout management
- **User Experience**:
  - **Compact tabbed configuration** - "MODÈLE" and "PHOTO" tabs for better organization
  - **Clean interface design** - removed emojis, optimized button sizes and spacing
  - Multi-stage loading animation with progress tracking (analyzing → generating → saving → complete)
  - Tabbed account interface separating statistics from visual history
  - Before/after image comparisons with download functionality
  - Comprehensive generation history with metadata display
- **Authentication**: Uses Supabase Auth with Google OAuth provider
- **Payment processing**: Stripe integration with webhook verification
- **Database queries**: All use RLS policies for security
- **Error handling**: Comprehensive .single() vs array handling for empty results
- **Multi-subscription support**: Users can have multiple credit packs + monthly plans
- **Real-time updates**: Subscription and usage data updates automatically
- **Storage management**: Separate private/public buckets with signed URLs for secure access
- **Custom scrollbar styling** implemented in `styles/scrollbar.css`
- **Responsive design** optimized for mobile and desktop experiences

### Stripe Products Configuration
- **Monthly Plan**: €11.99/month with 40 generations limit
- **25 Credits Pack**: €6.99 one-time payment
- **10 Credits Pack**: €3.49 one-time payment
- **Webhook handling**: Automatic subscription updates via Edge Functions