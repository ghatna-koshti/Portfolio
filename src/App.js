import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Loader from './components/Loader.jsx'; 
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Portfolio from './components/Portfolio.jsx';
import Skill from './components/Skill.jsx';
import SocialLinks from './components/SocialLinks.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      anchorPlacement: 'top-bottom',
      once: false,
      mirror: true, 
    });

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
          <div className="xsm:block sm:hidden">
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
