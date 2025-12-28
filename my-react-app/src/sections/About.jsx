import { motion } from 'framer-motion';
import PixelBorder from '../components/PixelBorder';
import PixelDegrade from '../components/PixelDegrade';
import AnimatedText from '../components/AnimatedText';
import PixelThemeBlock from '../components/PixelThemeBlock';

/**
 * About Section - Clean modern layout with pixel borders and degrade effects
 */
export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent-cyan)] to-transparent opacity-30" />

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

        {/* Content - Centered Bio */}
        <div className="max-w-4xl mx-auto">
          <PixelDegrade delay={0.4}>
            <PixelThemeBlock delay={0.1}>
              <PixelBorder
                className="bg-[var(--bg-secondary)] p-8 md:p-10 lg:p-12"
                delay={0.6}
              >
              <div className="space-y-5 text-[var(--text-secondary)] leading-relaxed">
                <p className="text-base md:text-lg lg:text-xl font-light">
                  Hey, I'm Ferhaten — a UI/UX designer and front-end developer obsessed with building digital experiences that are intuitive, performant, and visually striking.
                </p>
                <p className="text-base md:text-lg lg:text-xl font-light">
                  I bridge thoughtful design with clean, production-ready code using tools like Figma, React, TypeScript, Tailwind, and Framer Motion. The result? Interfaces that feel alive, load instantly, and solve real problems.
                </p>
                <p className="text-base md:text-lg lg:text-xl font-light">
                  Currently wrapping up my Computer Science degree while freelancing and shipping side projects that reach actual users. I thrive at the intersection of creativity and technical precision — turning complex ideas into seamless products.
                </p>
                <p className="text-base md:text-lg lg:text-xl font-light mt-6 text-[var(--accent-cyan)]">
                  Let's build something great together.
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
        </div>

        {/* Bottom Pixel Separator */}
        <motion.div
          className="mt-12 md:mt-14 h-px bg-gradient-to-r from-transparent via-[var(--accent-pink)] to-transparent opacity-30"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
        />
      </div>
    </section>
  );
}
