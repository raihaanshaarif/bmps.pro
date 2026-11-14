"use client";

import { licensees } from "@/content/site";
import { iconMap } from "@/components/icons";
import { Reveal, SectionHeading } from "@/components/Reveal";

export function Licensing() {
  const loop = [...licensees, ...licensees];
  return (
    <section id="licensing" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          center
          eyebrow="Who needs a licence"
          title={
            <>
              If music plays where people gather, <span className="text-gradient">you need a licence.</span>
            </>
          }
          intro="Playing the radio in a shop, streaming a playlist in a gym or hiring a band for an event all count as public performance. One BMPS licence covers it."
        />
      </div>

      {/* moving strip of venues, like a scrolling playlist */}
      <div className="relative mt-14 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="animate-marquee flex w-max gap-4">
          {loop.map((l, i) => {
            const Icon = iconMap[l.icon];
            return (
              <div key={i} className="glass flex items-center gap-3 rounded-full py-3 pl-3 pr-6" aria-hidden={i >= licensees.length}>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Icon size={20} />
                </span>
                <span className="whitespace-nowrap text-sm font-medium text-white/90">{l.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mx-auto mt-14 grid max-w-7xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {licensees.map((l, i) => {
          const Icon = iconMap[l.icon];
          return (
            <Reveal key={l.label} delay={(i % 3) * 0.08} y={18}>
              <a
                href="#contact"
                className="group flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.02] px-5 py-5 transition hover:border-gold/40 hover:bg-gold/[0.06]"
              >
                <span className="flex items-center gap-4">
                  <Icon size={22} className="text-gold" />
                  <span className="font-medium text-white">{l.label}</span>
                </span>
                <span className="shrink-0 whitespace-nowrap text-sm text-mist transition group-hover:text-gold">Get a quote →</span>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
