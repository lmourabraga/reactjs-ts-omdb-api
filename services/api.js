import axios from 'axios';

export default axios.create({
  baseURL: 'http://omdbapi.com/?s=',
});