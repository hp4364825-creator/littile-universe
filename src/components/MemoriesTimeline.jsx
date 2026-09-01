import React, { useState } from 'react';
import { siteContent } from '../data/content';
import { Sparkles, Calendar, MapPin, X, ZoomIn } from 'lucide-react';
import { renderTextWithEmoji } from '../utils/emoji';

const MemoriesTimeline = () => {
  const [activeLightbox, setActiveLightbox] = useState(null);

  return (
    <section
      id="memories-section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        padding: '100px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '700px', marginBottom: '60px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.04)', padding: '6px 16px', borderRadius: '9999px', border: '1px solid rgba(255, 255, 255, 0.08)', marginBottom: '16px' }}>
          <Sparkles size={14} color="#f472b6" />
          <span style={{ fontSize: '0.85rem', color: '#f472b6', letterSpacing: '0.05em' }}>
            Timeline of Feelings
          </span>
        </div>
        <h2 className="font-serif-heading text-gradient-pink" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 400, marginBottom: '12px' }}>
          Memories & Milestones
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '1rem', fontWeight: 300 }}>
          Every story has a beginning. Here are the moments that changed everything.
        </p>
      </div>

      {/* Polaroid Grid Layout */}
      <div
        style={{
          maxWidth: '1100px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px'
        }}
      >
        {siteContent.memories.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveLightbox(item)}
            className="glass-panel glass-card-interactive"
            style={{
              background: 'rgba(18, 24, 48, 0.7)',
              padding: '16px 16px 24px',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* Polaroid Frame Image Container */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '240px',
                borderRadius: '12px',
                overflow: 'hidden',
                marginBottom: '16px',
                background: '#090d1f'
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 60%, rgba(4, 6, 13, 0.8) 100%)',
                  pointerEvents: 'none'
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(4, 6, 13, 0.75)',
                  backdropFilter: 'blur(8px)',
                  padding: '4px 10px',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  color: '#c4b5fd',
                  fontWeight: 500,
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                {item.tag}
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  background: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(8px)',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <ZoomIn size={16} />
              </div>
            </div>

            {/* Polaroid Description */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '6px' }}>
                <Calendar size={13} color="#a855f7" />
                <span>{item.date}</span>
                <span>•</span>
                <MapPin size={13} color="#f472b6" />
                <span>{item.location}</span>
              </div>

              <h3 className="font-serif-heading" style={{ fontSize: '1.4rem', fontWeight: 600, color: '#f8fafc', marginBottom: '8px' }}>
                {renderTextWithEmoji(item.title)}
              </h3>

              <p style={{ fontSize: '0.9rem', color: '#cbd5e1', fontWeight: 300, lineHeight: 1.5 }}>
                {renderTextWithEmoji(item.description)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal — Redesigned Toolbar & Photo Layout */}
      {activeLightbox && (
        <div className="modal-backdrop" onClick={() => setActiveLightbox(null)}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="glass-panel"
            style={{
              maxWidth: '560px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '24px 24px 28px',
              position: 'relative',
              animation: 'modalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              background: 'linear-gradient(180deg, rgba(13, 19, 41, 0.96) 0%, rgba(4, 6, 13, 0.99) 100%)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.85), 0 0 30px rgba(168, 85, 247, 0.2)'
            }}
          >
            {/* Header Toolbar: Date/Tag Badge & Close Button */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '16px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.75rem', background: 'rgba(168, 85, 247, 0.15)', color: '#c4b5fd', padding: '4px 12px', borderRadius: '9999px', fontWeight: 600, border: '1px solid rgba(168, 85, 247, 0.3)' }}>
                  {activeLightbox.tag || activeLightbox.date}
                </span>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{activeLightbox.location}</span>
              </div>

              <button
                onClick={() => setActiveLightbox(null)}
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

            {/* Photo Container */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxHeight: '380px',
                borderRadius: '16px',
                overflow: 'hidden',
                marginBottom: '18px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                background: '#04060d'
              }}
            >
              <img
                src={activeLightbox.image}
                alt={activeLightbox.title}
                style={{
                  width: '100%',
                  maxHeight: '380px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>

            {/* Description & Title */}
            <div style={{ padding: '0 4px' }}>
              <h3 className="font-serif-heading" style={{ fontSize: '1.8rem', fontWeight: 600, color: '#f8fafc', margin: '0 0 10px' }}>
                {renderTextWithEmoji(activeLightbox.title)}
              </h3>
              <p style={{ fontSize: '1.02rem', color: '#cbd5e1', lineHeight: 1.6, fontWeight: 300 }}>
                {renderTextWithEmoji(activeLightbox.description)}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MemoriesTimeline;
