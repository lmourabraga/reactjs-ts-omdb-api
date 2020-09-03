import { useSelector } from 'react-redux';

import { StoreState } from '../store/createStore';

import Link from 'next/link';

import styles from '../styles/List.module.sass';

const List: React.FC = () => {

    const { results } = useSelector((state: StoreState) => state.findMovies);

    return (
        <div className={styles.containerResults}>
            {results.map(movie => {

                const id = movie.imdbID;

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

                                <Link href={`/movie?id=${id}`}>
                                    <button>+ info</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div >
    );
}

export default List;