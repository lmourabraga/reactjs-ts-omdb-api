import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { StoreState } from '../store/createStore';
import { findMoviesRequest } from '../store/modules/findMovies/actions';

import List from '../components/list';

import styles from '../styles/Home.module.sass'

const Home: React.FC = () => {

    const { loadingFindMoviesRequest, results, message } = useSelector((state: StoreState) => state.findMovies);

    const dispatch = useDispatch();

    const [submitAnimate, setSubmitAnimate] = useState(false);

    const [typedValue, setTypedValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        setSubmitAnimate(true);
        dispatch(findMoviesRequest({
            title: typedValue,
            page: 1
        }));

        setTypedValue('');
    }

    return (
        <>
            <div className={styles.container}>

                <form className={submitAnimate || results ? `${styles.flexForm} ${styles.flexFormAnimated}` : styles.flexForm} onSubmit={(handleSubmit)}>
                    <img src="/images/logo.png" width="120" alt="Logo" title="Open Movie" />

                    <div className={styles.search}>
                        <input className={styles.input} placeholder="Find your movie" type="text" required onChange={(input) => setTypedValue(input.target.value)} />
                        <button className={styles.button} type="submit">{loadingFindMoviesRequest ? 'Loading...' : 'Search'}</button>
                    </div>
                </form>

                {results && <List />}

                {message && (
                    <div className={styles.failedMessage}>
                        <h1>{message}</h1>
                    </div>
                )}
            </div>
        </>
    );
}

export default Home;