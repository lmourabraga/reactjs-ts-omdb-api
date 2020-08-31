import { FindMoviesState, FindMoviesAction } from './types';

const initialState = {
    loadingFindMoviesRequest: false,
    error: false,
    message: '',
    results: null,
}

export default function findMovies(
    state = initialState,
    action: FindMoviesAction
): FindMoviesState {
    switch (action.type) {
        case '@findMovies/FIND_MOVIES_REQUEST':
            return {
                ...state,
                loadingFindMoviesRequest: true,
            };
        case '@findMovies/FIND_MOVIES_SUCCESS':
            return {
                ...state,
                loadingFindMoviesRequest: false,
                results: action.payload.results,
            };
        case '@findMovies/FIND_MOVIES_FAILURE':
            return {
                ...state,
                error: true,
                message: action.payload.message,
            };
        default:
            return state;
    }
}