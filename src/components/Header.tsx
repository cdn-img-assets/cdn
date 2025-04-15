import React from 'react';
import { Github } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-bold text-gray-900">ImageHub</h1>
            <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">Beta</span>
          </div>
          <nav className="flex items-center space-x-4">
            <a href="/docs" className="text-gray-600 hover:text-gray-900">API Docs</a>
            <a href="https://github.com/yourusername/imagehub" 
               className="text-gray-600 hover:text-gray-900 flex items-center space-x-1">
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
