import { useEffect, useRef, useState } from "react";

/*
 * Logo — the real studio mark, as a rounded tile.
 *
 * The artwork is white-and-blue on its own deep navy, so it can't sit directly
 * on the light theme's background. Keeping that navy as a rounded tile solves
 * it: one asset reads correctly in both themes and needs no light/dark variant.
 * The wordmark beside it stays live text, so it themes with everything else.
 */
export function LogoMark({ className = "h-9 w-9" }) {
  return (
    <img
      src="/icon.png"
      alt=""
      aria-hidden="true"
      width="512"
      height="512"
      className={`${className} shrink-0 rounded-[22%] object-cover`}
    />
  );
}

export function Wordmark({ dark = false }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark className="h-9 w-9" />
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
 * Media — real artwork when there is a `src`, a labelled placeholder when there
 * isn't. Sections can therefore ship before their assets exist and light up on
 * their own once a file is dropped in.
 *
 * ratio:  CSS aspect-ratio string, held whether or not the asset loads, so the
 *         page never reflows when an image arrives late.
 * video:  with a src, renders poster-then-click-to-play (preload="none", so a
 *         heavy clip costs nothing until someone asks for it). Without a src,
 *         shows a play chip to mark the slot as a video.
 * A src that 404s falls back to the placeholder rather than a broken image.
 */
export function Media({
  label,
  ratio = "16/9",
  color = "var(--color-blue)",
  video = false,
  src,
  poster,
  hint,
  fit = "cover",
  className = "",
}) {
  const [failed, setFailed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const hasMedia = Boolean(src) && !failed;

  // color-mix instead of hex+alpha so `color` can be a CSS variable that
  // remaps in dark mode; percentages match the old 66/1f/0a/14 alpha values.
  const mix = (pct) => `color-mix(in srgb, ${color} ${pct}%, transparent)`;

  if (hasMedia && video) {
    return (
      <div
        className={`relative overflow-hidden rounded-2xl ${className}`}
        style={{ aspectRatio: ratio, background: mix(10) }}
      >
        {playing ? (
          <video
            src={src}
            poster={poster}
            controls
            autoPlay
            playsInline
            className="h-full w-full"
            style={{ objectFit: fit }}
            onError={() => setFailed(true)}
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play — ${label}`}
            className="group absolute inset-0 h-full w-full cursor-pointer"
          >
            {poster && (
              <img
                src={poster}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="h-full w-full"
                style={{ objectFit: fit }}
                onError={() => setFailed(true)}
              />
            )}
            <span className="absolute inset-0 flex items-center justify-center bg-black/15 transition-colors group-hover:bg-black/25">
              <span
                className="flex h-16 w-16 items-center justify-center rounded-full shadow-xl transition-transform duration-300 group-hover:scale-110"
                style={{ background: color }}
              >
                <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7" style={{ fill: "var(--color-on-accent)" }}>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>
    );
  }

  if (hasMedia) {
    return (
      <img
        src={src}
        alt={label}
        loading="lazy"
        className={`w-full rounded-2xl ${className}`}
        style={{ aspectRatio: ratio, objectFit: fit }}
        onError={() => setFailed(true)}
      />
    );
  }

  /* Placeholder. Styled as a picture rather than an empty box, so the layout
     reads picture-led before the real art exists — and it names the file to
     drop in, so the page doubles as the shopping list. */
  return (
    <div
      role="img"
      aria-label={`Image placeholder — ${label}`}
      className={`relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border ${className}`}
      style={{
        aspectRatio: ratio,
        borderColor: mix(35),
        background: `linear-gradient(145deg, ${mix(16)} 0%, ${mix(5)} 55%, ${mix(11)} 100%)`,
      }}
    >
      {/* Faint grid so an empty slot still has surface texture. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(${mix(10)} 1px, transparent 1px), linear-gradient(90deg, ${mix(10)} 1px, transparent 1px)`,
          backgroundSize: "34px 34px",
        }}
      />

      {video ? (
        <span
          className="relative flex h-14 w-14 items-center justify-center rounded-full"
          style={{ background: color }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6" style={{ fill: "var(--color-on-accent)" }}>
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      ) : (
        /* Mountain-and-sun glyph: the universal "a picture goes here". */
        <svg
          viewBox="0 0 48 36"
          className="relative h-9 w-9 sm:h-11 sm:w-11"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="3" width="44" height="30" rx="4" opacity="0.55" />
          <circle cx="15" cy="13" r="3.5" />
          <path d="M6 28l10.5-11 7.5 8 6-5.5L42 28" />
        </svg>
      )}

      <span className="relative px-4 text-center">
        <span
          className="block font-mono text-[11px] font-bold uppercase tracking-[0.18em]"
          style={{ color }}
        >
          {label}
        </span>
        {hint && (
          <span className="mt-1 block font-mono text-[10px] leading-snug text-ink-soft">{hint}</span>
        )}
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
