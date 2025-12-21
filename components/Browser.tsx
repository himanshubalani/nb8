'use client';

import React from 'react';
import { cn } from '@/app/utils/cn';

interface BrowserProps extends React.HTMLAttributes<HTMLDivElement> {
  headerText: string;
  headerColor: string;
  hover?: boolean;
}

const BrowserCircle = ({ hover }: { hover?: boolean }) => {
  return (
    <div 
      className={cn(
        "w-5 h-5 ml-1 rounded-full border-2 border-black bg-white/75",
        hover && "transition-transform duration-200 ease-in hover:-translate-y-3"
      )} 
    />
  );
};

const Browser = React.forwardRef<HTMLDivElement, BrowserProps>(
  ({ className, headerText, headerColor, hover, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-white rounded-[20px] border-2 border-black shadow-neo overflow-hidden flex flex-col",
          className
        )}
        {...props}
      >
        {/* Header */}
        <div
          className="w-full p-2 md:p-3 border-b-2 border-black flex items-center justify-between"
          style={{ backgroundColor: headerColor }}
        >
          <span className="font-outfit font-bold text-black text-base md:text-lg lg:text-xl truncate">
            {headerText}
          </span>
          <div className="flex">
            <BrowserCircle hover={hover} />
            <BrowserCircle hover={hover} />
            <BrowserCircle hover={hover} />
          </div>
        </div>

        {/* Content */}
        <div className="p-3 md:p-4 lg:p-5 bg-white h-full [&_img]:border-2 [&_img]:border-black [&_img]:rounded-lg [&_img]:mt-2 [&_img]:max-w-full [&_img]:h-auto">
          {children}
        </div>
      </div>
    );
  }
);

Browser.displayName = "Browser";

export { Browser };