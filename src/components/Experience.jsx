import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Software Development Intern (Online)",
    company: "30-Day Internship Program",
    duration: "Recent Internship",
    location: "Remote",
    points: [
      "Completed a 30-day online internship, gaining hands-on experience in software development and industry-oriented projects.",
      "Applied programming and problem-solving skills to complete assigned tasks and project deliverables within deadlines.",
      "Designed and implemented a multilingual text translation application using Microsoft Azure AI Translator Service.",
      "Integrated AI services to automate content generation and improve user productivity."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', marginBottom: '3.5rem', textAlign: 'center' }}>
          Professional <span className="heading-gradient">Experience</span>.
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', position: 'relative' }}>
          {/* Vertical Glowing Timeline Line */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '42px',
              width: '2px',
              background: 'linear-gradient(180deg, var(--accent-1), var(--accent-2), transparent)',
              zIndex: 0,
              opacity: 0.6
            }}
          />

          {experiences.map((exp, index) => (
            <div key={index} className="glass-panel tilt-card" style={{ padding: 'clamp(2rem, 4vw, 3.5rem)', position: 'relative', width: '100%', zIndex: 1 }}>
              <div style={{ position: 'absolute', top: '-18px', left: '32px', background: 'var(--bg-color)', padding: '0.65rem', borderRadius: '50%', border: '1px solid var(--badge-border)', boxShadow: '0 0 15px var(--glass-glow)', display: 'flex', animation: 'pulse-glow 4s infinite' }}>
                <Briefcase size={22} color="var(--accent-1)" />
              </div>
              <h3 style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)', color: 'var(--text-primary)', marginBottom: '0.6rem', marginTop: '0.6rem' }}>
                {exp.role}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', alignItems: 'center', marginBottom: '1.8rem', fontSize: '1rem' }}>
                <span style={{ color: 'var(--accent-2)', fontWeight: '600', background: 'var(--badge-bg)', border: '1px solid var(--badge-border)', padding: '0.25rem 0.85rem', borderRadius: '20px' }}>
                  {exp.company}
                </span>
                <span style={{ color: 'var(--text-secondary)' }}>•</span>
                <span style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>{exp.duration}</span>
                <span style={{ color: 'var(--text-secondary)' }}>•</span>
                <span style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>{exp.location}</span>
              </div>
              <ul style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1rem, 1.2vw, 1.15rem)', lineHeight: '1.85', paddingLeft: '1.4rem', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
