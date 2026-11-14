"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Building, Music2 } from "lucide-react";
import { steps } from "@/content/site";
import { SectionHeading } from "@/components/Reveal";

const tabs = [
  { key: "users", label: "For music users", icon: Building },
  { key: "performers", label: "For performers", icon: Music2 },
] as const;

export function HowItWorks() {
  const [tab, setTab] = useState<(typeof tabs)[number]["key"]>("users");
  return (
    <section id="how" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          center
          eyebrow="How it works"
          title={
            <>
              Simple, <span className="text-gradient">in four steps.</span>
            </>
          }
        />

        <div className="mt-10 flex justify-center">
          <div className="glass inline-flex rounded-full p-1.5" role="tablist">
            {tabs.map((t) => (
              <button
                key={t.key}
                role="tab"
                aria-selected={tab === t.key}
                onClick={() => setTab(t.key)}
                className={`relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition sm:px-7 ${
                  tab === t.key ? "text-ink" : "text-mist hover:text-white"
                }`}
              >
                {tab === t.key && (
                  <motion.span layoutId="tab-pill" className="absolute inset-0 rounded-full bg-gold" transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} />
                )}
                <t.icon size={16} className="relative" />
                <span className="relative">{t.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="relative mt-14">
          <AnimatePresence mode="wait">
            <motion.ol
              key={tab}
              className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{ show: { transition: { staggerChildren: 0.1 } }, hidden: {} }}
            >
              {steps[tab].map((s, i) => (
                <motion.li
                  key={s.title}
                  variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative rounded-3xl border border-white/8 bg-deep/50 p-7"
                >
                  <span className="font-display text-6xl font-extrabold text-gold/15">0{i + 1}</span>
                  <h3 className="mt-2 font-display text-lg font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{s.body}</p>
                  {i < 3 && (
                    <span className="absolute -right-4 top-1/2 hidden h-[2px] w-8 bg-gradient-to-r from-gold/60 to-transparent lg:block" aria-hidden />
                  )}
                </motion.li>
              ))}
            </motion.ol>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
