import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { FaTimes, FaExternalLinkAlt, FaReact, FaNodeJs, FaJava, FaChartBar } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiFramer,
  SiSpringboot,
  SiTypescript,
  SiReactquery,
  SiFigma
} from 'react-icons/si';

/**
 * ProjectModal - Compact, mobile-first popup modal for project details
 * Displays title, description, tech stack with icons, and action buttons
 */
export default function ProjectModal({ isOpen, onClose, project }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Close on ESC key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Tech stack icon mapping
  const techIcons = {
    'React': <FaReact />,
    'Tailwind CSS': <SiTailwindcss />,
    'Framer Motion': <SiFramer />,
    'Power BI': <FaChartBar />,
    'Spring Boot': <SiSpringboot />,
    'TypeScript': <SiTypescript />,
    'TanStack Query': <SiReactquery />,
    'Node.js': <FaNodeJs />,
    'Java': <FaJava />,
    'Figma': <SiFigma />
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - Very light overlay */}
          <motion.div
            className="fixed inset-0 bg-black/10 backdrop-blur-sm z-[9998]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Modal Container - Centered with margins */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              className="relative w-full max-w-md bg-[var(--bg-primary)] border-2 border-[var(--accent-cyan)] pointer-events-auto"
              style={{
                boxShadow: '0 0 30px rgba(0, 255, 255, 0.3), 0 0 60px rgba(0, 255, 255, 0.15)'
              }}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[var(--bg-primary)] border-2 border-[var(--accent-pink)] text-[var(--accent-pink)] hover:bg-[var(--accent-pink)] hover:text-[var(--bg-primary)] transition-all"
                style={{
                  boxShadow: '0 0 15px rgba(255, 0, 255, 0.3)'
                }}
                aria-label="Close modal"
              >
                <FaTimes className="text-sm sm:text-base" />
              </button>

              {/* Pixel Corner Accent - Top Left */}
              <div className="absolute -top-2 -left-2 w-4 h-4 sm:w-5 sm:h-5 bg-[var(--accent-cyan)]" />

              {/* Modal Content */}
              <div className="p-6 sm:p-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 bg-[var(--bg-secondary)] border border-[var(--accent-cyan)]/40 text-[var(--text-tertiary)] text-xs pixel-text uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] animate-pulse" />
                  <span>{project.type || 'Project'}</span>
                </div>

                {/* Title */}
                <h2
                  className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-3 leading-tight"
                  style={{ fontFamily: 'var(--font-pixel)' }}
                >
                  {project.title}
                </h2>

                {/* Subtitle */}
                {project.subtitle && (
                  <p className="text-sm sm:text-base text-[var(--accent-cyan)] mb-4 pixel-text">
                    {project.subtitle}
                  </p>
                )}

                {/* Description */}
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                {project.stack && project.stack.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-xs pixel-text text-[var(--text-tertiary)] uppercase tracking-widest mb-3 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[var(--accent-cyan)]" />
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--accent-cyan)]/20 hover:border-[var(--accent-cyan)]/50 transition-all group"
                        >
                          <span className="text-[var(--accent-cyan)] text-base group-hover:scale-110 transition-transform">
                            {techIcons[tech] || <FaReact />}
                          </span>
                          <span className="text-xs sm:text-sm text-[var(--text-secondary)]">
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {/* Demo Link */}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[var(--accent-cyan)] text-[var(--bg-primary)] font-bold pixel-text text-sm hover:bg-[var(--accent-cyan)]/90 transition-all border-2 border-[var(--accent-cyan)] hover:scale-105"
                      style={{
                        boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)'
                      }}
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      <span>VIEW DEMO</span>
                    </a>
                  )}

                  {/* Deployed App Link - Coming Soon */}
                  <div className="flex-1 relative group">
                    <button
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[var(--bg-tertiary)] text-[var(--text-tertiary)] font-bold pixel-text text-sm border-2 border-[var(--accent-cyan)]/30 cursor-not-allowed relative overflow-hidden"
                      disabled
                    >
                      <FaExternalLinkAlt className="text-xs opacity-50" />
                      <span>LIVE APP</span>
                    </button>

                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-[var(--bg-primary)] border-2 border-[var(--accent-pink)] text-[var(--text-primary)] text-xs pixel-text whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10"
                      style={{
                        boxShadow: '0 0 15px rgba(255, 0, 255, 0.3)'
                      }}
                    >
                      Not available yet — ongoing project
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-0.5 w-2 h-2 bg-[var(--accent-pink)] rotate-45" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Pixel Corner Accent - Bottom Right */}
              <div className="absolute -bottom-2 -right-2 w-4 h-4 sm:w-5 sm:h-5 bg-[var(--accent-pink)]" />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
