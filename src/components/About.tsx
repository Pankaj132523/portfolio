import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import Skills from './Skills';

interface Skill {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  level: string;
  category: string;
}

interface AboutProps {
  description?: string[];
  skills?: Skill[];
}

const defaultDescription = [
  "I'm a passionate Full Stack Developer with over 3 years of experience specializing in building robust, scalable web applications using modern technologies like React, Node.js, and MongoDB.",
  "I've contributed to innovative projects such as a WebRTC-based video streaming platform, document sharing via Strapi, and CI/CD-ready frontend deployments using Docker and NGINX.",
  "As a self-driven learner, I actively use tools like ChatGPT and Cursor, and explore GenAI for real-world applications, including cloud-native AI video processing.",
  "Currently, I'm enhancing my backend knowledge and infrastructure skills by diving deep into Docker, NGINX, and GCP services to build production-grade systems."
];

const About: React.FC<AboutProps> = ({
  description = defaultDescription,
  skills
}) => {
  const { elementRef: titleRef, isVisible: titleVisible } = useIntersectionObserver();
  const { elementRef: contentRef, isVisible: contentVisible } = useIntersectionObserver();

  return (
    <section className="py-24 px-8 bg-dark-900" id="about">
      <div className="max-w-4xl mx-auto text-center">
        <h2 
          ref={titleRef as React.RefObject<HTMLHeadingElement>}
          className={`text-3xl md:text-4xl font-bold text-white mb-12 opacity-0 translate-y-8 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : ''}`}
        >
          About Me
        </h2>
        
        <div 
          ref={contentRef as React.RefObject<HTMLDivElement>}
          className={`mb-24 opacity-0 translate-y-8 transition-all duration-700 ${contentVisible ? 'opacity-100 translate-y-0' : ''}`}
        >
          {description.map((paragraph, index) => (
            <p key={index} className="text-lg text-dark-300 leading-relaxed mb-6 max-w-3xl mx-auto">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Enhanced Skills Section */}
        <Skills skills={skills} />
      </div>
    </section>
  );
};

export default About; 