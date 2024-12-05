interface FooterSection {}

import styles from "@/app/styles/faq.module.css";
import Youtube from "@/app/assets/logo/youtube.svg";
import Linkedin from "@/app/assets/logo/linkedin.svg";
import Instagram from "@/app/assets/logo/instagram.svg";
import Discord from "@/app/assets/logo/discord.svg";
import Logo from "@/app/assets/footer_logo.svg";
import Uottahack from "@/app/assets/uottahack_footer.svg";
import Tiktok from "@/app/assets/logo/tiktok.svg";

const FooterSection: React.FC<FooterSection> = () => {
  return (
    <main className="flex  w-[100vw] overflow-hidden  relative z-1 " id="">
      <div className="pt-[10%] w-[100vw] ">
        <div className="w-full flex flex-col w-[100vw] justify-center items-center flex w-full ">
          <div className="w-[90%] h-[0.1vh]   bg-[#938D8D]"></div>
          <div className="flex flex-col w-full md:pl-[10%] pt-[0.5%] pb-[1%]">
            <div className="flex md:flex-row flex-col justify-center w-full  items-center">
              <div className="relative  w-full flex flex-col  justify-center items-center md:justify-start md:items-start text-3xl md:text-6xl">
                <div className="w-[70%] md:w-[50%]">
                  <Uottahack />
                </div>
                <p className="text-[1rem]  justify-center md:justify-start flex text-white w-full">
                  The capital of Canada’s largest hackathon.
                </p>
              </div>
              <div className="w-full pt-[10%] pb-[10%]  flex justify-center md:p-0 ">
                <div className="grid md:grid-cols-2 grid-cols-1 md:text-[0.7vw] w-1/2 justify-self-center flex underline gap-y-[10%] md:gap-y-[40%] underline-offset-4 md:grid-cols-2  ">
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
              <div className="justify-center pt-[10%] md:pt-0 flex w-full items-center gap-4">
                <div className="md:w-[70%] w-[90%] flex ring-2 p-1 rounded-full">
                  <input
                    type="email"
                    id="email"
                    data-gramm="false"
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
          <div className="flex w-full justify-center items-center md:gap-x-[2%] gap-x-[5%] pt-[10%] md:pt-[1%] flex-row">
            <div className="w-[5%] md:w-[1.5%]">
              <Linkedin />
            </div>
            <div className="w-[5%] md:w-[1.5%]">
              <Instagram />
            </div>
            <div className="w-[5%] md:w-[1.5%]">
              <Youtube />
            </div>
            <div className="w-[5%] md:w-[1.5%]">
              <Tiktok />
            </div>
            <div className="w-[5%] md:w-[1.5%]">
              <Discord />
            </div>
          </div>
          <p className="text-[#00E0FF] pt-[0.5%] ">
            {" "}
            Copyright. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col w-full overlfow-hidden pt-[10%] md:pt-[1%] pb-[1%]">
          <div className="relative flex flex-col w-full justify-center items-center  text-3xl md:text-6xl">
            <div className="relative  flex w-full justify-center items-center  font-harabara font-black w-full">
              <span
                className={`${styles.gradienttext} md:text-[0.8vw] text-sm`}
              >
                Made with 🤍 by the uOttaHack Team
              </span>
              <span
                className={`${styles.sharpWhiteText} md:text-[0.8vw] text-sm`}
              >
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
