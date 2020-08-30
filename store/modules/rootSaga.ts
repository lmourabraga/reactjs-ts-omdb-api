import { all } from 'redux-saga/effects';

import findMovies from './findMovies/sagas';

export default function* rootSaga() {
    return yield all([findMovies]);
}