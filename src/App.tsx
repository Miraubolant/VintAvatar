import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ErrorBoundary } from './components/ErrorBoundary';
import { CookieConsent } from './components/CookieConsent';
import { Breadcrumbs } from './components/Breadcrumbs';
import { LanguageProvider } from './components/LanguageProvider';
import { PromoBanner } from './components/PromoBanner';
import { useSEO, getHomeConfig } from './hooks/useSEO';
import { useTranslation } from 'react-i18next';
import './lib/i18n';

// Lazy loading pour améliorer les performances
const BeforeAfterSection = React.lazy(() => import('./components/BeforeAfterSection').then(module => ({ default: module.BeforeAfterSection })));
const TestimonialsSection = React.lazy(() => import('./components/TestimonialsSection').then(module => ({ default: module.TestimonialsSection })));
const FAQSection = React.lazy(() => import('./components/FAQSection').then(module => ({ default: module.FAQSection })));
const PricingSection = React.lazy(() => import('./components/PricingSection').then(module => ({ default: module.PricingSection })));
const BlogSection = React.lazy(() => import('./components/BlogSection').then(module => ({ default: module.BlogSection })));
const AuthCallback = React.lazy(() => import('./pages/AuthCallback').then(module => ({ default: module.AuthCallback })));
const SuccessPage = React.lazy(() => import('./pages/SuccessPage').then(module => ({ default: module.SuccessPage })));
const CancelPage = React.lazy(() => import('./pages/CancelPage').then(module => ({ default: module.CancelPage })));
const AccountPage = React.lazy(() => import('./pages/AccountPage').then(module => ({ default: module.AccountPage })));
const FAQPage = React.lazy(() => import('./pages/FAQPage').then(module => ({ default: module.FAQPage })));
const ArticlePage = React.lazy(() => import('./pages/ArticlePage').then(module => ({ default: module.ArticlePage })));
const PhotoPorteeVintedPage = React.lazy(() => import('./pages/PhotoPorteeVintedPage').then(module => ({ default: module.PhotoPorteeVintedPage })));
const MannequinIAVintedPage = React.lazy(() => import('./pages/MannequinIAVintedPage').then(module => ({ default: module.MannequinIAVintedPage })));
const VintedLookGratuitAlternativeProPage = React.lazy(() => import('./pages/VintedLookGratuitAlternativeProPage').then(module => ({ default: module.default })));
const IAPhotoVintedGratuitVsPayantPage = React.lazy(() => import('./pages/IAPhotoVintedGratuitVsPayantPage').then(module => ({ default: module.default })));
const AlgorithmeVintedVisibilitePage = React.lazy(() => import('./pages/AlgorithmeVintedVisibilitePage').then(module => ({ default: module.default })));
const GuideCompletPhotosVinted2025Page = React.lazy(() => import('./pages/GuideCompletPhotosVinted2025Page').then(module => ({ default: module.default })));
const LegalPage = React.lazy(() => import('./pages/LegalPage').then(module => ({ default: module.LegalPage })));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage').then(module => ({ default: module.NotFoundPage })));
const ResultPage = React.lazy(() => import('./pages/ResultPage').then(module => ({ default: module.ResultPage })));

// Loading component - Neo-brutalism style
const LoadingComponent = () => {
  const { t } = useTranslation('common');

  return (
    <div className="flex items-center justify-center py-12">
      <div className="bg-white border-4 border-black px-6 py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-8 h-8 bg-vinted border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] animate-pulse"></div>
            <div className="absolute top-0 left-0 w-8 h-8 bg-mint border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] animate-ping opacity-30"></div>
          </div>
          <div className="font-display font-bold text-black text-sm">
            {t('buttons.loading')}
          </div>
        </div>
      </div>
    </div>
  );
};

function HomePage() {
  useSEO(getHomeConfig());

  return (
    <>
      <HeroSection />
      <PromoBanner />
      <Suspense fallback={<LoadingComponent />}>
        <BeforeAfterSection />
      </Suspense>
      <Suspense fallback={<LoadingComponent />}>
        <PricingSection />
      </Suspense>
      <Suspense fallback={<LoadingComponent />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<LoadingComponent />}>
        <FAQSection />
      </Suspense>
      <Suspense fallback={<LoadingComponent />}>
        <BlogSection />
      </Suspense>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <LanguageProvider>
          <div className="min-h-screen bg-cream">
            {/* Skip to main content - Accessibility */}
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-vinted focus:text-white focus:border-2 focus:border-black focus:font-display focus:font-bold focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
            >
              Aller au contenu principal
            </a>
            <Header />
            <Breadcrumbs />
            <main id="main-content" role="main" className="pt-16 sm:pt-20 lg:pt-24">
              <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/auth/callback" element={
                <Suspense fallback={<LoadingComponent />}>
                  <AuthCallback />
                </Suspense>
              } />
              <Route path="/success" element={
                <Suspense fallback={<LoadingComponent />}>
                  <SuccessPage />
                </Suspense>
              } />
              <Route path="/cancel" element={
                <Suspense fallback={<LoadingComponent />}>
                  <CancelPage />
                </Suspense>
              } />
              <Route path="/result/:id" element={
                <Suspense fallback={<LoadingComponent />}>
                  <ResultPage />
                </Suspense>
              } />
              <Route path="/account" element={
                <Suspense fallback={<LoadingComponent />}>
                  <AccountPage />
                </Suspense>
              } />
              <Route path="/articles/photo-porte-vinted" element={
                <Suspense fallback={<LoadingComponent />}>
                  <PhotoPorteeVintedPage />
                </Suspense>
              } />
              <Route path="/articles/mannequin-ia-vinted" element={
                <Suspense fallback={<LoadingComponent />}>
                  <MannequinIAVintedPage />
                </Suspense>
              } />
              <Route path="/articles/vinted-look-gratuit-alternative-pro" element={
                <Suspense fallback={<LoadingComponent />}>
                  <VintedLookGratuitAlternativeProPage />
                </Suspense>
              } />
              <Route path="/articles/ia-photo-vinted-gratuit-vs-payant" element={
                <Suspense fallback={<LoadingComponent />}>
                  <IAPhotoVintedGratuitVsPayantPage />
                </Suspense>
              } />
              <Route path="/articles/algorithme-vinted-visibilite" element={
                <Suspense fallback={<LoadingComponent />}>
                  <AlgorithmeVintedVisibilitePage />
                </Suspense>
              } />
              <Route path="/articles/guide-complet-photos-vinted-2025" element={
                <Suspense fallback={<LoadingComponent />}>
                  <GuideCompletPhotosVinted2025Page />
                </Suspense>
              } />
              <Route path="/articles/:slug" element={
                <Suspense fallback={<LoadingComponent />}>
                  <ArticlePage />
                </Suspense>
              } />
              <Route path="/blog/:slug" element={
                <Suspense fallback={<LoadingComponent />}>
                  <ArticlePage />
                </Suspense>
              } />
              <Route path="/cgu" element={
                <Suspense fallback={<LoadingComponent />}>
                  <LegalPage />
                </Suspense>
              } />
              <Route path="/confidentialite" element={
                <Suspense fallback={<LoadingComponent />}>
                  <LegalPage />
                </Suspense>
              } />
              <Route path="/faq" element={
                <Suspense fallback={<LoadingComponent />}>
                  <FAQPage />
                </Suspense>
              } />
              {/* 404 - Page not found */}
              <Route path="*" element={
                <Suspense fallback={<LoadingComponent />}>
                  <NotFoundPage />
                </Suspense>
              } />
              </Routes>
            </main>
            <Footer />
            <ScrollToTop />
            <CookieConsent />
          </div>
        </LanguageProvider>
      </Router>
    </ErrorBoundary>
  );
}

export default App;