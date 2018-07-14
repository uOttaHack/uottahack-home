import React, { Component } from "react";
import "./Section.css";
import Event from "../Event/Event.js";
import Organizer from "../Organizer/Organizer.js";

class Section extends Component {
  render() {
    return (
      <div className="Section">
        <h2>{this.props.section.sectionName}</h2>
        <h3>{this.props.section.subtitle}</h3>
        {this.props.section.sectionName === "What are we up to?" && <Event />}
        {this.props.section.sectionName === "uOttahack's History" && (
          <Organizer />
        )}
      </div>
    );
  }
}

export default Section;
