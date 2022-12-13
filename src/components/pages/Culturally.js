import React from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';


import "../../App.css";



function Culturally() {

  return (
    <div>
        <h1 style={{fontFamily: "Poppins, sans-serif", textAlign: "center" , fontWeight: "lighter", marginTop: "3rem"}}> UI/UX Intern at Culturally Arts Collective </h1>
        <div style={{paddingLeft: "25rem", paddingTop: "1rem"}}>
        <p1 style={{fontFamily: "Poppins, sans-serif", textAlign: "center" , fontWeight: "lighter", marginTop: "5rem"}}> At CAC my duties include: </p1> 
        <ul style={{paddingTop: "1rem"}}>
       <li>maintianing the website</li>
        <li>creating new design solutions for better ux</li>
        <li> helping teamates with any IT issues</li>
        <li> and developing any additional functionalities using javascript</li>
        </ul>
        </div>
        <h2 style={{fontFamily: "Poppins, sans-serif", textAlign: "center" , marginTop: "1rem"}}> **This is my current position, more completed projects will be uploaded soon!**</h2>
        {/* <h2 style={{fontFamily: "Poppins, sans-serif"}}> Projects</h2>
        <br></br> */}
        <h3 style={{fontFamily: "Poppins, sans-serif", margin: 38}}> Artist Directory With Members Feature </h3>
       

        <Card sx={{ maxWidth: 600, margin: 5, position: "relative", float: "right", boxShadow: "none"}}>
       
      <CardMedia
        component="img"
        height="499"
        image="images/finalDirectory.png"
        alt="Paella dish"
      />

<CardContent>
        <Typography fontSize={20}>
          After
        </Typography>
      </CardContent>
     
      </Card>
      <div>

      <Card sx={{ maxWidth: 600, display: "inline-block", margin: 5, boxShadow: "none"
    }}>
     
      
      <CardMedia
        component="img"
        height="499"
        image="images/Before02.png"
        alt="Paella dish"
      />
       <CardContent>
        <Typography fontSize={20}>
          Before
        </Typography>
      </CardContent>
      
      </Card>
        
        {/* <h4 style={{postions: "relative", float: "right"}}> High-fi Implementation</h4> */}
        <div style={{ display: 'flex', alignItems: 'center',
        justifyContent: 'center', maxHeight: "500"}}>
        <video
                className="directory-vid"
                src="./videos/ArtistDirectoryPage.mov"
                autoPlay
                loop
                muted
                width="700"
                height="700"
                style={{  flexBasis: 40}}
              ></video>
              
              <br></br>
  <div style={{padding: 60}}>
     
       <p1 > Besides a revamp on the visual design, the artist directory was missing key features. A search bar was added to make it easier for users to find a particular artist, without needing to scroll through an endless list. Additionally, a pagination bar was added so that users can skip between pages effortlessly </p1> 
       </div>
       </div>
    
       </div>
        
       

   
  
       

       
   
        {/* <h3> Updating Main Exhibtion Page and Creating New Pages</h3>
        <h4>Low-fi sketches</h4>
        <h4>High-fi Implementation</h4>
        <h4>Final</h4>
        <h3> Applications Pages and Forms</h3>
        <h4>Low-fi sketches</h4>
        <h4>High-fi Implementation</h4>
        <h4>Final</h4>
        <h3> Open Calls and Submissions Page</h3>
        <h4>Low-fi sketches</h4>
        <h4>High-fi Implementation</h4>
        <h4>Final</h4> */}

    </div>
     
  );
}

export default Culturally;
