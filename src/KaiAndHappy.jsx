import { useEffect, useRef, useState } from "react";

/*
 * KaiAndHappy — the quiet idle for the Hold On Happy section.
 * Kai perches on the top edge of the trailer card, boots hanging over;
 * Happy the golden labrador stands beside him, facing his human.
 *
 * Deliberately still: 8 discrete frames per character, swapped by toggling
 * <img> display — no sprite sheets, no cross-fades, no canvas. Kai loops in
 * 2.0s, Happy in 2.6s; the mismatched lengths keep them drifting out of
 * sync so the pair never repeats the same combined moment.
 *
 *  - Lazy: nothing loads until the section is within ~600px of the viewport.
 *  - All 16 frames preload before either loop starts (no first-loop flicker).
 *  - Both loops pause via IntersectionObserver when the section leaves view.
 *  - prefers-reduced-motion: frame 1 only, static (and only frame 1 is fetched).
 *  - Absolutely positioned + fixed box sizes: zero layout shift.
 *  - Micro-touch: hovering Happy just shortens his frame interval (a faster
 *    wag) — a timing change only, on hover-capable devices.
 */

const FRAME_COUNT = 8;
const KAI_FRAMES = Array.from({ length: FRAME_COUNT }, (_, i) => `/sprites/kai_${i + 1}.png`);
const HAPPY_FRAMES = Array.from({ length: FRAME_COUNT }, (_, i) => `/sprites/happy_${i + 1}.png`);

const KAI_MS = 2600 / FRAME_COUNT; // 2.0s loop — a slow breath
const HAPPY_MS = 2600 / FRAME_COUNT; // 2.6s loop — tail sway, ear twitch
const HAPPY_EXCITED_MS = 160; // hover: same frames, faster wag

/* One character: all frames stacked, exactly one visible. Keeping every
   frame mounted means a swap is just a display flip on decoded images. */
function Character({ frames, frame, className = "", style, ...rest }) {
  return (
    <div className={`relative ${className}`} style={style} {...rest}>
      {frames.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          draggable="false"
          decoding="async"
          className="absolute left-0 top-0 h-full w-full select-none"
          style={{ display: i === frame ? "block" : "none" }}
        />
      ))}
    </div>
  );
}

export default function KaiAndHappy() {
  const hostRef = useRef(null);
  const [near, setNear] = useState(false); // section approaching → mount + preload
  const [ready, setReady] = useState(false); // all frames decoded → loops may start
  const [onScreen, setOnScreen] = useState(false); // actually visible → loops run
  const [kaiFrame, setKaiFrame] = useState(0);
  const [happyFrame, setHappyFrame] = useState(0);
  const [excited, setExcited] = useState(false);
  const [reduced] = useState(
    () => typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [canHover] = useState(
    () => typeof matchMedia !== "undefined" && matchMedia("(hover: hover)").matches
  );

  // Wake up shortly before the section scrolls in.
  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: "600px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Preload every frame before the first swap, so the loop never flickers.
  useEffect(() => {
    if (!near || reduced) return; // reduced-motion shows only frame 1 — skip the rest
    let alive = true;
    Promise.all(
      [...KAI_FRAMES, ...HAPPY_FRAMES].map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();
            img.onload = img.onerror = resolve;
            img.src = src;
          })
      )
    ).then(() => {
      if (alive) setReady(true);
    });
    return () => {
      alive = false;
    };
  }, [near, reduced]);

  // Pause both loops whenever the pair is off-screen.
  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting), {
      threshold: 0,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Two independent intervals with different periods — the drift is the point.
  useEffect(() => {
    if (!ready || !onScreen || reduced) return;
    const kai = setInterval(() => setKaiFrame((f) => (f + 1) % FRAME_COUNT), KAI_MS);
    const happy = setInterval(
      () => setHappyFrame((f) => (f + 1) % FRAME_COUNT),
      excited ? HAPPY_EXCITED_MS : HAPPY_MS
    );
    return () => {
      clearInterval(kai);
      clearInterval(happy);
    };
  }, [ready, onScreen, reduced, excited]);

  // Reduced motion needs only the first frame of each character.
  const kaiFrames = reduced ? KAI_FRAMES.slice(0, 1) : KAI_FRAMES;
  const happyFrames = reduced ? HAPPY_FRAMES.slice(0, 1) : HAPPY_FRAMES;

  return (
    <div
      ref={hostRef}
      role="img"
      aria-label="Kai and Happy, his golden labrador, sitting together on the edge of the trailer"
      className="pointer-events-none absolute right-4 top-0 z-10 flex -translate-y-full items-end sm:right-10"
    >
      {(near || reduced) && (
        <>
          {/* Happy faces right, toward Kai — paws just over the card edge.
              Hovering him only quickens the wag (a frame-interval change). */}
          <Character
            frames={happyFrames}
            frame={reduced ? 0 : happyFrame}
            className="top-[6px] -mr-1 h-[54px] w-[72px] sm:top-[9px] sm:h-[78px] sm:w-[104px]"
            style={{ pointerEvents: canHover && !reduced ? "auto" : "none" }}
            onMouseEnter={() => setExcited(true)}
            onMouseLeave={() => setExcited(false)}
          />
          {/* Kai perched, boots hanging over the edge. */}
          <Character
            frames={kaiFrames}
            frame={reduced ? 0 : kaiFrame}
            className="top-[18px] h-[72px] w-[64px] sm:top-[30px] sm:h-[117px] sm:w-[104px]"
          />
        </>
      )}
      {/* invisible spacer keeps host height stable before frames mount */}
      {!near && !reduced && <div className="h-[72px] w-[136px] sm:h-[117px] sm:w-[208px]" />}
    </div>
  );
}
