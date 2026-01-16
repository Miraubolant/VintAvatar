import React from 'react';

interface BeforeAfterComparisonProps {
  beforeImage: string | null;
  afterImage: string;
  title: string;
  description?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export const BeforeAfterComparison: React.FC<BeforeAfterComparisonProps> = ({
  beforeImage,
  afterImage,
  title,
  description,
  beforeLabel = 'AVANT',
  afterLabel = 'APRES',
}) => {
  // If no before image, show only after image
  if (!beforeImage) {
    return (
      <div className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        <div className="relative">
          <div className="w-full">
            <img
              src={afterImage}
              alt={`Avatar IA - ${title}`}
              className="w-full h-auto"
            />
          </div>
          <div className="absolute top-3 right-3 bg-vinted text-white px-3 py-1 text-xs font-display font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]">
            {afterLabel}
          </div>
        </div>

        {description && (
          <div className="p-4 sm:p-6 border-t-4 border-black bg-cream">
            <p className="font-body text-gray-700 text-sm sm:text-base">
              {description}
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
      {/* Images Container */}
      <div className="flex flex-col md:flex-row">
        {/* Before Image */}
        <div className="md:w-1/2 relative md:border-r-4 border-b-4 md:border-b-0 border-black bg-gray-100">
          <img
            src={beforeImage}
            alt={`Original - ${title}`}
            className="w-full h-auto"
          />
          <div className="absolute top-3 left-3 bg-black text-white px-3 py-1 text-xs font-display font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)]">
            {beforeLabel}
          </div>
        </div>

        {/* After Image */}
        <div className="md:w-1/2 relative bg-cream">
          <img
            src={afterImage}
            alt={`Avatar IA - ${title}`}
            className="w-full h-auto"
          />
          <div className="absolute top-3 right-3 bg-vinted text-white px-3 py-1 text-xs font-display font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]">
            {afterLabel}
          </div>
        </div>
      </div>

      {/* Description */}
      {description && (
        <div className="p-4 sm:p-6 border-t-4 border-black bg-cream">
          <p className="font-body text-gray-700 text-sm sm:text-base">
            {description}
          </p>
        </div>
      )}
    </div>
  );
};

export default BeforeAfterComparison;
