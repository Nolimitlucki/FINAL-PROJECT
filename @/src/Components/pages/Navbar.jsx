import React from "react";
import Link from "react-router-dom";

function Navbar() {
  return (
    <div className="header">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/recomm">Recommendation</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
