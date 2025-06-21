import Portfolio from './pages/Portfolio';
import './styles/animations.css';

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGoogle,
  FaAngular,
  FaPython,
} from "react-icons/fa";
import {
  SiMongodb,
  SiStrapi,
  SiWebrtc,
  SiTypescript,
  SiNginx,
  SiOpenai,
} from "react-icons/si";

import pptimage from "./assets/ppt-convert.png";

function App() {
  const portfolioData = {
    name: "Pankaj Sharma",
    title: "Frontend-focused Full Stack Developer crafting modern web experiences",
    subtitle: "Frontend Engineer | Learning Cloud Architecture | Full-stack Development",

    description: [
      "I'm a passionate Full Stack Developer with over 3 years of experience specializing in building robust, scalable web applications using modern technologies like React, Node.js, and MongoDB.",
      "I've contributed to innovative projects such as a WebRTC-based video streaming platform, document sharing via Strapi, and CI/CD-ready frontend deployments using Docker and NGINX.",
      "As a self-driven learner, I actively use tools like ChatGPT and Cursor, and explore GenAI for real-world applications, including cloud-native AI video processing.",
      "Currently, I'm enhancing my backend knowledge and infrastructure skills by diving deep into Docker, NGINX, and GCP services to build production-grade systems."
    ],
    skills: [
      {
        icon: FaReact,
        name: "React",
        level: "Advanced",
        category: "frontend",
      },
      {
        icon: FaAngular,
        name: "Angular",
        level: "Intermediate",
        category: "frontend",
      },
      {
        icon: SiWebrtc,
        name: "WebRTC",
        level: "Intermediate",
        category: "frontend",
      },
      {
        icon: SiTypescript,
        name: "TypeScript",
        level: "Advanced",
        category: "frontend",
      },
      {
        icon: FaNodeJs,
        name: "Node.js",
        level: "Advanced",
        category: "backend",
      },
      {
        icon: SiMongodb,
        name: "MongoDB",
        level: "Intermediate",
        category: "database",
      },
      {
        icon: FaDocker,
        name: "Docker",
        level: "Intermediate",
        category: "tools",
      },
      {
        icon: SiNginx,
        name: "NGINX",
        level: "Intermediate",
        category: "tools",
      },
      {
        icon: FaGoogle,
        name: "GCP",
        level: "Intermediate",
        category: "cloud",
      },
      {
        icon: SiStrapi,
        name: "Strapi CMS",
        level: "Intermediate",
        category: "backend",
      },
      {
        icon: FaPython,
        name: "Python",
        level: "Beginner",
        category: "backend",
      },
      {
        icon: SiOpenai,
        name: "GenAI",
        level: "Intermediate",
        category: "tools",
      },
    ],
    projects: [
      {
        title: "PPT to Image Cloud Conversion and real time sharing with attendees with an annotation feature in JioEvents",
        description:
          "Google Cloud Function pipeline that converts PPT files into annotated images using GenAI and Python. Integrated with Strapi media uploads for a seamless user experience.",
        technologies: ["Python", "GenAI", "GCP", "Strapi", "libre office"],
        liveUrl: "https://jioevents.com",
        githubUrl: "s",
        imageAlt: pptimage,
        featured: true
      },
      {
        title: "JioEvents - Live Event Platform ",
        description:
          "Developed a document-sharing and video streaming platform using Strapi, WebRTC, and GCP. Implemented slide annotations and real-time streaming using canvas and FFmpeg pipelines.",
        technologies: ["Strapi", "Node.js", "React", "WebRTC", "GCP", "Docker"],
        liveUrl: "https://jioevents-client.web.app",
        githubUrl: "https://github.com/pankajxdev/jioevents",
        imageAlt: "JioEvents Screenshot",
        featured: false
      },
      {
        title: "Portfolio Website",
        description:
          "Personal portfolio site built using React and TypeScript, deployed with Docker and Tailscale for privacy-focused production delivery using NGINX.",
        technologies: ["React", "TypeScript", "Docker", "NGINX", "Tailscale"],
        liveUrl: "s",
        githubUrl: "https://github.com/pankajxdev/portfolio",
        imageAlt: "Portfolio Website Screenshot",
        featured: false
      },
     
      {
        title: "Multiplayer Web Game",
        description:
          "A lightweight 2D multiplayer game using React and Phaser with uWebSockets for backend sync. Implemented collision detection and state sync for up to 50 players.",
        technologies: ["React", "Phaser", "uWebSockets.js", "Canvas API"],
        liveUrl: "s",
        githubUrl: "s",
        imageAlt: "Multiplayer Game Screenshot",
        featured: false
      }
    ],
    socialLinks: [
      {
        icon: <FaGithub />,
        url: "https://github.com/Pankaj132523",
        label: "GitHub"
      },
      {
        icon: <FaLinkedin />,
        url: "https://www.linkedin.com/in/pankaj132523",
        label: "LinkedIn"
      },
      {
        icon: <FaEnvelope />,
        url: "mailto:pankaj.sharma132523@gmail.com",
        label: "Email Pankaj"
      }
    ]
  };

  const handleContactSubmit = async (formData: any) => {
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'your_service_id',     // ⬅️ Replace with actual ID
          template_id: 'your_template_id',   // ⬅️ Replace
          user_id: 'your_user_id',           // ⬅️ Replace with your EmailJS public key
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_name: 'Pankaj',
            reply_to: formData.email,
          },
        }),
      });
  
      if (response.ok) {
        alert("Thank you for your message! I'll get back to you soon.");
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Email sending error:', error);
      alert('Sorry, there was an error sending your message.');
    }
  };
  

  return (
    <div className="App">
      <Portfolio 
        data={portfolioData}
        onContactSubmit={handleContactSubmit}
      />
    </div>
  );
}

export default App;
