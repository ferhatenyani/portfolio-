import { useEffect, useState, useCallback, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * PixelCursor - OPTIMIZED: Custom 16x16 pixel cursor with throttled updates
 * Uses useMotionValue and useSpring for GPU-accelerated smooth animation
 * Reduced event firing from 100+/sec to ~60fps with requestAnimationFrame
 */
export default function PixelCursor() {
  const [isPointer, setIsPointer] = useState(false);

  // Use motion values for better performance (bypasses React render cycle)
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Smooth spring animation for cursor movement - optimized settings
  const springConfig = { stiffness: 400, damping: 25, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Use ref to track RAF to prevent memory leaks
  const rafRef = useRef(null);

  // Optimized cursor type detection - defined outside useEffect
  const updateCursorType = useCallback((e) => {
    const target = e.target;
    const isClickable =
      target.tagName === 'A' ||
      target.tagName === 'BUTTON' ||
      target.onclick !== null ||
      target.closest('a, button, [role="button"]') ||
      window.getComputedStyle(target).cursor === 'pointer';

    setIsPointer(isClickable);
  }, []);

  useEffect(() => {
    let targetX = 0;
    let targetY = 0;

    // Throttled update using requestAnimationFrame
    const updateCursorPosition = () => {
      // Snap to 4px grid for pixel feel
      cursorX.set(Math.round(targetX / 4) * 4 - 8);
      cursorY.set(Math.round(targetY / 4) * 4 - 8);
    };

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;

      // Cancel previous frame and schedule new one
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(updateCursorPosition);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', updateCursorType, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', updateCursorType);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [cursorX, cursorY, updateCursorType]);

  return (
    <motion.div
      className={`pixel-cursor ${isPointer ? 'active' : ''}`}
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        willChange: 'transform',
        transform: 'translateZ(0)' // GPU acceleration
      }}
    />
  );
}
