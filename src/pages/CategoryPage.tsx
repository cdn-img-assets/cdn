import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ImageMetadata } from '../types';
import { loadImagesForCategory } from '../utils/imageLoader';

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const [images, setImages] = useState<ImageMetadata[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadImages() {
      if (category) {
        const categoryImages = await loadImagesForCategory(category);
        setImages(categoryImages);
        setLoading(false);
      }
    }
    loadImages();
  }, [category]);

  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 capitalize">
        {category} Images
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <div key={image.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={image.url}
              alt={`${category} image ${image.id}`}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <div className="flex flex-wrap gap-2">
                {image.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
