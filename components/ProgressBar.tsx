'use client';

import React from 'react';
import { cn } from '@/app/utils/cn';

interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  height?: number;
  progressColor?: string;
  baseColor?: string;
  borderColor?: string;
  borderWidth?: number;
  showPercentage?: boolean;
  animated?: boolean;
}

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ 
    className, 
    value, 
    height = 24, 
    progressColor = '#86efac', 
    baseColor = '#ffffff', 
    borderColor = '#000000', 
    borderWidth = 4, 
    showPercentage = true, 
    animated = true, 
    ...props 
  }, ref) => {
    const clampedValue = Math.min(100, Math.max(0, value));
    const progressHeight = height * 1.3;
    const topOffset = height * 0.15;

    return (
      <div 
        ref={ref}
        className={cn("relative w-full", className)} 
        style={{ height: `${height}px` }}
        {...props}
      >
        {/* Base */}
        <div 
          className="absolute inset-0"
          style={{ 
            backgroundColor: baseColor,
            border: `${borderWidth}px solid ${borderColor}`,
            borderRadius: '12px',
            zIndex: 1
          }}
        />
        
        {/* Bar */}
        <div 
          className="absolute"
          style={{ 
            width: `${clampedValue}%`,
            height: `${progressHeight}px`,
            top: `-${topOffset}px`,
            left: 0,
            backgroundColor: progressColor,
            border: `${borderWidth}px solid ${borderColor}`,
            borderRadius: '16px',
            zIndex: 2,
            transition: animated ? 'width 0.3s ease' : 'none'
          }}
        >
          {showPercentage && (
            <div 
              className="absolute flex items-center justify-center font-bold text-xs md:text-sm"
              style={{
                right: '-6px',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: baseColor,
                border: `${borderWidth}px solid ${borderColor}`,
                borderRadius: '18px',
                minHeight: '32px',
                padding: '2px 10px',
                minWidth: '50px',
                zIndex: 3
              }}
            >
              {Math.round(clampedValue)}%
            </div>
          )}
        </div>
      </div>
    );
  }
);

ProgressBar.displayName = "ProgressBar";

export { ProgressBar };