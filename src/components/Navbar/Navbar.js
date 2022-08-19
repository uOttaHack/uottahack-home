import React from "react";
import "./Navbar.css";
import ProfileLogo from "../../images/uOttaHack-Logo.svg";
import "boxicons";

const navbar = () => {
  return (
    <div className="Navbar">
      <div className="PageTitle">
        <img src={ProfileLogo} alt="Logo" />
      </div>
      <div className="PageLinks">
        <a class="hover-underline-animation" href="/">
          About
        </a>
        <a class="hover-underline-animation" href="/">
          Hackathons
        </a>
        <a class="hover-underline-animation" href="/">
          Events
        </a>
        <a class="hover-underline-animation" href="/">
          Sponsors
        </a>
        <a class="hover-underline-animation" href="/">
          Contact
        </a>
      </div>
      <div className="NavLinks">
        <a href="https://facebook.com/uottahack">
          <box-icon class="bx-tada-hover" type="logo" name="facebook-square" />
        </a>
        <a href="https://twitter.com/uottahack">
          <box-icon class="bx-tada-hover" name="twitter" type="logo" />
        </a>
        <a href="https://www.instagram.com/uottahack/">
          <box-icon class="bx-tada-hover" name="instagram" type="logo" />
        </a>
        <a href="https://www.tiktok.com/@uottahack">
          <box-icon class="bx-tada-hover" name="tiktok" type="logo" />
        </a>
        <a href="https://www.linkedin.com/company/uottahack/">
          <box-icon class="bx-tada-hover" name="linkedin" type="logo" />
        </a>
      </div>
    </div>
  );
};

export default navbar;
