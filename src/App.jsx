import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import MouseSpotlight from './components/MouseSpotlight';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'black';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = (newTheme) => {
    if (newTheme === 'white' || newTheme === 'black' || newTheme === 'brown') {
      setTheme(newTheme);
    }
  };

  return (
    <div className="app-container">
      <ScrollProgress />
      <CustomCursor />
      <MouseSpotlight />
      <Navbar currentTheme={theme} toggleTheme={toggleTheme} />
      <main className="w-full relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
