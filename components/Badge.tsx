'use client';

import React from 'react';
import { cn } from '@/app/utils/cn';
import { LanguageColors } from '@/constants';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
  size?: 'sm' | 'md' | 'lg';
  darkMode?: boolean;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, text, size = 'md', darkMode = false, style, ...props }, ref) => {
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
        ref={ref}
        className={cn(
          "font-outfit font-bold rounded-xl border-2 inline-block whitespace-nowrap",
          sizeClasses[size],
          className
        )}
        style={{ 
          backgroundColor: finalBg,
          color: textColor,
          borderColor: borderColor,
          ...style
        }}
        {...props}
      >
        {text}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export { Badge };