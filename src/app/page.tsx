import { Hero } from "@/components/home/hero";
import { TrustBar } from "@/components/home/trust-bar";
import { HowItWorks } from "@/components/home/how-it-works";
import { WhyShortFormat } from "@/components/home/why-short-format";
import { Features } from "@/components/home/features";
import { Pricing } from "@/components/home/pricing";
import { Testimonials } from "@/components/home/testimonials";
import { FaqTeaser } from "@/components/home/faq-teaser";
import { FinalCta } from "@/components/home/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <HowItWorks />
      <WhyShortFormat />
      <Features />
      <Pricing />
      <Testimonials />
      <FaqTeaser />
      <FinalCta />
    </>
  );
}
