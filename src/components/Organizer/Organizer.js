import React, { Component } from "react";
import "./Organizer.css";
import organizer2022 from "./organizers2022.json";
import { Card, Button } from "semantic-ui-react";

const chair22 = [
  {
    imgsrc: "",
    header: "Steven Li",
    meta: "Co-Director",
    website: "",
    linkedin: "",
    github: ""
  },
  {
    imgsrc: "",
    header: "Deniz Jasarbasic",
    meta: "Co-Director",
    website: "",
    linkedin: "",
    github: ""
  }
];

class Organizer extends Component {
  render() {
    return (
      <div className="Organizer">
        <div className="Organizer-Group">
          <h3>2022-2023</h3>
          <Card.Group centered items={chair22} id="cards" />
          <Card.Group centered items={organizer2022} id="cards" />
        </div>
      </div>
    );
  }
}

export default Organizer;
