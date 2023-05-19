import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:1337/api/',
});

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    console.log('config', config);
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default instance;
