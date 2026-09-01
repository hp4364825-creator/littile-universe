import React, { useState } from 'react';
import { siteContent } from '../data/content';
import { Mail, MailOpen, X, Sparkles, Heart } from 'lucide-react';
import { renderTextWithEmoji } from '../utils/emoji';

const OpenWhenEnvelopes = () => {
  const [openedEnvelope, setOpenedEnvelope] = useState(null);

  return (
    <section
      id="open-when-section"
      style={{
        position: 'relative',
        minHeight: '80vh',
        padding: '90px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '700px', marginBottom: '52px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.04)', padding: '6px 16px', borderRadius: '9999px', border: '1px solid rgba(255, 255, 255, 0.08)', marginBottom: '16px' }}>
          <Mail size={14} color="#c4b5fd" />
          <span style={{ fontSize: '0.85rem', color: '#c4b5fd', letterSpacing: '0.05em' }}>
            Digital Envelopes
          </span>
        </div>
        <h2 className="font-serif-heading text-gradient-lavender" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 400, marginBottom: '12px' }}>
          Open When…
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '1rem', fontWeight: 300 }}>
          Letters written for specific moments. Open whenever you need them.
        </p>
      </div>

      {/* Envelopes Grid */}
      <div
        style={{
          maxWidth: '1000px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px'
        }}
      >
        {siteContent.openWhen.map((env) => (
          <div
            key={env.id}
            onClick={() => setOpenedEnvelope(env)}
            className="glass-panel glass-card-interactive"
            style={{
              padding: '28px 24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              border: `1px solid ${env.borderColor || 'rgba(255,255,255,0.1)'}`,
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: env.borderColor || '#c4b5fd',
                marginBottom: '16px'
              }}
            >
              <Mail size={26} />
            </div>

            <span style={{ fontSize: '0.78rem', color: env.borderColor || '#c4b5fd', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
              {env.tag}
            </span>

            <h3 className="font-serif-heading" style={{ fontSize: '1.35rem', fontWeight: 600, color: '#f8fafc', marginBottom: '12px' }}>
              {renderTextWithEmoji(env.title)}
            </h3>

            <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 500, marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span>Click to open letter</span>
              <span className="emoji-span">✉️</span>
            </span>
          </div>
        ))}
      </div>

      {/* Letter Reveal Modal */}
      {openedEnvelope && (
        <div className="modal-backdrop" onClick={() => setOpenedEnvelope(null)}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="glass-panel"
            style={{
              maxWidth: '540px',
              width: '100%',
              padding: '36px',
              position: 'relative',
              animation: 'envelopeOpen 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              background: '#090d22',
              border: `1px solid ${openedEnvelope.borderColor || 'rgba(168,85,247,0.3)'}`
            }}
          >
            <style>{`
              @keyframes envelopeOpen {
                from { opacity: 0; transform: rotateX(-30deg) scale(0.9); }
                to { opacity: 1; transform: rotateX(0deg) scale(1); }
              }
            `}</style>

            <button
              onClick={() => setOpenedEnvelope(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: 'none',
                color: '#f8fafc',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={18} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: openedEnvelope.borderColor || '#c4b5fd', marginBottom: '12px' }}>
              <MailOpen size={20} />
              <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{openedEnvelope.tag}</span>
            </div>

            <h3 className="font-serif-heading" style={{ fontSize: '1.8rem', fontWeight: 600, color: '#f8fafc', marginBottom: '20px' }}>
              {renderTextWithEmoji(openedEnvelope.title)}
            </h3>

            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '20px', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.06)', marginBottom: '24px' }}>
              <p style={{ fontSize: '1.08rem', color: '#cbd5e1', fontWeight: 300, lineHeight: 1.7, fontStyle: 'italic' }}>
                "{openedEnvelope.content}"
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Sent with warmth ❤️</span>
              <button
                onClick={() => setOpenedEnvelope(null)}
                className="btn-universe-secondary"
                style={{ padding: '8px 20px', fontSize: '0.85rem' }}
              >
                Close Envelope
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OpenWhenEnvelopes;
