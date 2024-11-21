interface FooterSection {}

import styles from "@/app/styles/faq.module.css";
import Youtube from "@/app/assets/logo/youtube.svg";
import Linkedin from "@/app/assets/logo/linkedin.svg";
import Instagram from "@/app/assets/logo/instagram.svg";
import Discord from "@/app/assets/logo/discord.svg";
import Logo from "@/app/assets/footer_logo.svg";

import Tiktok from "@/app/assets/logo/tiktok.svg";

const FooterSection: React.FC<FooterSection> = () => {
  return (
    <main className="flex  w-[100vw] relative z-1" id="">
      <div className="pt-[10%] w-[100vw] ">
        <div className="w-full flex flex-col w-[100vw] justify-center items-center flex w-full ">
          <div className="w-[90%] h-[0.1vh]   bg-[#938D8D]"></div>
          <div className="flex flex-col w-full pl-[10%] pt-[1%] pb-[2%]">
            <div className="flex flex-row w-full  items-center">
              <div className="relative justify-self-start w-full flex flex-col  justify-start items-center  text-3xl md:text-6xl">
                <div className="relative  flex w-full justify-start items-center  font-harabara font-black w-full">
                  <span className={`${styles.gradienttext} text-[3vw]`}>
                    uOttaHack
                  </span>
                  <span className={`${styles.sharpWhiteText} text-[3vw]`}>
                    uOttaHack
                  </span>
                  <div className="left-[45%]  relative">
                    <Logo className="w-[5vw]  "></Logo>
                  </div>
                </div>
                <p className="text-[1vw]  text-white w-full">
                  The capital of Canada’s largest hackathon.
                </p>
              </div>
              <div className="w-full">
                <div className="grid grid-cols-1 md:text-[0.7vw] w-1/2 justify-self-center flex underline  underline-offset-4 md:grid-cols-2 gap-y-[100%] ">
                  <a
                    href="https://mlh.io/privacy"
                    className="text-center md:text-start text-white "
                  >
                    Privacy
                  </a>
                  <a
                    href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                    className="text-center md:text-start text-white "
                  >
                    Policy Code of Conduct
                  </a>
                  <a
                    href="https://github.com/uOttaHack"
                    className="text-center md:text-start text-white "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href="mailto:hi@uottahack.ca"
                    className="text-center md:text-start text-white "
                  >
                    Contact
                  </a>
                </div>
              </div>
              <div className="justify-self-center flex w-full items-center gap-4">
                <div className="w-[70%] flex ring-2 p-1 rounded-full">
                  <input
                    type="email"
                    id="email"
                    placeholder="example@domain.com"
                    className="w-full p-[3%] rounded-full bg-white/0 text-white placeholder-white focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="p-1 bg-blue-500 text-black w-[20%] bg-white rounded-full  "
                  >
                    ➢
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[90%] h-[0.1vh]  flex bg-[#938D8D]"></div>
          <div className="flex w-full justify-center items-center gap-x-[2%] pt-[2%] flex-row">
            <div className="w-[2%]">
              <Linkedin />
            </div>
            <div className="w-[2%]">
              <Instagram />
            </div>
            <div className="w-[2%]">
              <Youtube />
            </div>
            <div className="w-[2%]">
              <Tiktok />
            </div>
            <div className="w-[2%]">
              <Discord />
            </div>
          </div>
          <p className="text-[#00E0FF] pt-[1%] ">
            {" "}
            Copyright. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col w-full  pt-[3%] pb-[2%]">
          <div className="relative flex flex-col w-full justify-center items-center  text-3xl md:text-6xl">
            <div className="relative  flex w-full justify-center items-center  font-harabara font-black w-full">
              <span className={`${styles.gradienttext} text-[1vw]`}>
                Made with 🤍 by the uOttaHack Team
              </span>
              <span className={`${styles.sharpWhiteText} text-[1vw]`}>
                Made with 🤍 by the uOttaHack Team
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FooterSection;
