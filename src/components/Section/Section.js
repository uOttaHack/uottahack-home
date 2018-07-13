import React, { Component } from "react";
import "./Section.css";

class Section extends Component {
  render() {
    return (
      <div className="Section">
        <h2>{this.props.section.sectionName}</h2>
        <h3>{this.props.section.subtitle}</h3>
      </div>
    );
  }
}

export default Section;
