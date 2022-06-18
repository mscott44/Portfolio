import React from "react";
import "../css/uProjectFour.css";

function uProjectFour() {
  return (
    <body>
      <div>
        {" "}
        <div className="blocks">
          <div className="first-block">
            <p1 className="firstSent">
              {" "}
              During my last semester of undergrad, I was fortunate enough to
              take an Intro to User Experience course! I learned more about
              important aspects of UX Design like design methodologies,
              personas, wireframes, storyboards, journey maps, uster testing,
              protoying, and presenting my findings
            </p1>
          </div>
          <br></br>
          <div>
            <p2>
              <strong>Challenge:</strong> Design an application that helps with
              a social cause of your choosing
            </p2>
            <br></br>
            <p2>
              <strong>Solution:</strong> Lets adress the importance of
              suatainable living, and cost effective options for those who want
              to eat healthy and help the environment, even on a budget
            </p2>
          </div>
          <div className="research-block" style={{ marginTop: "50px" }}>
            <p2> I present to you....</p2>
            <br></br>
            <div
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "50%",
              }}
            >
              <img
                className="plantFood"
                src="./images/plantfood1.png"
                alt="plantFood"
              ></img>{" "}
            </div>
            <img className="slides" src="./images/howmwe.png"></img>
            <img className="slides" src="./images/slide2.png"></img>
            <br></br>
            <p3 className="research-header">the product</p3>
            <br></br>
            <p4>A hi fi protoype</p4>
            <br></br>
            <div style={{ backgroundColor: "black" }}>
              <video
                className="pf-hi-fi-vid"
                src="./videos/hi-fi-demo.mov"
                autoPlay
                loop
                muted
                style={{ backgroundColor: "black" }}
              ></video>
              <br></br>
            </div>
            <br></br>
            <img
              className="persona"
              src="./images/slide3.png"
              alt="slide3"
            ></img>
            <br></br>
            <img
              className="persona"
              src="./images/slide4.png"
              alt="slide3"
            ></img>

            <br></br>
            <img
              className="persona"
              src="./images/slide5.png"
              alt="slide3"
            ></img>
            <br></br>
            <img
              className="persona"
              src="./images/slide6.png"
              alt="slide3"
            ></img>
            <br></br>
            <img
              className="persona"
              src="./images/slide7.png"
              alt="slide3"
            ></img>
            <br></br>
            <img
              className="persona"
              src="./images/slide8.png"
              alt="slide3"
            ></img>

            <img
              className="persona"
              src="./images/slide9.png"
              alt="slide3"
            ></img>
          </div>
        </div>
      </div>
    </body>
  );
}

export default uProjectFour;
