'use client'

import React from 'react';

interface BoxProps {
  headerText: string;
  headerColor: string;
  children: React.ReactNode;
  className?: string;
}

const BoxCircle = () => (
  <div className="w-6 h-6 ml-2 rounded-full border-2 border-black bg-white/75" />
);

export const Box: React.FC<BoxProps> = ({ 
  headerText, 
  headerColor, 
  children, 
  className = '' 
}) => {
  return (
    <div
      className={`bg-white rounded-[20px] border-2 border-black shadow-neo overflow-hidden flex flex-col ${className}`}
    >
      {/* Header */}
      <div
        className="w-full p-3 border-b-2 border-black flex items-center justify-between"
        style={{ backgroundColor: headerColor }}
      >
        <span className="font-outfit font-bold text-black text-lg md:text-xl truncate">
          {headerText}
        </span>
        <div className="flex">
          <BoxCircle />
          <BoxCircle />
          <BoxCircle />
        </div>
      </div>

      {/* Content */}
      <div
        className="
          p-4 bg-white h-full
          [&_img]:border-2
          [&_img]:border-black
          [&_img]:rounded-lg
          [&_img]:mt-2
          [&_img]:max-w-full
        "
      >
        {children}
      </div>
    </div>
  );
};
