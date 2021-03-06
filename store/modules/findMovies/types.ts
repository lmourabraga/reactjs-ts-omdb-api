import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type FindMoviesAction = ActionType<typeof actions>;

export interface FindMoviesState {
    readonly loadingFindMoviesRequest: boolean;
    readonly error: boolean;
    readonly message: string;
    readonly title: string;
    readonly page: number;
    readonly results: [] | null;
    readonly total: number;
}