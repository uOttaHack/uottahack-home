import React, { Component } from "react";
import "./Organizer.css";
import organizer2018 from "./organizers2018.json";

class Organizer extends Component {
  render() {
    return (
      <div className="Organizer">
        {organizer2018.map(organizers => {
          return (
            <div key={organizers.key} className="OrganizerItem">
              {/* <img src={organizers.imgsrc} alt=""></img> */}
              <h3>{organizers.fullname}</h3>
              <h4>{organizers.position}</h4>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Organizer;
