/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import LocalService from './core/service/locals';

const instance = axios.create({
  baseURL: 'https://api.staging.aca.so',
  headers: {
    'Content-type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = LocalService.getLocalAccessToken();
    if (token && config.headers) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default instance;
