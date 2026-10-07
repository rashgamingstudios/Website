import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  STUDIO,
  cartbo,
  channels,
  ownGames,
  process,
  proof,
  services,
  testimonials,
} from "./data.js";
import { Media, Reveal, Eyebrow, PlatformChip } from "./ui.jsx";
import Team from "./Team.jsx";
import HeroToy from "./HeroToy.jsx";
import KaiAndHappy from "./KaiAndHappy.jsx";

/* ----------------------------------- Hero ----------------------------------- */

function Hero() {
  const heroRef = useRef(null); // bounds for the drivable car
  return (
    <section id="top" ref={heroRef} className="relative overflow-hidden pb-14 pt-14 sm:pb-20 sm:pt-20">
      <HeroToy boundsRef={heroRef} />
      <div className="mx-auto max-w-6xl px-5 text-center">
        <p
          className="rise font-mono text-xs font-bold uppercase tracking-[0.24em] text-ink-soft"
          style={{ animationDelay: "0ms" }}
        >
          <span className="text-blue" aria-hidden="true">/</span> Game studio · Hyderabad, India ·{" "}
          {STUDIO.clients} satisfied clients
        </p>

        <h1
          className="rise mx-auto mt-5 max-w-4xl font-display text-[2.3rem] font-extrabold leading-[1.06] tracking-tight sm:text-6xl sm:leading-[1.02] lg:text-7xl"
          style={{ animationDelay: "120ms" }}
        >
          We build the game.{" "}
          <span className="relative inline-block whitespace-nowrap">
            <span
              aria-hidden="true"
              className="absolute inset-x-[-4%] inset-y-[8%] -skew-x-6 rounded-lg bg-blue"
            />
            <span className="relative text-on-accent">You ship it.</span>
          </span>
        </h1>

        <p
          className="rise mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl"
          style={{ animationDelay: "240ms" }}
        >
          Rash Game Studios makes web games, CrazyGames releases with full SDK
          integration, Roblox experiences and one-week prototypes — and we stay on a
          launch until it's approved and live. We also build{" "}
          <a
            href={cartbo.url}
            className="font-semibold text-ink underline decoration-2 underline-offset-2"
            style={{ textDecorationColor: "var(--color-cartbo-accent)" }}
          >
            Cartbo
          </a>
          , a social platform for indie game developers.
        </p>

        <div
          className="rise mt-8 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "360ms" }}
        >
          <Link
            to="/pricing"
            className="rounded-full bg-ink px-7 py-3.5 font-bold text-on-ink transition-transform hover:-translate-y-0.5"
          >
            See pricing &amp; process
          </Link>
          <a
            href={`mailto:${STUDIO.email}`}
            className="rounded-full border-2 border-ink/15 bg-surface px-7 py-3.5 font-bold text-ink transition-colors hover:border-blue hover:text-blue"
          >
            Start a project
          </a>
        </div>

        {/* Proof band — four facts, no invented metrics. */}
        <ul className="rise mx-auto mt-14 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4" style={{ animationDelay: "480ms" }}>
          {proof.map((fact) => (
            <li
              key={fact.k}
              className="rounded-2xl border-2 border-ink/8 bg-surface p-4 text-left"
              style={{ borderLeftColor: fact.c, borderLeftWidth: "6px" }}
            >
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-ink-soft">
                {fact.k}
              </p>
              <p className="mt-1 font-display text-lg font-bold leading-tight">{fact.v}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* --------------------------------- Cartbo ---------------------------------- */
/* The flagship gets its own deep navy slab lit by a single cool blue, so it
   reads as a product surface rather than another service card. */

function Cartbo() {
  return (
    <section
      id="cartbo"
      aria-labelledby="cartbo-heading"
      className="scroll-mt-20 text-white"
      style={{ background: "var(--color-cartbo-deep)" }}
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="flex items-center gap-2.5 font-mono text-xs font-bold uppercase tracking-[0.22em]">
              <span
                aria-hidden="true"
                className="pulse-dot block h-2.5 w-2.5 rounded-full"
                style={{ "--game": "var(--color-cartbo-accent)", background: "var(--color-cartbo-accent)" }}
              />
              <span style={{ color: "var(--color-cartbo-accent)" }}>Our flagship · {cartbo.status}</span>
            </p>

            <h2 id="cartbo-heading" className="mt-4 font-display text-5xl font-extrabold tracking-tight sm:text-7xl">
              {cartbo.name}
            </h2>

            <p className="mt-4 max-w-xl font-display text-xl font-semibold leading-snug sm:text-2xl" style={{ color: "var(--color-cartbo-accent)" }}>
              {cartbo.tagline}
            </p>

            <p className="mt-4 max-w-xl leading-relaxed text-white/75">{cartbo.pitch}</p>

            <p className="mt-4 max-w-xl leading-relaxed text-white/75">
              <strong className="font-semibold text-white">The wedge:</strong> {cartbo.wedge}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
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
            <Media
              label="Cartbo — the live feed, tap any game to play it instantly (phone mockup)"
              ratio="4/5"
              color="var(--color-cartbo-accent)"
              className="mx-auto max-w-sm"
            />
          </Reveal>
        </div>

        {/* The loop — four steps, the spine of the product. */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cartbo.loop.map((step, i) => (
            <Reveal
              key={step.n}
              delay={i * 80}
              className="rounded-2xl border-2 border-white/12 bg-white/5 p-5"
            >
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
        <Reveal delay={160} className="mt-10 rounded-3xl border-2 border-white/12 bg-white/5 p-6 sm:p-8">
          <h3 className="font-display text-2xl font-bold">
            Not a concept — a working product.
          </h3>
          <p className="mt-2 max-w-2xl text-white/65">
            {cartbo.one_liner} Deployed on a live domain with real auth and real
            uploads. The full loop works end to end today.
          </p>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {cartbo.built.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/80">
                <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--color-cartbo-accent)" }} />
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

function ServiceCard({ service, delay }) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className="game-card relative flex flex-col rounded-3xl border-2 border-ink/10 bg-surface p-6"
      style={{ "--game": service.color }}
    >
      <span className="slash-shine" aria-hidden="true" />
      <p className="flex items-start justify-between gap-3">
        <span className="font-display text-2xl font-bold leading-tight">{service.title}</span>
        <span
          className="shrink-0 rounded-full px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-on-accent"
          style={{ background: service.color }}
        >
          from {service.from}
        </span>
      </p>
      <p className="mt-2 font-display text-base font-semibold" style={{ color: service.color }}>
        {service.tagline}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{service.desc}</p>
      <ul className="mt-5 space-y-2">
        {service.bullets.map((b) => (
          <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
            <span
              aria-hidden="true"
              className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ background: service.color }}
            />
            {b}
          </li>
        ))}
      </ul>
      <Link
        to={`/pricing#${service.id}`}
        className="mt-auto pt-5 text-sm font-bold transition-colors"
        style={{ color: service.color }}
      >
        See what it costs →
      </Link>
    </Reveal>
  );
}

function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <Eyebrow>What we build</Eyebrow>
          <h2 id="services-heading" className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Five things, done properly.
          </h2>
          <p className="mt-3 leading-relaxed text-ink-soft">
            We don't do everything. We do browser games and the platforms they live
            on — which is why we know those platforms' review checklists by heart.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} delay={i * 70} />
          ))}

          {/* Pricing invitation sits in the grid as the sixth tile. */}
          <Reveal
            delay={services.length * 70}
            className="flex min-h-64 flex-col items-center justify-center rounded-3xl border-2 border-dashed border-blue/40 bg-blue/5 p-6 text-center"
          >
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-blue">
              No guessing
            </p>
            <p className="mt-3 font-display text-2xl font-bold leading-tight">
              Every tier, every number, in the open.
            </p>
            <p className="mt-2 max-w-60 text-sm text-ink-soft">
              Estimated ranges for all five services, plus the full process and what's
              always included.
            </p>
            <Link
              to="/pricing"
              className="mt-5 rounded-full bg-blue px-6 py-3 font-bold text-on-accent transition-transform hover:-translate-y-0.5"
            >
              Open pricing
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Our own games ------------------------------ */

function OwnGames() {
  return (
    <section
      id="games"
      aria-labelledby="games-heading"
      className="scroll-mt-20 border-y border-ink/8 bg-surface py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <Eyebrow color="var(--color-coral)">Our own games</Eyebrow>
          <h2 id="games-heading" className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            We ship for ourselves too.
          </h2>
          <p className="mt-3 leading-relaxed text-ink-soft">
            Two projects we're building with our own money and our own deadlines.
            They're where we break things first, so client work doesn't have to be the
            experiment.
          </p>
        </Reveal>

        {/* Stacked, the second card needs room above it: Kai & Happy perch on
            its top edge and would otherwise sit on the card above. */}
        <div className="mt-10 grid gap-x-6 gap-y-24 lg:grid-cols-2 lg:gap-6">
          {ownGames.map((game, i) => (
            <Reveal
              key={game.id}
              as="article"
              delay={i * 100}
              className="game-card relative flex flex-col rounded-3xl border-2 border-ink/10 bg-base p-5"
              style={{ "--game": game.color }}
            >
              {/* Kai & Happy idle on the top edge of their own card only. */}
              {game.id === "hold-on-happy" && <KaiAndHappy />}
              <Media label={`${game.title} key art`} ratio="16/10" color={game.color} />
              <span className="slash-shine" aria-hidden="true" />
              <div className="flex flex-1 flex-col px-1 pt-5">
                <p className="flex items-center justify-between gap-2">
                  <span className="font-display text-2xl font-bold">{game.title}</span>
                  <span
                    className="shrink-0 rounded-full px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-on-accent"
                    style={{ background: game.color }}
                  >
                    {game.status}
                  </span>
                </p>
                <p className="mt-1.5 font-display text-base font-semibold" style={{ color: game.color }}>
                  {game.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{game.desc}</p>
                <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                  <span className="flex flex-wrap gap-1.5">
                    {game.tech.map((t) => (
                      <PlatformChip key={t}>{t}</PlatformChip>
                    ))}
                  </span>
                  <a href={game.link} className="shrink-0 text-sm font-bold" style={{ color: game.color }}>
                    Follow it →
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Was the arcade; now it routes to Cartbo, which is where our builds
            — and everybody else's — are actually playable. */}
        <Reveal className="mt-8 flex flex-col items-center justify-between gap-4 rounded-3xl bg-blue px-6 py-6 text-center sm:flex-row sm:px-8 sm:text-left">
          <p className="font-display text-xl font-bold text-on-accent sm:text-2xl">
            Want to see how our web builds actually feel?
            <span className="mt-1 block font-body text-sm font-semibold opacity-80">
              Play them on Cartbo — in the browser, no install, no signup.
            </span>
          </p>
          <a
            href={cartbo.url}
            className="shrink-0 rounded-full bg-surface px-6 py-3 font-bold text-blue transition-transform hover:-translate-y-0.5"
          >
            Play on Cartbo ↗
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- Process ---------------------------------- */

function Process() {
  return (
    <section id="process" aria-labelledby="process-heading" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow color="var(--color-mint)">How we work</Eyebrow>
            <h2 id="process-heading" className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              Eight steps. No surprises.
            </h2>
            <p className="mt-3 leading-relaxed text-ink-soft">
              From the first message to two weeks after launch. Every stage is written
              down before you pay anything.
            </p>
          </div>
          <Link
            to="/pricing#process"
            className="rounded-full border-2 border-ink/15 bg-surface px-6 py-3 font-bold text-ink transition-colors hover:border-mint hover:text-mint"
          >
            Read the full process →
          </Link>
        </Reveal>

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <Reveal
              as="li"
              key={step.n}
              delay={(i % 4) * 70}
              className="rounded-2xl border-2 border-ink/8 bg-surface p-5"
              style={{ borderTopColor: step.color, borderTopWidth: "6px" }}
            >
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

/* ------------------------------- Testimonials ------------------------------- */

function Testimonials() {
  const shown = testimonials.filter((t) => t.quote);
  if (shown.length === 0) return null;
  return (
    <section aria-labelledby="clients-heading" className="border-y border-ink/8 bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <Eyebrow color="var(--color-grape)">The clients</Eyebrow>
          <h2 id="clients-heading" className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            {STUDIO.clients} studios, founders and solo devs.
          </h2>
          <p className="mt-3 leading-relaxed text-ink-soft">
            Some wanted a prototype by Friday. Some wanted a game on CrazyGames that
            actually passed review. All of them got the source files.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {shown.map((t, i) => (
            <Reveal
              as="figure"
              key={`${t.name}-${i}`}
              delay={i * 90}
              className="flex h-full flex-col rounded-3xl border-2 border-ink/8 bg-base p-6"
            >
              <span aria-hidden="true" className="font-display text-4xl font-extrabold leading-none text-grape">
                “
              </span>
              <blockquote className="mt-2 flex-1 leading-relaxed text-ink">{t.quote}</blockquote>
              <figcaption className="mt-5 border-t border-ink/8 pt-4">
                <span className="block font-display font-bold">{t.name}</span>
                <span className="block font-mono text-[11px] uppercase tracking-wider text-ink-soft">
                  {t.role}
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Contact ---------------------------------- */

function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-20 bg-deep py-16 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <Eyebrow className="[&>span:last-child]:text-white/60">Start a project</Eyebrow>
            <h2 id="contact-heading" className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              Tell us what you want to make.
            </h2>
            <p className="mt-3 max-w-xl leading-relaxed text-white/70">
              A paragraph is enough. An idea, a reference game, a half-finished
              project, a deadline you're worried about — send whatever you actually
              have. You'll get a real reply from the person who'd be building it,
              usually the same day.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
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
                  className="game-card group flex flex-col rounded-2xl border-2 border-white/12 bg-white/5 p-5"
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
      <Cartbo />
      <Services />
      <OwnGames />
      <Process />
      <Testimonials />
      <Team />
      <Contact />
    </>
  );
}
