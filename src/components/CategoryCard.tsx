import React from 'react';
import { ImageCategory } from '../types';
import { FolderOpen } from 'lucide-react';

interface CategoryCardProps {
  category: ImageCategory;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          <FolderOpen className="w-6 h-6 text-blue-500" />
          <h3 className="text-xl font-semibold text-gray-900">{category.displayName}</h3>
        </div>
        <p className="text-gray-600 mb-4">{category.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-500">{category.count} images</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {category.tags.map(tag => (
              <span key={tag} className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="px-6 py-4 bg-gray-50 border-t">
        <div className="flex justify-between items-center">
          <a href={`/hub/${category.name}`} 
             className="text-blue-600 hover:text-blue-800 font-medium text-sm">
            Browse Gallery →
          </a>
          <a href={`/api/${category.name}`} 
             className="text-gray-600 hover:text-gray-800 font-medium text-sm">
            API Endpoint
          </a>
        </div>
      </div>
    </div>
  );
}
