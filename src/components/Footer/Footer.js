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
            <a href="https://twitter.com/uottahack" target="_blank">
              <box-icon
                name="twitter"
                class="bx-tada-hover"
                type="logo"
                color="black"
              />
            </a>
            <a href="https://facebook.com/uottahack" target="_blank">
              <box-icon
                type="logo"
                class="bx-tada-hover"
                name="facebook-square"
                color="black"
              />
            </a>
            <a href="https://www.instagram.com/uottahack/" target="_blank">
              <box-icon
                name="instagram"
                class="bx-tada-hover"
                type="logo"
                color="black"
              />
            </a>
            <a href="https://www.tiktok.com/@uottahack" target="_blank">
              <box-icon
                name="tiktok"
                class="bx-tada-hover"
                type="logo"
                color="black"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/uottahack/"
              target="_blank"
            >
              <box-icon
                name="linkedin"
                class="bx-tada-hover"
                type="logo"
                color="black"
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
                color="black"
              />
            </a>
            <a href="https://medium.com/@uottahack" target="_blank">
              <box-icon
                name="medium-square"
                class="bx-tada-hover"
                type="logo"
                color="black"
              />
            </a>
          </div>
          <div class="Signature">
            <p>Made with &#10084;&#65039; by the uOttaHack Team!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
