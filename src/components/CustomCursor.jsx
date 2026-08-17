import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Disable custom cursor on touch/mobile devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const onMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  // Smooth trailing cursor animation loop
  useEffect(() => {
    if (isTouchDevice) return;

    let animationFrameId;

    const animateTrailing = () => {
      setTrailingPos((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.18,
          y: prev.y + dy * 0.18
        };
      });
      animationFrameId = requestAnimationFrame(animateTrailing);
    };

    animationFrameId = requestAnimationFrame(animateTrailing);

    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Outer Glowing Ring */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovered ? '48px' : '32px',
          height: isHovered ? '48px' : '32px',
          borderRadius: '50%',
          border: '1.5px solid var(--accent-2)',
          backgroundColor: isHovered ? 'rgba(6, 182, 212, 0.12)' : 'transparent',
          transform: `translate3d(${trailingPos.x - (isHovered ? 24 : 16)}px, ${trailingPos.y - (isHovered ? 24 : 16)}px, 0)`,
          pointerEvents: 'none',
          zIndex: 9998,
          boxShadow: '0 0 15px var(--glass-glow)',
          transition: 'width 0.2s ease, height 0.2s ease, background-color 0.2s ease',
          willChange: 'transform'
        }}
      />
      {/* Core Pointer Dot */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: 'var(--accent-1)',
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
          pointerEvents: 'none',
          zIndex: 9999,
          boxShadow: '0 0 8px var(--accent-1)',
          willChange: 'transform'
        }}
      />
    </>
  );
};

export default CustomCursor;
