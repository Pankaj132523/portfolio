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
        ? 'bg-dark-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-dark-900/80 backdrop-blur-md'
    }`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a 
          href="#home" 
          className="text-xl font-bold text-white no-underline transition-all duration-300 hover:text-primary-400"
          onClick={(e) => handleNavClick(e, '#home')}
        >
          Pankaj Sharma
        </a>
        
        <div className="flex items-center gap-8">
          <ul className="nav-links flex list-none gap-8 md:flex">
            <li>
              <a 
                href="#about"
                className="no-underline text-dark-300 font-medium transition-all duration-300 hover:text-primary-400"
                onClick={(e) => handleNavClick(e, '#about')}
              >
                About Me
              </a>
            </li>
            <li>
              <a 
                href="#technologies"
                className="no-underline text-dark-300 font-medium transition-all duration-300 hover:text-primary-400"
                onClick={(e) => handleNavClick(e, '#technologies')}
              >
                Technologies
              </a>
            </li>
            <li>
              <a 
                href="#projects"
                className="no-underline text-dark-300 font-medium transition-all duration-300 hover:text-primary-400"
                onClick={(e) => handleNavClick(e, '#projects')}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#contact"
                className="no-underline text-dark-300 font-medium transition-all duration-300 hover:text-primary-400"
                onClick={(e) => handleNavClick(e, '#contact')}
              >
                Contact
              </a>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 