export interface Anotation {
  Title: string;
  Body: string;
}

export interface BaseChord {
  ScaleIntervals: string[];
  ScaleSemiNotes: number[];
  Name: string;
  Image: string;
  Anotations: Anotation[];
}

export interface NaturalChord extends BaseChord {
  Notes: string[];
  FingeringLH: number[];
  FingeringRH: number[];
}

export interface MelodicChord extends BaseChord {
  NotesAsc: string[];
  NotesDesc: string[];
}

type Chord = NaturalChord | MelodicChord;
