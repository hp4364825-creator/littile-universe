import React, { useState } from 'react';
import { siteContent } from '../data/content';
import { Sparkles, X, Heart, Star as StarIcon, Lock, Compass, Eye } from 'lucide-react';
import { renderTextWithEmoji } from '../utils/emoji';

const InteractiveStars = () => {
  const [selectedStar, setSelectedStar] = useState(null);
  const [secretUnlocked, setSecretUnlocked] = useState(false);
  const [connectedStarIds, setConnectedStarIds] = useState([1, 2]);

  const handleStarClick = (star) => {
    setSelectedStar(star);
    if (!connectedStarIds.includes(star.id)) {
      setConnectedStarIds([...connectedStarIds, star.id]);
    }
  };

  const handleSecretStarClick = () => {
    setSecretUnlocked(true);
    setSelectedStar({
      id: 'secret',
      title: siteContent.secretStar.title,
      preview: "Hidden Easter Egg",
      message: siteContent.secretStar.message,
      constellation: "Secret Nebula",
      color: "#f472b6"
    });
  };

  return (
    <section
      id="stars-section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        padding: '90px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '750px', marginBottom: '44px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.04)', padding: '6px 16px', borderRadius: '9999px', border: '1px solid rgba(255, 255, 255, 0.08)', marginBottom: '16px' }}>
          <Compass size={14} color="#c4b5fd" />
          <span style={{ fontSize: '0.85rem', color: '#c4b5fd', letterSpacing: '0.05em' }}>
            Interactive Constellation Map
          </span>
        </div>
        <h2 className="font-serif-heading text-gradient-lavender" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 400, marginBottom: '12px' }}>
          Tap Any Star To Uncover Its Memory
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '1.05rem', fontWeight: 300 }}>
          Each star holds a specific thought I wrote for you. Click any star card below or tap the night sky background anytime.
        </p>
      </div>

      {/* Constellation Star Map Container */}
      <div
        style={{
          maxWidth: '1080px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}
      >
        {siteContent.stars.map((star) => {
          const isConnected = connectedStarIds.includes(star.id);
          return (
            <div
              key={star.id}
              onClick={() => handleStarClick(star)}
              className="glass-panel glass-card-interactive"
              style={{
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                border: isConnected ? `1px solid ${star.color}` : '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: isConnected ? `0 0 25px ${star.color}33` : '0 10px 30px rgba(0,0,0,0.4)'
              }}
            >
              {/* Star Ambient Radial Glow */}
              <div
                style={{
                  position: 'absolute',
                  top: '-25px',
                  right: '-25px',
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  background: star.color,
                  opacity: isConnected ? 0.3 : 0.15,
                  filter: 'blur(25px)',
                  transition: 'all 0.4s ease'
                }}
              />

              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                  <span className="font-mono-code" style={{ fontSize: '0.75rem', color: star.color, letterSpacing: '0.05em' }}>
                    ✦ {star.constellation}
                  </span>
                  <div
                    style={{
                      padding: '10px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.06)',
                      color: star.color,
                      boxShadow: `0 0 12px ${star.color}40`,
                      animation: 'pulseSlow 3s ease-in-out infinite'
                    }}
                  >
                    <StarIcon size={20} fill={star.color} />
                  </div>
                </div>

                <h3 className="font-serif-heading" style={{ fontSize: '1.5rem', fontWeight: 600, color: '#f8fafc', marginBottom: '10px' }}>
                  {star.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: '#cbd5e1', fontWeight: 300, lineHeight: 1.6 }}>
                  {star.preview}
                </p>
              </div>

              <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.85rem', color: star.color, fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Eye size={14} />
                  <span>Reveal note</span>
                </span>
                <span style={{ fontSize: '1.1rem', color: star.color }}>→</span>
              </div>
            </div>
          );
        })}

        {/* Secret Easter Egg Star Node */}
        <div
          onClick={handleSecretStarClick}
          className="glass-panel glass-card-interactive"
          style={{
            padding: '28px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '1px solid rgba(244, 114, 182, 0.4)',
            background: 'linear-gradient(135deg, rgba(244, 114, 182, 0.1) 0%, rgba(13, 19, 41, 0.7) 100%)',
            boxShadow: '0 0 25px rgba(244, 114, 182, 0.2)'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
              <span className="font-mono-code" style={{ fontSize: '0.75rem', color: '#f472b6' }}>
                ✦ SECRET NODE
              </span>
              <div style={{ padding: '10px', borderRadius: '50%', background: 'rgba(244, 114, 182, 0.15)', color: '#f472b6' }}>
                {secretUnlocked ? <Sparkles size={20} /> : <Lock size={20} />}
              </div>
            </div>

            <h3 className="font-serif-heading" style={{ fontSize: '1.5rem', fontWeight: 600, color: '#f472b6', marginBottom: '10px' }}>
              {renderTextWithEmoji("Secret Constellation 👀")}
            </h3>

            <p style={{ fontSize: '0.92rem', color: '#cbd5e1', fontWeight: 300, lineHeight: 1.6 }}>
              {secretUnlocked ? "Unlocked! Tap to read hidden thought." : "Only curious explorers unlock this secret star."}
            </p>
          </div>

          <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#f472b6' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>
              {secretUnlocked ? "View Secret Note" : "Tap to Unlock"}
            </span>
            <span>✨</span>
          </div>
        </div>
      </div>

      {/* Glass Modal Card */}
      {selectedStar && (
        <div className="modal-backdrop" onClick={() => setSelectedStar(null)}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="glass-panel"
            style={{
              maxWidth: '540px',
              width: '100%',
              padding: '36px 32px',
              position: 'relative',
              animation: 'modalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(168, 85, 247, 0.25)',
              border: `1px solid ${selectedStar.color || 'rgba(168, 85, 247, 0.3)'}`
            }}
          >
            <style>{`
              @keyframes modalSlideUp {
                from { opacity: 0; transform: translateY(20px) scale(0.95); }
                to { opacity: 1; transform: translateY(0) scale(1); }
              }
            `}</style>

            <button
              onClick={() => setSelectedStar(null)}
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

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: selectedStar.color || '#a855f7', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '12px' }}>
              <Sparkles size={16} />
              <span>{selectedStar.constellation}</span>
            </div>

            <h3 className="font-serif-heading" style={{ fontSize: '2.1rem', fontWeight: 600, color: '#f8fafc', marginBottom: '16px', lineHeight: 1.25 }}>
              {selectedStar.title}
            </h3>

            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '20px', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.06)', marginBottom: '24px' }}>
              <p style={{ fontSize: '1.12rem', color: '#cbd5e1', fontWeight: 300, lineHeight: 1.7, fontStyle: 'italic' }}>
                "{selectedStar.message}"
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Written with sincerity ❤️</span>
              <button
                onClick={() => setSelectedStar(null)}
                className="btn-universe-secondary"
                style={{ padding: '8px 20px', fontSize: '0.88rem' }}
              >
                Close Star Note
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default InteractiveStars;
