import { takeLatest, call, put, all } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';

import * as actions from './actions';
import api from '../../../services/api';

export function* findMovies({ payload }: ActionType<typeof actions.findMoviesRequest>) {
    try {
        const title = payload.title;
        const page = payload.page;

        const { data } = yield call(api.get, `?apikey=1eda9dfa&type=movie&s=${title}&page=${page}`);

        if (data.Error) {
            yield put(actions.findMoviesFailure({ error: true, message: 'The movie was not found.' }));
        } else {
            yield put(actions.findMoviesFailure({ error: false, message: '' }));
        }

        yield put(actions.findMoviesSuccess({ results: data.Search, total: parseInt(data.totalResults) }));
    } catch (error) {
        yield put(actions.findMoviesFailure({ error: true, message: 'The API connection has failed.' }));
    }
}

export default all([
    takeLatest('@findMovies/FIND_MOVIES_REQUEST', findMovies),
])