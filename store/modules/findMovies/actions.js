export function findMoviesRequest({ movieTitle }) {
    return {
        type: '@findMovies/FIND_MOVIES_REQUEST',
        payload: {
            movieTitle,
        }
    }
}

export function findMoviesSuccess({ token }) {
    return {
        type: '@findMovies/FIND_MOVIES_SUCCESS',
        payload: {
            token,
        }
    }
}