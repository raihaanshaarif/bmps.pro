"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mic2 } from "lucide-react";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), { ssr: false });

const words = ["Every", "time", "music", "plays", "in", "public,"];

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="top" className="grain relative flex min-h-[100svh] items-center overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(227,169,87,0.16),transparent_55%),radial-gradient(ellipse_at_20%_80%,rgba(80,92,170,0.22),transparent_50%)]" />
      <div className="absolute inset-0 opacity-60 lg:opacity-100">
        <HeroScene />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="glass mb-7 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-gold-soft sm:text-sm"
          >
            <Mic2 size={16} className="text-gold" />
            A Performance Royalty Organization under BLCPS
          </motion.p>

          <h1 className="font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {words.map((w, i) => (
              <motion.span
                key={i}
                className="mr-[0.25em] inline-block"
                initial={reduce ? false : { opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                {w}
              </motion.span>
            ))}
            <motion.span
              className="text-gradient block"
              initial={reduce ? false : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              its creators get paid.
            </motion.span>
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-mist sm:text-lg"
          >
            BMPS licenses the public performance of music and pays royalties to the songwriters, composers,
            performers and publishers behind every song.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.15 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#licensing"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 font-semibold text-ink shadow-[0_0_40px_-8px_rgba(227,169,87,0.8)] transition hover:bg-gold-soft"
            >
              Get a music licence
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="#membership"
              className="glass inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Join as a member
            </a>
          </motion.div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-mist/70 sm:flex"
      >
        Scroll
        <span className="relative h-10 w-[1px] overflow-hidden bg-white/10">
          <motion.span
            className="absolute left-0 top-0 h-4 w-full bg-gold"
            animate={reduce ? undefined : { y: [-16, 40] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </a>
    </section>
  );
}
