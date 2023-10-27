import React from "react";
import { Chord, MelodicChord, NaturalChord } from "App.d";

interface ChordDataProps {
  chord: Chord;
}

const ChordData: React.FC<ChordDataProps> = ({ chord }) => {
  if (chord.hasOwnProperty("Notes")) {
    chord = chord as NaturalChord;
    return (
      <div className="flex flex-col gap-2">
        <div className="Info">
          <p className="font-bold">Notes:</p>
          <pre>{JSON.stringify(chord.Notes)}</pre>
        </div>

        <div className="Info">
          <p className="font-bold">Inervals:</p>
          <pre>{JSON.stringify(chord.ScaleIntervals)}</pre>
        </div>

        <div className="Info">
          <p className="font-bold">Semi-notes:</p>
          <pre>{JSON.stringify(chord.ScaleSemiNotes)}</pre>
        </div>

        <div className="Info">
          <p className="font-bold">Fingering (left hand):</p>
          <pre>{JSON.stringify(chord.FingeringLH)}</pre>
        </div>

        <div className="Info">
          <p className="font-bold">Fingering (right hand):</p>
          <pre>{JSON.stringify(chord.FingeringRH)}</pre>
        </div>
      </div>
    );
  }

  if (chord.hasOwnProperty("NotesAsc")) {
    chord = chord as MelodicChord;
    return (
      <div className="flex flex-col gap-2">
        <div className="Info">
          <p className="font-bold">Notes Ascending:</p>
          <pre>{JSON.stringify(chord.NotesAsc)}</pre>
        </div>

        <div className="Info">
          <p className="font-bold">Notes Descending:</p>
          <pre>{JSON.stringify(chord.NotesDesc)}</pre>
        </div>
      </div>
    );
  }

  return (
    <div>
      <p className="font-bold">unknown chord type</p>
    </div>
  );
};

export default ChordData;
