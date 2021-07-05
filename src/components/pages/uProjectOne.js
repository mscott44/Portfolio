import React from "react";
import "../uProjectOne.css";

function uProjectOne() {
  return (
    <body className="projectOnePage">
      <div className="blocks">
        {" "}
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
            <img className="painPoint" src="./images/painPoints.png"></img>
          </div>
          <p4>
            {" "}
            Personas were made to help give a story and a face for potential
            user groups. Below is an example of one of them
          </p4>
          <img className="painPoint" src="./images/persona.png"></img>
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

            <img className="journeyMap" src="./images/journeyMap.png"></img>
          </div>
        </div>
      </div>
    </body>
  );
}

export default uProjectOne;
