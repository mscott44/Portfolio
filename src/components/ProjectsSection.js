import React from "react";
import "./ProjectsSection.css";
import "../App.css";
import { Buttons } from "./Buttons";

function ProjectsSection() {
  return (
    <div className="main-container">
      <h1> Projects </h1>
      <p>Take a look!</p>
      <div className="buttons-container">
        <div className="main-btns">
          <Buttons
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            path="./uiux"
          >
            UI/UX Projects
          </Buttons>
        </div>
        <div className="main-btns">
          <Buttons
            className="btns1"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            path="./coding"
          >
            Coding Projects
          </Buttons>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
