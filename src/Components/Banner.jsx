// import bannerimg from '../Assets/Image/school-.png'

const aboutUs = () => {
  window.location.href = "/about-us";
}

const Banner = () => {


  return (
    <div className="banner">
      {/* <img src={"https://th.bing.com/th/id/R.b932eb9d486c2aa9b0b2edbbb03d0c61?rik=xzv51Lph6xXaYQ&riu=http%3a%2f%2ftrendingweblog.com%2fwp-content%2fuploads%2f2018%2f07%2fdelhi_public_school.jpg&ehk=JqHj4GhI9JD4qam6RLgdpFp4U5DWU2wBhqhvZZ38ACs%3d&risl=&pid=ImgRaw&r=0"} alt="" /> */}
      <div className="text"><span>Welcome to Mahata Purba Para Website</span><button id="about-us" onClick={aboutUs}>About us</button></div>
    </div>
  );  
}

export default Banner;
