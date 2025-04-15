import { ImageMetadata } from '../types';

export interface ImageFilters {
  brightness?: number;
  contrast?: number;
  saturation?: number;
  blur?: number;
  grayscale?: boolean;
}

export async function applyImageFilters(imageUrl: string, filters: ImageFilters): Promise<string> {
  // In a real implementation, this would use sharp or another image processing library
  // For now, we'll return the original URL
  console.log('Applying filters:', filters);
  return imageUrl;
}

export async function getRandomImage(category: string, tags?: string[]): Promise<ImageMetadata | null> {
  try {
    const images = await import(`../../public/${category}/metadata.json`);
    let filteredImages = images.default;
    
    if (tags && tags.length > 0) {
      filteredImages = filteredImages.filter((img: ImageMetadata) =>
        tags.some(tag => img.tags.includes(tag))
      );
    }

    if (filteredImages.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * filteredImages.length);
    return filteredImages[randomIndex];
  } catch (error) {
    console.error(`Failed to get random image for category: ${category}`, error);
    return null;
  }
}
