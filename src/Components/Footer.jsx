import logo from '../Assets/Image/education-board-img.png'

const style = {
  height: '80vh',
}

const Home = () =>{
  document.location.href = "/"
}

const Aboutus = () =>{
  document.location.href = "/about-us"
}

const Form = () =>{
  document.location.href = "/form"
}

const Contactus = () =>{
  document.location.href = "/contact-us"
}


const Footer = () => {
  const Year = new Date().getFullYear();
    return (
    <footer className="footer sm: h-[80vh]">
  <div className="content">
  <div className="logo"><img src={logo} alt="" /></div>
      <div className="quick-links">
        <span>Quick Links</span>
        <button onClick={Aboutus}>About us</button>
        <button onClick={Form}>Form</button>
      </div>
      <div className="support-link">
        <span>Support Links</span>
      <button onClick={Contactus}>Contact us</button>
      </div>
<div className="copyright">©️Copyright {Year} All Rights Reserved</div>

  </div>
    </footer>
  );
}

export default Footer;
