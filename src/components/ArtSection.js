import React from "react";
import "./ProjectsSection.css";
import "../App.css";
import { Buttons } from "./Buttons";

function ArtSection() {
  return (
    <div className="main-container">
      <h1> Art </h1>
      <p style={{ fontSize: "20px" }}>
        take a look at some of the art pieces I've created :){" "}
      </p>
      <div className="buttons-container">
        <div className="main-btns">
          <Buttons
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            path="./photo"
          >
            Explore
          </Buttons>
        </div>
      </div>
    </div>
  );
}

export default ArtSection;
