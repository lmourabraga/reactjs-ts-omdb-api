import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../store/createStore';
import { infoMovieRequest } from '../store/modules/infoMovie/actions';

import Link from 'next/link';

import styles from '../styles/Movie.module.sass'

const Movie = ({ id }) => {
    const { info } = useSelector((state: StoreState) => state.infoMovie);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(infoMovieRequest({
            movieId: id,
        }));
    }, []);

    console.log(info)

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.header}>
                    <h2>{info?.Type}</h2>

                    <Link href='/'>
                        <a>Back</a>
                    </Link>
                </div>
                <div className={styles.mainInfo}>
                    <img src={info?.Poster} alt={info?.Title} />
                    <div className={styles.info}>
                        <h1>{info?.Title}</h1>
                        <p className={styles.plot}>{info?.Plot}</p>
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
                    </div>
                </div>

            </div>
        </div>
    )
}

{/* <p>
{info.Rated}
<br />
<br />
{info.Metascore}
<br />
{info.imdbRating}
<br />
{info.imdbVotes}

</p> */}

Movie.getInitialProps = async ({ query }) => {
    const { id } = query
    return { id }
};

export default Movie;