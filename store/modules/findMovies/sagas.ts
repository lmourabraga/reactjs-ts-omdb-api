import { takeLatest, call, put, all } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';

import * as actions from './actions';
import api from '../../../services/api';

export function* findMovies({ payload }: ActionType<typeof actions.findMoviesRequest>) {
    try {
        const title = payload.title;

        const { data } = yield call(api.get, title);

        yield put(actions.findMoviesSuccess({ results: data.Search }));
    } catch (error) {
        yield put(actions.findMoviesFailure());
    }
}

export default all([
    takeLatest('@findMovies/FIND_MOVIES_REQUEST', findMovies),
])