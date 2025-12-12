'use client'

import React from 'react';
import { AppColors } from '../constants';

interface ButtonProps {
  label: string;
  icon?: React.ReactNode;
  color?: string;
  onClick?: () => void;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  label, 
  icon, 
  color = AppColors.deepSaffron, 
  onClick,
  fullWidth = false
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${fullWidth ? 'w-full' : 'w-auto'}
        flex items-center justify-between
        px-4 py-3
        rounded-[18px] border-[3px] border-black
        font-quicksand font-bold text-black
        shadow-neo transition-transform duration-200
        hover:-translate-y-0.5 hover:-translate-x-0.5
        active:translate-y-[2px] active:translate-x-[2px] active:shadow-none
      `}
      style={{ backgroundColor: color }}
    >
      <div className="flex items-center gap-3">
        {icon && <span className="w-5 h-5 flex items-center justify-center">{icon}</span>}
        <span className="text-sm md:text-base">{label}</span>
      </div>
      <div className="w-6 h-6 rounded-full border-2 border-black bg-white opacity-50 ml-4" />
    </button>
  );
};