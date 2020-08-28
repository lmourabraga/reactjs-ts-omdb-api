const findMoviesRequest = ({ movieTitle }) => {
    return {
        type: '@findMovies/FIND_MOVIES_REQUEST',
        payload: {
            movieTitle,
        }
    }
}

const findMoviesSuccess = ({ token }) => {
    return {
        type: '@findMovies/FIND_MOVIES_SUCCESS',
        payload: {
            token,
        }
    }
}

export default findMoviesRequest;