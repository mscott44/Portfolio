import React from "react";
import "./MainSection.css";
import "../App.css";
import { Button } from "./Button";

function MainSection() {
  return (
    <div className="main-container">
      <video src="/videos/Dust-impact-03.mov" autoPlay loop muted />

      <h1> Moriah Scott </h1>
      <p>Aspiring Innovator</p>
      <div className="main-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          View Projects
        </Button>
      </div>
    </div>
  );
}

export default MainSection;
