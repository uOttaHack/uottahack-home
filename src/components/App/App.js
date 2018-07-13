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
          sectionName: "What is uOttahack?",
          subtitle: "Who are we?"
        },
        {
          sectionName: "What are we up to?",
          subtitle: "Events, Endeavors, & Projects"
        },
        {
          sectionName: "uOttahack's History",
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
        <Page page={this.state.sections} />
      </div>
    );
  }
}

export default App;
