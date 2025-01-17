import BG from "@/app/assets/PastSponsorsbg.svg";
import styles from "@/app/styles/pastsponsor.module.css";

// importing images start

import Accenture from "@/app/assets/sponsor/accenture.svg";
import ADGA from "@/app/assets/sponsor/ADGA.svg";
import BiteSite from "@/app/assets/sponsor/BiteSite.svg";
import Bloomberg from "@/app/assets/sponsor/Bloomberg.svg";
import CDW from "@/app/assets/sponsor/cdw.svg";
import Ciena from "@/app/assets/sponsor/Ciena.svg";
import CSTLogo from "@/app/assets/sponsor/CST logo.svg";
import Deloitte from "@/app/assets/sponsor/deloitte.svg";
import DRDC from "@/app/assets/sponsor/drdc.svg";
import GitHub from "@/app/assets/sponsor/Github.svg";
import Google from "@/app/assets/sponsor/Google.svg";
import GovernmentOfCanada from "@/app/assets/sponsor/goverment_of_canada.svg";
import Hub350 from "@/app/assets/sponsor/hub350.svg";
import KanataNorth from "@/app/assets/sponsor/Kanatanorth.svg";
import Kinaxis from "@/app/assets/sponsor/Kinaxis.svg";
import Klipfolio from "@/app/assets/sponsor/Klipfolio.svg";
import Microsoft from "@/app/assets/sponsor/Microsoft.svg";
import MLH from "@/app/assets/sponsor/MLH.svg";
import Momentive from "@/app/assets/sponsor/momentive.svg";
import MorganStanley from "@/app/assets/sponsor/morgan stanley.svg";
import Neo from "@/app/assets/sponsor/neo.svg";
import Noibu from "@/app/assets/sponsor/noibu.svg";
import Nokia from "@/app/assets/sponsor/Nokia.svg";
import OnePassword from "@/app/assets/sponsor/onePassword.svg";
import Solace from "@/app/assets/sponsor/Solace.svg";
import Sunlife from "@/app/assets/sponsor/Sunlife.svg";
import TrendMicro from "@/app/assets/sponsor/TrendMicro.svg";
import Twilio from "@/app/assets/sponsor/twilio.svg";
import UOttawa from "@/app/assets/sponsor/uOttawa.svg";
import Phreesia from "@/app/assets/sponsor/phreesia.svg";
import MarchNetwork from "@/app/assets/sponsor/march network.svg";
import BankOfCanada from "@/app/assets/sponsor/bank_of_canada.svg";
import CENGN from "@/app/assets/sponsor/cengn.svg";
import Balsamiq from "@/app/assets/sponsor/balsamiq.svg";
import Innovapost from "@/app/assets/sponsor/innovapost.svg";
import Fitbit from "@/app/assets/sponsor/fitbit.svg";
//importing images end
import AOS from "aos";
import "aos/dist/aos.css";
interface PastSponsor {}

const PastSponsor: React.FC<PastSponsor> = () => {
  return (
    <main className="flex faq min-h-screen relative z-1">
      <div className="relative h-full pt-[400%] md:pt-[110%] w-[100vw]">
        <div className="relative h-full  w-full">
          <div className="absolute  z-[1]  w-[100%]">
            {" "}
            <BG className="" />
          </div>
        </div>
        <div className="relative flex w-full justify-center items-center top-[100%] text-3xl md:text-6xl">
          <div className="relative  flex w-full justify-center items-center font-harabara font-black w-full">
            <span
              className={`${styles.gradienttext} text-5xl md:text-[4.5vw] `}
            >
              Past Sponsors
            </span>
            <span className={`${styles.gradienttext} text-5xl md:text-[4.5vw]`}>
              Past Sponsors
            </span>
            <span
              className={`${styles.sharpWhiteText} text-5xl md:text-[4.5vw]`}
              id="sponsors"
            >
              Past Sponsors
            </span>
          </div>
        </div>
        <div>
          <div className="relative z-[10] flex pt-[10%] space-y-[0.5%] justify-center items-center md:pl-[10%] md:pr-[10%] pl-[3%] pr-[3%]  w-full flex-col">
            <div
              className="flex flex-row w-full h-[8vw] gap-x-[1%] justify-center items-center flex "
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="w-[50%] h-full bg-[#8E8CB5]/60 backdrop-blur-sm flex overflow-hidden justify-center   ">
                <div className=" w-[50%] items-center h-full flex">
                  <Solace className="w-full h-full" />
                </div>
              </div>
              <div className="w-[25%] h-full bg-[#8E8CB5]/60 backdrop-blur-sm  flex overflow-hidden justify-center">
                <Innovapost className="w-full h-full" />
              </div>
              <div className="w-[25%] h-full bg-[#8E8CB5]/60 backdrop-blur-sm  flex overflow-hidden justify-center">
                {" "}
                <div className="w-[50%]  items-center flex h-full">
                  <Nokia className="w-full h-full" />
                </div>
              </div>
            </div>
            <div
              className="flex flex-row w-full h-[8vw] gap-x-[1%]  justify-center items-center flex "
              data-aos="fade-up"
              data-aos-delay="20"
            >
              <div className="w-[30%] h-full bg-[#8E8CB5]/60 backdrop-blur-sm  flex overflow-hidden justify-center">
                <div className="w-[50%]  items-center flex h-full">
                  <Google className="w-full h-full" />
                </div>
              </div>
              <div className="w-[25%] h-full bg-[#8E8CB5]/60 backdrop-blur-sm flex overflow-hidden justify-center ">
                <div className="w-[50%]  items-center flex h-full">
                  <Microsoft className="w-full h-full" />
                </div>
              </div>
              <div className="w-[45%] h-full bg-[#8E8CB5]/60 backdrop-blur-sm  flex overflow-hidden justify-center ">
                <div className="w-[50%]  items-center flex h-full">
                  <Ciena className="w-full h-full" />
                </div>
              </div>
            </div>
            <div
              className="flex flex-row w-full h-[8vw] gap-x-[1%] justify-center items-center flex "
              data-aos="fade-up"
              data-aos-delay="40"
            >
              <div className="w-[25%] h-full bg-[#8E8CB5]/60 backdrop-blur-sm  flex overflow-hidden justify-center">
                {" "}
                <div className="w-[50%]  items-center flex h-full">
                  <Deloitte className="w-full h-full" />
                </div>
              </div>
              <div className="w-[25%] h-full bg-[#8E8CB5]/60 backdrop-blur-sm  flex overflow-hidden justify-center">
                {" "}
                <div className="w-[50%]  items-center flex h-full">
                  <Bloomberg className="w-full h-full" />
                </div>
              </div>
              <div className="w-[50%] h-full bg-[#8E8CB5]/60 backdrop-blur-sm  flex overflow-hidden justify-center">
                <div className="w-[50%]  items-center flex h-full">
                  <Accenture className="w-full h-full" />
                </div>
              </div>
            </div>
            <div
              className="flex flex-row w-full h-[8vw] gap-x-[1%]  justify-center items-center flex "
              data-aos="fade-up"
              data-aos-delay="60"
            >
              <div className="w-[50%] h-full bg-[#8E8CB5]/60 backdrop-blur-sm flex overflow-hidden justify-center">
                {" "}
                <div className="w-[50%]  items-center flex h-full">
                  <Momentive className="w-full h-full" />
                </div>
              </div>
              <div className="w-[25%] h-full  bg-[#8E8CB5]/60 backdrop-blur-sm  flex overflow-hidden justify-center">
                {" "}
                <div className="w-[50%]  items-center flex h-full">
                  <Sunlife className="w-full h-full" />
                </div>
              </div>
              <div className="w-[25%] h-full  bg-[#8E8CB5]/60 backdrop-blur-sm  flex overflow-hidden justify-center">
                <div className="w-[50%]  items-center flex h-full">
                  <GitHub className="w-full h-full" />
                </div>
              </div>
            </div>
            <div
              className="flex flex-row w-full h-[8vw] gap-x-[1%]  justify-center items-center flex "
              data-aos="fade-up"
              data-aos-delay="80"
            >
              <div className="w-2/3 h-full bg-[#8E8CB5]/60 backdrop-blur-sm flex overflow-hidden justify-center">
                <div className="w-[50%]  items-center flex h-full">
                  <Noibu className="w-full h-full" />
                </div>
              </div>
              <div className="w-2/3 h-full  bg-[#8E8CB5]/60 backdrop-blur-sm  flex overflow-hidden justify-center">
                <div className="w-[50%]  items-center flex h-full">
                  <TrendMicro className="w-full h-full" />
                </div>
              </div>
              <div className="w-2/3 h-full  bg-[#8E8CB5]/60 backdrop-blur-sm  flex overflow-hidden justify-center">
                <div className="w-[50%]  items-center flex h-full">
                  <CSTLogo className="w-full h-full" />
                </div>
              </div>
            </div>
            <div
              className="flex flex-row w-full h-[8vw] gap-x-[1%]  justify-center items-center flex "
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-[30%] h-full bg-[#8E8CB5]/60 backdrop-blur-sm flex overflow-hidden justify-center">
                {" "}
                <div className="w-[40%]  items-center flex h-full">
                  <DRDC className="w-full h-full" />
                </div>
              </div>
              <div className="w-[20%] h-full  bg-[#8E8CB5]/60 backdrop-blur-sm  flex overflow-hidden justify-center">
                {" "}
                <div className="w-[80%]  items-center flex h-full">
                  <GovernmentOfCanada className="w-full h-full" />
                </div>
              </div>
              <div className="w-[50%] h-full  bg-[#8E8CB5]/60 backdrop-blur-sm flex overflow-hidden justify-center ">
                {" "}
                <div className="w-[50%]  items-center flex h-full">
                  <Neo className="w-full h-full" />
                </div>
              </div>
            </div>
            <div
              className="flex flex-row w-full h-[8vw] gap-x-[1%]  justify-center items-center flex "
              data-aos="fade-up"
              data-aos-delay="120"
            >
              <div className="w-[15%] h-full bg-[#8E8CB5]/60 backdrop-blur-sm flex overflow-hidden justify-center">
                {" "}
                <div className="w-[50%]  items-center flex h-full">
                  <Twilio className="w-full h-full" />
                </div>
              </div>
              <div className="w-[15%] h-full  bg-[#8E8CB5]/60 backdrop-blur-sm flex overflow-hidden justify-center ">
                {" "}
                <div className="w-[50%]  items-center flex h-full">
                  <MorganStanley className="w-full h-full" />
                </div>
              </div>
              <div className="w-[70%] h-full  bg-[#8E8CB5]/60 backdrop-blur-sm  flex overflow-hidden justify-center">
                {" "}
                <div className="w-[50%]  items-center flex h-full">
                  <Klipfolio className="w-full h-full" />
                </div>
              </div>
            </div>
            <div
              className="flex flex-row w-full h-[8vw] gap-x-[1%] justify-center items-center flex "
              data-aos="fade-up"
              data-aos-delay="140"
            >
              <div className="w-[50%] h-full bg-[#8E8CB5]/60 backdrop-blur-sm  flex overflow-hidden justify-center">
                {" "}
                <div className="w-[50%]  items-center flex h-full">
                  <Kinaxis className="w-full h-full" />
                </div>
              </div>
              <div className="w-[25%] h-full bg-[#8E8CB5]/60 backdrop-blur-sm  flex overflow-hidden justify-center">
                {" "}
                <div className="w-[40%]  items-center flex h-full">
                  <CDW className="w-full h-full" />
                </div>
              </div>
              <div className="w-[25%] h-full bg-[#8E8CB5]/60 backdrop-blur-sm  flex overflow-hidden justify-center">
                {" "}
                <div className="w-[50%]  items-center flex h-full">
                  <ADGA className="w-full h-full" />
                </div>
              </div>
            </div>
            <div
              className="flex flex-row w-full h-[8vw] gap-x-[1%]  justify-center items-center flex "
              data-aos="fade-up"
              data-aos-delay="160"
            >
              <div className="w-[35%] h-full bg-[#8E8CB5]/60 backdrop-blur-sm flex overflow-hidden justify-center">
                {" "}
                <div className="w-[50%]  items-center flex h-full">
                  <Hub350 className="w-full h-full" />
                </div>
              </div>
              <div className="w-[15%] h-full  bg-[#8E8CB5]/60 backdrop-blur-sm  flex overflow-hidden justify-center">
                {" "}
                <div className="w-[50%]  items-center flex h-full">
                  <KanataNorth className="w-full h-full" />
                </div>
              </div>
              <div className="w-[50%] h-full  bg-[#8E8CB5]/60 backdrop-blur-sm flex overflow-hidden justify-center ">
                {" "}
                <div className="w-[40%]  items-center flex h-full">
                  <CENGN className="w-full h-full" />
                </div>
              </div>
            </div>
            <div
              className="flex flex-row w-full h-[8vw] gap-x-[1%]  justify-center items-center flex "
              data-aos="fade-up"
              data-aos-delay="180"
            >
              <div className="w-[15%] h-full bg-[#8E8CB5]/60 backdrop-blur-sm flex overflow-hidden justify-center">
                <div className="w-[70%]  items-center flex h-full">
                  <Phreesia className="w-full h-full" />
                </div>
              </div>
              <div className="w-[15%] h-full  bg-[#8E8CB5]/60 backdrop-blur-sm  flex overflow-hidden justify-center">
                <div className="w-[50%]  items-center flex h-full">
                  <MarchNetwork className="w-full h-full" />
                </div>
              </div>
              <div className="w-[70%] h-full  bg-[#8E8CB5]/60 backdrop-blur-sm  flex overflow-hidden justify-center">
                <div className="w-[10%]  items-center flex h-full">
                  <BankOfCanada className="w-full h-full" />
                </div>
              </div>
            </div>
            <div
              className="flex flex-row w-full h-[8vw] gap-x-[1%] justify-center items-center flex "
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-[50%] h-full bg-[#8E8CB5]/60 backdrop-blur-sm  flex overflow-hidden justify-center">
                {" "}
                <div className="w-[50%]  items-center flex h-full">
                  <OnePassword className="w-full h-full" />
                </div>
              </div>
              <div className="w-[25%] h-full bg-[#8E8CB5]/60 backdrop-blur-sm flex overflow-hidden justify-center ">
                {" "}
                <div className="w-[50%]  items-center flex h-full">
                  <Balsamiq className="w-full h-full" />
                </div>
              </div>
              <div className="w-[25%] h-full bg-[#8E8CB5]/60 backdrop-blur-sm  flex overflow-hidden justify-center">
                {" "}
                <div className="w-[50%]  items-center flex h-full">
                  <Fitbit className="w-full h-full" />
                </div>
              </div>
            </div>
            <div
              className="flex flex-row w-full h-[8vw] gap-x-[1%] justify-center items-center flex "
              data-aos="fade-up"
              data-aos-delay="220"
            >
              <div className="w-[100%] h-full bg-[#8E8CB5]/60 backdrop-blur-sm  flex overflow-hidden justify-center">
                {" "}
                <div className="w-[50%]  items-center flex h-full">
                  <BiteSite className="w-full h-full" />
                </div>
              </div>
            </div>
            <div className=" relative flex w-full justify-center items-center md:pt-[5%] pt-[10%] pb-[5%] text-3xl md:text-6xl">
              <div className="  relative flex w-full justify-center items-center font-harabara font-black w-full">
                <span
                  className={`${styles.gradienttext} text-3xl md:text-[2.5vw] `}
                >
                  Our Partners
                </span>
                <span
                  className={`${styles.gradienttext} text-3xl md:text-[2.5vw]`}
                >
                  Our Partners
                </span>
                <span
                  className={`${styles.sharpWhiteText} text-3xl md:text-[2.5vw]`}
                >
                  Our Partners
                </span>
              </div>
            </div>
            <div className=" flex flex-row w-full h-[8vw] gap-x-[1%]  justify-center items-center flex ">
              <div className="w-2/3 h-full bg-[#8E8CB5]/60 backdrop-blur-sm  flex overflow-hidden justify-center">
                {" "}
                <div className="w-[50%]  items-center flex h-full">
                  <MLH className="w-full h-full" />
                </div>
              </div>
              <div className="w-2/3 h-full bg-[#8E8CB5]/60 backdrop-blur-sm  flex overflow-hidden justify-center">
                {" "}
                <div className="w-[50%]  items-center flex h-full">
                  <UOttawa className="w-full h-full" />
                </div>
              </div>
              <div className="w-2/3 h-full bg-[#8E8CB5]/60 backdrop-blur-sm  flex overflow-hidden justify-center">
                {" "}
                <div className="w-[50%]  items-center flex h-full">
                  <UOttawa className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PastSponsor;
