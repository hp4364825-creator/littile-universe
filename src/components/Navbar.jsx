import React, { useState, useEffect } from 'react';
import { useAudio } from '../context/AudioContext';
import { Volume2, VolumeX, Music, Sparkles, Terminal as TerminalIcon, Heart, Compass } from 'lucide-react';

const Navbar = ({ onTriggerEasterEgg }) => {
  const { isPlaying, isMuted, togglePlay, toggleMute } = useAudio();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '12px 24px',
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(4, 6, 13, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      {/* Brand Title */}
      <div
        onClick={() => scrollToSection('universe-hero')}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer'
        }}
      >
        <Sparkles size={18} color="#c4b5fd" className="animate-pulse" />
        <span className="font-serif-heading" style={{ fontSize: 'clamp(1rem, 3.5vw, 1.25rem)', fontWeight: 600, letterSpacing: '0.02em', color: '#f8fafc', whiteSpace: 'nowrap' }}>
          A Little Universe <span className="hidden sm:inline">• Echchha</span> ✨
        </span>
      </div>

      {/* Nav Controls */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div className="nav-desktop-links" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={() => scrollToSection('stars-section')}
            className="btn-universe-secondary"
            style={{ padding: '6px 14px', fontSize: '0.85rem' }}
          >
            <Compass size={14} style={{ marginRight: '6px' }} />
            Stars
          </button>

          <button
            onClick={() => scrollToSection('terminal-section')}
            className="btn-universe-secondary"
            style={{ padding: '6px 14px', fontSize: '0.85rem' }}
          >
            <TerminalIcon size={14} style={{ marginRight: '6px' }} />
            Terminal
          </button>

          <button
            onClick={() => scrollToSection('memories-section')}
            className="btn-universe-secondary"
            style={{ padding: '6px 14px', fontSize: '0.85rem' }}
          >
            <Heart size={14} style={{ marginRight: '6px' }} />
            Memories
          </button>
        </div>

        {/* Audio Floating Sound Controller */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.06)', padding: '4px 10px', borderRadius: '9999px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <button
            onClick={togglePlay}
            title={isPlaying ? "Pause Music" : "Play Music"}
            style={{
              background: 'none',
              border: 'none',
              color: isPlaying ? '#c4b5fd' : '#94a3b8',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '4px'
            }}
          >
            <Music size={16} className={isPlaying ? 'animate-bounce' : ''} />
          </button>

          <button
            onClick={toggleMute}
            title={isMuted ? "Unmute" : "Mute"}
            style={{
              background: 'none',
              border: 'none',
              color: isMuted ? '#f472b6' : '#f8fafc',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '4px'
            }}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
