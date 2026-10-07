import { team } from "./data/team.js";
import { STUDIO } from "./data.js";
import { Media, Reveal, Eyebrow } from "./ui.jsx";

/*
 * "Who's behind this" — warm, human, data-driven.
 * The grid is a centered flex-wrap of fixed-width cards, so it stays
 * balanced at any headcount (1, 2, 3, 5, 8…) with zero layout changes.
 * Same card DNA as the game cards (radius, border, surface) but calmer:
 * no tilt, no glow, just a gentle lift.
 */

const LINK_LABELS = { twitter: "Twitter", linkedin: "LinkedIn", github: "GitHub" };

function TeamCard({ person, delay }) {
  const links = Object.entries(person.links ?? {}).filter(([, url]) => url);
  return (
    <Reveal
      as="article"
      delay={delay}
      className="flex w-full max-w-xs flex-col rounded-3xl border-2 border-ink/8 bg-surface p-4 transition-transform duration-300 hover:-translate-y-1 sm:w-72"
    >
      <Media
        label={`Photo — ${person.name} (drop file at ${person.photo_url})`}
        ratio="1/1"
        color="var(--color-blue)"
      />
      <div className="px-1 pb-1 pt-4">
        <p className="flex items-baseline justify-between gap-2">
          <span className="font-display text-xl font-bold">{person.name}</span>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-blue">
            {person.role}
          </span>
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{person.bio}</p>
        {links.length > 0 && (
          <p className="mt-3 flex gap-3">
            {links.map(([key, url]) => (
              <a
                key={key}
                href={url}
                className="font-mono text-[11px] font-bold uppercase tracking-wider text-blue"
              >
                {LINK_LABELS[key] ?? key} ↗
              </a>
            ))}
          </p>
        )}
      </div>
    </Reveal>
  );
}

function WorkWithUs() {
  return (
    <Reveal
      delay={150}
      className="mx-auto mt-12 max-w-3xl rounded-3xl border-2 border-dashed border-ink/15 bg-surface p-7 text-center sm:p-9"
    >
      <h3 className="font-display text-2xl font-bold">Work with us</h3>
      <p className="mx-auto mt-3 max-w-xl leading-relaxed text-ink-soft">
        We're a small team and we're not hiring full-time right now. But we collaborate
        constantly — contract artists, 3D modellers, sound designers, composers,
        playtesters. If you want to make something with us, say so. We answer everything.
      </p>
      <a
        href={`mailto:${STUDIO.email}`}
        className="mt-5 inline-block rounded-full bg-ink px-7 py-3.5 font-bold text-on-ink transition-transform hover:-translate-y-0.5"
      >
        Email the studio
      </a>
    </Reveal>
  );
}

export default function Team() {
  return (
    <section id="team" aria-labelledby="team-heading" className="scroll-mt-20 border-t border-ink/8 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="text-center">
          <Eyebrow>The humans</Eyebrow>
          <h2 id="team-heading" className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Who's behind this
          </h2>
          <p className="mx-auto mt-3 max-w-xl leading-relaxed text-ink-soft">
            No account managers, no handoffs. The person who answers your email is the person who builds your game.
          </p>
        </Reveal>
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {team.map((person, i) => (
            <TeamCard key={person.id} person={person} delay={i * 90} />
          ))}
        </div>
        <WorkWithUs />
      </div>
    </section>
  );
}
