'use client'

import React from 'react';
import { Badge } from './Badge';

export interface ProjectCardProps {
  projectName: string;
  description: string;
  imagePath: string;
  projectLink: string;
  languages: string[];
  buttonText: string;
  logoPath?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  description,
  imagePath,
  projectLink,
  languages,
  buttonText,
  logoPath
}) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-[18px] border-[3px] border-black shadow-neo flex flex-col overflow-hidden transition-transform hover:-translate-y-1">
      {/* Image Section */}
      <div className="h-40 w-full overflow-hidden border-b-2 border-black bg-gray-100 relative">
        <img 
          src={imagePath} 
          alt={projectName} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Header */}
      <div className="p-3 border-b-2 border-black bg-white flex items-center gap-2">
        {logoPath && (
          <img src={logoPath} alt="logo" className="w-8 h-8 rounded-md border border-black" />
        )}
        <h3 className="font-outfit font-bold text-xl text-black truncate">{projectName}</h3>
      </div>

      {/* Description */}
      <div className="p-4 border-b-2 border-black bg-white flex-grow">
        <p className="font-outfit text-sm text-black text-justify leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      {/* Tech Stack */}
      <div className="p-3 flex flex-wrap gap-2 justify-center items-center bg-gray-50 border-b-2 border-black min-h-[60px]">
        <span className="font-outfit font-bold text-xs">Made using:</span>
        {languages.map((lang, idx) => (
          <Badge key={idx} text={lang} size="sm" />
        ))}
      </div>

      {/* Action */}
      <div className="p-3 bg-white">
        <a 
          href={projectLink} 
          target="_blank" 
          rel="noreferrer"
          className="block w-full"
        >
          <div className="
            w-full py-2 bg-black text-white text-center font-outfit font-bold rounded-xl
            border-2 border-black
            transition-all hover:bg-white hover:text-black
          ">
            {buttonText}
          </div>
        </a>
      </div>
    </div>
  );
};