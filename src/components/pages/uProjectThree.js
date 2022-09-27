import React from "react";
import "../css/uProjectTwo.css";
// import Background from "../images2/purple3.jpg";

function uProjectThree() {
  return (
    <div>
      <div
      // style={{
      //   backgroundImage: `url(${Background})`,
      //   zIndex: "-1",
      // }}
      >
        {" "}
        <div className="blocks">
          <div className="first-block">
            <p1
              className="firstSent"
              style={{
                marginTop: "60px",
                color: "black",
                display: "inline-block",
              }}
            >
              {" "}
              For the third project of the{" "}
              <strong>Google UX Professional Certificate</strong> course, I was
              able use all the skils I've learned for a final project
            </p1>
          </div>
          <br></br>
          <div>
            <p2 style={{ color: "black" }}>
              <strong>Challenge:</strong> Design a career mentorship service to
              help new college grads
            </p2>
            <br></br>
            <p2 style={{ color: "black" }}>
              <strong>Solution:</strong> A fun application that brings together
              mentees and mentors to cultivate the best possible expireince for
              both parties. Often times recent graduates have a hard time
              figuring what they want to do in the near future and so this app
              will bridge the gap
            </p2>
          </div>
          <div className="research-block" style={{ marginTop: "50px" }}>
            <p3 className="research-header" style={{ color: "green" }}>
              understanding the user
            </p3>
            <br></br>
            <p4 style={{ color: "black" }}>
              The research phase consisted of asking questions to gain insights
              of how different people feel toward similar mentor websites,
              building personas from those insights, competetive audits, and
              conducting usability studies. This process reinfored the fact that
              connecting with the potential users is very important and
              beneficial for both the user and designer
              <br></br>
              Through this, I was able to determine what worked well with
              existing websites, and what did not. From this information I
              dertermined what needed to be included in my design
            </p4>
            <br></br>
            <div style={{ marginTop: "30px" }}>
              <br></br>
              <div
                className="digital-wireframe-pics-block"
                style={{ backgroundColor: "white" }}
              ></div>
            </div>
            <p4 style={{ color: "black" }}>
              {" "}
              Personas were made to help give a story and a face for potential
              user groups. The example below describes Addison. Addison is a
              recent college graduate who needs a mentor that shares her
              characteristics because it can be hard to connect and trust others
              who don’t
            </p4>
            <img
              className="persona"
              src="./images/persona-3.png"
              alt="persona"
            ></img>
            <p4 style={{ color: "black" }}>
              I conuducted a competetive audit to better understand what is
              already out there in the market. Through this, it was found that
              most of the other websites were similar to each other in what was
              being offered and the design. One website would not allow you to
              see more info unless you actually joined. This is something I
              would make sure not to due in our design
            </p4>
            <img
              className="persona"
              src="./images/comp-audit-3.png"
              alt="comp-audit"
            ></img>
            <br></br>
            <div style={{ marginTop: "30px" }}>
              <p4 style={{ color: "black" }}>
                Through the ideation process, it was important to keep the
                design simple yet effective. As always, it is important to think
                about the user. So designing a layout that has the best user
                flow possible was key
              </p4>
              <br></br>

              <img
                className="journeyMap"
                src="./images/ideate-3.png"
                alt="ideate-3"
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
            <p5 className="design-header" style={{ color: "green" }}>
              starting the design{" "}
            </p5>
            <br></br>
            <p6 style={{ color: "black" }}>
              {" "}
              Digital wireframes came next on the agenda. The goal was to make
              the design very clean. There is one clear purpose of this
              app/website and it is to find a mentor. We want to make that
              process as easy as possible
            </p6>
            <br></br>
            <img
              className="paper-wireframe-1"
              src="./images/digital-wireframe-3.png"
              alt="digital-wireframe-3"
              style={{ paddingTop: "20px", paddingBottom: "20px" }}
            ></img>
          </div>
          <br></br>

          <p6 style={{ color: "black" }}>
            To prepare for the usability testing, I connected the different
            screens so that the testers could complete their user flow
          </p6>
          <br></br>
          {
            <video
              className="low-fi"
              src="./videos/low-fi-proto-3.mov"
              autoPlay
              loop
              muted
              style={{ backgroundColor: "white", zIndex: "1" }}
            />
          }

          <br></br>
          <p6 style={{ color: "black" }}>
            I conducted a small moderated usability study with 3 particpants in
            which took about 5 minutes each. The below image describes some of
            my findings from the study
          </p6>
          <br></br>
          <img
            className="paper-wireframe-1"
            src="./images/findings-3.png"
            alt="findings"
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
          ></img>
          <br></br>
          <p7 style={{ color: "green" }}>protoyping + mockups</p7>
          <br></br>
          <p6 style={{ color: "black" }}>
            After the digital wireframe was finalized, the mockup phase
            began.Some participants where bothered by the amount of empty space
            above the search bar. In the final design, to fill this awkward
            space a simple title was added to identify what page the user was on
          </p6>
          <br></br>
          <img
            className="paper-wireframe-1"
            src="./images/mockup-3.png"
            alt="mockup-3"
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
          ></img>

          <br></br>
          <p6 style={{ color: "black" }}>
            A few more examples of mockups created....
          </p6>
          <br></br>
          <img
            className="paper-wireframe-1"
            src="./images/mockups-3.png"
            alt="paper-wireframe-1"
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
          ></img>
          <br></br>
        </div>
        <div
          className="digital-wireframe-pics-block"
          style={{ marginTop: "20px", backgroundColor: "white" }}
        ></div>
        <br></br>
        <div className="blocks">
          <br></br>
          <p6 style={{ color: "black" }}>
            From the mockups, the high fidelty prototype was born. It was
            important to keep the flow as stress free as possible, simple, and
            without too many embellishments
          </p6>
          <br></br>
          {
            <video
              className="low-fi-three"
              src="./videos/hi-fi-3.mov"
              autoPlay
              loop
              muted
              style={{ backgroundColor: "white", zIndex: "1" }}
            />
          }
          <br></br>

          <p6 style={{ color: "black" }}>
            In terms of accesbility, when asking the users to share
            characteristics of themselves, we wanted to make sure the options
            were as inclusive as possible. Additionally, the color choices were
            carefully chosen so that text will pop for those hard of seeing or
            color blind
          </p6>

          <div style={{ marginTop: "50px" }}>
            <p5 className="refining-header" style={{ color: "green" }}>
              {" "}
              responsive design{" "}
            </p5>
          </div>
          <br></br>
          <p6 style={{ color: "black" }}>
            {" "}
            For the purpose of mentored being responsive, design layouts for
            tablets and a website were explored{" "}
          </p6>
          <br></br>
          <img
            className="mockup-1"
            src="./images/responsive.png"
            alt="responsive"
            style={{ paddingTop: "20px", paddingBottom: "5px" }}
          ></img>
        </div>
        <br></br>
        <div className="blocks">
          <br></br>
          <div style={{ marginTop: "50px" }}>
            <p5 className="takeaway-header" style={{ color: "green" }}>
              {" "}
              Takeaways{" "}
            </p5>
          </div>
          <br></br>
          <p6 style={{ color: "black" }}>
            <strong>Impact:</strong> The designs are there to aid the user not
            hinder. With this in mind we are hoping to create an experience that
            a user will enjoy and want to keep using in the future
          </p6>
          <br></br>
          <p6 style={{ color: "black", marginBottom: "60px" }}>
            <strong>What I learned:</strong> It is very important that when
            asking questions about personal things like ethnicity, pronouns, and
            how someone identifies that you include all possible options to
            ensure that the environment promotes inclusivity
          </p6>
        </div>
      </div>
    </div>
  );
}

export default uProjectThree;
