import React from 'react';

interface OptimizedImageProps {
  /** Base name of the image without extension (e.g., "1_after") */
  imageName: string;
  /** Alt text for accessibility */
  alt: string;
  /** CSS classes for styling */
  className?: string;
  /** Loading strategy: "eager" for above-the-fold, "lazy" for below */
  loading?: 'eager' | 'lazy';
  /** Fetch priority: "high" for LCP images, "low" for others */
  fetchPriority?: 'high' | 'low' | 'auto';
  /** Explicit width for CLS prevention */
  width: number;
  /** Explicit height for CLS prevention */
  height: number;
  /** Whether to use optimized images (default: true) */
  useOptimized?: boolean;
}

/**
 * OptimizedImage Component
 *
 * Serves responsive WebP images with JPEG fallback.
 * Automatically selects the appropriate image size based on screen width.
 *
 * Features:
 * - WebP format with JPEG fallback for compatibility
 * - Responsive srcset for different screen sizes (400px, 600px, 800px)
 * - Explicit dimensions to prevent CLS (Cumulative Layout Shift)
 * - Lazy loading support for below-the-fold images
 * - Optimized for Core Web Vitals (LCP, CLS)
 *
 * @example
 * <OptimizedImage
 *   imageName="1_after"
 *   alt="Avatar IA après génération"
 *   className="w-full h-full object-cover"
 *   loading="eager"
 *   fetchPriority="high"
 *   width={400}
 *   height={320}
 * />
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  imageName,
  alt,
  className = '',
  loading = 'lazy',
  fetchPriority = 'auto',
  width,
  height,
  useOptimized = true,
}) => {
  const basePathOptimized = '/images/before-after/optimized';
  const basePathOriginal = '/images/before-after';

  // Determine file extension from original image name
  const getOriginalExt = (name: string): string => {
    // Map of known image extensions
    const extMap: Record<string, string> = {
      '1': '.jpg',
      '1_after': '.jpg',
      'chemisier_fleur': '.jpg',
      'chemisier_ia': '.jpg',
      'pull_raye': '.jpeg',
      'pull_raye_ia': '.jpg',
      'tee_shirt_reebook': '.jpeg',
      'tee_shirt_reebook_ia': '.jpg',
    };
    return extMap[name] || '.jpg';
  };

  const originalExt = getOriginalExt(imageName);

  if (!useOptimized) {
    // Fallback to original non-optimized images
    return (
      <img
        src={`${basePathOriginal}/${imageName}${originalExt}`}
        alt={alt}
        className={className}
        loading={loading}
        fetchPriority={fetchPriority}
        width={width}
        height={height}
      />
    );
  }

  return (
    <picture>
      {/* WebP format for modern browsers with responsive sizes */}
      <source
        type="image/webp"
        srcSet={`
          ${basePathOptimized}/${imageName}-small.webp 400w,
          ${basePathOptimized}/${imageName}-medium.webp 600w,
          ${basePathOptimized}/${imageName}-large.webp 800w,
          ${basePathOptimized}/${imageName}.webp 1200w
        `}
        sizes="(max-width: 640px) 400px, (max-width: 1024px) 600px, 800px"
      />

      {/* JPEG fallback for older browsers */}
      <source
        type="image/jpeg"
        srcSet={`${basePathOptimized}/${imageName}${originalExt}`}
      />

      {/* Fallback img tag (required) */}
      <img
        src={`${basePathOptimized}/${imageName}${originalExt}`}
        alt={alt}
        className={className}
        loading={loading}
        fetchPriority={fetchPriority}
        width={width}
        height={height}
      />
    </picture>
  );
};
