/* eslint-disable react/no-unescaped-entities */
import govtofwblogo from "../Assets/Image/government-of-west-bengal-logo.png"

const MiniAboutusSection = () => {
/* The `gsap.to(".content", { x: 1000, duration: 2, delay: 1 })` code snippet is using the GSAP
(GreenSock Animation Platform) library to animate the element with the class name "content". */
  // gsap.to(".content",{
  //   x:1000,
  //   duration:2,
  //   delay:1
  // })

  gsap.to(".p",{
  x:1500,
  rotate:360,
  duration:1.5,
  delay:1
  })

  return (
    <section className='mini-about-us-section'>
      <h1 id="heading">About us</h1>
<div className="content">
      <p className="p px-1500" style={{opacity:"1",marginLeft:"0"} }>
        this school is a government school and is approved by the West Bengal ministry of education. 
        and this school is manged and owned by the Government of West Bengal it's falls under WBBPE Board. 
      </p>
      <div className="img-of-about-section"> </div>
      </div>
      <button id="know-more" onClick={()=>{
  document.location.href = "/about-us"
}}>Know More</button>
    </section>
  );
}

export default MiniAboutusSection;
