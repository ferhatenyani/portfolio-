import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useMemo } from 'react';

/**
 * PixelThemeBlock - OPTIMIZED: Progressive pixel-art theme transition for blocks/cards
 * Reduced overlay count from 6 to 3 for 50% less DOM manipulation
 * Faster durations and GPU acceleration for smoother performance
 */
export default function PixelThemeBlock({
  children,
  className = '',
  delay = 0,
  sparkles = true
}) {
  const { isTransitioning, transitionId } = useTheme();

  // OPTIMIZED: Reduced from 8 to 4 sparkles, memoized to prevent recalculation
  const sparklePositions = useMemo(() =>
    Array.from({ length: 4 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 0.15, // Reduced from 0.3
      duration: 0.15 + Math.random() * 0.15 // Reduced from 0.2-0.5
    })),
    [transitionId]
  );

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ position: 'relative', willChange: isTransitioning ? 'transform' : 'auto' }}
    >
      {/* OPTIMIZED: Consolidated glitch overlays during transition */}
      {isTransitioning && (
        <>
          {/* Combined RGB split effect - alternates between cyan and pink */}
          <motion.div
            key={`glitch-${transitionId}`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.35, 0.25, 0],
              x: [-3, 3, -2, 0],
              background: [
                'var(--accent-cyan)',
                'var(--accent-pink)',
                'var(--accent-cyan)',
                'transparent'
              ]
            }}
            transition={{
              delay: delay,
              duration: 0.3, // Reduced from 0.4
              times: [0, 0.33, 0.66, 1],
              ease: 'easeInOut'
            }}
            className="absolute inset-0 pointer-events-none"
            style={{
              mixBlendMode: 'screen',
              zIndex: 10,
              willChange: 'opacity, transform',
              transform: 'translateZ(0)'
            }}
          />

          {/* Scanline effect - faster sweep */}
          <motion.div
            key={`scanline-${transitionId}`}
            initial={{ y: '-100%', opacity: 0 }}
            animate={{
              y: '100%',
              opacity: [0, 0.5, 0]
            }}
            transition={{
              delay: delay,
              duration: 0.35, // Reduced from 0.5
              ease: 'linear'
            }}
            className="absolute inset-x-0 h-1 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, transparent, var(--accent-cyan), transparent)',
              zIndex: 15,
              boxShadow: '0 0 8px var(--accent-cyan)',
              willChange: 'transform, opacity',
              transform: 'translateZ(0)'
            }}
          />

          {/* Sparkles during transition - reduced count */}
          {sparkles && sparklePositions.map((sparkle, i) => (
            <motion.div
              key={`sparkle-${i}-${transitionId}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                delay: delay + sparkle.delay,
                duration: sparkle.duration,
                times: [0, 0.5, 1],
                ease: 'easeOut'
              }}
              className="absolute w-1 h-1 pointer-events-none"
              style={{
                left: `${sparkle.x}%`,
                top: `${sparkle.y}%`,
                background: i % 2 === 0 ? 'var(--accent-cyan)' : 'var(--accent-pink)',
                boxShadow: `0 0 3px ${i % 2 === 0 ? 'var(--accent-cyan)' : 'var(--accent-pink)'}`,
                zIndex: 20,
                willChange: 'opacity, transform',
                transform: 'translateZ(0)'
              }}
            />
          ))}
        </>
      )}

      {/* Main content with subtle jitter - optimized for GPU */}
      <motion.div
        animate={isTransitioning ? {
          x: [0, -0.8, 0.8, 0],
          y: [0, 0.4, -0.4, 0]
        } : {
          x: 0,
          y: 0
        }}
        transition={{
          delay: delay,
          duration: 0.25, // Reduced from 0.4
          ease: 'easeInOut'
        }}
        style={{
          willChange: isTransitioning ? 'transform' : 'auto',
          transform: 'translateZ(0)'
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
