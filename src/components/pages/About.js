import React from "react";
import "../../App.css";

function About() {
  return (
    <div className="about__container">
      <h1 className="about">About</h1>
      <div className="about-image-wrapper">
        <div className="about-image"></div>
      </div>

      <div className="about-text">
        <p className="text">
          <div className="hey">
            <strong>Hey there!</strong>
          </div>
          <br></br>
          Currently, I am a senior computer science major, and studio arts minor
          at Loyola Marymount University. Ever since I was a child, I always
          found new ways to be creative and demonstrate my abilities. Today, I
          continue to develop my skills through frontend development and UI/UX
          design. I have a passion for design and technology and I can't wait to
          share a little piece of me with you!
        </p>
      </div>
    </div>
  );
}

export default About;
