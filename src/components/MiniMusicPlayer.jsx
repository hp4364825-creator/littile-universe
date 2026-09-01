import React from 'react';
import { useAudio } from '../context/AudioContext';
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';

const formatTime = (secs) => {
  if (isNaN(secs)) return '0:00';
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
};

const MiniMusicPlayer = () => {
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
    isSynthFallback
  } = useAudio();

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 100,
        background: 'rgba(13, 19, 41, 0.85)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: '9999px',
        padding: '8px 18px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(168, 85, 247, 0.2)',
        transition: 'all 0.3s ease'
      }}
    >
      {/* Musical Note Icon */}
      <div style={{ color: isPlaying ? '#c4b5fd' : '#94a3b8', display: 'flex', alignItems: 'center' }}>
        <Music size={16} className={isPlaying ? 'animate-bounce' : ''} />
      </div>

      {/* Track info / status */}
      <span style={{ fontSize: '0.78rem', color: '#cbd5e1', fontWeight: 500, whiteSpace: 'nowrap' }}>
        ♫ {isPlaying ? "Background Music" : "Paused"}
      </span>

      {/* Progress Slider Scrub */}
      {!isSynthFallback && duration > 0 && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={(e) => seek(parseFloat(e.target.value))}
            style={{ width: '70px', accentColor: '#a855f7', cursor: 'pointer', height: '4px' }}
          />
        </div>
      )}

      {/* Play / Pause Toggle Button */}
      <button
        onClick={togglePlay}
        title={isPlaying ? "Pause Music" : "Play Music"}
        style={{
          background: 'rgba(168, 85, 247, 0.2)',
          border: '1px solid rgba(168, 85, 247, 0.4)',
          color: '#ffffff',
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {isPlaying ? <Pause size={12} /> : <Play size={12} style={{ marginLeft: '1px' }} />}
      </button>

      {/* Volume / Mute Button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <button
          onClick={toggleMute}
          title={isMuted ? "Unmute" : "Mute"}
          style={{
            background: 'none',
            border: 'none',
            color: isMuted ? '#f472b6' : '#94a3b8',
            cursor: 'pointer',
            padding: '2px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
        </button>

        <input
          type="range"
          min="0"
          max="1"
          step="0.02"
          value={isMuted ? 0 : volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          style={{ width: '50px', accentColor: '#a855f7', cursor: 'pointer', height: '3px' }}
        />
      </div>
    </div>
  );
};

export default MiniMusicPlayer;
