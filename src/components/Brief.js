import React from "react";
import "./Brief.css";
import logoProtoImg from "../asset/Group 228.png";
import flowerImg from "../asset/Group 195.png";
import leafImg from "../asset/Group 134.png";

const Brief = () => {
  return (
    <div className="briefs-wrapper">
      <div className="left-side-img-wrapper">
        <img src={leafImg} className="left-side-img" alt="Not found" />
      </div>
      <div className="brief-description">
        <div className="brief-description-title">Healthy life with</div>
        <div className="brief-description-subtitle">Nature Organic</div>
        <div className="brief-description-content" style={{ width: "300px" }}>
          <p>
            Vegetables are the edible parts of a plant that is used in cooking
            or can be eaten.
          </p>
        </div>
        <div className="brief-description-button">
          <button>Explore</button>
        </div>
      </div>
      <div className="brief-section-img">
        <img src={flowerImg} alt="Not found" />
      </div>
      <div className="logo-proto-helper">
        <img src={logoProtoImg} className="logo-image" alt="Not Found" />
      </div>
    </div>
  );
};

export default Brief;
