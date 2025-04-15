import React from 'react';
import { CategoryCard } from '../components/CategoryCard';
import { categories } from '../data/categories';

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Free Image API for Developers
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Access thousands of high-quality images through our simple and powerful API. 
          Perfect for testing, placeholder content, or building the next great app.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map(category => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Quick Start
        </h3>
        <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
          <code className="block text-left bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
            # Get a random nature image{'\n'}
            GET https://api.imagehub.dev/nature{'\n\n'}
            # Get a random cat image with text{'\n'}
            GET https://api.imagehub.dev/animals/cats/says/Hello%20World
          </code>
        </div>
      </div>
    </main>
  );
}
