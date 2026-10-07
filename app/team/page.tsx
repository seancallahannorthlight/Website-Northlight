import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { Eyebrow } from "@/components/ui";
import { ContactCTA } from "@/components/ContactCTA";
import { Founders } from "@/components/Founders";
import { InvestmentTeam } from "@/components/InvestmentTeam";

// Team stats — the two metrics count up on first view; the year stays static.
const teamStatsAnim: { value: React.ReactNode; label: string }[] = [
  { value: <CountUp end={90} start={2} suffix="+" duration={1400} />, label: "Years of combined credit experience" },
  { value: <CountUp end={7} start={1} duration={1400} />, label: "Languages spoken across the team" },
  { value: "2009", label: "Investing together since" },
];

export const metadata: Metadata = {
  title: "Team",
  description:
    "Northlight is led by founding portfolio managers Cyril Armleder and Shahar Zer, with a team carrying 90+ years of combined credit experience.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our team"
        title="Led by its founders"
        intro="Northlight is led by founding portfolio managers Cyril Armleder and Shahar Zer, supported by a diverse, experienced investment team."
        image="/heroes/viaduct.jpg"
        imagePosition="center 42%"
      />

      {/* Founding partners */}
      <section className="border-b border-line bg-white">
        <div className="container-nl py-20">
          <Reveal>
            <Eyebrow>Partners &amp; portfolio managers</Eyebrow>
          </Reveal>
          <div className="mt-12">
            <Founders />
          </div>
        </div>
      </section>

      {/* Team in numbers — slim navy stripe between the partners and the wider team */}
      <section className="border-b border-navyline bg-brand text-white">
        <div className="container-nl py-9 md:py-11">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3">
            {teamStatsAnim.map((fact, i) => (
              <Reveal key={fact.label} delay={i * 80}>
                <dt className="font-serif text-4xl font-medium leading-none text-white md:text-5xl">
                  {fact.value}
                </dt>
                <dd className="mt-3 text-[13px] uppercase tracking-[0.12em] text-silver">
                  {fact.label}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Wider investment team */}
      <section className="border-b border-line bg-mist">
        <div className="container-nl py-20">
          <Reveal>
            <Eyebrow>Investment team</Eyebrow>
            <h2 className="mt-4 text-3xl text-ink md:text-[34px]">The wider investment team</h2>
            <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-inksoft">
              A specialist research team spanning high-yield, leveraged finance and distressed
              credit, with experience across leading global banks and credit funds.
            </p>
          </Reveal>
          <div className="mt-10">
            <InvestmentTeam />
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
