import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { StoreState } from '../store/createStore';
import { findMoviesRequest } from '../store/modules/findMovies/actions';

import List from '../components/list';

import styles from '../styles/Home.module.sass'

const Home: React.FC = () => {

    const { loadingFindMoviesRequest, results } = useSelector((state: StoreState) => state.findMovies);

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

    return (
        <>
            <div className={submitAnimate ? `${styles.container} ${styles.containerAnimated}` : styles.container}>
                <div>
                    <img src="/images/logo.png" width="120" alt="Logo" />
                    <form className={submitAnimate ? `${styles.flexForm} ${styles.flexFormAnimated}` : styles.flexForm} onSubmit={(handleSubmit)}>
                        <input className={styles.input} placeholder="Procure seu Filme" type="text" required onChange={(input) => setTypedValue(input.target.value)} />
                        <button className={styles.button} type="submit">{loadingFindMoviesRequest ? 'Carregando...' : 'Buscar'}</button>
                    </form>
                </div>

                {results && <List />}
            </div>
        </>
    );
}

export default Home;