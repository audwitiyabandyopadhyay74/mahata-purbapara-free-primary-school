import { Routes,Route } from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import './App.css'
import Footer from "./Components/Footer"
import Aboutus from "./Pages/About-us"
import Form from "./Pages/Form"
import Contactus from "./Pages/Contact us"

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About-us" element={<Aboutus/>}/>
        <Route path="/Form" element={<Form/>}/>
        <Route path="/Contact-us" element={<Contactus/>}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App
