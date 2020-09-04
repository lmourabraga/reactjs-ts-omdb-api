import { createStore, applyMiddleware, Middleware, Reducer } from 'redux';
import { FindMoviesAction, FindMoviesState } from './modules/findMovies/types';
import { InfoMovieAction, InfoMovieState } from './modules/infoMovie/types';

export interface StoreState {
    findMovies: FindMoviesState;
    infoMovie: InfoMovieState;
}

export type StoreAction = [FindMoviesAction, InfoMovieAction] | any;

export default (
    reducers: Reducer<StoreState, StoreAction>,
    middlewares: Middleware[]
) => {
    const enhancer = applyMiddleware(...middlewares);

    return createStore(reducers, enhancer);
}