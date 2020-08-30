import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type FindMoviesAction = ActionType<typeof actions>;

export interface FindMoviesState {
    readonly loadingFindMoviesRequest: boolean;
    readonly apiConnection: boolean;
    readonly error: boolean;
    readonly results: [] | null;
}