import { motion } from 'framer-motion';
import PixelBorder from '../components/PixelBorder';
import PixelDegrade from '../components/PixelDegrade';
import AnimatedText from '../components/AnimatedText';

/**
 * About Section - Layout 3: "Holo-Badge" - Center Photo with Data Overlay
 * Two-column grid with photo + data chips on left, bio on right
 */
export default function AboutOption3_Layout3() {
  const dataChips = [
    { label: 'LOC', value: 'Algeria', color: 'cyan' },
    { label: 'AGE', value: '23', color: 'pink' },
    { label: 'PSN', value: 'Design', color: 'cyan' },
  ];

  return (
    <section id="about-layout-3" className="relative py-16 md:py-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent-pink)] to-transparent opacity-30" />

      {/* Label */}
      <div className="max-w-6xl mx-auto mb-4">
        <span className="text-xs text-[var(--accent-cyan)] font-mono">LAYOUT 3: HOLO-BADGE</span>
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

        {/* Holo-Badge Container */}
        <div className="max-w-5xl mx-auto">
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
                  clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)',
                }}
              >
                <PixelBorder delay={0.5}>
                  {/* Two-Column Layout (stacks on mobile) */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* LEFT COLUMN: Photo + Data Chips */}
                    <motion.div
                      className="relative bg-[var(--bg-tertiary)] p-6 lg:p-8 border-b-2 lg:border-b-0 lg:border-r-2 border-[var(--accent-cyan)] flex flex-col items-center justify-center"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                    >
                      {/* Holographic Photo Frame */}
                      <motion.div
                        className="relative mb-6"
                        initial={{ scale: 0.8, rotate: -5 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7, duration: 0.8, type: "spring" }}
                      >
                        {/* Glowing Border Container */}
                        <div className="relative p-1 bg-gradient-to-br from-[var(--accent-cyan)] via-[var(--accent-pink)] to-[var(--accent-cyan)]"
                             style={{
                               clipPath: 'polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)',
                             }}
                        >
                          {/* Inner Container */}
                          <div className="bg-[var(--bg-tertiary)] p-1"
                               style={{
                                 clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)',
                               }}
                          >
                            {/* Profile Image */}
                            <div
                              className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 overflow-hidden"
                              style={{
                                clipPath: 'polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)',
                              }}
                            >
                              <img
                                src="/profilePic2.JPG"
                                alt="Ferhaten"
                                className="w-full h-full object-cover"
                              />
                              {/* Holographic Overlay */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-cyan)] via-transparent to-[var(--accent-pink)] opacity-20"
                                animate={{
                                  opacity: [0.1, 0.3, 0.1],
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Corner Scanners */}
                        <motion.div
                          className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-[var(--accent-cyan)]"
                          animate={{
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        <motion.div
                          className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-[var(--accent-pink)]"
                          animate={{
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                          }}
                        />
                      </motion.div>

                      {/* Data Chips Overlaid */}
                      <div className="w-full max-w-xs space-y-3">
                        {dataChips.map((chip, i) => (
                          <motion.div
                            key={chip.label}
                            className={`relative bg-black/80 backdrop-blur-sm border-2 ${
                              chip.color === 'cyan'
                                ? 'border-[var(--accent-cyan)]'
                                : 'border-[var(--accent-pink)]'
                            } p-3 flex items-center justify-between`}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.9 + i * 0.1 }}
                            whileHover={{
                              scale: 1.05,
                              backgroundColor: chip.color === 'cyan'
                                ? 'var(--accent-cyan)'
                                : 'var(--accent-pink)',
                            }}
                          >
                            {/* Glowing Effect */}
                            <motion.div
                              className={`absolute inset-0 ${
                                chip.color === 'cyan'
                                  ? 'bg-[var(--accent-cyan)]'
                                  : 'bg-[var(--accent-pink)]'
                              } opacity-0`}
                              whileHover={{ opacity: 0.1 }}
                            />

                            <div className="flex items-center gap-3 relative z-10">
                              <motion.div
                                className={`w-2 h-2 ${
                                  chip.color === 'cyan'
                                    ? 'bg-[var(--accent-cyan)]'
                                    : 'bg-[var(--accent-pink)]'
                                }`}
                                animate={{
                                  opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: i * 0.3
                                }}
                              />
                              <span className="text-xs font-mono text-[var(--text-tertiary)] uppercase tracking-wider">
                                {chip.label}
                              </span>
                            </div>

                            <span
                              className={`text-lg font-bold ${
                                chip.color === 'cyan'
                                  ? 'text-[var(--accent-cyan)]'
                                  : 'text-[var(--accent-pink)]'
                              } relative z-10`}
                              style={{ fontFamily: 'var(--font-tech)' }}
                            >
                              {chip.value}
                            </span>

                            {/* Chip Corner Notch */}
                            <div
                              className="absolute bottom-0 right-0 w-3 h-3 bg-[var(--bg-secondary)]"
                              style={{
                                clipPath: 'polygon(0 100%, 100% 100%, 100% 0)',
                              }}
                            />
                          </motion.div>
                        ))}
                      </div>

                      {/* Decorative Grid Lines */}
                      <svg
                        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5"
                      >
                        <defs>
                          <pattern id="holo-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                            <circle cx="15" cy="15" r="1" fill="var(--accent-cyan)" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#holo-grid)" />
                      </svg>
                    </motion.div>

                    {/* RIGHT COLUMN: Bio Content */}
                    <div className="flex flex-col">
                      {/* Header Module */}
                      <motion.div
                        className="bg-[var(--bg-tertiary)] p-5 lg:p-6 border-b-2 border-[var(--accent-pink)]"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs font-mono text-[var(--text-tertiary)] uppercase tracking-wider">
                              HOLO ID — CLASS A
                            </p>
                            <p
                              className="text-2xl lg:text-3xl font-bold text-[var(--accent-cyan)] mt-1"
                              style={{ fontFamily: 'var(--font-tech)' }}
                            >
                              FERHATEN
                            </p>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <div className="flex items-center gap-2">
                              <motion.div
                                className="w-2 h-2 bg-[var(--accent-cyan)]"
                                animate={{
                                  opacity: [1, 0.3, 1],
                                  scale: [1, 1.2, 1],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              />
                              <span className="text-xs font-mono text-[var(--accent-cyan)]">ONLINE</span>
                            </div>
                            <span className="text-xs font-mono text-[var(--text-tertiary)]">SYS.OK</span>
                          </div>
                        </div>
                      </motion.div>

                      {/* Bio Module */}
                      <motion.div
                        className="p-6 lg:p-8 flex-1 flex flex-col justify-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                      >
                        <div className="space-y-4 text-sm md:text-base lg:text-lg text-[var(--text-secondary)] leading-relaxed">
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

                      {/* Footer Status Bar */}
                      <motion.div
                        className="bg-black p-3 lg:p-4 border-t-2 border-[var(--accent-pink)]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.2 }}
                      >
                        <div className="flex items-center justify-between font-mono text-xs text-[var(--text-tertiary)]">
                          <span>DESIGNER/DEVELOPER</span>
                          <div className="flex items-center gap-3">
                            <span className="text-[var(--accent-cyan)]">
                              ID:FH-2025
                            </span>
                            <motion.span
                              className="text-[var(--accent-pink)]"
                              animate={{ opacity: [0, 1, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              ▮
                            </motion.span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </PixelBorder>

                {/* Animated Scan Lines */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent-cyan)] to-transparent opacity-70"
                  animate={{
                    y: ['0%', '100%'],
                    opacity: [0.7, 0.3, 0.7],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>

              {/* Corner Brackets */}
              <motion.div
                className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[var(--accent-cyan)]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.3 }}
              />
              <motion.div
                className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[var(--accent-pink)]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.3 }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[var(--accent-pink)]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.3 }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[var(--accent-cyan)]"
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
