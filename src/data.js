/*
 * The content spine for the studio site.
 *
 * Rash Game Studios builds games for clients — web, CrazyGames, Roblox and
 * fast prototypes — and ships one product of its own: Cartbo.
 *
 * Colors are CSS variables (defined in index.css) rather than raw hex, so
 * every accent automatically remaps to its calmer dark-mode variant.
 */

export const BLUE = "var(--color-blue)";

export const STUDIO = {
  // Carried over from the previous live site, which used this exact address.
  // NOTE: the repo's CNAME serves the site from rashgamestudios.com (one 's'),
  // while this address uses rashgamesstudios.com (two). If that is a typo
  // rather than two domains you own, fix it here and every link follows.
  email: "hello@rashgamesstudios.com",
  clients: "10+",
};

/* --------------------------------- Cartbo --------------------------------- */
/* The flagship. Everything here comes from the Cartbo investor overview —
   it's a shipped, live product, so the copy states facts, not promises. */

export const cartbo = {
  name: "Cartbo",
  url: "https://cartbo.app",
  tagline: "The home for indie games — before they're finished.",
  one_liner: "A social platform for indie game developers.",
  pitch:
    "A short-video feed of indie games. Scroll previews like you would on TikTok, tap Play, and the real WebGL build boots right in your browser — sandboxed, in one tap. No download, no store page, no waiting for version 1.0.",
  wedge:
    "Unlike Steam or itch, Cartbo accepts in-development and buggy “Testing” builds on purpose. Players playtest real games while they're being made; developers get honest feedback, live playtest telemetry, and a wishlist audience that grows from the first playable to launch day.",
  status: "Live at cartbo.app",
  loop: [
    {
      n: "1",
      title: "Scroll",
      body: "A video feed of indie games — testing builds and finished ones, side by side.",
    },
    {
      n: "2",
      title: "Play",
      body: "Tap once. The real build runs in-browser, sandboxed and isolated — no install.",
    },
    {
      n: "3",
      title: "React",
      body: "Like, comment, leave playtest feedback, and wishlist to follow a game to launch.",
    },
    {
      n: "4",
      title: "Learn",
      body: "The developer gets telemetry: plays, session length, where players drop off, crashes — and a growing pre-launch audience.",
    },
  ],
  built: [
    "Instant sandboxed WebGL play, straight from the feed",
    "Uploads for video, playable builds and 3D models",
    "Likes, follows, comments, shares, wishlists and real-time DMs",
    "Creator analytics — plays, conversion funnel, drop-off, crash reports",
    "XP, levels, badges, monthly leaderboard with grants, and game jams",
    "Supabase backend, Cloudflare R2 build CDN, Vercel hosting",
  ],
  pricing_note:
    "Free to scroll, play, upload and connect. Cartbo Pro is $5/month for the deep playtest analytics a store never gives an indie developer.",
};

/* -------------------------------- Services -------------------------------- */
/* What clients actually hire us for. Order = how often it's asked for. */

export const services = [
  {
    id: "web-games",
    title: "Web games",
    color: "var(--color-blue)",
    tagline: "Built for the browser, not ported to it.",
    desc:
      "HTML5 and WebGL games that load fast, run on a mid-range phone, and don't need an install. Unity and C# under the hood, tuned hard for web — small builds, short load times, mobile controls that actually work on touch.",
    bullets: [
      "Desktop and mobile controls in the same build",
      "Build-size and load-time budget agreed up front",
      "Portable to any web portal, not locked to one",
    ],
    from: "$700",
  },
  {
    id: "crazygames",
    title: "CrazyGames + SDK",
    color: "var(--color-coral)",
    tagline: "We stay on it until it's approved.",
    desc:
      "Full CrazyGames SDK integration — rewarded and midgame ads, loading and gameplay events, happytime, invite links, cloud saves. Then we run the submission with you and keep fixing until the game clears basic launch approval.",
    bullets: [
      "SDK wired correctly, not bolted on at the end",
      "QA pass against the CrazyGames review checklist",
      "Resubmission fixes included until basic launch approval",
    ],
    from: "$280",
  },
  {
    id: "roblox",
    title: "Roblox experiences",
    color: "var(--color-mint)",
    tagline: "Luau, live systems, real monetization.",
    desc:
      "Roblox experiences and the systems inside them — gameplay, data persistence, passes and dev products, leaderboards, analytics. Built with server authority and DataStore safety from the first commit, because retrofitting that later is miserable.",
    bullets: [
      "Server-authoritative gameplay and anti-exploit basics",
      "Safe DataStore saves with session locking",
      "Monetization and analytics wired in at build time",
    ],
    from: "$250",
  },
  {
    id: "prototypes",
    title: "Prototypes",
    color: "var(--color-sun)",
    tagline: "One day to one week. Playable, not a deck.",
    desc:
      "You have an idea and you want to feel it before you fund it. We build the smallest thing that answers the question — a real playable build in your browser, not a mockup — and hand you the project files either way.",
    bullets: [
      "One-day spike for a single mechanic",
      "Core-loop prototype in two to four days",
      "Vertical slice in a week",
    ],
    from: "$150",
  },
  {
    id: "ai",
    title: "Game dev with AI",
    color: "var(--color-grape)",
    tagline: "In the pipeline, and in the game.",
    desc:
      "Two different things, and we do both. AI inside our pipeline — concept art, textures, icons and marketing art generated fast, then hand-corrected — and AI inside your game, as NPC dialogue, procedural content, adaptive difficulty or smarter opponents.",
    bullets: [
      "AI art pipeline, every asset reviewed by a human",
      "LLM-driven dialogue and NPC behaviour",
      "Procedural content and adaptive difficulty systems",
    ],
    from: "$400",
  },
];

/* ------------------------------- Studio games ------------------------------ */
/* Our own titles — proof we ship, not a catalogue. */

export const ownGames = [
  {
    id: "roast-racers",
    title: "Roast Racers",
    color: "var(--color-coral)",
    tagline: "Out-drive your friends. Never let them forget it.",
    desc:
      "A multiplayer party racer: short races, ridiculous power-ups, and an automatic roast for whoever finishes last. Built in Unity with Photon Fusion — the project where we learned how to make real-time multiplayer behave.",
    tech: ["Unity", "C#", "Photon Fusion"],
    status: "In development",
    link: "[insert store link]",
  },
  {
    id: "hold-on-happy",
    title: "Hold On Happy",
    color: "var(--color-sun)",
    tagline: "A man. His golden labrador. One long walk home.",
    desc:
      "Our slowest, most personal project — a third-person narrative adventure about the kind of friendship that doesn't need words. It's the reason the studio exists, and it takes exactly as long as it takes.",
    tech: ["Unity", "C#", "Narrative"],
    status: "In development",
    link: "[insert wishlist link]",
  },
];

/* --------------------------------- Proof ---------------------------------- */

export const proof = [
  { k: "Satisfied clients", v: "10+", c: "var(--color-blue)" },
  { k: "Prototype turnaround", v: "1 day – 1 week", c: "var(--color-sun)" },
  { k: "Platforms shipped to", v: "Web · CrazyGames · Roblox", c: "var(--color-coral)" },
  { k: "Launch support", v: "Until approval", c: "var(--color-mint)" },
];

/* Swap these for real quotes as you collect them — empty quotes are skipped. */
export const testimonials = [
  // Add real quotes here and the section appears on its own. An entry with an
  // empty quote is skipped, and with none of them filled in the whole section
  // is not rendered at all.
  // { quote: "", name: "", role: "" },
];

/* ------------------------------- Process ---------------------------------- */
/* Short version lives on the home page; the full version is on /pricing. */

export const process = [
  {
    n: "01",
    title: "Tell us what you want",
    short: "A paragraph is enough. We reply the same day.",
    detail:
      "Send the idea, a reference game, a half-finished project, or a one-line brief — whatever you actually have. No form with twelve required fields. You'll get a real reply from the person who'd be building it, usually within a day.",
    color: "var(--color-blue)",
  },
  {
    n: "02",
    title: "Scoping call",
    short: "30 minutes, free. We tell you what it really takes.",
    detail:
      "We walk through scope, platform, art direction and what success looks like. If the thing you want is cheaper, simpler or a worse idea than you think, this is where we say so — before anyone has signed anything.",
    color: "var(--color-coral)",
  },
  {
    n: "03",
    title: "Fixed quote + milestone plan",
    short: "One to two days. A number, not a range.",
    detail:
      "You get a written scope, a fixed price, a milestone breakdown with dates, and a clear list of what is and isn't included. The quote holds unless you change the scope — and if you do, we re-quote the delta instead of silently absorbing it.",
    color: "var(--color-mint)",
  },
  {
    n: "04",
    title: "Kickoff",
    short: "40% to start. Work begins the same week.",
    detail:
      "Deposit in, repo up, first milestone scheduled. You get access to the project board and a direct line — email, Discord or WhatsApp, your call. No account manager in the middle.",
    color: "var(--color-sun)",
  },
  {
    n: "05",
    title: "Build in the open",
    short: "A playable build at every milestone. Weekly.",
    detail:
      "Every milestone ends with something you can actually click — a hosted browser build, not a screenshot. Two revision rounds per milestone are built into the price, so feedback is expected rather than billed.",
    color: "var(--color-grape)",
  },
  {
    n: "06",
    title: "Polish & QA",
    short: "The platform's checklist, line by line.",
    detail:
      "Performance pass, build-size pass, mobile controls, edge cases, and a full run against the target platform's review checklist — CrazyGames, Roblox or your own. This is the stage most studios skip and then pay for twice.",
    color: "var(--color-punch)",
  },
  {
    n: "07",
    title: "Launch & approval support",
    short: "We stay on it until the game is live.",
    detail:
      "For CrazyGames we handle submission with you and fix whatever review comes back with, as many rounds as it takes, until the game clears basic launch approval. That support is in the price — not an add-on.",
    color: "var(--color-blue)",
  },
  {
    n: "08",
    title: "Fourteen days after",
    short: "Free bug-fix window. No invoice.",
    detail:
      "For two weeks after launch, anything that's genuinely broken gets fixed for free. New features are a new quote — but bugs are ours.",
    color: "var(--color-mint)",
  },
];

/* -------------------------------- Channels -------------------------------- */

export const channels = [
  {
    name: "Discord",
    color: "#5865f2",
    blurb: "Dev talk, playtests, and the quickest way to reach us.",
    cta: "Join the Discord",
    link: "[insert Discord invite]",
  },
  {
    name: "YouTube",
    color: "#ff0033",
    blurb: "Devlogs, trailers, and the occasional dog cameo.",
    cta: "Watch on YouTube",
    link: "https://youtube.com/@gamedevteluguoffl",
  },
  {
    name: "X / Twitter",
    color: "#101828",
    blurb: "Build-in-public updates, sometimes mid-crunch.",
    cta: "Follow on X",
    link: "[insert X profile]",
  },
  {
    name: "Instagram",
    color: "#e1306c",
    blurb: "Screenshots, key art, and behind-the-scenes.",
    cta: "Follow on Instagram",
    link: "[insert Instagram profile]",
  },
];
