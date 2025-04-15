import { ImageMetadata } from '../types';

export async function loadImagesForCategory(category: string): Promise<ImageMetadata[]> {
  try {
    // Use fetch to load the JSON file from the public directory
    const response = await fetch(`/${category}/metadata.json`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data as ImageMetadata[];
  } catch (error) {
    console.error(`Failed to load images for category: ${category}`, error);
    return [];
  }
}
