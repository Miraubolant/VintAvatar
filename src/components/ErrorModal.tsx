import React from 'react';
import { X, AlertTriangle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

export const ErrorModal: React.FC<ErrorModalProps> = ({
  isOpen,
  onClose,
  title,
  message
}) => {
  const { t } = useTranslation('common');

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] w-full max-w-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 bg-pink-pastel border-b-4 border-black">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-black" />
            <h3 className="font-display font-bold text-black text-sm sm:text-base">
              {title || t('error.title', 'ERREUR')}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-white border-3 border-black font-display font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          <p className="font-body text-black text-sm sm:text-base leading-relaxed">
            {message || t('error.defaultMessage', 'Une erreur est survenue. Veuillez réessayer plus tard ou contacter le support si le problème persiste.')}
          </p>
        </div>

        {/* Footer */}
        <div className="p-4 bg-cream border-t-4 border-black">
          <button
            onClick={onClose}
            className="w-full px-4 py-3 bg-vinted text-white border-3 border-black font-display font-bold text-sm sm:text-base shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            {t('error.understood', 'COMPRIS')}
          </button>
        </div>
      </div>
    </div>
  );
};
