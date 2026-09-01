import React from 'react';
import { useAudio } from '../context/AudioContext';
import { Play, Pause, Volume2, VolumeX, Music, Disc } from 'lucide-react';

const formatTime = (secs) => {
  if (isNaN(secs)) return '0:00';
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
};

const MusicSection = () => {
  const {
    isPlaying,
    isMuted,
    volume,
    currentTime,
    duration,
    togglePlay,
    toggleMute,
    setVolume,
    seek,
    songInfo,
    isSynthFallback
  } = useAudio();

  const handleProgressChange = (e) => {
    const newTime = parseFloat(e.target.value);
    seek(newTime);
  };

  return (
    <section
      id="music-section"
      style={{
        position: 'relative',
        minHeight: '85vh',
        padding: '90px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '650px', marginBottom: '44px' }}>
        <h2 className="font-serif-heading text-gradient-lavender" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 300, marginBottom: '8px' }}>
          If you were a song…
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '1.1rem', fontWeight: 300 }}>
          Some songs just remind you of someone.
        </p>
      </div>

      {/* Main Music Player Card */}
      <div
        className="glass-panel"
        style={{
          maxWidth: '680px',
          width: '100%',
          padding: '36px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '28px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(168, 85, 247, 0.15)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', width: '100%', flexWrap: 'wrap' }}>
          {/* Vinyl / Cover Artwork */}
          <div style={{ position: 'relative', width: '110px', height: '110px', flexShrink: 0 }}>
            <img
              src={songInfo.cover}
              alt="Song Cover"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '16px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
                animation: isPlaying ? 'spin 12s linear infinite' : 'none'
              }}
            />
            <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
            <div style={{ position: 'absolute', inset: 0, borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.15)', pointerEvents: 'none' }} />
          </div>

          {/* Song Meta Details */}
          <div style={{ flex: 1, minWidth: '220px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: '#a855f7', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '6px' }}>
              <Disc size={14} className={isPlaying ? 'animate-spin' : ''} />
              <span>CURRENTLY PLAYING</span>
            </div>

            <h3 className="font-serif-heading" style={{ fontSize: '1.7rem', fontWeight: 600, color: '#f8fafc', marginBottom: '4px' }}>
              {songInfo.title}
            </h3>

            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
              {songInfo.artist} • {songInfo.album}
            </p>

            {isSynthFallback && (
              <span style={{ display: 'inline-block', marginTop: '6px', fontSize: '0.75rem', color: '#f472b6', fontStyle: 'italic' }}>
                (Ambient synth mode active — place MP3 in public/music/romantic-song.mp3 to customize)
              </span>
            )}
          </div>
        </div>

        {/* Animated Waveform Visualizer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', height: '40px', width: '100%', padding: '0 12px' }}>
          {Array.from({ length: 28 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: '4px',
                borderRadius: '2px',
                background: 'linear-gradient(180deg, #c4b5fd 0%, #a855f7 100%)',
                height: isPlaying ? `${Math.max(15, Math.sin(i * 0.5 + Date.now() * 0.005) * 80 + 20)}%` : '15%',
                transition: 'height 0.15s ease'
              }}
            />
          ))}
        </div>

        {/* Scrub Bar & Timers */}
        <div style={{ width: '100%' }}>
          <input
            type="range"
            min="0"
            max={duration || 100}
            value={currentTime || 0}
            onChange={handleProgressChange}
            style={{
              width: '100%',
              accentColor: '#a855f7',
              cursor: 'pointer',
              height: '5px',
              borderRadius: '3px'
            }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#94a3b8', marginTop: '6px', fontFamily: 'var(--font-mono)' }}>
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Control Buttons & Volume */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          {/* Mute toggle */}
          <button
            onClick={toggleMute}
            style={{ background: 'rgba(255, 255, 255, 0.06)', border: 'none', color: isMuted ? '#f472b6' : '#f8fafc', width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>

          {/* Primary Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="btn-universe"
            style={{ width: '60px', height: '60px', borderRadius: '50%', padding: 0 }}
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} style={{ marginLeft: '3px' }} />}
          </button>

          {/* Volume Slider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              style={{ width: '80px', accentColor: '#a855f7', cursor: 'pointer' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
