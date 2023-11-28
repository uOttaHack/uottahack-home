import React, { Component } from "react";
import YoutubeVideo from "./YoutubeVideo.js";
import "./recent.css";

class Recent extends Component {
  render() {
    return (
      <div
        className={`Recent ${this.props.fullWidth ? "full-width" : ""}`}
        id="Recent"
      >
        <YoutubeVideo />
        {/* <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/V7eiv3E0jUM?autoplay=1&mute=1"
          title="uOttaHack 5 Recap"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        /> */}
      </div>
    );
  }
}

export default Recent;
