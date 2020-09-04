import { useSelector, useDispatch } from 'react-redux';

import { StoreState } from '../store/createStore';
import { findMoviesRequest } from '../store/modules/findMovies/actions';

import Link from 'next/link';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import styles from '../styles/List.module.sass';

interface ApiResponse{
    imdbID: string;
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
}

const List: React.FC = () => {

    const { title, page, results } = useSelector((state: StoreState) => state.findMovies);


    const dispatch = useDispatch();

    function handlePreviousPage() {

        if (page > 1) {

            if (window.innerWidth < 960) {
                window.scrollTo(0, 0);
            }

            dispatch(findMoviesRequest({
                title: title,
                page: page - 1
            }));
        }
    }

    function handleNextPage() {

        if (window.innerWidth < 960) {
            window.scrollTo(0, 0);
        }

        dispatch(findMoviesRequest({
            title: title,
            page: page + 1
        }));
    }

    return (
        <div className={styles.container}>

            <div className={styles.containerResults}>
                {results.map((movie:ApiResponse) => {

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
                <div className={styles.controllers}>
                    <button className={styles.previousPage} onClick={() => handlePreviousPage()}>
                        <MdKeyboardArrowLeft />
                    </button>
                    <button className={styles.nextPage} onClick={() => handleNextPage()}>
                        <MdKeyboardArrowRight />
                    </button>
                </div>
            </div>
        </div>

    );
}

export default List;