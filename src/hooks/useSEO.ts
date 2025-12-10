import { useEffect } from 'react';
import { SITE_CONFIG, SUPPORTED_LANGUAGES, LANGUAGE_META } from '../constants';
import type { SEOData, HreflangLink, Article } from '../types';

// Re-export types for backward compatibility
export type { SEOData };

export const useSEO = (seoData: SEOData) => {
  useEffect(() => {
    // Update title
    document.title = seoData.title;

    // Helper function to update or create meta tag
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${property}"]` : `meta[name="${property}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;

      if (!meta) {
        meta = document.createElement('meta');
        if (isProperty) {
          meta.setAttribute('property', property);
        } else {
          meta.setAttribute('name', property);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Update canonical link
    const updateCanonical = (url: string) => {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', url);
    };

    // Update hreflang links for multi-language support
    const updateHreflangLinks = (links: HreflangLink[]) => {
      // Remove existing hreflang links
      const existingLinks = document.querySelectorAll('link[rel="alternate"][hreflang]');
      existingLinks.forEach(link => link.remove());

      // Add new hreflang links
      links.forEach(({ hrefLang, href }) => {
        const link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', hrefLang);
        link.setAttribute('href', href);
        document.head.appendChild(link);
      });
    };

    // Update structured data (supports single object or array of objects)
    const updateStructuredData = (data: object | object[]) => {
      // Remove existing dynamic structured data
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"].dynamic-seo');
      existingScripts.forEach(script => script.remove());

      // Handle array of schemas (multiple structured data blocks)
      const schemas = Array.isArray(data) ? data : [data];

      schemas.forEach(schema => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.className = 'dynamic-seo';
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    };

    // Update basic meta tags
    updateMetaTag('description', seoData.description);
    if (seoData.keywords) {
      updateMetaTag('keywords', seoData.keywords);
    }

    // Handle robots meta tag (noindex for private pages)
    if (seoData.noindex) {
      updateMetaTag('robots', 'noindex, nofollow');
    }

    // Update canonical URL
    if (seoData.canonical) {
      updateCanonical(seoData.canonical);
    }

    // Update hreflang links
    if (seoData.hreflangLinks && seoData.hreflangLinks.length > 0) {
      updateHreflangLinks(seoData.hreflangLinks);
    }

    // Update Open Graph tags
    updateMetaTag('og:title', seoData.ogTitle || seoData.title, true);
    updateMetaTag('og:description', seoData.ogDescription || seoData.description, true);
    updateMetaTag('og:type', seoData.ogType || 'website', true);
    updateMetaTag('og:site_name', SITE_CONFIG.name, true);
    updateMetaTag('og:locale', 'fr_FR', true);
    if (seoData.ogImage) {
      updateMetaTag('og:image', seoData.ogImage, true);
      updateMetaTag('og:image:width', '1200', true);
      updateMetaTag('og:image:height', '630', true);
    }
    if (seoData.canonical) {
      updateMetaTag('og:url', seoData.canonical, true);
    }

    // Update Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:site', SITE_CONFIG.twitterHandle);
    updateMetaTag('twitter:title', seoData.twitterTitle || seoData.title);
    updateMetaTag('twitter:description', seoData.twitterDescription || seoData.description);
    if (seoData.twitterImage) {
      updateMetaTag('twitter:image', seoData.twitterImage);
    }

    // Update structured data
    if (seoData.structuredData) {
      updateStructuredData(seoData.structuredData);
    }

    // Cleanup function
    return () => {
      // Remove dynamic structured data on component unmount
      const dynamicScripts = document.querySelectorAll('script[type="application/ld+json"].dynamic-seo');
      dynamicScripts.forEach(script => script.remove());

      // Remove hreflang links on unmount
      const hreflangLinks = document.querySelectorAll('link[rel="alternate"][hreflang]');
      hreflangLinks.forEach(link => link.remove());
    };
  }, [seoData]);
};

// Helper to generate hreflang links for a given path
export const generateHreflangLinks = (basePath: string): HreflangLink[] => {
  const links: HreflangLink[] = [];

  SUPPORTED_LANGUAGES.forEach(lang => {
    const hrefLang = LANGUAGE_META[lang].hreflang;
    const href = lang === 'fr'
      ? `${SITE_CONFIG.url}${basePath}`
      : `${SITE_CONFIG.url}${basePath}${basePath.includes('?') ? '&' : '?'}lang=${lang}`;

    links.push({ hrefLang, href });
  });

  // Add x-default pointing to French
  links.push({
    hrefLang: 'x-default',
    href: `${SITE_CONFIG.url}${basePath}`
  });

  return links;
};

// Predefined SEO configurations for common pages
export const SEO_CONFIGS = {
  home: {
    title: 'VintDress - Générateur IA de Photos Portées pour Vinted | +300% de Ventes',
    description: 'Créez des photos portées réalistes pour Vinted en 30 secondes avec l\'IA. Pas de mannequin nécessaire. +300% de vues, +250% de ventes. Essai gratuit.',
    keywords: 'vinted, photo portée, IA, générateur photo, mannequin virtuel, vente vêtements, avatar IA, photo produit, intelligence artificielle, vendre sur vinted',
    canonical: SITE_CONFIG.url,
    ogImage: SITE_CONFIG.defaultImage,
    ogType: 'website',
    hreflangLinks: generateHreflangLinks('/')
  },

  account: {
    title: 'Mon Compte VintDress - Gestion des Crédits et Historique',
    description: 'Gérez vos crédits VintDress, consultez votre historique de générations et accédez à votre système de parrainage.',
    canonical: `${SITE_CONFIG.url}/account`,
    ogImage: SITE_CONFIG.defaultImage,
    ogType: 'website',
    noindex: true // Prevent indexing - private page
  },

  success: {
    title: 'Paiement Réussi - VintDress',
    description: 'Votre paiement a été traité avec succès. Vos crédits sont maintenant disponibles pour générer des avatars IA.',
    canonical: `${SITE_CONFIG.url}/success`,
    ogImage: SITE_CONFIG.defaultImage,
    ogType: 'website',
    noindex: true // Prevent indexing - private page
  },

  cancel: {
    title: 'Paiement Annulé - VintDress',
    description: 'Votre paiement a été annulé. Vous pouvez réessayer ou nous contacter si vous rencontrez des difficultés.',
    canonical: `${SITE_CONFIG.url}/cancel`,
    ogImage: SITE_CONFIG.defaultImage,
    ogType: 'website',
    noindex: true // Prevent indexing - private page
  },

  cgu: {
    title: 'Conditions Générales d\'Utilisation - VintDress',
    description: 'Consultez les conditions générales d\'utilisation du service VintDress pour la génération d\'avatars IA.',
    canonical: `${SITE_CONFIG.url}/cgu`,
    ogImage: SITE_CONFIG.defaultImage,
    ogType: 'website'
  },

  confidentialite: {
    title: 'Politique de Confidentialité - VintDress',
    description: 'Découvrez comment VintDress protège vos données personnelles et respecte votre vie privée.',
    canonical: `${SITE_CONFIG.url}/confidentialite`,
    ogImage: SITE_CONFIG.defaultImage,
    ogType: 'website'
  },

  faq: {
    title: 'FAQ - Questions Fréquentes sur VintDress | Générateur IA Vinted',
    description: 'Trouvez les réponses à toutes vos questions sur VintDress : utilisation, tarifs, génération d\'avatars IA, abonnements et plus encore.',
    keywords: 'faq vintdress, questions vinted, aide générateur photo, support vintdress',
    canonical: `${SITE_CONFIG.url}/faq`,
    ogImage: SITE_CONFIG.defaultImage,
    ogType: 'website',
    hreflangLinks: generateHreflangLinks('/faq')
  }
};

// Helper function to generate article SEO data
export const generateArticleSEO = (article: Article): SEOData => {
  const slug = article.slug;

  return {
    title: `${article.title} - Blog VintDress`,
    description: article.excerpt || `Découvrez nos conseils d'experts pour optimiser vos ventes sur Vinted avec ${article.title}`,
    keywords: `${article.title}, vinted, conseils vente, ${article.category}, blog vintdress, vendre vinted`,
    canonical: `${SITE_CONFIG.url}/blog/${slug}`,
    ogTitle: article.title,
    ogDescription: article.excerpt,
    ogImage: article.image || SITE_CONFIG.defaultImage,
    ogType: 'article',
    twitterTitle: article.title,
    twitterDescription: article.excerpt,
    twitterImage: article.image || SITE_CONFIG.defaultImage,
    hreflangLinks: generateHreflangLinks(`/blog/${slug}`)
  };
};

// Helper function to generate FAQ page SEO with FAQ schema
export const generateFaqSEO = (faqs: Array<{ question: string; answer: string }>): SEOData => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return {
    ...SEO_CONFIGS.faq,
    structuredData: faqSchema
  };
};
