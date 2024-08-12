import schoolelement from '../Assets/Image/school-element-2.png'
const AdimissionPage = () => {
  document.location.href = "/form"
}


const AdmissionsBanner = () => {
  return (
    <div className="admissions-banner">
      <div className="text">
      <h1>Admissions Are Open</h1>
      <p>Admissions into our school are open to everyone!</p>        <button id="apply-now-button" onClick={AdimissionPage}>Apply Now!</button>
</div>    
{/* <div className="skew1"></div>
<div className="skew2"></div> */}
<div className="img">      <img src={schoolelement} alt="" />
</div>    </div>
  );
}

export default AdmissionsBanner;
