'use client';

import React from 'react';
import { cn } from '@/app/utils/cn';
import { AppColors } from '@/constants';
import { isDarkColor } from '@/app/utils/colors';

interface AnchorButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: React.ReactNode;
  color?: string;
  fullWidth?: boolean;
  url?: string;
}

const AnchorButton = React.forwardRef<HTMLButtonElement, AnchorButtonProps>(
  ({ className, label, icon, color = AppColors.deepSaffron, onClick, fullWidth = false, url, ...props }, ref) => {
    const isDark = isDarkColor(color);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (url) {
        try {  
          const urlObj = new URL(url, window.location.origin);  
          if (!['http:', 'https:', 'mailto:','tel:'].includes(urlObj.protocol)) {  
            console.error('Invalid URL protocol:', urlObj.protocol);  
            return;  
          }  
        } catch (err) {  
          console.error('Invalid URL:', url, err);  
          return;  
        }  
        window.open(url, '_self'); 
        return;
      }
      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        onClick={handleClick}
        className={cn(
          // Base
          "flex items-center justify-between px-3 py-2 md:px-4 md:py-3 rounded-[18px] border-[3px] border-black font-quicksand font-bold shadow-neo transition-transform duration-200",
          // Layout
          fullWidth ? 'w-full' : 'w-auto',
          // Theme
          isDark ? 'text-white' : 'text-black',
          // Interaction
          "hover:-translate-y-0.5 hover:-translate-x-0.5 active:translate-y-[2px] active:translate-x-[2px] active:shadow-none",
          className
        )}
        style={{ backgroundColor: color }}
        {...props}
      >
        <div className="flex items-center gap-2 md:gap-3">
          {icon && (
            <span className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
              {icon}
            </span>
          )}
          <span className="text-sm md:text-base">{label}</span>
        </div>

        <div
          className={cn(
            "w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-black ml-2 md:ml-4",
            isDark ? 'bg-white/70' : 'bg-white opacity-50'
          )}
        />
      </button>
    );
  }
);

AnchorButton.displayName = "AnchorButton";

export { AnchorButton };