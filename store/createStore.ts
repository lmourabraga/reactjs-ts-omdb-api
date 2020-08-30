import { createStore, applyMiddleware, Middleware, Reducer } from 'redux';
import { FindMoviesAction, FindMoviesState } from './modules/findMovies/types';

export interface StoreState {
    findMovies: FindMoviesState;
}

export type StoreAction = FindMoviesAction;

export default (
    reducers: Reducer<StoreState, StoreAction>,
    middlewares: Middleware[]
) => {
    const enhancer = applyMiddleware(...middlewares);

    return createStore(reducers, enhancer);
}