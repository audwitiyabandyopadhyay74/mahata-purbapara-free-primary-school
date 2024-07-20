/* eslint-disable react/no-unescaped-entities */
import govtofwblogo from "../Assets/Image/government-of-west-bengal-logo.png"

const MiniAboutusSection = () => {
  return (
    <section className='mini-about-us-section'>
      <h1 id="heading">About us</h1>
<div className="content">
      <p>
        this school is a government school and is approved by the West Bengal ministry of education. 
        and this school is manged and owned by the Government of West Bengal it's falls under WBBPE Board. 
      </p>
      <img src={govtofwblogo} alt="" />
      </div>
      <button id="know-more" onClick={()=>{
  document.location.href = "/about-us"
}}>Know More</button>
    </section>
  );
}

export default MiniAboutusSection;
