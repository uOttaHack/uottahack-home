import React from "react";
import "./Event.css";
import Marquee from "react-smooth-marquee";

const event = () => {
  return (
    <div className="Event">
      <Marquee>
        <div className="EventItem" />
      </Marquee>
    </div>
  );
};

export default event;
