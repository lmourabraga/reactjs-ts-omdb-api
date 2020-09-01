import { takeLatest, call, put, all } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';

import * as actions from './actions';
import api from '../../../services/api';

export function* infoMovie({ payload }: ActionType<typeof actions.infoMovieRequest>) {
    try {
        const movieId = payload.movieId;

        const { data } = yield call(api.get, `?apikey=1eda9dfa&i=${movieId}`);

        yield put(actions.infoMovieSuccess({ info: data }));
    } catch (error) {
        yield put(actions.infoMovieFailure({ error: true }));
    }
}

export default all([
    takeLatest('@infoMovie/INFO_MOVIE_REQUEST', infoMovie),
])