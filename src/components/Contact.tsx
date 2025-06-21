import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface SocialLink {
  icon: React.ReactNode;
  url: string;
  label: string;
}

interface ContactProps {
  onSubmit?: (formData: FormData) => void;
  title?: string;
  description?: string;
  socialLinks?: SocialLink[];
}

const Contact: React.FC<ContactProps> = ({
  onSubmit,
  title = "Contact Form",
  description,
  socialLinks = []
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const { elementRef: sectionRef, isVisible: sectionVisible } = useIntersectionObserver();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (onSubmit) {
      onSubmit(formData);
    } else {
      // Default behavior - show alert and reset form
      alert("Thank you for your message! I'll get back to you soon.");
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <section className="py-24 px-8 bg-dark-900" id="contact">
      <div 
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className={`max-w-4xl mx-auto text-center opacity-0 translate-y-8 transition-all duration-700 ${sectionVisible ? 'opacity-100 translate-y-0' : ''}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          {title}
        </h2>
        
        {description && (
          <p className="text-lg text-dark-400 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
        )}
        
        <div className="max-w-lg mx-auto">
          <form 
            className="grid gap-6 text-left"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              className="p-4 bg-dark-800/50 border border-dark-600 rounded-lg text-white placeholder:text-dark-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all duration-300"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              className="p-4 bg-dark-800/50 border border-dark-600 rounded-lg text-white placeholder:text-dark-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all duration-300"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="message"
              className="p-4 bg-dark-800/50 border border-dark-600 rounded-lg text-white placeholder:text-dark-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all duration-300 min-h-[150px] resize-y"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
            <button 
              type="submit" 
              className="px-8 py-4 bg-primary-500 text-white font-medium rounded-lg transition-all duration-300 hover:bg-primary-600 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              disabled={!isFormValid}
            >
              Send
            </button>
          </form>
          
          {socialLinks.length > 0 && (
            <div className="mt-8 pt-8 border-t border-dark-700">
              <p className="text-dark-400 mb-4">Or connect with me on:</p>
              <div className="flex justify-center gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-dark-300 hover:text-primary-400 transition-colors duration-300"
                    aria-label={link.label}
                  >
                    {link.icon}
                    <span className="text-sm">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact; 