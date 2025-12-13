'use client'

import React from 'react';
import { AppColors } from '../constants';
import { isDarkColor } from '../app/utils/colors';

interface ButtonProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  color?: string;
  className?: string;
  onClick?: () => void;
  shadows?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  width = 'w-auto', 
  height = 'h-auto', 
  color = AppColors.white,
  className = '',
  onClick
}) => {
  const isDark = isDarkColor(color);
  return (
    <div 
      onClick={onClick}
      className={`
        ${width} ${height} ${className}
        rounded-[18px] border-[3px] border-black
        shadow-none ${isDark ? 'text-white' : 'text-black'} transition-all duration-200
        hover:-translate-y-1 hover:shadow-neo-lg
        active:translate-y-0 active:translate-x-0 active:shadow-neo-sm
        flex items-center justify-center
        cursor-pointer
      `}
      style={{ backgroundColor: color }}
    >
      <span className="font-outfit font-bold text-lg md:text-xl p-4">
        {children}
      </span>
    </div>
  );
};