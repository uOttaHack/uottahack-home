import React from "react";
import "./Front.css";
import Logo from "../../images/uottahack19.png";
import { Button } from "semantic-ui-react";
import Egg from "../Egg/Egg.js";

const front = () => {
  return (
    <div className="Front">
      <div className="Hero">
        <img className="Logo" src={Logo} alt="" />
        <h1>The University of Ottawa's</h1>
        <h1>Hackathon Community</h1>
        <Egg />
      </div>
    </div>
  );
};

export default front;
