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
  // The studio mailbox, as given by the owner. Not hello@rashgamestudios.com —
  // that domain was inferred earlier and never actually had a mailbox on it.
  email: "rashgamingstudios@gmail.com",
  // Wide banner under the hero. Drop a file at public/hero.jpg and set this.
  // The hero is sliced diagonally between the two games, echoing the slash
  // in the logo. Order is left slice, right slice.
  // One path fills the hero. Add a second and it splits on the diagonal.
  heroSlices: ["/hero-racing.jpg"],
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

export const allServices = [
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
      "Full CrazyGames SDK integration — rewarded and midgame ads, loading and gameplay events, happytime, invite links, cloud saves. Then we run the submission with you and fix whatever review comes back with, up to three rounds.",
    bullets: [
      "SDK wired correctly, not bolted on at the end",
      "QA pass against the CrazyGames review checklist",
      "Up to 3 resubmission rounds included",
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
    from: "$400",
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
    // Hidden until the replacement copy is written (website brief, item 7).
    // Flip this to false and the card returns to the grid and the pricing page.
    hidden: true,
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
    from: "$250",
  },
];

export const services = allServices.filter((s) => !s.hidden);

/* ------------------------------- Studio games ------------------------------ */
/* Our own titles — proof we ship, not a catalogue. */

/*
 * The slate. These are the studio's own titles and they carry the site now —
 * with no client work to show, this section is the proof that we ship.
 *
 * Two of them are deliberately unnamed. That reads as a tease rather than a
 * gap, so an unannounced title is a feature of the layout, not a hole in it:
 * `title: null` renders the `placeholder` instead and shows a "name soon" note.
 *
 * To finish a title: set `title`, drop key art at `art`, and delete the
 * `placeholder`. Nothing else needs touching.
 */
export const allTitles = [
  {
    id: "racing",
    title: "Roast Racers",
    color: "var(--color-coral)",
    // Footage is semi-realistic: wet asphalt, real cars, autumn highways —
    // not the cartoon party racer the old blurb implied. Copy follows the
    // footage, and keeps the roast, which is a real planned feature.
    tagline: "Out-drive your friends. Never let them forget it.",
    desc:
      "A multiplayer racer built in Unity with Photon Fusion — real handling, weather that turns on you, and a roast waiting for whoever finishes last.",
    tech: ["Unity", "C#", "Photon Fusion"],
    platforms: ["Play Store", "Web"],
    art: "/games/racing/keyart.jpg",
    trailer: "/games/racing/trailer.mp4",
    shots: ["/games/racing/shot-1.jpg", "/games/racing/shot-2.jpg", "/games/racing/shot-3.jpg"],
    status: "In production",
    link: null,
  },
  {
    id: "hunting",
    title: "Wildkeeper",
    placeholder: null, // named now
    color: "var(--color-mint)",
    tagline: "Hunt. Catch. Build your zoo.",
    desc: "Track animals across forest, swamp, plains and snowfields, catch them with bait, nets and a steady hand — then stock the zoo they end up in.",
    tech: ["Unity", "C#"],
    platforms: ["Play Store", "Web"],
    art: "/games/hunting/keyart.jpg",
    trailer: "/games/hunting/trailer.mp4",
    shots: ["/games/hunting/shot-1.jpg", "/games/hunting/shot-2.jpg", "/games/hunting/shot-3.jpg"],
    status: "In production",
    link: null,
  },
  {
    id: "hold-on-happy",
    // Hidden until it has art. Delete this line to bring the card back.
    hidden: true,
    title: "Hold On Happy",
    color: "var(--color-sun)",
    tagline: "A man. His golden labrador. One long walk home.",
    desc:
      "Our slowest, most personal project — a third-person narrative adventure about the kind of friendship that doesn't need words. It's the reason the studio exists, and it takes exactly as long as it takes.",
    tech: ["Unity", "C#", "Narrative"],
    platforms: ["PC"],
    art: null, // "/games/hold-on-happy.jpg"
    shots: [null, null, null],
    status: "The long one",
    link: null,
  },
];

export const titles = allTitles.filter((t) => !t.hidden);

/* --------------------------------- Proof ---------------------------------- */

export const proof = [
  { k: "Prototype turnaround", v: "1 day – 1 week", c: "var(--color-sun)" },
  { k: "Platforms we build for", v: "Web · CrazyGames · Roblox", c: "var(--color-blue)" },
  { k: "Launch support", v: "Through submission", c: "var(--color-mint)" },
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
      "For CrazyGames we handle submission with you and fix whatever review comes back with — up to three rounds, included in the price rather than billed as an add-on. It is rare to need more than one.",
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
    name: "YouTube",
    color: "#ff0033",
    blurb: "Devlogs, trailers, and the occasional dog cameo.",
    cta: "Watch on YouTube",
    link: "https://youtube.com/@gamedevteluguoffl",
  },
  // Discord, X and Instagram were removed rather than left pointing nowhere.
  // Add one back with a real URL and both the contact grid and the footer
  // pick it up automatically.
];
