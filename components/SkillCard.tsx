import React, { useEffect, useState, useRef } from 'react';
import { Skill } from '../types';

interface SkillCardProps {
  skill: Skill;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const [fillWidth, setFillWidth] = useState(0); // start at 0
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // animate skill bar
            setFillWidth(skill.level);

            // optionally, reset when out of view to allow re-animation
          } else {
            setFillWidth(0);
          }
        });
      },
      { threshold: 0.5 } // trigger when 50% of card is visible
    );

    observer.observe(card);

    return () => {
      observer.disconnect();
    };
  }, [skill.level]);

  return (
    <div
      ref={cardRef}
      className="p-6 glass-card rounded-2xl hover:border-indigo-500/50 transition-all group"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-800 dark:text-gray-100 group-hover:text-indigo-500 transition-colors">
          {skill.name}
        </h3>
        <span className="text-xs font-bold text-indigo-500 dark:text-indigo-400 px-2 py-1 bg-indigo-500/10 rounded uppercase">
          {skill.category}
        </span>
      </div>
      <div className="h-2 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-indigo-500 transition-all duration-1000 ease-out"
          style={{ width: `${fillWidth}%` }}
        />
      </div>
      <div className="mt-2 text-right">
        <span className="text-xs text-gray-500">{fillWidth}% Proficiency</span>
      </div>
    </div>
  );
};







// import React, { useEffect, useState } from 'react';
// import { Skill } from '../types';

// interface SkillCardProps {
//   skill: Skill;
// }

// export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
//   const [fillWidth, setFillWidth] = useState(0); // start at 0

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setFillWidth(skill.level); // animate to skill level
//     }, 50); // slight delay for smooth transition

//     return () => clearTimeout(timeout);
//   }, [skill.level]);

//   return (
//     <div className="p-6 glass-card rounded-2xl hover:border-indigo-500/50 transition-all group">
//       <div className="flex justify-between items-center mb-4">
//         <h3 className="font-semibold text-gray-800 dark:text-gray-100 group-hover:text-indigo-500 transition-colors">{skill.name}</h3>
//         <span className="text-xs font-bold text-indigo-500 dark:text-indigo-400 px-2 py-1 bg-indigo-500/10 rounded uppercase">{skill.category}</span>
//       </div>
//       <div className="h-2 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
//         <div 
//           className="h-full bg-indigo-500 transition-all duration-1000 ease-out"
//           style={{ width: `${fillWidth}%` }} // use state for animated width
//         />
//       </div>
//       <div className="mt-2 text-right">
//         <span className="text-xs text-gray-500">{fillWidth}% Proficiency</span>
//       </div>
//     </div>
//   );
// };



