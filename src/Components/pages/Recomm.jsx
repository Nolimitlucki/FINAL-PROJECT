import { useNavigate } from "react-router-dom";
import Gallerycomponent from "./Gallerycomponent";
function Recomm() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
      }}
    >
      <h1>Recommendation</h1>
      <h2>Feel free to listen to our handpicked Recommendations</h2>

      <Gallerycomponent />
    </div>
  );
}

export default Recomm;
