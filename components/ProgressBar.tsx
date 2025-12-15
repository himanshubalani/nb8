'use client';

import React from 'react';

interface ProgressBarProps {
  /**
   * Progress value (0-100)
   */
  value: number;
  /**
   * Height of the base bar in pixels
   * @default 24
   */
  height?: number;
  /**
   * Background color of the progress bar
   * @default 'AppColors.lightGreen' (light green)
   */
  progressColor?: string;
  /**
   * Base bar background color
   * @default '#ffffff'
   */
  baseColor?: string;
  /**
   * Border color
   * @default '#000000'
   */
  borderColor?: string;
  /**
   * Border width in pixels
   * @default 4
   */
  borderWidth?: number;
  /**
   * Show percentage text in pill
   * @default true
   */
  showPercentage?: boolean;
  /**
   * Custom className for container
   */
  className?: string;
  /**
   * Animate transitions
   * @default true
   */
  animated?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  height = 24,
  progressColor = '#86efac',
  baseColor = '#ffffff',
  borderColor = '#000000',
  borderWidth = 4,
  showPercentage = true,
  className = '',
  animated = true,
}) => {
  const clampedValue = Math.min(100, Math.max(0, value));
  const progressHeight = height * 1.3;
  const topOffset = height * 0.15;

  return (
    <div className={`relative w-full ${className}`} style={{ height: `${height}px` }}>
      {/* Base rectangle - white with black borders */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundColor: baseColor,
          border: `${borderWidth}px solid ${borderColor}`,
          borderRadius: '12px',
          zIndex: 1
        }}
      />
      
      {/* Progress bar - envelops from top and bottom, goes above */}
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
        {/* Pill on the right end with percentage */}
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
};
