
const Feature = ({ Imgsrc, Name, Description }) => {
  //   console.log(props);
  //   const { imgsrc, name, description } = props;
  return (
    <div className="Feature">
      <img src={Imgsrc}  />
      <span>{Name}</span>
      <p>{Description}</p>    </div>
  );
}

export default Feature;
