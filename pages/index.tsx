import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { StoreState } from '../store/createStore';
import { findMoviesRequest } from '../store/modules/findMovies/actions';

import styles from '../styles/Home.module.sass'

const Home: React.FC = () => {

    const { loadingFindMoviesRequest, apiConnection, results, error } = useSelector((state: StoreState) => state.findMovies);
    const dispatch = useDispatch();

    console.log('LOADING: ', loadingFindMoviesRequest);
    console.log('API: ', apiConnection)
    console.log('Results: ', results)
    console.log('ERROR: ', error);

    const [submitAnimate, setSubmitAnimate] = useState(false);

    const [typedValue, setTypedValue] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        setSubmitAnimate(true);
        dispatch(findMoviesRequest({ title: typedValue }));
    }

    return (
        <>
            <div className={submitAnimate ? `${styles.container} ${styles.containerAnimated}` : styles.container}>
                <form className={submitAnimate ? `${styles.flexForm} ${styles.flexFormAnimated}` : styles.flexForm} onSubmit={(handleSubmit)}>
                    <input className={styles.input} placeholder="Procure seu Filme" type="text" required onChange={(input) => setTypedValue(input.target.value)} />
                    <button className={styles.button} type="submit">{loadingFindMoviesRequest ? 'Carregando...' : 'Buscar'}</button>
                </form>
            </div>
        </>
    );
}

export default Home;