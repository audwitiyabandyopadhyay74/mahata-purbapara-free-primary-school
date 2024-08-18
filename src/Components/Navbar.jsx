import React from "react"
import { GiSaphir } from "react-icons/gi"
import { Link } from "react-router-dom"

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
//   var tl = gsap.timeline(); 

//   tl.from(".nav>button",{
//     y:-20,
// duration:1,
// stagger:1
//   })

let isDone = true;

  

  if(isDone){
    gsap.to("button",{
  y:0
    })
    isDone = false;

  }else{
    gsap.to("button",{
      y:-12,
  duration:1,
  stagger:1,
    })
    isDone = true;
  }


  //   tl.from(".nav", {opacity:0, duration:1, y:-100, ease:"back.out(1.7)"})

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
