// import { useState } from "react";
// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/pages/Navbar";
import Home from "./Components/Main/Home";
import Recomm from "./Components/pages/Recomm";
import About from "./Components/pages/About";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      {/* the Navbar component is rendered at the top of the page, no matter where you are in the app*/}
      <Navbar />
      {/* where the routes are defined */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recomm" element={<Recomm />} />
        <Route path="*" element={<h1>404: Page not found, press home</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
