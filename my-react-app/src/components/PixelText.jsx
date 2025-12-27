import { motion, useInView } from 'framer-motion';
import { useState, useRef } from 'react';

/**
 * PixelText - Digital decode/glitch reveal animation
 * Letters decode character-by-character with glitch distortion effect
 * Triggers on scroll when element comes into view
 */
export default function PixelText({
  children,
  delay = 0,
  stagger = 0.03,
  className = '',
  triggerOnce = true,
  scrollTrigger = true // Set to false for Hero section (always animate on load)
}) {
  const text = String(children);
  const letters = text.split('');
  const [randomChars] = useState(() =>
    letters.map(() => String.fromCharCode(33 + Math.floor(Math.random() * 94)))
  );

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: triggerOnce,
    margin: "-100px" // Trigger when element is 100px from viewport
  });

  // For Hero section or non-scroll elements, always animate
  const shouldAnimate = scrollTrigger ? isInView : true;

  return (
    <span ref={ref} className={className}>
      {letters.map((char, i) => {
        const charDelay = delay + (i * stagger);

        return (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
            transition={{
              delay: charDelay,
              duration: 0.2,
              ease: 'easeOut'
            }}
            style={{
              display: 'inline-block',
              position: 'relative'
            }}
          >
            {/* Glitching random character layer */}
            <motion.span
              initial={{ opacity: 1 }}
              animate={shouldAnimate ? { opacity: 0 } : { opacity: 1 }}
              transition={{
                delay: charDelay,
                duration: 0.15,
                ease: 'easeOut'
              }}
              style={{
                position: 'absolute',
                inset: 0,
                color: 'var(--accent-cyan)',
                filter: 'blur(1px)',
                opacity: 0.6
              }}
            >
              {randomChars[i]}
            </motion.span>

            {/* Main character with decode effect */}
            <motion.span
              initial={{
                opacity: 0,
                filter: 'blur(4px)',
                textShadow: '-2px 0 0 var(--accent-cyan), 2px 0 0 var(--accent-pink)'
              }}
              animate={shouldAnimate ? {
                opacity: 1,
                filter: 'blur(0px)',
                textShadow: 'none'
              } : {
                opacity: 0,
                filter: 'blur(4px)',
                textShadow: '-2px 0 0 var(--accent-cyan), 2px 0 0 var(--accent-pink)'
              }}
              transition={{
                delay: charDelay + 0.1,
                duration: 0.4,
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
              style={{ display: 'inline-block' }}
            >
              {/* Subtle jitter effect */}
              <motion.span
                animate={shouldAnimate ? {
                  x: [0, -0.5, 0.5, 0],
                  y: [0, 0.5, -0.5, 0]
                } : {
                  x: 0,
                  y: 0
                }}
                transition={{
                  delay: charDelay + 0.05,
                  duration: 0.2,
                  times: [0, 0.33, 0.66, 1],
                  ease: 'easeInOut'
                }}
                style={{ display: 'inline-block' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            </motion.span>
          </motion.span>
        );
      })}
    </span>
  );
}
