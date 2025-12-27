import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useMemo } from 'react';

/**
 * PixelThemeText - OPTIMIZED: Progressive pixel-art theme transition for text
 * Reduced layers per character from 4 to 2 for better performance
 * Faster transitions and GPU acceleration
 */
export default function PixelThemeText({
  children,
  className = '',
  staggerDelay = 0.012, // Reduced from 0.015 for faster reveal
  baseDelay = 0,
  glitchIntensity = 'medium'
}) {
  const { isTransitioning, transitionId } = useTheme();
  const text = String(children);
  const letters = text.split('');

  // Memoize random delays to prevent recalculation
  const randomDelays = useMemo(() =>
    letters.map(() => Math.random() * 0.08), // Reduced from 0.1
    [letters.length]
  );

  // Optimized glitch settings
  const glitchSettings = useMemo(() => ({
    low: {
      blur: 1,
      offset: 1,
      opacity: 0.25,
      duration: 0.2
    },
    medium: {
      blur: 2,
      offset: 1.5,
      opacity: 0.4,
      duration: 0.25
    },
    high: {
      blur: 2.5,
      offset: 2,
      opacity: 0.5,
      duration: 0.3
    }
  }), []);

  const settings = glitchSettings[glitchIntensity];

  return (
    <span className={className}>
      {letters.map((char, i) => {
        const charDelay = baseDelay + (i * staggerDelay) + randomDelays[i];
        const isSpace = char === ' ';

        return (
          <motion.span
            key={`${i}-${transitionId}`}
            style={{
              display: 'inline-block',
              position: 'relative',
              whiteSpace: isSpace ? 'pre' : 'normal',
              willChange: isTransitioning ? 'transform' : 'auto',
              transform: 'translateZ(0)' // GPU acceleration
            }}
            initial={false}
          >
            {/* OPTIMIZED: Single combined glitch layer instead of 3 separate layers */}
            {isTransitioning && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, settings.opacity, settings.opacity * 0.6, 0],
                  x: [-settings.offset, settings.offset, -settings.offset * 0.5, 0]
                }}
                transition={{
                  delay: charDelay,
                  duration: settings.duration,
                  ease: 'easeInOut'
                }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  color: i % 2 === 0 ? 'var(--accent-cyan)' : 'var(--accent-pink)',
                  pointerEvents: 'none',
                  filter: `blur(${settings.blur}px)`,
                  willChange: 'opacity, transform',
                  transform: 'translateZ(0)'
                }}
              >
                {isSpace ? '\u00A0' : char}
              </motion.span>
            )}

            {/* Main character with jitter during transition */}
            <motion.span
              animate={isTransitioning ? {
                y: [0, -0.4, 0.4, 0],
                x: [0, 0.4, -0.4, 0],
                opacity: [1, 0.97, 0.97, 1]
              } : {
                y: 0,
                x: 0,
                opacity: 1
              }}
              transition={{
                delay: charDelay,
                duration: 0.2, // Reduced from 0.3
                ease: 'easeInOut'
              }}
              style={{
                display: 'inline-block',
                willChange: isTransitioning ? 'transform, opacity' : 'auto',
                transform: 'translateZ(0)'
              }}
            >
              {isSpace ? '\u00A0' : char}
            </motion.span>
          </motion.span>
        );
      })}
    </span>
  );
}
