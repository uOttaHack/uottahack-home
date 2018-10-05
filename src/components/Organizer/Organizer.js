import React, { Component } from "react";
import "./Organizer.css";
import organizer2018 from "./organizers2018.json";
import organizer2019 from "./organizers2019.json";
import { Card, Button } from "semantic-ui-react";

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

class Organizer extends Component {
  render() {
    return (
      <div className="Organizer">
        <div className="Organizer-Group">
          <h3>2018-2019</h3>
          <Card.Group centered items={chair19} />
          <Card.Group centered items={organizer2019} />
        </div>

        <div className="Organizer-Group">
          <h3>2017-2018</h3>
          <Button
            className="btn-org"
            href="https://2018.uottahack.ca"
            size="big"
          >
            Visit the 2018 site
          </Button>

          <Card.Group centered items={chair18} />
          <Card.Group centered items={organizer2018} />
        </div>
      </div>
    );
  }
}

export default Organizer;
