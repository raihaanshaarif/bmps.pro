"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/content/site";
import { iconMap } from "@/components/icons";
import { Reveal, SectionHeading } from "@/components/Reveal";

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 8}deg) rotateY(${(x - 0.5) * 10}deg)`;
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };
  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="group relative h-full overflow-hidden rounded-3xl border border-white/8 bg-deep/60 p-7 transition-[transform,border-color] duration-300 ease-out hover:border-gold/40"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 [background:radial-gradient(400px_circle_at_var(--mx,50%)_var(--my,50%),rgba(227,169,87,0.16),transparent_60%)]" />
      {children}
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(80,92,170,0.14),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Our services"
            title={
              <>
                Everything performance rights, <span className="text-gradient">under one roof.</span>
              </>
            }
          />
          <Reveal delay={0.1} className="max-w-sm">
            <p className="text-mist">
              From the café down the road to national broadcasters, we make licensing music simple and make sure
              creators are paid.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <Reveal key={s.title} delay={(i % 3) * 0.1}>
                <TiltCard>
                  <div className="relative flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold ring-1 ring-gold/25 transition duration-500 group-hover:bg-gold group-hover:text-ink">
                      <Icon size={26} strokeWidth={1.7} />
                    </div>
                    <ArrowUpRight className="text-white/20 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold" />
                  </div>
                  <h3 className="relative mt-7 font-display text-xl font-bold text-white">{s.title}</h3>
                  <p className="relative mt-3 leading-relaxed text-mist">{s.body}</p>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
