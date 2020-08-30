import { action } from 'typesafe-actions';

export function findMoviesRequest({
    title
}: {
    title: string;
}) {
    return action('@findMovies/FIND_MOVIES_REQUEST', {
        title,
    });
}

export function findMoviesSuccess({ results }: { results: [] }) {
    return action('@findMovies/FIND_MOVIES_SUCCESS', {
        results,
    });
}

export function findMoviesFailure() {
    return action('@findMovies/FIND_MOVIES_FAILURE');
}