import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.staging.aca.so',
  headers: {
    'Content-type': 'application/json',
  },
});
