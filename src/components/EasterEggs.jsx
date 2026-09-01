import React, { useEffect, useState } from 'react';
import { Sparkles, Heart, X } from 'lucide-react';

const EasterEggs = () => {
  const [toastMessage, setToastMessage] = useState(null);
  const [keySequence, setKeySequence] = useState([]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const char = e.key.toUpperCase();
      const updatedSeq = [...keySequence.slice(-5), char];
      setKeySequence(updatedSeq);

      const str = updatedSeq.join('');
      if (str.includes('LOVE') || str.includes('HARSH') || str.includes('HEART')) {
        setToastMessage({
          title: "Keyboard Secret Unlocked! 🎹",
          message: "You typed a secret word! You have great attention to detail. ❤️"
        });
        setKeySequence([]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [keySequence]);

  if (!toastMessage) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: '80px',
        right: '24px',
        zIndex: 1000,
        maxWidth: '360px',
        width: '100%',
        animation: 'toastIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      <style>{`
        @keyframes toastIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div
        className="glass-panel"
        style={{
          padding: '16px 20px',
          background: 'rgba(9, 13, 31, 0.95)',
          border: '1px solid rgba(244, 114, 182, 0.4)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '14px'
        }}
      >
        <div style={{ color: '#f472b6', marginTop: '2px' }}>
          <Sparkles size={20} />
        </div>

        <div style={{ flex: 1 }}>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#f8fafc', marginBottom: '4px' }}>
            {toastMessage.title}
          </h4>
          <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.4 }}>
            {toastMessage.message}
          </p>
        </div>

        <button
          onClick={() => setToastMessage(null)}
          style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '2px' }}
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default EasterEggs;
