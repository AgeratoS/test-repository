import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { MobileCTA } from "@/components/MobileCTA";
import { Pricing } from "@/components/Pricing";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-24 md:pb-0">
        <Hero />
        <Services />
        <Pricing />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
