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
        width="640"
        height="380"
      ></img>

      <h1>About us</h1>
      <h3>
        At Trackfinder, we provide detailed tracklists from a wide range of
        techno sets, spanning from underground parties to renowned festivals.
        Our database is meticulously curated and constantly updated, ensuring
        you have access to the freshest and most comprehensive information
        available. We also offer a platform for community contributions, where
        fans can share track IDs and participate in discussions to identify
        elusive tracks.
      </h3>
      <img src="../Pictures/Bassgeflüster.jpg" width="600" height="400"></img>
    </div>
  );
};

export default About;
