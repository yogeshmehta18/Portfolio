import { useEffect, useState } from 'react';

const MouseSpotlight = () => {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isTouchDevice) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, var(--glass-glow), transparent 80%)`,
        transition: 'background 0.05s ease-out',
        opacity: 0.7
      }}
    />
  );
};

export default MouseSpotlight;
