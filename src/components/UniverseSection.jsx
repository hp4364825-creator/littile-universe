import React, { useState } from 'react';
import { siteContent } from '../data/content';
import { Sparkles, Moon, X, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { renderTextWithEmoji } from '../utils/emoji';

const UniverseSection = () => {
  const [showMoonModal, setShowMoonModal] = useState(false);
  const moonInfo = siteContent.universe.moonPhoto;

  const handleMoonClick = () => {
    setShowMoonModal(true);
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { x: 0.8, y: 0.25 },
        colors: ['#fef08a', '#c4b5fd', '#f472b6']
      });
    } catch (e) {}
  };

  return (
    <section
      id="universe-hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 80px',
        textAlign: 'center',
        zIndex: 10
      }}
    >
      {/* Interactive Glowing Moon Button */}
      <div
        onClick={handleMoonClick}
        title="Tap the Moon for a special surprise 🌙"
        style={{
          position: 'absolute',
          top: '12%',
          right: '10%',
          width: '130px',
          height: '130px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(254, 240, 138, 0.35) 0%, rgba(196, 181, 253, 0.15) 50%, rgba(4, 6, 13, 0) 75%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 60px rgba(254, 240, 138, 0.3), 0 0 30px rgba(196, 181, 253, 0.2)',
          cursor: 'pointer',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          animation: 'moonPulse 4s ease-in-out infinite',
          zIndex: 20
        }}
        className="hero-moon-btn glass-card-interactive"
      >
        <style>{`
          @keyframes moonPulse {
            0%, 100% { transform: scale(1); box-shadow: 0 0 50px rgba(254, 240, 138, 0.25); }
            50% { transform: scale(1.06); box-shadow: 0 0 70px rgba(254, 240, 138, 0.45); }
          }
        `}</style>
        <Moon size={54} color="#fef08a" style={{ opacity: 0.95, filter: 'drop-shadow(0 0 16px rgba(254, 240, 138, 0.6))' }} />
        <span style={{ fontSize: '0.72rem', color: '#fef08a', marginTop: '4px', fontWeight: 600, letterSpacing: '0.05em', textShadow: '0 0 8px rgba(254, 240, 138, 0.8)' }}>
          TAP ME 🌙
        </span>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.04)', padding: '6px 16px', borderRadius: '9999px', border: '1px solid rgba(255, 255, 255, 0.08)', marginBottom: '24px' }}>
          <Sparkles size={16} color="#c4b5fd" />
          <span style={{ fontSize: '0.85rem', color: '#c4b5fd', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Cosmic Connection
          </span>
        </div>

        <h2 className="font-serif-heading" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 300, lineHeight: 1.25, color: '#f8fafc', marginBottom: '24px' }}>
          {renderTextWithEmoji(siteContent.universe.line1)}
        </h2>

        <p className="font-serif-heading text-gradient-lavender" style={{ fontSize: 'clamp(2.6rem, 6vw, 4.2rem)', fontWeight: 600, lineHeight: 1.2, marginBottom: '28px' }}>
          {renderTextWithEmoji(siteContent.universe.line2)}
        </p>

        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', color: '#cbd5e1', fontWeight: 300, maxWidth: '600px', margin: '0 auto 40px' }}>
          {renderTextWithEmoji(siteContent.universe.line3)}
        </p>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: '#94a3b8', fontSize: '0.9rem', background: 'rgba(255, 255, 255, 0.03)', padding: '8px 20px', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
          <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: '#a855f7', boxShadow: '0 0 8px #a855f7' }}></span>
          <span>{renderTextWithEmoji(siteContent.universe.instructions)}</span>
        </div>
      </div>

      {/* Moon Photo Reveal Modal — Pixel Perfect Styling */}
      {showMoonModal && (
        <div className="modal-backdrop" onClick={() => setShowMoonModal(false)}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="glass-panel"
            style={{
              maxWidth: '520px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '24px 28px 28px',
              position: 'relative',
              animation: 'moonModalIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              border: '1px solid rgba(254, 240, 138, 0.4)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.85), 0 0 40px rgba(254, 240, 138, 0.25)',
              background: 'linear-gradient(180deg, rgba(13, 19, 41, 0.96) 0%, rgba(4, 6, 13, 0.99) 100%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <style>{`
              @keyframes moonModalIn {
                from { opacity: 0; transform: scale(0.88) translateY(20px); }
                to { opacity: 1; transform: scale(1) translateY(0); }
              }
            `}</style>

            {/* Header Toolbar: Title & Close Button */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '16px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#fef08a', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.06em' }}>
                <Moon size={15} />
                <span>THE MOON OF MY UNIVERSE</span>
              </div>

              <button
                onClick={() => setShowMoonModal(false)}
                aria-label="Close"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  color: '#f8fafc',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                  flexShrink: 0
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Glowing Golden Portrait Frame */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxHeight: '360px',
                aspectRatio: '4 / 5',
                borderRadius: '16px',
                overflow: 'hidden',
                marginBottom: '18px',
                border: '1px solid rgba(254, 240, 138, 0.35)',
                boxShadow: '0 12px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(254, 240, 138, 0.15)',
                background: '#04060d'
              }}
            >
              <img
                src={moonInfo.image}
                alt="Echchha"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  objectPosition: 'center 20%'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 70%, rgba(4, 6, 13, 0.8) 100%)',
                  pointerEvents: 'none'
                }}
              />
            </div>

            {/* Title & Romantic Subtitle */}
            <h3 className="font-serif-heading" style={{ fontSize: '1.8rem', fontWeight: 600, color: '#f8fafc', marginBottom: '8px', lineHeight: 1.25, textAlign: 'center' }}>
              {renderTextWithEmoji(moonInfo.title)}
            </h3>

            <p style={{ fontSize: '1.02rem', color: '#fef08a', fontWeight: 400, lineHeight: 1.5, fontStyle: 'italic', marginBottom: '10px', textAlign: 'center', padding: '0 8px' }}>
              {renderTextWithEmoji(`"${moonInfo.subtitle}"`)}
            </p>

            <p style={{ fontSize: '0.88rem', color: '#94a3b8', fontWeight: 300, marginBottom: '20px', textAlign: 'center' }}>
              {renderTextWithEmoji(moonInfo.caption)}
            </p>

            <button
              onClick={() => setShowMoonModal(false)}
              className="btn-universe"
              style={{ padding: '10px 26px', fontSize: '0.88rem' }}
            >
              <Heart size={15} fill="#ffffff" style={{ marginRight: '8px' }} />
              <span>You Shine Brightest ✨</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default UniverseSection;
