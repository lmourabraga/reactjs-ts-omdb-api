import React, { useState } from 'react';

import styles from '../styles/Home.module.sass'

const Home = () => {

    const [submitAnimate, setSubmitAnimate] = useState(false);

    return (
        <>
            <div className={styles.container}>
                <form className={submitAnimate ? `${styles.flexForm} animateForm` : `${styles.flexForm}`}>
                    <input className={styles.input} placeholder="Procure seu Filme" type="text" required />
                    <button className={styles.button} type="submit" onClick={() => setSubmitAnimate(true)}>Buscar</button>
                </form>
            </div>
        </>
    );
}

export default Home;