import React from "react";
import "./Header.css";

export default function Header(props) {
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
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
