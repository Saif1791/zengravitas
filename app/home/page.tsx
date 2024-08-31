export const metadata = {
  title: "Home - ZenGravitas",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import "../css/base.css";
import "../css/embla.css";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesPlanet />
      {/* <LargeTestimonial /> */}
      <Cta />
    </>
  );
}
