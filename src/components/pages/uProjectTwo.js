import React from "react";
import "../css/uProjectTwo.css";
import Background from "../images2/purple3.jpg";

function uProjectTwo() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${Background})`,
          zIndex: "-1",
        }}
      >
        {" "}
        <div className="blocks">
          <div className="first-block">
            <p1
              className="firstSent"
              style={{
                marginTop: "60px",
                color: "white",
                display: "inline-block",
              }}
            >
              {" "}
              For the second project of the{" "}
              <strong>Google UX Professional Certificate</strong> course, I was
              able to deepen my skills learned from project one
            </p1>
          </div>
          <br></br>
          <div>
            <p2 style={{ color: "white" }}>
              <strong>Challenge:</strong> Design a shopping expirence for a
              boutique retailer
            </p2>
            <br></br>
            <p2 style={{ color: "white" }}>
              <strong>Solution:</strong> A beautiful website that ensures the
              best expirience for users by being intuitive and ultimately
              seamless.
            </p2>
          </div>
          <div className="research-block" style={{ marginTop: "50px" }}>
            <p3 className="research-header" style={{ color: "white" }}>
              understanding the user
            </p3>
            <br></br>
            <p4 style={{ color: "white" }}>
              The research phase consisted of asking questions to gain insights
              of how different people feel toward shopping websites, building
              personas from those insights, competetive audits, and conducting
              usability studies. This process reinfored the fact that
              empathizing with the potential users is very important and
              beneficial for both the user and designer
              <br></br>
              Through this, I was able to determine what worked well with
              existing websites, and what did not. From this information I
              dertermined what needed to be included in my design
            </p4>
            <br></br>
            <div style={{ marginTop: "30px" }}>
              <p4 style={{ color: "white" }}>
                Research also allowed for pain points to be defined and
                discovered
              </p4>
              <br></br>
              <div
                className="digital-wireframe-pics-block"
                style={{ backgroundColor: "white" }}
              >
                {/* <img
                  className="painPoint"
                  src="./images/painPoints.png"
                  alt="painPoint"
                ></img> */}
              </div>
            </div>
            <p4 style={{ color: "white" }}>
              {" "}
              Personas were made to help give a story and a face for potential
              user groups. Below is an example of one of them
            </p4>
            {/* <img
              className="persona"
              src="./images/persona.png"
              alt="persona"
            ></img> */}
            <p4 style={{ color: "white" }}>
              <br></br> <strong>Problem Statment:</strong> Alana is a busy
              college student and barista who needs a quick and intuitive
              website design beacuse shopping relieves the stress she
              expiriences on the daily
            </p4>
            <br></br>
            <div style={{ marginTop: "30px" }}>
              <p4 style={{ color: "white" }}>
                A <strong>Journey Map </strong> was created to help map out the
                tasks that a user may encounter while using the shopping
                website. I was able to find areas were a user could potentially
                become nervous or unsure. I found that to relieve those
                feelings, improvemnts like a customer rewards program and
                incredibly clear policies could be great additions. Overall, any
                shopping website has the potential of being succesful but
                certain aspects, like th ones I listed above, are a must
              </p4>
              <br></br>

              {/* <img
                className="journeyMap"
                src="./images/journeyMap.png"
                alt="journeyMap"
                style={{ paddingTop: "20px" }}
              ></img> */}
            </div>
          </div>
          <div
            className="design-block"
            style={{
              marginTop: "50px",
            }}
          >
            <p5 className="design-header" style={{ color: "white" }}>
              starting the design{" "}
            </p5>
            <br></br>
            <p6 style={{ color: "white" }}>
              {" "}
              Here comes the fun part, ideation! I created a sitemap, as well as
              paper and digital wireframes that account for different screen
              sizes.
              <br></br>
              The sitemap came first, and this was a great way to get all the
              plans for navigation of the website on a piece of paper, or a
              piece of digital paper rather{" "}
            </p6>
            <br></br>
            <img
              className="paper-wireframe-1"
              src="./images/siteMap2.png"
              alt="siteMap2"
              style={{ paddingTop: "20px", paddingBottom: "20px" }}
            ></img>
          </div>
          <br></br>

          <p6 style={{ color: "white" }}>
            Second came the paper wireframes in which the rough sketches of the
            layout were born. In this step I accounted for mobile and tablet
            screen sizes{" "}
          </p6>
          <br></br>
          <img
            className="paper-wireframe-1"
            src="./images/paper-wireframe2.png"
            alt="paper-wireframe2"
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
          ></img>

          <br></br>
          <p6 style={{ color: "white" }}>
            Third came the digitial wireframes in which the rough sketches of
            the layout were slightly elevated. I wanted to keep the homepage
            aesthetically simple. With a single picture covering practically the
            entire page, it is impossible not to see the different action items
            in the nav bar or in the footer for any assistance that a customer
            may need{" "}
          </p6>
          <br></br>
          <img
            className="paper-wireframe-1"
            src="./images/digital-wireframe2.png"
            alt="paper-wireframe-1"
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
          ></img>
          <br></br>
          <p7>protoyping</p7>
          <br></br>
          <p6 style={{ color: "white" }}>
            After the digital wireframe was finalized for the website, the
            protoyping began. Simple transitions were chosen, and the overall
            website move smoothly between each page. I focused on simple and
            direct movement between the different pages so that the overall flow
            came across clearly (this protoype included the changed that were
            made after the usbaility test){" "}
          </p6>
          <br></br>
          <video
            className="low-fi"
            src="./videos/project-2-lowfi.mov"
            autoPlay
            loop
            muted
            style={{ backgroundColor: "black", zIndex: "1" }}
          />
          <br></br>
          <p7> low-fi usability study </p7>
          <br></br>
          <p6 style={{ color: "white" }}>
            I conducted a modertaed usability study with 4 participants in which
            took about 5 to 10 minutes
          </p6>
          <br></br>
          {/* <img
              className="paper-wireframe-1"
              src="./images/paperWireframe-1.png"
              alt="paper-wireframe-1"
              style={{ paddingTop: "20px", paddingBottom: "20px" }}
            ></img> */}
          <br></br>
          <p6 style={{ color: "white" }}>
            After going through the paper wireframes and recieving feedback, a
            design was chosen. The goal was to have a mixture of simplicity and
            fun so every user has a beyond exceptional expireince when using
            this app. Regarding the feedback recieved a few users felt that
            there needed to be another way to get to the reviews then having to
            scroll down. Other users were surprised by the fact that there wasno
            review page before an actual payment. As you may have seen from the
            protoype ealier, these changes were made in order to provide a more
            comfotable environment for the users{" "}
          </p6>
        </div>
        <div
          className="digital-wireframe-pics-block"
          style={{ marginTop: "20px", backgroundColor: "white" }}
        ></div>
        <br></br>
        <div className="blocks">
          <br></br>

          <div style={{ marginTop: "50px" }}>
            <p5 className="refining-header" style={{ color: "white" }}>
              {" "}
              refining the design{" "}
            </p5>
          </div>
          <br></br>
          <p6 style={{ color: "white" }}>
            {" "}
            Taking into account the findings fron the usability study, the goal
            was to have rich colors and showcase unique, trendy fashion. Based
            on feedback, the homepage makes a huge impression when shopping so
            it needed to have a draw. Below are some of the mockups created.
          </p6>
          <br></br>
          <img
            className="mockup-1"
            src="./images/mockups-2.png"
            alt="mockup-2"
            style={{ paddingTop: "20px", paddingBottom: "5px" }}
          ></img>
          <br></br>
          <p6 style={{ color: "white" }}>
            {" "}
            Mockups for other screen sizes such as a mobile phone and a tablet
            for the purposes resposiveness were designed.{" "}
          </p6>
        </div>
        {
          <img
            className="mockup-1"
            src="./images/screenSizes-2.png"
            alt="mockup-2.1"
            style={{ paddingTop: "20px", paddingBottom: "5px" }}
          ></img>
        }
        <br></br>
        <div className="blocks">
          <p6 style={{ color: "white" }}>
            {" "}
            A hi fidelty prototype was developed so that the mockups would come
            to life
          </p6>
          <br></br>
          {
            // <video
            //   className="low-fi"
            //   src="./videos/hi-fi-2.mov"
            //   autoPlay
            //   loop
            //   muted
            //   style={{ backgroundColor: "black", zIndex: "1" }}
            // />
          }
          <p6 style={{ color: "white" }}>
            For accesibility considerations I took into account the color
            scheme, and made sure not to use color combinatiolns that would be
            difficult for those who are color blind or hard of seeing.
            Additionally I tried to include more labeling just in case the user
            had trouble understanding button functionalities or what to do next
          </p6>
          <br></br>
          <div style={{ marginTop: "50px" }}>
            <p5 className="takeaway-header" style={{ color: "white" }}>
              {" "}
              Takeaways{" "}
            </p5>
          </div>
          <br></br>
          <p6 style={{ color: "white" }}>
            <strong>Impact:</strong> Shopping is a part of many people lives.
            For people who especially love fashion it is something to live for.
            The opportunity to create a website for a business that can aid
            someone in their fashion exploration is incredibly fulfilling .
          </p6>
          <br></br>
          <p6 style={{ color: "white", marginBottom: "60px" }}>
            <strong>What I learned:</strong> I learned that through every step
            of the process, you must have the user in mind. Even when you’ve
            worked all night on a complete user flow mockup, a user may have
            different opinions
          </p6>
        </div>
      </div>
    </div>
  );
}

export default uProjectTwo;
