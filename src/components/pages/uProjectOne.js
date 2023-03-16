import React from "react";
import "../css/uProjectOne.css";

function uProjectOne() {
  return (
    <body>
      <div>
      {" "}
        <div className="blocks">
          <div className="first-block">
            
            <img
                className="pic1"
                src="./images/pic1.png"
                width="1200"
                alt="pic1"
              ></img>
          </div>
          <br></br>
          <div>
          <img
                className="pic2"
                src="./images/pic2.png"
                width="1200"
                alt="pic2"
              ></img>
               <img
                className="pic3"
                src="./images/pic3.png"
                width="1200"
                alt="pic3"
              ></img>
               <img
                className="pic4"
                src="./images/pic4.png"
                width="1200"
                alt="pic4"
              ></img>
               <img
                className="pic5"
                src="./images/pic5.png"
                width="1200"
                alt="pic5"
              ></img>
               <img
                className="pic6"
                src="./images/pic6.png"
                width="1200"
                alt="pic6"
              ></img>
               <img
                className="pic7"
                src="./images/pic7.png"
                width="1200"
                alt="pic7"
              ></img>
               
               <img
                className="pic8"
                src="./images/pic8.png"
                width="1200"
                alt="pic8"
              ></img>
               <img
                className="pic9"
                src="./images/pic9.png"
                width="1200"
                alt="pic9"
              ></img>
              <div style={{ backgroundColor: "black" }}>
          <div className="video-overlay">
            <p style={{ fontFamily: "Impact" }}>low-fi</p>
            <p>prototype</p>
          </div>
          <video
            className="low-fi"
            src="./videos/low-fi.mov"
            autoPlay
            loop
            muted
            style={{ backgroundColor: "black" }}
          />
          <br></br>
        </div>
               <img
                className="pic10"
                src="./images/pic10.png"
                width="1200"
                alt="pic10"
              ></img>
               <img
                className="pic11"
                src="./images/pic11.png"
                width="1200"
                alt="pic11"
              ></img>
               <img
                className="pic12"
                src="./images/pic12.png"
                width="1200"
                alt="pic12"
              ></img>
              <div style={{ backgroundColor: "black" }}>
          <video
            className="hi-fi"
            src="./videos/hi-fi.mov"
            autoPlay
            loop
            muted
            style={{ backgroundColor: "black" }}
          />
          <br></br>
        </div>
               <img
                className="pic13"
                src="./images/pic13.png"
                width="1200"
                alt="pic13"
              ></img>
               <img
                className="pic14"
                src="./images/pic14.png"
                width="1200"
                alt="pic14"
              ></img>
               <img
                className="pic15"
                src="./images/pic15.png"
                width="1200"
                alt="pic15"
              ></img>
              </div>
              </div>
            
      </div>
    </body>
  );
}

export default uProjectOne;
