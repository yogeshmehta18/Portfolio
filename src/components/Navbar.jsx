import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Coffee } from 'lucide-react';

const Navbar = ({ currentTheme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`navbar ${scrolled ? 'glass-panel' : ''}`}
      style={
        scrolled
          ? { borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderRadius: 0 }
          : { background: 'var(--nav-bg)', borderBottom: '1px solid var(--glass-border)' }
      }
    >
      <div className="container">
        <a href="#" className="nav-logo" title="Yogesh Sharma">
          <span className="nav-brand-script">Yogesh Sharma</span>
        </a>

        <div className="nav-right-group">
          {/* Theme Switcher Pill */}
          <div className="theme-switcher-pill" title="Switch Theme">
            <button
              className={`theme-btn ${currentTheme === 'white' ? 'active' : ''}`}
              onClick={() => toggleTheme('white')}
              type="button"
            >
              <Sun size={14} /> White
            </button>
            <button
              className={`theme-btn ${currentTheme === 'black' ? 'active' : ''}`}
              onClick={() => toggleTheme('black')}
              type="button"
            >
              <Moon size={14} /> Black
            </button>
            <button
              className={`theme-btn ${currentTheme === 'brown' ? 'active' : ''}`}
              onClick={() => toggleTheme('brown')}
              type="button"
            >
              <Coffee size={14} /> Brown
            </button>
          </div>

          {/* Desktop Nav Links */}
          <ul className="nav-links nav-links-desktop">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Work</a></li>
            <li><a href="#certifications">Certs</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <a
                href="/Yogesh Sharma Resume.pdf"
                download="Yogesh Sharma Resume.pdf"
                className="btn btn-primary"
                style={{ padding: '0.45rem 1.2rem', fontSize: '0.88rem' }}
              >
                Resume
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger Toggle Button */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            type="button"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="mobile-menu">
          <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
          <a href="#experience" onClick={() => setMobileOpen(false)}>Experience</a>
          <a href="#projects" onClick={() => setMobileOpen(false)}>Work</a>
          <a href="#certifications" onClick={() => setMobileOpen(false)}>Certs</a>
          <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
          <a
            href="/Yogesh Sharma Resume.pdf"
            download="Yogesh Sharma Resume.pdf"
            className="btn btn-primary"
            style={{ width: '100%', textAlign: 'center', marginTop: '0.5rem' }}
            onClick={() => setMobileOpen(false)}
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
