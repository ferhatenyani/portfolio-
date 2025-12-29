import { motion } from 'framer-motion';
import PixelBorder from '../components/PixelBorder';
import PixelDegrade from '../components/PixelDegrade';
import AnimatedText from '../components/AnimatedText';

/**
 * About Section - Option 3: "Data Chip" - Compact Module Design
 * Bio structured like a futuristic ID card/data chip with modules
 */
export default function AboutOption3() {
  const techStack = ['React', 'TypeScript', 'Figma', 'Framer Motion', 'Tailwind'];

  return (
    <section id="about-option-3" className="relative py-16 md:py-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent-pink)] to-transparent opacity-30" />

      {/* Label */}
      <div className="max-w-6xl mx-auto mb-4">
        <span className="text-xs text-[var(--accent-cyan)] font-mono">OPTION 3: DATA CHIP</span>
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

        {/* Data Chip Container */}
        <div className="max-w-md mx-auto">
          <PixelDegrade delay={0.4}>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {/* Main Chip Card with notched corners */}
              <div
                className="relative bg-[var(--bg-secondary)] overflow-hidden"
                style={{
                  clipPath: 'polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)',
                }}
              >
                <PixelBorder delay={0.5}>
                  {/* Header Module - Profile Label */}
                  <motion.div
                    className="bg-[var(--bg-tertiary)] p-4 border-b-2 border-[var(--accent-cyan)]"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {/* Pixel Avatar Placeholder */}
                        <motion.div
                          className="w-12 h-12 bg-gradient-to-br from-[var(--accent-cyan)] to-[var(--accent-pink)] relative"
                          initial={{ rotate: 0 }}
                          whileInView={{ rotate: 360 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                        >
                          <div className="absolute inset-1 bg-[var(--bg-tertiary)]" />
                          <div className="absolute inset-2 bg-gradient-to-br from-[var(--accent-cyan)] to-[var(--accent-pink)]" />
                        </motion.div>

                        <div>
                          <p className="text-xs font-mono text-[var(--text-tertiary)] uppercase tracking-wider">
                            PROFILE ID
                          </p>
                          <p
                            className="text-lg font-bold text-[var(--accent-cyan)]"
                            style={{ fontFamily: 'var(--font-tech)' }}
                          >
                            FERHATEN
                          </p>
                        </div>
                      </div>

                      {/* Status Indicator */}
                      <div className="flex items-center gap-2">
                        <motion.div
                          className="w-2 h-2 bg-[var(--accent-cyan)]"
                          animate={{
                            opacity: [1, 0.3, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        <span className="text-xs font-mono text-[var(--accent-cyan)]">ACTIVE</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Bio Module - Scrollable Content */}
                  <motion.div
                    className="p-6 max-h-64 overflow-y-auto hide-scrollbar"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="space-y-4 text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
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

                    {/* Custom Pixel Scrollbar Indicator */}
                    <motion.div
                      className="absolute right-2 top-32 bottom-2 w-1 bg-[var(--bg-tertiary)]"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.0 }}
                    >
                      <motion.div
                        className="w-full h-8 bg-[var(--accent-pink)]"
                        animate={{
                          y: ['0%', '100%', '0%'],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  </motion.div>

                  {/* Bottom Stats Module */}
                  <motion.div
                    className="bg-[var(--bg-tertiary)] p-4 border-t-2 border-[var(--accent-pink)]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.0 }}
                  >
                    <p className="text-xs font-mono text-[var(--text-tertiary)] uppercase tracking-wider mb-2">
                      STACK
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {techStack.map((tech, i) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 text-xs font-mono bg-[var(--bg-secondary)] text-[var(--accent-cyan)] border border-[var(--accent-cyan)]"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 1.1 + i * 0.1 }}
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: 'var(--accent-cyan)',
                            color: 'var(--bg-primary)',
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </PixelBorder>

                {/* Circuit Line Decorations */}
                <svg
                  className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20"
                  style={{ mixBlendMode: 'screen' }}
                >
                  <motion.line
                    x1="0"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                    stroke="var(--accent-cyan)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, duration: 1.5 }}
                  />
                  <motion.line
                    x1="50%"
                    y1="0"
                    x2="50%"
                    y2="100%"
                    stroke="var(--accent-pink)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9, duration: 1.5 }}
                  />
                </svg>
              </div>

              {/* Corner Notch Accents */}
              <motion.div
                className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[var(--accent-cyan)]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.3 }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[var(--accent-pink)]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.3 }}
              />

              {/* Hover Tilt Effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                whileHover={{
                  rotateX: 2,
                  rotateY: 2,
                }}
                transition={{ duration: 0.3 }}
                style={{ perspective: 1000 }}
              />
            </motion.div>
          </PixelDegrade>
        </div>

        {/* Bottom Pixel Separator */}
        <motion.div
          className="mt-12 md:mt-14 h-px bg-gradient-to-r from-transparent via-[var(--accent-cyan)] to-transparent opacity-30"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4, duration: 1 }}
        />
      </div>
    </section>
  );
}
