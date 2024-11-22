import Grid from "../assets/Grid.svg";
import Sun from "@/app/assets/Retro sun.svg";
import Parliament from "@/app/assets/parliment.svg";
import { useState, useEffect } from "react";
import UottaHack from "@/app/assets/words/uOttaHack.svg";
import { motion } from "motion/react";
import Rock1 from "@/app/assets/Small_Rocks/rock1.svg";
import Rock2 from "@/app/assets/Small_Rocks/rock2.svg";
import Rock3 from "@/app/assets/Small_Rocks/rock3.svg";
import Rock4 from "@/app/assets/Small_Rocks/rock4.svg";
import Rock5 from "@/app/assets/Small_Rocks/rock5.svg";
import Rock6 from "@/app/assets/Small_Rocks/rock6.svg";
import Rock7 from "@/app/assets/Small_Rocks/rock7.svg";
import Rock8 from "@/app/assets/Small_Rocks/rock8.svg";
import Rock9 from "@/app/assets/Small_Rocks/rock9.svg";
import styles from "@/app/styles/heroSection.module.css";
import ParticleEffect from "./Particles";
import Carret from "@/app/assets/carret.svg";

import Tagline from "@/app/assets/tagline.svg";

interface HeroSectionProps {}
const HeroSection: React.FC<HeroSectionProps> = () => {
  const [circles, setCircles] = useState<number[]>([]); // Store random top positions
  const [isParentHovered, setIsParentHovered] = useState(false);

  useEffect(() => {
    // Generate random top positions for the circles
    const initialCircles = Array.from({ length: 20 }, () => Math.random() * 90); // Random values between 0% - 50%
    setCircles(initialCircles);
  }, []);
  return (
    <main className="min-h-screen flex  items-center   overlfow-x-hidden overflow-y-visible relative z-1">
      <div className="absolute z-1 top-[20%] overlflow-hidden max-h-screen w-full h-full">
        <ParticleEffect />
      </div>
      <div className="relative inset-0 flex items-center justify-center min-h-screen overflow-hidden bg-center">
        {/* Center-aligned SVG */}
        <div className="relative w-[100vw] flex items-center overlflow-hidden justify-center">
          <Grid className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
      {/* <div className={`${styles.twinklingdots}`} /> */}
      <div className="  absolute w-full h-full  z-[10] flex flex-col">
        <div className=" absolute top-[65%] md:top-[30%] left-[10%] w-[60%] md:w-[40%] h-[40vh]">
          <UottaHack />
          <div className="relative left-[5%] w-full">
            <span className={`${styles.gradienttext} text-[2.5rem] `}>
              Canada’s Capital Hackathon
            </span>
            <span className={`${styles.gradienttext} text-[2.5rem]`}>
              Canada’s Capital Hackathon
            </span>
            <span className={`${styles.sharpWhiteText} text-[2.5rem]`}>
              Canada’s Capital Hackathon
            </span>
          </div>
        </div>
        <div className="relative top-[60%] left-[15%] w-full h-full z-[11] ">
          <div
            className={`w-[13vw] h-[8vh] rounded-full p-[10px] bg-black  hover:scale-110 transition-transform duration-300 group ${styles.border}`}
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
                See 2025
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
                  animate={{ x: 320, scale: isParentHovered ? 1.3 : 1 }} // End off-screen to the right
                  transition={{
                    duration: isParentHovered ? 1 : 4, // Faster when hovered
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

      <div className="absolute top-[5%] right-[5%] h-full w-auto p-[5%] flex items-start justify-end">
        {/* Sun Component */}
        <div className="relative">
          <div className=" w-[70vw] md:w-[40vw] h-auto">
            <Sun />
          </div>

          {/* Parliament Component */}
          <motion.div
            className="absolute top-[70%] left-[50%] w-[60vw] md:w-[30vw] h-auto"
            style={{
              transform: "translate(-50%, -50%)",
            }}
            initial={{ y: "-50%", x: "-50%" }} // Starting at the element's natural position
            animate={{
              y: ["-45%", "-50%", "-45%"],
            }}
            transition={{
              duration: 10, // Animation duration (seconds)
              repeat: Infinity, // Repeat infinitely
              repeatType: "loop", // Smooth looping
            }}
          >
            <Parliament />
          </motion.div>
          <div className="absolute top-[70%] left-[50%] w-[30vw] h-full">
            <div>
              <motion.div
                className="absolute -left-[80%] transform top-[10%] w-[15%] h-auto"
                animate={{
                  y: [0, -20, 0], // Moves up and down
                }}
                transition={{
                  duration: 4, // Time for one float cycle
                  repeat: Infinity, // Repeat forever
                  repeatType: "loop", // Smooth looping
                }}
                whileHover={{
                  scale: 1.1, // Slightly enlarge on hover
                }}
              >
                <Rock1 />
              </motion.div>

              <motion.div
                className="absolute left-[65%] transform top-[10%] w-[20%] h-auto"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                whileHover={{
                  scale: 1.1,
                }}
              >
                <Rock2 />
              </motion.div>

              <motion.div
                className="absolute -left-[50%] transform top-[20%] w-[3%] h-auto"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                whileHover={{
                  scale: 1.2,
                }}
              >
                <Rock3 />
              </motion.div>

              <motion.div
                className="absolute left-[70%] transform -top-[50%] w-[15%] h-auto"
                animate={{
                  y: [0, -25, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: 5, // Slight tilt on hover
                }}
              >
                <Rock4 />
              </motion.div>

              <motion.div
                className="absolute -left-[65%] transform -top-[10%] w-[8%] h-auto"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                whileHover={{
                  scale: 1.1,
                }}
              >
                <Rock5 />
              </motion.div>

              <motion.div
                className="absolute left-[70%] transform -top-[10%] w-[8%] h-auto"
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                whileHover={{
                  scale: 1.15,
                }}
              >
                <Rock6 />
              </motion.div>

              <motion.div
                className="absolute left-[80%] transform -top-[20%] w-[5%] h-auto"
                animate={{
                  y: [0, -18, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                whileHover={{
                  scale: 1.1,
                }}
              >
                <Rock7 />
              </motion.div>

              <motion.div
                className="absolute left-[30%] transform -top-[50%] w-[11%] h-auto"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                whileHover={{
                  scale: 1.1,
                }}
              >
                <Rock8 />
              </motion.div>

              <motion.div
                className="absolute left-[50%] transform top-[30%] w-[5%] h-auto"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                whileHover={{
                  scale: 1.2,
                }}
              >
                <Rock9 />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
