import React from "react";
import { UImageData } from "../uImageData";
import { Link } from "react-router-dom";

import "../Gallery.css";

function UIUX() {
  return (
    <div className="ui-image-container">
      <div className="gallery">
        {UImageData.map((item, index) => {
          return (
            <div className="ui-pics" key={index}>
              <Link className="ui-image-links" to={item.link}>
                <img className="ui-image" src={item.src} alt={item.title} />
                <div className="ui-hover">
                  <div className="ui-text"> {item.text} </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UIUX;
