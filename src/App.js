// IMPORT useState -----D
import React, { useState } from "react";
import "./styles.css";
import imageData from "./imageData";

const imagesArr = imageData;
// IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr ----D
// console.log(imagesArr[0].img)
export default function App() {
  // USE useState TO CREATE  [bigImage, setBigImage] -----D
  const [bigImage, setBigImage] = useState(imagesArr[0].img);
  // console.log(bigImage);
  // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY ------D
  // const handle

  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  const handleClick = (imgUrl) => {
    
      // console.log("click");
      setBigImage(imgUrl)

  };
  // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL

  // const images = imagesArr;
  // for ( let i=0; i < images.length; i++){
  //   console.log(images[i]);
  // }
  const images = imagesArr.map((image, index) => {
    return (
      <img
        src={image.img}
        alt={image.alt}
        className="thumb"
        onClick={() => handleClick(image.img)}
        key={index}
      />
    );
    // {image.city}
  });
  // console.log(images);

  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key INCLUDING AN onClick -->
  // --> EVENT THAT CALLS THE HANDLE EVENT FUNCTION AND PASSES IT THE IMG URL

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">
          {/* RENDER THE IMAGES ARRAY  */}
          {images}
        </div>
        {/* THE SRC IMAGE URL SHOULD BE SET TO THE VALUE THAT IS STORED IN bigImage  */}

        <img src={bigImage} id="bigimage" alt="bigImage" />
        {}
      </div>
    </div>
  );
}
