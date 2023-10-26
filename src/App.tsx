import React from "react";
import Header from "components/Header";
import ChordsDisplay from "components/ChordsDisplay";
import ChordsGenerator from "components/ChordsGenerator";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <ChordsGenerator />
      <ChordsDisplay />
    </>
  );
}

export default App;
