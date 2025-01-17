import DiveInto from "@/app/assets/words/dive_into_uottahack.svg";
interface RecapSection {}
import Blobs from "@/app/assets/recapblobs.svg";
import UottaHack6 from "@/app/assets/Uottahack6reacp.png";
import Image from "next/image";
import RockPlatform from "@/app/assets/rock platform.svg";
import { useState, useEffect } from "react";
import { inherits } from "util";
import { motion, Variants } from "motion/react";
import styles from "@/app/styles/recapsection.module.css";
import Carret from "@/app/assets/carret.svg";
import { useIsMobile } from "../hooks/useIsMobile";
import AOS from "aos";
import "aos/dist/aos.css";
const RecapSection: React.FC<RecapSection> = () => {
  const [circles, setCircles] = useState<number[]>([]); // Store random top positions
  const [isParentHovered, setIsParentHovered] = useState(false);
  const isMobile = useIsMobile();
  useEffect(() => {
    AOS.init({ duration: 700 });
    AOS.refresh();
    console.log("aos ");
  }, []);
  useEffect(() => {
    // Generate random top positions for the circles
    const initialCircles = Array.from({ length: 20 }, () => Math.random() * 90); // Random values between 0% - 50%
    setCircles(initialCircles);
  }, []);

  const shakeAnimation: Variants = {
    initial: {
      transform: "translateX(0px)",
    },
    hover: {
      transform: [
        "translateX(0px)",
        "translateX(-4px)",
        "translateX(4px)",
        "translateX(-4px)",
        "translateX(4px)",
        "translateX(0px)",
      ],
      transition: {
        duration: 0.4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      },
    },
  };
  if (isMobile === undefined) return null;
  if (isMobile) {
    return (
      <>
        <main className="h-auto flex min-h-screen md:h-auto pt-[30%] relative">
          <div className="relative h-full  w-[100vw]">
            <div className="absolute top-0 z-[1] w-[100%]">
              <Blobs />
            </div>
            <div className="realitve z-2 flex ">
              <div className="  top-0 w-[90%] pl-[5%]">
                <DiveInto className="realitve " />
              </div>
            </div>
            <div className="flex flex-col w-full relative z-[2]   ">
              <div
                className="video w-[100%] pl-[5%] pr-[5%] pt-[2%]   group h-auto relative"
                data-aos="zoom-in"
              >
                {/* Image Container */}
                <div className="relative w-full overflow-hidden rounded-lg h-auto">
                  {/* Image */}
                  <div className="mx-auto w-[108%] rounded-lg h-auto">
                    <Image
                      src={UottaHack6}
                      alt="Example Image"
                      className="shadow-xl rounded-lg"
                    />
                  </div>

                  {/* Context Card */}
                  <div className="absolute pl-[5%] inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-start  opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                    <p className="text-gray-200 text-2xl font-bold pb-[1%]">
                      Our Most Recent Event.
                    </p>
                    <h2 className="text-white text-7xl font-bold font-harabara">
                      UottaHack 6
                    </h2>
                    <p className="text-gray-200 text-sm">
                      March 1-3 2024 @ University of Ottawa{" "}
                    </p>
                  </div>
                </div>
                <div className=" absolute  w-[50%]">
                  <RockPlatform />
                </div>
              </div>
              <div className="w-full pt-[20%] flex-row min-h-[XXX] overflow-hidden">
                <div
                  className="relative  min-h-[XXX] overflow-hidden w-full  flex left-0  z-10 text-[#E6DAFF]  font-medium font-urbanist leading-[2] text-[1.5vh]"
                  data-aos="fade-left"
                >
                  <p
                    className="absolute p-[5%] blur-lg text-justify opacity-50 text-[#E6DAFF] z-[9]"
                    aria-hidden="true"
                  >
                    Over the past six years, our hackathon event has brought the
                    community together to connect students with each other, to
                    employers & opportunities, and solve real-world challenges.
                  </p>

                  {/* Sharp, Clear Layer */}
                  <p className="relative p-[5%] text-justify z-[10]">
                    Over the past six years, our hackathon event has brought the
                    community together to connect students with each other, to
                    employers & opportunities, and solve real-world challenges.
                  </p>
                </div>

                <div className=" relative w-full h-[10vw] left-[10%] z-[11] ">
                  <div
                    className={`md:w-[18vw] md:h-[4vw] w-[50%] h-full rounded-full bg-black  hover:scale-110 transition-transform duration-300 group `}
                    onClick={() =>
                      (window.location.href = "https://2025.uottahack.ca/")
                    }
                    onMouseEnter={() => {
                      console.log("Parent hovered");
                      setIsParentHovered(true);
                    }}
                    onMouseLeave={() => {
                      console.log("Parent hover ended");
                      setIsParentHovered(false);
                    }}
                  >
                    <div
                      className={`relative w-full h-full text-white font-bold rounded-full ${styles.animategradient} overflow-hidden`}
                    >
                      {/* Centered Text */}
                      <span
                        className="absolute inset-0 flex text-2xl pointer-events-none justify-center items-center z-10"
                        style={{
                          filter: `drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))`,
                        }}
                      >
                        2024 Recap
                        <span className="pl-[4%]">
                          <Carret className="w-[4vw]" />
                        </span>
                      </span>

                      {/* Render Circles */}
                      {circles.map((randomTop, index) => (
                        <motion.span
                          key={`${isParentHovered}-${index}`} // Use key to reinitialize animation
                          className="absolute left-0 w-[3px] h-[3px]  bg-white  rounded-full"
                          style={{
                            top: `${randomTop}%`,
                            filter: `drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))`,
                          }}
                          initial={{ x: -20 }} // Start off-screen to the left
                          animate={{
                            x: 320,
                            scaleX: isParentHovered ? 10 : 1,
                          }} // End off-screen to the right
                          transition={{
                            duration: isParentHovered ? 0.5 : 4, // Faster when hovered
                            repeat: Infinity,
                            ease: "linear",
                            delay: index * 0.6,
                          }}
                        ></motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
  return (
    <main className="h-auto flex  md:h-auto relative z-1">
      <div className="relative h-full  w-[100vw]">
        <div className="absolute top-0 z-[1] w-[100%]">
          <Blobs />
        </div>
        <div className="realitve z-2 flex ">
          <div className="  top-0 w-[40%] pl-[5%]" data-aos="fade-right ">
            <DiveInto className="realitve " />
          </div>
        </div>
        <div className="flex w-full relative z-[2]   ">
          <div className="video w-[60%] pl-[5%] pr-[5%] pt-[2%]   group h-auto relative ">
            {/* Image Container */}
            <div
              className="relative w-full overflow-hidden rounded-lg h-auto "
              data-aos="zoom-in"
              //   style={{
              //     boxShadow:
              //       "0 10px 15px -3px rgba(128, 128, 255, 0.8), 0 4px 6px -2px rgba(128, 128, 255, 0.5)",
              //   }}
            >
              {/* Image */}
              <div className="mx-auto w-[108%] rounded-lg h-auto">
                <Image
                  src={UottaHack6}
                  alt="Example Image"
                  className="shadow-xl rounded-lg "
                  priority={true}
                />
              </div>

              {/* Context Card */}
              <div className="absolute pl-[5%] inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-start  opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <p className="text-gray-200 text-2xl font-bold pb-[1%]">
                  Our Most Recent Event.
                </p>
                <h2 className="text-white text-7xl font-bold font-harabara">
                  UottaHack 6
                </h2>
                <p className="text-gray-200 text-sm">
                  March 1-3 2024 @ University of Ottawa{" "}
                </p>
              </div>
            </div>
            <div className=" absolute top-[90%] w-[50%]">
              <RockPlatform />
            </div>
          </div>
          <div
            className="relative w-[40%] pt-[5%] pr-[5%] z-10 text-[#E6DAFF] pl-[1%]   font-medium font-urbanist leading-[2] text-[2vw]"
            data-aos="fade-left"
          >
            {/* Blurred / Glow Layer */}
            <p
              className="absolute pr-[5%] blur-lg opacity-50 text-[#E6DAFF] z-[9]"
              aria-hidden="true"
            >
              Over the past six years, our hackathon event has brought the
              community together to connect students with each other, to
              employers & opportunities, and solve real-world challenges.
            </p>

            {/* Sharp, Clear Layer */}
            <p className="absolute  pr-[5%] z-[10]">
              Over the past six years, our hackathon event has brought the
              community together to connect students with each other, to
              employers & opportunities, and solve real-world challenges.
            </p>
            <div className="relative top-[100%] left-[0%] w-full h-full z-[11] ">
              <motion.div
                whileHover="hover"
                variants={shakeAnimation}
                className={`w-[16vw] h-[4vw] rounded-full  bg-black  hover:scale-110 transition-transform duration-300 group `}
                onClick={() =>
                  (window.location.href = "https://2025.uottahack.ca/")
                }
                onMouseEnter={() => {
                  console.log("Parent hovered");
                  setIsParentHovered(true);
                }}
                onMouseLeave={() => {
                  console.log("Parent hover ended");
                  setIsParentHovered(false);
                }}
              >
                <div
                  className={`relative w-full h-full text-white font-bold rounded-full ${styles.animategradient} overflow-hidden`}
                >
                  {/* Centered Text */}
                  <span
                    className="absolute inset-0 flex text-[1.3vw] pointer-events-none justify-center items-center z-10"
                    style={{
                      filter: `drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))`,
                    }}
                  >
                    2024 Recap
                    <span className="pl-[4%]">
                      <Carret className="w-[0.8vw]" />
                    </span>
                  </span>

                  {/* Render Circles */}
                  {circles.map((randomTop, index) => (
                    <motion.span
                      key={`${isParentHovered}-${index}`} // Use key to reinitialize animation
                      className="absolute left-0 w-[3px] h-[3px]  bg-white   rounded-full"
                      style={{
                        top: `${randomTop}%`,
                        filter: `drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))`,
                      }}
                      initial={{ x: -20 }} // Start off-screen to the left
                      animate={{ x: 320, scaleX: isParentHovered ? 10 : 1 }} // End off-screen to the right
                      transition={{
                        duration: isParentHovered ? 1 : 4, // Faster when hovered
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.6,
                      }}
                    ></motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RecapSection;
