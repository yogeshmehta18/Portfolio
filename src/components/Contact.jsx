import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section" style={{ paddingBottom: '4rem' }}>
      <div className="blob blob-2"></div>
      <div className="container">
        <div className="glass-panel" style={{ padding: 'clamp(2.5rem, 5vw, 4.5rem)', textAlign: 'center', width: '100%' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', marginBottom: '1.2rem' }}>
            Let's <span className="heading-gradient">Connect</span>.
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: 'clamp(1.05rem, 1.3vw, 1.25rem)', maxWidth: '850px', margin: '0 auto 3rem auto', lineHeight: '1.7' }}>
            Open to internships, entry-level positions, and freelance opportunities in AI/ML, cloud automation, and infrastructure engineering. Feel free to connect for collaboration or opportunities.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', alignItems: 'center', marginBottom: '3.5rem' }}>
            <a
              href="mailto:yogeshsharma20122007@gmail.com"
              style={{
                color: 'var(--text-primary)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1rem',
                fontSize: '1.1rem',
                background: 'var(--badge-bg)',
                border: '1px solid var(--badge-border)',
                padding: '0.85rem 1.6rem',
                borderRadius: '30px',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'var(--badge-border)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Mail size={22} color="var(--accent-1)" />
              <span>yogeshsharma20122007@gmail.com</span>
            </a>

            <a
              href="tel:+918290837302"
              style={{
                color: 'var(--text-primary)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1rem',
                fontSize: '1.1rem',
                background: 'var(--badge-bg)',
                border: '1px solid var(--badge-border)',
                padding: '0.85rem 1.6rem',
                borderRadius: '30px',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-2)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'var(--badge-border)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Phone size={22} color="var(--accent-2)" />
              <span>+91 82908 37302</span>
            </a>

            <div
              style={{
                color: 'var(--text-primary)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1rem',
                fontSize: '1.1rem',
                background: 'var(--badge-bg)',
                border: '1px solid var(--badge-border)',
                padding: '0.85rem 1.6rem',
                borderRadius: '30px'
              }}
            >
              <MapPin size={22} color="var(--accent-3)" />
              <span>Jaipur, Rajasthan, India</span>
            </div>
          </div>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=yogeshsharma20122007@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            style={{ padding: '1rem 3.5rem', fontSize: '1.15rem' }}
          >
            Get In Touch <Send size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
