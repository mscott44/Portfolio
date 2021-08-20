import React from "react";

import "../../App.css";
import ProjectsSection from "../Sections/ProjectsSection";
import ImageSlider from "../features/ImageSlider";
import { SliderData } from "../array/SliderData";

function Projects() {
  return (
    <div>
      <ProjectsSection />
      <ImageSlider slides={SliderData} />
    </div>
  );
}

export default Projects;
