import { Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full relative z-10 border-t border-[var(--glass-border)] bg-[var(--nav-bg)] backdrop-blur-md py-8 mt-16">
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="nav-logo-badge">Y</span>
            <div>
              <p style={{ fontWeight: '800', fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                Yogesh Sharma<span className="heading-gradient">.</span>
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Computer Science (AI & ML) Student
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href="https://www.linkedin.com/in/yogesh-mehta-452b57375"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              style={{ padding: '0.6rem', borderRadius: '50%', display: 'flex' }}
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:yogeshsharma20122007@gmail.com"
              className="btn-secondary"
              style={{ padding: '0.6rem', borderRadius: '50%', display: 'flex' }}
              title="Email"
            >
              <Mail size={18} />
            </a>
            <button
              onClick={scrollToTop}
              className="btn btn-primary"
              style={{ padding: '0.6rem', borderRadius: '50%', display: 'flex', marginLeft: '0.5rem' }}
              title="Back to Top"
              type="button"
            >
              <ArrowUp size={18} />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
