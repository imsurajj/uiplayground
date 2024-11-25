import Hero from "@/sections/Hero";
import { Features } from "@/sections/Features";
import CallToAction from "@/sections/CallToAction";
import Footer from "@/sections/Footer";
import { Pricing } from "@/sections/Pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <CallToAction />
      <Footer />
    </>
  );
}
