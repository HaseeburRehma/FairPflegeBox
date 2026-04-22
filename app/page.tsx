import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import Services from "@/components/sections/Services";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <main>
      {/* Hero never animates in — it's above the fold */}
      <Hero />

      {/* Mission — slides in from the left */}
      <ScrollReveal direction="left" duration={800}>
        <Mission />
      </ScrollReveal>

      {/* Services — zooms in gently, the grid feels like it lands into place */}
      <ScrollReveal direction="zoom" duration={750} delay={80}>
        <Services />
      </ScrollReveal>

      {/* Features (bento) — slides up, matches the upward rhythm of the heading */}
      <ScrollReveal direction="up" duration={800}>
        <Features />
      </ScrollReveal>

      {/* Testimonials — slides in from the right for visual variety */}
      <ScrollReveal direction="right" duration={800}>
        <Testimonials />
      </ScrollReveal>

      {/* HowItWorks — fades + slides down from above */}
      <ScrollReveal direction="down" duration={750}>
        <HowItWorks />
      </ScrollReveal>

      {/* FAQ — slides up from below */}
      <ScrollReveal direction="up" duration={700}>
        <FAQ />
      </ScrollReveal>

      {/* Final CTA — zooms in with a tiny delay for emphasis */}
      <ScrollReveal direction="zoom" duration={700} delay={100}>
        <CTABanner />
      </ScrollReveal>
    </main>
  );
}
