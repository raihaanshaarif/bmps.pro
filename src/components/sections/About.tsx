"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FileCheck2, BarChart3, HandCoins } from "lucide-react";
import { pillars } from "@/content/site";
import { Reveal, SectionHeading } from "@/components/Reveal";

const icons = { license: FileCheck2, collect: BarChart3, distribute: HandCoins };

export function About() {
  const reduce = useReducedMotion();
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="What a PRO does"
          title={
            <>
              Music is a craft. <span className="text-gradient">Its public use is a right.</span>
            </>
          }
          intro="Whenever a song is played on the radio, in a café or at a concert, it is being performed in public. The law says its creators deserve to be paid for that. A Performance Royalty Organization makes it simple for everyone."
        />

        <div className="relative mt-16">
          {/* the signal line connecting the three steps */}
          <svg className="absolute left-0 top-[52px] hidden h-6 w-full lg:block" viewBox="0 0 1200 24" preserveAspectRatio="none" aria-hidden>
            <motion.path
              d="M60 12 C 200 -4, 300 28, 400 12 S 600 -4, 700 12 S 900 28, 1000 12 S 1100 4, 1140 12"
              fill="none"
              stroke="url(#signal)"
              strokeWidth="2"
              initial={reduce ? false : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="signal" x1="0" x2="1">
                <stop offset="0" stopColor="#e3a957" stopOpacity="0.1" />
                <stop offset="0.5" stopColor="#e3a957" />
                <stop offset="1" stopColor="#e3a957" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid gap-6 lg:grid-cols-3">
            {pillars.map((p, i) => {
              const Icon = icons[p.key];
              return (
                <Reveal key={p.key} delay={i * 0.15}>
                  <div className="glass group relative h-full rounded-3xl p-8 transition duration-500 hover:-translate-y-1 hover:border-gold/30">
                    <div className="relative mb-8 flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-gradient-to-br from-gold to-[#c9853a] text-ink shadow-[0_10px_40px_-10px_rgba(227,169,87,0.8)]">
                      <Icon size={30} strokeWidth={1.8} />
                      <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-ink text-xs font-bold text-gold ring-1 ring-gold/40">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white">{p.title}</h3>
                    <p className="mt-3 leading-relaxed text-mist">{p.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
