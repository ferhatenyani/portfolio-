import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';
import PixelThemeBlock from '../components/PixelThemeBlock';

/**
 * Hero Section - OPTIMIZED: Retro-Futuristic Terminal Boot
 * Faster parallel text reveal with reduced base delay for quicker load perception
 */
export default function Hero() {
  // OPTIMIZED: Reduced base delay from 0.3 to 0.2 for faster initial render
  const baseDelay = 0.2;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--gradient-start)] via-[var(--bg-secondary)] to-[var(--gradient-end)]" />

      {/* Pixel Grid Overlay */}
      <div className="absolute inset-0 pixel-grid-bg opacity-10" />

      {/* Floating Pixel Elements - GPU accelerated */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-[var(--accent-cyan)]"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-[var(--accent-pink)]"
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
        style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
      />

      {/* Name Label - Top Left UI Tag */}
      <motion.div
        className="absolute top-8 left-8 z-20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <div className="flex items-center gap-2 text-[var(--text-tertiary)] text-sm font-mono">
          <div className="w-2 h-2 bg-[var(--accent-cyan)] animate-pulse" />
          <span className="uppercase tracking-wider opacity-60">
            Ferhaten Yani
          </span>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* System Boot Indicator */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-12 text-[var(--text-tertiary)] text-xs font-mono uppercase tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0, duration: 0.3 }}
        >
          <div className="w-1 h-1 bg-[var(--accent-cyan)] animate-pulse" />
          <span>System Initializing</span>
        </motion.div>

        {/* Primary Role/Title - MAIN FOCUS - Full variant with CyclingChar */}
        <h1
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
          style={{ fontFamily: 'var(--font-pixel)' }}
        >
          <AnimatedText delay={baseDelay} stagger={0.028} scrollTrigger={false} glitchIntensity="high" variant="full">
            UI/UX DESIGNER
          </AnimatedText>
          <br />
          <AnimatedText delay={baseDelay} stagger={0.028} scrollTrigger={false} glitchIntensity="high" variant="full">
            FRONT-END DEV
          </AnimatedText>
        </h1>

        {/* Subtitle - Simple variant (no CyclingChar) */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: baseDelay, duration: 0.4 }}
        >
          <p
            className="text-xl md:text-2xl text-[var(--text-secondary)] tracking-wide"
            style={{ fontFamily: 'var(--font-tech)' }}
          >
            <AnimatedText delay={baseDelay + 0.4} stagger={0.02} scrollTrigger={false} glitchIntensity="medium" variant="simple">
              Computer Science Student
            </AnimatedText>
          </p>
        </motion.div>

        {/* Tagline - Simple variant (no CyclingChar) */}
        <div className="text-base md:text-lg text-[var(--text-secondary)] max-w-3xl mx-auto mb-12 leading-relaxed">
          <AnimatedText delay={baseDelay + 0.6} stagger={0.012} scrollTrigger={false} glitchIntensity="low" variant="simple" className="block">
            Crafting distinctive digital experiences where thoughtful design
          </AnimatedText>
          <AnimatedText delay={baseDelay + 0.6} stagger={0.012} scrollTrigger={false} glitchIntensity="low" variant="simple" className="block">
            meets fluid motion. Specializing in animation-driven interfaces
          </AnimatedText>
          <AnimatedText delay={baseDelay + 0.6} stagger={0.012} scrollTrigger={false} glitchIntensity="low" variant="simple" className="block">
            that feel alive and intentional.
          </AnimatedText>
        </div>

        {/* CTA Button - Terminal Style - OPTIMIZED */}
        <PixelThemeBlock delay={0.2}>
          <motion.a
            href="#contact"
            className="inline-block relative px-10 py-4 bg-transparent border-2 border-[var(--accent-cyan)] text-[var(--accent-cyan)] font-bold text-base tracking-wider overflow-hidden group cursor-pointer"
            style={{ fontFamily: 'var(--font-pixel)', willChange: 'transform', transform: 'translateZ(0)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: baseDelay + 1.2, duration: 0.4 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <span className="relative z-10">INITIALIZE CONTACT</span>

            {/* Hover Fill Effect - GPU accelerated */}
            <motion.div
              className="absolute inset-0 bg-[var(--accent-cyan)]"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.25 }}
              style={{ originX: 0, willChange: 'transform', transform: 'translateZ(0)' }}
            />

            <span className="relative z-10 mix-blend-difference">INITIALIZE CONTACT</span>
          </motion.a>
        </PixelThemeBlock>

        {/* Scroll Indicator - OPTIMIZED */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: baseDelay + 1.5, duration: 0.8 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-[var(--text-tertiary)] rounded-full flex justify-center pt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{ willChange: 'transform', transform: 'translateZ(0)' }}
          >
            <motion.div
              className="w-1 h-3 bg-[var(--accent-cyan)] rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              style={{ willChange: 'opacity' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
