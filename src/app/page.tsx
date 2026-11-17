import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { contact } from "@/content/site";

const bars = [0.35, 0.6, 0.9, 0.5, 0.75, 1, 0.55, 0.8, 0.4, 0.7, 0.95, 0.5, 0.65, 0.3];

export default function UnderConstruction() {
  return (
    <main className="grain relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 py-16 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(227,169,87,0.16),transparent_55%),radial-gradient(ellipse_at_50%_100%,rgba(80,92,170,0.22),transparent_55%)]" />

      <div className="relative flex w-full max-w-xl flex-col items-center">
        <div className="relative h-16 w-[230px] sm:h-20 sm:w-[290px]">
          <Image src="/logo-light.png" alt="BMPS" fill priority sizes="290px" className="object-contain" />
        </div>
        <p className="mt-4 text-sm font-medium uppercase tracking-[0.25em] text-gold-soft">
          Bangladesh Music Performers Society
        </p>

        <div className="mt-12 flex h-14 items-end gap-1.5" aria-hidden>
          {bars.map((h, i) => (
            <span
              key={i}
              className="eq-bar w-1.5 rounded-full bg-gradient-to-t from-[#c9853a] to-gold-soft"
              style={{ height: `${h * 100}%`, animationDelay: `${-i * 0.13}s`, animationDuration: `${0.9 + (i % 4) * 0.15}s` }}
            />
          ))}
        </div>

        <h1 className="mt-10 font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
          Our website is <span className="text-gradient">under construction.</span>
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-mist sm:text-lg">
          We are building a new home for performers in Bangladesh. Please check back soon.
        </p>

        <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 font-semibold text-ink shadow-[0_0_40px_-8px_rgba(227,169,87,0.8)] transition hover:bg-gold-soft"
          >
            <Mail size={18} /> {contact.email}
          </a>
          <a
            href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
            className="glass inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-semibold text-white transition hover:bg-white/10"
          >
            <Phone size={18} /> {contact.phone}
          </a>
        </div>
      </div>

      <p className="absolute bottom-6 text-xs text-mist/60">© 2026 BMPS. All rights reserved.</p>
    </main>
  );
}
