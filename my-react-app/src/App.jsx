import { useEffect } from 'react';
import PixelCursor from './components/PixelCursor';
import ThemeToggle from './components/ThemeToggle';
import Hero from './sections/Hero';
import About from './sections/About';
import AboutOption3 from './sections/AboutOption3';
import AboutOption3_Layout1 from './sections/AboutOption3_Layout1';
import AboutOption3_Layout2 from './sections/AboutOption3_Layout2';
import AboutOption3_Layout3 from './sections/AboutOption3_Layout3';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';


/**
 * Main App Component - Hybrid Pixel + Modern Portfolio
 * Ferhaten Yani - UI/UX Designer & Front-End Developer
 */
function App() {
  useEffect(() => {
    // Disable default cursor for pixel cursor effect
    document.body.style.cursor = 'none';

    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Custom Pixel Cursor */}
      <PixelCursor />

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <AboutOption3 />
        <AboutOption3_Layout1 />
        <AboutOption3_Layout2 />
        <AboutOption3_Layout3 />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
