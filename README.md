# A Little Universe ✨

> A production-ready, highly polished, cinematic interactive romantic web experience crafted with React, Vite, HTML5 Canvas, and modern CSS animations.

---

## 🌟 Overview

**A Little Universe** is a personal, digital romantic experience designed to feel like an award-winning interactive landing page rather than a basic template. It combines dark cinematic night skies, floating starfield canvas parallax, custom audio playback, an interactive developer CLI terminal, digital "Open When" letters, memory timeline polaroids, and a sincere emotional narrative.

---

## 🚀 Quick Start Guide

### 1. Prerequisites
Ensure you have **Node.js** (v18+) and **npm** installed on your machine.

### 2. Installation
Clone or navigate to the project directory and install dependencies:

```bash
npm install
```

### 3. Run Locally (Development Server)
Launch the Vite development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎵 Customizing Music & Photos

### Adding Your Romantic Song
1. Prepare your favorite romantic MP3 track.
2. Save the file in the `public/music/` directory as `romantic-song.mp3`:
   ```text
   public/music/romantic-song.mp3
   ```
3. To customize track metadata (Title, Artist, Cover Art), update `src/data/content.js`:
   ```javascript
   song: {
     title: "Your Special Song Title",
     artist: "Artist Name",
     album: "Album Name",
     src: "/music/romantic-song.mp3",
     cover: "/images/your-album-cover.jpg"
   }
   ```
> *Note: If no audio file is provided, the site gracefully falls back to an ambient Web Audio synth drone so audio buttons and visualizers work seamlessly out of the box!*

### Adding Custom Photos & Memories
1. Place photo files inside `public/images/`.
2. Open `src/data/content.js` and update the `memories` array with your photo filenames and descriptions:
   ```javascript
   memories: [
     {
       id: 1,
       date: "The Beginning",
       title: "First Noticed You",
       location: "Special Location",
       description: "The moment that caught my attention...",
       image: "/images/photo1.jpg",
       tag: "First Spark"
     }
   ]
   ```

---

## ✍️ Customizing Content & Messages

All text, romantic messages, star cards, terminal commands, quiz questions, and sign-offs are centralized in a single configuration file:

`src/data/content.js`

You can edit:
- **Girl's Name**: `girlName: "Special Someone"`
- **Creator Name**: `creatorName: "Harsh"`
- **Star Messages**: 6 main star cards + secret star
- **Confession Lines**: Emotional narrative reveal text
- **Developer Terminal**: CLI commands (`whoami`, `status`, `cause`, `uninstall feelings`)
- **Open When Envelopes**: Digital letters for specific moods
- **Word Picker Matrix**: Personal thoughts attached to keywords (`Smile`, `Beautiful`, `Special`, `Crazy`, `Us`)
- **Final Closing Quotes**: Ending sign-off

---

## ⚡ Build & Vercel Deployment

### Build for Production
To generate an optimized production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Vercel Deployment Instructions

This repository is pre-configured for instant **Vercel** deployment.

1. Push your repository to GitHub / GitLab / Bitbucket.
2. Go to [Vercel Dashboard](https://vercel.com/dashboard) and click **Add New Project**.
3. Import your repository.
4. Vercel will automatically detect Vite settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.

> `vercel.json` is included to automatically handle client-side routing rewrites so direct link navigation will never return a 404 error on Vercel.

---

## 🛠️ Tech Stack & Features

- **Frontend Core**: React 18, Vite
- **Styling**: Vanilla CSS, Glassmorphism, CSS Variables, Fluid Typography
- **Animations & Visuals**: HTML5 Canvas Starfield, Mouse Parallax, Constellation Line Networks, Custom Keyframe Physics
- **Icons**: Lucide React
- **Audio System**: HTML5 Audio API + Web Audio Synthesizer Fallback Context
- **Celebration Effects**: Canvas Confetti

---

## 💬 Code Structure

```text
a-little-universe/
├── public/
│   ├── music/
│   │   └── romantic-song.mp3 (Place custom song here)
│   ├── images/
│   └── favicon & meta assets
│
├── src/
│   ├── components/
│   │   ├── BackgroundUniverse.jsx  # Interactive HTML5 Canvas Starfield
│   │   ├── Navbar.jsx              # Header & quick audio controls
│   │   ├── EntryScreen.jsx         # Fullscreen intro & audio unlock
│   │   ├── UniverseSection.jsx     # Night sky hero quote reveal
│   │   ├── InteractiveStars.jsx    # Glowing constellation star cards
│   │   ├── ConfessionSection.jsx   # Emotional confession climax
│   │   ├── DeveloperTerminal.jsx   # Interactive CLI terminal
│   │   ├── ThingsToKnow.jsx        # Glass card deck
│   │   ├── OpenWhenEnvelopes.jsx   # Digital letter envelopes
│   │   ├── PersonalMessagePicker.jsx # Word matrix note generator
│   │   ├── MusicSection.jsx        # Dedicated audio player section
│   │   ├── MiniMusicPlayer.jsx     # Floating bottom-corner audio widget
│   │   ├── MemoriesTimeline.jsx    # Polaroid gallery & lightbox viewer
│   │   ├── MiniGame.jsx            # Interactive trivia quiz
│   │   ├── FinalSection.jsx        # Cinematic closing quote
│   │   └── EasterEggs.jsx          # Keyboard secret listener
│   │
│   ├── context/
│   │   └── AudioContext.jsx        # Global HTML5 Audio state manager
│   │
│   ├── data/
│   │   └── content.js              # Centralized content store
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                   # Core design tokens & typography
│
├── package.json
├── vite.config.js
├── vercel.json
└── README.md
```

---

## 📜 License & Sincerity

*Made with way too much code & a little too many feelings — Harsh*
