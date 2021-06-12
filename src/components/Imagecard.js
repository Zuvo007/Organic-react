import React  from 'react';
import "./Imagecard.css";
import imgActive from "../asset/Group 205.png";
import imgNormal from "../asset/Group 207.png";

function Imagecard() {
    const imageId = [1,2,3,4];
    return (
        <div className="image-card-wrapper">
           {imageId.map(id => 
           (<a href="#">
           <img 
            src = {id === 2 ? imgActive: imgNormal} 
            key={id} 
            alt="No Image Found" 
            className={` image-card img-${id}`}
            />
            </a>))}
        </div>
    )
}

export default Imagecard
