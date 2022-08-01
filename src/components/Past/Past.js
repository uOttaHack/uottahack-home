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
      <div className="Past">
        <div className="logobutton">
          <div className="inner">
            <img src={images["uOttaHack-2018-Logo.png"]} />
          </div>
          <div className="inner">
            <a href="https://2018.uottahack.ca/">
              <button className="btn1">Visit 2018</button>
            </a>
          </div>
        </div>
        <div className="logobutton">
          <div className="inner">
            <img src={images["uOttaHack-2019-Logo.png"]} />
          </div>
          <div className="inner">
            <a href="https://2019.uottahack.ca/">
              <button className="btn2">Visit 2019</button>
            </a>
          </div>
        </div>
        <div className="logobutton">
          <div className="inner">
            <img src={images["uOttaHack-2020-Logo.png"]} />
          </div>
          <div className="inner">
            <a href="https://2020.uottahack.ca/">
              <button className="btn3">Visit 2020</button>
            </a>
          </div>
        </div>
        <div className="logobutton">
          <div className="inner">
            <img src={images["uOttaHack-2021-Logo.png"]} />
          </div>
          <div className="inner">
            <a href="https://2021.uottahack.ca/">
              <button className="btn4">Visit 2021</button>
            </a>
          </div>
        </div>
        <div className="line" />
        <div className="circle1" />
        <div className="circle2" />
        <div className="circle3" />
        <div className="circle4" />
        <div className="vline" />
      </div>
    );
  }
}

export default Past;
