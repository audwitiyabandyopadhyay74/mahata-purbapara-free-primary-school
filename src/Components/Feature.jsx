import React,{ useEffect } from "react";
const Feature = ({ Imgsrc, Name, Description }) => {
  //   console.log(props);
  //   const { imgsrc, name, description } = props;
//   useEffect(()=>{
//     gsap.registerPlugin(ScrollTrigger);
  
//   const feature = document.querySelector("div#rFeature");

//     gsap.to(feature,{
//         scale:1,
//         delay:1,
//         duration:2,
//         rotate:360,
// stragger:0.1
        
//     })});
  return (
    <div className="Feature" id="rFeature">
      <img src={Imgsrc}  />
      <span>{Name}</span>
      <p>{Description}</p>    </div>
  );
}

export default Feature;
