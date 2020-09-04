import type { AppProps } from 'next/app'
import Head from 'next/head';

import { Provider } from 'react-redux';
import { store } from '../store'

import '../styles/global.sass';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <link rel="shortcut icon" href="./images/fav.png" />
        <title>B2W Digital - OMDB API</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}

export default CustomApp;