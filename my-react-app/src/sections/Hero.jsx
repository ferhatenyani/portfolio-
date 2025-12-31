import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';
import PixelThemeBlock from '../components/PixelThemeBlock';

/**
 * Hero Section - OPTIMIZED & RESPONSIVE: Vertical Neon Cityscape
 * Mobile-first design with vertical neon sign (320px+)
 * Transitions to horizontal layout on desktop (1024px+)
 * GPU-accelerated animations for 60fps performance
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

      {/* Floating Pixel Elements - GPU accelerated - Repositioned for mobile */}
      <motion.div
        className="absolute top-1/4 right-1/4 md:left-1/4 w-4 h-4 bg-[var(--accent-cyan)]"
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

      {/* Status Label - Responsive positioning */}
      <motion.div
        className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8 z-20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <div className="flex items-center gap-2 text-[var(--text-tertiary)] text-xs sm:text-sm font-mono">
          <div className="w-2 h-2 bg-[var(--accent-cyan)] animate-pulse" />
          <span className="uppercase tracking-wider opacity-60 hidden sm:inline">
            Cs student & Developer
          </span>
          <span className="uppercase tracking-wider opacity-60 sm:hidden">
            Dev
          </span>
        </div>
      </motion.div>

      {/* Main Content Container - RESPONSIVE LAYOUT */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">

        {/* MOBILE & TABLET: Vertical Neon Cityscape Layout (320px - 1023px) */}
        <div className="lg:hidden w-full max-w-2xl flex items-center gap-6 sm:gap-8 min-h-[80vh]">

          {/* LEFT: Dual Vertical Neon Signs - FERHATEN & YANI */}
          <div className="flex-shrink-0 relative flex items-center gap-3 sm:gap-4">

            {/* FERHATEN - Primary Neon Sign */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: baseDelay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Vertical Name with Cyan Neon Glow - Auto-scaled */}
              <h1
                className="writing-mode-vertical font-bold tracking-tight"
                style={{
                  fontFamily: 'var(--font-pixel)',
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  letterSpacing: '0.1em',
                  fontSize: 'clamp(2.5rem, 8vh, 6rem)',
                  textShadow: `
                    0 0 6px var(--accent-cyan),
                    0 0 12px rgba(0, 255, 159, 0.4),
                    0 0 18px rgba(0, 255, 159, 0.2)
                  `
                }}
              >
                <AnimatedText delay={baseDelay} stagger={0.035} scrollTrigger={false} glitchIntensity="high" variant="full">
                  FERHATEN
                </AnimatedText>
              </h1>

              {/* Cyan Neon tube border effect */}
              <motion.div
                className="absolute -left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[var(--accent-cyan)] to-transparent"
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scaleY: 1
                }}
                transition={{
                  scaleY: { delay: baseDelay + 0.2, duration: 0.8 },
                  opacity: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
                }}
                style={{
                  originY: 0,
                  boxShadow: '0 0 10px var(--accent-cyan), 0 0 20px var(--accent-cyan)'
                }}
              />
            </motion.div>

            {/* YANI - Secondary Neon Sign (Smaller, Pink Glow) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: baseDelay + 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Vertical Last Name with Pink/Magenta Neon Glow - Smaller & Auto-scaled */}
              <h1
                className="writing-mode-vertical font-bold tracking-tight opacity-90"
                style={{
                  fontFamily: 'var(--font-pixel)',
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  letterSpacing: '0.1em',
                  fontSize: 'clamp(1.75rem, 5.5vh, 4rem)',
                  textShadow: `
                    0 0 6px rgba(200, 0, 200, 1),
                    0 0 12px rgba(180, 0, 220, 0.5),
                    0 0 18px rgba(160, 0, 240, 0.28)
                  `
                }}
              >
                <AnimatedText delay={baseDelay + 0.1} stagger={0.04} scrollTrigger={false} glitchIntensity="medium" variant="full">
                  YANI
                </AnimatedText>
              </h1>

              {/* Pink Neon tube border effect */}
              <motion.div
                className="absolute -left-1.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[var(--accent-pink)] to-transparent"
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{
                  opacity: [0.25, 0.7, 0.25],
                  scaleY: 1
                }}
                transition={{
                  scaleY: { delay: baseDelay + 0.3, duration: 0.8 },
                  opacity: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' }
                }}
                style={{
                  originY: 0,
                  boxShadow: '0 0 8px var(--accent-pink), 0 0 16px var(--accent-pink)'
                }}
              />
            </motion.div>

          </div>

          {/* RIGHT: Content Stack */}
          <div className="flex-1 flex flex-col justify-center space-y-6 sm:space-y-8">

            {/* Role - Diagonal Cut Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: baseDelay + 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div
                className="bg-[var(--bg-secondary)]/40 backdrop-blur-sm border-l-4 border-[var(--accent-pink)] p-4 sm:p-5"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)',
                  boxShadow: '4px 4px 0 rgba(255, 0, 153, 0.2)'
                }}
              >
                <h2
                  className="text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--text-secondary)] leading-tight"
                  style={{ fontFamily: 'var(--font-pixel)' }}
                >
                  <AnimatedText delay={baseDelay + 0.4} stagger={0.022} scrollTrigger={false} glitchIntensity="medium" variant="full">
                    UI/UX Designer
                  </AnimatedText>
                </h2>
                <h2
                  className="text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--text-secondary)] leading-tight mt-1"
                  style={{ fontFamily: 'var(--font-pixel)' }}
                >
                  <AnimatedText delay={baseDelay + 0.5} stagger={0.022} scrollTrigger={false} glitchIntensity="medium" variant="full">
                    Front-End Dev
                  </AnimatedText>
                </h2>
              </div>
            </motion.div>

            {/* Description - Glass Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: baseDelay + 0.6, duration: 0.6, ease: 'easeOut' }}
              className="relative"
            >
              <div
                className="bg-[var(--bg-tertiary)]/30 backdrop-blur-md border border-[var(--accent-cyan)]/30 p-4 sm:p-5 pixel-grid-bg"
                style={{
                  boxShadow: '0 8px 32px rgba(0, 255, 159, 0.1)'
                }}
              >
                <p
                  className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-tech)',
                    letterSpacing: '0.015em',
                    opacity: 0.92
                  }}
                >
                  <AnimatedText delay={baseDelay + 0.7} stagger={0.012} scrollTrigger={false} glitchIntensity="low" variant="simple">
                    Designing in Figma, building in TypeScript, and animating with Framer Motion — shipping polished, performant interfaces.
                  </AnimatedText>
                </p>
              </div>
            </motion.div>

            {/* CTA Button - Floating Card Effect */}
            <PixelThemeBlock delay={0.2}>
              <motion.a
                href="#projects"
                className="inline-block relative px-8 sm:px-12 py-4 sm:py-5 bg-transparent border-2 border-[var(--accent-cyan)] text-[var(--accent-cyan)] font-bold text-xs sm:text-sm tracking-[0.15em] overflow-hidden group cursor-pointer shadow-lg shadow-[var(--accent-cyan)]/20"
                style={{
                  fontFamily: 'var(--font-pixel)',
                  willChange: 'transform',
                  transform: 'translateZ(0)',
                  boxShadow: '0 10px 30px rgba(0, 255, 159, 0.3)'
                }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: baseDelay + 1.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: '0 20px 40px rgba(0, 255, 255, 0.4)',
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98, y: 0 }}
              >
                <span className="relative z-10 group-hover:text-[var(--bg-primary)] transition-colors duration-300">
                  VIEW MY WORK
                </span>

                {/* Hover Fill Effect */}
                <motion.div
                  className="absolute inset-0 bg-[var(--accent-cyan)]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  style={{ originX: 0, willChange: 'transform', transform: 'translateZ(0)' }}
                />
              </motion.a>
            </PixelThemeBlock>
          </div>
        </div>

        {/* DESKTOP: Horizontal Neon Billboard Layout (1024px+) - Coherent with Mobile */}
        <div className="hidden lg:flex w-full max-w-7xl mx-auto items-center gap-12 xl:gap-16">

          {/* LEFT: Horizontal Neon Name Signs */}
          <div className="flex-shrink-0 relative">

            {/* FERHATEN - Primary Horizontal Neon Sign */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: baseDelay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-6"
            >
              <h1
                className="font-bold tracking-tight text-[5rem] xl:text-[6rem]"
                style={{
                  fontFamily: 'var(--font-pixel)',
                  letterSpacing: '0.08em',
                  textShadow: `
                    0 0 6px var(--accent-cyan),
                    0 0 12px rgba(0, 255, 159, 0.4),
                    0 0 18px rgba(0, 255, 159, 0.2)
                  `
                }}
              >
                <AnimatedText delay={baseDelay} stagger={0.035} scrollTrigger={false} glitchIntensity="high" variant="full">
                  FERHATEN
                </AnimatedText>
              </h1>

              {/* Cyan Neon tube border effect - Top */}
              <motion.div
                className="absolute left-0 right-0 -top-3 h-1 bg-gradient-to-r from-transparent via-[var(--accent-cyan)] to-transparent"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scaleX: 1
                }}
                transition={{
                  scaleX: { delay: baseDelay + 0.2, duration: 0.8 },
                  opacity: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
                }}
                style={{
                  originX: 0,
                  boxShadow: '0 0 10px var(--accent-cyan), 0 0 20px var(--accent-cyan)'
                }}
              />
            </motion.div>

            {/* YANI - Secondary Horizontal Neon Sign */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: baseDelay + 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <h1
                className="font-bold tracking-tight text-[3.5rem] xl:text-[4.25rem] opacity-90"
                style={{
                  fontFamily: 'var(--font-pixel)',
                  letterSpacing: '0.08em',
                  textShadow: `
                    0 0 6px rgba(200, 0, 200, 1),
                    0 0 12px rgba(180, 0, 220, 0.5),
                    0 0 18px rgba(160, 0, 240, 0.28)
                  `
                }}
              >
                <AnimatedText delay={baseDelay + 0.1} stagger={0.04} scrollTrigger={false} glitchIntensity="medium" variant="full">
                  YANI
                </AnimatedText>
              </h1>

              {/* Pink Neon tube border effect - Bottom */}
              <motion.div
                className="absolute left-0 right-0 -bottom-2 h-0.5 bg-gradient-to-r from-transparent via-[var(--accent-pink)] to-transparent"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{
                  opacity: [0.25, 0.7, 0.25],
                  scaleX: 1
                }}
                transition={{
                  scaleX: { delay: baseDelay + 0.3, duration: 0.8 },
                  opacity: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' }
                }}
                style={{
                  originX: 0,
                  boxShadow: '0 0 8px var(--accent-pink), 0 0 16px var(--accent-pink)'
                }}
              />
            </motion.div>

          </div>

          {/* RIGHT: Content Stack - Matching Mobile Design */}
          <div className="flex-1 flex flex-col justify-center space-y-8 xl:space-y-10">

            {/* Role - Diagonal Cut Card (matching mobile) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: baseDelay + 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div
                className="bg-[var(--bg-secondary)]/40 backdrop-blur-sm border-l-4 border-[var(--accent-pink)] p-6 xl:p-8"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 97% 100%, 0 100%)',
                  boxShadow: '6px 6px 0 rgba(255, 0, 153, 0.2)'
                }}
              >
                <h2
                  className="text-4xl xl:text-5xl font-semibold text-[var(--text-secondary)] leading-tight"
                  style={{ fontFamily: 'var(--font-pixel)' }}
                >
                  <AnimatedText delay={baseDelay + 0.4} stagger={0.022} scrollTrigger={false} glitchIntensity="medium" variant="full">
                    UI/UX Designer
                  </AnimatedText>
                </h2>
                <h2
                  className="text-4xl xl:text-5xl font-semibold text-[var(--text-secondary)] leading-tight mt-2"
                  style={{ fontFamily: 'var(--font-pixel)' }}
                >
                  <AnimatedText delay={baseDelay + 0.5} stagger={0.022} scrollTrigger={false} glitchIntensity="medium" variant="full">
                    Front-End Dev
                  </AnimatedText>
                </h2>
              </div>
            </motion.div>

            {/* Description - Glass Card (matching mobile) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: baseDelay + 0.6, duration: 0.6, ease: 'easeOut' }}
              className="relative"
            >
              <div
                className="bg-[var(--bg-tertiary)]/30 backdrop-blur-md border border-[var(--accent-cyan)]/30 p-6 xl:p-8 pixel-grid-bg"
                style={{
                  boxShadow: '0 8px 32px rgba(0, 255, 159, 0.1)'
                }}
              >
                <p
                  className="text-lg xl:text-xl text-[var(--text-secondary)] leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-tech)',
                    letterSpacing: '0.015em',
                    opacity: 0.92
                  }}
                >
                  <AnimatedText delay={baseDelay + 0.7} stagger={0.012} scrollTrigger={false} glitchIntensity="low" variant="simple">
                    Designing in Figma, building in TypeScript, and animating with Framer Motion — shipping polished, performant interfaces.
                  </AnimatedText>
                </p>
              </div>
            </motion.div>

            {/* CTA Button - Floating Card Effect (matching mobile) */}
            <PixelThemeBlock delay={0.2}>
              <motion.a
                href="#projects"
                className="inline-block relative px-12 xl:px-14 py-5 bg-transparent border-2 border-[var(--accent-cyan)] text-[var(--accent-cyan)] font-bold text-base xl:text-lg tracking-[0.15em] overflow-hidden group cursor-pointer shadow-lg shadow-[var(--accent-cyan)]/20"
                style={{
                  fontFamily: 'var(--font-pixel)',
                  willChange: 'transform',
                  transform: 'translateZ(0)',
                  boxShadow: '0 10px 30px rgba(0, 255, 159, 0.3)'
                }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: baseDelay + 1.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: '0 20px 40px rgba(0, 255, 255, 0.4)',
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98, y: 0 }}
              >
                <span className="relative z-10 group-hover:text-[var(--bg-primary)] transition-colors duration-300">
                  VIEW MY WORK
                </span>

                {/* Hover Fill Effect */}
                <motion.div
                  className="absolute inset-0 bg-[var(--accent-cyan)]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  style={{ originX: 0, willChange: 'transform', transform: 'translateZ(0)' }}
                />
              </motion.a>
            </PixelThemeBlock>
          </div>

        </div>

      </div>

      {/* Scroll Indicator - OPTIMIZED - Hide on very small screens */}
      <motion.div
        className="hidden sm:block absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2"
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
    </section>
  );
}
