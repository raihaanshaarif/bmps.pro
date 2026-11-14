"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { contact, nav } from "@/content/site";
import { Reveal, SectionHeading } from "@/components/Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);
  const details = [
    { icon: MapPin, label: contact.address },
    { icon: Phone, label: contact.phone, href: `tel:${contact.phone.replace(/[^+\d]/g, "")}` },
    { icon: Mail, label: contact.email, href: `mailto:${contact.email}` },
    { icon: Clock, label: contact.hours },
  ];

  return (
    <>
      <section id="contact" className="relative py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.2fr] lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title={
                <>
                  Let&apos;s get the <span className="text-gradient">music licensed.</span>
                </>
              }
              intro="Ask about a licence, apply for membership, or just ask a question. Our team will get back to you within two working days."
            />
            <Reveal delay={0.1}>
              <ul className="mt-10 space-y-5">
                {details.map((d) => (
                  <li key={d.label} className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/20">
                      <d.icon size={20} />
                    </span>
                    {d.href ? (
                      <a href={d.href} className="text-white/90 hover:text-gold">
                        {d.label}
                      </a>
                    ) : (
                      <span className="text-white/90">{d.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="glass rounded-[2rem] p-7 sm:p-10"
            >
              {sent ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-16 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold text-ink">
                    <Send />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold text-white">Thank you</h3>
                  <p className="mt-2 text-mist">We have your message and will be in touch soon.</p>
                </motion.div>
              ) : (
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" name="name" required />
                  <Field label="Organisation" name="org" />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                  <label className="sm:col-span-2">
                    <span className="mb-2 block text-sm text-mist">I am enquiring about</span>
                    <select
                      name="type"
                      className="w-full rounded-xl border border-white/10 bg-ink/60 px-4 py-3.5 text-white outline-none focus:border-gold/60"
                    >
                      <option>A music licence</option>
                      <option>Membership</option>
                      <option>Something else</option>
                    </select>
                  </label>
                  <label className="sm:col-span-2">
                    <span className="mb-2 block text-sm text-mist">Message</span>
                    <textarea
                      name="message"
                      rows={4}
                      className="w-full resize-none rounded-xl border border-white/10 bg-ink/60 px-4 py-3.5 text-white outline-none focus:border-gold/60"
                    />
                  </label>
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 font-semibold text-ink transition hover:bg-gold-soft sm:col-span-2"
                  >
                    Send message <Send size={18} className="transition group-hover:translate-x-1" />
                  </button>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/5 py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-5">
            <div className="relative h-10 w-[140px]">
              <Image src="/logo-light.png" alt="BMPS" fill sizes="140px" className="object-contain object-left" />
            </div>
            <p className="max-w-xs text-sm text-mist">A Performance Royalty Organization under BLCPS.</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-mist" aria-label="Footer">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-gold">
                {n.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="mx-auto mt-8 max-w-7xl px-5 text-xs text-mist/60 lg:px-8">
          © 2026 BMPS. All rights reserved.
        </p>
      </footer>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label>
      <span className="mb-2 block text-sm text-mist">
        {label} {required && <span className="text-gold">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-ink/60 px-4 py-3.5 text-white outline-none transition focus:border-gold/60"
      />
    </label>
  );
}
