"use client";

import dynamic from "next/dynamic";
import { Check, FileText } from "lucide-react";
import { membership } from "@/content/site";
import { Reveal, SectionHeading } from "@/components/Reveal";

const EqualizerScene = dynamic(() => import("@/components/three/EqualizerScene"), { ssr: false });

export function Membership() {
  return (
    <section id="membership" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grain relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-deep via-night to-ink">
          <div className="grid items-center lg:grid-cols-2">
            <div className="relative z-10 p-8 sm:p-12 lg:p-16">
              <SectionHeading
                eyebrow="Membership"
                title={
                  <>
                    You perform. <span className="text-gradient">You should be paid.</span>
                  </>
                }
                intro="Join BMPS and we will collect royalties for you whenever your performances are used in public."
              />

              <Reveal delay={0.1} className="mt-8">
                <p className="text-sm font-semibold uppercase tracking-widest text-white/60">Who can join</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {membership.who.map((w) => (
                    <span key={w} className="rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm text-gold-soft">
                      {w}
                    </span>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <ul className="mt-8 space-y-3">
                  {membership.benefits.map((b) => (
                    <li key={b} className="flex gap-3 text-white/90">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-ink">
                        <Check size={14} strokeWidth={3} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.3} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="inline-flex justify-center rounded-full bg-gold px-7 py-4 font-semibold text-ink shadow-[0_0_40px_-8px_rgba(227,169,87,0.8)] transition hover:bg-gold-soft"
                >
                  Start your membership
                </a>
                <details className="group text-sm text-mist">
                  <summary className="flex cursor-pointer list-none items-center gap-2 hover:text-white">
                    <FileText size={16} className="text-gold" /> Documents you will need
                  </summary>
                  <ul className="mt-3 list-disc space-y-1 pl-6">
                    {membership.documents.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </details>
              </Reveal>
            </div>

            <div className="relative h-[340px] sm:h-[420px] lg:h-full lg:min-h-[620px]">
              <EqualizerScene />
              <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-10">
                <p className="glass rounded-full px-5 py-2 text-xs font-medium uppercase tracking-[0.25em] text-gold-soft">
                  Every play, counted
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
