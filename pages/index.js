import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { findMoviesRequest } from '../store/modules/findMovies/actions';

import styles from '../styles/Home.module.sass'

const Home = () => {

    const { loadingFindMoviesRequest } = useSelector((state) => state.findMovies);
    const dispatch = useDispatch();

    console.log('LOADING: ', loadingFindMoviesRequest);

    const [submitAnimate, setSubmitAnimate] = useState(false);


    const handleSubmit = e => {
        e.preventDefault();
        setSubmitAnimate(true);
    }

    return (
        <>
            <div className={submitAnimate ? `${styles.container} ${styles.containerAnimated}` : styles.container}>
                <form className={submitAnimate ? `${styles.flexForm} ${styles.flexFormAnimated}` : styles.flexForm} onSubmit={handleSubmit}>
                    <input className={styles.input} placeholder="Procure seu Filme" type="text" required />
                    <button className={styles.button} type="submit" onClick={() => dispatch(findMoviesRequest({ movieTitle: 'Star Wars' }))}>Buscar</button>
                </form>
            </div>
        </>
    );
}

export default Home;