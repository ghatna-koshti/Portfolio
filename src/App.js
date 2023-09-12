import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Skill from "./components/Skill.jsx";
import SocialLinks from './components/SocialLinks.jsx';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/> 
      <About/>
      <Portfolio/>
      <Skill/>
      <Contact/>
      <SocialLinks/>   
    </div>
  );
}

export default App;
