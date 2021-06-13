import React from "react";
import "./Subscribe.css";
import greetImg from "../asset/Group 114.png";

function Subscribe() {
  return (
    <div className="subscribe-note-wrapper">
      <div className="subscribe-img">
        <img src={greetImg} alt="" />
      </div>
      <div className="subscribe-title">
        <p>Subscribe to Our Newsletter</p>
      </div>
      <div className="subscribe-description">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
          doloribus, quae ab voluptas obcaecati magnam numquam sit natus
          blanditiis praesentium
        </p>
      </div>
        <div className="subscribe-button-wrapper">
            <div className="email">
                <input type="email" placeholder="enter your email" className="email-id" />
            </div>
            <div className="btn">
                <button className="subscribe-btn">Subscribe</button>
            </div>
        </div>
    </div>
  );
}

export default Subscribe;
