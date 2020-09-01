import { action } from 'typesafe-actions';

export function infoMovieRequest({
    movieId,
}: {
    movieId: string;
}) {
    return action('@infoMovie/INFO_MOVIE_REQUEST', {
        movieId,
    });
}

export function infoMovieSuccess({ info }: { info: [] }) {
    return action('@infoMovie/INFO_MOVIE_SUCCESS', {
        info,
    });
}

export function infoMovieFailure({ error }: { error: boolean }) {
    return action('@infoMovie/INFO_MOVIE_FAILURE', {
        error,
    });
}