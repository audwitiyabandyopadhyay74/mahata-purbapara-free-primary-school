import React,{useEffect} from "react"

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
  // var tl = gsap.timeline();

  // tl.from("button",{

  //   opacity:100,
  //   duration:1, 
  //   delay:0.5
    
  // })
    // tl.from(".nav", {opacity:0, duration:1, y:-100, ease:"back.out(1.7)"})

  return (
    <nav className="nav" style={{position:"fixed"}}>
      <div className="logo">Mahata Purba Para Free Primary</div>
      <div className="links">
        <button onClick={Home}>Home</button>
        <button onClick={Aboutus}>About us</button>
        <button onClick={Form}>Form</button>
        <button onClick={Contactus} style={{width:"15vh"}}>Contact us</button>

      </div>
    </nav>
  )
}

export default Navbar
