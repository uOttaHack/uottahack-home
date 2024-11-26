import Waves from "@/app/assets/faq_waves.svg";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Star from "@/app/assets/Vector.svg";
import styles from "@/app/styles/faq.module.css";

interface FaqSection {}

const FaqSection: React.FC<FaqSection> = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const column1 = [
    {
      question: "What is uOttaHack?",
      answer:
        "uOttaHack is an MLH hackathon hosted by University of Ottawa students! It's a sprint-like event where students from all across North America will come to turn their ideas into real projects through hardware and software. However, they only have 36 hours to accomplish their goal... Hackers will receive mentorship, learn about new job opportunities, get some cool swag, and have fun along the way!",
    },
    {
      question: "Will uOttaHack happen in person or virtually?",
      answer:
        "The hackathon will be hosted on the beautiful campus of the University of Ottawa and will take place from February 10th - 12th, 2023. Don’t worry about getting lost! We'll have plenty of signage and volunteers around campus to guide you. We can't wait to see you there!",
    },
    {
      question: "Who can participate?",
      answer:
        "Any students, at any skill level, from any field of study are welcome! The only thing you need is an interest in building something amazing and the motivation to learn!",
    },
    {
      question: "What if I’ve never been to a hackathon before?",
      answer:
        "There's a first time for everything, right? Hackathons are all about learning new things, meeting people, and having an amazing experience. We'll have plenty of workshops and mentors during the event to help you out! At our last iteration, 30% of our participants were first-time hackers!",
    },
    {
      question: "Can high school students come?",
      answer:
        "Absolutely! We highly encourage high school students to apply! Minors attending will be asked to have waivers signed by their parents/guardians.",
    },
    {
      question: "Can I participate as part of a team?",
      answer:
        "Yes! Hacking can be done solo, or in a team of up to four participants",
    },
  ];

  const column2 = [
    {
      question: "What is Major League Hacking?",
      answer:
        "Major League Hacking is the official student hackathon league in North America & Europe. They work with over 200 member events and empower over 70,000 students every year.",
    },
    {
      question: "Is there a code of conduct?",
      answer:
        "Yes there is. The organizers care deeply about everyone's experience and ensuring they get to hack in a comfortable and safe environment. You can find it here.",
    },
    { question: "I don’t live in Ottawa, can I still go?", answer: "" },
    {
      question: "Can I start working on a project before the event?",
      answer: "",
    },
    {
      question: "How much will it cost me?",
      answer:
        "uOttaHack has no admission fees and all meals and benefits during the hackathon are free. Did we also mention that each hacker will be getting an amazing swag bag?",
    },
    {
      question: "Sounds great, but what do I win?",
      answer:
        "We started uOttaHack to empower students in creating innovative, fun, and awesome projects, without the stress of a regular semester's weekend. The biggest rewards you will get are the friends you make that will last a lifetime and an experience you won't forget. But, with that said - you'll have the chance to demo to our stellar panel of judges and the top teams will be awarded sweet prizes! There will also be smaller prizes for specific categories and some given out by our sponsors! In the past, hackers have won DJI drones, Nintendo Switches, and Fitbit smart watches!",
    },
  ];

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <main className=" flex faq  relative z-1">
      <div className="relative h-full pt-[20%] w-[100vw]">
        <div className="absolute top-[5%] z-[1] w-[100%]">
          <Waves />
        </div>
        <div className="relative flex flex-col w-full justify-center items-center  text-3xl md:text-6xl">
          <div className="relative  flex w-full justify-center items-center mb-[10%] font-harabara font-black w-full">
            <span
              className={`${styles.gradienttext} text-6xl md:text-[4.5vw] `}
            >
              FAQ
            </span>
            <span className={`${styles.gradienttext} text-6xl md:text-[4.5vw]`}>
              FAQ
            </span>
            <span
              className={`${styles.sharpWhiteText} text-6xl  md:text-[4.5vw]`}
            >
              FAQ
            </span>
          </div>
          <div className="w-full flex justify-center pl-[10%]" id="faq">
            <div className="relaitve grid grid-cols-1 md:grid-cols-2 z-[10] w-full md:w-[75%] md:gap-[20%]   flex font-urbanist">
              {/* First Column */}
              <div className="space-y-[5%]">
                {column1.map((faq, index) => (
                  <div key={index} className={` pb-[5%] text-[#E6DAFF] `}>
                    {/* Question */}
                    <div
                      className="relative flex items-center justify-start md:gap-x-[10%] cursor-pointer"
                      onClick={() => toggleAnswer(index)}
                    >
                      <span
                        className={`absolute md:-left-[5vw] -left-[8vw] w-[6%] ${
                          activeIndex === index
                            ? "scale-[1.5] rotate-45"
                            : "scale-[1] "
                        } transition-transform duration-300 `}
                      >
                        <Star className="text-[#E6DAFF]" />
                      </span>

                      <span className="md:text-[1.4vw] text-lg font-bold">
                        {faq.question}
                      </span>
                    </div>

                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className=" w-full mt-[4%] md:text-[1vw] text-sm pr-[3%] md:pr-0 text-[#D5D5D5] leading-7">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Second Column */}
              <div className="space-y-[5%] flex flex-col ">
                {column2.map((faq, index) => (
                  <div
                    key={index}
                    className={` pb-[5%] ${
                      activeIndex === index + column1.length
                        ? "text-[#E6DAFF]"
                        : "text-[#E6DAFF]"
                    }`}
                  >
                    {/* Question */}
                    <div
                      className="relative flex items-center justify-start gap-x-[10%] cursor-pointer"
                      onClick={() => toggleAnswer(index + column1.length)}
                    >
                      <span
                        className={`absolute md:-left-[5vw] -left-[8vw] w-[6%] ${
                          activeIndex === index + column1.length
                            ? "scale-[1.5] rotate-45"
                            : "scale-[1] "
                        } transition-transform duration-300 `}
                      >
                        <Star className="text-[#E6DAFF]" />
                      </span>

                      <span className="md:text-[1.4vw] text-lg font-bold">
                        {faq.question}
                      </span>
                    </div>

                    <AnimatePresence>
                      {activeIndex === index + column1.length && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className=" w-full mt-[4%] md:text-[1vw] text-sm pr-[3%] md:pr-0 text-[#D5D5D5] leading-7">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FaqSection;
