import React from "react";
import data from "../../data.json";

import "./ChordsGenerator.css";

interface ChordsGeneratorProps {}

const ChordsGenerator: React.FC<ChordsGeneratorProps> = () => {
  const handleGenerate = () => {
    console.log(data);
  };

  return (
    <div className="ChordGeneratorWrapper container mx-auto">
      <button onClick={handleGenerate}>click!</button>
    </div>
  );
};

export default ChordsGenerator;
/*
{
        "Name": "A Melodic Minor",
        "NotesAsc": [],
        "NotesDesc": [],
        "Image": "AMelodicMinor"
      }
*/
