
const BasicInformationCard = ({Imgsrc,Name,Description}) => {
  return (
    <div className="basic-information-card">
      <img src={Imgsrc} alt="" />
      <h1>{Name}</h1>
      <p>{Description}</p>
    </div>
  );
}

export default BasicInformationCard;
