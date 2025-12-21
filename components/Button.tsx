'use client';

import React from 'react';
import { cn } from '@/app/utils/cn';
import { AppColors } from '@/constants';
import { isDarkColor } from '@/app/utils/colors';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  height?: string;
  color?: string;
  shadows?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, width = 'w-auto', height = 'h-auto', color = AppColors.white, onClick, ...props }, ref) => {
    const isDark = isDarkColor(color);
    
    return (
      <button
        ref={ref}
        type="button"
        onClick={onClick}
        className={cn(
          // Base
          "flex items-center justify-center rounded-[18px] border-[3px] border-black transition-all duration-200 cursor-pointer",
          // Layout
          width,
          height,
          // Color & Text
          isDark ? 'text-white' : 'text-black',
          // Interaction & Shadows
          "shadow-none hover:-translate-y-1 hover:shadow-neo-lg",
          "active:translate-y-0 active:translate-x-0 active:shadow-neo-sm",
          className
        )}
        style={{ backgroundColor: color }}
        {...props}
      >
        <span className="font-outfit font-bold text-base md:text-lg lg:text-xl p-3 md:p-4">
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };