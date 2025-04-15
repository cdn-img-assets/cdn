export interface ImageCategory {
  name: string;
  displayName: string;
  description: string;
  count: number;
  tags: string[];
}

export interface ImageMetadata {
  id: string;
  url: string;
  category: string;
  tags: string[];
  width: number;
  height: number;
}

export interface APIResponse {
  success: boolean;
  data: any;
  error?: string;
}
