import DiveInto from "@/app/assets/words/dive_into_uottahack.svg";
interface RecapSection {}
import Blobs from "@/app/assets/recapblobs.svg";
const RecapSection: React.FC<RecapSection> = () => {
  return (
    <main className="min-h-screen flex  relative z-1">
      <div className="relative h-full w-[100vw]">
        <div className="absolute top-0 z-[1] w-[100%]">
          <Blobs />
        </div>
        <div className="realitve z-2 flex ">
          <div className="  top-0 w-[40%] pl-[10%]">
            <DiveInto className="realitve " />
          </div>
        </div>
        <div className="flex w-full">
          <div className="video w-[70%]"></div>
          <div className="w-[30%] pt-[10%]     z-10 text-[#E6DAFF] pl-[1%] pt-10 font-inter font-medium leading-[2] text-[1.6vw] ">
            <p>
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
