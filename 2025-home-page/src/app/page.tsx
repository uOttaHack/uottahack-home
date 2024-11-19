"use client";

import Image from "next/image";
import HeroSection from "./components/heroSection";
import MainHeader from "./components/mainheader";
import FaqSection from "./components/FaqSection";

export default function Home() {
  return (
    <div className="">
      <MainHeader />
      <HeroSection />
      <FaqSection />
      <HeroSection />
      <HeroSection />
      <HeroSection />
      <HeroSection />
      <HeroSection />
      <HeroSection />
    </div>
  );
}
