import React from 'react';
import { siteContent } from '../data/content';
import { Shield, Sparkles, Compass, HeartHandshake } from 'lucide-react';

const iconMap = {
  Shield: Shield,
  Sparkles: Sparkles,
  Compass: Compass,
  HeartHandshake: HeartHandshake
};

const ThingsToKnow = () => {
  return (
    <section
      id="things-to-know-section"
      style={{
        position: 'relative',
        minHeight: '80vh',
        padding: '100px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '700px', marginBottom: '56px' }}>
        <h2 className="font-serif-heading text-gradient-lavender" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: 400, marginBottom: '12px' }}>
          A Few Things I Want You To Know
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '1rem', fontWeight: 300 }}>
          Simple truths from me to you, without any pressure.
        </p>
      </div>

      <div
        style={{
          maxWidth: '1000px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px'
        }}
      >
        {siteContent.thingsToKnow.map((item) => {
          const IconComponent = iconMap[item.icon] || Sparkles;
          return (
            <div
              key={item.id}
              className="glass-panel glass-card-interactive"
              style={{
                padding: '32px 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                textAlign: 'left'
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'rgba(168, 85, 247, 0.1)',
                  border: '1px solid rgba(168, 85, 247, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#c4b5fd',
                  marginBottom: '20px'
                }}
              >
                <IconComponent size={24} />
              </div>

              <span style={{ fontSize: '0.78rem', color: '#a855f7', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '6px' }}>
                {item.subtitle}
              </span>

              <h3 className="font-serif-heading" style={{ fontSize: '1.6rem', fontWeight: 600, color: '#f8fafc', marginBottom: '12px' }}>
                {item.title}
              </h3>

              <p style={{ fontSize: '0.95rem', color: '#cbd5e1', fontWeight: 300, lineHeight: 1.6 }}>
                "{item.description}"
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ThingsToKnow;
