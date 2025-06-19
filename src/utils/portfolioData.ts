export const samplePortfolioData = {
  name: "John Doe",
  title: "Full-Stack Developer crafting beautiful digital experiences",
  subtitle: "Passionate about creating innovative solutions",
  
  description: [
    "I'm a passionate full-stack developer with 5+ years of experience creating clean, efficient, and user-friendly applications. I specialize in modern web technologies and enjoy turning complex problems into simple, beautiful solutions.",
    "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community through blog posts and tech talks."
  ],

  skills: [
    { icon: '⚛️', name: 'React' },
    { icon: '💚', name: 'Node.js' },
    { icon: '🐍', name: 'Python' },
    { icon: '🗃️', name: 'MongoDB' },
    { icon: '☁️', name: 'AWS' },
    { icon: '🎨', name: 'Figma' },
    { icon: '📱', name: 'React Native' },
    { icon: '🔥', name: 'Firebase' }
  ],

  projects: [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built with modern technologies for optimal performance.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
      liveUrl: 'https://ecommerce-demo.com',
      githubUrl: 'https://github.com/johndoe/ecommerce-platform',
      imageAlt: 'E-Commerce Platform Screenshot'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.',
      technologies: ['Vue.js', 'Express', 'Socket.io', 'PostgreSQL', 'Redis'],
      liveUrl: 'https://taskmanager-demo.com',
      githubUrl: 'https://github.com/johndoe/task-manager',
      imageAlt: 'Task Management App Screenshot'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive data visualizations, and historical weather data analysis.',
      technologies: ['JavaScript', 'Chart.js', 'Weather API', 'CSS3', 'PWA'],
      liveUrl: 'https://weather-dashboard-demo.com',
      githubUrl: 'https://github.com/johndoe/weather-dashboard',
      imageAlt: 'Weather Dashboard Screenshot'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and TypeScript, featuring smooth animations and optimized performance.',
      technologies: ['React', 'TypeScript', 'CSS3', 'Vite'],
      liveUrl: 'https://johndoe-portfolio.com',
      githubUrl: 'https://github.com/johndoe/portfolio',
      imageAlt: 'Portfolio Website Screenshot'
    }
  ],

  socialLinks: [
    { icon: '🐙', url: 'https://github.com/johndoe', label: 'GitHub' },
    { icon: '💼', url: 'https://linkedin.com/in/johndoe', label: 'LinkedIn' },
    { icon: '🐦', url: 'https://twitter.com/johndoe', label: 'Twitter' },
    { icon: '📧', url: 'mailto:john@example.com', label: 'Email' }
  ]
};

// Export individual sections for more granular control
export const heroData = {
  name: samplePortfolioData.name,
  title: samplePortfolioData.title,
  subtitle: samplePortfolioData.subtitle
};

export const aboutData = {
  description: samplePortfolioData.description,
  skills: samplePortfolioData.skills
};

export const projectsData = {
  projects: samplePortfolioData.projects
};

export const contactData = {
  title: "Let's Work Together",
  description: "Have a project in mind? I'd love to hear from you. Let's create something amazing together."
};

export const footerData = {
  name: samplePortfolioData.name,
  socialLinks: samplePortfolioData.socialLinks
}; 