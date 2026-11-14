import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Licensing } from "@/components/sections/Licensing";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Membership } from "@/components/sections/Membership";
import { Repertoire } from "@/components/sections/Repertoire";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
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
