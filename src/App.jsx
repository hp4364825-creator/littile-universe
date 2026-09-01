import React, { useState } from 'react';
import { AudioProvider } from './context/AudioContext';
import BackgroundUniverse from './components/BackgroundUniverse';
import Navbar from './components/Navbar';
import EntryScreen from './components/EntryScreen';
import UniverseSection from './components/UniverseSection';
import InteractiveStars from './components/InteractiveStars';
import ConfessionSection from './components/ConfessionSection';
import DeveloperTerminal from './components/DeveloperTerminal';
import OpenWhenEnvelopes from './components/OpenWhenEnvelopes';
import ThingsToKnow from './components/ThingsToKnow';
import PersonalMessagePicker from './components/PersonalMessagePicker';
import MiniMusicPlayer from './components/MiniMusicPlayer';
import MemoriesTimeline from './components/MemoriesTimeline';
import MiniGame from './components/MiniGame';
import FinalSection from './components/FinalSection';
import EasterEggs from './components/EasterEggs';

function MainExperience() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', color: '#f8fafc' }}>
      {/* Background Interactive Starfield Canvas */}
      <BackgroundUniverse enabled={hasEntered} />

      {/* Global Toast Easter Egg Listener */}
      <EasterEggs />

      {!hasEntered ? (
        <EntryScreen onEnter={() => setHasEntered(true)} />
      ) : (
        <div style={{ position: 'relative', zIndex: 1, animation: 'fadeInUniverse 1s ease' }}>
          <style>{`
            @keyframes fadeInUniverse {
              from { opacity: 0; transform: scale(0.98); }
              to { opacity: 1; transform: scale(1); }
            }
          `}</style>

          {/* Top Navigation Bar */}
          <Navbar />

          {/* Main Continuous Romantic Flow */}
          <main>
            {/* Section 2 — The Universe */}
            <UniverseSection />

            {/* Section 3 — Interactive Stars & Constellations */}
            <InteractiveStars />

            {/* Section 4 — The Confession */}
            <ConfessionSection />

            {/* Section 5 — Developer / IT Guy Easter Egg Terminal */}
            <DeveloperTerminal />

            {/* Section 6 — A Few Things I Want You To Know */}
            <ThingsToKnow />

            {/* Open When Digital Envelopes */}
            <OpenWhenEnvelopes />

            {/* Personal Message Word Picker */}
            <PersonalMessagePicker />

            {/* Section 8 — Memories Timeline */}
            <MemoriesTimeline />

            {/* Mini Game Quiz */}
            <MiniGame />

            {/* Section 9 — Final Night Sky Closing */}
            <FinalSection />
          </main>

          {/* Persistent Floating Minimal Music Control Bar (♫ ───●── 🔊) */}
          <MiniMusicPlayer />
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <AudioProvider>
      <MainExperience />
    </AudioProvider>
  );
}
