import { useState } from 'react';
import { Award, ExternalLink } from 'lucide-react';

const certs = [
  { name: 'Microsoft Certified: Azure AI Fundamentals (AI-900)', url: 'https://www.linkedin.com/posts/yogesh-mehta-452b57375_microsoftcertified-azureai-ai900-share-7453412249576243200-Ymnw/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFzlmr4BJZc7TA08mmo7PQWn7rvj_fRvVNw' },
  { name: 'IBM AI Fundamentals', url: 'https://www.linkedin.com/posts/yogesh-mehta-452b57375_ibmskillsbuild-aifundamentals-artificialintelligence-activity-7416130511099576320-KBim?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFzlmr4BJZc7TA08mmo7PQWn7rvj_fRvVNw' },
  { name: 'Fortinet Certified: Introduction to the Threat Landscape 3.0', url: 'https://www.linkedin.com/posts/yogesh-mehta-452b57375_fortinet-cybersecurity-threatlandscape-share-7452085408814792704-cT_l/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFzlmr4BJZc7TA08mmo7PQWn7rvj_fRvVNw' },
  { name: 'Nutanix Certified Professional', url: 'https://www.linkedin.com/posts/yogesh-mehta-452b57375_nutanix-certified-professional-multicloud-activity-7427021870077558784-Z2Km?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFzlmr4BJZc7TA08mmo7PQWn7rvj_fRvVNw' },
  { name: 'Microsoft Applied Skills & Badges', url: '' },
  { name: 'Nutanix Certified Professional - Multicloud Infrastructure 6', url: 'https://www.linkedin.com/posts/yogesh-mehta-452b57375_nutanix-nutanixuniversity-cloudcomputing-activity-7427018391103725569-p1M_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFzlmr4BJZc7TA08mmo7PQWn7rvj_fRvVNw' },
  { name: 'Data Analysis Using Python - IBM', url: '' }
];

const TiltCertCard = ({ cert }) => {
  const [transformStyle, setTransformStyle] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (centerY - y) / 12;
    const rotateY = (x - centerX) / 12;

    setTransformStyle(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.025)`);
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');
  };

  return (
    <div
      className="glass-panel tilt-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        padding: '1.8rem 2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1.2rem',
        height: '100%',
        width: '100%',
        transition: 'transform 0.15s ease-out, box-shadow 0.2s ease-out'
      }}
    >
      <div style={{ background: 'var(--badge-bg)', border: '1px solid var(--badge-border)', padding: '0.9rem', borderRadius: '50%', flexShrink: 0, display: 'flex' }}>
        <Award size={26} color="var(--accent-2)" />
      </div>
      <div style={{ flexGrow: 1 }}>
        {cert.url ? (
          <a
            href={cert.url}
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--text-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', transition: 'color 0.2s' }}
            onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent-2)')}
            onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
          >
            <p style={{ fontSize: '1rem', lineHeight: '1.45', fontWeight: '600', margin: 0 }}>{cert.name}</p>
            <ExternalLink size={16} style={{ flexShrink: 0, color: 'var(--text-secondary)' }} />
          </a>
        ) : (
          <p style={{ color: 'var(--text-primary)', fontSize: '1rem', lineHeight: '1.45', fontWeight: '600', margin: 0 }}>{cert.name}</p>
        )}
      </div>
    </div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', marginBottom: '3rem', textAlign: 'center' }}>
          Licenses & <span className="heading-gradient">Certifications</span>.
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))', gap: '1.8rem', width: '100%' }}>
          {certs.map((cert, index) => (
            <TiltCertCard key={index} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
