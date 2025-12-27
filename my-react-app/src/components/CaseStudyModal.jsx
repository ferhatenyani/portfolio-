import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

/**
 * CaseStudyModal - Responsive case study modal with adaptive layout
 * Supports both horizontal (desktop) and vertical (mobile) scrolling
 * @param {string} imageType - 'mobile' for portrait app screenshots, 'desktop' for landscape screenshots
 *   - 'mobile': switches to vertical scroll at <641px
 *   - 'desktop': switches to vertical scroll at <1025px
 */
export default function CaseStudyModal({ isOpen, onClose, caseStudy, imageType = 'mobile' }) {
  const [currentPanel, setCurrentPanel] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const scrollContainerRef = useRef(null);

  // Determine if we're in mobile/vertical mode based on screen size
  const [isVerticalLayout, setIsVerticalLayout] = useState(false);
  const [showKeyboardHints, setShowKeyboardHints] = useState(false);

  // Track window size for responsive behavior
  useEffect(() => {
    const checkLayout = () => {
      const breakpoint = imageType === 'mobile' ? 641 : 1025;
      setIsVerticalLayout(window.innerWidth < breakpoint);
      setShowKeyboardHints(window.innerWidth >= 1024);
    };

    checkLayout();
    window.addEventListener('resize', checkLayout);
    return () => window.removeEventListener('resize', checkLayout);
  }, [imageType]);

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

  // Reset to first panel when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentPanel(0);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft = 0;
        scrollContainerRef.current.scrollTop = 0;
      }
    }
  }, [isOpen]);

  // Keyboard navigation (always enabled)
  useEffect(() => {
    if (!isOpen || !caseStudy) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        navigateToPanel(currentPanel + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        navigateToPanel(currentPanel - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentPanel, onClose, caseStudy]);

  // Update active panel on scroll (throttled for performance)
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let timeoutId = null;

    const handleScroll = () => {
      if (timeoutId) return;

      timeoutId = setTimeout(() => {
        const scrollPosition = isVerticalLayout ? container.scrollTop : container.scrollLeft;
        const containerSize = isVerticalLayout ? container.offsetHeight : container.offsetWidth;
        const activeIndex = Math.round(scrollPosition / containerSize);
        setCurrentPanel(activeIndex);
        timeoutId = null;
      }, 100);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      container.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isOpen, isVerticalLayout]);

  // Dismiss zoom on any click anywhere
  useEffect(() => {
    if (!isOpen || !activeImageIndex) return;

    const handleClick = (e) => {
      const clickedElement = e.target;
      const isClickOnImage = clickedElement.tagName === 'IMG' || clickedElement.closest('.zoomed-image');

      if (!isClickOnImage) {
        setActiveImageIndex(null);
      }
    };

    setTimeout(() => {
      document.addEventListener('click', handleClick, true);
    }, 10);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [isOpen, activeImageIndex]);

  const navigateToPanel = (index) => {
    if (!caseStudy || index < 0 || index >= caseStudy.panels.length + 1) return;

    const container = scrollContainerRef.current;
    if (container) {
      const panelSize = isVerticalLayout ? container.offsetHeight : container.offsetWidth;

      if (isVerticalLayout) {
        container.scrollTo({
          top: panelSize * index,
          behavior: 'smooth'
        });
      } else {
        container.scrollTo({
          left: panelSize * index,
          behavior: 'smooth'
        });
      }
      setCurrentPanel(index);
    }
  };

  if (!caseStudy) return null;

  const totalPanels = caseStudy.panels.length + 1; // +1 for intro panel

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/90 z-[9999]"
            style={{ cursor: 'none' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            className="fixed inset-0 z-[10000] flex items-center justify-center"
            style={{ cursor: 'none' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button - Smaller on mobile */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-[10002] w-8 h-8 md:w-14 md:h-14 flex items-center justify-center bg-[var(--bg-primary)] border-2 border-[var(--accent-pink)] text-[var(--accent-pink)] hover:bg-[var(--accent-pink)] hover:text-[var(--bg-primary)] transition-all"
              style={{
                boxShadow: '0 0 20px rgba(255, 0, 255, 0.3)',
                cursor: 'none'
              }}
              aria-label="Close modal"
            >
              <FaTimes className="text-base md:text-xl" />
            </button>

            {/* Keyboard Hints - Hidden below 1024px for both instances */}
            {showKeyboardHints && (
              <motion.div
                className={`absolute top-6 left-1/2 -translate-x-1/2 z-[10001] px-5 py-3 bg-[var(--bg-primary)]/90 border-2 border-[var(--accent-cyan)]/50 text-[var(--text-tertiary)] text-xs pixel-text pointer-events-none items-center gap-4 ${
                  isVerticalLayout ? 'hidden' : 'flex'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: isVerticalLayout ? 0 : 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.3 }}
                style={{
                  boxShadow: '0 0 15px rgba(0, 255, 255, 0.2)'
                }}
              >
                <span>Press <span className="text-[var(--accent-cyan)] mx-1">←</span> <span className="text-[var(--accent-cyan)] mx-1">→</span> to navigate</span>
                <span className="text-[var(--text-tertiary)]/50">|</span>
                <span>Press <span className="text-[var(--accent-pink)] mx-1\">ESC</span> to close</span>
              </motion.div>
            )}

            {/* Navigation Arrows - Hidden in vertical layout */}
            {!isVerticalLayout && currentPanel > 0 && (
              <motion.button
                onClick={() => navigateToPanel(currentPanel - 1)}
                className="absolute left-6 z-[10001] w-12 h-12 flex items-center justify-center bg-[var(--bg-primary)]/80 border-2 border-[var(--accent-cyan)] text-[var(--accent-cyan)] hover:bg-[var(--accent-cyan)] hover:text-[var(--bg-primary)] transition-all"
                style={{ cursor: 'none' }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Previous panel"
              >
                <FaChevronLeft size={18} />
              </motion.button>
            )}

            {!isVerticalLayout && currentPanel < totalPanels - 1 && (
              <motion.button
                onClick={() => navigateToPanel(currentPanel + 1)}
                className="absolute right-6 z-[10001] w-12 h-12 flex items-center justify-center bg-[var(--bg-primary)]/80 border-2 border-[var(--accent-cyan)] text-[var(--accent-cyan)] hover:bg-[var(--accent-cyan)] hover:text-[var(--bg-primary)] transition-all"
                style={{ cursor: 'none' }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Next panel"
              >
                <FaChevronRight size={18} />
              </motion.button>
            )}

            {/* Scroll Container - Adaptive direction */}
            <motion.div
              ref={scrollContainerRef}
              className={`w-full h-full ${
                isVerticalLayout
                  ? 'overflow-y-auto overflow-x-hidden flex-col snap-y'
                  : 'overflow-x-auto overflow-y-hidden flex snap-x'
              } flex snap-mandatory scroll-container`}
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
                cursor: 'none',
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)',
                // Add padding for vertical layout to accommodate dots
                paddingRight: isVerticalLayout ? '60px' : '0'
              }}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <style>
                {`
                  .scroll-container::-webkit-scrollbar {
                    display: none;
                  }

                  @keyframes fadeIn {
                    from {
                      opacity: 0;
                    }
                    to {
                      opacity: 1;
                    }
                  }

                  .animate-fade-in {
                    animation: fadeIn 0.4s ease-out;
                  }

                  /* ===== DESKTOP SCREENSHOTS LAYOUT (ADMIN APP) ===== */
                  /* Keep original layout for desktop images on large screens (≥1025px) */

                  @media (min-width: 1025px) {
                    .desktop-layout {
                      flex-wrap: nowrap;
                    }

                    .case-study-panel:has(.desktop-layout) .case-study-panel-inner {
                      flex-direction: column !important;
                    }

                    .case-study-panel:has(.desktop-layout) .case-study-text-content {
                      width: 100% !important;
                      max-width: 900px;
                      text-align: center;
                      margin-bottom: 2rem;
                    }

                    .case-study-panel:has(.desktop-layout) .case-study-mockups {
                      width: 100%;
                      justify-content: center;
                    }
                  }

                  /* ===== RESPONSIVE BREAKPOINTS ===== */

                  /* Tablets and small laptops (900px to 1024px) - Use horizontal scroll with 640-900px spacing */
                  @media (max-width: 1024px) and (min-width: 901px) {
                    .case-study-panel {
                      padding: 2rem 1.5rem;
                      padding-bottom: 5rem;
                    }

                    .case-study-panel-inner {
                      flex-direction: column;
                      gap: 2rem;
                      justify-content: center;
                    }

                    .case-study-text-content {
                      flex: 0 0 auto;
                      text-align: center;
                      max-width: 500px;
                      width: 100%;
                    }

                    .case-study-mockups {
                      gap: 1.5rem;
                      width: 100%;
                      max-width: 600px;
                    }

                    .mockup-primary {
                      height: 45vh !important;
                      max-height: 420px !important;
                    }

                    .mockup-secondary {
                      height: 38vh !important;
                      max-height: 360px !important;
                    }

                    .mockup-tertiary {
                      height: 32vh !important;
                      max-height: 300px !important;
                    }

                    /* Admin app vertical layout - stack images vertically */
                    .desktop-layout {
                      flex-direction: column !important;
                      gap: 1.5rem !important;
                      padding: 0 2rem;
                    }

                    .desktop-layout .mockup-primary,
                    .desktop-layout .mockup-secondary,
                    .desktop-layout .mockup-tertiary {
                      width: 92% !important;
                      max-width: 800px !important;
                      height: auto !important;
                      position: relative !important;
                    }
                  }

                  /* Tablets portrait and landscape (max-width: 900px) */
                  @media (max-width: 900px) {
                    .case-study-panel {
                      padding: 2rem 1.5rem;
                      padding-bottom: 5rem; /* Space for bottom dots */
                    }

                    .case-study-panel-inner {
                      flex-direction: column;
                      gap: 2rem;
                      justify-content: center;
                    }

                    .case-study-text-content {
                      flex: 0 0 auto;
                      text-align: center;
                      max-width: 500px;
                      width: 100%;
                    }

                    .case-study-mockups {
                      gap: 1.5rem;
                      width: 100%;
                      max-width: 600px;
                    }

                    .mockup-primary {
                      height: 45vh !important;
                      max-height: 420px !important;
                    }

                    .mockup-secondary {
                      height: 38vh !important;
                      max-height: 360px !important;
                    }

                    .mockup-tertiary {
                      height: 32vh !important;
                      max-height: 300px !important;
                    }

                    .desktop-layout .mockup-primary,
                    .desktop-layout .mockup-secondary,
                    .desktop-layout .mockup-tertiary {
                      width: 92% !important;
                      max-width: 800px !important;
                    }
                  }

                  /* Mobile landscape and small tablets (max-width: 768px) */
                  @media (max-width: 768px) {
                    .case-study-panel {
                      padding: 1.5rem 1.25rem;
                      padding-bottom: 5rem;
                    }

                    .case-study-mockups {
                      gap: 1rem;
                    }

                    .mockup-primary {
                      height: 40vh !important;
                      max-height: 380px !important;
                    }

                    .mockup-secondary {
                      height: 34vh !important;
                      max-height: 320px !important;
                    }

                    .mockup-tertiary {
                      height: 28vh !important;
                      max-height: 260px !important;
                    }
                  }


                  /* ===== VERTICAL SCROLL MODE - Mobile Portrait ===== */
                  @media (max-width: 640px) {
                    /* Intro panel - ensure proper centering and padding */
                    .intro-panel {
                      padding: 3rem 1.5rem !important;
                      padding-bottom: 10rem !important; /* Extra padding for scroll */
                    }

                    /* Mobile layout panels */
                    .mobile-layout .case-study-panel {
                      padding: 2rem 1rem !important;
                      padding-bottom: 10rem !important; /* Significantly increased for full scrollability */
                      overflow-y: visible;
                    }

                    .mobile-layout .case-study-panel-inner {
                      flex-direction: column !important;
                      gap: 3rem !important; /* Increased spacing between text and images */
                      justify-content: flex-start !important;
                      align-items: center !important;
                      height: auto !important;
                      min-height: auto !important; /* Remove min-height constraint */
                    }

                    .mobile-layout .case-study-text-content {
                      flex: 0 0 auto !important;
                      text-align: center !important;
                      gap: 0.625rem;
                      max-width: 100%;
                      width: 100%;
                      z-index: 10;
                      margin-bottom: 0 !important;
                    }

                    .mobile-layout .case-study-mockups {
                      position: relative;
                      width: 100%;
                      height: auto;
                      min-height: auto !important; /* Remove fixed min-height */
                      display: flex !important;
                      flex-direction: column !important;
                      gap: 1.5rem !important;
                      align-items: center !important;
                      max-height: none !important;
                      margin-top: 0 !important;
                    }

                    /* Stack images vertically with proper spacing - MOBILE SCREENSHOTS */
                    .mobile-layout .mockup-primary {
                      position: relative !important;
                      width: 60% !important;
                      max-width: 200px !important;
                      height: auto !important;
                      transform: none !important;
                      z-index: 1;
                      box-shadow: 0 4px 12px rgba(255, 0, 255, 0.15), 0 8px 24px rgba(0, 255, 255, 0.12) !important;
                      top: auto !important;
                      left: auto !important;
                      right: auto !important;
                      bottom: auto !important;
                    }

                    .mobile-layout .mockup-secondary {
                      position: relative !important;
                      width: 56% !important;
                      max-width: 185px !important;
                      height: auto !important;
                      transform: none !important;
                      z-index: 1;
                      box-shadow: 0 3px 10px rgba(255, 0, 255, 0.12), 0 6px 20px rgba(0, 255, 255, 0.1) !important;
                      top: auto !important;
                      left: auto !important;
                      right: auto !important;
                      bottom: auto !important;
                    }

                    .mobile-layout .mockup-tertiary {
                      position: relative !important;
                      width: 52% !important;
                      max-width: 170px !important;
                      height: auto !important;
                      transform: none !important;
                      z-index: 1;
                      box-shadow: 0 2px 8px rgba(255, 0, 255, 0.1), 0 4px 16px rgba(0, 255, 255, 0.09) !important;
                      top: auto !important;
                      left: auto !important;
                      right: auto !important;
                      bottom: auto !important;
                    }

                    /* Reset active image transforms on mobile */
                    .mobile-layout .mockup-primary.active-mobile,
                    .mobile-layout .mockup-secondary.active-mobile,
                    .mobile-layout .mockup-tertiary.active-mobile {
                      transform: scale(1.08) !important;
                      z-index: 10 !important;
                      box-shadow: 0 8px 24px rgba(255, 0, 255, 0.3), 0 12px 32px rgba(0, 255, 255, 0.25) !important;
                    }

                    /* Desktop layout panels - proper padding and spacing */
                    .case-study-panel:has(.desktop-layout) {
                      padding: 2rem 1rem !important;
                      padding-bottom: 10rem !important; /* Significantly increased for full scrollability */
                    }

                    .case-study-panel:has(.desktop-layout) .case-study-panel-inner {
                      flex-direction: column !important;
                      gap: 3rem !important; /* Increased spacing between text and images */
                      align-items: center !important;
                      min-height: auto !important;
                    }

                    .case-study-panel:has(.desktop-layout) .case-study-text-content {
                      text-align: center !important;
                      width: 100%;
                      max-width: 100%;
                      margin-bottom: 0 !important;
                    }

                    /* Desktop layout - stack vertically with no rotation */
                    .desktop-layout {
                      flex-direction: column !important;
                      gap: 2rem !important; /* Spacing between images */
                      display: flex !important;
                      position: relative !important;
                      min-height: auto !important;
                      margin-top: 0 !important;
                      width: 100%;
                      align-items: center !important;
                    }

                    .desktop-layout .mockup-primary,
                    .desktop-layout .mockup-secondary,
                    .desktop-layout .mockup-tertiary {
                      position: relative !important;
                      width: 90% !important;
                      max-width: 100% !important;
                      height: auto !important;
                      transform: none !important;
                      top: auto !important;
                      left: auto !important;
                      right: auto !important;
                      bottom: auto !important;
                    }
                  }

                  /* Small mobile devices (max-width: 480px) */
                  @media (max-width: 480px) {
                    /* Intro panel responsive adjustments */
                    .intro-panel {
                      padding: 2.5rem 1rem !important;
                      padding-bottom: 9rem !important;
                    }

                    .case-study-panel {
                      padding: 1.5rem 0.875rem !important;
                      padding-bottom: 9rem !important; /* Increased for full scrollability */
                    }

                    .mobile-layout .case-study-panel {
                      padding: 1.75rem 0.875rem !important;
                      padding-bottom: 9rem !important;
                    }

                    .mobile-layout .case-study-panel-inner {
                      gap: 2.75rem !important; /* Maintain good spacing */
                      min-height: auto !important;
                    }

                    .case-study-panel-inner {
                      gap: 2.75rem !important; /* Spacing for desktop layout */
                      min-height: auto !important;
                    }

                    .case-study-panel:has(.desktop-layout) {
                      padding-bottom: 9rem !important;
                    }

                    .case-study-mockups {
                      min-height: auto;
                    }

                    /* Desktop layout spacing */
                    .desktop-layout {
                      gap: 1.75rem !important;
                      margin-top: 1.25rem;
                    }

                    /* Mobile layout - maintain vertical stacking */
                    .mobile-layout .case-study-mockups {
                      gap: 1.25rem !important;
                    }

                    .mobile-layout .mockup-primary {
                      max-width: 185px !important;
                      width: 58% !important;
                    }

                    .mobile-layout .mockup-secondary {
                      max-width: 170px !important;
                      width: 54% !important;
                    }

                    .mobile-layout .mockup-tertiary {
                      max-width: 155px !important;
                      width: 50% !important;
                    }
                  }

                  /* Very small screens (max-width: 375px) */
                  @media (max-width: 375px) {
                    /* Intro panel responsive adjustments */
                    .intro-panel {
                      padding: 2rem 0.875rem !important;
                      padding-bottom: 8.5rem !important;
                    }

                    .case-study-panel {
                      padding: 1.5rem 0.75rem !important;
                      padding-bottom: 8.5rem !important; /* Increased for full scrollability */
                    }

                    .mobile-layout .case-study-panel {
                      padding: 1.5rem 0.75rem !important;
                      padding-bottom: 8.5rem !important;
                    }

                    .case-study-panel-inner {
                      gap: 2.5rem !important; /* Increased spacing */
                      min-height: auto !important;
                    }

                    .mobile-layout .case-study-panel-inner {
                      gap: 2.5rem !important; /* Maintain good spacing for mobile layout */
                    }

                    .case-study-panel:has(.desktop-layout) {
                      padding-bottom: 8.5rem !important;
                    }

                    .case-study-mockups {
                      min-height: auto;
                    }

                    /* Mobile layout - maintain vertical stacking */
                    .mobile-layout .case-study-mockups {
                      gap: 1.25rem !important;
                    }

                    .mobile-layout .mockup-primary {
                      max-width: 175px !important;
                      width: 58% !important;
                    }

                    .mobile-layout .mockup-secondary {
                      max-width: 160px !important;
                      width: 54% !important;
                    }

                    .mobile-layout .mockup-tertiary {
                      max-width: 145px !important;
                      width: 50% !important;
                    }
                  }

                  /* Extra small screens (320px) - Production ready! */
                  @media (max-width: 320px) {
                    /* Intro panel responsive adjustments */
                    .intro-panel {
                      padding: 1.75rem 0.75rem !important;
                      padding-bottom: 8rem !important;
                    }

                    .case-study-panel {
                      padding: 1.25rem 0.625rem !important;
                      padding-bottom: 8rem !important; /* Increased for full scrollability */
                    }

                    .mobile-layout .case-study-panel {
                      padding: 1.25rem 0.625rem !important;
                      padding-bottom: 8rem !important;
                    }

                    .case-study-panel-inner {
                      gap: 2.25rem !important; /* Maintain spacing */
                      min-height: auto !important;
                    }

                    .mobile-layout .case-study-panel-inner {
                      gap: 2.25rem !important; /* Maintain good spacing for mobile layout */
                    }

                    .case-study-panel:has(.desktop-layout) {
                      padding-bottom: 8rem !important;
                    }

                    .case-study-mockups {
                      min-height: auto;
                    }

                    /* Mobile layout - maintain vertical stacking */
                    .mobile-layout .case-study-mockups {
                      gap: 1rem !important;
                    }

                    .mobile-layout .mockup-primary {
                      max-width: 160px !important;
                      width: 56% !important;
                    }

                    .mobile-layout .mockup-secondary {
                      max-width: 145px !important;
                      width: 52% !important;
                    }

                    .mobile-layout .mockup-tertiary {
                      max-width: 130px !important;
                      width: 48% !important;
                    }
                  }
                `}
              </style>

              {/* Intro Panel */}
              <div className={`intro-panel ${isVerticalLayout ? 'min-h-full' : 'min-w-full'} w-full h-full snap-start flex flex-col items-center justify-center px-6 py-12 bg-[var(--bg-secondary)]`}>
                <motion.div
                  className="max-w-3xl text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-[var(--bg-primary)] border-2 border-[var(--accent-cyan)]/40 text-[var(--text-tertiary)] text-xs pixel-text uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-[var(--accent-cyan)] animate-pulse" />
                    <span>Case Study</span>
                  </div>

                  {/* Title */}
                  <h1
                    className="text-6xl md:text-7xl font-bold gradient-text mb-6 leading-tight"
                    style={{ fontFamily: 'var(--font-pixel)' }}
                  >
                    {caseStudy.title}
                  </h1>

                  {/* Description */}
                  <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
                    {caseStudy.description}
                  </p>
                </motion.div>
              </div>

              {/* Feature Panels */}
              {caseStudy.panels.map((panel, index) => {
                const totalMockups = panel.mockups.length;

                return (
                  <div
                    key={index}
                    className={`case-study-panel ${isVerticalLayout ? 'min-h-full' : 'min-w-full'} w-full h-full snap-start flex items-center justify-center px-6 md:px-12 py-12`}
                    style={{
                      backgroundColor: index % 2 === 0 ? 'var(--bg-secondary)' : 'var(--bg-primary)'
                    }}
                  >
                    <div className="case-study-panel-inner max-w-7xl w-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                      {/* Text Content */}
                      <div className="case-study-text-content flex-shrink-0 lg:w-80 flex flex-col gap-4 animate-fade-in">
                        {/* Feature Label */}
                        <div className="flex items-center gap-2 text-xs text-[var(--text-tertiary)] pixel-text uppercase tracking-widest">
                          <span className="w-1 h-1 rounded-full bg-[var(--accent-cyan)]" />
                          <span>{panel.label}</span>
                        </div>

                        {/* Feature Title */}
                        <h2
                          className="text-4xl md:text-5xl lg:text-4xl font-bold text-[var(--text-primary)] leading-tight"
                          style={{ fontFamily: 'var(--font-pixel)' }}
                        >
                          {panel.title}
                        </h2>

                        {/* Feature Description */}
                        <p className="text-lg md:text-base text-[var(--text-secondary)] leading-relaxed">
                          {panel.description}
                        </p>
                      </div>

                      {/* Mockups Container */}
                      <div className={`case-study-mockups ${imageType === 'desktop' ? 'desktop-layout' : 'mobile-layout'} flex-1 flex ${imageType === 'desktop' ? 'gap-4' : 'gap-6'} items-center justify-center animate-fade-in relative`}>
                        {panel.mockups.map((mockup, mockupIndex) => {
                          const imageKey = `${index}-${mockupIndex}`;
                          const isActive = activeImageIndex === imageKey;

                          // Calculate responsive dimensions based on imageType and number of mockups
                          let mockupHeight, mockupMaxHeight, mockupWidth, mockupMaxWidth, mockupClass;

                          if (imageType === 'desktop') {
                            // Desktop screenshots - significantly larger dimensions
                            if (totalMockups === 1) {
                              mockupWidth = '95%';
                              mockupMaxWidth = '1600px';
                              mockupClass = 'mockup-primary';
                            } else if (totalMockups === 2) {
                              mockupWidth = '48%';
                              mockupMaxWidth = '850px';
                              mockupClass = mockupIndex === 0 ? 'mockup-primary' : 'mockup-secondary';
                            } else {
                              mockupWidth = '31%';
                              mockupMaxWidth = '550px';
                              mockupClass = mockupIndex === 0 ? 'mockup-primary' : mockupIndex === 1 ? 'mockup-secondary' : 'mockup-tertiary';
                            }
                            mockupHeight = 'auto';
                            mockupMaxHeight = 'none';
                          } else {
                            // Mobile screenshots - original sizing logic
                            if (totalMockups === 1) {
                              mockupHeight = '65vh';
                              mockupMaxHeight = '600px';
                              mockupClass = 'mockup-primary';
                            } else if (totalMockups === 2) {
                              mockupHeight = mockupIndex === 0 ? '60vh' : '55vh';
                              mockupMaxHeight = mockupIndex === 0 ? '560px' : '520px';
                              mockupClass = mockupIndex === 0 ? 'mockup-primary' : 'mockup-secondary';
                            } else {
                              mockupHeight = mockupIndex === 0 ? '65vh' : mockupIndex === 1 ? '50vh' : '42vh';
                              mockupMaxHeight = mockupIndex === 0 ? '600px' : mockupIndex === 1 ? '460px' : '380px';
                              mockupClass = mockupIndex === 0 ? 'mockup-primary' : mockupIndex === 1 ? 'mockup-secondary' : 'mockup-tertiary';
                            }
                            mockupWidth = 'auto';
                            mockupMaxWidth = 'none';
                          }

                          // Calculate horizontal shift for neighboring images
                          let xShift = 0;
                          if (activeImageIndex) {
                            const activeIndex = parseInt(activeImageIndex.split('-')[1]);
                            if (mockupIndex < activeIndex) {
                              xShift = -50;
                            } else if (mockupIndex > activeIndex) {
                              xShift = 50;
                            }
                          }

                          const activeScale = 1;
                          const inactiveScale = activeImageIndex ? 0.82 : 1;

                          return (
                            <motion.div
                              key={mockupIndex}
                              className={`${mockupClass} relative overflow-hidden bg-[var(--bg-tertiary)] border-2 border-[var(--accent-cyan)]/30 hover:border-[var(--accent-cyan)] cursor-pointer ${isActive ? 'zoomed-image active-mobile' : ''}`}
                              style={{
                                borderRadius: '0.5rem',
                                height: mockupHeight,
                                maxHeight: mockupMaxHeight,
                                width: mockupWidth,
                                maxWidth: mockupMaxWidth,
                                willChange: 'transform, opacity',
                                backfaceVisibility: 'hidden',
                                perspective: 1000,
                                transformStyle: 'preserve-3d',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}
                              onClick={() => {
                                setActiveImageIndex(isActive ? null : imageKey);
                              }}
                              animate={{
                                scale: isActive ? activeScale : inactiveScale,
                                x: isActive ? 0 : xShift,
                                opacity: activeImageIndex && !isActive ? 0.35 : 1,
                                zIndex: isActive ? 10 : 1
                              }}
                              transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 30,
                                mass: 0.8
                              }}
                              whileHover={!isActive && !activeImageIndex ? {
                                y: -8,
                                transition: { duration: 0.2 }
                              } : {}}
                            >
                              {/* Mockup Image */}
                              <img
                                src={mockup.src}
                                alt={mockup.alt}
                                className="w-full h-full object-contain"
                                style={{
                                  background: 'var(--bg-primary)',
                                  pointerEvents: 'none',
                                  imageRendering: 'auto',
                                  backfaceVisibility: 'hidden',
                                  transform: 'translateZ(0)',
                                  WebkitFontSmoothing: 'antialiased',
                                  borderRadius: '0.5rem'
                                }}
                                loading="lazy"
                              />
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Navigation Dots - Adaptive positioning */}
            <div
              className={`absolute z-[10001] ${
                isVerticalLayout
                  ? 'right-4 top-1/2 -translate-y-1/2 flex-col gap-3 py-4 px-2'
                  : 'bottom-6 left-1/2 -translate-x-1/2 flex-row gap-2 px-5 py-3'
              } flex bg-[var(--bg-primary)]/90 backdrop-blur-sm border-2 border-[var(--accent-cyan)]/40 ${
                isVerticalLayout ? 'rounded-lg' : 'rounded-full'
              }`}
              style={{
                boxShadow: '0 0 15px rgba(0, 255, 255, 0.2)'
              }}
            >
              {Array.from({ length: totalPanels }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => navigateToPanel(index)}
                  className={`transition-all ${
                    currentPanel === index
                      ? isVerticalLayout
                        ? 'h-8 w-2 bg-[var(--accent-cyan)] rounded-sm'
                        : 'w-8 h-2 bg-[var(--accent-cyan)] rounded-sm'
                      : 'w-2 h-2 bg-[var(--text-tertiary)]/30 hover:bg-[var(--text-tertiary)]/60 rounded-full'
                  }`}
                  style={{ cursor: 'none' }}
                  aria-label={`Go to panel ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
