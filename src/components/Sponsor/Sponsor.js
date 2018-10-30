import "./Sponsor.css";
import React, { Component } from "react";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../images/sponsors", false, /\.(png|jpe?g|svg)$/)
);

class Sponsor extends Component {
  render() {
    return (
      <div className="Sponsor">
        <div className="sponsor-row">
          <img src={images["canada.png"]} style={{ width: "500px" }} />
        </div>
        <div className="sponsor-row">
          <img src={images["klipfolio.png"]} style={{ width: "200px" }} />
          <img src={images["surveymonkey.png"]} style={{ width: "320px" }} />
          <img src={images["marchnetworks.png"]} style={{ width: "200px" }} />
        </div>
        <div className="sponsor-row">
          <img src={images["deloitte.png"]} style={{ width: "200px" }} />
          <img src={images["morganstanley.png"]} style={{ width: "275px" }} />
          <img src={images["youi.png"]} style={{ width: "100px" }} />
        </div>
        <div className="sponsor-row">
          <img src={images["sunlife.png"]} style={{ width: "200px" }} />
          <img src={images["agilebits.png"]} style={{ width: "150px" }} />
          <img src={images["accenture.png"]} style={{ width: "170px" }} />
        </div>
        <div className="sponsor-row">
          <img src={images["bitesite.png"]} style={{ width: "200px" }} />
          <img src={images["kanatanorthbia.png"]} style={{ width: "150px" }} />
          <img src={images["phreesia.png"]} style={{ width: "200px" }} />
          <img src={images["scalar.png"]} style={{ width: "150px" }} />
        </div>
      </div>
    );
  }
}

export default Sponsor;
