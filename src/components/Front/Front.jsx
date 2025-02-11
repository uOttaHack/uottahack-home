import "./Front.css";
import TextLogo from "../../images/logo.png";
import { useLocation } from "react-router";

export default function Front() {
  const location = useLocation();
  return (
    <div className="Front">
      <div className="Hero">
        <div className="LogoContainer">
          <img className="TextLogo" src={TextLogo} alt="" />
        </div>
        {location.pathname === "/" && (
          <div className="HeroText">
            <h1>The Biggest Hackathon at Ohio University</h1>
            <h2>
              <div className="date">March 22-23, 2025</div>
            </h2>
            <div className="logbutton">
              <a
                href="https://ohio.qualtrics.com/jfe/form/SV_1FdLS6yP59xtWMC"
                target="_blank"
              >
                <button role="button" className="btn">
                  <h1 className="hbtn">Register →</h1>
                </button>
              </a>
            </div>
          </div>
        )}
        {location.pathname === "/sponsorship" && (
          <div className="HeroText">
            <h1 className="p1">Sponsorship</h1>
          </div>
        )}
      </div>
    </div>
  );
}
