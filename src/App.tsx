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
import { ScrollToTopOnMount } from './components/ScrollToTopOnMount';
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
const BlogIndexPage = React.lazy(() => import('./pages/BlogIndexPage').then(module => ({ default: module.default })));
const ArticlePage = React.lazy(() => import('./pages/ArticlePage').then(module => ({ default: module.ArticlePage })));
// Article pages
const PhotoPorteeVintedPage = React.lazy(() => import('./pages/articles/PhotoPorteeVintedPage').then(module => ({ default: module.PhotoPorteeVintedPage })));
const MannequinIAVintedPage = React.lazy(() => import('./pages/articles/MannequinIAVintedPage').then(module => ({ default: module.MannequinIAVintedPage })));
const VintedLookGratuitAlternativeProPage = React.lazy(() => import('./pages/articles/VintedLookGratuitAlternativeProPage').then(module => ({ default: module.default })));
const IAPhotoVintedGratuitVsPayantPage = React.lazy(() => import('./pages/articles/IAPhotoVintedGratuitVsPayantPage').then(module => ({ default: module.default })));
const AlgorithmeVintedVisibilitePage = React.lazy(() => import('./pages/articles/AlgorithmeVintedVisibilitePage').then(module => ({ default: module.default })));
const GuideCompletPhotosVinted2025Page = React.lazy(() => import('./pages/articles/GuideCompletPhotosVinted2025Page').then(module => ({ default: module.default })));
const CinqAstucesVendrePlusVitePage = React.lazy(() => import('./pages/articles/CinqAstucesVendrePlusVitePage').then(module => ({ default: module.default })));
const StrategieVenteVinted2025Page = React.lazy(() => import('./pages/articles/StrategieVenteVinted2025Page').then(module => ({ default: module.default })));
const CommentPrendrePhotoVintedPage = React.lazy(() => import('./pages/articles/CommentPrendrePhotoVintedPage').then(module => ({ default: module.default })));
const VintDressVsAlternativesComparatifPage = React.lazy(() => import('./pages/articles/VintDressVsAlternativesComparatifPage').then(module => ({ default: module.default })));
const TendancesMode2025Page = React.lazy(() => import('./pages/articles/TendancesMode2025Page').then(module => ({ default: module.default })));
const VendreVintageVintedGuidePage = React.lazy(() => import('./pages/articles/VendreVintageVintedGuidePage').then(module => ({ default: module.default })));
const IdentiteVisuelleVintedPage = React.lazy(() => import('./pages/articles/IdentiteVisuelleVintedPage').then(module => ({ default: module.default })));
const ErreursVentesVintedPage = React.lazy(() => import('./pages/articles/ErreursVentesVintedPage').then(module => ({ default: module.default })));
const SuccessStoryMarie2025Page = React.lazy(() => import('./pages/articles/SuccessStoryMarie2025Page').then(module => ({ default: module.default })));
const IAServiceModeRevolutionPage = React.lazy(() => import('./pages/articles/IAServiceModeRevolutionPage').then(module => ({ default: module.default })));
const Temoignage300PourcentVuesPage = React.lazy(() => import('./pages/articles/Temoignage300PourcentVuesPage').then(module => ({ default: module.default })));
// Translated articles - EN
const WornPhotosVintedPageEN = React.lazy(() => import('./pages/articles/en/WornPhotosVintedPage').then(module => ({ default: module.default })));
const AImannequinVintedPageEN = React.lazy(() => import('./pages/articles/en/AImannequinVintedPage').then(module => ({ default: module.default })));
const VintedLookFreeVsProPageEN = React.lazy(() => import('./pages/articles/en/VintedLookFreeVsProPage').then(module => ({ default: module.default })));
const AIPhotoVintedFreeVsPaidPageEN = React.lazy(() => import('./pages/articles/en/AIPhotoVintedFreeVsPaidPage').then(module => ({ default: module.default })));
const VintedAlgorithmVisibilityPageEN = React.lazy(() => import('./pages/articles/en/VintedAlgorithmVisibilityPage').then(module => ({ default: module.default })));
const CompleteGuideVintedPhotos2025PageEN = React.lazy(() => import('./pages/articles/en/CompleteGuideVintedPhotos2025Page').then(module => ({ default: module.default })));
const FiveTipsSellFasterVintedPageEN = React.lazy(() => import('./pages/articles/en/FiveTipsSellFasterVintedPage').then(module => ({ default: module.default })));
const VintedSalesStrategy2025PageEN = React.lazy(() => import('./pages/articles/en/VintedSalesStrategy2025Page').then(module => ({ default: module.default })));
const HowToTakeGoodVintedPhotosPageEN = React.lazy(() => import('./pages/articles/en/HowToTakeGoodVintedPhotosPage').then(module => ({ default: module.default })));
// Translated articles - ES
const FotosPuestasVintedPageES = React.lazy(() => import('./pages/articles/es/FotosPuestasVintedPage').then(module => ({ default: module.default })));
const ManiquiIAVintedPageES = React.lazy(() => import('./pages/articles/es/ManiquiIAVintedPage').then(module => ({ default: module.default })));
const VintedLookGratisAlternativaProPageES = React.lazy(() => import('./pages/articles/es/VintedLookGratisAlternativaProPage').then(module => ({ default: module.default })));
const IAFotoVintedGratisVsPagoPageES = React.lazy(() => import('./pages/articles/es/IAFotoVintedGratisVsPagoPage').then(module => ({ default: module.default })));
const AlgoritmoVintedVisibilidadPageES = React.lazy(() => import('./pages/articles/es/AlgoritmoVintedVisibilidadPage').then(module => ({ default: module.default })));
const GuiaCompletaFotosVinted2025PageES = React.lazy(() => import('./pages/articles/es/GuiaCompletaFotosVinted2025Page').then(module => ({ default: module.default })));
const CincoConsejosVenderRapidoVintedPageES = React.lazy(() => import('./pages/articles/es/CincoConsejosVenderRapidoVintedPage').then(module => ({ default: module.default })));
const EstrategiaVentaVinted2025PageES = React.lazy(() => import('./pages/articles/es/EstrategiaVentaVinted2025Page').then(module => ({ default: module.default })));
const ComoTomarBuenasFotosVintedPageES = React.lazy(() => import('./pages/articles/es/ComoTomarBuenasFotosVintedPage').then(module => ({ default: module.default })));
// Translated articles - IT
const FotoIndossateVintedPageIT = React.lazy(() => import('./pages/articles/it/FotoIndossateVintedPage').then(module => ({ default: module.default })));
const ManichinoIAVintedPageIT = React.lazy(() => import('./pages/articles/it/ManichinoIAVintedPage').then(module => ({ default: module.default })));
const VintedLookGratisAlternativaProPageIT = React.lazy(() => import('./pages/articles/it/VintedLookGratisAlternativaProPage').then(module => ({ default: module.default })));
const IAFotoVintedGratisVsPagamentoPageIT = React.lazy(() => import('./pages/articles/it/IAFotoVintedGratisVsPagamentoPage').then(module => ({ default: module.default })));
const AlgoritmoVintedVisibilitaPageIT = React.lazy(() => import('./pages/articles/it/AlgoritmoVintedVisibilitaPage').then(module => ({ default: module.default })));
const GuidaCompletaFotoVinted2025PageIT = React.lazy(() => import('./pages/articles/it/GuidaCompletaFotoVinted2025Page').then(module => ({ default: module.default })));
const CinqueConsigliVendereVelocementeVintedPageIT = React.lazy(() => import('./pages/articles/it/CinqueConsigliVendereVelocementeVintedPage').then(module => ({ default: module.default })));
const StrategiaVenditaVinted2025PageIT = React.lazy(() => import('./pages/articles/it/StrategiaVenditaVinted2025Page').then(module => ({ default: module.default })));
const ComeFareBelleFotoVintedPageIT = React.lazy(() => import('./pages/articles/it/ComeFareBelleFotoVintedPage').then(module => ({ default: module.default })));
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
            <ScrollToTopOnMount />
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
              <Route path="/blog" element={
                <Suspense fallback={<LoadingComponent />}>
                  <BlogIndexPage />
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
              <Route path="/articles/5-astuces-pour-vendre-plus-vite-sur-vinted" element={
                <Suspense fallback={<LoadingComponent />}>
                  <CinqAstucesVendrePlusVitePage />
                </Suspense>
              } />
              <Route path="/articles/strategie-vente-vinted-2025" element={
                <Suspense fallback={<LoadingComponent />}>
                  <StrategieVenteVinted2025Page />
                </Suspense>
              } />
              <Route path="/articles/comment-prendre-bonnes-photos-vinted" element={
                <Suspense fallback={<LoadingComponent />}>
                  <CommentPrendrePhotoVintedPage />
                </Suspense>
              } />
              <Route path="/articles/vintdress-vs-alternatives-comparatif-2025" element={
                <Suspense fallback={<LoadingComponent />}>
                  <VintDressVsAlternativesComparatifPage />
                </Suspense>
              } />
              <Route path="/articles/tendances-mode-2025" element={
                <Suspense fallback={<LoadingComponent />}>
                  <TendancesMode2025Page />
                </Suspense>
              } />
              <Route path="/articles/vendre-vintage-vinted-guide" element={
                <Suspense fallback={<LoadingComponent />}>
                  <VendreVintageVintedGuidePage />
                </Suspense>
              } />
              <Route path="/articles/identite-visuelle-vinted" element={
                <Suspense fallback={<LoadingComponent />}>
                  <IdentiteVisuelleVintedPage />
                </Suspense>
              } />
              <Route path="/articles/erreurs-ventes-vinted" element={
                <Suspense fallback={<LoadingComponent />}>
                  <ErreursVentesVintedPage />
                </Suspense>
              } />
              <Route path="/articles/success-story-marie-2025" element={
                <Suspense fallback={<LoadingComponent />}>
                  <SuccessStoryMarie2025Page />
                </Suspense>
              } />
              <Route path="/articles/ia-au-service-de-la-mode-notre-revolution" element={
                <Suspense fallback={<LoadingComponent />}>
                  <IAServiceModeRevolutionPage />
                </Suspense>
              } />
              <Route path="/articles/temoignage-300-pourcent-vues-une-semaine" element={
                <Suspense fallback={<LoadingComponent />}>
                  <Temoignage300PourcentVuesPage />
                </Suspense>
              } />
              {/* Translated articles - EN */}
              <Route path="/en/articles/worn-photos-vinted" element={
                <Suspense fallback={<LoadingComponent />}>
                  <WornPhotosVintedPageEN />
                </Suspense>
              } />
              <Route path="/en/articles/ai-mannequin-vinted" element={
                <Suspense fallback={<LoadingComponent />}>
                  <AImannequinVintedPageEN />
                </Suspense>
              } />
              <Route path="/en/articles/vinted-look-free-vs-pro-alternative" element={
                <Suspense fallback={<LoadingComponent />}>
                  <VintedLookFreeVsProPageEN />
                </Suspense>
              } />
              <Route path="/en/articles/ai-photo-vinted-free-vs-paid" element={
                <Suspense fallback={<LoadingComponent />}>
                  <AIPhotoVintedFreeVsPaidPageEN />
                </Suspense>
              } />
              <Route path="/en/articles/vinted-algorithm-visibility-2025" element={
                <Suspense fallback={<LoadingComponent />}>
                  <VintedAlgorithmVisibilityPageEN />
                </Suspense>
              } />
              <Route path="/en/articles/complete-guide-vinted-photos-2025" element={
                <Suspense fallback={<LoadingComponent />}>
                  <CompleteGuideVintedPhotos2025PageEN />
                </Suspense>
              } />
              <Route path="/en/articles/5-tips-sell-faster-vinted" element={
                <Suspense fallback={<LoadingComponent />}>
                  <FiveTipsSellFasterVintedPageEN />
                </Suspense>
              } />
              <Route path="/en/articles/vinted-sales-strategy-2025" element={
                <Suspense fallback={<LoadingComponent />}>
                  <VintedSalesStrategy2025PageEN />
                </Suspense>
              } />
              <Route path="/en/articles/how-to-take-good-vinted-photos" element={
                <Suspense fallback={<LoadingComponent />}>
                  <HowToTakeGoodVintedPhotosPageEN />
                </Suspense>
              } />
              {/* Translated articles - ES */}
              <Route path="/es/articles/fotos-puestas-vinted" element={
                <Suspense fallback={<LoadingComponent />}>
                  <FotosPuestasVintedPageES />
                </Suspense>
              } />
              <Route path="/es/articles/maniqui-ia-vinted" element={
                <Suspense fallback={<LoadingComponent />}>
                  <ManiquiIAVintedPageES />
                </Suspense>
              } />
              <Route path="/es/articles/vinted-look-gratis-alternativa-pro" element={
                <Suspense fallback={<LoadingComponent />}>
                  <VintedLookGratisAlternativaProPageES />
                </Suspense>
              } />
              <Route path="/es/articles/ia-foto-vinted-gratis-vs-pago" element={
                <Suspense fallback={<LoadingComponent />}>
                  <IAFotoVintedGratisVsPagoPageES />
                </Suspense>
              } />
              <Route path="/es/articles/algoritmo-vinted-visibilidad-2025" element={
                <Suspense fallback={<LoadingComponent />}>
                  <AlgoritmoVintedVisibilidadPageES />
                </Suspense>
              } />
              <Route path="/es/articles/guia-completa-fotos-vinted-2025" element={
                <Suspense fallback={<LoadingComponent />}>
                  <GuiaCompletaFotosVinted2025PageES />
                </Suspense>
              } />
              <Route path="/es/articles/5-consejos-vender-rapido-vinted" element={
                <Suspense fallback={<LoadingComponent />}>
                  <CincoConsejosVenderRapidoVintedPageES />
                </Suspense>
              } />
              <Route path="/es/articles/estrategia-venta-vinted-2025" element={
                <Suspense fallback={<LoadingComponent />}>
                  <EstrategiaVentaVinted2025PageES />
                </Suspense>
              } />
              <Route path="/es/articles/como-tomar-buenas-fotos-vinted" element={
                <Suspense fallback={<LoadingComponent />}>
                  <ComoTomarBuenasFotosVintedPageES />
                </Suspense>
              } />
              {/* Translated articles - IT */}
              <Route path="/it/articles/foto-indossate-vinted" element={
                <Suspense fallback={<LoadingComponent />}>
                  <FotoIndossateVintedPageIT />
                </Suspense>
              } />
              <Route path="/it/articles/manichino-ia-vinted" element={
                <Suspense fallback={<LoadingComponent />}>
                  <ManichinoIAVintedPageIT />
                </Suspense>
              } />
              <Route path="/it/articles/vinted-look-gratis-alternativa-pro" element={
                <Suspense fallback={<LoadingComponent />}>
                  <VintedLookGratisAlternativaProPageIT />
                </Suspense>
              } />
              <Route path="/it/articles/ia-foto-vinted-gratis-vs-pagamento" element={
                <Suspense fallback={<LoadingComponent />}>
                  <IAFotoVintedGratisVsPagamentoPageIT />
                </Suspense>
              } />
              <Route path="/it/articles/algoritmo-vinted-visibilita-2025" element={
                <Suspense fallback={<LoadingComponent />}>
                  <AlgoritmoVintedVisibilitaPageIT />
                </Suspense>
              } />
              <Route path="/it/articles/guida-completa-foto-vinted-2025" element={
                <Suspense fallback={<LoadingComponent />}>
                  <GuidaCompletaFotoVinted2025PageIT />
                </Suspense>
              } />
              <Route path="/it/articles/5-consigli-vendere-velocemente-vinted" element={
                <Suspense fallback={<LoadingComponent />}>
                  <CinqueConsigliVendereVelocementeVintedPageIT />
                </Suspense>
              } />
              <Route path="/it/articles/strategia-vendita-vinted-2025" element={
                <Suspense fallback={<LoadingComponent />}>
                  <StrategiaVenditaVinted2025PageIT />
                </Suspense>
              } />
              <Route path="/it/articles/come-fare-belle-foto-vinted" element={
                <Suspense fallback={<LoadingComponent />}>
                  <ComeFareBelleFotoVintedPageIT />
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