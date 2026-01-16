import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Sparkles, ArrowLeft, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useSEO } from '../hooks/useSEO';
import { SITE_CONFIG } from '../constants';
import { generateSlug } from '../utils/slugify';

interface GalleryItem {
  id: string;
  created_at: string;
  generated_image_url: string;
  original_image_url: string;
  clothing_type: string;
  title: string;
  description: string;
  slug: string;
}

export const GalleryPage: React.FC = () => {
  const { t } = useTranslation('gallery');
  const navigate = useNavigate();

  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  // SEO
  useSEO({
    title: 'Galerie VintDress - Photos de vêtements Vinted avec mannequin IA',
    description: 'Découvrez notre galerie de photos Vinted améliorées par IA. Des centaines d\'exemples de vêtements portés par des mannequins virtuels pour booster vos ventes.',
    keywords: 'galerie vinted, photos vêtements, mannequin IA, exemples photos vinted, vendre sur vinted, photos professionnelles vinted',
    canonical: `${SITE_CONFIG.url}/galerie`,
    ogTitle: 'Galerie VintDress - Photos Vinted avec mannequin IA',
    ogDescription: 'Explorez des centaines de photos de vêtements Vinted transformées par notre IA. Inspirez-vous pour vos propres annonces !',
    ogType: 'website',
    ogImage: SITE_CONFIG.defaultImage,
  });

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetch gallery items function
  const fetchGalleryItems = async () => {
    try {
      setLoading(true);

      const query = supabase
        .from('usage_tracking')
        .select('id, created_at, metadata')
        .eq('is_public', true)
        .eq('generation_type', 'avatar')
        .order('created_at', { ascending: false })
        .limit(100);

      const { data, error } = await query;

      if (error) throw error;

      const galleryItems: GalleryItem[] = (data || []).map(item => ({
        id: item.id,
        created_at: item.created_at,
        generated_image_url: item.metadata?.generated_image_url || '',
        original_image_url: item.metadata?.original_image_url || '',
        clothing_type: item.metadata?.generation_config?.clothingType || 'autre',
        title: item.metadata?.vinted_listing?.title || '',
        description: item.metadata?.vinted_listing?.description || '',
        slug: item.metadata?.slug || '',
      })).filter(item => item.generated_image_url);

      setItems(galleryItems);
    } catch (err) {
      console.error('Error fetching gallery:', err);
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchGalleryItems();
  }, []);

  // Listen for gallery updates (when someone shares)
  useEffect(() => {
    const handleGalleryUpdate = () => {
      fetchGalleryItems();
    };

    window.addEventListener('gallery-updated', handleGalleryUpdate);

    return () => {
      window.removeEventListener('gallery-updated', handleGalleryUpdate);
    };
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-grain py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 px-4 py-2 bg-white border-3 border-black font-display font-bold text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('back', 'RETOUR')}
            </button>

            {/* Title Section */}
            <div className="text-center mb-8">
              <div className="relative inline-block mb-4">
                {/* Decorative elements */}
                <div className="absolute -top-3 -left-4 w-6 h-6 bg-mint border-2 border-black transform rotate-12 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />
                <div className="absolute -bottom-2 -right-3 w-5 h-5 bg-pink-pastel border-2 border-black transform -rotate-12 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />

                <div className="inline-flex items-center gap-3 bg-vinted border-4 border-black px-8 py-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <Image className="w-8 h-8 text-white" />
                  <h1 className="font-display font-bold text-2xl sm:text-3xl text-white">
                    {t('title', 'GALERIE COMMUNAUTAIRE')}
                  </h1>
                </div>
              </div>

              <p className="font-body text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
                {t('subtitle', 'Découvrez les créations de notre communauté ! Des centaines de photos de vêtements Vinted transformées par notre IA.')}
              </p>
            </div>

          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-20">
              <div className="bg-white border-4 border-black px-8 py-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center gap-4">
                  <Loader2 className="w-6 h-6 animate-spin text-vinted" />
                  <span className="font-display font-bold text-lg">
                    {t('loading', 'CHARGEMENT...')}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Empty State */}
          {!loading && items.length === 0 && (
            <div className="text-center py-20">
              <div className="bg-white border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] max-w-md mx-auto">
                <Image className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h2 className="font-display font-bold text-xl mb-2">
                  {t('empty.title', 'AUCUNE PHOTO')}
                </h2>
                <p className="font-body text-gray-600 mb-6">
                  {t('empty.noPhotos', 'La galerie est vide pour le moment. Soyez le premier à partager !')}
                </p>
                <button
                  onClick={() => navigate('/')}
                  className="px-6 py-3 bg-vinted text-white border-3 border-black font-display font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                >
                  {t('empty.cta', 'CREER MON AVATAR')}
                </button>
              </div>
            </div>
          )}

          {/* Gallery Grid */}
          {!loading && items.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item) => {
                // Generate slug if not present (for older photos)
                const itemSlug = item.slug || generateSlug(item.title || item.clothing_type || 'photo', item.id);
                return (
                <div
                  key={item.id}
                  onClick={() => navigate(`/photos/${itemSlug}`)}
                  className="group cursor-pointer"
                >
                  <div className="bg-white border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] group-hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
                    {/* Before/After Images */}
                    <div className="flex">
                      {/* Before - Original */}
                      {item.original_image_url && (
                        <div className="w-1/2 relative">
                          <div className="aspect-[3/4] overflow-hidden border-r-2 border-black">
                            <img
                              src={item.original_image_url}
                              alt={`Original - ${item.title || item.clothing_type}`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                          <div className="absolute top-2 left-2 bg-black text-white px-2 py-0.5 text-[10px] font-display font-bold">
                            AVANT
                          </div>
                        </div>
                      )}
                      {/* After - Generated */}
                      <div className={item.original_image_url ? "w-1/2 relative" : "w-full relative"}>
                        <div className="aspect-[3/4] overflow-hidden">
                          <img
                            src={item.generated_image_url}
                            alt={`Avatar IA - ${item.title || item.clothing_type}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                        <div className="absolute top-2 right-2 bg-vinted text-white px-2 py-0.5 text-[10px] font-display font-bold">
                          APRÈS
                        </div>
                      </div>
                    </div>
                    {/* Info */}
                    <div className="p-3 border-t-2 border-black bg-cream">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-display font-bold text-xs text-vinted truncate">
                          {item.clothing_type.toUpperCase()}
                        </span>
                        <span className="font-body text-[10px] text-gray-500 whitespace-nowrap">
                          {formatDate(item.created_at)}
                        </span>
                      </div>
                      {item.title && (
                        <p className="font-body text-xs text-gray-700 mt-1 line-clamp-2">
                          {item.title}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );})}
            </div>
          )}

          {/* SEO Content */}
          <div className="mt-16 bg-white border-4 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-xl sm:text-2xl mb-4">
              {t('seo.title', 'Photos de vêtements Vinted avec mannequin IA')}
            </h2>
            <div className="font-body text-gray-700 space-y-4 text-sm sm:text-base">
              <p>
                {t('seo.p1', 'Bienvenue dans la galerie communautaire de VintDress ! Ici, vous pouvez découvrir des centaines d\'exemples de photos de vêtements Vinted transformées par notre intelligence artificielle.')}
              </p>
              <p>
                {t('seo.p2', 'Chaque image montre un vêtement porté par un mannequin virtuel généré par IA. Cette technique permet aux vendeurs Vinted d\'obtenir des photos professionnelles sans avoir besoin de mannequin réel, de photographe, ou de studio.')}
              </p>
              <p>
                {t('seo.p3', 'Les photos avec mannequin augmentent significativement les ventes sur Vinted car elles permettent aux acheteurs de mieux visualiser comment le vêtement tombe une fois porté. Inspirez-vous de ces exemples pour créer vos propres photos !')}
              </p>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-vinted text-white border-4 border-black font-display font-bold shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[9px_9px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                <Sparkles className="w-5 h-5" />
                {t('seo.cta', 'CREER MON AVATAR')}
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};
