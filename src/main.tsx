import { Component, ReactNode, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Global resilience guard against third-party extension or browser reader script errors (e.g. Chrome reading 'excerpt' on null article)
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    if (
      event.message &&
      (event.message.includes('excerpt') ||
        event.message.includes('reading \'excerpt\'') ||
        event.message.includes('Cannot read properties of null'))
    ) {
      console.warn('Suppressed third-party script/extension exception:', event.message);
      event.preventDefault();
      event.stopPropagation();
      return true;
    }
  }, true);

  window.addEventListener('unhandledrejection', (event) => {
    if (
      event.reason &&
      typeof event.reason.message === 'string' &&
      event.reason.message.includes('excerpt')
    ) {
      console.warn('Suppressed unhandled promise rejection regarding excerpt:', event.reason);
      event.preventDefault();
    }
  });
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#030108] text-white flex flex-col items-center justify-center p-6 text-center">
          <h1 className="text-2xl font-bold mb-4 text-[#C6FF00]">Semana de Comunicadores UCV 2026</h1>
          <p className="text-slate-300 max-w-md mb-6">
            Ocurrió un problema temporal al cargar la vista. Por favor recarga la página.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-[#7135F5] hover:bg-[#864bfa] text-white font-bold rounded-xl border border-[#C6FF00]"
          >
            Recargar Página
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
