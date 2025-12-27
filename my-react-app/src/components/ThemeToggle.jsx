import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

/**
 * ThemeToggle - OPTIMIZED: Dark/Light mode switcher with faster pixel transition
 * Reduced animation durations for snappier feel while maintaining glitch aesthetic
 */
export default function ThemeToggle() {
  const { theme, toggleTheme, isTransitioning } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-8 right-8 z-50 w-12 h-12 flex items-center justify-center bg-[var(--bg-secondary)] border-2 border-[var(--accent-cyan)] cursor-pointer overflow-hidden group"
      whileHover={{ scale: 1.08 }} // Reduced from 1.1 for subtler effect
      whileTap={{ scale: 0.92 }} // Reduced from 0.95 for more feedback
      animate={isTransitioning ? {
        boxShadow: [
          '0 0 0 0 var(--accent-cyan)',
          '0 0 16px 3px var(--accent-cyan)', // Reduced glow intensity
          '0 0 0 0 var(--accent-cyan)'
        ]
      } : {}}
      transition={{ duration: 0.25 }} // Reduced from 0.6 for faster response
      style={{ willChange: 'transform', transform: 'translateZ(0)' }}
    >
      {/* OPTIMIZED: Single combined glitch overlay instead of two separate layers */}
      {isTransitioning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.4, 0.3, 0],
            background: [
              'var(--accent-cyan)',
              'var(--accent-pink)',
              'var(--accent-cyan)',
              'transparent'
            ]
          }}
          transition={{ duration: 0.25, times: [0, 0.33, 0.66, 1] }} // Reduced from 0.3
          className="absolute inset-0"
          style={{
            mixBlendMode: 'screen',
            willChange: 'opacity, background',
            transform: 'translateZ(0)'
          }}
        />
      )}

      <motion.div
        animate={{
          rotate: theme === 'dark' ? 0 : 180,
          scale: isTransitioning ? [1, 1.15, 1] : 1 // Reduced from 1.2
        }}
        transition={{
          rotate: { duration: 0.25, ease: 'backOut' }, // Reduced from 0.3
          scale: { duration: 0.3 } // Reduced from 0.4
        }}
        className="text-xl relative z-10"
        style={{ willChange: 'transform', transform: 'translateZ(0)' }}
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </motion.div>

      {/* Pixel border effect - GPU accelerated */}
      <div
        className="absolute inset-0 border-2 border-[var(--accent-cyan)] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{
          clipPath: 'polygon(0 0, 8px 0, 8px 8px, 0 8px)',
          willChange: 'opacity',
          transform: 'translateZ(0)'
        }}
      />
    </motion.button>
  );
}
