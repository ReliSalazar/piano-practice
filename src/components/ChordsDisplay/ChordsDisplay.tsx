import React from "react";
import { Chord } from "App.d";
import "./ChordsDisplay.css";
import ChordData from "./ChordData";

interface ChordsDisplayProps {
  chordsToDisplay: Chord[];
}

const ChordsDisplay: React.FC<ChordsDisplayProps> = ({ chordsToDisplay }) => {
  return (
    <section className="ChordsDisplay container mx-auto flex flex-col gap-4">
      {chordsToDisplay.map((chord) => {
        return (
          <div className=" ChordWrapper flex flex-row p-4">
            <div className="ContentColumn basis-1/2">
              <p className="font-bold">{chord.Name}</p>
            </div>
            <div className="ContentColumn basis-1/2">
              {<ChordData chord={chord} />}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ChordsDisplay;
