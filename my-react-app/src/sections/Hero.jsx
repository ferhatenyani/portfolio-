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
            Cs student & Developer
          </span>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        {/* Name - PRIMARY FOCUS - Maximum Impact */}
        <h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8.5rem] font-bold mb-5 leading-[1.05] tracking-tight"
          style={{ fontFamily: 'var(--font-pixel)' }}
        >
          <AnimatedText delay={baseDelay} stagger={0.028} scrollTrigger={false} glitchIntensity="high" variant="full">
            Ferhaten Yani
          </AnimatedText>
        </h1>

        {/* Role Title - Clear Secondary Hierarchy */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-10 text-[var(--text-secondary)] leading-[1.25] tracking-wide"
          style={{ fontFamily: 'var(--font-pixel)' }}
        >
          <AnimatedText delay={baseDelay + 0.2} stagger={0.025} scrollTrigger={false} glitchIntensity="medium" variant="full">
            UI/UX Designer & Front-End Developer
          </AnimatedText>
        </h2>

        

        {/* Value Proposition - Concise & Impactful */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: baseDelay + 0.5, duration: 0.5, ease: 'easeOut' }}
        >
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-[var(--text-secondary)] leading-relaxed max-w-4xl mx-auto"
            style={{
              fontFamily: 'var(--font-tech)',
              letterSpacing: '0.015em',
              opacity: 0.92
            }}
          >
            <AnimatedText delay={baseDelay + 0.6} stagger={0.015} scrollTrigger={false} glitchIntensity="low" variant="simple">
              Crafting intuitive, high-performance web experiences with React, Next.js & modern design systems.
            </AnimatedText>
          </p>
        </motion.div>

        {/* CTA Button - Professional & Prominent */}
        <PixelThemeBlock delay={0.2}>
          <motion.a
            href="#projects"
            className="inline-block relative px-14 py-5 bg-transparent border-2 border-[var(--accent-cyan)] text-[var(--accent-cyan)] font-bold text-sm sm:text-base lg:text-lg tracking-[0.15em] overflow-hidden group cursor-pointer shadow-lg shadow-[var(--accent-cyan)]/20"
            style={{ fontFamily: 'var(--font-pixel)', willChange: 'transform', transform: 'translateZ(0)' }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: baseDelay + 1.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{
              scale: 1.06,
              boxShadow: '0 20px 40px rgba(0, 255, 255, 0.3)',
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 group-hover:text-[var(--bg-primary)] transition-colors duration-300">
              VIEW MY WORK
            </span>

            {/* Hover Fill Effect - Smooth Professional Animation */}
            <motion.div
              className="absolute inset-0 bg-[var(--accent-cyan)]"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{ originX: 0, willChange: 'transform', transform: 'translateZ(0)' }}
            />
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
