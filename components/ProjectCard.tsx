'use client';

import React from 'react';
import { cn } from '@/app/utils/cn';
import { Badge } from './Badge';

export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  projectName: string;
  description: string;
  imagePath: string;
  projectLink: string;
  languages: string[];
  buttonText?: string;
  logoPath?: string;
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ className, projectName, description, imagePath, projectLink, languages, buttonText = "View Source", logoPath, ...props }, ref) => {
    return (
      <div 
        ref={ref}
        className={cn(
          "w-full max-w-sm bg-white rounded-[18px] border-[3px] border-black shadow-neo-sm flex flex-col overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-neo mx-auto",
          className
        )}
        {...props}
      >
        <div className="h-32 sm:h-40 w-full overflow-hidden border-b-2 border-black bg-gray-100 relative">
          <img src={imagePath} alt={projectName} className="w-full h-full object-cover"/>
        </div>

        <div className="p-2 md:p-3 border-b-2 border-black bg-white flex items-center gap-2">
          {logoPath && (
            <img src={logoPath} alt="logo" className="w-6 h-6 md:w-8 md:h-8 rounded-md border border-black" />
          )}
          <h3 className="font-outfit font-bold text-lg md:text-xl text-black truncate">{projectName}</h3>
        </div>

        <div className="p-3 md:p-4 border-b-2 border-black bg-white flex-grow">
          <p className="font-outfit text-xs md:text-sm text-black text-justify leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        <div className="p-2 md:p-3 flex flex-wrap gap-1.5 md:gap-2 justify-center items-center bg-gray-50 border-b-2 border-black min-h-[60px]">
          <span className="font-outfit font-bold text-xs w-full md:w-auto text-center">Made using:</span>
          {languages.map((lang, idx) => (
            <Badge key={idx} text={lang} size="sm" />
          ))}
        </div>

        <div className="p-2 md:p-3 bg-white">
          <a href={projectLink} target="_blank" rel="noreferrer" className="block w-full">
            <div className="w-full py-2 bg-black text-white text-center font-outfit font-bold text-sm md:text-base rounded-xl border-2 border-black transition-all hover:bg-white hover:text-black">
              {buttonText}
            </div>
          </a>
        </div>
      </div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

export { ProjectCard };