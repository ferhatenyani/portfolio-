import { createContext, useContext, useState, useEffect } from 'react';

/**
 * ThemeContext - Global theme state management
 * Provides theme state and transition trigger for pixel glitch animations
 */
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionId, setTransitionId] = useState(0);

  useEffect(() => {
    // Check system preference or localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    // Mark transition as active
    setIsTransitioning(true);
    setTransitionId(prev => prev + 1);

    // Update theme immediately for faster perception
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);

    // OPTIMIZED: Reduced from 1500ms to 600ms for faster, snappier transitions
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      toggleTheme,
      isTransitioning,
      transitionId
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
