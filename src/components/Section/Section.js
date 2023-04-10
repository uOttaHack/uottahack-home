import React, { Component } from "react";
import "./Section.css";
import Event from "../Event/Event.js";
import Organizer from "../Organizer/Organizer.js";
import About from "../About/About.js";
import Contact from "../Contact/Contact.js";
import Sponsor from "../Sponsor/Sponsor.js";
import Partners from "../Partners/Partners.js";
import Past from "../Past/Past.js";
import Recent from "../Recent/Recent.js";

class Section extends Component {
  render() {
    return (
      <div className="Section">
        <h2>{this.props.section.sectionName}</h2>
        <h3>{this.props.section.subtitle}</h3>
        {this.props.section.sectionName === "What is uOttaHack?" && <About />}
        {this.props.section.sectionName === "Our Most Recent Event" && (
          <Recent fullWidth />
        )}
        {this.props.section.sectionName === "Past uOttaHacks" && <Past />}
        {this.props.section.sectionName === "Our Events & Initiatives" && (
          <Event />
        )}
        {this.props.section.sectionName === "Past Sponsors" && <Sponsor />}
        {this.props.section.sectionName === "Our Partners" && <Partners />}
        {this.props.section.sectionName === "Get in touch" && <Contact />}
        {this.props.section.sectionName === "Our Team" && <Organizer />}
      </div>
    );
  }
}

export default Section;
