import { Routes,Route } from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import './App.css'
import Footer from "./Components/Footer"
import Aboutus from "./Pages/About-us"
import Form from "./Pages/Form"
import Contactus from "./Pages/Contact us"
import NavbarForMoblie from "./Components/Navbar For Mobile"
import SoftCopiesofbooks from "./Pages/Soft Copies of books"
import Footerformob from "./Components/Footerformob"
import Trial from "./Pages/Trial"

const App = () => {
  return (
    <>
  <Navbar/>
  <NavbarForMoblie/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About-us" element={<Aboutus/>}/>
        <Route path="/Form" element={<Form/>}/>
        <Route path="/Contact-us" element={<Contactus/>}/>
        <Route path="/softcopiesofbooks" element={<SoftCopiesofbooks/>}/>
        <Route path="/softcopiesofbooks" element={<SoftCopiesofbooks/>}/>
<Route path="/try" element={<Trial/>}/>
      </Routes>
      <Footerformob/>
    <Footer/>
    </>
  )
}

export default App
