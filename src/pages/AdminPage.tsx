import React, { useState, useCallback } from 'react';
import { Upload, Trash2, Settings, Image as ImageIcon } from 'lucide-react';
import { ImageMetadata } from '../types';

export default function AdminPage() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [images, setImages] = useState<ImageMetadata[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || !selectedCategory) return;

    setIsUploading(true);
    try {
      // Simulate upload - in production this would call your API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newImages = Array.from(files).map((file, index) => ({
        id: `${selectedCategory}-${Date.now()}-${index}`,
        url: URL.createObjectURL(file),
        category: selectedCategory,
        tags: [selectedCategory],
        width: 800,
        height: 600
      }));

      setImages(prev => [...prev, ...newImages]);
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setIsUploading(false);
    }
  }, [selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Settings className="w-4 h-4 mr-2" />
          Settings
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="col-span-1 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <nav className="space-y-2">
            {['nature', 'animals', 'architecture', 'food', 'travel', 'abstract'].map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`w-full text-left px-4 py-2 rounded-lg ${
                  selectedCategory === category
                    ? 'bg-blue-100 text-blue-700'
                    : 'hover:bg-gray-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="col-span-1 md:col-span-3 bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">
              {selectedCategory
                ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Images`
                : 'Select a Category'}
            </h2>
            <label className={`
              flex items-center px-4 py-2 rounded-lg cursor-pointer
              ${selectedCategory ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-300 cursor-not-allowed'}
            `}>
              <Upload className="w-4 h-4 mr-2" />
              Upload Images
              <input
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={handleFileUpload}
                disabled={!selectedCategory || isUploading}
              />
            </label>
          </div>

          {selectedCategory ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map(image => (
                <div key={image.id} className="relative group">
                  <img
                    src={image.url}
                    alt={`${image.category} image`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                    <button className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
              {images.length === 0 && (
                <div className="col-span-full flex flex-col items-center justify-center py-12 text-gray-500">
                  <ImageIcon className="w-12 h-12 mb-4" />
                  <p>No images in this category yet</p>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-gray-500">
              <ImageIcon className="w-12 h-12 mb-4" />
              <p>Select a category to manage images</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
