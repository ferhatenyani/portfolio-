import { motion } from 'framer-motion';
import { useMemo } from 'react';

/**
 * PixelAssemble - OPTIMIZED: Components assemble from scattered pixels
 * Faster animation with GPU acceleration and memoized offsets
 * Reduced duration from 0.6s to 0.45s for snappier feel
 */
export default function PixelAssemble({
  children,
  className = '',
  delay = 0,
  stagger = 0.03
}) {
  // Memoize random scatter positions to prevent recalculation
  const offset = useMemo(() => ({
    x: (Math.random() - 0.5) * 80, // Reduced from 100 for less extreme movement
    y: (Math.random() - 0.5) * 80
  }), []);

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
        scale: 0
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1
      }}
      viewport={{ once: true, margin: "-80px", amount: 0.2 }}
      transition={{
        delay,
        duration: 0.45, // Reduced from 0.6
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      style={{
        willChange: 'transform, opacity',
        transform: 'translateZ(0)' // GPU acceleration
      }}
    >
      {children}
    </motion.div>
  );
}
