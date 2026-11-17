import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Licensing } from "@/components/sections/Licensing";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Membership } from "@/components/sections/Membership";
import { Repertoire } from "@/components/sections/Repertoire";
import { Contact } from "@/components/sections/Contact";

// Full landing page, kept here while the homepage shows "under construction".
export const metadata: Metadata = { robots: { index: false, follow: false } };

export default function Preview() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Licensing />
        <HowItWorks />
        <Membership />
        <Repertoire />
        <Contact />
      </main>
    </>
  );
}
