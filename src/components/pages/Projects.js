import React from "react";
import Cards from "../Cards";
import "../../App.css";
import "../Images.css";
import ImageSlider from "../ImageSlider";
import { SliderData } from "../SliderData";

function Projects() {
  return (
    <div>
      <h1 className="projects">Projects</h1>
      <h2 className="daily-ui"> MY DAILY UI </h2>
      <div className="p">
        <p className="daily-ui-p">
          {" "}
          Showcasing a few of my Daily UI Designs! Designed on Figma{" "}
        </p>
      </div>
      <ImageSlider slides={SliderData} />

      {/* <div className="images">
        <img className="ui-image1" src="/images/dms.png" alt="" />{" "}
        <img className="ui-image2" src="/images/landingPage.png" alt="" />
        <img className="ui-image3" src="/images/signUp.png" alt="" />
      </div> */}
      <h3 className="coding"> CODING PROJECTS </h3>
      <div>
        <Cards />
      </div>
    </div>
  );
}

export default Projects;
