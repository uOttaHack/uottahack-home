import React, { Component } from "react";
import "./Organizer.css";
import organizer2022 from "./organizers2022.json";
import { Card, Button } from "semantic-ui-react";
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";

const chair18 = [
  {
    imgsrc: "../../images/paul-lee.png",
    header: "Paul Lee",
    meta: "Co-chair",
    website: "",
    linkedin: "",
    github: ""
  },
  {
    imgsrc: "../../images/matt-langlois.png",
    header: "Matt Langlois",
    meta: "Co-chair",
    website: "",
    linkedin: "",
    github: ""
  }
];

const chair19 = [
  {
    imgsrc: "../../images/paul-lee.png",
    header: "Paul Lee",
    meta: "Co-Director",
    website: "",
    linkedin: "",
    github: ""
  },
  {
    imgsrc: "../../images/hamza-basrai.png",
    header: "Hamza Basrai",
    meta: "Co-Director",
    website: "",
    linkedin: "",
    github: ""
  }
];

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
          <Card.Group centered items={chair22} />
          <Card.Group centered items={organizer2022} />
        </div>
      </div>
    );
  }
}

export default Organizer;
