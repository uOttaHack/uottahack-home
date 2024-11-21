import Waves from "@/app/assets/faq_waves.svg";
interface FaqSection {}

import styles from "@/app/styles/faq.module.css";

const FaqSection: React.FC<FaqSection> = () => {
  return (
    <main className="min-h-screen flex faq  relative z-1">
      <div className="relative h-full pt-[140%] w-[100vw]">
        <div className="absolute top-[90%] z-[1] w-[100%]">
          <Waves />
        </div>
        <div className="relative flex w-full justify-center items-center top-[100%] text-3xl md:text-6xl">
          <div className="relative  flex w-full justify-center items-center font-harabara font-black w-full">
            <span className={`${styles.gradienttext} text-[4.5rem] `}>FAQ</span>
            <span className={`${styles.gradienttext} text-[4.5rem]`}>FAQ</span>
            <span className={`${styles.sharpWhiteText} text-[4.5rem]`}>
              FAQ
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FaqSection;
