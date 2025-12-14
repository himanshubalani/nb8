'use client';

import React from 'react';

export interface PolaroidProps {
  src: string;
  alt?: string;
  maxHeight?: string;
  maxWidth?: string;
  sticker?: string;
  stickerTwo?: string;
  eager?: boolean;
}

export const Polaroid: React.FC<PolaroidProps> = ({
  src,
  alt = '',
  maxHeight = '65vh',
  maxWidth = '55vw',
  eager = true,
}) => {
  return (
    <div className="bg-white p-1 pt-2 pb-8 md:p-2 md:pt-3 md:pb-12 md:shadow-md border-[2px] md:border-[3px] border-black rounded-md shrink-0 relative">
      {/* Image frame */}
      <div className="relative overflow-hidden border border-black bg-gray-100 flex items-center justify-center">
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="sync"
          className="object-contain"
          style={{
            maxHeight,
            maxWidth,
          }}
        />
      </div>
    </div>
  );
};
