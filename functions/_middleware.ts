import { ImageResponse } from '@cloudflare/workers-types';

export async function onRequest({ request, next }: { request: Request; next: () => Promise<Response> }) {
  const url = new URL(request.url);
  
  // Handle image manipulation requests
  if (url.pathname.startsWith('/api/image/')) {
    const params = new URLSearchParams(url.search);
    const imageUrl = url.pathname.replace('/api/image/', '');
    
    // Apply image transformations
    const width = parseInt(params.get('width') || '0');
    const height = parseInt(params.get('height') || '0');
    const blur = parseInt(params.get('blur') || '0');
    
    try {
      const response = await fetch(imageUrl);
      const imageData = await response.arrayBuffer();
      
      // In production, you would use sharp or another image processing library
      // For now, we just return the original image
      return new Response(imageData, {
        headers: {
          'Content-Type': 'image/jpeg',
          'Cache-Control': 'public, max-age=31536000',
        },
      });
    } catch (error) {
      return new Response('Image processing failed', { status: 500 });
    }
  }
  
  return next();
}
