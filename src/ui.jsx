import { useEffect, useRef, useState } from "react";

/*
 * Logo — a code recreation of the Rash mark (bold R cut by the blue slash).
 * Swap the <LogoMark> SVG for the real logo file (e.g. /logo.svg in /public)
 * when you drop assets in: <img src="/logo.svg" alt="Rash Game Studios" />.
 * `gap` should match the background the logo sits on, so the slash reads as a cut.
 */
export function LogoMark({ className = "h-9 w-9", gap = "var(--color-base)", ink = "var(--color-ink)" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <text
        x="24"
        y="39"
        textAnchor="middle"
        fontFamily="Sora, sans-serif"
        fontWeight="800"
        fontSize="44"
        fill={ink}
      >
        R
      </text>
      <g transform="rotate(-30 24 26)">
        <rect x="-10" y="21.5" width="68" height="9" fill={gap} />
        <rect x="-10" y="23.5" width="68" height="5" fill="#1290f0" />
        <polygon points="58,23.5 66,26 58,28.5" fill="#1290f0" />
      </g>
    </svg>
  );
}

export function Wordmark({ dark = false, gap }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark
        className="h-9 w-9 shrink-0"
        gap={gap ?? (dark ? "var(--color-deep)" : "var(--color-base)")}
        ink={dark ? "#ffffff" : "var(--color-ink)"}
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-extrabold tracking-tight ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          RASH
        </span>
        <span className="font-mono text-[9px] tracking-[0.28em] text-blue">GAME STUDIOS</span>
      </span>
    </span>
  );
}

/*
 * Media — clearly-labeled placeholder block for game art / video.
 * ratio: CSS aspect-ratio string. video: shows a play chip so you know
 * a video file goes here, not an image.
 */
export function Media({ label, ratio = "16/9", color = "var(--color-blue)", video = false, className = "" }) {
  // color-mix instead of hex+alpha so `color` can be a CSS variable that
  // remaps in dark mode; percentages match the old 66/1f/0a/14 alpha values.
  const mix = (pct) => `color-mix(in srgb, ${color} ${pct}%, transparent)`;
  return (
    <div
      role="img"
      aria-label={`Placeholder — ${label}`}
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed ${className}`}
      style={{
        aspectRatio: ratio,
        borderColor: mix(40),
        background: `linear-gradient(135deg, ${mix(12)} 0%, ${mix(4)} 55%, ${mix(8)} 100%)`,
      }}
    >
      {video && (
        <span
          className="flex h-14 w-14 items-center justify-center rounded-full"
          style={{ background: color }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6" style={{ fill: "var(--color-on-accent)" }}>
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      )}
      <span
        className="absolute bottom-2.5 left-3 right-3 truncate font-mono text-[11px] leading-snug"
        style={{ color }}
      >
        {video ? "▶ " : "⬚ "}
        {label}
      </span>
    </div>
  );
}

/* Reveal — gentle scroll-triggered fade-up. Renders visible immediately
   under prefers-reduced-motion (handled in CSS). */
export function Reveal({ as: Tag = "div", className = "", delay = 0, children, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ThemeToggle — same control as the arcade site: shared "rash-theme"
   localStorage key and data-theme attribute, sun/moon icon pair. */
export function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.dataset.theme === "dark");
  const flip = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    try {
      localStorage.setItem("rash-theme", next ? "dark" : "light");
    } catch {
      /* private mode — theme just won't persist */
    }
  };
  return (
    <button
      type="button"
      onClick={flip}
      aria-pressed={dark}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-ink/20 text-ink/70 transition-colors hover:border-ink hover:text-ink"
    >
      {dark ? (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      )}
    </button>
  );
}

/* Eyebrow — mono section label led by the brand slash. */
export function Eyebrow({ children, color = "var(--color-blue)", className = "" }) {
  return (
    <p className={`font-mono text-xs font-bold uppercase tracking-[0.22em] ${className}`}>
      <span aria-hidden="true" style={{ color }}>
        /&nbsp;
      </span>
      <span className="text-ink-soft">{children}</span>
    </p>
  );
}

export function PlatformChip({ children }) {
  return (
    <span className="rounded-full border border-ink/15 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink-soft">
      {children}
    </span>
  );
}
