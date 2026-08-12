"use client";

import { useState } from "react";
import { investmentTeam } from "@/lib/content";

// The wider investment team as an elegant accordion: each person shows a name,
// role · focus and how long they've been at Northlight, and unfolds a short bio
// plus languages on click. No portraits — a clean, text-led treatment.
export function InvestmentTeam() {
  const [open, setOpen] = useState<string | null>(null);
  const toggle = (name: string) => setOpen((cur) => (cur === name ? null : name));

  return (
    <ul className="border-t border-line">
      {investmentTeam.map((m) => {
        const isOpen = open === m.name;
        return (
          <li key={m.name} className={`border-b border-line transition-colors ${isOpen ? "bg-white" : ""}`}>
            <button
              type="button"
              onClick={() => toggle(m.name)}
              aria-expanded={isOpen}
              className="group relative flex w-full items-center justify-between gap-6 py-6 pl-5 pr-2 text-left md:pl-8"
            >
              {/* accent bar that grows on hover / open */}
              <span
                className={`absolute left-0 top-1/2 w-[3px] -translate-y-1/2 bg-steel transition-all duration-500 ${
                  isOpen ? "h-[70%]" : "h-0 group-hover:h-7"
                }`}
              />
              <div>
                <h3 className="font-serif text-xl leading-snug text-ink md:text-[23px]">{m.name}</h3>
                <p className="mt-1 text-[13px] font-semibold uppercase tracking-[0.06em] text-steeldeep">
                  {m.role} · {m.focus}
                </p>
              </div>
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border text-[17px] font-normal leading-none transition-all duration-500 ${
                  isOpen
                    ? "rotate-[135deg] border-steel bg-steel/10"
                    : "border-steel/40 group-hover:border-steel group-hover:bg-steel/10"
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>

            {/* Unfolding detail — grid-rows 0fr→1fr animates to the exact height */}
            <div
              className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div
                  className={`pb-8 pl-5 pr-2 transition-all duration-500 md:pl-8 ${
                    isOpen ? "translate-y-0 opacity-100 delay-100" : "-translate-y-2 opacity-0"
                  }`}
                >
                  <p className="max-w-4xl text-[15px] leading-relaxed text-inksoft">{m.bio}</p>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
