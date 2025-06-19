import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { 
  SiReact, 
  SiNodedotjs, 
  SiPython, 
  SiMongodb, 
  SiAmazon, 
  SiTypescript,
  SiDocker,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiGit,
  SiPostgresql,
  SiGraphql,
  SiRedis,
  SiFigma,
  SiLinux
} from 'react-icons/si';

interface Skill {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  level: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'cloud';
}

interface SkillsProps {
  skills?: Skill[];
}

const defaultSkills: Skill[] = [
  // Frontend
  { icon: SiJavascript, name: 'JavaScript', level: 'Expert', category: 'frontend' },
  { icon: SiTypescript, name: 'TypeScript', level: 'Advanced', category: 'frontend' },
  { icon: SiReact, name: 'React', level: 'Expert', category: 'frontend' },
  { icon: SiNextdotjs, name: 'Next.js', level: 'Advanced', category: 'frontend' },
  { icon: SiTailwindcss, name: 'Tailwind CSS', level: 'Expert', category: 'frontend' },
  
  // Backend
  { icon: SiNodedotjs, name: 'Node.js', level: 'Advanced', category: 'backend' },
  { icon: SiPython, name: 'Python', level: 'Intermediate', category: 'backend' },
  { icon: SiGraphql, name: 'GraphQL', level: 'Intermediate', category: 'backend' },
  
  // Database
  { icon: SiMongodb, name: 'MongoDB', level: 'Advanced', category: 'database' },
  { icon: SiPostgresql, name: 'PostgreSQL', level: 'Intermediate', category: 'database' },
  { icon: SiRedis, name: 'Redis', level: 'Intermediate', category: 'database' },
  
  // Tools & Cloud
  { icon: SiDocker, name: 'Docker', level: 'Intermediate', category: 'tools' },
  { icon: SiGit, name: 'Git', level: 'Expert', category: 'tools' },
  { icon: SiFigma, name: 'Figma', level: 'Advanced', category: 'tools' },
  { icon: SiLinux, name: 'Linux', level: 'Advanced', category: 'tools' },
  { icon: SiAmazon, name: 'AWS', level: 'Intermediate', category: 'cloud' },
];

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const IconComponent = skill.icon;
  
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'frontend': return 'text-blue-400 bg-blue-400/10';
      case 'backend': return 'text-green-400 bg-green-400/10';
      case 'database': return 'text-purple-400 bg-purple-400/10';
      case 'tools': return 'text-orange-400 bg-orange-400/10';
      case 'cloud': return 'text-cyan-400 bg-cyan-400/10';
      default: return 'text-primary-400 bg-primary-400/10';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'text-emerald-400';
      case 'Advanced': return 'text-blue-400';
      case 'Intermediate': return 'text-yellow-400';
      default: return 'text-dark-400';
    }
  };
  
  return (
    <div 
      className="group relative bg-dark-800/30 backdrop-blur-sm border border-dark-700 rounded-xl p-6 hover:border-primary-400/50 transition-all duration-500 hover:-translate-y-2 hover:bg-dark-800/60 hover:shadow-xl hover:shadow-primary-500/10"
      style={{ 
        animationDelay: `${index * 50}ms`,
        animation: 'fadeInUp 0.6s ease forwards'
      }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative flex flex-col items-center text-center space-y-4">
        <div className={`p-4 rounded-xl group-hover:scale-110 transition-all duration-300 ${getCategoryColor(skill.category)}`}>
          <IconComponent className="w-10 h-10" />
        </div>
        
        <div className="space-y-1">
          <h4 className="text-dark-100 font-semibold text-base group-hover:text-white transition-colors duration-300">
            {skill.name}
          </h4>
          <div className="flex items-center justify-center gap-2">
            <div className={`w-2 h-2 rounded-full ${getLevelColor(skill.level)}`}></div>
            <p className={`text-xs font-mono font-medium ${getLevelColor(skill.level)}`}>
              {skill.level}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Skills: React.FC<SkillsProps> = ({ skills = defaultSkills }) => {
  const { elementRef: skillsRef, isVisible: skillsVisible } = useIntersectionObserver();

  const categories = [
    { name: 'Frontend', key: 'frontend', color: 'text-blue-400' },
    { name: 'Backend', key: 'backend', color: 'text-green-400' },
    { name: 'Database', key: 'database', color: 'text-purple-400' },
    { name: 'Tools', key: 'tools', color: 'text-orange-400' },
    { name: 'Cloud', key: 'cloud', color: 'text-cyan-400' },
  ];

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <div 
      ref={skillsRef as React.RefObject<HTMLDivElement>}
      className={`opacity-0 translate-y-8 transition-all duration-1000 ${skillsVisible ? 'opacity-100 translate-y-0' : ''}`}
    >
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-dark-100 mb-4">
          <span className="text-primary-400 font-mono mr-2">&lt;</span>
          Technologies & Tools
          <span className="text-primary-400 font-mono ml-2">/&gt;</span>
        </h3>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {categories.map((category) => (
            <div key={category.key} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${category.color.replace('text-', 'bg-')}`}></div>
              <span className={`font-mono text-sm ${category.color}`}>{category.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={`${skill.name}-${index}`} skill={skill} index={index} />
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-dark-800/30 border border-dark-700 rounded-full">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <p className="text-dark-400 font-mono text-sm">
            Always learning & growing my toolkit
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills; 