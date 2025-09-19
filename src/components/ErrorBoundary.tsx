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
        <div className="min-h-screen bg-white flex items-center justify-center py-20">
          <div className="max-w-2xl mx-auto px-4 text-center">
            
            {/* Error Icon */}
            <div className="mb-8">
              <div className="w-24 h-24 bg-red-300 border-4 border-slate-900 rounded-full flex items-center justify-center mx-auto shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]">
                <AlertTriangle className="w-12 h-12 text-slate-900" />
              </div>
            </div>

            {/* Error Message */}
            <div className="mb-12">
              <h1 className="text-4xl sm:text-6xl font-black text-slate-900 mb-6">
                OUPS !
              </h1>
              <p className="text-xl text-slate-700 mb-6">
                Une erreur inattendue s'est produite. Nos développeurs sont déjà au courant !
              </p>
              
              {/* Technical Details */}
              {this.state.error && (
                <div className="bg-red-50 border-4 border-slate-900 p-6 text-left shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] mb-8">
                  <h3 className="font-black text-slate-900 mb-2">Détails techniques :</h3>
                  <code className="text-sm text-red-800 break-all">
                    {this.state.error.message}
                  </code>
                </div>
              )}
            </div>

            {/* Action Button */}
            <button
              onClick={this.handleReload}
              className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-black border-4 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] text-xl mx-auto"
            >
              <RefreshCw className="w-6 h-6" />
              RECHARGER LA PAGE
            </button>

            <p className="text-sm text-slate-600 font-bold mt-4">
              Si le problème persiste, contactez notre support
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}