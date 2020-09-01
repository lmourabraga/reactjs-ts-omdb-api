import { InfoMovieState, InfoMovieAction } from './types';

const initialState = {
    info: null,
    loadingInfoMovieRequest: false,
    error: false,
}

export default function findMovies(
    state = initialState,
    action: InfoMovieAction
): InfoMovieState {
    switch (action.type) {
        case '@infoMovie/INFO_MOVIE_REQUEST':
            return {
                ...state,
                loadingInfoMovieRequest: true,
            };
        case '@infoMovie/INFO_MOVIE_SUCCESS':
            return {
                ...state,
                loadingInfoMovieRequest: false,
                // results: [...state.results, action.payload.results], 
                info: action.payload.info,
            };
        case '@infoMovie/INFO_MOVIE_FAILURE':
            return {
                ...state,
                error: true,
            };
        default:
            return state;
    }
}