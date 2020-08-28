import { combineReducers } from 'redux';

import findMovies from './findMovies/reducer';

export default combineReducers({
    findMovies,
});