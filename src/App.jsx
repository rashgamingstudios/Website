import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { STUDIO, cartbo, channels } from "./data.js";
import { Wordmark, ThemeToggle } from "./ui.jsx";
import Home from "./Home.jsx";
import Pricing from "./Pricing.jsx";

/*
 * Two pages now: the studio pitch, and the full pricing + process breakdown.
 * Section links point at "/#id" so they work from either page — ScrollManager
 * below does the actual scrolling once the target page has rendered.
 */

const NAV = [
  { label: "Cartbo", to: "/#cartbo" },
  { label: "What we build", to: "/#services" },
  { label: "Our games", to: "/#games" },
  { label: "Process", to: "/#process" },
  { label: "Pricing", to: "/pricing" },
];

/* ------------------------------ Scroll manager ----------------------------- */
/* React Router doesn't scroll to hashes by itself. Scroll to the anchor when
   there is one, otherwise jump to the top on a page change.
 *
 * The scroll waits on document.fonts.ready: the display face is a webfont, and
 * measuring before it swaps in puts the target hundreds of pixels off. The
 * 600ms timeout is the escape hatch for a blocked or cached-but-slow font. */

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    let cancelled = false;

    const go = () => {
      if (cancelled) return;
      const el = hash && document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      else window.scrollTo({ top: 0, behavior: "auto" });
    };

    if (!hash) {
      go(); // top-of-page needs no measurement
      return () => { cancelled = true; };
    }

    const ready = document.fonts?.ready ?? Promise.resolve();
    const fallback = setTimeout(go, 600);
    let reflow;
    ready.then(() => {
      clearTimeout(fallback);
      // setTimeout, not rAF: a tab opened in the background never gets a
      // frame, and the scroll would silently never happen.
      reflow = setTimeout(go, 0);
    });

    return () => {
      cancelled = true;
      clearTimeout(fallback);
      clearTimeout(reflow);
    };
  }, [pathname, hash]);

  return null;
}

/* ---------------------------------- Header --------------------------------- */

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/8 bg-base/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link to="/" aria-label="Rash Game Studios — home" className="rounded-md" onClick={close}>
          <Wordmark />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-semibold text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={cartbo.url}
            className="text-sm font-semibold text-ink-soft transition-colors hover:text-ink"
            aria-label="Play — Cartbo, our platform for indie games"
          >
            Play ↗
          </a>
          <ThemeToggle />
          <a
            href={`mailto:${STUDIO.email}`}
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-on-ink transition-transform hover:-translate-y-0.5"
          >
            Start a project
          </a>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink/20 text-ink"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-ink/8 bg-base px-5 pb-5 pt-2 lg:hidden">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={close}
              className="block border-b border-ink/5 py-3 font-semibold text-ink"
            >
              {item.label}
            </Link>
          ))}
          <a href={cartbo.url} onClick={close} className="block border-b border-ink/5 py-3 font-semibold text-ink">
            Play games on Cartbo ↗
          </a>
          <a
            href={`mailto:${STUDIO.email}`}
            onClick={close}
            className="mt-4 block rounded-full bg-ink px-5 py-3 text-center font-bold text-on-ink"
          >
            Start a project
          </a>
        </nav>
      )}
    </header>
  );
}

/* ---------------------------------- Footer ---------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-deep pb-10 pt-12 text-white">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Wordmark dark />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/50">
              We build web games, CrazyGames releases, Roblox experiences and fast
              prototypes — and we make Cartbo.
            </p>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-2.5 sm:grid-cols-3">
            {NAV.map((item) => (
              <Link key={item.to} to={item.to} className="text-sm font-semibold text-white/70 hover:text-white">
                {item.label}
              </Link>
            ))}
            <a href="https://cartbo.app" className="text-sm font-semibold text-white/70 hover:text-white">
              cartbo.app ↗
            </a>
            {channels.map((ch) => (
              <a key={ch.name} href={ch.link} className="text-sm font-semibold text-white/70 hover:text-white">
                {ch.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/50">© 2026 Rash Game Studios. All rights reserved.</p>
          <p className="text-sm text-white/70">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-blue">
              New project
            </span>{" "}
            →{" "}
            <a
              href={`mailto:${STUDIO.email}`}
              className="font-bold text-white underline decoration-blue decoration-2 underline-offset-2"
            >
              {STUDIO.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ----------------------------------- App ----------------------------------- */

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-blue focus:px-5 focus:py-2.5 focus:font-bold focus:text-on-accent"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
