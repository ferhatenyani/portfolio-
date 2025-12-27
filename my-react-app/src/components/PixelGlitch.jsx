import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';

/**
 * PixelGlitch - OPTIMIZED: Micro horizontal jitter + RGB offset on hover
 * Reduced duration and optimized for GPU with transform and will-change
 * Uses memoized variants for better performance
 */
export default function PixelGlitch({ children, className = '' }) {
  const [isGlitching, setIsGlitching] = useState(false);

  // Memoize variants to prevent recreation on each render
  const glitchVariants = useMemo(() => ({
    initial: {
      x: 0,
      filter: 'hue-rotate(0deg)'
    },
    glitch: {
      x: [0, -2, 2, -1, 0],
      filter: [
        'hue-rotate(0deg)',
        'hue-rotate(8deg)',
        'hue-rotate(-8deg)',
        'hue-rotate(4deg)',
        'hue-rotate(0deg)'
      ],
      transition: {
        duration: 0.12, // Reduced from 0.15 for snappier feel
        times: [0, 0.25, 0.5, 0.75, 1],
        ease: 'easeInOut'
      }
    }
  }), []);

  return (
    <motion.div
      className={className}
      variants={glitchVariants}
      initial="initial"
      animate={isGlitching ? 'glitch' : 'initial'}
      onHoverStart={() => setIsGlitching(true)}
      onHoverEnd={() => setIsGlitching(false)}
      onAnimationComplete={() => setIsGlitching(false)}
      style={{
        willChange: isGlitching ? 'transform, filter' : 'auto',
        transform: 'translateZ(0)', // GPU acceleration
        backfaceVisibility: 'hidden', // Prevent blurry text/images
        imageRendering: 'crisp-edges' // Keep images sharp during transforms
      }}
    >
      {children}
    </motion.div>
  );
}
