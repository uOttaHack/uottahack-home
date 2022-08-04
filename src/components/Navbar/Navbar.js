import React from "react";
import "./Navbar.css";
import ProfileLogo from "../../images/uOttaHack-Logo.svg";
import "boxicons";

const navbar = () => {
  return (
    <div className="Navbar">
      <div className="PageTitle">
        <a href="/">
          <img src={ProfileLogo} alt="Logo" />
        </a>
      </div>
      <div className="PageLinks">
        <a href="/about">About</a>
        <a href="/explore">Hackathons</a>
        <a href="/testimonials">Events</a>
        <a href="/schedule">Sponsors</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="NavLinks">
        <a href="https://facebook.com/uottahack">
          <box-icon type="logo" name="facebook-square" />
        </a>
        <a href="https://twitter.com/uottahack">
          <box-icon name="twitter" type="logo" />
        </a>
        <a href="https://www.instagram.com/uottahack/">
          <box-icon name="instagram" type="logo" />
        </a>
        <a href="https://www.tiktok.com/@uottahack">
          <box-icon name="tiktok" type="logo" />
        </a>
        <a href="https://www.linkedin.com/company/uottahack/">
          <box-icon name="linkedin" type="logo" />
        </a>
      </div>
    </div>
  );
};

export default navbar;
