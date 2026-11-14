"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Disc3, Search } from "lucide-react";
import { sampleRepertoire } from "@/content/site";
import { Reveal, SectionHeading } from "@/components/Reveal";

export function Repertoire() {
  const [q, setQ] = useState("");
  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return sampleRepertoire.slice(0, 3);
    return sampleRepertoire.filter((r) =>
      [r.title, r.performer, r.id].some((f) => f.toLowerCase().includes(term)),
    );
  }, [q]);

  return (
    <section id="repertoire" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <SectionHeading
          center
          eyebrow="Repertoire search"
          title={
            <>
              Is that song <span className="text-gradient">in our repertoire?</span>
            </>
          }
          intro="Search the songs and performers we represent."
        />

        <Reveal delay={0.1} className="mt-10">
          <label className="group relative block">
            <span className="sr-only">Search repertoire</span>
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-mist transition group-focus-within:text-gold" size={22} />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by song or performer"
              className="w-full rounded-full border border-white/10 bg-deep/70 py-5 pl-16 pr-6 text-base text-white placeholder:text-mist/70 outline-none transition focus:border-gold/60 focus:shadow-[0_0_0_6px_rgba(227,169,87,0.12)] sm:text-lg"
            />
          </label>
        </Reveal>

        <div className="mt-6 space-y-3">
          <AnimatePresence initial={false}>
            {results.map((r) => (
              <motion.div
                key={r.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.02] p-4"
              >
                <Disc3 className="shrink-0 animate-[spin_4s_linear_infinite] text-gold" size={30} />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold text-white">{r.title}</p>
                  <p className="truncate text-sm text-mist">
                    {r.performer}
                  </p>
                </div>
                <span className="hidden rounded-full bg-gold/10 px-3 py-1 font-mono text-xs text-gold-soft sm:block">{r.id}</span>
              </motion.div>
            ))}
          </AnimatePresence>
          {results.length === 0 && (
            <p className="py-6 text-center text-mist">No matches in the preview list. Contact us to check a specific work.</p>
          )}
        </div>
        <p className="mt-6 text-center text-xs text-mist/70">Preview with sample entries. The full repertoire database is coming soon.</p>
      </div>
    </section>
  );
}
