import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactProps {
  onSubmit?: (formData: FormData) => void;
  title?: string;
  description?: string;
}

const Contact: React.FC<ContactProps> = ({
  onSubmit,
  title = "What's Next?",
  description = "Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!"
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
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
        subject: '',
        message: ''
      });
    }
  };

  const isFormValid = formData.name && formData.email && formData.subject && formData.message;

  return (
    <section className="py-24 px-8 bg-dark-900" id="contact">
      <div 
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className={`max-w-2xl mx-auto text-center opacity-0 translate-y-8 transition-all duration-700 ${sectionVisible ? 'opacity-100 translate-y-0' : ''}`}
      >
        <h2 className="flex items-center justify-center text-2xl md:text-3xl font-bold text-dark-100 mb-6">
          <span className="text-primary-400 font-mono text-xl mr-4">04.</span>
          {title}
        </h2>
        
        <h3 className="text-3xl md:text-4xl font-bold text-dark-100 mb-8">
          Get In Touch
        </h3>
        
        <p className="text-lg text-dark-300 mb-12 leading-relaxed max-w-lg mx-auto">
          {description}
        </p>
        
        <div className="space-y-8">
          {/* Simple Contact Button */}
          <a 
            href="mailto:hello@pankajsharma.dev"
            className="inline-block px-8 py-4 border-2 border-primary-400 text-primary-400 font-mono font-semibold rounded bg-transparent transition-all duration-300 hover:bg-primary-400/10 hover:-translate-y-1 hover:shadow-glow"
          >
            Say Hello
          </a>
          
          {/* Contact Form */}
          <div className="pt-12">
            <form 
              className="grid gap-6 max-w-lg mx-auto text-left"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  className="p-4 bg-dark-800 border border-dark-600 rounded text-dark-100 placeholder:text-dark-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all duration-300"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  className="p-4 bg-dark-800 border border-dark-600 rounded text-dark-100 placeholder:text-dark-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all duration-300"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                className="p-4 bg-dark-800 border border-dark-600 rounded text-dark-100 placeholder:text-dark-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all duration-300"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="message"
                className="p-4 bg-dark-800 border border-dark-600 rounded text-dark-100 placeholder:text-dark-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all duration-300 min-h-[150px] resize-y"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <button 
                type="submit" 
                className="px-8 py-4 bg-primary-500 text-white font-mono font-semibold rounded transition-all duration-300 cursor-pointer hover:bg-primary-600 hover:-translate-y-1 hover:shadow-glow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                disabled={!isFormValid}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 