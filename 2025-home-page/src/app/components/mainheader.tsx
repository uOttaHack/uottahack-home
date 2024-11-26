import Logo from "@/app/assets/logo.svg";
import { useIsMobile } from "../hooks/useIsMobile";
interface MainHeader {}

const MainHeader: React.FC<MainHeader> = () => {
  const isMobile = useIsMobile();
  if (isMobile === undefined) {
    return null; // Or a loader, or fallback component
  }

  return (
    <main className="absolute md:bg-[#04081C] z-[100] w-full inset-0 h-[10%] flex items-center overflow-hidden">
      {/* Logo on the Left */}
      <div className="absolute left-10 w-[10vw] md:w-[4vw] ">
        <Logo className="" />
      </div>

      {/* Centered Navigation Text */}
      {!isMobile ? (
        <div className="w-full flex justify-center font-inter text-xl items-center text-white font-bold gap-x-[5%]">
          <div>About</div>
          <div>
            <a href="#sponsors">Sponsors</a>
          </div>
          <div>
            <a href="#faq">FAQ</a>
          </div>
          <div>Events</div>
          <div>Contact</div>
        </div>
      ) : (
        <></>
      )}
    </main>
  );
};

export default MainHeader;
