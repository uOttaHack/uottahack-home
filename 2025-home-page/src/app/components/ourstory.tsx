import Ourstory from "@/app/assets/words/Our Story.svg";
import Blobs_left from "@/app/assets/pinkblob_left.svg";
import Blobs_right from "@/app/assets/pinkblob_right.svg";

import people from "@/app/assets/people/image1.avif";
import styles from "@/app/styles/ourstory.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import Carret from "@/app/assets/carret.svg";
import { motion } from "motion/react";
interface OurStory {}

const OurStory: React.FC<OurStory> = () => {
  const [circles, setCircles] = useState<number[]>([]); // Store random top positions
  const [isParentHovered, setIsParentHovered] = useState(false);
  useEffect(() => {
    // Generate random top positions for the circles
    const initialCircles = Array.from({ length: 20 }, () => Math.random() * 90); // Random values between 0% - 50%
    setCircles(initialCircles);
  }, []);
  function getGradientColor(index: number): string {
    const colors = [
      "#FFB389",
      "#FF8B90",
      "#FF73A4",
      "#FE5AB5",
      "#B351DB",
      "#3C63F1",
      "#15A1EF",
    ];

    // Calculate which part of the gradient the index represents
    const segment = Math.floor((index / 15) * colors.length);
    return colors[segment] || "#FFFFFF"; // Default to white if undefined
  }
  return (
    <main className=" flex our-story w-full relative z-1 ">
      <div className="relative h-full pt-[500%] md:pt-[110%] w-[100vw]">
        <div className="relative  z-[1] left-[10%] w-[20%] " id="story">
          <Ourstory />
        </div>
        <div className="absolute top-[130%] z-[1] -left-[20%] w-[70%]">
          <Blobs_left />
        </div>
        <div className="absolute top-[100%] right-0 z-[1] w-[70%]">
          <Blobs_right />
        </div>
        <div className="absolute z-[10]">
          <div className=" z-[10] flex flex-row w-full">
            <div className="w-[50%] pl-[10%] text-[#F2E1FF] pl-[1%] pt-10 font-inter font-medium leading-[2] text-[1.3vw] ">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className="relative top-[10%] left-[0%] w-full h-full z-[11] ">
                <div
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
                      Past Hackathons
                      <span className="pl-[4%]">
                        <Carret className="w-[1vw]" />
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
            <div className="w-full  pl-[10%] pr-[15%] ">
              <div
                className={`w-full h-[30vw]  pb-[3%] p-[1%] ${styles.window} rounded-xl`}
              >
                <div className="items-center justify-end flex w-full p-[2%] gap-x-[2vw]">
                  {/* Box 1 */}
                  <div className="outline outline-[5px] outline-white w-[1vw] h-[0vw]"></div>

                  {/* Box 2 */}
                  <div className="outline outline-[5px] outline-white w-[1vw] h-[1vw]"></div>

                  {/* X Shape */}
                  <div className="relative w-[2vw] ">
                    {/* Line 1 */}
                    <div className="absolute bottom-[50%] w-full h-[0.5vw] bg-white rotate-45"></div>

                    {/* Line 2 */}
                    <div className="absolute bottom-[50%] w-full h-[0.5vw] bg-white -rotate-45"></div>
                  </div>
                </div>
                <div className="w-full h-full overflow-hidden pb-[5%]">
                  <Image
                    src={people.src}
                    className="object-cover rounded-xl w-full h-full"
                    alt=""
                    loading="eager"
                    width={100}
                    height={100}
                  />
                </div>
              </div>

              <div className="pt-[5%]">
                <div className="relative flex items-center  w-full h-[3vw] bg-stone-900/40 rounded-full  backdrop-blur-lg">
                  {/* Pads */}
                  <div className="relative flex gap-[0.3vw] z-10 px-[0.5vw] w-full">
                    {Array.from({ length: 15 }).map((_, index) => (
                      <motion.div
                        key={index}
                        className={`w-[2vw] h-[2vw] shadow-xl ${
                          index === 0
                            ? "rounded-l-full"
                            : index === 15
                            ? "rounded-r-full"
                            : "rounded-md"
                        }`}
                        style={{
                          background:
                            "linear-gradient(104deg, #FFB389, #FF8B90, #FF73A4, #FE5AB5, #B351DB, #3C63F1, #15A1EF)",
                          backgroundSize: `${15 * 100}%`, // Spans across all pads
                          backgroundPosition: `${(index / 15) * 100}%`, // Shift gradient for each pad
                          filter: `drop-shadow(0px 0px 10px ${getGradientColor(
                            index
                          )})`, // Glow matches the gradient
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: [0, 1, 1, 0] }}
                        transition={{
                          duration: 10, // Duration for each pad to appear
                          delay: index * 0.3, // Staggered delay for each pad
                          times: [0, 0.8, 0.8, 1], // Control the duration at each opacity stage
                          repeat: Infinity, // Repeat the animation
                          //   repeatType: "reverse", // Reverse the animation direction
                        }}
                      ></motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" absolute z-[10] top-[150%] flex flex-row ">
            <div className="w-full  pl-[5%] pr-[10%] overflow-hidden">
              <div
                className={`w-[100%] h-[30vw]  pb-[3%] p-[1%] ${styles.window2} rounded-xl`}
              >
                <div className="items-center justify-end flex w-full p-[2%] gap-x-[2vw]">
                  {/* Box 1 */}
                  <div className="outline outline-[5px] outline-white w-[1vw] h-[0vw]"></div>

                  {/* Box 2 */}
                  <div className="outline outline-[5px] outline-white w-[1vw] h-[1vw]"></div>

                  {/* X Shape */}
                  <div className="relative w-[2vw] ">
                    {/* Line 1 */}
                    <div className="absolute bottom-[50%] w-full h-[0.5vw] bg-white rotate-45"></div>

                    {/* Line 2 */}
                    <div className="absolute bottom-[50%] w-full h-[0.5vw] bg-white -rotate-45"></div>
                  </div>
                </div>
                <div className="w-full h-full overflow-hidden pb-[5%]">
                  <Image
                    src={people.src}
                    alt=""
                    loading="eager"
                    className="object-cover rounded-xl w-full h-full"
                    width={2000} // Set to a large value for high quality
                    height={2000} // Set to a large value for high quality
                    sizes="100vw" // Tells browser image can be full viewport width
                  />
                </div>
              </div>
              <div className="pt-[5%]">
                <div className="relative flex items-center  w-full h-[3vw] bg-stone-900/40 rounded-full  backdrop-blur-lg">
                  {/* Pads */}
                  <div className="relative flex gap-[0.1vw] z-10 px-[0.5vw] w-full">
                    {Array.from({ length: 15 }).map((_, index) => (
                      <motion.div
                        key={index}
                        className={`w-[2vw] h-[2.5vw] shadow-xl ${
                          index === 0
                            ? "rounded-l-full"
                            : index === 15
                            ? "rounded-r-full"
                            : "rounded-md"
                        }`}
                        style={{
                          background:
                            "linear-gradient(104deg, #15A1EF, #15A1EF, #15A1EF, #15A1EF, #15A1EF, #15A1EF, #15A1EF)",
                          backgroundSize: `${15 * 100}%`, // Spans across all pads
                          backgroundPosition: `${(index / 15) * 100}%`, // Shift gradient for each pad
                          filter: `drop-shadow(0px 0px 10px #15A1EF)`, // Glow matches the gradient
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: [0, 1, 1, 0] }}
                        transition={{
                          duration: 10, // Duration for each pad to appear
                          delay: index * 0.3, // Staggered delay for each pad
                          times: [0, 0.8, 0.8, 1], // Control the duration at each opacity stage
                          repeat: Infinity, // Repeat the animation
                          //   repeatType: "reverse", // Reverse the animation direction
                        }}
                      ></motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[50%] mr-[15%] text-[#F2E1FF]  pt-[5%] font-inter font-medium text-[1.3vw] ">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className="relative top-[10%] left-[0%] w-full h-full z-[11] ">
                <div
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
                    className={`relative w-full h-full text-white font-bold rounded-full ${styles.animategradient2} overflow-hidden`}
                  >
                    {/* Centered Text */}
                    <span
                      className="absolute inset-0 flex text-[1.3vw] pointer-events-none justify-center items-center z-10"
                      style={{
                        filter: `drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))`,
                      }}
                    >
                      Events & Initiatives
                      <span className="pl-[4%]">
                        <Carret className="w-[1vw]" />
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default OurStory;
