import React from 'react';
import { Link } from 'react-router-dom';
import { Home, RefreshCw, ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useSEO } from '../hooks/useSEO';
import { SITE_CONFIG } from '../constants';

export const NotFoundPage: React.FC = () => {
  const { t } = useTranslation('common');

  useSEO({
    title: 'Page Non Trouvée - 404 | VintDress',
    description: 'La page que vous recherchez n\'existe pas ou a été déplacée. Retournez à l\'accueil de VintDress.',
    canonical: `${SITE_CONFIG.url}/404`,
    ogType: 'website',
  });

  return (
    <section className="min-h-[70vh] bg-cream flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Number */}
        <div className="relative inline-block mb-8">
          <div className="bg-white border-4 border-black px-8 py-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
            <span className="font-display font-bold text-6xl sm:text-8xl text-vinted">404</span>
          </div>
          <div className="absolute -top-4 -right-4 w-10 h-10 bg-pink-pastel border-3 border-black transform rotate-12 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"></div>
          <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-mint border-3 border-black transform -rotate-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
        </div>

        {/* Message */}
        <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-1 mb-8">
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-black mb-4">
            {t('errors.pageNotFound', 'Page Non Trouvée')}
          </h1>
          <p className="font-body text-gray-700 text-base sm:text-lg">
            {t('errors.pageNotFoundDescription', 'Oups ! La page que vous recherchez n\'existe pas ou a été déplacée.')}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-vinted text-white border-3 border-black font-display font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            <Home className="w-5 h-5" />
            {t('buttons.backToHome', 'Retour à l\'accueil')}
          </Link>

          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-pink-pastel text-black border-3 border-black font-display font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            <RefreshCw className="w-5 h-5" />
            {t('buttons.refresh', 'Rafraîchir')}
          </button>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-mint text-black border-3 border-black font-display font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            {t('buttons.goBack', 'Page précédente')}
          </button>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t-2 border-gray-300">
          <p className="font-display font-bold text-sm text-gray-600 mb-4">
            {t('errors.helpfulLinks', 'Liens utiles')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/#tarifs"
              className="font-body text-vinted hover:underline"
            >
              {t('nav.pricing', 'Tarifs')}
            </Link>
            <Link
              to="/faq"
              className="font-body text-vinted hover:underline"
            >
              FAQ
            </Link>
            <Link
              to="/#blog"
              className="font-body text-vinted hover:underline"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
