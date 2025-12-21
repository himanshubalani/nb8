'use client';

import React from 'react';
import { cn } from '@/app/utils/cn';

export interface PolaroidProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt?: string;
  maxHeight?: string;
  maxWidth?: string;
}

const Polaroid = React.forwardRef<HTMLDivElement, PolaroidProps>(
  ({ className, src, alt = '', maxHeight = '65vh', maxWidth, style, ...props }, ref) => {
    return (
      <div 
        ref={ref}
        className={cn(
          "bg-white p-1 pt-2 pb-6 sm:pb-8 md:p-2 md:pt-3 md:pb-12 md:shadow-md border-2 md:border-[3px] border-black rounded-md shrink-0 relative w-auto max-w-full",
          className
        )}
        {...props}
      >
        <div className="relative overflow-hidden border border-black bg-gray-100 flex items-center justify-center">
          <img
            src={src}
            alt={alt}
            className="object-contain w-full h-auto"
            style={{ maxHeight, maxWidth: maxWidth ?? '100%' }}
          />
        </div>
      </div>
    );
  }
);

Polaroid.displayName = "Polaroid";

export { Polaroid };