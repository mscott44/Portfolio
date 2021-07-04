import "../../App.css";
import React from "react";

import Cards from "../Cards";

function Coding() {
  return (
    <div>
      {/* <div className="images">
  <img className="ui-image1" src="/images/dms.png" alt="" />{" "}
  <img className="ui-image2" src="/images/landingPage.png" alt="" />
  <img className="ui-image3" src="/images/signUp.png" alt="" />
</div> */}
      <h3 className="coding"> CODING PROJECTS </h3>
      <div>
        <Cards />
      </div>
    </div>
  );
}

export default Coding;
