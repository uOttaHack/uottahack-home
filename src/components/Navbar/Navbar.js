import React from "react";
import "./Navbar.css";
import Link from "../Link.js";

const navbar = () => {
  return (
    <div className="Navbar">
      <div className="PageTitle">
        <p>Home of uOttahack</p>
      </div>
      <div className="NavLinks">
        {/* NEED TO BE CHANGED TO IMAGES WITH display="img" and an added src="" prop */}
        <Link
          id="FacebookNav"
          display="link"
          href="https://facebook.com/uottahack"
          text="Facebook |"
        />
        <Link
          id="TwitterNav"
          display="link"
          href="https://twitter.com/uottahack"
          text="Twitter |"
        />
        <Link
          id="InstaNav"
          display="link"
          href="https://instagram.com/uottahack"
          text="Instagram"
        />
      </div>
    </div>
  );
};

export default navbar;
