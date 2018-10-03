import React, { Component } from "react";
import "./Event.css";
import { Card } from "semantic-ui-react";

const items = [
  {
    header: "Tech Intern Panel",
    href: "https://www.facebook.com/events/1927114657590477/",
    meta: "Community",
    description:
      "A panel of several students who share their experiences working internships at top tech companies"
  },
  {
    header: "Local Hack Day",
    href: "https://localhackday.mlh.io/",
    meta: "Community",
    description:
      "A global hackathon in partnership with MLH, a 12 hour long event connected to communities around the world"
  },
  {
    header: "Workshops",
    meta: "Community",
    description:
      "Various workshops held on campus throughout the school year to focus on helping students learn skills outside the classroom"
  }
];

class Event extends Component {
  render() {
    return (
      <div className="Event">
        <Card
          centered
          href="https://2019.uottahack.ca"
          header="uOttaHack 2019"
          meta="Hackathon"
          description="Our flagship event, the university's official MLH hackathon."
        />
        <Card.Group centered items={items} />
      </div>
    );
  }
}

export default Event;
