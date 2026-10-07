"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { team, type TeamMember } from "@/lib/content";

// The two founding partners, side by side and equal in weight: a large circular
// portrait on top, then name/role and a bio that's clamped to a few lines and
// expands on click — keeping the pair symmetric and the section compact.
function FounderCard({ m, variant }: { m: TeamMember; variant: "left" | "right" }) {
  const [open, setOpen] = useState(false);
  const initials = m.name
    .split(" ")
    .map((p) => p[0])
    .join("");

  return (
    <Reveal variant={variant}>
      <article>
        <div className="h-44 w-44 overflow-hidden rounded-full border border-line bg-mist md:h-52 md:w-52">
          {m.photo ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={m.photo}
              alt={m.name}
              className="h-full w-full object-cover object-top"
              loading="lazy"
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center"
              style={{ background: "linear-gradient(160deg,#0A3A6E,#00264F)" }}
            >
              <span className="font-serif text-4xl font-semibold text-white/85">{initials}</span>
            </div>
          )}
        </div>

        <h2 className="mt-6 font-serif text-2xl leading-tight text-ink md:text-[28px]">{m.name}</h2>
        <p className="mt-1.5 text-[15px] font-medium text-steeldeep">{m.role}</p>
        <p
          className={`mt-4 text-[15px] leading-relaxed text-inksoft transition-all ${
            open ? "" : "line-clamp-4"
          }`}
        >
          {m.bio}
        </p>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-steeldeep transition-colors hover:text-ink"
        >
          {open ? "Show less" : "Read full biography"}
          <span
            className={`inline-block text-[10px] transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          >
            ▼
          </span>
        </button>
      </article>
    </Reveal>
  );
}

export function Founders() {
  // Display Shahar first, then Cyril.
  const ordered = [...team].reverse();
  return (
    <div className="grid gap-10 md:grid-cols-2 md:gap-14">
      {ordered.map((m, i) => (
        <FounderCard key={m.name} m={m} variant={i % 2 === 0 ? "left" : "right"} />
      ))}
    </div>
  );
}
