import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { StoreState } from '../store/createStore';
import { findMoviesRequest } from '../store/modules/findMovies/actions';

import styles from '../styles/Home.module.sass'

const Home: React.FC = () => {

    const { loadingFindMoviesRequest, results, error, message } = useSelector((state: StoreState) => state.findMovies);


    const dispatch = useDispatch();

    const [submitAnimate, setSubmitAnimate] = useState(false);

    const [typedValue, setTypedValue] = useState('');

    const [page, setPage] = useState(1);

    const handleSubmit = e => {
        e.preventDefault();
        setSubmitAnimate(true);
        dispatch(findMoviesRequest({
            title: typedValue,
            page
        }));

        setTypedValue('');
    }

    const handleInfinityScroll = () => {
        console.log('funcionou');
    }

    return (
        <>
            <div className={submitAnimate ? `${styles.container} ${styles.containerAnimated}` : styles.container} onScroll={(handleInfinityScroll)}>
                <form className={submitAnimate ? `${styles.flexForm} ${styles.flexFormAnimated}` : styles.flexForm} onSubmit={(handleSubmit)}>
                    <input className={styles.input} placeholder="Procure seu Filme" type="text" required onChange={(input) => setTypedValue(input.target.value)} />
                    <button className={styles.button} type="submit">{loadingFindMoviesRequest ? 'Carregando...' : 'Buscar'}</button>
                </form>

                {results && <div className={styles.containerResults}>
                    {results.map(movie => {
                        return (
                            <div className={styles.movie} key={movie.imdbID}>
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

                                        <button>+ info</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>}

                {error && <div>
                    <h1>{message}</h1>
                </div>}
            </div>
        </>
    );
}

export default Home;