import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  width?: number;
  height?: number;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  priority = false,
  width,
  height
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className={`bg-gray-200 border-4 border-slate-900 flex items-center justify-center ${className}`}>
        <span className="text-slate-600 font-bold text-sm">Image non disponible</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 border-4 border-slate-900 flex items-center justify-center ">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full "></div>
        </div>
      )}
      
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} 300`}
        loading={priority ? 'eager' : loading}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        width={width}
        height={height}
        style={{
          objectFit: 'contain',
          ...(priority && { fetchPriority: 'high' } as any)
        }}
      />
    </div>
  );
};