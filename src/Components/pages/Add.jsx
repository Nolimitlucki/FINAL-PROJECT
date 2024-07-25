import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
      }}
    >
      <img
        src="../Pictures/Klangkuenstlerlive.jpg"
        width="600"
        height="360"
      ></img>

      <h1>About us</h1>
      <h3>
        If our Service is not able to find your tracks feel free to use other
        alternatives
      </h3>
      <h1>Add</h1>
    </div>
  );
};

export default About;
