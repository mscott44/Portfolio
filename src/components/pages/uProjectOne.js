import React from "react";
import "../css/uProjectOne.css";

function uProjectOne() {
  return (
    <div>
      {" "}
      <div className="blocks">
        <div className="first-block">
          <p1 className="firstSent">
            {" "}
            For the first project of the{" "}
            <strong>Google UX Professional Certificate</strong> course I was
            able to learn the different phases of bulding a succesful product
          </p1>
        </div>
        <br></br>
        <div>
          <p2>
            <strong>Challenge:</strong> Build a customer service app for a food
            truck in New York
          </p2>
          <br></br>
          <p2>
            <strong>Solution:</strong> An application that will help aid food
            truck diners in having the best expireince when eating good food
          </p2>
        </div>
        <div className="research-block" style={{ marginTop: "50px" }}>
          <p3 className="research-header">research</p3>
          <br></br>
          <p4>
            I conducted interviews, a preliminary survey, and created empathy
            maps to uderstand the users I would be designing for. A primary
            group of users would be young adults who frequent the food truck for
            a quick and delicious bite to eat. Research revealed that there are
            issues that arise when attempting to dine at food trucks. Some
            issues include: figuring out the location of the food truck, long
            lines, and getting wrong orders
          </p4>
          <br></br>
          <div style={{ marginTop: "30px" }}>
            <p4>Research also allowed for pain points to be discovered</p4>
            <br></br>
            <img
              className="painPoint"
              src="./images/painPoints.png"
              alt="painPoint"
            ></img>
          </div>
          <p4>
            {" "}
            Personas were made to help give a story and a face for potential
            user groups. Below is an example of one of them
          </p4>
          <img
            className="persona"
            src="./images/persona.png"
            alt="persona"
          ></img>
          <p4>
            <br></br> <strong>Problem Statment:</strong> Charlie is a food
            connoisseur visiting New York who needs way to get food quickly
            without having to wait in a long line. He wants to try as many food
            trucks as possible to get the most out of his trip
          </p4>
          <br></br>
          <div style={{ marginTop: "30px" }}>
            <p4>
              A <strong>Journey Map </strong> was created to help map out the
              tasks that a user may encounter while using the app. I was able to
              find areas were a user could potentially become nervous or unsure.
              These user feelings lead to improvement opportunities such as
              rewards for first time users that could be beneficial
            </p4>
            <br></br>

            <img
              className="journeyMap"
              src="./images/journeyMap.png"
              alt="journeyMap"
              style={{ paddingTop: "20px" }}
            ></img>
          </div>
        </div>
        <div
          className="design-block"
          style={{
            marginTop: "50px",
          }}
        >
          <p5 className="design-header">design </p5>
          <br></br>
          <p6>
            {" "}
            I created paper and digital wireframes to get a better idea a of how
            I wanted my app to look. The paper wireframes were the first step in
            making all the ideas I had in my head come to life{" "}
          </p6>
          <br></br>
          <img
            className="paper-wireframe-1"
            src="./images/paperWireframe-1.png"
            alt="paper-wireframe-1"
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
          ></img>
        </div>

        <br></br>
        <p6>
          After going through the paper wireframes and recieving feedback, a
          design was chosen. The goal was to have a mixture of simplicity and
          fun so every user has a beyond exceptional expireince when using this
          app{" "}
        </p6>
      </div>
      <div
        className="digital-wireframe-pics-block"
        style={{ marginTop: "20px", backgroundColor: "black" }}
      >
        <div>
          <img
            className="digital-wireframe-1"
            src="./images/digitalWireframe-1.png"
            alt="digital-wireframe-1"
            style={{
              paddingTop: "20px",
              paddingBottom: "20px",

              height: "500px",
              width: "450px",
            }}
          ></img>
        </div>
        <div>
          <img
            className="digital-wireframe-2"
            src="./images/digitalWireframe-2.png"
            alt="digital-wireframe-2"
            style={{
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          ></img>
        </div>
      </div>
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
      <div className="blocks">
        <p6>
          {" "}
          After conducting two rounds of usability studies I found a few things
          to be true.
        </p6>
        <br></br>
        <img
          className="user-findings"
          src="./images/userFindings.png"
          alt="user-findings"
          style={{ paddingTop: "20px", paddingBottom: "5px" }}
        ></img>
        <br></br>
        <p6>
          {" "}
          To help organize the findings from the usability studies, I made an
          affinity map for each
        </p6>
        <br></br>
        <img
          className="affinity-map"
          src="./images/affinityMap.png"
          alt="affinityMap"
          style={{ paddingTop: "20px", paddingBottom: "5px" }}
        ></img>
        <p5 className="refining-header"> refining the design </p5>
        <br></br>
        <p6>
          {" "}
          Before the usability study, there were hardly any labels describing
          the differnt icons which left some uers confused. After the usability
          study I added many labels so it is clear what each icon action is
        </p6>
        <br></br>
        <img
          className="mockup-1"
          src="./images/mockup1.png"
          alt="mockup-1"
          style={{ paddingTop: "20px", paddingBottom: "5px" }}
        ></img>
        <br></br>
        <p6>
          {" "}
          Among other changes made from my usabilty studies, and just overall
          design enhancments, a high fidelity prototype was developed{" "}
        </p6>
      </div>
      <video
        className="hi-fi"
        src="./videos/hi-fi.mov"
        autoPlay
        loop
        muted
        style={{ backgroundColor: "black" }}
      />
      <br></br>
      <div className="blocks">
        <p6 s>
          For accesibility considerations I took into account the color scheme,
          and made sure not to use color combinatiolns that would be difficult
          for those who are color blind. Additionally I labeled most icons so
          users who are not used to this kind of app format is aware of what the
          different features mean
        </p6>
        <br></br>
        <p5 className="takeaway-header"> Takeaways </p5>
        <br></br>
        <p6>
          <strong>Impact:</strong> empireats allows the user to feel taken care
          of in their quest to satisfy their hunger and cravings{" "}
        </p6>
        <br></br>
        <p6>
          <strong>What I learned:</strong> I learned that even though you may
          think everything about your design is super intuitive, there will most
          likely be a feature that somebody else doesn't understand or has never
          seen before
        </p6>
      </div>
    </div>
  );
}

export default uProjectOne;
