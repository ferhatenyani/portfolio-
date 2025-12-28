import { useEffect } from 'react';
import PixelCursor from './components/PixelCursor';
import ThemeToggle from './components/ThemeToggle';
import Hero from './sections/Hero';
import About from './sections/About';
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
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
