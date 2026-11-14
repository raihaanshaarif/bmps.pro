"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { nav } from "@/content/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-white/5 bg-ink/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#top" className="relative block h-10 w-[140px]" aria-label="BMPS home">
          <Image src="/logo-light.png" alt="BMPS" fill priority sizes="140px" className="object-contain object-left" />
        </a>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm text-mist transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink shadow-[0_0_30px_-6px_rgba(227,169,87,0.7)] transition hover:bg-gold-soft sm:inline-block"
          >
            Get a licence
          </a>
          <button
            className="rounded-full p-2 text-white lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-white/5 bg-ink/95 px-5 pb-6 pt-2 backdrop-blur-xl lg:hidden" aria-label="Mobile">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/5 py-3.5 text-base text-white/90"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-full bg-gold py-3 text-center font-semibold text-ink"
          >
            Get a licence
          </a>
        </nav>
      )}
      <motion.div style={{ scaleX: progress }} className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gold" />
    </header>
  );
}
