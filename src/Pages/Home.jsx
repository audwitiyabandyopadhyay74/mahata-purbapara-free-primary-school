import AdmissionsBanner from "../Components/Admissions Banner"
import Banner from "../Components/Banner"
import BasicInformation from "../Components/Basic Information"
import Features from "../Components/Features"
import MiniAboutusSection from "../Components/Mini-About-us-Section"

const Home = () => {
  return (
    <>
    <Banner/>
   <span id="heading">Features <span id="note">ℹ️ Note: This All Services are Given by WB Govt</span> </span> 
   <Features/>
   <AdmissionsBanner/>
   <BasicInformation/>
   <MiniAboutusSection/>
    </>
  )
}

export default Home
