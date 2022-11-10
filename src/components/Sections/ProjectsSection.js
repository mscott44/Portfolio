import React from "react";
import "../Sections/ProjectsSection.css";
import "../../App.css";
import { Buttons } from "../buttons/Buttons";

function ProjectsSection() {
  return (
    <div className="main-container">
      <h1> Projects </h1>
      <p> take a peek at my creative process</p>
      <div className="buttons-container">
        <div className="main-btns">
          <Buttons
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            path="./uiux"
            id="button--black"
          >
            UI/UX 
          </Buttons>
        </div>
        <div className="main-btns">
          <Buttons
            className="btns1"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            path="./coding"
          >
            Code
          </Buttons>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
