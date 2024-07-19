// import React from "react";
import { useNavigate } from "react-router-dom";

function Recomm() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Recomm</h1>
      <button onClick={() => navigate("/")}>Back to Home</button>
      {/* or  navigate(-1) to jump back one step, depending where you came from*/}
    </div>
  );
}

export default Recomm;
