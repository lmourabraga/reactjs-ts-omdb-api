import { useSelector, useDispatch } from 'react-redux';

import { StoreState } from '../store/createStore';

import { infoMovieRequest } from '../store/modules/infoMovie/actions';

import styles from '../styles/List.module.sass';

const List: React.FC = () => {

    const { results, error, message } = useSelector((state: StoreState) => state.findMovies);
    const { info } = useSelector((state: StoreState) => state.infoMovie);

    const dispatch = useDispatch();

    const handleMovie = (id) => {
        dispatch(infoMovieRequest({
            movieId: id,
        }));
    }

    console.log(info)

    return (
        <div className={styles.containerResults}>
            {results.map(movie => {

                const id = movie.imdbID

                return (
                    <div className={styles.movie} key={id}>
                        <img src={movie.Poster} alt={movie.Title} />

                        <div className={styles.tooltip}>
                            <div className={styles.info}>
                                <p>
                                    <b>{movie.Type ? 'Filme:' : movie.Type}</b>
                                </p>
                                <p>
                                    {movie.Title}
                                </p>
                                <p>
                                    <b>Ano: </b>
                                    {movie.Year}</p>

                                <button onClick={() => handleMovie(id)}>+ info</button>
                            </div>
                        </div>
                    </div>
                )
            })}
            {
                error && <div>
                    <h1>{message}</h1>
                </div>
            }
        </div >
    );
}

export default List;