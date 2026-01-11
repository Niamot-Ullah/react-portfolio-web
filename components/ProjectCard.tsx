
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl glass-card border-none hover:ring-2 hover:ring-indigo-500 transition-all">
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-indigo-400 px-2 py-1 bg-indigo-500/10 rounded">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-6 line-clamp-2">
          {project.description}
        </p>
        <a 
          href={project.link} 
           className="
    inline-flex items-center text-sm font-semibold text-indigo-400
    opacity-0 translate-y-2
    group-hover:opacity-100 group-hover:translate-y-0
    transition-all duration-300 delay-100
    group-hover:translate-x-1
  "
        >
          View Project
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};
