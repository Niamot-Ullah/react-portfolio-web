
import React from 'react';
import { Education } from '../types';

interface EducationItemProps {
  edu: Education;
}

export const EducationItem: React.FC<EducationItemProps> = ({ edu }) => {
  return (
    <div className="relative  pl-8 pb-12 border-l border-gray-800 last:pb-0">
      <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-indigo-500 ring-4 ring-indigo-500/20" />
      <div className="glass-card p-6 rounded-2xl hover:shadow-md hover:translate-y-0
    transition-all duration-300 delay-100
    hover:translate-x-1 cursor-pointer">
        <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest block mb-1">
          {edu.duration}
        </span>
        <h3 className="text-xl text-black font-bold dark:text-white mb-1">{edu.degree}</h3>
        <p className="text-indigo-500 font-medium mb-4">{edu.institution}</p>
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
          {edu.description}
        </p>
      </div>
    </div>
  );
};
