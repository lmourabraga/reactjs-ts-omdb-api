import { all } from 'redux-saga/effects';

import findMovies from './findMovies/sagas';
import infoMovie from './infoMovie/sagas';

export default function* rootSaga() {
    return yield all([findMovies, infoMovie]);
}