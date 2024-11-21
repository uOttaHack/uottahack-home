"use client";

import Image from "next/image";
import HeroSection from "./components/heroSection";
import MainHeader from "./components/mainheader";
import FaqSection from "./components/FaqSection";
import IntroSection from "./components/introSection";
import RecapSection from "./components/recapSection";
import ValueSection from "./components/valueSection";
import PastSponsor from "./components/pastSponsors";
import OurStory from "./components/ourstory";

export default function Home() {
  return (
    <div className="min-h-screen w-full   flex flex-col">
      <MainHeader />
      <HeroSection />
      <IntroSection />
      <RecapSection />
      <ValueSection />
      <OurStory />
      <PastSponsor />
      <FaqSection />
    </div>
  );
}
