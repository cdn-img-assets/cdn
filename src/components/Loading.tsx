import React from 'react';
import { Loader2 } from 'lucide-react';

export function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
    </div>
  );
}
