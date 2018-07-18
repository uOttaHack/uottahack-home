import React from "react";
import "./Front.css";
import logo from "../../images/uottahack.png";
import Link from "../Link.js";

const front = () => {
  return (
    <div className="Front">
      <img className="Logo" src={logo} alt="" />
      <h1>The University of Ottawa's Hackathon Community</h1>
      <Link
        id="FrontButton"
        display="link"
        href="https://uottahack.ca"
        text="Visit uOttahack 2018"
      />
    </div>
  );
};

export default front;
