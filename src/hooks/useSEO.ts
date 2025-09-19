import { useEffect } from 'react';

export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: object;
}

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

    // Update structured data
    const updateStructuredData = (data: object) => {
      // Remove existing structured data
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"].dynamic-seo');
      existingScripts.forEach(script => script.remove());

      // Add new structured data
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.className = 'dynamic-seo';
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    };

    // Update basic meta tags
    updateMetaTag('description', seoData.description);
    if (seoData.keywords) {
      updateMetaTag('keywords', seoData.keywords);
    }

    // Update canonical URL
    if (seoData.canonical) {
      updateCanonical(seoData.canonical);
    }

    // Update Open Graph tags
    updateMetaTag('og:title', seoData.ogTitle || seoData.title, true);
    updateMetaTag('og:description', seoData.ogDescription || seoData.description, true);
    updateMetaTag('og:type', seoData.ogType || 'website', true);
    if (seoData.ogImage) {
      updateMetaTag('og:image', seoData.ogImage, true);
    }
    if (seoData.canonical) {
      updateMetaTag('og:url', seoData.canonical, true);
    }

    // Update Twitter tags
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
    };
  }, [seoData]);
};

// Predefined SEO configurations for common pages
export const SEO_CONFIGS = {
  home: {
    title: 'VintedAvatar - Générateur IA de Photos Portées pour Vinted | +300% de Ventes',
    description: 'Créez des photos portées réalistes pour Vinted en 30 secondes avec l\'IA. Pas de mannequin nécessaire. +300% de vues, +250% de ventes. Essai gratuit.',
    keywords: 'vinted, photo portée, IA, générateur photo, mannequin virtuel, vente vêtements, avatar IA, photo produit',
    canonical: 'https://vintedavatar.com',
    ogImage: 'https://vintedavatar.com/og-image.jpg',
    ogType: 'website'
  },
  
  account: {
    title: 'Mon Compte VintedAvatar - Gestion des Crédits et Historique',
    description: 'Gérez vos crédits VintedAvatar, consultez votre historique de générations et accédez à votre système de parrainage.',
    canonical: 'https://vintedavatar.com/account',
    ogType: 'website'
  },

  success: {
    title: 'Paiement Réussi - VintedAvatar',
    description: 'Votre paiement a été traité avec succès. Vos crédits sont maintenant disponibles pour générer des avatars IA.',
    canonical: 'https://vintedavatar.com/success',
    ogType: 'website'
  },

  cancel: {
    title: 'Paiement Annulé - VintedAvatar',
    description: 'Votre paiement a été annulé. Vous pouvez réessayer ou nous contacter si vous rencontrez des difficultés.',
    canonical: 'https://vintedavatar.com/cancel',
    ogType: 'website'
  },

  cgu: {
    title: 'Conditions Générales d\'Utilisation - VintedAvatar',
    description: 'Consultez les conditions générales d\'utilisation du service VintedAvatar pour la génération d\'avatars IA.',
    canonical: 'https://vintedavatar.com/cgu',
    ogType: 'website'
  },

  confidentialite: {
    title: 'Politique de Confidentialité - VintedAvatar',
    description: 'Découvrez comment VintedAvatar protège vos données personnelles et respecte votre vie privée.',
    canonical: 'https://vintedavatar.com/confidentialite',
    ogType: 'website'
  }
};

// Helper function to generate article SEO data
export const generateArticleSEO = (article: any): SEOData => {
  return {
    title: `${article.title} - Blog VintedAvatar`,
    description: article.excerpt || `Découvrez nos conseils d'experts pour optimiser vos ventes sur Vinted avec ${article.title}`,
    keywords: `${article.title}, vinted, conseils vente, ${article.category}, blog vintedavatar`,
    canonical: `https://vintedavatar.com/blog/${article.slug}`,
    ogTitle: article.title,
    ogDescription: article.excerpt,
    ogImage: article.image || 'https://vintedavatar.com/og-image.jpg',
    ogType: 'article',
    twitterTitle: article.title,
    twitterDescription: article.excerpt,
    twitterImage: article.image || 'https://vintedavatar.com/og-image.jpg'
  };
};