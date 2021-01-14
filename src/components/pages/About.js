import React from "react";
import "../../App.css";

function About() {
  return (
    <div className="about__container">
      <h1 className="about">About</h1>
      <div className="about-text">
        <p>
          As you may have gathered from my homepage, my name is Moriah and
          welcome to my Center of Innovation. I am a Junior computer science
          major, studio arts minor at Loyola Marymount University. Since I was a
          kid I always found new ways to be creative and demonstrate my
          abilities. I have a passion for design and tech, and through frontend
          development, I am able to continue being creative, and express myself
          through technology. The satisfaction of seeing designs come to life
          almost instantly, is unbeatable. There is no better feeling then to
          look at a finished product and know that it all started with one line
          of code and an image in mind. As of now, I only have three projects to
          show, one of them being this portfolio site. However, as I progress I
          hope to have tons more!
        </p>
      </div>
      <p className="about-adios"> Let's Get Innovative! </p>
    </div>
  );
}

export default About;
