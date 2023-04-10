import React, { Component } from "react";
import "./Event.css";
import { Card } from "semantic-ui-react";

const items1 = [
  {
    header: "uOttaHack 5",
    meta: "Flagship Hackathon",
    description:
      "Our flagship event, the university's official MLH hackathon with over 600+ hackers and 20+ sponsors!",
    link: "https://2023.uottahack.ca/"
  }
];

const items2 = [
  {
    header: "Tech Intern Panel",
    meta: "Community",
    description:
      "A panel of several students who share their experiences working internships at top tech companies.",
    link: "https://www.instagram.com/p/CkHNFJApLFA/?hl=en"
  }
];

const items3 = [
  {
    header: "init uOttaHack 5",
    meta: "Intro Hackathon",
    description:
      "The catalyst to our hacking season, init is the university's official MLH Global Hack Week hackathon.",
    link: "https://www.facebook.com/media/set/?set=a.614253715696395&type=3"
  }
];

const items4 = [
  {
    header: "Workshops",
    meta: "Community",
    description:
      "Various workshops held on campus focused on helping students learn skills outside the classroom.",
    link: "https://live.uottahack.ca/workshops"
  }
];

class Event extends Component {
  handleClick(link) {
    window.location.href = link;
  }

  render() {
    return (
      <div className="Event" id="Events">
        <div className="ui centered grid">
          <div className="row" id="cardRow">
            <Card
              header="uOttaHack 5"
              meta="Flagship Hackathon"
              description="Our flagship event, the university's official MLH hackathon with over 600+ hackers and 20+ sponsors!"
              onClick={() => window.open(items1[0].link, "_blank")}
            />
            <Card
              header="init uOttaHack 5"
              meta="Intro Hackathon"
              description="The catalyst to our hacking season, init is the university's official MLH Global Hack Week hackathon."
              onClick={() => window.open(items2[0].link, "_blank")}
            />
          </div>
          <div className="row" id="cardRow">
            <Card
              header="Tech Intern Panel"
              meta="Community"
              description="A panel of several students who share their experiences working internships at top tech companies."
              onClick={() => window.open(items3[0].link, "_blank")}
            />
            <Card
              header="Workshops"
              meta="Community"
              description="Various workshops held on campus focused on helping students learn skills outside the classroom."
              onClick={() => window.open(items4[0].link, "_blank")}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
