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



const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo">Mahata Purba Para Free Primary</div>
      <div className="links">
        <button onClick={Home}>Home</button>
        <button onClick={Aboutus}>About us</button>
        <button onClick={Form}>Form</button>
        <button onClick={Contactus}>Contact us</button>

      </div>
    </nav>
  )
}

export default Navbar
