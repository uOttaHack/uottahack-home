import React from "react";
import "./Footer.css";
import FooterLogo from "../../images/uottahack19-black.png";

const footer = () => {
  return (
    <div className="Footer">
      <div className="FooterBody">
        <div className="FooterLogo">
          <img src={FooterLogo} alt="Logo" />
        </div>
        <div className="LogoText">
          <p>The capital of Canada's largest hackathon.</p>
        </div>
        <div class="FooterContainer">
          <div className="FooterLinks">
            <a href="https://mlh.io/privacy" target="_blank">
              Privacy Policy
            </a>
            <a
              href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
              target="_blank"
            >
              Code of Conduct
            </a>
            <a href="https://github.com/uOttaHack" target="_blank">
              GitHub
            </a>
          </div>
          <div className="MediaLinks">
            <a href="https://facebook.com/uottahack" target="_blank">
              <box-icon
                class="bx-tada-hover"
                type="logo"
                name="facebook-square"
              />
            </a>
            <a href="https://twitter.com/uottahack" target="_blank">
              <box-icon class="bx-tada-hover" name="twitter" type="logo" />
            </a>
            <a href="https://www.instagram.com/uottahack/" target="_blank">
              <box-icon class="bx-tada-hover" name="instagram" type="logo" />
            </a>
            <a href="https://www.tiktok.com/@uottahack" target="_blank">
              <box-icon class="bx-tada-hover" name="tiktok" type="logo" />
            </a>
            <a
              href="https://www.linkedin.com/company/uottahack/"
              target="_blank"
            >
              <box-icon class="bx-tada-hover" name="linkedin" type="logo" />
            </a>
          </div>
          <div class="Signature">
            <p>Made with &#10084;&#65039; by uOttawa students</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
