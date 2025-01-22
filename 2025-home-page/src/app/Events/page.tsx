"use client";

import MainHeader from "../components/mainheader";
import FooterSection from "../components/footer";
import { useEffect, useState } from "react";
import Blob from "@/app/assets/Events blobs.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Sparkle from "../components/sparkles";
import internpanel from "@/app/assets/events/intern-panel.png";
import SecondHeader from "../components/second_header";
const Panels = [
  {
    id: 1,
    title: "Intern Panel",
    image: internpanel,
    description:
      "A panel of several students who share their experiences working internships at top tech companies.",
    date: "October 3rd",
    location: "@uOttawa CRX Building",
  },
  {
    id: 2,
    title: "Intern Panel",
    image: internpanel,

    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    date: "October 3rd",
    location: "@uOttawa CRX Building",
  },
];
export default function Events() {
  //have event list here
  useEffect(() => {
    AOS.init({ duration: 700 });
    AOS.refresh();
  }, []);
  return (
    <main
      className=" min-h-screen w-full bg-[#000A18] overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 500% 200%, #DA60F8 13%, #0A0222 100%);",
      }}
    >
      <div className="absolute z-[1] w-[100vw] md:h-[100vv] md:top-[50%] overflow-hidden">
        <Blob className="md:w-[100vw] w-[400vw]"></Blob>
      </div>
      <div className="absolute z-[1] w-[100vw] md:h-[100vv] md:top-[50%] overflow-hidden">
        <Sparkle></Sparkle>
      </div>
      <SecondHeader></SecondHeader>
      <div className=" relative h-full w-full z-[2] ">
        <div className=" p-[10%] md:pt-[10%] pt-[30%] " data-aos="fade-left">
          <h1 className=" pb-[5%]  text-[#A19CFF] md:text-[4vw] text-4xl font-harabara">
            Events and Initiatives
          </h1>

          <div className="h-full w-full">
            {Panels.map((panel) => (
              <div
                key={panel.id}
                className="flex md:flex-row flex-col gap-8 mb-16 "
                data-aos="fade-left"
              >
                {/* Image/Placeholder Side */}
                <div className="md:w-1/2  w-full ">
                  <div className="bg-gray-200/0 w-full aspect-video relative rounded-lg overflow-hidden">
                    {/* You can use a placeholder here or add actual images */}
                    {/* <div className="w-full h-full bg-gray-300 " /> */}
                    <Image
                      src={panel.image}
                      alt=""
                      fill
                      objectFit="cover"
                    ></Image>
                  </div>
                </div>

                {/* Content Side */}
                <div className="md:w-1/2 w-full space-y-4">
                  <h2 className="text-3xl font-medium text-white">
                    {panel.title}
                  </h2>
                  <p className="text-gray-300 md:text-lg text-sm text-[#E0BBFF]">
                    {panel.description}
                  </p>
                  <div className="text-gray-300">
                    {panel.date} {panel.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <footer className="  ">
          <FooterSection></FooterSection>
        </footer>
      </div>
    </main>
  );
}
