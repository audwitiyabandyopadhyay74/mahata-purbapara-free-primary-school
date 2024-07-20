const aboutUs = () => {
  window.location.href = "/about-us";
}

const Banner = () => {


  return (
    <div className="banner">
      <div className="text"><span>Welcome to Mahata Purba Para Website</span><button id="about-us" onClick={aboutUs}>About us</button></div>
    </div>
  );  
}

export default Banner;
