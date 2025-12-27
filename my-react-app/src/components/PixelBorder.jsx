import { motion } from 'framer-motion';

/**
 * PixelBorder - Animated pixel border that draws on mount
 * Inspired by SNES RPG menus - corners first, then edges
 */
export default function PixelBorder({
  children,
  className = '',
  delay = 0,
  color = 'var(--accent-cyan)'
}) {
  const pathLength = 1000;

  return (
    <div className={`relative ${className}`}>
      {children}

      {/* SVG Border Animation */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ overflow: 'visible' }}
      >
        <motion.rect
          x="2"
          y="2"
          width="calc(100% - 4px)"
          height="calc(100% - 4px)"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeDasharray={pathLength}
          strokeDashoffset={pathLength}
          initial={{ strokeDashoffset: pathLength }}
          animate={{ strokeDashoffset: 0 }}
          transition={{
            delay,
            duration: 1.2,
            ease: 'linear'
          }}
        />
      </svg>
    </div>
  );
}
