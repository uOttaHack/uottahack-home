import BG from "@/app/assets/PastSponsorsbg.svg";
import styles from "@/app/styles/pastsponsor.module.css";

interface PastSponsor {}

const PastSponsor: React.FC<PastSponsor> = () => {
  return (
    <main className="min-h-screen flex faq  relative z-1">
      <div className="relative h-full pt-[120%] w-[100vw]">
        <div className="absolute top-[100%] z-[1] w-[100%]">
          <BG />
        </div>
        <div className="relative flex w-full justify-center items-center top-[100%] text-3xl md:text-6xl">
          <div className="relative  flex w-full justify-center items-center font-harabara font-black w-full">
            <span className={`${styles.gradienttext} text-[4.5rem] `}>
              Past Sponsors
            </span>
            <span className={`${styles.gradienttext} text-[4.5rem]`}>
              Past Sponsors
            </span>
            <span className={`${styles.sharpWhiteText} text-[4.5rem]`}>
              Past Sponsors
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PastSponsor;
