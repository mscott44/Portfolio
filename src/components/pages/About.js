import React from "react";
import "../../App.css";
function About() {
  return (
    <div className="about__container">
      <h1 className="about">about me</h1>
      <div className="about-image-wrapper">
        <div className="about-image"></div>
      </div>

      <div className="about-text">
        <p className="text">
          <div className="hey">
            <strong>hey there!</strong>
          </div>
          <br></br>
          I'm from San Jose, California and I've recently graduated with a
          bachelors in Computer Science! I am currently pursuing an opportunity
          in UI/UX design or something closely related (design marketing or
          front end engining) and really excited to take that first step in my
          career as a creative in a highly technical environment. I have
          experience with Figma, react, and javascript which are showcased in
          the projects on my portfolio
        </p>
      </div>
    </div>
  );
}

export default About;
