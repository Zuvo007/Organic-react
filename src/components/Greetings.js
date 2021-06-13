import React from "react";
import "./Greetings.css";
import greetImg from "../asset/Group 114.png";

const Greetings = () => {
  return (
    <div className="greetings-note-wrapper">
      <div className="greeting-img">
        <img src={greetImg} alt="" />
      </div>
      <div className="greeting-title">
        <p>Welcome To Nature</p>
      </div>
      <div className="greeting-description">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
          doloribus, quae ab voluptas obcaecati magnam numquam sit natus
          blanditiis praesentium
        </p>
      </div>
    </div>
  );
}

export default Greetings;
