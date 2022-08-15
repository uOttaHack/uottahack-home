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
      <div className="ui centered grid" id="blurWrap">
        <div className="row">
          <a href="https://www.ciena.ca/" target="_blank">
            <img src={images["ciena.png"]} style={{ width: "150px" }} />
          </a>
          <a href="https://innovapost.com/" target="_blank">
            <img src={images["innovapost.png"]} style={{ width: "300px" }} />
          </a>
          <a href="https://www.nokia.com/" target="_blank">
            <img src={images["nokia.png"]} style={{ width: "175px" }} />
          </a>
        </div>
        <div className="row">
          <a href="https://about.google/" target="_blank">
            <img src={images["google.png"]} style={{ width: "175px" }} />
          </a>
          <a href="https://www.canada.ca/" target="_blank">
            <img src={images["canada.png"]} style={{ width: "300px" }} />
          </a>
          <a href="https://solace.com/" target="_blank">
            <img src={images["solace.png"]} style={{ width: "160px" }} />
          </a>
        </div>
        <div className="row">
          <a href="https://www.klipfolio.com/" target="_blank">
            <img src={images["klipfolio.png"]} style={{ width: "175px" }} />
          </a>
          <a href="https://www.momentive.ai/en/" target="_blank">
            <img src={images["momentive.png"]} style={{ width: "300px" }} />
          </a>
          <a href="https://www.deloitte.com/" target="_blank">
            <img src={images["deloitte.png"]} style={{ width: "200px" }} />
          </a>
        </div>
        <div className="row">
          <a href="https://www.marchnetworks.com/" target="_blank">
            <img src={images["marchnetworks.png"]} style={{ width: "225px" }} />
          </a>
          <a href="https://www.cdw.ca/" target="_blank">
            <img src={images["cdw.png"]} style={{ width: "125px" }} />
          </a>
          <a href="https://www.cdw.ca/" target="_blank">
            <img src={images["sunlife.png"]} style={{ width: "225px" }} />
          </a>
        </div>
        <div className="row">
          <a href="https://www.bitesite.ca/" target="_blank">
            <img src={images["bitesite.png"]} style={{ width: "200px" }} />
          </a>
          <a href="https://www.morganstanley.com/" target="_blank">
            <img src={images["morganstanley.png"]} style={{ width: "220px" }} />
          </a>
          <a href="https://www.accenture.com/" target="_blank">
            <img src={images["accenture.png"]} style={{ width: "150px" }} />
          </a>
        </div>
        <div className="row">
          <a href="https://www.kanatanorthba.com/" target="_blank">
            <img
              src={images["kanatanorthbia.png"]}
              style={{ width: "150px" }}
            />
          </a>
          <a href="https://www.phreesia.com/" target="_blank">
            <img src={images["phreesia.png"]} style={{ width: "170px" }} />
          </a>
          <a href="https://www.ea.com/" target="_blank">
            <img
              src={images["electronicarts.png"]}
              style={{ width: "125px" }}
            />
          </a>
        </div>
        <div className="row">
          <a href="https://github.com/" target="_blank">
            <img src={images["github-emblem.png"]} style={{ width: "150px" }} />
          </a>
          <a href="https://1password.com/" target="_blank">
            <img src={images["agilebits.png"]} style={{ width: "150px" }} />
          </a>
          <a href="https://balsamiq.com/" target="_blank">
            <img src={images["balsamiq.png"]} style={{ width: "150px" }} />
          </a>
        </div>
        <div className="row">
          <a
            href="https://www.bloomberg.com/company/what-we-do/"
            target="_blank"
          >
            <img src={images["bloomberg.png"]} style={{ width: "200px" }} />
          </a>
          <a href="https://www.fitbit.com/" target="_blank">
            <img src={images["fitbit.png"]} style={{ width: "150px" }} />
          </a>
        </div>
      </div>
    );
  }
}

export default Sponsor;
