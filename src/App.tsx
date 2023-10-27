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

  // TODO
  /**
   * Change structure so we have all we need.
   *
   * - Select options without symbols so we can add random option
   * - Render the whole view based on selected scale
   * - Put intervals and anotations on top
   * - Render scales on smaller cards with big name an info secction
   *   as spoiler on discord with specific info about that chord.
   */

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
