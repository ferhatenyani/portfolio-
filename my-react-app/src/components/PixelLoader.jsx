import { motion } from 'framer-motion';

/**
 * PixelLoader - 8x8 sprite-based loader with strict FPS feel (8-12 fps)
 * No easing, pure frame-by-frame animation
 */
export default function PixelLoader({ size = 16, color = 'var(--accent-cyan)' }) {
  const frames = 8;

  return (
    <motion.div
      className="pixel-loader"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
      }}
      animate={{
        rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
        scale: [1, 1.2, 1, 0.8, 1, 1.2, 1, 0.8, 1]
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: 'linear',
        times: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1]
      }}
    />
  );
}
