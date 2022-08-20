import React, { Component } from "react";
import "./Event.css";
import { Card } from "semantic-ui-react";

const items1 = [
  {
    header: "uOttawaHack 5",
    meta: "Flagship Hackathon",
    description:
      "Our flagship event, the university's official MLH hackathon with over 600+ hackers and 20+ sponsors!"
  }
];

const items2 = [
  {
    header: "Tech Intern Panel",
    meta: "Community",
    description:
      "A panel of several students who share their experiences working internships at top tech companies."
  }
];

const items3 = [
  {
    header: "init uOttaHack 5",
    meta: "Intro Hackathon",
    description:
      "The catalyst to our hacking season, init is the university's official MLH Global Hack Week hackathon."
  }
];

const items4 = [
  {
    header: "Workshops",
    meta: "Community",
    description:
      "Various workshops held on campus focused on helping students learn skills outside the classroom."
  }
];

class Event extends Component {
  render() {
    return (
      <div className="Event">
        <div className="ui centered grid">
          <div className="row" id="cardRow">
            <Card
              header="uOttawaHack 5"
              meta="Flagship Hackathon"
              description="Our flagship event, the university's official MLH hackathon with over 600+ hackers and 20+ sponsors!"
            />
            <Card
              header="Tech Intern Panel"
              meta="Community"
              description="A panel of several students who share their experiences working internships at top tech companies."
            />
          </div>
          <div className="row" id="cardRow">
            <Card
              header="init uOttaHack 5"
              meta="Intro Hackathon"
              description="The catalyst to our hacking season, init is the university's official MLH Global Hack Week hackathon."
            />
            <Card
              header="Workshops"
              meta="Community"
              description="Various workshops held on campus focused on helping students learn skills outside the classroom."
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
