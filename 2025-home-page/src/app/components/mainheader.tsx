import Logo from "@/app/assets/logo.svg";
import { useIsMobile } from "../hooks/useIsMobile";
interface MainHeader {}
import {
  Link as ScrollLink,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const MainHeader: React.FC<MainHeader> = () => {
  const isMobile = useIsMobile();
  if (isMobile === undefined) {
    return null; // Or a loader, or fallback component
  }

  return (
    <main className="absolute md:bg-[#04081C] z-[100] w-full h-[10%] flex items-center overflow-hidden">
      {/* Logo on the Left */}
      <div className="absolute left-10 w-[10vw] h-full md:w-[4vw] ">
        <a href="/">
          {" "}
          <Logo className="" />
        </a>
      </div>

      {/* Centered Navigation Text */}
      {!isMobile ? (
        <div className="w-full flex justify-center font-inter text-xl items-center text-white font-bold gap-x-[5%]">
          <div>
            <ScrollLink
              to="about"
              className="cursor-pointer"
              smooth={true}
              duration={1000}
            >
              About
            </ScrollLink>
          </div>
          <div>
            <ScrollLink
              to="sponsors"
              className="cursor-pointer"
              smooth={true}
              duration={1000}
            >
              Sponsors
            </ScrollLink>
          </div>
          <div>
            <ScrollLink
              to="faq"
              className="cursor-pointer"
              smooth={true}
              duration={1000}
            >
              FAQ
            </ScrollLink>
          </div>
          <div>
            <ScrollLink
              to="events"
              className="cursor-pointer"
              smooth={true}
              duration={1000}
            >
              Events
            </ScrollLink>
          </div>

          <div>
            <ScrollLink
              to="contact"
              className="cursor-pointer"
              smooth={true}
              duration={1000}
            >
              Contact
            </ScrollLink>
          </div>
        </div>
      ) : (
        <></>
      )}
    </main>
  );
};

export default MainHeader;
