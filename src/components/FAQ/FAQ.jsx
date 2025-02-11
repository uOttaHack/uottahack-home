import "./FAQ.css";
import { useLocation } from "react-router";
import Accordion from "../../functions/Accordion/Accordion";
import FAQList from "./faq-main";
import SponsorshipList from "./faq-sponsorship";

export default function FAQ() {
  const location = useLocation();

  return (
    <div className="FAQ" id="FAQ">
      {location.pathname === "/" && (<Accordion table={FAQList} />)}
      {location.pathname === "/sponsorship" && (
        <Accordion table={SponsorshipList} />
      )}
    </div>
  );
}
