import React from "react";
import "../Sections/MainSection.css";
import "../../App.css";

import { Button } from "../buttons/Button";

function MainSection() {
  return (
    <div className="mainhome-container">
      <h1> moriah, the innovator </h1>
      <p>forstering creative solutions</p>
      <p1>website built using react</p1>
      <div className="main-btns">
        <Button
          className="btns"
          buttonStyle="btn--main"
          buttonSize="btn--large"
        >
          View Projects
        </Button>
      </div>
    </div>
  );
}

export default MainSection;
