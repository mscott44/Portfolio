import React from "react";

import "../../App.css";
import ProjectsSection from "../ProjectsSection";
import ImageSlider from "../ImageSlider";
import { SliderData } from "../SliderData";

function Projects() {
  return (
    <div>
      <ProjectsSection />
      <ImageSlider slides={SliderData} />
    </div>
  );
}

export default Projects;
