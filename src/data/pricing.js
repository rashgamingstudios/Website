/*
 * Pricing for the /pricing page.
 *
 * EVERY NUMBER HERE IS A DRAFT ESTIMATE — edit this file and nothing else.
 * Ranges are USD and deliberately wide: the low end is the simplest honest
 * version of that tier, the high end is the fully-featured one. The site
 * renders whatever is in these arrays, so adding or removing a tier needs
 * no layout changes.
 */

export const tiers = [
  {
    id: "prototypes",
    title: "Prototypes",
    color: "var(--color-sun)",
    blurb:
      "The smallest build that answers your question. You get the project files whichever way the answer goes.",
    rows: [
      {
        name: "One-day spike",
        price: "$150 – $280",
        time: "1 day",
        includes: [
          "One mechanic, playable in the browser",
          "Placeholder art, keyboard + touch input",
          "Screen recording you can share",
        ],
      },
      {
        name: "Core-loop prototype",
        price: "$300 – $550",
        time: "2 – 4 days",
        includes: [
          "Full core loop, start to fail state",
          "Basic UI, score and restart",
          "Hosted build link for playtesting",
        ],
      },
      {
        name: "Vertical slice",
        price: "$650 – $1,100",
        time: "1 week",
        includes: [
          "One polished level at shipping quality",
          "Real art pass, audio, menus and saves",
          "Good enough to pitch or crowdfund with",
        ],
      },
    ],
  },
  {
    id: "web-games",
    title: "Web games",
    color: "var(--color-blue)",
    blurb:
      "HTML5 / WebGL games built for the browser from the start — small builds, fast loads, mobile controls in the same build.",
    rows: [
      {
        name: "Single-mechanic / hyper-casual",
        price: "$700 – $1,600",
        time: "2 – 3 weeks",
        includes: [
          "One strong mechanic, endless or level-based",
          "Desktop and mobile controls",
          "Leaderboard and basic progression",
        ],
      },
      {
        name: "Mid-size web game",
        price: "$1,800 – $4,200",
        time: "4 – 8 weeks",
        includes: [
          "Multiple mechanics, 10 – 25 levels or a run-based loop",
          "Custom art direction, audio and UI",
          "Save system, settings, analytics hooks",
        ],
      },
      {
        name: "Full web game",
        price: "$4,500 – $9,500",
        time: "8 – 16 weeks",
        includes: [
          "Large content set, meta-progression, economy",
          "Backend if it needs one — accounts, cloud saves, leaderboards",
          "Live-ops ready: remote config and event hooks",
        ],
      },
    ],
  },
  {
    id: "crazygames",
    title: "CrazyGames + SDK",
    color: "var(--color-coral)",
    blurb:
      "SDK integration and submission support. Approval fixes are included in every row — we don't bill you for a review round.",
    rows: [
      {
        name: "SDK integration on your existing game",
        price: "$280 – $550",
        time: "3 – 5 days",
        includes: [
          "Rewarded + midgame ads, loading and gameplay events, happytime",
          "Cloud saves, invite links, user account hooks",
          "QA against the review checklist, then submission support until basic launch approval",
        ],
      },
      {
        name: "Web game built for CrazyGames",
        price: "$1,200 – $3,500",
        time: "3 – 6 weeks",
        includes: [
          "The game, built to the platform's performance budget",
          "SDK wired in during development, not bolted on",
          "Ad placement tuned so it doesn't wreck the loop",
        ],
      },
      {
        name: "Full release package",
        price: "$3,800 – $7,500",
        time: "6 – 12 weeks",
        includes: [
          "Larger game, full art and audio production",
          "Store art, trailer, description and tags",
          "Post-approval tuning pass on live retention data",
        ],
      },
    ],
  },
  {
    id: "roblox",
    title: "Roblox experiences",
    color: "var(--color-mint)",
    blurb:
      "Built server-authoritative with safe data saving from the first commit — the two things that are brutal to retrofit.",
    rows: [
      {
        name: "Experience prototype",
        price: "$400 – $900",
        time: "3 – 7 days",
        includes: [
          "Core loop playable in Studio and live",
          "Placeholder assets, basic UI",
          "Tested with a few real players",
        ],
      },
      {
        name: "Systems / feature work",
        price: "$550 – $2,000 per system",
        time: "1 – 3 weeks",
        includes: [
          "Drops into your existing experience",
          "Strict-typed Luau, server authority, exploit basics",
          "Examples: inventory, DataStore saves, pass shop, matchmaking",
        ],
      },
      {
        name: "Full experience",
        price: "$1,500 – $5,000",
        time: "4 – 10 weeks",
        includes: [
          "Complete game: gameplay, UI, progression, economy",
          "Passes and dev products wired in with analytics",
          "Session-locked DataStore saves and a moderation pass",
        ],
      },
    ],
  },
  {
    id: "ai",
    title: "Game dev with AI",
    color: "var(--color-grape)",
    blurb:
      "AI in the pipeline is free — it's just how we work. AI in the game is a real system with a real price.",
    rows: [
      {
        name: "AI-accelerated production",
        price: "Included",
        time: "—",
        includes: [
          "Built into every project at no extra cost",
          "Faster iteration on art, audio, level layout and boilerplate",
          "Every generated asset reviewed and corrected by a human before it ships",
        ],
      },
      {
        name: "AI art & asset pipeline",
        price: "$250 – $700",
        time: "3 – 7 days",
        includes: [
          "Concept art, textures, icons, key art and store art",
          "Tuned to one consistent style, not a grab bag",
          "Hand-corrected and delivered as layered source files",
        ],
      },
      {
        name: "AI systems inside your game",
        price: "$700 – $2,500",
        time: "2 – 5 weeks",
        includes: [
          "LLM-driven NPC dialogue and reactive characters",
          "Procedural content generation and adaptive difficulty",
          "Cost controls, caching and a safe fallback when the model is down",
        ],
      },
    ],
  },
];

export const addOns = [
  { name: "Mobile controls retrofit", price: "$150 – $380" },
  { name: "Extra portal port (itch, Poki, GameDistribution, Y8)", price: "$180 – $500 each" },
  { name: "Analytics + live-ops setup", price: "$220 – $450" },
  { name: "Localisation, per language", price: "$80 – $190" },
  { name: "Trailer + store art pack", price: "$180 – $550" },
  { name: "Monthly support & updates retainer", price: "$250 – $750 / month" },
  { name: "Rush delivery", price: "+30 – 50%" },
];

export const included = [
  "Full source and project files, yours on final payment",
  "A playable build at every milestone — not a screenshot",
  "Two revision rounds per milestone, already in the price",
  "A 14-day free bug-fix window after launch",
  "A direct line to the person building it, no account manager",
  "An NDA if you want one, signed before you send anything",
];

export const terms = [
  { k: "Payment split", v: "40% to start · 30% at the midpoint · 30% on delivery" },
  { k: "Smaller jobs", v: "Anything under $400 is paid in full up front" },
  { k: "IP ownership", v: "100% yours, transferred on final payment" },
  { k: "Currency", v: "USD. INR invoices available for Indian clients" },
  { k: "Scope changes", v: "Re-quoted as a delta — never absorbed silently" },
  { k: "Revenue share", v: "Considered case by case on the right project" },
];

export const faq = [
  {
    q: "How fast can you start?",
    a: "Usually the same week. Prototypes often start within 48 hours of the deposit, because there's nothing to set up. Larger builds depend on what's already in the queue — we'll tell you a real date on the scoping call, not an optimistic one.",
  },
  {
    q: "What happens if CrazyGames rejects the build?",
    a: "We fix it and resubmit, as many rounds as it takes, until the game clears basic launch approval. That's included in every CrazyGames tier. We've read the review checklist enough times to design against it from day one, which is why it rarely comes up.",
  },
  {
    q: "Who owns the game?",
    a: "You do. Full IP, source and project files transfer to you on final payment. We'll ask if we can show it in our portfolio, and if you say no, that's the end of it.",
  },
  {
    q: "Can you work on a game I already started?",
    a: "Yes, and it's a lot of what we do. Send the repo or project folder — we'll spend an hour reading it and tell you honestly whether continuing it or restarting is cheaper for you.",
  },
  {
    q: "What engines do you work in?",
    a: "Unity with C# for web, WebGL and mobile. Luau for Roblox. If your project is in Godot or Unreal we'll say so up front rather than learning on your budget.",
  },
  {
    q: "Why is the range so wide?",
    a: "Because “a web game” can mean four days or four months. The range is honest about that. After the scoping call you get one fixed number, and that number is what you pay.",
  },
];
