import { motion } from 'framer-motion';

/**
 * PixelDegrade - Scroll-triggered pixel degradation effect
 * Content briefly pixelates on entry, then sharpens into modern clarity
 * Feels like a signal locking in
 */
export default function PixelDegrade({
  children,
  className = '',
  delay = 0
}) {
  return (
    <motion.div
      className={className}
      initial={{
        filter: 'blur(8px) brightness(0.5)',
        opacity: 0
      }}
      whileInView={{
        filter: 'blur(0px) brightness(1)',
        opacity: 1
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay,
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
    >
      {children}
    </motion.div>
  );
}
