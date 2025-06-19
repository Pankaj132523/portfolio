import React from 'react';
import { useScrollEffect } from '../hooks/useScrollEffect';

interface NavigationProps {
  onNavClick?: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onNavClick }) => {
  const isScrolled = useScrollEffect(50);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    
    if (onNavClick) {
      onNavClick(section);
    } else {
      // Default smooth scroll behavior
      const target = document.querySelector(section);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 px-8 py-4 transition-all duration-300 ${
      isScrolled 
        ? 'bg-dark-900/95 backdrop-blur-md shadow-lg shadow-primary-500/10 border-b border-dark-700' 
        : 'bg-dark-900/80 backdrop-blur-md'
    }`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a 
          href="#home" 
          className="text-2xl font-bold text-primary-400 no-underline transition-all duration-300 hover:scale-105 hover:text-primary-300 hover:shadow-glow font-mono"
          onClick={(e) => handleNavClick(e, '#home')}
        >
          &lt;PankajSharma /&gt;
        </a>
        <ul className="nav-links flex list-none gap-8 md:flex">
          <li>
            <a 
              href="#home"
              className="no-underline text-dark-300 font-mono text-sm font-medium transition-all duration-300 relative hover:text-primary-400 
                        before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-primary-400 
                        before:transition-all before:duration-300 hover:before:w-full"
              onClick={(e) => handleNavClick(e, '#home')}
            >
              <span className="text-primary-400 mr-1">01.</span>Home
            </a>
          </li>
          <li>
            <a 
              href="#about"
              className="no-underline text-dark-300 font-mono text-sm font-medium transition-all duration-300 relative hover:text-primary-400 
                        before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-primary-400 
                        before:transition-all before:duration-300 hover:before:w-full"
              onClick={(e) => handleNavClick(e, '#about')}
            >
              <span className="text-primary-400 mr-1">02.</span>About
            </a>
          </li>
          <li>
            <a 
              href="#projects"
              className="no-underline text-dark-300 font-mono text-sm font-medium transition-all duration-300 relative hover:text-primary-400 
                        before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-primary-400 
                        before:transition-all before:duration-300 hover:before:w-full"
              onClick={(e) => handleNavClick(e, '#projects')}
            >
              <span className="text-primary-400 mr-1">03.</span>Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact"
              className="no-underline text-dark-300 font-mono text-sm font-medium transition-all duration-300 relative hover:text-primary-400 
                        before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-primary-400 
                        before:transition-all before:duration-300 hover:before:w-full"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              <span className="text-primary-400 mr-1">04.</span>Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation; 