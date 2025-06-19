import React from 'react';
import Portfolio from './pages/Portfolio';
import './styles/animations.css';

// Option 1: Use default data (minimal customization)
// Option 2: Import sample data for full customization
// import { samplePortfolioData } from './utils/portfolioData';

function App() {
  // Option 1: Minimal customization - just override specific fields
  const portfolioData = {
    name: "Pankaj Sharma",
    title: "Full-Stack Developer crafting beautiful digital experiences",
    // Add more customization as needed
  };

  // Option 2: Use complete sample data
  // const portfolioData = samplePortfolioData;

  const handleContactSubmit = (formData: any) => {
    console.log('Contact form submitted:', formData);
    
    // Here you can integrate with:
    // - Email services (EmailJS, Nodemailer)
    // - Form services (Formspree, Netlify Forms)
    // - Your own API endpoint
    // - Firebase/Supabase
    
    alert("Thank you for your message! I'll get back to you soon.");
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
