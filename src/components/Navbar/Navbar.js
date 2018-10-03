import React from "react";
import "./Navbar.css";
import Link from "../Link.js";
import { Icon } from "semantic-ui-react";
import LogoDark from "../../images/uottahack19-dark.png";

const navbar = () => {
  return (
    <div className="Navbar">
      <div className="PageTitle">
        <a href="/">
          <img src={LogoDark} />
        </a>
      </div>
      <div className="NavLinks">
        <a href="https://facebook.com/uottahack">
          <Icon
            link
            name="facebook"
            size="big"
            to="https://facebook.com/uottahack"
          />
        </a>
        <a href="https://twitter.com/uottahack">
          <Icon link name="twitter" size="big" />
        </a>
        <a href="https://www.instagram.com/uottahack/">
          <Icon link name="instagram" size="big" />
        </a>
      </div>
    </div>
  );
};

export default navbar;
