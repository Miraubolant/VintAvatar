import React from 'react';
import { X, AlertTriangle } from 'lucide-react';

interface InvalidFileModalProps {
  isOpen: boolean;
  onClose: () => void;
  fileName?: string;
}

export const InvalidFileModal: React.FC<InvalidFileModalProps> = ({
  isOpen,
  onClose,
  fileName
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black bg-opacity-75"
      onClick={onClose}
    >
      <div
        className="relative bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 bg-pink-pastel border-b-4 border-black">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-black" />
            <h3 className="font-display font-bold text-black">FICHIER INVALIDE</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-white border-3 border-black font-display font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="bg-cream border-3 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-body font-semibold text-black mb-2">
              Le fichier que vous avez sélectionné n'est pas une image valide.
            </p>
            {fileName && (
              <p className="font-body text-sm text-gray-700">
                Fichier: <span className="font-bold">{fileName}</span>
              </p>
            )}
          </div>

          <div className="bg-mint border-3 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-display font-bold text-sm text-black mb-2">
              FORMATS ACCEPTÉS :
            </p>
            <ul className="font-body text-sm text-black space-y-1">
              <li>• JPG / JPEG</li>
              <li>• PNG</li>
              <li>• WEBP</li>
              <li>• GIF</li>
            </ul>
          </div>

          <p className="font-body text-xs text-gray-600 text-center">
            Veuillez sélectionner une image au format valide pour continuer.
          </p>
        </div>

        {/* Footer */}
        <div className="p-4 bg-cream border-t-4 border-black">
          <button
            onClick={onClose}
            className="w-full px-4 py-3 bg-vinted text-white border-3 border-black font-display font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            J'AI COMPRIS
          </button>
        </div>
      </div>
    </div>
  );
};
