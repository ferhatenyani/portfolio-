import { motion } from 'framer-motion';
import PixelBorder from '../components/PixelBorder';
import PixelDegrade from '../components/PixelDegrade';
import PixelText from '../components/PixelText';
import AnimatedText from '../components/AnimatedText';
import PixelThemeBlock from '../components/PixelThemeBlock';

/**
 * About Section - Clean modern layout with pixel borders and degrade effects
 */
export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent-cyan)] to-transparent opacity-30" />

      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <PixelDegrade delay={0.2}>
          <motion.div className="mb-16">
            <span className="pixel-text text-sm text-[var(--accent-cyan)] mb-2 block">
              <PixelText delay={0.1} stagger={0.02}>
                // About
              </PixelText>
            </span>
            <h2
              className="text-5xl md:text-6xl font-bold gradient-text glitch-text"
              style={{ fontFamily: 'var(--font-pixel)' }}
            >
              <AnimatedText delay={0.3} stagger={0.025} glitchIntensity="high" variant="full">
                BUILDING DIGITAL
              </AnimatedText>
              <br />
              <AnimatedText delay={0.3} stagger={0.025} glitchIntensity="high" variant="full">
                NARRATIVES
              </AnimatedText>
            </h2>
          </motion.div>
        </PixelDegrade>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio */}
          <PixelDegrade delay={0.4}>
            <PixelThemeBlock delay={0.1}>
              <PixelBorder
                className="bg-[var(--bg-secondary)] p-8 md:p-12"
                delay={0.6}
              >
              <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
                <p className="text-lg">
                  As a Computer Science student with a profound passion for design,
                  I occupy the rare intersection where technical precision meets
                  aesthetic sensibility. My approach transcends conventional
                  development—I architect experiences that resonate emotionally
                  while performing flawlessly.
                </p>
                <p className="text-lg">
                  Each project is an opportunity to challenge the ordinary, blending
                  cutting-edge animation techniques with thoughtful user journeys.
                  I believe exceptional interfaces aren't merely functional—they're
                  memorable, delightful, and unmistakably human.
                </p>
                <p className="text-lg">
                  Through meticulous attention to motion, typography, and spatial
                  relationships, I transform abstract concepts into tangible digital
                  artifacts that users don't just navigate—they experience.
                </p>
              </div>

              {/* Decorative Pixel Corner */}
              <motion.div
                className="absolute -bottom-2 -right-2 w-8 h-8 bg-[var(--accent-pink)]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.3 }}
              />
              </PixelBorder>
            </PixelThemeBlock>
          </PixelDegrade>

          {/* Right Column - Highlights */}
          <PixelDegrade delay={0.5}>
            <div className="space-y-6">
              {/* Education */}
              <PixelThemeBlock delay={0.15}>
                <motion.div
                  className="bg-[var(--bg-secondary)] p-6 border-l-4 border-[var(--accent-cyan)]"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3
                    className="text-xl font-bold text-[var(--text-primary)] mb-2"
                    style={{ fontFamily: 'var(--font-tech)' }}
                  >
                    <AnimatedText delay={0.6} stagger={0.03} glitchIntensity="medium" variant="simple">
                      Education
                    </AnimatedText>
                  </h3>
                <p className="text-[var(--text-secondary)]">
                  Computer Science • Currently Pursuing
                </p>
                  <p className="text-sm text-[var(--text-tertiary)] mt-1 pixel-text">
                    Foundations in Algorithms, Data Structures & Systems Design
                  </p>
                </motion.div>
              </PixelThemeBlock>

              {/* Focus Areas */}
              <PixelThemeBlock delay={0.2}>
                <motion.div
                  className="bg-[var(--bg-secondary)] p-6 border-l-4 border-[var(--accent-pink)]"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3
                    className="text-xl font-bold text-[var(--text-primary)] mb-2"
                    style={{ fontFamily: 'var(--font-tech)' }}
                  >
                    <AnimatedText delay={0.7} stagger={0.03} glitchIntensity="medium" variant="simple">
                      Design Philosophy
                    </AnimatedText>
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    Motion-First • User-Centric • Pixel-Perfect
                  </p>
                  <p className="text-sm text-[var(--text-tertiary)] mt-1 pixel-text">
                    Every animation serves a purpose, every pixel tells a story
                  </p>
                </motion.div>
              </PixelThemeBlock>

              {/* Approach */}
              <PixelThemeBlock delay={0.25}>
                <motion.div
                  className="bg-[var(--bg-secondary)] p-6 border-l-4 border-[var(--accent-amber)]"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3
                    className="text-xl font-bold text-[var(--text-primary)] mb-2"
                    style={{ fontFamily: 'var(--font-tech)' }}
                  >
                    <AnimatedText delay={0.8} stagger={0.03} glitchIntensity="medium" variant="simple">
                      Current Focus
                    </AnimatedText>
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    Advanced React Patterns • Animation Systems • Design Tokens
                  </p>
                  <p className="text-sm text-[var(--text-tertiary)] mt-1 pixel-text">
                    Exploring the future of component-driven development
                  </p>
                </motion.div>
              </PixelThemeBlock>
            </div>
          </PixelDegrade>
        </div>

        {/* Bottom Pixel Separator */}
        <motion.div
          className="mt-16 h-px bg-gradient-to-r from-transparent via-[var(--accent-pink)] to-transparent opacity-30"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
        />
      </div>
    </section>
  );
}
