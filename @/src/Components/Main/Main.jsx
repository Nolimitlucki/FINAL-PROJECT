import React from "react";
import "./Main.css";

export default function Header(props) {
  return (
    <div className="main">
      <label>
        <h2>Copy Paste Your Favourite Set Here!</h2>
        <br></br>
        <input className="myInput" />
        <br></br>
        <button className="submit">
          <h2>Submit</h2>
        </button>
      </label>
    </div>
  );
}
