import BasicInformationCard from "./Basic Information Card";
import {BasicInformationData} from "../Data/Basic Information"

const BasicInformation = () => {
  return (
    <div className='basic-information'>
      <span id="heading">Basic Information</span>
      <div className="cards">
{
    BasicInformationData.map((BasicInformationData) =>
        <BasicInformationCard key={BasicInformationData.Id} Imgsrc={BasicInformationData.Imgsrc} Name={BasicInformationData.Name} Description={BasicInformationData.Description}/>
    )
}    </div></div>
  );
}

export default BasicInformation;
