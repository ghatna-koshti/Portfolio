import React, { useState, useEffect } from 'react';
import Loader from './components/Loader.jsx'; 
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Portfolio from './components/Portfolio.jsx';
import Skill from './components/Skill.jsx';
import SocialLinks from './components/SocialLinks.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <Portfolio />
          <Skill />
          <Contact />
          <SocialLinks />
        </>
      )}
    </div>
  );
}

export default App;
