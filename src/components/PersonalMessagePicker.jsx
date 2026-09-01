import React, { useState } from 'react';
import { siteContent } from '../data/content';
import { Sparkles, MessageSquareHeart } from 'lucide-react';

const words = ['Smile', 'Beautiful', 'Special', 'Crazy', 'Us'];

const PersonalMessagePicker = () => {
  const [selectedWord, setSelectedWord] = useState('Smile');

  return (
    <section
      id="word-picker-section"
      style={{
        position: 'relative',
        minHeight: '70vh',
        padding: '80px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '650px', marginBottom: '40px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.04)', padding: '6px 16px', borderRadius: '9999px', border: '1px solid rgba(255, 255, 255, 0.08)', marginBottom: '16px' }}>
          <MessageSquareHeart size={14} color="#f472b6" />
          <span style={{ fontSize: '0.85rem', color: '#f472b6', letterSpacing: '0.05em' }}>
            Personal Thought Generator
          </span>
        </div>
        <h2 className="font-serif-heading text-gradient-pink" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: 400, marginBottom: '12px' }}>
          Pick A Word That Reminds Me Of You
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '1rem', fontWeight: 300 }}>
          Select a keyword below to see what comes to my mind.
        </p>
      </div>

      {/* Word Pills matrix */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', maxWidth: '600px', marginBottom: '32px' }}>
        {words.map((word) => (
          <button
            key={word}
            onClick={() => setSelectedWord(word)}
            className={selectedWord === word ? 'btn-universe' : 'btn-universe-secondary'}
            style={{
              padding: '10px 24px',
              fontSize: '1rem',
              borderRadius: '9999px'
            }}
          >
            {word}
          </button>
        ))}
      </div>

      {/* Dynamic Note Box */}
      <div
        className="glass-panel"
        style={{
          maxWidth: '640px',
          width: '100%',
          padding: '36px',
          textAlign: 'center',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(244, 114, 182, 0.15)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#f472b6', marginBottom: '12px' }}>
          <Sparkles size={16} />
          <span className="font-mono-code" style={{ fontSize: '0.85rem', letterSpacing: '0.05em' }}>
            NOTE FOR: #{selectedWord.toUpperCase()}
          </span>
        </div>

        <p className="font-serif-heading" style={{ fontSize: 'clamp(1.25rem, 3vw, 1.7rem)', color: '#f8fafc', fontWeight: 400, lineHeight: 1.6, fontStyle: 'italic' }}>
          "{siteContent.messageMatrix[selectedWord]}"
        </p>
      </div>
    </section>
  );
};

export default PersonalMessagePicker;
