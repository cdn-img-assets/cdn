import { ImageCategory } from '../types';

export const categories: ImageCategory[] = [
  {
    name: 'nature',
    displayName: 'Nature',
    description: 'Beautiful landscapes and natural wonders',
    count: 10,
    tags: ['mountains', 'ocean', 'forest', 'sunset']
  },
  {
    name: 'animals',
    displayName: 'Animals',
    description: 'Adorable and majestic creatures',
    count: 10,
    tags: ['cats', 'dogs', 'wildlife', 'birds']
  },
  {
    name: 'architecture',
    displayName: 'Architecture',
    description: 'Stunning buildings and structures',
    count: 10,
    tags: ['modern', 'historic', 'urban', 'interior']
  },
  {
    name: 'food',
    displayName: 'Food',
    description: 'Delicious culinary photography',
    count: 10,
    tags: ['cuisine', 'desserts', 'drinks', 'restaurants']
  },
  {
    name: 'travel',
    displayName: 'Travel',
    description: 'Explore destinations worldwide',
    count: 10,
    tags: ['cities', 'landmarks', 'culture', 'adventure']
  },
  {
    name: 'abstract',
    displayName: 'Abstract',
    description: 'Creative and artistic compositions',
    count: 10,
    tags: ['patterns', 'textures', 'minimal', 'geometric']
  }
];
