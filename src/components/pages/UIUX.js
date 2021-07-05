import React from "react";
import { UImageData } from "../uImageData";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "../Gallery.css";

function UIUX() {
  return (
    <div className="ui-image-container">
      <div className="gallery">
        {UImageData.map((item, index) => {
          return (
            <div className="ui-pics" key={index}>
              <img className="ui-image" src={item.src} alt={item.title} />
              <div className="ui-hover">
                <Link to={item.link}>
                  <div className="ui-text"> {item.text} </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UIUX;
