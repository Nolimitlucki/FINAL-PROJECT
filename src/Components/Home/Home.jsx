import { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";

const Home = () => {
  const [sets, setSets] = useState([]);

  useEffect(() => {
    async function getSets() {
      const res = await axios.get("http://localhost:3000/sets");
      setSets(res.data);
    }
    getSets();
  }, []);

  function handleSave(e) {
    e.preventDefault();
    const title = e.target.myInput1.value;
    const url = e.target.myInput2.value;
    const tracklist = e.target.myInput3.value;
    const newSet = {
      title: title,
      url: url,
      tracks: tracklist,
    };
    axios.post("http://localhost:3000/sets", newSet);
    setSets([...sets, newSet]);
  }

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
      }}
    >
      <img src="../Pictures/Daxjlive.jpg" width="800" height="400"></img>
      <h1>Copy Paste your favourite Set in here and let us do the rest</h1>
      <form onSubmit={handleSave}>
        <label>Set Titel:</label>
        <input
          style={{
            width: "400px",
          }}
          placeholder="Carl Cox at Burning Man"
          name="myInput1"
        />
        <label>Set URL:</label>
        <input
          style={{
            width: "400px",
          }}
          placeholder="Set URL"
          name="myInput2"
        />
        <br /> <label>Track List:</label>
        <input
          style={{
            width: "400px",
          }}
          placeholder="4:20min - Eminem - Lose Yourself"
          name="myInput3"
        />
        <br></br>
        <input type="submit" value="Save" />
      </form>

      <div>
        <h1>All Sets</h1>
        {sets?.map((set) => (
          <div key={set.url}>
            <h1>{set.title}</h1>
            <h2>{set.tracks}</h2>
            <h3>{set.url}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
