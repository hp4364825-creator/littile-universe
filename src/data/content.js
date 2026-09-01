export const siteContent = {
  // Target Name & Personalization
  girlName: "Echchha",
  creatorName: "Harsh",

  // Romantic Light Background Instrumental Audio Configuration
  music: {
    title: "Light Romantic Piano Melody — Starlight Lullaby",
    src: "/music/romantic-background.mp3",
    defaultVolume: 0.25,
  },

  // Section 1: Entry Screen
  entry: {
    greeting: "Hey, Echchha.",
    subtext: "I made something special just for you.",
    headphonesAdvice: "Best experienced with headphones 🎧",
    buttonText: "Enter My Universe ✨",
    loadingSteps: [
      "Initializing Echchha's universe...",
      "Finding stars...",
      "Loading memories...",
      "Loading feelings...",
      "100% ❤️"
    ]
  },

  // Section 2: Universe Hero Section
  universe: {
    line1: "There are 8 billion people in this world…",
    line2: "…and somehow, I met you, Echchha.",
    line3: "Maybe that’s not such a small thing.",
    instructions: "Touch the glowing stars or click the Moon to unlock hidden thoughts.",
    moonPhoto: {
      image: "/images/echchha.jpg",
      title: "The Moon of My Universe 🌙",
      subtitle: "Out of all the stars in the night sky, you shine the brightest, Echchha. ❤️",
      caption: "A quiet reminder of the person who brought light into my world."
    }
  },

  // Section 3: Interactive Stars (5-7 special stars + 1 secret star)
  stars: [
    {
      id: 1,
      title: "The First Thing I Noticed",
      preview: "It wasn't just your looks...",
      message: "It wasn’t just your looks, Echchha. There was something genuine about your vibe — the way you carry yourself and speak — that instantly made me want to know you better.",
      constellation: "Ursa Minor",
      color: "#a855f7"
    },
    {
      id: 2,
      title: "Your Smile",
      preview: "I don't know if you realize it...",
      message: "I don’t know if you realize it, Echchha, but your smile can completely change the mood of a conversation. It lights up the entire room without even trying.",
      constellation: "Cassiopeia",
      color: "#ec4899"
    },
    {
      id: 3,
      title: "Talking To You",
      preview: "Some conversations feel like effort...",
      message: "Some conversations feel like effort. Ours never really did. Hours pass like minutes when we talk, Echchha, and I never get tired of listening to you.",
      constellation: "Cygnus",
      color: "#3b82f6"
    },
    {
      id: 4,
      title: "Something I Never Said",
      preview: "Sometimes I wait for your message...",
      message: "Sometimes I wait for your message a little more than I probably should. Whenever Echchha pops up on my screen, I secretly smile. :)",
      constellation: "Orion",
      color: "#10b981"
    },
    {
      id: 5,
      title: "The Truth",
      preview: "You slowly became someone...",
      message: "You slowly became someone I think about more often than I expected. Echchha, you've become my favourite part of ordinary days.",
      constellation: "Lyra",
      color: "#f59e0b"
    },
    {
      id: 6,
      title: "Unspoken Comfort",
      preview: "With you, silence feels easy...",
      message: "Even in quiet moments, there's a rare comfort with you, Echchha. You don't have to try to impress me — just being yourself is more than enough.",
      constellation: "Pegasus",
      color: "#8b5cf6"
    }
  ],

  // Secret Easter Egg Star
  secretStar: {
    title: "The Secret Constellation 👀",
    message: "Echchha, you actually found this hidden star! That curiosity of yours is one of the many reasons you're so special to me. ❤️",
    code: "STARDUST"
  },

  // Section 4: The Confession
  confession: {
    leadIn: "Okay...",
    pauseText: "Enough hiding behind stars.",
    statement: "I like you, Echchha.",
    details: [
      "Not because you're perfect.",
      "Not because I have some perfect explanation.",
      "I just genuinely like having you in my life.",
      "Talking to you makes ordinary days feel a little better."
    ]
  },

  // Section 5: Developer / IT Guy Easter Egg
  terminal: {
    user: "harsh@universe",
    initialLines: [
      { type: "system", text: "Initializing sentiment_core v2.4..." },
      { type: "input", text: "> whoami" },
      { type: "output", text: "Harsh (Full-Stack Engineer & Distracted by Echchha)" },
      { type: "input", text: "> system.check()" },
      { type: "output", text: "Status: OK | Feelings detected for Echchha ❤️ | Heart Rate: 84 bpm" },
      { type: "input", text: "> status" },
      { type: "output", text: "Heart       : occupied by Echchha\nBrain       : distracted\nSleep       : questionable" },
      { type: "input", text: "> cause" },
      { type: "output", text: "Echchha." },
      { type: "input", text: "> uninstall feelings" },
      { type: "error", text: "ERROR 404: Operation denied. Feelings for Echchha cannot be removed or overwritten." }
    ],
    availableCommands: [
      { cmd: "whoami", desc: "Display current developer identity" },
      { cmd: "system.check()", desc: "Run emotional diagnostics" },
      { cmd: "status", desc: "Show internal system state" },
      { cmd: "cause", desc: "Analyze source of distraction" },
      { cmd: "uninstall feelings", desc: "Attempt to clear emotion cache" },
      { cmd: "secret", desc: "Reveal hidden developer note" },
      { cmd: "help", desc: "List terminal commands" }
    ],
    finalCommandOutput: "> final_message()\n\nI like you, Echchha. ❤️"
  },

  // Section 6: A Few Things I Want You To Know
  thingsToKnow: [
    {
      id: "no-pressure",
      title: "No Pressure",
      subtitle: "Zero Expectations",
      description: "Echchha, you don't have to say anything just because I made this website. No awkwardness required.",
      icon: "Shield"
    },
    {
      id: "just-honest",
      title: "Just Honest",
      subtitle: "Pure Sincerity",
      description: "I simply wanted to be honest about how I feel instead of keeping it locked inside.",
      icon: "Sparkles"
    },
    {
      id: "your-choice",
      title: "Your Choice",
      subtitle: "Full Respect",
      description: "Whatever you feel, Echchha, I'll respect it completely. Your comfort matters most to me.",
      icon: "Compass"
    },
    {
      id: "thank-you",
      title: "Thank You",
      subtitle: "Grateful Heart",
      description: "Thank you, Echchha, for simply being someone I was happy to meet and get to know.",
      icon: "HeartHandshake"
    }
  ],

  // Open When Envelopes
  openWhen: [
    {
      id: "happy",
      tag: "When Happy",
      title: "Open when you're happy 🌟",
      bgGradient: "from-amber-500/20 to-orange-500/10",
      borderColor: "#f59e0b",
      content: "Echchha, I hope your smile is extra wide today! Keep shining — your happiness genuinely makes my day brighter too. Don't forget to celebrate the little wins!"
    },
    {
      id: "sad",
      tag: "When Sad",
      title: "Open when you're sad 🌧️",
      bgGradient: "from-blue-500/20 to-indigo-500/10",
      borderColor: "#6366f1",
      content: "Hey Echchha, it's okay to have rough days. You don't have to be strong all the time. Take a deep breath, drink some water, and remember that bad days pass. I'm always here if you ever want to talk."
    },
    {
      id: "smile",
      tag: "Need a Smile",
      title: "Open when you need a smile 😊",
      bgGradient: "from-pink-500/20 to-rose-500/10",
      borderColor: "#ec4899",
      content: "Reminder for Echchha: Somewhere right now, I'm probably thinking about something funny you said or waiting for your message. You have a 100% success rate of getting through hard days so far!"
    },
    {
      id: "curious",
      tag: "When Curious",
      title: "Open when you're curious 🤔",
      bgGradient: "from-purple-500/20 to-violet-500/10",
      borderColor: "#a855f7",
      content: "If you're wondering how many hours of coding went into making this little universe for you, Echchha... let's just say a lot of coffee, late nights, and zero regrets."
    },
    {
      id: "miss",
      tag: "Miss Someone",
      title: "Open when you miss someone 💫",
      bgGradient: "from-emerald-500/20 to-teal-500/10",
      borderColor: "#10b981",
      content: "Whenever you feel distant or lonely, look up at the night sky, Echchha. We're looking at the exact same stars under the same sky. You're never really alone."
    }
  ],

  // Interactive Personal Message Builder Matrix
  messageMatrix: {
    Smile: "Echchha, your smile has this effortless way of making everything feel lighter and brighter.",
    Beautiful: "Beyond how stunning you look, Echchha, your mind and soul are what truly radiate beauty.",
    Special: "Echchha, you have a rare quality that makes ordinary moments feel memorable.",
    Crazy: "Crazy how out of 8 billion people, finding you, Echchha, felt like hitting the cosmic jackpot.",
    Us: "Whatever the future holds, Echchha, I'm just genuinely glad our paths crossed in this little universe."
  },

  // Memories Timeline — Personal Custom Photos Only
  memories: [
    {
      id: 1,
      date: "Special Moment",
      title: "Holding Hands",
      location: "Warm Touch",
      description: "When our hands met, the rest of the world just quietly faded away. In that simple touch, everything felt right.",
      image: "/images/memory-holding-hands.jpg",
      tag: "Warm Connection"
    },
    {
      id: 2,
      date: "Together",
      title: "Our Moments Together",
      location: "Side by Side",
      description: "Side by side with you, Echchha. Sitting next to you and sharing smiles makes any ordinary day feel special.",
      image: "/images/memory-together.jpg",
      tag: "Pure Happiness"
    }
  ],

  // Mini Quiz Game ("Let's see how well Echchha knows me 👀")
  quiz: {
    title: "Let's see how well you know me 👀",
    subtitle: "A quick 4-question trivia for Echchha about the guy behind the code",
    questions: [
      {
        id: 1,
        question: "What do I probably spend way too much time doing?",
        options: [
          { text: "Coding late at night", isCorrect: false },
          { text: "Overthinking simple things", isCorrect: false },
          { text: "Listening to music on repeat", isCorrect: false },
          { text: "All of the above (especially thinking of Echchha)", isCorrect: true }
        ]
      },
      {
        id: 2,
        question: "What happens when Echchha's name pops up on my phone?",
        options: [
          { text: "I instantly smile", isCorrect: true },
          { text: "I pretend to be cool & wait 2 seconds", isCorrect: true },
          { text: "My heart does a little skip", isCorrect: true },
          { text: "Literally all 3 at once!", isCorrect: true }
        ]
      },
      {
        id: 3,
        question: "Why did I build this universe for Echchha instead of a text?",
        options: [
          { text: "Normal texts are boring", isCorrect: false },
          { text: "Echchha deserves something extraordinary", isCorrect: false },
          { text: "I wanted to combine code with feelings", isCorrect: false },
          { text: "All of the above ❤️", isCorrect: true }
        ]
      },
      {
        id: 4,
        question: "What is my favorite part of talking to Echchha?",
        options: [
          { text: "Your humor and witty remarks", isCorrect: false },
          { text: "How comfortable it feels", isCorrect: false },
          { text: "Just hearing your thoughts on life", isCorrect: false },
          { text: "Everything — literally everything about Echchha", isCorrect: true }
        ]
      }
    ],
    results: {
      highScore: "100% Match! Echchha, you know me better than I expected. You win a lifetime supply of warm conversations! ✨",
      defaultScore: "Great score! Echchha, you have a special place in my universe. ❤️"
    }
  },

  // Final Section
  finalSection: {
    line1: "Out of all the people I could have met…",
    line2: "I’m really glad I met you, Echchha.",
    line3: "That’s all I wanted you to know. ❤️",
    footerText: "made with way too much code & a little too many feelings for Echchha.",
    signoff: "— Harsh"
  }
};
