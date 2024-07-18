import React from "react";
import "./Header.css";

export default function Navbar() {
  return (
    <div className="header">
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#recommendation">Recommendation</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
    </div>
  );
}
