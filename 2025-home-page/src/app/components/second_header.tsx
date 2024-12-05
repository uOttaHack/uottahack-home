import Logo from "@/app/assets/logo.svg";
import { useIsMobile } from "../hooks/useIsMobile";
import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface SecondHeader {}

const SecondHeader: React.FC<SecondHeader> = () => {
  const isMobile = useIsMobile();
  if (isMobile === undefined) {
    return null; // Or a loader, or fallback component
  }

  return (
    <main className="absolute md:bg-[#04081C] z-[100] w-full h-[8%] flex items-center overflow-hidden">
      {/* Logo on the Left */}
      <div className="absolute right-[50%] w-[10vw] h-full md:w-[4vw] ">
        <a href="/">
          {" "}
          <Logo className="" />
        </a>
      </div>

      {/* Centered Navigation Text */}
      {!isMobile ? (
        <div className="w-full flex h-full justify-start pl-[5%] font-inter text-xl items-center text-white font-bold ">
          <div className=" bg-violet-900/90 shadow-md shadow-violet-600 hover:shadow-violet-900  backdrop-blur-sm w-[3%]  rounded-sm h-[50%] group">
            {" "}
            <a
              href="/"
              className="w-full items-center flex justify-center h-full"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </a>
          </div>
        </div>
      ) : (
        <></>
      )}
    </main>
  );
};

export default SecondHeader;
