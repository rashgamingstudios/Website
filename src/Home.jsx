import { useRef } from "react";
import { Link } from "react-router-dom";
import { STUDIO, cartbo, channels, process, proof, services, titles } from "./data.js";
import { Media, Reveal, PlatformChip } from "./ui.jsx";
import Team from "./Team.jsx";
import HeroToy from "./HeroToy.jsx";
import KaiAndHappy from "./KaiAndHappy.jsx";

/*
 * The studio leads with its own games now. There is no client work to show, so
 * the slate is the proof, and the services that pay for it sit underneath
 * rather than on top. Sections are numbered to give the page a spine.
 */

/* ------------------------------ Section header ----------------------------- */

function SectionHead({ index, label, title, children, color = "var(--color-blue)", light = false }) {
  return (
    <Reveal className="max-w-3xl">
      <p className="flex items-center gap-3 font-mono text-xs font-bold uppercase">
        <span className="section-index" style={{ color }}>{index}</span>
        <span className={light ? "text-white/55" : "text-ink-soft"}>{label}</span>
      </p>
      <h2 className="display-lg mt-5 font-display font-extrabold">{title}</h2>
      {children && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? "text-white/70" : "text-ink-soft"}`}>
          {children}
        </p>
      )}
    </Reveal>
  );
}

/* ----------------------------------- Hero ----------------------------------- */

function Hero() {
  const heroRef = useRef(null); // bounds for the drivable car
  const slices = STUDIO.heroSlices ?? [];
  const art = slices.length > 0;

  return (
    <section
      id="top"
      ref={heroRef}
      className={`hero-cinematic grain ${art ? "has-art" : ""}`}
    >
      {/* One image fills the frame; two get cut on the logo's diagonal with a
          lit seam between them. Add a second path to heroSlices to split it. */}
      {art && (
        <div className="hero-slices" aria-hidden="true">
          <span
            className={`hero-slice ${slices[1] ? "hero-slice-a" : ""}`}
            style={{ backgroundImage: `url(${slices[0]})` }}
          />
          {slices[1] && (
            <>
              <span className="hero-slice hero-slice-b" style={{ backgroundImage: `url(${slices[1]})` }} />
              <span className="hero-seam" />
            </>
          )}
        </div>
      )}

      <HeroToy boundsRef={heroRef} />

      <div className="mx-auto w-full max-w-6xl px-5 pb-16 pt-32 sm:pb-24 sm:pt-40">
        <p
          className="rise font-mono text-xs font-bold uppercase tracking-[0.24em] text-white/60"
          style={{ animationDelay: "0ms" }}
        >
          <span className="text-blue" aria-hidden="true">/</span> Independent game studio · India
        </p>

        <h1 className="rise mt-6 max-w-5xl" style={{ animationDelay: "120ms" }}>
          <span className="display-xl block">Two games</span>
          <span className="display-xl block">in production.</span>
          <span className="display-xl block text-sun">One platform live.</span>
        </h1>

        <p
          className="rise mt-7 max-w-xl text-lg leading-relaxed text-white/75"
          style={{ animationDelay: "240ms" }}
        >
          We build games for the browser and the Play Store — and{" "}
          <a
            href={cartbo.url}
            className="font-semibold text-white underline decoration-2 underline-offset-4"
            style={{ textDecorationColor: "var(--color-cartbo-accent)" }}
          >
            Cartbo
          </a>
          , where indie games get played before they're finished.
        </p>

        <div className="rise mt-9 flex flex-wrap items-center gap-3" style={{ animationDelay: "360ms" }}>
          <a
            href="#games"
            className="rounded-full bg-blue px-7 py-3.5 font-bold text-on-accent transition-transform hover:-translate-y-0.5"
          >
            See what we're building
          </a>
          <Link
            to="/pricing"
            className="rounded-full border-2 border-white/25 px-7 py-3.5 font-bold text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Work with us
          </Link>
        </div>

        {/* Says where the art goes without putting a grey box in the hero. */}
        {!art && (
          <p className="rise mt-10 font-mono text-[10px] uppercase tracking-[0.2em] text-white/30" style={{ animationDelay: "480ms" }}>
            Key visual slot · drop 2400×1000 at public/hero.jpg
          </p>
        )}
      </div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-5 flex justify-center text-white/35"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </span>
    </section>
  );
}

/* --------------------------------- The slate -------------------------------- */

function TitleBlock({ game, i }) {
  const unnamed = !game.title;
  const name = game.title ?? game.placeholder;

  return (
    <Reveal
      as="article"
      delay={60}
      className={`title-block ${i % 2 === 1 ? "is-flipped" : ""}`}
      style={{ "--game": game.color }}
    >
      {/* Art side: key art, then a three-up strip of screenshots. Empty slots
          render as labelled placeholders naming the file to drop in. */}
      <div className="title-art relative">
        {/* Kai & Happy perch on the top edge of their own game's frame. */}
        {game.id === "hold-on-happy" && <KaiAndHappy />}

        {/* A title with a trailer plays it right here, with its key art as the
            poster — click-to-play, so the file costs nothing until asked for. */}
        <Media
          label={game.trailer ? `${name} — trailer` : `${name} — key art`}
          hint={`/games/${game.id}.jpg · 1600×1000`}
          src={game.trailer ?? game.art}
          poster={game.trailer ? game.art : undefined}
          video={Boolean(game.trailer)}
          ratio="16/10"
          color={game.color}
        />

        <div className="mt-3 grid grid-cols-3 gap-3">
          {(game.shots ?? []).map((shot, n) => (
            <Media
              key={n}
              label={`Shot ${n + 1}`}
              hint={`${game.id}-${n + 1}.jpg`}
              src={shot}
              ratio="16/9"
              color={game.color}
            />
          ))}
        </div>
      </div>

      {/* Words side — kept to a caption. The reference studios give a game a
          title, one line and a badge, and let the art do the rest. */}
      <div>
        <p className="flex flex-wrap items-center gap-2">
          <span
            className="rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-on-accent"
            style={{ background: game.color }}
          >
            {game.status}
          </span>
          {game.platforms.map((p) => (
            <PlatformChip key={p}>{p}</PlatformChip>
          ))}
        </p>

        <h3 className={`display-lg mt-5 ${unnamed ? "text-ink-soft" : ""}`}>{name}</h3>

        <p className="mt-4 max-w-sm text-lg leading-snug" style={{ color: game.color }}>
          {game.tagline}
        </p>

        {game.link && (
          <a href={game.link} className="mt-6 inline-block font-bold" style={{ color: game.color }}>
            Follow it →
          </a>
        )}
      </div>
    </Reveal>
  );
}

function Slate() {
  return (
    <section id="games" aria-labelledby="games-heading" className="scroll-mt-20 border-t border-ink/8 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead index="01" label="The slate" title="What we're making." color="var(--color-coral)">
          Everything here is ours — our money, our deadlines, our mistakes. Two are
          far enough along to talk about but not to name yet.
        </SectionHead>

        <div className="rule-fade mt-10" />

        <div className="mt-14 space-y-20 sm:space-y-28">
          {titles.map((game, i) => (
            <TitleBlock key={game.id} game={game} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Cartbo ---------------------------------- */
/* The product gets its own deep navy slab lit by a single cool blue, so it
   reads as a surface of its own rather than another section of the studio. */

function Cartbo() {
  return (
    <section
      id="cartbo"
      aria-labelledby="cartbo-heading"
      className="scroll-mt-20 text-white"
      style={{ background: "var(--color-cartbo-deep)" }}
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-xs font-bold uppercase">
              <span className="section-index" style={{ color: "var(--color-cartbo-accent)" }}>02</span>
              <span className="flex items-center gap-2 text-white/55">
                <span
                  aria-hidden="true"
                  className="pulse-dot block h-2 w-2 rounded-full"
                  style={{ "--game": "var(--color-cartbo-accent)", background: "var(--color-cartbo-accent)" }}
                />
                Also from us · {cartbo.status}
              </span>
            </p>

            <h2 id="cartbo-heading" className="display-lg mt-5 font-display font-extrabold">
              {cartbo.name}
            </h2>

            <p
              className="mt-4 max-w-xl font-display text-xl font-semibold leading-snug sm:text-2xl"
              style={{ color: "var(--color-cartbo-accent)" }}
            >
              {cartbo.tagline}
            </p>

            <p className="mt-5 max-w-xl leading-relaxed text-white/75">{cartbo.pitch}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={cartbo.url}
                className="rounded-full px-7 py-3.5 font-bold text-[color:var(--color-on-cartbo-accent)] transition-transform hover:-translate-y-0.5"
                style={{ background: "var(--color-cartbo-accent)" }}
              >
                Open cartbo.app ↗
              </a>
              <span className="text-sm text-white/65">{cartbo.pricing_note}</span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            {/* 9:16 to match the promo's own framing — click-to-play, so the
                4MB clip is never fetched unless someone wants it. */}
            <Media
              label="Cartbo — product promo"
              ratio="9/16"
              color="var(--color-cartbo-accent)"
              video
              src="/cartbo/promo.mp4"
              poster="/cartbo/promo-poster.jpg"
              className="mx-auto max-w-[400px]"
            />
          </Reveal>
        </div>

        {/* The loop — four steps, the spine of the product. */}
        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cartbo.loop.map((step, i) => (
            <Reveal key={step.n} delay={i * 80} className="rounded-2xl border border-white/12 bg-white/5 p-5">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full font-display text-base font-extrabold text-[color:var(--color-on-cartbo-accent)]"
                style={{ background: "var(--color-cartbo-accent)" }}
                aria-hidden="true"
              >
                {step.n}
              </span>
              <p className="mt-4 font-display text-lg font-bold">{step.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-white/65">{step.body}</p>
            </Reveal>
          ))}
        </div>

        {/* What's already shipped — the credibility list. */}
        <Reveal delay={160} className="mt-8 rounded-3xl border border-white/12 bg-white/5 p-6 sm:p-8">
          <h3 className="font-display text-2xl font-bold">Not a concept — a working product.</h3>
          <p className="mt-2 max-w-2xl text-white/65">
            {cartbo.one_liner} Live, with real auth and real uploads.
          </p>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {cartbo.built.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/80">
                <span
                  aria-hidden="true"
                  className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: "var(--color-cartbo-accent)" }}
                />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- Services --------------------------------- */
/* Demoted from the headline act to a dense, scannable list — the games carry
   the page now, and anyone here for hire-us is already looking for it. */

function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead index="03" label="What we build for clients" title="We also build yours.">
          The same pipeline, pointed at your game instead of ours. Browser games and
          the platforms they live on — which is why we know those review checklists
          by heart.
        </SectionHead>

        <div className="rule-fade mt-10" />

        <ul className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2">
          {services.map((service) => (
            <Reveal as="li" key={service.id} className="bg-base p-7">
              <p className="flex items-baseline justify-between gap-3">
                <span className="font-display text-2xl font-bold leading-tight">{service.title}</span>
                <span className="shrink-0 font-mono text-xs font-bold" style={{ color: service.color }}>
                  from {service.from}
                </span>
              </p>
              <p className="mt-2 font-display text-base font-semibold" style={{ color: service.color }}>
                {service.tagline}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{service.desc}</p>
              <Link
                to={`/pricing#${service.id}`}
                className="mt-4 inline-block text-sm font-bold"
                style={{ color: service.color }}
              >
                See what it costs →
              </Link>
            </Reveal>
          ))}
        </ul>

        {/* The facts that belong to the service offer, not the studio's games. */}
        <Reveal delay={120} className="mt-6 grid gap-3 sm:grid-cols-3">
          {proof.map((fact) => (
            <div
              key={fact.k}
              className="rounded-2xl border border-ink/10 bg-surface p-5"
              style={{ borderLeftColor: fact.c, borderLeftWidth: "5px" }}
            >
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-ink-soft">
                {fact.k}
              </p>
              <p className="mt-1 font-display text-lg font-bold leading-tight">{fact.v}</p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={160} className="mt-6 flex flex-col items-start justify-between gap-4 rounded-3xl bg-blue px-7 py-7 sm:flex-row sm:items-center">
          <p className="font-display text-xl font-bold text-on-accent sm:text-2xl">
            Every tier and every number, in the open.
            <span className="mt-1 block font-body text-sm font-semibold opacity-80">
              Most studios make you book a call to find out if you can afford them.
            </span>
          </p>
          <Link
            to="/pricing"
            className="shrink-0 rounded-full bg-surface px-6 py-3 font-bold text-blue transition-transform hover:-translate-y-0.5"
          >
            Open pricing
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- Process ---------------------------------- */

function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="scroll-mt-20 border-y border-ink/8 bg-surface py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead index="04" label="How we work" title="Eight steps. No surprises." color="var(--color-mint)">
            From the first message to two weeks after launch. Every stage is written
            down before you pay anything.
          </SectionHead>
          <Reveal>
            <Link
              to="/pricing#process"
              className="rounded-full border-2 border-ink/15 bg-base px-6 py-3 font-bold text-ink transition-colors hover:border-mint hover:text-mint"
            >
              Read the full process →
            </Link>
          </Reveal>
        </div>

        <div className="rule-fade mt-10" />

        <ol className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <Reveal as="li" key={step.n} delay={(i % 4) * 60}>
              <p className="font-mono text-xs font-bold tracking-[0.18em]" style={{ color: step.color }}>
                {step.n}
              </p>
              <p className="mt-2 font-display text-lg font-bold leading-tight">{step.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{step.short}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* --------------------------------- Contact ---------------------------------- */

function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-20 bg-deep py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-xs font-bold uppercase">
              <span className="section-index text-blue">06</span>
              <span className="text-white/55">Start a project</span>
            </p>
            <h2 id="contact-heading" className="display-lg mt-5 font-display font-extrabold">
              Tell us what you want to make.
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/70">
              A paragraph is enough. An idea, a reference game, a half-finished
              project, a deadline you're worried about — send whatever you actually
              have. You'll get a real reply from the person who'd be building it,
              usually the same day.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${STUDIO.email}`}
                className="rounded-full bg-blue px-7 py-3.5 font-bold text-on-accent transition-transform hover:-translate-y-0.5"
              >
                Email the studio
              </a>
              <Link
                to="/pricing"
                className="rounded-full border-2 border-white/20 px-7 py-3.5 font-bold text-white transition-colors hover:border-white"
              >
                Check pricing first
              </Link>
            </div>
            <p className="mt-5 font-mono text-sm text-white/55">{STUDIO.email}</p>
          </Reveal>

          <Reveal delay={120}>
            <p className="font-display text-lg font-bold">Or find us here</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {channels.map((ch, i) => (
                <Reveal
                  key={ch.name}
                  as="a"
                  href={ch.link}
                  delay={i * 70}
                  className="game-card group flex flex-col rounded-2xl border border-white/12 bg-white/5 p-5"
                  style={{ "--game": ch.color === "#101828" ? "#5b6b8c" : ch.color }}
                >
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl font-display text-lg font-extrabold text-white"
                    style={{ background: ch.color === "#101828" ? "#2a3550" : ch.color }}
                    aria-hidden="true"
                  >
                    {ch.name[0]}
                  </span>
                  <span className="mt-4 font-display text-lg font-bold">{ch.name}</span>
                  <span className="mt-1 flex-1 text-sm leading-relaxed text-white/60">{ch.blurb}</span>
                  <span
                    className="mt-4 text-sm font-bold"
                    style={{ color: ch.color === "#101828" ? "#8fa3c8" : ch.color }}
                  >
                    {ch.cta} →
                  </span>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------- Home ----------------------------------- */

export default function Home() {
  return (
    <>
      <Hero />
      <Slate />
      <Cartbo />
      <Services />
      <Process />
      <Team />
      <Contact />
    </>
  );
}
