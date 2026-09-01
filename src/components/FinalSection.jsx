import React, { useEffect, useRef } from 'react';
import { siteContent } from '../data/content';
import { useAudio } from '../context/AudioContext';
import { renderTextWithEmoji } from '../utils/emoji';

const FinalSection = () => {
  const { fadeOutFinal } = useAudio();
  const sectionRef = useRef(null);
  const hasFadedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasFadedRef.current) {
            hasFadedRef.current = true;
            // Slowly fade out music over 6 seconds as user reaches the final closing lines
            fadeOutFinal(6000);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [fadeOutFinal]);

  return (
    <section
      ref={sectionRef}
      id="final-section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        padding: '120px 24px 80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        zIndex: 10,
        background: 'linear-gradient(180deg, transparent 0%, rgba(4, 6, 13, 0.95) 60%, #04060d 100%)'
      }}
    >
      <div style={{ maxWidth: '750px', width: '100%' }}>
        <p className="font-serif-heading" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: '#94a3b8', fontWeight: 300, marginBottom: '32px', lineHeight: 1.3 }}>
          {renderTextWithEmoji(siteContent.finalSection.line1)}
        </p>

        <h2 className="font-serif-heading text-gradient-lavender" style={{ fontSize: 'clamp(2.6rem, 7vw, 4.4rem)', fontWeight: 600, marginBottom: '36px', lineHeight: 1.2 }}>
          {renderTextWithEmoji(siteContent.finalSection.line2)}
        </h2>

        <p className="font-serif-heading" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: '#f8fafc', fontWeight: 400, marginBottom: '64px' }}>
          {renderTextWithEmoji(siteContent.finalSection.line3)}
        </p>

        <div style={{ width: '60px', height: '1px', background: 'rgba(255, 255, 255, 0.15)', margin: '0 auto 48px' }} />

        {/* Closing Signature */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <p className="font-mono-code" style={{ fontSize: '0.85rem', color: '#64748b', letterSpacing: '0.02em' }}>
            {renderTextWithEmoji(siteContent.finalSection.footerText)}
          </p>

          <span className="font-serif-heading" style={{ fontSize: '1.4rem', color: '#c4b5fd', fontWeight: 600, marginTop: '4px' }}>
            {renderTextWithEmoji(siteContent.finalSection.signoff)}
          </span>
        </div>
      </div>
    </section>
  );
};

export default FinalSection;
