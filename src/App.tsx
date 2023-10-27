import React, { useState } from "react";
import Header from "components/Header";
import ChordsDisplay from "components/ChordsDisplay";
import ChordsGenerator from "components/ChordsGenerator";
import data from "data.json";
import { Chord, ScalesType } from "./App.d";
import "./App.css";

const Scales: ScalesType = {
  Major: Symbol(),
  NaturalMinor: Symbol(),
  MelodicMinor: Symbol(),
};

const defaultChords = data.Major.Scales.map((chord: any) => {
  chord = {
    ...chord,
    ScaleIntervals: data.Major.Intervals,
    ScaleSemiNotes: data.Major.SemiNotes,
  };
  return chord;
});

function App() {
  const [selectedScale, setSelectedScale] = useState<Symbol>(Scales.Major);
  const [amountOfChords, setAmountOfChords] = useState<number>(12);
  const [chordsToDisplay, setChordsToDisplay] =
    useState<Chord[]>(defaultChords);

  return (
    <>
      <Header />
      <ChordsGenerator
        data={data}
        Scales={Scales}
        selectedScale={selectedScale}
        setSelectedScale={setSelectedScale}
        amountOfChords={amountOfChords}
        setAmountOfChords={setAmountOfChords}
        setChordsToDisplay={setChordsToDisplay}
      />
      <ChordsDisplay chordsToDisplay={chordsToDisplay} />
    </>
  );
}

export default App;
