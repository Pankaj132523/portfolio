import React from 'react';

interface SocialLink {
  icon: React.ReactNode;
  url: string;
  label: string;
}

interface HeroProps {
  name?: string;
  title?: string;
  subtitle?: string;
  socialLinks?: SocialLink[];
  onProjectsClick?: () => void;
  onContactClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({
  name = "Pankaj Sharma",
  title = "I build things for the web.",
  subtitle,
  socialLinks = [],
  onProjectsClick,
  onContactClick
}) => {
  const handleProjectsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onProjectsClick) {
      onProjectsClick();
    } else {
      const target = document.querySelector('#projects');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onContactClick) {
      onContactClick();
    } else {
      const target = document.querySelector('#contact');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const emailLink = socialLinks.find(link => link.label.toLowerCase().includes('email'))?.url || 'mailto:hello@pankajsharma.dev';

  return (
    <section className="min-h-screen flex items-center justify-start px-8 bg-dark-900 relative overflow-hidden" id="home">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="max-w-4xl">
          <p className="text-primary-400 font-mono mb-6 opacity-0 animate-[fadeInUp_0.8s_ease_forwards]">
            Hi, my name is
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-dark-100 mb-4 opacity-0 animate-[fadeInUp_0.8s_ease_0.2s_forwards]">
            {name}.
          </h1>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-dark-300 mb-8 opacity-0 animate-[fadeInUp_0.8s_ease_0.4s_forwards]">
            {title}
          </h2>
          
          <p className="text-lg md:text-xl text-dark-400 mb-12 max-w-2xl leading-relaxed opacity-0 animate-[fadeInUp_0.8s_ease_0.6s_forwards]">
            I'm a full-stack developer specializing in building exceptional digital experiences. 
            Currently, I'm focused on building accessible, human-centered products.
            {subtitle && ` ${subtitle}`}
          </p>
          
          <div className="flex gap-6 flex-wrap opacity-0 animate-[fadeInUp_0.8s_ease_0.8s_forwards]">
            <a 
              href="#projects" 
              className="px-8 py-4 border-2 border-primary-400 text-primary-400 font-mono font-semibold rounded bg-transparent transition-all duration-300 cursor-pointer inline-flex items-center gap-2 hover:bg-primary-400/10 hover:-translate-y-1 hover:shadow-glow"
              onClick={handleProjectsClick}
            >
              Check out my work!
            </a>
            
            <a 
              href="#contact" 
              className="px-8 py-4 bg-primary-500 text-white font-mono font-semibold rounded transition-all duration-300 cursor-pointer inline-flex items-center gap-2 hover:bg-primary-600 hover:-translate-y-1 hover:shadow-glow-lg"
              onClick={handleContactClick}
            >
              Say Hello
            </a>
          </div>
        </div>
      </div>
      
      {/* Side Email */}
      <div className="fixed bottom-0 right-8 hidden lg:flex flex-col items-center gap-6 opacity-0 animate-[fadeInUp_1s_ease_1s_forwards]">
        <a 
          href={emailLink}
          className="text-dark-400 hover:text-primary-400 transition-colors duration-300 writing-mode-vertical font-mono text-sm tracking-widest hover:-translate-y-1 transform transition-all"
        >
          {emailLink.replace('mailto:', '')}
        </a>
        <div className="w-px h-24 bg-dark-600"></div>
      </div>
      
      {/* Side Social */}
      <div className="fixed bottom-0 left-8 hidden lg:flex flex-col items-center gap-6 opacity-0 animate-[fadeInUp_1s_ease_1.2s_forwards]">
        <div className="flex flex-col gap-4">
          {socialLinks.slice(0, 3).map((link, index) => (
            <a 
              key={index}
              href={link.url} 
              className="text-dark-400 hover:text-primary-400 transition-all duration-300 hover:-translate-y-1 text-xl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <div className="w-px h-24 bg-dark-600"></div>
      </div>
    </section>
  );
};

export default Hero; 