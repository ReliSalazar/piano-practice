import React, { useState } from "react";
import Header from "components/Header";
import ChordsDisplay from "components/ChordsDisplay";
import ChordsGenerator from "components/ChordsGenerator";
import { Chord } from "./App.d";

import "./App.css";

const Scales = {
  Major: Symbol(),
  NaturalMinor: Symbol(),
  MelodicMinor: Symbol(),
};

function App() {
  const [selectedScale, setSelectedScale] = useState<Symbol | null>(null);
  const [amountOfRandomChords, setAmountOfRandomChords] = useState<number>(0);
  const [randomChords, setRandomChords] = useState<Chord[]>([]);

  return (
    <>
      <Header />
      <ChordsGenerator />
      <ChordsDisplay />
    </>
  );
}

export default App;
