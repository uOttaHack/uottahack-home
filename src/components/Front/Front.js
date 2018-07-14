import React from "react";
import "./Front.css";
import logo from "../../images/uottahack.png";

const front = () => {
  return (
    <div className="Front">
      <img className="Logo" src={logo} alt="" />
      <h1>The University of Ottawa's Hackathon Community</h1>
    </div>
  );
};

export default front;
