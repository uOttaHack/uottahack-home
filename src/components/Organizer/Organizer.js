import React, { Component } from "react";
import "./Organizer.css";

import organizer20232024 from "./organizers2023.json";
import organizer20222023 from "./organizers2022.json";
import organizer20202021 from "./organizers2021.json";
import organizer20192020 from "./organizers2020.json";
import organizer20182019 from "./organizers2019.json";
import organizer20172018 from "./organizers2018.json";

import pic20172018 from "../../images/organizers/2018.png";
import pic20182019 from "../../images/organizers/2019.png";
import pic20192020 from "../../images/organizers/2020.png";
import pic20202021 from "../../images/organizers/2021.png";
import pic20222023 from "../../images/organizers/2023.png";
import pic20232024 from "../../images/organizers/2024.png";

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
  { key: 0, text: "2023/2024", value: 1 },
  { key: 1, text: "2022/2023", value: 2 },
  { key: 2, text: "2020/2021", value: 3 },
  { key: 3, text: "2019/2020", value: 4 },
  { key: 4, text: "2018/2019", value: 5 },
  { key: 5, text: "2017/2018", value: 6 }
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
  constructor(props) {
    super(props);
    this.state = {
      year: 2024 // set the default year to 2023/2024
    };
    this.handleYearChange = this.handleYearChange.bind(this);
  }

  handleYearChange(event, data) {
    // update the year in the state when the dropdown value changes
    this.setState({ year: data.value });
  }

  render() {
    let organizers = [];
    let pic = "";
    // render the organizers based on the selected year
    switch (this.state.year) {
      case 2:
        organizers = organizer20222023;
        pic = pic20222023;
        break;
      case 3:
        organizers = organizer20202021;
        pic = pic20202021;
        break;
      case 4:
        organizers = organizer20192020;
        pic = pic20192020;
        break;
      case 5:
        organizers = organizer20182019;
        pic = pic20182019;
        break;
      case 6:
        organizers = organizer20172018;
        pic = pic20172018;
        break;
      default:
        organizers = organizer20232024; // handle default case
        pic = pic20232024;
    }

    return (
      <div className="Organizer">
        <div className="menu">
          <Menu compact>
            <Dropdown
              options={options}
              simple
              item
              defaultValue={1}
              onChange={this.handleYearChange} // add onChange event handler
            />
          </Menu>
        </div>

        <img src={pic} />

        {/* render the organizers based on the selected year */}
        <Card.Group centered items={chair22} id="cards" />
        <Card.Group centered items={organizers} id="cards" />
      </div>
    );
  }
}

export default Organizer;
