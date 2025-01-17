import OurValues from "@/app/assets/words/our values title.svg";
import Waves from "@/app/assets/bg waves.svg";
import PeopleImage1 from "@/app/assets/people/image1.avif";
import PeopleImage2 from "@/app/assets/people/image2.avif";

import PeopleImage3 from "@/app/assets/people/image3.avif";
import Blobs from "@/app/assets/valuesection/valuesection_blob.svg";
import Cube from "@/app/assets/valuesection/cube.svg";
import Rocket from "@/app/assets/valuesection/rocket.svg";
import Planet from "@/app/assets/valuesection/planet.svg";
import Stem from "@/app/assets/valuesection/stem rock.svg";
import Tabaret from "@/app/assets/valuesection/tabaret rock.svg";
import { motion } from "motion/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useIsMobile } from "../hooks/useIsMobile";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "@/app/styles/valuesection.module.css";

interface ValueSection {}
const ValueSection: React.FC<ValueSection> = () => {
  const [firstStartup, isFirstStartup] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const isMobile = useIsMobile();
  console.log("is mobile ", isMobile);

  const test = () => {
    isFirstStartup(true);
    console.log("test");
  };
  useEffect(() => {
    AOS.init({ duration: 700 });
    AOS.refresh();
    console.log("aos ");
  }, []);
  if (isMobile === undefined) return null;
  return (
    <main className=" flex min-h-screen md:h-auto relative z-1">
      <div className="relative h-full pt-0 md:pt-[30%] w-[100vw]">
        <div className="absolute top-[70%] z-[1] w-[100%]">
          <Waves />
        </div>

        {!isMobile ? (
          <div className="absolute top-[190%]  h-full  z-[1] w-[100%]">
            <div className="absolute  z-[1] w-[100%]">
              <Blobs />
            </div>

            <motion.div
              animate={{
                transform: [
                  "translateY(0px)",
                  "translateY(-20px)",
                  "translateY(0px)",
                ],
              }}
              transition={{
                duration: 5, // Duration of one complete float cycle
                repeat: Infinity, // Repeat infinitely
                ease: "easeInOut", // Smooth easing
              }}
              className=" will-change-transform  absolute z-[2] -top-[15%] left-[15%] w-[30%]  "
            >
              <Stem className=" " />
            </motion.div>

            <motion.div
              animate={{
                transform: [
                  "translateY(0px)",
                  "translateY(-20px)",
                  "translateY(0px)",
                ],
              }}
              transition={{
                duration: 8, // Duration of one complete float cycle
                repeat: Infinity, // Repeat infinitely
                ease: "easeInOut", // Smooth easing
              }}
              className="  absolute z-[2] will-change-transform top-[25%] right-[15%] w-[30%]  "
            >
              <Tabaret className=" " />
            </motion.div>
          </div>
        ) : (
          <></>
        )}
        <div className="realitve z-[10] flex flex-col  w-full  items-center">
          <div className="  realitve z-[10] top-0 md:w-[20%] w-[50%] ">
            <OurValues className="realitve " />
          </div>
          <div
            className="relative w-full  z-10 text-[#E6DAFF]    font-medium font-urbanist leading-[2] text-[2vh] md:text-[2vw]"
            data-aos="zoom-in"
          >
            {/* Blurred / Glow Layer */}
            <p
              className="absolute  blur-lg opacity-50 text-[#E6DAFF] text-justify p-[5%] z-[9]"
              aria-hidden="true"
            >
              Our mission is to empower students to comfortably explore their
              passion for technology and entrepreneurship, through building a
              community of like-minded individuals who innovate and disrupt the
              worlds of business and technology.
            </p>

            {/* Sharp, Clear Layer */}
            <p className="relative z-[10] p-[5%] text-justify">
              Our mission is to empower students to comfortably explore their
              passion for technology and entrepreneurship, through building a
              community of like-minded individuals who innovate and disrupt the
              worlds of business and technology.
            </p>
          </div>
        </div>
        <div className="absolute z-[10] md:pt-[0%] pt-[40%] gap-x-[10%] gap-y-[10vh] flex flex-col md:flex-row justify-center items-center">
          <motion.div
            key={`${isMobile} + 1`}
            initial={isMobile ? "visible" : "hidden"}
            whileHover="visible"
            data-aos="zoom-in"
            className=" md:w-[20%]  md:h-[28vw] w-[80%] p-[1%] h-[70vh]  rounded-xl backdrop-blur-2xl overflow-hidden relative group"
            style={{
              background:
                "linear-gradient(207deg, rgba(215, 215, 255, 0.20) 0.68%, rgba(59, 37, 74, 0.20) 133.85%)",
            }}
            variants={{
              hidden: { height: "28vw" },
              visible: { height: isMobile ? "100%" : "40vw" },
            }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => {
              test();
            }}
          >
            <motion.div
              variants={{
                visible: {
                  background: `
                  conic-gradient(
                    from var(--border-angle),
                    rgb(51 212 255 ) 40%,

                    rgb(105 105 105/0) 0.2%
                    
                  )
                `,
                  animation: `${styles.borderRotate} 8s linear infinite`,
                },
              }}
              whileHover="visible"
              className={`w-[100%] h-100% md:h-[40vw] p-[1%]  absolute inset-0 rounded-xl  `}
              style={{
                WebkitMask:
                  "linear-gradient(white, white) content-box, linear-gradient(white, white)",
                WebkitMaskComposite: "and",
                maskComposite: "exclude",
              }}
            ></motion.div>
            <Image
              src={PeopleImage1}
              alt=""
              className="rounded"
              priority={true}
            />
            <div className="flex items-center pb-[5%] pl-[1%] pt-[10%] justify-center gap-x-[5%]">
              <motion.div
                className="w-[30%]"
                variants={{
                  hidden: { width: "30%" },
                  visible: { width: "10%" },
                }}
                transition={{ duration: 0.5 }}
              >
                <Cube />
              </motion.div>

              {/* Text */}
              <motion.p
                className="text-[#00E0FF] w-[0%] text-[5vw]  md:text-[1.6vw] overflow-hidden whitespace-nowrap pointer-events-none"
                style={{ display: "inline-block" }} // Ensures inline expansion
                variants={{
                  hidden: { width: "0%", opacity: 0 }, // Text hidden initially
                  visible: { width: "100%", opacity: 1 }, // Text appears and aligns
                }}
              >
                Community
              </motion.p>
            </div>
            <motion.p
              className="text-[#F2E1FF] w-[100%] p-[2%] text-[4vw] md:text-[1.2vw]  pointer-events-none "
              style={{ display: "inline-block" }} // Ensures inline expansion
              variants={{
                hidden: { opacity: 0 }, // Text hidden initially
                visible: { opacity: 1 }, // Text appears and aligns
              }}
              transition={{ duration: 1 }}
            >
              Join a strong community of students and mentors who share your
              passion for technology. If you've ever had an idea that you wanted
              to bring to life, uOttaHack’s hackathon is the place to do it!
            </motion.p>
          </motion.div>

          <motion.div
            key={`${isMobile} + 2`}
            initial={isMobile ? "visible" : "hidden"}
            whileHover="visible"
            data-aos="zoom-in"
            className=" md:w-[20%]  md:h-[28vw] w-[80%] p-[1%] h-[70vh]  rounded-xl backdrop-blur-2xl overflow-hidden relative group"
            style={{
              background:
                "linear-gradient(207deg, rgba(215, 215, 255, 0.20) 0.68%, rgba(59, 37, 74, 0.20) 133.85%)",
            }}
            variants={{
              hidden: { height: "28vw" },
              visible: { height: isMobile ? "100%" : "40vw" },
            }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => {
              test();
            }}
          >
            <motion.div
              variants={{
                visible: {
                  background: `
                  conic-gradient(
                    from var(--border-angle),
                    rgb(51 212 255 ) 40%,

                    rgb(105 105 105/0) 0.2%
                    
                  )
                `,
                  animation: `${styles.borderRotate} 8s linear infinite`,
                },
              }}
              whileHover="visible"
              className={`w-[100%] h-100% md:h-[40vw] p-[1%]  absolute inset-0 rounded-xl  `}
              style={{
                WebkitMask:
                  "linear-gradient(white, white) content-box, linear-gradient(white, white)",
                WebkitMaskComposite: "and",
                maskComposite: "exclude",
              }}
            ></motion.div>
            <Image
              src={PeopleImage2}
              alt=""
              className="rounded"
              priority={true}
            />
            <div className="flex items-center pt-[10%] justify-center gap-x-[5%]">
              {/* Rocket SVG */}
              <motion.div
                className="w-[30%]"
                variants={{
                  hidden: { width: "30%" },
                  visible: { width: "10%" },
                }}
                transition={{ duration: 0.5 }}
              >
                <Planet className="pointer-events-none" />
              </motion.div>

              {/* Text */}
              <motion.p
                className="text-[#00E0FF] w-[0%] text-[5vw]  md:text-[1.6vw] overflow-hidden whitespace-nowrap pointer-events-none"
                style={{ display: "inline-block" }} // Ensures inline expansion
                variants={{
                  hidden: { width: "0%", opacity: 0 }, // Text hidden initially
                  visible: { width: "100%", opacity: 1 }, // Text appears and aligns
                }}
                transition={{ duration: 1 }}
              >
                Discover & Learn
              </motion.p>
            </div>
            <motion.p
              className="text-[#F2E1FF] w-[100%] p-[2%] text-[4vw] md:text-[1.2vw] pointer-events-none  "
              style={{ display: "inline-block" }} // Ensures inline expansion
              variants={{
                hidden: { opacity: 0 }, // Text hidden initially
                visible: { opacity: 1 }, // Text appears and aligns
              }}
              transition={{ duration: 1 }}
            >
              Explore the world of programming through our engaging workshops,
              hackathons, and a wealth of resources. Gain exposure to the latest
              technologies that real developers use.
            </motion.p>
          </motion.div>
          <motion.div
            key={`${isMobile} + 3`}
            initial={isMobile ? "visible" : "hidden"}
            whileHover="visible"
            data-aos="zoom-in"
            className="md:w-[20%]  md:h-[28vw] w-[80%] p-[1%] h-[70vh]  rounded-xl backdrop-blur-2xl overflow-hidden relative group"
            style={{
              background:
                "linear-gradient(207deg, rgba(215, 215, 255, 0.20) 0.68%, rgba(59, 37, 74, 0.20) 133.85%)",
            }}
            variants={{
              hidden: { height: "28vw" },
              visible: { height: isMobile ? "100%" : "40vw" },
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              variants={{
                visible: {
                  background: `
                  conic-gradient(
                    from var(--border-angle),
                    rgb(51 212 255 ) 40%,

                    rgb(105 105 105/0) 0.2%
                    
                  )
                `,
                  animation: `${styles.borderRotate} 8s linear infinite`,
                },
              }}
              whileHover="visible"
              className={`w-[100%] h-100% md:h-[40vw] p-[1%]  absolute inset-0 rounded-xl group`}
              style={{
                WebkitMask:
                  "linear-gradient(white, white) content-box, linear-gradient(white, white)",
                WebkitMaskComposite: "and",
                maskComposite: "exclude",
              }}
            ></motion.div>
            <Image
              src={PeopleImage3}
              alt=""
              className="rounded group"
              priority={true}
            />
            <div className="flex items-center pt-[10%] justify-center gap-x-[5%]">
              {/* Rocket SVG */}
              <motion.div
                className="w-[30%]"
                variants={{
                  hidden: { width: "30%" },
                  visible: { width: "10%" },
                }}
                transition={{ duration: 0.5 }}
              >
                <Rocket className="pointer-events-none" />
              </motion.div>

              {/* Text */}
              <motion.p
                className="text-[#00E0FF] w-[0%] text-[5vw]  md:text-[1.4vw] overflow-hidden whitespace-nowrap pointer-events-none"
                style={{ display: "inline-block" }} // Ensures inline expansion
                variants={{
                  hidden: { width: "0%", opacity: 0 }, // Text hidden initially
                  visible: { width: "100%", opacity: 1 }, // Text appears and aligns
                }}
                transition={{ duration: 1 }}
              >
                Accelerate Your Career
              </motion.p>
            </div>
            <motion.p
              className="text-[#F2E1FF] w-[100%] p-[2%] text-[4vw] md:text-[1.2vw] pointer-events-none   "
              style={{ display: "inline-block" }} // Ensures inline expansion
              variants={{
                hidden: { opacity: 0 }, // Text hidden initially
                visible: { opacity: 1 }, // Text appears and aligns
              }}
              transition={{ duration: 1 }}
            >
              Located next to Kanata North, Canada's largest technology park,
              our event attracts companies from startups to top employers in
              North America. Your next opportunity awaits at uOttaHack!
            </motion.p>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ValueSection;
