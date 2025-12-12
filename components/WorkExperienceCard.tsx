'use client'

import React from 'react';

export interface WorkExperienceCardProps {
  company: string;
  role: string;
  duration: string;
  tech: string;
  color: string;
  link?: string;
  children?: React.ReactNode;
}

export const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({ company, role, duration, tech, color, link }) => {
  const CardContent = () => (
    <div 
      className="rounded-[18px] border-[3px] border-black p-4 transition-transform hover:-translate-y-1 hover:shadow-neo"
      style={{ backgroundColor: color }}
    >
      <h4 className="font-outfit font-bold text-lg">{role}</h4>
      <h5 className="font-outfit font-semibold text-md">{company}</h5>
      <p className="font-outfit text-sm opacity-80 mt-1">{duration}</p>
      <div className="mt-2 pt-2 border-t border-black/20">
        <p className="font-outfit text-xs font-semibold">{tech}</p>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noreferrer" className="block w-full no-underline text-black mb-4">
        <CardContent />
      </a>
    );
  }

  return <div className="mb-4"><CardContent /></div>;
};