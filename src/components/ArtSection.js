import React from "react";
import "./ProjectsSection.css";
import "../App.css";
import { Buttons } from "./Buttons";

function ArtSection() {
  return (
    <div className="main-container">
      <h1> Art </h1>
      <p>Take a look!</p>
      <div className="buttons-container">
        <div className="main-btns">
          <Buttons
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            path="./photo"
          >
            Photography
          </Buttons>
        </div>
        <div className="main-btns">
          <Buttons
            className="btns1"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            path="./graphics"
          >
            Graphics
          </Buttons>
        </div>
        <div className="main-btns">
          <Buttons
            className="btns1"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            path="./procreate"
          >
            Procreate
          </Buttons>
        </div>
        <div className="main-btns">
          <Buttons
            className="btns1"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            path="./paintings"
          >
            Paintings
          </Buttons>
        </div>
      </div>
    </div>
  );
}

export default ArtSection;
