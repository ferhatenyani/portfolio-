import { motion } from 'framer-motion';
import PixelBorder from '../components/PixelBorder';
import PixelDegrade from '../components/PixelDegrade';
import PixelText from '../components/PixelText';

/**
 * About Me Section - Data Chip Design
 * Bio structured like a futuristic ID card/data chip with modules
 */
export default function AboutMe() {
  return (
    <section id="about" className="relative py-16 md:py-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent-pink)] to-transparent opacity-30" />

      <div className="max-w-6xl mx-auto">
        {/* Section Title - Skills Style */}
        <motion.div
          className="mb-12 md:mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
        >
          <span className="pixel-text text-xs sm:text-sm text-[var(--accent-cyan)] mb-2 block">
            <PixelText delay={0.1} stagger={0.02}>
              // About me
            </PixelText>
          </span>
          
        </motion.div>

        {/* Data Chip Container - Wider for Large Screens */}
        <div className="max-w-3xl mx-auto">
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
                    className="bg-[var(--bg-tertiary)] p-4 md:p-6 border-b-2 border-[var(--accent-cyan)]"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="flex items-center justify-between">
                      {/* Profile Image */}
                      <motion.div
                        className="w-16 h-16 md:w-20 md:h-20 bg-[var(--bg-secondary)] border-2 border-[var(--accent-cyan)] relative overflow-hidden"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                      >
                        <img
                          src="/profilePic2.JPG"
                          alt="Ferhaten Profile"
                          className="w-full h-full object-cover"
                        />
                      </motion.div>

                      {/* Profile ID - Moved to Right */}
                      <div className="text-right">
                        <p className="text-xs font-mono text-[var(--text-tertiary)] uppercase tracking-wider">
                          PROFILE ID
                        </p>
                        <p
                          className="text-xl md:text-2xl font-bold text-[var(--accent-cyan)]"
                          style={{ fontFamily: 'var(--font-tech)' }}
                        >
                          FERHATEN
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Bio Module - No Scroll on Large Screens */}
                  <motion.div
                    className="p-6 md:p-8 lg:p-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="space-y-4 md:space-y-5 text-sm md:text-base lg:text-lg text-[var(--text-secondary)] leading-relaxed">
                      <p>
                        Ferhaten — UI/UX designer & frontend developer crafting web experiences with soul, speed, and precision.
                      </p>
                      <p>
                        I design in Figma, build with React + TypeScript, style with Tailwind, and bring interfaces to life using Framer Motion — delivering production-ready products like embedded SaaS analytics dashboards, AI-powered medical assistants, and modern e-commerce web apps that perform flawlessly and drive real results.
                      </p>
                      <p>
                        Final-year Computer Science student actively freelancing and shipping personal projects reaching thousands of users, with a sharp focus on accessibility, performance, and scalable design systems.
                      </p>
                      <p className="text-[var(--accent-cyan)] font-medium mt-6 md:mt-8">
                        Let's build something exceptional together.
                      </p>
                    </div>
                  </motion.div>

                  {/* Bottom Info Module - Location, Age & Status */}
                  <motion.div
                    className="bg-[var(--bg-tertiary)] p-4 md:p-6 border-t-2 border-[var(--accent-pink)]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.0 }}
                  >
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                      {/* Location */}
                      <div>
                        <p className="text-xs font-mono text-[var(--text-tertiary)] uppercase tracking-wider mb-2">
                          LOCATION
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[var(--accent-pink)]" />
                          <span className="text-sm md:text-base font-mono text-[var(--accent-pink)]">
                            ALGERIA
                          </span>
                        </div>
                      </div>

                      {/* Age */}
                      <div>
                        <p className="text-xs font-mono text-[var(--text-tertiary)] uppercase tracking-wider mb-2">
                          AGE
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[var(--accent-cyan)]" />
                          <span className="text-sm md:text-base font-mono text-[var(--accent-cyan)]">
                            23
                          </span>
                        </div>
                      </div>

                      {/* Status - Available for Work */}
                      <div className="col-span-2 md:col-span-1">
                        <p className="text-xs font-mono text-[var(--text-tertiary)] uppercase tracking-wider mb-2">
                          STATUS
                        </p>
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
                          <span className="text-sm md:text-base font-mono text-[var(--accent-cyan)]">
                            AVAILABLE FOR WORK
                          </span>
                        </div>
                      </div>
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
