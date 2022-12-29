/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import LocalService from './core/service/locals';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000',
  headers: {
    'Content-type': 'application/json',
  },
});
// adicionando o token no header para todas as requisições
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
