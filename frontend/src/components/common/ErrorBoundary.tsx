import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 text-center">
          <div className="max-w-xl rounded-2xl bg-white p-8 shadow-sm sm:p-12">
            <p className="mb-3 text-sm font-bold tracking-widest text-blue-600">IDEOGRAPHERS</p>
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">Something went wrong</h1>
            <p className="mb-8 text-gray-600">We couldn’t load this page. Please return home and try again.</p>
            <a href="/" className="inline-flex h-11 items-center justify-center rounded-lg bg-slate-900 px-6 font-medium text-white transition-colors hover:bg-slate-800">Return Home</a>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}
