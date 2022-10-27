import "./Partners.css";
import React, { Component } from "react";

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

class Partners extends Component {
  render() {
    return (
      <div id="Sponsors">
        <div className="ui centered grid" id="blurWrap">
          <div className="row">
            <a href="https://mlh.io/" target="_blank">
              <img src={images["mlh.png"]} style={{ width: "150px" }} />
            </a>
            <a href="https://www2.uottawa.ca" target="_blank">
              <img src={images["uottawa.png"]} style={{ width: "275px" }} />
            </a>
            <a
              href="https://www2.uottawa.ca/faculty-engineering/"
              target="_blank"
            >
              <img src={images["uottawaEng.png"]} style={{ width: "275px" }} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Partners;
