import { motion, useInView, useAnimationFrame } from 'framer-motion';
import { useState, useRef, useMemo } from 'react';
import { useTheme } from '../contexts/ThemeContext';

/**
 * AnimatedText - OPTIMIZED: Terminal-style typing animation
 * Fast, crisp character reveals with no blur or easing
 * Minimal DOM nesting for performance
 * Enhanced with cycling random character decoding effect
 *
 * NEW: variant prop controls animation complexity
 * - 'full' (default): Typing effect + CyclingChar decoding (for headers)
 * - 'simple': Typing effect only, no CyclingChar (for body text)
 */
export default function AnimatedText({
  children,
  delay = 0,
  stagger = 0.03,
  className = '',
  triggerOnce = true,
  scrollTrigger = true,
  themeGlitch = true,
  glitchIntensity = 'medium',
  decodeDuration = 0.5,
  variant = 'full'
}) {
  const text = String(children);
  const letters = text.split('');
  const isSimpleVariant = variant === 'simple';

  // Memoize random character sequences for cycling decoding effect
  const randomChars = useMemo(() =>
    isSimpleVariant ? [] : letters.map(() => {
      const count = 6 + Math.floor(Math.random() * 4);
      return Array.from({ length: count }, () =>
        String.fromCharCode(33 + Math.floor(Math.random() * 94))
      );
    }),
    [letters.length, isSimpleVariant]
  );

  const randomDelays = useMemo(() =>
    letters.map(() => Math.random() * 0.05),
    [letters.length]
  );

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: triggerOnce,
    margin: "-80px",
    amount: 0.3
  });

  const { isTransitioning, transitionId } = useTheme();
  const shouldAnimate = scrollTrigger ? isInView : true;

  // Glitch settings for theme transitions
  const glitchSettings = useMemo(() => ({
    low: { offset: 1, opacity: 0.3, duration: 0.15 },
    medium: { offset: isSimpleVariant ? 0.5 : 2, opacity: isSimpleVariant ? 0.25 : 0.5, duration: isSimpleVariant ? 0.12 : 0.2 },
    high: { offset: 3, opacity: 0.6, duration: 0.25 }
  }), [isSimpleVariant]);

  const settings = glitchSettings[glitchIntensity];

  return (
    <span ref={ref} className={className}>
      {letters.map((char, i) => {
        const charDelay = delay + (i * stagger);
        const themeDelay = randomDelays[i];
        const isSpace = char === ' ';

        return (
          <motion.span
            key={`${i}-${transitionId}`}
            initial={{ opacity: 0 }}
            animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
            transition={{
              delay: charDelay,
              duration: 0.05,
              ease: 'linear'
            }}
            style={{
              display: 'inline-block',
              position: 'relative',
              whiteSpace: isSpace ? 'pre' : 'normal',
              transform: 'translateZ(0)'
            }}
          >
            {/* Theme transition glitch effect - only render when transitioning */}
            {themeGlitch && isTransitioning && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, settings.opacity, 0],
                  x: [-settings.offset, settings.offset, 0]
                }}
                transition={{
                  delay: themeDelay,
                  duration: settings.duration,
                  ease: 'linear'
                }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  color: i % 2 === 0 ? 'var(--accent-cyan)' : 'var(--accent-pink)',
                  pointerEvents: 'none',
                  transform: 'translateZ(0)'
                }}
              >
                {isSpace ? '\u00A0' : char}
              </motion.span>
            )}

            {/* Cycling random character decoding effect - only for 'full' variant */}
            {shouldAnimate && !isSpace && !isSimpleVariant && (
              <CyclingChar
                chars={randomChars[i]}
                delay={charDelay}
                duration={decodeDuration}
              />
            )}

            {isSpace ? '\u00A0' : char}
          </motion.span>
        );
      })}
    </span>
  );
}

/**
 * CyclingChar - Optimized component that cycles through random characters
 * Uses requestAnimationFrame for smooth 60fps cycling without re-renders
 */
function CyclingChar({ chars, delay, duration }) {
  const [currentChar, setCurrentChar] = useState(chars[0]);
  const startTimeRef = useRef(null);
  const indexRef = useRef(0);

  useAnimationFrame((time) => {
    // Start timing after delay
    if (!startTimeRef.current) {
      if (time >= delay * 1000) {
        startTimeRef.current = time;
      }
      return;
    }

    const elapsed = (time - startTimeRef.current) / 1000;

    // Stop after duration
    if (elapsed >= duration) {
      return;
    }

    // Cycle through characters at ~60fps (every frame)
    const newIndex = Math.floor((elapsed / duration) * chars.length);
    if (newIndex !== indexRef.current && newIndex < chars.length) {
      indexRef.current = newIndex;
      setCurrentChar(chars[newIndex]);
    }
  });

  return (
    <motion.span
      initial={{ opacity: 1.5 }}
      animate={{ opacity: 0 }}
      transition={{
        delay,
        duration,
        ease: 'linear'
      }}
      style={{
        position: 'absolute',
        inset: 0,
        color: 'var(--accent-cyan)',
        filter: 'blur(0.1px)',
        pointerEvents: 'none'
      }}
    >
      {currentChar}
    </motion.span>
  );
}
