/* eslint-disable max-params */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
export type SeriesStructure = {
  id: number;
  name: string;
  creator: string;
  year: number;
  poster: string;
  isWatched: boolean;
  score: number;
  emmies: number;
};

export class Serie implements SeriesStructure {
  constructor(
    public id: number,
    public name: string,
    public creator: string,
    public year: number,
    public poster: string,
    public isWatched: boolean,
    public score: number,
    public emmies: number
  ) {}
}
