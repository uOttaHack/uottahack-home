import React, { Component } from "react";
import "./Past.css";

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

class Past extends Component {
  render() {
    return (
      <div class="Past" id="Past">
        <div className="ui centered grid">
          <div className="row">
            <div className="Hackathon">
              <img class="logo" src={images["uOttaHack-2018-Logo.png"]} />
              <div className="circle" />
              <div className="logobutton">
                <a href="https://2018.uottahack.ca/" target="_blank">
                  <button className="btn1">Visit 2018 →</button>
                </a>
              </div>
            </div>
            <div className="Hackathon">
              <img class="logo-2019" src={images["uOttaHack-2019-Logo.png"]} />
              <div className="circle" />
              <div className="logobutton">
                <a href="https://2019.uottahack.ca/" target="_blank">
                  <button className="btn2">Visit 2019 →</button>
                </a>
              </div>
            </div>
            <div className="Hackathon">
              <img class="logo" src={images["uOttaHack-2020-Logo.png"]} />
              <div className="circle" />
              <div className="logobutton">
                <a href="https://2020.uottahack.ca/" target="_blank">
                  <button className="btn3">Visit 2020 →</button>
                </a>
              </div>
            </div>
            <div className="Hackathon">
              <img class="logo" src={images["uOttaHack-Logo.svg"]} />
              <div className="circle" />
              <div className="logobutton">
                <a href="https://2021.uottahack.ca/" target="_blank">
                  <button className="btn4">Visit 2021 →</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="Timeline" />
      </div>
    );
  }
}

export default Past;
