import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import Skills from './Skills';

interface AboutProps {
  description?: string[];
  skills?: Array<{ icon: string; name: string }>;
}

const defaultDescription = [
  "Hello! I'm Pankaj, a software developer passionate about creating things that live on the internet. My interest in web development started back in 2019 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!",
  "Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.",
  "Here are a few technologies I've been working with recently:"
];

const About: React.FC<AboutProps> = ({
  description = defaultDescription,
  skills
}) => {
  const { elementRef: titleRef, isVisible: titleVisible } = useIntersectionObserver();
  const { elementRef: contentRef, isVisible: contentVisible } = useIntersectionObserver();

  return (
    <section className="py-24 px-8 bg-dark-900" id="about">
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={titleRef as React.RefObject<HTMLHeadingElement>}
          className={`flex items-center text-2xl md:text-3xl font-bold text-dark-100 mb-16 opacity-0 translate-y-8 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : ''}`}
        >
          <span className="text-primary-400 font-mono text-xl mr-4">02.</span>
          About Me
          <div className="ml-8 h-px bg-dark-600 flex-1 max-w-xs"></div>
        </h2>
        
        <div 
          ref={contentRef as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 lg:grid-cols-3 gap-16 items-start mb-24 opacity-0 translate-y-8 transition-all duration-700 ${contentVisible ? 'opacity-100 translate-y-0' : ''}`}
        >
          {/* Text Content */}
          <div className="lg:col-span-2 space-y-6">
            {description.slice(0, -1).map((paragraph, index) => (
              <p key={index} className="text-dark-300 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
            
            <p className="text-dark-300 leading-relaxed text-lg">
              {description[description.length - 1]}
            </p>
          </div>
          
          {/* Profile Image Placeholder */}
          <div className="lg:col-span-1 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="w-64 h-64 bg-primary-400/10 rounded border-2 border-primary-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-400/20 transition-all duration-300 group-hover:bg-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
              <div className="absolute top-4 left-4 w-64 h-64 border-2 border-primary-400 rounded -z-10 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Skills Section */}
        <Skills />
      </div>
    </section>
  );
};

export default About; 