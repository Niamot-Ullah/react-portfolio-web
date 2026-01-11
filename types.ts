
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'DevOps' | 'Tools' |'Database';
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

export enum Section {
  Home = 'home',
  About = 'about',
  Skills = 'skills',
  Projects = 'projects',
  Education = 'education',
  Contact = 'contact'
}


