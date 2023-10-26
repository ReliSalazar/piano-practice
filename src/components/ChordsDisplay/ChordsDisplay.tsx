import React from "react";

import "./ChordsDisplay.css";

interface ChordsDisplayProps {}

const ChordsDisplay: React.FC<ChordsDisplayProps> = () => {
  return (
    <section className="ChordsDisplay container mx-auto">
      <div className=" ChordWrapper flex flex-row">
        <div className="ContentColumn basis-1/2">chord</div>
        <div className="ContentColumn basis-1/2">info</div>
      </div>
      <div className=" ChordWrapper flex flex-row">
        <div className="ContentColumn basis-1/2">chord</div>
        <div className="ContentColumn basis-1/2">info</div>
      </div>
      <div className=" ChordWrapper flex flex-row">
        <div className="ContentColumn basis-1/2">chord</div>
        <div className="ContentColumn basis-1/2">info</div>
      </div>
    </section>
  );
};

export default ChordsDisplay;
