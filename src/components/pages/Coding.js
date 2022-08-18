// import "../../App.css";
// import React from "react";

// import Cards from "../cards/Cards";

// function Coding() {
//   return (
//     <div>
//       {/* <div className="images">
//   <img className="ui-image1" src="/images/dms.png" alt="" />{" "}
//   <img className="ui-image2" src="/images/landingPage.png" alt="" />
//   <img className="ui-image3" src="/images/signUp.png" alt="" />
// </div> */}
//       <h3 className="coding"> CODING PROJECTS </h3>
//       <div>
//         <Cards />
//       </div>
//     </div>
//   );
// }

//----------USING MATERIAL UI FRAMEWORK-----------------

import React from "react";
// import "../Gallery.css";
import CardsGrid from "../cards/CardsGrid";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import "../cards/UIUX.css";
import styled from "@emotion/styled";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
});

function Coding() {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      spacing={4}
      id="padding"
      classname={classes.gridContainer}
    >
      <Grid item xs={12} sm={12} md={6}>
        <CardsGrid
          img="/images/otbCard.png"
          link="https://ontheblock.vercel.app"
        />
        <Typography style={{ fontSize: "35px", color: "#d99014" }}>
          {" "}
          On the Block
        </Typography>
        <Typography>
          {" "}
          On The Block served as a platform for users to plan block parties by
          choosing from different local small business’s. Used Figma and Marvel
          to create preliminary prototypes and wire framing. Conducted
          evaluations of our system by using Cognitive, Heuristic, Predictive,
          Retrospective, and Think Aloud techniques
        </Typography>
      </Grid>

      <Grid item xs={12} sm={12} md={6}>
        <CardsGrid img="/images/Beaker.png" link="https://beaker.vercel.app" />
        <Typography style={{ fontSize: "35px", color: "#1497d9" }}>
          {" "}
          Beaker
        </Typography>
        <Typography>
          {" "}
          Beaker was built in hopes of helping students and professors alike
          connect and be apart of research projects that they may not have been
          able to find on their own. In my main role as the Frontend Developer I
          used the React library & Material UI framework. I also assisted with
          backend functionalities using firebase as a database{" "}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Coding;
