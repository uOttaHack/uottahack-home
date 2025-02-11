import { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import thumbnail from "../../images/thumbnail.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to control dropdown menu

  // Toggles the dropdown menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const componentRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    // Add the event listener for mouse click
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      // setIsMobile(window.innerWidth <= 768);
      setIsMobile(window.innerWidth <= 1200);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ alignToTop: "true", behavior: "smooth" });
  };

  const location = useLocation();

  const bannerStyle = {
    display: "static",
    maxWidth: isMobile ? "85px" : "130px",
    minWidth: isMobile ? "45px" : "70px",
    position: "fixed",
    right: isMobile ? "70px" : "60px",
    top: "-5px",
    width: "10%",
    zIndex: "1",
  };

  return (
    <div className="NavbarContainer" ref={componentRef}>
      <div className="Navbar">
        <div className="PageTitle">
          <div onClick={() => scrollToSection("About")}>
            <img src={thumbnail} className="thumbnail" />
          </div>
        </div>
        {/* Hamburger Icon for Mobile */}
        <div className="Hamburger" onClick={toggleMenu}>
          ☰
        </div>

        {location.pathname === "/" && (
          <div className={`PageLinks ${isOpen ? "Open" : ""}`}>
            <li onClick={() => scrollToSection("About")}>About</li>
            <li onClick={() => scrollToSection("FAQ")}>FAQ</li>
            <li onClick={() => scrollToSection("Sponsor")}>Sponsors</li>
            <li onClick={() => scrollToSection("Contact")}>Contact Us</li>
            <Link to="/sponsorship">Sponsorship Info</Link>
            <a
              href="http://hackp.ac/coc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code of Conduct
            </a>
            <a
              href="https://blossomhack-2025.devpost.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dev Post
            </a>
          </div>
        )}
        {location.pathname === "/sponsorship" && (
          <div className={`PageLinks ${isOpen ? "Open" : ""}`}>
            <Link to={`/`}>Home</Link>

            <li onClick={() => scrollToSection("About")}>About</li>
            <li onClick={() => scrollToSection("FAQ")}>FAQ</li>
            <li onClick={() => scrollToSection("Sponsor")}>Sponsors</li>
            <li onClick={() => scrollToSection("Contact")}>Contact Us</li>
            <li onClick={() => scrollToSection("Schedule")}>Schedule</li>
            <a
              href="https://blossomhack-2025.devpost.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dev Post
            </a>
          </div>
        )}
        {/* <a
          id="mlh-trust-badge"
          style={bannerStyle}
          href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg"
            alt="Major League Hacking 2025 Hackathon Season"
            style={{ width: "100%" }}
          />
        </a> */}
      </div>
    </div>
  );
}
