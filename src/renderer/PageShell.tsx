import React from 'react';
import { PageContextProvider } from './usePageContext';
import { Header } from '../components/Header';
import '../index.css';

export function PageShell({ children, pageContext }: { 
  children: React.ReactNode;
  pageContext: any;
}) {
  return (
    <PageContextProvider pageContext={pageContext}>
      <div className="min-h-screen bg-gray-50">
        <Header />
        {children}
        <footer className="bg-white border-t mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center text-gray-600">
              <p>© 2025 ImageHub. All images are free to use under the Unsplash License.</p>
            </div>
          </div>
        </footer>
      </div>
    </PageContextProvider>
  );
}
