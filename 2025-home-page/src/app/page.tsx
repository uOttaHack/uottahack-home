"use client";

import Image from "next/image";
import HeroSection from "./components/heroSection";
import MainHeader from "./components/mainheader";
import FaqSection from "./components/FaqSection";
import IntroSection from "./components/introSection";
import RecapSection from "./components/recapSection";

export default function Home() {
  return (
    <div className="overflow-hidden flex flex-col">
      <MainHeader />
      <HeroSection />
      <IntroSection />
      <RecapSection/>
      <FaqSection />
    </div>
  );
}
