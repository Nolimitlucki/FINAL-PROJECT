import { useState } from "react";
import "./App.css";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <div className="App">
      <Header title="My header" />
      <Main message="My content" />
      <Footer note="Footer Note" />
    </div>
  );
}
