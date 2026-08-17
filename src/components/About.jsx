import { Database, Brain, Cloud, Terminal, GraduationCap, CheckCircle2, Award, FileText, CheckCircle } from 'lucide-react';

const skillCategories = [
  {
    category: 'Programming Languages & Web Dev',
    icon: Terminal,
    color: 'var(--accent-1)',
    skills: ['Python (FastAPI, REST API)', 'C/C++ (DSA)', 'JavaScript', 'HTML', 'CSS', 'React', 'React.js', 'Node.js']
  },
  {
    category: 'AI & Machine Learning',
    icon: Brain,
    color: 'var(--accent-2)',
    skills: ['Azure Cognitive Services', 'Computer Vision Applications', 'Generative AI', 'Nutanix AI Platform', 'LLMs', 'Prompt Engineering', 'NLP Basics']
  },
  {
    category: 'Cloud & Infrastructure',
    icon: Cloud,
    color: 'var(--accent-3)',
    skills: ['Microsoft Azure', 'Microsoft Fabric', 'Fortinet Platform', 'Compute Engine Load Balancing', 'Nutanix Calm', 'Cloud Automation', 'Infrastructure Automation']
  },
  {
    category: 'Databases & Developer Tools',
    icon: Database,
    color: 'var(--text-primary)',
    skills: ['MongoDB', 'MySQL', 'Data Fundamentals', 'Microsoft Fabric Data Engineering', 'Azure Portal', 'Microsoft Fabric', 'Google Cloud Console', 'SQL']
  }
];

const stats = [
  { number: '6+', label: 'Cloud & AI Certifications', icon: Award, color: 'var(--accent-2)' },
  { number: '2+', label: 'AI/ML-Centric Projects', icon: FileText, color: 'var(--accent-1)' },
  { number: '2029', label: 'Target Graduation Year', icon: CheckCircle, color: 'var(--accent-3)' }
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem', width: '100%' }}>
          
          {/* Main About & Education Side-by-Side / Wide Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2.5rem', alignItems: 'center', width: '100%' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', marginBottom: '0.5rem' }}>
                About <span className="heading-gradient">Me</span>.
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1.05rem, 1.3vw, 1.25rem)', lineHeight: '1.85' }}>
                Microsoft, Nutanix, Fortinet, IBM AI, and Microsoft Badge-certified Computer Science (AI & ML) student with a strong foundation in Artificial Intelligence, Machine Learning, Cloud Computing, and Cybersecurity. Skilled in Python, SQL, Web Development, and AI-powered solutions, with hands-on experience in cloud and software development projects. Passionate about leveraging emerging technologies to solve real-world problems and contribute to innovative AI/ML and cloud-driven solutions.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '2.5rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start', textAlign: 'left', width: '100%', height: '100%', justifyContent: 'center', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '0.5rem' }}>
                <div style={{ background: 'var(--badge-bg)', padding: '1rem', borderRadius: '14px', border: '1px solid var(--badge-border)', display: 'flex' }}>
                  <GraduationCap size={36} color="var(--accent-1)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>Chandigarh University</h3>
                  <p style={{ color: 'var(--accent-2)', fontWeight: '600', fontSize: '1.05rem' }}>Bachelor of Technology in Computer Science and Engineering</p>
                </div>
              </div>
              <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '1rem', width: '100%' }}>
                <p style={{ color: 'var(--accent-1)', fontWeight: '600', marginBottom: '0.4rem', fontSize: '0.98rem' }}>AI & ML Specialization</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>July 2025 – July 2029 | Uttar Pradesh, India</p>
              </div>
            </div>

          </div>

          {/* Animated Stat Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.8rem', width: '100%' }}>
            {stats.map((stat, i) => {
              const IconComp = stat.icon;
              return (
                <div key={i} className="glass-panel tilt-card" style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                  <div style={{ background: 'var(--badge-bg)', padding: '1rem', borderRadius: '16px', border: '1px solid var(--badge-border)', display: 'flex' }}>
                    <IconComp size={30} color={stat.color} />
                  </div>
                  <div>
                    <p className="heading-gradient" style={{ fontSize: '2.2rem', fontWeight: 900, lineHeight: 1 }}>{stat.number}</p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', fontWeight: 500, marginTop: '0.3rem' }}>{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Technical Skills Section */}
          <div style={{ width: '100%' }}>
            <h3 style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', marginBottom: '2.5rem', textAlign: 'center' }}>
              Technical <span className="heading-gradient">Skills & Expertise</span>.
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', width: '100%' }}>
              {skillCategories.map((cat, index) => {
                const IconComp = cat.icon;
                return (
                  <div key={index} className="glass-panel tilt-card" style={{ padding: '2.2rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <h4 style={{ fontSize: '1.3rem', marginBottom: '1.4rem', color: cat.color, display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <IconComp size={24} /> {cat.category}
                    </h4>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                      {cat.skills.map((skill, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: '0.9rem',
                            padding: '0.5rem 1rem',
                            background: 'var(--badge-bg)',
                            border: '1px solid var(--badge-border)',
                            borderRadius: '20px',
                            color: 'var(--text-primary)',
                            fontWeight: '500',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            transition: 'all 0.25s ease'
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.borderColor = cat.color;
                            e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)';
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.borderColor = 'var(--badge-border)';
                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                          }}
                        >
                          <CheckCircle2 size={14} color={cat.color} /> {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Soft Skills Banner */}
            <div className="glass-panel" style={{ padding: '1.8rem 2.5rem', marginTop: '2.5rem', width: '100%' }}>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', textAlign: 'center', lineHeight: '1.6' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Soft Skills:</strong> Creative Problem Solving • Team Collaboration • Communication Skills • Project Management • Time Management • Analytical Thinking • Adaptability • Critical Thinking
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
