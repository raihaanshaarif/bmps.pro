"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center = false,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
        <span className="flex h-3 items-end gap-[2px]" aria-hidden>
          <span className="eq-bar h-full w-[2px] bg-gold" />
          <span className="eq-bar h-full w-[2px] bg-gold [animation-delay:-0.3s]" />
          <span className="eq-bar h-full w-[2px] bg-gold [animation-delay:-0.6s]" />
        </span>
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {intro && <p className="mt-5 text-base leading-relaxed text-mist sm:text-lg">{intro}</p>}
    </Reveal>
  );
}
