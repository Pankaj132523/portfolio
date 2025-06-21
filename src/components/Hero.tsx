import React, { useEffect, useState } from 'react';
import profile from '../assets/profile.jpg';
import { useTypingEffect } from '../hooks/useTypingEffect';
import {
  SiReact, 
  SiNodedotjs, 
  SiTypescript,
  SiJavascript,
  SiMongodb, 
  SiDocker,
  SiPython,
  SiGit,
  SiNginx,
  SiStrapi
} from 'react-icons/si';
import { FaGoogle, FaAngular } from 'react-icons/fa';

interface SocialLink {
  icon: React.ReactNode;
  url: string;
  label: string;
}

interface HeroProps {
  name?: string;
  subtitle?: string;
  socialLinks?: SocialLink[];
}

interface FloatingIcon {
  id: number;
  Icon: React.ComponentType<{ className?: string }>;
  x: number;
  y: number;
  speed: number;
  color: string;
  size: number;
}

const Hero: React.FC<HeroProps> = ({
  name = "Pankaj Sharma",
  subtitle = "Frontend Engineer | Learning Cloud Architecture | Full-stack Development",
  socialLinks = []
}) => {
  const [floatingIcons, setFloatingIcons] = useState<FloatingIcon[]>([]);

  const skills = [
    "React Developer",
    "Full Stack Engineer", 
    "Node.js Developer",
    "MongoDB Developer",
    "TypeScript Developer",
    "Docker Enthusiast",
    "Cloud Architecture Student"
  ];
  
  const { displayText, isBlinking } = useTypingEffect(skills, {
    typingSpeed: 100,
    deletingSpeed: 50,
    pauseDuration: 2000
  });

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
    { Icon: FaAngular, color: '#DD0031' },
    { Icon: SiNginx, color: '#009639' },
    { Icon: SiStrapi, color: '#2F2E8B' }
  ];

  // Initialize floating icons
  useEffect(() => {
    const newIcons: FloatingIcon[] = [];
    
    skillIcons.forEach((skill, i) => {
      newIcons.push({
        id: i,
        Icon: skill.Icon,
        x: Math.random() * 85 + 5, // 5% to 90%
        y: Math.random() * 100,
        speed: Math.random() * 0.2 + 0.1, // 0.1 to 0.3
        color: skill.color,
        size: Math.random() * 8 + 28 // 28-36px
      });
    });
    
    setFloatingIcons(newIcons);
  }, []);

  // Animate floating icons
  useEffect(() => {
    const interval = setInterval(() => {
      setFloatingIcons(prevIcons => 
        prevIcons.map(icon => ({
          ...icon,
          y: icon.y >= 100 ? -5 : icon.y + icon.speed
        }))
      );
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-8 bg-dark-900 relative overflow-hidden" id="home">
      {/* Floating Skills Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingIcons.map((icon) => {
          const IconComponent = icon.Icon;
          return (
            <div
              key={icon.id}
              className="absolute opacity-25 transition-all duration-100 ease-linear"
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

      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto w-full relative z-10 text-center">
        {/* Profile Image */}
        <div className="flex justify-center mb-8 opacity-0 animate-[fadeInUp_0.8s_ease_forwards]">
          <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-4xl font-bold text-white shadow-2xl p-1">
            <img src={profile} alt="Profile" className="w-full h-full rounded-full object-cover" />
          </div>
        </div>
        
        {/* Static Name */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 opacity-0 animate-[fadeInUp_0.8s_ease_0.2s_forwards]">
          {name}
        </h1>
        
        {/* Dynamic Skills Title */}
        <div className="text-xl md:text-2xl font-medium text-primary-400 mb-6 opacity-0 animate-[fadeInUp_0.8s_ease_0.4s_forwards] flex justify-center items-center">
          <div className="relative min-h-[1.5em] min-w-[300px] flex items-center justify-center">
            <span className="whitespace-nowrap">
              {displayText}
              <span 
                className={`ml-1 text-primary-400 transition-opacity duration-100 ${
                  isBlinking ? 'opacity-0' : 'opacity-100'
                }`}
              >
                |
              </span>
            </span>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-lg text-dark-400 mb-8 max-w-3xl mx-auto leading-relaxed opacity-0 animate-[fadeInUp_0.8s_ease_0.6s_forwards]">
          {subtitle}
        </p>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 opacity-0 animate-[fadeInUp_0.8s_ease_0.8s_forwards]">
          {socialLinks.slice(0, 2).map((link, index) => (
            <a 
              key={index}
              href={link.url}
              className="px-6 py-3 bg-primary-500 text-white font-medium rounded-lg transition-all duration-300 hover:bg-primary-600 hover:-translate-y-1 inline-flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero; 