
const inicialState = {
    loadingFindMoviesRequest: false,
    movieTitle: null,
}

const findMovies = (state = inicialState, action) => {
    switch (action.type) {
        case '@findMovies/FIND_MOVIES_REQUEST':
            return {
                ...state,
                loadingFindMoviesRequest: true,
            }
        default:
            return state;
    }
}

export default findMovies;