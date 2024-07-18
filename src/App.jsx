import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/pages/Navbar";
import Home from "./Components/Main/Home";
import Footer from "./Components/Footer/Footer";
import Recomm from "./Components/pages/Recomm";
import About from "./Components/pages/About";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recomm" element={<Recomm />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
