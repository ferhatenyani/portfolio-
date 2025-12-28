import { motion } from 'framer-motion';
import PixelAssemble from '../components/PixelAssemble';
import PixelDegrade from '../components/PixelDegrade';
import PixelText from '../components/PixelText';
import AnimatedText from '../components/AnimatedText';
import PixelThemeBlock from '../components/PixelThemeBlock';

/**
 * Skills Section - Pixel-assembled skill tags
 */
export default function Skills() {
  const skillCategories = [
    {
  name: 'Specialization',
  color: 'pink', // or a new accent like purple
  skills: ['Framer Motion Mastery', 'Performance & Optimization', 'Responsive & Mobile-First Design','Micro-Interactions', 'Scroll-Driven Animations', 'Component-Driven Development']
},
    {
      name: 'Frontend Development',
      color: 'cyan',
      skills: ['React', 'TypeScript', 'TanStack Query', 'Zustand', 'Tailwind CSS', 'JavaScript', 'React Native']
    },
    {
      name: 'Animation & Motion',
      color: 'pink',
      skills: ['Framer Motion', 'CSS Animations', 'GSAP ScrollTrigger', 'Three.js']
    },
    {
      name: 'Design Tools',
      color: 'amber',
      skills: ['Figma', 'Adobe XD', 'Adobe Illustrator', 'Adobe Photoshop']
    },
    {
      name: 'Development Tools',
      color: 'cyan',
      skills: ['Git & GitHub','Vercel & Netlify Deployments', 'Linux', 'Jira', 'Chrome DevTools', 'Docker']
    }
  ];

  const getColorVar = (color) => {
    const colors = {
      cyan: 'var(--accent-cyan)',
      pink: 'var(--accent-pink)',
      amber: 'var(--accent-amber)'
    };
    return colors[color] || colors.cyan;
  };

  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      {/* Pixel Grid Background */}
      <div className="absolute inset-0 pixel-grid-bg opacity-5" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <PixelDegrade delay={0.2}>
          <motion.div className="mb-20 text-center">
            <span className="pixel-text text-sm text-[var(--accent-amber)] mb-2 block">
              <PixelText delay={0.1} stagger={0.02}>
                // Technical Arsenal
              </PixelText>
            </span>
            <h2
              className="text-5xl md:text-6xl font-bold gradient-text mb-4"
              style={{ fontFamily: 'var(--font-pixel)' }}
            >
              <AnimatedText delay={0.3} stagger={0.03} glitchIntensity="high" variant="full">
                SKILLS & TOOLS
              </AnimatedText>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              A versatile toolkit spanning design, development, and animation—
              continuously expanding with emerging technologies.
            </p>
          </motion.div>
        </PixelDegrade>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIdx) => (
            <PixelDegrade key={category.name} delay={0.3 + categoryIdx * 0.1}>
              <div className="space-y-6">
                {/* Category Header */}
                <motion.div
                  className="flex items-center gap-3 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + categoryIdx * 0.1 }}
                >
                  <div
                    className="w-3 h-3"
                    style={{ backgroundColor: getColorVar(category.color) }}
                  />
                  <h3
                    className="text-2xl font-bold text-[var(--text-primary)]"
                    style={{ fontFamily: 'var(--font-tech)' }}
                  >
                    <AnimatedText delay={0.5 + categoryIdx * 0.1} stagger={0.025} glitchIntensity="medium" variant="simple">
                      {category.name}
                    </AnimatedText>
                  </h3>
                </motion.div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIdx) => (
                    <PixelAssemble
                      key={skill}
                      delay={0.5 + categoryIdx * 0.1 + skillIdx * 0.05}
                      className="group"
                    >
                      <PixelThemeBlock delay={0.1 + categoryIdx * 0.05 + skillIdx * 0.02} sparkles={false}>
                        <motion.div
                        className="relative px-5 py-3 bg-[var(--bg-secondary)] border-2 cursor-default overflow-hidden"
                        style={{
                          borderColor: getColorVar(category.color)
                        }}
                        whileHover={{
                          scale: 1.05,
                          borderColor: 'var(--text-primary)'
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="relative z-10 text-[var(--text-primary)] font-medium pixel-text text-sm">
                          {skill}
                        </span>

                        {/* Hover Background Fill */}
                        <motion.div
                          className="absolute inset-0"
                          style={{
                            backgroundColor: getColorVar(category.color),
                            originX: 0,
                            opacity: 0.1
                          }}
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />

                        {/* Pixel Corner Accent */}
                        <div
                          className="absolute -top-1 -right-1 w-2 h-2 opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ backgroundColor: getColorVar(category.color) }}
                        />
                        </motion.div>
                      </PixelThemeBlock>
                    </PixelAssemble>
                  ))}
                </div>
              </div>
            </PixelDegrade>
          ))}
        </div>

        {/* Bottom Accent */}
        <motion.div
          className="mt-20 flex justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-[var(--accent-cyan)]"
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeInOut'
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
