export const metadata = {
  title: "Home - ZenGravitas",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import EmblaCarousel from "@/components/ui/emblacarousel";
import { EmblaOptionsType } from "embla-carousel";
import "../css/base.css";
import "../css/embla.css";

const OPTIONS: EmblaOptionsType = { axis: "y", loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <FeaturesPlanet />
      <LargeTestimonial />
      <Cta />
    </>
  );
}
