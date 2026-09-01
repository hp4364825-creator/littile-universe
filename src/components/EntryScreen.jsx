import React, { useState } from 'react';
import { useAudio } from '../context/AudioContext';
import { siteContent } from '../data/content';
import { Sparkles, Headphones, Heart } from 'lucide-react';
import { renderTextWithEmoji } from '../utils/emoji';

const EntryScreen = ({ onEnter }) => {
  const { playAudio } = useAudio();
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStepIndex, setLoadingStepIndex] = useState(0);

  const handleEnterClick = () => {
    setIsLoading(true);
    // Play background audio upon explicit user click
    playAudio();

    // Step through loading text sequence
    const steps = siteContent.entry.loadingSteps;
    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      if (step < steps.length) {
        setLoadingStepIndex(step);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          onEnter();
        }, 400);
      }
    }, 450);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#04060d',
        color: '#f8fafc',
        padding: '24px',
        textAlign: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Background radial atmosphere */}
      <div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(4,6,13,0) 70%)',
          pointerEvents: 'none',
          animation: 'ambientGlow 8s ease-in-out infinite'
        }}
      />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '540px', width: '100%' }}>
        {!isLoading ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.05)', padding: '6px 16px', borderRadius: '9999px', border: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.85rem', color: '#c4b5fd' }}>
              <Sparkles size={14} />
              <span>A Personal Digital Experience</span>
            </div>

            <h1 className="font-serif-heading" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 400, margin: '8px 0', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
              {siteContent.entry.greeting}
            </h1>

            <p style={{ fontSize: '1.2rem', color: '#cbd5e1', fontWeight: 300 }}>
              {siteContent.entry.subtext}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8', fontSize: '0.9rem', marginTop: '12px' }}>
              <Headphones size={16} color="#c4b5fd" />
              <span>{renderTextWithEmoji(siteContent.entry.headphonesAdvice)}</span>
            </div>

            <div style={{ marginTop: '24px' }}>
              <button
                onClick={handleEnterClick}
                className="btn-universe"
              >
                <span>{renderTextWithEmoji(siteContent.entry.buttonText)}</span>
              </button>
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid rgba(168, 85, 247, 0.2)', borderTopColor: '#c4b5fd', animation: 'spin 1s linear infinite' }} />
            <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
            
            <p className="font-mono-code" style={{ color: '#c4b5fd', fontSize: '1rem', marginTop: '12px' }}>
              {renderTextWithEmoji(siteContent.entry.loadingSteps[loadingStepIndex])}
            </p>
            
            <div style={{ width: '200px', height: '4px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '2px', overflow: 'hidden' }}>
              <div
                style={{
                  height: '100%',
                  width: `${((loadingStepIndex + 1) / siteContent.entry.loadingSteps.length) * 100}%`,
                  background: 'linear-gradient(90deg, #a855f7, #f472b6)',
                  transition: 'width 0.3s ease'
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EntryScreen;
