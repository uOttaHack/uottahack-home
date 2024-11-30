import Ourstory from "@/app/assets/words/Our Story.svg";
import Blobs_left from "@/app/assets/pinkblob_left.svg";
import Blobs_right from "@/app/assets/pinkblob_right.svg";

import people from "@/app/assets/people/image1.avif";
import styles from "@/app/styles/ourstory.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import Carret from "@/app/assets/carret.svg";
import { motion } from "motion/react";
import { useIsMobile } from "../hooks/useIsMobile";
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
  const isMobile = useIsMobile();

  if (isMobile === undefined) return null;
  if (isMobile) {
    return (
      <main className=" flex min-h-screen our-story w-full relative z-1 ">
        <div className="relative h-full pt-[400%] md:pt-[90%] w-[100vw]">
          <div className="relative  z-[1] left-[10%] w-[50%] " id="story">
            <Ourstory />
          </div>
          <div className="absolute top-[138%] z-[1] -left-[20%] w-[70%]">
            <Blobs_left />
          </div>
          <div className="absolute top-[100%] right-0 z-[1] w-[70%]">
            <Blobs_right />
          </div>
          <div className="absolute z-[10]">
            <div className=" z-[10] flex flex-col h-full w-full">
              <div className="w-full h-full pl-[10%] pr-[10%] ">
                <div
                  className={`w-full h-[60vw]  pb-[3%] ${styles.window} rounded-xl`}
                >
                  <div className="items-center justify-end flex w-full p-[2%] gap-x-[2vw]">
                    {/* Box 1 */}
                    <div className="outline outline-[1px] outline-white w-[1vw] h-[0vw]"></div>

                    {/* Box 2 */}
                    <div className="outline outline-[1px] outline-white w-[1vw] h-[1vw]"></div>

                    {/* X Shape */}
                    <div className="relative w-[2vw] ">
                      {/* Line 1 */}
                      <div className="absolute bottom-[50%] w-full h-[0.5vw] bg-white rotate-45"></div>

                      {/* Line 2 */}
                      <div className="absolute bottom-[50%] w-full h-[0.5vw] bg-white -rotate-45"></div>
                    </div>
                  </div>
                  <div className="w-full h-full overflow-hidden p-[1%]">
                    <Image
                      src={people.src}
                      className="object-cover rounded-xl w-full h-full"
                      alt=""
                      loading="lazy"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </div>
              <div className="w-[100%]  text-[#F2E1FF]  pt-10 font-inter font-medium leading-[2] text-[4vw] ">
                <p className="p-[5%]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <div className="relative  mt-[5%] h w-full pl-[5%] h-[15vw] z-[11] ">
                  <div
                    className={`md:w-[18vw] md:h-[4vw] w-[50%] h-full rounded-full  bg-black  hover:scale-110 transition-transform duration-300 group `}
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
                        className="absolute inset-0 flex text-[4vw] pointer-events-none justify-center items-center z-10"
                        style={{
                          filter: `drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))`,
                        }}
                      >
                        Past Hackathons
                        <span className="pl-[4%]">
                          <Carret className="w-[2vh]" />
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
            <div className=" absolute z-[10] top-[140%] flex flex-col ">
              <div className="w-full  pl-[5%] pr-[10%] overflow-hidden">
                <div
                  className={`w-[100%] h-[60vw]  pb-[3%] p-[1%] ${styles.window2} rounded-xl`}
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
                      loading="lazy"
                      className="object-cover rounded-xl w-full h-full"
                      width={2000} // Set to a large value for high quality
                      height={2000} // Set to a large value for high quality
                      sizes="100vw" // Tells browser image can be full viewport width
                    />
                  </div>
                </div>
              </div>
              <div className="w-[100%] mr-[15%] text-[#F2E1FF]  pt-[5%] font-inter font-medium text-[4vw] ">
                <p className="p-[5%]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <div className="relative  mt-[5%] h w-full pl-[5%] h-[15vw] z-[11] ">
                  <div
                    className={`md:w-[18vw] md:h-[4vw] w-[50%] h-full rounded-full  bg-black  hover:scale-110 transition-transform duration-300 group `}
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
                        className="absolute inset-0 flex text-[4vw] pointer-events-none justify-center items-center z-10"
                        style={{
                          filter: `drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))`,
                        }}
                      >
                        Events & Initiatives
                        <span className="pl-[4%]">
                          <Carret className="w-[2vh]" />
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
  }
  return (
    <main className=" flex min-h-screen our-story w-full relative z-1 ">
      <div className="relative h-full pt-[450%] md:pt-[90%] w-[100vw]">
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
                    loading="lazy"
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
                    loading="lazy"
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
