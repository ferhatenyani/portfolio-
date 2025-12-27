import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaExternalLinkAlt, FaTimes, FaPlay, FaExpand } from 'react-icons/fa';

/**
 * Modal - Reusable modal component with lightweight glitch-style reveal
 * Optimized for performance with CSS transforms and minimal animation
 * Supports adaptive sizing, media zoom, and enhanced visual hierarchy
 */
export default function Modal({ isOpen, onClose, content }) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [mediaLoaded, setMediaLoaded] = useState(false);

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

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        if (isZoomed) {
          setIsZoomed(false);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose, isZoomed]);

  // Reset states when modal closes
  useEffect(() => {
    if (!isOpen) {
      setIsZoomed(false);
      setMediaLoaded(false);
    }
  }, [isOpen]);

  if (!content) return null;

  // Determine modal size based on content orientation
  const isVertical = content.mediaOrientation === 'vertical' || content.isVertical;
  const modalMaxWidth = isVertical ? 'max-w-3xl' : 'max-w-6xl';

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/85 z-[9999] backdrop-blur-sm cursor-default"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Keyboard Hint */}
          <motion.div
            className="fixed top-6 left-1/2 -translate-x-1/2 z-[10001] px-4 py-2 bg-[var(--bg-primary)]/90 border border-[var(--accent-cyan)]/40 text-[var(--text-tertiary)] text-xs pixel-text pointer-events-none"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.3 }}
          >
            Press <span className="text-[var(--accent-cyan)] mx-1">ESC</span> to close
          </motion.div>

          {/* Modal Container */}
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              className={`relative w-full ${modalMaxWidth} max-h-[92vh] bg-[var(--bg-tertiary)] border-[3px] border-[var(--accent-cyan)] pointer-events-auto overflow-hidden cursor-default`}
              style={{
                boxShadow: `
                  0 0 20px rgba(0, 255, 255, 0.3),
                  inset 0 0 40px rgba(0, 255, 255, 0.05),
                  inset 0 0 80px rgba(255, 0, 255, 0.03)
                `
              }}
              initial={{
                opacity: 0,
                scale: 0.95,
                x: [0, -4, 4, -2, 0],
                filter: 'hue-rotate(0deg)'
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                filter: ['hue-rotate(0deg)', 'hue-rotate(10deg)', 'hue-rotate(-10deg)', 'hue-rotate(0deg)']
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 20,
                transition: { duration: 0.2, ease: 'easeIn' }
              }}
              transition={{
                duration: 0.25,
                ease: 'easeOut'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Scan-line effect overlay */}
              <div
                className="absolute inset-0 pointer-events-none z-[1] opacity-[0.03]"
                style={{
                  background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.8) 2px, rgba(0, 255, 255, 0.8) 4px)'
                }}
              />

              {/* Animated corner accents */}
              <motion.div
                className="absolute -top-1 -left-1 w-6 h-6 bg-[var(--accent-cyan)] z-[2]"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
              <motion.div
                className="absolute -top-1 -right-1 w-6 h-6 bg-[var(--accent-pink)] z-[2]"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5
                }}
              />
              <motion.div
                className="absolute -bottom-1 -left-1 w-6 h-6 bg-[var(--accent-pink)] z-[2]"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1
                }}
              />
              <motion.div
                className="absolute -bottom-1 -right-1 w-6 h-6 bg-[var(--accent-cyan)] z-[2]"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1.5
                }}
              />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-[3] w-12 h-12 flex items-center justify-center bg-[var(--bg-primary)] border-2 border-[var(--accent-pink)] text-[var(--accent-pink)] hover:bg-[var(--accent-pink)] hover:text-[var(--bg-primary)] transition-all cursor-pointer"
                aria-label="Close modal"
              >
                <FaTimes size={20} />
              </button>

              {/* Scrollable Content */}
              <div className="overflow-y-auto max-h-[92vh] cursor-default">
                {/* Media (Image or Video) - FIRST */}
                {content.media && (
                  <div className="relative group">
                    {/* Loading state */}
                    {!mediaLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center bg-[var(--bg-primary)]/50 z-10">
                        <div className="w-8 h-8 border-2 border-[var(--accent-cyan)] border-t-transparent rounded-full animate-spin" />
                      </div>
                    )}

                    {content.mediaType === 'video' ? (
                      <div className="relative">
                        {/* Play icon overlay */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
                          <div className="w-20 h-20 rounded-full bg-[var(--accent-cyan)]/20 backdrop-blur-sm flex items-center justify-center border-2 border-[var(--accent-cyan)] group-hover:scale-110 transition-transform">
                            <FaPlay className="text-[var(--accent-cyan)] ml-1" size={24} />
                          </div>
                        </div>
                        <video
                          src={content.media}
                          controls
                          className="w-full cursor-pointer"
                          style={{
                            boxShadow: 'inset 0 0 30px rgba(0, 255, 255, 0.1)'
                          }}
                          autoPlay
                          loop
                          muted
                          onLoadedData={() => setMediaLoaded(true)}
                        >
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ) : (
                      <div className="relative">
                        {/* Zoom hint overlay */}
                        <div className="absolute top-4 right-4 z-[1] px-3 py-2 bg-[var(--bg-primary)]/80 border border-[var(--accent-cyan)]/60 text-[var(--accent-cyan)] text-xs pixel-text opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center gap-2">
                          <FaExpand size={12} />
                          Click to zoom
                        </div>
                        <img
                          src={content.media}
                          alt={content.title || 'Project preview'}
                          className="w-full h-auto cursor-pointer"
                          style={{
                            boxShadow: 'inset 0 0 30px rgba(0, 255, 255, 0.1)'
                          }}
                          onClick={() => setIsZoomed(true)}
                          onLoad={() => setMediaLoaded(true)}
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* Text Content */}
                <div className="p-8 lg:p-10">
                  {/* Title */}
                  {content.title && (
                    <h3
                      className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-3 leading-tight"
                      style={{ fontFamily: 'var(--font-pixel)' }}
                    >
                      {content.title}
                    </h3>
                  )}

                  {/* Subtitle */}
                  {content.subtitle && (
                    <p className="text-xl text-[var(--accent-cyan)] mb-6 pixel-text font-semibold">
                      {content.subtitle}
                    </p>
                  )}

                  {/* Description */}
                  {content.description && (
                    <p className="text-[var(--text-secondary)] text-lg mb-8 leading-relaxed">
                      {content.description}
                    </p>
                  )}

                  {/* Stack/Tags */}
                  {content.stack && content.stack.length > 0 && (
                    <div className="mb-8">
                      <h4 className="text-xs text-[var(--text-tertiary)] pixel-text mb-3 tracking-wider">
                        TECH STACK
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {content.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-[var(--bg-primary)] text-[var(--text-secondary)] text-sm pixel-text border-2 border-[var(--accent-cyan)]/30 hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] transition-all cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Live Demo Link */}
                  {content.demoLink && (
                    <motion.a
                      href={content.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--accent-cyan)] text-[var(--bg-primary)] text-lg font-bold pixel-text hover:bg-[var(--accent-pink)] transition-colors border-3 border-[var(--accent-cyan)] hover:border-[var(--accent-pink)] cursor-pointer"
                      style={{
                        boxShadow: '0 4px 20px rgba(0, 255, 255, 0.3)'
                      }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: '0 6px 30px rgba(255, 0, 255, 0.4)'
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        animate={{ x: [0, 3, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                      >
                        <FaExternalLinkAlt />
                      </motion.div>
                      {content.demoText || 'LIVE DEMO'}
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Zoomed Image View */}
          <AnimatePresence>
            {isZoomed && content.media && content.mediaType !== 'video' && (
              <>
                <motion.div
                  className="fixed inset-0 bg-black/95 z-[10002] cursor-zoom-out"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsZoomed(false)}
                />
                <motion.div
                  className="fixed inset-0 z-[10003] flex items-center justify-center p-8 pointer-events-none"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={content.media}
                    alt={content.title || 'Zoomed preview'}
                    className="max-w-full max-h-full object-contain cursor-zoom-out pointer-events-auto"
                    style={{
                      boxShadow: '0 0 40px rgba(0, 255, 255, 0.5)'
                    }}
                    onClick={() => setIsZoomed(false)}
                  />
                  {/* Close zoom hint */}
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-[var(--bg-primary)]/90 border border-[var(--accent-cyan)]/40 text-[var(--text-tertiary)] text-xs pixel-text pointer-events-none">
                    Click or press <span className="text-[var(--accent-cyan)] mx-1">ESC</span> to close
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}
