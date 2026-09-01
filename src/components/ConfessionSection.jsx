import React from 'react';
import { siteContent } from '../data/content';
import { Heart } from 'lucide-react';

const ConfessionSection = () => {
  return (
    <section
      id="confession-section"
      style={{
        position: 'relative',
        minHeight: '90vh',
        padding: '100px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        zIndex: 10
      }}
    >
      {/* Background Soft Glow */}
      <div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(244, 114, 182, 0.12) 0%, rgba(4, 6, 13, 0) 70%)',
          pointerEvents: 'none'
        }}
      />

      <div style={{ maxWidth: '680px', width: '100%', position: 'relative', zIndex: 1 }}>
        <p className="font-serif-heading" style={{ fontSize: '1.8rem', color: '#94a3b8', fontStyle: 'italic', marginBottom: '16px' }}>
          {siteContent.confession.leadIn}
        </p>

        <h2 className="font-serif-heading" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', color: '#cbd5e1', fontWeight: 300, marginBottom: '32px' }}>
          {siteContent.confession.pauseText}
        </h2>

        <div style={{ height: '1px', width: '80px', background: 'linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.5), transparent)', margin: '0 auto 40px' }} />

        <h1 className="font-serif-heading text-gradient-pink" style={{ fontSize: 'clamp(3rem, 8vw, 5.2rem)', fontWeight: 700, margin: '0 0 36px 0', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
          {siteContent.confession.statement}
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {siteContent.confession.details.map((line, idx) => (
            <p
              key={idx}
              style={{
                fontSize: 'clamp(1.15rem, 2.8vw, 1.4rem)',
                color: idx === siteContent.confession.details.length - 1 ? '#f8fafc' : '#94a3b8',
                fontWeight: idx === siteContent.confession.details.length - 1 ? 500 : 300,
                lineHeight: 1.6
              }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConfessionSection;
