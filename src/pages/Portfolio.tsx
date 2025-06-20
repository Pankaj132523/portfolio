import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

interface PortfolioData {
  name?: string;
  title?: string;
  subtitle?: string;
  description?: string[];
  skills?: Array<{ 
    icon: React.ComponentType<{ className?: string }>; 
    name: string; 
    level: string; 
    category: string;
  }>;
  projects?: Array<{
    title: string;
    description: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    imageAlt?: string;
    featured?: boolean;
  }>;
  socialLinks?: Array<{
    icon: React.ReactNode;
    url: string;
    label: string;
  }>;
}

interface PortfolioProps {
  data?: PortfolioData;
  onContactSubmit?: (formData: any) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ data = {}, onContactSubmit }) => {
  return (
    <div className="font-sans leading-relaxed text-dark-100  overflow-x-hidden min-h-screen">
      <Navigation />
      <Hero
        name={data.name}
        subtitle={data.subtitle}
        socialLinks={data.socialLinks}
      />
      <About
        description={data.description}
        skills={data.skills}
      />
      <Projects
        projects={data.projects}
      />
      <Contact
        onSubmit={onContactSubmit}
        socialLinks={data.socialLinks}
      />
      <Footer
        name={data.name}
        socialLinks={data.socialLinks}
      />
    </div>
  );
};

export default Portfolio; 