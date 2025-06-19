import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageAlt?: string;
  featured?: boolean;
}

interface ProjectsProps {
  projects?: Project[];
}

const defaultProjects: Project[] = [
  {
    title: 'Spotify Profile V2',
    description: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
    technologies: ['React', 'Express', 'Spotify API', 'Styled Components'],
    liveUrl: '#',
    githubUrl: '#',
    imageAlt: 'Spotify Profile Screenshot',
    featured: true
  },
  {
    title: 'Halcyon Theme',
    description: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
    technologies: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper'],
    liveUrl: '#',
    githubUrl: '#',
    imageAlt: 'Halcyon Theme Screenshot',
    featured: true
  },
  {
    title: 'Integrating Algolia Search',
    description: 'Building a custom search component with Algolia InstantSearch.js and integrating it with Gatsby and Netlify.',
    technologies: ['Algolia', 'Gatsby', 'React', 'Node.js'],
    liveUrl: '#',
    githubUrl: '#',
    imageAlt: 'Algolia Search Screenshot',
    featured: true
  }
];

const FeaturedProject: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const isEven = index % 2 === 0;

  console.log(project.imageAlt);
  

  return (
    <div 
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`relative grid grid-cols-12 gap-4 items-center mb-24 opacity-0 translate-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : ''}`}
    >
      {/* Project Image */}
      <div className={`col-span-12 lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'} relative group`}>
        <div className="relative overflow-hidden rounded bg-primary-400/5 border border-primary-400/20">
          <div className="aspect-video bg-gradient-to-br from-primary-400/20 to-accent-cyan/20 flex items-center justify-center">
            <img src={project.imageAlt} alt={project.imageAlt} className="w-full h-full object-contain" />
          </div>
          <div className="absolute inset-0 bg-dark-900/75 group-hover:bg-dark-900/50 transition-all duration-300"></div>
        </div>
      </div>

      {/* Project Info */}
      <div className={`col-span-12 lg:col-span-5 ${isEven ? 'lg:order-2 lg:text-right' : 'lg:order-1 lg:text-left'} relative z-10`}>
        <p className="text-primary-400 font-mono text-sm mb-2">Featured Project</p>
        <h3 className="text-2xl font-bold text-dark-100 mb-4">{project.title}</h3>
        
        <div className="bg-dark-800 p-6 rounded shadow-xl border border-dark-700 mb-6">
          <p className="text-dark-300 leading-relaxed">{project.description}</p>
        </div>
        
        <div className={`flex flex-wrap gap-3 mb-6 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
          {project.technologies.map((tech, i) => (
            <span key={i} className="text-dark-400 font-mono text-sm">{tech}</span>
          ))}
        </div>
        
        <div className={`flex gap-4 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              className="text-dark-400 hover:text-primary-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              className="text-dark-400 hover:text-primary-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC<ProjectsProps> = ({ projects = defaultProjects }) => {
  const { elementRef: titleRef, isVisible: titleVisible } = useIntersectionObserver();
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section className="py-24 px-8 bg-dark-900" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={titleRef as React.RefObject<HTMLHeadingElement>}
          className={`flex items-center text-2xl md:text-3xl font-bold text-dark-100 mb-16 opacity-0 translate-y-8 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : ''}`}
        >
          <span className="text-primary-400 font-mono text-xl mr-4">03.</span>
          Some Things I've Built
          <div className="ml-8 h-px bg-dark-600 flex-1 max-w-xs"></div>
        </h2>
        
        <div className="space-y-24">
          {featuredProjects.map((project, index) => (
            <FeaturedProject key={index} project={project} index={index} />
          ))}
        </div>
        
        {/* View Archive Link */}
        <div className="text-center mt-16">
          <a 
            href="#" 
            className="inline-block px-8 py-4 border-2 border-primary-400 text-primary-400 font-mono font-semibold rounded bg-transparent transition-all duration-300 hover:bg-primary-400/10 hover:-translate-y-1"
          >
            Show More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 