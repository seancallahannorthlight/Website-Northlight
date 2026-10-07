import type React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLegalDoc, legalDocs } from "@/lib/legal";
import { firm } from "@/lib/content";

// Inline formatting for legal copy: **bold**, email addresses and https links.
function rich(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|https?:\/\/[^\s)]+[^\s).,;]|[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-ink">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (/^https?:\/\//.test(part)) {
      return (
        <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-steeldeep underline hover:text-ink">
          {part}
        </a>
      );
    }
    if (/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(part)) {
      return (
        <a key={i} href={`mailto:${part}`} className="text-steeldeep underline hover:text-ink">
          {part}
        </a>
      );
    }
    return part;
  });
}

export function generateStaticParams() {
  return legalDocs.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const doc = getLegalDoc(params.slug);
  if (!doc) return { title: "Not found" };
  return {
    title: doc.title,
    description: `${doc.title} — Northlight Group LLP regulatory disclosure.`,
  };
}

export default function LegalPage({ params }: { params: { slug: string } }) {
  const doc = getLegalDoc(params.slug);
  if (!doc) notFound();

  return (
    <section className="bg-white">
      <div className="container-nl pb-14 pt-[116px] md:pb-20 md:pt-[140px]">
        <div className="grid gap-12 md:grid-cols-[230px_1fr] lg:gap-16">
          {/* Left index — mirrors the firm's previous disclosures menu */}
          <aside className="md:border-r md:border-line md:pr-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-steeldeep">
              Disclosures
            </p>
            <nav className="mt-4 flex flex-col gap-px" aria-label="Legal documents">
              {legalDocs.map((d) => {
                const active = d.slug === doc.slug;
                return (
                  <Link
                    key={d.slug}
                    href={`/legal/${d.slug}`}
                    aria-current={active ? "page" : undefined}
                    className={`border-l-2 py-2 pl-3 text-[14px] leading-snug transition-colors ${
                      active
                        ? "border-ink font-semibold text-ink"
                        : "border-transparent text-inksoft hover:border-line hover:text-ink"
                    }`}
                  >
                    {d.title}
                  </Link>
                );
              })}
            </nav>
          </aside>

          {/* Document */}
          <article className="min-w-0 max-w-prose">
            <h1 className="text-3xl text-ink md:text-[38px]">{doc.title}</h1>
            {doc.subtitle && (
              <p className="mt-3 text-[15px] italic leading-relaxed text-muted">{doc.subtitle}</p>
            )}
            {doc.updated && (
              <p className="mt-3 text-[13px] font-medium uppercase tracking-[0.12em] text-muted">
                Last updated · {doc.updated}
              </p>
            )}
            <div className="mt-8 space-y-5">
              {doc.blocks.map((block, i) => {
                if (block.type === "h" && block.level === 3) {
                  return (
                    <h3 key={i} className="!mt-8 text-lg text-ink">
                      {block.text}
                    </h3>
                  );
                }
                if (block.type === "h") {
                  return (
                    <h2 key={i} className="!mt-10 text-xl text-ink first:!mt-0">
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "p") {
                  return (
                    <p key={i} className="text-[16px] leading-relaxed text-inksoft">
                      {rich(block.text)}
                    </p>
                  );
                }
                if (block.type === "ul") {
                  return (
                    <ul key={i} className="space-y-2.5 pl-1">
                      {block.items.map((item, j) => (
                        <li
                          key={j}
                          className="relative pl-5 text-[16px] leading-relaxed text-inksoft"
                        >
                          <span className="absolute left-0 top-[11px] h-px w-2.5 bg-steel" />
                          {rich(item)}
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (block.type === "table") {
                  const numeric = (c: string) => /^[\d,.()%\-–\s]+$/.test(c);
                  const allRows = [...block.rows, ...(block.total ? [block.total] : [])];
                  const rightCol = block.head.map(
                    (_, j) => j > 0 && allRows.every((r) => numeric(r[j] ?? "")),
                  );
                  return (
                    <div key={i} className="overflow-x-auto border border-line">
                      <table className="w-full text-[15px]">
                        <thead className="bg-mist2">
                          <tr>
                            {block.head.map((c, j) => (
                              <th
                                key={j}
                                className={`px-4 py-2.5 align-bottom text-[11px] font-semibold uppercase tracking-[0.12em] text-inksoft ${
                                  rightCol[j] ? "text-right" : "text-left"
                                }`}
                              >
                                {c}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {allRows.map((row, j) => {
                            const isTotal = block.total && j === block.rows.length;
                            return (
                              <tr key={j} className="border-t border-line">
                                {row.map((c, k) => (
                                  <td
                                    key={k}
                                    className={`px-4 py-3 align-top leading-relaxed ${
                                      rightCol[k] ? "text-right tabular-nums" : "text-left"
                                    } ${isTotal || (k === 0 && !rightCol[k] && row.length > 1 && !numeric(c)) ? "font-medium text-ink" : "text-inksoft"} ${isTotal ? "!font-semibold" : ""}`}
                                  >
                                    {rich(c)}
                                  </td>
                                ))}
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  );
                }
                // dl — purpose / lawful basis pairs
                return (
                  <div key={i} className="overflow-hidden border border-line">
                    <div className="grid grid-cols-1 bg-mist2 sm:grid-cols-2">
                      <div className="px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-inksoft">
                        Purpose
                      </div>
                      <div className="hidden px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-inksoft sm:block">
                        Lawful basis for processing
                      </div>
                    </div>
                    {block.rows.map((row, j) => (
                      <div
                        key={j}
                        className="grid grid-cols-1 border-t border-line sm:grid-cols-2"
                      >
                        <div className="px-4 py-4 text-[15px] leading-relaxed text-ink sm:border-r sm:border-line">
                          {row.term}
                        </div>
                        <div className="px-4 py-4 text-[15px] leading-relaxed text-inksoft">
                          {row.def}
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>

            <div className="mt-12 border-t border-line pt-6 text-[13px] leading-relaxed text-muted">
              <p>
                {firm.legalName} · {firm.address.join(", ")}
              </p>
              <p className="mt-1">
                Questions? Contact{" "}
                <a href="mailto:compliance@northlight.co.uk" className="text-steeldeep hover:text-ink">
                  compliance@northlight.co.uk
                </a>
                .
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
