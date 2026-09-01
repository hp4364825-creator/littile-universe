import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { siteContent } from '../data/content';

const AudioContext = createContext(null);

export const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolumeState] = useState(siteContent.music.defaultVolume || 0.28);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(180);
  const [isAudioLoaded, setIsAudioLoaded] = useState(false);
  const [isSynthFallback, setIsSynthFallback] = useState(false);

  const audioRef = useRef(null);
  const audioContextRef = useRef(null);
  const synthTimerRef = useRef(null);
  const stringOscillatorsRef = useRef([]);
  const fadeIntervalRef = useRef(null);

  // Initialize HTML5 Audio instance
  useEffect(() => {
    const audio = new Audio();
    audio.src = siteContent.music.src;
    audio.preload = 'metadata';
    audio.loop = true;
    audio.volume = 0;
    audioRef.current = audio;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 180);
      setIsAudioLoaded(true);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime || 0);
    };

    const handleError = () => {
      console.log("Activating Web Audio Romantic Solo Piano & Strings Engine (66 BPM).");
      setIsSynthFallback(true);
      setDuration(180);
      setIsAudioLoaded(true);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('error', handleError);
      audio.pause();
      stopSynthSoundtrack();
    };
  }, []);

  // Web Audio API Romantic Solo Piano & String Harmony Engine (66 BPM ~ 909ms note steps)
  const startSynthSoundtrack = () => {
    try {
      if (!audioContextRef.current) {
        const AudioCtx = window.window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        audioContextRef.current = new AudioCtx();
      }

      if (audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }

      stopSynthSoundtrack();

      const ctx = audioContextRef.current;

      // 1. Warm String Harmony Layer (C maj 9th string chord: C3, G3, B3, D4, E4)
      const stringFrequencies = [130.81, 196.00, 246.94, 293.66, 329.63];
      const masterStringGain = ctx.createGain();
      const stringFilter = ctx.createBiquadFilter();

      stringFilter.type = 'lowpass';
      stringFilter.frequency.setValueAtTime(380, ctx.currentTime); // Warm dark string filter

      masterStringGain.gain.setValueAtTime(isMuted ? 0 : volume * 0.12, ctx.currentTime);
      masterStringGain.connect(stringFilter);
      stringFilter.connect(ctx.destination);

      stringOscillatorsRef.current = stringFrequencies.map((freq) => {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        osc.connect(masterStringGain);
        osc.start();
        return osc;
      });

      // 2. Gentle Romantic Solo Piano Arpeggio (66 BPM ~ 909ms interval)
      // Cmaj7 -> Am7 chord progression pentatonic tones
      const romanticPianoScale = [
        261.63, 329.63, 392.00, 493.88, 523.25, // C4, E4, G4, B4, C5
        220.00, 261.63, 329.63, 392.00, 440.00, // A3, C4, E4, G4, A4
        174.61, 261.63, 329.63, 349.23, 523.25, // F3, C4, E4, F4, C5
        196.00, 246.94, 293.66, 392.00, 493.88  // G3, B3, D4, G4, B4
      ];
      let step = 0;

      const playRomanticPianoNote = () => {
        if (!audioContextRef.current || audioContextRef.current.state === 'closed') return;

        const now = ctx.currentTime;
        const noteOsc = ctx.createOscillator();
        const noteGain = ctx.createGain();

        // Warm pure sine for soft acoustic piano feel
        noteOsc.type = 'sine';
        const freq = romanticPianoScale[step % romanticPianoScale.length];
        noteOsc.frequency.setValueAtTime(freq, now);

        // Soft touch attack, long dreamy piano decay
        const targetVol = isMuted ? 0 : volume * 0.16;
        noteGain.gain.setValueAtTime(0.001, now);
        noteGain.gain.exponentialRampToValueAtTime(Math.max(0.001, targetVol), now + 0.15);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);

        noteOsc.connect(noteGain);
        noteGain.connect(ctx.destination);

        noteOsc.start(now);
        noteOsc.stop(now + 2.6);

        step = (step + 1) % romanticPianoScale.length;
      };

      playRomanticPianoNote();
      synthTimerRef.current = setInterval(playRomanticPianoNote, 909); // 66 BPM
    } catch (e) {
      console.error("Web Audio romantic synth error:", e);
    }
  };

  const stopSynthSoundtrack = () => {
    if (synthTimerRef.current) {
      clearInterval(synthTimerRef.current);
      synthTimerRef.current = null;
    }
    if (stringOscillatorsRef.current.length > 0) {
      stringOscillatorsRef.current.forEach(osc => {
        try {
          osc.stop();
          osc.disconnect();
        } catch (e) {}
      });
      stringOscillatorsRef.current = [];
    }
  };

  // Smooth Volume Fade In
  const fadeIn = (targetVol = volume, durationMs = 2500) => {
    if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);

    let currentVol = 0;
    const stepTime = 50;
    const steps = durationMs / stepTime;
    const volIncrement = targetVol / steps;

    fadeIntervalRef.current = setInterval(() => {
      currentVol += volIncrement;
      if (currentVol >= targetVol) {
        currentVol = targetVol;
        clearInterval(fadeIntervalRef.current);
      }
      setVolumeState(currentVol);
      if (audioRef.current && !isSynthFallback) {
        audioRef.current.volume = isMuted ? 0 : currentVol;
      }
    }, stepTime);
  };

  // Smooth Volume Fade Out
  const fadeOutFinal = (durationMs = 6000) => {
    if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);

    let currentVol = volume;
    const stepTime = 100;
    const steps = durationMs / stepTime;
    const volDecrement = currentVol / steps;

    fadeIntervalRef.current = setInterval(() => {
      currentVol -= volDecrement;
      if (currentVol <= 0.01) {
        currentVol = 0;
        clearInterval(fadeIntervalRef.current);
        pauseAudio();
      } else {
        setVolumeState(currentVol);
        if (audioRef.current && !isSynthFallback) {
          audioRef.current.volume = isMuted ? 0 : currentVol;
        }
      }
    }, stepTime);
  };

  const playAudio = async () => {
    if (!audioRef.current) return;

    if (isSynthFallback) {
      startSynthSoundtrack();
      setIsPlaying(true);
      return;
    }

    try {
      audioRef.current.volume = 0;
      await audioRef.current.play();
      setIsPlaying(true);
      fadeIn(volume, 2500);
    } catch (err) {
      console.log("Play failed, switching to Web Audio romantic solo piano synth:", err);
      setIsSynthFallback(true);
      startSynthSoundtrack();
      setIsPlaying(true);
    }
  };

  const pauseAudio = () => {
    if (isSynthFallback) {
      stopSynthSoundtrack();
      setIsPlaying(false);
      return;
    }

    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  const toggleMute = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    if (audioRef.current) {
      audioRef.current.muted = nextMute;
    }
  };

  const setVolume = (newVal) => {
    const val = Math.max(0, Math.min(1, newVal));
    setVolumeState(val);
    if (audioRef.current && !isSynthFallback) {
      audioRef.current.volume = isMuted ? 0 : val;
    }
  };

  const seek = (seconds) => {
    if (!isSynthFallback && audioRef.current && Number.isFinite(seconds)) {
      audioRef.current.currentTime = seconds;
      setCurrentTime(seconds);
    }
  };

  return (
    <AudioContext.Provider value={{
      isPlaying,
      isMuted,
      volume,
      currentTime,
      duration,
      isAudioLoaded,
      isSynthFallback,
      playAudio,
      pauseAudio,
      togglePlay,
      toggleMute,
      setVolume,
      seek,
      fadeIn,
      fadeOutFinal,
      musicInfo: siteContent.music
    }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
