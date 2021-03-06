import React from "react";
import "./MainSection.css";
import "../App.css";

import { Button } from "./Button";

function MainSection() {
  return (
    <div className="mainhome-container">
      <video src="/videos/Dust-impact-03.mov" autoPlay loop muted />

      <h1> Moriah Scott </h1>
      <p>Aspiring Innovator</p>
      <p1>website built using react</p1>
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
