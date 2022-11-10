import React from "react";
import "../Sections/MainSection.css";
import "../../App.css";

import { Button } from "../buttons/Button";

function MainSection() {
  return (
    <div className="mainhome-container">
      <h1 className="animate-character"> The Innovator </h1>
      <p>fostering creative solutions</p>
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
