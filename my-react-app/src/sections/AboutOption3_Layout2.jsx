import { motion } from 'framer-motion';
import PixelBorder from '../components/PixelBorder';
import PixelDegrade from '../components/PixelDegrade';
import AnimatedText from '../components/AnimatedText';

/**
 * About Section - Layout 2: "Military Dog Tag" - Asymmetric Corner Photo
 * Photo in top-left corner, content flows around it
 */
export default function AboutOption3_Layout2() {
  return (
    <section id="about-layout-2" className="relative py-16 md:py-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent-pink)] to-transparent opacity-30" />

      {/* Label */}
      <div className="max-w-6xl mx-auto mb-4">
        <span className="text-xs text-[var(--accent-pink)] font-mono">LAYOUT 2: MILITARY DOG TAG</span>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <PixelDegrade delay={0.2}>
          <motion.div className="mb-10 md:mb-12">
            <h2
              className="text-4xl md:text-5xl font-bold gradient-text glitch-text"
              style={{ fontFamily: 'var(--font-pixel)' }}
            >
              <AnimatedText delay={0.3} stagger={0.025} glitchIntensity="high" variant="full">
                About Me
              </AnimatedText>
            </h2>
          </motion.div>
        </PixelDegrade>

        {/* Dog Tag Card Container */}
        <div className="max-w-5xl mx-auto">
          <PixelDegrade delay={0.4}>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {/* Main Card with asymmetric notch */}
              <div
                className="relative bg-[var(--bg-secondary)] overflow-visible"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)',
                }}
              >
                <PixelBorder delay={0.5}>
                  {/* Mobile Layout: Vertical Stack */}
                  <div className="md:hidden">
                    {/* Header with Photo */}
                    <motion.div
                      className="bg-[var(--bg-tertiary)] p-6 border-b-2 border-[var(--accent-cyan)]"
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="flex items-center gap-4">
                        {/* Profile Photo */}
                        <motion.div
                          className="relative w-20 h-20 flex-shrink-0"
                          initial={{ rotate: -45, scale: 0.8 }}
                          whileInView={{ rotate: 0, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.7, duration: 0.6 }}
                          style={{
                            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                          }}
                        >
                          <div className="absolute inset-0 border-2 border-[var(--accent-pink)] z-10"
                               style={{
                                 clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                               }}
                          />
                          <img
                            src="/profilePic2.JPG"
                            alt="Ferhaten"
                            className="w-full h-full object-cover"
                          />
                        </motion.div>

                        {/* Name & Status */}
                        <div className="flex-1">
                          <p className="text-xs font-mono text-[var(--text-tertiary)] uppercase tracking-wider">
                            PROFILE ID
                          </p>
                          <p
                            className="text-2xl font-bold text-[var(--accent-pink)]"
                            style={{ fontFamily: 'var(--font-tech)' }}
                          >
                            FERHATEN
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <motion.div
                              className="w-2 h-2 bg-[var(--accent-cyan)]"
                              animate={{ opacity: [1, 0.3, 1] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <span className="text-xs font-mono text-[var(--accent-cyan)]">ACTIVE</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Bio */}
                    <motion.div
                      className="p-6"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 }}
                    >
                      <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                        <p>
                          Hey, I'm Ferhaten — a UI/UX designer and front-end developer obsessed with building digital experiences that are intuitive, performant, and visually striking.
                        </p>
                        <p>
                          I bridge thoughtful design with clean, production-ready code using tools like Figma, React, TypeScript, Tailwind, and Framer Motion. The result? Interfaces that feel alive, load instantly, and solve real problems.
                        </p>
                        <p>
                          Currently wrapping up my Computer Science degree while freelancing and shipping side projects that reach actual users. I thrive at the intersection of creativity and technical precision — turning complex ideas into seamless products.
                        </p>
                        <p className="text-[var(--accent-cyan)] font-medium mt-6">
                          Let's build something great together.
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Desktop Layout: Asymmetric with Corner Photo */}
                  <div className="hidden md:block relative">
                    {/* Floating Corner Photo */}
                    <motion.div
                      className="absolute -top-8 -left-8 z-20"
                      initial={{ rotate: -45, scale: 0.8, opacity: 0 }}
                      whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
                    >
                      <div
                        className="relative w-40 h-40 lg:w-48 lg:h-48"
                        style={{
                          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                        }}
                      >
                        <div className="absolute inset-0 border-4 border-[var(--accent-pink)] z-10"
                             style={{
                               clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                             }}
                        />
                        <img
                          src="/profilePic2.JPG"
                          alt="Ferhaten"
                          className="w-full h-full object-cover"
                        />
                        {/* Glowing Effect */}
                        <motion.div
                          className="absolute inset-0 bg-[var(--accent-pink)] opacity-0"
                          whileHover={{ opacity: 0.3 }}
                          transition={{ duration: 0.3 }}
                          style={{
                            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                          }}
                        />
                      </div>
                    </motion.div>

                    {/* Header Bar */}
                    <motion.div
                      className="bg-[var(--bg-tertiary)] p-5 pl-40 lg:pl-52 border-b-2 border-[var(--accent-cyan)]"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 }}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-mono text-[var(--text-tertiary)] uppercase tracking-wider">
                            CLEARANCE LEVEL: DESIGNER/DEVELOPER
                          </p>
                          <p
                            className="text-3xl lg:text-4xl font-bold text-[var(--accent-pink)] mt-1"
                            style={{ fontFamily: 'var(--font-tech)' }}
                          >
                            FERHATEN
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <motion.div
                            className="w-3 h-3 bg-[var(--accent-cyan)]"
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          />
                          <span className="text-sm font-mono text-[var(--accent-cyan)]">ACTIVE</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Bio Content */}
                    <motion.div
                      className="p-8 lg:p-10"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 }}
                    >
                      <div className="space-y-4 text-base lg:text-lg text-[var(--text-secondary)] leading-relaxed">
                        <p>
                          Hey, I'm Ferhaten — a UI/UX designer and front-end developer obsessed with building digital experiences that are intuitive, performant, and visually striking.
                        </p>
                        <p>
                          I bridge thoughtful design with clean, production-ready code using tools like Figma, React, TypeScript, Tailwind, and Framer Motion. The result? Interfaces that feel alive, load instantly, and solve real problems.
                        </p>
                        <p>
                          Currently wrapping up my Computer Science degree while freelancing and shipping side projects that reach actual users. I thrive at the intersection of creativity and technical precision — turning complex ideas into seamless products.
                        </p>
                        <p className="text-[var(--accent-cyan)] font-medium text-lg lg:text-xl mt-6">
                          Let's build something great together.
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Terminal-Style Data Bar */}
                  <motion.div
                    className="bg-black p-4 border-t-2 border-[var(--accent-pink)]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.0 }}
                  >
                    <div className="font-mono text-xs md:text-sm flex flex-wrap items-center gap-2 md:gap-4">
                      <motion.span
                        className="text-[var(--accent-cyan)]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.1 }}
                      >
                        &gt; STATUS:
                      </motion.span>

                      <motion.span
                        className="text-[var(--accent-pink)] px-2 py-1 border border-[var(--accent-pink)]"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.2 }}
                      >
                        LOC:ALGERIA
                      </motion.span>

                      <motion.span
                        className="text-[var(--text-tertiary)]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.25 }}
                      >
                        |
                      </motion.span>

                      <motion.span
                        className="text-[var(--accent-pink)] px-2 py-1 border border-[var(--accent-pink)]"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.3 }}
                      >
                        AGE:23
                      </motion.span>

                      <motion.span
                        className="text-[var(--text-tertiary)]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.35 }}
                      >
                        |
                      </motion.span>

                      <motion.span
                        className="text-[var(--accent-pink)] px-2 py-1 border border-[var(--accent-pink)]"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.4 }}
                      >
                        FOCUS:DESIGN
                      </motion.span>

                      <motion.span
                        className="ml-auto text-[var(--accent-cyan)] hidden md:inline"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        _
                      </motion.span>
                    </div>
                  </motion.div>
                </PixelBorder>

                {/* Scanline Effect */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--accent-pink)] to-transparent opacity-50 blur-sm"
                  animate={{
                    y: ['0%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>

              {/* Corner Accent */}
              <motion.div
                className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[var(--accent-pink)]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5 }}
              />

              {/* Security Grid Overlay */}
              <svg
                className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5"
                style={{ mixBlendMode: 'screen' }}
              >
                <defs>
                  <pattern id="grid-layout2" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--accent-cyan)" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-layout2)" />
              </svg>
            </motion.div>
          </PixelDegrade>
        </div>

        {/* Bottom Pixel Separator */}
        <motion.div
          className="mt-12 md:mt-14 h-px bg-gradient-to-r from-transparent via-[var(--accent-pink)] to-transparent opacity-30"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.6, duration: 1 }}
        />
      </div>
    </section>
  );
}
