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
interface ValueSection {}
const ValueSection: React.FC<ValueSection> = () => {
  return (
    <main className=" flex  relative z-1">
      <div className="relative h-full pt-[40%] w-[100vw]">
        <div className="absolute top-[70%] z-[1] w-[100%]">
          <Waves />
        </div>

        <div className="absolute top-[190%]  h-full  z-[1] w-[100%]">
          <div className="absolute z-[1] w-[100%]">
            <Blobs />
          </div>

          <motion.div
            animate={{
              y: [0, -20, 0], // Moves up by 20px and back down
            }}
            transition={{
              duration: 5, // Duration of one complete float cycle
              repeat: Infinity, // Repeat infinitely
              ease: "easeInOut", // Smooth easing
            }}
            className="  absolute z-[2] -top-[15%] left-[15%] w-[30%]  "
          >
            <Stem className=" " />
          </motion.div>

          <motion.div
            animate={{
              y: [0, -20, 0], // Moves up by 20px and back down
            }}
            transition={{
              duration: 8, // Duration of one complete float cycle
              repeat: Infinity, // Repeat infinitely
              ease: "easeInOut", // Smooth easing
            }}
            className="  absolute z-[2]  top-[25%] right-[15%] w-[30%]  "
          >
            <Tabaret className=" " />
          </motion.div>
        </div>
        <div className="realitve z-[10] flex flex-col  w-full  items-center">
          <div className="  realitve z-[10] top-0 w-[20%]  ">
            <OurValues className="realitve " />
          </div>
          <div className="relative w-full  z-10 text-[#E6DAFF] p-[10%]  font-medium font-urbanist leading-[2] text-[2vw]">
            {/* Blurred / Glow Layer */}
            <p
              className="absolute  blur-lg opacity-50 text-[#E6DAFF] z-[9]"
              aria-hidden="true"
            >
              Our mission is to empower students to comfortably explore their
              passion for technology and entrepreneurship, through building a
              community of like-minded individuals who innovate and disrupt the
              worlds of business and technology.
            </p>

            {/* Sharp, Clear Layer */}
            <p className="absolute z-[10]">
              Our mission is to empower students to comfortably explore their
              passion for technology and entrepreneurship, through building a
              community of like-minded individuals who innovate and disrupt the
              worlds of business and technology.
            </p>
          </div>
        </div>
        <div className="absolute z-[10] pt-[10%] gap-x-[10%] flex justify-center items-center">
          <motion.div
            initial="hidden"
            whileHover="visible"
            className="w-[20%] p-[1%] h-[28vw] rounded-xl backdrop-blur-2xl overflow-hidden relative group"
            style={{
              background:
                "linear-gradient(207deg, rgba(215, 215, 255, 0.20) 0.68%, rgba(59, 37, 74, 0.20) 133.85%)",
            }}
            variants={{
              hidden: { height: "28vw" },
              visible: { height: "40vw" },
            }}
            transition={{ duration: 0.5 }}
          >
            <Image src={PeopleImage1} alt="" className="rounded" />
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
                <Cube />
              </motion.div>

              {/* Text */}
              <motion.p
                className="text-[#00E0FF] w-[0%] text-[1.6vw] overflow-hidden whitespace-nowrap"
                style={{ display: "inline-block" }} // Ensures inline expansion
                variants={{
                  hidden: { width: "0%", opacity: 0 }, // Text hidden initially
                  visible: { width: "100%", opacity: 1 }, // Text appears and aligns
                }}
                transition={{ duration: 1 }}
              >
                Community
              </motion.p>
            </div>
            <motion.p
              className="text-[#F2E1FF] w-[100%] text-[1.2vw]   "
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
            initial="hidden"
            whileHover="visible"
            className="w-[20%] p-[1%] h-[28vw] rounded-xl backdrop-blur-2xl overflow-hidden relative group"
            style={{
              background:
                "linear-gradient(207deg, rgba(215, 215, 255, 0.20) 0.68%, rgba(59, 37, 74, 0.20) 133.85%)",
            }}
            variants={{
              hidden: { height: "28vw" },
              visible: { height: "40vw" },
            }}
            transition={{ duration: 0.5 }}
          >
            <Image src={PeopleImage2} alt="" className="rounded" />
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
                <Planet />
              </motion.div>

              {/* Text */}
              <motion.p
                className="text-[#00E0FF] w-[0%] text-[1.6vw] overflow-hidden whitespace-nowrap"
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
              className="text-[#F2E1FF] w-[100%] text-[1.2vw]  "
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

          <motion.div
            initial="hidden"
            whileHover="visible"
            className="w-[20%] p-[1%] h-[28vw] rounded-xl backdrop-blur-2xl overflow-hidden relative group"
            style={{
              background:
                "linear-gradient(207deg, rgba(215, 215, 255, 0.20) 0.68%, rgba(59, 37, 74, 0.20) 133.85%)",
            }}
            variants={{
              hidden: { height: "28vw" },
              visible: { height: "40vw" },
            }}
            transition={{ duration: 0.5 }}
          >
            <Image src={PeopleImage3} alt="" className="rounded" />
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
                <Rocket />
              </motion.div>

              {/* Text */}
              <motion.p
                className="text-[#00E0FF] w-[0%] text-[1.2vw] overflow-hidden whitespace-nowrap"
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
              className="text-[#F2E1FF] w-[100%] text-[1.2vw]  "
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
