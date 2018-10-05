import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="About">
        <p>
          Our mission is to empower students on campus to explore their passion
          for tech, through building a community of like-minded individuals who
          innovate and disrupt the worlds of business and technology.
        </p>

        <h3>Connect with uOttawa's Tech Community</h3>
        <p>
          Meet other students who are interested in the tech space in the open
          atmosphere of our events.
        </p>

        <h3>Discover and Learn</h3>
        <p>
          Through our workshops, hack days, and myriad of resources be exposed
          to new languages and frameworks that real developers are adopting.
        </p>

        <h3>Accelerate Your Career</h3>
        <p>
          Attend events like our flagship hackathon and have the opportunity to
          collaborate with students from across Canada and receive mentorship
          from our industry leading sponsors.
        </p>
      </div>
    );
  }
}

export default About;
