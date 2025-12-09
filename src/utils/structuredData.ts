// Structured data utility functions for SEO

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface ArticleSchema {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified: string;
  url: string;
  image?: string;
}

export interface HowToStep {
  name: string;
  text: string;
  image?: string;
}

export interface HowToSchema {
  name: string;
  description: string;
  image?: string;
  totalTime?: string;
  estimatedCost?: { currency: string; value: string };
  steps: HowToStep[];
}

// Generate FAQ Schema
export const generateFAQSchema = (faqs: FAQItem[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

// Generate HowTo Schema
export const generateHowToSchema = (howTo: HowToSchema) => {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": howTo.name,
    "description": howTo.description,
    "image": howTo.image,
    "totalTime": howTo.totalTime,
    "estimatedCost": howTo.estimatedCost ? {
      "@type": "MonetaryAmount",
      "currency": howTo.estimatedCost.currency,
      "value": howTo.estimatedCost.value
    } : undefined,
    "step": howTo.steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      "image": step.image
    }))
  };
};

// Generate Breadcrumb Schema
export const generateBreadcrumbSchema = (items: BreadcrumbItem[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

// Generate Article Schema
export const generateArticleSchema = (article: ArticleSchema) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.headline,
    "description": article.description,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "VintDress",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vintdress.com/logo.png"
      }
    },
    "datePublished": article.datePublished,
    "dateModified": article.dateModified,
    "url": article.url,
    "image": article.image ? {
      "@type": "ImageObject",
      "url": article.image,
      "width": 1200,
      "height": 630
    } : undefined,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.url
    }
  };
};

// Generate Organization Schema
export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VintDress",
    "url": "https://vintdress.com",
    "logo": "https://vintdress.com/logo.png",
    "description": "Générateur IA de photos portées pour optimiser vos ventes sur Vinted",
    "foundingDate": "2024",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "French"
    },
    "sameAs": [
      "https://twitter.com/vintdress",
      "https://facebook.com/vintdress"
    ]
  };
};

// Generate Product Schema for pricing plans
export const generateProductSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "VintDress - Générateur IA Photos Vinted",
    "description": "Service de génération d'avatars IA pour créer des photos portées réalistes pour vos ventes Vinted",
    "brand": {
      "@type": "Brand",
      "name": "VintedAvatar"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Pack 10 Crédits",
        "price": "3.49",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "url": "https://vintdress.com/#tarifs",
        "seller": {
          "@type": "Organization",
          "name": "VintedAvatar"
        }
      },
      {
        "@type": "Offer",
        "name": "Pack 25 Crédits", 
        "price": "6.99",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "url": "https://vintdress.com/#tarifs",
        "seller": {
          "@type": "Organization",
          "name": "VintedAvatar"
        }
      },
      {
        "@type": "Offer",
        "name": "Abonnement Mensuel",
        "price": "11.99",
        "priceCurrency": "EUR", 
        "availability": "https://schema.org/InStock",
        "url": "https://vintdress.com/#tarifs",
        "seller": {
          "@type": "Organization",
          "name": "VintedAvatar"
        }
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "24000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Marie Durand"
        },
        "reviewBody": "Incroyable ! Mes ventes ont augmenté de 280% en une semaine. L'IA crée des photos ultra-réalistes."
      }
    ]
  };
};

// Helper function to inject structured data into page
export const injectStructuredData = (schema: object) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
  return script;
};

// Remove structured data script
export const removeStructuredData = (script: HTMLScriptElement) => {
  if (script && script.parentNode) {
    script.parentNode.removeChild(script);
  }
};