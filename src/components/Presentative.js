import React from 'react';
import "./Presentative.css";
import img1 from "../asset/Group 39.png";
import img2 from "../asset/Group 55.png";
import img3 from "../asset/Group 64.png";

function Presentative() {
    const images = [img1,img2,img3,img2,img1];
    return (
       <div className="representative-wrapper">
           <div className="representative-header">
               <h1 className="representative-header-title">
                   Proudly Presented By
               </h1>
           </div>
           <div className="representative-content">
           <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
          doloribus, quae ab voluptas obcaecati magnam numquam sit natus
          blanditiis praesentium
        </p>
           </div>
           <div className="representative-cards">
           {images.map(image => 
           (<a href="#">
           <img 
            src = {image}
            key={image} 
            alt="No Image Found" 
            className={` image-card img-${image}`}
            />
            </a>))}
           </div>
       </div>
    )
}

export default Presentative
