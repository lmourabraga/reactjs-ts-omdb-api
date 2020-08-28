import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as actions from './actions';
import api from ''

export function* findMovies(findMoviesRequest) {
    try {
        const { movieTitle } = payload;

        const { data } = yield call(api.get, '', { movieTitle });

        yield put(actions.findMoviesSuccess( data.token ));

    } catch (error) {
        yield put(actions.findMoviesFailure());
    }
}

export default all([
    takeLatest('@findMovies/FIND_MOVIES_REQUEST', findMovies),
])