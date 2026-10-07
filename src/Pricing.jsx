import { useState } from "react";
import { Link } from "react-router-dom";
import { STUDIO, process } from "./data.js";
import { addOns, faq, included, terms, tiers } from "./data/pricing.js";
import { Reveal, Eyebrow } from "./ui.jsx";

/*
 * Pricing & process.
 *
 * Everything on this page is rendered from src/data/pricing.js — add, remove
 * or re-price a tier there and the layout follows. Numbers are estimates and
 * the page says so out loud, in the hero and again above the tables.
 */

/* ---------------------------------- Hero ----------------------------------- */

function PricingHero() {
  return (
    <section className="border-b border-ink/8 pb-12 pt-14 sm:pb-16 sm:pt-20">
      <div className="mx-auto max-w-6xl px-5">
        <p className="rise font-mono text-xs font-bold uppercase tracking-[0.24em] text-ink-soft">
          <span className="text-blue" aria-hidden="true">/</span> Pricing &amp; process
        </p>
        <h1 className="rise mt-5 max-w-4xl font-display text-[2.3rem] font-extrabold leading-[1.06] tracking-tight sm:text-6xl sm:leading-[1.03]">
          What it costs, before you ask.
        </h1>
        <p className="rise mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Most studios make you book a call to find out whether you can afford them.
          Here's the whole thing instead — every service, every tier, what's in it, and
          how long it takes.
        </p>

        <div className="rise mt-7 flex flex-wrap gap-3">
          <a
            href={`mailto:${STUDIO.email}`}
            className="rounded-full bg-ink px-7 py-3.5 font-bold text-on-ink transition-transform hover:-translate-y-0.5"
          >
            Get a fixed quote
          </a>
          <a
            href="#process"
            className="rounded-full border-2 border-ink/15 bg-surface px-7 py-3.5 font-bold text-ink transition-colors hover:border-blue hover:text-blue"
          >
            Jump to the process
          </a>
        </div>

        <p className="rise mt-8 max-w-3xl rounded-2xl border-2 border-dashed border-ink/15 bg-surface p-5 text-sm leading-relaxed text-ink-soft">
          <strong className="font-display text-base font-bold text-ink">
            These are estimates, not a checkout page.
          </strong>{" "}
          Ranges are in USD. The low end is the simplest honest version of that tier;
          the high end is the fully-featured one. After a 30-minute scoping call you get
          one fixed number — and that number is what you pay unless you change the scope.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------- Service tiers ------------------------------ */

function TierTable({ tier }) {
  return (
    <section id={tier.id} aria-labelledby={`${tier.id}-heading`} className="scroll-mt-24">
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <span
            aria-hidden="true"
            className="block h-1.5 w-14 rounded-full"
            style={{ background: tier.color }}
          />
          <h3
            id={`${tier.id}-heading`}
            className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl"
          >
            {tier.title}
          </h3>
          <p className="mt-2 leading-relaxed text-ink-soft">{tier.blurb}</p>
        </div>
      </Reveal>

      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        {tier.rows.map((row, i) => (
          <Reveal
            as="article"
            key={row.name}
            delay={i * 80}
            className="flex flex-col rounded-3xl border-2 border-ink/10 bg-surface p-6 transition-transform duration-300 hover:-translate-y-1"
            style={{ borderTopColor: tier.color, borderTopWidth: "6px" }}
          >
            <p className="font-display text-xl font-bold leading-tight">{row.name}</p>

            <p className="mt-3 font-display text-3xl font-extrabold tracking-tight" style={{ color: tier.color }}>
              {row.price}
            </p>
            <p className="mt-1 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-ink-soft">
              {row.time === "—" ? "every project" : row.time}
            </p>

            <ul className="mt-5 space-y-2.5 border-t border-ink/8 pt-5">
              {row.includes.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
                  <svg
                    viewBox="0 0 24 24"
                    className="mt-0.5 h-4 w-4 shrink-0"
                    fill="none"
                    stroke={tier.color}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Tiers() {
  return (
    <section aria-labelledby="tiers-heading" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 id="tiers-heading" className="sr-only">
          Pricing by service
        </h2>
        <div className="space-y-16 sm:space-y-20">
          {tiers.map((tier) => (
            <TierTable key={tier.id} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Add-ons & terms ----------------------------- */

function AddOnsAndIncluded() {
  return (
    <section className="border-y border-ink/8 bg-surface py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2">
        <Reveal>
          <Eyebrow color="var(--color-coral)">Add-ons</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Bolt anything on.
          </h2>
          <p className="mt-3 leading-relaxed text-ink-soft">
            Priced separately so the base quote stays honest. Take none of them, take
            all of them.
          </p>
          <ul className="mt-6 divide-y divide-ink/8 rounded-2xl border-2 border-ink/8 bg-base">
            {addOns.map((a) => (
              <li key={a.name} className="flex items-baseline justify-between gap-4 px-5 py-3.5">
                <span className="text-sm leading-snug text-ink">{a.name}</span>
                <span className="shrink-0 font-mono text-sm font-bold text-coral">{a.price}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <Eyebrow color="var(--color-mint)">Always included</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            In every quote, at every tier.
          </h2>
          <p className="mt-3 leading-relaxed text-ink-soft">
            Not upsells. If one of these is missing from a quote we sent you, it's our
            mistake, not a line item.
          </p>
          <ul className="mt-6 space-y-3">
            {included.map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed text-ink">
                <svg
                  viewBox="0 0 24 24"
                  className="mt-1 h-5 w-5 shrink-0"
                  fill="none"
                  stroke="var(--color-mint)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          <dl className="mt-8 grid gap-3 sm:grid-cols-2">
            {terms.map((t) => (
              <div key={t.k} className="rounded-2xl border-2 border-ink/8 bg-base p-4">
                <dt className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-ink-soft">
                  {t.k}
                </dt>
                <dd className="mt-1 text-sm font-semibold leading-snug text-ink">{t.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- Full process ------------------------------ */

function FullProcess() {
  return (
    <section id="process" aria-labelledby="full-process-heading" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <Eyebrow>The process</Eyebrow>
          <h2
            id="full-process-heading"
            className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl"
          >
            First message to two weeks after launch.
          </h2>
          <p className="mt-3 leading-relaxed text-ink-soft">
            Every stage, what happens in it, and roughly how long it takes. Nothing
            here starts until you've seen a fixed price in writing.
          </p>
        </Reveal>

        <ol className="mt-12 space-y-0">
          {process.map((step, i) => (
            <Reveal
              as="li"
              key={step.n}
              delay={(i % 3) * 70}
              className="relative grid gap-x-6 gap-y-2 border-t border-ink/8 py-7 sm:grid-cols-[auto_1fr] sm:py-8"
            >
              <span
                aria-hidden="true"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl font-display text-base font-extrabold text-on-accent"
                style={{ background: step.color }}
              >
                {step.n}
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold leading-tight">{step.title}</h3>
                <p className="mt-1 font-display text-base font-semibold" style={{ color: step.color }}>
                  {step.short}
                </p>
                <p className="mt-3 max-w-3xl leading-relaxed text-ink-soft">{step.detail}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------ FAQ ----------------------------------- */

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section aria-labelledby="faq-heading" className="border-t border-ink/8 bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal>
          <Eyebrow color="var(--color-grape)">Questions</Eyebrow>
          <h2 id="faq-heading" className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            The ones we always get.
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-5 py-5 text-left font-display text-lg font-bold text-ink transition-colors hover:text-grape"
                  >
                    {item.q}
                    <svg
                      viewBox="0 0 24 24"
                      className={`h-5 w-5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                      fill="none"
                      stroke="var(--color-grape)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </button>
                </h3>
                {isOpen && (
                  <p id={`faq-panel-${i}`} className="-mt-1 pb-6 leading-relaxed text-ink-soft">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------ CTA ----------------------------------- */

function PricingCta() {
  return (
    <section className="bg-deep py-16 text-white sm:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Still not sure which row you're in?
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/70">
            Send one paragraph about what you want to make. We'll tell you the tier, the
            number, and whether a cheaper version of your idea would work better — before
            you've paid anything.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${STUDIO.email}`}
              className="rounded-full bg-blue px-7 py-3.5 font-bold text-on-accent transition-transform hover:-translate-y-0.5"
            >
              Email the studio
            </a>
            <Link
              to="/"
              className="rounded-full border-2 border-white/20 px-7 py-3.5 font-bold text-white transition-colors hover:border-white"
            >
              Back to the studio
            </Link>
          </div>
          <p className="mt-5 font-mono text-sm text-white/55">{STUDIO.email}</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------- Pricing --------------------------------- */

export default function Pricing() {
  return (
    <>
      <PricingHero />
      <Tiers />
      <AddOnsAndIncluded />
      <FullProcess />
      <Faq />
      <PricingCta />
    </>
  );
}
