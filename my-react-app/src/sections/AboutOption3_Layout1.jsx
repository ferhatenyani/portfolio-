import { motion } from 'framer-motion';
import PixelBorder from '../components/PixelBorder';
import PixelDegrade from '../components/PixelDegrade';
import AnimatedText from '../components/AnimatedText';

/**
 * About Section - Layout 1: "Classic ID Card" - Horizontal Split
 * Photo on left, content on right for larger screens
 */
export default function AboutOption3_Layout1() {
  const dataFields = [
    { label: 'LOCATION', value: 'Algeria', icon: '📍' },
    { label: 'AGE', value: '23', icon: '🎂' },
    { label: 'PASSION', value: 'Design', icon: '💎' },
  ];

  return (
    <section id="about-layout-1" className="relative py-16 md:py-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent-pink)] to-transparent opacity-30" />

      {/* Label */}
      <div className="max-w-6xl mx-auto mb-4">
        <span className="text-xs text-[var(--accent-cyan)] font-mono">LAYOUT 1: CLASSIC ID CARD</span>
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

        {/* ID Card Container */}
        <div className="max-w-4xl mx-auto">
          <PixelDegrade delay={0.4}>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {/* Main Card with notched corners */}
              <div
                className="relative bg-[var(--bg-secondary)] overflow-hidden"
                style={{
                  clipPath: 'polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)',
                }}
              >
                <PixelBorder delay={0.5}>
                  {/* Card Content - Responsive Layout */}
                  <div className="flex flex-col md:flex-row">
                    {/* LEFT: Profile Photo Section */}
                    <motion.div
                      className="bg-[var(--bg-tertiary)] p-6 md:p-8 border-b-2 md:border-b-0 md:border-r-2 border-[var(--accent-cyan)] flex-shrink-0"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="flex flex-col items-center gap-4">
                        {/* Profile Picture */}
                        <motion.div
                          className="relative w-24 h-24 md:w-48 md:h-48 lg:w-56 lg:h-56 overflow-hidden"
                          initial={{ rotate: 0, scale: 0.9 }}
                          whileInView={{ rotate: 0, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.8, duration: 0.6 }}
                          style={{
                            clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)',
                          }}
                        >
                          <div className="absolute inset-0 border-2 border-[var(--accent-cyan)] z-10"
                               style={{
                                 clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)',
                               }}
                          />
                          <img
                            src="/profilePic2.JPG"
                            alt="Ferhaten"
                            className="w-full h-full object-cover"
                          />
                          {/* Glowing overlay */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-[var(--accent-cyan)] to-transparent opacity-0"
                            whileHover={{ opacity: 0.2 }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.div>

                        {/* Status Indicator */}
                        <div className="flex items-center gap-2 mt-2">
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

                    {/* RIGHT: Content Section */}
                    <div className="flex-1 flex flex-col">
                      {/* Header Module */}
                      <motion.div
                        className="bg-[var(--bg-tertiary)] p-4 md:p-5 border-b-2 border-[var(--accent-cyan)]"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                      >
                        <p className="text-xs font-mono text-[var(--text-tertiary)] uppercase tracking-wider">
                          PROFILE ID
                        </p>
                        <p
                          className="text-2xl md:text-3xl font-bold text-[var(--accent-cyan)] mt-1"
                          style={{ fontFamily: 'var(--font-tech)' }}
                        >
                          FERHATEN
                        </p>
                      </motion.div>

                      {/* Bio Module */}
                      <motion.div
                        className="p-6 md:p-8 flex-1"
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
                      </motion.div>

                      {/* Data Fields Module */}
                      <motion.div
                        className="bg-[var(--bg-tertiary)] p-4 md:p-5 border-t-2 border-[var(--accent-pink)]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.0 }}
                      >
                        <p className="text-xs font-mono text-[var(--text-tertiary)] uppercase tracking-wider mb-3">
                          DATA FIELDS
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {dataFields.map((field, i) => (
                            <motion.div
                              key={field.label}
                              className="flex items-center gap-2 px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--accent-cyan)]"
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
                              <span className="text-lg">{field.icon}</span>
                              <div className="flex-1">
                                <p className="text-xs font-mono text-[var(--text-tertiary)] uppercase">
                                  {field.label}
                                </p>
                                <p className="text-sm font-bold text-[var(--accent-cyan)]">
                                  {field.value}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </PixelBorder>

                {/* Circuit Line Decorations */}
                <svg
                  className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10"
                  style={{ mixBlendMode: 'screen' }}
                >
                  <motion.line
                    x1="0"
                    y1="30%"
                    x2="100%"
                    y2="30%"
                    stroke="var(--accent-cyan)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, duration: 1.5 }}
                  />
                  <motion.line
                    x1="0"
                    y1="70%"
                    x2="100%"
                    y2="70%"
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
