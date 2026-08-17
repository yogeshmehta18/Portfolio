import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (documentHeight > windowHeight) {
        const scrolled = (scrollTop / (documentHeight - windowHeight)) * 100;
        setScrollPercentage(Math.min(100, Math.max(0, scrolled)));
      } else {
        setScrollPercentage(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '3px',
        zIndex: 9999,
        pointerEvents: 'none',
        backgroundColor: 'transparent'
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${scrollPercentage}%`,
          background: 'linear-gradient(90deg, var(--accent-1), var(--accent-2), var(--accent-3))',
          boxShadow: '0 0 10px var(--glass-glow)',
          transition: 'width 0.1s ease-out'
        }}
      />
    </div>
  );
};

export default ScrollProgress;
