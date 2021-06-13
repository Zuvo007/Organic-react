import React from "react";
import "./Presentative.css";
import PresentiveImg1 from "../asset/Group 39.png";
import PresentiveImg2 from "../asset/Group 55.png";
import PresentiveImg3 from "../asset/Group 64.png";

const Presentative = () => {
  const images = [
    PresentiveImg1,
    PresentiveImg2,
    PresentiveImg3,
    PresentiveImg2,
    PresentiveImg1,
  ];
  return (
    <div className="representative-wrapper">
      <div className="representative-header">
        <h1 className="representative-header-title">Proudly Presented By</h1>
      </div>
      <div className="representative-content">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
          doloribus, quae ab voluptas obcaecati magnam numquam sit natus
          blanditiis praesentium
        </p>
      </div>
      <div className="representative-cards">
        {images.map((image) => (
          <a href="#">
            <img
              src={image}
              key={image}
              alt="Not Found"
              className={` image-card img-${image}`}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Presentative;
