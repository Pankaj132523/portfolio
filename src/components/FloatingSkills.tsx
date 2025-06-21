import React, { useEffect, useState } from 'react';
import {
  SiReact, 
  SiNodedotjs, 
  SiTypescript,
  SiJavascript,
  SiMongodb, 
  SiDocker,
  SiPython,
  SiGit
} from 'react-icons/si';
import { FaGoogle, FaAngular } from 'react-icons/fa';

interface FloatingIcon {
  id: number;
  Icon: React.ComponentType<{ className?: string }>;
  x: number;
  y: number;
  speed: number;
  color: string;
  size: number;
}

const FloatingSkills: React.FC = () => {
  const [icons, setIcons] = useState<FloatingIcon[]>([]);

  const skillIcons = [
    { Icon: SiReact, color: '#61DAFB' },
    { Icon: SiNodedotjs, color: '#339933' },
    { Icon: SiTypescript, color: '#3178C6' },
    { Icon: SiJavascript, color: '#F7DF1E' },
    { Icon: SiMongodb, color: '#47A248' },
    { Icon: SiDocker, color: '#2496ED' },
    { Icon: SiPython, color: '#3776AB' },
    { Icon: SiGit, color: '#F05032' },
    { Icon: FaGoogle, color: '#4285F4' },
    { Icon: FaAngular, color: '#DD0031' }
  ];

  useEffect(() => {
    const newIcons: FloatingIcon[] = [];
    
    // Create more icons by duplicating the skill set
    const numSets = 3; // Triple the icons for better coverage
    
    for (let set = 0; set < numSets; set++) {
      skillIcons.forEach((skill, i) => {
        newIcons.push({
          id: set * skillIcons.length + i,
          Icon: skill.Icon,
          x: Math.random() * 100, // Use full width (0% to 100%)
          y: Math.random() * 100,
          speed: Math.random() * 0.02 + 0.01, // Much slower: 0.01 to 0.03
          color: skill.color,
          size: Math.random() * 16 + 24 // Size between 24px and 40px
        });
      });
    }
    
    setIcons(newIcons);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIcons(prevIcons => 
        prevIcons.map(icon => ({
          ...icon,
          y: icon.y >= 100 ? -5 : icon.y + icon.speed
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full overflow-hidden">
      {icons.map((icon) => {
        const IconComponent = icon.Icon;
        return (
          <div
            key={icon.id}
            className="absolute opacity-30 transition-all duration-100 ease-linear"
            style={{
              left: `${icon.x}%`,
              top: `${icon.y}%`,
              color: icon.color,
              fontSize: `${icon.size}px`
            }}
          >
            <IconComponent />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingSkills; 