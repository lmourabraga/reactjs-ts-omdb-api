import { action } from 'typesafe-actions';

export function findMoviesRequest({
    title,
    page,
}: {
    title: string;
    page: number
}) {
    return action('@findMovies/FIND_MOVIES_REQUEST', {
        title,
        page,
    });
}

export function findMoviesSuccess({ 
    title, 
    page, 
    results, 
    total 
}: { 
    title: string, 
    page: number, 
    results: [], 
    total: number 
}) {
    return action('@findMovies/FIND_MOVIES_SUCCESS', {
        title,
        page,
        results,
        total,
    });
}

export function findMoviesFailure({ error, message }: { error: boolean, message: string }) {
    return action('@findMovies/FIND_MOVIES_FAILURE', {
        error,
        message,
    });
}