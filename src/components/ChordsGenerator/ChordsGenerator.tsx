import React from "react";
import { Chord, ScalesType } from "App.d";
import "./ChordsGenerator.css";

interface ChordsGeneratorProps {
  data: any;
  Scales: ScalesType;
  selectedScale: Symbol | null;
  setSelectedScale: (scale: Symbol) => void;
  amountOfChords: number;
  setAmountOfChords: (amount: number) => void;
  setChordsToDisplay: (chords: Chord[]) => void;
}

const ChordsGenerator: React.FC<ChordsGeneratorProps> = ({
  data,
  Scales,
  selectedScale,
  setSelectedScale,
  amountOfChords,
  setAmountOfChords,
  setChordsToDisplay,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const scale = event.target.value;
    //@ts-ignore
    setSelectedScale(Scales[scale]);
    const aux = data[scale].Scales;
    const chordsToDisplay = aux.map((chord: any) => {
      chord = {
        ...chord,
        ScaleIntervals: data[scale].Intervals,
        ScaleSemiNotes: data[scale].SemiNotes,
      };
      return chord;
    });
    setChordsToDisplay(chordsToDisplay);
  };

  return (
    <div className="ChordGeneratorWrapper container mx-auto py-4">
      <select className="Select" onChange={handleChange}>
        {Object.keys(Scales).map((scale) => {
          // @ts-ignore
          const name = data[scale].Name ?? "";
          return <option value={scale}>{name}</option>;
        })}
      </select>
    </div>
  );
};

export default ChordsGenerator;
