import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../store/createStore';
import { infoMovieRequest } from '../store/modules/infoMovie/actions';

import Link from 'next/link';

import { MdKeyboardReturn } from 'react-icons/md'
import { BiCameraMovie } from 'react-icons/bi'

import styles from '../styles/Movie.module.sass'

const Movie = ({ id }) => {
    const { info } = useSelector((state: StoreState) => state.infoMovie);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(infoMovieRequest({
            movieId: id,
        }));
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.header}>
                    <h2>
                        <BiCameraMovie /> {info?.Type}
                    </h2>

                    <Link href='/'>
                        <a title="Back" className={styles.iconLink}>
                            <MdKeyboardReturn />
                        </a>
                    </Link>
                </div>
                <div className={styles.mainInfo}>
                    <img src={info?.Poster} alt={info?.Title} />
                    <div className={styles.info}>
                        <h1>{info?.Title}</h1>
                        <p>{info?.Plot}</p>
                        <p>
                            <span className={styles.featuredInfo}>Genre: </span> {info?.Genre}
                        </p>
                        <p>
                            <span className={styles.featuredInfo}>Directed by: </span> {info?.Director}
                        </p>
                        <p>
                            <span className={styles.featuredInfo}>Written by: </span> {info?.Writer}
                        </p>
                        <p>
                            <span className={styles.featuredInfo}>Starred by: </span> {info?.Actors}
                        </p>
                        <p>
                            <span className={styles.featuredInfo}>Awards: </span> {info?.Awards}

                        </p>
                        <p>
                            <span className={styles.featuredInfo}>Year: </span> {info?.Year}
                            <span className={styles.featuredInfo}> Release Date: </span> {info?.Released}
                        </p>
                        <p>
                            <span className={styles.featuredInfo}>Language: </span> {info?.Language} ({info?.Country})
                        </p>
                        <div className={styles.footer}>
                            <p>
                                <span className={styles.featuredInfo}>IMDB Rating: </span> {info?.imdbRating}
                            </p>
                            <p>
                                <span className={styles.featuredInfo}>IMDB Votes: </span> {info?.imdbVotes}
                            </p>
                            <p>
                                <span className={styles.featuredInfo}>Rated: </span> {info?.Rated}
                            </p>
                            <p>
                                <span className={styles.featuredInfo}>Metascore: </span> {info?.Metascore}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Movie.getInitialProps = async ({ query }) => {
    const { id } = query
    return { id }
};

export default Movie;