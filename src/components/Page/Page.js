import React, { Component } from "react";
import "./Page.css";
import Section from "../Section/Section.js";

class Page extends Component {
  render() {
    const sectionItem = this.props.section.map(section => {
      return <Section key={section.sectionName} section={section} />;
    });
    return <div className="Page">{sectionItem}</div>;
  }
}

export default Page;
