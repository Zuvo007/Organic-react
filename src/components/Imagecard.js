import React from "react";
import "./Imagecard.css";
import imgActive from "../asset/Group 205.png";
import imgNormal from "../asset/Group 207.png";

const Imagecard = () => {
  const imagesId = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  return (
    <div className="image-card-wrapper">
      {imagesId.map((image) => (
        <a href="#">
          <img
            src={image.id === 2 ? imgActive : imgNormal}
            key={image.id}
            alt="Not Found"
            className={` image-card img-${image.id}`}
          />
        </a>
      ))}
    </div>
  );
};

export default Imagecard;
