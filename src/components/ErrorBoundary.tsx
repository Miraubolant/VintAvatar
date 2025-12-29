import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-cream flex items-center justify-center py-12 px-4">
          <div className="max-w-2xl w-full text-center">

            {/* Error Icon */}
            <div className="relative inline-block mb-8">
              <div className="bg-white border-4 border-black px-8 py-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
                <AlertTriangle className="w-16 h-16 sm:w-20 sm:h-20 text-vinted" />
              </div>
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-pink-pastel border-3 border-black transform rotate-12 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"></div>
              <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-mint border-3 border-black transform -rotate-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
            </div>

            {/* Error Message */}
            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-1 mb-8">
              <h1 className="font-display font-bold text-3xl sm:text-4xl text-black mb-4">
                Oups, une erreur !
              </h1>
              <p className="font-body text-gray-700 text-base sm:text-lg mb-4">
                Quelque chose s'est mal passé. Pas de panique, essayez de recharger la page.
              </p>
              <p className="font-body text-sm text-gray-600">
                Si le problème continue, contactez-nous.
              </p>
            </div>

            {/* Action Button */}
            <button
              onClick={this.handleReload}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-vinted text-white border-4 border-black font-display font-bold text-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <RefreshCw className="w-6 h-6" />
              Recharger la page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}