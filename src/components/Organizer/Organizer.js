import React, { Component } from "react";
import "./Organizer.css";
import organizer2022 from "./organizers2022.json";
import { Card, Button, Dropdown, Menu } from "semantic-ui-react";

const chair22 = [
  {
    imgsrc: "",
    header: "",
    meta: "",
    website: "",
    linkedin: "",
    github: ""
  }
];

const options = [
  { key: 1, text: "2020/2021", value: 1 },
  { key: 2, text: "2019/2020", value: 2 },
  { key: 3, text: "2018/2019", value: 3 },
  { key: 4, text: "2017/2018", value: 4 }
];

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../images/organizers", false, /\.(png|jpe?g|svg)$/)
);

class Organizer extends Component {
  render() {
    return (
      <div className="Organizer">
        <div className="menu">
          <Menu compact>
            <Dropdown text="2022/2023" options={options} simple item />
          </Menu>
        </div>
        {/* <img src={images["2018.png"]} style={{ width: "100%" }} /> */}

        <Card.Group centered items={chair22} id="cards" />
        <Card.Group centered items={organizer2022} id="cards" />
      </div>
    );
  }
}

export default Organizer;
