import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type InfoMovieAction = ActionType<typeof actions>;

interface infoMovieProps {
    Type: string,
    Title: string,
    Poster: string,
    Plot: string,
    Genre: string,
    Director: string,
    Writer: string,
    Actors: string,
    Awards: string,
    Year: string,
    Released: string,
    Language: string,
    Country: string,
    imdbRating: string,
    imdbVotes: string,
    Rated: string,
    Metascore: string,
}

export interface InfoMovieState {
    readonly loadingInfoMovieRequest: boolean;
    readonly error: boolean;
    readonly info: infoMovieProps | any;
}