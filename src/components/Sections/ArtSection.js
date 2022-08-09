import React from "react";
import "../Sections/ProjectsSection.css";
import "../../App.css";
import { Buttons } from "../buttons/Buttons";

function ArtSection() {
  return (
    <div className="main-container">
      <h1> My Art Gallery </h1>
      <p style={{ fontSize: "20px" }}> I specialize in creativity!</p>
      <p style={{ fontSize: "10px" }}>
        {" "}
        Photoshop, Illustrator, Procreate, Hand Drawings, Photography, Corel
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
