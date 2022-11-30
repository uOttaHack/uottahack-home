import React from "react";
import "./Front.css";
import TextLogo from "../../images/uottahack19.png";
import Egg from "../Egg/Egg.js";

// <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'>

const front = () => {
  return (
    <div className="Front">
      <div className="Hero">
        <div class="LogoContainer">
          <img className="TextLogo" src={TextLogo} alt="" />
        </div>
        <div class="HeroText">
          <h1>The University of Ottawa's Hackathon Community</h1>
          <div className="logobutton">
            <a href="https://2023.uottahack.ca/" target="_blank">
              <button className="btn">Visit 2023 →</button>
            </a>
          </div>
        </div>
        <Egg />
      </div>
    </div>
  );
};

export default front;
