import { combineReducers } from 'redux';

import { StoreState } from '../createStore';

import findMovies from './findMovies/reducer';
import infoMovie from './infoMovie/reducer';

export default combineReducers<StoreState>({
    findMovies,
    infoMovie,
});