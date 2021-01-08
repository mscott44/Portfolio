import React from "react";
import "./MainSection.css";
import "../App.css";
import { Button } from "./Button";

function MainSection() {
  return (
    <div className="main-container">
      {/*video*/}
      <video src="/videos/Dust-impact-03.mov" autoPlay loop muted />

      <h1>Hi, Im Moriah</h1>
      <p>Welcome To My Innovation Hub</p>
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
