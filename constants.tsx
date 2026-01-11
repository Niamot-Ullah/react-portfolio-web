
import { Project, Skill, Education } from './types';
import img1 from './assets/p1.png'
import img2 from './assets/p2.png'
import img3 from './assets/p3.png'


export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Auto Wheels",
    description: "A responsive web application designed for Renting Cars where user can post his car for rent as well as book cars from here.",
    tags: ["React", "JavaScript", "Express", "MongoDB"],
    image: img2,
    link: "https://ph-assaignment-11-renting-cars.web.app/"
  },
  {
    id: 2,
    title: "Job Portal",
    description: "A modern, responsive web application designed for those who are looking for job or those those need employee.",
    tags: ["Tailwind", "Firebase", "Node.js", "MongoDB"],
    image: img1,
    link: "https://curious-biscuit-e53fe9.netlify.app/"
  },
  {
    id: 3,
    title: "Quantum Ledger",
    description: "High-performance  explorer with real-time transaction visualization.",
    tags: [],
    image: "https://picsum.photos/seed/p3/600/400",
    link: "#"
  }
];

export const SKILLS: Skill[] = [
  { name: "React.js", level: 90, category: 'Frontend' },
  { name: "Next.js", level: 80, category: 'Frontend' },
  { name: "TypeScript", level: 85, category: 'Frontend' },
  { name: "JavaScript", level: 95, category: 'Frontend' },
  { name: "Tailwind CSS", level: 98, category: 'Frontend' },
  { name: "Node.js", level: 88, category: 'Backend' },
  { name: "Express", level: 85, category: 'Backend' },
  { name: "PostgreSQL", level: 82, category: 'Database' },
  { name: "MongoDB", level: 83, category: 'Database' },
  { name: "Firebase", level: 85, category: 'Tools' },
  { name: "Better Auth", level: 90, category: 'Tools' },
  { name: "Docker", level: 70, category: 'DevOps' }
];

export const EDUCATION: Education[] = [
  {
    degree: "HSC(Higher Secondary Certificate",
    institution: "Amrita Lal Dey College, Barishal",
    duration: "2019 - 2021",
    description: "Completed my H.S.C(Higher Secondary Certificate) in Humanities. Learned Basic 'ICT, English, Economics, History'. "
  },
  {
    degree: "B.S.S in Economics",
    institution: "University of Barishal",
    duration: "2023 - present",
    description: "Pursuing B.S.S(Bachelor of Social Science) in Economics. Learning Statistics, Calculus, Econometrics and Advance Economics. "
  }
];
