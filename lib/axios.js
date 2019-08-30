import axios from 'axios';

const instance = axios.create({
  baseURL: location.hostname === 'localhost' ? '//localhost:3000/api/v1/' : '//xiedaimala.com/api/v1/'
});

export default instance