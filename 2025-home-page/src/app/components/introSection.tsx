import styles from "@/app/styles/introSection.module.css";
import WhatisUotthack from "@/app/assets/words/Whatisuottahack.svg";
import Blobs from "@/app/assets/introblobs.svg";
import CRX from "@/app/assets/crx.svg";
import Achievement1 from "@/app/assets/achievements/achievement1.svg";
import Achievement2 from "@/app/assets/achievements/achievement2.svg";
import Achievement3 from "@/app/assets/achievements/achievement3.svg";
import Achievement4 from "@/app/assets/achievements/achievement4.svg";
import Achievement5 from "@/app/assets/achievements/achievement5.svg";
import BigRock from "@/app/assets/Small_Rocks/intro_big_rock.svg";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useEffect, useState, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Sparkle from "./sparkles";
import { useIsMobile } from "../hooks/useIsMobile";

interface IntroSection {}
const IntroSection: React.FC<IntroSection> = () => {
  const achievementsRef = useRef(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    AOS.init({ duration: 700 });
    AOS.refresh();
  }, []);

  const isInView = useInView(achievementsRef, { amount: 0.5 });

  // Use callback ref pattern to handle both refs

  useEffect(() => {
    console.log("Current inView state:", isInView);
    console.log("Current ref value:", achievementsRef.current);
  }, [isInView, achievementsRef]);

  return (
    <div ref={achievementsRef}>
      {isMobile ? (
        <>
          <div className="relative  min-h-screen md:h-auto pt-[10%] w-[100vw]">
            <div className="relative w-full top-[10%]">
              <div className=" relative  w-full ">
                <div className=" absolute top-0 z-1 w-[100%]">
                  <Blobs />
                </div>
                <div className="relative  flex flex-col justify-center items-center w-full">
                  <div className="w-[80%] ">
                    <div data-aos="fade-up-right">
                      <WhatisUotthack />
                    </div>
                    <div
                      className="w-[100%] text-[#F2E1FF] pl-[1%] pt-10 font-inter font-medium leading-[2] text-sm "
                      data-aos="fade-right"
                    >
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                    <div className="w-full relative flex pt-[30%] justify-center ">
                      <div className="w-[100%] relative justify-self-center ">
                        <div data-aos="zoom-in">
                          <CRX />
                        </div>
                        <div className=" w-[100%] absolute h-full top-0 ">
                          <motion.div
                            // ref={ref}
                            className="w-[15%] absolute  right-[90%] top-[30%] "
                            initial={{ opacity: 0 }} // Start fully transparent
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                              duration: 2, // Duration of the fade-in
                              delay: 0, // Delay before the animation starts
                            }}
                          >
                            <Achievement1 />
                          </motion.div>
                          <motion.div
                            className="w-[25%] absolute  right-[70%] top-[-5%] "
                            initial={{ opacity: 0 }} // Start fully transparent
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                              duration: 2, // Duration of the fade-in
                              delay: 0.25, // Delay before the animation starts
                            }}
                          >
                            <Achievement2 />
                          </motion.div>
                          <motion.div
                            className="w-[35%] absolute  right-[25%] top-[-20%] "
                            initial={{ opacity: 0 }} // Start fully transparent
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                              duration: 2, // Duration of the fade-in
                              delay: 0.5, // Delay before the animation starts
                            }}
                          >
                            <Achievement3 />
                          </motion.div>
                          <motion.div
                            className="w-[20%] absolute  right-[0%] top-[10%] "
                            initial={{ opacity: 0 }} // Start fully transparent
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                              duration: 2, // Duration of the fade-in
                              delay: 0.75, // Delay before the animation starts
                            }}
                          >
                            <Achievement4 />
                          </motion.div>
                          <motion.div
                            className="w-[14%] absolute  right-[0%] top-[40%] "
                            initial={{ opacity: 0 }} // Start fully transparent
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                              duration: 2, // Duration of the fade-in
                              delay: 1, // Delay before the animation starts
                            }}
                          >
                            <Achievement5 />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div />
              </div>
            </div>
          </div>
        </>
      ) : (
        <main className="h-auto flex  items-center  pt-[5%]  overlfow-x-hidden overflow-y-visible relative z-1">
          <div className="absolute w-full z-[100]">
            <Sparkle></Sparkle>
          </div>
          <div className="relative   pt-[10%] w-[100vw]">
            <div className="w-[100%]">
              <Blobs />
            </div>
            <motion.div
              className="w-[30%] absolute right-[20%] top-[30%]"
              animate={{
                y: [0, -20, 0], // Moves up by 20px and back down
              }}
              transition={{
                duration: 10, // Duration of one complete float cycle
                repeat: Infinity, // Repeat infinitely
                ease: "easeInOut", // Smooth easing
              }}
            >
              <div data-aos="zoom-in">
                {" "}
                <CRX />
              </div>
            </motion.div>
            <div className=" w-[100%] absolute h-full top-0 ">
              <motion.div
                className="w-[10%] absolute  right-[37%] top-[14%] "
                initial={{ opacity: 0 }} // Start fully transparent
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 2, // Duration of the fade-in
                  delay: 0, // Delay before the animation starts
                }}
              >
                <Achievement1 />
              </motion.div>
              <motion.div
                className="w-[13%] absolute  right-[22%] top-[15%] "
                initial={{ opacity: 0 }} // Start fully transparent
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 2, // Duration of the fade-in
                  delay: 0.25, // Delay before the animation starts
                }}
              >
                <Achievement2 />
              </motion.div>
              <motion.div
                className="w-[13%] absolute  right-[10%] top-[30%] "
                initial={{ opacity: 0 }} // Start fully transparent
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 2, // Duration of the fade-in
                  delay: 0.5, // Delay before the animation starts
                }}
              >
                <Achievement3 />
              </motion.div>
              <motion.div
                className="w-[11%] absolute  right-[10%] top-[53%] "
                initial={{ opacity: 0 }} // Start fully transparent
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 2, // Duration of the fade-in
                  delay: 0.75, // Delay before the animation starts
                }}
              >
                <Achievement4 />
              </motion.div>
              <motion.div
                className="w-[8%] absolute  right-[20%] top-[70%] "
                initial={{ opacity: 0 }} // Start fully transparent
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 2, // Duration of the fade-in
                  delay: 1, // Delay before the animation starts
                }}
              >
                <Achievement5 />
              </motion.div>
            </div>
          </div>
          <div className="absolute w-full top-[25%]">
            <div className=" relaitive w-full ">
              <div className="relative  flex flex-col left-[10%] w-full">
                <div className="w-[40%]">
                  <div data-aos="fade-up-right">
                    <WhatisUotthack />
                  </div>
                  <div
                    className="w-[100%] text-[#F2E1FF] pl-[1%] pt-10 font-inter font-medium leading-[2] text-[1.6vw] "
                    data-aos="fade-right"
                  >
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <motion.div
                      className="w-[40%] pt-[10%]"
                      animate={{
                        y: [0, -10, 0], // Moves up by 20px and back down
                      }}
                      transition={{
                        duration: 6, // Duration of one complete float cycle
                        repeat: Infinity, // Repeat infinitely
                        ease: "easeInOut", // Smooth easing
                      }}
                    >
                      <BigRock />
                    </motion.div>
                  </div>
                </div>
              </div>
              <div />
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default IntroSection;
