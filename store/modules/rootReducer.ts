import { combineReducers } from 'redux';

import { StoreState } from '../createStore';

import findMovies from './findMovies/reducer';

export default combineReducers<StoreState>({
    findMovies,
});