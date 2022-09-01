import React from "react";
import "./Navbar.css";
import ProfileLogo from "../../images/uOttaHack-Logo.svg";
import "boxicons";
import { Link } from "react-scroll";

const navbar = () => {
  return (
    <div className="NavbarContainer">
      <div className="Navbar">
        <div className="PageTitle">
          <Link to="/" spy={true} smooth={true} offset={-150} duration={500}>
            <img src={ProfileLogo} alt="Logo" />
          </Link>
        </div>
        <div className="PageLinks">
          <Link
            to="About"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            About
          </Link>
          <Link to="Past" spy={true} smooth={true} offset={-150} duration={500}>
            Hackathons
          </Link>
          <Link
            to="Events"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            Events
          </Link>
          <Link
            to="Sponsors"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            Sponsors
          </Link>
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            Contact
          </Link>
        </div>
        <div className="NavLinksSocials">
          <a href="https://twitter.com/uottahack" target="_blank">
            <box-icon class="bx-tada-hover" name="twitter" type="logo" />
          </a>
          <a href="https://facebook.com/uottahack" target="_blank">
            <box-icon
              class="bx-tada-hover"
              type="logo"
              name="facebook-square"
            />
          </a>
          <a href="https://www.instagram.com/uottahack/" target="_blank">
            <box-icon class="bx-tada-hover" name="instagram" type="logo" />
          </a>
          <a href="https://www.tiktok.com/@uottahack" target="_blank">
            <box-icon class="bx-tada-hover" name="tiktok" type="logo" />
          </a>
          <a href="https://www.linkedin.com/company/uottahack/" target="_blank">
            <box-icon class="bx-tada-hover" name="linkedin" type="logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default navbar;
