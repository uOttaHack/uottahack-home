import DiveInto from "@/app/assets/words/dive_into_uottahack.svg";
interface RecapSection {}
import Blobs from "@/app/assets/recapblobs.svg";
import UottaHack6 from "@/app/assets/Uottahack6reacp.png";
import Image from "next/image";
import RockPlatform from "@/app/assets/rock platform.svg";
import { inherits } from "util";
const RecapSection: React.FC<RecapSection> = () => {
  return (
    <main className="h-auto flex  relative z-1">
      <div className="relative h-full w-[100vw]">
        <div className="absolute top-0 z-[1] w-[100%]">
          <Blobs />
        </div>
        <div className="realitve z-2 flex ">
          <div className="  top-0 w-[40%] pl-[10%]">
            <DiveInto className="realitve " />
          </div>
        </div>
        <div className="flex w-full relative z-[2]   ">
          <div className="video w-[60%] pl-[5%] pr-[5%] pt-[2%]   group h-auto relative">
            {/* Image Container */}
            <div
              className="relative w-full overflow-hidden rounded-lg h-auto"
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
            <div className=" absolute top-[90%] w-[50%]">
              <RockPlatform />
            </div>
          </div>
          <div className="relative w-[40%] pt-[10%] pr-[5%] z-10 text-[#E6DAFF] pl-[1%]   font-medium font-urbanist leading-[2] text-[2vw]">
            {/* Blurred / Glow Layer */}
            <p
              className="absolute  blur-lg opacity-50 text-[#E6DAFF] z-[9]"
              aria-hidden="true"
            >
              Over the past six years, our hackathon event has brought the
              community together to connect students with each other, to
              employers & opportunities, and solve real-world challenges.
            </p>

            {/* Sharp, Clear Layer */}
            <p className="absolute z-[10]">
              Over the past six years, our hackathon event has brought the
              community together to connect students with each other, to
              employers & opportunities, and solve real-world challenges.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RecapSection;
