import React, { Component } from "react";
import "./App.css";
import Navbar from "../Navbar/Navbar.js";
import Front from "../Front/Front.js";
import Page from "../Page/Page.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sections: []
    };
  }

  componentDidMount() {
    this.setState({
      sections: [
        {
          sectionName: "What is uOttaHack?",
          subtitle: ""
        },

        {
          sectionName: "Our Events & Initiatives",
          subtitle: "Endeavours we're proud to lead"
        },
        {
          sectionName: "Past Sponsors",
          subtitle: ""
        },
        {
          sectionName: "Get in touch",
          subtitle: ""
        },
        {
          sectionName: "Our Team",
          subtitle: ""
        }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Front />
        <Page section={this.state.sections} />
      </div>
    );
  }
}

export default App;
