import React, { useState } from "react";
import Imgix from "react-imgix";
import tileData from "./tileData";
import "./css/artgallery.css";
import CancelIcon from "@mui/icons-material/Cancel";

// const images = [
//   "forest1",
//   "forest2",
//   "forest3",
//   "mountain1",
//   "mountain2",
//   "mountain3",
//   "river1",
//   "river2",
//   "river3"
// ];

// const buildURL = (imagePath) => `https://assets.imgix.net/${imagePath}.webp`;

function Gallery() {
  const [model, setModel] = useState(false);
  const [tempimgT, setTempImgT] = useState("");
  const [info, setInfo] = useState("");

  const getImg = (title) => {
    /* shows title warning when photo is clicked */
       //console.warn(title);
    setTempImgT(title);
    setModel(true);
  };

  const getInfo = (title) => {
   // console.log(title)
   setInfo(title)
    setModel(true)

  }

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img alt={tempimgT} src={tempimgT} />
        <CancelIcon onClick={() => setModel(false)} />
        
       
        
      </div>
      <div className="gallery">
        {tileData.map((image) => (
          <div
            className="pics"
            key={image.img}
           
            onClick={() => getImg(image.img)}
            
          >

         
<p className="title"> {image.title} </p>
           
            <img
              alt={image.title}
              src={image.img}
              style={{ width: "100%" }}
            ></img>
          </div>
        ))}
       
      </div>
     
    </>
  );
}
export default Gallery;
