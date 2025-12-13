'use client'

import React from 'react';
import { LanguageColors } from '../constants';

interface BadgeProps {
  text: string;
  size?: 'sm' | 'md' | 'lg';
  darkMode?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({ text, size = 'md', darkMode = false }) => {
  const bgColor = LanguageColors[text] || '#E0E0E0';
  const textColor = darkMode ? bgColor : '#000000';
  const finalBg = darkMode ? 'transparent' : bgColor;
  const borderColor = darkMode ? bgColor : '#000000';

  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2'
  };

  return (
    <span 
      className={`
        ${sizeClasses[size]}
        font-outfit font-bold rounded-xl border-2
        inline-block whitespace-nowrap
      `}
      style={{ 
        backgroundColor: finalBg,
        color: textColor,
        borderColor: borderColor
      }}
    >
      {text}
    </span>
  );
};