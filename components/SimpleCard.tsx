'use client';

import React from 'react';
import { cn } from '@/app/utils/cn';

export interface SimpleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  company: string;
  role: string;
  duration: string;
  tech: string;
  color: string;
  link?: string;
}

const SimpleCard = React.forwardRef<HTMLDivElement, SimpleCardProps>(
  ({ className, company, role, duration, tech, color, link, ...props }, ref) => {
    
    const content = (
      <div 
        className={cn(
          "rounded-[18px] border-[3px] border-black p-3 md:p-4 transition-transform hover:-translate-y-1 hover:shadow-neo",
          className
        )}
        style={{ backgroundColor: color }}
      >
        <h4 className="font-outfit font-bold text-base md:text-lg">{role}</h4>
        <h5 className="font-outfit font-semibold text-sm md:text-base">{company}</h5>
        <p className="font-outfit text-xs md:text-sm opacity-80 mt-1">{duration}</p>
        <div className="mt-2 pt-2 border-t border-black/20">
          <p className="font-outfit text-xs md:text-sm font-semibold">{tech}</p>
        </div>
      </div>
    );

    if (link) {
      return (
        <a href={link} target="_blank" rel="noreferrer" className="block w-full no-underline text-black mb-3 md:mb-4" ref={ref as any} {...props}>
          {content}
        </a>
      );
    }

    return <div className="mb-3 md:mb-4" ref={ref} {...props}>{content}</div>;
  }
);

SimpleCard.displayName = "SimpleCard";

export { SimpleCard };