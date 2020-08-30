import axios from 'axios';

export default axios.create({
  baseURL: 'http://www.omdbapi.com/?apikey=1eda9dfa&type=movie&s=',
});

