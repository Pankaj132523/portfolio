import React from 'react';

interface SocialLink {
  icon: React.ReactNode;
  url: string;
  label: string;
}

interface FooterProps {
  name?: string;
  year?: number;
  socialLinks?: SocialLink[];
}

const Footer: React.FC<FooterProps> = ({
  name = "Pankaj Sharma",
  year = new Date().getFullYear(),
  socialLinks = []
}) => {
  return (
    <footer className="bg-dark-900 text-center py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Social Links - Only show on mobile/tablet */}
        {socialLinks.length > 0 && (
          <div className="flex justify-center gap-6 mb-8 lg:hidden">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-dark-400 hover:text-primary-400 transition-all duration-300 hover:-translate-y-1 text-2xl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        )}
        
        {/* Built by credit */}
        <div className="text-center">
          <a 
            href={socialLinks.find(link => link.label.toLowerCase().includes('github'))?.url || "https://github.com/your-repo"}
            className="text-dark-400 hover:text-primary-400 transition-colors duration-300 font-mono text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>Designed & Built by {name}</div>
          </a>
          <p className="text-dark-500 font-mono text-xs mt-2">© {year} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 