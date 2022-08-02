// import React from "react";
// import { UImageData } from "../uImageData";
// import { Link } from "react-router-dom";

// import "../Gallery.css";

// function UIUX() {
//   return (
//     <div className="ui-image-container">
//       <div className="gallery">
//         {UImageData.map((item, index) => {
//           return (
//             <div className="ui-pics" key={index}>
//               <Link className="ui-image-links" to={item.link}>
//                 <img className="ui-image" src={item.src} alt={item.title} />
//                 <div className="ui-hover">
//                   <div className="ui-text"> {item.text} </div>
//                 </div>
//               </Link>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default UIUX;

//----------USING MATERIAL UI FRAMEWORK-----------------

import React from "react";
// import "../Gallery.css";
import CardsGrid from "../cards/CardsGrid";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import "../cards/UIUX.css";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
});

export default function UIUX() {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        justify="center"
        spacing={4}
        id="padding"
        classname={classes.gridContainer}
      >
        <Grid item xs={12} sm={12} md={6}>
          <CardsGrid img="/images/foodTruck3.png" link="/uProjectOne" />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <CardsGrid img="/images/circ2.png" link="/uProjectTwo" />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <CardsGrid img="/images/mentored.png" link="/uProjectThree" />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <CardsGrid img="/images/plantfood.png" link="/uProjectFour" />
        </Grid>
      </Grid>
      {/* <h1 className="headr" style={{ justifyContent: "center" }}>
        {" "}
        more cool designs{" "}
      </h1>
      <p style={{ alignItems: "center" }}>just for fun</p> */}
    </div>
  );
}
