import React from "react";
import "./Navbar.css";
import ProfileLogo from "../../images/uOttaHack-Logo.svg";
import "boxicons";
import { Link } from "react-scroll";

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("Navbar").style.top = "0";
  } else {
    document.getElementsByClassName("Navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../images", false, /\.(png|jpe?g|svg)$/)
);

const navbar = () => {
  return (
    <div className="NavbarContainer">
      <div className="Navbar">
        <div className="PageTitle">
          <Link
            to="About"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            <img src={images["uottahackLogo.png"]} alt="Logo" />
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
        <div className="NavLinks">
          <a href="https://twitter.com/uottahack" target="_blank">
            <box-icon
              name="twitter"
              class="bx-tada-hover"
              type="logo"
              color="white"
            />
          </a>
          <a href="https://facebook.com/uottahack" target="_blank">
            <box-icon
              type="logo"
              class="bx-tada-hover"
              name="facebook-square"
              color="white"
            />
          </a>
          <a href="https://www.instagram.com/uottahack/" target="_blank">
            <box-icon
              name="instagram"
              class="bx-tada-hover"
              type="logo"
              color="white"
            />
          </a>
          <a href="https://www.tiktok.com/@uottahack" target="_blank">
            <box-icon
              name="tiktok"
              class="bx-tada-hover"
              type="logo"
              color="white"
            />
          </a>
          <a href="https://www.linkedin.com/company/uottahack/" target="_blank">
            <box-icon
              name="linkedin"
              class="bx-tada-hover"
              type="logo"
              color="white"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCTXw2aqRj-eisCShSQqwveA"
            target="_blank"
          >
            <box-icon
              name="youtube"
              class="bx-tada-hover"
              type="logo"
              color="white"
            />
          </a>
          <a href="https://medium.com/@uottahack" target="_blank">
            <box-icon
              name="medium-square"
              class="bx-tada-hover"
              type="logo"
              color="white"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default navbar;
