import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type InfoMovieAction = ActionType<typeof actions>;

export interface InfoMovieState {
    readonly loadingInfoMovieRequest: boolean;
    readonly error: boolean;
    readonly info: [] | null;
}