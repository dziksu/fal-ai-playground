import axios from 'axios';

const httpClient = axios.create({
  baseURL: '/',
});

export { httpClient };
