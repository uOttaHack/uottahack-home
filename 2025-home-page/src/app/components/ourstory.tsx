import Ourstory from "@/app/assets/words/Our Story.svg";
import Blobs_left from "@/app/assets/pinkblob_left.svg";
import Blobs_right from "@/app/assets/pinkblob_right.svg";

import people from "@/app/assets/people/image1.avif";
import styles from "@/app/styles/ourstory.module.css";
interface OurStory {}

const OurStory: React.FC<OurStory> = () => {
  return (
    <main className=" flex our-story w-full relative z-1">
      <div className="relative h-full pt-[110%] w-[100vw]">
        <div className="relative  z-[1] left-[10%] w-[20%]">
          <Ourstory />
        </div>
        <div className="absolute top-[130%] z-[1] -left-[20%] w-[70%]">
          <Blobs_left />
        </div>
        <div className="absolute top-[100%] right-0 z-[1] w-[70%]">
          <Blobs_right />
        </div>
        <div className="absolute z-[10]">
          <div className=" z-[10] flex flex-row w-full">
            <div className="w-[50%] pl-[10%] text-[#F2E1FF] pl-[1%] pt-10 font-inter font-medium leading-[2] text-[1.3vw] ">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="w-full  pl-[10%] pr-[15%] overflow-hidden">
              <div
                className={`w-full h-[30vw]  pb-[3%] p-[1%] ${styles.window} rounded-xl`}
              >
                <div className="items-center justify-end flex w-full p-[2%] gap-x-[2vw]">
                  {/* Box 1 */}
                  <div className="outline outline-[5px] outline-white w-[1vw] h-[0vw]"></div>

                  {/* Box 2 */}
                  <div className="outline outline-[5px] outline-white w-[1vw] h-[1vw]"></div>

                  {/* X Shape */}
                  <div className="relative w-[2vw] ">
                    {/* Line 1 */}
                    <div className="absolute bottom-[50%] w-full h-[0.5vw] bg-white rotate-45"></div>

                    {/* Line 2 */}
                    <div className="absolute bottom-[50%] w-full h-[0.5vw] bg-white -rotate-45"></div>
                  </div>
                </div>
                <div className="w-full h-full overflow-hidden pb-[5%]">
                  <img
                    src={people.src}
                    className="object-cover rounded-xl w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" absolute z-[10] top-[240%] flex flex-row ">
            <div className="w-full  pl-[5%] pr-[10%] overflow-hidden">
              <div
                className={`w-[100%] h-[30vw]  pb-[3%] p-[1%] ${styles.window2} rounded-xl`}
              >
                <div className="items-center justify-end flex w-full p-[2%] gap-x-[2vw]">
                  {/* Box 1 */}
                  <div className="outline outline-[5px] outline-white w-[1vw] h-[0vw]"></div>

                  {/* Box 2 */}
                  <div className="outline outline-[5px] outline-white w-[1vw] h-[1vw]"></div>

                  {/* X Shape */}
                  <div className="relative w-[2vw] ">
                    {/* Line 1 */}
                    <div className="absolute bottom-[50%] w-full h-[0.5vw] bg-white rotate-45"></div>

                    {/* Line 2 */}
                    <div className="absolute bottom-[50%] w-full h-[0.5vw] bg-white -rotate-45"></div>
                  </div>
                </div>
                <div className="w-full h-full overflow-hidden pb-[5%]">
                  <img
                    src={people.src}
                    className="object-cover rounded-xl w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div className="w-[50%] mr-[15%] text-[#F2E1FF]  pt-[5%] font-inter font-medium text-[1.3vw] ">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OurStory;
