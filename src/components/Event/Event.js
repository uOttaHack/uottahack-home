import React, { Component } from "react";
import "./Event.css";
import { Card } from "semantic-ui-react";

const items1 = [
  {
    header: "uOttawaHack 5",
    meta: "Flagship Hackathon",
    description:
      "Our flagship event, the university's official MLH hackathon with over 600+ hackers and 20+ sponsors!"
  },
  {
    header: "init uOttaHack 5",
    meta: "Intro Hackathon",
    description:
      "The catalyst to our hacking season, init is the university's official MLH Global Hack Week hackathon."
  }
];

const items2 = [
  {
    header: "Workshops",
    meta: "Community",
    description:
      "Various workshops held on campus focused on helping students learn skills outside the classroom."
  },
  {
    header: "Tech Intern Panel",
    meta: "Community",
    description:
      "A panel of several students who share their experiences working internships at top tech companies."
  }
];

class Event extends Component {
  render() {
    return (
      <div className="Event">
        <Card.Group centered items={items1} />
        <Card.Group centered items={items2} />
      </div>
    );
  }
}

export default Event;
