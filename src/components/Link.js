import React, { Component } from "react";

class Link extends Component {
  render() {
    return (
      <div className={this.props.id}>
        {this.props.display === "link" && (
          <a href={this.props.href} target="_blank">
            {this.props.text}
          </a>
        )}
        {this.props.display === "img" && (
          <a href={this.props.href}>
            <img src={this.props.src} alt="" />
          </a>
        )}
      </div>
    );
  }
}

export default Link;
