import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { generateBreadcrumbSchema, injectStructuredData, removeStructuredData, BreadcrumbItem } from '../utils/structuredData';
import { articles } from '../articles';

interface BreadcrumbsProps {
  customItems?: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ customItems }) => {
  const location = useLocation();
  const [breadcrumbScript, setBreadcrumbScript] = React.useState<HTMLScriptElement | null>(null);

  // Generate breadcrumbs based on current path
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (customItems) {
      return customItems;
    }

    const pathSegments = location.pathname.split('/').filter(segment => segment);
    const breadcrumbs: BreadcrumbItem[] = [
      { name: 'Accueil', url: 'https://vintdress.com' }
    ];

    // Handle different routes
    if (pathSegments.length === 0) {
      return breadcrumbs; // Just home for root path
    }

    const firstSegment = pathSegments[0];

    switch (firstSegment) {
      case 'account':
        breadcrumbs.push({
          name: 'Mon Compte',
          url: 'https://vintdress.com/account'
        });
        break;

      case 'success':
        breadcrumbs.push({
          name: 'Paiement Réussi',
          url: 'https://vintdress.com/success'
        });
        break;

      case 'cancel':
        breadcrumbs.push({
          name: 'Paiement Annulé',
          url: 'https://vintdress.com/cancel'
        });
        break;

      case 'cgu':
        breadcrumbs.push({
          name: 'Conditions Générales',
          url: 'https://vintdress.com/cgu'
        });
        break;

      case 'confidentialite':
        breadcrumbs.push({
          name: 'Politique de Confidentialité',
          url: 'https://vintdress.com/confidentialite'
        });
        break;

      case 'blog':
        breadcrumbs.push({
          name: 'Blog',
          url: 'https://vintdress.com/#blog'
        });
        
        // Handle specific blog article
        if (pathSegments[1]) {
          const articleSlug = pathSegments[1];
          const article = articles[articleSlug];
          if (article) {
            breadcrumbs.push({
              name: article.title,
              url: `https://vintdress.com/blog/${articleSlug}`
            });
          }
        }
        break;

      case 'articles':
        // Legacy article URLs - redirect to blog
        breadcrumbs.push({
          name: 'Blog',
          url: 'https://vintdress.com/#blog'
        });
        
        if (pathSegments[1]) {
          const articleSlug = pathSegments[1];
          const article = articles[articleSlug];
          if (article) {
            breadcrumbs.push({
              name: article.title,
              url: `https://vintdress.com/blog/${articleSlug}`
            });
          }
        }
        break;

      default:
        // Generic handling for unknown routes
        pathSegments.forEach((segment, index) => {
          const url = `https://vintdress.com/${pathSegments.slice(0, index + 1).join('/')}`;
          const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
          breadcrumbs.push({ name, url });
        });
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Inject structured data for breadcrumbs
  useEffect(() => {
    // Remove any existing breadcrumb structured data
    if (breadcrumbScript) {
      removeStructuredData(breadcrumbScript);
    }

    // Only inject if we have more than just home
    if (breadcrumbs.length > 1) {
      const schema = generateBreadcrumbSchema(breadcrumbs);
      const script = injectStructuredData(schema);
      script.className = 'breadcrumb-schema';
      setBreadcrumbScript(script);
    }

    return () => {
      if (breadcrumbScript) {
        removeStructuredData(breadcrumbScript);
      }
    };
  }, [location.pathname]); // Removed breadcrumbs to avoid infinite loop

  // Don't render breadcrumbs on homepage
  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumbs" className="bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex items-center space-x-2 text-sm font-body">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            const isHome = index === 0;

            return (
              <li key={crumb.url} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                )}
                
                {isLast ? (
                  <span className="text-black font-semibold flex items-center gap-1">
                    {isHome && <Home className="w-4 h-4" />}
                    {crumb.name}
                  </span>
                ) : (
                  <Link
                    to={crumb.url.replace('https://vintdress.com', '')}
                    className="text-gray-600 hover:text-vinted transition-colors flex items-center gap-1 hover:underline"
                  >
                    {isHome && <Home className="w-4 h-4" />}
                    {crumb.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};