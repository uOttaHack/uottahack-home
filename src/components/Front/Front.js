import React from "react";
import "./Front.css";
import Logo from "../../images/uottahack19.png";
import { Button } from "semantic-ui-react";

const front = () => {
  return (
    <div className="Front">
      <img className="Logo" src={Logo} alt="" />
      <h1>The University of Ottawa's Hackathon Community</h1>

      <div className="button">
        <Button
          className="btn"
          href="https://2019.uottahack.ca"
          size="massive"
          disabled
        >
          2019 Site Coming Soon!
        </Button>
      </div>
    </div>
  );
};

export default front;
