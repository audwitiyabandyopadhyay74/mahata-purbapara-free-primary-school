import Feature from "./Feature";
import { FeaturesData } from "../Data/FeaturesData";
import Img1 from '../Assets/Image/doubt-solve-in-class.png'

const features = () => {
  return (
    <div className="Features">
{
FeaturesData.map((FeaturesData) => (
    <Feature key={FeaturesData.Id} Imgsrc={FeaturesData.Imgsrc} Name={FeaturesData.Name} Description={FeaturesData.Description}/> 
)
)
}
    </div>
  );
}

export default features;
