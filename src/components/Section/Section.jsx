import "./Section.css";
// import Event from "../Event/Event";
import Organizer from "../Organizer/Organizer";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Sponsor from "../Sponsor/Sponsor";
// import Partners from "../Partners/Partners";
import FAQ from "../FAQ/FAQ";
import Hosts from "../Hosts/Hosts";
import Schedule from "../Schedule/Schedule";
import Map from "../Map/Map";
import { useLocation } from "react-router";

export default function Section({ sectionName, subtitle }) {
  const location = useLocation();
  return (
    <div className="Section">
      {location.pathname === "/" && (
        <div>
          <h2>{sectionName}</h2>
          <h3>{subtitle}</h3>
          {sectionName === "What is BlossomHack?" && <About />}
          {sectionName === "FAQ" && <FAQ />}
          {/* {sectionName === "Our Events" && <Event />} */}
          {sectionName === "Sponsors" && <Sponsor />}
          {/* {sectionName === "Partners" && <Partners />} */}
          {sectionName === "Get in Touch" && <Contact />}
          {sectionName === "Our Team" && <Organizer />}
          {sectionName === "Hosted By" && <Hosts />}
          {sectionName === "Schedule" && <Schedule />}
          {sectionName === "Map" && <Map />}
        </div>
      )}
      {location.pathname === "/sponsorship" && (
        <div>
          <h2>{sectionName}</h2>
          <h3>{subtitle}</h3>
          {sectionName === "What is BlossomHack?" && <About />}
          {sectionName === "FAQ" && <FAQ />}
          {sectionName === "Sponsors" && <Sponsor />}
          {sectionName === "Get in Touch" && <Contact />}
          {sectionName === "Our Team" && <Organizer />}
          {sectionName === "Hosted By" && <Hosts />}
          {sectionName === "Schedule" && <Schedule />}
          {sectionName === "Map" && <Map />}
        </div>
      )}
    </div>
  );
}
