import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface GoogleAdBannerProps {
  slot: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  responsive?: boolean;
  className?: string;
}

export const GoogleAdBanner: React.FC<GoogleAdBannerProps> = ({
  slot,
  format = 'auto',
  responsive = true,
  className = '',
}) => {
  const adRef = useRef<HTMLModElement>(null);
  const isAdLoaded = useRef(false);

  useEffect(() => {
    // Prevent double loading
    if (isAdLoaded.current) return;

    try {
      // Initialize adsbygoogle array if not exists
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
      isAdLoaded.current = true;
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  // Determine style based on format
  const getAdStyle = (): React.CSSProperties => {
    if (responsive) {
      return { display: 'block' };
    }

    switch (format) {
      case 'rectangle':
        return { display: 'inline-block', width: '300px', height: '250px' };
      case 'horizontal':
        return { display: 'inline-block', width: '728px', height: '90px' };
      case 'vertical':
        return { display: 'inline-block', width: '160px', height: '600px' };
      default:
        return { display: 'block' };
    }
  };

  return (
    <div className={`google-ad-container ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={getAdStyle()}
        data-ad-client="ca-pub-5670376246144204"
        data-ad-slot={slot}
        data-ad-format={responsive ? 'auto' : undefined}
        data-full-width-responsive={responsive ? 'true' : undefined}
      />
    </div>
  );
};
